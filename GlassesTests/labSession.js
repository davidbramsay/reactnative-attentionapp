/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//whenever there is a light notice, survey/guess time- submit or submit and end session end worksession? longer survey with free text,  save file and send.
// on end, survey with free text
//on start, start log, log 'working_session'
//
// startLogging('WORKING'), stopLogging(), sendToStorage()-- after sendToStorage, log 'continue' or something 
// dataLog(), log()


//This will now be the 'standard' measurement script. (fixed at 3 min).

import {decode as atob, encode as btoa} from 'base-64'

import React from "react";
import styles from "../Styles";

import StatusView from "../StatusView.js";
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

import Modal from "react-native-modal";
import { AppState } from 'react-native';

import HomeStartSurvey from "../Surveys/HomeStartSurvey";
import HomeFinalSurvey from "../Surveys/HomeFinalSurvey";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList	
} from "react-native";



const HomeSessionState = ['off', 'session', 'complete'];

const MIN_TRANSITION_MIN=1;

function Timer(callback, delay, minimum=0){
    var timerId, start, remaining = delay;

    this.pause = function() {
        clearTimeout(timerId);
        timerId = null;
        remaining -= Date.now() - start;
	console.log('[TIMER] Paused with ' + (remaining/(60*1000)) + ' min left.');    
    };

    this.resume = function() {
        if (timerId) {
            return;
        }

        start = Date.now();
        timerId = setTimeout(callback, Math.max(remaining, minimum));

	if (remaining < minimum){    
		console.log('[TIMER] Started with ' + MIN_TRANSITION_MIN + ', too short left: ' + (remaining/(60*1000)) + ' min. ' + Math.max(remaining, minimum)/(60*1000));    
	} else {
		console.log('[TIMER] Started with remaining (more than ' + MIN_TRANSITION_MIN + ' min left): ' + (remaining/(60*1000)) + ' min. ' + Math.max(remaining, minimum)/(60*1000));    
	}
    };

    this.clear = function(){
	clearTimeout(timerId);
	timerId = null;    
	console.log('[TIMER] Cleared with ' + (remaining/(60*1000)) + ' min left.');    
    }

    this.resume();

}

export default class LabSession extends React.Component {
  constructor(props) {
    super(props);
    this.state = {intensity: 170, startBlue: 70, bIntensity: 50, notes: '',
                  mainInterval: 12.5, stepInterval: 300, testRunning: false, 
	    	  currentState:0, sessionNum:1,
	          popover: true, uploading: false};
    this.timer = null;

                    // 0, 0, 0, 0,lB,lG, 0, 0,lR, 0, 0, 0, 0,rB,rG, 0, 0,rR]
    this.lightState = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.rg_toggle = true;
    this.transitioning= false;
    this.transitioned= false;
    this.disconnected = false;	  
    this.appStateSub = AppState.addEventListener( 'change', nextAppState => {
	    console.log('app state sub called: ' + nextAppState);	  
	    switch(nextAppState){
		case 'inactive':
		    console.log('case inactive');	  
		    if (this.state.testRunning){
			this.pauseTest();
			this.disconnected = true;
		    }
		break;	
		case 'active':
		    console.log('case active');	  
		    if (!this.state.testRunning && this.disconnected && this.props.glassesStatus == 'Connected.'){
			this.resumeTest();
			this.disconnected = false;
		    }
		break;	
	    }
    });
  }

  componentDidUpdate = (nextProps) => {

    /*	  
    console.log('triggering rerender');	  

    for (const [key, value] of Object.entries(nextProps)) {
	  if (value != this.props[key]){  
		  console.log('CHANGE DETECTED: ' + key);
	 	  console.log(value);
	  }
    }
    */

    //on change of glassesStatus or watchStatus...	  
    if (nextProps.glassesStatus !== this.props.glassesStatus || nextProps.watchStatus !== this.props.watchStatus) {
	console.log('Got status update');
	console.log(nextProps.glassesStatus);    
	console.log(this.props.glassesStatus);    
	console.log(this.disconnected);    
        //if glasses are disconnected and we're running a test, pause	    
	if (this.state.testRunning && this.props.glassesStatus != 'Connected.'){
		console.log('vidsession: running and glass  disconnect; pause');
		this.pauseTest();
		this.disconnected = true;
	}

        //if glasses are connected and we've had a disconnect event, resume		    
	if (!this.state.testRunning && this.disconnected && this.props.glassesStatus == 'Connected.'){
		console.log('vidsession: prev disconnect paused us and glasses reconnected; unpause');
		this.resumeTest();
		this.disconnected = false;
	}

	//if we're not scanning and haven't connected to both glasses/watch, scan	  
	if(!this.props.scanning && (this.props.glassesStatus != 'Connected.' || this.props.watchStatus != 'Connected.')){
		console.log('vidsession: we are not scanning but we should be now');
		this.props.setScanning(true);
	}

	//if we're scanning but have connected to both glasses/watch, stop scan	  
	if(this.props.scanning && (this.props.glassesStatus == 'Connected.' && this.props.watchStatus == 'Connected.')){
		console.log('vidsession: we are scanning but we now don\'t need to');
		this.props.setScanning(false);
	}
    }
  }	

