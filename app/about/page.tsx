import type { Metadata } from 'next';
import Link from 'next/link';
import { Sun, Waves, Building2, ArrowRight, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';
import { COMPANY_NAME, LOCATIONS, COMPANY_ADDRESS, BUSINESS_HOURS, PHONE_NUMBER } from '@/constants';

export const metadata: Metadata = {
  title: `About Us | ${COMPANY_NAME}`,
  description: 'Meet the team behind Metla House Cleaning. Former property managers bringing hospitality-grade cleaning standards to San Diego homes for over 3 years.',
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-teal-900/20" />
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=15&w=800&fm=webp&auto=format&fit=crop"
            srcSet="
              https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=10&w=480&fm=webp&auto=format&fit=crop 480w,
              https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=15&w=800&fm=webp&auto=format&fit=crop 800w,
              https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=20&w=1200&fm=webp&auto=format&fit=crop 1200w
            "
            sizes="100vw"
            alt="Luxury Interior"
            className="w-full h-full object-cover opacity-20"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={1200}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center bg-white/10 px-4 py-1 rounded-full text-sm mb-6 backdrop-blur-sm border border-white/10">
            <ShieldCheck className="w-4 h-4 mr-2 text-teal-400" />
            <span>Our Story</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            The Owner&apos;s Perspective
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            3+ Years of Trusted Cleaning Excellence in San Diego.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">

        {/* Origin Story */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="prose prose-lg text-slate-600 max-w-none">
            <p className="text-2xl font-serif text-slate-900 italic mb-8 border-l-4 border-teal-500 pl-6">
              &quot;We didn&apos;t start as a cleaning company. We started as frustrated hosts with just three units.&quot;
            </p>
            <p className="mb-8">
              The Metla story began in San Diego with just three vacation rental units. As hosts, my wife and I poured our hearts into creating perfect stays for our guests. But we constantly hit a wall with cleaning services. We spent years—and thousands of dollars—hiring local companies, only to find corners cut, finishes damaged, and a lack of consistency that put our Superhost status at risk.
            </p>
            <p className="mb-12">
              We realized that no one cleans a property like someone who understands the owner&apos;s perspective. So, we started cleaning them ourselves.
            </p>

            <div className="py-8 text-center">
              <span className="inline-block w-16 h-1 bg-teal-500 mb-6 rounded-full"></span>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                From 3 units to <br className="hidden md:block" />
                <span className="italic text-teal-600">70+ properties.</span>
              </h3>
            </div>

            <p className="mb-8 p-6 bg-slate-50 rounded-xl border-l-4 border-teal-400 italic">
              &quot;What began as a necessity for our own three units quickly grew. We developed rigorous checklists that didn&apos;t just &apos;clean&apos; a space—they reset it. Other hosts noticed the difference in our reviews and property condition. Today, that commitment to excellence has expanded Metla to manage likely the most demanding cleaning schedules in the city: over 70 concurrent vacation properties.&quot;
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">From Guests to Homeowners</h3>
            <p className="mb-8">
              But our story didn&apos;t stay in the rental market. Word traveled fast among our neighbors and friends. They saw our teams transforming chaotic turnovers into pristine sanctuaries in a matter of hours and asked, <em>&quot;Can you do that for my house?&quot;</em>
            </p>
            <p className="mb-12">
              It turns out, the same &quot;hotel-ready&quot; perfection required for a $5,000-a-week vacation rental is exactly what San Diego homeowners were missing. We brought our hospitality-grade standards—crisp linens, spotless bathrooms, and an obsessive eye for detail—into the residential market. Today, our residential cleaning service stands toe-to-toe with our commercial operations, giving busy families the daily luxury of coming home to a 5-star experience.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Post-Construction Excellence</h3>
            <p className="mb-8">
              While we were perfecting the art of the turnover, we were also building a quiet reputation in the construction world. For nearly the entire existence of our company, we have been the trusted partner for a major custom home developer operating in San Diego&apos;s most exclusive communities.
            </p>
            <p>
              From the coastal estates of <strong>Del Mar</strong> and <strong>Encinitas</strong> to the sprawling ranch properties of <strong>Rancho Santa Fe</strong> and <strong>Rancho Penasquitos</strong>, we have been the final step before the keys are handed over. We understand that after a multi-million dollar renovation, the final clean isn&apos;t just about dust—it&apos;s about revealing the craftsmanship. We handle delicate finishes, specialized surfaces, and massive square footage with the same precision we apply to a studio apartment.
            </p>
          </div>
        </div>

        {/* The Difference Section */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-20 border border-slate-100">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="block text-teal-600 font-bold tracking-widest uppercase text-sm mb-3">The Metla Difference</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Hospitality Standards, Personal Care</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We traded standard residential kits for professional-grade tools designed to restore high-traffic properties. We replaced vague promises with rigorous, manager-approved checklists. Today, Metla House Cleaning is built on a foundation of trust, reliability, and personal relationships. We don&apos;t just &quot;clean houses&quot;; we steward sanctuaries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Rigorous Protocols</h3>
              <p className="text-sm text-slate-500">Manager-approved checklists developed from years of property management.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Personal Relationships</h3>
              <p className="text-sm text-slate-500">Built on trust and reliability. We treat your home as our own.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Professional Grade</h3>
              <p className="text-sm text-slate-500">Advanced tools and techniques capable of deep restoring high-traffic luxury properties.</p>
            </div>
          </div>
        </div>

        {/* San Diego Focus */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Built for the San Diego Lifestyle</h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              After 3+ years serving San Diego homeowners, we understand the unique cleaning challenges of Southern California living. From coastal salt air to inland dust, we&apos;ve perfected our techniques for every neighborhood in San Diego County.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-8">Tailored for San Diego:</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Challenge 1 */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <Waves className="w-6 h-6 text-blue-500" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg">Coastal Marine Layer</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                For our clients in La Jolla, Point Loma, and Coronado, the daily marine layer brings moisture that can cause mildew and salt residue on windows. Our team uses specialized techniques not just to clean, but to protect your finishes against the unique coastal environment.
              </p>
            </div>

            {/* Challenge 2 */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-yellow-50 rounded-lg group-hover:bg-yellow-100 transition-colors">
                  <Sun className="w-6 h-6 text-yellow-500" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg">Santa Ana Winds & Dust</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                San Diego&apos;s famous Santa Ana winds drive fine, pervasive dust into even the tightest sealed homes, especially in inland areas like Rancho Bernardo and Poway. Our deep-cleaning protocols include detailed high-dusting of vents, ledges, and fans to combat this seasonal challenge.
              </p>
            </div>

            {/* Challenge 3 */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors">
                  <Building2 className="w-6 h-6 text-slate-500" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg">Urban Dust Control</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                From the high-rises of Downtown and Hillcrest to the growing developments in North Park, construction dust finds its way everywhere. We use advanced techniques to capture fine particulates, helping you breathe easier.
              </p>
            </div>
          </div>
        </div>

        {/* Areas Served Section */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="block text-teal-600 font-bold tracking-widest uppercase text-sm mb-3">Service Coverage</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Areas We Serve</h2>
            <p className="text-lg text-slate-600">
              Proudly serving San Diego County communities with professional cleaning services for over 3 years.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/location/${loc.slug}`}
                className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg hover:bg-teal-50 hover:border-teal-200 border border-slate-100 transition-all group"
              >
                <MapPin className="w-4 h-4 text-teal-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-700 text-sm font-medium truncate">{loc.name}</span>
              </Link>
            ))}
          </div>

          {/* Contact Info Card */}
          <div className="bg-teal-50 rounded-xl p-8 max-w-2xl mx-auto border border-teal-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Contact Us</h3>
            <div className="grid md:grid-cols-2 gap-4 text-slate-600">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span>{COMPANY_ADDRESS.full}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 flex items-center justify-center text-teal-600">📞</span>
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-teal-600 transition-colors">{PHONE_NUMBER}</a>
              </div>
              <div className="flex items-center gap-3 md:col-span-2">
                <span className="w-5 h-5 flex items-center justify-center text-teal-600">🕐</span>
                <span>{BUSINESS_HOURS.display}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Your Partners in Property Care</h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Whether you need a weekly reset for your Downtown condo, a seasonal deep clean for your Del Mar beach house, or a high-stakes turnover for your vacation rental, Metla brings a hospitality mindset to every job.
            </p>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed font-light">
              We are not just a cleaning crew; we are a team of vetted professionals who treat your home with the same respect we demanded for our own properties. Experience the difference of a cleaning service born from the demands of luxury property management.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center bg-teal-500 text-slate-900 px-8 py-4 rounded font-bold hover:bg-teal-400 transition-all transform hover:-translate-y-1"
            >
              Book Your Service Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
