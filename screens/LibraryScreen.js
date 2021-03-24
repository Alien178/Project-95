import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import MyHeader from "../components/MyHeader";
import Constant from "expo-constants";

export default class LibraryScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader title={"WatcherZone"} navigation={this.props.navigation} />
      </View>
    );
  }
}
