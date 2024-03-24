import React from 'react'
import { Image, View } from 'react-native'

export default function Card({iconn,name}) {
  return (
      <View>
          <View>
              {/* <Image source={iconn} /> */}
              <Text>{ name }</Text>
          </View>
    </View>
  )
}
