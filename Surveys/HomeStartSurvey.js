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


import ChecklistItem from '../Surveys/Questions/ChecklistItem';
import RecordingCue from '../Surveys/Questions/RecordingCue';
import SurveyPARTEmotion from '../Surveys/Questions/SurveyPARTEmotion';


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
		    <Text style={{fontWeight:'bold', padding:15}}> Intro Survey</Text>
	    </View>

	    <Text style={{padding:10}}></Text>

	    <FlatList
		data={[
		    {type:"text", text:"Welcome!  We'll start the session with a simple survey:"},
		    {type:"surveypartemotion"},	
		    {type:"text", text:""},
		    {type:"text", text:"Click below to start!"},
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
