import { BookOpen, Users, Leaf, Briefcase, Calendar, Target } from "lucide-react";

export default function ProgramKerja() {
  const programs = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Seminar & Workshop",
      category: "Edukasi",
      description:
        "Program edukasi untuk meningkatkan literasi keuangan, ekonomi, dan pengembangan diri melalui seminar dan workshop berkualitas.",
      tujuan: [
        "Meningkatkan pemahaman tentang ekonomi dan keuangan",
        "Mengembangkan soft skills peserta",
        "Membangun networking antar peserta",
      ],
      kegiatan: [
        "Seminar Literasi Keuangan",
        "Workshop Leadership",
        "Seminar Ekonomi Digital",
        "Pelatihan Public Speaking",
      ],
      pic: "Divisi PSDM & Humas",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Bakti Sosial",
      category: "Sosial",
      description:
        "Kegiatan sosial yang bertujuan untuk membantu masyarakat sekitar dan memberikan kontribusi nyata bagi lingkungan.",
      tujuan: [
        "Membantu masyarakat yang membutuhkan",
        "Membangun kepedulian sosial anggota",
        "Memberikan kontribusi positif bagi masyarakat",
      ],
      kegiatan: [
        "Bakti Sosial ke Panti Asuhan",
        "Bantuan untuk Korban Bencana",
        "Program Bantuan Pendidikan",
        "Kegiatan Sosial di Lingkungan Kampus",
      ],
      pic: "Divisi Sosial & Lingkungan",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Go Green Program",
      category: "Lingkungan",
      description:
        "Program peduli lingkungan untuk menjaga kelestarian alam dan meningkatkan kesadaran akan pentingnya lingkungan hidup.",
      tujuan: [
        "Meningkatkan kesadaran lingkungan",
        "Mengurangi dampak negatif terhadap lingkungan",
        "Membangun budaya ramah lingkungan",
      ],
      kegiatan: [
        "Penanaman Pohon",
        "Kampanye Reduce, Reuse, Recycle",
        "Pembersihan Lingkungan",
        "Workshop Lingkungan Hidup",
      ],
      pic: "Divisi Sosial & Lingkungan",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Financial Literacy",
      category: "Edukasi",
      description:
        "Program edukasi keuangan untuk meningkatkan pemahaman tentang pengelolaan keuangan pribadi dan investasi.",
      tujuan: [
        "Meningkatkan literasi keuangan mahasiswa",
        "Mengajarkan pengelolaan keuangan yang baik",
        "Memperkenalkan instrumen investasi",
      ],
      kegiatan: [
        "Workshop Financial Planning",
        "Seminar Investasi",
        "Konsultasi Keuangan Gratis",
        "Program Edukasi Keuangan untuk Masyarakat",
      ],
      pic: "Divisi PSDM",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pengembangan SDM",
      category: "Pengembangan",
      description:
        "Program pengembangan sumber daya manusia untuk meningkatkan kapasitas dan kompetensi anggota GenBI.",
      tujuan: [
        "Mengembangkan soft skills anggota",
        "Meningkatkan leadership skills",
        "Membangun karakter yang kuat",
      ],
      kegiatan: [
        "Program Mentoring",
        "Training Leadership",
        "Workshop Team Building",
        "Pelatihan Komunikasi",
      ],
      pic: "Divisi PSDM",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Event Kolaborasi dengan BI",
      category: "Kolaborasi",
      description:
        "Kegiatan kolaborasi dengan Bank Indonesia dalam berbagai program dan event nasional GenBI.",
      tujuan: [
        "Memperkuat hubungan dengan Bank Indonesia",
        "Mengikuti program nasional GenBI",
        "Membangun networking nasional",
      ],
      kegiatan: [
        "GenBI National Gathering",
        "Seminar Nasional GenBI",
        "Kompetisi Nasional GenBI",
        "Program Magang di BI",
      ],
      pic: "Divisi Eksternal",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Kegiatan Komisariat",
      category: "Internal",
      description:
        "Kegiatan internal komisariat untuk memperkuat bonding antar anggota dan koordinasi kegiatan.",
      tujuan: [
        "Memperkuat hubungan antar anggota",
        "Meningkatkan koordinasi kegiatan",
        "Membangun budaya organisasi yang positif",
      ],
      kegiatan: [
        "Gathering Anggota",
        "Rapat Koordinasi",
        "Team Building",
        "Kegiatan Rekreasi",
      ],
      pic: "Divisi Internal",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bi-blue to-bi-light-blue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Program Kerja
          </h1>
          <p className="text-xl text-center text-gray-100 max-w-2xl mx-auto">
            Kumpulan program dan kegiatan tahunan GenBI Komisariat Unika
          </p>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-bi-blue to-bi-light-blue text-white p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/20 rounded-lg p-3">
                      {program.icon}
                    </div>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {program.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold">{program.title}</h2>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {program.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                      <Target className="w-5 h-5 mr-2 text-bi-blue dark:text-bi-gold" />
                      Tujuan
                    </h3>
                    <ul className="space-y-2">
                      {program.tujuan.map((tujuan, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-bi-blue dark:text-bi-gold mr-2 mt-1">
                            •
                          </span>
                          <span>{tujuan}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-bi-blue dark:text-bi-gold" />
                      Kegiatan
                    </h3>
                    <ul className="space-y-2">
                      {program.kegiatan.map((kegiatan, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-bi-blue dark:text-bi-gold mr-2 mt-1">
                            •
                          </span>
                          <span>{kegiatan}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        PIC:
                      </span>{" "}
                      {program.pic}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

