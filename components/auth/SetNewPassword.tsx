import CustomText from "@components/CustomText";
import CustomButton from "@components/CustomButton";
import classes from "@utils/customClasses";
import { View, Pressable, TextInput, ScrollView } from "react-native";
import { ArrowLeftIcon, EyeIcon, EyeOffIcon, CheckIcon } from "lucide-react-native";
import { useState } from "react";

const SetNewPassword = (): JSX.Element => {
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
                                New Password
                            </CustomText>

                            <CustomText customClass="text-lg" lineHeight={30}>
                                Create a strong and secure password for signing in to your account.
                            </CustomText>
                        </View>

                        <View style={{ rowGap: 30 }}>
                            <View style={{ rowGap: 20 }}>
                                <View className="flex-row items-center relative">
                                    <TextInput placeholder="New Password" className={`${classes.input} w-full pr-12`} placeholderTextColor={classes.placeholderTextColor} secureTextEntry={isPasswordVisible} />

                                    <Pressable className="absolute right-4" onPress={() => setIsPasswordVisible(() => !isPasswordVisible)}>
                                        {isPasswordVisible ? (
                                            <EyeOffIcon className="text-brand-purple text-3xl w-auto" size={30} strokeWidth={1} />
                                        ) : (
                                            <EyeIcon className="text-brand-purple text-3xl w-auto" size={30} strokeWidth={1} />
                                        )}
                                    </Pressable>
                                </View>

                                <View className="flex-row items-center relative">
                                    <TextInput placeholder="Confirm Password" className={`${classes.input} w-full pr-12`} placeholderTextColor={classes.placeholderTextColor} secureTextEntry={isPasswordVisible} />

                                    <Pressable className="absolute right-4" onPress={() => setIsPasswordVisible(() => !isPasswordVisible)}>
                                        {isPasswordVisible ? (
                                            <EyeOffIcon className="text-brand-purple text-3xl w-auto" size={30} strokeWidth={1} />
                                        ) : (
                                            <EyeIcon className="text-brand-purple text-3xl w-auto" size={30} strokeWidth={1} />
                                        )}
                                    </Pressable>
                                </View>
                            </View>

                            <CustomButton buttonText="Update New Password" />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default SetNewPassword;
