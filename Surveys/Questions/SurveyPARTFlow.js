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

import LongQ from '../Questions/LongQ';
import ShortQ from '../Questions/ShortQ';
import FreeQ from '../Questions/FreeQ';
import TrueFalseQ from '../Questions/TrueFalseQ';
import YesNoQ from '../Questions/YesNoQ';
import LikertQ from '../Questions/LikertQ';
import ReactionTime from '../Questions/ReactionTime';
import EmpaticaCue from '../Questions/EmpaticaCue';
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

const deepMap = {
    1: 'very shallow',
    2: 'shallow',
    3: 'neutral',
    4: 'deep',
    5: 'very deep'
}

const flowDurMap = {
    1: 'none',
    2: 'a little, one continuous time',
    3: 'a little, a few separate occasions',
    4: 'a lot, a few separate occasions',
    5: 'a lot, one continuous time'
}

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


function SurveyPARTFlow(props){

    const [flowPath, setFlowPath] = useState([]);	
    const [flowCanvasSize, setFlowCanvasSize] = useState({width:null, height:null});	


    const [confidence, setConfidence] = useState(-1);	
    const [time, setTime] = useState('');
    const [actualTimeAtGuess, setActualTimeAtGuess] = useState('');	
    const [timeValid, setTimeValid] = useState(false);

    const handleTimeChange = (time, validTime) => {
	    if (!validTime) return;
	    setTime(time);
	    setTimeValid(true);
    }
 
    useEffect(() => {
	    console.log('HANDLE TIME');
	    setActualTimeAtGuess(new Date().toLocaleString())
    }, [time]);


    const [lastClockConfidence, setLastClockConfidence] = useState(-1);	
    const [dur, setDur] = useState(null);	
    const [actualTimeAtDuration, setActualTimeAtDuration] = useState('');	

    const handleDurChange = (duration) => {
	    if (duration > 0 && duration < 241){
		    setDur(String(duration));
	    }	
    }
	
    useEffect(() => {
	    console.log('HANDLE DUR');
	    setActualTimeAtDuration(new Date().toLocaleString())
    }, [dur]);

    const [timeExp, setTimeExp] = useState(-1);	
    const [focus, setFocus] = useState(-1);	
    const [effort, setEffort] = useState(-1);	
    const [deepest, setDeepest] = useState(-1);	
    const [flow, setFlow] = useState(null);	
    const [durFlow, setDurFlow] = useState(-1);	
    const [durToFlow, setDurToFlow] = useState(null);	
    const [flowDesc, setFlowDesc] = useState('');	

    const [flowDescA, setFlowDescA] = useState(null);	
    const [flowDescB, setFlowDescB] = useState(null);	
    const [flowDescC, setFlowDescC] = useState(null);	
    const [flowDescD, setFlowDescD] = useState(null);	
    const [flowDescE, setFlowDescE] = useState(null);	
    const [flowDescF, setFlowDescF] = useState(null);	
	
    const [flowQ1, setFlowQ1] = useState(null);	
    const [flowQ2, setFlowQ2] = useState(null);	
    const [flowQ3, setFlowQ3] = useState(null);	
    const [flowQ4, setFlowQ4] = useState(null);	

    const [FSS1, setFSS1] = useState(null);	
    const [FSS2, setFSS2] = useState(null);	
    const [FSS3, setFSS3] = useState(null);	
    const [FSS4, setFSS4] = useState(null);	
    const [FSS5, setFSS5] = useState(null);	
    const [FSS6, setFSS6] = useState(null);	
    const [FSS7, setFSS7] = useState(null);	
    const [FSS8, setFSS8] = useState(null);	
    const [FSS9, setFSS9] = useState(null);	
	
    useEffect(() => {
	    props.setter([
		'durGuess', dur,
		'timeAtDurGuess', actualTimeAtDuration,
		'durTimeConfidence', lastClockConfidence,   
		'guessTime', time,    
		'timeAtGuess', actualTimeAtGuess,
		'guessTimeConfidence', confidence,
		'flowPath', String(flowPath),
		'flowCanvasSize', String(flowCanvasSize.width) + ',' + String(flowCanvasSize.height),
		'timeExp', timeExp,
		'focus', focus,
		'effort', effort,
		'deepest', deepest,
		'flow', flow,
		'durFlow', durFlow,
		'durToFlow', durToFlow,
		'flowDesc', flowDesc,    
		'flowDescA', flowDescA,   
                'flowDescB', flowDescB,
                'flowDescC', flowDescC,
                'flowDescD', flowDescD,
                'flowDescE', flowDescE,
                'flowDescF', flowDescF,
		'FSS1', FSS1,
                'FSS2', FSS2,
                'FSS3', FSS3,
                'FSS4', FSS4,
                'FSS5', FSS5,
                'FSS6', FSS6,
                'FSS7', FSS7,
                'FSS8', FSS8,
                'FSS9', FSS9,
		'flowQ1', flowQ1,
		'flowQ2', flowQ2,
		'flowQ3', flowQ3,
		'flowQ4', flowQ4
	    ]);
    }, [dur, actualTimeAtDuration, lastClockConfidence, time, actualTimeAtGuess, confidence, flowPath, flowCanvasSize,  timeExp, focus, effort, deepest, flow, durFlow, durToFlow, flowDesc, flowDescA, flowDescB, flowDescC, flowDescD, flowDescE, flowDescF, FSS1, FSS2, FSS3, FSS4, FSS5, FSS6, FSS7, FSS8, FSS9, flowQ1, flowQ2, flowQ3, flowQ4]);	

    return (
	<>
	    {/* Start time questions */}
            <View style={{width:"100%", padding:5, paddingTop:40, alignItems:'flex-start'}}>
		    <Text>How long do you think you engaged in the previous activity?</Text>
            </View>

	    <View style={{width:"100%", alignItems:'center'}}>
	    <TextInput
	    keyboardType="number-pad"
      	    maxLength={3}
	    onChangeText={text => handleDurChange(parseInt(text))}
	    placeholder="00"
	    value={dur}
	    style={{
		    borderRadius: 6,
		    borderStyle: 'solid',
		    borderWidth: 1.5,
		    fontSize: 14,
		    height: 40,
		    marginRight: 24,
		    padding: 10,
		    paddingRight: 34,
		    width: 90
	    }}
            />

    	    <Text style={{paddingTop:20}}>Duration entered is: {dur} min</Text>
	    </View>

            <View style={{width:"100%", padding:5, paddingTop:30, alignItems:'flex-start'}}>
		    <Text>How certain are you?</Text>
            </View>

	    <View style={{width:"100%", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
		    <Text style={{fontWeight:'bold'}}>{confidenceMap[lastClockConfidence]}</Text>
	    </View>

	    <View style={{width:"100%", padding:5, paddingTop:10, paddingBottom:30, flexDirection:'row', justifyContent:"flex-start", alignItems:'center'}}>
            <Slider
            onValueChange={sliderValue => setLastClockConfidence(parseInt(sliderValue))}
            minimumValue={1}
            maximumValue={5}
            step={1}
            value={lastClockConfidence}
            style={{width:"100%"}}
            />

	    </View>
            <View style={{width:"100%", padding:5, alignItems:'flex-start'}}>
		    <Text>What time do you think it is now?</Text>
            </View>

	    <View style={{width:"100%", alignItems:'center'}}>
	    <TimeInput
		initialTime={0}
		onTimeChange={handleTimeChange}
	    />
    	    {timeValid?<Text>time entered is: {time}</Text>:<></>}
	    </View>
	    


            <View style={{width:"100%", padding:5, paddingTop:30, alignItems:'flex-start'}}>
		    <Text>How certain are you?</Text>
            </View>

	    <View style={{width:"100%", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
		    <Text style={{fontWeight:'bold'}}>{confidenceMap[confidence]}</Text>
	    </View>

	    <View style={{width:"100%", padding:5, paddingTop:10, paddingBottom:30, flexDirection:'row', justifyContent:"flex-start", alignItems:'center'}}>
		    <Slider
		    onValueChange={sliderValue => setConfidence(parseInt(sliderValue))}
		    minimumValue={1}
		    maximumValue={5}
		    step={1}
		    value={confidence}
		    style={{width:"100%"}}
		    />
	    </View>
	    {/* End time questions */}

	    <LikertQ text="Did you experience time differently?" lowText="intensely slow" highText="intensely fast"  setter={setTimeExp}/>
	    <LikertQ text="Focus during activity?" lowText="very low" highText="very high" setter={setFocus}/>
	    <LikertQ text="Effort exerted for focus?" lowText="very low" highText="very high" setter={setEffort}/>
	    <LikertQ text="The deepest focus state you experienced:" lowText="very shallow" highText="very deep" setter={setDeepest}/>
	    <View style={{padding:10}}/>
	    <YesNoQ setter={setFlow} text='Did you experience "flow"?'/>

            <View style={{width:"100%", padding:5, alignItems:'flex-start'}}>
		    <Text>Duration of flow?</Text>
            </View>

	    <View style={{width:"100%", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
		    <Text style={{fontWeight:'bold'}}>{flowDurMap[durFlow]}</Text>
	    </View>

	    <View style={{width:"100%", padding:5, paddingTop:10, flexDirection:'row', justifyContent:"flex-start", alignItems:'center'}}>
		    <Slider
		    onValueChange={sliderValue => setDurFlow(parseInt(sliderValue))}
		    minimumValue={1}
		    maximumValue={5}
		    step={1}
		    value={durFlow}
		    style={{width:"100%"}}
		    />
	    </View>


	    {/*<LongQ map={flowDurMap} text="Duration of flow?" val={durFlow} setter={setDurFlow}/>*/}
	    <FreeQ text="If you experienced it, how long do you believe it took you to get into flow?" val={durToFlow} setter={setDurToFlow}/>
	    <FreeQ text="Do you remember having moments during this experience where you were deeply engaged, or moments of distraction?  Write a thorough description of the events you remember that are relevant to your attentional state in order." val={flowDesc} setter={setFlowDesc}/>


	    <View style={{padding:10}}/>
	    <FlowDrawing setScrollEnabled={props.setScrollEnabled} setPath={setFlowPath} setCanvasSize={setFlowCanvasSize}/>


            <View style={{width:"100%", padding:5, paddingTop:40, alignItems:'flex-start'}}>
		    <Text style={{fontWeight:'bold'}}>Rate the following from very low to very high:</Text>
            </View>

	    <LikertQ text="Challenge of activity." lowText="very low" highText="very high" setter={setFlowQ1}/>
	    <LikertQ text="Your skill at the activity." lowText="very low" highText="very high" setter={setFlowQ2}/>
	    <LikertQ text="Was the activity important to you?" lowText="very low" highText="very high" setter={setFlowQ3}/>
	    <LikertQ text="Were you satisfied with how you did?" lowText="very low" highText="very high" setter={setFlowQ4}/>

            <View style={{width:"100%", padding:5, paddingTop:40, alignItems:'flex-start'}}>
		    <Text style={{fontWeight:'bold'}}>Rate the following from strongly disagree to strongly agree:</Text>
            </View>

	    <LikertQ text="I feel I am competent enough to meet the highest demands of the situation." lowText="disagree" highText="agree" setter={setFSS1}/>
	    <LikertQ text="I do things spontaneously and automatically without having to think." lowText="disagree" highText="agree" setter={setFSS2}/>
	    <LikertQ text="I have a strong sense of what I want to do." lowText="disagree" highText="agree" setter={setFSS3}/>
	    <LikertQ text="I have a good idea while I am performing about how well I am doing." lowText="disagree" highText="agree" setter={setFSS4}/>
	    <LikertQ text="I am completely focused on the task at hand." lowText="disagree" highText="agree" setter={setFSS5}/>
	    <LikertQ text="I have a feeling of total control." lowText="disagree" highText="agree" setter={setFSS6}/>
	    <LikertQ text="I am not worried about what others may be thinking of me." lowText="disagree" highText="agree" setter={setFSS7}/>
	    <LikertQ text="The way time passes seems to be different from normal." lowText="disagree" highText="agree" setter={setFSS8}/>
	    <LikertQ text="The experience is extremely rewarding." lowText="disagree" highText="agree" setter={setFSS9}/>

            <View style={{width:"100%", padding:5, paddingTop:40, alignItems:'flex-start'}}>
		    <Text style={{fontWeight:'bold'}}>Please indicate if the following descriptions apply to your experience:</Text>
            </View>

	    <YesNoQ setter={setFlowDescA} text="(a) 'My mind isn't wandering. I am totally involved in what I am doing and I am not thinking of anything else. My body feels good... the world seems to be cut off from me... I am less aware of myself and my problems.'"/>
	    <YesNoQ setter={setFlowDescB} text="(b) 'My concentration is like breathing... I never think of it... When I start, I really do shut out the world.'"/>
	    <YesNoQ setter={setFlowDescC} text="(c) 'I am so involved in what I am doing... I don't see myself as separate from what I am doing.'"/>
	    <YesNoQ setter={setFlowDescD} text="(d) 'I am really quite oblivious to my surroundings after I really get going in this activity.'"/>
	    <YesNoQ setter={setFlowDescE} text="(e) 'I think that the phone could ring, and the doorbell could ring or the house burn down or something like that...'"/>
	    <YesNoQ setter={setFlowDescF} text="(f) 'Once I stop I can let it back in again'"/>

	    {/*
	    <TrueFalseQ setter={setTF} text='test text for true/false'/>

	    <Text style={{paddingTop:10, paddingBottom:10, fontWeight:'bold'}}> How do you feel now? </Text>

	    <ShortQ map={lowMap} text="Stress" val={shortQ} setter={setShortQ}/>
	    <FreeQ text="Describe your emotional and focus state:" val={freeQ} setter={setFreeQ}/>
	    */}

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

export default React.memo(SurveyPARTFlow);
