import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => width / guidelineBaseWidth * size
const metrics = {
  DEVICE_WIDTH: width,
  DEVICE_HEIGHT: height,
  scale: size => width / guidelineBaseWidth * size
};

export default metrics;
