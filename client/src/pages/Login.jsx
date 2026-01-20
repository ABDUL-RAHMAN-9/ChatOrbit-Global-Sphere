import React from 'react'
import logo from "../assets/logo.png"
import { Star, Globe, ShieldCheck } from 'lucide-react'
import { SignIn } from '@clerk/clerk-react'
import { dark } from '@clerk/themes';

const Login = () =>
{
  return (
    <div className='min-h-screen bg-[#020617] text-slate-100 flex flex-col lg:flex-row overflow-hidden selection:bg-indigo-500/30 font-sans'>

      {/* Optimized Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes blobFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-left { animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade { animation: fadeIn 1.2s ease-out forwards; }
        .animate-blob { animation: blobFloat 15s infinite alternate ease-in-out; }
      `}} />

      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#1e1b4b,transparent)]"></div>

        {/* Animated Orbs */}
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] animate-blob" style={{ animationDelay: '-5s' }} />
      </div>

      {/* --- LEFT SECTION: BRANDING --- */}
      <div className="relative z-10 flex-1 flex flex-col justify-between p-8 md:p-16 lg:p-24 animate-left">

        {/* Header / Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="ChatOrbit Logo" className="h-10 w-auto object-contain" />
          <span className="text-2xl font-bold tracking-tighter">ChatOrbit</span>
        </div>

        {/* Hero Content */}
        <div className="max-w-2xl mt-12 lg:mt-0">
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6'>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            v2.0 Live for Developers
          </div>

          <h1 className='text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95] mb-8'>
            Connect beyond <br />
            <span className='bg-gradient-to-r from-slate-200 via-slate-400 to-slate-500 bg-clip-text text-transparent'>
              the horizon.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-lg">
            The real-time social layer for modern teams. Secure, fast, and globally distributed.
          </p>

          {/* Feature Grid */}
          <div className="hidden md:grid grid-cols-2 gap-6 opacity-0 animate-left" style={{ animationDelay: '0.4s' }}>
            <FeatureItem
              icon={<Globe className="size-5 text-indigo-400" />}
              title="Global Nodes"
              desc="Low latency across 72 regions."
            />
            <FeatureItem
              icon={<ShieldCheck className="size-5 text-cyan-400" />}
              title="End-to-End"
              desc="Your data is encrypted, always."
            />
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 lg:mt-0 flex items-center gap-4 border-t border-slate-800 pt-8 opacity-0 animate-left" style={{ animationDelay: '0.6s' }}>
          <div className="flex -space-x-3">
            {[
              "https://i.pinimg.com/736x/20/bb/6b/20bb6bdcdad3777f573c344584980b63.jpg",
              "https://i.pinimg.com/736x/c9/f8/53/c9f85316c090e99b911a90fc9a3a722a.jpg",
              "https://i.pinimg.com/736x/79/ff/38/79ff38901d4b2654901d6baa1a0e9aa6.jpg",
              "https://i.pinimg.com/736x/cf/86/78/cf8678898e47b3295fb9b347216ccda9.jpg"
            ].map((url, index) => (
              <div key={index} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-slate-800 overflow-hidden shadow-lg">
                <img src={url} alt="user" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-3 fill-amber-500 text-amber-500" />)}
            </div>
            <p className="text-xs text-slate-500 mt-1 font-medium">Trusted by 42,000+ pioneers</p>
          </div>
        </div>
      </div>

      {/* --- RIGHT SECTION: LOGIN FORM --- */}
      {/* --- RIGHT SECTION: LOGIN FORM --- */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-6 lg:p-12 animate-fade">
        {/* Changed this to a flex-col container to hold both the form and the footer text */}
        <div className="w-full max-w-[400px] flex flex-col items-center">

          <div className="w-full flex justify-center items-center min-h-[500px]">
            <SignIn
              appearance={{
                baseTheme: dark,
                variables: {
                  colorPrimary: '#6366f1',
                  colorBackground: '#020617',
                },
                elements: {
                  card: "shadow-none bg-transparent border-none",
                  navbar: "hidden",
                  headerSubtitle: "text-slate-400",
                  footer: "hidden", // We hide Clerk's default footer to use your custom one
                }
              }}
            />
          </div>

          {/* --- THE TEXT --- */}
          <p className="text-center text-slate-500 text-xs mt-4 leading-relaxed max-w-[280px]">
            By continuing, you agree to ChatOrbit's <br />
            <span className="underline cursor-pointer hover:text-slate-300 transition-colors">Terms of Service</span> and <span className="underline cursor-pointer hover:text-slate-300 transition-colors">Privacy Policy</span>.
          </p>

        </div>
      </div>
    </div>
  )
}

const FeatureItem = ({ icon, title, desc }) => (
  <div className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
    <div className="shrink-0 w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center border border-white/10">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-slate-200 text-sm">{title}</h3>
      <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
    </div>
  </div>
)

export default Login