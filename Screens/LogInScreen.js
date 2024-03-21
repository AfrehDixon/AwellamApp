import React, { useState } from 'react'
import { View ,Text,StyleSheet} from 'react-native'
import AppTextInput from '../Component/AppTextInput'
import AppButton from '../Component/AppButton'

export default function LogInScreen ({navigation: {navigate}}) {
  const [fullname , setfullname]= useState('')
  const [password , setpassword]= useState('')
  return (
    <View style={ styles.login }>
      <View>

			<Text style={styles.logintext}>Login to you account</Text>
			<AppTextInput
        placeholder="Enter your name"
        text={fullname}
				onChangeText={(e) => setfullname(e.target.fullname)}
			/>
			<AppTextInput
        placeholder="Enter your Password"
        text={password}
				onChangeText={(e) => setfullname(e.target.password)}
			/>
      </View>
      <View style={styles.forget}>
        <Text style={styles.fortgetxt}>Forget Password ?</Text>
      </View>
      <AppButton title='LogIn' style={styles.box} onPress={()=>navigate('Home')}/>
		</View>
	);
}
const styles = StyleSheet.create({
  login: {
    marginTop: 20,
    
  },
  logintext: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4a6cb3'
    
  },
  forget: {
    justifyContent: 'flex-end',
    flex: 1,
    alignItems: 'flex-end',
    paddingLeft: 10,
    
  },
  fortgetxt: {
    color: 'red',
    marginLeft:4
  },
  box: {
    backgroundColor: 'blue',
    color:'white'
  }
})

