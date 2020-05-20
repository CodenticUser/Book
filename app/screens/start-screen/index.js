import React, {useState} from 'react';
import {Text, View, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';
import {Images} from '@theme';

export const StartScreen = (props) => {
  const [state, setState] = useState([
    {
      title: 'Share Your Favourite Books With Your Family And Friends',
      image: Images.startfirst,
    },
    {
      title: 'Discovery 20 Million Books Shelved Online',
      image: Images.startsecond,
    },
    {
      title: 'Buy And Sell Books With Us',
      image: Images.startthird,
    },
  ]);

  return (
    <SafeAreaView style={styles.SafeView}>
      <TouchableOpacity style={styles.TouchView}>
        <Text>Skip</Text>
      </TouchableOpacity>
      <View style={styles.WrapView}>
        <Swiper
          dot={<View style={styles.DotStyle} />}
          activeDot={<View style={styles.ActiveStyle} />}>
          {state.map((item, key) => {
            return (
              <View key={key} style={styles.Cover}>
                <Image style={styles.Img} source={item.image} />
                <View style={styles.FirstText}>
                  <Text style={styles.SecondText}>{item.title}</Text>
                </View>
              </View>
            );
          })}
        </Swiper>
      </View>
      <TouchableOpacity
        style={styles.Touch}
        onPress={() => props.navigation.navigate('WelcomeScreen')}>
        <Text style={styles.TouchText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
