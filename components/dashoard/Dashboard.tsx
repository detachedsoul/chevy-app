import DashboardTop from "@components/dashoard/DashboardTop";
import RecentInvites from "@components/dashoard/RecentInvites";
import CustomText from "@components/CustomText";
import { ScrollView, View, Pressable } from "react-native";

const Dashboard = (): JSX.Element => {
    return (
        <ScrollView className="min-h-screen bg-white">
            <DashboardTop />

            <View className="mt-[25%] px-4">
                <RecentInvites />
            </View>
        </ScrollView>
    );
};

export default Dashboard;
