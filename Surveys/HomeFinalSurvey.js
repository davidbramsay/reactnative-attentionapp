//Surveys/HomeFinalSurvey
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
import SurveyPARTEngagement from '../Surveys/Questions/SurveyPARTEngagement';

function HomeFinalSurvey(props){

    const [scrollEnabled, setScrollEnabled] = useState(true);	
    const [emotionResults, setEmotionResults] = useState([]);	
    const [flowResults, setFlowResults] = useState([]);	
    const [engagementResults, setEngagementResults] = useState([]);	
    const [startSurveyTime, setStartSurveyTime] = useState("");	

    function handleActivityDone(){
	setStartSurveyTime(new Date().toLocaleString());
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
	    } else if (item.type=='surveypartengagement'){
		return(	    
		    <SurveyPARTEngagement setter={setEngagementResults}/>
		)
	    } else if (item.type=='submit'){
		 return(<>   
		 <View style={{...styles.separator, padding:20}} />

		 <View style={{width:'100%', height:50, padding:5, justifyContent:'center', alignItems:'center'}}>
		 <TouchableOpacity
		 activeOpacity={0.5}
		 onPress={() => {props.onSubmitted([
		     'startSurveyTime', startSurveyTime,	 
		 	...flowResults,
		     ...emotionResults,
			...engagementResults 
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
	    <View style={{width:"100%", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
		    <Text style={{fontWeight:'bold', padding:15}}> Session End Survey</Text>
	    </View>
 
	    <FlatList keyboardShouldPersistTaps='handled' scrollEnabled={scrollEnabled}
		data={[
		   {type:"surveypartemotion"},
		   {type:"surveypartflow"},
		   {type:"surveypartengagement"},
		   {type:"submit"}
		]}
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

export default React.memo(HomeFinalSurvey);
