import Image from "next/image";
import siteData from "@/data/site.json";
import { SiteConfig } from "@/types";

const site: SiteConfig = siteData;

export default function Home() {
  const themeColor = site.themeColor;

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-gray-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight text-gray-900">
            {site.businessName.split(' ')[0]}
            <span style={{ color: themeColor }}>{site.businessName.split(' ').slice(1).join(' ')}</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#reviews" className="hover:text-gray-900 transition-colors">Reviews</a>
            <a 
              href={`tel:${site.contact.phone}`}
              className="px-5 py-2.5 rounded-full text-white transition-transform active:scale-95 shadow-lg flex items-center gap-2"
              style={{ backgroundColor: themeColor, boxShadow: `0 10px 15px -3px ${themeColor}33` }}
            >
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div 
          className="absolute top-0 right-0 -z-10 w-[50%] h-[100%] opacity-[0.03] pointer-events-none"
          style={{ background: `radial-gradient(circle at 50% 50%, ${themeColor}, transparent)` }}
        />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div 
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-gray-50 border border-gray-100"
              style={{ color: themeColor }}
            >
              Professional Services
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              {site.hero.headline}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              {site.hero.subhead}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                className="px-8 py-4 rounded-xl text-white font-semibold text-lg hover:brightness-110 transition-all shadow-xl active:scale-[0.98]"
                style={{ backgroundColor: themeColor, boxShadow: `0 20px 25px -5px ${themeColor}38` }}
              >
                Get a Free Quote
              </button>
              <button className="px-8 py-4 rounded-xl bg-gray-50 text-gray-900 font-semibold text-lg hover:bg-gray-100 transition-all border border-gray-200 active:scale-[0.98]">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl group">
             {/* Dynamic color overlay grid */}
             <div className="absolute inset-0 bg-gray-800 flex items-center justify-center overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: `linear-gradient(to bottom right, ${themeColor}, transparent)` }}
                />
                <div className="p-12 text-center z-10">
                   <div className="w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                   </div>
                   <h3 className="text-3xl font-bold text-white mb-2">{site.businessName}</h3>
                   <p className="text-white/60">Serving Our Community with Excellence</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose Us?</h2>
            <p className="text-lg text-gray-600">We take pride in every project we handle, ensuring the highest standards of quality and customer satisfaction.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {site.features.map((feature, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-opacity-10 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${themeColor}15` }}
                >
                  <div className="w-8 h-8" style={{ color: themeColor }}>
                    {/* Placeholder for Dynamic Icons */}
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="space-y-4">
              <div 
                className="text-sm font-bold uppercase tracking-widest"
                style={{ color: themeColor }}
              >
                Testimonials
              </div>
              <h2 className="text-4xl font-bold text-gray-900">What Our Clients Say</h2>
            </div>
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6" style={{ color: themeColor }} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {site.reviews.map((review, idx) => (
              <div key={idx} className="bg-gray-50 p-10 rounded-3xl relative">
                <div className="text-6xl absolute top-8 right-8 text-gray-200 pointer-events-none">"</div>
                <p className="text-xl text-gray-700 italic mb-8 relative z-10">"{review.text}"</p>
                <div className="font-bold text-gray-900">— {review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div 
            className="w-20 h-20 rounded-2xl mx-auto mb-8 flex items-center justify-center text-white"
            style={{ backgroundColor: themeColor, boxShadow: `0 15px 30px -5px ${themeColor}40` }}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
          <p className="text-xl text-gray-600 mb-10">Experience the quality and service {site.businessName} is known for.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={`tel:${site.contact.phone}`}
              className="px-10 py-5 rounded-2xl text-white font-bold text-xl hover:brightness-110 transition-all shadow-2xl"
              style={{ backgroundColor: themeColor, boxShadow: `0 25px 30px -10px ${themeColor}60` }}
            >
              Book Now: {site.contact.phone}
            </a>
            <div className="text-gray-500 font-medium">or</div>
            <a href={`mailto:${site.contact.email}`} className="text-gray-900 font-bold text-xl border-b-2 border-gray-900 pb-1">
              Email Us
            </a>
          </div>
          <div className="mt-24 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
            <div>© {new Date().getFullYear()} {site.businessName}. All rights reserved.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
