import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroCover = () => {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden bg-black">
      <Spline
        scene="https://prod.spline.design/qMOKV671Z1CM9yS7/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
      <div className="absolute inset-0 flex items-end md:items-center justify-center text-center p-6">
        <div className="max-w-3xl">
          <h1 className="text-white text-4xl md:text-6xl font-semibold tracking-tight">
            Skeuomorphism Clock
          </h1>
          <p className="mt-3 text-zinc-300 md:text-lg">
            An iOS-inspired physical timepiece — tactile, glowing, and delightfully analog.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;
