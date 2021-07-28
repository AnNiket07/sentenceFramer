import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Displayscreen = ({navigation, route}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.box, {height: '50%', width: '80%'}]}>
          <Text style={styles.display}>
            I {route.params.option} {route.params.msg}{' '}
          </Text>
        </View>
      </View>
      <Button
        style={styles.buttonView}
        title="Back to HomeScreen"
        onPress={() => navigation.navigate('Home')}></Button>
    </View>
  );
};
export default Displayscreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  box: {
    marginTop: '20%',
    justifyContent: 'center',
    borderColor: '#ddd',
    // borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  display: {
    fontSize: 28,
    alignSelf: 'center',
  },
  buttonView: {
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});
