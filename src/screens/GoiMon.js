import React, {
  useEffect, useState

} from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ScrollView, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { getProductList, getCate } from '../services/Api'
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
          const result = await getProductList()
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
    navigation.navigate('ProductDetail', { detail: data });
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={{ width: '45%', }} onPress={onMoveToDetail(item)}>
      <Image
        style={styles.imgStyle}
        // source={{ uri: getImage(item.images?.[0]) }}
        source={{ uri: item.image }}
      />
      <View style={styles.rowPrice}>
        <Text>{item.price}</Text>
          <View style = {{height:30,width:30, backgroundColor:'#01DF01',justifyContent:'center',borderRadius:50}}>
              <Ionicons style ={{alignSelf:"center"}} name="ios-add-sharp" size={25} color='white'/>
          </View>
      </View>
      <Text>{item.product_name}</Text>
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
      <TouchableOpacity style={{height:40, width:300,alignSelf:'center', justifyContent:'center', borderRadius:15,marginBottom:10 ,backgroundColor:'orange'}} onPress={()=> navigation.navigate('Bag')}>
      <View style={{flexDirection:'row', justifyContent:'center'}}>
          <Text style={{textAlign:'center'}}>GIỎ HÀNG CỦA BẠN</Text>
          <Ionicons name="cart" size={20} color="black"/>
        </View>
      </TouchableOpacity>

              <FlatList
                  data={order}
                  numColumns={2}
                  showsVerticalScrollIndicator={false}
                  style={{ height: 555, }}
                  keyExtractor={item => item._id?.toString()}
                  // keyExtractor={(_, i) => i + ""}
                  renderItem={renderItem}
                  columnWrapperStyle={{ justifyContent: 'space-around', marginBottom: 10, flex: 1 }}
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