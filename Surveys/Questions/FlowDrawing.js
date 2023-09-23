//Surveys/FlowDrawing.js
//
// Survey item to allow free-drawing of depth of focus during interval.
// 
// expects props: setScrollEnabled (will stop scroll if embedded in scrollView), setPath, setCanvasSize (data passed up on draw)
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

import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

//import { Canvas, Path } from "@shopify/react-native-skia";
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

function FlowDrawing(props){
    const canvas = useRef(null);	
   	
    return (
	<>
	    <View style={{width:"100%", padding:5}}>
	    <Text style={{fontWeight:"bold", paddingBottom:5}}>Flow Drawing</Text>
		<View style={{ width:"100%", height:100, backgroundColor: "grey" }}>
	        <RNSketchCanvas
	    	    ref={canvas}
	    	    localSourceImage = {{
			filename: 'flow_axes.png',
			directory: '',    
			mode: 'AspectFill'    
		    }}
		    containerStyle={{ backgroundColor: 'transparent', flex: 1 }}
		    canvasStyle={{ backgroundColor: 'transparent', flex: 1 }}
		    defaultStrokeIndex={0}
		    defaultStrokeWidth={5}
		    strokeComponent={color => (
		      <View style={[{ backgroundColor: color }, styles.strokeColorButton]} />
		    )}
	    	    onStrokeStart={(x,y) => {
			props.setScrollEnabled(false);    
			canvas.current.undo();    
		    }}
	    	    onStrokeEnd={(data) => {
			    props.setScrollEnabled(true);    
			    props.setPath(data.path.data);
			    props.setCanvasSize(data.size);
		    }}
	        />
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
});

export default FlowDrawing;
