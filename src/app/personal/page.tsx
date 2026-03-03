import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personal Banking - XpderGlobal',
  description: 'Digital wallets, payments, and financial services for individuals across Nigeria.',
};

export default function Personal() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-brand-green-dark text-white py-20 lg:py-28 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-brand-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-green rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-brand-orange/20 text-brand-orange px-4 py-1 rounded-full text-sm font-medium mb-6">
                For Individuals
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Your Money, Your Way — Anywhere in Nigeria
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Send money, pay bills, receive payments — all from your phone. 
                No bank branch visits. No hidden fees. Just simple, secure financial services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/open-wallet"
                  className="bg-brand-orange text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-orange-dark transition-colors text-center text-lg"
                >
                  Open Your Wallet →
                </Link>
                <Link
                  href="/solutions"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              {/* Fintech visual - card/phone mockup */}
              <div className="relative">
                <div className="bg-gradient-to-br from-brand-green to-brand-green-dark rounded-3xl p-8 shadow-2xl transform rotate-3">
                  <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-gray-500 text-sm">Available Balance</span>
                      <span className="text-brand-green text-sm font-medium">●  Active</span>
                    </div>
                    <p className="text-4xl font-bold text-gray-900 mb-6">₦ 847,500<span className="text-lg text-gray-400">.00</span></p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-2">
                          <svg className="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </div>
                        <span className="text-xs text-gray-600">Send</span>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-2">
                          <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                        <span className="text-xs text-gray-600">Top Up</span>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-2">
                          <svg className="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <span className="text-xs text-gray-600">Bills</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-xs text-gray-500 mb-1">Account Number</p>
                      <p className="font-mono text-gray-900">1234567890 • Providus</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in One Wallet
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No more multiple apps. No more confusion. Just one wallet that does it all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-green rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Send Money Instantly</h3>
              <p className="text-gray-600">
                Transfer to any bank account in Nigeria. Arrives in seconds, not days.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Receive Payments</h3>
              <p className="text-gray-600">
                Get your own account number. Receive money from anyone, anywhere.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-green rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pay All Your Bills</h3>
              <p className="text-gray-600">
                Electricity, airtime, data, cable TV, school fees — pay everything from one place.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Works on Any Phone</h3>
              <p className="text-gray-600">
                Smartphone or basic phone — use our app or USSD. Your choice.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-green rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Agent Support Nearby</h3>
              <p className="text-gray-600">
                Need help? Visit one of our agents in your community for cash-in, cash-out, or assistance.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bank-Level Security</h3>
              <p className="text-gray-600">
                Your money is safe. BVN-verified accounts, encrypted transactions, fraud monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Open Your Wallet in 3 Minutes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sign Up</h3>
              <p className="text-gray-600">
                Enter your phone number and basic details. That&apos;s all you need to start.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Verify</h3>
              <p className="text-gray-600">
                Link your BVN to unlock higher limits and get your dedicated account number.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Start Using</h3>
              <p className="text-gray-600">
                Fund your wallet and start sending, receiving, and paying bills instantly.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/open-wallet"
              className="inline-block bg-brand-green text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-green-dark transition-colors text-lg"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Simple, Honest Pricing
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              No hidden fees. No surprises. You see exactly what you pay.
            </p>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <p className="text-3xl font-bold text-brand-green">₦0</p>
                  <p className="text-gray-600 mt-2">Account opening</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-brand-green">₦10</p>
                  <p className="text-gray-600 mt-2">Transfers under ₦5,000</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-brand-green">₦25</p>
                  <p className="text-gray-600 mt-2">Transfers ₦5,000+</p>
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
            Ready to Take Control of Your Money?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Nigerians already using XpderGlobal for their daily financial needs.
          </p>
          <Link
            href="/open-wallet"
            className="inline-block bg-brand-orange text-white px-10 py-4 rounded-xl font-semibold hover:bg-brand-orange-dark transition-colors text-lg"
          >
            Open Your Wallet Now
          </Link>
        </div>
      </section>
    </>
  );
}
