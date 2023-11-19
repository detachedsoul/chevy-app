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
import Dashboard from "@components/dashboard/Dashboard";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = (): JSX.Element => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Onboarding"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Onboarding" component={Onboarding} />
                <Stack.Screen name="CreateAccount" component={CreateAccount} />
                <Stack.Screen name="AccountDetails" component={AccountDetails} />
                <Stack.Screen name="SignIn" component={SignIn} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
