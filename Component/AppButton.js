import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export default function AppButton({ title, box, onPress,btn }) {
	return (
		<TouchableOpacity style={[styles.button, box]} onPress={onPress}>
			<View style={styles.but}>
				<Text styles={[styles.txtbtn, btn]}>{title} </Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "yellow",
		borderRadius: 25,
		padding: 20,
		marginTop: 10,
		justifyContent: "center",
		alignItems: "center",
		width: "100% ",
		
		flex:1,
	},
	but: {
		justifyContent: 'center',
		alignItems:'center'
	},
	txtbtn: {
		textAlign: "center",
		fontSize: 40,
		color: "white",
	},
});
