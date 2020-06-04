import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {Images, Size, Colors} from '@theme';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';

export const SignUpScreen = (props) => {
  return (
    <ScrollView style={styles.Container}>
      <View style={styles.HeaderImg}>
        <Text style={styles.HeaderText}>ONLINE LIBRARY</Text>
        <Image style={styles.HeadImg} source={Images.loginImage} />
      </View>
      <View style={styles.BookImg}>
        <View style={styles.BackClick}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image style={styles.backBtn} source={Images.backBtn} />
            <Text style={styles.AccText}> Create Account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MainPlaceHolder}>
          <TextInput style={styles.PlaceHolder} placeholder="Full Name" />
          <TextInput style={styles.PlaceHolder} placeholder="Email" />
          <TextInput style={styles.PlaceHolder} placeholder="Password" />
          <TextInput
            style={styles.PlaceHolder}
            placeholder="Confirm Password"
          />
          <TouchableOpacity
            style={styles.BtnSignUp}
            onPress={() => props.navigation.navigate('SignUpScreen')}>
            <Text style={styles.BtnText}>Sign up </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
