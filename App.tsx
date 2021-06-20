import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native'

const App = () => {
  return (
    <>
      <View style={styles.background}>

      </View>
      <SafeAreaView style={styles.container} > 
        <View style={styles.loginContainer} >
          <Text>Hola</Text>
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
    width:Dimensions.get('window').width
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
  }
})

export default App
