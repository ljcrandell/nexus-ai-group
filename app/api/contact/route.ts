import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  // TODO: Wire up email sending.
  // Recommended: Resend (https://resend.com) — npm install resend
  //
  // import { Resend } from 'resend'
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.emails.send({
  //   from: 'noreply@nexusaigroup.com',
  //   to: 'hello@nexusaigroup.com',
  //   subject: `New contact from ${name}`,
  //   text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  // })

  console.log('Contact form submission:', { name, email, message })

  return NextResponse.json({ ok: true })
}
