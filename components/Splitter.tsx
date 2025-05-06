import { View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Splitter() {
  return (
    <View
      style={{
        backgroundColor: "white",
        width: wp(100),
        height: hp(0.024),
      }}
    />
  );
}
