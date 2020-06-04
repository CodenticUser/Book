import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {Images, Size, Colors} from '@theme';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  HeaderImg: {
    height: Size.moderateScale(200),
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  HeaderText: {
    color: Colors.secondary,
    fontWeight: 'bold',
    marginTop: Size.moderateScale(30),
    fontSize: Size.moderateScale(35),
  },
  PlaceHolder: {
    borderWidth: 1,
    height: Size.moderateScale(50),
    borderColor: Colors.primary,
    borderRadius: Size.moderateScale(10),
    padding: Size.moderateScale(10),
  },
  MainPlaceHolder: {
    justifyContent: 'space-between',
    height: Size.moderateScale(350),
  },
  BackClick: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Size.moderateScale(150),
  },
  AccText: {
    color: Colors.primary,
    fontWeight: 'bold',
    marginTop: Size.moderateScale(10),
    fontSize: Size.moderateScale(35),
  },
  HeadImg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: Size.moderateScale(190),
  },
  Footer: {width: '100%'},
  ContText: {
    textAlign: 'center',
    lineHeight: Size.moderateScale(20),
    color: Colors.primary,
  },
  BookImg: {
    borderTopLeftRadius: Size.moderateScale(20),
    borderTopRightRadius: Size.moderateScale(20),
    padding: Size.moderateScale(35),
    backgroundColor: Colors.secondary,
    height: '100%',
  },
  Mainimg: {
    height: Size.moderateScale(100),
    width: Size.moderateScale(155),
    padding: Size.moderateScale(20),
  },
  BtnSignIn: {
    height: moderateScale(50),
    borderRadius: Size.moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    borderWidth: Size.moderateScale(3),
    borderColor: Colors.primary,
    marginTop: Size.moderateScale(10),
    marginBottom: Size.moderateScale(20),
  },
  BtnSignUp: {
    height: Size.moderateScale(50),
    borderRadius: Size.moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  BtnText: {
    fontSize: Size.moderateScale(20),
    color: Colors.secondary,
  },
  BtnTextIn: {
    fontSize: Size.moderateScale(20),
    color: Colors.primary,
  },
  backBtn: {
    height: Size.moderateScale(20),
    width: Size.moderateScale(20),
    tintColor: Colors.primary,
    marginBottom: Size.moderateScale(20),
  },
});

export default styles;
