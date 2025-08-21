import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const Cart = () => {
  const [data, setData] = useState(data_cart);

  const handleQuantity = (id: number, type: string) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity:
            type === "plus"
              ? item.quantity + 1
              : item.quantity === 0
              ? 0
              : item.quantity - 1,
        };
      }
      return item;
    });

    setData(newData);
  };

  const handleSelected = (id: number) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          seleted: item.seleted === 1 ? 0 : 1,
        };
      }
      return item;
    });

    setData(newData);
  };

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.viewItem}>
        <TouchableOpacity
          style={{ alignSelf: "center", marginRight: 10 }}
          onPress={() => handleSelected(item.id)}
        >
          <MaterialCommunityIcons
            name={
              item?.seleted === 1
                ? "checkbox-outline"
                : "checkbox-blank-outline"
            }
            size={24}
            color={item?.seleted === 1 ? "blue" : "gray"}
          />
        </TouchableOpacity>
        <Image source={{ uri: item.image }} style={styles.imgItem} />
        <View style={styles.viewItemContent}>
          <Text>{item.name}</Text>
          <Text>{item.attr}</Text>
          <View style={styles.viewItemButton}>
            <View style={styles.viewTouchQuantity}>
              <TouchableOpacity
                style={styles.touch}
                onPress={() => handleQuantity(item.id, "plus")}
              >
                <Ionicons name="chevron-up-outline" size={16} color="gray" />
              </TouchableOpacity>
              <Text>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.touch}
                onPress={() => handleQuantity(item.id, "minus")}
              >
                <Ionicons name="chevron-down-outline" size={16} color="gray" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.touch}>
              <AntDesign name="delete" size={14} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Text> Cart</Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ marginTop: 20 }}
      />
    </SafeAreaView>
  );
};

export default Cart;

const data_cart = [
  {
    id: 1,
    image: "image",
    name: "Quần áo",
    attr: "41",
    quantity: 2,
    seleted: 0,
  },
  {
    id: 2,
    image: "image",
    name: "Quần balo",
    attr: "42",
    quantity: 2,
    seleted: 0,
  },
  {
    id: 3,
    image: "image",
    name: "Quần áo",
    attr: "41",
    quantity: 2,
    seleted: 1,
  },
  {
    id: 4,
    image: "image",
    name: "Quần balo",
    attr: "42",
    quantity: 2,
    seleted: 0,
  },
];
