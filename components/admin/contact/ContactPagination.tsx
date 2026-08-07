"use client";

interface Props {

    currentPage: number;

    totalPages: number;

    onPageChange: (page: number) => void;

}

export default function ContactPagination({

    currentPage,

    totalPages,

    onPageChange,

}: Props) {

    if (totalPages === 0)
        return null;

    return (

        <div className="flex items-center justify-center gap-3">

            <button

                disabled={currentPage === 1}

                onClick={() =>

                    onPageChange(

                        currentPage - 1

                    )

                }

                className="rounded-xl border px-4 py-2 disabled:opacity-40"

            >

                Previous

            </button>

            {

                [...Array(totalPages)]

                    .map((_, index) => (

                        <button

                            key={index}

                            onClick={() =>

                                onPageChange(

                                    index + 1

                                )

                            }

                            className={`h-10 w-10 rounded-xl ${currentPage ===

                                index + 1

                                ? "bg-[#009A9E] text-white"

                                : "border"

                                }`}

                        >

                            {index + 1}

                        </button>

                    ))

            }

            <button

                disabled={

                    currentPage ===

                    totalPages

                }

                onClick={() =>

                    onPageChange(

                        currentPage + 1

                    )

                }

                className="rounded-xl border px-4 py-2 disabled:opacity-40"

            >

                Next

            </button>

        </div>

    );

}