import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function NotificationCard() {
  return (
    <View className="items-center bg-yellow-700 rounded-3xl p-12 gap-10">
      <View className="bg-green-500 rounded-full p-2">
        <Ionicons name="checkmark" size={wp(8)} color={"white"} />
      </View>
      <Text style={{ fontSize: wp(4) }} className="text-black text-center">
        You have successfully placed{"\n"}
        your order.
      </Text>
      <TouchableOpacity className="bg-yellow-900 w-3/4 p-3 rounded-full">
        <Text style={{ fontSize: wp(4) }} className="text-white text-center">
          VIEW ORDER
        </Text>
      </TouchableOpacity>
    </View>
  );
}
