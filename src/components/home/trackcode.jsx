import Script from "next/script";

function TrackingCode() {
  return (
  <Script src="https://www.googletagmanager.com/gtag/js?id=G-GOOGLEID" />
  <Script id="google-analytics" strategy="afterInteractive">
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-GOOGLEID');
  </Script>
     )
     }
