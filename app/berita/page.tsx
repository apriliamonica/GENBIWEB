import Link from "next/link";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

export default function Berita() {
  const berita = [
    {
      id: 1,
      title: "Seminar Literasi Keuangan: Investasi untuk Masa Depan",
      category: "Edukasi",
      date: "15 Maret 2024",
      author: "Divisi PSDM",
      excerpt:
        "GenBI Komisariat Unika berhasil menyelenggarakan seminar literasi keuangan dengan tema 'Investasi untuk Masa Depan'. Seminar ini dihadiri oleh lebih dari 200 peserta dari berbagai fakultas.",
      image: "/api/placeholder/600/400",
      featured: true,
    },
    {
      id: 2,
      title: "Bakti Sosial ke Panti Asuhan: Berbagi Kasih di Bulan Ramadhan",
      category: "Sosial",
      date: "10 Maret 2024",
      author: "Divisi Sosial & Lingkungan",
      excerpt:
        "Dalam rangka bulan Ramadhan, GenBI mengadakan bakti sosial ke panti asuhan dengan memberikan bantuan sembako dan kegiatan edukatif untuk anak-anak.",
      image: "/api/placeholder/600/400",
      featured: false,
    },
    {
      id: 3,
      title: "Open Recruitment GenBI 2024 Dibuka!",
      category: "Pengumuman",
      date: "5 Maret 2024",
      author: "Divisi PSDM",
      excerpt:
        "Pendaftaran anggota baru GenBI Komisariat Unika De La Salle Manado untuk periode 2024 telah dibuka. Daftarkan dirimu sekarang dan jadilah bagian dari energi untuk negeri!",
      image: "/api/placeholder/600/400",
      featured: false,
    },
    {
      id: 4,
      title: "Workshop Leadership: Membangun Karakter Pemimpin",
      category: "Edukasi",
      date: "28 Februari 2024",
      author: "Divisi PSDM",
      excerpt:
        "Workshop leadership yang diikuti oleh seluruh anggota GenBI berhasil meningkatkan pemahaman tentang kepemimpinan dan pengembangan karakter.",
      image: "/api/placeholder/600/400",
      featured: false,
    },
    {
      id: 5,
      title: "Go Green: Penanaman 100 Pohon di Lingkungan Kampus",
      category: "Lingkungan",
      date: "20 Februari 2024",
      author: "Divisi Sosial & Lingkungan",
      excerpt:
        "GenBI mengadakan program Go Green dengan menanam 100 pohon di berbagai lokasi di lingkungan kampus Unika De La Salle Manado.",
      image: "/api/placeholder/600/400",
      featured: false,
    },
    {
      id: 6,
      title: "Artikel: Tips Mengelola Keuangan Pribadi untuk Mahasiswa",
      category: "Artikel",
      date: "15 Februari 2024",
      author: "Divisi Humas",
      excerpt:
        "Mengelola keuangan pribadi adalah skill penting yang harus dimiliki setiap mahasiswa. Berikut tips-tips praktis untuk mengelola keuangan dengan baik.",
      image: "/api/placeholder/600/400",
      featured: false,
    },
  ];

  const featured = berita.find((b) => b.featured);
  const regular = berita.filter((b) => !b.featured);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bi-blue to-bi-light-blue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Berita & Artikel
          </h1>
          <p className="text-xl text-center text-gray-100 max-w-2xl mx-auto">
            Dokumentasi kegiatan, pengumuman, dan artikel edukatif GenBI
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="md:flex">
                  <div className="md:w-1/2 bg-gradient-to-br from-bi-blue to-bi-light-blue p-8 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Tag className="w-12 h-12 mx-auto mb-4 opacity-80" />
                      <p className="text-sm uppercase tracking-wide mb-2">
                        Featured Article
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-bi-blue text-white px-3 py-1 rounded-full text-xs font-medium">
                        {featured.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {featured.date}
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                      {featured.title}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <User className="w-4 h-4 mr-2" />
                        {featured.author}
                      </div>
                      <Link
                        href={`/berita/${featured.id}`}
                        className="flex items-center text-bi-blue dark:text-bi-gold font-semibold hover:underline"
                      >
                        Baca Selengkapnya
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Berita Terbaru
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regular.map((article) => (
              <article
                key={article.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-bi-blue to-bi-light-blue relative">
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-bi-blue px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                    <span className="mx-2">•</span>
                    <User className="w-4 h-4 mr-2" />
                    {article.author}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/berita/${article.id}`}
                    className="inline-flex items-center text-bi-blue dark:text-bi-gold font-semibold hover:underline"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Kategori
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Semua", "Edukasi", "Sosial", "Lingkungan", "Pengumuman", "Artikel"].map(
              (category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-bi-blue hover:text-white dark:hover:bg-bi-blue dark:hover:text-white transition-colors border border-gray-200 dark:border-gray-700"
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

