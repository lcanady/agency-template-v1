import Image from "next/image";
import siteData from "@/data/site.json";
import { SiteConfig } from "@/types";

const site = siteData as SiteConfig;

export default function Home() {
  const { palette } = site;

  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 transition-colors duration-300">
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --primary: ${palette.light.primary};
          --secondary: ${palette.light.secondary};
          --accent: ${palette.light.accent};
          --background: ${palette.light.background};
          --foreground: ${palette.light.foreground};
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --primary: ${palette.dark.primary};
            --secondary: ${palette.dark.secondary};
            --accent: ${palette.dark.accent};
            --background: ${palette.dark.background};
            --foreground: ${palette.dark.foreground};
          }
        }
      `}} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight text-foreground">
            {site.businessName.split(' ')[0]}
            <span className="text-primary">{site.businessName.split(' ').slice(1).join(' ')}</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/60">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#reviews" className="hover:text-foreground transition-colors">Reviews</a>
            <a 
              href={`tel:${site.contact.phone}`}
              className="px-5 py-2.5 rounded-full text-white transition-transform active:scale-95 shadow-lg flex items-center gap-2 bg-primary"
              style={{ boxShadow: `0 10px 15px -3px var(--primary)33` }}
            >
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative overflow-hidden ${site.hero.heroStyle === 'full' ? 'min-h-screen flex items-center pt-20' : 'pt-32 pb-20 md:pt-48 md:pb-32'}`}>
        {site.hero.heroStyle === 'full' ? (
          <>
            {/* Full Viewport Background */}
            <div className="absolute inset-0 -z-10">
              {site.hero.imageUrl ? (
                <Image 
                  src={site.hero.imageUrl} 
                  alt={site.businessName}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 bg-gray-900" style={{ background: `linear-gradient(135deg, var(--primary)22, #111827)` }} />
              )}
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-3xl space-y-8">
                <div 
                  className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md border border-white/20 text-white"
                >
                  Authentic Service • Local Expertise
                </div>
                <h1 className="text-5xl md:text-8xl font-bold text-white leading-[1.05] tracking-tight">
                  {site.hero.headline}
                </h1>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl font-light">
                  {site.hero.subhead}
                </p>
                <div className="flex flex-col sm:flex-row gap-5 pt-4">
                  <a 
                    href={`tel:${site.contact.phone}`}
                    className="px-10 py-5 rounded-2xl text-white font-bold text-xl hover:scale-[1.02] transition-all shadow-2xl text-center bg-primary"
                    style={{ boxShadow: `0 20px 40px -10px var(--primary)66` }}
                  >
                    Call: {site.contact.phone}
                  </a>
                  <button className="px-10 py-5 rounded-2xl bg-white/10 backdrop-blur-xl text-white font-bold text-xl hover:bg-white/20 transition-all border border-white/20 active:scale-[0.98]">
                    Explore Services
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Split Layout (Existing) */}
            <div 
              className="absolute top-0 right-0 -z-10 w-[50%] h-[100%] opacity-[0.05] pointer-events-none"
              style={{ background: `radial-gradient(circle at 50% 50%, var(--primary), transparent)` }}
            />
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div 
                  className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-foreground/5 border border-foreground/10 text-primary"
                >
                  Professional Services
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                  {site.hero.headline}
                </h1>
                <p className="text-xl text-foreground/60 leading-relaxed max-w-lg">
                  {site.hero.subhead}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a 
                    href={`tel:${site.contact.phone}`}
                    className="px-8 py-4 rounded-xl text-white font-semibold text-lg hover:brightness-110 transition-all shadow-xl active:scale-[0.98] text-center bg-primary"
                    style={{ boxShadow: `0 20px 25px -5px var(--primary)38` }}
                  >
                    Call: {site.contact.phone}
                  </a>
                  <button className="px-8 py-4 rounded-xl bg-foreground/5 text-foreground font-semibold text-lg hover:bg-foreground/10 transition-all border border-foreground/10 active:scale-[0.98]">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="relative aspect-[4/3] md:aspect-square rounded-3xl overflow-hidden shadow-2xl group">
                 {site.hero.imageUrl ? (
                    <Image 
                      src={site.hero.imageUrl} 
                      alt={site.businessName}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                 ) : (
                    <div className="absolute inset-0 bg-foreground/5 flex items-center justify-center overflow-hidden">
                        <div 
                          className="absolute inset-0 opacity-20"
                          style={{ backgroundImage: `linear-gradient(to bottom right, var(--primary), transparent)` }}
                        />
                        <div className="p-12 text-center z-10">
                           <div className="w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-background/10 backdrop-blur-xl border border-foreground/10">
                              <svg className="w-12 h-12 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                           </div>
                           <h3 className="text-3xl font-bold text-foreground mb-2">{site.businessName}</h3>
                           <p className="text-foreground/60">Serving Our Community with Excellence</p>
                        </div>
                    </div>
                 )}
              </div>
            </div>
          </>
        )}
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-foreground/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Why Choose Us?</h2>
            <p className="text-lg text-foreground/60">We take pride in every project we handle, ensuring the highest standards of quality and customer satisfaction.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {(site.features || []).map((feature, idx) => (
              <div key={idx} className="bg-background p-10 rounded-3xl border border-foreground/5 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-primary/10 group-hover:scale-110 transition-transform overflow-hidden font-bold"
                >
                  {feature.imageUrl ? (
                    <Image src={feature.imageUrl} alt={feature.title} width={64} height={64} className="object-cover" />
                  ) : (
                    <div className="w-8 h-8 text-primary">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {site.gallery && site.gallery.length > 0 && (
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Work</h2>
              <p className="text-lg text-foreground/60">Professional results for our valued clients.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {site.gallery.map((img, i) => (
                <div key={i} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                  <Image src={img} alt={`Work detail ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reviews Section */}
      <section id="reviews" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="space-y-4">
              <div 
                className="text-sm font-bold uppercase tracking-widest text-primary"
              >
                Testimonials
              </div>
              <h2 className="text-4xl font-bold text-foreground">What Our Clients Say</h2>
            </div>
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {(site.reviews || []).map((review, idx) => (
              <div key={idx} className="bg-foreground/5 p-10 rounded-3xl relative">
                <div className="text-6xl absolute top-8 right-8 text-foreground/10 pointer-events-none">"</div>
                <p className="text-xl text-foreground/80 italic mb-8 relative z-10">"{review.text}"</p>
                <div className="font-bold text-foreground">— {review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="py-24 border-t border-foreground/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div 
            className="w-20 h-20 rounded-2xl mx-auto mb-8 flex items-center justify-center text-white bg-primary"
            style={{ boxShadow: `0 15px 30px -5px var(--primary)40` }}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Ready to get started?</h2>
          <p className="text-xl text-foreground/60 mb-10">Experience the quality and service {site.businessName} is known for.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={`tel:${site.contact.phone}`}
              className="px-10 py-5 rounded-2xl text-white font-bold text-xl hover:brightness-110 transition-all shadow-2xl bg-primary"
              style={{ boxShadow: `0 25px 30px -10px var(--primary)60` }}
            >
              Book Now: {site.contact.phone}
            </a>
            <div className="text-foreground/40 font-medium">or</div>
            <a href={`mailto:${site.contact.email}`} className="text-foreground font-bold text-xl border-b-2 border-foreground pb-1">
              Email Us
            </a>
          </div>
          <div className="mt-24 pt-10 border-t border-foreground/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-foreground/40">
            <div className="text-left">
              <div>© {new Date().getFullYear()} {site.businessName}. All rights reserved.</div>
              {site.contact.address && <div className="mt-1 opacity-75">{site.contact.address}</div>}
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-[60]">
        <div className="bg-background/80 backdrop-blur-2xl border border-foreground/10 p-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex gap-3">
          <a 
            href={`tel:${site.contact.phone}`}
            className="flex-1 h-16 rounded-xl flex items-center justify-center font-bold text-white shadow-lg active:scale-95 transition-all bg-primary"
            style={{ boxShadow: `0 10px 20px -5px var(--primary)66` }}
          >
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase opacity-60 font-black tracking-widest leading-none mb-1">Call Now</span>
              <span className="text-lg leading-none">{site.contact.phone}</span>
            </div>
          </a>
          {site.contact.email && (
            <a 
              href={`mailto:${site.contact.email}`}
              className="w-16 h-16 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center text-foreground active:scale-95 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </a>
          )}
        </div>
      </div>

       {/* Add spacing to footer so it doesn't get covered by the CTA */}
       <div className="h-32 md:hidden" />
    </main>
  );
}
