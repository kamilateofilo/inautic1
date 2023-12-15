import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  engine: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
  engineContent: {
    marginBottom: 8,
  },
  engineTitle: {
    backgroundColor: "#ddd",
    fontFamily: "louis",
    borderRadius: 8,
    padding: 8,
    marginTop: 10,
    fontSize: 13,
  },
});
