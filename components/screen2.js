import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Screen2({ navigation }) {
  const [selectedColor, setSelectedColor] = useState(null);
  
  const colors = [
    { name: 'Light Blue', code: '#ADD8E6' },
    { name: 'Red', code: '#FF0000' },
    { name: 'Black', code: '#000000' },
    { name: 'Blue', code: '#0000FF' },
  ];

  const handleColorPress = (color) => {
    if (color.code === '#FF0000') { 
      navigation.navigate('screen3'); 
    } else {
      setSelectedColor(color.code); 
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.productInfoContainer}>
        <Image
          source={require('../assets/img/vsbluesmall.png')}
          style={styles.productImage}
        />
        <Text style={styles.productTitle}>Điện Thoại Vsmart Joy 3{"\n"}Hàng chính hãng</Text>
      </View>

      <View style={styles.infoContainer}> 
        <Text style={styles.instructionText}>Chọn một màu bên dưới:</Text>
        <View style={styles.colorsContainer}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.colorBox,
                { backgroundColor: color.code },
                selectedColor === color.code && styles.selectedColorBox,
              ]}
              onPress={() => handleColorPress(color)} />
          ))}
        </View>

        <TouchableOpacity
          style={styles.doneButton}>
          <Text style={styles.doneButtonText}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
  },
  productInfoContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    height: 190,
  },
  productImage: {
    width: 140,
    height: 150,
    resizeMode: 'contain',
    marginTop: 10,
    marginRight: 5,
  },
  productTitle: {
    marginTop: 20,
    fontSize: 13,
    fontWeight: 'bold',
  },
  infoContainer: {
    alignItems: 'center',  
    paddingHorizontal: 10,
    marginTop: 20,  
    width: '100%', 
  },
  instructionText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'left',  
    width: '100%',  
  },
  colorsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorBox: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  selectedColorBox: {
    borderColor: '#000',
  },
  doneButton: {
    backgroundColor: '#4267B2',
    padding: 10,
    borderRadius: 8,
    width: 350,
    height: 40,
    alignItems: 'center',
    marginTop: 40,
  },
  doneButtonText: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
  },
});
