import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { InstitutionalSection } from './components/InstitutionalSection';
import { TrustSection } from './components/TrustSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VerificationModal } from './components/VerificationModal';

export const App: React.FC = () => {
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col antialiased text-slate-900 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Sticky Navigation Header */}
      <Header onOpenVerificationModal={() => setIsVerificationModalOpen(true)} />

      {/* Main Page Body */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Services */}
        <ServicesSection />

        {/* Section 3: Institutional */}
        <InstitutionalSection onOpenVerificationModal={() => setIsVerificationModalOpen(true)} />

        {/* Section 4: Trust Pillars */}
        <TrustSection />

        {/* Section 5: Contact */}
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer onOpenVerificationModal={() => setIsVerificationModalOpen(true)} />

      {/* Interactive Official Chamber of Commerce Verification Modal */}
      <VerificationModal
        isOpen={isVerificationModalOpen}
        onClose={() => setIsVerificationModalOpen(false)}
      />
    </div>
  );
};

export default App;
