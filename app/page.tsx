"use client";

import { useState } from "react";
import Link from "next/link";
import { usePhotoshoots } from "./lib/usePhotoshoots";

export default function Home() {
  const { photoshoots, isLoaded, createPhotoshoot, coreTotal } = usePhotoshoots();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newVenue, setNewVenue] = useState("");
  const [newDate, setNewDate] = useState("");

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;
    createPhotoshoot(newName, newVenue, newDate);
    setIsModalOpen(false);
    setNewName("");
    setNewVenue("");
    setNewDate("");
  };

  if (!isLoaded) return <div className="p-8 flex justify-center text-muted">Loading...</div>;

  return (
    <main className="max-w-[720px] w-full mx-auto p-4 sm:p-8 flex flex-col gap-6 animate-in fade-in duration-500">
      <div className="bg-ink text-white rounded-3xl p-8 relative overflow-hidden shadow-2xl">
        <div className="absolute w-[240px] h-[240px] bg-pink opacity-80 rounded-full -right-20 -top-24 blur-3xl mix-blend-overlay"></div>
        <div className="uppercase tracking-[0.16em] text-[11px] opacity-70 mb-2">Photo Direction</div>
        <h1 className="font-serif text-3xl sm:text-4xl leading-tight mb-2">
          Environment Scanner
        </h1>
        <p className="text-white/70 text-sm max-w-[400px]">
          Manage your photoshoots and scan venues effectively for the best shots.
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <h2 className="font-serif text-2xl text-ink">Your Photoshoots</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {photoshoots.map((p) => {
          const coreScanned = p.checkedEnvs.length;
          const progress = Math.min((coreScanned / coreTotal) * 100, 100);

          return (
            <div key={p.id} className="bg-white border border-line rounded-2xl p-5 hover:shadow-lg hover:border-pink transition-all group">
              <h3 className="font-semibold text-lg text-ink truncate mb-1">{p.name}</h3>
              <p className="text-muted text-xs mb-4 truncate">{p.venue || "No Venue"} • {p.date || "No Date"}</p>
              
              <div className="text-xs text-muted mb-2 font-medium">
                {coreScanned} / {coreTotal} scanned
              </div>
              <div className="w-full bg-cream rounded-full h-2 mb-4 overflow-hidden">
                <div 
                  className="bg-pink h-full rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <Link href={`/photoshoots/${p.id}`} className="text-ink text-sm font-medium hover:text-pink transition-colors inline-flex items-center gap-1 group-hover:translate-x-1 duration-300">
                Open <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          );
        })}
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="border border-dashed border-line rounded-2xl p-6 flex flex-col items-center justify-center text-muted hover:text-ink hover:bg-white/50 hover:border-sage transition-all min-h-[160px]"
        >
          <span className="text-3xl font-light mb-2">+</span>
          <span className="font-medium text-sm">New Photoshoot</span>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in zoom-in-95 duration-200">
          <div className="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-cream text-muted flex items-center justify-center hover:bg-line transition-colors"
            >
              &times;
            </button>
            <h2 className="font-serif text-2xl mb-6">New Photoshoot</h2>
            <form onSubmit={handleCreate} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted mb-2">Nama Photoshoot</label>
                <input 
                  required
                  type="text" 
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Soft Pink Graduation"
                  className="w-full bg-cream border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted mb-2">Venue</label>
                <input 
                  type="text" 
                  value={newVenue}
                  onChange={(e) => setNewVenue(e.target.value)}
                  placeholder="Kampus / Gedung..."
                  className="w-full bg-cream border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted mb-2">Tanggal</label>
                <input 
                  type="text" 
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  placeholder="25 September 2026"
                  className="w-full bg-cream border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink transition-colors"
                />
              </div>
              <button type="submit" className="mt-4 bg-ink text-white rounded-xl py-3 text-sm font-medium hover:bg-pink hover:text-ink transition-colors">
                Create Photoshoot
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
