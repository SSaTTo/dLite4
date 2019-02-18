import { Header } from 'react-native-elements';
import React, { Component } from 'react';

export default class dd extends Component{
    render() {
        return (

<Header
  leftComponent={{ icon: 'menu', color: 'blue' }}
  centerComponent={{ text: 'MY TITLE', style: { color: 'blue' } }}
  rightComponent={{ icon: 'home', color: 'blue' }}
  backgroundColor={"#fff"}
/>


        );
    }
}