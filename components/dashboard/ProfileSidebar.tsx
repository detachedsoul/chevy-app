import CustomText from "@components/CustomText";
import SubscriptionModal from "@components/dashboard/SubscriptionModal";

import useNav from "@store/useNav";
import User from "@assets/img/user-profile-pic.png";
import VerifiedBadge from "@assets/img/verified-badge.png";
import LevelStar from "@assets/img/medalstar.png";
import SideBarAdsBanner from "@assets/img/sidebar-ads-banner.png";

import { useEffect, useRef, useState } from "react";
import { UserIcon, MessageCircleIcon, PlusSquareIcon, HeadphonesIcon, AwardIcon } from "lucide-react-native";
import { ScrollView, View, Image, Pressable, Animated, Easing, Dimensions } from "react-native";

const ProfileSidebar = (): JSX.Element => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility: () => void = () => {
        setIsVisible(() => !isVisible);
    };

    const { isToggleOn, toggle } = useNav();
    const translateXValue = useRef(new Animated.Value(-200)).current;
    const [initialRender, setInitialRender] = useState(true);

    const { width } = Dimensions.get("window");

    useEffect(() => {
        if (!initialRender) {
            const toValue: number = isToggleOn ? 0 : -width;

            Animated.timing(translateXValue, {
                toValue,
                easing: Easing.linear,
                useNativeDriver: false,
            }).start();
        } else {
            setInitialRender(false);
        }
    }, [isToggleOn, translateXValue, initialRender]);

    useEffect(() => {
        if (isVisible) {
            toggle();
        }
    }, [isVisible]);

    return (
        <>
            <Animated.View
                className="absolute bg-white w-4/5 h-full border-r-[0.5px] border-black/10 shadow-xl"
                style={{
                    transform: [{ translateX: translateXValue }]
                }}
            >
                <ScrollView>
                    <View className="px-4 py-8" style={{ rowGap: 50 }}>
                        <View className="pb-8 border-b-[0.5px] border-[rgba(0,0,0,0.3)]" style={{ rowGap: 20 }}>
                            <Image className="w-20 h-20" source={User} alt="Dominic Praise" />

                            <View style={{ rowGap: 10 }}>
                                <View className="flex-row items-center" style={{ columnGap: 8 }}>
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
                            <Pressable className="flex-row items-center" style={{ columnGap: 15 }}>
                                <UserIcon className="text-black" strokeWidth={1} size={35} />

                                <CustomText customClass="text-black font-semibold text-lg">
                                    Profile
                                </CustomText>
                            </Pressable>

                            <Pressable className="flex-row items-center" style={{ columnGap: 15 }}>
                                <View className="relative">
                                    <MessageCircleIcon className="text-black" strokeWidth={1} size={35} />

                                    <CustomText customClass="text-white text-sm right-0 absolute rounded-full bg-brand-red py-[0.5px] px-1.5">
                                        !
                                    </CustomText>
                                </View>

                                <CustomText customClass="text-black font-semibold text-lg">
                                    Messages
                                </CustomText>
                            </Pressable>

                            <Pressable className="flex-row items-center" style={{ columnGap: 15 }}>
                                <PlusSquareIcon className="text-black" strokeWidth={1} size={35} />

                                <CustomText customClass="text-black font-semibold text-lg">
                                    Post Ad
                                </CustomText>
                            </Pressable>

                            <Pressable className="flex-row items-center" onPressIn={toggleVisibility} style={{ columnGap: 15 }}>
                                <AwardIcon className="text-black" strokeWidth={1} size={35} />

                                <CustomText customClass="text-black font-semibold text-lg">
                                    Subscription
                                </CustomText>
                            </Pressable>

                            <Pressable className="flex-row items-center" style={{ columnGap: 15 }}>
                                <HeadphonesIcon className="text-black" strokeWidth={1} size={35} />

                                <CustomText customClass="text-black font-semibold text-lg">
                                    Customer Support
                                </CustomText>
                            </Pressable>
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
            </Animated.View>

            <SubscriptionModal isVisible={isVisible} toggleVisibility={toggleVisibility} />
        </>
    );
};

export default ProfileSidebar;
