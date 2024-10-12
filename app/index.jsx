import { Link } from "expo-router";
import { Text, View, StatusBar } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{color: 'blue'}}>
        Go to Profile
      </Link>
    </View>
  );
}
