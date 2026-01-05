import { Poppins } from "next/font/google";
import "./globals.css";
import NavbarLogic from "@/src/components/layout/NavbarLogic";
import { Providers } from "@/src/components/providers/Providers";

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    subsets: ["latin"],
    variable: "--font-poppins",
});

export const metadata = {
    title: "monday.com | A new way of working",
    description: "monday.com Work OS is an open platform where anyone can create the tools they need to run every aspect of their work.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} ${poppins.className} antialiased`} suppressHydrationWarning={true}>
                <Providers>
                    <NavbarLogic />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
