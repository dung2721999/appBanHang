import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TrangChuScreen from '../screens/TrangChu';
import CuaHangScreen from '../screens/CuaHang';
import GoiMonScreen from '../screens/GoiMon';
import PlacesScreen from '../screens/Places';
import KhacScreen from '../screens/Khac';
import LoginScreen from '../screens/Login';
import BagScreen from '../screens/Bag';
import ProductListScreen from '../screens/ProductList';
import ProductDetail from '../screens/ProductDetail';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Bag from '../screens/Bag'

const TrangChuStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TrangChuStackScreen() {
  return (
    <TrangChuStack.Navigator initialRouteName="Trang Chủ">
      <TrangChuStack.Screen name="Trang Chủ" component={TrangChuScreen} />
      <TrangChuStack.Screen name="ProductListScreen" component={ProductListScreen}/>
      <TrangChuStack.Screen name="ProductDetail" component={ProductDetail} />
      <TrangChuStack.Screen name="Bag" component={Bag} />
      <TrangChuStack.Screen name="Login" component={LoginScreen}/>
    </TrangChuStack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown:false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'TrangChu') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'CuaHang') {
              iconName = focused ? 'basket' : 'basket-outline';
            } else if (route.name === 'GoiMon') {
              iconName = focused ? 'cafe' : 'cafe-outline';
            } else if (route.name === 'Places') {
              iconName = focused ? 'location' : 'location-outline';
            } else if (route.name === 'Khac') {
              iconName = focused
                ? 'ellipsis-horizontal'
                : 'ellipsis-horizontal-outline';
            }
            //  else if (route.name === 'Bag') {
            //   iconName = focused ? 'cart' : 'cart-outline';
            // }  
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="TrangChu"
          component={TrangChuStackScreen}
          options={{title: 'Trang Chủ'}}
        />
        <Tab.Screen
          name="CuaHang"
          component={CuaHangScreen}
          options={{title: ' Cửa Hàng '}}
        />
        <Tab.Screen
          name="GoiMon"
          component={GoiMonScreen}
          options={{title: ' Gọi Món '}}
        />
        <Tab.Screen
          name="Places"
          component={PlacesScreen}
          options={{title: ' Địa Chỉ '}}
        />
        <Tab.Screen
          name="Khac"
          component={KhacScreen}
          options={{title: ' Khác '}}
        />
        {/* <Tab.Screen
          name="Bag"
          component={BagScreen}
          options={{title: ' Giỏ Hàng '}}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// export default App;
