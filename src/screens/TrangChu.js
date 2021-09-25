  import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Swiper from 'react-native-swiper'
import { size } from 'lodash'
import { ImageBackground } from 'react-native'
import { getProductList } from '../services/Api'
import axios from 'axios'



export default function TrangChu({ route, navigation }) {
    const [product, setProduct] = useState([])
	// const dispatch = useDispatch();
	// const product = useSelector((store) => store.productReducer.products);

	useEffect(() => {
		// dispatch(getProduct({ page: 1, limit: 10 }));
		// getProductList()
		const callGetProductList = async () => {
			try {
				const response = await getProductList();
				console.log('rs', response.data.data); // data tu api tra ve
				setProduct(response.data.data)

			} catch (error) {
				console.error(error);
			}
		}

		callGetProductList()
	}, [])

    // const onMoveToDetail = (data) => () => {
	// 	navigation.navigate('Detail', { detail: data });
	// }

    // const renderItem = ({ item }) => (
	// 	<TouchableOpacity style={{ width: '45%', }} onPress={onMoveToDetail(item)}>
	// 		<Image
	// 			style={styles.imgStyle}
	// 			// source={{ uri: getImage(item.images?.[0]) }}
	// 			source={{ uri: item.img }}
	// 		/>
	// 		<View style={styles.rowPrice}>
	// 			<Text>{item.price}</Text>
	// 			<Ionicons name="heart" size={30} color={item.heart ? 'red' : 'grey'} />
	// 		</View>
	// 		<Text>{item.name}</Text>
	// 	</TouchableOpacity>
	// );

    return (
        <View>
            <ScrollView>
                {/* <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require('./image/login1.jpg')}
                        style={{ height: 80, width: 80 }}
                    />
                    <TextInput />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 300 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <AntDesign name="star" size={10} color="gray" />
                            <Text>MEMBER</Text>
                        </View>
                        <View>
                            <Text>0/5000</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <AntDesign name="star" size={10} color="yellow" />
                                <Text>VIP</Text>
                            </View>
                        </View>
                    </View>
                </View> */}
                <View>
                    <LinearGradient colors={['#FFFF99', '#FFFF99', '#FFFF99']} style={styles.linearGradient}>
                         <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={{ uri: 'https://xaydunghoanghung.com/wp-content/uploads/2020/11/JaZBMzV14fzRI4vBWG8jymplSUGSGgimkqtJakOV.jpeg'}}
                        style={ styles.AvatarIcon }
                    />
                    <Text style={{marginTop: 40}}> Do Manh Dung</Text>
                    <TextInput />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 300 }}>
                        <View style={{ flexDirection: 'row' }}>
                            {/* <AntDesign name="star" size={10} color="gray" /> */}
                            {/* <Text style={{marginTop: 40}}> Do Manh Dung</Text> */}
                        </View>
                        {/* <View>
                            <Text>0/5000</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <AntDesign name="star" size={10} color="yellow" />
                                <Text>VIP</Text>
                            </View>
                        </View> */}
                    </View>
                </View>
                        <TouchableOpacity style={{ width: '100%', height: 270, marginTop: 15 }}>

                        </TouchableOpacity>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>

                            </TouchableOpacity>
                            <TouchableOpacity>

                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.Delivery}>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontSize: 15, alignSelf: 'center', color: '#000000' }}>Số dư ví</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Ionicons name="card-outline" size={20} color="#666666" />
                                    <Text>0</Text>
                                    <Feather name="at-sign" size={20} color="#000000" />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Delivery}>
                            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15 }} >
                                <FontAwesome5 name="hand-holding-usd" size={20} color="#000000" />
                                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#000000' }}>NẠP ĐIỂM</Text>
                                <Ionicons name="chevron-forward-outline" size={20} color="#aaaaaa" />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <ImageBackground
                        style={{ flex: 1, marginLeft: 10, marginRight: 10, marginTop: 20, with: 20, height: 100, backgroundColor: '#ffffff', elevation: 10, fontSize: 15 }}
                        blurRadius={1}
                        source={{ uri: 'https://static.mservice.io/blogscontents/momo-upload-api-200514140423-637250618634276654.jpg'}}

                    >
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                            <View style={{ width: 275 }}>
                                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#F7FCC2' }}></Text>
                                <Text></Text>
                                {/* <Ionicons name="arrow-forward" size={25} color="black" /> */}
                            </View>
                            <View>
                                <Image
                                    source={{ uri: 'https://diadiemanngon.com/wp-content/uploads/2020/04/QR_SEODIADIEM-1.jpg'
}
}
                                    style={styles.DeliIcon}
                                />
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                    <View>
                        <View style={{ marginTop: 20, marginLeft: 10,flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Khuyến Mại</Text>
                            <TouchableOpacity >
                                    <Text style={{ marginRight: 10, color: '#000000' }}>Xem tất cả</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.TakeAway}>
                                <TouchableOpacity onPress={() => navigation.navigate('GoiMon')}>
                                    <Image
                                        source={{ uri: 'https://product.hstatic.net/1000355252/product/2018-03-20-09_39_59_mutvietquatdaxay_ca8e062cf8b244f5924bda2da96004f9_grande.jpg'
}
}
                                        style={styles.DeliIcon2}
                                    />
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', marginLeft: 10 }}>Mứt viêt quất sữa chua đá xay</Text>
                                    <Text style={{ marginLeft: 10 }}>40.000-50.000</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.TakeAway}>
                                <TouchableOpacity >
                                    <Image
                                        source={{ uri: 'https://congthucphache.com/wp-content/uploads/2017/09/2016815171448-mut-viet-quat-sua-chua-da-xay.jpg'
}
}
                                        style={styles.DeliIcon2}
                                    />
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', marginLeft: 10 }}> Trà Nhật Đá Xay</Text>
                                    <Text style={{ marginLeft: 10 }}>40.000-50.000</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                    <View>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', alignItems: 'center', marginLeft: 10 }}>Tin tức</Text>
                                <TouchableOpacity >
                                    <Text style={{ marginRight: 10, color: '#000000' }}>Xem tất cả</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 10, width: '95%', alignSelf: 'center' }}>
                                <TouchableOpacity style={{ width: '100%', height: 230, marginTop: 15 }}>
                                    <Swiper style={styles.wrapper}
                                        index={0}
                                        autoplay={true}
                                        dot={
                                            <View
                                                style={{
                                                    backgroundColor: 'silverred',
                                                    width: 18,
                                                    height: 3,
                                                    marginBottom: 8,
                                                    marginHorizontal: 2
                                                }}
                                            />
                                        }
                                        activeDot={
                                            <View
                                                style={{
                                                    backgroundColor: 'white',
                                                    width: 18,
                                                    height: 3,
                                                    marginBottom: 8,
                                                    marginHorizontal: 2
                                                }}
                                            />
                                        }
                                    >
                                        <View style={styles.slide}>
                                            <View style={styles.slide1}>
                                                <Image
                                                    source={{ uri: 'https://vcdn-ngoisao.vnecdn.net/2020/08/20/Hinh-1-thay-7234-1597914446.png'
}
}
                                                    style={{
                                                        width: '100%',
                                                        height: '90%',
                                                        alignSelf: 'center',
                                                        borderRadius: 10,
                                                    }}
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.slide}>
                                            <View style={styles.slide1}>
                                                <Image
                                                    source={{ uri: 'https://media.foody.vn/res/g71/704999/prof/s/image-87ee56e9-210113164525.jpeg'
}
}
                                                    style={{
                                                        width: '100%',
                                                        height: '90%',
                                                        alignSelf: 'center',
                                                        borderRadius: 10,
                                                    }}
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.slide}>
                                            <View style={styles.slide1}>
                                                <Image
                                                   source={{ uri: 'https://images.foody.vn/res/g93/922790/prof/s640x400/foody-upload-api-foody-mobile-960x550-200205154226.jpg'
}
}
                                                    style={{
                                                        width: '100%',
                                                        height: '90%',
                                                        alignSelf: 'center',
                                                        borderRadius: 10,
                                                    }}
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.slide}>
                                            <View style={styles.slide1}>
                                                <Image
                                                    source={{ uri: 'https://images.foody.vn/BlogsContents/foody-toco%202-636219760591414008.jpg'
}
}
                                                    style={{
                                                        width: '100%',
                                                        height: '90%',
                                                        alignSelf: 'center',
                                                        borderRadius: 10,
                                                    }}
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.slide}>
                                            <View style={styles.slide1}>
                                                <Image
                                                    source={{ uri: 'https://solution.com.vn/upload_images/images/1-2018-BO-NHAN-DIEN/TOCO-TOCO/thiet-ke-coc-tra-sua-dep-01.jpg'
}
}
                                                    style={{
                                                        width: '100%',
                                                        height: '90%',
                                                        alignSelf: 'center',
                                                        borderRadius: 10,
                                                    }}
                                                />
                                            </View>
                                        </View>
                                    </Swiper>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {/* <View style={{ marginTop: 20, marginLeft: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}></Text>
                    </View> */}
                </View>
            </ScrollView>
        </View >
    )
}



