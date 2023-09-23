//Surveys/TestSessFinalSurvey
//
// Survey after training period.
//
//

import React, { useEffect, useState, useRef } from "react";

import {
  SafeAreaView,
  StyleSheet,
  FlatList,	
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  TextInput,
  TextStyle,	
  Image,
} from "react-native";

import SurveyPARTEmotion from '../Surveys/Questions/SurveyPARTEmotion';
import SurveyPARTFlow from '../Surveys/Questions/SurveyPARTFlow';
import SurveyPARTThriving from '../Surveys/Questions/SurveyPARTThriving';
import ChecklistItem from '../Surveys/Questions/ChecklistItem';
import EmpaticaCue from '../Surveys/Questions/EmpaticaCue';

function TestSessFinalSurvey(props){

    const [scrollEnabled, setScrollEnabled] = useState(true);	
    const [emotionResults, setEmotionResults] = useState([]);	
    const [flowResults, setFlowResults] = useState([]);	
    const [thrivingResults, setThrivingResults] = useState([]);	
    const [empaticaTime, setEmpaticaTime] = useState("");	
    const [startSurveyTime, setStartSurveyTime] = useState("");	
    const [donePlaying, setDonePlaying] = useState(false);	

    function handleActivityDone(){
	setStartSurveyTime(new Date().toLocaleString());
	setDonePlaying(true);
    }

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
	    } else if (item.type=='checklist'){
		return(	    
		    <ChecklistItem boldtext={item.boldtext} text={item.text}/>
	        )
	    } else if (item.type=='empaticacue'){
		return(	    
	       	    <EmpaticaCue start={false} setter={setEmpaticaTime}/>
	        )
	    } else if (item.type=='surveypartflow'){
		return(	    
		 <SurveyPARTFlow setScrollEnabled={setScrollEnabled} setter={setFlowResults}/>
		)
	    } else if (item.type=='surveypartemotion'){
		return(	    
		 <SurveyPARTEmotion shorten={true} setter={setEmotionResults}/>
		)
	    } else if (item.type=='surveypartthriving'){
		return(	    
		    <SurveyPARTThriving setter={setThrivingResults}/>
		)
	    } else if (item.type=='submit'){
		 return(<>   
		 <View style={{...styles.separator, padding:20}} />

		 <View style={{width:'100%', height:50, padding:5, justifyContent:'center', alignItems:'center'}}>
		 <TouchableOpacity
		 activeOpacity={0.5}
		 onPress={() => {props.onSubmitted([
		     'startSurveyTime', startSurveyTime,	 
		     'empaticaEndTime', empaticaTime,
		 	...flowResults,
		     ...emotionResults,
			...thrivingResults 
		 ], false);}}>
		 <Text style={{width:'100%', padding:10, paddingTop:5, height: 30, borderColor: '#7a42f4', 
			      borderWidth: 1, textAlign:'center', alignItems:'center', justifyContent:'center'}}>
                    Submit
                 </Text>
                 </TouchableOpacity>

                 </View>
		 </>)

	    }
    }

    return (
	<>
	    {donePlaying ?
	    <>
	    <View style={{width:"100%", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
		    <Text style={{fontWeight:'bold', padding:15}}> Test Session End Survey</Text>
	    </View>
 
	    <FlatList keyboardShouldPersistTaps='handled' scrollEnabled={scrollEnabled}
		data={[
		   {type:"surveypartflow"},
		   {type:"surveypartemotion"},
		   {type:"surveypartthriving"},
		   {type:"empaticacue"},
		   {type:"submit"}
		]}
	        renderItem={renderItem}
	    />


		    

	   </>:<>
		 <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold', padding:10}}>Continue your Activity if you want!</Text>

		 <Text style={{textAlign:'center', padding:10}}> When you're ready to move on, hit the button below. </Text>

		 <View style={{...styles.separator, padding:20}} />

		 <View style={{width:'100%', height:50, padding:5, justifyContent:'center', alignItems:'center'}}>
		 <TouchableOpacity
		 activeOpacity={0.5}
		 onPress={handleActivityDone}>
		 <Text style={{width:'100%', padding:10, paddingTop:5, height: 30, borderColor: '#7a42f4', 
			      borderWidth: 1, textAlign:'center', alignItems:'center', justifyContent:'center'}}>
                    I'm done with the activity!
                 </Text>
                 </TouchableOpacity>

                 </View>
	   </>}

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

export default React.memo(TestSessFinalSurvey);
