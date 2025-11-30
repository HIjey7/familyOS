import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

// Тип для навигации
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>familyOS</Text>
        <Text style={styles.subtitle}>Семейный организатор</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcome}>Добро пожаловать!</Text>

        <View style={styles.buttonGroup}>
          <Button
            title="📅 Календарь"
            onPress={() => navigation.navigate("Calendar")}
            variant="primary"
          />
          <Button
            title="🛒 Списки покупок"
            onPress={() => alert("Раздел в разработке")}
            variant="secondary"
          />
          <Button
            title="💰 Семейный бюджет"
            onPress={() => alert("Раздел в разработке")}
            variant="secondary"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    paddingTop: 10,
    backgroundColor: "#f8fafc",
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e293b",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#64748b",
    textAlign: "center",
    marginTop: 4,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  welcome: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 40,
    color: "#334155",
  },
  buttonGroup: {
    gap: 12,
  },
});
