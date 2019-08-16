import React, { Component } from 'react';
import { TabBarView } from '../Themes/ApplicationStyles';
import TabItem from '../Components/TabItem';


export default class TabBar extends Component {
  render() {
    const { navigation } = this.props;
    const { routes, index } = navigation.state;

    return (
      <TabBarView>
        {routes.map((route, i) => (
          <TabItem
            navigation={navigation}
            key={route.routeName}
            {...route}
            isActive={index === i}
            disabled={false}
          />
        ))}
      </TabBarView>
    );
  }
}

