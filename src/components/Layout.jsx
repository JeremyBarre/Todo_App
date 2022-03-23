import {
  View,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { useTheme } from "../contexts/ThemeProvider";

export const Layout = ({ children }) => {
  const { theme } = useTheme();
  if (Platform.OS === "android") {
    return (
      <View style={styles(theme).container}>
        <StatusBar barStyle="default" />
        {children}
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles(theme).container}>
        <StatusBar barStyle="default" />
        {children}
      </SafeAreaView>
    );
  }
};

const styles =(theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
