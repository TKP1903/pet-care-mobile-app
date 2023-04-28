import React, { useState } from "react"
import { StyleSheet, Image, Text, View, ImageBackground,Dimensions,TouchableOpacity } from "react-native"
import { TextInput } from "react-native-gesture-handler";
import { API_URL } from "../../key";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';



export default function Registration() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToRules, setAgreedToRules] = useState(false);
  const [receiveNewsletter, setReceiveNewsletter] = useState(false);
  // const [isChecked1, setIsChecked1] = useState(false);
  // const [isChecked2, setIsChecked2] = useState(false);
  


  const navigation = useNavigation();

  const handleSignUp = async () => {
    // console.log(isChecked1,isChecked2)
    try {
      const response = await axios.post(`${API_URL}/user/register`, {
        fullName: fullName,
        email: email,
        password: password,
        agreedToRules: agreedToRules,
        receiveNewsletter: receiveNewsletter

      }, );
      console.log(response.data);
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  const getAllUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/user/allusers`);
      console.log(response.data); // log the response data
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  
  



  return (
    <View style={styles.RegistrationScreen}>
      <Image
        style={styles.Rectangle}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/0266uqfk2ayi-944%3A27263?alt=media&token=bafe13c7-70c4-4dec-95ad-37e30f47fd47",
        }}
      />
       <Text style={styles.Registration}>Registration</Text>
      
  <View style={styles.Form}>
    <View style={styles.TextInputContainer1}>
    <Text style={styles.FullName}>Full Name</Text>
        <TextInput
      style={styles.input}
      placeholder="Enter your full name"
      placeholderTextColor="#7C7C7C"
      onChangeText={text => setFullName(text)}
/>
   
  </View>
        
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
      // secureTextEntry={true}
      onChangeText={text => setPassword(text)}
    />
      </View>
      {/* "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/0266uqfk2ayi-944%3A27277?alt=media&token=8c141148-5814-44a7-86ff-7a3b043487a3" */}
       
       <View style={styles.Group2101}>
       <TouchableOpacity style={styles.Agree} onPress={() => setAgreedToRules(!agreedToRules)}>
            <Image
              style={styles.CheckBoxActivated}
              source={{
                uri: agreedToRules
                  ? "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/0266uqfk2ayi-944%3A27277?alt=media&token=8c141148-5814-44a7-86ff-7a3b043487a3"
                  : "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/0266uqfk2ayi-944%3A27279?alt=media&token=73d834a4-f70f-4986-be66-ad7a3ea92c1f",
              }}
            />
          <Text style={styles.IAgreeWithTheRules}>
            {agreedToRules ? "I agree with the rules" : "Please agree with the rules"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Newsletter} onPress={() => setReceiveNewsletter(!receiveNewsletter)}>
          <Image
            style={styles.CheckBoxDisabled}
            source={{
              uri: receiveNewsletter
                ? "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/0266uqfk2ayi-944%3A27277?alt=media&token=8c141148-5814-44a7-86ff-7a3b043487a3"
                : "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/0266uqfk2ayi-944%3A27279?alt=media&token=73d834a4-f70f-4986-be66-ad7a3ea92c1f",
            }}
          />
          <Text style={styles.IDoNotWantToReceiveN}>
            {receiveNewsletter ? "I want to receive newsletter" : "I do not want to receive newsletter"}
          </Text>
        </TouchableOpacity>

        </View>

        <TouchableOpacity onPress={handleSignUp} style={{ width: "100%", height: height * 0.060 }}>
  <View style={styles.ButtonsSolidNormal}>
    <Text style={styles.SignUp}>Sign Up</Text>
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
            Already have an account?
          </Text>
          <Text style={styles.SignIn}>Sign In</Text>
        </View>
      </View>
     
     
     </View>
  )
}


const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({

    
  RegistrationScreen: {
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

      Registration: {
        position: "absolute",
        top: height * 0.1, // adjust position based on screen height
        left: 40,
        fontSize: 34,
        lineHeight: 34,
        fontFamily: "Encode Sans, sans-serif",
        fontWeight: "700",
        color:'white'
      },
    
    
//star
 Form: {
  width: width * 0.869,
  height: height * 0.56,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#F9F8FD",
  borderRadius: 15,
  padding: height * 0.02,
  marginTop: height * 0.92
 },

 TextInputContainer1: {
  width: "100%",
  marginBottom: height * 0.05,
  marginTop: height * 0.02,
 
},

  FullName: {
    color: "rgba(237,109,78,1)",
    // backgroundColor: "linear-gradient(180deg, rgba(249,248,253,1) 59%, rgba(255,255,255,1) 100%)",
    fontSize: width * 0.04,
    lineHeight: height * 0.025,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "600",
    letterSpacing: 0.13,
    marginBottom: height * 0.02,
  },


  TextInputContainer2: {
    width: "100%",
    marginBottom: height * 0.3,
    marginTop: height * -0.03,
  
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
    marginTop: height * -0.28,
 
    
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
  

  Group2101: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    marginTop: -207,
    marginLeft: 5,
    alignItems: "flex-start"
  },
  
  Agree: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginRight: 30,
    boxSizing: "border-box",
    height: height * 0.03,
  
    
  },

  IAgreeWithTheRules: {
    color: "rgba(7,8,33,1)",
    fontSize: height * 0.017,
    lineHeight: height * 0.03,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "400",
    letterSpacing: width * 0.002,
    marginLeft: width * 0.02,
    
    },
    
  
     CheckBoxActivated: {
      width: width * 0.05,
      height: "100%",
      
    },

  Newsletter: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginRight: 30,
    boxSizing: "border-box",
    height: height * 0.03,
    marginTop:10
  },
  CheckBoxDisabled: {
    width: width * 0.05,
    height: "100%",
  },

//st
IDoNotWantToReceiveN: {
  color: "rgba(7,8,33,1)",
  fontSize: height * 0.017,
  lineHeight: height * 0.03,
  fontFamily: "Encode Sans, sans-serif",
  fontWeight: "400",
  letterSpacing: width * 0.002,
   marginLeft: width * 0.02,
  
  },
  ButtonsSolidNormal: {
    position: "absolute", // changed to absolute
    width: "100%",
    height: height * 0.060,
    backgroundColor: "rgba(237,109,78,1)",
    justifyContent: "center",
    alignItems: "center",
    bottom: 320, // changed to 0
    borderRadius: 24, // changed to a fixed value
    
  },
  SignUp: {
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
    marginBottom: height * 0.78,
    padding: width * 0.05,
    width: "100%",
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
