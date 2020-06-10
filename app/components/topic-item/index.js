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
      <View
        style={{marginTop: 40, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={styles.InsideImg} source={img} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
