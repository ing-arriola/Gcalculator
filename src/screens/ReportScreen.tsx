import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Dimensions } from 'react-native'
import { StyleSheet } from 'react-native'
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import Header from '../components/Header'

interface Props extends StackScreenProps <any,any> {}

const ReportScreen = ({navigation}:Props) => {
    return (
        <SafeAreaView>
            <Header/>
            <View style={styles.container} >
                <View style={styles.reportHeader}>
                    <Text
                        style={styles.reportHeaderText}
                    >
                        Report
                    </Text>
                    <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={()=>navigation.navigate('CalculatorScreen')} >
                        <Image
                            source={require('../assets/calculator.png')}
                        />
                        <Text style={{color:'#fff',fontWeight:'bold'}} >Calculator</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        height:Dimensions.get('window').height
    },
    reportHeader:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        height:Dimensions.get('window').height/10
    },
    reportHeaderText:{
        fontSize:35,
        color:'#0072B1',
        fontWeight:'bold'
    },
    button:{
        backgroundColor:'#0072B1',
        height:Dimensions.get('window').height/15,
        width:Dimensions.get('window').width/2.2,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-evenly' 
    }
})

export default ReportScreen
