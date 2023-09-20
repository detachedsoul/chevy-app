import CustomText from "@components/CustomText";
import AppPreview from "@assets/img/onboard-app-preview.png";
import { View, Pressable, Image, ScrollView } from "react-native";
import CustomButton from "@components/CustomButton";

const Onboarding = (): JSX.Element => {
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
                    Streamline visit process & provide a convenient platform for to manage utility bills.
                </CustomText>

                <CustomButton buttonText="Create an Account" />

                <Pressable className="mx-auto">
                    <CustomText customClass="text-center text-lg" lineHeight={35} isBold={true}>
                        Already have an account? Sign In
                    </CustomText>
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default Onboarding;
