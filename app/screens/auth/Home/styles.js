import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: 'rgb(255,110,161)',
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
    marginHorizontal: 20,
  },
  Image: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageText: {
    marginTop: 5,
    color: 'rgb(255,255,255)',
    fontSize: 20,
  },
});

export default styles;
