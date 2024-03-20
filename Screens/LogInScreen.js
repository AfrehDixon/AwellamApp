import React from 'react'
import { View ,StyleSheet} from 'react-native'
import AppTextInput from '../Component/AppTextInput'

export default function LogInScreen() {
  return (
    <View>
      <Text>Register Screen</Text>
      <AppTextInput placeholder='Enter your name' />
      <AppTextInput placeholder='Enter your Password' />
    </View>
  )
}


