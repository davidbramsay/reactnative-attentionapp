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

    const renderItem = ({ item }) => {
      return(	    
	    <LikertQ setter={item.setter} text={item.text} lowText="disagree" highText="agree"/>
    )};

    return (
	<>
            <View style={{width:"100%", padding:5, paddingTop:40, alignItems:'flex-start'}}>
		    <Text style={{fontWeight:'bold'}}>Rate the following from strongly disagree to strongly agree:</Text>
            </View>

	    <FlatList
		data={[
			{text:"There are people who appreciate me as a person.", setter:setBIT0},
	    		{text:"I feel a sense of belonging in my community.", setter:setBIT1},
	    		{text:"In most activities I do, I feel energized.", setter:setBIT2},
	    		{text:"I am achieving most of my goals.", setter:setBIT3},
	    		{text:"I can succeed if I put my mind to it.", setter:setBIT4},
	    		{text:"What I do in life is valuable and worthwhile.", setter:setBIT5},
	    		{text:"My life has a clear sense of purpose.", setter:setBIT6},
	    		{text:"I am optimistic about the future.", setter:setBIT7},
	    		{text:"My life is going well.", setter:setBIT8},
	    		{text:"I feel good most of the time.", setter:setBIT9}
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

export default React.memo(SurveyPARTThriving);
