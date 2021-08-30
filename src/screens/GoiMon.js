// import React from 'react'
// import { View, Text } from 'react-native'

// export default function GoiMon() {
//     return (
//         <View>
//             <Text>GoiMon</Text>
//         </View>
//     )
// }


import React, {
    useEffect, useState
  
  } from 'react'
  import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ScrollView, Modal, TextInput } from 'react-native'
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import Fontisto from 'react-native-vector-icons/Fontisto';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
//   import { getOrder, getCate } from '../services/Api'
  import LinearGradient from 'react-native-linear-gradient';
  import { getImage } from '../utils'
  
  const order = Array(10).fill(null).map((e, i) => ({
    _id: i + 1,
    img: 'https://soyagarden.com/content/uploads/2020/11/DSC_9683-216x300.jpg',
    name: `Soya Milk ${i + 1}`,
    price: '39,000đ',
    heart: i % 2 === 0
  }))
  
  export default function App({ route, navigation }) {
    const [order, setOrder] = useState()
    const [cate, setCate] = useState();
    useEffect(() => {
        const getApiOrder = async () => {
            const result = await getOrder()
            setOrder(result.data.data)
        };
        const getCategoryIds = async () => {
            const result = await getCate();
            setCate(result.data.map(e => e.id));
        };
        getCategoryIds();
        getApiOrder()
    }, [])
  
  
    const onMoveToDetail = (data) => () => {
      navigation.navigate('Detail', { detail: data });
    }
  
    const renderItem = ({ item }) => (
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: 150, alignSelf: 'center', backgroundColor: 'white', marginBottom: 10, borderBottomColor: 'silver', borderBottomWidth: 0.2, borderRadius: 10 }}
        onPress={onMoveToDetail(item)}>
        <View style={{ justifyContent: 'space-evenly', width: '100%', height: '100%', width: 250 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 15, width: 220, height: 27 }}>{item.product_name}</Text>
            <Text style={{ fontSize: 16, marginLeft: 15, color: 'grey', width: 215, height: 40 }}>{item.description}</Text>
            <Text style={{ fontSize: 18, marginLeft: 15, color: 'grey' }}>{item.price}đ</Text>
        </View>
        <Image
            source={{ uri: item.image }}
            style={{
                width: 100,
                height: 100,
                borderRadius: 10
            }}
        />
    </TouchableOpacity>
    );
    return (
      <View>
      <TouchableOpacity>
      <View style={{flexDirection:'row', justifyContent:'space-between',marginLeft:10, marginRight:10}}>
        <View>
          <Text style={{fontSize:14}}>Giao đến</Text>
          <View style={{flexDirection:'row'}}>
          <Image source={{ uri: 'https://raw.githubusercontent.com/hungdev/IntegrateMapAndCamera/master/src/marker.png' }} style={{ height: 25, width: 25 }} />
          <Text style={{fontSize:18}}>Phố Nghĩa Đô - Hoàng Quốc Việt - Cầu Giấy - Hà Nội</Text>
          </View>
        </View>
        <Ionicons style={{alignSelf:'center'}} name="md-caret-down-sharp" size={25} color="black"/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{flexDirection:'row', borderWidth:0.5, marginLeft:10, marginRight:10, borderRadius:10, margin:10}}>
      <Ionicons style={{padding:10}} name="ios-search" size={25} color="gray"/>
        <TextInput placeholder="Tìm Kiếm"/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{height:40, width:300,alignSelf:'center', justifyContent:'center', borderRadius:15,marginBottom:10 ,backgroundColor:'orange'}} onPress={()=> navigation.navigate('ThongBao')}>
      <View style={{flexDirection:'row', justifyContent:'center'}}>
          <Text style={{textAlign:'center'}}>GIỎ HÀNG CỦA BẠN</Text>
          <Ionicons name="cart" size={20} color="black"/>
        </View>
      </TouchableOpacity>
                <FlatList
                    data={order}
                    showsVerticalScrollIndicator={false}
                    style={{ height: 800 }}
                    keyExtractor={item => item._id?.toString()}
                    // keyExtractor={(_, i) => i + ""}
                    renderItem={renderItem}
                />
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    rowPrice: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10
    },
    imgStyle: {
      height: 150,
      width: 'auto',
      borderRadius:8,
      marginTop:20,
    }
  });