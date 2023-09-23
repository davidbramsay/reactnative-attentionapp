//Surveys/SurveyPARTLocusControlScale
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

function SurveyPARTLocusControlScale(props){

    const [LCS0, setLCS0] = useState(null); 
    const [LCS1, setLCS1] = useState(null); 
    const [LCS2, setLCS2] = useState(null); 
    const [LCS3, setLCS3] = useState(null); 
    const [LCS4, setLCS4] = useState(null); 
    const [LCS5, setLCS5] = useState(null); 
    const [LCS6, setLCS6] = useState(null); 
    const [LCS7, setLCS7] = useState(null); 
    const [LCS8, setLCS8] = useState(null); 
    const [LCS9, setLCS9] = useState(null); 
    const [LCS10, setLCS10] = useState(null); 
    const [LCS11, setLCS11] = useState(null); 
    const [LCS12, setLCS12] = useState(null); 
    const [LCS13, setLCS13] = useState(null); 
    const [LCS14, setLCS14] = useState(null); 
    const [LCS15, setLCS15] = useState(null); 
    const [LCS16, setLCS16] = useState(null); 
    const [LCS17, setLCS17] = useState(null); 
    const [LCS18, setLCS18] = useState(null); 
    const [LCS19, setLCS19] = useState(null); 
    const [LCS20, setLCS20] = useState(null); 
    const [LCS21, setLCS21] = useState(null); 
    const [LCS22, setLCS22] = useState(null); 
    const [LCS23, setLCS23] = useState(null); 
    const [LCS24, setLCS24] = useState(null); 
    const [LCS25, setLCS25] = useState(null); 
    const [LCS26, setLCS26] = useState(null); 
    const [LCS27, setLCS27] = useState(null); 
    const [LCS28, setLCS28] = useState(null); 
    const [LCS29, setLCS29] = useState(null); 
    const [LCS30, setLCS30] = useState(null); 
    const [LCS31, setLCS31] = useState(null); 
    const [LCS32, setLCS32] = useState(null); 
    const [LCS33, setLCS33] = useState(null);
	
    useEffect(() => {
	    props.setter([
                'LCS0': LCS0,
                'LCS1': LCS1,
                'LCS2': LCS2,
                'LCS3': LCS3,
                'LCS4': LCS4,
                'LCS5': LCS5,
                'LCS6': LCS6,
                'LCS7': LCS7,
                'LCS8': LCS8,
                'LCS9': LCS9,
                'LCS10': LCS10,
                'LCS11': LCS11,
                'LCS12': LCS12,
                'LCS13': LCS13,
                'LCS14': LCS14,
                'LCS15': LCS15,
                'LCS16': LCS16
                	    ]);
    }, [LCS0, LCS1, LCS2, LCS3, LCS4, LCS5, LCS6, LCS7, LCS8, LCS9,
LCS10, LCS11, LCS12, LCS13, LCS14, LCS15, LCS16]);

    const renderItem = ({ item }) => {
      return(	    
	    <LikertQ5 setter={item.setter} text={item.text} lowText="Strongly disagree" highText="Strongly agree"/>
    )};

    return (
	<>
            <View style={{width:"100%", padding:5, paddingTop:40, alignItems:'flex-start'}}>
		    <Text style={{fontWeight:'bold'}}>Rate the following from Strongly Disagree to Strongly Agree:</Text>
            </View>

	    <FlatList
		data={[
      {setter: setLCS0, text: "I can anticipate difficulties and take action to avoid them"},
      {setter: setLCS1, text: "A great deal of what happens to me is probably just a matter of chance"},
      {setter: setLCS2, text: "Everyone knows that luck or chance determine one’s future"},
      {setter: setLCS3, text: "I can control my problem(s) only if I have outside support"},
      {setter: setLCS4, text: "When I make plans, I am almost certain that I can make them work"},
      {setter: setLCS5, text: "My problem(s) will dominate me all my life"},
      {setter: setLCS6, text: "My mistakes and problems are my responsibility to deal with"},
      {setter: setLCS7, text: "Becoming a success is a matter of hard work, luck has little or nothing to do with it"},
      {setter: setLCS8, text: "My life is controlled by outside actions and events"},
      {setter: setLCS9, text: "People are victims of circumstance beyond their control"},
      {setter: setLCS10, text: "To continually manage my problems I need professional help"},
      {setter: setLCS11, text: "When I am under stress, the tightness in my muscles is due to things outside my control"},
      {setter: setLCS12, text: "I believe a person can really be a master of his fate"},
      {setter: setLCS13, text: "It is impossible to control my irregular and fast breathing when I am having difficulties"},
      {setter: setLCS14, text: "I understand why my problem(s) varies so much from one occasion to the next"},
      {setter: setLCS15, text: "I am confident of being able to deal successfully with future problems"},
      {setter: setLCS16, text: "In my case, maintaining control over my problem(s) is due mostly to luck"}
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
