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

const optMap = {
    1: 'very rough (easily more than 15 min off)',
    2: 'rough (probably within 15 min)',
    3: 'close (probably within 5 min)',
    4: 'very close (probably within 3 min)',
    5: 'precise (probably within 1 min)'
};

function LabMidActivity2Survey(props){

    const [dur, setDur] = useState(null);	
    const [actualTimeAtDuration, setActualTimeAtDuration] = useState('');	

    const handleDurChange = (duration) => {
	    if (parseInt(duration) > 0 && parseInt(duration) < 241 || duration ==''){
		    setDur(duration);
	    }	
    }
	
    useEffect(() => {
	    console.log('HANDLE DUR');
	    setActualTimeAtDuration(new Date().toLocaleString())
    }, [dur]);

    return (
	<>
	    <View style={{width:"100%", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
		    <Text style={{fontWeight:'bold', padding:15}}> Pre-Extra-Time Survey </Text>
	    </View>
	    
	    <ScrollView keyboardShouldPersistTaps='handled'>


            <View style={{width:"100%", padding:5, paddingTop:40, alignItems:'flex-start'}}>
		    <Text>How much time do you think has elapsed since you started this activity?</Text>
            </View>

	    <TextInput
	    keyboardType="number-pad"
      	    maxLength={3}
	    onChangeText={text => handleDurChange(text)}
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

	    <Text style={{paddingTop:40}}> Now you'll be returned to the app.  You don't have to continue your flow activity-- but you can-- before completing the exit survey.  To exit and initiate the exit survey, hit the button.
	    </Text>

	    <View style={{...styles.separator, padding:20}} />

            <View style={{width:'100%', height:50, padding:5, justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {props.onSubmitted(['duration', dur, 'actualTimeAtDuration', actualTimeAtDuration]);}}>
                <Text style={{width:'100%', padding:10, paddingTop:5, height: 30, borderColor: '#7a42f4', 
			      borderWidth: 1, textAlign:'center', alignItems:'center', justifyContent:'center'}}>
                    Submit
                </Text>
            </TouchableOpacity>
            </View>

	    </ScrollView>
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

export default React.memo(LabMidActivity2Survey);
