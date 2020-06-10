import React, {useState, useRef} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {DATA} from './data';
import styles from './styles';
import {TopicItem} from '@components';
import {TextInput} from 'react-native-gesture-handler';
import {Size, Colors} from '@theme';

export const WelcomeScreen = (props) => {
  const [addData, setAddData] = useState(9);
  const [myData, setMyData] = useState(DATA.filter((data) => data.id < 9));
  const [temp, setTemp] = useState(false);
  const [searchText, setSearchText] = useState('');
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

  const onChangeHandler = (search) => {
    setSearchText(search);
    var SearchText = search.toLowerCase();
    var FilteredText = DATA.filter((item) => {
      return item.title.toLowerCase().match(SearchText);
    });
    setMyData(FilteredText);
  };

  return (
    <View style={styles.MainContent}>
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
            marginHorizontal: 20,
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
          <View
            style={{
              borderWidth: 1,
              borderRadius: 5,
              height: 30,
              width: 90,
              justifyContent: 'center',
            }}>
            <TextInput
              placeholder="search"
              onChangeText={onChangeHandler}
              value={searchText}
            />
          </View>
        </View>
      </LinearGradient>
      {/* <TouchableOpacity onPress={() => setMyData(DATA)}>
        <Text>Click</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setMyData([])}>
        <Text>Empty Data</Text>
      </TouchableOpacity> */}

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
