//Surveys/Questions/SurveyPARTEmotion
//
// Survey for start of lab session.
// props setter gives array of answers when updated. 
// props.shorten=true will remove the free text questions.
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

import DropDownPicker from 'react-native-dropdown-picker';
import TimeInput from '@tighten/react-native-time-input';
import Slider from "@react-native-community/slider";

import LikertQ from '../Questions/LikertQ';
import TrueFalseQ from '../Questions/TrueFalseQ';
import EmpaticaCue from '../Questions/EmpaticaCue';
import LongQ from '../Questions/LongQ';
import ShortQ from '../Questions/ShortQ';
import FreeQ from '../Questions/FreeQ';
import ReactionTime from '../Questions/ReactionTime';
import FlowDrawing from '../Questions/FlowDrawing';

const confidenceMap = {
    1: 'very rough',
    2: 'rough (within 15 min)',
    3: 'close (within 5 min)',
    4: 'very close (within 3 min)',
    5: 'precise minute'
};

const flowMap = {
    1: 'intensely slow',
    2: 'slow',
    3: 'no',
    4: 'fast',
    5: 'intensely fast'
};

const durationMap = {
    1: 'none',
    2: 'a little',
    3: 'a lot'
};

const lowMap = {
    1: 'very low',
    2: 'low',
    3: 'average',
    4: 'high',
    5: 'very high'
};

const negMap = {
    1: 'very negative',
    2: 'negative',
    3: 'nuetral',
    4: 'positive',
    5: 'very positive'
};

const disagreeMap = {
    1: 'strongly disagree',
    2: 'disagree',
    3: 'neutral',
    4: 'agree',
    5: 'strongly agree'
};


function SurveyPARTEmotion(props){

    const [reactionTimes, setReactionTimes] = useState([]);	

    const [nowAlertness, setNowAlertness] = useState(-1);	
    const [nowStress, setNowStress] = useState(-1);	
    const [nowEmotion, setNowEmotion] = useState(-1);	
    const [nowEmoIntensity, setNowEmoIntensity] = useState(-1);	

    const [freeEmotion, setFreeEmotion] = useState('');	
    const [freeFood, setFreeFood] = useState('');	
    const [freeAdditional, setFreeAdditional] = useState('');	

    useEffect(() => {
	if (props.shorten){
	    props.setter([
			'nowAlertness', nowAlertness,
			'nowStress', nowStress,
			'nowEmotion', nowEmotion,
			'nowEmoIntensity', nowEmoIntensity,
		    	'reactionTimesMs', String(reactionTimes)
	    ]);
	}else{
	    props.setter([
			'nowAlertness', nowAlertness,
			'nowStress', nowStress,
			'nowEmotion', nowEmotion,
			'nowEmoIntensity', nowEmoIntensity,
			'freeEmotion', freeEmotion,
			'freeFood', freeFood,
			'freeAdditional', freeAdditional,
		    	'reactionTimesMs', String(reactionTimes)
	    ]);
	}
    }, [nowAlertness, nowStress, nowEmotion, nowEmoIntensity, freeEmotion, freeFood, freeAdditional, reactionTimes]);	

    return (
	<>

            <ReactionTime trials={13} val={reactionTimes} setter={setReactionTimes}/>			    

	    <Text style={{paddingTop:10, paddingBottom:10, fontWeight:'bold'}}> How do you feel now? </Text>
	    <LikertQ lowText="very low" highText="very high" text="Alertness" setter={setNowAlertness}/>
	    <LikertQ lowText="very low" highText="very high"  text="Stress" setter={setNowStress}/>
	    <LikertQ lowText="very negative" highText="very postive"  text="Emotional State" setter={setNowEmotion}/>
	    <LikertQ lowText="very low" highText="very high"  text="Emotional Intensity" setter={setNowEmoIntensity}/>
	    {!props.shorten && <>
		    <FreeQ text="Describe your emotional and focus state:" val={freeEmotion} setter={setFreeEmotion}/>
		    <FreeQ text="Recent food, caffeine, exercise, sleep?" val={freeFood} setter={setFreeFood}/>
		    <FreeQ text="Anything else you think is relevant to your cognitive state, focus, or what happened during the study?" val={freeAdditional} setter={setFreeAdditional}/>
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

export default React.memo(SurveyPARTEmotion);
