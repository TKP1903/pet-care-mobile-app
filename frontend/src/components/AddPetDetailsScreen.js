import React, { useState } from "react"
import {View, Text, TouchableOpacity, StyleSheet, Image,ScrollView,TextInput} from 'react-native';
import { CalendarPicker } from 'react-native-calendars';
import axios from 'axios';
import { API_URL } from "../../key";
import { ToastAndroid } from 'react-native';


export default function AddPetDetailScreen ()  {

  const [petName, setPetName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [size, setSize] = useState('');
  const [isMaleActive, setIsMaleActive] = useState(true); // initialize the state to true for Male
  const[date,setDate] = useState('')
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [neutered, setNeutered] = useState(true);
  const [vaccinated, setVaccinated] = useState(false);
  const [friendlywithdogs, setFriendlyDogs] = useState(true);
  const [friendlywithcats, setFriendlyCats] = useState(true);
  const [friendlywithkidsbelow, setFriendlyKidsBelow] = useState(true);
  const [friendlywithkidsafter, setFriendlyKidsAfter] = useState(true);
  const [microchipped, setMicrochipped] = useState(true);
  const [pubered, setPubered] = useState(true);
  const[petNurseryNameOptional,setPetNurseryNameOptional]= useState('')
  
  
  const handleMalePress = () => {
    setIsMaleActive(true); // set the state to true for Male
  };

  const handleFemalePress = () => {
    setIsMaleActive(false); // set the state to false for Male
  };

  const showCalendar = () => {
    setCalendarVisible(true);
  };

  const hideCalendar = () => {
    setCalendarVisible(false);
  };

  const handleDateChange = (day) => {
    setDate(day.dateString);
    hideCalendar();
  };

  const handleNeuteredToggle = () => {
    setNeutered(!neutered);
   
  };

  const handleVaccinatedToggle = () => {
    setVaccinated(!vaccinated);
  };
  const handleFriendlyWithDogToggle = () => {
    setFriendlyDogs(!friendlywithdogs);
  };
  const handleFriendlyWithCatsToggle = () => {
    setFriendlyCats(!friendlywithcats);
  };
  const handleFriendlyWithKidsBelowToggle = () => {
    setFriendlyKidsBelow(!friendlywithkidsbelow);
  };
  const handleFriendlyWithKidsAfterToggle = () => {
    setFriendlyKidsAfter(!friendlywithkidsafter);
  };
  const handleMicrochippedToggle = () => {
    setMicrochipped(!microchipped);
  };
  const handlePuberedToggle = () => {
    setPubered(!pubered);
  };

  const addPetDetails = async () => {
    const petData = {
    // user_id: userId,
    pet_name: petName,
    species: species,
    breed: breed,
    size: size,
    gender: isMaleActive ? 'Male' : 'Female',
    birthdate: date,
    neutered: neutered,
    vaccinated: vaccinated,
    friendly_with_dogs: friendlywithdogs,
    friendly_with_cats: friendlywithcats,
    friendly_with_kids_under_10: friendlywithkidsbelow,
    friendly_with_kids_over_10: friendlywithkidsafter,
    microchipped: microchipped,
    purebred: pubered,
    nursery_name: petNurseryNameOptional
    };
  
    try {
      const response = await axios.post(`${API_URL}/user/addpetdetails`, petData);
  
      console.log(response.data);
      ToastAndroid.show('Pet details added successfully', ToastAndroid.SHORT);
      // Perform any additional actions after adding pet details
  
    } catch (error) {
      console.error(error);
      ToastAndroid.show('Failed to add pet details', ToastAndroid.SHORT);
    }
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Add Pet Details</Text>
      <View style={styles.photoContainer}>
        <Image
          style={styles.ComponentPhotoCircle}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7eo4jc9o2db-1058%3A27968?alt=media&token=e098e3ff-4200-4468-8e8d-f07ed8506448',
          }}
        />
        <Image
          style={styles.Add_icon}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/orgq9jebji-1058%3A27969?alt=media&token=70d0069b-1ba2-4c12-8b8b-58ae82529cad',
          }}
        />
      </View>
      <View style={styles.Frame4574}>
     
        <Text style={styles.GeneralInformation}>General information</Text>
        <View style={styles.InputActivatedSuCess}>
          <Text style={styles.PetSName}>Pet’s name</Text>
                    <TextInput
              style={styles.TextInputStyle}
              placeholder="Enter pet's name"
              onChangeText={text =>  setPetName(text)}
            />
        </View>
        <View style={styles.InputDropdownActiveted}>
       
            <Text style={styles.SpeciesOfYourPet}>Species of your pet </Text>
            <TextInput 
                    style={styles.TextInputStyle} 
                    placeholder="Enter your pet species"
                    onChangeText={text =>  setSpecies(text)}
             />
          <Image
            style={styles.Arrow}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ytwi5t902vm-I1069%3A27396%3B326%3A2843?alt=media&token=62103541-00a8-4aff-8025-ea99e4c044a5",
            }}
          />
        </View>
        <View style={styles.InputDropdownActiveted1}>
          
            <Text style={styles.Breed}>Breed</Text>
            <TextInput 
                    style={styles.TextInputStyle} 
                    placeholder="Enter your Breed"
                    onChangeText={text =>  setBreed(text)}
             />
         
          <Image
            style={styles.Arrow1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ytwi5t902vm-I1069%3A27395%3B326%3A2843?alt=media&token=6b42788e-9276-4be3-8416-3c5f180c719c",
            }}
          />
        </View>
        <View style={styles.InputDropdownInactive}>
          <View style={styles.Group946}>
            <Text style={styles.SizeOptional}>Size (optional)</Text>
            <TextInput 
                    style={styles.TextInputStyle} 
                    placeholder="Enter the Size"
                    onChangeText={text =>  setSize(text)}
             />
          </View>
          <Image
            style={styles.Arrow2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ytwi5t902vm-I1069%3A27394%3B326%3A2554?alt=media&token=85f8b063-c824-426e-810e-dcbdd49d067a",
            }}
          />
        </View>
        <View style={styles.Gender1}>
      <Text style={styles.Gender}>Gender </Text>
      <View style={styles.Group388}>
        <TouchableOpacity
          onPress={handleMalePress}
          style={[
            // styles.ButtonMale,
            isMaleActive ? styles.ButtonMaleActive : styles.ButtonMaleInactive,
          ]}
        >
          <Image
            style={styles.MaleIcon}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ytwi5t902vm-I1069%3A27393%3B356%3A478?alt=media&token=958ffcb4-f546-4b98-936f-87edaab2a0e0",
            }}
          />
          <Text style={isMaleActive ? styles.MaleActive : styles.MaleInactive}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleFemalePress}
          style={[
            // styles.ButtonFemale,
            isMaleActive ? styles.ButtonFemaleInactive : styles.ButtonFemaleActive,
          ]}
        >
          <Image
            style={styles.FemaleIcon}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ytwi5t902vm-I1069%3A27392%3B356%3A483?alt=media&token=468666b5-0e79-425c-9361-bea244f2bc67",
            }}
          />
          <Text style={isMaleActive ? styles.FemaleInactive : styles.FemaleActive}>Female</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.InputDropdownActiveted2}>
  <View style={styles.Group169}>
    <Text style={styles.DateOfBirth}>Date of birth</Text>
    {/* <TouchableOpacity onPress={showCalendar}> */}
      <TextInput
        style={styles.TextInputStyle}
        placeholder="Enter the Date"
        value={date}
        editable={false}
      />
    {/* </TouchableOpacity> */}
  </View>
  <TouchableOpacity onPress={showCalendar}>
    <Image
      style={styles.Arrow3}
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ytwi5t902vm-I1069%3A27389%3B326%3A2843?alt=media&token=0b672617-e872-4e07-9ca8-a5a6e579a15b",
      }}
    />
  </TouchableOpacity>
  {/* {calendarVisible && (
    <CalendarPicker
      onDateChange={handleDateChange}
      hideExtraDays
      selectedDayColor="#FFC107"
      todayBackgroundColor="#f2e6ff"
      selectedStartDate={date}
    />
  )} */}
