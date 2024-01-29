import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import ReactQueryProvider from "@/providers/react-query-provider";
import MainHeader from "@/components/main-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next News",
  description: "Next News",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        <ReactQueryProvider>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>{" "}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
