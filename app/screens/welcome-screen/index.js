import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {Images} from '@theme';

export const WelcomeScreen = (props) => {
  return (
    <View style={{}}>
      <View>
        <LinearGradient
          colors={['rgb(255,145,184)', 'rgb(255,145,184)', 'rgb(255,110,161)']}
          style={{height: verticalScale(130)}}>
          <Text
            style={{
              fontSize: moderateScale(22),
              color: 'rgb(255,255,255)',
              marginTop: moderateScale(45),
              marginHorizontal: moderateScale(20),
            }}>
            Welcome
          </Text>
          <Text
            style={{
              fontSize: moderateScale(22),
              color: 'rgb(255,255,255)',
              marginHorizontal: moderateScale(20),
              marginTop: moderateScale(5),
            }}>
            Choose the topics
          </Text>
        </LinearGradient>
      </View>
      <View style={{marginHorizontal: moderateScale(20)}}>
        <View style={{flexDirection: 'row', marginTop: moderateScale(60)}}>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Image source={Images.welcomehistory} />
            <Text
              style={{marginTop: moderateScale(10), color: 'rgb(255,110,161)'}}>
              History
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: moderateScale(30),
          }}>
          <Text
            style={{
              color: 'rgb(255,110,161)',
            }}>
            More Topics
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Touch}
          onPress={() => props.navigation.navigate('BottomTab')}>
          <Text style={styles.TouchText}>Apply </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Touch: {
    height: verticalScale(46),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255,110,161)',
    marginTop: moderateScale(10),
  },
  TouchText: {
    fontSize: moderateScale(20),
    color: 'rgb(255,255,255)',
  },
});
