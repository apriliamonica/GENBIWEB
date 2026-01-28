// Divisi Page
function renderDivisiPage() {
  const divisi = [
    {
      icon: Icons.Camera("w-8 h-8"),
      name: "Publikasi & Dokumentasi",
      fullName: "Divisi Publikasi & Dokumentasi",
      color: "from-pink-500 to-pink-600",
      gradient: "linear-gradient(to right, #ec4899, #db2777)",
      tugas: [
        "Mengelola media sosial dan website komisariat",
        "Membuat konten publikasi dan branding",
        "Mendokumentasikan seluruh kegiatan komisariat",
        "Mengkoordinasikan publikasi program kerja",
      ],
      program: [
        "Konten Media Sosial",
        "Publikasi Kegiatan",
        "Dokumentasi Event",
        "Branding & Design",
      ],
    },
    {
      icon: Icons.Leaf("w-8 h-8"),
      name: "Lingkungan Hidup",
      fullName: "Divisi Lingkungan Hidup",
      color: "from-green-500 to-emerald-600",
      gradient: "linear-gradient(to right, #22c55e, #059669)",
      tugas: [
        "Mengelola program peduli lingkungan",
        "Menyelenggarakan kegiatan Go Green",
        "Meningkatkan kesadaran lingkungan",
        "Mengembangkan program ramah lingkungan",
      ],
      program: [
        "Penanaman Pohon",
        "Kampanye Reduce, Reuse, Recycle",
        "Pembersihan Lingkungan",
        "Workshop Lingkungan Hidup",
      ],
    },
    {
      icon: Icons.BookOpen("w-8 h-8"),
      name: "Pendidikan & Kerohanian",
      fullName: "Divisi Pendidikan & Kerohanian",
      color: "from-blue-500 to-blue-600",
      gradient: "linear-gradient(to right, #3b82f6, #2563eb)",
      tugas: [
        "Menyelenggarakan program pendidikan",
        "Mengelola kegiatan kerohanian",
        "Mengembangkan literasi keuangan dan ekonomi",
        "Menyelenggarakan seminar dan workshop edukatif",
      ],
      program: [
        "Seminar Literasi Keuangan",
        "Workshop Pendidikan",
        "Kegiatan Kerohanian",
        "Program Edukasi Publik",
      ],
    },
    {
      icon: Icons.Briefcase("w-8 h-8"),
      name: "Kewirausahaan",
      fullName: "Divisi Kewirausahaan",
      color: "from-yellow-500 to-orange-500",
      gradient: "linear-gradient(to right, #eab308, #f97316)",
      tugas: [
        "Mengembangkan program kewirausahaan",
        "Mengelola kegiatan bisnis komisariat",
        "Menyelenggarakan workshop kewirausahaan",
        "Mengembangkan produk dan layanan",
      ],
      program: [
        "Workshop Kewirausahaan",
        "Program Inkubasi Bisnis",
        "Market Day",
        "Seminar Entrepreneurship",
      ],
    },
    {
      icon: Icons.Heart("w-8 h-8"),
      name: "Kesehatan Masyarakat",
      fullName: "Divisi Kesehatan Masyarakat",
      color: "from-red-500 to-rose-600",
      gradient: "linear-gradient(to right, #ef4444, #e11d48)",
      tugas: [
        "Menyelenggarakan program kesehatan masyarakat",
        "Mengadakan kegiatan bakti sosial kesehatan",
        "Meningkatkan kesadaran kesehatan",
        "Mengembangkan program pemberdayaan kesehatan",
      ],
      program: [
        "Bakti Sosial Kesehatan",
        "Kampanye Kesehatan",
        "Program Pemeriksaan Kesehatan",
        "Edukasi Kesehatan Masyarakat",
      ],
    },
  ];

  const html = `
        <div class="min-h-screen bg-white dark:bg-gray-900">
            <section class="py-20 text-white" style="background: linear-gradient(to bottom right, #003087, #0056B3);">
                <div class="container mx-auto px-4">
                    <h1 class="text-4xl md:text-5xl font-bold text-center mb-4">Divisi Kepengurusan</h1>
                    <p class="text-xl text-center text-gray-100 max-w-2xl mx-auto">Struktur organisasi dan divisi yang mengelola program kerja GenBI</p>
                </div>
            </section>

            <section class="py-16">
                <div class="container mx-auto px-4">
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        ${divisi
                          .map(
                            (d) => `
                            <div class="card overflow-hidden hover:shadow-xl transition-shadow">
                                <div class="text-white p-6" style="background: ${d.gradient};">
                                    <div class="flex items-center justify-between mb-2">
                                        <div class="bg-white/20 rounded-lg p-3">${d.icon}</div>
                                    </div>
                                    <h2 class="text-2xl font-bold">${d.name}</h2>
                                    <p class="text-sm text-white/90">${d.fullName}</p>
                                </div>
                                <div class="p-6">
                                    <div class="mb-6">
                                        <h3 class="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Tugas & Fungsi</h3>
                                        <ul class="space-y-2">
                                            ${d.tugas.map((t) => `<li class="flex items-start text-sm text-gray-600 dark:text-gray-400"><span class="text-bi-blue dark:text-bi-gold mr-2 mt-1">•</span><span>${t}</span></li>`).join("")}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Program Kerja</h3>
                                        <ul class="space-y-2">
                                            ${d.program.map((p) => `<li class="flex items-start text-sm text-gray-600 dark:text-gray-400"><span class="text-bi-blue dark:text-bi-gold mr-2 mt-1">•</span><span>${p}</span></li>`).join("")}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                </div>
            </section>

            <section class="py-16 bg-gray-50 dark:bg-gray-800">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Pengurus Divisi</h2>
                    <div class="max-w-4xl mx-auto">
                        <div class="card p-8">
                            <p class="text-center text-gray-600 dark:text-gray-400 mb-6">Setiap divisi dikelola oleh koordinator divisi dan beberapa anggota yang bertanggung jawab atas program kerja divisi masing-masing.</p>
                            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                ${divisi
                                  .map(
                                    (d) => `
                                    <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">${d.name}</h3>
                                        <div class="flex items-center space-x-3">
                                            <div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style="background: linear-gradient(to bottom right, #003087, #0056B3);">${d.name.charAt(0)}</div>
                                            <div>
                                                <p class="text-sm font-medium text-gray-900 dark:text-white">Koordinator Divisi</p>
                                                <p class="text-xs text-gray-600 dark:text-gray-400">[Akan diisi]</p>
                                            </div>
                                        </div>
                                    </div>
                                `,
                                  )
                                  .join("")}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;
  document.getElementById("main-content").innerHTML = html;
}
