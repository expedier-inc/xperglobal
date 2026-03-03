import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Impact - XpderGlobal',
  description: 'Financial literacy, community programs, and measurable impact across Nigeria.',
};

export default function Impact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-green to-brand-green-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Impact & Financial Literacy
            </h1>
            <p className="text-xl text-green-100">
              We measure success not just in transactions, but in lives changed. 
              Financial inclusion is about education, empowerment, and opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              2020 – 2026: Our Journey So Far
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-brand-green mb-2">15+</p>
              <p className="text-gray-600">States with active operations</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-brand-orange mb-2">50K+</p>
              <p className="text-gray-600">Wallets issued to Nigerians</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-brand-green mb-2">12K+</p>
              <p className="text-gray-600">Financial literacy workshop attendees</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-brand-orange mb-2">2,500+</p>
              <p className="text-gray-600">Active agents across Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Literacy */}
      <section id="literacy" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-orange font-semibold uppercase tracking-wide text-sm">Education</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Financial Literacy Programs
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Access to financial services means nothing without understanding. 
                Our programs teach practical money skills to communities that 
                traditional education often overlooks.
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">📚 Curriculum Topics</h4>
                  <ul className="grid grid-cols-2 gap-2 text-gray-600 text-sm">
                    <li>• Savings circles (Ajo/Esusu)</li>
                    <li>• Digital bookkeeping</li>
                    <li>• Safe remittance practices</li>
                    <li>• Fraud awareness</li>
                    <li>• Business record-keeping</li>
                    <li>• Mobile money basics</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Program Formats</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">🏫</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Workshops</h4>
                    <p className="text-gray-600 text-sm">In-person sessions at markets, churches, and community centers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">📻</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Radio</h4>
                    <p className="text-gray-600 text-sm">Weekly programs in Yoruba, Hausa, and Pidgin</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mobile Classrooms</h4>
                    <p className="text-gray-600 text-sm">Vans equipped to bring training to remote villages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Programs */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Community Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond our core business, we invest in the communities we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl mb-4">👩‍💼</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Women Traders Program</h3>
              <p className="text-gray-600 mb-4">
                Supporting women-led businesses with training, mentorship, and 
                access to working capital. 3,000+ women enrolled since 2021.
              </p>
              <p className="text-sm text-brand-green font-medium">Active in 8 states</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">STEM Scholarships</h3>
              <p className="text-gray-600 mb-4">
                Annual scholarships for students from underserved communities 
                pursuing technology and finance education.
              </p>
              <p className="text-sm text-brand-green font-medium">50 scholars annually</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl mb-4">🌾</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Farmers Cooperative Support</h3>
              <p className="text-gray-600 mb-4">
                Helping agricultural cooperatives digitize payments, manage 
                group savings, and access markets.
              </p>
              <p className="text-sm text-brand-green font-medium">120+ cooperatives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Free Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Download our financial literacy guides — available in English, 
            Yoruba, Hausa, and Pidgin.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Savings Circle Guide', desc: 'How to run an Ajo/Esusu', icon: '💰' },
              { title: 'Digital Money Safety', desc: 'Protect yourself from fraud', icon: '🔒' },
              { title: 'Business Bookkeeping', desc: 'Simple records for traders', icon: '📊' },
              { title: 'Mobile Money 101', desc: 'Getting started guide', icon: '📱' },
            ].map((resource) => (
              <div key={resource.title} className="bg-white rounded-xl p-6 shadow-sm">
                <span className="text-3xl">{resource.icon}</span>
                <h3 className="font-semibold text-gray-900 mt-4 mb-1">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.desc}</p>
                <button className="text-brand-green font-medium hover:underline text-sm">
                  Download PDF →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Report CTA */}
      <section className="py-16 bg-brand-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Read Our Impact Report
          </h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            Our annual report details every community reached, every workshop 
            held, and every life changed. Full transparency.
          </p>
          <button className="inline-block bg-brand-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-orange-dark transition-colors">
            Download 2025 Report
          </button>
        </div>
      </section>
    </>
  );
}
