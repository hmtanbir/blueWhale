import { Text, View } from 'react-native'
import "../assets/css/global.css"
import {SafeAreaView} from "react-native-safe-area-context";

const Home = () => {
    return (
        <SafeAreaView className="flex-1 justify-center items-center">
        <View className="flex justify-center items-center gap-5">
            <Text className="text-3xl">Home</Text>
        </View>
        </SafeAreaView>
    )
}
export default Home
