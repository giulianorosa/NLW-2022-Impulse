import React from "react";
import { View, Image, Text, TouchableOpacity } from 'react-native'

import successIMG from '../../assets/success.png'
import { Copyright } from "../Copyright";

import { styles } from './styles'

interface Props {
  onSendAnotherFeedback: () => void
}

export function Success({ onSendAnotherFeedback } : Props) {
  return (
    <View style={styles.container}>
      <Image 
        source={successIMG}
        style={styles.image}
      />

      <Text style={styles.title}>
        Agradecemos seu Feedback
      </Text>

      <TouchableOpacity 
      style={styles.button}
      onPress={onSendAnotherFeedback}
      >
        <Text style={styles.buttonTitle}>
          Quero enviar outro Feedback
        </Text>
      </TouchableOpacity>

      <Copyright />

    </View>
  )
}