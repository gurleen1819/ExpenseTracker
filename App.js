import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from './screens/SignInScreen';
import DashboardScreen from './screens/DashboardScreen';
import AddTransactionScreen from './screens/AddTransactionScreen';
import TransactionDetailScreen from './screens/TransactionDetailScreen';
import EditTransactionScreen from './screens/EditTransactionScreen';
import FilterSearchScreen from './screens/FilterSearchScreen';
import StatsReportScreen from './screens/StatsReportScreen';
import ProfileScreen from './screens/ProfileScreen';
import HelpAboutScreen from './screens/HelpAboutScreen';

import { TransactionProvider } from './context/TransactionContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <TransactionProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="AddTransaction" component={AddTransactionScreen} />
          <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
          <Stack.Screen name="EditTransaction" component={EditTransactionScreen} />
          <Stack.Screen name="FilterSearch" component={FilterSearchScreen} />
          <Stack.Screen name="StatsReport" component={StatsReportScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="HelpAbout" component={HelpAboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TransactionProvider>
  );
}
