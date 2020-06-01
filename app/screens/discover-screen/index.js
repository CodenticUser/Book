import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import {DATA} from './json';
import {Size, Images, Colors} from '@theme';
import Carousel from 'react-native-snap-carousel';

function Item({title, img}) {
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginLeft: 15}}>
      <Image
        style={{
          height: Size.moderateScale(60),
          width: Size.moderateScale(60),
          marginTop: 10,
        }}
        source={img}
      />
      <Text style={{fontSize: 9, marginTop: 5}}>{title}</Text>
    </View>
  );
}
function Bookitem({bookImg}) {
  return (
    <View style={{flex: 1}}>
      <Image
        style={{
          height: Size.moderateScale(165),
          width: Size.moderateScale(100),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          marginBottom: 15,
        }}
        source={bookImg}
      />
    </View>
  );
}

function BookShare({shareImge, shareTitle, shareByTitle}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        marginRight: 15,
      }}>
      <Image
        style={{
          height: Size.moderateScale(220),
          width: Size.moderateScale(130),
          borderRadius: 5,
          marginBottom: 15,
        }}
        source={shareImge}
      />
      <Text>{shareTitle}</Text>
      <Text
        style={{
          color: Colors.shareFont,
          fontSize: Size.moderateScale(10),
          marginTop: 5,
        }}>
        {shareByTitle}
      </Text>
    </View>
  );
}
function RecentShare({recentImage, recentTitle, recentByTitle}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        marginRight: 15,
      }}>
      <Image
        style={{
          height: Size.moderateScale(180),
          width: Size.moderateScale(120),
        }}
        source={recentImage}
      />
      <Text>{recentTitle}</Text>
      <Text
        style={{
          color: Colors.shareFont,
          fontSize: Size.moderateScale(10),
          marginTop: 5,
        }}>
        {recentByTitle}
      </Text>
    </View>
  );
}

export const DiscoverScreen = () => {
  return (
    <ScrollView pagingEnabled={false} decelerationRate={0}>
      <SafeAreaView>
        <View style={{height: 300, backgroundColor: 'pink'}}>
          {/* <Carousel sliderWidth={80} sliderHeight={100} /> */}
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 20}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                height: Size.moderateScale(60),
                width: Size.moderateScale(60),
                marginTop: 10,
              }}
              source={Images.welcomeblack}
            />
            <Text style={{marginTop: 5, fontSize: 10}}>Add</Text>
          </View>

          <View
            style={{
              marginTop: 20,
              marginBottom: 20,
              height: 110,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <FlatList
              horizontal={true}
              data={DATA}
              renderItem={({item}) => (
                <Item img={item.img} title={item.title} />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>

        <View style={{marginHorizontal: 20}}>
          <Text
            style={{
              fontSize: 25,
              height: 40,
              justifyContent: 'center',
            }}>
            Trending Books
          </Text>
        </View>
        <View style={{marginHorizontal: 20, marginRight: 5}}>
          <FlatList
            numColumns={3}
            data={DATA}
            renderItem={({item}) => <Bookitem bookImg={item.bookImg} />}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View
          style={{
            height: 40,
            marginTop: 30,
            marginHorizontal: 20,
          }}>
          <Text style={{fontSize: 25}}>Best Share</Text>
        </View>
        <View style={{marginHorizontal: 20}}>
          <FlatList
            horizontal={true}
            data={DATA}
            renderItem={({item}) => (
              <BookShare
                shareImge={item.shareImge}
                shareTitle={item.shareTitle}
                shareByTitle={item.shareByTitle}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View
          style={{
            height: 40,
            marginTop: 30,
            marginHorizontal: 20,
          }}>
          <Text style={{fontSize: 25}}> Recently Viewed </Text>
        </View>
        <View style={{marginHorizontal: 20}}>
          <FlatList
            horizontal={true}
            data={DATA}
            renderItem={({item}) => (
              <RecentShare
                recentImage={item.recentImage}
                recentTitle={item.recentTitle}
                recentByTitle={item.recentByTitle}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
