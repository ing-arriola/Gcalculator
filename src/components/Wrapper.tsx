import React, { ReactElement } from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'

interface AuxProps {
    children: ReactElement | ReactElement[],
  }


const Wrapper = ({children}: AuxProps) => {
    return (
        <SafeAreaView
        style={{alignItems:'center',backgroundColor:'#E5E5E5'}}
    >
        <Image
                source={require('../assets/logo.png')}
                style={{marginTop:10}}
            />
    </SafeAreaView>
    )
}

export default Wrapper
