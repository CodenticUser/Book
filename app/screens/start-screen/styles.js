import {StyleSheet} from 'react-native';
import {Images, Size, Colors} from '@theme';

const styles = StyleSheet.create({
  SafeView: {
    backgroundColor: Colors.secondary,
    flex: 1,
  },
  TouchView: {
    alignItems: 'flex-end',
    marginHorizontal: Size.moderateScale(15),
  },
  WrapView: {
    marginTop: Size.moderateScale(30),
    height: Size.verticalScale(350),
  },
  Touch: {
    height: Size.verticalScale(38),
    marginHorizontal: Size.moderateScale(90),
    borderRadius: Size.moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  TouchText: {
    fontSize: Size.moderateScale(20),
    color: Colors.secondary,
  },
  DotStyle: {
    borderWidth: Size.moderateScale(1),
    borderColor: Colors.primary,
    width: Size.moderateScale(8),
    height: Size.moderateScale(8),
    borderRadius: Size.moderateScale(8),
    marginLeft: Size.moderateScale(4),
    marginRight: Size.moderateScale(4),
  },
  ActiveStyle: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    borderWidth: Size.moderateScale(1),
    width: Size.moderateScale(8),
    height: Size.verticalScale(8),
    borderRadius: Size.moderateScale(8),
    marginLeft: Size.moderateScale(4),
    marginRight: Size.moderateScale(4),
  },
  Cover: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Img: {
    height: Size.moderateScale(170),
    width: Size.moderateScale(250),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: Size.moderateScale(60),
  },
  FirstText: {
    marginTop: Size.moderateScale(60),
    marginHorizontal: Size.moderateScale(50),
  },
  SecondText: {
    fontSize: Size.moderateScale(20),
  },
});

export default styles;
