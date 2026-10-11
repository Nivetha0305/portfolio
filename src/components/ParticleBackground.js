import React from "react";

export default function ParticleBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="absolute top-[30%] -left-24 h-[320px] w-[320px] rounded-full bg-sky-500/10 blur-[100px]" />
      <div className="absolute bottom-[10%] right-[-80px] h-[380px] w-[380px] rounded-full bg-cyan-500/8 blur-[110px]" />
      <div className="particle particle-1" />
      <div className="particle particle-2" />
      <div className="particle particle-3" />
      <div className="particle particle-4" />
      <div className="particle particle-5" />
      <div className="particle particle-6" />
    </div>
  );
}
