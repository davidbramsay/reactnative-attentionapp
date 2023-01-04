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
import SurveyPARTThriving from '../Surveys/Questions/SurveyPARTThriving';
import SurveyPARTTellegen from '../Surveys/Questions/SurveyPARTTellegen';
import SurveyPARTBig5 from '../Surveys/Questions/SurveyPARTBig5';

function LabStartSurvey(props){

    const [thrivingResults, setThrivingResults] = useState([]);	
    const [tellegenResults, setTellegenResults] = useState([]);	
    const [big5Results, setBig5Results] = useState([]);	
    const [demographicsResults, setDemographicsResults] = useState([]);	
    const [flowBackgroundResults, setFlowBackgroundResults] = useState([]);	
    const [empaticaTime, setEmpaticaTime] = useState("");	


    return (
	<>
	    <View style={{width:"100%", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
		    <Text style={{fontWeight:'bold', padding:15}}> Lab Intro Survey</Text>
	    </View>

	    <ScrollView keyboardShouldPersistTaps='handled'>
	    
	    <Text style={{textAlign:'center'}}> Welcome!  Please make sure you have filled out a consent form to start! Then we'll learn how to put on our wearables: </Text>

	    <View style={{padding:10}}/>
	    
	    <EmpaticaCue start={true} setter={setEmpaticaTime}/>

	    <View style={{width:"100%", paddingTop:40, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
		    <Text style={{fontWeight:'bold', padding:15}}> Initial Questions</Text>
	    </View>

	    <SurveyPARTDemographics setter={setDemographicsResults}/>
	    <SurveyPARTFlowBackground setter={setFlowBackgroundResults}/>
	    
	    <View style={{width:"100%", paddingTop:40, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
		    <Text style={{fontWeight:'bold', padding:15}}> Personality Assessment</Text>
	    </View>

	    <SurveyPARTBig5 setter={setBig5Results}/>
	    <SurveyPARTTellegen setter={setTellegenResults}/>

	    <View style={{width:"100%", paddingTop:40, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
		    <Text style={{fontWeight:'bold', padding:15}}> Well-being</Text>
	    </View>

	    <SurveyPARTThriving setter={setThrivingResults}/>

	    <View style={{width:"100%", paddingTop:40, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
		    <Text style={{fontWeight:'bold', padding:15}}> Demonstration</Text>
	    </View>

	    <Text style={{textAlign:'center'}}> Now let the administrator know you are done and they will walk you through a demonstration of the task.</Text>

	    <View style={{...styles.separator, padding:20}} />

            <View style={{width:'100%', height:50, padding:5, justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {props.onSubmitted([
			'empaticaStartTime', empaticaTime,
		    	...demographicsResults,
		    	...flowBackgroundResults,
		    	...big5Results,
		    	...tellegenResults,
		    	...thrivingResults,
		    ], false);}}>
                <Text style={{width:'100%', padding:10, paddingTop:5, height: 30, borderColor: '#7a42f4', 
			      borderWidth: 1, textAlign:'center', alignItems:'center', justifyContent:'center'}}>
                    Start Demo
                </Text>
            </TouchableOpacity>
            </View>


	    </ScrollView>
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
