//Surveys/HomeStartSurvey
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


import EmpaticaCue from '../Surveys/Questions/EmpaticaCue';
import ChecklistItem from '../Surveys/Questions/ChecklistItem';
import RecordingCue from '../Surveys/Questions/RecordingCue';
import SurveyPARTEmotion from '../Surveys/Questions/SurveyPARTEmotion';

import Video from 'react-native-video';
import vidwearable from '../phdstudy_3a2_empatica_v2.mp4';
import vidtetris from '../phdstudy3b_app_tetris.mp4';
import vidstart from '../phdstudy3c_starttest_v2.mp4';

function HomeStartSurvey(props){

    const [empaticaTime, setEmpaticaTime] = useState("");	
    const [recordingTime, setRecordingTime] = useState("");	
    const [dt, setDt] = useState(new Date().toLocaleString());
    const [emotionResults, setEmotionResults] = useState([]);	

    useEffect(() => {
	    let secTimer = setInterval( () => {
	      setDt(new Date().toLocaleString())
	    },1000)

	    return () => clearInterval(secTimer);
    }, []);	

    const renderItem = ({ item }) => {
	    if (item.type=='text'){
		return(	    
		     <>	
		     <Text style={{textAlign:'center'}}> {item.text} </Text>
		     <View style={{padding:10}}/>
		     </>	
	        )
	    } else if (item.type=='vid-wearables'){
		return(
		     <Video source={vidwearable} paused={true} controls={true} style={{width:"100%", height:220, marginTop:0, marginBottom:0}}/>
		)
	    } else if (item.type=='vid-tetris'){
		return(
		     <Video source={vidtetris} paused={true} controls={true} style={{width:"100%", height:220, marginTop:0, marginBottom:30}}/>
		)
	    } else if (item.type=='vid-start'){
		return(
		     <Video source={vidstart} paused={true} controls={true} style={{width:"100%", height:220, marginTop:0, marginBottom:0}}/>
		)
	    } else if (item.type=='section'){
		return(	    
		    <View style={{width:"100%", paddingTop:40, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
			    <Text style={{fontWeight:'bold', padding:15}}> {item.text}</Text>
		    </View>
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
	    } else if (item.type=='surveypartemotion'){
		return(	    
		    <SurveyPARTEmotion shorten={false} setter={setEmotionResults}/>
	        )
	    } else if (item.type=='submit'){
		return(	    
		    <>	
		    <Text style={{textAlign:'center'}}> The time is now:</Text>

		    <View style={{width:"100%", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
			    <Text style={{fontWeight:'bold', padding:15}}> {dt} </Text>
		    </View>

		    <View style={{...styles.separator, padding:20}} />

		    <View style={{width:'100%', height:50, padding:5, justifyContent:'center', alignItems:'center'}}>
		    <TouchableOpacity
		    activeOpacity={0.5}
		    onPress={() => {props.onSubmitted([
				'empaticaStartTime', empaticaTime,
				...emotionResults,
				'recordingStartTime', recordingTime,
				'LastSeenTimeStartSurvey', dt
			    ], false);}}>
			<Text style={{width:'100%', padding:10, paddingTop:5, height: 30, borderColor: '#7a42f4', 
				      borderWidth: 1, textAlign:'center', alignItems:'center', justifyContent:'center'}}>
			    Start Tetris
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
		    <Text style={{fontWeight:'bold', padding:15}}> Home Intro Survey</Text>
	    </View>

	    <Text style={{padding:10}}></Text>

	    <FlatList
		data={[
		    {type:"text", text:"Welcome!  You'll being playing Tetris and then engaging in your chosen flow activity today. Before you do, let's answer a few simple questions:"},
		    {type:"surveypartemotion"},	
		    {type:"section", text:"Finish Getting Started!"},
		    {type:"text", text:"This video will walk you through putting on the wearables-- watch it, and then follow the steps it describes in the checklist below."},
		    {type:"vid-wearables"},	
		    {type:"section", text:"Getting Started Checklist"},
		    {type:"checklist", boldtext:"1. My clocks are hidden.", text:"(Use the provided post-its if necessary.)"},	
		    {type:"checklist", boldtext:"2. My notifications are silent.", text:""},	
		    {type:"checklist", boldtext:"3. The watch is on my dominant hand.", text:"(It is always on.)"},	
		    {type:"checklist", boldtext:"4. The glasses are connected and on", text:"by sliding the button back towards the temple; its LEDs will flash when it is on."},	
		    {type:"empaticacue"},
		    {type:"section", text:"Openning Tetris"},
		    {type:"text", text:"For the first task, you will be playing tetris.  Let's get set up with Tetris."},	
		    {type:"vid-tetris"},	
		    {type:"checklist", boldtext:"1. Turn on the iPad and open 'Falling Lightblocks'.", text:""},	
		    {type:"checklist", boldtext:"2. Put on headphones.", text:"(Turn them on by pressing forward on the right side switch)"},	
		    {type:"checklist", boldtext:"3. Turn on the controller by pressing and holding the top 'X' button.", text:"(It should light up and connect. If it's not responding, use Bluetooth settings in control panel)"},	
		    {type:"recordingcue"},			
		    {type:"text", text:""},
		    {type:"section", text:"You're ready!"},
		    {type:"text", text:"You will now play tetris for a short session.  Once you have noticed the light has changed twice, you can end the activity at any time.  Then you'll be asked to fill out a survey. Watch the following video before starting."},
		    {type:"vid-start"},	
		    {type:"text", text:""},
		    {type:"text", text:"Click below to get started!"},
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

export default React.memo(HomeStartSurvey);
