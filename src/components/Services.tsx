import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Jasa Las Listrik",
    description:
      "Pengelasan listrik (SMAW/MIG/TIG) untuk berbagai material besi, baja, dan stainless steel. Hasil rapi dan kuat.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    badge: "Populer",
    icon: "⚡",
  },
  {
    id: 2,
    title: "Pembuatan Pagar",
    description:
      "Pagar minimalis, klasik, atau modern dari besi hollow, besi kotak, maupun stainless steel sesuai selera Anda.",
    image: "https://picsum.photos/seed/iron-gate-fence/600/400",
    icon: "🚪",
  },
  {
    id: 3,
    title: "Railing Tangga",
    description:
      "Railing tangga dalam/luar ruangan dari besi tempa, stainless steel, atau besi hollow dengan desain elegan.",
    image:
      "https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=600&q=80",
    icon: "🪜",
  },
  {
    id: 4,
    title: "Kanopi Besi",
    description:
      "Kanopi besi untuk garasi, teras, atau carport. Konstruksi kuat dengan pilihan atap polycarbonate atau seng.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    icon: "🏠",
  },
  {
    id: 5,
    title: "Teralis Jendela & Pintu",
    description:
      "Teralis besi untuk keamanan jendela dan pintu. Desain variatif — motif kotak, silang, hingga custom ornamen.",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&q=80",
    icon: "🔲",
  },
  {
    id: 6,
    title: "Konstruksi Baja Custom",
    description:
      "Konstruksi baja untuk bangunan, rak industri, hingga furniture besi custom sesuai spesifikasi Anda.",
    image: "https://picsum.photos/seed/steel-construction/600/400",
    icon: "🔧",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">
            Layanan Kami
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Solusi Las{" "}
            <span className="gradient-text">Lengkap</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Dari pembuatan pagar hingga konstruksi besi, semua dikerjakan oleh
            tenaga ahli berpengalaman dengan standar kualitas tinggi.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-52">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                {svc.badge && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {svc.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-lg">
                    {svc.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {svc.title}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {svc.description}
                </p>
                <a
                  href="#kontak"
                  className="inline-flex items-center gap-1.5 text-orange-500 hover:text-orange-600 font-semibold text-sm transition-colors"
                >
                  Konsultasi Gratis{" "}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
