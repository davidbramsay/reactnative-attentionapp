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

function LikertQ(props){
    
    const [radioState, setRadioState] = useState(null);	

     	
    useEffect(() => {
	    props.setter(radioState);
    }, [radioState]);

    return (
	<>
	    {props.text && <View style={{width:"100%", padding:5, alignItems:'flex-start'}}>
		    <Text>{props.text}</Text>
            </View>}

	    <View style={{width:"100%", padding:5, paddingBottom:0, flexDirection:'row'}}>
	      <Text style={{fontSize:11, width:"33%"}}>{props.lowText}</Text>
              <Text style={{fontSize:11, width:"33%", textAlign:'center'}}>neutral</Text>
              <Text style={{fontSize:11, width:"33%", textAlign:'right'}}>{props.highText}</Text>
	    </View>

	    <View style={{width:"100%", padding:5, paddingBottom:10, flexDirection:'row', justifyContent:"center", alignItems:'center'}}>

	    <TouchableOpacity style={styles.circle} onPress={() => {setRadioState(0)}}>
		{radioState==0 ? (<View style={styles.checkedCircle} />) : (<View />)}
	    </TouchableOpacity>

	    <Text>-</Text>

	    <TouchableOpacity style={styles.circle} onPress={() => {setRadioState(1)}}>
		{radioState==1 ? (<View style={styles.checkedCircle} />) : (<View />)}
	    </TouchableOpacity>

	    <Text>-</Text>

	    <TouchableOpacity style={styles.circle} onPress={() => {setRadioState(2)}}>
		{radioState==2 ? (<View style={styles.checkedCircle} />) : (<View />)}
	    </TouchableOpacity>

	    <Text>-</Text>

	    <TouchableOpacity style={styles.circle} onPress={() => {setRadioState(3)}}>
		{radioState==3 ? (<View style={styles.checkedCircle} />) : (<View />)}
	    </TouchableOpacity>

	    <Text>-</Text>

	    <TouchableOpacity style={styles.circle} onPress={() => {setRadioState(4)}}>
		{radioState==4 ? (<View style={styles.checkedCircle} />) : (<View />)}
	    </TouchableOpacity>

	    <Text>-</Text>

	    <TouchableOpacity style={styles.circle} onPress={() => {setRadioState(5)}}>
		{radioState==5 ? (<View style={styles.checkedCircle} />) : (<View />)}
	    </TouchableOpacity>

	    <Text>-</Text>

	    <TouchableOpacity style={styles.circle} onPress={() => {setRadioState(6)}}>
		{radioState==6 ? (<View style={styles.checkedCircle} />) : (<View />)}
	    </TouchableOpacity>

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
    height: 32,
    width: 32,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center', // To center the checked circle…
    justifyContent: 'center',
    marginHorizontal: 5
    },
  checkedCircle: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: '#131313'
    }
});

export default React.memo(LikertQ);
