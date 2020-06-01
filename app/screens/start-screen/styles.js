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
    height: Size.verticalScale(375),
  },
  Touch: {
    height: Size.verticalScale(38),
    marginHorizontal: Size.moderateScale(90),
    borderRadius: Size.moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  TouchDis: {
    height: Size.verticalScale(38),
    marginHorizontal: Size.moderateScale(90),
    borderRadius: Size.moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  TouchText: {
    fontSize: Size.moderateScale(20),
    color: Colors.secondary,
  },
  DotStyle: {
    borderWidth: Size.moderateScale(1),
    borderColor: Colors.primary,
    width: Size.moderateScale(9),
    height: Size.moderateScale(9),
    borderRadius: Size.moderateScale(8),
    marginLeft: Size.moderateScale(4),
    marginRight: Size.moderateScale(4),
  },
  ActiveStyle: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    borderWidth: Size.moderateScale(1),
    width: Size.moderateScale(9),
    height: Size.verticalScale(8),
    borderRadius: Size.moderateScale(9),
    marginLeft: Size.moderateScale(4),
    marginRight: Size.moderateScale(4),
  },
  Cover: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  Img: {
    height: 220,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Size.moderateScale(50),
    borderWidth: 1,
  },
  FirstText: {
    marginTop: Size.moderateScale(60),
    marginHorizontal: Size.moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  SecondText: {
    fontSize: Size.moderateScale(20),
    textAlign: 'center',
  },
  skipColor: {
    color: Colors.skipColor,
    fontSize: Size.moderateScale(15),
  },
});

export default styles;
