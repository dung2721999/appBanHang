import React from 'react'
import { View, Text } from 'react-native'

export default function Places() {
    return (
        <View>
            <Text>Places</Text>
        </View>
    )
}

// import React from 'react'
// import { View, Text, TouchableOpacity, Image } from 'react-native'
// import MapView, { Marker, ProviderPropType } from 'react-native-maps';
// // import markerIcon from '../assets/marker.png'

// const locations = [
//   { title: 'Hoàn đạo thúy', latitude: 21.008734294625746, longitude: 105.8007496371243 },
//   { title: 'Văn cao', latitude: 21.037942105004902, longitude: 105.81537618220678 },
//   { title: 'Linh Đàm', latitude: 21.020264194258537, longitude: 105.82651205522612 },
//   { title: 'Nguyễn thị định', latitude: 21.008088399909653, longitude: 105.80496058220628 },
//   { title: 'Ô chợ dừa', latitude: 21.020284223998562, longitude: 105.82654424173597 },
//   { title: 'Nguyễn chí thanh', latitude: 21.01952476509602, longitude: 105.80827881289945 },
//   { title: 'Location BG', latitude: 21.01149834175052, longitude: 105.8306135263893 }
// ]

// export default function Places() {
//   return (
//     <View style={{ flex: 1, marginBottom:20 }}>
//       <Text>Map</Text>
//       <MapView
//         style={{ height: '100%', width: '100%' }}
//         initialRegion={{
//           latitude: 21.008734294625746,
//           longitude: 105.8007496371243,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       >
//         {locations.map((e, i) => (
//           <Marker
//             key={i}
//             title={e.title}
//             // image={flagPinkImg}
//             key={e.title}
//             coordinate={{ latitude: e.latitude, longitude: e.longitude }}
//           >
//             <TouchableOpacity>
//               <Image source={{ uri: 'https://raw.githubusercontent.com/hungdev/IntegrateMapAndCamera/master/src/marker.png' }} style={{ height: 30, width: 30 }} />
//             </TouchableOpacity>
//           </Marker>
//           // <Marker
//           //   key={i}
//           //   title={e.title}
//           //   icon={markerIcon}
//           //   key={e.title}
//           //   coordinate={{ latitude: e.latitude, longitude: e.longitude }}
//           //   style={{ height: 50, width: 50 }}
//           // />
//         ))}
//       </MapView>
//     </View>
//   )
// }

