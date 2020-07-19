import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View,TouchableHighlight } from 'react-native';
import firebase, { auth } from 'firebase';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import * as Facebook from 'expo-facebook'; 
//import Expo from 'expo';
//import { Expo } from 'expo';
//import * as Facebook from 'expo'; 

export default class App extends React.Component{
  constructor(props)
  {
    super(props)
    //this.registerUser('apnitest@gmail.com','fakeitnow');
 
   /* firebase.auth().signOut()
    .then(()=>{
      console.log('logged out........');
    }).catch((error)=>{
      console.log('error',error)
    })
    
    
    */

     
    firebase.auth().onAuthStateChanged(function(user){

      if(user)
      {
        console.log('logged in',user)

      }
      else{
        console.log('logged out')

      }
    })
  }

      async loginWithFacebook (){
        Facebook.initializeAsync('1077692555958396' | 'Insta' )
      
      const{type,token}=await Facebook.logInWithReadPermissionsAsync(
        '1077692555958396',
        {permissions:['email','public_profile']}
      )

      if(type ==='success'){
        const credentials=firebase.auth().FacebookAuthProvider.credential(token);
        firebase.auth().signInWithCredential(credentials)
       .catch((error)=>{
          console.log('error',error)
        })
      }
    }

  registerUser=(email,password)=>{
    console.log(email,password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userObj)=>console.log(email,password,userObj))
    .catch((error)=>console.log('error loggign in',error));
  }


/* firebase.auth().signOut()
    .then(()=>{
      console.log('logged out........');
    }).catch((error)=>{
      console.log('error',error)
    })
    
    
    */
  

  render(){
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TouchableHighlight 
      onPress={()=>this.loginWithFacebook()}
      style={{backgroundColor:'blue'}} >
        <Text style={{color:'white'}}>Login With Facebook</Text>

      </TouchableHighlight>
     
    </View>
  );
}
}

var firebaseConfig = {
  apiKey: "AIzaSyDbA_uQHeAI5otXnPycztqMJP57-ZblR1k",
  authDomain: "insta-c5dc0.firebaseapp.com",
  databaseURL: "https://insta-c5dc0.firebaseio.com",
  projectId: "insta-c5dc0",
  storageBucket: "insta-c5dc0.appspot.com",
  messagingSenderId: "1025708575333",
  appId: "1:1025708575333:web:cdd3f893d121c6a156948c",
  measurementId: "G-8JLR4PLECF",
};

firebase.initializeApp(firebaseConfig);
//firebase.analytics();






//const f=firebase;
 //const database=firebase.database();
 //const auth=firebase.auth();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



