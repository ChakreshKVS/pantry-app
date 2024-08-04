import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/sideNav";
import { ClerkProvider, SignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { dark, neobrutalism } from '@clerk/themes'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pantry Pro",
  description: "Your smart kitchen companion that helps you organize your pantry and generates delicious recipes based on what you have on hand!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body className={`${inter.className} h-full`}>
          <SignedOut>
            <div className="flex items-center justify-center min-h-screen">
              <SignIn />
            </div>
          </SignedOut>
          <SignedIn>
            <div className="flex flex-col h-screen lg:flex-row">
              <div className="w-full lg:w-64 flex-shrink-0">
                <SideNav />
              </div>
              <main className="flex-grow p-4 overflow-y-auto lg:p-8">
                {children}
              </main>
            </div>
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
