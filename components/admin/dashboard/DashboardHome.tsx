"use client";

import DashboardSummaryCards from "./DashboardSummaryCards";
import DashboardAnalytics from "./DashboardAnalytics";

export default function DashboardHome() {
    return (
        <div className="space-y-8">

            <DashboardSummaryCards />

            <DashboardAnalytics />

        </div>
    );
}