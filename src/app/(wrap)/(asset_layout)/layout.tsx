import NavBar from "@/components/NavBar";
import React from "react";
function Assetlayout({ children }: { children: React.ReactNode }) {
  
  return (
    <> 
    <div className="w-full">
      <NavBar title="viajy"/>
      {children}
    </div>
    </>
  );
}

export default Assetlayout;
