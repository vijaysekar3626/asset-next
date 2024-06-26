
import CommLayout from '@/components/commonlayouts';

function  Home({children}:{children: React.ReactNode}) {
  return (
    <div className="">
      <CommLayout>{children}</CommLayout>
    </div>
  );
};

export default Home;
