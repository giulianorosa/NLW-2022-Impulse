import React, { useState } from "react";
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native'
import { ArrowLeft } from "phosphor-react-native";
import { captureScreen } from 'react-native-view-shot'

import { FeedbackType } from '../Widget'
import { ScreenshotButton } from '../ScreenshotButton'
import { Button } from '../Button'
import * as FileSystem from 'expo-file-system';

import { styles } from './styles'
import { theme } from "../../theme";
import { feedbackTypes } from '../../utils/feedbackTypes'
import { api } from "../../libs/api";

interface Props {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

export function Form({ feedbackType, onFeedbackCanceled, onFeedbackSent } : Props) {
  const [isSendFeedback, setIsSendFeedback] = useState(false); 
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('')

  function handleScreenshot() {
    captureScreen({
      format: 'jpg',
      quality: 0.8
    })
    .then(uri => setScreenshot(uri))
    .catch(error => console.log(error))
  }

  function handleScreenshotRemove() {
    setScreenshot(null)
  }

  async function handleSendFeedback() {
    if(isSendFeedback) {
      return;
    }

    setIsSendFeedback(true);
    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64' })
    

    try{
      await api.post('/feedbacks', {
        type: feedbackType, 
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment
      })

      onFeedbackSent();
      
    }catch(error){
      console.log(error);
      setIsSendFeedback(false)
    }
  }

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCanceled}>
          <ArrowLeft 
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image 
            source={feedbackTypeInfo.image}
            style={styles.image}
          />
          <Text style={styles.titleText}>
            {feedbackTypeInfo.title}
          </Text>
        </View>

      </View>

      <TextInput 
        autoCorrect={false}
        multiline
        style={styles.input}
        placeholder='Conte-nos qual seu problema ou sugestão para a aplicação'
        placeholderTextColor={theme.colors.text_secondary}
        onChangeText={setComment}
      />

      <View style={styles.footer}>
        <ScreenshotButton 
          onTakeShot={handleScreenshot}
          onRemoveShot={handleScreenshotRemove}
          screenshot={screenshot}
        />

        <Button 
          onPress={handleSendFeedback}
          isLoading={isSendFeedback}
        />
      </View>

    </View>
  )
}
