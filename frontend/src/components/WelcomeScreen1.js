import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground,Dimensions,TouchableOpacity,navigation } from "react-native"
import { useNavigation } from '@react-navigation/native';


export default function WelcomeScreen1() {
  const navigation = useNavigation();
  const handleNextPress = () => {
    navigation.navigate("WelcomeScreen2"); // replace "NextScreen" with the name of your next screen component
  }
  return (
    <View style={styles.WelcomeScreen1}>
      <View style={styles.NavBar88Pt}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.SignIn}>Sign In</Text>
            </TouchableOpacity>
      </View>
      <View style={styles.Group656}>
        
        <Image
        style={styles.CatLyingOnBooks}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/obieuwznha-607%3A3387?alt=media&token=0a8690e6-5401-4ff8-960e-920c5c24686b",
        }}
      />
        <Image
          style={styles.Slider1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/obieuwznha-238%3A9026?alt=media&token=4b75cfe9-31c9-46a2-9f49-c20950ce16da",
          }}
        />
        <Text style={styles.WelcomeToPetCare}>Welcome to Pet Care</Text>
        <Text style={styles.AllTypesOfServicesFo}>
          All types of services for your pet in one place, instantly searchable.
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



const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  WelcomeScreen1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#F9F8FD"
  },
  
    Group656: {
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
    CatLyingOnBooks: {
      position: "absolute",
      top: height * 0.03,
      left: width * 0.29,
      width: width * 0.6,
      height: height * 0.31,
    },
    
    Slider1: {
      width: "100%",
      width: width * 0.2,
      height: height * 0.01,
      marginTop: height * 0.05,
    },
    WelcomeToPetCare: {
      fontSize: width * 0.07,
      color: "rgba(7,8,33,1)",
      fontWeight: "bold",
      marginTop: height * 0.02,
      fontWeight: "700",
      textAlign: "center",
      marginBottom: height * 0.01,
      
    },
    AllTypesOfServicesFo: {
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
    },
});
