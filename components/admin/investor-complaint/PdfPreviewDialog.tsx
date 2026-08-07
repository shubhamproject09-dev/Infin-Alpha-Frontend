"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Loader2, X } from "lucide-react";

import { Document, Page, pdfjs } from "react-pdf";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface Props {
    open: boolean;
    onOpenChange: (value: boolean) => void;
    pdfUrl: string;
    fileName?: string;
}

export default function PdfPreviewDialog({
    open,
    onOpenChange,
    pdfUrl,
    fileName = "Investor Complaint.pdf",
}: Props) {

    const [pages, setPages] = useState<number>(0);
    const previewRef = useRef<HTMLDivElement>(null);
    const [pageWidth, setPageWidth] = useState<number>(900);

    useEffect(() => {
        const updateWidth = (): void => {
            if (!previewRef.current) return;

            setPageWidth(

                Math.min(

                    previewRef.current.clientWidth - 40,

                    900

                )

            );
        };

        updateWidth();

        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, [open]);

    useEffect(() => {

        if (!open) {

            setPages(0);

        }

    }, [open]);

    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
        >

            <DialogContent
                showCloseButton={false}
                className="w-[85vw] max-w-[96vw] sm:max-w-[96vw] h-[85vh] p-0"
            >

                {/* Header */}

                <DialogHeader className="border-b bg-gradient-to-r from-[#00314A] to-[#009A9E] px-6 py-5 text-white">

                    <div className="flex items-center justify-between">

                        <div>
                            <DialogTitle className="text-2xl">
                                PDF Preview
                            </DialogTitle>

                            <p className="mt-1 text-sm text-cyan-100">
                                {fileName}
                            </p>
                        </div>

                        <button
                            onClick={() => onOpenChange(false)}
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-all duration-200 hover:bg-white/20 hover:rotate-90"
                        >
                            <X size={22} />
                        </button>

                    </div>

                </DialogHeader>

                {/* Body */}

                <div
                    ref={previewRef}
                    className="h-[75vh] overflow-y-auto bg-slate-100 p-5 scroll-smooth"
                >

                    <Document

                        file={pdfUrl}

                        loading={

                            <div className="flex justify-center py-20">

                                <Loader2 className="h-10 w-10 animate-spin text-[#009A9E]" />

                            </div>

                        }

                        error={

                            <div className="py-20 text-center text-red-500">

                                Failed to load PDF.

                            </div>

                        }

                        noData={

                            <div className="py-20 text-center text-slate-500">

                                No PDF Available

                            </div>

                        }

                        onLoadSuccess={({ numPages }) =>

                            setPages(numPages)

                        }

                    >

                        {Array.from(
                            new Array(pages),
                            (_, index) => (
                                <div
                                    key={index}
                                    className="mb-6 flex justify-center"
                                >

                                    <Page

                                        pageNumber={index + 1}

                                        width={pageWidth}

                                        loading={

                                            <div className="flex justify-center py-8">

                                                <Loader2 className="h-6 w-6 animate-spin text-[#009A9E]" />

                                            </div>

                                        }

                                    />

                                </div>
                            )
                        )}

                    </Document>

                </div>

                {/* Footer */}

                <div className="flex items-center justify-end gap-4 border-t bg-white px-6 py-4">

                    <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-xl bg-[#009A9E] px-5 py-3 font-medium text-white transition hover:bg-[#007d80]"
                    >
                        <Download size={18} />

                        Download PDF
                    </a>

                </div>

            </DialogContent>

        </Dialog>
    );
}