import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";
import OrderCard from "@/components/OrderCard";
import Splitter from "@/components/Splitter";
import { LinearGradient } from "expo-linear-gradient";

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
          height: hp(15),
        }}
      />

      {/* Header */}
      <View style={{ height: hp(15) }}>
        <View className="flex-row justify-between items-center w-full px-5 py-8">
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
            className="bg-yellow-700 p-3 rounded-full"
          >
            <Ionicons name="caret-back" size={wp(8)} color={"white"} />
          </TouchableOpacity>
          <Text style={{ fontSize: hp(3) }} className="text-white">
            Order Detail
          </Text>
          <TouchableOpacity className="bg-yellow-700 p-3 rounded-full">
            <Ionicons name="cart" size={wp(8)} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Orders */}
      <View className="flex-1 bg-yellow-900 rounded-t-3xl">
        <View className="flex-1">
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ padding: wp(3), gap: wp(2) }}
          >
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </ScrollView>
        </View>

        {/* Totals */}
        <View
          style={{ paddingBottom: hp(10) }}
          className="rounded-t-3xl bg-yellow-950"
        >
          <View className="flex-row justify-between p-5">
            <Text style={{ fontSize: wp(6.5) }} className="text-white">
              Total
            </Text>
            <Text style={{ fontSize: wp(3) }} className="text-white">
              <Text style={{ fontSize: wp(6.5) }}>19</Text> USD
            </Text>
          </View>
          <View>
            <Splitter />
          </View>

          {/* BUtton */}
          <View className="p-4 px-16">
            <TouchableOpacity className="bg-yellow-700 px-14 py-3 rounded-full">
              <Text
                style={{ fontSize: wp(5) }}
                className="text-white text-center font-semibold"
              >
                ADD TO CART
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
