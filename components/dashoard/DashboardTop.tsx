import useNav from "@store/useNav";
import CustomText from "@components/CustomText";
import UserIcon from "@assets/img/user.png";
import FundWalletIcon from "@assets/img/fund-wallet-icon.png";
import TransferIcon from "@assets/img/transfer-icon.png";
import ManageBillsIcon from "@assets/img/manage-bills-icon.png";
import { useState } from "react";
import { View, Image, Pressable } from "react-native";
import { BellIcon, EyeIcon, EyeOffIcon } from "lucide-react-native";

const DashboardTop = (): JSX.Element => {
    const { toggle } = useNav();
    const [balanceIsVisible, setBalanceIsVisible] = useState(false);

    return (
        <View className="bg-brand-purple pt-4 pb-16 px-4" style={{ rowGap: 40 }}>
            <View className="flex-row items-center justify-between" style={{ columnGap: 20 }}>
                <View className="flex-row items-center" style={{ columnGap: 10 }}>
                    <Image className="object-fit object-center w-16 h-16" source={UserIcon} alt="Ezemmuo" />

                    <CustomText customClass="text-white text-xl font-semibold">
                        Hi, Ezemmuo 👋
                    </CustomText>
                </View>

                <Pressable onPressIn={toggle}>
                    <BellIcon className="text-white" size={30} />
                </Pressable>
            </View>

            <View className="mx-auto" style={{ rowGap: 3 }}>
                <View className="flex-row items-center mx-auto" style={{ columnGap: 10 }}>
                    <CustomText customClass="text-white text-lg font-extralight" isLight={true}>
                        Total Balance
                    </CustomText>

                    <Pressable onPressIn={() => setBalanceIsVisible(() => !balanceIsVisible)}>
                        {balanceIsVisible ? (
                            <EyeIcon className="text-white" strokeWidth={1} size={25} />
                        ) : (
                            <EyeOffIcon className="text-white" strokeWidth={1} size={25} />
                        )}
                    </Pressable>
                </View>

                <CustomText customClass="text-white text-center font-extrabold text-4xl tracking-widest" isBold={true}>
                    {balanceIsVisible ? "₦36,000.00" : "****"}
                </CustomText>
            </View>

            <View className="p-6 bg-white rounded-2xl border-[0.5px] border-black/10 absolute w-full inset-x-4 -bottom-[25%] flex-row justify-between">
                <Pressable style={{ rowGap: 10 }}>
                    <View className="rounded-xl p-4 w-auto bg-[#7b39d20a] mx-auto">
                        <Image source={FundWalletIcon} alt="Fund Wallet" />
                    </View>

                    <CustomText customClass="text-black">
                        Fund Wallet
                    </CustomText>
                </Pressable>

                <Pressable style={{ rowGap: 10 }}>
                    <View className="rounded-xl p-4 w-auto bg-[#fa9b0c0a] mx-auto">
                        <Image source={TransferIcon} alt="Transfer" />
                    </View>

                    <CustomText customClass="text-black">
                        Transfer
                    </CustomText>
                </Pressable>

                <Pressable style={{ rowGap: 10 }}>
                    <View className="rounded-xl p-4 w-auto bg-[#49ac460a] mx-auto">
                        <Image source={ManageBillsIcon} alt="Manage Bills" />
                    </View>

                    <CustomText customClass="text-black">
                        Manage Bills
                    </CustomText>
                </Pressable>
            </View>
        </View>
    );
};

export default DashboardTop;
