'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  h1: {
    flexDirection:'row',
	fontSize: 30,
	paddingBottom: 40,
	paddingTop: 10,
	color: '#012541',
	fontWeight:'600',
	marginTop:10,
	alignSelf: 'center',
  },
  h2: {
    flexDirection:'row',
	fontSize: 26,
	paddingBottom: 25,
	paddingTop: 20,
	color: '#012541',
	fontWeight:'600',
	marginTop:10,
	alignSelf: 'center',
  },
  h3: {
    flexDirection:'row',
	fontSize: 26,
	paddingBottom: 40,
	paddingTop: 10,
	color: '#012541',
	fontWeight:'600',
	marginTop:10,
	alignSelf: 'center',
  },
  p: {
	fontSize: 18,
	color: '#012541',
	fontWeight:'500',
	alignSelf: 'flex-start',
	lineHeight: 30,
	marginBottom:5,
	marginRight:15,
	paddingBottom:10,
  },
  reg :{
	fontWeight: '400',
  },
  bold: {
    fontWeight: '500',
  },
  textbig: {
	fontSize:20 ,
	marginTop: 45,
	marginBottom: 15,
	alignSelf:'center',
  },
  textbigger: {
    fontSize:22,
  },
  h2bigger: {
	  fontSize: 30,
  },
  h3bigger: {
	  fontSize:28,
  },
  toggles: {
	flexDirection:'row',
	marginTop: 25,
	marginBottom: 15,
	width: 120,
	height: 40,
    fontSize:14,
},
 MyNav: {
          height: 160,
          elevation: 8,
          position: 'absolute',
		  left: 0,
		  right: 0,
          bottom: 0,
   },
   rippleColor:{
	   color:'#012541',
   },
   rippleInvert: {
	   color: '#ffc2ff',
   },
   TabBColor:{
	   backgroundColor:'#012541',
   },
   IconAColor: {
	   color: '#ffc2ff',
   },
   TabInvert: {
	   backgroundColor: '#ffc2ff',
   },
   IconInvert: {
	   color : '#012541',
   },
	   

});