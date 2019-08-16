import React, { Component } from 'react';
import AppNavigation from '../Navigation/AppNavigation';


export default class RootContainer extends Component {
  render() {
    return (
      <AppNavigation
        ref={nav => {
          this.navigator = nav;
        }}
      />
    );
  }
}
