import { StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";

import { Colors } from "../../constants/Colors";
import AIScreeningButton from "../../components/ToolsScreensComponents/AIScreeningButton";

function AIScreeningScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screening Using AI</Text>
      <View style={styles.buttonsContainer}>
        <AIScreeningButton
          ImageType={Feather}
          imageName="camera"
          instruction="Take a Picture"
        />
        <View style={styles.verticalLine}></View>
        <AIScreeningButton
          ImageType={Entypo}
          imageName="upload"
          instruction="Upload a Picture"
        />
      </View>
    </View>
  );
}

export default AIScreeningScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.mainBg,
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "white",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 48,
    padding: 20,
    backgroundColor: "#111111",
    justifyContent: "center",
  },
  verticalLine: {
    borderRightWidth: 1,
    borderColor: "white",
    marginHorizontal: 20,
    height: 200,
  },
});
