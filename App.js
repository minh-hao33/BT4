import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      backgroundColor: '#fff',
    };
  }

  handleButtonClick = (newMessage, newColor) => {
    this.setState({ message: newMessage, backgroundColor: newColor });
    Alert.alert(newMessage);
  };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <ButtonComponent
          backgroundColor="green"
          message="Green button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#008000"
          color="white" // Màu chữ trắng cho nền xanh lá
        />
        <ButtonComponent
          backgroundColor="blue"
          message="Blue button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#0000FF"
          color="white" // Màu chữ trắng cho nền xanh dương
        />
        <ButtonComponent
          backgroundColor="brown"
          message="Brown button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#A52A2A"
          color="white" // Màu chữ trắng cho nền nâu
        />
        <ButtonComponent
          backgroundColor="yellow"
          message="Yellow button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#FFFF00"
          color="black" // Màu chữ đen cho nền vàng
        />
        <ButtonComponent
          backgroundColor="red"
          message="Red button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#FF0000"
          color="white" // Màu chữ trắng cho nền đỏ
        />
        <ButtonComponent
          backgroundColor="black"
          message="Black button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#000000"
          color="white" // Màu chữ trắng cho nền đen
        />
        {this.state.message && <Text style={styles.message}>{this.state.message}</Text>}
      </View>
    );
  }
}

class TitleComponent extends Component {
  render() {
    const { title, color } = this.props;
    return <Text style={[styles.title, { color: color }]}>{title}</Text>;
  }
}

class ButtonComponent extends Component {
  render() {
    const { backgroundColor, message, onClick, colorChange, color } = this.props;
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onClick(message, colorChange)}
      >
        <Text style={[styles.buttonText, { color: color }]}>{backgroundColor.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    color: 'gray',
  },
});

export default App;
