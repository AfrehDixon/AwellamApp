import React from 'react'
import { View,StyleSheet,TextInput } from 'react-native';

export default function AppTextInput({placeholder, onChangeText}) {
  return (
		<View>
			TextInput
      <TextInput
        placeholder={placeholder}
				style={styles.input}
				onChangeText={onChangeText}
				value={text}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
});
