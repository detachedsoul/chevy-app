import CustomText from "@components/CustomText";
import UserIcon from "@assets/img/user.png";
import { ScrollView, View, Image } from "react-native";
import { PlusIcon, HomeIcon, UsersIcon, CastIcon } from "lucide-react-native";

const FooterNavigation = (): JSX.Element => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} className="absolute w-full bottom-0">
            <View className="flex-row items-center justify-between p-4 bg-white mx-auto" style={{ columnGap: 40 }}>
                <View style={{ rowGap: 5 }}>
                    <HomeIcon className="text-[#9a9fa2] mx-auto" size={30} strokeWidth={1} />

                    <CustomText customClass="text-[#9a9fa2] text-lg">
                        Home
                    </CustomText>
                </View>

                <View style={{ rowGap: 5 }}>
                    <CastIcon className="text-[#9a9fa2] mx-auto" size={30} strokeWidth={1} />

                    <CustomText customClass="text-[#9a9fa2] text-lg">
                        Feed
                    </CustomText>
                </View>

                <View className="bg-brand-purple rounded-full p-4 shadow-[0px_0px_25.00006px_0px_rgba(0,_0,_0,_0.20)]">
                    <PlusIcon className="text-white" />
                </View>

                <View style={{ rowGap: 5 }}>
                    <UsersIcon className="text-[#9a9fa2] mx-auto" size={30} strokeWidth={1} />

                    <CustomText customClass="text-[#9a9fa2] text-lg">
                        Visitors
                    </CustomText>
                </View>

                <View style={{ rowGap: 5 }}>
                    <Image className="w-8 h-8 mx-auto" source={UserIcon} alt="Dominic" />

                    <CustomText customClass="text-[#9a9fa2] text-lg text-center">
                        Account
                    </CustomText>
                </View>
            </View>
        </ScrollView>
    );
};

export default FooterNavigation;
