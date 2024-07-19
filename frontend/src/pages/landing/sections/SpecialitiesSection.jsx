// import React from 'react';
// import WOW from 'react-wow';
// import 'animate.css';

// const SpecialitiesSection = () => {
//   return (
//     <section id="specialities" className="py-20 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <WOW animation="fadeInUp">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Specialties</h2>
//         </WOW>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <WOW animation="fadeInUp" delay="0.2s">
//             <div className="specialty-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
//               <h3 className="text-2xl font-bold mb-4">Automated Data Collection</h3>
//               <p className="text-gray-700">Streamlines data collection through digital quizzes, surveys, and integration with existing educational tools.</p>
//             </div>
//           </WOW>
//           <WOW animation="fadeInUp" delay="0.4s">
//             <div className="specialty-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
//               <h3 className="text-2xl font-bold mb-4">Full Spectrum Data Capture</h3>
//               <p className="text-gray-700">Records a wide range of metrics including academic performance, IQ, EQ, and other relevant factors, providing a holistic view of student development.</p>
//             </div>
//           </WOW>
//           <WOW animation="fadeInUp" delay="0.6s">
//             <div className="specialty-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
//               <h3 className="text-2xl font-bold mb-4">Predictive Insights</h3>
//               <p className="text-gray-700">Utilizes machine learning algorithms to predict future performance trends and identify emerging issues, aiding proactive intervention planning.</p>
//             </div>
//           </WOW>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SpecialitiesSection;

import React from "react";

const Cta = () => {
  return (
    <>
      <section id="specialities" className="py-20 lg:py-[120px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="relative z-10 overflow-hidden rounded bg-primary py-12 px-8 md:p-[70px]">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full px-4 lg:w-1/2">
                <span className="block mb-4 text-base font-medium text-white">
                Ready to Transform Student Success?
                </span>
                <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[40px]/[48px] lg:mb-0">
                  <span className="xs:block"> Empower your educators. Support your students. Enhance academic success with ThriveTracker. </span>
                  
                </h2>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="flex flex-wrap lg:justify-end">
                  <a
                    href="/register"
                    className="inline-flex py-3 my-1 mr-4 text-base font-medium transition bg-white rounded-md hover:bg-shadow-1 text-primary px-7"
                  >
                    Get Started
                  </a>
                  <a
                    href="/login"
                    className="inline-flex py-3 my-1 text-base font-medium text-white transition rounded-md bg-secondary px-7 hover:bg-opacity-90"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>

            <div>
              <span className="absolute top-0 left-0 z-[-1]">
                <svg
                  width="189"
                  height="162"
                  viewBox="0 0 189 162"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="16"
                    cy="-16.5"
                    rx="173"
                    ry="178.5"
                    transform="rotate(180 16 -16.5)"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-157"
                      y1="-107.754"
                      x2="98.5011"
                      y2="-106.425"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0.07" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="absolute bottom-0 right-0 z-[-1]">
                <svg
                  width="191"
                  height="208"
                  viewBox="0 0 191 208"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="173"
                    cy="178.5"
                    rx="173"
                    ry="178.5"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-3.27832e-05"
                      y1="87.2457"
                      x2="255.501"
                      y2="88.5747"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0.07" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
