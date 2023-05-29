import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, ImageBackground,Dimensions } from "react-native"
import MapView, { Marker } from 'react-native-maps';

export default function VeterinaryNearMe() {
  // const [vetClinics, setVetClinics] = useState([]);

  // useEffect(() => {
  //   fetchVetClinics();
  // }, []);

  // const fetchVetClinics = async () => {
  //   try {
  //     const response = await fetch('API_ENDPOINT');
  //     const data = await response.json();

  //     // Set the vetClinics state with the actual data received from the API
  //     setVetClinics(data.clinics);
  //   } catch (error) {
  //     console.error('Error fetching vet clinics:', error);
  //   }
  // };

  //  // Define the initial region for the map view
  //  const initialRegion = {
  //   latitude: 37.78825,
  //   longitude: -122.4324,
  //   latitudeDelta: 0.0922,
  //   longitudeDelta: 0.0421,
  // };
  
  return (
   
        
      <View style={styles.Group0106}>
        <View style={styles.Top_navigation}>
          <View style={styles.Group7106}>
            <View style={styles.SegmentedControls2Segments1}>
              <View style={styles.Specialists1}>
                <Text style={styles.Specialists}>Specialists</Text>
              </View>
            </View>
            <View style={styles.FinderInactive}>
              <View style={styles.Find}>
                <Image
                  style={styles.Vector}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/mxai16l8qh-I1146%3A29235%3B356%3A173%3B356%3A81?alt=media&token=1f579ef1-2a89-4811-9b3b-bc5b7cf468b5",
                  }}
                />
                <Text style={styles.Veterinary}> Veterinary</Text>
                <Text style={styles.NearMe}>near me</Text>
              </View>
            </View>
            <View style={styles.Fliters}>
              <View style={styles.ButtonFilterWithIconActivated}>
                <Image
                  style={styles.Calendar}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/mxai16l8qh-I1146%3A29235%3B356%3A182%3B192%3A2713?alt=media&token=fdd4c46f-4f5d-4ce0-8ee6-891900803330",
                  }}
                />
                <Text style={styles._9Sep}>9 Sep</Text>
              </View>
              <View style={styles.ButtonFilterWithIconInactive}>
                <Image
                  style={styles.Xmlid499}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/mxai16l8qh-I1146%3A29235%3B356%3A434%3B356%3A404?alt=media&token=2e78cbaf-e53e-4881-a11d-3e10c556f9be",
                  }}
                />
                <Text style={styles.Filter}>Filter</Text>
              </View>
            </View>
          </View>
          <Image
            style={styles.NavBar88Pt}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/mxai16l8qh-I1146%3A29235%3B341%3A12796?alt=media&token=dac96923-c104-43f5-b92e-2e9d96c49370",
            }}
          />
        </View>

        {/* <MapView style={styles.map} initialRegion={initialRegion}>
        Render markers for veterinary clinics
        {vetClinics.map((clinic, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: clinic.latitude, longitude: clinic.longitude }}
            title={clinic.name}
            description={clinic.address}
          />
        ))}
      </MapView> */}
      {/* <View style={styles.BottomNavigationNew}>
        <View style={styles.Group949}>
          {vetClinics.map((clinic) => (
            <View key={clinic.id}>
              <Text>{clinic.name}</Text>
              <Text>{clinic.specialty}</Text>
              <Text>{clinic.reviews} Reviews</Text>
              <Text>{clinic.experience} years of experience</Text>
              <Text>{clinic.distance} km</Text>
              <Text>{clinic.price} INR</Text>
            </View>
          ))}
        </View>
      </View> */}


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
      </View>
    
  )
}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  SearchResultsNearMe: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
    // width: '100%',
    // height: '100%',
    // borderRadius: 20,
    // boxSizing: "border-box",
    // backgroundColor: "rgba(248,247,251,1)",
  },
  Group0106: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  Top_navigation: {
    position: "relative",
    width: "100%",
    height: 196,
    borderBottomLeftRadius: 34,
    borderBottomRightRadius: 34,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Group7106: {
    position: "absolute",
    top: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 335,
    height: 130,
    boxSizing: "border-box",
  },
  SegmentedControls2Segments1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "60%",
    height:"25%",
    paddingRight: 98,
    borderWidth: 0.5,
    borderColor: "rgba(228,227,243,1)",
    borderRadius: 26,
    boxSizing: "border-box",
    left:20

  },
  Specialists1: {
    width: 100,
    height: "100%",
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 5,
    paddingBottom: 9,
    borderRadius: 20,
    boxSizing: "border-box",
    backgroundColor: "rgba(237,109,78,1)",
   
 
  },
  Specialists: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "600",
    textAlign: "center",
  },
  FinderInactive: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    height:"30%",
    paddingLeft: 12,
    paddingRight: 71,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    boxSizing: "border-box",
    backgroundColor: "#F5F5F5",
    top:10,
    left:29
  },
  Find: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    paddingRight: 100,
    paddingBottom: 1,
    boxSizing: "border-box",
  },
  Vector: {
    width: 16,
    height: "100%",
  },
  Veterinary: {
    color: "rgba(7,8,33,1)",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "600",
  },
  NearMe: {
    color: "rgba(187,195,206,1)",
    fontSize: 14,
    lineHeight: 200,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "400",
    letterSpacing: 0.3,
  },
  Fliters: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    boxSizing: "border-box",
    top:30,
    justifyContent:"space-between",
    left:25
  },
  ButtonFilterWithIconActivated: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    paddingLeft: 8,
    paddingRight: 14,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 6,
    boxSizing: "border-box",
    backgroundColor: "rgba(69,82,203,1)",
  },
  Calendar: {
    width: 24,
    height: "100%",
  },
  _9Sep: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "600",
  },
  ButtonFilterWithIconInactive: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    paddingLeft: 12,
    paddingRight: 16,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 6,
    boxSizing: "border-box",
    backgroundColor: "rgba(240,240,248,1)",
  },
  Xmlid499: {
    width: 16,
    height: "100%",
  },
  Filter: {
    color: "rgba(7,8,33,1)",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "600",
  },
  //top
  NavBar88Pt: {
    position: "absolute",
    width: "100%",
    height: 88,
    
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
