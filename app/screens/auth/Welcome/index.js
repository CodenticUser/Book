import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const Welcome = () => {
  return (
    <SafeAreaView>
      <Text>Welcome</Text>
      <TouchableOpacity
        style={styles.Touch}
        onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.TouchText}>Apply </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  Touch: {
    height: 46,
    marginHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255,110,161)',
    marginTop: 10,
  },
  TouchText: {
    fontSize: 20,
    color: 'rgb(255,255,255)',
  },
});
