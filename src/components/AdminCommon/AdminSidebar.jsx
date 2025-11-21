import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    Users,
    CalendarClock,
    Upload,
    Bell,
    Settings,
    ChevronRight,
    ChevronDown
} from "lucide-react";

const AdminSidebar = () => {
    const location = useLocation();
    const [openDropdown, setOpenDropdown] = useState(null);

    const menuItems = [
        {
            title: "Dashboard",
            icon: LayoutDashboard,
            path: "/adminportal",
        },
        {
            title: "Manage Staff",
            icon: Users,
            children: [
                { name: "Manage Staff", path: "manage/staff" },
            ],
        },
        {
            title: "Manage Events",
            icon: CalendarClock,
            children: [
                { name: "Manage Events", path: "manage/events" },
            ],
        },
        {
            title: "Manage Gallery",
            icon: Upload,
            children: [
                { name: "manage Gallery", path: "manage/gallery" },
            ]
        },
        {
            title: "Notifications",
            icon: Bell,
            children: [
                { name: "Notifications", path: "manage/notifications" },
            ],
        },
        {
            title: "Settings",
            icon: Settings,
            children: [
                { name: "Profile", path: "settings/profile" },
            ],
        },
    ];

    const toggleDropdown = (title) => {
        setOpenDropdown(openDropdown === title ? null : title);
    };

    return (
        <aside className="w-64 bg-gray-900 text-gray-100 h-screen p-4 flex flex-col">
            <div className="text-2xl font-bold text-center mb-6">
               Degree College
            </div>

            <nav className="flex-1 space-y-1">
                {menuItems.map((item, i) => {
                    const Icon = item.icon;
                    const isActive = location.pathname.startsWith(
                        item.path || item.children?.[0]?.path || ""
                    );
                    const isOpen = openDropdown === item.title;

                    return (
                        <div key={i}>

                            {/* ✅ Dashboard (no children → use Link) */}
                            {!item.children ? (
                                <Link
                                    to={item.path}
                                    className={`flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-800 ${
                                        isActive ? "bg-gray-800" : ""
                                    }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <Icon size={18} />
                                        <span>{item.title}</span>
                                    </div>
                                </Link>
                            ) : (
                                <>
                                    {/* 🔹 Dropdown Parent Button */}
                                    <button
                                        onClick={() => toggleDropdown(item.title)}
                                        className={`flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-800 ${
                                            isActive ? "bg-gray-800" : ""
                                        }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <Icon size={18} />
                                            <span>{item.title}</span>
                                        </div>
                                        <span>
                                            {isOpen ? (
                                                <ChevronDown size={18} />
                                            ) : (
                                                <ChevronRight size={18} />
                                            )}
                                        </span>
                                    </button>

                                    {/* 🔻 Dropdown Children */}
                                    {isOpen && (
                                        <div className="ml-6 mt-1 space-y-1">
                                            {item.children.map((child, idx) => (
                                                <Link
                                                    key={idx}
                                                    to={child.path}
                                                    className={`block p-2 rounded-lg text-sm hover:bg-gray-800 ${
                                                        location.pathname === child.path
                                                            ? "bg-gray-800 text-white"
                                                            : "text-gray-300"
                                                    }`}
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    );
                })}
            </nav>

            <div className="mt-auto text-center text-xs text-gray-500">
                © 2025 Degree College
            </div>
        </aside>
    );
};

export default AdminSidebar;
