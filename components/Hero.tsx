import NeuralNetwork from './NeuralNetwork'

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0B1120] flex items-center relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,174,239,0.15)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,174,239,0.12)_0%,transparent_60%)]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#00AEEF 1px, transparent 1px), linear-gradient(90deg, #00AEEF 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Mobile background network — decorative, behind text */}
      <div className="md:hidden absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-full aspect-square">
          <NeuralNetwork />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Left: Text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#00AEEF]/10 border border-[#00AEEF]/30 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
              <span className="text-[#00AEEF] text-sm font-medium">AI Consulting &amp; Solutions</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-6">
              We Connect{' '}
              <span className="text-[#00AEEF]">AI</span>{' '}
              to Your Business
            </h1>

            {/* Subheading */}
            <p className="text-lg text-gray-400 leading-relaxed mb-10">
              Nexus AI Group helps companies integrate artificial intelligence into their workflows —
              from strategic consulting to custom websites and AI voice agents.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-[#00AEEF] hover:bg-[#0096cc] text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,174,239,0.35)]"
              >
                Book a Call
              </a>
              <a
                href="#services"
                className="border border-white/20 hover:border-[#00AEEF]/60 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:bg-white/5"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Right: Animated Neural Network — desktop only */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full max-w-lg aspect-square opacity-85">
              <NeuralNetwork />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
