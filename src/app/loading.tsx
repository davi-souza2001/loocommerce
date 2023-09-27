import { AiOutlineLoading } from 'react-icons/ai'

export default function Loading() {
  return (
    <div className="h-screen w-screen flex items-center justify-center text-4xl transition-all animate-spin overflow-hidden">
      <AiOutlineLoading />
    </div>
  )
}
