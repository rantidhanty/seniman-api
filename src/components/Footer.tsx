import { Flame } from "lucide-react";

const services = [
  "Jasa Las Listrik",
  "Pembuatan Pagar",
  "Railing Tangga",
  "Kanopi Besi",
  "Teralis Jendela",
  "Konstruksi Baja",
];

const info = [
  { href: "#tentang", label: "Tentang Kami" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#kontak", label: "Kontak" },
  { href: "#", label: "Kebijakan Privasi" },
];

const socials = [
  { icon: "IG", href: "#", label: "Instagram" },
  { icon: "FB", href: "#", label: "Facebook" },
  { icon: "TT", href: "#", label: "TikTok" },
  { icon: "YT", href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <Flame className="text-white w-5 h-5" />
              </div>
              <div>
                <span className="block text-xl font-black text-white">
                  SENIMAN API
                </span>
                <span className="block text-xs text-orange-400 tracking-widest uppercase">
                  Jasa Las Profesional
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Menghadirkan solusi pengelasan dan fabrikasi besi berkualitas
              tinggi untuk hunian, komersial, dan industri sejak 2010.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors text-xs font-bold text-gray-300 hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm">
              {services.map((svc) => (
                <li key={svc}>
                  <a
                    href="#layanan"
                    className="hover:text-orange-400 transition-colors"
                  >
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Informasi</h4>
            <ul className="space-y-2 text-sm">
              {info.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Seniman Api. Semua hak dilindungi.
          </p>
          <p>Dibuat dengan Tim Pro Fabric Steel</p>
        </div>
      </div>
    </footer>
  );
}
