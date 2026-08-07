"use client";

export default function StatusBadge({ status }) {

    const active = status === "ACTIVE";

    return (

        <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold

                ${active

                    ? "bg-emerald-100 text-emerald-700"

                    : "bg-slate-100 text-slate-600"

                }

            `}
        >

            <span

                className={`h-2 w-2 rounded-full

                    ${active

                        ? "animate-pulse bg-emerald-500"

                        : "bg-slate-500"

                    }

                `}

            />

            {status}

        </span>

    );

}