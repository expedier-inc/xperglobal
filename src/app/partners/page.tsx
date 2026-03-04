import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partners - XpderGlobal',
  description: 'Our partners and partnership opportunities for community impact and business growth.',
};

export default function Partners() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-brand-green-dark text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-brand-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-green rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-brand-orange/20 text-brand-orange px-4 py-1 rounded-full text-sm font-medium mb-6">
                Partners
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Growing Together, <br />
                <span className="text-brand-orange">Serving Communities</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We partner with banks, organizations, and businesses who share our 
                mission of making financial services accessible to every Nigerian.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#partner-with-us"
                  className="bg-brand-orange text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-orange-dark transition-colors"
                >
                  Partner With Us
                </a>
                <Link
                  href="/contact"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Our Network</h3>
                  <p className="text-gray-400 text-sm mb-6">Banks • NGOs • Cooperatives • Government</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="font-semibold">Banking Partners</p>
                      <p className="text-gray-400 text-xs">Licensed infrastructure</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="font-semibold">Community Orgs</p>
                      <p className="text-gray-400 text-xs">Literacy programs</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="font-semibold">Cooperatives</p>
                      <p className="text-gray-400 text-xs">Group financial tools</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="font-semibold">SME Support</p>
                      <p className="text-gray-400 text-xs">Business growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Who We Work With
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our services are built on partnerships with licensed, trusted institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Paystack</h3>
              <p className="text-gray-600 text-sm">
                Payment processing and collections infrastructure. 
                Fast, reliable payment acceptance.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Paga</h3>
              <p className="text-gray-600 text-sm">
                Powers our bill payment services. Access to all major billers 
                including DISCOs, telecoms, and government services.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed Partners</h3>
              <p className="text-gray-600 text-sm">
                Additional banking and payment partners for settlement, 
                compliance, and specialized services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section id="partner-with-us" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Partner With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re looking for organizations that share our mission of financial 
              inclusion and community empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* NGOs & Community Organizations */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">NGOs & Community Organizations</h3>
              <p className="text-gray-600 mb-4">
                Partner with us to deliver financial literacy programs, 
                disbursements, or payment services to the communities you serve.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><span className="text-brand-green mr-2">•</span>Financial literacy workshops</li>
                <li className="flex items-center"><span className="text-brand-green mr-2">•</span>Aid disbursement channels</li>
                <li className="flex items-center"><span className="text-brand-green mr-2">•</span>Community outreach programs</li>
              </ul>
            </div>

            {/* Cooperatives & Associations */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cooperatives & Associations</h3>
              <p className="text-gray-600 mb-4">
                Bring digital financial tools to your members. Group wallets, 
                dues collection, and transparent fund management.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><span className="text-brand-orange mr-2">•</span>Group savings tools</li>
                <li className="flex items-center"><span className="text-brand-orange mr-2">•</span>Member dues collection</li>
                <li className="flex items-center"><span className="text-brand-orange mr-2">•</span>Bulk disbursements</li>
              </ul>
            </div>

            {/* Small Businesses */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Small Businesses & Traders</h3>
              <p className="text-gray-600 mb-4">
                We help small businesses and market traders accept payments, 
                pay suppliers, and manage their finances digitally.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><span className="text-brand-green mr-2">•</span>Payment acceptance</li>
                <li className="flex items-center"><span className="text-brand-green mr-2">•</span>Supplier payments</li>
                <li className="flex items-center"><span className="text-brand-green mr-2">•</span>Business advisory support</li>
              </ul>
            </div>

            {/* Government & Public Sector */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Government & Public Sector</h3>
              <p className="text-gray-600 mb-4">
                Partner on social programs, subsidy disbursements, and 
                public payment initiatives that reach underserved populations.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><span className="text-brand-orange mr-2">•</span>Social welfare disbursements</li>
                <li className="flex items-center"><span className="text-brand-orange mr-2">•</span>Subsidy programs</li>
                <li className="flex items-center"><span className="text-brand-orange mr-2">•</span>Public payment collection</li>
              </ul>
            </div>

            {/* Financial Institutions */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Institutions</h3>
              <p className="text-gray-600 mb-4">
                Extend your services through our agent network and reach 
                customers in underserved areas.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><span className="text-brand-green mr-2">•</span>Agent banking services</li>
                <li className="flex items-center"><span className="text-brand-green mr-2">•</span>Last-mile distribution</li>
                <li className="flex items-center"><span className="text-brand-green mr-2">•</span>Customer acquisition</li>
              </ul>
            </div>

            {/* Educational Institutions */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Institutions</h3>
              <p className="text-gray-600 mb-4">
                Partner on financial literacy curriculum, school fee payments, 
                and student financial empowerment programs.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><span className="text-brand-orange mr-2">•</span>Financial literacy training</li>
                <li className="flex items-center"><span className="text-brand-orange mr-2">•</span>Fee payment solutions</li>
                <li className="flex items-center"><span className="text-brand-orange mr-2">•</span>Student programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Become an Agent */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-orange font-semibold uppercase tracking-wide text-sm">Agent Network</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Become an Agent
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Join our network and bring financial services to your community. 
                Earn commissions while helping people access digital payments.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-brand-green mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Free training and support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-brand-green mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Competitive commissions
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-brand-green mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Tools and marketing materials
                </li>
              </ul>
              <Link
                href="/communities"
                className="inline-block bg-brand-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-green-dark transition-colors"
              >
                Learn About Becoming an Agent →
              </Link>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Agent Requirements</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2 mt-1">•</span>
                  Valid government ID (Voter&apos;s Card, Driver&apos;s License, etc.)
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2 mt-1">•</span>
                  Smartphone with internet access
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2 mt-1">•</span>
                  Fixed location (shop, kiosk, or home)
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2 mt-1">•</span>
                  Minimum starting float
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2 mt-1">•</span>
                  Good standing in your community
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-green to-brand-green-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Interested in partnering with XpderGlobal? We&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:expedier.inc@gmail.com?subject=Partnership Inquiry"
              className="inline-flex items-center justify-center bg-brand-orange text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-orange-dark transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-brand-green transition-colors"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
