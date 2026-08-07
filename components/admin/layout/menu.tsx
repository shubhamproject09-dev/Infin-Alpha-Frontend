import {
    LayoutDashboard,
    FileText,
    FolderArchive,
    Mail,
    Users,
} from "lucide-react";

export const menuItems = [
    {
        title: "Dashboard",
        href: "/admin/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Investor Complaint",
        href: "/admin/investor-complaint",
        icon: FileText,
    },
    {
        title: "Investor Complaint History",
        href: "/admin/investor-complaint-history",
        icon: FolderArchive,
    },
    {
        title: "Contact Enquiries",
        href: "/admin/contact",
        icon: Mail,
    },
    {
        title: "Users",
        href: "/admin/users",
        icon: Users,
    },
];