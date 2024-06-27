import CommLayout from '@/components/Commonlayouts';

function layout({ children }: { children: React.ReactNode}) {
  return (
    <div className="root">
      <CommLayout>{children}</CommLayout>
    </div>
  )
}

export default layout