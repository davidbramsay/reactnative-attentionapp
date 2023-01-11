//Surveys/Empatica Cue
//
// Instruction to start and stop Empatica
// 
// expects props: start (true if starting, false if stopping device), setter (function to set kick off time)
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

function RecordingCue(props){
    const [done, setDone] = useState(false);	

    function buttonPress(){
	  props.setter(new Date().toLocaleString());
	  setDone(true);
    }

    return (
	<>
	    <View style={{width:"100%", padding:5}}>
	      <Text style={{fontWeight:"bold", paddingBottom:5}}>Start Screen Recording</Text>
	      <Text style={{textAlign:'justify'}}>Turn on the iPad.  Swipe down from the top-right corner to reveal the control center screen.  You should see the screen below.{'\n\n'}Click the recording button to start recording.   
	    </Text>
            </View>

                <Image source={require('../../icons/record_instruction.jpg')}
                    style={{width:'100%', padding:5, height: undefined, aspectRatio:16/9}}/>

	    <View style={{width:"100%", padding:5}}>
	      <Text style={{textAlign:'justify'}}>Once you've done this, hit the button below to confirm you have started the recording.
	    </Text>
            </View>

	    {done ? <>
	    <View style={{width:"100%", minHeight:85, padding:5, flexDirection:'column', justifyContent:"center", alignItems:'center'}}>
		    <Text style={{fontWeight:"bold", paddingBottom:5}}>DONE! Thank you!</Text>
	    	
		<TouchableOpacity
		  style={{width:'35%', height:40, padding:5, justifyContent:"center", alignItems:"center"}}
		  activeOpacity={0.5}
		  onPress={() => {setDone(false); setCount(3); setCounting(false);}}>
                <Text style={{width:'100%', padding:0, height:'100%', borderColor: '#7a42f4', 
			      borderWidth: 1, textAlign:'center', fontSize:20}}>
			re-do.
                </Text>
		</TouchableOpacity>
	    </View>
	    </>:<>
	    <View style={{width:"100%", minHeight:75, padding:5, flexDirection:'row', justifyContent:"center", alignItems:'center'}}>

		<TouchableOpacity
		  style={{width:'70%', height:65, padding:5, justifyContent:"center", alignItems:"center"}}
		  activeOpacity={0.5}
		  onPress={() => buttonPress()}>
                <Text style={{width:'100%', padding:10, height:'100%', borderColor: '#7a42f4', 
			      borderWidth: 1, textAlign:'center', fontSize:25}}>
			Recording Started
                </Text>
		</TouchableOpacity>
		    
	    </View>

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

export default RecordingCue;
