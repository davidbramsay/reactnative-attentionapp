//Surveys/SurveyPARTThriving
//
// Survey for start of lab session.
// props setter gives array of answers when updated. 
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

import LikertQ from '../Questions/LikertQ';

function SurveyPARTThriving(props){

    const [BIT0, setBIT0] = useState(null);	
    const [BIT1, setBIT1] = useState(null);	
    const [BIT2, setBIT2] = useState(null);	
    const [BIT3, setBIT3] = useState(null);	
    const [BIT4, setBIT4] = useState(null);	
    const [BIT5, setBIT5] = useState(null);	
    const [BIT6, setBIT6] = useState(null);	
    const [BIT7, setBIT7] = useState(null);	
    const [BIT8, setBIT8] = useState(null);	
    const [BIT9, setBIT9] = useState(null);	
	
    useEffect(() => {
	    props.setter([
                'BIT0', BIT0,
		'BIT1', BIT1,
                'BIT2', BIT2,
                'BIT3', BIT3,
                'BIT4', BIT4,
                'BIT5', BIT5,
                'BIT6', BIT6,
                'BIT7', BIT7,
                'BIT8', BIT8,
                'BIT9', BIT9
	    ]);
    }, [BIT0, BIT1, BIT2, BIT3, BIT4, BIT5, BIT6, BIT7, BIT8, BIT9]);	

    return (
	<>
            <View style={{width:"100%", padding:5, paddingTop:40, alignItems:'flex-start'}}>
		    <Text style={{fontWeight:'bold'}}>Rate the following from strongly disagree to strongly agree:</Text>
            </View>

	    <LikertQ text="There are people who appreciate me as a person." lowText="disagree" highText="agree" setter={setBIT0}/>
	    <LikertQ text="I feel a sense of belonging in my community." lowText="disagree" highText="agree" setter={setBIT1}/>
	    <LikertQ text="In most activities I do, I feel energized." lowText="disagree" highText="agree" setter={setBIT2}/>
	    <LikertQ text="I am achieving most of my goals." lowText="disagree" highText="agree" setter={setBIT3}/>
	    <LikertQ text="I can succeed if I put my mind to it." lowText="disagree" highText="agree" setter={setBIT4}/>
	    <LikertQ text="What I do in life is valuable and worthwhile." lowText="disagree" highText="agree" setter={setBIT5}/>
	    <LikertQ text="My life has a clear sense of purpose." lowText="disagree" highText="agree" setter={setBIT6}/>
	    <LikertQ text="I am optimistic about the future." lowText="disagree" highText="agree" setter={setBIT7}/>
	    <LikertQ text="My life is going well." lowText="disagree" highText="agree" setter={setBIT8}/>
	    <LikertQ text="I feel good most of the time." lowText="disagree" highText="agree" setter={setBIT9}/>

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

export default React.memo(SurveyPARTThriving);
