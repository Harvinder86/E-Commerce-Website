import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4 flex flex-wrap justify-between">
      <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
        <h4 className="mb-4 font-semibold">ABOUT</h4>
        <ul>
          <li className="mb-2"><a href="/contact" className="text-gray-400 hover:underline">Contact Us</a></li>
          <li className="mb-2"><a href="/about" className="text-gray-400 hover:underline">About Us</a></li>
          <li className="mb-2"><a href="/careers" className="text-gray-400 hover:underline">Careers</a></li>
          <li className="mb-2"><a href="/stories" className="text-gray-400 hover:underline">Our Stories</a></li>
          <li className="mb-2"><a href="/press" className="text-gray-400 hover:underline">Press</a></li>
          <li className="mb-2"><a href="/corporate" className="text-gray-400 hover:underline">Corporate Information</a></li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
        <h4 className="mb-4 font-semibold">GROUP COMPANIES</h4>
        <ul>
          <li className="mb-2"><a href="https://www.myntra.com" className="text-gray-400 hover:underline">Myntra</a></li>
          <li className="mb-2"><a href="https://www.flipkartwholesale.com" className="text-gray-400 hover:underline">Flipkart Wholesale</a></li>
          <li className="mb-2"><a href="https://www.cleartrip.com" className="text-gray-400 hover:underline">Cleartrip</a></li>
          <li className="mb-2"><a href="https://www.shopsy.in" className="text-gray-400 hover:underline">Shopsy</a></li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
        <h4 className="mb-4 font-semibold">HELP</h4>
        <ul>
          <li className="mb-2"><a href="/payments" className="text-gray-400 hover:underline">Payments</a></li>
          <li className="mb-2"><a href="/shipping" className="text-gray-400 hover:underline">Shipping</a></li>
          <li className="mb-2"><a href="/cancellation-returns" className="text-gray-400 hover:underline">Cancellation & Returns</a></li>
          <li className="mb-2"><a href="/faq" className="text-gray-400 hover:underline">FAQ</a></li>
          <li className="mb-2"><a href="/report" className="text-gray-400 hover:underline">Report Infringement</a></li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
        <h4 className="mb-4 font-semibold">CONSUMER POLICY</h4>
        <ul>
          <li className="mb-2"><a href="/cancellation-returns" className="text-gray-400 hover:underline">Cancellation & Returns</a></li>
          <li className="mb-2"><a href="/terms" className="text-gray-400 hover:underline">Terms Of Use</a></li>
          <li className="mb-2"><a href="/security" className="text-gray-400 hover:underline">Security</a></li>
          <li className="mb-2"><a href="/privacy" className="text-gray-400 hover:underline">Privacy</a></li>
          <li className="mb-2"><a href="/sitemap" className="text-gray-400 hover:underline">Sitemap</a></li>
          <li className="mb-2"><a href="/grievance" className="text-gray-400 hover:underline">Grievance Redressal</a></li>
          <li className="mb-2"><a href="/epr" className="text-gray-400 hover:underline">EPR Compliance</a></li>
        </ul>
      </div>
    </div>
    {/* <div className="container mx-auto px-4 text-center mt-8">
      <p>© 2007-2024 YourEcommerceWebsite.com</p>
      <p>YourEcommerceWebsite Internet Private Limited,</p>
      <p>Buildings Alyssa, Begonia & Clove Embassy Tech Village,</p>
      <p>Outer Ring Road, Devarabeesanahalli Village,</p>
      <p>Bengaluru, 560103, Karnataka, India</p>
      <p>CIN: U51109KA2012PTC066107</p>
      <p>Telephone: <a href="tel:044-45614700" className="text-gray-400 hover:underline">044-45614700</a> / <a href="tel:044-67415800" className="text-gray-400 hover:underline">044-67415800</a></p>
    </div> */}
  </footer>
  )
}

export default Footer
