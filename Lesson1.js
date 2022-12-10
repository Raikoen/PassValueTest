// screens/Blog.js
import React, { Component } from 'react';
import { Button, View } from 'react-native';
class Lesson1 extends Component {
  constructor() {
    super();
  }
  render() {  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
            title="Show My Score"
            onPress={() => {
              this.props.navigation.navigate('ScoreDetails', {
                myScore: 3000,
              });
            }}
          />
    </View>
    );
  }
}
export default Lesson1;