import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 16,
  },
  viewItem: {
    flexDirection: "row",
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: "white",
    marginBottom: 16,
    borderRadius: 10,
  },
  imgItem: {
    width: 100,
    height: 100,
    backgroundColor: "#F5F6FA",
    borderRadius: 12,
  },
  viewItemContent: {
    padding: 4,
    marginLeft: 10,
    width: "60%",
    justifyContent: "space-evenly",
    alignContent: "space-between",
  },
  viewItemButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewTouchQuantity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 100,
  },
  touch: {
    borderWidth: 1,
    borderColor: "black",
    padding: 4,
    borderRadius: 20,
  },
});

export default styles;
