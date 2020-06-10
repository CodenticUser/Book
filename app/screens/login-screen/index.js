import React from 'react';
import {Text, View, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import styles from './styles';
import {Images, Size, Colors} from '@theme';

export const LogInScreen = (props) => {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.HeaderImg}>
        <Text style={styles.HeaderText}>ONLINE LIBRARY</Text>
      </View>
      <View style={styles.MainArea}>
        <View style={styles.InnerContent}>
          <Image style={styles.Mainimg} source={Images.loginBookImg} />
        </View>
        <View style={styles.FlexArea}>
          <Text style={styles.ContText}>
            Welcome to the library. Welcome to the library. Welcome to the
            library. Welcome to the library.Welcome to the library.Welcome to
            the library.Welcome to the library. Welcome to the library. Welcome
            to the library. Welcome to the library.Welcome to the libraryWelcome
            to the library
          </Text>
        </View>
        <View style={styles.FlexArea}>
          <TouchableOpacity
            style={styles.BtnSignUp}
            onPress={() => props.navigation.navigate('SignUpScreen')}>
            <Text style={styles.BtnText}>Sign up </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.BtnSignIn}
            onPress={() => props.navigation.navigate('SignInScreen')}>
            <Text style={styles.BtnTextIn}>Sign In </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
