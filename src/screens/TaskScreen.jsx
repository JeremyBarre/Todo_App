import React from "react";
import { Task } from "../components/Task"
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

export const TaskScreen = ({task}) => {
  const route = useRoute();
  console.log(route.params.task);
  return (
    <View>
      <Text>{route.params.task.value}</Text>
    </View>
  );
};