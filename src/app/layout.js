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
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16628744016"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-16628744016');
</script>
    </html>
  );
}
