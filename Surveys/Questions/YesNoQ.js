//Surveys/TrueFalseQ
//
// Survey for start of videogame.
// OnSubmitted returns array of question followed by answer
//
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

import Slider from "@react-native-community/slider";

function YesNoQ(props){
    
    const [radioState, setRadioState] = useState(null);	

     	
    useEffect(() => {
	    console.log('radio update');
	    props.setter(radioState);
    }, [radioState]);

    return (
	<>
	    {props.text && <View style={{width:"100%", padding:5, alignItems:'flex-start'}}>
		    <Text>{props.text}</Text>
            </View>}

	    <View style={{width:"100%", padding:5, paddingBottom:10, flexDirection:'row', justifyContent:"center", alignItems:'center'}}>

	    <TouchableOpacity style={styles.circle} onPress={() => {setRadioState(true)}}>
		{radioState==true ? (<View style={styles.checkedCircle} />) : (<View />)}
	    </TouchableOpacity>
	    <Text>Yes      </Text>

	    <TouchableOpacity style={styles.circle} onPress={() => {setRadioState(false)}}>
		{radioState==false ? (<View style={styles.checkedCircle} />) : (<View />)}
	    </TouchableOpacity>
	    <Text>No</Text>

	    </View>

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
  circle: {
    height: 35,
    width: 35,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center', // To center the checked circle…
    justifyContent: 'center',
    marginHorizontal: 10
    },
  checkedCircle: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: '#131313'
    }
});

export default React.memo(YesNoQ);
