//Surveys/LabStartSurvey
//
// Survey for start of lab session.
// OnSubmitted returns array of question followed by answer
//
//

import React, { useEffect, useState, useRef } from "react";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,	
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  TextInput,
  TextStyle,	
  Image,
} from "react-native";


import SurveyPARTDemographics from '../Surveys/Questions/SurveyPARTDemographics';
import SurveyPARTFlowBackground from '../Surveys/Questions/SurveyPARTFlowBackground';
import EmpaticaCue from '../Surveys/Questions/EmpaticaCue';
import ChecklistItem from '../Surveys/Questions/ChecklistItem';
import RecordingCue from '../Surveys/Questions/RecordingCue';
import SurveyPARTThriving from '../Surveys/Questions/SurveyPARTThriving';
import SurveyPARTTellegen from '../Surveys/Questions/SurveyPARTTellegen';
//import SurveyPARTBig5 from '../Surveys/Questions/SurveyPARTBig5';




function LabStartSurvey(props){

    const [thrivingResults, setThrivingResults] = useState([]);	
    const [tellegenResults, setTellegenResults] = useState([]);	
    const [big5Results, setBig5Results] = useState([]);	
    const [demographicsResults, setDemographicsResults] = useState([]);	
    const [flowBackgroundResults, setFlowBackgroundResults] = useState([]);	
    const [empaticaTime, setEmpaticaTime] = useState("");	
    const [recordingTime, setRecordingTime] = useState("");	

    const renderItem = ({ item }) => {
	    if (item.type=='text'){
		return(	    
		     <>	
		     <Text style={{textAlign:'center'}}> {item.text} </Text>
		     <View style={{padding:10}}/>
		     </>	
	        )
	    } else if (item.type=='section'){
		return(	    
		    <View style={{width:"100%", paddingTop:40, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
			    <Text style={{fontWeight:'bold', padding:15}}> {item.text}</Text>
		    </View>
	        )
	    } else if (item.type=='text-stop'){
		return(	    
		     <>	
		    <View style={{width:"100%", paddingTop:40, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
			<Image source={require('../icons/traffic-sign.png')}
			    style={{width:'30%', padding:5, height: undefined, aspectRatio:1}}/>
			<Text style={{width:'65%', padding:15, textAlign:'justify'}}> {item.text}</Text>
		    </View>
		     <View style={{padding:10}}/>
		     </>	
	        )
	    } else if (item.type=='checklist'){
		return(	    
		    <ChecklistItem boldtext={item.boldtext} text={item.text}/>
	        )
	    } else if (item.type=='empaticacue'){
		return(	    
	       	    <EmpaticaCue start={true} setter={setEmpaticaTime}/>
	        )
	    } else if (item.type=='recordingcue'){
		return(	    
	       	    <RecordingCue setter={setRecordingTime}/>
	        )
	    } else if (item.type=='surveypartdemographics'){
		return(	    
		    <SurveyPARTDemographics setter={setDemographicsResults}/>
		)
	    } else if (item.type=='surveypartflowbackground'){
		return(	    
		    <SurveyPARTFlowBackground setter={setFlowBackgroundResults}/>
		)
	    //} else if (item.type=='surveypartbig5'){
	    //	return(	    
	    //	    <SurveyPARTBig5 setter={setBig5Results}/>
            //	)
	    } else if (item.type=='surveyparttellegen'){
		return(	    
		    <SurveyPARTTellegen setter={setTellegenResults}/>
		)
	    } else if (item.type=='surveypartthriving'){
		return(	    
		    <SurveyPARTThriving setter={setThrivingResults}/>
		)
	    } else if (item.type=='submit'){
		return(	    
		    <>	
		    <View style={{...styles.separator, padding:20}} />

		    <View style={{width:'100%', height:50, padding:5, justifyContent:'center', alignItems:'center'}}>
		    <TouchableOpacity
		    activeOpacity={0.5}
		    onPress={() => {props.onSubmitted([
				'empaticaStartTime', empaticaTime,
				'recordingStartTime', recordingTime,
				...demographicsResults,
				...flowBackgroundResults,
				//...big5Results,
				...tellegenResults,
				...thrivingResults,
			    ], false);}}>
			<Text style={{width:'100%', padding:10, paddingTop:5, height: 30, borderColor: '#7a42f4', 
				      borderWidth: 1, textAlign:'center', alignItems:'center', justifyContent:'center'}}>
			    Start Demo
			</Text>
		    </TouchableOpacity>
		    </View>
		    </>	
		)
	    }
    };

    return (
	<>
	    <View style={{width:"100%", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
		    <Text style={{fontWeight:'bold', padding:15}}> Lab Intro Survey</Text>
	    </View>

	    <Text style={{padding:10}}></Text>

	    <FlatList
		data={[
		    {type:"text", text:"Welcome!  Please make sure you have filled out a consent form to start! Then we'll start with a thorough entrance survey:"},
		    {type:"section", text:" Initial Questions"},	
		    {type:"surveypartdemographics"}, 
		    {type:"surveypartflowbackground"}, 
		    {type:"section", text:" Personality Assessment"},	
		    //{type:"surveypartbig5"}, 
		    {type:"surveyparttellegen"}, 
		    {type:"section", text:" Well-being"},	
		    {type:"surveypartthriving"}, 
		    {type:"text-stop", text:"Now let the administrator know you are done and they will walk you through a demonstration of the task."},
		    {type:"section", text:"Getting Started Checklist"},
		    {type:"text", text:"These are the instructions you will follow when you put on the devices at home; please pay attention and ask any questions as you go."},
		    {type:"checklist", boldtext:"1. Make sure this device is connected to wifi.", text:"(Swipe down on upper right corner to reveal control-panel and check if necessary.)"},	
		    {type:"checklist", boldtext:"2. Please Silence Your Notifications.", text:""},	
		    {type:"checklist", boldtext:"3. Put on the watch on your dominant hand.", text:"(It is always on.)"},	
		    {type:"checklist", boldtext:"4. Turn on the glasses", text:"by sliding the button back towards the temple; its LEDs will flash when it is on."},	
		    {type:"checklist", boldtext:"5. Put the glasses on.", text:""},	
		    {type:"empaticacue"},
		    {type:"section", text:"Tetris Demonstration"},
		    {type:"text", text:"For the first task, you will be playing tetris.  Let's get set up with Tetris."},	
		    {type:"checklist", boldtext:"1. Turn on the iPad and open 'Falling Lightblocks'.", text:""},	
		    {type:"checklist", boldtext:"2. Put on headphones.", text:"(Turn them on with the switch on the right side)"},	
		    {type:"checklist", boldtext:"3. Turn on the controller by pressing and holding the home button.", text:"(It should light up and connect. If it's not responding, use Bluetooth settings in control panel)"},	
		    {type:"recordingcue"},			
		    {type:"text", text:""},
		    {type:"text", text:"You will be playing Tetris!  This first session is just a learning session for you to get comfortable. The administrator will now walk you through the next screen and task."},
		    {type:"submit"}]}
	        renderItem={renderItem}
	    />
	</>
    );
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: "center",
    color: "#656565",
  },
  container: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    flex:1,
    flexDirection:'row',
    height: 75,
    padding: 5,
    borderRadius:5,
    borderColor:'gray',
    borderWidth:0,
    justifyContent: 'center'
  },
});

export default React.memo(LabStartSurvey);
