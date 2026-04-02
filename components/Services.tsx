const services = [
  {
    icon: <AIIcon />,
    title: 'AI Workflow Integration',
    description:
      'We audit your existing processes and identify where AI can save time, cut costs, and unlock new capabilities. From strategy to full implementation, we guide you every step of the way.',
    highlights: ['Process Auditing', 'AI Tool Selection', 'Team Training', 'Ongoing Support'],
  },
  {
    icon: <WebIcon />,
    title: 'Website Design & Development',
    description:
      'Modern, fast websites built to convert — from polished landing pages to full business platforms. We design with your brand and your customer in mind.',
    highlights: ['Custom Design', 'Next.js / React', 'SEO Optimized', 'Mobile First'],
  },
  {
    icon: <VoiceIcon />,
    title: 'AI Voice Agents',
    description:
      'Deploy intelligent voice agents that handle inbound calls, qualify leads, answer FAQs, and automate customer interactions around the clock — no staff required.',
    highlights: ['24/7 Availability', 'Lead Qualification', 'CRM Integration', 'Custom Scripting'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Three focused services that help your business harness the power of AI.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-[#00AEEF]/30 transition-all group"
            >
              <div className="w-14 h-14 bg-[#00AEEF]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00AEEF]/20 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-6">{s.description}</p>
              <ul className="space-y-2">
                {s.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AIIcon() {
  return (
    <svg className="w-7 h-7 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  )
}

function WebIcon() {
  return (
    <svg className="w-7 h-7 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )
}

function VoiceIcon() {
  return (
    <svg className="w-7 h-7 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
      />
    </svg>
  )
}
