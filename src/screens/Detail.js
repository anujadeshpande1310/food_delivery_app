import React from "react";
import { View, Text } from "react-native";

export default class Detail extends React.Component {

  render() {
    return (

        <View
          style={{
            flexDirection: "row",
            marginTop: 40,
            alignItems: "center",
            paddingHorizontal: 40,
          }}
        >
          <Text>Details</Text>
        </View>

        
    );
  }
}