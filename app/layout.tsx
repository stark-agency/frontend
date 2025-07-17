import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Stark Agency - Strategy. Creativity. Code. Delivered at Scale.",
    description:
        "AI-Driven Marketing. Scalable Tech. Unstoppable Brands. Your local partner for global ambition across the MENA region.",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Lato:wght@100;300;400;700;900&display=swap"
                rel="stylesheet"
            />
        </head>
        <body className={inter.className}>{children}</body>
        </html>
    )
}
