import { Pressable } from "react-native";
import CustomText from "@components/CustomText";


const CustomButton = ({ buttonText, classes }: { buttonText: string, classes?: string }): JSX.Element => {
    return (
        <Pressable>
            <CustomText customClass={`bg-brand-purple p-5 text-white text-center text-lg rounded-xl ${classes}`} isBold={true}>
                {buttonText}
            </CustomText>
        </Pressable>
    );
};

export default CustomButton;
