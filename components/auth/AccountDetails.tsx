import CustomText from "@components/CustomText";
import CustomButton from "@components/CustomButton";
import classes from "@utils/customClasses";
import { View, Pressable, TextInput, ScrollView } from "react-native";
import { ArrowLeftIcon, AtSignIcon, CalendarDays } from "lucide-react-native";
import { useState } from "react";

const AccountDetails = (): JSX.Element => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    return (
        <>
            <View className="px-8 pt-8 pb-4">
                <Pressable className="text-black">
                    <ArrowLeftIcon className="text-black text-3xl" size={30} strokeWidth={1} />
                </Pressable>
            </View>

            <ScrollView className="px-8 pb-20 pt-4">
                <View style={{ rowGap: 30 }}>
                    <View style={{ rowGap: 20 }}>
                        <View style={{ rowGap: 5 }}>
                            <CustomText customClass="text-2xl" isBold={true}>
                                About Yourself
                            </CustomText>

                            <CustomText customClass="text-lg" lineHeight={30}>
                                Give us a brief information about yourself.
                            </CustomText>
                        </View>

                        <View style={{ rowGap: 20 }}>
                            <View style={{rowGap: 15}}>
                                <TextInput placeholder="Full Name" className={`${classes.input}`} inputMode="text" placeholderTextColor={classes.placeholderTextColor} />

                                <View className="flex-row items-center relative">
                                    <AtSignIcon className={`text-black/60 absolute z-50 left-4`} size={20} strokeWidth={1} />

                                    <TextInput placeholder="Create Handle" className={`${classes.input} w-full pl-12`} placeholderTextColor={classes.placeholderTextColor} inputMode="text" />
                                </View>

                                <View className="flex-row items-center relative">
                                    <TextInput placeholder="Date of Birth" className={`${classes.input} w-full pr-12`} placeholderTextColor={classes.placeholderTextColor} inputMode="text" />

                                    <CalendarDays className="text-brand-purple absolute right-4" size={25} strokeWidth={1} />
                                </View>

                                <View className="flex-row items-center border border-input rounded-lg bg-input-bg px-4" style={{columnGap: 10}}>
                                    <View className="flex-row items-center border-r border-input pr-1.5" style={{columnGap: 10}}>
                                        <CalendarDays className="text-brand-purple" size={20} strokeWidth={1} />

                                        <CustomText isBold={true}>
                                            +234
                                        </CustomText>
                                    </View>

                                    <TextInput placeholder="08105008304" className={`${classes.input} border-none rounded-none py-4 px-0 border-0 w-[calc(100%-27.34375%)]`} placeholderTextColor={classes.placeholderTextColor} inputMode="numeric" />
                                </View>
                            </View>

                            <CustomButton buttonText="Continue" />

                            <View className="pt-12 w-4/5 text-center mx-auto" style={{ rowGap: 20 }}>
                                <CustomText customClass="text-center" lineHeight={25}>
                                    By clicking Continue, you agree to our <CustomText customClass="text-brand-purple" isBold={true}>Terms of Service</CustomText> and <CustomText customClass="text-brand-purple" isBold={true}>Privacy Policy</CustomText>
                                </CustomText>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default AccountDetails;