  async componentWillUnmount(){
    console.log('unmount labsession');	  
    if (this.state.testRunning){
      this.timer.clear();
      await this.props.dataLog('u', ['VIDGAME', 'STOP_TEST']);
      try {	  
	      this.setLightOff();
      }catch(e){
	console.log('pause came from disconnect; cannot set LEDs');
      }
      console.log('TEST ABORTED');
      await this.props.stopLogging();	  
    }
    this.appStateSub.remove();	  
    console.log('app state sub removed');	  
  }

  resetLight(){
    let i = this.state.intensity;
    let b = this.state.startBlue;
    this.lightState =   [0,0,0,0,b,i,0,0,0,0,0,0,0,b,i,0,0,0];
    this.props.sendLEDUpdate(this.lightState);
  }

  setLightOff(){
    let i = this.state.intensity;
    this.lightState = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    this.props.sendLEDUpdate(this.lightState);
  }

  moveToBlue(){
    if (this.lightState[5] || this.lightState[8]){ //red or green still on

        if (this.lightState[4] < this.state.intensity + this.state.bIntensity){
            this.lightState[4] +=1;
            this.lightState[13] +=1;
        }

        this.lightState[5] -=1;
        this.lightState[14] -=1;

        this.props.sendLEDUpdate(this.lightState);
        console.log('sent', this.lightState);

    } else {
        console.log('ALREADY BLUE');
        this.props.dataLog('u', ['VIDGAME', 'FINISHED_TRANSITION']);
        this.transitioning = false;
        this.transitioned = true;
    }
  }

  changeColor(){
      console.log('change color');

      if (!this.transitioning && this.state.startBlue == this.lightState[4]){
          this.props.dataLog('u', ['VIDGAME', 'START_TRANSITION']);
          this.transitioning = true;
      }
      if (this.transitioning){
        this.moveToBlue();
        this.timer = new Timer(this.changeColor.bind(this), this.state.stepInterval);
      }
  }

  async feltStimuli(){
      await this.props.dataLog('u', ['VIDGAME', 'NOTICED', 'RGB', this.lightState[8], this.lightState[5], this.lightState[4]]);
      console.log('felt it');
      this.timer.clear();
      this.resetLight();
      this.transitioning = false;
      this.transitioned = false;
      this.setState({popover: true});
  }

  base64ToHex(str) {
    const raw = atob(str);
    let result = '';
    for (let i = 0; i < raw.length; i++) {
        const hex = raw.charCodeAt(i).toString(16);
        result += (hex.length === 2 ? hex : '0' + hex);
    }
    return result.toUpperCase();
  }

  hexToBase64(str) {
    return btoa(str.match(/\w{2}/g).map(function(a) {
        return String.fromCharCode(parseInt(a, 16));
    }).join(""));
  }

