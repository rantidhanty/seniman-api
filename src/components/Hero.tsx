"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "500+", label: "Proyek Selesai" },
  { value: "15+", label: "Tahun Pengalaman" },
  { value: "98%", label: "Kepuasan Klien" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Welding background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/75 to-orange-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left */}
          <div className="text-white pb-8 lg:py-0">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 rounded-full px-4 py-1.5 text-orange-300 text-sm font-medium mb-3 sm:mb-6">
              <span className="animate-pulse">🔥</span>
              <span>Terpercaya Sejak 2010</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-tight mb-3 sm:mb-6">
              Ahli Las
              <br />
              <span className="gradient-text">Berpengalaman</span>
              <br />
              &amp; Terpercaya
            </h1>

            <p className="text-gray-300 text-sm sm:text-lg leading-relaxed mb-4 sm:mb-8 max-w-xl">
              Solusi pengelasan profesional pagar minimalis, railing tangga
              elegan, kanopi kokoh, hingga konstruksi besi custom. Kualitas
              premium, harga bersahabat.
            </p>

            <div className="flex flex-row gap-2 sm:gap-4 mb-5 sm:mb-12">
              <a
                href="#layanan"
                className="inline-flex items-center justify-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 sm:px-8 py-2.5 sm:py-4 rounded-full text-sm sm:text-base transition-all shadow-xl hover:-translate-y-1 flex-1 sm:flex-none"
              >
                🔥 Lihat Layanan
              </a>
              <a
                href="#portofolio"
                className="inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-4 sm:px-8 py-2.5 sm:py-4 rounded-full text-sm sm:text-base transition-all backdrop-blur-sm hover:-translate-y-1 flex-1 sm:flex-none"
              >
                📸 Portofolio
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 sm:pt-8 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-xl sm:text-3xl font-black text-orange-400">
                    {s.value}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-500/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                  alt="Welding work"
                  width={600}
                  height={480}
                  className="w-full h-[480px] object-cover"
                />
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur rounded-xl px-4 py-3 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">⭐</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 text-sm">
                        Rating Pelanggan
                      </div>
                      <div className="text-orange-500 text-xs font-semibold mt-0.5">
                        ⭐⭐⭐⭐⭐ 5.0 / 5.0
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#layanan"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
