// Program Kerja Page
function renderProgramKerjaPage() {
  const executedPrograms = [
    {
      icon: Icons.Heart("w-8 h-8"),
      title: "GenBI Monthly Worship",
      category: "Kerohanian",
      description:
        "Kegiatan ini merupakan kegiatan ibadah setiap awal bulan bagi seluruh anggota. Kegiatan ini dilakukan setiap bulan agar membantu meningkatkan solidaritas dan menumbuhkan nilai iman bagi setiap anggota yang beragama Katolik maupun Kristen Protestan.",
      details: [
        "Ibadah rutin awal bulan",
        "Meningkatkan solidaritas",
        "Menumbuhkan nilai iman",
      ],
      pic: "Divisi Pendidikan & Kerohanian",
    },
    {
      icon: Icons.Briefcase("w-8 h-8"),
      title: "GenBI Preneurship",
      category: "Kewirausahaan",
      description:
        "Melalui kegiatan Lasalle Marketplace yang dilaksanakan oleh pihak kampus, GenBI UKDLSM turut berkontribusi menjadi peserta dalam kegiatan tersebut. Kegiatan ini menjadi sarana bagi mahasiswa untuk memperkenalkan produk-produk mereka sendiri yang sudah siap untuk dipasarkan.",
      details: [
        "Partisipasi Lasalle Marketplace",
        "Membuka booth merchandise & jasa kesehatan",
        "Raih penghargaan Produk Terbaik 3 & Penjualan Terbanyak 2",
      ],
      pic: "Divisi Kewirausahaan",
    },
    {
      icon: Icons.Heart("w-8 h-8"),
      title: "GenBI Caring - GenBI Miracle",
      category: "Sosial",
      description:
        "Kegiatan ini dilaksanakan sebagai bentuk kepedulian sosial serta upaya memberikan manfaat langsung bagi masyarakat dengan membagikan hadiah sebagai bentuk sukacita menyambut natal bagi anak-anak di Panti Asuhan Bakti Kasih Karunia Manado.",
      details: [
        "Berbagi hadiah natal di Panti Asuhan",
        "Edukasi Cinta, Bangga, Paham Rupiah",
        "Fun games & menggambar bersama",
      ],
      pic: "Divisi Sosial & Lingkungan",
    },
  ];

  const upcomingPrograms = [
    {
      icon: Icons.BookOpen("w-8 h-8"),
      title: "GenBI Literasi Keuangan",
      subtitle: "Smart Spending, Future Planning",
      category: "Edukasi",
      date: "28 Februari 2025",
      location: "Aula Johanis Unika De La Salle Manado",
      description:
        "Kegiatan ini bertujuan untuk meningkatkan literasi keuangan digital mahasiswa agar lebih bijak dan aman dalam menggunakan teknologi pembayaran seperti QRIS di tengah godaan perilaku konsumtif paylater.",
      meta: [
        "Target: 100 Peserta",
        "Topik: Manajemen Uang & Risiko Finansial Digital",
      ],
      pic: "Divisi Pendidikan & Kerohanian",
    },
    {
      icon: Icons.Heart("w-8 h-8"),
      title: "GenBI Share and Love",
      category: "Sosial",
      date: "14 Februari 2025",
      location: "UKDLSM",
      description:
        "Aksi kemanusiaan yang dilaksanakan untuk memeriahkan Hari Kasih Sayang melalui aksi nyata. Program ini bertujuan untuk menyalurkan kepedulian sosial kepada masyarakat yang membutuhkan.",
      meta: ["Target: 20 Peserta", "Mempererat solidaritas"],
      pic: "Divisi Sosial & Lingkungan",
    },
    {
      icon: Icons.Users("w-8 h-8"),
      title: "GenBI Sport – GenBI Fun Day",
      category: "Olahraga",
      date: "14 Februari 2025",
      location: "GOR",
      description:
        "Kegiatan aktivitas fisik yang menyenangkan untuk membangun kebersamaan dan rasa persaudaraan antar anggota GenBI di luar lingkungan formal dan mendorong pola hidup yang sehat.",
      meta: ["Target: 20 Peserta", "Aktivitas fisik & kebersamaan"],
      pic: "Divisi Internal",
    },
    {
      icon: Icons.Heart("w-8 h-8"),
      title: "GenBI Donor Darah – GenBI Life",
      category: "Kesehatan",
      date: "21 April 2025",
      location: "Auditorium Unika De La Salle Manado",
      description:
        "Aksi kemanusiaan unggulan bekerja sama dengan PMI. Wujud nyata dedikasi terhadap isu kesehatan dan membantu ketersediaan stok darah nasional.",
      meta: ["Target: 100 Peserta", "Kerjasama dengan PMI"],
      pic: "Divisi Kesehatan Masyarakat",
    },
    {
      icon: Icons.Leaf("w-8 h-8"),
      title: "GenBI Cleanup",
      category: "Lingkungan",
      date: "23 Maret 2025",
      location: "Lingkungan Sekitar",
      description:
        "Aksi nyata kepedulian terhadap lingkungan dengan fokus pada pengumpulan sampah plastik guna menciptakan lingkungan yang asri dan berkelanjutan.",
      meta: ["Fokus: Sampah Plastik", "Kelestarian Alam"],
      pic: "Divisi Lingkungan Hidup",
    },
    {
      icon: Icons.MapPin("w-8 h-8"),
      title: "GenBI ABDIMAS – GenBI Mapalus",
      category: "Pengabdian Masyarakat",
      date: "26-28 Juni 2025",
      location: "Kab. Bolsel & Kep. Siau (Usulan)",
      description:
        "Kegiatan turun langsung ke masyarakat selama 3 hari dengan pendekatan holistik mencakup kesehatan, lingkungan, dan literasi keuangan.",
      meta: ["Edukasi & Cek Kesehatan", "Penanaman Pohon", "Sosialisasi QRIS"],
      pic: "Semua Divisi",
    },
    {
      icon: Icons.Calendar("w-8 h-8"),
      title: "GenBI Farewell",
      category: "Seremoni",
      date: "Akhir Periode",
      location: "Tentative",
      description:
        "Momentum apresiasi sekaligus seremoni penutupan masa bakti. Titik balik untuk merefleksikan seluruh dedikasi, kerja keras, dan inovasi selama satu tahun kepengurusan.",
      meta: ["Apresiasi Anggota", "Penutupan Masa Bakti"],
      pic: "Divisi Internal",
    },
  ];

  const html = `
        <div class="min-h-screen bg-white dark:bg-gray-900">
            <section class="py-20 text-white" style="background: linear-gradient(to bottom right, #003087, #0056B3);">
                <div class="container mx-auto px-4">
                    <h1 class="text-4xl md:text-5xl font-bold text-center mb-4">Program Kerja</h1>
                    <p class="text-xl text-center text-gray-100 max-w-2xl mx-auto">Komisariat GenBI UKDLSM</p>
                </div>
            </section>
            
            <!-- Program Terlaksana -->
            <section class="py-16">
                <div class="container mx-auto px-4">
                    <div class="flex items-center mb-8">
                        <div class="p-2 bg-green-100 dark:bg-green-900 rounded-lg mr-4">
                            ${Icons.Clock("w-6 h-6 text-green-600 dark:text-green-400")}
                        </div>
                        <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Program Terlaksana</h2>
                    </div>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        ${executedPrograms
                          .map(
                            (p) => `
                            <div class="card overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-green-500">
                                <div class="p-6">
                                    <div class="flex items-center justify-between mb-4">
                                        <div class="text-bi-blue dark:text-bi-gold">${p.icon}</div>
                                        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300">${p.category}</span>
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">${p.title}</h3>
                                    <p class="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">${p.description}</p>
                                    
                                    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 mb-4">
                                        <ul class="space-y-2">
                                            ${p.details
                                              .map(
                                                (d) => `
                                                <li class="flex items-start text-xs text-gray-600 dark:text-gray-400">
                                                    <span class="text-green-500 mr-2">✓</span> ${d}
                                                </li>
                                            `,
                                              )
                                              .join("")}
                                        </ul>
                                    </div>
                                    
                                    <div class="pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <p class="text-xs text-gray-500">PIC: ${p.pic}</p>
                                    </div>
                                </div>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                </div>
            </section>

            <!-- Program Mendatang -->
            <section class="py-16 bg-gray-50 dark:bg-gray-800">
                <div class="container mx-auto px-4">
                    <div class="flex items-center mb-8">
                        <div class="p-2 bg-bi-blue/10 rounded-lg mr-4">
                            ${Icons.Calendar("w-6 h-6 text-bi-blue dark:text-bi-gold")}
                        </div>
                        <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Program Mendatang</h2>
                    </div>
                    <div class="space-y-6">
                        ${upcomingPrograms
                          .map(
                            (p) => `
                            <div class="card overflow-hidden hover:shadow-lg transition-all group">
                                <div class="md:flex">
                                    <div class="md:w-64 bg-bi-blue p-6 flex flex-col justify-center items-center text-white text-center shrink-0">
                                        <div class="bg-white/20 p-3 rounded-full mb-3 group-hover:scale-110 transition-transform">
                                            ${p.icon}
                                        </div>
                                        <div class="font-bold text-lg">${p.date}</div>
                                        <div class="text-sm opacity-90 mt-1">${p.location}</div>
                                    </div>
                                    <div class="p-6 flex-1">
                                        <div class="flex flex-wrap items-center justify-between mb-2">
                                            <span class="text-sm font-semibold text-bi-blue dark:text-bi-gold tracking-wide uppercase mb-1 md:mb-0">${p.category}</span>
                                        </div>
                                        <h3 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">${p.title}</h3>
                                        ${p.subtitle ? `<p class="text-md font-medium text-gray-500 dark:text-gray-400 mb-3 italic">${p.subtitle}</p>` : ""}
                                        <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">${p.description}</p>
                                        
                                        <div class="flex flex-wrap gap-3">
                                            ${p.meta
                                              .map(
                                                (m) => `
                                                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                                                    ${Icons.Target("w-3 h-3 mr-1")} ${m}
                                                </span>
                                            `,
                                              )
                                              .join("")}
                                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                                PIC: ${p.pic}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                </div>
            </section>
        </div>
    `;
  document.getElementById("main-content").innerHTML = html;
}
