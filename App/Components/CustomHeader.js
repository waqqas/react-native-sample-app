import React from 'react';
import { Header } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

const CustomHeader = props => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['rgb(80,47,89)', 'rgb(144,114,152)']}
    >
      <Header {...props} />
    </LinearGradient>
  );
};

export default CustomHeader;
