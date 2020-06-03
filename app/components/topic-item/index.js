import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import {Images} from '@theme';
import styles from './styles';

export const TopicItem = ({title, img, onPress, id, isSelect, place}) => {
  return (
    <TouchableOpacity onPress={() => onPress(id)} style={styles.MyTouch}>
      {isSelect && (
        <View style={styles.FlatData}>
          <Image style={styles.ImgData} source={Images.welcomecorrect} />
        </View>
      )}
      <Image style={styles.InsideImg} source={img} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
