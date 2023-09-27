import ActionSuccessful from "@components/ActionSuccessful";
import CustomButton from "@components/CustomButton";

const AccountCreationSuccessful = (): JSX.Element => {
    return (
        <ActionSuccessful header="You’ve Created Your Account" text="Your PIN is personal to you. Do not share with anyone to ensure your account is safe and secure.">
            <CustomButton buttonText="Continue to Login" />
        </ActionSuccessful>
    );
};

export default AccountCreationSuccessful;
