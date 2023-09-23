//Surveys/SurveyPARTDispositionalFlowState
//
// Survey for start of lab session.
// props setter gives array of answers when updated. 
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

import LikertQ5 from '../Questions/LikertQ5';

function SurveyPARTDispositionalFlowState(props){

const [DFS0, setDFS0] = useState(null); 
    const [DFS1, setDFS1] = useState(null); 
    const [DFS2, setDFS2] = useState(null); 
    const [DFS3, setDFS3] = useState(null); 
    const [DFS4, setDFS4] = useState(null); 
    const [DFS5, setDFS5] = useState(null); 
    const [DFS6, setDFS6] = useState(null); 
    const [DFS7, setDFS7] = useState(null); 
    const [DFS8, setDFS8] = useState(null); 
    const [DFS9, setDFS9] = useState(null); 
    const [DFS10, setDFS10] = useState(null); 
    const [DFS11, setDFS11] = useState(null); 
    const [DFS12, setDFS12] = useState(null); 
    const [DFS13, setDFS13] = useState(null); 
    const [DFS14, setDFS14] = useState(null); 
    const [DFS15, setDFS15] = useState(null); 
    const [DFS16, setDFS16] = useState(null); 
    const [DFS17, setDFS17] = useState(null); 
    const [DFS18, setDFS18] = useState(null); 
    const [DFS19, setDFS19] = useState(null); 
    const [DFS20, setDFS20] = useState(null); 
    const [DFS21, setDFS21] = useState(null); 
    const [DFS22, setDFS22] = useState(null); 
    const [DFS23, setDFS23] = useState(null); 
    const [DFS24, setDFS24] = useState(null); 
    const [DFS25, setDFS25] = useState(null); 
    const [DFS26, setDFS26] = useState(null); 
    const [DFS27, setDFS27] = useState(null); 
    const [DFS28, setDFS28] = useState(null); 
    const [DFS29, setDFS29] = useState(null); 
    const [DFS30, setDFS30] = useState(null); 
    const [DFS31, setDFS31] = useState(null); 
    const [DFS32, setDFS32] = useState(null); 
    const [DFS33, setDFS33] = useState(null); 
    const [DFS34, setDFS34] = useState(null); 
    const [DFS35, setDFS35] = useState(null);
  
	
    useEffect(() => {
	    props.setter([
                'DFS0', DFS0,
                'DFS1', DFS1,
                'DFS2', DFS2,
                'DFS3', DFS3,
                'DFS4', DFS4,
                'DFS5', DFS5,
                'DFS6', DFS6,
                'DFS7', DFS7,
                'DFS8', DFS8,
                'DFS9', DFS9,
                'DFS10', DFS10,
                'DFS11', DFS11,
                'DFS12', DFS12,
                'DFS13', DFS13,
                'DFS14', DFS14,
                'DFS15', DFS15,
                'DFS16', DFS16,
                'DFS17', DFS17,
                'DFS18', DFS18,
                'DFS19', DFS19,
                'DFS20', DFS20,
                'DFS21', DFS21,
                'DFS22', DFS22,
                'DFS23', DFS23,
                'DFS24', DFS24,
                'DFS25', DFS25,
                'DFS26', DFS26,
                'DFS27', DFS27,
                'DFS28', DFS28,
                'DFS29', DFS29,
                'DFS30', DFS30,
                'DFS31', DFS31,
                'DFS32', DFS32,
                'DFS33', DFS33,
                'DFS34', DFS34,
                'DFS35', DFS35,
	    ]);
	    {/*}, [DFS35]);*/}

    }, [DFS0, DFS1, DFS2, DFS3, DFS4, DFS5, DFS6, DFS7, DFS8, DFS9,
    DFS10, DFS11, DFS12, DFS13, DFS14, DFS15, DFS16, DFS17, DFS18, DFS19,
    DFS20, DFS21, DFS22, DFS23, DFS24, DFS25, DFS26, DFS27, DFS28, DFS29,
    DFS30, DFS31, DFS32, DFS33, DFS34, DFS35]);

    const renderItem = ({ item }) => {
      return(	    
	    <LikertQ5 setter={item.setter} text={item.text} lowText="never" highText="always"/>
    )};

    return (	
	<>
            <View style={{width:"100%", padding:5, paddingTop:40, alignItems:'flex-start'}}>
	    	    <Text style={{textAlign:'justify'}}>On some occasions, while we are trying to achieve a certain objective, it may happen that we feel fully involved in what we are doing, satisﬁed, convinced that everything is going well and psychologically in a state of intense well-being. We are so concentrated that time may seem to expand or pass too quickly, and we feel strongly motivated to continue that activity to remain in this psychological state. It is an intense and positive psychological state, as what we imagine an experienced climber may feel while facing the challenge of a new rock wall, or the artist taken from the composition of the last work he has created. Think of a situation of limited duration (from a few minutes to a few hours) in which he felt such a sensation: the following questions are about the thoughts and feelings he felt in that situation. There are no right or wrong answers. Mark with a cross how much you experienced each characteristic during the activity you have considered, using the scale from 1 (never) to 5 (always) (Never/Rarely/Sometimes/Frequently/Always):
	    	    </Text>
            </View>

	    <FlatList
		data={[
	{setter: setDFS0, text: "I am challenged, but I believe my skill will allow me to meet the challenge."},
{setter: setDFS1, text: "I do things correctly without thinking about trying to do so."},
{setter: setDFS2, text: "I know clearly what I want to do."},
{setter: setDFS3, text: "It is really clear to me how I am going."},
{setter: setDFS4, text: "My attention is focused entirely on what I am doing."},
{setter: setDFS5, text: "I have a sense of control over what I am doing."},
{setter: setDFS6, text: "I am not concerned with what others may be thinking of me."},
{setter: setDFS7, text: "Time seems to alter (either slows down or speeds up)."},
{setter: setDFS8, text: "I really enjoy the experience of what I am doing."},
{setter: setDFS9, text: "My abilities match the challenge of what I am doing."},
{setter: setDFS10, text: "Things just seem to happen automatically."},
{setter: setDFS11, text: "I have a strong sense of what I want to do."},
{setter: setDFS12, text: "I am aware of how well I am doing."},
{setter: setDFS13, text: "It is no effort to keep my mind on what is happening."},
{setter: setDFS14, text: "I feel like I can control what I am doing."},
{setter: setDFS15, text: "I am not concerned with how others may be evaluating me."},
{setter: setDFS16, text: "The way time passes seems to be different from normal."},
{setter: setDFS17, text: "I love the feeling of what I am doing and want to capture this feeling again."},
{setter: setDFS18, text: "I feel I am competent enough to meet the demands of the situation."},
{setter: setDFS19, text: "I do things automatically, without thinking too much."},
{setter: setDFS20, text: "I know what I want to achieve."},
{setter: setDFS21, text: "I have a good idea about how well I am doing while I am involved in the task/activity."},
{setter: setDFS22, text: "I have total concentration."},
{setter: setDFS23, text: "I have a feeling of total control over what I am doing."},
{setter: setDFS24, text: "I am not concerned with how I am presenting myself."},
{setter: setDFS25, text: "It feels like time goes by quickly."},
{setter: setDFS26, text: "The experience leaves me feeling great."},
{setter: setDFS27, text: "The challenge and my skills are at an equally high level."},
{setter: setDFS28, text: "I do things spontaneously and automatically without having to think."},
{setter: setDFS29, text: "My goals are clearly defined."},
{setter: setDFS30, text: "I can tell by the way things are processing how well I am doing."},
{setter: setDFS31, text: "I am completely focused on the task at hand."},
{setter: setDFS32, text: "I feel in total control of my actions."},
{setter: setDFS33, text: "I am not worried about what others may be thinking of me."},
{setter: setDFS34, text: "I lose my normal awareness of time."},
{setter: setDFS35, text: "The experience is extremely rewarding."}
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

export default React.memo(SurveyPARTDispositionalFlowState);
