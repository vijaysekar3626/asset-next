import CommLayout from '@/components/Commonlayouts';

function layout({ children }: { children: React.ReactNode}) {
  return (
    <div className="root w-full h-full md:w-[95%] md:h-[95%]">
      <CommLayout>{children}</CommLayout>
    </div>
  )
}

export default layout