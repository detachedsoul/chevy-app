import Onboarding from "@components/auth/Onboarding";
import SplashScreen from "@components/auth/SplashScreen";
import CreateAccount from "@components/auth/CreateAccount";
import AccountDetails from "@components/auth/AccountDetails";
import AccountCreationSuccessful from "@components/auth/AccountCreationSuccessful";
import VerifyEmail from "@components/auth/VerifyEmail";
import CreatePin from "@components/auth/CreatePin";
import ConfirmPin from "@components/auth/ConfirmPin";
import SignIn from "@components/auth/SignIn";
import WelcomeBack from "@components/auth/WelcomeBack";
import ResetPassword from "@components/auth/ResetPassword";
import SetNewPassword from "@components/auth/SetNewPassword";
import PasswordResetEmailVerify from "@components/auth/PasswordResetEmailVerify";
import WelcomeBackLoginSelector from "@components/auth/WelcomeBackLoginSelector";
import { View } from "react-native";

const App = (): JSX.Element => {
    return (
        <View className="bg-white min-h-screen">
            <PasswordResetEmailVerify />
        </View>
    );
};

export default App;
