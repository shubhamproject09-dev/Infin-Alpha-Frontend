"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import { getInvestorComplaint } from "../../../../redux/investorComplaint/investorComplaintThunk";

export default function PdfViewer() {

    const { slug } = useParams();
    const currentSlug = Array.isArray(slug)
        ? slug[0]
        : slug;

    const dispatch = useDispatch();

    const { pdf, loading } = useSelector(
        (state) => state.investorComplaint
    );

    useEffect(() => {

        if (currentSlug === "investor-complaint-data") {

            dispatch(getInvestorComplaint());

        }

    }, [dispatch, currentSlug]);

    const pdfs = {

        "investor-charter":
            "/pdf/investor-charter.pdf",

        "sebi-registration":
            "/pdf/sebi-registration.pdf",

        "investor-complaint-data":
            pdf?.fileUrl || "",

    };

    if (
        currentSlug === "investor-complaint-data" &&
        loading
    ) {

        return (

            <div className="flex h-screen items-center justify-center">

                <h2 className="text-lg font-semibold">

                    Loading PDF...

                </h2>

            </div>

        );

    }

    const pdfUrl = pdfs[currentSlug];

    if (!pdfUrl) {

        return (

            <div className="flex h-screen items-center justify-center">

                <h2 className="text-lg font-semibold text-red-600">

                    PDF Not Found

                </h2>

            </div>

        );

    }

    return (

        <iframe
            src={`${pdfUrl}#toolbar=0`}
            className="h-screen w-full"
            title="PDF Viewer"
        />

    );

}