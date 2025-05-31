// components/Sidebar.tsx
"use client";
import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import '../styles/sidebar.css'; // Import your CSS file for styling

import {
  LayoutDashboard,DollarSign,List,Heart,Target,LogOut,Wallet,Receipt, Settings, HelpCircle, Menu,ChevronsRight,
} 
from "lucide-react";
import React from "react";

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
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => setCollapsed(!collapsed);
    
  return (

    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        {!collapsed && <h2 className="logo">TrackChest</h2>}
        <button className="toggle-button" onClick={toggleSidebar}>
          
          {collapsed ? <Menu className="menu-icon" /> : 
          
          <ChevronsRight className="chevron-icon"  
          
            style={{ marginLeft: "-6px"}}/>}
        
        </button>
      </div>

    <nav className="nav">
      {navItems.map(({ name, href, icon: Icon }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={name}
            href={href}
            className={`nav-item ${isActive ? "active" : ""}`}
            aria-current={isActive ? "page" : undefined}
            data-label={name} // for tooltip in collapsed mode
          >
            <Icon size={22} strokeWidth={2.5} className="icon" />
            {!collapsed && <span className="nav-label">{name}</span>}
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
            <Link
              key={name}
              href={href}
              className={`support-item ${isActive ? "active" : ""}`}
              title={collapsed ? name : undefined}
            >
              <Icon size={18} className="icon small-icon" />
              {!collapsed && <span>{name}</span>}
            </Link>
          );
        })}
      </div>


      <button className="logout-button" title={collapsed ? "Logout" : undefined}>
        <LogOut size={20} className="icon" />
        {!collapsed && "Logout"}
      </button>

    </aside>
  );
}
