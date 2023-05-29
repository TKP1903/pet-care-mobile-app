import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground,Dimensions,TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';


export default function WelcomeScreen3() {
    const navigation = useNavigation();
    const handleNextPress = () => {
      navigation.navigate("Registration"); // replace "NextScreen" with the name of your next screen component
    }
  
  return (
    <View style={styles.WelcomeScreen3}>
      <View style={styles.NavBar88Pt}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.SignIn}>Sign In</Text>
            </TouchableOpacity>
      </View>
      <View style={styles.Group621}>
        
          <Image
            style={styles.MedicalHistoryPills}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/lfldj0vp09m-608%3A3389?alt=media&token=232566c0-0869-4d79-bc92-95b0af6a171f",
            }}
          />
          
            <Image
              style={styles.Slider3}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/lfldj0vp09m-529%3A11556?alt=media&token=1f569e9c-4240-40f4-8aad-0349677d78f3",
              }}
            />
            <Text style={styles.ReliableReviews}>Reliable reviews</Text>
         
       
        <Text style={styles.AReviewCanBeLeftOnly}>
          A review can be left only by a user who used the service.
        </Text>
        
        <TouchableOpacity style={{width: '100%', height: height * 0.07}} onPress={handleNextPress}>
        <View style={styles.ButtonsSolidNormal}>
          <Text style={styles.GetStarted}>Get started</Text>
         </View>
         </TouchableOpacity> 

      </View>
      
    
    </View>
  )
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  WelcomeScreen3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#F9F8FD"
  },
  Group621: {
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
 
  MedicalHistoryPills: {
    position: "absolute",
    top: height * -0.01,
    left: width * 0.24,
     width: width * 0.6,
     height: height * 0.35,
  },
 
  Slider3: {
    width: "100%",
    width: width * 0.2,
    height: height * 0.01,
    marginTop: height * 0.05,
  },
  ReliableReviews: {
    fontSize: width * 0.07,
    color: "rgba(7,8,33,1)",
    fontWeight: "bold",
    marginTop: height * 0.02,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: height * 0.01,
  },
  AReviewCanBeLeftOnly: {
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
  GetStarted: {
    fontSize: height * 0.022,
    lineHeight: height * 0.035,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  
 
 
})
