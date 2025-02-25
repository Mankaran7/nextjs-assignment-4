

"use client"
import { loaderContext } from "./Context";
import { useState } from "react";
export default function RootLayout({ children }) {
  const[loading,setloading]=useState(true)
  return (
    <html lang="en">

      <body >
       <loaderContext.Provider value={
        {
          loading,setloading
        }
       }>
       {children}
       </loaderContext.Provider>
        
      </body>
    </html>
  );
}
