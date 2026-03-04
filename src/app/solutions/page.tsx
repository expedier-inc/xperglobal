import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Solutions - XpderGlobal',
  description: 'Digital wallets, virtual accounts, bill payments, and business payment solutions.',
};

export default function Solutions() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-brand-green-dark text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-brand-green rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-brand-orange rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-green/20 text-brand-green-light px-4 py-1 rounded-full text-sm font-medium mb-6">
              Our Products
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Simple Financial Tools <br />
              <span className="text-brand-orange">For Everyday Nigerians</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Digital wallets, instant transfers, bill payments, and business solutions — 
              everything you need to manage your money and grow your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/open-wallet"
                className="bg-brand-orange text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-orange-dark transition-colors"
              >
                Open a Wallet
              </Link>
              <Link
                href="/business"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                Business Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Wallets */}
      <section id="wallet" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-orange font-semibold uppercase tracking-wide text-sm">Digital Wallets</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Your Money, Always Accessible
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Open an account in minutes. Get a dedicated account number. 
                Send and receive money instantly — no bank visits required.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Instant account opening</strong>
                    <p className="text-gray-600">Sign up with just your phone number</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Dedicated account number</strong>
                    <p className="text-gray-600">Receive transfers from any Nigerian bank</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Multi-channel access</strong>
                    <p className="text-gray-600">App, USSD, or agent — your choice</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-500 text-sm">Wallet Balance</span>
                  <span className="text-brand-green text-sm font-medium">● Active</span>
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-4">₦ 250,000.00</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500 mb-1">Account Number</p>
                  <p className="font-mono text-gray-900">1234567890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Accounts */}
      <section id="accounts" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-500">Incoming</p>
                      <p className="font-semibold">₦150,000</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Settled</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-500">Incoming</p>
                      <p className="font-semibold">₦75,000</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Settled</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-500">Incoming</p>
                      <p className="font-semibold">₦320,000</p>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">Processing</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-brand-orange font-semibold uppercase tracking-wide text-sm">Virtual Accounts</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Bank-Grade Infrastructure
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Powered by tier one bank partners with instant notifications and seamless settlement.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-2xl font-bold text-brand-green">Instant</p>
                  <p className="text-gray-600 text-sm">Transfer notifications</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-2xl font-bold text-brand-orange">Same-day</p>
                  <p className="text-gray-600 text-sm">Settlement available</p>
                </div>
              </div>
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
              Pay Everything, Instantly
            </h2>
            <p className="text-lg text-gray-600">
              Powered by Paga. All major billers, one platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Airtime & Data', icon: '📱', providers: 'MTN, Glo, Airtel, 9mobile' },
              { name: 'Electricity', icon: '💡', providers: 'All DISCOs nationwide' },
              { name: 'Cable TV', icon: '📺', providers: 'DSTV, GOtv, Startimes' },
              { name: 'Internet', icon: '🌐', providers: 'Spectranet, Smile, Swift' },
              { name: 'Education', icon: '🎓', providers: 'School fees, JAMB, WAEC' },
              { name: 'Government', icon: '🏛️', providers: 'Taxes, levies, permits' },
            ].map((item) => (
              <div key={item.name} className="bg-gray-50 rounded-xl p-6">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-1">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.providers}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Payments */}
      <section id="business" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-orange font-semibold uppercase tracking-wide text-sm">For Business</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Collections & Payouts
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Accept payments from customers. Pay suppliers and staff. 
                Full visibility, instant settlement, complete control.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-green rounded-full mr-3"></span>
                  Dedicated collection accounts
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-green rounded-full mr-3"></span>
                  Bulk disbursements
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-green rounded-full mr-3"></span>
                  Real-time webhooks
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-green rounded-full mr-3"></span>
                  Transaction reconciliation
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/business"
                  className="inline-block bg-brand-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-green-dark transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <p className="text-sm text-gray-400 mb-4">Today&apos;s Activity</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-2xl font-bold">₦4.2M</p>
                  <p className="text-gray-400 text-sm">Collections</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-2xl font-bold">₦1.8M</p>
                  <p className="text-gray-400 text-sm">Payouts</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Transactions</span>
                  <span>847</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Success rate</span>
                  <span className="text-brand-green">99.2%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-green to-brand-green-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Open your account in minutes or talk to our team about business solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/open-wallet"
              className="bg-brand-orange text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-orange-dark transition-colors"
            >
              Open Free Account
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-brand-green transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
