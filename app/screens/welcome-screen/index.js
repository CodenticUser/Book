import React, {useState, useRef} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {DATA} from './data';
import styles from './styles';
import {TopicItem} from '@components';

export const WelcomeScreen = (props) => {
  const [addData, setAddData] = useState(9);
  const [myData, setMyData] = useState(DATA.filter((data) => data.id < 9));
  const [temp, setTemp] = useState(false);
  const refFlatList = useRef(null);

  const onPressHandler = (id) => {
    var newData = myData;
    var n = 0;

    for (var i = 0; i < myData.length; i++) {
      if (myData[i].isSelect) {
        n++;
        // console.log(myData[i].isSelect);
      }
    }
    // console.log(n);

    console.log(n);
    for (var j = 0; j < myData.length; j++) {
      if (n < 3 && id == myData[j].id) {
        newData[j].isSelect = !newData[j].isSelect;
      }
    }
    setMyData(newData);
    setTemp(!temp);
  };

  const AddPlaceHandler = (place) => {
    console.log('DATA', DATA);
    setMyData(
      DATA.filter((data) => {
        // data.isSelect = false;
        return data.place == place;
      }),
    );
    console.log(
      'DATA.filter((data) => data.place == place)',
      DATA.filter((data) => data.place == place),
    );
    setTemp(!temp);
  };

  return (
    <View style={styles.MainFlex}>
      <View style={styles.LinerData}>
        <LinearGradient
          colors={['rgb(255,145,184)', 'rgb(255,145,184)', 'rgb(255,110,161)']}
          style={styles.InsideLiner}>
          <Text style={styles.LinerText}>Welcome</Text>
          <Text style={styles.LinerSec}>Choose the topics</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <TouchableOpacity
              style={{borderWidth: 1}}
              onPress={() => setMyData(DATA)}>
              <Text>ALL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{borderWidth: 1}}
              onPress={() => AddPlaceHandler('GJ')}>
              <Text>GJ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{borderWidth: 1}}
              onPress={() => AddPlaceHandler('HR')}>
              <Text>HR</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{borderWidth: 1}}
              onPress={() => AddPlaceHandler('PN')}>
              <Text>PN</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        {/* <TouchableOpacity onPress={() => setMyData(DATA)}>
        <Text>Click</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setMyData([])}>
        <Text>Empty Data</Text>
      </TouchableOpacity> */}
      </View>
      <FlatList
        ref={refFlatList}
        // maxToRenderPerBatch={9}
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
        {DATA.length != myData.length && (
          <TouchableOpacity
            style={styles.Topic}
            onPress={() => {
              // console.log('red');
              setMyData(DATA.filter((data) => data.id < addData + 3));
              setAddData(addData + 3);
              setTimeout(() => {
                refFlatList.current.scrollToEnd({animated: true});
              }, 500);
            }}>
            <Text style={styles.Moretopic}>More Topics</Text>
          </TouchableOpacity>
        )}
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
