import React from "react";
import { View, Text } from "react-native";

export default class Home extends React.Component{
    render(){
        return(
           
        <>
        <View
            style={{
              flexDirection: "row",
              marginTop: 40,
              alignItems: "center",
              paddingHorizontal: 40,
            }}
          >
            <Text>Home</Text>
            </View></>
        )
    }
}