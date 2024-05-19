import { View, Text, Image, ScrollView, Alert, Dimnesions } from "react-native";
import { images } from "../../constants";
import { React, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
// import { StatusBar } from "expo-status-bar";
import { Link, router } from "expo-router";

import FormField from "../../components/FormField";
import { createUser } from "../../lib/appwrite";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: " ",
    lastName: " ",
    email: " ",
    password: " ",
  });

  const submit = async () => {
    if (
      form.firstName === "" ||
      form.lastName === "" ||
      form.email === "" ||
      form.password === ""
    ) {
      Alert.alert("Error", "Please fill in all the fields");
    }

    setIsSubmitting(true);

    try {
      const result = await createUser(
        form.email,
        form.password,
        form.firstName,
        form.lastName
      );

      //set it to global state

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        className="bg-primary"
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="bg-primary w-full min-h-[85hv] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[300px] h-[100px] flex-row justify-items items-start"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Welcome to Chorevest! Let's get started!
          </Text>
          <FormField
            title="First Name"
            value={form.firstName}
            handleChangeText={(f) => setForm({ ...form, firstName: f })}
            otherStyles="mt-7"
            keyboardType="first-name" //for auto-fill
          />
          <FormField
            title="Last Name"
            value={form.lastName}
            handleChangeText={(l) => setForm({ ...form, lastName: l })}
            otherStyles="mt-7"
            keyboardType="last-name" //for auto-fill
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address" //for auto-fill
          />
          <FormField
            title="Password"
            value={form.password}
            placeholder="change to sign up with alt accounts"
            handleChangeText={(p) => setForm({ ...form, password: p })}
            otherStyles="mt-7"
            keyborardType="password" //for autofill
          />
        </View>
        <Text>Checkbox confirm over 18</Text>
        <CustomButton
          title="Sign Up"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />

        <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-lg text-gray-100 font-pregular">
            Already have an account?
          </Text>
          <Link
            href="./sign-in"
            className="text-lg font-psemibold text-secondary"
          >
            Sign in
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
