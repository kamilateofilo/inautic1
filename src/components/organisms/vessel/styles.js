import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginTop: 10,
    opacity: 0.9,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  contentItem: {
    display: "flex",
    flexDirection: "row",
  },
  vessel: {
    height: 25,
    width: 25,
  },
  title: {
    fontFamily: "bold",
    color: "#333",
    fontSize: 16,
    marginLeft: 8,
  },
});