</View>


    </View>

    <View style={styles.Frame4575}>
   
        <Text style={styles.AdditonalInformationText}>
          Additonal Information
        </Text>

        <View style={styles.ControllerLabelSwich}>

        <View style={styles.Group358}>
        <Text style={styles.Neutered}>Neutered</Text>
       
        <TouchableOpacity onPress={handleNeuteredToggle}>
          <Image
            style={styles.SwitchOn}
            source={{
              uri: neutered
                ? "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jh8zl2s87l9-I1086%3A27413%3B161%3A4364?alt=media&token=5cef1a87-28c0-4445-b6b5-11698268bbc3"
                : "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1yih114lsj7h-1087%3A27609?alt=media&token=eda4440a-e6a4-4e7c-8b94-fde5e8bbe788",
            }}
          />
        </TouchableOpacity>
        
      </View>

      <View style={styles.Group1610}>
  <Text style={styles.Vaccinated}>Vaccinated</Text>
    <TouchableOpacity onPress={handleVaccinatedToggle}>
      <Image
        style={styles.SwitchOn1}
        source={{
          uri: vaccinated
            ? "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jh8zl2s87l9-I1086%3A27413%3B161%3A4364?alt=media&token=5cef1a87-28c0-4445-b6b5-11698268bbc3"
            : "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1yih114lsj7h-1087%3A27609?alt=media&token=eda4440a-e6a4-4e7c-8b94-fde5e8bbe788",
        }}
      />
    </TouchableOpacity>
  
