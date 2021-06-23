import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Dimensions, ScrollView } from 'react-native'
import { StyleSheet } from 'react-native'
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import {useStoreon} from 'storeon/react'
import { Events, State} from "../store/store"

interface Props extends StackScreenProps <any,any> {}

const {width,height}=Dimensions.get('window')

const ReportScreen = ({navigation}:Props) => {
    const {report} = useStoreon<State, Events>('report')
    return (
        <SafeAreaView>
            <Header goback={()=>navigation.navigate('LoginScreen') } />
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
                <ScrollView>
                    {report.previousResults.map((result,id)=>(
                    <View key={id} style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
                        <Text style={styles.itemNumber}>
                            {id+1}
                        </Text>
                        <Text style={{textAlign:'left',width:width/3}}>
                            {result.name}
                        </Text>
                        <Text style={{textAlign:'left'}} >
                            {result.result}
                        </Text>
                    </View>))}
                </ScrollView>
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
    },
    itemNumber:{
        textAlign:'center',
        marginRight:20,
        marginLeft:width/10,
        backgroundColor:'#009821',
        height:height/18,
        width:width/8,
        fontSize:25,color:'#fff',
        fontWeight:'bold'
        
    }
})

export default ReportScreen
