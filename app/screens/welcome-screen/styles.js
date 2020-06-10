import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {Images, Size, Colors} from '@theme';

const styles = StyleSheet.create({
  Touch: {
    height: verticalScale(38),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    marginTop: moderateScale(10),
    marginBottom: moderateScale(45),
  },
  TouchText: {
    fontSize: moderateScale(20),
    color: Colors.secondary,
  },
  item: {
    flexDirection: 'row',
  },
  title: {
    fontSize: Size.moderateScale(15),
    marginTop: Size.moderateScale(15),
  },

  MyTouch: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingTop: Size.moderateScale(35),
  },
  FlatData: {
    position: 'absolute',
    backgroundColor: 'rgba(255,110,161,0.4)',
    height: '100%',
    width: 'auto',
    zIndex: 111111,
    borderRadius: 100,
    height: Size.moderateScale(100),
    width: Size.moderateScale(100),
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Size.moderateScale(35),
    marginLeft: Size.moderateScale(10),
  },
  ImgData: {
    tintColor: Colors.secondary,
    height: Size.moderateScale(35),
    width: Size.moderateScale(35),
  },
  InsideImg: {
    height: Size.moderateScale(100),
    width: Size.moderateScale(100),
  },
  MainContent: {flex: 1},
  LinerData: {backgroundColor: 'red', height: Size.moderateScale(160)},
  InsideLiner: {
    height: Size.moderateScale(160),
  },
  LinerText: {
    fontSize: moderateScale(20),
    color: Colors.secondary,
    marginTop: Size.moderateScale(40),
    marginHorizontal: moderateScale(20),
  },
  LinerSec: {
    fontSize: moderateScale(20),
    color: Colors.secondary,
    marginHorizontal: moderateScale(20),
    marginTop: moderateScale(5),
  },
  Topic: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
  Moretopic: {
    color: Colors.primary,
    borderColor: Colors.primary,
  },
});

export default styles;
