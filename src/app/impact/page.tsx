import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Impact - XpderGlobal',
  description: 'Financial literacy and community programs across Nigeria.',
};

export default function Impact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-green to-brand-green-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Impact
            </h1>
            <p className="text-xl text-green-100">
              Financial inclusion isn&apos;t just about access — it&apos;s about understanding. 
              We invest in education and community programs alongside our services.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Growing Across Nigeria
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Since 2020, we&apos;ve expanded from Lagos to serve communities across 
              multiple regions of Nigeria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gray-50 rounded-2xl p-8">
              <p className="text-4xl font-bold text-brand-green mb-2">Expanding</p>
              <p className="text-gray-600">Geographic reach across regions</p>
            </div>
            <div className="text-center bg-gray-50 rounded-2xl p-8">
              <p className="text-4xl font-bold text-brand-orange mb-2">Thousands</p>
              <p className="text-gray-600">Active wallet users</p>
            </div>
            <div className="text-center bg-gray-50 rounded-2xl p-8">
              <p className="text-4xl font-bold text-brand-green mb-2">Growing</p>
              <p className="text-gray-600">Financial literacy reach</p>
            </div>
            <div className="text-center bg-gray-50 rounded-2xl p-8">
              <p className="text-4xl font-bold text-brand-orange mb-2">Nationwide</p>
              <p className="text-gray-600">Agent network presence</p>
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
                Access to financial services is only valuable when people understand 
                how to use them. Our education initiatives reach communities that 
                traditional financial education often misses.
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Topics We Cover</h4>
                  <ul className="grid grid-cols-2 gap-2 text-gray-600 text-sm">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-brand-green rounded-full mr-2"></span>
                      Savings circles (Ajo/Esusu)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-brand-green rounded-full mr-2"></span>
                      Digital bookkeeping
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-brand-green rounded-full mr-2"></span>
                      Safe remittance practices
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-brand-green rounded-full mr-2"></span>
                      Fraud awareness
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-brand-green rounded-full mr-2"></span>
                      Business record-keeping
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-brand-green rounded-full mr-2"></span>
                      Mobile money basics
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">How We Reach People</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">🏫</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Sessions</h4>
                    <p className="text-gray-600 text-sm">In-person training at markets, churches, and community centers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">📻</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Radio Programs</h4>
                    <p className="text-gray-600 text-sm">Broadcasts in Yoruba, Hausa, and Pidgin on local stations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">👥</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Agent Training</h4>
                    <p className="text-gray-600 text-sm">Our agents share knowledge daily in their communities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Programs */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Community Initiatives
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in giving back to the communities we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl mb-4">👩‍💼</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Women in Trade</h3>
              <p className="text-gray-600">
                Supporting women traders with financial tools and business guidance. 
                Many of our earliest users were market women who inspired our mission.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Youth Programs</h3>
              <p className="text-gray-600">
                Teaching young Nigerians about digital finance, savings habits, 
                and responsible money management.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl mb-4">🌾</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cooperative Support</h3>
              <p className="text-gray-600">
                Helping agricultural and trade cooperatives digitize their operations 
                and manage group finances transparently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Free Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Download our financial literacy guides — available in English, Yoruba, 
            Hausa, and Pidgin.
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

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Partner on Community Programs?
          </h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            NGOs, government agencies, and community organizations — let&apos;s work together 
            to expand financial literacy across Nigeria.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-orange-dark transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
