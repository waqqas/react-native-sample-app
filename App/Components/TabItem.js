import React, { PureComponent } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Images } from '../Themes';

import { TabIcon, TabLabel } from '../Themes/ApplicationStyles';

class TabItem extends PureComponent {
  handlePress = () => {
    this.props.navigation.navigate(this.props.routeName);
  };

  render() {
    const { routeName, isActive, params, disabled } = this.props;
    const icon = Images[routeName][isActive ? 'active' : 'inactive'];

    const opacity = disabled ? 0.6 : 1;

    return (
      <TouchableWithoutFeedback onPress={disabled ? null : this.handlePress}>
        <View style={{ flex: 1, alignItems: 'center', opacity }}>
          <TabIcon source={icon}/>
          <TabLabel>{params.label}</TabLabel>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default TabItem;
