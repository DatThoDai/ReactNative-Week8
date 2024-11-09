import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
const ProductsScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  // const products = [
  //   {
  //     id: '1',
  //     name: 'Pinarello',
  //     price: 1800,
  //     image: require('./images/bifour.png')
  //   },
  //   {
  //     id: '2',
  //     name: 'Pinarello',
  //     price: 1700,
  //     image: require('./images/bione.png')
  //   },
  //   {
  //     id: '3',
  //     name: 'Pinarello',
  //     price: 1500,
  //     image: require('./images/bithree.png')
  //   },
  //   {
  //     id: '4',
  //     name: 'Pinarello',
  //     price: 1900,
  //     image: require('./images/bitwo.png')
  //   },
  //   {
  //     id: '5',
  //     name: 'Pinarello',
  //     price: 2700,
  //     image: require('./images/bithree.png')
  //   },
  //   {
  //     id: '6',
  //     name: 'Pinarello',
  //     price: 1350,
  //     image: require('./images/bione.png')
  //   },
  // ];
  var url = "https://6710fa904eca2acdb5f30afb.mockapi.io/task2";
  useEffect(() => {
    var fn = fetch(url);
    fn.then(res => res.json()).then(data => setData(data));
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>The world’s Best Bike</Text>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButtonActive}>
          <Text style={styles.filterTextActive}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>RoadBike</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Mountain</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 8, width: "100%" }}>
        <FlatList data={data}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            
            <TouchableOpacity
              style={styles.productCard}
              onPress={() => navigation.navigate('Details', { products: item })}
            >
              <Image source={require('./images/heart.png')} style={styles.heartIco} />
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}><Text style={{ color: '#F7BA83' }}>$</Text>{item.price}</Text>
            </TouchableOpacity>
          )}
        >
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  pageTitle: {
    fontSize: 20,
    color: "#E94141",
    marginTop: 30,
    fontWeight: "bold",
    flex: 1,
  },
  filterContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  filterText: {
    textAlign: "center",
  },
  filterButtonActive: {
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
    paddingHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#E94141",
  },
  filterButton: {
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#E94141",
  },
  filterTextActive: {
    color: "#E94141",
  },
  filterText: {
    color: "#BEB6B6",
  },
  productCard: {
    backgroundColor: '#F7BA8326',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    position: "relative",
    flex: 1,
  },
  productImage: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },
  heartIco: {
    position: "absolute",
    top: 5,
    left: 10,
  },
  productName: {
    textAlign: "center",

  },
  productPrice: {
    textAlign: "center",
  },
});

export default ProductsScreen