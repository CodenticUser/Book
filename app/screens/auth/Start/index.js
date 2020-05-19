import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';

const Start = ({navigation}) => {
  return (
    <SafeAreaView style={styles.SafeView}>
      <TouchableOpacity style={styles.TouchView}>
        <Text>Skip</Text>
      </TouchableOpacity>
      <View style={styles.WrapView}>
        <Swiper
          dot={
            <View
              style={{
                borderWidth: 1,
                borderColor: 'rgb(255,110,161)',
                width: 10,
                height: 10,
                borderRadius: 8,
                marginLeft: 4,
                marginRight: 4,
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'rgb(255,110,161)',
                borderColor: 'rgb(255,110,161)',
                borderWidth: 1,
                width: 10,
                height: 10,
                borderRadius: 8,
                marginLeft: 4,
                marginRight: 4,
              }}
            />
          }
          style={styles.wrapper}>
          <View style={styles.slide1}>
            <Image source={require('../../../../images/first.png')} />
            <View style={styles.TextView}>
              <Text style={{fontSize: 20, textAlign: 'center'}}>
                Share Your Favourite Books With Your Family And Friends
              </Text>
            </View>
          </View>
          <View style={styles.slide2}>
            <Image source={require('../../../../images/second.png')} />
            <View style={styles.TextSliede2}>
              <Text style={styles.InsideText2}>
                Discovery 20 Million Books Shelved Online
              </Text>
            </View>
          </View>
          <View style={styles.slide3}>
            <Image source={require('../../../../images/third.png')} />
            <View style={styles.TextSlide3}>
              <Text style={styles.InsideText3}>Buy And Sell Books With Us</Text>
            </View>
          </View>
        </Swiper>
      </View>
      <TouchableOpacity
        style={styles.Touch}
        onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.TouchText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Start;
