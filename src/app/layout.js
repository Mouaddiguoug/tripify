import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./data/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/home/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tripify",
  description: "Tripify",
};
import { GoogleTagManager } from '@next/third-parties/google'

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body>{children}</body>
            <GoogleTagManager gtmId="GTM-XYZ" />
        </html>
     )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${inter.className} text-white bg-black`}>
        <Providers>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />

          {children}
        </Providers>
      </body>
    </html>
  );
}
