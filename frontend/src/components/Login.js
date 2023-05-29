import React, { useState } from "react"
import { StyleSheet, Image, Text, View, ImageBackground,Dimensions,TouchableOpacity } from "react-native"
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { ToastAndroid } from 'react-native';
import { API_URL } from "../../key";
import { Alert } from 'react-native';


export default function Login() {
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = async () => {
        try {
          const response = await axios.post(`${API_URL}/user/login`, {
            email:email,
            password:password,
          });
      
          console.log('User logged in:', response.data);
          // Store the token in local storage
        //   localStorage.setItem('token', response.data.token);
          ToastAndroid.show('Logged in successfully', ToastAndroid.SHORT);
          navigation.navigate('Home');
          
        } catch (error) {
          console.log('Error logging in:', error);
          Alert.alert('Error', 'Invalid email or password');
          
        }
      };

  return (
    <View style={styles.Login}>
      <Image
          style={styles.Rectangle}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/0qkrvpjop6m9-1024%3A27228?alt=media&token=0b220a31-af36-4bba-8f68-4f99c736b564",
          }}
        />
        <Text style={styles.SignInText}>Sign In </Text>
   

      <View style={styles.Form1}>
            <View style={styles.TextInputContainer2}>
                <Text style={styles.Email}>Email</Text>
                    <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#7C7C7C"
                onChangeText={text => setEmail(text)}
                />
        </View>
                
     <View style={styles.TextInputContainer3}>
        <Text style={styles.Password}>Password</Text>
          <TextInput
      style={styles.input}
      placeholder="Enter your password"
      placeholderTextColor="#7C7C7C"
      secureTextEntry={true}
      onChangeText={text => setPassword(text)}
    />
      </View>
      <TouchableOpacity onPress={handleSignIn} style={{ width: "100%", height: height * 0.060 }}>
  <View style={styles.ButtonsSolidNormal}>
    <Text style={styles.SignInButton}>Sign In</Text>
  </View>
</TouchableOpacity>
    </View>

    <View style={styles.Group378}>
         <View style={styles.OrContinueWithIcons}>
           <View style={styles.Group157}>
           <View style={styles.Line} />
             <Text style={styles.OrContinueWith}>or continue with</Text>
            <View style={styles.Line} />
            </View>
          <Image
            style={styles.Icons}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/0266uqfk2ayi-944%3A27367?alt=media&token=85fa94e4-97fe-4d04-94d8-58346b59140d",
            }}
          />
        </View>
        <View style={styles.SignIn1}>
            <Text style={styles.AlreadyHaveAnAccount}>
              Don't have account yet? 
            </Text>
            <TouchableOpacity  onPress={() => navigation.navigate('Registration')}>
              <Text style={styles.SignIn}>Registration</Text>
            </TouchableOpacity>
          </View>
      </View>


</View>
  )
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  Login: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#F9F8FD"
  },


  Rectangle: {
    position: 'absolute',
    width: '100%',
    height: height * 0.416, // Adjust the height proportionally
    top: 0, // Move up by 10% of the screen height
    left: 0, // Move left by 20 pixels
  },
 
 
  SignInText: {
    position: "absolute",
    top: height * 0.1, // adjust position based on screen height
    left: 40,
    fontSize: 34,
    lineHeight: 34,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "700",
    color:'white'
  },

  Form1: {
    width: width * 0.869,
    height: height * 0.40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: height * 0.02,
    marginTop: height * 0.2
   },

   TextInputContainer2: {
    width: "100%",
    marginBottom: height * 0.05,
    marginTop: height * 0.02,
  
  },
  
   Email: {
    color: "rgba(237,109,78,1)",
    fontSize: width * 0.035,
    lineHeight: height * 0.025,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "600",
    letterSpacing: 0.13,
    marginBottom: height * 0.02,
  },
  input: {
    height: height * 0.05,
    width: "100%",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 5,
    paddingLeft: width * 0.03,
    fontSize: width * 0.035,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "400",
    color: "#7C7C7C",
    marginTop: height * -0.01,
   
  },
  



  TextInputContainer3: {
    width: "100%",
    marginBottom: height * 0.3,
    marginTop: height * -0.03,
 
    
  },
  
  Password: {
   
    marginBottom: height * 0.025,
    color: "rgba(237,109,78,1)",
    fontSize: width * 0.035,
    lineHeight: height * 0.025,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "600",
    letterSpacing: 0.13,
    
  },
  ButtonsSolidNormal: {
    position: "absolute", // changed to absolute
    width: "100%",
    height: height * 0.060,
    backgroundColor: "rgba(237,109,78,1)",
    justifyContent: "center",
    alignItems: "center",
    bottom: 200, // changed to 0
    borderRadius: 24, // changed to a fixed value
    
  },
  SignInButton:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "700",
    textAlign: "center",
  },

  Group378: {
    flexGrow: 1,
    alignItems: "center",
    marginBottom: height * 0.05,
    padding: width * 0.05,
    width: "100%",
    marginTop: height * 0.1,
  
  
  },
  
  OrContinueWithIcons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "80%",
    paddingLeft: width * 0.03, // Adjust the padding proportionally
    boxSizing: "border-box",
    
    
  },

    Group157: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    boxSizing: "border-box",
    marginRight: 45, // Add a negative margin-right of 10 pixe
    },
    OrContinueWith: {
    color: "#070821",
    fontSize: width * 0.0427, // Adjust the font size proportionally
    lineHeight: height * 0.0295, // Adjust the line height proportionally
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "400",
    letterSpacing: 0.16,
    },
    Line: {
    width: width * 0.2453, // Adjust the width proportionally
    height: 1,
    borderWidth: 1,
    borderColor: "#F0F0F8",
    },
    Icons: {
      width: width * 0.399, // reduce width by 60%
      height: height * 0.07, // reduce height by 37%
      marginRight: width * 0.1,
      marginTop: height * 0.01, // add top margin of 1%
    },
    SignIn1: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
   
    boxSizing: "border-box",
    marginTop: 20,
    marginLeft: 79,
    },
    AlreadyHaveAnAccount: {
    color: "#070821",
    fontSize: width * 0.0427, // Adjust the font size proportionally
    lineHeight: height * 0.0295, // Adjust the line height proportionally
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "400",
    letterSpacing: 0.16,
    },
    SignIn: {
    color: "#ED6D4E",
    fontSize: width * 0.0427, // Adjust the font size proportionally
    lineHeight: height * 0.0295, // Adjust the line height proportionally
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "700",
    marginLeft: 4,
    },
  
})
