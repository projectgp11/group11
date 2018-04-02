import React, { PureComponent } from 'react'
import {AppRegistry} from 'react-native'
import BottomNavigation from './BottomNavigation.js'
import Tab from './Tab.js'

type NCProps = {
  navigationState: any,
  jumpToIndex: (index: number) => void,
  renderIcon: (scene: any) => React.Element<*>,
  style: any,
  BottomNavigationOptions: any,
  activeTintColor?: string,
  inactiveTintColor?: string
}

export default class NavigationComponent extends PureComponent<void, NCProps, void> {
  render() {
    // react-navigation passed props
    const {
      activeTintColor,
      inactiveTintColor,
      navigationState,
      BottomNavigationOptions,    
      getOnPress: navigationGetOnPress,
      renderIcon,
      jumpToIndex,
      style
    } = this.props

    const bnOptions = BottomNavigationOptions || {}

    const { style: bnStyle } = bnOptions

    // Built props for BottomNavigation
    const bnProps = {
      innerStyle: bnOptions.innerStyle,
      activeLabelColor: bnOptions.activeLabelColor,
      rippleColor: bnOptions.rippleColor,
      backgroundColor: bnOptions.backgroundColor,
      shifting: bnOptions.shifting
    }
    const previousScene = navigationState.routes[navigationState.index]

    return (
      <BottomNavigation
        activeTab={navigationState.index}
        // Style has default `height: 72'
        style={[{ height: 72 }, bnStyle || style]}
        onTabChange={index => jumpToIndex(index)}
        {...bnProps}
      >
        {navigationState.routes.map((route, index) => {
          const focused = index === navigationState.index

          // scene object for `getLabel` and `renderIcon`
          const scene = {
            route,
            index,
            focused,
            tintColor: focused ? activeTintColor : inactiveTintColor
          }
          const onPress = navigationGetOnPress(previousScene, scene)
          const icon = renderIcon(scene)

          // Prepare props for the tabs
          const tabs = bnOptions.tabs || {}
          const tabOptions = tabs[route.key] || {}
          const tabProps = {
            icon: tabOptions.icon || icon,
            activeIcon: tabOptions.activeIcon,
			barBackgroundColor: tabOptions.barBackgroundColor,
			badgeSize: tabOptions.badgeSize,
            badgeStyle: tabOptions.badgeStyle,
            isBadgeVisible: tabOptions.isBadgeVisible   
          }

          return (
            <Tab
              key={index}
              onPress={
                onPress
                  ? () => {
                      onPress(scene, jumpToIndex)
                    }
                  : null
              }
              {...tabProps}
            />
          )
        })}
      </BottomNavigation>
    )
  }
}

AppRegistry.registerComponent('NavigationComponent', () => NavigationComponent);