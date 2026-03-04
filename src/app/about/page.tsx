import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - XpderGlobal',
  description: 'XpderGlobal - Digital financial services for Nigerians everywhere since 2020.',
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-green to-brand-green-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About XpderGlobal
            </h1>
            <p className="text-xl text-green-100">
              We&apos;re building the financial infrastructure that works for everyone — 
              from Lagos to every corner of Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-orange font-semibold uppercase tracking-wide text-sm">Our Mission</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Making Digital Payments Work for Nigeria
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nigeria has over 200 million people and one of Africa&apos;s most dynamic 
                economies. But traditional banking infrastructure doesn&apos;t reach everyone. 
                Mobile money adoption is still growing. Millions of Nigerians are 
                underserved by the current financial system.
              </p>
              <p className="text-lg text-gray-600">
                We built XpderGlobal to change that. Our platform combines digital 
                wallets, instant transfers, and a physical agent network to deliver 
                financial services that actually work — in cities, towns, and 
                everywhere in between.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fast</h4>
                    <p className="text-gray-600">Instant transfers, real-time notifications</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Secure</h4>
                    <p className="text-gray-600">Bank-grade security, CBN compliance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Accessible</h4>
                    <p className="text-gray-600">Works on any phone, agents nationwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From a Lagos startup to a growing fintech serving Nigerians across multiple states.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-brand-green/20"></div>
              
              {/* Timeline items */}
              <div className="space-y-8">
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">20</span>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900">2020 — Founded</h3>
                    <p className="text-gray-600 mt-2">
                      Launched in Lagos with a focus on making digital payments 
                      accessible to traders and small businesses.
                    </p>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">21</span>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900">2021 — Bank Partnership</h3>
                    <p className="text-gray-600 mt-2">
                      Partnered with Providus Bank for virtual accounts. 
                      Expanded operations across Southwest Nigeria.
                    </p>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">22</span>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900">2022 — Bill Payments</h3>
                    <p className="text-gray-600 mt-2">
                      Integrated Paga for comprehensive bill payments. 
                      Grew agent network to serve more communities.
                    </p>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">23</span>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900">2023 — Regional Growth</h3>
                    <p className="text-gray-600 mt-2">
                      Expanded into South-South and South-East regions. 
                      Launched business payment solutions.
                    </p>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">Now</span>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-brand-orange">
                    <h3 className="font-bold text-gray-900">Today — Nationwide Expansion</h3>
                    <p className="text-gray-600 mt-2">
                      Operating across multiple states with thousands of users. 
                      Continuing to build Nigeria&apos;s financial infrastructure.
                    </p>
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
              Our Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work with licensed, regulated partners to deliver secure financial services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Providus Bank</h3>
              <p className="text-gray-600 text-sm">
                Virtual accounts and banking infrastructure
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Paga</h3>
              <p className="text-gray-600 text-sm">
                Bill payments and merchant services
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed Partners</h3>
              <p className="text-gray-600 text-sm">
                Regulated FX and payment providers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Headquarters
            </h2>
          </div>

          <div className="max-w-md mx-auto bg-white rounded-xl p-8 shadow-sm text-center">
            <div className="w-14 h-14 bg-brand-green rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Lagos Office</h3>
            <p className="text-gray-600">
              XPDER GLOBAL LIMITED<br />
              Plot 6, House B, Bank Road<br />
              Satellite Town, Lagos<br />
              Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-brand-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
            What Drives Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Speed</h3>
              <p className="text-green-100">
                Transactions should be instant. We build for real-time.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Security</h3>
              <p className="text-green-100">
                Your money is safe. No compromises on protection.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2">Access</h3>
              <p className="text-green-100">
                Financial services should work for everyone, everywhere.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💯</div>
              <h3 className="text-xl font-bold mb-2">Simplicity</h3>
              <p className="text-green-100">
                Complex problems need simple solutions. No confusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Modern Banking?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Open your free account today and see why Nigerians are choosing XpderGlobal.
          </p>
          <Link
            href="/open-wallet"
            className="inline-block bg-brand-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-orange-dark transition-colors"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </>
  );
}
