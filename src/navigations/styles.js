import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "absolute",
    marginBottom: "5%",
    marginTop: "2%",
    marginHorizontal: "2%",
    padding: "1%",
    borderRadius: 10,
    height: 70,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "transparent",
  },
  menu: {
    alignItems: "center",
    justifyContent: "center",
  },
  menuIcon: {
    width: 20,
    height: 20,
  },
  menuText: {
    color: "#000",
    fontFamily: "bold",
    fontSize: 10,
  },
});
