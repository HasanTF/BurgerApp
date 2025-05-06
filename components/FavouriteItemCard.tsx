import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function FavouriteItemCard() {
  return (
    <View className="bg-black/30 rounded-2xl p-4 flex-row items-center">
      {/* Item Image */}
      <Image
        source={require("../assets/images/BurgerLogo.png")}
        style={{ width: wp(20), height: wp(20), borderRadius: wp(3) }}
      />

      {/* Item Details */}
      <View className="flex-1 ml-4">
        <Text
          style={{ fontSize: wp(4.5) }}
          className="text-white font-semibold"
        >
          Double Beef
        </Text>
        <Text style={{ fontSize: wp(3.5) }} className="text-yellow-200 mt-1">
          Burger
        </Text>
        <Text
          style={{ fontSize: wp(4) }}
          className="text-yellow-400 mt-1 font-bold"
        >
          19$
        </Text>
      </View>

      {/* Action Buttons */}
      <View className="flex-row items-center gap-2">
        <TouchableOpacity className="bg-yellow-700 p-2 rounded-full">
          <Ionicons name="heart" size={wp(6)} color={"red"} />
        </TouchableOpacity>
        <TouchableOpacity className="bg-yellow-700 p-2 rounded-full">
          <Ionicons name="cart" size={wp(6)} color={"white"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
