import CommLayout from '@/components/Commonlayouts';

function layout({ children }: { children: React.ReactNode}) {
  return (
    <CommLayout>{children}</CommLayout>
  )
}

export default layout