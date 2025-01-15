"use client";
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
import Notifications from "@/components/Notification/Notification";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DashboardDrawer>
      <Notifications />
      {children}
    </DashboardDrawer>
  );
};

export default DashboardLayout;
