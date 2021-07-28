import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import img1 from '../images/movies/romantic.png';
import img2 from '../images/movies/biopic.png';
import img3 from '../images/movies/comedy.jpg';
import img4 from '../images/movies/detective.jpeg';
import img5 from '../images/movies/horror.jpg';
import img6 from '../images/movies/drama.jpeg';

const Lunch = ({navigation}) => {

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
                setMsg('Romantic Movies');
              }}>
              <Image style={styles.box} source={img1} />
            </TouchableOpacity>
            <Text style={styles.label}>Romantic Movies</Text>
          </View>
          <View >
            <TouchableOpacity
             onPress={() => {
                setMsg('Biopic Movies');
              }}
            >
              <Image style={styles.box} source={img2} />
            </TouchableOpacity>
            <Text style={styles.label}>Biopic Movies</Text>
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
                setMsg('Comedy Movies');
              }}
            >
              <Image style={styles.box} source={img3} />
            </TouchableOpacity>
            <Text style={styles.label}>Comedy Movies</Text>
          </View>
          <View>
            <TouchableOpacity
             onPress={() => {
                setMsg('Detective Movies');
              }}
            >
              <Image style={styles.box} source={img4} />
            </TouchableOpacity>
            <Text style={styles.label}>Detective Movies</Text>
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
                setMsg('Horror Movies');
              }}
            >
              <Image style={styles.box} source={img5} />
            </TouchableOpacity>
            <Text style={styles.label}>Horror Movies</Text>
          </View>
          <View>
            <TouchableOpacity
             onPress={() => {
                setMsg('Drama Movies');
              }}
            >
              <Image style={styles.box} source={img6} />
            </TouchableOpacity>
            <Text style={styles.label}>Drama Movies</Text>
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

export default Lunch;
