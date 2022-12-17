import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

class ScoreDetails extends Component {
  constructor() {
    super();
  }
  render() {  
    // Access the postId and otherParam via Destructuring assignment
    const { myScore } = this.props.route.params;
    
    return (
     <View style={styles.container}>
         <Text style={{padding: 20, fontSize :25, color: 'white', alignSelf: 'center', fontWeight: 'bold'}}>Your Score: {myScore}</Text>
        <Button
            title="Return to Lesson"
            color = "#484085"
            onPress={() => {
              this.props.navigation.navigate('Lesson1');
            }}
          />
      </View>
    );
  }
}
export default ScoreDetails;

const styles = StyleSheet.create({
  container :{
    padding: 30,
    height: '100%',
    width: '100%',
    backgroundColor: '#9d78ec'
  }
})