</View>




      <View style={styles.Group379}>
        <Text style={styles.FriendlyWithDogs}>Friendly with dogs</Text>
        <TouchableOpacity onPress={handleFriendlyWithDogToggle}>
          <Image
            style={styles.SwitchOn2}
            source={{
              uri: friendlywithdogs
                ? "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jh8zl2s87l9-I1086%3A27413%3B161%3A4364?alt=media&token=5cef1a87-28c0-4445-b6b5-11698268bbc3"
                : "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1yih114lsj7h-1087%3A27609?alt=media&token=eda4440a-e6a4-4e7c-8b94-fde5e8bbe788",
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.Group3210}>
        <Text style={styles.FriendlyWithCats}>Friendly with cats</Text>
        <TouchableOpacity onPress={handleFriendlyWithCatsToggle}>
        <Image
            style={styles.SwitchOff}
            source={{
              uri: friendlywithcats
                ? "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jh8zl2s87l9-I1086%3A27413%3B161%3A4364?alt=media&token=5cef1a87-28c0-4445-b6b5-11698268bbc3"
                : "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1yih114lsj7h-1087%3A27609?alt=media&token=eda4440a-e6a4-4e7c-8b94-fde5e8bbe788",
            }}
          />
           </TouchableOpacity>
       </View>

      <View style={styles.Group381}>
        <Text style={styles.Friendlywithkids}>Friendly with kids below 10 year</Text>
        <TouchableOpacity onPress={handleFriendlyWithKidsBelowToggle}>
        <Image
            style={styles.SwitchOn3}
            source={{
              uri: friendlywithkidsbelow
                ? "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jh8zl2s87l9-I1086%3A27413%3B161%3A4364?alt=media&token=5cef1a87-28c0-4445-b6b5-11698268bbc3"
                : "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1yih114lsj7h-1087%3A27609?alt=media&token=eda4440a-e6a4-4e7c-8b94-fde5e8bbe788",
            }}
          />
           </TouchableOpacity>
      </View>

      <View style={styles.Group38}>
        <Text style={styles.FriendlywithkidsAfter}>Friendly with kids after 10 year</Text>
        <TouchableOpacity onPress={handleFriendlyWithKidsAfterToggle}>
        <Image
            style={styles.SwitchOn4}
            source={{
              uri: friendlywithkidsafter
                ? "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jh8zl2s87l9-I1086%3A27413%3B161%3A4364?alt=media&token=5cef1a87-28c0-4445-b6b5-11698268bbc3"
                : "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1yih114lsj7h-1087%3A27609?alt=media&token=eda4440a-e6a4-4e7c-8b94-fde5e8bbe788",
            }}
          />
           </TouchableOpacity>
      </View>

      <View style={styles.Group311}>
        <Text style={styles.Microchipped}>Microchipped</Text>
        <TouchableOpacity onPress={handleMicrochippedToggle}>
        <Image
            style={styles.SwitchOn5}
            source={{
              uri: microchipped
                ? "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jh8zl2s87l9-I1086%3A27413%3B161%3A4364?alt=media&token=5cef1a87-28c0-4445-b6b5-11698268bbc3"
                : "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1yih114lsj7h-1087%3A27609?alt=media&token=eda4440a-e6a4-4e7c-8b94-fde5e8bbe788",
            }}
          />
           </TouchableOpacity>
      </View>

      
      <View style={styles.Group39}>
        <Text style={styles.Pubered}>Pubered</Text>
        <TouchableOpacity onPress={handlePuberedToggle}>
        <Image
            style={styles.SwitchOn6}
            source={{
              uri: pubered
                ? "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jh8zl2s87l9-I1086%3A27413%3B161%3A4364?alt=media&token=5cef1a87-28c0-4445-b6b5-11698268bbc3"
                : "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1yih114lsj7h-1087%3A27609?alt=media&token=eda4440a-e6a4-4e7c-8b94-fde5e8bbe788",
            }}
          />
           </TouchableOpacity>
      </View>



    </View>
     
      <View style={styles.Group9108}>
      
              <TextInput
          style={styles.PetSNurseryNameOptio}
          placeholder="Pet’s nursery name (optional)"
          onChangeText={text => setPetNurseryNameOptional(text)}
        />
 
 <TouchableOpacity onPress={addPetDetails}>
        <View style={styles.ButtonsSolidNormal}>
          <Text style={styles.Next}>Next</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  
    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor:"rgba(255,255,255,1)",
    flex: 1,
    // right:12
  
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 20,
    marginLeft: 88,
    color:'black'
  },
  photoContainer: {
    position: "relative",
    width: 112,
    height: 112,
    marginLeft: 105,
  },
  ComponentPhotoCircle: {
    width: "100%",
    height: "100%",
  },
  Add_icon: {
    position: "absolute",
    width: 29,
    height: 22.95,
    marginLeft: 80,
  },
  Frame4574: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: 375,
    height: 510,
    paddingLeft: 0,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 0,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
    bottom:0
    
  },
  
  GeneralInformation: {
    color: "rgba(7,8,33,1)",
    fontSize: 18,
    lineHeight: 38,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "700",
    letterSpacing: 0.36,

  },
  InputActivatedSuCess: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "50%",
    // paddingRight: 170,
    paddingTop: 0,
    paddingBottom: 0,
    top:-20,
    boxSizing: "border-box",
  },
  PetSName: {
    color: "rgba(187,195,206,1)",
    fontSize: 13,
    lineHeight: 13,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "600",
    letterSpacing: 0.13,
  },
  Troy: {
    color: "rgba(7,8,33,1)",
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "400",
    letterSpacing: 0.16,
  },
  TextInputStyle: {
    borderBottomWidth: 1,
    borderColor: '#F0F0F8',
    paddingHorizontal: 19,
    paddingVertical: 5,
    marginTop: 5,
    marginBottom: 10,
    fontSize: 16,
    width: '170%', // increase the width to extend the line to the right
    color: '#070821', // add color property here
    },

  InputDropdownActiveted: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "50%",
    boxSizing: "border-box",
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    top:-40,
  },
 
  SpeciesOfYourPet: {
    color: "rgba(187,195,206,1)",
    fontSize: 13,
    lineHeight: 13,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "600",
    letterSpacing: 0.13,
  },
  Dog: {
    color: "rgba(7,8,33,1)",
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "400",
    letterSpacing: 0.16,
  },
  Arrow: {
    position: "absolute",
    top: 18,
    left: 317,
    width: 8,
    height: 13,
  },
  InputDropdownActiveted1: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "50%",
    boxSizing: "border-box",
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    top:-60,
  },
  Group282: {
    // position: "absolute",
    // top: 6,
    // display: "flex",
    // flexDirection: "column",
    // width: 76.24,
    // height: 44,
    // boxSizing: "border-box",
  },
  Breed: {
    color: "rgba(187,195,206,1)",
    fontSize: 13,
    lineHeight: 13,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "600",
    letterSpacing: 0.13,
  },
  ToyTerrier: {
    color: "rgba(7,8,33,1)",
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "400",
    letterSpacing: 0.16,
  },
  Arrow1: {
    position: "absolute",
    top: 18,
    left: 317,
    width: 8,
    height: 13,
  },
  InputDropdownInactive: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "50%",
    boxSizing: "border-box",
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    top:-80,
  },
  Group946: {
    position: "absolute",
    top: 6,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: 44,
    boxSizing: "border-box",
  },
  SizeOptional: {
    color: "rgba(187,195,206,1)",
    fontSize: 13,
    lineHeight: 13,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "600",
    letterSpacing: 0.13,
  },
  Select: {
    color: "rgba(7,8,33,1)",
    fontSize: 16,
    lineHeight: 30,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "400",
    letterSpacing: 0.16,
    
  },
  Arrow2: {
    position: "absolute",
    top: 29,
    left: 317,
    width: 8,
    height: 13,
  },
  Gender1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    boxSizing: "border-box",
    paddingRight: 20,
    paddingTop: 0,
    paddingBottom: 0,
    top:-35,
    
  },
  Gender: {
    color: "rgba(187,195,206,1)",
    fontSize: 13,
    lineHeight: 13,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "600",
    letterSpacing: 0.13,
  },
  Group388: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    boxSizing: "border-box",
    top:10,
    height:40
    
  },
  ButtonMaleActive: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // height: "100%",
    paddingLeft: 40,
    paddingRight: 55,
    paddingTop: 2,
    paddingBottom: 2,
    borderWidth: 1,
    borderColor: "rgba(233,236,245,1)",
    borderRadius: 25,
    boxSizing: "border-box",
    backgroundColor: "rgba(237,109,78,1)",
  },
  ButtonMaleInactive: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    paddingLeft: 38,
    paddingRight: 44,
    paddingTop: 2,
    paddingBottom: 2,
    borderWidth: 1,
    borderColor: "rgba(228,227,243,1)",
    borderRadius: 25,
    boxSizing: "border-box",
  },
 
  MaleIcon: {
    width: 24,
    height: "100%",
  },
  Male: {
    color: "rgba(255,255,255,1)",
    fontSize: 13,
    lineHeight: 13,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "600",
    letterSpacing: 0.13,
  },
  ButtonFemaleActive: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // height: "100%",
    paddingLeft: 40,
    paddingRight: 55,
    paddingTop: 2,
    paddingBottom: 2,
    borderWidth: 1,
    borderColor: "rgba(233,236,245,1)",
    borderRadius: 25,
    boxSizing: "border-box",
    backgroundColor: "rgba(237,109,78,1)",
  },
  ButtonFemaleInactive: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    paddingLeft: 38,
    paddingRight: 44,
    paddingTop: 2,
    paddingBottom: 2,
    borderWidth: 1,
    borderColor: "rgba(228,227,243,1)",
    borderRadius: 25,
    boxSizing: "border-box",
  },
  FemaleIcon: {
    width: 24,
    height: "100%",
  },
  Female: {
    color: "rgba(7,8,33,1)",
    fontSize: 13,
    lineHeight: 13,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "600",
    letterSpacing: 0.13,
  },
  InputDropdownActiveted2: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    boxSizing: "border-box",
    paddingRight: 170,
    paddingTop: 0,
    paddingBottom: 0,
    top:-40,
   
  },
  Group169: {
    position: "absolute",
    top: 6,
    display: "flex",
    flexDirection: "column",
    width: "90%",
    height: 44,
    boxSizing: "border-box",
 
  },
  DateOfBirth: {
    color: "rgba(187,195,206,1)",
    fontSize: 13,
    lineHeight: 13,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "600",
    letterSpacing: 0.13,
  },
  Feb252018: {
    color: "rgba(7,8,33,1)",
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "400",
    letterSpacing: 0.16,
  },
  Arrow3: {
    position: "absolute",
    top: 20,
    left: 317,
    width: 8,
    height: 13,
  },
  
  //new
  Frame4575: {

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 375,
    height: 661,
    paddingLeft: 0,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 19,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
    marginBottom: 20, // add margin-bottom to create space for Group9108
    marginTop: 30,

  },

  AdditonalInformationText:{
    fontWeight:'900',
    fontSize:20,
    color:'black',
    top:0

  },

  //1st check box
  ControllerLabelSwich: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 335,
    height: 32,
    boxSizing: "border-box",
    
   
  },
  Group358: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    top:10,
   
  },
  Neutered: {
    color: "rgba(7,8,33,1)",
    fontSize: 16,
    lineHeight: 50,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "400",
    letterSpacing: 0.16,
  },
  SwitchOn: {
    width: 52,
    height: "100%",
    top:6
  },
