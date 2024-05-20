import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ScrollView } from "react-native";
import { Link, Redirect, router } from "expo-router";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
// import "react-native-url-polyfill/auto";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        className="bg-primary"
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="bg-primary w-full flex justify-center items-center min-h-[85vh] px-4 mx-1">
          <Image
            source={images.logo}
            className="w-full h-[200px]"
            resizeMode="contain"
          />

          <Image
            source={images.splashFamily}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              It's never too early{"\n"}
              to invest with <Text className="text-secondary">Chorevest</Text>
            </Text>
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Making financial literacy common knowledge
          </Text>

          <CustomButton
            title="Let's Get Started!"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
        <Link href="../../home">Go to home</Link>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
