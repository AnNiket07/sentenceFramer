import  React, { useState } from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import img1 from '../images/breakfast.jpg';
import img2 from '../images/sports.jpg';
import img3 from '../images/movies.jpg';
import img4 from '../images/dinner.jpg';
import img5 from '../images/places.jpg';
import img6 from '../images/entertainment.jpg';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          height: '90%',
          width: '96%',
          borderColor: 'black',
          borderStyle: 'solid',
          borderWidth: 1,
        }}>
        <View style={styles.header}>
          <Text style={styles.title}>Categories</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: '20%',
          }}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Breakfast')}>
              <Image style={styles.box} source={img1} />
            </TouchableOpacity>
            <Text style={styles.label}>Breakfast</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Sports')}>
              <Image style={styles.box} source={img2} />
            </TouchableOpacity>
            <Text style={styles.label}>Sports</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: '20%',
          }}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Movies')}>
              <Image style={styles.box} source={img3} />
            </TouchableOpacity>
            <Text style={styles.label}>Movies</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Lunch/Dinner')}>
              <Image style={styles.box} source={img4} />
            </TouchableOpacity>
            <Text style={styles.label}>Lunch/Dinner</Text>
          </View>
        </View>
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Places')}>
              <Image style={styles.box} source={img5} />
            </TouchableOpacity>
            <Text style={styles.label}>Places</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Entertainment')}>
              <Image style={styles.box} source={img6} />
            </TouchableOpacity>
            <Text style={styles.label}>Entertainment</Text>
          </View>
        </View> */}
      </View>
    </View>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  box: {
    height: 150,
    width: 170,
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
  header: {
    height: 65,
    backgroundColor:'white'
  },
  title: {
    fontSize: 30,
    margin: 10,
  },
  label:{
    fontStyle:'italic',
    fontSize: 18,
    alignSelf: 'center'
  }
});

// <Button
//         title="Go to Display"
//         onPress={() => navigation.navigate('Display')}
//       />
