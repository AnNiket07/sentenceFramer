import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import img1 from '../images/sports/cricket.jpg';
import img2 from '../images/sports/football.jpg';
import img3 from '../images/sports/hockey.png';
import img4 from '../images/sports/tennis.jpg';
import img5 from '../images/sports/volleyball.jpg';
import img6 from '../images/sports/basketball.jpg';

const Sports = ({navigation}) => {

  const [option,setOption]= useState('do not like');
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
                setMsg('Cricket');
              }}>
              <Image style={styles.box} source={img1} />
            </TouchableOpacity>
            <Text style={styles.label}>Cricket</Text>
          </View>
          <View >
            <TouchableOpacity
             onPress={() => {
                setMsg('Football');
              }}
            >
              <Image style={styles.box} source={img2} />
            </TouchableOpacity>
            <Text style={styles.label}>Football</Text>
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
                setMsg('Hockey');
              }}
            >
              <Image style={styles.box} source={img3} />
            </TouchableOpacity>
            <Text style={styles.label}>Hockey</Text>
          </View>
          <View>
            <TouchableOpacity
             onPress={() => {
                setMsg('Tennis');
              }}
            >
              <Image style={styles.box} source={img4} />
            </TouchableOpacity>
            <Text style={styles.label}>Tennis</Text>
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
                setMsg('Volleyball');
              }}
            >
              <Image style={styles.box} source={img5} />
            </TouchableOpacity>
            <Text style={styles.label}>Volleyball</Text>
          </View>
          <View>
            <TouchableOpacity
             onPress={() => {
                setMsg('Basket ball');
              }}
            >
              <Image style={styles.box} source={img6} />
            </TouchableOpacity>
            <Text style={styles.label}>Basket ball</Text>
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

export default Sports;
