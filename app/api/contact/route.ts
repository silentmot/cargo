import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  // In production, forward to email/CRM; here we just simulate success
  const data = await req.formData()
  // Basic validation
  if (!data.get('name') || !data.get('email')) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
  return NextResponse.json({ ok: true })
}
