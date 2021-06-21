import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {CalculatorButton} from '../interfaces/calcButton'


const CalcButton = ({ title,background='#2D2D2D' , wider=false, action}:CalculatorButton) => {

    return (
        <TouchableOpacity
            onPress={()=>action(title)}
            activeOpacity={0.7}
            style={
                {...styles.btn,
                backgroundColor:background,
                width:wider?180:80,
                }} >
                    <Text 
                        style={
                            {...styles.btnText, 
                            color:background==='#9b9b9b'? 'black':'white'
                         }} 
                    >{
                        title}
                    </Text>
        </TouchableOpacity>
    )
}

export default CalcButton

const styles = StyleSheet.create({
    btn:{
        width:80,
        height:80,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10
    },
    btnText:{
        fontSize:30,
        fontWeight:'500'
    },
    btnWider:{

    }
});