const styles = StyleSheet.create({
    scroll: {
        height: 'auto'
    },
    linearGradient: {
        width: '100%',
        height: 70
    },
    slide: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        height: '90%',
    },
    slide1: {
        flex: 1,
        width: 'auto',
        height: 'auto',
        marginRight: 5
    },
    wrapper: {},
    deli: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    Delivery: {
        width: '50%',
        height: 60,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'silver',
    },
    AvatarIcon: {
        width: 50,
        height: 50,
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 50
    },
    DeliIcon: {
        width: 50,
        height: 50,
        alignSelf: 'center'
    },
    DeliIcon2: {
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
    txtDeli: {
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 10,
        marginTop: 10
    },
    Log: {
        width: '95%',
        height: 200,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 8,
        alignItems: 'center',
        borderWidth: 0.3,
        borderColor: 'silver',
    },
    banner: {
        width: '95%',
        height: 150,
        alignSelf: 'center',
        marginTop: 20
    },
    reward: {
        width: '95%',
        height: 1000,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 20,
        borderWidth: 0.3,
        borderColor: 'silver',
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center'
    },
    Notif: {
        width: '95%',
        height: 'auto',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderColor: '#f9f9f9',
        borderWidth: 0.5,
        borderRadius: 8,
    },
    Noti: {
        margin: 15,
        flexDirection: 'row'
    },
    NotiTxt: {
        marginLeft: 20
    },
    TakeAway: {
        width: '45%',
        height: 180,
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFCC',
        borderColor: '#FFFFCC'
    }
})

