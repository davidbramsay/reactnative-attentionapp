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

import CheckBox from '@react-native-community/checkbox';
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

function ChecklistItem(props){
    
    const [isSelected, setSelection] = useState(false);	

    return (
	<>

	    <View style={{width:"95%", paddingLeft:25, paddingBottom:15, paddingRight:0, flexDirection:'row', justifyContent:"center", alignItems:'center'}}>

	    <CheckBox
	  boxType='square'  
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
	    <View style={{width:"95%", paddingLeft:20}}>
	    	    <Text><B>{props.boldtext} </B>{props.text}</Text>
	    		
            </View>

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

export default React.memo(ChecklistItem);
