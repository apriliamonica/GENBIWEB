// Berita Page
function renderBeritaPage() {
  const berita = [
    {
      id: 1,
      title: "Seminar Literasi Keuangan: Investasi untuk Masa Depan",
      category: "Edukasi",
      date: "15 Maret 2024",
      author: "Divisi PSDM",
      excerpt:
        'GenBI Komisariat Unika berhasil menyelenggarakan seminar literasi keuangan dengan tema "Investasi untuk Masa Depan". Seminar ini dihadiri oleh lebih dari 200 peserta dari berbagai fakultas.',
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
      featured: false,
    },
  ];

  const featured = berita.find((b) => b.featured);
  const regular = berita.filter((b) => !b.featured);
  const categories = [
    "Semua",
    "Edukasi",
    "Sosial",
    "Lingkungan",
    "Pengumuman",
    "Artikel",
  ];

  const html = `
        <div class="min-h-screen bg-white dark:bg-gray-900">
            <section class="py-20 text-white" style="background: linear-gradient(to bottom right, #003087, #0056B3);">
                <div class="container mx-auto px-4">
                    <h1 class="text-4xl md:text-5xl font-bold text-center mb-4">Berita & Artikel</h1>
                    <p class="text-xl text-center text-gray-100 max-w-2xl mx-auto">Dokumentasi kegiatan, pengumuman, dan artikel edukatif GenBI</p>
                </div>
            </section>

            ${
              featured
                ? `
            <section class="py-12 bg-gray-50 dark:bg-gray-800">
                <div class="container mx-auto px-4">
                    <div class="max-w-5xl mx-auto">
                        <div class="card overflow-hidden">
                            <div class="md:flex">
                                <div class="md:w-1/2 p-8 flex items-center justify-center" style="background: linear-gradient(to bottom right, #003087, #0056B3);">
                                    <div class="text-center text-white">
                                        ${Icons.Tag("w-12 h-12 mx-auto mb-4 opacity-80")}
                                        <p class="text-sm uppercase tracking-wide mb-2">Featured Article</p>
                                    </div>
                                </div>
                                <div class="md:w-1/2 p-8">
                                    <div class="flex items-center space-x-4 mb-4">
                                        <span class="bg-bi-blue text-white px-3 py-1 rounded-full text-xs font-medium">${featured.category}</span>
                                        <div class="flex items-center text-sm text-gray-600 dark:text-gray-400">${Icons.Calendar("w-4 h-4 mr-1")} ${featured.date}</div>
                                    </div>
                                    <h2 class="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">${featured.title}</h2>
                                    <p class="text-gray-700 dark:text-gray-300 mb-6">${featured.excerpt}</p>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center text-sm text-gray-600 dark:text-gray-400">${Icons.User("w-4 h-4 mr-2")} ${featured.author}</div>
                                        <a href="#" class="flex items-center text-bi-blue dark:text-bi-gold font-semibold hover:underline">Baca Selengkapnya ${Icons.ArrowRight("w-4 h-4 ml-2")}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            `
                : ""
            }

            <section class="py-16">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Berita Terbaru</h2>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        ${regular
                          .map(
                            (a) => `
                            <article class="card overflow-hidden hover:shadow-xl transition-shadow">
                                <div class="h-48 relative" style="background: linear-gradient(to bottom right, #003087, #0056B3);">
                                    <div class="absolute top-4 left-4"><span class="bg-white text-bi-blue px-3 py-1 rounded-full text-xs font-medium">${a.category}</span></div>
                                </div>
                                <div class="p-6">
                                    <div class="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                                        ${Icons.Calendar("w-4 h-4 mr-2")} ${a.date} <span class="mx-2">•</span> ${Icons.User("w-4 h-4 mr-2")} ${a.author}
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2">${a.title}</h3>
                                    <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">${a.excerpt}</p>
                                    <a href="#" class="inline-flex items-center text-bi-blue dark:text-bi-gold font-semibold hover:underline">Baca Selengkapnya ${Icons.ArrowRight("w-4 h-4 ml-2")}</a>
                                </div>
                            </article>
                        `,
                          )
                          .join("")}
                    </div>
                </div>
            </section>

            <section class="py-16 bg-gray-50 dark:bg-gray-800">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Kategori</h2>
                    <div class="flex flex-wrap justify-center gap-4">
                        ${categories.map((c) => `<button class="px-6 py-3 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-bi-blue hover:text-white dark:hover:bg-bi-blue dark:hover:text-white transition-colors border border-gray-200 dark:border-gray-700">${c}</button>`).join("")}
                    </div>
                </div>
            </section>
        </div>
    `;
  document.getElementById("main-content").innerHTML = html;
}