  decimalToHex(d, padding=2) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex;
  }

  bytesToHex(bytes) {
    for (var hex = [], i = 0; i < bytes.length; i++) {
      var current = bytes[i] < 0 ? bytes[i] + 256 : bytes[i];
      hex.push((current >>> 4).toString(16));
      hex.push((current & 0xf).toString(16));
    }
    return hex.join("");
  }


  getMainInterval(){
    //return random value between 2 and 3 min
    let mins =  2;
    mins += Math.random();
    return Math.round(mins*60*1000);
  }

  async resumeTest(gamenum){
      console.log('RESUME TEST');

      if (this.props.glassesStatus == 'Connected.'){	  

      //only resume when popover is false, otherwise leave paused	  
      if (this.state.popover == false){

          await this.props.startLogging('RESUME');	  

	      await this.props.dataLog('u', ['VIDGAME',
		  'START_TEST',
		  JSON.stringify({stepInterval: this.state.stepInterval}),
		  JSON.stringify({startBlue: this.state.startBlue}),
		  JSON.stringify({intensity: this.state.intensity}),
		  JSON.stringify({bIntensity: this.state.bIntensity})
	      ]);

	      this.setState({testRunning: true});

	      if (this.transitioning || this.transitioned) {	      
		      console.log('resuming test, after failure during or after transition; new timer');
		      this.timer.clear();
		      this.timer = new Timer(this.changeColor.bind(this), MIN_TRANSITION_MIN*60*1000, MIN_TRANSITION_MIN*60*1000);
		      this.transitioning = false;
		      this.transitioned = false;
	      } else {
		      console.log('resuming test, arming remaining transition');
		      this.timer.resume();
	      }

	      this.resetLight();

      } else {
	console.log('CANNOT RESUME TEST, POPOVER TRUE');
      }
      } else { //no glasses connection, don't start test
	      console.log('glasses not connected, can\'t resume test');
	      this.props.setScanning(true);
	      this.disconnected = true;
      }

  }

  async pauseTest(){
      if (this.state.popover){
	      await this.props.dataLog('u', ['VIDGAME', 'STOP_TEST']);
      }else{
	      this.timer.pause();
	      this.setState({popover: true, uploading:true, testRunning: false});
	      await this.props.dataLog('u', ['VIDGAME', 'STOP_TEST']);
	      try {	  
		      this.setLightOff();
	      }catch(e){
		console.log('pause came from disconnect; cannot set LEDs');
	      }
	      console.log('TEST ABORTED');
	      await this.props.stopLogging();	  
	      this.setState({popover: false, uploading:false});
      }
  }

  toggleTest(){
    if (this.state.testRunning){
        this.pauseTest();
    }else{
        this.resumeTest();
    }
  }

  async startTest(){
      console.log('START TEST');

      console.log('armed normal transition');

      //EDIT: RANDOM VS FIXED
      this.timer = new Timer(this.changeColor.bind(this), this.getMainInterval(), MIN_TRANSITION_MIN*60*1000);

      if (this.props.glassesStatus == 'Connected.'){	  
	      console.log('glasses connected, can start test');
	      this.resetLight();
	      await this.props.dataLog('u', ['VIDGAME',
		  'START_TEST',
		  JSON.stringify({stepInterval: this.state.stepInterval}),
		  JSON.stringify({startBlue: this.state.startBlue}),
		  JSON.stringify({intensity: this.state.intensity}),
		  JSON.stringify({bIntensity: this.state.bIntensity})
	      ]);

	      this.setState({testRunning: true});

      } else { //no glasses connection, don't start test
	      console.log('glasses not connected, can\'t start test');
	      this.props.setScanning(true);
	      this.disconnected = true;
	      await this.pauseTest();
      }
  }

  async writeSurveyResults(surveyResults){
	for (var i=0; i<surveyResults.length-1; i+=2){
		await this.props.dataLog('u', ['VIDGAME', 'SURVEY', surveyResults[i], surveyResults[i+1]]);
	}
	return;  
  }

  async surveyDone(surveyResults) {
	
	var time = Date.now();  

	console.log('Game State = ' + HomeSessionState[this.state.currentState]);  
	console.log(surveyResults);
	  
	switch(HomeSessionState[this.state.currentState]){
		case 'off':
			//open initial file, write survey data, start session (start timer, turn on light)
		        this.setState({uploading: true, testRunning: false});
		      	await this.props.startLogging('S1');	  
            console.log('a');
			await this.props.dataLog('u',['VIDGAME', 'SURVEY', time, 'StartSurvey']);
            console.log('b');
			await this.writeSurveyResults(surveyResults);
            console.log('c');
			this.setState((prevState) => ({popover: false, uploading:false, currentState:prevState.currentState+1}));
			await this.startTest();
			break;
		case 'session':
			//write survey data, close file and continue file, write 'continuation' log, restart session
		        this.setState({uploading: true, testRunning: false});
			await this.props.dataLog('u',['VIDGAME', 'SURVEY', time, 'SessionSurvey']);
			await this.writeSurveyResults(surveyResults);
            await this.props.stopLogging();
			this.setState((prevState) => ({uploading:false, sessionNum:prevState.sessionNum+1, currentState:prevState.currentState+1}));
			break;
	}
  }

  async keepGoing(name){
        console.log('keepgoing called ' + name);
        await this.props.startLogging(name);  
        this.setState((prevState) => ({popover:false, currentState:1}));
        await this.startTest();
  }


  render() {
    console.log('rerender');	  
    return (
      <View style={{flex:1}}>
	 <NavCallbackComponent {...this.props}/>   

	 <Modal isVisible={this.state.popover} propogateSwipe backdropOpacity={1.0} backdropColor="white">
            {this.state.uploading ?
	    <>
                <Text style={{width:'100%', padding:10, paddingTop:5, height: 30, textAlign:'center', alignItems:'center', justifyContent:'center'}}>
                    UPLOADING... please wait. 
                </Text>
	    </>:<>
		{this.state.currentState==0 && <HomeStartSurvey    
		    onSubmitted={(surveyResults) => {this.surveyDone(surveyResults);}}/>}
		{this.state.currentState==1 && <HomeFinalSurvey
		    onSubmitted={(surveyResults) => {this.surveyDone(surveyResults);}}/>}
	       {this.state.currentState==2 ? <>
			<Text style={{width:'100%', padding:10, paddingTop:5, textAlign:'center', alignItems:'center', justifyContent:'center'}}>
			   You are about to start session {this.state.sessionNum}. Click here to begin the next session:{"\n\n"} 
			</Text>
			<Button title="Start Another Session" onPress={() => {this.keepGoing('S' + this.state.sessionNum)}}/>
			<Text style={{width:'100%', padding:10, paddingTop:5, textAlign:'center', alignItems:'center', justifyContent:'center'}}>
			   Click here if you have completed the experiment:{"\n\n"} 
			</Text>
			<Button title="Done with Experiment" onPress={() => {this.setState({popover:false, currentState: 0})}}/>
	       </>:<></>}
	   </>}
        </Modal>


	<ScrollView>
        <View style={styles.viewContainer}>
          <View style={{height:115, width:'100%'}}>

          <StatusView
                glassesStatus={this.props.glassesStatus}
                watchStatus={this.props.watchStatus}
                firebaseSignedIn={this.props.firebaseSignedIn}
                username={this.props.username}
                setUsername={this.props.setUsername}
	        pic={this.props.scanning?"error":"bluetooth"} 
	        connect={this.props.connect}/>
        </View>


        <View style={{width:'100%', height:200, flexGrow:1, flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>

        <TouchableOpacity
          style={{...styles.bigbuttonStyleLarge, opacity:this.state.testRunning?1:0.3}}
	  disabled={!this.state.testRunning}  
          activeOpacity={0.5}
          onPress={() => this.feltStimuli()}>
	      <Image source={this.state.currentState==6 ? require('../icons/checked.png') : require('../icons/shocked.png')}
                style={{width:'100%', height: undefined, aspectRatio:1}}/>
        </TouchableOpacity>
        </View>

        <View style={{width:'100%', flexGrow:1, flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Text style={{margin:15, fontSize:15}}> Click the face when you notice the light is blue.</Text>
        </View>

        <View style={{width:'100%', flexGrow:1, flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>

        <View style={{width:'100%', height:70, flexGrow:1, flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>

        <TouchableOpacity
          style={[styles.bigbuttonStyleLarge, {padding:10, marginRight:5}]}
          activeOpacity={0.5}
          onPress={() => this.toggleTest()}>
            {this.state.testRunning ?
                <Image source={require('../icons/file_progress.png')}
                    style={{width:'100%', height: undefined, aspectRatio:1}}/>:
                <Image source={require('../icons/file_stopped.png')}
                    style={{width:'100%', height: undefined, aspectRatio:1}}/>}
        </TouchableOpacity>

	</View>
        {this.state.testRunning ?
            <Text style={{paddingRight:75, fontSize:20, color:'green'}}> Test In Progress...</Text>:
            <Text style={{paddingRight:75, fontSize:20, color:'red'}}> Test Paused.</Text>
        }
        </View>

        <View style={styles.separator} />

        <View style={{width:'90%', minHeight:150, paddingTop:50, flexGrow:1, flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

		<Text style={{fontStyle:"italic", width:'100%', textAlign:'justify'}}>For connection issues, tap resync or restart the glasses.  For problems that persist call David at 703-347-1376.  Note issues below.	
		</Text>
            <TextInput style={{ backgroundColor: '#ededed', height: 34, width: '100%', margin:5, borderColor: '#7a42f4', borderWidth: 1}} autoCapitalize = 'none'
                value ={this.state.notes}
                multiline={true}
                onChangeText = {text => this.setState({notes:text})}/>
        </View>



        </View>
      </ScrollView>
</View>
    )
  }
};


function NavCallbackComponent(props){

    useFocusEffect(
	    React.useCallback(() => {
		console.log('CALLED WORKSESSION FOCUS');

		if (!props.scanning && (props.watchStatus != 'Connected.' || props.glassesStatus != 'Connected.')){
			console.log('glasses or watch not connected and not scanning; start');
			props.setScanning(true);
		}

		if (props.scanning && props.watchStatus == 'Connected.' && props.glassesStatus == 'Connected.'){
			  console.log('scanning but glasses and watch connected; stop');
			  props.setScanning(false);
		}

	    }, [])
    );

    return null;
}
