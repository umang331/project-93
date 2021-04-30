import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer'
import CustomSideBarMenu from './CustomSideBarMenu'
import HomeScreen from '../screen/homeScreen'

export const AppDrawerNavigator = createDrawerNavigator({
  Home:{
    screen:HomeScreen
  }
},
{
  contentComponent:CustomSideBarMenu
},
{
  initialRouteName:'Home'
})