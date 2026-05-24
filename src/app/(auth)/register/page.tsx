'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema, type RegisterInput } from '@/schemas/auth'
import { registerAction, oauthAction } from '@/actions/auth'
import { useState } from 'react'
import Link from 'next/link'

export default function RegisterPage() {
  const [serverError, setServerError] = useState<string | null>(null)
  const [oauthPending, setOauthPending] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  })

  async function onSubmit(data: RegisterInput) {
    setServerError(null)
    const result = await registerAction(data)
    if (!result.success) setServerError(result.error)
  }

  async function handleGoogleOAuth() {
    setOauthPending(true)
    const result = await oauthAction('google')
    if (!result.success) {
      setServerError(result.error)
      setOauthPending(false)
    }
    // On success, Supabase redirects — no further action needed
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f2ec] px-4 py-12">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden shadow-sm border border-gray-200">

        {/* ── Left panel ── */}
        <div className="bg-[#1a2e4a] px-8 py-10 flex flex-col justify-between gap-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#c9a84c] flex items-center justify-center text-[#1a2e4a] font-semibold text-base">
              S
            </div>
            <span className="text-[#e8e4d8] text-[15px] font-medium tracking-wide">
              SRRV Portal
            </span>
          </div>

          <div>
            <h1 className="text-[#f5f2e8] text-xl font-medium leading-snug mb-2">
              Your path to Philippine residency, simplified.
            </h1>
            <p className="text-[#8fa3bb] text-sm leading-relaxed">
              Create an account to begin your Special Resident Retiree's Visa application.
            </p>
          </div>

          <ol className="flex flex-col gap-4">
            {[
              ['Register & verify',   'Create your account and confirm your email'],
              ['Submit application',  'Complete the multi-step SRRV application form'],
              ['Upload documents',    'Attach required documents for review'],
              ['Track your status',   'Follow your application through approval'],
            ].map(([title, desc], i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 w-6 h-6 shrink-0 rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/10 flex items-center justify-center text-[11px] font-medium text-[#c9a84c]">
                  {i + 1}
                </span>
                <div>
                  <p className="text-[#c5bfa8] text-[13px] font-medium">{title}</p>
                  <p className="text-[#8fa3bb] text-[13px] leading-relaxed">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* ── Right panel ── */}
        <div className="bg-white px-8 py-10 flex flex-col justify-center gap-0">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900">Create your account</h2>
            <p className="text-sm text-gray-500 mt-0.5">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-[#1a2e4a] hover:underline">
                Sign in
              </Link>
            </p>
          </div>

          {/* OAuth */}
          <button
            type="button"
            onClick={handleGoogleOAuth}
            disabled={oauthPending}
            className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            <GoogleIcon />
            {oauthPending ? 'Redirecting…' : 'Continue with Google'}
          </button>

          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or register with email</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Email/password form */}
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-3">
            <Field label="Full name" error={errors.name?.message}>
              <input
                {...register('name')}
                type="text"
                placeholder="John Smith"
                autoComplete="name"
              />
            </Field>

            <Field label="Email address" error={errors.email?.message}>
              <input
                {...register('email')}
                type="email"
                placeholder="john@example.com"
                autoComplete="email"
              />
            </Field>

            <div className="grid grid-cols-2 gap-3">
              <Field label="Password" error={errors.password?.message}>
                <input
                  {...register('password')}
                  type="password"
                  placeholder="Min. 8 characters"
                  autoComplete="new-password"
                />
              </Field>
              <Field label="Confirm password" error={errors.confirmPassword?.message}>
                <input
                  {...register('confirmPassword')}
                  type="password"
                  placeholder="Repeat password"
                  autoComplete="new-password"
                />
              </Field>
            </div>

            {serverError && (
              <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">
                {serverError}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-1 py-2.5 rounded-lg bg-[#1a2e4a] text-[#e8e4d8] text-sm font-medium hover:bg-[#243750] transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Creating account…' : 'Create account'}
            </button>

            <p className="text-center text-[11px] text-gray-400 mt-1">
              By registering you agree to our{' '}
              <Link href="/terms" className="text-[#1a2e4a] hover:underline">Terms of Service</Link>
              {' '}and{' '}
              <Link href="/privacy" className="text-[#1a2e4a] hover:underline">Privacy Policy</Link>.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

// ── Sub-components ──────────────────────────────────

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactElement
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}