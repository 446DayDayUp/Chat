import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  Button,
  Image,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../css/MainPageCSS.js';
import { profilePicture } from '../lib/profilePicture.js';

const CustomTabBar = React.createClass({
  tabIcons: [],

  componentDidMount() {
    this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
  },

  setAnimationValue({ value }) {
    this.tabIcons.forEach((icon, i) => {
      const progress = Math.min(1, Math.abs(value - i));
      icon.setNativeProps({
        style: {
          color: this.iconColor(progress),
        },
      });
    });
  },

  // color between rgb(59,89,152) and rgb(204,204,204)
  iconColor(progress) {
    const red = 220 + (204 - 220) * progress;
    const green = 20 + (204 - 20) * progress;
    const blue = 60 + (204 - 60) * progress;
    return `rgb(${red}, ${green}, ${blue})`;
  },

  renderBtn(label, onPress) {
    if (!label) return null;
    // TODO: handle onPress event
    return (
      <TouchableOpacity key={label}
        style={[styles.flexOne, styles.button]}
        onPress={onPress}>
        <Icon name={label} size={30}
          color='white'
        />
      </TouchableOpacity>
    );
  },

  renderIconBtn(iconName, userName) {
    if (!iconName) return null;
    return (
      <View key={iconName}
        style={[styles.flexOne, styles.button]}>
        <TouchableOpacity onPress={() => Actions.ChangeInfo()}>
        <Image source={profilePicture[iconName]}
          resizeMode='contain' style={styles.flexOne}/>
        </TouchableOpacity>
      </View>
      );
  },

  renderTab(tab, i) {
    return (
      <TouchableOpacity key={tab}
      onPress={() => this.props.goToPage(i)} style={styles.tab}>
        <Icon name={tab} size={30}
          color={this.props.activeTab === i ?
            'rgb(216, 19, 19)' : 'rgb(204,204,204)'}
          ref={(icon) => {
            this.tabIcons[i] = icon;
          }}
        />
      </TouchableOpacity>
    );
  },

  render() {
    return (
      <View style={[styles.tabs, this.props.style]}>
        {this.renderIconBtn(this.props.iconName)}
        {this.props.tabs.map(this.renderTab)}
        {this.renderBtn(this.props.rightBtnLabel, this.props.rightBtnOnPress)}
      </View>
    );
  },
});

module.exports = CustomTabBar;
