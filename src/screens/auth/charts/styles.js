import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  backgroundImage: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 20,
    marginTop: Platform.OS === "android" ? hp("7%") : hp("8%"),
  },
  titleContainer: {
    marginBottom: 8,
  },
  title: {
    fontFamily: "bold",
    fontSize: 18,
    color: "#fff",
  },
  chartContainer: {
    flex: 4,
  },
  chartTitle: { fontSize: 20, color: "#fff" },
  chart: {
    marginVertical: 8,
    borderRadius: 8,
  },
});
