import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Solutions - XpderGlobal',
  description: 'Digital wallets, virtual accounts, bill payments, and MSME advisory services for Nigeria.',
};

export default function Solutions() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-green to-brand-green-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Financial Infrastructure That Works Everywhere
            </h1>
            <p className="text-xl text-green-100">
              From bustling Lagos markets to remote villages in Osun, our solutions 
              are built to work where traditional banking doesn&apos;t reach.
            </p>
          </div>
        </div>
      </section>

      {/* Rural Wallet Network */}
      <section id="wallet" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-orange font-semibold uppercase tracking-wide text-sm">Digital Wallets</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Rural Wallet Network
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our wallet system is designed from the ground up for Nigeria&apos;s reality — 
                intermittent connectivity, varying literacy levels, and the need for 
                human touchpoints.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Offline-first onboarding</strong>
                    <p className="text-gray-600">Sign up customers even without internet, sync when connected</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Tiered agent system</strong>
                    <p className="text-gray-600">From village agents to super-agents in major markets</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">USSD + App + POS</strong>
                    <p className="text-gray-600">Multiple access channels for different user preferences</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 lg:p-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-2">50,000+</p>
                <p className="text-gray-600">Active wallets across 15+ states</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Accounts */}
      <section id="accounts" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">BVN Integration</p>
                    <p className="text-gray-600 text-sm">Full KYC compliance from day one</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Instant Settlement</p>
                    <p className="text-gray-600 text-sm">Money moves when you need it to</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Powered by Providus</p>
                    <p className="text-gray-600 text-sm">Licensed banking partner</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-brand-orange font-semibold uppercase tracking-wide text-sm">Virtual Accounts</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Bank-Grade Accounts, Without the Bank
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Every user gets a dedicated virtual account number — receive payments, 
                make transfers, all through a real bank infrastructure. No need to 
                visit a branch or fill endless paperwork.
              </p>
              <p className="text-gray-600">
                Partnered with Providus Bank for secure, regulated account services 
                with full CBN compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bill Payments */}
      <section id="bills" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-brand-orange font-semibold uppercase tracking-wide text-sm">Bill Payments</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Pay Anything, From Anywhere
            </h2>
            <p className="text-lg text-gray-600">
              Powered by Paga, our bill payment hub covers everything from airtime 
              to electricity, school fees to local taxes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Airtime & Data', icon: '📱', desc: 'All networks — MTN, Glo, Airtel, 9mobile' },
              { name: 'Electricity', icon: '💡', desc: 'All DISCOs — prepaid and postpaid' },
              { name: 'Cable TV', icon: '📺', desc: 'DSTV, GOtv, Startimes subscriptions' },
              { name: 'School Fees', icon: '🎓', desc: 'Partner schools and institutions' },
              { name: 'Water Bills', icon: '💧', desc: 'State water corporations' },
              { name: 'Local Taxes', icon: '🏛️', desc: 'LGA levies and state payments' },
            ].map((item) => (
              <div key={item.name} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MSME Advisory */}
      <section id="advisory" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-orange font-semibold uppercase tracking-wide text-sm">Business Support</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                MSME Advisory Services
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Beyond payments, we help small businesses thrive. Our advisory team 
                works with traders, cooperatives, and entrepreneurs to build 
                sustainable businesses.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-green rounded-full mr-3"></span>
                  Cash flow planning and management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-green rounded-full mr-3"></span>
                  Government subsidy navigation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-green rounded-full mr-3"></span>
                  Cooperative formation support
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-green rounded-full mr-3"></span>
                  Digital bookkeeping training
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-green rounded-full mr-3"></span>
                  Access to working capital programs
                </li>
              </ul>
            </div>
            <div className="bg-brand-green rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl font-bold mb-4">Need Business Support?</h3>
              <p className="text-green-100 mb-6">
                Our advisors work with businesses of all sizes — from market traders 
                to growing cooperatives. Let&apos;s talk about your needs.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-orange-dark transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            Open a wallet, become an agent, or partner with us to bring financial 
            services to your community.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-orange-dark transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
