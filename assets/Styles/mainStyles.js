import { Dimensions, Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    viewContainer: {
      flex: 1,
      backgroundColor: '#000514',
      justifyContent: "center",
      alignItems: "center"
    },
    mainPage:{
       marginTop: (Dimensions.get("window").height * 25 / 100)
    },
    scrollViewContainer: {
      flex: 1,
      backgroundColor: '#000514'
    },
    textDefault: {
      fontSize: 16,
      color: "#e7e7e7",
      marginTop: 2.5,
      maxWidth: 350,
      textAlign: "justify",
      fontFamily: "FiraSansExtraCondensed_500Medium"
    },
    flexRow: {
      flexDirection: "row",
      flexWrap: "wrap"
    },
    footerContainer: {
      backgroundColor: "#030814",
      position: "absolute",
      bottom: 0,
      width: Dimensions.get("window").width,
      padding: 15,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      shadowColor: "#ff9900",
      shadowOffset: {width: 1, height: 1},
      shadowRadius: 5
    },
    input: {
      width: 250,
      minHeight: 55,
      backgroundColor: "#fff",
      borderRadius: 2.5,
      margin: 2.5,
      padding: 5,
      fontFamily: "FiraSansExtraCondensed_500Medium"
    },
    buttonDefault:{
      minWidth: 50,
      minHeight: 55,
      backgroundColor: "grey",
      padding: 5,
      margin: 5,
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center"
    },
    successButton: {
      backgroundColor: "#157347"
    },
    textTitle: {
      fontSize: 35,
      color: "#ff9900",
      fontFamily: "FiraSansExtraCondensed_500Medium"
    },
    select: {
      minHeight: 55,
      maxWidth: Platform.select({web: 250, default: 250}),
      minWidth: 150,
      padding: 2.5,
      margin: 5,
      alignSelf: "center",
      borderRadius: 5,
      width: Dimensions.get("window").width,
      backgroundColor: "#fff",
      fontFamily: "FiraSansExtraCondensed_500Medium",
      borderWidth: 0
    },
    card: {
      minWidth: Dimensions.get("window").width * 50 / 100,
      maxWidth: 500,
      minHeight: 250,
      backgroundColor: "#1d056d",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      margin: 10,
      padding: 15,
      borderRadius: 2.5
    },
    link: {
      color: "#ff9900",
      margin: 0,
      padding: 0,
      fontFamily: "FiraSansExtraCondensed_500Medium"
    },
    iconMe: {
      maxWidth: 250,
      maxHeight: 250,
      minHeight: 150,
      minWidth: 150,
      borderRadius: 1000,
      margin: 7.5,
    },
});


export default styles