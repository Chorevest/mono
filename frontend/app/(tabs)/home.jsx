import { View, Text, FlatList, Image, ScrollView, Link } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { React, useState } from "react";
import { images } from "../../constants";
import CustomButton from "../../components/CustomButton";
import EmptyState from "../../components/EmptyState";

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  <>
    <View className="mb-8 p-2 w-full flex flex-wrap bg-gray-300">
      <View className="bg-gray-100 px-4 mx-5 py-5">
        <Text className="text-md text-black font-pregular">{title}</Text>
      </View>
    </View>
  </>
);

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        className="bg-primary"
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <FlatList
          // data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
          data={data}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.$id}
          ListHeaderComponent={() => (
            <View className="my-6 px-4 space-y-6">
              <View className="justify-between items-start flex-row mb-6">
                <View>
                  <Text className="font-pmedium text-sm text-gray-100">
                    Welcome Back
                  </Text>
                  <Text className="text-2xl font-psemibold text-white">
                    User
                  </Text>
                </View>

                <View className="mt-5">
                  <Image
                    source={images.logo}
                    className="w-20 h-20"
                    resizeMode="contain"
                  />
                </View>
              </View>
            </View>
          )}
          ListFooterComponent={() => (
            <CustomButton
              title="Add Another Chore"
              handlePress={() => router.push("/create")}
              containerStyles="w-full mt-20 my-5"
            />
          )}
          ListEmptyComponent={() => (
            <EmptyState
              title="No chores created yet!"
              subtitle="Create your first chore!"
            />
          )}
        />
        <Link
          href="././../index"
          className="text-lg font-psemibold text-secondary"
        >
          nvm, go to splash
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
