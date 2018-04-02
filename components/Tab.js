/**
 * Accessible Tab in the Bottom Navigation. Consists of Icon-only.
 * Handles accessibility traits.
 * @flow

 */
import React, { Component } from 'react'
import {
  AppRegistry,
  View,
  Text,
  Easing,
  Animated,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native'
import AccessBadge from './AccessBadge.js'
import {easeInOut} from './utils/easing.js'
var s = require('../constants/MyStyles.js');

const useNativeDriver = Platform.OS === 'android'


type TabProps = {
  active: boolean,
  shifting: boolean,
  tabIndex: number,
  barBackgroundColor: string,
  icon: ReactElement<*>,
  activeIcon?: ReactElement<*>,
  onTabPress: () => void,
  onPress: () => void,
  badgeText: string,
  badgeSize: number,
  badgeStyle: any,
  isBadgeVisible: boolean,
}

type TabState = {
  fixed: {
    iconY: Animated.Value,
    iconOpacity: Animated.Value,
  },
  shifting: {
    iconY: Animated.Value,
    iconOpacity: Animated.Value,
  }
}

export default class Tab extends React.Component {
  props: TabProps
  state: TabState
  didOnceBecameActive: boolean

  constructor(props: TabProps) {
    super(props)
    const { active } = props

    this.state = {
      fixed: {
        iconY: active ? new Animated.Value(-2) : new Animated.Value(0),
        iconOpacity: active ? new Animated.Value(1) : new Animated.Value(0.8),
      },
      shifting: {
        iconY: active ? new Animated.Value(0) : new Animated.Value(8),
        iconOpacity: active ? new Animated.Value(1) : new Animated.Value(0.8),
      }
    }
  }

  // Animations will start as soon as new props are passed through
  componentWillReceiveProps(nextProps: TabProps) {
    const { props } = this

    const fixedMode = !props.shifting
    const shiftingMode = props.shifting
    const willBeActive = !props.active && nextProps.active
    const willBeInactive = props.active && !nextProps.active

    if (fixedMode && willBeActive) {
      this._animateFixedInactiveToActive()
    } else if (fixedMode && willBeInactive) {
      this._animateFixedActiveToInactive()
    } else if (shiftingMode && willBeActive) {
      this._animateShiftingInactiveToActive()
    } else if (shiftingMode && willBeInactive) {
      this._animateShiftingActiveToInactive()
    }
  }

  render() {
    const { icon, active } = this.props

    return (
      <TouchableWithoutFeedback onPress={this._handleTabPress}>
        <View
          style={[
            styles.container,
            this._isShifting() && active && styles.shiftingActiveContainer,
            this._isShifting() && !active && styles.shiftingInactiveContainer
          ]}
        >
          {this._renderIcon()}
          {this._renderBadge()}
        </View>
      </TouchableWithoutFeedback>
    )
  }

  _renderBadge = () => {
    const {badgeText, badgeSize, badgeStyle, isBadgeVisible } = this.props
    const mode = this._getModeString()

    if (badgeText === undefined && !isBadgeVisible) {
      return null
    }

    return (
      <AccessBadge
        size={badgeSize}
        style={badgeStyle}
        isVisible={isBadgeVisible}
        translateY={this.state[mode].iconY}
      />
    )
  }

  _renderIcon = () => {
    const mode = this._getModeString()
    const { active, icon, activeIcon } = this.props

    return (
      <Animated.View
        style={[
          styles.icon,
          { transform: [{ translateY: this.state[mode].iconY }] },
          { opacity: this.state[mode].iconOpacity }
        ]}
      >
        <View ref="_Anic" collapsable={false}>
          {active && activeIcon ? activeIcon : icon}
        </View>
      </Animated.View>
    )
  }

  _animateFixedInactiveToActive = () => {
    const duration = 266
    const easing = easeInOut

    Animated.parallel([
      Animated.timing(this.state.fixed.iconY, {
        toValue: -2,
        duration,
        easing,
        useNativeDriver
      }),
      Animated.timing(this.state.fixed.iconOpacity, {
        toValue: 1,
        duration,
        easing,
        useNativeDriver
      })
    ]).start()
  }

  _animateFixedActiveToInactive = () => {
    const duration = 266
    const easing = easeInOut

    Animated.parallel([
      Animated.timing(this.state.fixed.iconY, {
        toValue: 0,
        duration,
        easing,
        useNativeDriver
      }),
      Animated.timing(this.state.fixed.iconOpacity, {
        toValue: 0.8,
        duration,
        easing,
        useNativeDriver
      })
    ]).start()
  }

  _animateShiftingInactiveToActive = () => {
    const easing = easeInOut

    Animated.parallel([
      Animated.timing(this.state.shifting.iconY, {
        toValue: 0,
        duration: 266,
        easing,
        useNativeDriver
      }),
      Animated.timing(this.state.shifting.iconOpacity, {
        toValue: 1,
        duration: 266,
        easing,
        useNativeDriver
      })
    ]).start()
  }

  _animateShiftingActiveToInactive = () => {
    const easing = easeInOut

    Animated.parallel([
      Animated.timing(this.state.shifting.iconY, {
        toValue: 8,
        duration: 266,
        easing,
        useNativeDriver
      }),
      Animated.timing(this.state.shifting.iconOpacity, {
        toValue: 0.8,
        duration: 266,
        easing,
        useNativeDriver
      })
    ]).start()
  }

  _handleTabPress = () => {
    this.props.onPress && this.props.onPress(this.props.tabIndex)

    // if onPress is set, only run the (ripple) animation, don't set it active
    this.setTabActive({ updateActiveTab: !this.props.onPress })
  }

  setTabActive = ({ updateActiveTab = true, forceAnimation = false }) => {
    // Setting the tab active is job of the BottomNavigation Component,
    // so call it's function to handle that.
    this.props.onTabPress(
      {
        tabIndex: this.props.tabIndex,
        barBackgroundColor: this.props.barBackgroundColor,
        iconRef: this.refs._Anic,
      },
      { updateActiveTab, forceAnimation }
    )
  }

  _getModeString = () => {
    if (this.props.shifting) return 'shifting'
    return 'fixed'
  }

  _isShifting = () => {
    return !!this.props.shifting
  }

  _isFixed = () => {
    return !this.props.shifting
  }

  getIconRef = () => {
    return this.refs._Anic
  }
}

const styles = StyleSheet.create({
  container: {
    height: 72,
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: Platform.OS !== 'web' ? 10 : 0,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: 'transparent',
    position: 'relative',
    ...(Platform.OS !== 'web'
      ? {}
      : {
          transitionDuration: '0.5s',
          transitionProperty: 'all'
        })
  },
  shiftingInactiveContainer: {
    maxWidth: 144,
    flex: 1
  },
  shiftingActiveContainer: {
    maxWidth: 288,
    flex: 1.75
  },
  icon: {
    width: 46,
    height: 46,
	backgroundColor: 'transparent',
  },
})

AppRegistry.registerComponent('Tab', () => Tab);
