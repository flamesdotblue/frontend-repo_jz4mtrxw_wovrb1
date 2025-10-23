import React from 'react';

function formatTime(date, use24h) {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  if (!use24h) {
    hours = hours % 12 || 12;
  }
  const h = use24h ? String(hours).padStart(2, '0') : String(hours);
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');
  return { h, m, s, ampm };
}

const InfoPanel = ({ now, use24h }) => {
  const { h, m, s, ampm } = formatTime(now, use24h);
  const dateStr = new Intl.DateTimeFormat('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  }).format(now);

  return (
    <div className="mt-4 w-full max-w-md rounded-3xl p-5 bg-zinc-950/70 text-zinc-200 backdrop-blur-md 
    shadow-[inset_10px_10px_20px_rgba(0,0,0,0.65),inset_-10px_-10px_20px_rgba(255,255,255,0.04)]">
      <div className="flex items-end justify-center gap-2 font-mono">
        <span className="text-4xl tabular-nums">{h}</span>
        <span className="text-3xl opacity-70">:</span>
        <span className="text-4xl tabular-nums">{m}</span>
        <span className="text-3xl opacity-70">:</span>
        <span className="text-4xl tabular-nums">{s}</span>
        {!use24h && (
          <span className="ml-2 text-sm uppercase tracking-widest opacity-70">{ampm}</span>
        )}
      </div>
      <p className="mt-2 text-center text-sm text-zinc-400">{dateStr}</p>
    </div>
  );
};

export default InfoPanel;
