import CustomText from "@components/CustomText";
import classes from "@utils/customClasses";
import { View, Pressable, TextInput, ScrollView } from "react-native";
import { ArrowLeftIcon } from "lucide-react-native";

const PasswordResetEmailVerify = (): JSX.Element =>{
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
                                Confirm Code
                            </CustomText>

                            <CustomText customClass="text-lg" lineHeight={30}>
                                By continuing, you may receive a text for verification.
                            </CustomText>
                        </View>

                        <View style={{ rowGap: 20 }}>
                            <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                                <View className="flex-row justify-between" style={{ columnGap: 10 }}>
                                    <TextInput
                                        className={`${classes.input} text-center rounded-2xl px-5 font-satoshi-bold font-extrabold text-black text-2xl`}
                                        inputMode="numeric"
                                        maxLength={1}
                                    />

                                    <TextInput
                                        className={`${classes.input} text-center rounded-2xl px-5 font-satoshi-bold font-extrabold text-black text-2xl`}
                                        inputMode="numeric"
                                        maxLength={1}
                                    />

                                    <TextInput
                                        className={`${classes.input} text-center rounded-2xl px-5 font-satoshi-bold font-extrabold text-black text-2xl`}
                                        inputMode="numeric"
                                        maxLength={1}
                                    />

                                    <TextInput
                                        className={`${classes.input} text-center rounded-2xl px-5 font-satoshi-bold font-extrabold text-black text-2xl`}
                                        inputMode="numeric"
                                        maxLength={1}
                                    />

                                    <TextInput
                                        className={`${classes.input} text-center rounded-2xl px-5 font-satoshi-bold font-extrabold text-black text-2xl`}
                                        inputMode="numeric"
                                        maxLength={1}
                                    />

                                    <TextInput
                                        className={`${classes.input} text-center rounded-2xl px-5 font-satoshi-bold font-extrabold text-black text-2xl`}
                                        inputMode="numeric"
                                        maxLength={1}
                                    />
                                </View>
                            </ScrollView>

                            <Pressable>
                                <CustomText customClass="text-brand-purple text-lg" isBold={true}>
                                    Resend Code
                                </CustomText>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default PasswordResetEmailVerify;
