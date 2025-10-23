import React, { useState } from 'react';
import HeroCover from './components/HeroCover';
import SkeuoClock from './components/SkeuoClock';
import ControlBar from './components/ControlBar';
import InfoPanel from './components/InfoPanel';

function App() {
  const [showSeconds, setShowSeconds] = useState(true);
  const [use24h, setUse24h] = useState(false);
  const now = new Date();

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <HeroCover />

      <main className="relative -mt-12 md:-mt-20 z-10">
        <div className="mx-auto max-w-5xl px-4">
          <section className="flex flex-col items-center justify-center gap-6">
            <div className="mt-6" />
            <SkeuoClock showSeconds={showSeconds} />
            <ControlBar
              showSeconds={showSeconds}
              setShowSeconds={setShowSeconds}
              use24h={use24h}
              setUse24h={setUse24h}
            />
            <InfoPanel now={now} use24h={use24h} />
            <div className="h-14" />
          </section>
        </div>
      </main>

      <footer className="py-10 text-center text-zinc-500">
        Crafted with a love for tactile interfaces.
      </footer>
    </div>
  );
}

export default App;
