const steps = [
  {
    step: "1",
    icon: "💬",
    title: "Hubungi Kami",
    desc: "Chat via WhatsApp atau telepon untuk konsultasi awal gratis tanpa komitmen.",
  },
  {
    step: "2",
    icon: "📐",
    title: "Survey & Ukur",
    desc: "Tim kami datang ke lokasi untuk survei, pengukuran, dan diskusi desain sesuai kebutuhan.",
  },
  {
    step: "3",
    icon: "🔥",
    title: "Proses Pengerjaan",
    desc: "Fabrikasi dilakukan di workshop kami dengan standar kualitas tinggi dan pengawasan ketat.",
  },
  {
    step: "4",
    icon: "🚚",
    title: "Instalasi & Selesai",
    desc: "Pengiriman dan pemasangan langsung di lokasi Anda, rapi dan tepat waktu.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=30')",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-orange-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Cara Kerja
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Proses{" "}
            <span className="text-orange-400">Mudah</span> &amp; Cepat
          </h2>
          <p className="text-gray-400 text-lg">
            Cukup 4 langkah untuk mendapatkan hasil pengelasan terbaik dari tim
            kami.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-orange-500/20 border-2 border-orange-500/40 rounded-2xl flex items-center justify-center mx-auto text-3xl">
                  {s.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-black">
                  {s.step}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
