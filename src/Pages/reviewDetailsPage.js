//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Ionicons, Feather, Entypo, AntDesign } from "@expo/vector-icons";

// create a component
const ReviewDetailsPage = ({ route, navigation }) => {
  const DATA = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.goback}>
          <Ionicons
            name="chevron-back"
            size={35}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Discovery</Text>
        </View>
        <View style={styles.iconsright}>
          <Feather name="headphones" size={30} color="black" />
          <Entypo
            style={{ marginHorizontal: 10 }}
            name="heart-outlined"
            size={30}
            color="black"
          />
          <AntDesign name="sharealt" size={30} color="black" />
        </View>
      </View>
      <View
        style={{
          height: 250,
          width: 330,
          justifyContent: "center",
          alignItems: "center",
          top: 120,
          position: "absolute",
          backgroundColor: "white",
        }}
      >
        <Image
          style={{
            height: 230,
            width: 310,
          }}
          source={require("../../assets/1.jpeg")}
        />
      </View>
      <View style={styles.imgview}></View>
      <View style={styles.titleview}>
        <Text style={{ fontSize: 20, margin: 20, fontWeight: "bold" }}>
          Does Dry in January Improve Your Health?
        </Text>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <Image
            style={{ height: 25, width: 25, borderRadius: 50, marginRight: 10 }}
            source={require("../../assets/p1.jpeg")}
          />
          <Text>Bilal Zak</Text>
          <Text style={{ color: "grey", marginLeft: 20 }}>. 4 min red</Text>
        </View>
      </View>
      <View style={styles.bodyview}>
        <ScrollView>
          <Text style={styles.randomtexts}>
            Random texts to write since i dont have anything to write
            rightnow.Just Paragraphs for now
          </Text>
          <Text style={styles.randomtexts}>
            Second Paragraph of useless texts since i dont know how to use the
            lorem component in react native
          </Text>
          <Text style={styles.randomtexts}>
            Third Paragraph of useless texts since i dont know how to use the
            lorem component in react native.Third Paragraph of useless texts
            since i dont know how to use the lorem component in react
            native.Third Paragraph of useless texts since i dont know how to use
            the lorem component in react native
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    flex: 3,
    flexDirection: "row",
    position: "relative",
    width: "100%",
  },
  imgview: {
    flex: 2,
    width: "100%",
  },
  titleview: {
    flex: 2,
    width: "100%",
    alignItems: "center",
  },
  bodyview: {
    flex: 4,
    width: "100%",
  },
  goback: {
    flex: 1.5,
    flexDirection: "row",
    height: "100%",
    paddingTop: 60,
    backgroundColor: "pink",
  },
  iconsright: {
    flex: 1,
    flexDirection: "row",
    height: "100%",
    paddingTop: 60,
    justifyContent: "center",
  },
  randomtexts: {
    fontSize: 18,
    color: "#454545",
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

//make this component available to the app
export default ReviewDetailsPage;
