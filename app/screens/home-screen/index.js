import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Images} from '@theme';

export const HomeScreen = (props) => {
  return (
    <View style={styles.Main}>
      <Image style={styles.InsideImage} source={Images.homeline} />
      <View style={styles.MainImage}>
        <View style={styles.Img}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('StartScreen')}>
            <Image source={Images.homebook} />
          </TouchableOpacity>
          <Text style={styles.ImageText}>Book Share</Text>
        </View>
      </View>
    </View>
  );
};
