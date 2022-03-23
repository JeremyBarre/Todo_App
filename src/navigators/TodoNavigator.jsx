import { TodoScreen } from "../screens/TodoScreen";
import { TaskScreen } from "../screens/TaskScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from "./routes";

const Stack = createNativeStackNavigator();

export const TodoNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.TODO} component={TodoScreen} />
      <Stack.Screen name={ROUTES.TASK} component={TaskScreen} />
    </Stack.Navigator>
  );
};