import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import Splitter from "@/components/Splitter";
import { useRouter } from "expo-router";

export default function ItemDetails() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-yellow-950">
      <StatusBar style="light" />

      {/* Background Gradients */}
      <LinearGradient
        colors={["rgba(0,0,0,1)", "transparent"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: hp(28),
        }}
      />

      {/* Header */}
      <View style={{ height: hp(28) }}>
        <View className="flex-row justify-between items-center w-full px-5 py-8">
          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-yellow-700 p-3 rounded-full"
          >
            <Ionicons name="caret-back" size={wp(8)} color={"white"} />
          </TouchableOpacity>
          <Text style={{ fontSize: hp(3) }} className="text-white">
            Details
          </Text>
          <TouchableOpacity className="bg-yellow-700 p-3 rounded-full">
            <Ionicons name="heart" size={wp(8)} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Details */}
      <View className="flex-1 bg-yellow-900 items-center justify-around w-full px-6 rounded-t-3xl">
        {/* LinearGrediant */}
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        />
        {/* ImageContainer */}
        <View
          style={{
            position: "absolute",
            top: -hp(18),
            zIndex: 1,
          }}
        >
          <Image
            source={require("../assets/images/BurgerLogo.png")}
            resizeMode="contain"
            style={{
              width: wp(75),
              height: wp(75),
            }}
          />
        </View>
        {/* ItemName */}
        <View style={{ paddingTop: hp(15) }}>
          <View className="w-full">
            <Text
              style={{ fontSize: wp(8) }}
              className="text-white font-semibold"
            >
              Single Beef
            </Text>
            <Text style={{ fontSize: wp(5) }} className="text-white">
              Single Beef & cheese
            </Text>
          </View>

          {/* ItemPrice & counter */}
          <View className="flex-row items-center w-full justify-between">
            <Text style={{ fontSize: wp(8) }} className="text-white font-bold">
              19$
            </Text>
            <View className="flex-row justify-between items-center gap-4 p-2 bg-black/70 rounded-full">
              <Ionicons name="remove" size={wp(6.5)} color={"white"} />
              <Text style={{ fontSize: wp(6.5) }} className="text-white">
                1
              </Text>
              <Ionicons name="add" size={wp(6.5)} color={"white"} />
            </View>
          </View>

          {/* Ratings */}
          <View className="flex-row w-full justify-between pt-12">
            <View
              style={{ width: wp(25), height: hp(3.2) }}
              className="flex-row justify-center items-center bg-black/50  gap-2 rounded-full"
            >
              <Ionicons name="star" size={wp(4)} color={"yellow"} />
              <Text style={{ fontSize: wp(4) }} className="text-white">
                4.6
              </Text>
            </View>
            <View
              style={{ width: wp(25), height: hp(3.2) }}
              className="flex-row justify-center items-center bg-black/50  gap-2 rounded-full"
            >
              <Ionicons name="bonfire-outline" size={wp(4)} color={"red"} />
              <Text style={{ fontSize: wp(4) }} className="text-white">
                300cal
              </Text>
            </View>
            <View
              style={{ width: wp(25), height: hp(3.2) }}
              className="flex-row justify-center items-center bg-black/50  gap-2 rounded-full"
            >
              <Ionicons name="time" size={wp(4)} color={"green"} />
              <Text style={{ fontSize: wp(4) }} className="text-white">
                5-10min
              </Text>
            </View>
          </View>
        </View>

        {/* Splitter */}

        <View className="py-1">
          <Splitter />
        </View>

        {/* About */}
        <View>
          <Text
            style={{ fontSize: wp(6) }}
            className="text-white font-semibold"
          >
            About Food
          </Text>
          <Text style={{ fontSize: wp(4) }} className="text-white">
            Pure beef patty, onions, ketchup, and mustard in a toasted bun.
          </Text>
        </View>

        {/* Button */}
        <View className="p-4">
          <TouchableOpacity className="bg-yellow-700 px-14 py-3 rounded-full">
            <Text
              style={{ fontSize: wp(5) }}
              className="text-white font-semibold"
            >
              ADD TO CART
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
