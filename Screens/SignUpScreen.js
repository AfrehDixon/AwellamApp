import React from 'react'
import { View } from 'react-native'
import AppTextInput from '../Component/AppTextInput';

export default function SignUpScreen() {
  return (
		<View>
			<Text>Sign Up screen</Text>
			<AppTextInput placeholder="Enter your name" />
			<AppTextInput placeholder="Enter your Password" />
		</View>
	);
}
