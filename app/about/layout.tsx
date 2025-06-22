import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";



export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html suppressHydrationWarning lang="en">
            <head />
            <body
                className={clsx(
                    "min-h-screen text-foreground bg-background font-sans antialiased",
                    fontSans.variable,
                )}
            >

                {/* 页面容器 */}
                <div className="flex min-h-screen flex-col">
                    {/* 主要内容区域 */}
                    <main className="container mx-auto max-w-7xl px-6 flex-grow">
                        <Navbar />
                        {children}
                    </main>

                    {/* 页脚 */}
                    <footer className="w-full flex items-center justify-center py-5">
                        <Link
                            isExternal
                            className="flex items-center gap-1 text-current"
                            href="https://github.com/BlkSword/VulnLabs"
                        >
                            <span className="text-default-600">Powered by BlkSword</span>
                        </Link>
                    </footer>
                </div>
            </body>
        </html>
    );
}