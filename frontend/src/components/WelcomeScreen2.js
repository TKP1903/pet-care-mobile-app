import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground,Dimensions,TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen1() {
  const navigation = useNavigation();
  const handleNextPress = () => {
    navigation.navigate("WelcomeScreen3"); // replace "NextScreen" with the name of your next screen component
  }

  return (
    <View style={styles.WelcomeScreen2}>
      
      
        <View style={styles.NavBar88Pt}>
         
          <Text style={styles.SignIn}>Sign In</Text>
        </View>
        <View style={styles.Group316}>
        <Image
          style={styles.FemaleVeterinarianWithDog}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/3kjzsocmke2-607%3A3388?alt=media&token=80445a75-229b-41b8-9093-d0f6e616517c",
          }}
        />
        <Image
          style={styles.Slider2}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/3kjzsocmke2-529%3A11458?alt=media&token=b8e24151-af61-4cbd-8bdb-98564bb66693",
          }}
        />
        <Text style={styles.ProvenExperts}>Proven experts</Text>

        <Text style={styles.WeInterviewEverySpec}>
          We interview every specialist before they get to work.
        </Text>
        
        <TouchableOpacity style={{width: '100%', height: height * 0.07}} onPress={handleNextPress}>
        <View style={styles.ButtonsSolidNormal}>
          <Text style={styles.Next}>Next</Text>
         </View>
         </TouchableOpacity>
       
      </View>
    </View>
  )
}



// const styles = StyleSheet.create({
//     WelcomeScreen2: {
//       flexGrow: 1,
//       backgroundColor: "#FFFFFF",
//     },
//     Group316: {
//       position: "absolute",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       width: "100%",
//       height: "100%",
//     },
   
      
      
     
      
//       NavBar88Pt: {
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         width: "100%",
//         paddingLeft: 14,
//         paddingRight: 20,
//         paddingTop: 49,
//         paddingBottom: 7,
//       },
      
//       SignIn: {
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "flex-end",
//         color: "rgba(237,109,78,1)",
//         fontSize: 13,
//         lineHeight: 13,
//         fontFamily: "Encode Sans, sans-serif",
//         fontWeight: "600",
//         textAlign: "right",
//         letterSpacing: 0.13,
//       },
//       FemaleVeterinarianWithDog: {
//         width: 278,
//         height: 313,
//       },
//       Slider2: {
//         width: 58,
//         height: 8,
//       },
//       ProvenExperts: {
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         color: "rgba(7,8,33,1)",
//         fontSize: 24,
//         lineHeight: 24,
//         fontFamily: "Encode Sans, sans-serif",
//         fontWeight: "700",
//         textAlign: "center",
//         letterSpacing: 0.48,
//       },

//       WeInterviewEverySpec: {
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         color: "rgba(7,8,33,1)",
//         fontSize: 16,
//         lineHeight: 24,
//         fontFamily: "Encode Sans, sans-serif",
//         fontWeight: "400",
//         textAlign: "center",
//         letterSpacing: 0.16,
//       },
      
//       ButtonsSolidNormal: {
//       flexDirection: "column",
//       justifyContent: "flex-start",
//       alignItems: "flex-start",
//       width: "100%",
//       paddingLeft: 112,
//       paddingRight: 111,
//       paddingTop: 13,
//       paddingBottom: 17,
//       borderRadius: 24,
//       backgroundColor: "rgba(237,109,78,1)",
//     },


//     Next: {
//       flexDirection: "column",
//       justifyContent: "center",
//       color: "#FFF",
//       fontSize: 16,
//       lineHeight: 16,
//       fontFamily: "Encode Sans",
//       fontWeight: "700",
//       textAlign: "center",
//     },
   
//   });
  
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  WelcomeScreen2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#F9F8FD"
  },
  Group316: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: height * 0.30,
    paddingHorizontal: width * 0.1,
    width: "100%",
  },

  NavBar88Pt: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * 0.04,
  },

  SignIn: {
    fontSize: 18,
    lineHeight: height * 0.04,
    fontWeight: "600",
    marginLeft: width * 0.79,
    color: "rgba(237,109,78,1)",
    marginTop: height * 0.07,
  },
  
  FemaleVeterinarianWithDog: {
     position: "absolute",
     top: height * -0.01,
     left: width * 0.29,
      width: width * 0.6,
      height: height * 0.35,
  },
  Slider2: {
    width: "100%",
      width: width * 0.2,
      height: height * 0.01,
      marginTop: height * 0.05,
  },
  ProvenExperts: {
    fontSize: width * 0.07,
      color: "rgba(7,8,33,1)",
      fontWeight: "bold",
      marginTop: height * 0.02,
      fontWeight: "700",
      textAlign: "center",
      marginBottom: height * 0.01,
  },

  WeInterviewEverySpec: {
    fontSize: height * 0.022,
      lineHeight: height * 0.03,
      marginTop: height * 0.03,
      paddingHorizontal: width * 0.05,
      textAlign: "center",
      color: "rgba(7,8,33,1)",
      marginBottom: height * 0.04,
  },

  ButtonsSolidNormal: {
    width: "100%",
    height: height * 0.07,
    borderRadius: width * 0.03,
    backgroundColor: "rgba(237,109,78,1)",
    justifyContent: "center",
    alignItems: "center",
    bottom: height * -0.01,
    borderRadius: 0.08 * width, // 24
  },

  Next: {
    fontSize: height * 0.022,
      lineHeight: height * 0.035,
      fontWeight: "600",
      color: "#FFFFFF",
  }
});