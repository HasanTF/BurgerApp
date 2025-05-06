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
import NotificationCard from "@/components/NotificationCard";
import { LinearGradient } from "expo-linear-gradient";

export default function Norifications() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-yellow-950">
      <StatusBar style="light" />

      {/* Linears */}

      {/* Top gradient (transparent to opaque) */}
      <LinearGradient
        colors={["rgba(0,0,0,1)", "transparent"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: hp(50),
        }}
      />
      {/* Bottom gradient (opaque to transparent) */}
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,1)"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: hp(50),
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
            Confirm Order
          </Text>
          <TouchableOpacity className="bg-yellow-700 p-3 rounded-full">
            <Ionicons name="cart" size={wp(8)} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Notifications */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: wp(10),
          gap: hp(2),
          paddingBottom: hp(12),
        }}
      >
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </ScrollView>
    </SafeAreaView>
  );
}
