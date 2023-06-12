import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ArtistCard = ({ item }) => {
  return (
    <View style={{ margin: 10 }}>
      <Image
        style={{ width: 130, height: 130, borderRadius: 5 }}
        source={{ uri: item.images[0].url }}
      />
      <Text
        style={{
          fontSize: 13,
          fontWeight: "500",
          color: "white",
          marginTop: 10,
        }}
      >
        {item?.name}
      </Text>
    </View>
  );
};

export default ArtistCard;

const styles = StyleSheet.create({});
