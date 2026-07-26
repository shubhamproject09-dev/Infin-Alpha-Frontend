"use client";

import { useParams } from "next/navigation";

const pdfs = {
    "investor-charter": "/pdf/investor-charter.pdf",
    "sebi-registration": "/pdf/sebi-registration.pdf",
    "investor-complaint-data": "/pdf/investor-complaint-data.pdf",
};

export default function PdfViewer() {
    const { slug } = useParams();

    return (
        <iframe
            src={`${pdfs[slug]}#toolbar=0`}
            className="w-full h-screen"
        />
    );
}