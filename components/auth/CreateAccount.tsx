import CustomText from "@components/CustomText";
import CustomButton from "@components/CustomButton";
import classes from "@utils/customClasses";
import { View, Pressable, TextInput, ScrollView } from "react-native";
import { ArrowLeftIcon, EyeIcon, EyeOffIcon, CheckIcon } from "lucide-react-native";
import { useState } from "react";

const CreateAccount = (): JSX.Element => {
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
                                Create an Account
                            </CustomText>

                            <CustomText customClass="text-lg" lineHeight={30}>
                                Streamline visit process & provide a convenient platform for to manage utility bills.
                            </CustomText>
                        </View>

                        <View style={{ rowGap: 30 }}>
                            <View style={{rowGap: 20}}>
                                <TextInput placeholder="Email Address" className={`${classes.input}`} inputMode="email" placeholderTextColor={classes.placeholderTextColor} />

                                <View className="flex-row items-center relative">
                                    <TextInput placeholder="Password" className={`${classes.input} w-full pr-12`} placeholderTextColor={classes.placeholderTextColor} secureTextEntry={isPasswordVisible} />

                                    <Pressable className="absolute right-4" onPress={() => setIsPasswordVisible(() => !isPasswordVisible)}>
                                        {isPasswordVisible ? (
                                            <EyeOffIcon className="text-brand-purple text-3xl w-auto" size={30} strokeWidth={1} />
                                        ) : (
                                            <EyeIcon className="text-brand-purple text-3xl w-auto" size={30} strokeWidth={1} />
                                        )}
                                    </Pressable>
                                </View>
                            </View>

                            <View style={{ rowGap: 20 }}>
                                <View className="flex-row items-center" style={{ columnGap: 10 }}>
                                    <View className="rounded-full p-1 border border-input">
                                        <CheckIcon className="text-black/10 text-3xl" size={15} strokeWidth={1} />
                                    </View>

                                    <CustomText isBold={true}>
                                        Minimum of 8 characters
                                    </CustomText>
                                </View>

                                <View className="flex-row items-center" style={{ columnGap: 10 }}>
                                    <View className="rounded-full p-1 border border-brand-purple bg-brand-purple">
                                        <CheckIcon className="text-white text-3xl" size={15} strokeWidth={1} />
                                    </View>

                                    <CustomText isBold={true}>
                                        One UpperCase character
                                    </CustomText>
                                </View>

                                <View className="flex-row items-center" style={{ columnGap: 10 }}>
                                    <View className="rounded-full p-1 border border-brand-purple bg-brand-purple">
                                        <CheckIcon className="text-white text-3xl" size={15} strokeWidth={1} />
                                    </View>

                                    <CustomText isBold={true}>
                                        One unique character (e.g !@#$&*?)
                                    </CustomText>
                                </View>
                            </View>

                            <CustomButton buttonText="Create an Account" />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default CreateAccount;
