import { useContext } from "react";
import NavBar from "@/components/NavBar";
function Assetlayout({ children }: { children: React.ReactNode }) {
  
  
  return (
    <> 
    <div className="w-full h-full">
      <NavBar/>
      <div className="h-[90%] overflow-y-auto py-[10px]">{children}</div>
    </div>
    </>
  );
}

export default Assetlayout;
