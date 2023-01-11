//Surveys/SurveyPARTTellegen
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

function SurveyPARTTellegen(props){

    const [TAS0, setTAS0] = useState(null);	
    const [TAS1, setTAS1] = useState(null);	
    const [TAS2, setTAS2] = useState(null);	
    const [TAS3, setTAS3] = useState(null);	
    const [TAS4, setTAS4] = useState(null);	
    const [TAS5, setTAS5] = useState(null);	
    const [TAS6, setTAS6] = useState(null);	
    const [TAS7, setTAS7] = useState(null);	
    const [TAS8, setTAS8] = useState(null);	
    const [TAS9, setTAS9] = useState(null);	
    const [TAS10, setTAS10] = useState(null);	
    const [TAS11, setTAS11] = useState(null);	
    const [TAS12, setTAS12] = useState(null);	
    const [TAS13, setTAS13] = useState(null);	
    const [TAS14, setTAS14] = useState(null);	
    const [TAS15, setTAS15] = useState(null);	
    const [TAS16, setTAS16] = useState(null);	
    const [TAS17, setTAS17] = useState(null);	
    const [TAS18, setTAS18] = useState(null);	
    const [TAS19, setTAS19] = useState(null);	
    const [TAS20, setTAS20] = useState(null);	
    const [TAS21, setTAS21] = useState(null);	
    const [TAS22, setTAS22] = useState(null);	
    const [TAS23, setTAS23] = useState(null);	
    const [TAS24, setTAS24] = useState(null);	
    const [TAS25, setTAS25] = useState(null);	
    const [TAS26, setTAS26] = useState(null);	
    const [TAS27, setTAS27] = useState(null);	
    const [TAS28, setTAS28] = useState(null);	
    const [TAS29, setTAS29] = useState(null);	
    const [TAS30, setTAS30] = useState(null);	
    const [TAS31, setTAS31] = useState(null);	
    const [TAS32, setTAS32] = useState(null);	
    const [TAS33, setTAS33] = useState(null);	
	
    useEffect(() => {
	    props.setter([
                'TAS0', TAS0,
		'TAS1', TAS1,
                'TAS2', TAS2,
                'TAS3', TAS3,
                'TAS4', TAS4,
                'TAS5', TAS5,
                'TAS6', TAS6,
                'TAS7', TAS7,
                'TAS8', TAS8,
                'TAS9', TAS9,
		'TAS10', TAS10,
                'TAS11', TAS11,
                'TAS12', TAS12,
                'TAS13', TAS13,
                'TAS14', TAS14,
                'TAS15', TAS15,
                'TAS16', TAS16,
                'TAS17', TAS17,
                'TAS18', TAS18,
                'TAS19', TAS19,
                'TAS20', TAS20,
                'TAS21', TAS21,
                'TAS22', TAS22,
                'TAS23', TAS23,
                'TAS24', TAS24,
                'TAS25', TAS25,
                'TAS26', TAS26,
                'TAS27', TAS27,
                'TAS28', TAS28,
                'TAS29', TAS29,
                'TAS30', TAS30,
                'TAS31', TAS31,
                'TAS32', TAS32,
                'TAS33', TAS33
	    ]);
    }, [TAS0, TAS1, TAS2, TAS3, TAS4, TAS5, TAS6, TAS7, TAS8, TAS9,
	TAS10, TAS11, TAS12, TAS13, TAS14, TAS15, TAS16, TAS17, TAS18, TAS19,
	TAS20, TAS21, TAS22, TAS23, TAS24, TAS25, TAS26, TAS27, TAS28, TAS29,
	TAS30, TAS31, TAS32, TAS33]);

    const renderItem = ({ item }) => {
      return(	    
	    <LikertQ5 setter={item.setter} text={item.text} lowText="disagree" highText="agree"/>
    )};

    return (
	<>
            <View style={{width:"100%", padding:5, paddingTop:40, alignItems:'flex-start'}}>
		    <Text style={{fontWeight:'bold'}}>Rate the following from Strong Agree to Strongly Disagree:</Text>
            </View>

	    <FlatList
		data={[
	    {setter:setTAS0, text:"Sometimes I feel and experience things as I did when I was a child."},
	    {setter:setTAS1, text:"I can be greatly moved by eloquent or poetic language."},
	    {setter:setTAS2, text:"While watching a movie, a TV show, or a play, I may become so involved that I forget about myself and my surroundings, and experience the story as if it were real."},
	    {setter:setTAS3, text:"If I stare at a picture and then look away from it, I can sometimes “see” an image of the picture, almost as if I were still looking at it."},
	    {setter:setTAS4, text:"Sometimes I feel as if my mind could envelop the whole world."},
	    {setter:setTAS5, text:"I like to watch cloud shapes change in the sky."},
	    {setter:setTAS6, text:"If I wish I can imagine things so vividly that it’s like watching a good movie or hearing a good story."},
	    {setter:setTAS7, text:"I think I really know what some people mean when they talk about mystical experiences."},
	    {setter:setTAS8, text:"I sometimes “step outside” my usual self and experience a completely different state of being."},
	    {setter:setTAS9, text:"Textures – such as wool, sand, wood – sometimes remind me of colors or music."},
	    {setter:setTAS10, text:"Sometimes I experience things as if they were doubly real."},
	    {setter:setTAS11, text:"When I listen to music I can get so caught up in it that I don’t notice anything else."},
	    {setter:setTAS12, text:"If I wish, I can imagine that my body is so heavy that I cannot move it."},
	    {setter:setTAS13, text:"I can often somehow sense the presence of another person before I actually see or hear him/her."},
	    {setter:setTAS14, text:"The crackle and flames of a wood fire stimulate my imagination."},
	    {setter:setTAS15, text:"Sometimes I am so immersed in nature or in art that I feel as if my whole state of consciousness has somehow been temporarily changed."},
	    {setter:setTAS16, text:"Different colors have distinctive and special meanings for me."},
	    {setter:setTAS17, text:"I can wander off into my thoughts so completely while doing a routine task that I actually forget what I am doing and a few minutes later find that I have finished it."},
	    {setter:setTAS18, text:"I can sometimes recall certain past experiences so clearly and vividly that it is like living them again."},
	    {setter:setTAS19, text:"Things that might seem meaningless to others often make sense to me."},
	    {setter:setTAS20, text:"If I acted in a play I think that I would really feel the emotions of the character, and “become” that person for the time being, forgetting both myself and the audience."},
	    {setter:setTAS21, text:"My thoughts often occur as visual images rather than as words."},
	    {setter:setTAS22, text:"I am often delighted by small things (like the colors in soap bubbles and the five pointed star shape that appears when you cut an apple across the core)."},
	    {setter:setTAS23, text:"When listening to organ music or other powerful music, I sometimes feel as if I am being lifted into the air."},
	    {setter:setTAS24, text:"Sometimes I can change noise into music by the way I listen to it."},
	    {setter:setTAS25, text:"Some of my most vivid memories are called up by scents and smells."},
	    {setter:setTAS26, text:"Some music reminds me of pictures or changing patterns of color."},
	    {setter:setTAS27, text:"I often know what someone is going to say before he or she says it."},
	    {setter:setTAS28, text:"I often have “physical memories”; for example, after I’ve been swimming I may feel as if I am still in the water."},
	    {setter:setTAS29, text:"The sound of a voice can be so fascinating to me that I can just go on listening to it."},
	    {setter:setTAS30, text:"At times I somehow feel the presence of someone who is not physically there."},
	    {setter:setTAS31, text:"Sometimes thoughts and images come to me without any effort on my part."},
	    {setter:setTAS32, text:"I find that different smells have different colors."},
	    {setter:setTAS33, text:"I can be deeply moved by a sunset."}
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

export default React.memo(SurveyPARTTellegen);
