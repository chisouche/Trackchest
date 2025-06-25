import "../globals.css";
import Sidebar from "../../components/Sidebar";
import "../../styles/dashboard.css"

export const metadata = {
  title: "Dashboard",
  description: "User dashboard page",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: "350px", padding: "2rem" }}>
        {children}
      </div>
    </>
  );
}
