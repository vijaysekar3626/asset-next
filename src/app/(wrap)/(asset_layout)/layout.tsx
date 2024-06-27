import { useContext } from "react";
import NavBar from "@/components/NavBar";
function Assetlayout({ children }: { children: React.ReactNode }) {
  
  
  return (
    <> 
    <div className="w-full h-full">
      <NavBar/>
      <div className="h-[80%] overflow-y-auto">{children}</div>
    </div>
    </>
  );
}

export default Assetlayout;
