import SuccessfulIcon from "@assets/img/successful-icon.png";
import { Image, ScrollView, View } from "react-native";
import CustomText from "@components/CustomText";

const ActionSuccessful = ({ header, text, childrenContainerClass, childrenContainerStyles, children }: { header: string, text: string, childrenContainerClass?: string, childrenContainerStyles?: {}, children: JSX.Element; }): JSX.Element => {
    return (
        <ScrollView style={{ rowGap: 50 }}>
            <View className="mx-auto text-center px-10 py-20" style={{ rowGap: 20 }}>
                <Image className="mx-auto h-24 w-24 object-contain object-center" source={SuccessfulIcon} alt={header} width={96} height={96} />

                <CustomText customClass="text-2xl text-center" isBold={true}>
                    {header}
                </CustomText>

                <CustomText customClass="text-center text-lg" isLight={true} lineHeight={30}>
                    {text}
                </CustomText>
            </View>

            <View className={`px-8 pb-10 pt-[20vh] ${childrenContainerClass}`} style={childrenContainerStyles}>
                {children}
            </View>
        </ScrollView>
    );
};

export default ActionSuccessful;
