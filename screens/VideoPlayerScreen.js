import * as React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MyHeader from "../components/MyHeader";
import Constant from "expo-constants";
import { WebView } from "react-native-webview";

export default class VideoPlayerScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
        <View style={{ width: "100%", height: 200 }}>
          <WebView
            source={{
              uri: `https://www.youtube.com/embed/${this.props.videoID}`,
            }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            width: Dimensions.get("screen").width - 50,
            margin: 9,
          }}
          numberOfLines={2}
        >
          {this.props.title}
        </Text>
        <View style={{ borderBottonWidth: 1 }} />
      </View>
    );
  }
}
