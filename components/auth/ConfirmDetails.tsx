import NotificationBell from "@assets/img/notification-bell.png";
import { Image, View, Pressable } from "react-native";
import CustomText from "@components/CustomText";
import CustomButton from "@components/CustomButton";

const ConfirmDetails = (): JSX.Element => {
    return (
        <View className="px-8 py-16 bg-white rounded-2xl inset-x-4 absolute top-[9.375%]" style={{rowGap: 20}}>
            <Image className="mx-auto w-32 h-32" source={NotificationBell} alt="Attention needed!" />

            <CustomText customClass="text-center text-lg" lineHeight={30}>
                We use your legal documents to verify your account later on. Do you wish to continue with the name you provided?
            </CustomText>

            <CustomButton buttonText="Yes, Continue with Name" />

            <Pressable className="text-center mx-auto">
                <CustomText customClass="text-lg" isBold={true}>
                    No, Change Name
                </CustomText>
            </Pressable>
        </View>
    );
};

export default ConfirmDetails;
