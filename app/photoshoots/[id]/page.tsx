"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { usePhotoshoots } from "../../lib/usePhotoshoots";
import { ENVIRONMENTS, Environment, EnvironmentType } from "../../lib/data";

export default function ScannerPage() {
  const params = useParams();
  const router = useRouter();
  const { photoshoots, isLoaded, toggleEnv, coreTotal } = usePhotoshoots();
  const [activeTab, setActiveTab] = useState<EnvironmentType | "all" | "found">("all");
  const [selectedEnv, setSelectedEnv] = useState<Environment | null>(null);
  const [envToUncheck, setEnvToUncheck] = useState<Environment | null>(null);

  const photoshootId = typeof params.id === "string" ? params.id : Array.isArray(params.id) ? params.id[0] : "";
  const photoshoot = photoshoots.find((p) => p.id === photoshootId);

  useEffect(() => {
    if (isLoaded && !photoshoot) {
      router.push("/");
    }
  }, [isLoaded, photoshoot, router]);

  if (!isLoaded || !photoshoot) return <div className="p-8 flex justify-center text-muted">Loading...</div>;

  const coreScanned = photoshoot.checkedEnvs.filter((id) =>
    ENVIRONMENTS.find(e => e.id === id)?.priority.includes("P1")
  ).length;

  const progress = Math.min((coreScanned / coreTotal) * 100, 100);

  const filteredEnvs = ENVIRONMENTS.filter(e => {
    if (activeTab === "all") return true;
    if (activeTab === "found") return photoshoot.checkedEnvs.includes(e.id);
    return e.type === activeTab;
  });

  const coreEnvs = filteredEnvs.filter(e => e.priority.includes("P1"));
  const additionalEnvs = filteredEnvs.filter(e => !e.priority.includes("P1"));

  const handleToggle = (env: Environment) => {
    const isChecked = photoshoot.checkedEnvs.includes(env.id);
    if (isChecked) {
      setEnvToUncheck(env);
    } else {
      toggleEnv(photoshoot.id, env.id);
    }
  };

  const confirmUncheck = () => {
    if (envToUncheck) {
      toggleEnv(photoshoot.id, envToUncheck.id);
      setEnvToUncheck(null);
    }
  };

  const tabs: { id: EnvironmentType | "all" | "found", label: string }[] = [
    { id: "all", label: "Semua" },
    { id: "found", label: "Ditemukan ✓" },
    { id: "indoor", label: "Indoor" },
    { id: "outdoor", label: "Outdoor" },
    { id: "additional", label: "Lain-lain" },
    { id: "light", label: "Cahaya" },
    { id: "human", label: "Human" }
  ];

  const renderCard = (env: Environment) => {
    const isChecked = photoshoot.checkedEnvs.includes(env.id);
    const isCore = env.priority.includes("P1");

    return (
      <div
        key={env.id}
        className={`bg-white border rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300
          ${isCore ? 'border-pink/40 shadow-sm hover:shadow-md hover:border-pink' : 'border-line hover:border-sage'}
          ${isChecked ? 'bg-cream/50 ring-1 ring-sage/20' : ''}
        `}
      >
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-semibold text-lg text-ink flex items-center gap-2">
            <span>{env.icon}</span> {env.title}
          </h3>
          <span className={`text-[10px] tracking-wider uppercase px-2 py-1 rounded-full whitespace-nowrap
            ${isCore ? 'bg-pink/20 text-[#8b4d5b]' : 'bg-line text-muted'}
          `}>
            {env.priority}
          </span>
        </div>

        <p className="text-muted text-sm leading-relaxed mb-1">{env.description}</p>

        <div className="bg-cream/50 rounded-xl p-3 text-xs leading-relaxed space-y-2 mt-auto">
          <div>
            <b className="block text-[10px] uppercase tracking-widest text-[#8b7c70] mb-0.5">Karakter</b>
            {env.character}
          </div>
        </div>

        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={() => setSelectedEnv(env)}
            className="flex-1 border border-line bg-white hover:bg-cream/50 text-ink text-xs font-medium py-2 rounded-xl transition-colors"
          >
            Lihat Detail &rarr;
          </button>

          <label className="flex items-center gap-2 text-sm font-medium cursor-pointer text-ink">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => handleToggle(env)}
              className="w-5 h-5 rounded border-line text-pink focus:ring-pink accent-[#9c6370] cursor-pointer"
            />
            Ditemukan
          </label>
        </div>
      </div>
    );
  };

  return (
    <main className="max-w-[1180px] w-full mx-auto p-4 sm:p-6 pb-20 animate-in fade-in duration-500">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors mb-6 font-medium">
        &larr; Back to Photoshoots
      </Link>

      <section className="bg-ink text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl mb-8">
        <div className="absolute w-[300px] h-[300px] bg-sage opacity-40 rounded-full -right-24 -top-32 blur-[60px] mix-blend-overlay"></div>
        <div className="absolute w-[200px] h-[200px] bg-pink opacity-40 rounded-full -left-20 -bottom-20 blur-[60px] mix-blend-overlay"></div>

        <div className="relative z-10">
          <div className="uppercase tracking-[0.16em] text-[11px] opacity-70 mb-2">Environment Scan</div>
          <h1 className="font-serif text-3xl sm:text-5xl leading-tight mb-4">
            {photoshoot.name}
          </h1>
          <p className="text-white/80 text-sm max-w-[600px] leading-relaxed mb-6">
            Checklist pertama saat tiba di venue: cari environment yang paling banyak membuka kemungkinan pose. Core dulu, baru scan tambahan.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { num: "01", title: "Scan", desc: "Cari environment fisik" },
              { num: "02", title: "Interaction", desc: "Apa yang bisa dilakukan?" },
              { num: "03", title: "Direction", desc: "Pilih pose yang cocok" },
              { num: "04", title: "Camera", desc: "Framing, angle & lens" },
            ].map(step => (
              <div key={step.num} className="bg-white/10 border border-white/10 p-4 rounded-2xl text-xs backdrop-blur-sm">
                <b className="block text-white mb-1 font-semibold">{step.num} &middot; {step.title}</b>
                <span className="text-white/70">{step.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
        <div className="flex bg-[#e9dfd7] p-1 rounded-2xl w-full sm:w-auto overflow-x-auto no-scrollbar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${activeTab === tab.id
                ? "bg-white text-ink shadow-sm"
                : "text-muted hover:text-ink hover:bg-white/50"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm w-full sm:w-auto justify-between sm:justify-end bg-white border border-line px-5 py-2.5 rounded-2xl">
          <span className="text-ink font-medium">Progress</span>
          <span className="text-muted font-medium bg-cream px-3 py-1 rounded-lg">
            {coreScanned} / {coreTotal} core
          </span>
        </div>
      </div>

      {coreEnvs.length > 0 && (
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="font-serif text-2xl mb-1 text-ink">Core Environment</h2>
            <p className="text-muted text-sm">Prioritas pertama — scan ini sebelum mencari yang lain.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreEnvs.map(renderCard)}
          </div>
        </section>
      )}

      {additionalEnvs.length > 0 && (
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="font-serif text-2xl mb-1 text-ink">Tambahan</h2>
            <p className="text-muted text-sm">Kalau core sudah aman, cari elemen yang menambah variasi.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalEnvs.map(renderCard)}
          </div>
        </section>
      )}

      {/* Quick Scan Summary */}
      <div className="mt-12 p-6 md:p-8 border-l-4 border-sage bg-cream/50 rounded-r-2xl text-sm leading-relaxed">
        <b className="block text-ink mb-2 text-base">Workflow lapangan:</b>
        <p className="text-muted">
          Jangan kejar semua checklist. Temukan dulu 5–8 core environment yang benar-benar usable.
          Setelah itu baru pilih interaction yang cocok dengan pose library:<br />
          <span className="inline-block mt-3 bg-white px-4 py-2 rounded-xl border border-line font-medium text-ink shadow-sm">
            Environment &rarr; Interaction &rarr; Direction &rarr; Framing &rarr; Angle/Lens
          </span>
        </p>
      </div>

      {/* Detail Modal */}
      {selectedEnv && (
        <div className="fixed inset-0 bg-ink/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-2xl rounded-[32px] p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in slide-in-from-bottom-8 duration-300">
            <button
              onClick={() => setSelectedEnv(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-cream text-muted flex items-center justify-center hover:bg-line transition-colors text-lg"
            >
              &times;
            </button>

            <div className="pr-12 mb-8">
              <div className="text-[11px] uppercase tracking-widest text-[#8b7c70] mb-2 font-medium">Environment Detail</div>
              <h2 className="font-serif text-3xl mb-2 flex items-center gap-3">
                {selectedEnv.icon} {selectedEnv.title}
              </h2>
              <p className="text-muted text-base">{selectedEnv.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {[
                { label: "Environment", value: selectedEnv.title },
                { label: "Interaction", value: selectedEnv.interaction },
                { label: "Direction", value: selectedEnv.direction },
                { label: "Framing", value: selectedEnv.framing },
                { label: "Karakter", value: selectedEnv.character },
                { label: "Angle / Lens", value: selectedEnv.angleLens, highlight: true }
              ].map((item, idx) => (
                <div key={idx} className={`p-4 rounded-2xl ${item.highlight ? 'bg-pink/10 border border-pink/20 md:col-span-2' : 'bg-cream/50'}`}>
                  <b className={`block text-[10px] uppercase tracking-widest mb-1.5 ${item.highlight ? 'text-[#8b4d5b]' : 'text-[#8b7c70]'}`}>
                    {item.label}
                  </b>
                  <div className="text-sm text-ink leading-relaxed font-medium">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#8b7c70] mb-3 font-medium">Workflow Sequence</h4>
              <div className="flex flex-wrap gap-2">
                {["Environment", "Interaction", "Direction", "Framing", "Angle/Lens"].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="bg-line/50 text-ink px-3 py-1.5 rounded-xl text-xs font-medium">
                      {step}
                    </span>
                    {i < arr.length - 1 && <span className="text-muted text-xs">&rarr;</span>}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
      {/* Warning Modal */}
      {envToUncheck && (
        <div className="fixed inset-0 bg-ink/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-sm rounded-[32px] p-8 shadow-2xl relative animate-in zoom-in-95 duration-300 text-center">
            <div className="w-16 h-16 bg-[#f1d9df] rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-sm border border-pink/20">
              ⚠️
            </div>
            <h3 className="font-serif text-2xl text-ink mb-2">Batalkan Checklist?</h3>
            <p className="text-muted text-sm mb-6 leading-relaxed">
              Anda akan menghapus <b className="text-ink font-semibold">{envToUncheck.title}</b> dari daftar environment yang telah ditemukan.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setEnvToUncheck(null)}
                className="flex-1 bg-cream text-ink border border-line rounded-xl py-3 text-sm font-medium hover:bg-line transition-colors"
              >
                Kembali
              </button>
              <button
                onClick={confirmUncheck}
                className="flex-1 bg-ink text-white rounded-xl py-3 text-sm font-medium hover:bg-pink hover:text-ink transition-colors shadow-md"
              >
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
