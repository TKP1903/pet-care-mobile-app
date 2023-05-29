import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, ImageBackground,TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';

export default function AddPetDetailsPopUp({ onClose }) {
  
  const navigation = useNavigation();
  return (
    <View style={styles.PopUp}>
      <View style={styles.Group575}>
        <View style={styles.NavBar44Pt}>
        <TouchableOpacity onPress={onClose}>
            <Image
              style={styles.CloseIcon}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/11ph9rsiprx-I335%3A187%3B326%3A3020?alt=media&token=c64c990c-6b49-4ef4-9a82-39abea8326a6",
              }}
            />
          </TouchableOpacity>
      

          <Text style={styles.AddPetDetail}>Add pet detail</Text>
        </View>

        <View style={styles.Text}>
          <View style={styles.Group597}>
            <Image
              style={styles.Ellipse}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/11ph9rsiprx-319%3A42?alt=media&token=17ac17fb-11b2-483d-a4ec-aece6848b59f",
              }}
            />
            <Image
              style={styles.Ellipse1}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/11ph9rsiprx-238%3A10220?alt=media&token=3fd0e9d4-4d59-4f27-a01e-795187c5fa05",
              }}
            />
            <Image
              style={styles.Ellipse2}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/11ph9rsiprx-319%3A40?alt=media&token=7d5e20d5-fe07-4313-ac42-00420a791050",
              }}
            />
          </View>
          <View style={styles.Group1011}>
            <Text style={styles.FasterCheckInAtAppoi}>
              Faster check-in at appointment.
            </Text>
            <Text style={styles.ScheduleOfVaccinatio}>
              Schedule of vaccination, Spa appointments, inspections etc.
            </Text>
            <Text style={styles.ReminderOfTheUpcomin}>
              Reminder of the upcoming events with your pet.
            </Text>
          </View>
        </View>
        
        <View style={styles.Group454}>
        <TouchableOpacity
      onPress={() => navigation.navigate("AddPetDetailScreen")}
      style={styles.ButtonsSolidNormal}
    >
      <View>
        <Text style={styles.Add}>+ Add</Text>
      </View>
    </TouchableOpacity>
          <View style={styles.ButtonsOutlineNormal}>
            <Text style={styles.NoLater}>No, later</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  PopUp: {
    
    width: 400,
    height: 389,
    padding: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
  },
  Group575: {
    display: "flex",
    position:'absolute',
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    boxSizing: "border-box",
    marginTop:29
   
    
  },
  NavBar44Pt: {
    display: "flex",
    position:'absolute',
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    width: "100%",
    paddingLeft: 8,
    paddingRight: 125,
    paddingTop: 9,
    paddingBottom: 12.52,
    boxSizing: "border-box",
  },
  CloseIcon: {
    width: 24,
    height: "100%",
    left:0
  },
  AddPetDetail: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(7,8,33,1)",
    fontSize: 18,
    lineHeight: 20,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0.36,
    left:85
  },
  Text: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height:"50%",
    boxSizing: "border-box",
    marginTop: 40,
    marginLeft:50,
   
   
  },
  Group597: {
    display: "flex",
    // flexDirection: "column",
    height: "85%",
    boxSizing: "border-box",
    justifyContent: "space-between",
    marginTop: 20,
  
   
   
  },
  Ellipse: {
    height: 10,
    width:10,
    // borderRadius: 5,
    // marginTop: 20,
    
  },
  Ellipse1: {
 
    height: 10,
    width:10,
    top:-12
   
  },
  Ellipse2: {
   
    height: 10,
    width:10,
    top:-10
  
    },
  Group1011: {
    display: "flex",
    flexDirection: "column",
    height: "70%",
    boxSizing: "border-box",
    justifyContent: "space-between",
    width:"95%"
    
    

  },
  FasterCheckInAtAppoi: {
    color: "rgba(7,8,33,1)",
    fontSize: 16,
    lineHeight: 50,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "400",
    letterSpacing: 0.16,
    marginLeft:10
    
  },
  ScheduleOfVaccinatio: {
    color: "rgba(7,8,33,1)",
    fontSize: 16,
    lineHeight: 23,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "400",
    letterSpacing: 0.16,
    marginTop:20,
    marginLeft:10
  },
  ReminderOfTheUpcomin: {
    color: "rgba(7,8,33,1)",
    fontSize: 16,
    lineHeight: 50,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "400",
    letterSpacing: 0.16,
    marginTop:10,
    marginLeft:10
  },
  Group454: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    boxSizing: "border-box",
    bottom:-60,
    left:-5,
    justifyContent:"space-evenly"
  },
  ButtonsSolidNormal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    paddingLeft: 53,
    paddingRight: 52,
    paddingTop: 14,
    paddingBottom: 17.59,
    borderRadius: 24,
    boxSizing: "border-box",
    backgroundColor: "rgba(237,109,78,1)",
  },
  Add: {
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
  ButtonsOutlineNormal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    paddingLeft: 42,
    paddingRight: 42,
    paddingTop: 14,
    paddingBottom: 17.59,
    borderRadius: 25,
    boxSizing: "border-box",
    backgroundColor: "rgba(240,240,248,1)",
  },
  NoLater: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(7,8,33,1)",
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "700",
    textAlign: "center",
  },
})
