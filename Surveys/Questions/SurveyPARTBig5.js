//Surveys/SurveyPARTBig5
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

import LikertQ5 from '../Questions/LikertQ5';

function SurveyPARTBig5(props){

    const [BFI0, setBFI0] = useState(null);	
    const [BFI1, setBFI1] = useState(null);	
    const [BFI2, setBFI2] = useState(null);	
    const [BFI3, setBFI3] = useState(null);	
    const [BFI4, setBFI4] = useState(null);	
    const [BFI5, setBFI5] = useState(null);	
    const [BFI6, setBFI6] = useState(null);	
    const [BFI7, setBFI7] = useState(null);	
    const [BFI8, setBFI8] = useState(null);	
    const [BFI9, setBFI9] = useState(null);	
    const [BFI10, setBFI10] = useState(null);	
    const [BFI11, setBFI11] = useState(null);	
    const [BFI12, setBFI12] = useState(null);	
    const [BFI13, setBFI13] = useState(null);	
    const [BFI14, setBFI14] = useState(null);	
    const [BFI15, setBFI15] = useState(null);	
    const [BFI16, setBFI16] = useState(null);	
    const [BFI17, setBFI17] = useState(null);	
    const [BFI18, setBFI18] = useState(null);	
    const [BFI19, setBFI19] = useState(null);	
    const [BFI20, setBFI20] = useState(null);	
    const [BFI21, setBFI21] = useState(null);	
    const [BFI22, setBFI22] = useState(null);	
    const [BFI23, setBFI23] = useState(null);	
    const [BFI24, setBFI24] = useState(null);	
    const [BFI25, setBFI25] = useState(null);	
    const [BFI26, setBFI26] = useState(null);	
    const [BFI27, setBFI27] = useState(null);	
    const [BFI28, setBFI28] = useState(null);	
    const [BFI29, setBFI29] = useState(null);	
    const [BFI30, setBFI30] = useState(null);	
    const [BFI31, setBFI31] = useState(null);	
    const [BFI32, setBFI32] = useState(null);	
    const [BFI33, setBFI33] = useState(null);	
    const [BFI34, setBFI34] = useState(null);	
    const [BFI35, setBFI35] = useState(null);	
    const [BFI36, setBFI36] = useState(null);	
    const [BFI37, setBFI37] = useState(null);	
    const [BFI38, setBFI38] = useState(null);	
    const [BFI39, setBFI39] = useState(null);	
    const [BFI40, setBFI40] = useState(null);	
    const [BFI41, setBFI41] = useState(null);	
    const [BFI42, setBFI42] = useState(null);	
    const [BFI43, setBFI43] = useState(null);	
    const [BFI44, setBFI44] = useState(null);	
    const [BFI45, setBFI45] = useState(null);	
    const [BFI46, setBFI46] = useState(null);	
    const [BFI47, setBFI47] = useState(null);	
    const [BFI48, setBFI48] = useState(null);	
    const [BFI49, setBFI49] = useState(null);	
    const [BFI50, setBFI50] = useState(null);	
    const [BFI51, setBFI51] = useState(null);	
    const [BFI52, setBFI52] = useState(null);	
    const [BFI53, setBFI53] = useState(null);	
    const [BFI54, setBFI54] = useState(null);	
    const [BFI55, setBFI55] = useState(null);	
    const [BFI56, setBFI56] = useState(null);	
    const [BFI57, setBFI57] = useState(null);	
    const [BFI58, setBFI58] = useState(null);	
    const [BFI59, setBFI59] = useState(null);	
	
    useEffect(() => {
	    props.setter([
                'BFI0', BFI0,
		'BFI1', BFI1,
                'BFI2', BFI2,
                'BFI3', BFI3,
                'BFI4', BFI4,
                'BFI5', BFI5,
                'BFI6', BFI6,
                'BFI7', BFI7,
                'BFI8', BFI8,
                'BFI9', BFI9,
		'BFI10', BFI10,
                'BFI11', BFI11,
                'BFI12', BFI12,
                'BFI13', BFI13,
                'BFI14', BFI14,
                'BFI15', BFI15,
                'BFI16', BFI16,
                'BFI17', BFI17,
                'BFI18', BFI18,
                'BFI19', BFI19,
                'BFI20', BFI20,
                'BFI21', BFI21,
                'BFI22', BFI22,
                'BFI23', BFI23,
                'BFI24', BFI24,
                'BFI25', BFI25,
                'BFI26', BFI26,
                'BFI27', BFI27,
                'BFI28', BFI28,
                'BFI29', BFI29,
                'BFI30', BFI30,
                'BFI31', BFI31,
                'BFI32', BFI32,
                'BFI33', BFI33,
                'BFI34', BFI34,
                'BFI35', BFI35,
                'BFI36', BFI36,
                'BFI37', BFI37,
                'BFI38', BFI38,
                'BFI39', BFI39,
                'BFI40', BFI40,
                'BFI41', BFI41,
                'BFI42', BFI42,
                'BFI43', BFI43,
                'BFI44', BFI44,
                'BFI45', BFI45,
                'BFI46', BFI46,
                'BFI47', BFI47,
                'BFI48', BFI48,
                'BFI49', BFI49,
                'BFI50', BFI50,
                'BFI51', BFI51,
                'BFI52', BFI52,
                'BFI53', BFI53,
                'BFI54', BFI54,
                'BFI55', BFI55,
                'BFI56', BFI56,
                'BFI57', BFI57,
                'BFI58', BFI58,
                'BFI59', BFI59
	    ]);
	    {/*}, [BFI59]);*/}
    }, [BFI0, BFI1, BFI2, BFI3, BFI4, BFI5, BFI6, BFI7, BFI8, BFI9,
	BFI10, BFI11, BFI12, BFI13, BFI14, BFI15, BFI16, BFI17, BFI18, BFI19,
	BFI20, BFI21, BFI22, BFI23, BFI24, BFI25, BFI26, BFI27, BFI28, BFI29,
	BFI30, BFI31, BFI32, BFI33, BFI34, BFI35, BFI36, BFI37, BFI38, BFI39,
	BFI40, BFI41, BFI42, BFI43, BFI44, BFI45, BFI46, BFI47, BFI48, BFI49,
	BFI50, BFI51, BFI52, BFI53, BFI54, BFI55, BFI56, BFI57, BFI58, BFI59]);

    return (
	<>
            <View style={{width:"100%", padding:5, paddingTop:40, alignItems:'flex-start'}}>
	    	    <Text style={{textAlign:'justify'}}>Here are several characteristics that may or may not apply to you. Please rate each statement from (strongly agree/agree a little/neutral/disagree a little/strongly disagree):
	    	    </Text>
		    <Text style={{fontWeight:'bold'}}>{"\n\n"} I am someone who...</Text>
            </View>

	    <LikertQ5 setter={setBFI0} text="is outgoing,sociable." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI1} text="is compassionate, has a soft heart." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI2} text="tends to be disorganized." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI3} text="is relaxed, handles stress well." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI4} text="has few artistic interests." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI5} text="has an assertive personality." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI6} text="is respectful, treats others with respect." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI7} text="tends to be lazy." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI8} text="stays optimistic after experiencing a setback." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI9} text="is curious about many different things." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI10} text="rarely feels excited or eager." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI11} text="tends to find fault with others." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI12} text="is dependable, steady." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI13} text="is moody, has up and down mood swings." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI14} text="is inventive, finds clever ways to do things." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI15} text="tends to be quiet." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI16} text="feels little sympathy for others." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI17} text="is systematic, likes to keep things in order." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI18} text="can be tense." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI19} text="is fascinated by art, music, or literature." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI20} text="is dominant, acts as a leader." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI21} text="starts arguments with others." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI22} text="has difficulty getting started on tasks." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI23} text="feels secure, comfortable with self." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI24} text="avoids intellectual, philosophical discussions." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI25} text="is less active than other people." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI26} text="has a forgiving nature." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI27} text="can be somewhat careless." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI28} text="is emotionally stable, not easily upset." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI29} text="has little creativity." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI30} text="is sometimes shy, introverted." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI31} text="is helpful and unselfish with others." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI32} text="keeps things neat and tidy." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI33} text="worries a lot." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI34} text="values art and beauty." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI35} text="finds it hard to influence people." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI36} text="is sometimes rude to others." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI37} text="is efficient, gets things done." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI38} text="often feels sad." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI39} text="is complex, a deep thinker." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI40} text="is full of energy." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI41} text="is suspicious of others' intentions." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI42} text="is reliable, can always be counted on." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI43} text="keeps their emotions under control." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI44} text="has difficulty imagining things." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI45} text="is talkative." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI46} text="can be cold and uncaring." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI47} text="leaves a mess, doesn't clean up." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI48} text="rarely feels anxious or afraid." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI49} text="thinks poetry and plays are boring." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI50} text="prefers to have others take charge." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI51} text="is polite, courteous to others." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI52} text="is persistent, works until the task is finished." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI53} text="tends to feel depressed, blue." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI54} text="has little interest in abstract ideas." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI55} text="shows a lot of enthusiasm." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI56} text="assumes the best about people." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI57} text="sometimes behaves irresponsibly." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI58} text="is temperamental, gets emotional easily." lowText="disagree" highText="agree"/>
	    <LikertQ5 setter={setBFI59} text="is original, comes up with new ideas." lowText="disagree" highText="agree"/>

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

export default React.memo(SurveyPARTBig5);
