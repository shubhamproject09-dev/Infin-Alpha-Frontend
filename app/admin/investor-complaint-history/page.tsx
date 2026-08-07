"use client";

import HistoryHero from "@/components/admin/InvestorComplaintHistory/HistoryHero";
import HistorySummaryCards from "@/components/admin/InvestorComplaintHistory/HistorySummaryCards";
import HistoryTable from "@/components/admin/InvestorComplaintHistory/HistoryTable";

export default function InvestorComplaintHistoryPage() {

    return (

        <div className="space-y-8">

            <HistoryHero />

            <HistorySummaryCards />

            <HistoryTable />

        </div>

    );

}