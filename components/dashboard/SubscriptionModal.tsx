import CustomText from "@components/CustomText";
import CustomButton from "@components/CustomButton";
import { useId, useState } from "react";
import { View, Pressable, ScrollView } from "react-native";
import { XIcon } from "lucide-react-native";

type SubscriptionModdalProps = {
    isVisible: boolean,
    toggleVisibility: () => void
};

const SubscriptionModal = ({isVisible, toggleVisibility}: SubscriptionModdalProps): JSX.Element => {
    type subscriptionOptions = {
        id: string,
        duration: string,
        startPrice: string,
        renewalPrice: string
    };

    const subscriptionOptions: subscriptionOptions[] = [
        {
            id: useId(),
            duration: "YEARLY",
            startPrice: "3,000",
            renewalPrice: "12,000"
        },
        {
            id: useId(),
            duration: "YEARLY",
            startPrice: "9,000",
            renewalPrice: "12,000"
        },
        {
            id: useId(),
            duration: "YEARLY",
            startPrice: "12,000",
            renewalPrice: "15,000"
        },
    ];

    const [selected, setSelected] = useState<string | null>(null);

    return (
        <View className={`absolute h-4/5 left-[5%] w-[90%] z-50 rounded-t-2xl bg-white p-4 ${isVisible ? "bottom-0" : "-bottom-full"}`} style={{ rowGap: 30 }}>
            <View className="flex-row justify-between items-center">
                <CustomText customClass="text-black font-bold text-xl" isBold={true}>
                    Choose Your Plan
                </CustomText>

                <Pressable className="border-[0.8px] border-black bg-black/[0.04] p-1.5 rounded-full" onPressIn={toggleVisibility}>
                    <XIcon className="text-black" size={20} strokeWidth={1} />
                </Pressable>
            </View>

            <ScrollView>
                <View style={{ rowGap: 30 }}>
                    <View style={{ rowGap: 30 }}>
                        {subscriptionOptions.map((subscriptionOption: subscriptionOptions): JSX.Element => (
                            <Pressable className="border-[0.5px] border-black/10 p-4 bg-white rounded-2xl" onPressIn={() => setSelected(() => subscriptionOption.id)} style={{ rowGap: 20 }} key={subscriptionOption.id}>
                                <View className="flex-row justify-between">
                                    <CustomText customClass="text-black text-[#979797] tracking-[8px]">
                                        {subscriptionOption.duration}
                                    </CustomText>

                                    <View className={`w-6 h-6 relative justify-center items-center rounded-full border ${selected === subscriptionOption.id ? "border-brand-purple" : "border-[#979797]"}`}>
                                        <View className={`w-3 h-3 rounded-full ${selected === subscriptionOption.id ? "bg-brand-purple" : "border border-[#979797]"}`}></View>
                                    </View>
                                </View>

                                <CustomText customClass="text-black font-bold text-xl">
                                    ₦{subscriptionOption.startPrice}/year
                                </CustomText>

                                <CustomText customClass="text-[#32a431] bg-[rgba(50, 164, 49, 0.10)] rounded-lg p-4 mr-auto" isBold={true}>
                                    7 Days Free Trial
                                </CustomText>

                                <CustomText customClass="text-[#979797]">
                                    Then ₦{subscriptionOption.renewalPrice} per year. Cancel anytime
                                </CustomText>
                            </Pressable>
                        ))}
                    </View>

                    <CustomButton buttonText="Continue to Checkout" />
                </View>
            </ScrollView>
        </View>
    );
};

export default SubscriptionModal;
