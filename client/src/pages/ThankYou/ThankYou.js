import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';

export default function ThankYou() {
  const location = useLocation();
  const { state } = location;
  const formData = state || {};

  return (
    <React.Fragment>
      <Header />
      <BreadCrumbs />
      
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="container mx-auto my-5 px-2 sm:px-8">
              <div className="text-center py-10">
                <h2 className="text-3xl font-bold mb-5">Thank You!</h2>
                <p className="text-lg mb-5">Your message has been received successfully.</p>
                
                {formData.fullName && (
                  <div className="bg-white rounded-lg p-8 max-w-md mx-auto shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Your Information:</h3>
                    <ul className="text-left space-y-2">
                      <li><strong>Full Name:</strong> {formData.fullName}</li>
                      {formData.email && <li><strong>Email:</strong> {formData.email}</li>}
                      {formData.phone && <li><strong>Phone:</strong> {formData.phone}</li>}
                      {formData.message && <li><strong>Message:</strong> {formData.message}</li>}
                    </ul>
                  </div>
                )}
                
                <div className="mt-8">
                  <Link
                    to="/"
                    className="relative inline-block overflow-hidden rounded-lg bg-primary-500 px-6 py-3 text-white after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full">
                    <span className="relative z-[4] font-bold uppercase">
                      Return to Home
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

