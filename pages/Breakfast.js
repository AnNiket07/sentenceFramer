import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import img1 from '../images/breakfast/eggs.jpg';
import img2 from '../images/breakfast/bananas.png';
import img4 from '../images/breakfast/apples.png';
import img3 from '../images/breakfast/oats.jpg';
import img5 from '../images/breakfast/sandwich.jpg';
import img6 from '../images/breakfast/pancake.jpg';

const Breakfast = ({navigation}) => {

  const [option,setOption]= useState('dislike');
  const [msg,setMsg] = useState('eggs');

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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <View>
            <TouchableOpacity
              onPress={() => {
                setMsg('Eggs');
              }}>
              <Image style={styles.box} source={img1} />
            </TouchableOpacity>
            <Text style={styles.label}>Eggs</Text>
          </View>
          <View >
            <TouchableOpacity
             onPress={() => {
                setMsg('Bananas');
              }}
            >
              <Image style={styles.box} source={img2} />
            </TouchableOpacity>
            <Text style={styles.label}>Bananas</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <View>
            <TouchableOpacity
             onPress={() => {
                setMsg('Oats');
              }}
            >
              <Image style={styles.box} source={img3} />
            </TouchableOpacity>
            <Text style={styles.label}>Oats</Text>
          </View>
          <View>
            <TouchableOpacity
             onPress={() => {
                setMsg('Apples');
              }}
            >
              <Image style={styles.box} source={img4} />
            </TouchableOpacity>
            <Text style={styles.label}>Apples</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <View>
            <TouchableOpacity
             onPress={() => {
                setMsg('Sandwitches');
              }}
            >
              <Image style={styles.box} source={img5} />
            </TouchableOpacity>
            <Text style={styles.label}>Sandwiches</Text>
          </View>
          <View>
            <TouchableOpacity
             onPress={() => {
                setMsg('Pancakes');
              }}
            >
              <Image style={styles.box} source={img6} />
            </TouchableOpacity>
            <Text style={styles.label}>Pancakes</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <Button
            title="Like"
            onPress={() => {
              setOption('like')
            }}></Button>
          <Button
            title="Submit"
            onPress={() => navigation.navigate('Display', {msg,option})}></Button>
          <Button
            title="Dislike"
            onPress={() => {
              setOption('do not like')
            }}></Button>
        </View>
        {/* <Text>{display.option}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 150,
    width: 170,
  },
  header: {
    height: 70,
  },
  title: {
    fontSize: 30,
    margin: 10,
  },
  label: {
    fontStyle: 'italic',
    fontSize: 18,
    alignSelf: 'center',
  },
});

export default Breakfast;
