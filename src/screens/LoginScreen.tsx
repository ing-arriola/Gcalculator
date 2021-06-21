import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Dimensions, Image,TextInput, TouchableOpacity } from 'react-native'

interface Props extends StackScreenProps <any,any> {}

const LoginScreen = ({navigation}:Props) => {
  return (
    <>
      <View style={styles.background}>
        <Image 
            source={require('../assets/arrow.png')}
            style={{top:100}}
        />
      </View>
      <SafeAreaView style={styles.container} > 
        <View style={styles.loginContainer} >
          <Image
            source={require('../assets/logo.png')}
            style={{position:'relative',top:-100}}
          />
          <View style={{height:80, justifyContent:'space-between'}} >
              <TextInput
                placeholder='User'
                style={styles.textInput}
              />
              <TextInput
                placeholder='User'
                style={styles.textInput}
              />
              
          </View>
          <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={()=>navigation.navigate('ReportScreen')} >
                  <Text style={{color:'#fff'}} >Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center'
  },
  background:{
    backgroundColor:'#0072B1',
    height:Dimensions.get('window').height/2,
    width:Dimensions.get('window').width,
    alignItems:'center',
  },
  loginContainer:{
    backgroundColor:'#fff',
    height:Dimensions.get('window').height/1.8,
    width:Dimensions.get('window').width/1.2,
    top:-Dimensions.get('window').height/5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems:'center',
    justifyContent:'center'
  },
  textInput:{
      height:30,
      width:200,
      borderColor:'#CACACA',
      borderWidth:1,
      paddingLeft:30
  },
  button:{
      backgroundColor:'#009821',
      height:30,
      width:200,
      marginTop:40,
      alignItems:'center',
      justifyContent:'center'
  }
})

export default LoginScreen
