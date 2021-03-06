import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native'
import Header  from '../components/Header'
import CalcButton from '../components/CalcButton'
import {useStoreon} from 'storeon/react'
import { Events, State} from "../store/store"
import { StackScreenProps } from '@react-navigation/stack'

enum Operators {
    addition,substraction,multiplication,divison
}
interface Props extends StackScreenProps <any,any> {}
const { width, height } = Dimensions.get('window')
const CalculatorScreen = ({navigation}:Props) => {
    const {dispatch} = useStoreon<State, Events>('report')
    const [currentValue, setcurrentValue] = useState('0')
    const [previousValue, setpreviousValue] = useState('0')
    const mathOperation = useRef <Operators> ()

    const buildNumber = (newValue:string) => {

        if(currentValue.includes('.') && newValue === '.' ) return

        if(currentValue.startsWith('0')  || currentValue.startsWith('-0') ){
            
            if(newValue === '.' || currentValue.includes('.') ){
                setcurrentValue(currentValue+newValue)
            }

            else if(newValue !== '0' && !currentValue.includes('.') ){
                setcurrentValue(newValue)
            }

        }else{
            setcurrentValue(currentValue+newValue)
        }

    }
    const clearValue =() =>{
        setcurrentValue('0')
        setpreviousValue('0')
    }

    const positiveNegative = ()=> {
        if(currentValue.includes('-')){
            setcurrentValue(currentValue.replace('-',''))
        }else{
            setcurrentValue('-'+currentValue)
        }
    }

    const DeleteButton = () =>{
        if(currentValue.length>1){
            setcurrentValue(currentValue.slice(0,-1))
        }else{
            setcurrentValue('0')
        }
    }

    const startMathOperation = () => {
        if(currentValue.endsWith('.')){
            setpreviousValue(currentValue.slice(0,-1))
        }else{
            setpreviousValue(currentValue)
        }
        setcurrentValue('0')
    }


    const division = () => {
        startMathOperation()
        mathOperation.current=Operators.divison
    }
    const multiplication = () => {
        startMathOperation()
        mathOperation.current=Operators.multiplication
    }
    const substraction = () => {
        startMathOperation()
        mathOperation.current=Operators.substraction
    }
    const addition = () => {
        startMathOperation()
        mathOperation.current=Operators.addition
    }

    const calculate = () => {

        const number1 = Number(currentValue)
        const number2 = Number(previousValue)

        switch ( mathOperation.current ) {
            case Operators.addition:
                setcurrentValue(`${number1+number2}`)
                const add=`${number1}+${number2}=${number1+number2}`
                dispatch('result',[{name:'adition',result:add}])
                break;
            case Operators.substraction:
                setcurrentValue(`${number2-number1}`)
                const res=`${number1}-${number2}=${number1-number2}`
                dispatch('result',[{name:'substraction',result:res}])
                break;
            case Operators.multiplication:
                setcurrentValue(`${number1*number2}`)
                const mul=`${number1}*${number2}=${number1*number2}`
                dispatch('result',[{name:'multiplication',result:mul}])
                break;
            case Operators.divison:
                if(number1>0){
                    setcurrentValue(`${number2/number1}`)
                    const div=`${number1}/${number2}=${number1/number2}`
                    dispatch('result',[{name:'division',result:div}])
                }else{
                    setcurrentValue('Cannot be divided by 0 ')
                }
                
                break;
            default:
                break;
        }
        setpreviousValue('0')


    }

    return (
        <SafeAreaView style={{justifyContent:'space-between',height:height}} >
            <View style={{zIndex:10}} >
                <Header goback={()=>navigation.navigate('ReportScreen')} />
            </View>
            <View style={{backgroundColor:'#fff', height:height/2,position:'absolute',width:width*1.15,borderRadius:300,zIndex:1,top:-200,alignSelf:'center'}} />
            <View style={{backgroundColor:'#0072B1', height:height/2,position:'absolute',width:width,top:-70}} />
            <View  >
                <Text style={styles.smallResult} > { previousValue } </Text>
                <Text 
                    style={styles.result
                    } >
                            { currentValue }
                </Text>
                <View style={styles.row} >
                    <CalcButton 
                    title='C'
                    action={clearValue}
                    />
                    <CalcButton 
                    title='+/-'
                    action={positiveNegative}
                    />
                    <CalcButton 
                    title='Del'
                    action={DeleteButton}
                    />
                    <CalcButton 
                        title='/'
                        action={division}
                    />
                </View>
                <View style={styles.row} >
                    <CalcButton 
                        title='7'
                        action={buildNumber}
                    />
                    <CalcButton 
                        title='8'
                        action={buildNumber}
                    />
                    <CalcButton 
                        title='9'
                        action={buildNumber}
                        />
                    <CalcButton 
                        title='X'
                        action={multiplication}
                    />
                </View>
                <View style={styles.row} >
                    <CalcButton 
                    title='4'
                    action={buildNumber}
                    />
                    <CalcButton 
                        title='5'
                        action={buildNumber}
                        />
                    <CalcButton 
                        title='6'
                        action={buildNumber}
                        />
                    <CalcButton 
                        title='-'
                        action={substraction}
                    />
                </View>
                <View style={styles.row} >
                    <CalcButton 
                        title='1'
                        action={buildNumber}
                        />
                    <CalcButton 
                        title='2'
                        action={buildNumber}
                        />
                    <CalcButton 
                        title='3'
                        action={buildNumber}
                        />
                    <CalcButton 
                        title='+'
                        action={addition}
                    />
                </View>
                <View style={styles.row} >
                    <CalcButton 
                        title='0'
                        action={buildNumber}
                        wider />
                    <CalcButton 
                        title='.'
                        action={buildNumber}
                        />
                    <CalcButton 
                        title='='
                        background='green'
                        action={calculate}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CalculatorScreen

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        marginBottom:10
    },
    result:{
        color:'#fff',
        fontSize:60,
        textAlign:'right'
    },
    smallResult:{
        color:'#fff',
        fontSize:20,
        textAlign:'right',
        opacity:0.6,
    }
});
