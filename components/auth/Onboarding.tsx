import CustomText from "@components/CustomText";
import CustomButton from "@components/CustomButton";
import AppPreview from "@assets/img/onboard-app-preview.png";
import { View, Pressable, Image, ScrollView } from "react-native";

const Onboarding = ({navigation}: {navigation: any}): JSX.Element => {
    return (
        <ScrollView>
            <View className="mx-auto pt-8">
                <Image source={AppPreview} alt="App Preview" />
            </View>

            <View className="text-center p-4 bg-white shadow-lg" style={{ rowGap: 20 }}>
                <CustomText customClass="text-3xl text-center" isBold={true} lineHeight={45}>
                    Making Estate & Utility Services Convenient For You.
                </CustomText>

                <CustomText customClass="text-lg text-center" isLight={true} lineHeight={35}>
                    Streamline visit process & provide a convenient platform to manage utility bills.
                </CustomText>

                <CustomButton buttonText="Create an Account" onClick={() => navigation.navigate("CreateAccount")} />

                <Pressable className="mx-auto" onPressIn={() => navigation.navigate("SignIn")}>
                    <CustomText customClass="text-center text-lg" lineHeight={35} isBold={true}>
                        Already have an account? Sign In
                    </CustomText>
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default Onboarding;
