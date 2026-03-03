import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - XpderGlobal',
  description: 'The story of XpderGlobal. From Lagos 2020 to 15+ states today.',
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
              We started with a simple belief: every Nigerian deserves access 
              to modern financial services, no matter where they live.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                In 2020, Lagos was buzzing with fintech innovation — apps, cards, 
                instant transfers. But just a few hours away in Ilesa and Ogbomoso, 
                traders were still doing business the old way.
              </p>
              <p>
                Fabric sellers would pack cash into bags, board overnight buses to 
                Lagos, pay their suppliers in person, and ride back. Risky. Exhausting. 
                Expensive. And for what? Because the banks didn&apos;t reach them, and 
                the fintech apps assumed everyone had smartphones and stable internet.
              </p>
              <p className="font-semibold text-gray-900">
                We knew there had to be a better way.
              </p>
              <p>
                XpderGlobal was born from that frustration. We built rails — payment 
                rails that work with USSD, that work offline, that work through 
                human agents in local markets. Rails that a fabric seller in Ilesa 
                can use to settle a Lagos supplier without leaving her shop.
              </p>
              <p>
                We started in the Southwest — Lagos, Ogun, Oyo, Osun. We grew through 
                the South-South and are now pushing North. Our mission hasn&apos;t changed: 
                bring the financial system to the people, not the other way around.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Journey
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-brand-green/20"></div>
              
              {/* Timeline items */}
              <div className="space-y-8">
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">20</span>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900">2020 — The Beginning</h3>
                    <p className="text-gray-600 mt-2">
                      Founded in Lagos. First agent network in Satellite Town. 
                      Proof of concept with fabric traders.
                    </p>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">21</span>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900">2021 — Southwest Expansion</h3>
                    <p className="text-gray-600 mt-2">
                      Expanded to Ogun, Oyo, and Osun. Partnered with Providus Bank 
                      for virtual accounts. 5,000 wallets issued.
                    </p>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">22</span>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900">2022 — Bill Payments Launch</h3>
                    <p className="text-gray-600 mt-2">
                      Integrated Paga for bill payments. Launched financial literacy 
                      programs. Reached 500 agents.
                    </p>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">23</span>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900">2023 — South-South Entry</h3>
                    <p className="text-gray-600 mt-2">
                      Expanded to Edo, Delta, Rivers. Launched cooperative programs. 
                      Women Traders initiative began.
                    </p>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">24</span>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900">2024 — North Central Push</h3>
                    <p className="text-gray-600 mt-2">
                      Entered Kwara, Kogi, Niger. Crossed 30,000 wallets. 
                      Launched mobile classroom program.
                    </p>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">26</span>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900">2026 — Today</h3>
                    <p className="text-gray-600 mt-2">
                      15+ states. 50,000+ wallets. 2,500+ agents. Pushing toward 
                      Abuja, Kaduna, and Kano.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Locations
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lagos HQ</h3>
              <p className="text-gray-600">
                Plot 6, House B<br />
                Bank Road, Satellite Town<br />
                Lagos, Nigeria
              </p>
              <p className="text-sm text-gray-500 mt-4">Corporate headquarters & operations</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ibadan Support Center</h3>
              <p className="text-gray-600">
                Customer support hub<br />
                Agent training facility<br />
                Oyo State
              </p>
              <p className="text-sm text-gray-500 mt-4">Call center & training</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ilorin Field Office</h3>
              <p className="text-gray-600">
                North Central operations<br />
                Agent network management<br />
                Kwara State
              </p>
              <p className="text-sm text-gray-500 mt-4">Regional expansion hub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-brand-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
            What We Believe
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Trust</h3>
              <p className="text-green-100">
                Our agents are trusted community members. We build relationships, not just transactions.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2">Inclusion</h3>
              <p className="text-green-100">
                Financial services should reach everyone, regardless of location, education, or income.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-2">Simplicity</h3>
              <p className="text-green-100">
                Complex problems, simple solutions. Our products work for people, not the other way around.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-green-100">
                We do what we say. Full compliance, transparent fees, honest communication.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
