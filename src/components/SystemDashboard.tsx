import React, { useState, useEffect } from 'react';
import { Cpu, Thermometer, Radio, Sliders } from 'lucide-react';

export const SystemDashboard: React.FC = () => {
  // Console parameter dials
  const [blur, setBlur] = useState<number>(14);
  const [intensity, setIntensity] = useState<number>(85);
  const [bevel, setBevel] = useState<number>(6);
  
  // Telemetry status variables
  const [temp, setTemp] = useState<number>(32.4);
  const [systemLoad, setSystemLoad] = useState<number>(18.5);
  const [logs, setLogs] = useState<string[]>([
    'INITIALIZING CONTROLLER NODES...',
    'CALIBRATING LIGHT VALUE THRESHOLDS...',
    'TACTILE PHYSICS SYSTEM READY.'
  ]);

  // Telemetry simulations
  useEffect(() => {
    const tempInterval = setInterval(() => {
      setTemp(prev => {
        const change = parseFloat((Math.random() * 0.4 - 0.2).toFixed(1));
        const next = prev + change;
        return next > 30 && next < 36 ? parseFloat(next.toFixed(1)) : prev;
      });
      
      setSystemLoad(prev => {
        const change = parseFloat((Math.random() * 2 - 1).toFixed(1));
        const next = prev + change;
        return next > 10 && next < 25 ? parseFloat(next.toFixed(1)) : prev;
      });
    }, 3000);

    const logList = [
      'REFRESHING TELEMETRY INDEX...',
      'ROTARY DIAL ALIGNMENT VERIFIED.',
      'SKEUOMORPHIC SHADOW MATRIX RESOLVED.',
      'MILL SHEET DENSITY COEFFICIENT: 1.25.',
      'SIGNAL TRANSMISSION: STABLE.',
      'ASSETS RENDERED UNDER MULTIPLY BLEND.',
      'TACTILE SPRING TRAVEL ADJUSTED: 0.4s.'
    ];

    const logInterval = setInterval(() => {
      setLogs(prev => {
        const nextLog = logList[Math.floor(Math.random() * logList.length)];
        const timestamp = new Date().toLocaleTimeString();
        return [`[${timestamp}] ${nextLog}`, ...prev.slice(0, 4)];
      });
    }, 6000);

    return () => {
      clearInterval(tempInterval);
      clearInterval(logInterval);
    };
  }, []);

  return (
    <section className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8 rounded-3xl shadow-raised bg-white border border-white/70 select-none">
      
      {/* Left Column: Parameter controls */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-200/50 select-none">
          <Sliders className="w-4 h-4 text-slate-500" />
          <h2 className="font-heading text-xs font-bold tracking-widest text-slate-400 uppercase">
            Console Parameters
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {/* Blur Radius Slider */}
          <div className="flex flex-col gap-2 p-4 rounded-2xl shadow-recessed bg-[#F4F4F6]/60 border border-white/80">
            <div className="flex justify-between items-center text-[9px] font-mono font-bold text-slate-400 uppercase select-none tracking-wider">
              <span>SHADOW BLUR RADIUS</span>
              <span className="px-2 py-0.5 rounded shadow-recessed bg-white border border-white/85 text-slate-900 font-bold">{blur}px</span>
            </div>
            <input 
              type="range" 
              min="4" 
              max="24" 
              value={blur} 
              onChange={(e) => setBlur(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-300/30 rounded-lg appearance-none cursor-pointer accent-slate-800" 
            />
          </div>

          {/* Light Intensity Slider */}
          <div className="flex flex-col gap-2 p-4 rounded-2xl shadow-recessed bg-[#F4F4F6]/60 border border-white/80">
            <div className="flex justify-between items-center text-[9px] font-mono font-bold text-slate-400 uppercase select-none tracking-wider">
              <span>LIGHT SOURCE INTENSITY</span>
              <span className="px-2 py-0.5 rounded shadow-recessed bg-white border border-white/85 text-slate-900 font-bold">{intensity}%</span>
            </div>
            <input 
              type="range" 
              min="50" 
              max="100" 
              value={intensity} 
              onChange={(e) => setIntensity(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-330/30 rounded-lg appearance-none cursor-pointer accent-slate-800" 
            />
          </div>

          {/* Bevel Thickness Slider */}
          <div className="flex flex-col gap-2 p-4 rounded-2xl shadow-recessed bg-[#F4F4F6]/60 border border-white/80">
            <div className="flex justify-between items-center text-[9px] font-mono font-bold text-slate-400 uppercase select-none tracking-wider">
              <span>BEVEL THICKNESS OFFSET</span>
              <span className="px-2 py-0.5 rounded shadow-recessed bg-white border border-white/85 text-slate-900 font-bold">{bevel}mm</span>
            </div>
            <input 
              type="range" 
              min="2" 
              max="10" 
              value={bevel} 
              onChange={(e) => setBevel(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-330/30 rounded-lg appearance-none cursor-pointer accent-slate-800" 
            />
          </div>
        </div>
      </div>

      {/* Right Column: Telemetry panel */}
      <div className="flex flex-col gap-6 justify-between">
        
        <div>
          <div className="flex items-center gap-2 pb-3 border-b border-slate-200/50 select-none">
            <Cpu className="w-4 h-4 text-slate-500" />
            <h2 className="font-heading text-xs font-bold tracking-widest text-slate-400 uppercase">
              System Telemetry
            </h2>
          </div>

          {/* Hardware dial stats */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            
            {/* Temp Screen */}
            <div className="p-4 rounded-2xl shadow-recessed bg-[#F4F4F6]/60 border border-white/80 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-[7px] font-mono font-bold text-slate-400 uppercase tracking-wider select-none">CONSOLE TEMP</span>
                <span className="font-mono text-sm font-bold text-slate-900">{temp}°C</span>
              </div>
              <Thermometer className="w-5 h-5 text-slate-400" />
            </div>

            {/* Load Screen */}
            <div className="p-4 rounded-2xl shadow-recessed bg-[#F4F4F6]/60 border border-white/80 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-[7px] font-mono font-bold text-slate-400 uppercase tracking-wider select-none">PROCESS LOAD</span>
                <span className="font-mono text-sm font-bold text-slate-900">{systemLoad}%</span>
              </div>
              <Radio className="w-5 h-5 text-slate-400" />
            </div>

          </div>
        </div>

        {/* Live log ledger panel */}
        <div className="flex flex-col gap-3">
          <span className="text-[8px] font-mono font-bold text-slate-400 uppercase tracking-wider select-none">Live Telemetry Streams</span>
          
          <div className="p-4 rounded-2xl shadow-recessed glass-panel-dark text-slate-400 font-mono text-[9px] flex flex-col gap-2 min-h-32 justify-start leading-normal">
            {logs.map((log, index) => (
              <div key={index} className="flex gap-2 items-start">
                <span className="text-emerald-500 select-none">&gt;</span>
                <span className={index === 0 ? 'text-slate-200 font-semibold' : 'text-slate-500'}>{log}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};
