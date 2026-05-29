import { SignupForm } from '@/components/auth/signup-form'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f2ec] px-4 py-12">
      <SignupForm className="w-full max-w-4xl" />
    </div>
  )
}