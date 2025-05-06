import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          height: hp(10),
          justifyContent: "center",
          alignItems: "center",
          borderTopLeftRadius: wp(3),
          borderTopRightRadius: wp(3),
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarIconStyle: {
          flex: 1,
          width: "100%",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "white" : "transparent",
                width: hp(6),
                height: hp(6),
                borderRadius: hp(100),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name={"home"}
                size={28}
                color={focused ? "saddlebrown" : "white"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "white" : "transparent",
                width: hp(5),
                height: hp(5),
                borderRadius: hp(2.5),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name={"cart"}
                size={28}
                color={focused ? "saddlebrown" : "white"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "white" : "transparent",
                width: hp(5),
                height: hp(5),
                borderRadius: hp(2.5),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name={"heart"}
                size={28}
                color={focused ? "saddlebrown" : "white"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "white" : "transparent",
                width: hp(5),
                height: hp(5),
                borderRadius: hp(2.5),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name={"notifications"}
                size={28}
                color={focused ? "#713f12" : "white"}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
