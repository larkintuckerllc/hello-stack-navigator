import React, { PureComponent } from 'react';
import { Button, View, Text } from 'react-native';

class Home extends PureComponent {
  componentDidMount() {
    console.log('HOME DID MOUNT');
  }

  componentWillUnmount() {
    console.log('HOME WILL UNMOUNT');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
        <Text style={{ fontSize: 60 }}>Home</Text>
        <Button title="A" onPress={this.handleAPress} />
        <Button title="B" onPress={this.handleBPress} />
        <Button title="C" onPress={this.handleCPress} />
      </View>
    );
  }

  handleAPress = () => {
    const { navigation: { navigate }} = this.props;
    navigate('A');
  };

  handleBPress = () => {
    const { navigation: { navigate }} = this.props;
    navigate('B');
  };

  handleCPress = () => {
    const { navigation: { navigate }} = this.props;
    navigate('C');
  };
}

export default Home;