import React, {useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Images} from '@theme';

export const SplashScreen = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('StartScreen');
    }, 1200);
  });

  return (
    <View style={styles.Main}>
      <Image style={styles.InsideImage} source={Images.homeline} />
      <View style={styles.MainImage}>
        <View style={styles.Img}>
          <Image source={Images.homebook} />
          <Text style={styles.ImageText}>Book Share</Text>
        </View>
      </View>
    </View>
  );
};
