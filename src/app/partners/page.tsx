import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partner With Us - XpderGlobal',
  description: 'APIs, integrations, and partnership opportunities for banks, enterprises, and developers.',
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
                For Partners & Developers
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Build on Our <br />
                <span className="text-brand-orange">Payment Rails</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Integrate wallets, collections, and disbursements into your platform. 
                RESTful APIs, real-time webhooks, sandbox environment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-brand-orange text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-orange-dark transition-colors"
                >
                  Talk to Sales
                </Link>
                <a
                  href="#api"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                >
                  View API Docs
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-gray-800 rounded-2xl p-6 font-mono text-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="text-green-400 overflow-x-auto"><code>{`POST /api/v1/transfers
{
  "amount": 50000,
  "recipient": {
    "account": "0123456789",
    "bank": "058"
  },
  "reference": "TXN_abc123"
}

// Response: 200 OK
{
  "status": "success",
  "transaction_id": "xpd_tx_...",
  "settled_at": "2026-03-03T..."
}`}</code></pre>
              </div>
            </div>
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you&apos;re a bank, enterprise, or startup — there&apos;s a way to work together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-brand-green transition-all">
              <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Banks & PSPs</h3>
              <p className="text-gray-600 mb-4">
                Extend your reach through our distribution network. 
                White-label solutions and settlement partnerships.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><span className="text-brand-green mr-2">•</span>API integration</li>
                <li className="flex items-center"><span className="text-brand-green mr-2">•</span>Agent banking</li>
                <li className="flex items-center"><span className="text-brand-green mr-2">•</span>Settlement services</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-brand-orange transition-all">
              <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprises</h3>
              <p className="text-gray-600 mb-4">
                Embed payments into your business operations. 
                Collections, disbursements, and payroll.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><span className="text-brand-orange mr-2">•</span>Bulk payments</li>
                <li className="flex items-center"><span className="text-brand-orange mr-2">•</span>Collections API</li>
                <li className="flex items-center"><span className="text-brand-orange mr-2">•</span>Custom integrations</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-brand-green transition-all">
              <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Developers</h3>
              <p className="text-gray-600 mb-4">
                Build fintech products on our infrastructure. 
                Full sandbox, SDKs, and technical support.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><span className="text-brand-green mr-2">•</span>REST APIs</li>
                <li className="flex items-center"><span className="text-brand-green mr-2">•</span>Webhooks</li>
                <li className="flex items-center"><span className="text-brand-green mr-2">•</span>Test environment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* API Overview */}
      <section id="api" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-orange font-semibold uppercase tracking-wide text-sm">API</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Simple, Powerful APIs
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                RESTful endpoints, JSON responses, comprehensive documentation. 
                Get up and running in hours, not weeks.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Create wallets and virtual accounts</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Initiate transfers to any bank</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Process bill payments</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Receive real-time webhooks</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 text-sm overflow-x-auto">
              <pre className="text-green-400 font-mono"><code>{`// Create Virtual Account
POST /api/v1/accounts
{
  "customer_id": "cust_123",
  "bvn": "12345678901"
}

// Webhook: Payment Received
{
  "event": "payment.received",
  "data": {
    "account": "1234567890",
    "amount": 50000,
    "sender": "John Doe",
    "reference": "TRF/XYZ123"
  }
}`}</code></pre>
            </div>
          </div>
        </div>
      </section>

      {/* Settlement */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Settlement Options
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Instant</h3>
              <p className="text-gray-600">
                On-demand withdrawal to your bank account. Available 24/7.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">T+0</h3>
              <p className="text-gray-600">
                Same-day automatic settlement for transactions before 3 PM.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scheduled</h3>
              <p className="text-gray-600">
                Configure daily, weekly, or custom settlement schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Compliance & Security
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We operate within Nigerian regulatory frameworks with licensed partners. 
                Your integration inherits our compliance infrastructure.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900">CBN Aligned</p>
                  <p className="text-gray-600 text-sm">Regulatory compliance</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900">BVN/NIN</p>
                  <p className="text-gray-600 text-sm">Identity verification</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900">Encrypted</p>
                  <p className="text-gray-600 text-sm">TLS 1.3, AES-256</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900">Audited</p>
                  <p className="text-gray-600 text-sm">Regular security reviews</p>
                </div>
              </div>
            </div>
            <div className="bg-brand-green rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Integrate?</h3>
              <p className="text-green-100 mb-6">
                Our partnership team will walk you through technical requirements, 
                pricing, and timeline.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-orange-dark transition-colors"
              >
                Contact Partnership Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
