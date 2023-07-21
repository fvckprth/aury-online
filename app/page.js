import React from 'react';
import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import Signature from '@/components/Signature';
import ReachOut from '@/components/ReachOut';
import ContactInfo from '@/components/ContactInfo';


export default function Home() {
  return (
    <div className="bg-custom-gray text-custom-text font-NeueHaasDisplay font-light flex flex-col items-center md:place-content-center mt-16 md:mt-32">
      <div>
        <Header />
        <div className="space-y-4 md:space-y-0 md:flex md:justify-start md:space-x-20 mt-1 md:mt-2">
          
          {/* Left side content */}
          <div className="space-y-8 md:space-y-12">
            <AboutMe />
            <div>
              <Signature />
            </div>
            <div>
              <ReachOut />
            </div>
          </div>

          {/* Right side content */}
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
