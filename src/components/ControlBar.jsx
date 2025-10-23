import React from 'react';

const Toggle = ({ label, checked, onChange }) => {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex items-center h-9 px-3 rounded-full transition-all select-none 
      ${checked ? 'bg-emerald-500/20 text-emerald-300' : 'bg-zinc-800 text-zinc-300'} 
      shadow-[inset_4px_4px_10px_rgba(0,0,0,0.5),inset_-4px_-4px_10px_rgba(255,255,255,0.03)]`}
      aria-pressed={checked}
    >
      <span
        className={`mr-2 inline-block w-5 h-5 rounded-full transition-transform 
        ${checked ? 'translate-x-0 bg-emerald-400 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.5),0_2px_8px_rgba(16,185,129,0.6)]' : 'bg-zinc-600 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.3),0_2px_6px_rgba(0,0,0,0.4)]'}`}
      />
      {label}
    </button>
  );
};

const ControlBar = ({ showSeconds, setShowSeconds, use24h, setUse24h }) => {
  return (
    <div className="flex flex-wrap items-center gap-3 p-3 rounded-2xl bg-zinc-900/80 text-zinc-200 backdrop-blur 
    shadow-[inset_8px_8px_16px_rgba(0,0,0,0.6),inset_-8px_-8px_16px_rgba(255,255,255,0.04)]">
      <Toggle label="Seconds" checked={showSeconds} onChange={setShowSeconds} />
      <Toggle label="24-hour" checked={use24h} onChange={setUse24h} />
    </div>
  );
};

export default ControlBar;
