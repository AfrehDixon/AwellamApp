import React from 'react'
import { View } from 'react-native-web'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'



import HomePage from './Screens/HomePage'

const Tab= createBottomTabNavigator()






export default function Index() {
  return (
      <Tab.Navigator>
          <Tab.Screen name='Home' component={HomePage} />
      </Tab.Navigator>
  )
}
