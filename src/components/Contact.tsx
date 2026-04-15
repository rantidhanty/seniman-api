"use client";

import { useState } from "react";
import { MapPin, MessageSquare, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat Workshop",
    content: "Sukatani, Cikarang,\nKab. Bekasi, Jawa Barat",
    isMultiline: true,
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    content: "+62 896-7340-4972",
    href: "https://wa.me/6289673404972?text=Halo%20admin%20PFS%2C%20saya%20mau%20konsultasi%20produk",
    isLink: true,
  },
  {
    icon: Mail,
    title: "Email",
    content: "profabricsteel.com",
    href: "https://profabricsteel.com",
    isLink: true,
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin – Sabtu: 08.00 – 17.00 WIB\nMinggu: Tutup (Emergency via WA)",
    isMultiline: true,
  },
];

const serviceOptions = [
  "Jasa Las Listrik",
  "Pembuatan Pagar",
  "Railing Tangga",
  "Kanopi Besi",
  "Teralis Jendela & Pintu",
  "Konstruksi Baja Custom",
  "Lainnya",
];

export default function Contact() {
  const [form, setForm] = useState({
    nama: "",
    whatsapp: "",
    layanan: "",
    alamat: "",
    pesan: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Halo Seniman Api, saya ingin konsultasi.\n\nNama: ${form.nama}\nNo. WA: ${form.whatsapp}\nLayanan: ${form.layanan}\nAlamat: ${form.alamat}\n\nPesan:\n${form.pesan}`
    );
    window.open(`https://wa.me/6289673404972?text=${msg}`, "_blank");
  };

  return (
    <section id="kontak" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">
            Kontak
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Hubungi <span className="gradient-text">Kami</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Ada pertanyaan atau ingin memulai proyek? Kami siap membantu Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 mb-1">
                        {info.title}
                      </div>
                      {info.isLink ? (
                        <a
                          href={info.href}
                          className="text-orange-500 hover:text-orange-600 font-semibold text-sm"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-500 text-sm whitespace-pre-line">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden h-56 border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!3m2!1sid!2sid!4v1776237578531!5m2!1sid!2sid!6m8!1m7!1sRqvDwosgvOVkrew1yyEoQg!2m2!1d-6.197427076208849!2d107.1708786989192!3f124.09495661541881!4f-8.245141238863823!5f0.7820865974627469"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Workshop Seniman Api"
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama"
                  required
                  value={form.nama}
                  onChange={handleChange}
                  placeholder="Contoh: Budi Santoso"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-sm transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="08xx-xxxx-xxxx"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-sm transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Jenis Layanan
              </label>
              <select
                name="layanan"
                value={form.layanan}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-sm transition-all bg-white"
              >
                <option value="">-- Pilih Layanan --</option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Alamat Lokasi
              </label>
              <input
                type="text"
                name="alamat"
                value={form.alamat}
                onChange={handleChange}
                placeholder="Kota / Kecamatan"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Deskripsi Proyek
              </label>
              <textarea
                name="pesan"
                rows={4}
                value={form.pesan}
                onChange={handleChange}
                placeholder="Ceritakan kebutuhan proyek Anda secara singkat..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-sm transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:-translate-y-0.5"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Kirim via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
