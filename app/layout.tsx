import "./globals.css";
import { IBM_Plex_Sans, Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import ReduxProvider from "../providers/ReduxProvider";
import { Toaster } from "react-hot-toast";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const ibmPlex = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
    title: "INFIN ALPHA",
    description: "Investment Platform",
    icons: {
        icon: "/Favicon1.png",
        shortcut: "/Favicon1.png",
        apple: "/Favicon1.png",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={cn("font-sans", geist.variable)}>
            <body
                className={`${ibmPlex.className} bg-white text-gray-900 antialiased`}
            >
                <ReduxProvider>

                    {children}

                    <Toaster
                        position="top-right"
                        reverseOrder={false}
                        gutter={8}
                        toastOptions={{
                            duration: 4000,
                            style: {
                                background: "#ffffff",
                                color: "#00314A",
                                border: "1px solid #009A9E",
                                borderRadius: "12px",
                                fontSize: "14px",
                                fontWeight: "500",
                            },
                            success: {
                                iconTheme: {
                                    primary: "#009A9E",
                                    secondary: "#ffffff",
                                },
                            },
                            error: {
                                iconTheme: {
                                    primary: "#ef4444",
                                    secondary: "#ffffff",
                                },
                            },
                        }}
                    />

                </ReduxProvider>
            </body>
        </html>
    );
}