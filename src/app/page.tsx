import CommLayout from "@/components/Commonlayouts";
import Dashboard from "./(wrap)/dashboard/page";


function  Home() {
  return (
    <div className="root md:w-[95%] md:h-[95%] ">
      <CommLayout>
        <Dashboard/>
      </CommLayout>
    </div>
  );
};

export default Home;
