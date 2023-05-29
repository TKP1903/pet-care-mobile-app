import React, { useState } from 'react';
import { View, Text, StyleSheet,Image,Dimensions,Button,Modal,TouchableOpacity } from "react-native";
import AddPetDetailsPopUp from "./AddPetDetailsPopUp";
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [showPopUp, setShowPopUp] = useState(true);
  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  return (
    <View style={styles.SearchMain}>
      <View style={styles.Group399}>
        
        <Text style={styles.WhatAreYouLookingFor}>
          What are you looking for, Maria?
        </Text>
      </View>
      <Image
        style={styles.Menu}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/f12n8d8kdn9-998%3A27239?alt=media&token=88dc6b34-be56-487b-816a-bfcc1499b7a8",
        }}
      />
      <View style={styles.Services}>
        <View style={styles.Group854}>
        <TouchableOpacity onPress={() => navigation.navigate('VeterinaryNearMe')}>
            <View style={styles.IconTypeOfServiceUiNormal}>
              <Image
                style={styles.IconVet}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/f12n8d8kdn9-I998%3A27242%3B238%3A5923?alt=media&token=cd7bdeec-1497-4575-80db-b59eb47a5235',
                }}
              />
              <Text style={styles.Veterinary}>Veterinary</Text>
            </View>
        </TouchableOpacity>

          <View style={styles.IconTypeOfServiceUiNormal1}>
                  <Image
                style={styles.IconDogSitting}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/f12n8d8kdn9-998%3A27251?alt=media&token=cacbd47d-4569-4ae9-b977-b0cdb66b41e0",
                }}
              />
            <Text style={styles.Adoption}>Dog Sitting</Text>
          </View>

        </View>
        <View style={styles.Group898}>
          <View style={styles.IconTypeOfServiceUiNormal2}>
            <Image
              style={styles.IconGrooming}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/f12n8d8kdn9-I998%3A27243%3B238%3A5923?alt=media&token=9219c6be-b0d7-442e-81d8-08b947c4960a",
              }}
            />
            <Text style={styles.Grooming}>Grooming</Text>
          </View>

          <View style={styles.IconTypeOfServiceUiNormal3}>
            <Image
              style={styles.IconDogWalking}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/f12n8d8kdn9-I998%3A27246%3B238%3A5923?alt=media&token=3db4fe89-7a04-4bce-9bd0-2be8cea349eb",
              }}
            />
            <Text style={styles.DogWalking}>Dog walking</Text>
          </View>
        </View>
        <View style={styles.Group161}>
          <View style={styles.IconTypeOfServiceUiNormal4}>
                  <Image
                style={styles.IconPharm}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/f12n8d8kdn9-998%3A27250?alt=media&token=80150298-5144-4ea5-ac3a-1f4dd993a98c",
                }}
              />
            <Text style={styles.Training}>Pharmacy</Text>
          </View>

          <View style={styles.IconTypeOfServiceUiNormal5}>
              <Image
                style={styles.IconAccesories}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/f12n8d8kdn9-998%3A27252?alt=media&token=f1d39b3f-4907-4734-9b21-b1d213839f96",
                }}
              />
            <Text style={styles.Other}>Accessories</Text>
          </View>
        </View>
      </View>

      <View style={styles.BottomNavigationNew}>
      <View style={styles.Group949}>
        <Image
          style={styles.Image1488}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/f2lf5re5q18-1015%3A44260?alt=media&token=d62577cd-c82c-466a-bb1a-1bef2566c413",
          }}
        />
        <Image
          style={styles.Image1486}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/f2lf5re5q18-1015%3A28932?alt=media&token=ecee94f9-3893-48d0-be88-0a0b524206f1",
          }}
        />
        <Image
          style={styles.Image40}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/f2lf5re5q18-341%3A13314?alt=media&token=95f6676b-5b2b-4bcd-b5ac-422466b2f17b",
          }}
        />
        <Image
          style={styles.Image41}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/f2lf5re5q18-341%3A13315?alt=media&token=a1cc1261-4935-43ce-bb88-1cb0b6201b1c",
          }}
        />
      </View>
      </View>

      <Modal visible={showPopUp} animationType="slide" transparent>
    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'flex-end' }}>
      <AddPetDetailsPopUp onClose={togglePopUp} />
    </View>
  </Modal>
     
    </View>
  )
}


