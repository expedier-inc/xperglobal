import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Communities - XpderGlobal',
  description: 'Bringing financial services to communities across Nigeria. Find agents, join programs, access services.',
};

export default function Communities() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-green to-brand-green-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Financial Services For Your Community
            </h1>
            <p className="text-xl text-green-100">
              We believe everyone deserves access to modern financial tools — 
              no matter where they live. Find an agent near you or bring 
              XpderGlobal to your community.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Where We Operate
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Started in Lagos in 2020, now serving communities across 15+ states.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Southern States */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-brand-green rounded-full mr-3"></span>
                Established Presence (South)
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {['Lagos', 'Ogun', 'Oyo', 'Osun', 'Ondo', 'Ekiti', 'Edo', 'Delta'].map((state) => (
                  <div key={state} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-brand-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {state}
                  </div>
                ))}
              </div>
            </div>

            {/* Growing North */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-brand-orange rounded-full mr-3"></span>
                Expanding (North & Central)
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {['Kwara', 'Kogi', 'Abuja FCT', 'Nasarawa', 'Plateau', 'Kaduna', 'Kano', 'Niger'].map((state) => (
                  <div key={state} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-brand-orange mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {state}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">Don&apos;t see your state? We&apos;re growing fast.</p>
            <Link
              href="/contact"
              className="text-brand-green font-semibold hover:underline"
            >
              Request XpderGlobal in your area →
            </Link>
          </div>
        </div>
      </section>

      {/* Regional Programs */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Regional Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored initiatives for different regions and their unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Southwest Traders Initiative</h3>
              <p className="text-gray-600 mb-4">
                Supporting Yoruba market traders with payment rails to suppliers 
                across Lagos, Ibadan, and Benin corridors.
              </p>
              <p className="text-sm text-brand-green font-medium">5,000+ traders enrolled</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Niger Delta Cooperatives</h3>
              <p className="text-gray-600 mb-4">
                Working with fishing and farming cooperatives in Delta, Rivers, 
                and Bayelsa for group savings and payments.
              </p>
              <p className="text-sm text-brand-green font-medium">120+ cooperatives</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">North Central Expansion</h3>
              <p className="text-gray-600 mb-4">
                Launching agent networks in Kwara, Kogi, and Niger State to 
                connect rural communities to financial services.
              </p>
              <p className="text-sm text-brand-orange font-medium">Now recruiting agents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Stories From Our Community
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 italic mb-4">
                &quot;Before XpderGlobal, I had to travel to Lagos every week to pay 
                my suppliers. Now I settle accounts from my shop in Ilesa. 
                I save money and time.&quot;
              </p>
              <div>
                <p className="font-semibold text-gray-900">Mama Tolu</p>
                <p className="text-sm text-gray-500">Fabric Trader, Ilesa</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 italic mb-4">
                &quot;Our cooperative of 50 farmers can now receive payments from 
                buyers across Nigeria. We don&apos;t need to carry cash anymore.&quot;
              </p>
              <div>
                <p className="font-semibold text-gray-900">Chief Okonkwo</p>
                <p className="text-sm text-gray-500">Cooperative Chairman, Benin</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 italic mb-4">
                &quot;As an agent, I help my community access banking services. 
                People trust me, and XpderGlobal gives me the tools to serve them.&quot;
              </p>
              <div>
                <p className="font-semibold text-gray-900">Adamu Ibrahim</p>
                <p className="text-sm text-gray-500">Agent, Ilorin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become an Agent */}
      <section className="py-16 lg:py-24 bg-brand-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Become an Agent
              </h2>
              <p className="text-xl text-green-100 mb-6">
                Bring financial services to your community and earn commissions 
                on every transaction. We provide training, tools, and ongoing support.
              </p>
              <ul className="space-y-3 text-green-100">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-brand-orange mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Free training and certification
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-brand-orange mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  POS device and marketing materials
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-brand-orange mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Competitive commission structure
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-brand-orange mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 support hotline
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Agent Requirements</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li>• Valid government ID (NIN, Voter&apos;s Card)</li>
                <li>• Smartphone with internet access</li>
                <li>• Fixed location (shop, kiosk, or home)</li>
                <li>• Minimum float of ₦50,000</li>
                <li>• Clean background check</li>
              </ul>
              <Link
                href="/contact"
                className="block text-center bg-brand-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-green-dark transition-colors"
              >
                Apply to Become an Agent
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
