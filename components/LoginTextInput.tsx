import { View, TextInput, Text, TextInputProps } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface LoginTextInputProps extends TextInputProps {
  placeholder: string;
  error?: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
}

export default function LoginTextInput({
  placeholder,
  error,
  secureTextEntry = false,
  value,
  onChangeText,
}: LoginTextInputProps) {
  return (
    <View className="items-center mb-1">
      <View
        className={`bg-white/80 w-5/6 rounded-full mt-4 ${
          error ? "border-2 border-red-500" : ""
        }`}
      >
        <TextInput
          placeholder={placeholder}
          className="px-6 py-4"
          placeholderTextColor="#6b7280"
          style={{ fontSize: wp(5) }}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      {error && (
        <Text className="text-red-500 text-sm mt-1 w-5/6 text-left">
          {error}
        </Text>
      )}
    </View>
  );
}