//2nd checkbox
Group1610: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  top:27
},
Vaccinated: {
  color: "rgba(7,8,33,1)",
  fontSize: 16,
  lineHeight: 50,
  fontFamily: "Encode Sans, sans-serif",
  fontWeight: "400",
  letterSpacing: 0.16,
},
SwitchOn1: {
  width: 52,
  height: "100%",
  top:6
},
//3rd 
Group379: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  top:54
},
FriendlyWithDogs: {
  color: "rgba(7,8,33,1)",
  fontSize: 16,
  lineHeight: 40,
  fontFamily: "Encode Sans, sans-serif",
  fontWeight: "400",
  letterSpacing: 0.16,
},
SwitchOn2: {
  width: 52,
  height: "100%",
},
//4th
Group3210: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  top:73
},
FriendlyWithCats: {
  color: "rgba(7,8,33,1)",
  fontSize: 16,
  lineHeight: 40,
  fontFamily: "Encode Sans, sans-serif",
  fontWeight: "400",
  letterSpacing: 0.16,
},
SwitchOff: {
  width: 52,
  height: "100%",
},
//5th

Group381: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  top:91
},
Friendlywithkids: {
  color: "rgba(7,8,33,1)",
  fontSize: 16,
  lineHeight: 40,
  fontFamily: "Encode Sans, sans-serif",
  fontWeight: "400",
  letterSpacing: 0.16,
},
SwitchOn3: {
  width: 52,
  height: "100%",
},

