import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomTabBar from './components/CustomTabBar';

import Pilots from './screens/Pilots';
import Ships from './screens/Ships';
import Home from './screens/Home';
import Contracts from './screens/Contracts';
import Reports from './screens/Reports';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Pilots" component={Pilots} />
      <Tab.Screen name="Ships" component={Ships} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Contracts" component={Contracts} />
      <Tab.Screen name="Reports" component={Reports} />
    </Tab.Navigator>
  );
};
