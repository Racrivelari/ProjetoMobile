import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const CustomButton = ({ color, width, height, marginTop , text, onPress }) => {

  const buttonStyle = {
    backgroundColor: color,
    width: width,
    height: height,
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

    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
    
  );
};

export default CustomButton;
