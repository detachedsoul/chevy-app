import CustomText from "@components/CustomText";
import CustomButton from "@components/CustomButton";
import classes from "@utils/customClasses";
import { View, Pressable, TextInput, ScrollView } from "react-native";
import { ArrowLeftIcon, EyeIcon, EyeOffIcon, CheckIcon } from "lucide-react-native";
import { useState } from "react";

const ResetPassword = (): JSX.Element => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    return (
        <>
            <View className="px-8 pt-8 pb-4">
                <Pressable className="text-black">
                    <ArrowLeftIcon className="text-black text-3xl" size={30} strokeWidth={1} />
                </Pressable>
            </View>

            <ScrollView className="px-8 pb-16 pt-4">
                <View style={{ rowGap: 30 }}>
                    <View style={{ rowGap: 20 }}>
                        <View style={{ rowGap: 5 }}>
                            <CustomText customClass="text-2xl" isBold={true}>
                                Reset Password
                            </CustomText>

                            <CustomText customClass="text-lg" lineHeight={30}>
                                Enter your email address, and we will send you a code to reset your password.
                            </CustomText>
                        </View>

                        <View style={{ rowGap: 30 }}>
                            <TextInput placeholder="Email Address" className={`${classes.input}`} inputMode="email" placeholderTextColor={classes.placeholderTextColor} />

                            <CustomButton buttonText="Confirm Email" />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default ResetPassword;
