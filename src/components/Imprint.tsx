import React from 'react';

const Imprint = () => {
  return (
    <div id="imprint" className="pt-20 bg-navy-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-3xl font-extrabold text-white mb-8">Imprint</h1>
        
        <div className="prose prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Company Information</h2>
            <p className="text-gray-300">
              BCX<br />
              Email: huslert292@gmail.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
            <p className="text-gray-300">
              The contents of this website have been created with the greatest care. However, we do not guarantee the accuracy, completeness, or timeliness of the content. All offers are subject to change and non-binding.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Copyright</h2>
            <p className="text-gray-300">
              The content of this website, including all texts, images, and graphics, is protected by copyright. Any use, reproduction, or distribution of the content is prohibited without the express permission of BCX.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">External Links</h2>
            <p className="text-gray-300">
              Our website may contain links to external websites. We have no influence on their content and therefore accept no liability for the accuracy or legality of external content.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Imprint;