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

import FreeQ from '../Questions/FreeQ';
import YesNoQ from '../Questions/YesNoQ';

function SurveyPARTFlowBackground(props){

    const [flowDescA, setFlowDescA] = useState(null);	
    const [flowDescB, setFlowDescB] = useState(null);	
    const [flowDescC, setFlowDescC] = useState(null);	
    const [flowDescD, setFlowDescD] = useState(null);	
    const [flowDescE, setFlowDescE] = useState(null);	
    const [flowDescF, setFlowDescF] = useState(null);	
	
    const [flowQ1, setFlowQ1] = useState('');	
    const [flowQ2, setFlowQ2] = useState('');	
    const [flowQ3, setFlowQ3] = useState('');	
    const [flowQ4, setFlowQ4] = useState('');	
	
    useEffect(() => {
	    props.setter([
		'flowBackgroundDescA', flowDescA,   
                'flowBackgroundDescB', flowDescB,
                'flowBackgroundDescC', flowDescC,
                'flowBackgroundDescD', flowDescD,
                'flowBackgroundDescE', flowDescE,
                'flowBackgroundDescF', flowDescF,
		'flowBackgroundQ1', flowQ1,
		'flowBackgroundQ2', flowQ2,
		'flowBackgroundQ3', flowQ3,
		'flowBackgroundQ4', flowQ4
	    ]);
    }, [flowDescA, flowDescB, flowDescC, flowDescD, flowDescE, flowDescF, flowQ1, flowQ2, flowQ3, flowQ4]);	

    return (
	<>

	    <View style={{padding:10}}/>

            <View style={{width:"100%", padding:5, paddingTop:40, alignItems:'flex-start'}}>
		    <Text style={{fontWeight:'bold'}}>Please read the following descriptions of aspects of flow experiences and answer ‘yes/no’ to whether you’ve experienced them.</Text>
            </View>

	    <YesNoQ setter={setFlowDescA} text="(a) 'My mind isn't wandering. I am totally involved in what I am doing and I am not thinking of anything else. My body feels good... the world seems to be cut off from me... I am less aware of myself and my problems.'"/>
	    <YesNoQ setter={setFlowDescB} text="(b) 'My concentration is like breathing... I never think of it... When I start, I really do shut out the world.'"/>
	    <YesNoQ setter={setFlowDescC} text="(c) 'I am so involved in what I am doing... I don't see myself as separate from what I am doing.'"/>
	    <YesNoQ setter={setFlowDescD} text="(d) 'I am really quite oblivious to my surroundings after I really get going in this activity.'"/>
	    <YesNoQ setter={setFlowDescE} text="(e) 'I think that the phone could ring, and the doorbell could ring or the house burn down or something like that...'"/>
	    <YesNoQ setter={setFlowDescF} text="(f) 'Once I stop I can let it back in again'"/>

            <View style={{width:"100%", padding:5, paddingTop:40, alignItems:'flex-start'}}>
	    <Text style={{fontWeight:'bold', textAlign:'justify'}}>These kinds of experiences typically happen for people in many contexts: common examples include making music or art, dancing, playing sports, cooking, programming, playing video games, solving puzzles, watching movies or lectures, browsing social media, having a great conversation, etc.  The experience where time distorts, self-consciousness and self-awareness disappear, awareness of the environment and the body are severely diminished; moreover, this state of attention is effortless, hard to disrupt, and easy to regain.</Text>
	    </View>

	    <FreeQ text="What experiences do you have that are most like this?" val={flowQ1} setter={setFlowQ1}/>
	    <FreeQ text="How frequently do you participate in these experiences?" val={flowQ2} setter={setFlowQ2}/>
	    <FreeQ text="How reliably do they elicit this state for you?" val={flowQ3} setter={setFlowQ3}/>
	    <FreeQ text="What aspects of the state as described above do you feel you experience?  How would you describe it yourself?  How do you recognize it?" val={flowQ4} setter={setFlowQ4}/>
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

export default React.memo(SurveyPARTFlowBackground);
