// import React from 'react'
// import { View, Text } from 'react-native'

// export default function CuaHang() {
//     return (
//         <View>
//             <Text>CuaHang</Text>
//         </View>
//     )
// }

import React, {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ScrollView, TextInput, Button} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
export default function Shop() {
    return (
        <View>
            <View style = {{flexDirection:'row',height:70,width:'auto'}}>
                <View style = {{flexDirection:'row', borderWidth:0.5,marginTop:20,width:300,height:35,borderRadius:8,marginLeft:25}}>
                <Ionicons style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
                <TextInput
                style={styles.input}
                placeholder="Search"
                onChangeText={(searchString) => {this.setState({searchString})}}
                underlineColorAndroid="transparent"
                />
                </View>
                <Feather style={{marginTop:20,marginLeft:30}} name="send" size={25} color="gray"/>
            </View>
            <ScrollView style ={{backgroundColor:'#D8D8D8',width:'auto',marginBottom:70}}>
                <TouchableOpacity>
                <View style = {styles.b}>
                    <Image style = {styles.a}
                    source={{
                        uri:'https://bizweb.dktcdn.net/100/017/493/articles/4cb54ae43868dc368579.jpg?v=1564369931343'
                    }}
                    />
                    <View style ={{backgroundColor:'white',width:'auto',justifyContent:'space-around',borderBottomLeftRadius:8,borderBottomRightRadius:8,height:100,justifyContent:'space-evenly'}}>
                        <Text style ={{fontWeight:'bold',fontSize:16,marginLeft:10}}>Toco Toco - 619 Vũ Tông Phan</Text>
                    <View style ={{flexDirection:'row',width:'auto',marginLeft:10}}>
                        <Ionicons name="ios-location-outline" size={23} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:5,width:300}}>619 P. Vũ Tông Phan, Khương Đình, Thanh Xuân, Hà Nội</Text>
                    </View>
                    <View style ={{flexDirection:'row',backgroundColor:'white',marginLeft:10,width:'auto',borderBottomRightRadius:8}}>
                        <Feather name="phone-call" size={20} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:8}}>1900636036</Text>
                    </View>
                    </View>
                </View>
                </TouchableOpacity>
{/*----------------------------------------------------------------------------------------------------------------------------------------*/}
<TouchableOpacity>
                <View style = {styles.b}>
                    <Image style = {styles.a}
                    source={{
                        uri:'https://farm1.staticflickr.com/555/19155376923_d59ea2e63e_o.jpg'
                    }}
                    />
                    <View style ={{backgroundColor:'white',width:'auto',justifyContent:'space-around',borderBottomLeftRadius:8,borderBottomRightRadius:8,height:100,justifyContent:'space-evenly'}}>
                        <Text style ={{fontWeight:'bold',fontSize:16,marginLeft:10}}>Toco Toco - Phố Hàng Bài</Text>
                    <View style ={{flexDirection:'row',width:'auto',marginLeft:10}}>
                        <Ionicons name="ios-location-outline" size={23} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:5,width:300}}>4 Phố Hàng Bài, Tràng Tiền, Hoàn Kiếm, Hà Nội</Text>
                    </View>
                    <View style ={{flexDirection:'row',backgroundColor:'white',marginLeft:10,width:'auto',borderBottomRightRadius:8}}>
                        <Feather name="phone-call" size={20} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:8}}>1900636036</Text>
                    </View>
                    </View>
                </View>
                </TouchableOpacity>
{/*----------------------------------------------------------------------------------------------------------------------------------------*/}
                <TouchableOpacity>
                <View style = {styles.b}>
                    <Image style = {styles.a}
                    source={{
                        uri:'https://farm1.staticflickr.com/501/19587223120_b264855b31_o.jpg'
                    }}
                    />
                    <View style ={{backgroundColor:'white',width:'auto',justifyContent:'space-around',borderBottomLeftRadius:8,borderBottomRightRadius:8,height:100,justifyContent:'space-evenly'}}>
                        <Text style ={{fontWeight:'bold',fontSize:16,marginLeft:10}}>Toco Toco - Cửa Bắc</Text>
                    <View style ={{flexDirection:'row',width:'auto',marginLeft:10}}>
                        <Ionicons name="ios-location-outline" size={23} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:5,width:300}}>92 Cửa Bắc</Text>
                    </View>
                    <View style ={{flexDirection:'row',backgroundColor:'white',marginLeft:10,width:'auto',borderBottomRightRadius:8}}>
                        <Feather name="phone-call" size={20} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:8}}>1900636036</Text>
                    </View>
                    </View>
                </View>
                </TouchableOpacity>
{/*----------------------------------------------------------------------------------------------------------------------------------------*/}
                <TouchableOpacity>
                <View style = {styles.b}>
                    <Image style = {styles.a}
                    source={{
                        uri:'https://images.foody.vn/res/g6/51714/s750/foody-tra-sua-tocotoco-times-city-655-636677881234421628.jpg'
                    }}
                    />
                    <View style ={{backgroundColor:'white',width:'auto',justifyContent:'space-around',borderBottomLeftRadius:8,borderBottomRightRadius:8,height:100,justifyContent:'space-evenly'}}>
                        <Text style ={{fontWeight:'bold',fontSize:16,marginLeft:10}}>Toco Toco – Vincom Mega Mall Times City</Text>
                    <View style ={{flexDirection:'row',width:'auto',marginLeft:10}}>
                        <Ionicons name="ios-location-outline" size={23} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:5,width:300}}>458 Minh Khai</Text>
                    </View>
                    <View style ={{flexDirection:'row',backgroundColor:'white',marginLeft:10,width:'auto',borderBottomRightRadius:8}}>
                        <Feather name="phone-call" size={20} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:8}}>1900636036</Text>
                    </View>
                    </View>
                </View>
                </TouchableOpacity>
{/*----------------------------------------------------------------------------------------------------------------------------------------*/}
                <TouchableOpacity>
                <View style = {styles.b}>
                    <Image style = {styles.a}
                    source={{
                        uri:'https://images.foody.vn/res/g66/655357/s/foody-tra-sua-tocotoco-dao-tan-960-636508555203081831.jpg'
                    }}
                    />
                    <View style ={{backgroundColor:'white',width:'auto',justifyContent:'space-around',borderBottomLeftRadius:8,borderBottomRightRadius:8,height:100,justifyContent:'space-evenly'}}>
                        <Text style ={{fontWeight:'bold',fontSize:16,marginLeft:10}}>Toco Toco - Đào tấn</Text>
                    <View style ={{flexDirection:'row',width:'auto',marginLeft:10}}>
                        <Ionicons name="ios-location-outline" size={23} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:5,width:300}}>1 Đào tấn</Text>
                    </View>
                    <View style ={{flexDirection:'row',backgroundColor:'white',marginLeft:10,width:'auto',borderBottomRightRadius:8}}>
                        <Feather name="phone-call" size={20} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:8}}>1900636036</Text>
                    </View>
                    </View>
                </View>
                </TouchableOpacity>
{/*----------------------------------------------------------------------------------------------------------------------------------------*/}
                <TouchableOpacity>
                <View style = {styles.b}>
                    <Image style = {styles.a}
                    source={{
                        uri:'https://poipic1.coccoc.com/450x230/poi/previews/20181102/27256-08292da09556fcc60cfd6063e56d777d.jpg'
                    }}
                    />
                    <View style ={{backgroundColor:'white',width:'auto',justifyContent:'space-around',borderBottomLeftRadius:8,borderBottomRightRadius:8,height:100,justifyContent:'space-evenly'}}>
                        <Text style ={{fontWeight:'bold',fontSize:16,marginLeft:10}}>Toco Toco - Phố Quang Trung</Text>
                    <View style ={{flexDirection:'row',width:'auto',marginLeft:10}}>
                        <Ionicons name="ios-location-outline" size={23} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:5,width:300}}>39 Phố Quang Trung</Text>
                    </View>
                    <View style ={{flexDirection:'row',backgroundColor:'white',marginLeft:10,width:'auto',borderBottomRightRadius:8}}>
                        <Feather name="phone-call" size={20} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:8}}>1900636036</Text>
                    </View>
                    </View>
                </View>
                </TouchableOpacity>
{/*----------------------------------------------------------------------------------------------------------------------------------------*/}
                <TouchableOpacity>
                <View style = {{marginLeft:15,marginRight:15,marginTop:25,height:290,marginBottom:20}}>
                    <Image style = {styles.a}
                    source={{
                        uri:'https://farm4.staticflickr.com/3734/19748368046_e1c4fd8085_o.jpg'
                    }}
                    />
                    <View style ={{backgroundColor:'white',width:'auto',justifyContent:'space-around',borderBottomLeftRadius:8,borderBottomRightRadius:8,height:100,justifyContent:'space-evenly'}}>
                        <Text style ={{fontWeight:'bold',fontSize:16,marginLeft:10}}>Toco Toco – Khâm Thiên</Text>
                    <View style ={{flexDirection:'row',width:'auto',marginLeft:10}}>
                        <Ionicons name="ios-location-outline" size={23} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:5,width:300}}>19 Khâm Thiên</Text>
                    </View>
                    <View style ={{flexDirection:'row',backgroundColor:'white',marginLeft:10,width:'auto',borderBottomRightRadius:8}}>
                        <Feather name="phone-call" size={20} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:8}}>1900636036</Text>
                    </View>
                    </View>
                </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    searchIcon:{
        alignSelf:'center',
        marginRight:10,
        marginLeft:5
    },
    input: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
    },
    a:{
        height:200,
        width:'auto',
        borderTopRightRadius:8,
        borderTopLeftRadius:8
    },
    b:{
        marginLeft:15,
        marginRight:15,
        marginTop:25,
        height:290,
    },
})
