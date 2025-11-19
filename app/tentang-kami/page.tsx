import { Target, Eye, Users, Award } from "lucide-react";

export default function TentangKami() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bi-blue to-bi-light-blue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Tentang Kami
          </h1>
          <p className="text-xl text-center text-gray-100 max-w-2xl mx-auto">
            GenBI Komisariat Unika De La Salle Manado
          </p>
        </div>
      </section>

      {/* Sejarah */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Sejarah GenBI
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Generasi Baru Indonesia (GenBI) adalah program beasiswa dari
                Bank Indonesia yang ditujukan untuk mahasiswa berprestasi di
                seluruh Indonesia. Program ini bertujuan untuk mencetak generasi
                muda yang memiliki karakter kuat, kompetensi tinggi, dan dedikasi
                untuk berkontribusi dalam pembangunan ekonomi Indonesia.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                GenBI Komisariat Unika De La Salle Manado didirikan sebagai
                wadah bagi mahasiswa Unika De La Salle Manado yang menjadi
                penerima beasiswa Bank Indonesia. Komisariat ini berfungsi
                sebagai platform pengembangan diri, networking, dan kontribusi
                sosial bagi anggotanya.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Sejak didirikan, GenBI Komisariat Unika telah melaksanakan
                berbagai program kerja yang berkontribusi pada pengembangan
                mahasiswa dan masyarakat sekitar, baik melalui kegiatan edukatif,
                sosial, maupun pengembangan kapasitas anggota.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Visi */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-bi-blue to-bi-light-blue rounded-lg flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Visi
                  </h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Menjadi komisariat GenBI yang unggul dalam mencetak generasi
                  muda berkarakter, berkompeten, dan berdedikasi tinggi untuk
                  berkontribusi dalam pembangunan ekonomi Indonesia, khususnya
                  di wilayah Sulawesi Utara.
                </p>
              </div>

              {/* Misi */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-bi-gold to-yellow-400 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-bi-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Misi
                  </h2>
                </div>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-bi-blue dark:text-bi-gold mr-2">•</span>
                    <span>
                      Mengembangkan kapasitas dan kompetensi anggota melalui
                      berbagai program pengembangan diri
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bi-blue dark:text-bi-gold mr-2">•</span>
                    <span>
                      Melaksanakan kegiatan sosial dan edukatif yang bermanfaat
                      bagi masyarakat
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bi-blue dark:text-bi-gold mr-2">•</span>
                    <span>
                      Membangun jaringan dan kolaborasi dengan berbagai pihak
                      untuk pengembangan bersama
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bi-blue dark:text-bi-gold mr-2">•</span>
                    <span>
                      Meningkatkan literasi keuangan dan ekonomi di kalangan
                      mahasiswa dan masyarakat
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Struktur Organisasi
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="space-y-6">
                {/* Ketua Umum */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Ketua Umum
                  </h3>
                  <p className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    Giovani Handri George Malonda
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Memimpin dan mengkoordinasikan seluruh kegiatan komisariat
                  </p>
                </div>

                {/* Ketua Komisariat */}
                <div className="border-l-4 border-bi-blue pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Ketua Komisariat
                  </h3>
                  <p className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    Regina Novena Tumbelaka
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Memimpin dan mengkoordinasikan seluruh kegiatan komisariat
                  </p>
                </div>

                {/* Sekretaris */}
                <div className="border-l-4 border-bi-gold pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Sekretaris Komisariat
                  </h3>
                  <p className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    Monica Aprilia Pandeiroth
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mengelola administrasi dan dokumentasi komisariat
                  </p>
                </div>

                {/* Bendahara */}
                <div className="border-l-4 border-bi-light-blue pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Bendahara Komisariat
                  </h3>
                  <p className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    Nadia Friendcees Moniung
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mengelola keuangan dan laporan keuangan komisariat
                  </p>
                </div>

                {/* Divisi */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Divisi-divisi
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Terdiri dari 5 divisi yang mengelola program kerja spesifik:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 ml-4">
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
        </div>
      </section>

      {/* Tugas & Peran */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Tugas & Peran GenBI Komisariat
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Pengembangan Anggota",
                  description:
                    "Menyelenggarakan program pengembangan kapasitas dan kompetensi anggota melalui pelatihan, workshop, dan kegiatan edukatif.",
                },
                {
                  icon: <Award className="w-6 h-6" />,
                  title: "Kontribusi Sosial",
                  description:
                    "Melaksanakan kegiatan bakti sosial dan program pemberdayaan masyarakat sebagai bentuk kontribusi nyata.",
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Edukasi Publik",
                  description:
                    "Meningkatkan literasi keuangan dan ekonomi di kalangan mahasiswa dan masyarakat luas.",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Networking",
                  description:
                    "Membangun jaringan dan kolaborasi dengan berbagai pihak, baik internal kampus maupun eksternal.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-bi-blue dark:text-bi-gold mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

