import CustomText from "@components/CustomText";
import { View, Pressable } from "react-native";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react-native";

const RecentActivies = (): JSX.Element => {
    return (
        <View style={{ rowGap: 30 }}>
            <View className="flex-row justify-between">
                <CustomText customClass="text-black font-bold text-lg">
                    Recent Activities
                </CustomText>

                <Pressable>
                    <CustomText customClass="text-lg font-bold text-[#979797]">
                        View All
                    </CustomText>
                </Pressable>
            </View>

            <View className="" style={{ rowGap: 20 }}>
                <View className="flex-row items-center justify-between pb-4 border-b-[0.25px] border-[#0000004d]" style={{columnGap: 20}}>
                    <View className="flex-row items-center" style={{ columnGap: 20 }}>
                        <View className="rounded-xl bg-[#00000005] p-3">
                            <ArrowUpRight className="text-black" size={25} strokeWidth={1} />
                        </View>

                        <View style={{rowGap: 10}}>
                            <CustomText customClass="text-black text-lg font-semibold">
                                Withdrawal
                            </CustomText>

                            <CustomText>
                                October 2, 2023
                            </CustomText>
                        </View>
                    </View>

                    <CustomText customClass="text-brand-red font-bold text-xl">
                        ₦8,000.00
                    </CustomText>
                </View>

                <View className="flex-row items-center justify-between pb-4 border-b-[0.25px] border-[#0000004d]" style={{ columnGap: 20 }}>
                    <View className="flex-row items-center" style={{ columnGap: 20 }}>
                        <View className="rounded-xl bg-[#00000005] p-3">
                            <ArrowDownLeft className="text-black" size={25} strokeWidth={1} />
                        </View>

                        <View style={{ rowGap: 10 }}>
                            <CustomText customClass="text-black text-lg font-semibold">
                                Withdrawal
                            </CustomText>

                            <CustomText>
                                October 2, 2023
                            </CustomText>
                        </View>
                    </View>

                    <CustomText customClass="text-brand-green font-bold text-xl">
                        ₦98,450.00
                    </CustomText>
                </View>
            </View>
        </View>
    );
};

export default RecentActivies;
