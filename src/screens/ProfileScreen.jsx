import { View, Text, Button } from "react-native"
import { useAuth } from "../contexts/AuthProvider";

export const ProfileScreen = () => {
  const { logout } = useAuth();
  return (
    < View >
      <Text>J'aime l'argent</Text>
      <Button title="Logout" onPress={() => logout()} />
    </View >
  );
};
