import React, { Component } from 'react';
import { Text, View, Button, ScrollView, StyleSheet } from 'react-native';

import ImagePicker from 'react-native-image-picker'
import RNMlKitOcr from 'react-native-ml-kit-ocr';

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  },
  maxWidth: 2050,
  maxHeight: 2050,
};

export default class App extends Component {

  constructor(props) {
    super(props)
    this.load = this.load.bind(this)
    this.state = {
      x: null
    }
  }

  load() {
    ImagePicker.showImagePicker(options, (response) => {
      RNMlKitOcr.detect(response.path).then(result => {
        if (result) {
          this.setState({
            x: JSON.stringify(JSON.parse(result), null, 2)
          });
        }
      })
    })
  }

  render() {
    const { x } = this.state
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>{x}</Text>
          <View style={styles.buttonContainer}>
            <Button style={{ marginRight: 10 }} onPress={this.load} title="Load" />
            <Button style={{ marginLeft: 10 }} onPress={() => this.setState({ x: null })} title="Clear" />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    height: 50,
    padding: 20,
    margin: 20
  }
});
