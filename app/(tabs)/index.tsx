import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import ItemCard from "@/components/ItemCard";

interface DataType {
  id: number;
  name: string;
}

const Data = [
  {
    id: 1,
    name: "Burger",
  },
  {
    id: 2,
    name: "Pizza",
  },
  {
    id: 3,
    name: "Briyani",
  },
];

const Items = [1, 2, 3, 4, 5, 6, 7];

export default function Index() {
  const [selectedCat, setSelectedCat] = useState<number>(1);

  const handleCatPress = (id: number) => {
    setSelectedCat(id);
    // console.log(id);
  };

  return (
    <View className="flex-1 items-center bg-yellow-900">
      {/* Headear */}
      <View className="bg-yellow-950 w-full px-12 pt-12 rounded-b-3xl">
        {/* userDetails */}
        <View className="flex-row items-center justify-start w-full gap-6">
          <Image
            source={require("../../assets/images/userIcon.png")}
            resizeMode="stretch"
            style={{ width: wp(18), height: wp(18) }}
            className="rounded-full"
          />
          <View>
            <Text style={{ fontSize: wp(6) }} className="text-white">
              Hello,{" "}
              <Text className="font-extrabold text-orange-400">Hasan</Text>
            </Text>
          </View>
        </View>
        {/* SearchBar */}
        <View className="py-3">
          <Text
            style={{ fontSize: wp(3.5) }}
            className="text-center text-white"
          >
            What do you want to eat today?
          </Text>
          <View className="flex-row items-center bg-white rounded-xl px-2 my-2">
            <TouchableOpacity className="p-2">
              <Ionicons name="search" size={wp(6)} color={"gray"} />
            </TouchableOpacity>
            <TextInput
              placeholder="Search for food.."
              className="flex-1 text-lg"
            />
          </View>
        </View>
      </View>

      {/* Categories */}
      <View className="flex-row w-full px-4 mt-4 justify-around py-2">
        {Data.map((item: DataType) => (
          <Pressable
            key={item.id}
            style={[
              {
                width: wp(28),
                height: hp(4),
                justifyContent: "center",
                alignItems: "center",
                borderRadius: wp(100),
                zIndex: selectedCat === item.id ? 1 : 0,
              },
              selectedCat === item.id && {
                shadowColor: "#fff",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 5,
                borderWidth: 1,
                borderColor: "#FCD34D",
              },
            ]}
            className={`justify-center items-center rounded-full ${
              selectedCat === item.id ? "bg-orange-400" : "bg-white"
            }`}
            onPress={() => {
              handleCatPress(item.id);
            }}
          >
            <Text
              style={{ fontSize: wp(4) }}
              className={`font-bold ${
                selectedCat === item.id ? "text-white" : "text-black"
              }`}
            >
              {item.name}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* itemsDisplay */}
      <FlatList
        data={Items}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          gap: wp(1.5),
        }}
        contentContainerStyle={{
          paddingTop: hp(2),
          paddingBottom: hp(11),
          gap: wp(2),
        }}
        renderItem={() => <ItemCard />}
      />
    </View>
  );
}
