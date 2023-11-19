import DashboardTop from "@components/dashboard/DashboardTop";
import RecentInvites from "@components/dashboard/RecentInvites";
import RecentActivities from "@components/dashboard/RecentActivities";
import FooterNavigation from "@components/dashboard/FooterNavigation";
import ProfileSidebar from "@components/dashboard/ProfileSidebar";
import { ScrollView, View } from "react-native";

const Dashboard = (): JSX.Element => {
    return (
        <>
            <ScrollView>
                <DashboardTop />

                <View className="mt-[25%] mb-20 px-4 pb-20" style={{ rowGap: 50 }}>
                    <RecentInvites />

                    <RecentActivities />
                </View>
            </ScrollView>

            <FooterNavigation />

            <ProfileSidebar />
        </>
    );
};

export default Dashboard;
