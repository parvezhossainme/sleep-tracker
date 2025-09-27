import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs/";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const exo = Exo({
    subsets: ["latin"],
    variable: "--font-exo",
    weight: ["400", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "ঘুম-ট্রাকার",
    description: "ঘুমের প্যাটার্ন ট্র্যাক করুন",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={exo.className}>
                  <Navbar />
                  <main>{children}</main>
                  <Footer />
                </body>
            </html>
        </ClerkProvider>
    );
}

// postgresql://neondb_owner:npg_7uZnzECrvLx5@ep-blue-heart-a15srdvr-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