//6th

Group38: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  top:112
},
FriendlywithkidsAfter: {
  color: "rgba(7,8,33,1)",
  fontSize: 16,
  lineHeight: 40,
  fontFamily: "Encode Sans, sans-serif",
  fontWeight: "400",
  letterSpacing: 0.16,
},
SwitchOn4: {
  width: 52,
  height: "100%",
},

//7th

Group311: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  top:130
},
Microchipped: {
  color: "rgba(7,8,33,1)",
  fontSize: 16,
  lineHeight: 40,
  fontFamily: "Encode Sans, sans-serif",
  fontWeight: "400",
  letterSpacing: 0.16,
},
SwitchOn5: {
  width: 52,
  height: "100%",
},

//8th

Group39: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  top:150
},
Pubered: {
  color: "rgba(7,8,33,1)",
  fontSize: 16,
  lineHeight: 40,
  fontFamily: "Encode Sans, sans-serif",
  fontWeight: "400",
  letterSpacing: 0.16,
},
SwitchOn6: {
  width: 52,
  height: "100%",
},

//This
  Group9108: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "20%",
    boxSizing: "border-box",
  
    alignSelf: "flex-end",
    // marginTop:50,
    top:485
    
  },
 
  PetSNurseryNameOptio: {
    // color: "rgba(7,8,33,1)",
    fontSize: 16,
    lineHeight: 45,
    fontFamily: "Encode Sans, sans-serif",
    fontWeight: "400",
    letterSpacing: 0.16,
    borderBottomWidth: 1,
    borderColor: '#F0F0F8',
    color: '#070821',
    // top:484
  },
  
  ButtonsSolidNormal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    paddingLeft: 150,
    paddingRight: 148,
    paddingTop: 13,
    paddingBottom: 17,
    borderRadius: 24,
    boxSizing: "border-box",
    backgroundColor: "rgba(237,109,78,1)",
    top:-20

  },
  Next: {
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

 
});


