//Surveys/SurveyPARTSelfEfficacyScale
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

import LikertQ4 from '../Questions/LikertQ4';

function SurveyPARTSelfEfficacyScale(props){

   const [SES0, setSES0] = useState(null);
   const [SES1, setSES1] = useState(null);
   const [SES2, setSES2] = useState(null);
   const [SES3, setSES3] = useState(null);
   const [SES4, setSES4] = useState(null);
   const [SES5, setSES5] = useState(null);
   const [SES6, setSES6] = useState(null);
   const [SES7, setSES7] = useState(null);
   const [SES8, setSES8] = useState(null);
   const [SES9, setSES9] = useState(null);
    
	
    useEffect(() => {
	    props.setter([
                'SES0': SES0,
                'SES1': SES1,
                'SES2': SES2,
                'SES3': SES3,
                'SES4': SES4,
                'SES5': SES5,
                'SES6': SES6,
                'SES7': SES7,
                'SES8': SES8,
                'SES9': SES9
                	    ]);
    }, [SES0, SES1, SES2, SES3, SES4, SES5, SES6, SES7, SES8, SES9]);

    const renderItem = ({ item }) => {
      return(	    
	    <LikertQ4 setter={item.setter} text={item.text} lowText="Not at all true" highText="Exactly true"/>
    )};

    return (
	<>
            <View style={{width:"100%", padding:5, paddingTop:40, alignItems:'flex-start'}}>
		    <Text style={{fontWeight:'bold'}}>Rate the following from "Not at all true" to "Exactly true" (Not at all true/Hardly true/Moderately true/Exactly true):</Text>
            </View>

	    <FlatList
		data={[
      {setter: setSES0, text: "I can always manage to solve difficult problems if I try hard enough."},
      {setter: setSES1, text: "If someone opposes me, I can find the means and ways to get what I want."},
      {setter: setSES2, text: "It is easy for me to stick to my aims and accomplish my goals."},
      {setter: setSES3, text: "I am confident that I could deal efficiently with unexpected events."},
      {setter: setSES4, text: "Thanks to my resourcefulness, I know how to handle unforeseen situations."},
      {setter: setSES5, text: "I can solve most problems if I invest the necessary effort."},
      {setter: setSES6, text: "I can remain calm when facing difficulties because I can rely on my coping abilities."},
      {setter: setSES7, text: "When I am confronted with a problem, I can usually find several solutions."},
      {setter: setSES8, text: "If I am in trouble, I can usually think of a solution."},
      {setter: setSES9, text: "I can usually handle whatever comes my way."}
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

export default React.memo(SurveyPARTLocusControlScale);
