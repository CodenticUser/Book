import {StyleSheet} from 'react-native';
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
  MainArea: {
    borderTopLeftRadius: Size.moderateScale(20),
    borderTopRightRadius: Size.moderateScale(20),
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.secondary,
    padding: Size.moderateScale(30),
  },
  Mainimg: {
    height: Size.moderateScale(100),
    width: Size.moderateScale(155),
  },
  BtnSignIn: {
    height: Size.moderateScale(50),
    borderRadius: Size.moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    borderWidth: 3,
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

    marginBottom: Size.moderateScale(20),
    width: '100%',
  },
  BtnText: {
    fontSize: Size.moderateScale(20),
    color: Colors.secondary,
  },
  BtnTextIn: {
    fontSize: Size.moderateScale(20),
    color: Colors.primary,
  },
  InnerContent: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  FlexArea: {width: '100%', flex: 1},
});

export default styles;
