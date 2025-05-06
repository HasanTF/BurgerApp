import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Animated, { FadeInLeft, FadeInRight } from "react-native-reanimated";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-yellow-900">
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

      {/* Logo */}
      <Animated.View
        entering={FadeInLeft.duration(500)}
        className="justify-center items-center h-1/2"
      >
        <Image
          source={require("../assets/images/BurgerLogo.png")}
          resizeMode="contain"
          style={{ width: wp(75), height: hp(50) }}
        />
      </Animated.View>

      {/* Content Container */}
      <View className="flex-1 justify-around items-center my-10">
        {/* Header Text */}
        <View>
          <Animated.View entering={FadeInRight.duration(500).delay(500)}>
            <Text
              style={{ fontSize: wp(7) }}
              className="text-white text-center"
            >
              <Text>
                Meals Delivered Fast{"\n"} & Fresh{"\n"}
              </Text>
            </Text>
          </Animated.View>
          <Animated.View entering={FadeInLeft.duration(500).delay(750)}>
            <Text
              style={{ fontSize: wp(7) }}
              className="text-white text-center"
            >
              <Text className="text-amber-400">To Your Doorstep!</Text>
            </Text>
          </Animated.View>
        </View>

        {/* Getting Started Button */}
        <Animated.View
          entering={FadeInRight.duration(500).delay(1250)}
          className="w-full justify-center items-center"
        >
          <TouchableOpacity
            onPress={() => {
              router.replace("/login");
            }}
            className="bg-yellow-800 w-2/3 py-5 rounded-full"
          >
            <Text
              style={{ fontSize: wp(4) }}
              className="text-white text-center font-extrabold"
            >
              GET STARTED
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
