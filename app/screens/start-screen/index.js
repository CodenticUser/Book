import React, {useState} from 'react';
import {Text, View, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';
import {Images} from '@theme';

export const StartScreen = (props) => {
  const [state, setState] = useState([
    {
      title: 'Share Your Favourite Books With Your Family And Friends',
      image: Images.startscroll1,
    },
    {
      title: 'Discovery 20 Million Books Shelved Online',
      image: Images.startscroll2,
    },
    {
      title: 'Buy And Sell Books With Us',
      image: Images.startscroll3,
    },
  ]);

  const [hide, setHide] = useState(false);

  return (
    <SafeAreaView style={styles.SafeView}>
      <TouchableOpacity
        style={styles.TouchView}
        onPress={() => props.navigation.navigate('WelcomeScreen')}>
        <Text style={styles.skipColor}>Skip</Text>
      </TouchableOpacity>
      <View style={styles.WrapView}>
        <Swiper
          autoplay={true}
          onIndexChanged={(index) => {
            if (index == 2) {
              setTimeout(() => {
                setHide(true);
              }, 0);
            } else {
              setHide(false);
            }

            console.log(index);
          }}
          loop={false}
          dot={<View style={styles.DotStyle} />}
          activeDot={<View style={styles.ActiveStyle} />}>
          {state.map((item, key) => {
            return (
              <View key={key} style={styles.Cover}>
                <View
                  style={{
                    height: 230,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={item.image} />
                </View>
                <View style={styles.FirstText}>
                  <Text style={styles.SecondText}>{item.title}</Text>
                </View>
              </View>
            );
          })}
        </Swiper>
      </View>
      {hide && (
        <TouchableOpacity
          style={styles.Touch}
          onPress={() => props.navigation.navigate('WelcomeScreen')}>
          <Text style={styles.TouchText}>Get Started</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};
