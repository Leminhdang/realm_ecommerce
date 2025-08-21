import { ThemedText } from "@/components/ThemedText";
import { login } from "@/database/services/user";
import { router } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const user = await login({ email, password });
      router.replace("/(tabs)");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 16 }}>
      <ThemedText type="title">Hello Nhóm 21!</ThemedText>
      <ThemedText type="default">Mail/Phone</ThemedText>
      <TextInput placeholder="Nhập dữ liệu" onChangeText={setEmail} />

      <ThemedText type="default">Password</ThemedText>
      <TextInput placeholder="Nhập dữ liệu" onChangeText={setPassword} />

      <TouchableOpacity onPress={handleLogin}>
        <Text>Đăng nhập</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
