"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  { key: "all", label: "Semua" },
  { key: "pagar", label: "Pagar" },
  { key: "railing", label: "Railing" },
  { key: "kanopi", label: "Kanopi" },
  { key: "teralis", label: "Teralis" },
];

const portfolioItems = [
  {
    id: 1,
    category: "pagar",
    title: "Pagar Minimalis Modern",
    location: "Perumahan Graha Indah, Depok",
    image: "https://picsum.photos/seed/minimalist-fence/600/400",
  },
  {
    id: 2,
    category: "railing",
    title: "Railing Tangga Stainless Steel",
    location: "Apartemen Sudirman, Jakarta",
    image: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=600&q=80",
  },
  {
    id: 3,
    category: "kanopi",
    title: "Kanopi Garasi Double",
    location: "Perumahan BSD, Tangerang",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 4,
    category: "teralis",
    title: "Teralis Jendela Motif Bunga",
    location: "Ruko Kelapa Gading, Jakarta",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&q=80",
  },
  {
    id: 5,
    category: "pagar",
    title: "Pagar Besi Tempa Klasik",
    location: "Villa Bogor Indah, Bogor",
    image: "https://picsum.photos/seed/wrought-iron-fence/600/400",
  },
  {
    id: 6,
    category: "railing",
    title: "Railing Balkon Besi Hollow",
    location: "Perumahan Cibubur, Jakarta Timur",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
];

const categoryBadgeColors: Record<string, string> = {
  pagar: "bg-blue-50 text-blue-600",
  railing: "bg-purple-50 text-purple-600",
  kanopi: "bg-green-50 text-green-600",
  teralis: "bg-yellow-50 text-yellow-700",
};

export default function Portfolio() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === active);

  return (
    <section id="portofolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">
            Portofolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Hasil Karya <span className="gradient-text">Terbaik</span> Kami
          </h2>
          <p className="text-gray-500 text-lg">
            Beberapa proyek yang telah berhasil kami selesaikan dengan kepuasan
            klien penuh.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                active === cat.key
                  ? "bg-orange-500 border-orange-500 text-white"
                  : "border-gray-200 text-gray-500 hover:border-orange-400 hover:text-orange-500"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-orange-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-center text-white p-6">
                    <span className="text-3xl block mb-3">🔍</span>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-sm text-gray-300 mt-1">{item.location}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gray-50">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${
                    categoryBadgeColors[item.category] ||
                    "bg-orange-50 text-orange-600"
                  }`}
                >
                  {item.category}
                </span>
                <h4 className="font-bold text-gray-800 mt-2">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
