import { Text } from "react-native";

const CustomText = ({ isBold, isLight, customClass, children, lineHeight }: { isBold?: boolean, isLight?: boolean, children: React.ReactNode; customClass?: string, lineHeight?: number; }): JSX.Element => {
    return (
        <Text
            className={`text-black tracking-widest antialiased ${isLight && 'font-mulish-light'} ${isBold && 'font-satoshi-bold'} ${!isBold && !isLight && 'font-mulish'} ${customClass && customClass}`}
            style={{ lineHeight: lineHeight }}
        >
            {children}
        </Text>
    );
};

export default CustomText;
