import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import img1 from '../images/lunch/chicken.jpg';
import img2 from '../images/lunch/fish.jpg';
import img3 from '../images/lunch/daalrice.jpg';
import img4 from '../images/lunch/salad.jpg';
import img5 from '../images/lunch/biryani.jpg';
import img6 from '../images/lunch/cholepuri.jpg';

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
                setMsg('Chicken');
              }}>
              <Image style={styles.box} source={img1} />
            </TouchableOpacity>
            <Text style={styles.label}>Chicken</Text>
          </View>
          <View >
            <TouchableOpacity
             onPress={() => {
                setMsg('Fish');
              }}
            >
              <Image style={styles.box} source={img2} />
            </TouchableOpacity>
            <Text style={styles.label}>Fish</Text>
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
                setMsg('Daal Rice');
              }}
            >
              <Image style={styles.box} source={img3} />
            </TouchableOpacity>
            <Text style={styles.label}>Daal Rice</Text>
          </View>
          <View>
            <TouchableOpacity
             onPress={() => {
                setMsg('Salad');
              }}
            >
              <Image style={styles.box} source={img4} />
            </TouchableOpacity>
            <Text style={styles.label}>Salad</Text>
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
                setMsg('Biryani');
              }}
            >
              <Image style={styles.box} source={img5} />
            </TouchableOpacity>
            <Text style={styles.label}>Biryani</Text>
          </View>
          <View>
            <TouchableOpacity
             onPress={() => {
                setMsg('Chole Puri');
              }}
            >
              <Image style={styles.box} source={img6} />
            </TouchableOpacity>
            <Text style={styles.label}>Chole Puri</Text>
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
