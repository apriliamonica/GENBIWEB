import { Camera, Leaf, BookOpen, Briefcase, Heart } from "lucide-react";

export default function Divisi() {
  const divisi = [
    {
      icon: <Camera className="w-8 h-8" />,
      name: "Publikasi & Dokumentasi",
      fullName: "Divisi Publikasi & Dokumentasi",
      color: "from-pink-500 to-pink-600",
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
      icon: <Leaf className="w-8 h-8" />,
      name: "Lingkungan Hidup",
      fullName: "Divisi Lingkungan Hidup",
      color: "from-green-500 to-emerald-600",
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
      icon: <BookOpen className="w-8 h-8" />,
      name: "Pendidikan & Kerohanian",
      fullName: "Divisi Pendidikan & Kerohanian",
      color: "from-blue-500 to-blue-600",
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
      icon: <Briefcase className="w-8 h-8" />,
      name: "Kewirausahaan",
      fullName: "Divisi Kewirausahaan",
      color: "from-yellow-500 to-orange-500",
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
      icon: <Heart className="w-8 h-8" />,
      name: "Kesehatan Masyarakat",
      fullName: "Divisi Kesehatan Masyarakat",
      color: "from-red-500 to-rose-600",
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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bi-blue to-bi-light-blue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Divisi Kepengurusan
          </h1>
          <p className="text-xl text-center text-gray-100 max-w-2xl mx-auto">
            Struktur organisasi dan divisi yang mengelola program kerja GenBI
          </p>
        </div>
      </section>

      {/* Divisi Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {divisi.map((div, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div
                  className={`bg-gradient-to-r ${div.color} text-white p-6`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="bg-white/20 rounded-lg p-3">
                      {div.icon}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold">{div.name}</h2>
                  <p className="text-sm text-white/90">{div.fullName}</p>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                      Tugas & Fungsi
                    </h3>
                    <ul className="space-y-2">
                      {div.tugas.map((tugas, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-bi-blue dark:text-bi-gold mr-2 mt-1">
                            •
                          </span>
                          <span>{tugas}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                      Program Kerja
                    </h3>
                    <ul className="space-y-2">
                      {div.program.map((prog, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-bi-blue dark:text-bi-gold mr-2 mt-1">
                            •
                          </span>
                          <span>{prog}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pengurus Divisi */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Pengurus Divisi
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                Setiap divisi dikelola oleh koordinator divisi dan beberapa
                anggota yang bertanggung jawab atas program kerja divisi
                masing-masing.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {divisi.map((div, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {div.name}
                    </h3>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-bi-blue to-bi-light-blue rounded-full flex items-center justify-center text-white font-bold">
                        {div.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Koordinator Divisi
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          [Akan diisi]
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

