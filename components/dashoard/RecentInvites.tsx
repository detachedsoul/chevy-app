import CustomText from "@components/CustomText";
import DominicAvatar from "@assets/img/dominic-avatar.png";
import AshimiAvatar from "@assets/img/ashimi-avatar.png";
import SudoAvatar from "@assets/img/sudo-avatar.png";
import NsisongAvatar from "@assets/img/nsisong-avatar.png";
import OladeleAvatar from "@assets/img/dominic-avatar.png";
import { View, Image, Pressable, ScrollView } from "react-native";

const RecentInvites = (): JSX.Element => {
    return (
        <View style={{ rowGap: 30 }}>
            <View className="flex-row justify-between">
                <CustomText customClass="text-black font-semibold text-xl">
                    Recent Invites
                </CustomText>

                <Pressable>
                    <CustomText customClass="text-xl font-semibold text-[#979797]">
                        View All
                    </CustomText>
                </Pressable>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <View className="flex-row" style={{ columnGap: 20 }}>
                    <View style={{ rowGap: 10 }}>
                        <Image className="mx-auto h-20 w-20 object-center object-cover" source={DominicAvatar} alt="Dominic" />

                        <CustomText customClass="text-black text-lg font-semibold text-center">
                            Dominic
                        </CustomText>

                        <CustomText customClass="text-center font-semibold">
                            02-10-2023
                        </CustomText>
                    </View>

                    <View style={{ rowGap: 10 }}>
                        <Image className="mx-auto h-20 w-20 object-center object-cover" source={AshimiAvatar} alt="Ashimi" />

                        <CustomText customClass="text-black text-lg font-semibold text-center">
                            Ashimi
                        </CustomText>

                        <CustomText customClass="text-center font-semibold">
                            02-10-2023
                        </CustomText>
                    </View>

                    <View style={{ rowGap: 10 }}>
                        <Image className="mx-auto h-20 w-20 object-center object-cover" source={SudoAvatar} alt="Sudo" />

                        <CustomText customClass="text-black text-lg font-semibold text-center">
                            Sudo
                        </CustomText>

                        <CustomText customClass="text-center font-semibold">
                            02-10-2023
                        </CustomText>
                    </View>

                    <View style={{ rowGap: 10 }}>
                        <Image className="mx-auto h-20 w-20 object-center object-cover" source={NsisongAvatar} alt="Nsisong" />

                        <CustomText customClass="text-black text-lg font-semibold text-center">
                            Nsisong
                        </CustomText>

                        <CustomText customClass="text-center font-semibold">
                            02-10-2023
                        </CustomText>
                    </View>

                    <View style={{ rowGap: 10 }}>
                        <Image className="mx-auto h-20 w-20 object-center object-cover" source={OladeleAvatar} alt="Oladele" />

                        <CustomText customClass="text-black text-lg font-semibold text-center">
                            Oladele
                        </CustomText>

                        <CustomText customClass="text-center font-semibold">
                            02-10-2023
                        </CustomText>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default RecentInvites;
