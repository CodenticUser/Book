import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {Images, Size, Colors} from '@theme';

const styles = StyleSheet.create({
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
});

export default styles;
