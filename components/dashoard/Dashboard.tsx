import React from 'react';
import { ScrollView, View } from 'react-native';
import DashboardTop from '@components/dashoard/DashboardTop';
import RecentInvites from '@components/dashoard/RecentInvites';
import RecentActivities from '@components/dashoard/RecentActivities';
import FooterNavigation from '@components/dashoard/FooterNavigation';
import ProfileSidebar from '@components/dashoard/ProfileSidebar';

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
