import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    location: "Perumahan Graha Indah, Depok",
    avatar: "https://i.pravatar.cc/80?img=1",
    rating: 5,
    text: "Pagar depan rumah saya dikerjain Seniman Api, hasilnya luar biasa. Rapi, kuat, dan sesuai desain yang saya minta. Harganya pun sangat reasonable. Sangat direkomendasikan!",
  },
  {
    id: 2,
    name: "Dewi Rahayu",
    location: "Kompleks BSD City, Tangerang",
    avatar: "https://i.pravatar.cc/80?img=5",
    rating: 5,
    text: "Railing tangga interior rumah saya sekarang jadi cantik banget. Tim Seniman Api profesional, on time, dan bersih dalam pengerjaan. Tidak meninggalkan sampah apapun. 10/10!",
  },
  {
    id: 3,
    name: "Ahmad Fauzi",
    location: "Villa Bogor Indah, Bogor",
    avatar: "https://i.pravatar.cc/80?img=12",
    rating: 5,
    text: "Kanopi garasi saya sudah 3 tahun dan masih kokoh tanpa karat. Terima kasih Seniman Api! Sudah pesan 2x dan selalu puas dengan hasilnya. Akan terus langganan.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 text-orange-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < count ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">
            Testimoni
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Kata <span className="gradient-text">Pelanggan</span> Kami
          </h2>
          <p className="text-gray-500 text-lg">
            Kepercayaan pelanggan adalah motivasi terbesar kami untuk terus
            berkarya.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all"
            >
              <StarRating count={t.rating} />
              <p className="text-gray-600 leading-relaxed mt-4 mb-6 italic text-sm">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-800">{t.name}</div>
                  <div className="text-gray-500 text-xs mt-0.5">
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
