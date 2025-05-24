// components/Sidebar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import '../styles/sidebar.css'; // Import your CSS file for styling

import {
  LayoutDashboard,DollarSign,List,Heart,Target,LogOut,Wallet,Receipt, Settings, HelpCircle
} 
from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Budget", href: "/budget", icon: DollarSign },
  { name: "Transactions", href: "/transactions", icon: List },
  { name: "Expense Summary", href: "/expense-summary", icon: Receipt },
  { name: "Wallets", href: "/wallets", icon: Wallet },
  { name: "Wishlist", href: "/wishlist", icon: Heart },
  { name: "Goals", href: "/goals", icon: Target },
];

const supportItems = [
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Get Help", href: "/help", icon: HelpCircle },
];



export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <h2 className="logo">TrackChest</h2>

      <nav className="nav">
        {navItems.map(({ name, href, icon: Icon }) => {
          // Check if the current path matches the link's href
          const isActive = pathname === href;

          return (
            <Link key={name} href={href} className={`nav-item ${isActive ? "active" : ""}`} aria-current={isActive ? "page" : undefined}>
              <Icon size={20} className="icon" />
              <span>{name}</span>
            </Link>
          );
        })}
      </nav>

       {/* Support Section */}
      <hr className="nav-divider" />
      <div className="support-section">
        <h3 className="support-title">Support</h3>
        {supportItems.map(({ name, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link key={name} href={href} className={`nav-item ${isActive ? "active" : ""}`} aria-current={isActive ? "page" : undefined}>
              <Icon size={20} className="icon" />
              <span>{name}</span>
            </Link>
          );
        })}
      </div>

      <button className="logout-button">
        <LogOut size={20} className="icon" />
        Logout
      </button>
    </aside>
  );
}
