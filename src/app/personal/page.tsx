import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personal Banking - XpderGlobal',
  description: 'Digital wallets, instant transfers, and bill payments for Nigerians everywhere.',
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
                Digital Banking for Everyone
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Send. Receive. Pay Bills. <br />
                <span className="text-brand-orange">All in One Wallet.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Open a free account in minutes. Get your own account number. 
                Transfer instantly to any bank in Nigeria. No branches. No queues. 
                Just fast, secure digital banking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/open-wallet"
                  className="bg-brand-orange text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-orange-dark transition-colors text-center text-lg"
                >
                  Open Free Account →
                </Link>
                <Link
                  href="/solutions"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  How It Works
                </Link>
              </div>
              
              {/* Trust badges */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-gray-400 text-sm mb-4">Trusted infrastructure</p>
                <div className="flex flex-wrap items-center gap-6 text-gray-400">
                  <span className="flex items-center text-sm">
                    <svg className="w-5 h-5 text-brand-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Providus Bank
                  </span>
                  <span className="flex items-center text-sm">
                    <svg className="w-5 h-5 text-brand-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    BVN Verified
                  </span>
                  <span className="flex items-center text-sm">
                    <svg className="w-5 h-5 text-brand-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    CBN Compliant
                  </span>
                </div>
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

      {/* Key Features */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in One App
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No multiple apps. No confusion. One wallet that handles all your daily financial needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-green rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Transfers</h3>
              <p className="text-gray-600">
                Send money to any bank account in Nigeria. Arrives in seconds, not hours.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Your Own Account Number</h3>
              <p className="text-gray-600">
                Get a dedicated account number. Receive money from anyone, anywhere in Nigeria.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-green rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pay All Bills</h3>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Works Everywhere</h3>
              <p className="text-gray-600">
                Use our app on any smartphone, or dial USSD from any phone. Your choice.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-green rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cash In/Out Agents</h3>
              <p className="text-gray-600">
                Deposit or withdraw cash at any of our agent locations across Nigeria.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bank-Grade Security</h3>
              <p className="text-gray-600">
                BVN verification, encrypted transactions, and 24/7 fraud monitoring.
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
              Get Started in 3 Minutes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sign Up</h3>
              <p className="text-gray-600">
                Enter your phone number and basic info. Takes less than a minute.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Verify BVN</h3>
              <p className="text-gray-600">
                Link your BVN to get your dedicated account number and higher limits.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Start Transacting</h3>
              <p className="text-gray-600">
                Fund your wallet and enjoy instant transfers, bill payments, and more.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/open-wallet"
              className="inline-block bg-brand-green text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-green-dark transition-colors text-lg"
            >
              Create Your Account
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              No hidden charges. No monthly fees. No surprises.
            </p>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-2">Free Account Opening</p>
              <p className="text-gray-600">
                Open your wallet at no cost. Only pay small fees when you transact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-green to-brand-green-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Nigerians already enjoying fast, secure digital banking.
          </p>
          <Link
            href="/open-wallet"
            className="inline-block bg-brand-orange text-white px-10 py-4 rounded-xl font-semibold hover:bg-brand-orange-dark transition-colors text-lg"
          >
            Open Your Free Account
          </Link>
        </div>
      </section>
    </>
  );
}
