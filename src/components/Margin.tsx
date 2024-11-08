import React from 'react';
import {View} from 'react-native';

interface MarginProps {
  height?: number;
}

const Margin = ({height}: MarginProps) => {
  // eslint-disable-next-line react-native/no-inline-styles
  return <View style={{marginTop: height !== undefined ? height : 10}} />;
};

export default Margin;
