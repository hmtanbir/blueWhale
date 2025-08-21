import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Platform } from "react-native";

const _Layout = () => {
    return (
        <Tabs
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: styles.tabBar,
                tabBarLabelStyle: styles.tabLabel,
                tabBarActiveTintColor: "#798777",
                tabBarInactiveTintColor: "#798777",
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "dashboard") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "profile") {
                        iconName = focused ? "person" : "person-outline";
                    }

                    return (
                        <View style={styles.iconWrapper}>
                            <Ionicons name={iconName} size={18} color={"#798777"} />
                        </View>
                    );
                },
            })}
        >
            <Tabs.Screen
                name="dashboard"
                options={{
                    title: "Dashboard",
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                }}
            />
        </Tabs>
    );
};

const styles= StyleSheet.create({
    tabBar: {
        backgroundColor: "#fff",
        height: 70,
        paddingBottom: Platform.OS === "ios" ? 20 : 10,
    },
    tabLabel: {
        fontSize: 10,
        fontWeight: "600",
    },
    iconWrapper: {
        alignItems: "center",
        justifyContent: "center",
    },
});

export default _Layout;
