import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {Images, Size, Colors} from '@theme';
import {DATA} from './data';
import styles from './styles';
import {TopicItem} from '@components';

export const WelcomeScreen = (props) => {
  const [myData, setMyData] = useState(DATA);
  const [temp, setTemp] = useState(false);
  var newData = DATA;
  const onPressHandler = (id) => {
    for (var i = 0; i < myData.length; i++) {
      if (id == myData[i].id) {
        newData[i].isSelect = !newData[i].isSelect;
        setMyData(newData);
        setTemp(!temp);
      }
    }
  };

  return (
    <View style={styles.MainFlex}>
      <View style={styles.LinerData}>
        <LinearGradient
          colors={['rgb(255,145,184)', 'rgb(255,145,184)', 'rgb(255,110,161)']}
          style={styles.InsideLiner}>
          <Text style={styles.LinerText}>Welcome</Text>
          <Text style={styles.LinerSec}>Choose the topics</Text>
        </LinearGradient>
        {/* <TouchableOpacity onPress={() => setMyData(DATA)}>
        <Text>Click</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setMyData([])}>
        <Text>Empty Data</Text>
      </TouchableOpacity> */}
      </View>

      <FlatList
        numColumns={3}
        data={myData}
        extraData={temp}
        renderItem={({item}) => (
          <TopicItem
            onPress={(id) => onPressHandler(id)}
            img={item.img}
            isSelect={item.isSelect}
            id={item.id}
            title={item.title}
            place={item.place}
          />
        )}
        keyExtractor={(item) => item.id}
      />

      <View style={{marginHorizontal: 25}}>
        <TouchableOpacity style={styles.Topic}>
          <Text style={styles.Moretopic}>More Topics</Text>
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

export default WelcomeScreen;
