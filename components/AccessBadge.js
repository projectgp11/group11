import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet, Animated } from 'react-native'

type BProps = {
  size: number,
  children: Array<ReactElement<*>>,
  style: any,
  isVisible: boolean,
  translateY: number
}

const defaultProps = {
  size: 40,
  isVisible: true,
  style: {}
}

export default class AccessBadge extends Component {
  static defaultProps: typeof defaultProps
  props: BProps
  static defaultProps = defaultProps

  createStyles() {
    const { size, style } = this.props
    const container = Object.assign(
      {},
      {
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: size / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F50057',
        zIndex: 9999,
        top: 3,
        left: '50%',
        marginLeft: 15
      },
      style.container
    )

    return StyleSheet.create({
      container
    })
  }

  render() {
    const { children, isVisible, translateY } = this.props
    const styles = this.createStyles()
    if (!isVisible) {
      return null
    }

    return (
      <Animated.View
        style={[styles.container, { transform: [{ translateY: translateY }] }]}
      >
      </Animated.View>
    )
  }
}
AppRegistry.registerComponent('AccessBadge', () => AccessBadge);