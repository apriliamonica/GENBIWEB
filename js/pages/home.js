// Home Page Component
function renderHomePage() {
  const testimonials = [
    { name: "", role: "", quote: "" },
    { name: "", role: "", quote: "" },
    { name: "", role: "", quote: "" },
  ];

  const programs = [
    {
      icon: Icons.BookOpen("w-8 h-8"),
      title: "Seminar Literasi Keuangan",
      description:
        "Program edukasi tentang pengelolaan keuangan pribadi dan investasi untuk mahasiswa.",
      date: "15 Maret 2024",
    },
    {
      icon: Icons.Users("w-8 h-8"),
      title: "Bakti Sosial",
      description:
        "Kegiatan sosial membantu masyarakat sekitar kampus dalam berbagai bentuk kegiatan.",
      date: "20 Maret 2024",
    },
    {
      icon: Icons.Calendar("w-8 h-8"),
      title: "Workshop Leadership",
      description:
        "Pelatihan kepemimpinan dan pengembangan soft skills untuk anggota GenBI.",
      date: "25 Maret 2024",
    },
  ];

  const html = `
        <div class="min-h-screen">
            <!-- Hero Section -->
            <section class="hero-gradient relative text-white py-20 lg:py-32 overflow-hidden" style="background: linear-gradient(to bottom right, #003087, #0056B3, #003087);">
                <div class="absolute inset-0 bg-black/20"></div>
                <div class="container mx-auto px-4 relative z-10">
                    <div class="max-w-4xl mx-auto text-center">
                        <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Energi untuk Negeri</h1>
                        <p class="text-xl md:text-2xl mb-8 text-gray-100">GenBI Komisariat Unika De La Salle Manado</p>
                        <p class="text-lg mb-10 text-gray-200 max-w-2xl mx-auto">Wadah pengembangan diri bagi mahasiswa berprestasi untuk berkontribusi dalam pembangunan ekonomi Indonesia.</p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#/pendaftaran" class="btn btn-primary">${Icons.ArrowRight("w-5 h-5 ml-2")} Daftar Sekarang</a>
                            <a href="#/tentang-kami" class="btn btn-secondary">Pelajari Lebih Lanjut</a>
                        </div>
                    </div>
                </div>
                <div class="absolute bottom-0 left-0 right-0 h-20" style="background: linear-gradient(to top, white, transparent);"></div>
            </section>

            <!-- Sambutan Ketua -->
            <section class="py-16 bg-white dark:bg-gray-900">
                <div class="container mx-auto px-4">
                    <div class="max-w-4xl mx-auto">
                        <div class="rounded-2xl p-8 md:p-12 text-white shadow-xl" style="background: linear-gradient(to right, #003087, #0056B3);">
                            <h2 class="text-3xl font-bold mb-6 text-bi-gold">Sambutan Ketua Komisariat</h2>
                            <p class="text-lg leading-relaxed mb-4">Selamat datang di website resmi GenBI Komisariat Unika De La Salle Manado. GenBI adalah program beasiswa dari Bank Indonesia yang bertujuan untuk mencetak generasi muda yang berkarakter, berkompeten, dan berdedikasi tinggi.</p>
                            <p class="text-lg leading-relaxed">Melalui website ini, kami berharap dapat memberikan informasi lengkap tentang kegiatan, program kerja, dan kesempatan bergabung bersama kami. Mari bersama-sama menjadi energi untuk negeri!</p>
                            <p class="mt-6 text-bi-gold font-semibold">— Ketua Komisariat GenBI</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Highlight Program -->
            <section class="py-16 bg-gray-50 dark:bg-gray-800">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Program & Kegiatan Terbaru</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        ${programs
                          .map(
                            (p) => `
                            <div class="card p-6">
                                <div class="text-bi-blue dark:text-bi-gold mb-4">${p.icon}</div>
                                <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">${p.title}</h3>
                                <p class="text-gray-600 dark:text-gray-400 mb-4">${p.description}</p>
                                <p class="text-sm text-bi-blue dark:text-bi-gold font-medium">${p.date}</p>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                </div>
            </section>

            <!-- Akses Cepat -->
            <section class="py-16 bg-white dark:bg-gray-900">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Akses Cepat</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <a href="#/pendaftaran" class="group p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 text-white" style="background: linear-gradient(to bottom right, #003087, #0056B3); text-decoration: none;">
                            <div class="flex items-center justify-between mb-4">
                                ${Icons.Users("w-10 h-10")}
                                <span class="group-hover:translate-x-2 transition-transform">${Icons.ArrowRight("w-6 h-6")}</span>
                            </div>
                            <h3 class="text-xl font-bold mb-2">Pendaftaran Anggota</h3>
                            <p class="text-gray-200">Bergabunglah dengan GenBI dan kembangkan potensimu</p>
                        </a>
                        <a href="#/program-kerja" class="group p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105" style="background: linear-gradient(to bottom right, #FFD700, #facc15); color: #003087; text-decoration: none;">
                            <div class="flex items-center justify-between mb-4">
                                ${Icons.Calendar("w-10 h-10")}
                                <span class="group-hover:translate-x-2 transition-transform">${Icons.ArrowRight("w-6 h-6")}</span>
                            </div>
                            <h3 class="text-xl font-bold mb-2">Agenda Kegiatan</h3>
                            <p style="color: rgba(0,48,135,0.8);">Lihat jadwal dan program kerja GenBI</p>
                        </a>
                        <a href="#/galeri" class="group p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 text-white" style="background: linear-gradient(to bottom right, #1f2937, #111827); text-decoration: none;">
                            <div class="flex items-center justify-between mb-4">
                                ${Icons.Image("w-10 h-10")}
                                <span class="group-hover:translate-x-2 transition-transform">${Icons.ArrowRight("w-6 h-6")}</span>
                            </div>
                            <h3 class="text-xl font-bold mb-2">Dokumentasi</h3>
                            <p class="text-gray-300">Lihat foto dan video kegiatan GenBI</p>
                        </a>
                    </div>
                </div>
            </section>

            <!-- Testimonial -->
            <section class="py-16 bg-gray-50 dark:bg-gray-800">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Kata Mereka</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" id="testimonials-container">
                        ${testimonials
                          .map(
                            (t, i) => `
                            <div class="card p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-bi-blue dark:hover:border-bi-gold transition-colors">
                                <div class="flex items-center mb-4">
                                    <div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style="background: linear-gradient(to bottom right, #003087, #0056B3);">
                                        <span id="avatar-${i}">${t.name ? t.name.charAt(0).toUpperCase() : "?"}</span>
                                    </div>
                                    <div class="ml-4 flex-1 min-w-0">
                                        <input type="text" placeholder="Nama" value="${t.name}" data-index="${i}" data-field="name" class="form-input mb-1 font-semibold testimonial-input">
                                        <input type="text" placeholder="Jabatan/Divisi" value="${t.role}" data-index="${i}" data-field="role" class="form-input text-sm testimonial-input">
                                    </div>
                                </div>
                                <textarea placeholder="Tuliskan testimoni atau kata-kata mereka di sini..." data-index="${i}" data-field="quote" class="form-input italic resize-none testimonial-input" rows="4">${t.quote}</textarea>
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
  initTestimonialInputs();
}

function initTestimonialInputs() {
  document.querySelectorAll(".testimonial-input").forEach((input) => {
    input.addEventListener("input", (e) => {
      const index = e.target.dataset.index;
      const field = e.target.dataset.field;
      if (field === "name") {
        const avatar = document.getElementById(`avatar-${index}`);
        avatar.textContent = e.target.value
          ? e.target.value.charAt(0).toUpperCase()
          : "?";
      }
    });
  });
}
