import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default function AppTextInput({ placeholder, onChangeText, text }) {
	return (
		<View>
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
		height: 50,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 10,
		// width:'100%'
	},
});
