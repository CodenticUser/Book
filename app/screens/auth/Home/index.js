import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.Main}>
      <Image
        style={styles.InsideImage}
        source={require('../../../../images/line.png')}
      />
      <View style={styles.MainImage}>
        <View style={styles.Image}>
          <Image source={require('../../../../images/book.png')} />
          <Text style={styles.ImageText}>Book Share</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
