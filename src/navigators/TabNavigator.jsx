import React from "react";

import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TodoNavigator } from "./TodoNavigator";
import { ProfileScreen } from "../screens/ProfileScreen";
import { ROUTES } from "./routes";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused }) => {
					let iconName;
					if (route.name === ROUTES.HOME) {
						iconName = focused
							? require("../assets/checked.png")
							: require("../assets/uncheck.png");
					} else if (route.name === ROUTES.PROFILE) {
						iconName = focused
							? require("../assets/checked.png")
							: require("../assets/uncheck.png");
					}
					return <Image source={iconName} />;
				},
			})}
		>
			<Tab.Screen
				options={{ headerShown: false }}
				name={ROUTES.HOME}
				component={TodoNavigator}
			/>
			<Tab.Screen
				options={{ headerShown: false }}
				name={ROUTES.PROFILE}
				component={ProfileScreen}
			/>
		</Tab.Navigator>
	);
};
