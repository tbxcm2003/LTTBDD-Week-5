import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Container Ảnh điện thoại */}
      <View style={styles.imageContainer}>
        <Image source={require('../assets/img/vsblue.png')}
          style={styles.image}
        />
      </View>

       {/* Container Thông tin sản phẩm*/}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>

        
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>★★★★★</Text>
          <Text style={styles.reviews}>(Xem 828 đánh giá)</Text>
        </View>

       
        <View style={styles.priceContainer}>
          <Text style={styles.price}>1.790.000 đ</Text>
          <Text style={styles.oldPrice}>1.790.000 đ</Text>
        </View>

        <View style={styles.returnPolicyContainer}>
        <Text style={styles.returnPolicy}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image source={require('../assets/img/logochamhoi.png')}
          style={styles.logochamhoi}
        />
        </View>
        
        <TouchableOpacity style={styles.colorOptions}
        onPress={() => navigation.navigate('screen2')}>
          <Text style={styles.colorText}>4 MÀU - CHỌN MÀU</Text>
          <Image source={require('../assets/img/logomuiten.png')}
            style={styles.logomuiten}
          />
        </TouchableOpacity>
      </View>

      {/* Container Button Chọn mua */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#ccc',
  },
  imageContainer: {
    flex: 2,
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 460,
    resizeMode: 'contain',
  },
  infoContainer: {
    flex: 1,
    paddingVertical: 10,
  },
  title: {
    fontSize: 15,
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 5,
  },
  rating: {
    fontSize: 30,
    color: '#FFD700',
    marginRight: 20,
  },
  reviews: {
    fontSize: 16,
    
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 20,
  },
  oldPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: '#888',
    fontWeight:'bold',
    marginRight: 10,
  },
  returnPolicyContainer:{
    flexDirection: 'row',
    alignItems:'center',
    marginBottom:5,
  },
  returnPolicy: {
    fontSize: 14,
    color: 'red',
    fontWeight:'bold',
    marginBottom: 10,
    marginRight:10,
  },
  logochamhoi:{
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  colorOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  colorText: {
    fontSize: 16,
    color: '#000',
    fontWeight:'bold',
    flex: 1, 
    textAlign: 'center', 
  },
  logomuiten: {
    width: 12,
    height: 14,
    marginRight:10,
    marginTop:2,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 90,
  },
  buyButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    width: '98%',
    alignItems: 'center',
  },
  buyText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
