import React from 'react';

const Terms = () => {
  return (
    <div id="terms" className="pt-20 bg-navy-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-3xl font-extrabold text-white mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. Service Agreement</h2>
            <p className="text-gray-300">
              By engaging our services, you agree to these terms and conditions. BCX provides IT services including but not limited to PC support, backups, and system setup.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. Service Delivery</h2>
            <p className="text-gray-300">
              We strive to provide services:
              <ul className="list-disc pl-5 mt-2 text-gray-300">
                <li>In a professional and timely manner</li>
                <li>According to industry standards</li>
                <li>With appropriate care and skill</li>
              </ul>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. Payment Terms</h2>
            <p className="text-gray-300">
              <ul className="list-disc pl-5 mt-2 text-gray-300">
                <li>Payment is due upon completion of services</li>
                <li>Prices are subject to change with notice</li>
                <li>Additional charges may apply for emergency services</li>
              </ul>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. Liability</h2>
            <p className="text-gray-300">
              BCX is not liable for:
              <ul className="list-disc pl-5 mt-2 text-gray-300">
                <li>Data loss during service delivery</li>
                <li>Indirect or consequential damages</li>
                <li>Issues arising from client-provided information</li>
              </ul>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;