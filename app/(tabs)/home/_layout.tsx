import { router } from "expo-router";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const Home = () => {
  const renderItem = ({ item }: any) => {
    return (
      <View
        style={{
          marginBottom: 16,
          borderRadius: 15,
          marginHorizontal: 16,
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{
            width: 160,
            height: 203,
            borderRadius: 15,
            backgroundColor: "#F5F6FA",
            marginBottom: 8,
          }}
        />
        <Text>{item.name}</Text>
        <Text>{item.type}</Text>
        <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 8 }}>
          {item.price}đ
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data_product}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 16,
                alignItems: "center",
              }}
            >
              <Text>logohome</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#F5F6FA",
                  width: 45,
                  height: 45,
                  borderRadius: 45,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  router.navigate("/cart");
                }}
              >
                <Text>cart</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 28, fontWeight: "bold" }}>Hello</Text>
            <Text style={{ fontSize: 16, color: "#8F959E" }}>
              Welcome to Laza.
            </Text>
            <View
              style={{
                width: "100%",
                backgroundColor: "#F5F6FA",
                padding: 16,
                borderRadius: 8,
                marginVertical: 16,
              }}
            >
              <TextInput placeholder="Search..." />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 16,
                alignItems: "center",
              }}
            >
              <Text>Category</Text>
              <Text>All</Text>
            </View>
            <View style={{ marginBottom: 16 }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data_cate.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={{
                      backgroundColor: "#F5F6FA",
                      padding: 8,
                      borderRadius: 8,
                      marginRight: 8,
                      height: 40,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </>
        }
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </SafeAreaView>
  );
};

export default Home;

const data_cate = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Category 1",
  },
  {
    id: 3,
    name: "Category 2",
  },
  {
    id: 4,
    name: "Category 3",
  },
  {
    id: 5,
    name: "Category 4",
  },
  {
    id: 6,
    name: "Category 5",
  },
  {
    id: 7,
    name: "Category 6",
  },
  {
    id: 8,
    name: "Category 7",
  },
];

const data_product = [
  {
    id: 1,
    name: "Product 1",
    type: "type 1",
    price: 100,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    type: "type 1",
    price: 200,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    type: "type 1",
    price: 300,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product 4",
    type: "type 1",
    price: 400,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Product 5",
    type: "type 1",
    price: 500,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Product 6",
    type: "type 1",
    price: 600,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Product 7",
    type: "type 1",
    price: 700,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Product 8",
    type: "type 1",
    price: 800,
    image: "https://via.placeholder.com/150",
  },
];
