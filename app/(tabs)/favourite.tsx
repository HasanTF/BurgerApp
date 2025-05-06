import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import FavouriteItemCard from "@/components/FavouriteItemCard"; // You'll need to create this component

export default function Favourite() {
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
          height: hp(15),
        }}
      />

      {/* Header */}
      <View style={{ height: hp(15) }}>
        <View className="flex-row justify-between items-center w-full px-5 py-8">
          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-yellow-700 p-3 rounded-full"
          >
            <Ionicons name="caret-back" size={wp(8)} color={"white"} />
          </TouchableOpacity>
          <Text style={{ fontSize: hp(3) }} className="text-white">
            Favourites
          </Text>
          <TouchableOpacity className="bg-yellow-700 p-3 rounded-full">
            <Ionicons name="heart" size={wp(8)} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Favourite Items List */}
      <View className="flex-1 bg-yellow-900 rounded-t-3xl">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            padding: wp(5),
            gap: hp(2),
            paddingBottom: hp(12),
          }}
        >
          <FavouriteItemCard />
          <FavouriteItemCard />
          <FavouriteItemCard />
          <FavouriteItemCard />
          <FavouriteItemCard />
          <FavouriteItemCard />
          <FavouriteItemCard />
          <FavouriteItemCard />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
