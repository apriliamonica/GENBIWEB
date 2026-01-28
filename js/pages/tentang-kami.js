// Tentang Kami Page
function renderTentangKamiPage() {
  const roles = [
    {
      icon: Icons.Users("w-6 h-6"),
      title: "Pengembangan Anggota",
      description:
        "Menyelenggarakan program pengembangan kapasitas dan kompetensi anggota melalui pelatihan, workshop, dan kegiatan edukatif.",
    },
    {
      icon: Icons.Award("w-6 h-6"),
      title: "Kontribusi Sosial",
      description:
        "Melaksanakan kegiatan bakti sosial dan program pemberdayaan masyarakat sebagai bentuk kontribusi nyata.",
    },
    {
      icon: Icons.Target("w-6 h-6"),
      title: "Edukasi Publik",
      description:
        "Meningkatkan literasi keuangan dan ekonomi di kalangan mahasiswa dan masyarakat luas.",
    },
    {
      icon: Icons.Users("w-6 h-6"),
      title: "Networking",
      description:
        "Membangun jaringan dan kolaborasi dengan berbagai pihak, baik internal kampus maupun eksternal.",
    },
  ];

  const html = `
        <div class="min-h-screen bg-white dark:bg-gray-900">
            <section class="py-20 text-white" style="background: linear-gradient(to bottom right, #003087, #0056B3);">
                <div class="container mx-auto px-4">
                    <h1 class="text-4xl md:text-5xl font-bold text-center mb-4">Tentang Kami</h1>
                    <p class="text-xl text-center text-gray-100 max-w-2xl mx-auto">GenBI Komisariat Unika De La Salle Manado</p>
                </div>
            </section>

            <section class="py-16">
                <div class="container mx-auto px-4">
                    <div class="max-w-4xl mx-auto">
                        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Sejarah GenBI</h2>
                        <div class="prose">
                            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">Generasi Baru Indonesia (GenBI) adalah program beasiswa dari Bank Indonesia yang ditujukan untuk mahasiswa berprestasi di seluruh Indonesia. Program ini bertujuan untuk mencetak generasi muda yang memiliki karakter kuat, kompetensi tinggi, dan dedikasi untuk berkontribusi dalam pembangunan ekonomi Indonesia.</p>
                            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">GenBI Komisariat Unika De La Salle Manado didirikan sebagai wadah bagi mahasiswa Unika De La Salle Manado yang menjadi penerima beasiswa Bank Indonesia. Komisariat ini berfungsi sebagai platform pengembangan diri, networking, dan kontribusi sosial bagi anggotanya.</p>
                            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">Sejak didirikan, GenBI Komisariat Unika telah melaksanakan berbagai program kerja yang berkontribusi pada pengembangan mahasiswa dan masyarakat sekitar, baik melalui kegiatan edukatif, sosial, maupun pengembangan kapasitas anggota.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-16 bg-gray-50 dark:bg-gray-800">
                <div class="container mx-auto px-4">
                    <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                        <div class="card p-8">
                            <div class="flex items-center mb-6">
                                <div class="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style="background: linear-gradient(to bottom right, #003087, #0056B3);">${Icons.Eye("w-6 h-6 text-white")}</div>
                                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Visi</h2>
                            </div>
                            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">Menjadi komisariat GenBI yang unggul dalam mencetak generasi muda berkarakter, berkompeten, dan berdedikasi tinggi untuk berkontribusi dalam pembangunan ekonomi Indonesia, khususnya di wilayah Sulawesi Utara.</p>
                        </div>
                        <div class="card p-8">
                            <div class="flex items-center mb-6">
                                <div class="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style="background: linear-gradient(to bottom right, #FFD700, #facc15);">${Icons.Target("w-6 h-6 text-bi-blue")}</div>
                                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Misi</h2>
                            </div>
                            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
                                <li class="flex items-start"><span class="text-bi-blue dark:text-bi-gold mr-2">•</span><span>Mengembangkan kapasitas dan kompetensi anggota melalui berbagai program pengembangan diri</span></li>
                                <li class="flex items-start"><span class="text-bi-blue dark:text-bi-gold mr-2">•</span><span>Melaksanakan kegiatan sosial dan edukatif yang bermanfaat bagi masyarakat</span></li>
                                <li class="flex items-start"><span class="text-bi-blue dark:text-bi-gold mr-2">•</span><span>Membangun jaringan dan kolaborasi dengan berbagai pihak untuk pengembangan bersama</span></li>
                                <li class="flex items-start"><span class="text-bi-blue dark:text-bi-gold mr-2">•</span><span>Meningkatkan literasi keuangan dan ekonomi di kalangan mahasiswa dan masyarakat</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-16">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Struktur Organisasi</h2>
                    <div class="max-w-4xl mx-auto">
                        <div class="card p-8 space-y-6">
                            <div class="border-l-4 border-purple-500 pl-4">
                                <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Ketua Umum</h3>
                                <p class="text-lg font-medium text-gray-900 dark:text-white mb-1">Giovani Handri George Malonda</p>
                                <p class="text-gray-600 dark:text-gray-400">Memimpin dan mengkoordinasikan seluruh kegiatan komisariat</p>
                            </div>
                            <div class="border-l-4 border-bi-blue pl-4">
                                <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Ketua Komisariat</h3>
                                <p class="text-lg font-medium text-gray-900 dark:text-white mb-1">Regina Novena Tumbelaka</p>
                                <p class="text-gray-600 dark:text-gray-400">Memimpin dan mengkoordinasikan seluruh kegiatan komisariat</p>
                            </div>
                            <div class="border-l-4 border-bi-gold pl-4">
                                <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Sekretaris Komisariat</h3>
                                <p class="text-lg font-medium text-gray-900 dark:text-white mb-1">Monica Aprilia Pandeiroth</p>
                                <p class="text-gray-600 dark:text-gray-400">Mengelola administrasi dan dokumentasi komisariat</p>
                            </div>
                            <div class="border-l-4 border-bi-light-blue pl-4">
                                <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Bendahara Komisariat</h3>
                                <p class="text-lg font-medium text-gray-900 dark:text-white mb-1">Nadia Friendcees Moniung</p>
                                <p class="text-gray-600 dark:text-gray-400">Mengelola keuangan dan laporan keuangan komisariat</p>
                            </div>
                            <div class="border-l-4 border-green-500 pl-4">
                                <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Divisi-divisi</h3>
                                <p class="text-gray-600 dark:text-gray-400 mb-2">Terdiri dari 5 divisi yang mengelola program kerja spesifik:</p>
                                <ul class="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 ml-4">
                                    <li>Divisi Publikasi & Dokumentasi</li>
                                    <li>Divisi Lingkungan Hidup</li>
                                    <li>Divisi Pendidikan & Kerohanian</li>
                                    <li>Divisi Kewirausahaan</li>
                                    <li>Divisi Kesehatan Masyarakat</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-16 bg-gray-50 dark:bg-gray-800">
                <div class="container mx-auto px-4">
                    <div class="max-w-4xl mx-auto">
                        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Tugas & Peran GenBI Komisariat</h2>
                        <div class="grid md:grid-cols-2 gap-6">
                            ${roles
                              .map(
                                (r) => `
                                <div class="card p-6">
                                    <div class="text-bi-blue dark:text-bi-gold mb-4">${r.icon}</div>
                                    <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">${r.title}</h3>
                                    <p class="text-gray-600 dark:text-gray-400">${r.description}</p>
                                </div>
                            `,
                              )
                              .join("")}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;
  document.getElementById("main-content").innerHTML = html;
}
