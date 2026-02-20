import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Star } from 'lucide-react';
import { LOCATIONS, SERVICES, COMPANY_NAME, PHONE_NUMBER, COMPANY_EMAIL, COMPANY_ADDRESS, BUSINESS_HOURS } from '../constants';
import { SITE_CONFIG, getCountiesString } from '../src/config/site-config';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-200 py-16 border-t border-slate-900" role="contentinfo">
      <div className="container mx-auto px-4">

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem', borderBottom: '1px solid rgba(15, 23, 42, 0.5)', paddingBottom: '3rem' }}>

          <div style={{ flex: '1 1 250px', minWidth: '250px' }}>
            <h3 className="text-2xl font-serif font-bold text-white mb-6 tracking-tighter">
              METLA<span className="text-teal-500">.</span>
            </h3>
            <p className="mb-6 leading-relaxed text-sm">
              Premium residential cleaning serving {getCountiesString()}.
              Hospitality-grade service for your home.
            </p>
            <address className="space-y-3 not-italic">
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-3 text-white font-medium hover:text-teal-400 transition-colors">
                <Phone size={16} className="text-teal-500" aria-hidden="true" />
                {PHONE_NUMBER}
              </a>
              <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center gap-3 hover:text-teal-400 transition-colors text-sm">
                <Mail size={16} className="text-teal-500" aria-hidden="true" />
                {COMPANY_EMAIL}
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="text-teal-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {SITE_CONFIG.address.street},{' '}
                  {SITE_CONFIG.address.city},{' '}
                  {SITE_CONFIG.address.state}{' '}
                  {SITE_CONFIG.address.zip}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock size={16} className="text-teal-500" aria-hidden="true" />
                <time>{BUSINESS_HOURS.display}</time>
              </div>
              <a href={SITE_CONFIG.socialProfiles.gmb} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-teal-400 hover:text-teal-300 transition-colors text-sm font-medium">
                <MapPin size={16} className="text-teal-500" aria-hidden="true" />
                Get Directions
              </a>
            </address>

            <div className="flex items-center gap-3 mt-5">
              <a href={SITE_CONFIG.socialProfiles.gmb} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-teal-400 transition-colors border border-slate-700 rounded px-2 py-1">Google</a>
              <a href={SITE_CONFIG.socialProfiles.facebook} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-teal-400 transition-colors border border-slate-700 rounded px-2 py-1">Facebook</a>
              <a href={SITE_CONFIG.socialProfiles.bbb} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-teal-400 transition-colors border border-slate-700 rounded px-2 py-1">BBB</a>
              <a href={SITE_CONFIG.socialProfiles.thumbtack} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-teal-400 transition-colors border border-slate-700 rounded px-2 py-1">Thumbtack</a>
            </div>

            <a href={SITE_CONFIG.socialProfiles.gmb} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-3 text-xs text-teal-400 hover:text-teal-300 transition-colors">
              <Star size={14} className="fill-current" />
              Leave Us a Review on Google
            </a>
          </div>

          <nav style={{ flex: '1 1 180px', minWidth: '180px' }} aria-label="Our Services">
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href={`/service/${s.slug}`} className="hover:text-teal-400 transition-colors text-sm">{s.title}</Link>
                </li>
              ))}
              <li>
                <Link href="/same-day-cleaning" className="hover:text-teal-400 transition-colors text-sm">Same Day Cleaning</Link>
              </li>
            </ul>
          </nav>

          <nav style={{ flex: '1 1 180px', minWidth: '180px' }} aria-label="Quick Links">
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-teal-400 transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="hover:text-teal-400 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/house-cleaning" className="hover:text-teal-400 transition-colors text-sm">House Cleaning {SITE_CONFIG.regional.primaryCity}</Link></li>
              <li><Link href="/blog" className="hover:text-teal-400 transition-colors text-sm">Cleaning Tips &amp; Blog</Link></li>
              <li><Link href="/faq" className="hover:text-teal-400 transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/same-day-cleaning" className="hover:text-teal-400 transition-colors text-sm">Same Day Cleaning</Link></li>
              <li><Link href="/booking" className="hover:text-teal-400 transition-colors text-sm font-medium text-teal-400">Book Now →</Link></li>
              <li><Link href="/policies" className="hover:text-teal-400 transition-colors text-sm">Policies &amp; Terms</Link></li>
            </ul>
          </nav>

          <div style={{ flex: '1 1 250px', minWidth: '250px' }}>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">The Guarantee</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm group">
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0 mt-1.5" />
                <span>
                  <strong className="text-slate-200 block">100% Satisfaction Promise</strong>
                  We reclean for free if you aren&apos;t happy.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm group">
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0 mt-1.5" />
                <span>
                  <strong className="text-slate-200 block">Fully Insured</strong>
                  Fully insured for your protection.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm group">
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0 mt-1.5" />
                <span>
                  <strong className="text-slate-200 block">Strictly Vetted</strong>
                  Background checked &amp; interviewed.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <nav className="mb-12" aria-label="Service Locations">
          <h4 className="text-white font-bold uppercase tracking-widest mb-8 text-sm text-center">Locations Served</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0.75rem 1.5rem' }}>
            {LOCATIONS.map((l) => (
              <Link key={l.slug} href={`/location/${l.slug}`} className="text-xs text-slate-300 hover:text-teal-400 transition-colors block truncate">
                {l.name}
              </Link>
            ))}
          </div>
        </nav>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-sm text-slate-400">
          <div>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/policies" className="text-slate-400 hover:text-teal-400 transition-colors">Privacy Policy</Link>
            <span className="text-slate-700">|</span>
            <Link href="/policies" className="text-slate-400 hover:text-teal-400 transition-colors">Terms of Service</Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-900/50 text-xs text-slate-400 text-center max-w-4xl mx-auto leading-relaxed">
          <p>
            {COMPANY_NAME} is not the employer of the domestic worker referred to you. The domestic worker may be your employee or an independent contractor depending on the relationship you have with him or her. If you direct and control the manner and means by which the domestic worker performs his or her work you may have employer responsibilities, including employment taxes and workers&apos; compensation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