const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  SearchMain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#F9F8FD"
  },
  Group399: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: height * 0.15, // set height to 15% of screen height
    boxSizing: "border-box",
    top: height * 0.2, // set top position to 20% of screen height
  },
  WhatAreYouLookingFor: {
    color: "rgba(7,8,33,1)",
    fontSize: width * 0.08, // set font size to 8% of screen width
    lineHeight: width * 0.08, // set line height to 8% of screen width
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "700",
  },
 
 
  Menu: {
    position: "absolute",
    top: height * 0.05, // set top position to 5% of screen height
    left: width * 0.85, // set left position to 50% of screen width
    width: width * 0.1, // set width to 10% of screen width
    height: width * 0.1, // set height to 10% of screen width
  },
  Services: {
    position: "absolute",
    top: 300,
    left: 37,
    display: "flex",
    flexDirection: "row",
    width: 330,
    height: 228,
    boxSizing: "border-box",
    justifyContent:"space-between",
    marginVertical: 10,
    marginHorizontal:-20
    
  },
  Group854: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    boxSizing: "border-box",
    justifyContent:"space-between",
    marginHorizontal: 15,
   
    
    },

  IconTypeOfServiceUiNormal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 3,
    paddingBottom: 0,
    borderRadius: 30,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  IconVet: {
    width: 40,
    height: 40,
  },
  Veterinary: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(7,8,33,1)",
    fontSize: 11,
    lineHeight: 50,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0.4,
  },
  IconTypeOfServiceUiNormal1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 3,
    paddingBottom: 0,
    borderRadius: 30,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Adoption: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(7,8,33,1)",
    fontSize: 11,
    lineHeight: 50,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0.4,
  },
  Group898: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    boxSizing: "border-box",
    marginHorizontal: 15,
    justifyContent:"space-between",
  },
  IconTypeOfServiceUiNormal2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 3,
    paddingBottom: 0,
    borderRadius: 30,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  IconGrooming: {
    width: 40,
    height: 40,
  },
  Grooming: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(7,8,33,1)",
    fontSize: 11,
    lineHeight: 45,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0.4
  },
  IconTypeOfServiceUiNormal3: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 3,
    paddingBottom: 0,
    borderRadius: 30,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  IconDogWalking: {
    width: 40,
    height: 40,
  },
  DogWalking: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(7,8,33,1)",
    fontSize: 11,
    lineHeight: 45,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0.4,
  },
  Group161: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    boxSizing: "border-box",
    justifyContent:"space-between",

  },
  IconTypeOfServiceUiNormal4: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 3,
    paddingBottom: 0,
    borderRadius: 30,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Training: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(7,8,33,1)",
    fontSize: 11,
    lineHeight: 45,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0.4,
  },
  IconTypeOfServiceUiNormal5: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 3,
    paddingBottom: 0,
    borderRadius: 30,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Other: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(7,8,33,1)",
    fontSize: 11,
    lineHeight: 45,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0.4,
  },

  Image391: {
    position: "absolute",
    top: 738,
    left: 40,
    width: 30,
    height: 25.56,
  },
  IconPharm: {
    width: 40,
    height: 40,
  },
  IconDogSitting: {
    width: 40,
    height: 40,
  },
  IconAccesories: {
    width: 40,
    height: 40,
  },
  BottomNavigationNew: {
    position: "absolute",
    bottom: 0, // set to bottom of screen
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between", // change to space-between for spacing
    alignItems: "center",
    width: "100%",
    height: height * 0.1, // set to 10% of screen height
    paddingLeft: width * 0.12, // set to 10% of screen width
    paddingRight: width * 0.1, // set to 10% of screen width
    paddingTop: height * 0.01, // set to 1% of screen height
    paddingBottom: height * 0.01, // set to 1% of screen height
    boxSizing: "border-box",
    backgroundColor: "#fff", // add background color
  },
  
  Group949: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    boxSizing: "border-box",
    
  },
  
  Image1488: {
    width: 30, // increase width to 30
    height: 30, // increase height to 30
    marginRight: 50, // decrease margin right to 20
  },
  
  Image1486: {
    width: 40, // increase width to 40
    height: 30, // keep height the same
    marginRight: 50, // decrease margin right to 20
  },
  
  Image40: {
    width: 25, // increase width to 25
    height: 25, // increase height to 25
    marginRight: 50, // decrease margin right to 20
  },
  
  Image41: {
    width: 50, // increase width to 50
    height: "100%", // set height to 100%
    marginRight: 50, // decrease margin right to 20
  },
 
})

export default Home;
