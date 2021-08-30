import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TrangChuScreen from './src/screens/TrangChu';
import CuaHangScreen from './src/screens/CuaHang';
import GoiMonScreen from './src/screens/GoiMon';
import PlacesScreen from './src/screens/Places';
import KhacScreen from './src/screens/Khac';
import Ionicons from 'react-native-vector-icons/Ionicons'

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
        // <Stack.Screen name="TrangChu" component={TrangChuScreen} options={{title: ' TrangChu '}} />
        // <Stack.Screen name="CuaHang" component={CuaHangScreen} />
        // <Stack.Screen name="GoiMon" component={GoiMonScreen} />
        // <Stack.Screen name="Places" component={PlacesScreen} />
        // <Stack.Screen name="Khac" component={KhacScreen} />

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'TrangChu') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'CuaHang') {
              iconName = focused ? 'basket' : 'basket-outline';
            }
            else if (route.name === 'GoiMon') {
              iconName = focused ? 'cafe' : 'cafe-outline';
            }
            else if (route.name === 'Places') {
              iconName = focused ? 'location' : 'location-outline';
            }
            else if (route.name === 'Khac') {
              iconName = focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="TrangChu" component={TrangChuScreen} options={{title: ' Trang Chủ '}} />
        <Tab.Screen name="CuaHang" component={CuaHangScreen} options={{title: ' Cửa Hàng '}}/>
        <Tab.Screen name="GoiMon" component={GoiMonScreen} options={{title: ' Gọi Món '}}/>
        <Tab.Screen name="Places" component={PlacesScreen} options={{title: ' Địa Chỉ '}}/>
        <Tab.Screen name="Khac" component={KhacScreen} options={{title: ' Khác '}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
