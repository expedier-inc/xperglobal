import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Partners - XpderGlobal',
  description: 'Partner with XpderGlobal. APIs, settlement, compliance framework for banks, NGOs, and enterprises.',
};

export default function Partners() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-green to-brand-green-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Partner With Us
            </h1>
            <p className="text-xl text-green-100">
              Banks, NGOs, enterprises — let&apos;s work together to bring financial 
              services to underserved communities across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Partnership Opportunities
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Banks & PSPs</h3>
              <p className="text-gray-600 mb-4">
                Extend your reach through our agent network. We handle last-mile 
                distribution while you provide the rails.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• API integration</li>
                <li>• White-label solutions</li>
                <li>• Settlement partnerships</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">NGOs & Government</h3>
              <p className="text-gray-600 mb-4">
                Deliver aid, subsidies, and social programs through our network. 
                Transparent, traceable, and efficient.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Cash transfer programs</li>
                <li>• Subsidy disbursement</li>
                <li>• Financial literacy initiatives</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cooperatives & Associations</h3>
              <p className="text-gray-600 mb-4">
                Group accounts, bulk payments, and savings pools for your members. 
                Designed for collective finance.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Group wallet management</li>
                <li>• Bulk disbursements</li>
                <li>• Member onboarding support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* API Overview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-orange font-semibold uppercase tracking-wide text-sm">For Developers</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                API Integration
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Build on our infrastructure. Our APIs let you integrate wallet 
                services, payments, and disbursements into your own applications.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">RESTful APIs</h4>
                    <p className="text-gray-600 text-sm">Standard REST endpoints with JSON responses</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Webhooks</h4>
                    <p className="text-gray-600 text-sm">Real-time notifications for transactions and events</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sandbox Environment</h4>
                    <p className="text-gray-600 text-sm">Full testing environment before going live</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Create a wallet
POST /api/v1/wallets
{
  "phone": "+2348012345678",
  "bvn": "12345678901",
  "tier": "basic"
}

// Response
{
  "wallet_id": "WLT_abc123",
  "account_number": "1234567890",
  "bank": "Providus Bank",
  "status": "active"
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Settlement & Compliance */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Settlement</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900">Same-day settlement</p>
                  <p className="text-gray-600 text-sm">For transactions before 3 PM WAT</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900">T+1 standard</p>
                  <p className="text-gray-600 text-sm">For all other transactions</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900">Multi-currency ready</p>
                  <p className="text-gray-600 text-sm">Cross-border settlements through regulated partners</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Compliance</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900">CBN-aligned KYC</p>
                  <p className="text-gray-600 text-sm">Tiered verification matching regulatory requirements</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900">AML monitoring</p>
                  <p className="text-gray-600 text-sm">Real-time transaction screening</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900">Data security</p>
                  <p className="text-gray-600 text-sm">Encrypted storage, secure transmission, regular audits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Toolkit */}
      <section id="toolkit" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Agent Toolkit
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Resources for our agent network — training materials, POS guides, 
            and regulatory checklists.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="font-semibold text-gray-900 mb-2">POS Operating Guide</h3>
              <p className="text-gray-600 text-sm mb-4">Step-by-step instructions for terminal operations</p>
              <button className="text-brand-green font-medium hover:underline">Download PDF</button>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="font-semibold text-gray-900 mb-2">Regulatory Checklist</h3>
              <p className="text-gray-600 text-sm mb-4">Compliance requirements for agent operations</p>
              <button className="text-brand-green font-medium hover:underline">Download PDF</button>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="font-semibold text-gray-900 mb-2">Training Videos</h3>
              <p className="text-gray-600 text-sm mb-4">Video tutorials for agents and super-agents</p>
              <button className="text-brand-green font-medium hover:underline">Watch Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let&apos;s Build Together
          </h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            Ready to partner? Our team will walk you through integration options, 
            settlement terms, and compliance requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-orange-dark transition-colors"
          >
            Contact Our Partnership Team
          </Link>
        </div>
      </section>
    </>
  );
}
