import DashboardTop from "@components/dashoard/DashboardTop";
import RecentInvites from "@components/dashoard/RecentInvites";
import RecentActivities from "@components/dashoard/RecentActivities";
import { ScrollView, View, Pressable } from "react-native";
import FooterNavigation from "@components/dashoard/FooterNavigation";

const Dashboard = (): JSX.Element => {
    return (
        <>
            <ScrollView className="min-h-screen bg-white">
                <DashboardTop />

                <View className="mt-[25%] mb-20 px-4 pb-20" style={{ rowGap: 50 }}>
                    <RecentInvites />

                    <RecentActivities />
                </View>
            </ScrollView>

            <FooterNavigation />
        </>
    );
};

export default Dashboard;
