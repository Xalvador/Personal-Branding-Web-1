import React from 'react';
import { FRAMEWORK_STEPS } from '../data/websiteData';
import { ArrowRight, ArrowDown } from 'lucide-react';

export const FrameworkSection: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-[#13260A] text-[#FAF8F5] border-t border-[#13260A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#FAF8F5]/15 pb-4 mb-14 sm:mb-20">
          <span className="text-xs font-bold tracking-widest text-[#E2872A] uppercase font-display">
            05 / METODOLOGI KHAS
          </span>
          <span className="text-xs font-semibold text-[#FAF8F5]/50 tracking-wider uppercase font-sans">
            ROFI 4A
          </span>
        </div>

        {/* Headline */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#FAF8F5] tracking-tight leading-[1.04] font-display [text-wrap:balance]">
            ROFI 4A Framework
          </h2>
          <p className="text-base sm:text-lg text-[#E6DFD1]/80 leading-relaxed font-normal font-sans">
            Metodologi transformasi bertahap yang digunakan Rofianto untuk membimbing audiens dari titik kebingungan menuju eksekusi yang menghasilkan dampak berkelanjutan.
          </p>
        </div>

        {/* 4 Steps Horizontal Editorial Flow with Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-4 border-t border-b border-[#FAF8F5]/15 divide-y md:divide-y-0 md:divide-x divide-[#FAF8F5]/15 mb-20">
          {FRAMEWORK_STEPS.map((step, idx) => (
            <div
              key={step.name}
              className="py-10 lg:py-12 px-0 md:px-8 lg:px-10 first:pl-0 last:pr-0 space-y-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-4xl sm:text-5xl font-normal text-[#E2872A] block">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FAF8F5]/50 font-display">
                    FASE 0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black tracking-tight font-display text-[#FAF8F5]">
                    {step.name}
                  </h3>
                  <div className="text-xs font-semibold tracking-wider text-[#E2872A] uppercase mt-0.5 font-sans">
                    {step.indonesianTitle}
                  </div>
                </div>

                <p className="text-sm font-serif italic text-[#FAF8F5]/90 leading-relaxed">
                  "{step.definition}"
                </p>

                <p className="text-xs text-[#E6DFD1]/75 leading-relaxed font-normal pt-2 border-t border-[#FAF8F5]/10 font-sans">
                  {step.detail}
                </p>
              </div>

              {idx < 3 && (
                <div className="md:hidden flex justify-center py-2 text-[#E2872A]">
                  <ArrowDown className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Closing Monumental Axiom */}
        <div className="p-10 sm:p-14 bg-[#FAF8F5]/5 border border-[#FAF8F5]/15 max-w-4xl mx-auto text-center space-y-4">
          <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic font-normal text-[#FAF8F5] leading-relaxed">
            "Awareness memberi arah. Action menciptakan perubahan. <br className="hidden sm:inline" />
            <span className="text-[#E2872A] not-italic font-display font-bold">Technology mempercepat perjalanan.</span>"
          </p>
          <div className="text-xs font-semibold text-[#E6DFD1]/70 tracking-wider uppercase font-sans">
            Aksioma Transformasi Berkelanjutan
          </div>
        </div>

      </div>
    </section>
  );
};
