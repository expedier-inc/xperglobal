import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - XpderGlobal',
  description: 'Get in touch with XpderGlobal. We\'re here to help.',
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-green to-brand-green-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-green-100">
              Questions? Partnerships? Support? We&apos;re here for you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info - Big & Clear */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Phone */}
            <div className="text-center md:text-left">
              <div className="w-20 h-20 bg-brand-green/10 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-6">
                <svg className="w-10 h-10 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Call Us</h2>
              <a 
                href="tel:+2348064197619" 
                className="text-4xl lg:text-5xl font-bold text-brand-green hover:text-brand-green-dark transition-colors block mb-4"
              >
                0806 419 7619
              </a>
              <p className="text-gray-600">Mon-Fri: 8AM - 6PM WAT</p>
              <p className="text-gray-600">Saturday: 9AM - 2PM WAT</p>
            </div>

            {/* Email */}
            <div className="text-center md:text-left">
              <div className="w-20 h-20 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-6">
                <svg className="w-10 h-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Email Us</h2>
              <a 
                href="mailto:expedier.inc@gmail.com" 
                className="text-3xl lg:text-4xl font-bold text-brand-orange hover:text-brand-orange-dark transition-colors block break-all mb-4"
              >
                expedier.inc@gmail.com
              </a>
              <p className="text-gray-600">We respond within 24 hours</p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="mt-16 text-center">
            <a 
              href="https://wa.me/2348064197619"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#1da851] transition-colors"
            >
              <svg className="w-7 h-7 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Message Us on WhatsApp
            </a>
            <p className="text-gray-500 text-sm mt-3">Quick questions? Chat with us directly</p>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Visit Our Office</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm inline-block">
            <p className="text-xl font-semibold text-gray-900 mb-2">XPDER GLOBAL LIMITED</p>
            <p className="text-lg text-gray-600">Plot 6, House B, Bank Road</p>
            <p className="text-lg text-gray-600">Satellite Town, Lagos</p>
            <p className="text-lg text-gray-600">Nigeria</p>
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-2xl mx-auto text-left">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
              <p className="text-gray-600">Monday - Friday: 8AM - 6PM</p>
              <p className="text-gray-600">Saturday: 9AM - 2PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">For Partners</h3>
              <p className="text-gray-600">Partnership inquiries and API integration support</p>
              <Link href="/partners" className="text-brand-green font-medium hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
