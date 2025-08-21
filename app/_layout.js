import { StatusBar } from "expo-status-bar"
import {Stack} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import "../assets/css/global.css";


const RootLayout = () => {
    return (
        <SafeAreaView className="flex-1">
            <StatusBar style="auto" />
            <Stack>
              <Stack.Screen name='(tabs)' options={{ title: 'Tabs', headerTitleAlign: 'center', headerShown: false }} />
              <Stack.Screen name='index' options={{ title: 'Homepage', headerTitleAlign: 'center', headerShown: false }} />
            </Stack>
        </SafeAreaView>
    );
}

export default RootLayout;
