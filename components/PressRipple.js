import React, { Component } from 'react'
import { View, Animated, Platform } from 'react-native'
import { easeOut } from './utils/easing'

type PressRippleProps = {
  color: string,
  x: number,
  y: number
}

type PressRippleState = {
  opacity: Animated.Value,
  scale: Animated.Value,
  animating: boolean
}

const defaultProps = {
  color: '#012541', //changed from black
  x: 0,
  y: 0
}

export default class PressRipple extends Component {
  static defaultProps: typeof defaultProps
  props: PressRippleProps
  state: PressRippleState
  maxRippleOpacity: number
  size: number

  static defaultProps = defaultProps

  constructor(props: PressRippleProps) {
    super(props)

    this.maxRippleOpacity = 0.12
    this.size = 100

    this.state = {
      opacity: new Animated.Value(0),
      scale: new Animated.Value(0.01),
      animating: false
    }
  }

  render() {
    const { color, x, y } = this.props
    const { scale, opacity, animating } = this.state
    const { size } = this

    if (!animating) return null

    return (
      <Animated.View
        style={{
          backgroundColor: this.props.color,
          position: 'absolute',
          top: this.props.y - size / 2,
          left: this.props.x - size / 2,
          width: size,
          height: size,
          borderRadius: size / 2,
          opacity,
          transform: [{ scale }]
        }}
      />
    )
  }

  run = () => {
    const useNativeDriver = Platform.OS === 'android'

    // Render the Component
    this.setState({ animating: true })
    this.state.opacity.setValue(this.maxRippleOpacity)

    // Animation
    Animated.parallel([
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 200,
        easing: easeOut,
        useNativeDriver
      }),
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: 300,
        easing: easeOut,
        useNativeDriver
      })
    ]).start(() => {
      // Initial values
      this.state.scale.setValue(0.01)
      this.state.opacity.setValue(0)

	  //Stop Animation
      this.setState({ animating: true })
    })
  }
}