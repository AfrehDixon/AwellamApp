import React from 'react'
import { Text, View } from 'react-native'
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
} from "@react-navigation/drawer";


import HomePage from './HomePage';
import Contact from './Contact';

const Drawer = createDrawerNavigator()


// function CustomDrawerContent(props) {
// 	return (
// 		<DrawerContentScrollView {...props}>
// 			<DrawerItemList {...props} />
// 			<DrawerItem
// 				label="Close drawer"
// 				onPress={() => props.navigation.closeDrawer()}
// 			/>
// 			<DrawerItem
// 				label="Toggle drawer"
// 				onPress={() => props.navigation.toggleDrawer()}
// 			/>
// 		</DrawerContentScrollView>
// 	);
// }

export default function MyDrawer() {
  return (
		<Drawer.Navigator
			initialRouteName="Home"
			// drawerContent={(props) => <CustomDrawerContent {...props} />}
			// screenOptions={{
			// 	headerRight: () => (
			// 		<Button
			// 			onPress={() =>
			// 				alert("This is a button on the right side of the header!")
			// 			}
			// 			title="Right Button"
			// 		/>
			// 	),
			// }}
		>
			<Drawer.Screen name="Home" component={HomePage} />
			<Drawer.Screen name="Contact" component={Contact} />
		</Drawer.Navigator>
	);
}
