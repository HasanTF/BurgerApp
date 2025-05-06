import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

export default function OrderCard() {
  return (
    <View className="flex-row bg-black/70 rounded-3xl">
      <View>
        <Image
          source={require("../assets/images/BurgerLogo.png")}
          resizeMode="contain"
          style={{ width: wp(40), height: wp(40) }}
        />
      </View>
      <View className="flex-1 justify-around">
        <View className="gap-2 ">
          <Text
            style={{ fontSize: wp(5) }}
            className="text-white font-extrabold"
          >
            Double Beef
          </Text>
          <Text style={{ fontSize: wp(3.5) }} className="text-yellow-200 mt-1">
            Burger
          </Text>
          <Text style={{ fontSize: wp(3) }} className="text-yellow-400">
            Double Beef with tasty souce
          </Text>
        </View>
        <View className="flex-row items-center justify-around">
          <Text
            style={{ fontSize: wp(6) }}
            className="text-white font-extrabold"
          >
            19$
          </Text>
          <View className="flex-row justify-between items-center gap-4 p-2 rounded-full">
            <TouchableOpacity className="bg-yellow-600 rounded-full">
              <Ionicons name="remove" size={wp(6)} color={"white"} />
            </TouchableOpacity>
            <Text style={{ fontSize: wp(5) }} className="text-white">
              1
            </Text>
            <TouchableOpacity className="bg-yellow-600 rounded-full">
              <Ionicons name="add" size={wp(6)} color={"white"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
