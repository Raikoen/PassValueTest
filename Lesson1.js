import React, { Component } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

class Lesson1 extends Component {
  constructor() {
    super();
  }
  render() {  
    var countCorrectAnswers = 4;
    var setScore = countCorrectAnswers * 100;
    
    return (
      <View style={styles.container}>
       <Text style={{padding: 20, fontSize :25, color: 'white', alignSelf: 'center', fontWeight: 'bold'}}>Word to Word!</Text>
      <Button
        title="Show My Score"
        color= "#484085"
        onPress={() => {
          this.props.navigation.navigate('ScoreDetails', {
          myScore: setScore,
          });
        }}
      />
    </View>
    );
  }
}
export default Lesson1;

const styles = StyleSheet.create({
  container :{
    padding: 30,
    height: '100%',
    width: '100%',
    backgroundColor: '#9d78ec'
  }
})
