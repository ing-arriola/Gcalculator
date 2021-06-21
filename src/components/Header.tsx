import React from 'react'
import { View, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container} >
            <TouchableOpacity activeOpacity={0.7} style={{position:'absolute',left:20}}>
                    <Image
                        source={require('../assets/leftArrow.png')}
                    />
                </TouchableOpacity>
                <Image
                    source={require('../assets/logo.png')}
                    style={{alignSelf:'center'}}
                />
            </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center', 
        height:Dimensions.get('window').height/7
    }
})

export default Header
