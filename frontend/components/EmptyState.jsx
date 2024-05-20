import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270-px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="text-xl text-center font-psemibold text-white mt-5">
        {title}
      </Text>
      <Text className="text-sm font-pmedium text-gray-100">{subtitle}</Text>
      <CustomButton
        title="Create new chore"
        handlePress={() => router.push("/create")}
        containerStyles="w-full mt-20 my-5"
      />
    </View>
  );
};

export default EmptyState;
