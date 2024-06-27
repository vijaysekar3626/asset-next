import { useContext } from "react";
import NavBar from "@/components/NavBar";
function Assetlayout({ children }: { children: React.ReactNode }) {
  
  
  return (
    <> 
    <div className="w-full">
      <NavBar/>
      {children}
    </div>
    </>
  );
}

export default Assetlayout;
