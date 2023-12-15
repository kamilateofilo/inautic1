import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
  },
  content: {
    flex: 1,
    marginTop: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    alignContent: "center",
    alignItems: "center",
    width: 250,
    height: 70,
  },
  content: {
    position: "fixed",
    bottom: 0,
    backgroundColor: "#fff",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  contentAction: {
    padding: 24,
    borderBottomWidth: 1,
    borderColor: "#E2E2E2",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  formContainer: {
    padding: 24,
  },
  form: {
    marginBottom: 12,
  },
  label: {
    color: "#000",
    fontSize: 16,
    fontWeight: 400,
    marginVertical: 8,
  },
  formGroup: {
    borderColor: "#FFF",
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    backgroundColor: "#EEE",
  },
  input: {
    padding: 16,
  },
  formGroupPassword: {
    borderRadius: 8,
    justifyContent: "center",
    backgroundColor: "#EEE",
  },
  action: {
    backgroundColor: "#0B54EE",
    borderColor: "#FFF",
    color: "#fff",
    padding: 16,
    marginTop: 24,
  },
  actionText: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
  },
});
