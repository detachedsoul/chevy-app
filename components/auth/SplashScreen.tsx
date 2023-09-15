import { View, Image } from "react-native";
import SplashScreenLogo from "@assets/img/splash-screen-logo.png";

const SplashScreen = (): JSX.Element => {
    return (
        <View className="bg-brand-purple flex-row h-screen justify-center items-center">
            <Image source={SplashScreenLogo} alt="Welcome to Chevy" />
        </View>
    );
};

export default SplashScreen;
