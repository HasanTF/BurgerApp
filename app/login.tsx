import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import LoginTextInput from "@/components/LoginTextInput";
import { useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  Easing,
  runOnJS,
  FadeInLeft,
  FadeInRight,
} from "react-native-reanimated";

export default function Index() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Reanimated shared values
  const formPosition = useSharedValue(0);
  const formOpacity = useSharedValue(1);

  const animatedFormStyle = useAnimatedStyle(() => ({
    opacity: formOpacity.value,
    transform: [{ translateY: formPosition.value }],
  }));

  const toggleForm = () => {
    // First animate out
    formOpacity.value = withTiming(0, { duration: 150 });
    formPosition.value = withTiming(
      50,
      {
        duration: 200,
        easing: Easing.out(Easing.ease),
      },
      () => {
        // When animation completes, toggle state and reset position
        runOnJS(setIsLogin)(!isLogin);
        runOnJS(setEmail)("");
        runOnJS(setPassword)("");
        runOnJS(setConfirmPassword)("");
        runOnJS(setErrors)({ email: "", password: "", confirmPassword: "" });

        formPosition.value = -50; // Start from above

        // Then animate in
        formOpacity.value = withTiming(1, { duration: 150 });
        formPosition.value = withTiming(0, {
          duration: 250,
          easing: Easing.out(Easing.ease),
        });
      }
    );
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "", confirmPassword: "" };

    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    if (!isLogin && password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    router.push("/(tabs)");
    if (validateForm()) {
      router.push("/(tabs)");
      if (isLogin) {
        console.log("Logging in with:", email, password);
      } else {
        console.log("Signing up with:", email, password);
      }
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-yellow-900">
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

      {/* Logo Section */}
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
      <Animated.View
        entering={FadeInRight.duration(500).delay(500)}
        className="flex-1 items-center"
      >
        <Animated.View className="w-full px-8" style={animatedFormStyle}>
          <LoginTextInput
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            error={errors.email}
          />

          <LoginTextInput
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            error={errors.password}
          />

          {!isLogin && (
            <LoginTextInput
              placeholder="Confirm Password"
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              error={errors.confirmPassword}
            />
          )}

          {isLogin && (
            <Pressable className="items-center my-4">
              <Text className="text-white text-sm">Forgot Password?</Text>
            </Pressable>
          )}

          <View className="flex-row justify-center mt-2">
            <Text className="text-center text-white text-xl">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </Text>
            <Pressable onPress={toggleForm}>
              <Text className="text-yellow-400 font-extrabold text-xl">
                {" "}
                {isLogin ? "Sign Up" : "Login"}
              </Text>
            </Pressable>
          </View>
        </Animated.View>
      </Animated.View>

      <Animated.View
        entering={FadeInLeft.duration(500).delay(1000)}
        className="w-full justify-center items-center px-8 mb-12"
      >
        <TouchableOpacity
          className="bg-yellow-500 w-full py-3 rounded-full justify-center items-center"
          onPress={handleSubmit}
        >
          <Text className="text-white font-bold text-lg">
            {isLogin ? "Login" : "Sign Up"}
          </Text>
        </TouchableOpacity>
      </Animated.View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
