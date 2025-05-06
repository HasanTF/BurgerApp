import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ItemCard() {
  const [favourite, setFavourite] = useState<Boolean>(false);
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push("/itemDetails")}
      style={{ padding: wp(4), width: wp(48) }}
      className="bg-black/70 justify-around items-center rounded-3xl"
    >
      {/* Favourite Button */}
      <Pressable
        onPress={() => {
          setFavourite((prev) => !prev);
        }}
        className="absolute bg-slate-100/20 p-2 rounded-full top-3.5 right-3.5 z-10"
      >
        <Ionicons
          name={favourite ? "heart" : "heart-outline"}
          size={wp(6.5)}
          color={"red"}
        />
      </Pressable>

      {/* Image Container */}
      <View className="">
        <Image
          source={require("../assets/images/BurgerLogo.png")}
          resizeMode="contain"
          style={{ width: wp(40), height: wp(40) }}
        />
      </View>

      {/* Details */}
      <View className="w-full">
        <Text className="text-white font-extrabold">Double Beef</Text>
        <Text style={{ fontSize: wp(3.5) }} className="text-yellow-200 mt-1">
          Burger
        </Text>
        <Text className="text-yellow-400">Larg cranchy tasty burger</Text>
        {/* Stars Container */}
        <View className="flex-row gap-2 py-2">
          <Ionicons name="star" size={wp(4)} color={"yellow"} />
          <Ionicons name="star" size={wp(4)} color={"yellow"} />
          <Ionicons name="star" size={wp(4)} color={"yellow"} />
          <Ionicons name="star" size={wp(4)} color={"yellow"} />
          <Ionicons name="star" size={wp(4)} color={"yellow"} />
        </View>
      </View>
      {/* Bottom Container */}
      <View className="w-full">
        <View className="flex-row justify-between items-center">
          <Text
            style={{ fontSize: wp(4.5) }}
            className="text-white font-extrabold"
          >
            19$
          </Text>
          <TouchableOpacity className="bg-orange-400 rounded-full p-1">
            {/* Add ml-auto here */}
            <Ionicons name="add" size={wp(8)} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
