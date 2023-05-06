import React from 'react';
import { TextInput, Text } from 'react-native';

const InputField = ({ color, size, marginTop , text  }) => {

  const inputStyle = {
    backgroundColor: color,
    width: size,
    height: 40,
    shadowColor: 'black',
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: marginTop
  };

  const textStyle = {
    fontSize: 18,
    fontFamily: 'AveriaLibre-Regular',
    color: 'white'
  };

  return (

    <TextInput style={buttonStyle}>
      <Text style={textStyle}>{text}</Text>
    </TextInput>
  );
};

export default CustomButton;
