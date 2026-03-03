import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  solutions: [
    { name: 'Rural Wallet Network', href: '/solutions#wallet' },
    { name: 'Virtual Accounts', href: '/solutions#accounts' },
    { name: 'Bill Payments', href: '/solutions#bills' },
    { name: 'MSME Advisory', href: '/solutions#advisory' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Impact', href: '/impact' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Future Careers', href: '/careers' },
  ],
  resources: [
    { name: 'For Communities', href: '/communities' },
    { name: 'For Partners', href: '/partners' },
    { name: 'Agent Toolkit', href: '/partners#toolkit' },
    { name: 'Financial Literacy', href: '/impact#literacy' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt="XpderGlobal"
              width={160}
              height={42}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-gray-400 mb-4 max-w-sm">
              Bridging Nigeria&apos;s financial gap since 2020. Empowering traders, 
              communities, and businesses with accessible financial services.
            </p>
            <div className="text-gray-400 text-sm">
              <p className="font-semibold text-white">XPDER GLOBAL LIMITED</p>
              <p>Plot 6, House B, Bank Road</p>
              <p>Satellite Town, Lagos</p>
              <p className="mt-2">+234 806 419 7619</p>
              <p>expedier.inc@gmail.com</p>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-brand-orange transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-brand-orange transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-brand-orange transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} XpderGlobal Limited. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/compliance" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/compliance" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link href="/compliance#trust" className="text-gray-400 hover:text-white text-sm">
              Trust Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
