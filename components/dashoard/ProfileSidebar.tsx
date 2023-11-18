import CustomText from "@components/CustomText";
import User from "@assets/img/user-profile-pic.png";
import VerifiedBadge from "@assets/img/verified-badge.png";
import LevelStar from "@assets/img/medalstar.png";
import SideBarAdsBanner from "@assets/img/sidebar-ads-banner.png";
import { UserIcon, MessageCircleIcon, PlusSquareIcon, HeadphonesIcon, AwardIcon } from "lucide-react-native";
import { ScrollView, View, Image, Pressable } from "react-native";

const ProfileSidebar = (): JSX.Element => {
    return (
        <View className="absolute bg-white w-4/5 h-full border-r-[0.5px] border-black/10 shadow-xl">
            <ScrollView>
                <View className="px-4 pt-8 pb-14" style={{ rowGap: 50 }}>
                    <View className="pb-8 border-b-[0.5px] border-[#0000004d]" style={{ rowGap: 20 }}>
                        <Image className="w-20 h-20" source={User} alt="Dominic Praise" />

                        <View style={{rowGap: 10}}>
                            <View className="flex-row items-center" style={{columnGap: 8}}>
                                <CustomText customClass="text-black font-bold text-xl" isBold={true}>
                                    Dominic Praise
                                </CustomText>

                                <Image className="h-6 w-6" source={VerifiedBadge} alt="Verified user" />
                            </View>

                            <CustomText customClass="text-black/60 text-lg">
                                @theezemmuo
                            </CustomText>

                            <View className="flex-row items-center" style={{ columnGap: 8 }}>
                                <CustomText customClass="text-black/60 text-lg">
                                    Level 3 User
                                </CustomText>

                                <Image className="h-6 w-6" source={LevelStar} alt="" />
                            </View>
                        </View>
                    </View>

                    <View style={{ rowGap: 20 }}>
                        <View className="flex-row items-center" style={{ columnGap: 15 }}>
                            <UserIcon className="text-black" strokeWidth={1} size={35} />

                            <CustomText customClass="text-black font-semibold text-lg">
                                Profile
                            </CustomText>
                        </View>

                        <View className="flex-row items-center" style={{ columnGap: 15 }}>
                            <View className="relative">
                                <MessageCircleIcon className="text-black" strokeWidth={1} size={35} />

                                <CustomText customClass="text-white text-sm right-0 absolute rounded-full bg-brand-red py-[0.5px] px-1.5">
                                    !
                                </CustomText>
                            </View>

                            <CustomText customClass="text-black font-semibold text-lg">
                                Messages
                            </CustomText>
                        </View>

                        <View className="flex-row items-center" style={{ columnGap: 15 }}>
                            <PlusSquareIcon className="text-black" strokeWidth={1} size={35} />

                            <CustomText customClass="text-black font-semibold text-lg">
                                Post Ad
                            </CustomText>
                        </View>

                        <View className="flex-row items-center" style={{ columnGap: 15 }}>
                            <AwardIcon className="text-black" strokeWidth={1} size={35} />

                            <CustomText customClass="text-black font-semibold text-lg">
                                Subscription
                            </CustomText>
                        </View>

                        <View className="flex-row items-center" style={{ columnGap: 15 }}>
                            <HeadphonesIcon className="text-black" strokeWidth={1} size={35} />

                            <CustomText customClass="text-black font-semibold text-lg">
                                Customer Support
                            </CustomText>
                        </View>
                    </View>

                    <View className="bg-[#f9f9ff] rounded-2xl py-8">
                        <View className="px-6" style={{ rowGap: 15 }}>
                            <CustomText customClass="text-2xl" isBold={true}>
                                Start Posting ADs
                            </CustomText>

                            <CustomText customClass="text-lg" lineHeight={28}>
                                Subscribe to our plans to allow you place adverts and campaigns on our mobile app.
                            </CustomText>
                        </View>

                        <View className="pl-6 pt-12">
                            <Pressable>
                                <CustomText customClass="text-brand-purple text-lg" isBold={true}>
                                    Subscribe Now
                                </CustomText>
                            </Pressable>

                        </View>

                        <Image className="object-center object-cover rounded-br-2xl absolute h-32 w-32 bottom-0 right-0" source={SideBarAdsBanner} alt="Start Posting ADs" />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default ProfileSidebar;
