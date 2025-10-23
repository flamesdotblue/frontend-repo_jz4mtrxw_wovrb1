import React, { useEffect, useMemo, useState } from 'react';

const Ticks = () => {
  const ticks = Array.from({ length: 60 }, (_, i) => i);
  return (
    <div className="absolute inset-0">
      {ticks.map((i) => {
        const isHour = i % 5 === 0;
        const rotate = i * 6; // degrees
        return (
          <div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
          >
            <div
              className={
                `origin-top ${isHour ? 'h-6 w-[3px] bg-zinc-200' : 'h-3 w-[2px] bg-zinc-500/80'} ` +
                'rounded-full shadow-[0_0_6px_rgba(255,255,255,0.2)]'
              }
              style={{ transform: 'translateY(8px)' }}
            />
          </div>
        );
      })}
    </div>
  );
};

const Hand = ({ length, width, color, shadow, angle, tail = 0, z = 10 }) => (
  <div className="absolute left-1/2 top-1/2" style={{ zIndex: z }}>
    <div
      className="origin-bottom rounded-full"
      style={{
        height: `${length}%`,
        width,
        background: color,
        boxShadow: shadow,
        transform: `translate(-50%, -100%) rotate(${angle}deg)`
      }}
    />
    {tail > 0 && (
      <div
        className="origin-top rounded-full"
        style={{
          height: `${tail}%`,
          width,
          background: color,
          boxShadow: shadow,
          transform: `translate(-50%, 0) rotate(${angle}deg)`
        }}
      />
    )}
  </div>
);

const CenterCap = () => (
  <div className="absolute left-1/2 top-1/2"
    style={{ transform: 'translate(-50%, -50%)' }}
  >
    <div
      className="w-5 h-5 rounded-full"
      style={{
        background: 'radial-gradient(circle at 30% 30%, #ffffff, #e5e7eb 40%, #52525b 80%)',
        boxShadow: 'inset 2px 2px 4px rgba(255,255,255,0.7), inset -3px -3px 6px rgba(0,0,0,0.5), 0 6px 14px rgba(0,0,0,0.6)'
      }}
    />
  </div>
);

const useNow = (tick = 1000) => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), tick);
    return () => clearInterval(id);
  }, [tick]);
  return now;
};

const SkeuoClock = ({ showSeconds }) => {
  const now = useNow(showSeconds ? 1000 : 60000);

  const { secDeg, minDeg, hourDeg } = useMemo(() => {
    const s = now.getSeconds();
    const m = now.getMinutes();
    const h = now.getHours();
    const secDeg = (s / 60) * 360;
    const minDeg = ((m + s / 60) / 60) * 360;
    const hourDeg = ((h % 12 + m / 60) / 12) * 360;
    return { secDeg, minDeg, hourDeg };
  }, [now]);

  return (
    <div className="relative mx-auto aspect-square w-[min(90vw,480px)] select-none">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, #1f2937, #0b0f16 60%)',
          boxShadow:
            'inset 20px 20px 40px rgba(0,0,0,0.75), inset -15px -15px 35px rgba(255,255,255,0.05), 0 30px 80px rgba(0,0,0,0.7)',
        }}
      />

      <div
        className="absolute inset-[6%] rounded-full"
        style={{
          background:
            'radial-gradient(circle at 50% 55%, rgba(255,255,255,0.06), rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.9))',
          boxShadow:
            'inset 10px 10px 20px rgba(0,0,0,0.7), inset -10px -10px 25px rgba(255,255,255,0.05)',
        }}
      >
        {/* Gloss highlight */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[70%] h-[35%] rounded-b-[100%] opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.3), rgba(255,255,255,0.05) 60%, transparent 70%)',
            filter: 'blur(2px)'
          }}
        />

        <Ticks />

        {/* Hands */}
        <Hand
          length={38}
          width={6}
          color="#e5e7eb"
          shadow="0 2px 8px rgba(0,0,0,0.6), inset 0 1px 2px rgba(255,255,255,0.6)"
          angle={hourDeg}
          z={20}
        />
        <Hand
          length={48}
          width={4}
          color="#d1d5db"
          shadow="0 2px 8px rgba(0,0,0,0.6), inset 0 1px 2px rgba(255,255,255,0.6)"
          angle={minDeg}
          z={30}
        />
        {showSeconds && (
          <Hand
            length={52}
            width={2}
            color="#f59e0b"
            shadow="0 0 10px rgba(245,158,11,0.6)"
            angle={secDeg}
            tail={14}
            z={40}
          />
        )}

        <CenterCap />
      </div>

      {/* Outer ring */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow:
            'inset 0 0 0 2px rgba(255,255,255,0.06), inset 0 0 0 10px rgba(0,0,0,0.6), 0 16px 40px rgba(0,0,0,0.7)'
        }}
      />
    </div>
  );
};

export default SkeuoClock;
