import { View, Text, Image, ScrollView, Alert } from "react-native";
import { images } from "../../constants";
import { React, router } from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
// import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

import FormField from "../../components/FormField";
import { signIn } from "../../lib/appwrite";

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: " ", password: " " });

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all the fields");
    }

    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);
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
            Welcome Back! Log in to Chorevest
          </Text>
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
            handleChangeText={(p) => setForm({ ...form, password: p })}
            otherStyles="mt-7"
            keyborardType="password" //for autofill
          />
        </View>
        <View className="justify-end pt-5 flex-row gap-2 mb-3">
          <Link
            href="./sign-up"
            className="text-lg font-psemibold text-secondary"
          >
            Forgot Password?
          </Link>
        </View>

        <CustomButton
          title="Sign In"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />

        <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-lg text-gray-100 font-pregular">
            I don't have an account
          </Text>
          <Link
            href="./sign-up"
            className="text-lg font-psemibold text-secondary"
          >
            Sign up
          </Link>
          <Link
            href="././../index"
            className="text-lg font-psemibold text-secondary"
          >
            nvm, go home
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
