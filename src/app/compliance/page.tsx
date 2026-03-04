import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compliance & Trust - XpderGlobal',
  description: 'Our commitment to regulatory compliance, data security, and customer protection.',
};

export default function Compliance() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-green to-brand-green-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Compliance & Trust Center
            </h1>
            <p className="text-xl text-green-100">
              Your money, your data, your trust. We take all three seriously.
            </p>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Regulatory Alignment
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-brand-green pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Central Bank of Nigeria (CBN)</h3>
                <p className="text-gray-600">
                  We operate in full alignment with CBN guidelines for mobile money 
                  operators and payment service providers. Our KYC processes follow 
                  the tiered verification framework prescribed by the regulator.
                </p>
              </div>

              <div className="border-l-4 border-brand-orange pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed Partners</h3>
                <p className="text-gray-600">
                  We don&apos;t operate in regulatory grey areas. Our banking services 
                  are provided through licensed banking partners. Payment services 
                  are powered by Paga (licensed PSP) and other trusted payment providers.
                </p>
              </div>

              <div className="border-l-4 border-brand-green pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Agent Network Compliance</h3>
                <p className="text-gray-600">
                  Every agent in our network undergoes background verification, 
                  compliance training, and regular audits. We maintain detailed 
                  records of agent activities as required by regulation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KYC Tiers */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            KYC Verification Tiers
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-gray-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tier 1 — Basic</h3>
              <p className="text-gray-600 mb-4">Phone number + basic info</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Single transaction limit: ₦50,000</li>
                <li>• Daily limit: ₦300,000</li>
                <li>• Balance limit: ₦300,000</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-brand-green">
              <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tier 2 — Standard</h3>
              <p className="text-gray-600 mb-4">ID verification</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Single transaction limit: ₦200,000</li>
                <li>• Daily limit: ₦500,000</li>
                <li>• Balance limit: ₦500,000</li>
              </ul>
              <p className="text-xs text-brand-green font-medium mt-4">Most common tier</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tier 3 — Enhanced</h3>
              <p className="text-gray-600 mb-4">Full KYC + address verification</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Single transaction limit: ₦5,000,000</li>
                <li>• No daily limit</li>
                <li>• No balance limit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section id="trust" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Data Security
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We treat your data like we treat your money — with the highest 
                level of protection and respect.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Encryption at Rest</h4>
                    <p className="text-gray-600 text-sm">All data encrypted using AES-256</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Secure Transmission</h4>
                    <p className="text-gray-600 text-sm">TLS 1.3 for all communications</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Regular Audits</h4>
                    <p className="text-gray-600 text-sm">Annual security assessments by third parties</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Access Controls</h4>
                    <p className="text-gray-600 text-sm">Role-based access, multi-factor authentication</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Your Rights</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-brand-green mr-2">✓</span>
                  Request a copy of your data
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green mr-2">✓</span>
                  Correct inaccurate information
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green mr-2">✓</span>
                  Delete your account and data
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green mr-2">✓</span>
                  Opt out of marketing communications
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green mr-2">✓</span>
                  File a complaint with our data protection officer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Whistleblower */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Whistleblower Channel
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              If you witness fraud, misconduct, or regulatory violations by any 
              XpderGlobal employee or agent, report it confidentially. We protect 
              whistleblowers and investigate all reports.
            </p>
            <div className="bg-white rounded-xl p-8 shadow-sm inline-block">
              <p className="text-gray-600 mb-2">Report to:</p>
              <p className="text-xl font-semibold text-gray-900">compliance@xpderglobal.com</p>
              <p className="text-sm text-gray-500 mt-4">
                All reports are reviewed by our Compliance Officer within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Compliance */}
      <section className="py-16 bg-brand-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Questions About Compliance?
          </h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            Our compliance team is available to answer questions from customers, 
            partners, and regulators.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-orange-dark transition-colors"
          >
            Contact Compliance Team
          </Link>
        </div>
      </section>
    </>
  );
}
