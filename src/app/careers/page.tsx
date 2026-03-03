import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Future Careers - XpderGlobal',
  description: 'Join the rural fintech movement. Future opportunities at XpderGlobal.',
};

export default function Careers() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-green to-brand-green-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Future Careers
            </h1>
            <p className="text-xl text-green-100">
              We&apos;re not hiring right now, but we&apos;re always looking for talented 
              people who want to change financial inclusion in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why XpderGlobal?
            </h2>
            <p className="text-lg text-gray-600">
              We&apos;re building something meaningful — rails that help a fabric 
              seller in Ilesa pay her Lagos supplier without riding an overnight bus. 
              That&apos;s the kind of problem we solve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real Impact</h3>
              <p className="text-gray-600">
                Your work directly affects thousands of Nigerians who&apos;ve never 
                had access to modern financial services.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ground-Up Innovation</h3>
              <p className="text-gray-600">
                We don&apos;t copy solutions from Silicon Valley. We build for 
                Nigeria&apos;s reality — USSD, offline-first, agent networks.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community First</h3>
              <p className="text-gray-600">
                We work with communities, not above them. Our agents are trusted 
                neighbors, not faceless kiosks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles We'll Hire */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Areas We&apos;ll Grow
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              When we&apos;re ready to expand, these are the areas we&apos;ll be hiring in.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Engineering</h3>
              <p className="text-gray-600 text-sm">
                Backend, mobile, infrastructure — building rails that work everywhere
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Field Operations</h3>
              <p className="text-gray-600 text-sm">
                Agent network management, regional expansion, community relations
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Education Fellows</h3>
              <p className="text-gray-600 text-sm">
                Financial literacy trainers, curriculum developers, community educators
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Compliance & Risk</h3>
              <p className="text-gray-600 text-sm">
                Regulatory affairs, AML/KYC, fraud prevention, audit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Talent Pool */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Join Our Talent Pipeline
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              No open roles right now, but drop us a line. When we&apos;re ready 
              to grow, we&apos;ll reach out to people who&apos;ve already shown interest.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <p className="text-gray-600 mb-4">Send your CV and a short note about why you&apos;re interested to:</p>
              <a 
                href="mailto:careers@xpderglobal.com" 
                className="text-2xl font-bold text-brand-green hover:underline"
              >
                careers@xpderglobal.com
              </a>
              <p className="text-sm text-gray-500 mt-4">
                Subject line: &quot;Future Hire — [Your Area of Interest]&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Opportunity */}
      <section className="py-16 bg-brand-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Earn Now?
          </h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            While we&apos;re not hiring for full-time roles, we&apos;re always looking 
            for new agents. Earn commissions by bringing financial services to your community.
          </p>
          <a
            href="/communities"
            className="inline-block bg-brand-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-orange-dark transition-colors"
          >
            Become an Agent
          </a>
        </div>
      </section>
    </>
  );
}
