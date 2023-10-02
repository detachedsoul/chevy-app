import CustomText from "@components/CustomText";
import GoogleIcon from "@assets/img/google-email.png";
import { View, Pressable, ScrollView, Image } from "react-native";
import { ArrowLeftIcon } from "lucide-react-native";

const WelcomeBackLoginSelector = (): JSX.Element => {
    return (
        <>
            <View className="px-8 pt-8 pb-4">
                <Pressable className="text-black">
                    <ArrowLeftIcon className="text-black text-3xl" size={30} strokeWidth={1} />
                </Pressable>
            </View>

            <ScrollView className="px-8 pb-20 pt-4">
                <View style={{ rowGap: 30 }}>
                    <View style={{ rowGap: 5 }}>
                        <CustomText customClass="text-2xl" isBold={true}>
                            Get Started
                        </CustomText>

                        <CustomText customClass="text-lg" lineHeight={30}>
                            Let’s help in streamlining visit process & provide a convenient platform for to manage utility bills.
                        </CustomText>
                    </View>

                    <View style={{ rowGap: 30 }}>
                        <Pressable className="border-black/10 rounded-full p-6" style={{ borderWidth: 0.5, columnGap: 10 }}>
                            <CustomText customClass="text-center text-lg" isBold={true}>
                                Use phone or email
                            </CustomText>
                        </Pressable>

                        <Pressable className="border-black/10 rounded-full py-5 px-6 flex-row items-center justify-center" style={{ borderWidth: 0.5, columnGap: 10 }}>
                            <Image className="h-8 w-8" source={GoogleIcon} alt="Continue with Google" />

                            <CustomText customClass="text-center text-lg" isBold={true}>
                                Continue with Google
                            </CustomText>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default WelcomeBackLoginSelector;
