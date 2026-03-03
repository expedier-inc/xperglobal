import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Solutions - XpderGlobal',
  description: 'Payment solutions, collections, and financial services for businesses across Nigeria.',
};

export default function Business() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-brand-green-dark text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-brand-green rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-brand-orange rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-brand-green/20 text-brand-green-light px-4 py-1 rounded-full text-sm font-medium mb-6">
                For Businesses
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Collect Payments. Pay Suppliers. Grow Faster.
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Whether you&apos;re a market trader or a growing enterprise, we give you 
                the tools to manage money flow without friction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/partners"
                  className="bg-brand-orange text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-orange-dark transition-colors text-center text-lg"
                >
                  Partner With Us
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Today&apos;s Collections</span>
                    <span className="text-brand-green font-bold">+₦2.4M</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div className="h-2 bg-gradient-to-r from-brand-green to-brand-orange rounded-full w-3/4"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4">
                      <p className="text-2xl font-bold">847</p>
                      <p className="text-gray-400 text-sm">Transactions</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-gray-400 text-sm">Payouts</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Settlement Complete</p>
                      <p className="text-gray-400 text-sm">₦1.8M sent to GTBank ***4521</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Built for How Nigerian Businesses Actually Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From market traders to enterprises, we understand your payment challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-brand-green transition-all">
              <div className="text-4xl mb-6">🏪</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Traders & Merchants</h3>
              <p className="text-gray-600 mb-6">
                Receive payments from customers, pay suppliers in other cities, 
                manage daily cash flow — all without carrying cash.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="text-brand-green mr-2">✓</span>
                  Instant collections via transfer
                </li>
                <li className="flex items-center">
                  <span className="text-brand-green mr-2">✓</span>
                  Pay suppliers directly
                </li>
                <li className="flex items-center">
                  <span className="text-brand-green mr-2">✓</span>
                  Track all transactions
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-brand-green transition-all">
              <div className="text-4xl mb-6">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cooperatives & Associations</h3>
              <p className="text-gray-600 mb-6">
                Collect member dues, manage group savings, distribute funds — 
                with full transparency for all members.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="text-brand-green mr-2">✓</span>
                  Group wallet management
                </li>
                <li className="flex items-center">
                  <span className="text-brand-green mr-2">✓</span>
                  Automated collections
                </li>
                <li className="flex items-center">
                  <span className="text-brand-green mr-2">✓</span>
                  Member-level reporting
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-brand-green transition-all">
              <div className="text-4xl mb-6">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">SMEs & Enterprises</h3>
              <p className="text-gray-600 mb-6">
                Integrate payments into your operations, automate collections, 
                and get real-time settlement.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="text-brand-green mr-2">✓</span>
                  API integration
                </li>
                <li className="flex items-center">
                  <span className="text-brand-green mr-2">✓</span>
                  Bulk disbursements
                </li>
                <li className="flex items-center">
                  <span className="text-brand-green mr-2">✓</span>
                  Same-day settlement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Collections Made Simple
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Give customers a dedicated account number for your business. 
                Every payment hits your wallet instantly. No more chasing transfers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dedicated Account Numbers</h4>
                    <p className="text-gray-600">One for your business, or unique ones per customer/invoice</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Instant Notifications</h4>
                    <p className="text-gray-600">Know the moment money hits your account</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Auto-Reconciliation</h4>
                    <p className="text-gray-600">Match payments to invoices automatically</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="border-b border-gray-100 pb-4 mb-4">
                <p className="text-sm text-gray-500">Incoming Payment</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Amount</span>
                  <span className="text-2xl font-bold text-brand-green">₦125,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">From</span>
                  <span className="font-medium">Chidi Okonkwo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Reference</span>
                  <span className="font-mono text-sm">INV-2026-0847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Status</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Settled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payouts */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <p className="text-sm text-gray-400 mb-4">Bulk Disbursement</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                    <span>Supplier - Lagos Textiles</span>
                    <span className="font-mono">₦450,000</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                    <span>Supplier - Kano Fabrics</span>
                    <span className="font-mono">₦280,000</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                    <span>Logistics - ABC Transport</span>
                    <span className="font-mono">₦75,000</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex justify-between">
                  <span className="text-gray-400">Total</span>
                  <span className="text-xl font-bold text-brand-orange">₦805,000</span>
                </div>
                <button className="w-full mt-4 bg-brand-green text-white py-3 rounded-lg font-semibold">
                  Send All →
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Pay Suppliers in Seconds
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                No more bank queues. No more delays. Pay your suppliers, staff, 
                or vendors instantly from your dashboard.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mr-3"></span>
                  Single payments or bulk disbursements
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mr-3"></span>
                  Pay to any Nigerian bank account
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mr-3"></span>
                  Schedule recurring payments
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mr-3"></span>
                  Full audit trail for every naira
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Settlement */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get Your Money When You Need It
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Choose how and when you want to receive your funds.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Instant</h3>
              <p className="text-gray-600">
                Withdraw to your bank account any time. Arrives in minutes.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day</h3>
              <p className="text-gray-600">
                Automatic settlement to your bank by end of business day.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scheduled</h3>
              <p className="text-gray-600">
                Set up weekly or monthly auto-settlement to match your cash flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-green to-brand-green-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Streamline Your Business Payments?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Talk to our team about how XpderGlobal can work for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/partners"
              className="bg-brand-orange text-white px-10 py-4 rounded-xl font-semibold hover:bg-brand-orange-dark transition-colors text-lg"
            >
              Become a Partner
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-brand-green transition-colors text-lg"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
