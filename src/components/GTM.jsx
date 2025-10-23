// // src/components/GTM.jsx
// import { useEffect } from "react";

// function GTM() {
//   // useEffect(() => {
//   //   const script = document.createElement("script");
//   //   script.innerHTML = `
//   //     (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//   //     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//   //     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//   //     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//   //     })(window,document,'script','dataLayer','GTM-P67R6GVZ');
//   //   `;
//   //   document.head.appendChild(script);
//   // }, []);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-PXK5WJ6P";
//     script.async = true;
//     document.head.appendChild(script);
//   }, []);


//   return (
//     <noscript>
//       <iframe
//         src="https://www.googletagmanager.com/ns.html?id=GTM-PXK5WJ6P"
//         height="0"
//         width="0"
//         style={{ display: "none", visibility: "hidden" }}
//       ></iframe>
//     </noscript>
//   );
// }

// export default GTM;

// src/components/GTM.jsx
import { useEffect } from "react";

function GTM() {
  useEffect(() => {
    // Head script
    (function(w,d,s,l,i){
      w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
      j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
    })(window, document, 'script', 'dataLayer', 'GTM-233144546');
  }, []);

  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-233144546"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      ></iframe>
    </noscript>
  );
}

export default GTM;
