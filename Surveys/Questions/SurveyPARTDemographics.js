//Surveys/Questions/SurveyPARTEmotion
//
// Survey for start of lab session.
// props setter gives array of answers when updated. 
// props.shorten=true will remove the free text questions.
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

import DropDownPicker from 'react-native-dropdown-picker';
import TimeInput from '@tighten/react-native-time-input';
import Slider from "@react-native-community/slider";

import LongQ from '../Questions/LongQ';
import ShortQ from '../Questions/ShortQ';
import FreeQ from '../Questions/FreeQ';
import TrueFalseQ from '../Questions/TrueFalseQ';
import YesNoQ from '../Questions/YesNoQ';
import LikertQ from '../Questions/LikertQ';
import ReactionTime from '../Questions/ReactionTime';

function SurveyPARTDemographics(props){

    const [ageDropOpen, setAgeDropOpen] = useState(false);
    const [ageDropChoice, setAgeDropChoice] = useState('18-25');
    const [ageDropItems, setAgeDropItems] = useState([
	{label:'18-25', value:'18-25'},
	{label:'26-35', value:'26-35'},
	{label:'36-45', value:'36-45'},
	{label:'46-55', value:'46-55'},
	{label:'56-65', value:'56-65'},
	{label:'66+',   value:'66+'}
    ]);

    const [sex, setSex] = useState(0);	
    const [work, setWork] = useState('');	
    const [daily, setDaily] = useState('');	
    const [timeOfDay, setTimeOfDay] = useState('');	

    const [vidgameDropOpen, setVidgameDropOpen] = useState(false);
    const [vidgameDropChoice, setVidgameDropChoice] = useState('none');
    const [vidgameDropItems, setVidgameDropItems] = useState([
	{label:'none', value:'none'},
	{label:'novice', value:'novice'},
	{label:'causal player', value:'casual'},
	{label:'active gamer', value:'active'},
	{label:'hardcore gamer', value:'hardcore'}
    ]);

    const [tetrisDropOpen, setTetrisDropOpen] = useState(false);
    const [tetrisDropChoice, setTetrisDropChoice] = useState('none');
    const [tetrisDropItems, setTetrisDropItems] = useState([
	{label:'none', value:'none'},
	{label:'novice', value:'novice'},
	{label:'causal player', value:'casual'},
	{label:'active gamer', value:'active'},
	{label:'hardcore gamer', value:'hardcore'}
    ]);

    const [vidgameLikert, setVidgameLikert] = useState(null);	
    const [tetrisLikert, setTetrisLikert] = useState(null);	

    const [gameDesc, setGameDesc] = useState('');	
    const [gameDesc2, setGameDesc2] = useState('');	
    const [tetrisDesc, setTetrisDesc] = useState('');	
	
	
    useEffect(() => {
	    props.setter([
		    'age', ageDropChoice,
		    'sex', sex,
		    'occupation', work,
		    'dailyActivities', daily,
		    'timeMostAlert', timeOfDay,
		    'vidgameExp', vidgameDropChoice,
		    'tetrisExp', tetrisDropChoice,
		    'vidgameEnjoyment', vidgameLikert,
		    'tetrisEnjoyment', tetrisLikert,
		    'gameExperience', gameDesc,
		    'gamesEnjoyed', gameDesc2,
		    'tetrisExperience', tetrisDesc
	    ]);
    }, [ageDropChoice, sex, work, daily, timeOfDay, vidgameDropChoice, tetrisDropChoice, vidgameLikert, tetrisLikert, gameDesc, gameDesc2, tetrisDesc]);	

    return (
	<>
            <View style={{width:"100%", padding:5, paddingTop:30, alignItems:'flex-start'}}>
		    <Text>Age:</Text>
            </View>
	    <DropDownPicker open={ageDropOpen} value={ageDropChoice} items={ageDropItems} 
	    	setOpen={setAgeDropOpen} setValue={setAgeDropChoice} setItems={setAgeDropItems}/>

            <View style={{width:"100%", padding:5, paddingTop:30, alignItems:'flex-start'}}>
		    <Text>Sex:</Text>
            </View>

	    <View style={{width:"100%", padding:5, paddingBottom:10, flexDirection:'row', justifyContent:"center", alignItems:'center'}}>

	    <TouchableOpacity style={styles.circle} onPress={() => {setSex(0)}}>
		{sex==0 ? (<View style={styles.checkedCircle} />) : (<View />)}
	    </TouchableOpacity>
	    <Text>M      </Text>

	    <TouchableOpacity style={styles.circle} onPress={() => {setSex(1)}}>
		{sex==1 ? (<View style={styles.checkedCircle} />) : (<View />)}
	    </TouchableOpacity>
	    <Text>F      </Text>

	    <TouchableOpacity style={styles.circle} onPress={() => {setSex(2)}}>
		{sex==2 ? (<View style={styles.checkedCircle} />) : (<View />)}
	    </TouchableOpacity>
	    <Text>Other</Text>

	    </View>


	    <FreeQ text="Work/Occupation:" val={work} setter={setWork}/>
	    <FreeQ text="Typical daily activities:" val={daily} setter={setDaily}/>
	    <FreeQ text="What time of day are you naturally most focused?" val={timeOfDay} setter={setTimeOfDay}/>


            <View style={{width:"100%", padding:5, paddingTop:30, alignItems:'flex-start'}}>
		    <Text style={{fontWeight:'bold'}}>Game Experience</Text>
            </View>


            <View style={{width:"100%", padding:5, paddingTop:30, alignItems:'flex-start'}}>
		    <Text>My experience with video games:</Text>
            </View>
	    <DropDownPicker open={vidgameDropOpen} value={vidgameDropChoice} items={vidgameDropItems} 
	    	setOpen={setVidgameDropOpen} setValue={setVidgameDropChoice} setItems={setVidgameDropItems}/>

	    <LikertQ text="I enjoy playing video games:" lowText="strongly disagree" highText="strongly agree"  setter={setVidgameLikert}/>

	    <FreeQ text="My experience playing video games:" val={gameDesc} setter={setGameDesc}/>
	    <FreeQ text="Types of video games I enjoy:" val={gameDesc2} setter={setGameDesc2}/>

            <View style={{width:"100%", padding:5, paddingTop:30, alignItems:'flex-start'}}>
		    <Text>My experience with Tetris:</Text>
            </View>
	    <DropDownPicker open={tetrisDropOpen} value={tetrisDropChoice} items={tetrisDropItems} 
	    	setOpen={setTetrisDropOpen} setValue={setTetrisDropChoice} setItems={setTetrisDropItems}/>

	    <LikertQ text="I enjoy playing tetris:" lowText="strongly disagree" highText="strongly agree"  setter={setTetrisLikert}/>

	    <FreeQ text="Experience/opinions about tetris:" val={tetrisDesc} setter={setTetrisDesc}/>

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
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: '#131313'
    }
});

export default React.memo(SurveyPARTDemographics);
