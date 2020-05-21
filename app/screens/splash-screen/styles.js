import {StyleSheet} from 'react-native';
import {Size, Colors} from '@theme';

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  MainImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
  },
  InsideImage: {
    marginHorizontal: Size.moderateScale(20),
  },
  Img: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageText: {
    marginTop: Size.moderateScale(5),
    color: Colors.secondary,
    fontSize: Size.moderateScale(20),
  },
});

export default styles;
