import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa",
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 60,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 20,
  },
  button: {
    width: 300,
    height: 60,
    backgroundColor: "#2e8b57",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  forgotPasswordText: {
    color: "#2e8b57",
    fontSize: 18,
    marginBottom: 10,
  },
  registerText: {
    color: "#2e8b57",
    fontSize: 18,
    marginBottom: 10,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  socialButton: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginHorizontal: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default styles;