import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import CalcButton from '../components/CalcButton'

enum Operators {
    addition,substraction,multiplication,divison
}
const { width, height } = Dimensions.get('window')
const CalculatorScreen = () => {
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
                break;
            case Operators.substraction:
                setcurrentValue(`${number2-number1}`)
                break;
            case Operators.multiplication:
                setcurrentValue(`${number1*number2}`)
                break;
            case Operators.divison:
                if(number1>0){
                    setcurrentValue(`${number2/number1}`)
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
        <View  style={styles.container} >
            <Text style={styles.smallResult} > { previousValue } </Text>
            <Text 
                style={styles.result
                } >
                        { currentValue }
            </Text>
            <View style={styles.row} >
                <CalcButton 
                title='C'
                background='#9b9b9b'
                action={clearValue}
                />
                <CalcButton 
                title='+/-'
                background='#9b9b9b'
                action={positiveNegative}
                />
                <CalcButton 
                title='Del'
                background='#9b9b9b'
                action={DeleteButton}
                />
                <CalcButton 
                    title='/'
                    background='#FF9427'
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
                    background='#FF9427'
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
                    background='#FF9427'
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
                    background='#FF9427'
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
                    background='#FF9427'
                    action={calculate}
                />
            </View>
        </View>
    )
}

export default CalculatorScreen

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        marginBottom:10
    },container:{
        paddingHorizontal: width/20,
        flex:1,
        justifyContent:'flex-end',
        minHeight:10
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
