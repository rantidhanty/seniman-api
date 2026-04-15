import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Tenaga Ahli Bersertifikat",
    desc: "Welder terlatih & berpengalaman",
  },
  {
    title: "Material Berkualitas",
    desc: "Besi & baja pilihan anti karat",
  },
  {
    title: "Garansi Pengerjaan",
    desc: "Garansi 1 tahun untuk setiap proyek",
  },
  {
    title: "Pengiriman & Instalasi",
    desc: "Layanan door-to-door Jabodetabek",
  },
];

export default function About() {
  return (
    <section id="tentang" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80"
                alt="Workshop kami"
                width={400}
                height={256}
                className="rounded-2xl w-full h-64 object-cover shadow-lg"
              />
              <Image
                src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400&q=80"
                alt="Tim kami"
                width={400}
                height={256}
                className="rounded-2xl w-full h-64 object-cover shadow-lg mt-8"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white rounded-2xl p-6 shadow-2xl text-center">
              <div className="text-4xl font-black">15+</div>
              <div className="text-sm font-medium mt-1 opacity-90">
                Tahun
                <br />
                Pengalaman
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-4">
            <span className="inline-block text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Tentang Kami
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Bengkel Las dengan
              <br />
              <span className="gradient-text">Standar Tinggi</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              <strong className="text-gray-700">Seniman Api</strong> berdiri
              sejak 2010, melayani berbagai kebutuhan pengelasan dan fabrikasi
              besi di wilayah Jabodetabek. Kami memiliki tim pengelas
              bersertifikat dengan pengalaman di proyek residensial, komersial,
              dan industri.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Dengan peralatan modern dan komitmen terhadap kualitas, setiap
              proyek dikerjakan dengan presisi tinggi — dari tahap desain,
              fabrikasi, hingga instalasi di lokasi.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">
                      {f.title}
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#kontak"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:-translate-y-0.5"
            >
              Konsultasi Sekarang
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
