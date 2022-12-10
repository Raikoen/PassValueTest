// screens/BlogDetails.js
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
class ScoreDetails extends Component {
  constructor() {
    super();
  }
  render() {  
    // Access the postId and otherParam via Destructuring assignment
    const { myScore } = this.props.route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Text>Your score is:  {myScore}</Text>
        <Button
            title="Return to Lesson"
            onPress={() => {
              this.props.navigation.navigate('Lesson1');
            }}
          />
      </View>
    );
  }
}
export default ScoreDetails;