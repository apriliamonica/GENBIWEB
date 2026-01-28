// Galeri Page
let selectedCategory = "Semua";

function renderGaleriPage() {
  const categories = [
    "Semua",
    "Seminar",
    "Bakti Sosial",
    "Workshop",
    "Gathering",
    "Lainnya",
  ];
  const albums = [
    {
      id: 1,
      title: "Seminar Literasi Keuangan 2024",
      category: "Seminar",
      date: "15 Maret 2024",
      imageCount: 25,
    },
    {
      id: 2,
      title: "Bakti Sosial Ramadhan 2024",
      category: "Bakti Sosial",
      date: "10 Maret 2024",
      imageCount: 18,
    },
    {
      id: 3,
      title: "Workshop Leadership",
      category: "Workshop",
      date: "28 Februari 2024",
      imageCount: 30,
    },
    {
      id: 4,
      title: "Go Green: Penanaman Pohon",
      category: "Lainnya",
      date: "20 Februari 2024",
      imageCount: 15,
    },
    {
      id: 5,
      title: "Gathering Anggota GenBI",
      category: "Gathering",
      date: "15 Februari 2024",
      imageCount: 22,
    },
    {
      id: 6,
      title: "Open Recruitment 2024",
      category: "Lainnya",
      date: "5 Februari 2024",
      imageCount: 20,
    },
  ];

  const videos = [
    {
      title: "Seminar Literasi Keuangan 2024",
      description: "Highlight kegiatan seminar literasi keuangan",
    },
    {
      title: "Bakti Sosial Ramadhan 2024",
      description: "Dokumentasi kegiatan bakti sosial",
    },
  ];

  const filteredAlbums =
    selectedCategory === "Semua"
      ? albums
      : albums.filter((a) => a.category === selectedCategory);

  const html = `
        <div class="min-h-screen bg-white dark:bg-gray-900">
            <section class="py-20 text-white" style="background: linear-gradient(to bottom right, #003087, #0056B3);">
                <div class="container mx-auto px-4">
                    <h1 class="text-4xl md:text-5xl font-bold text-center mb-4">Galeri</h1>
                    <p class="text-xl text-center text-gray-100 max-w-2xl mx-auto">Dokumentasi foto dan video kegiatan GenBI Komisariat Unika</p>
                </div>
            </section>

            <section class="py-8 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div class="container mx-auto px-4">
                    <div class="flex items-center justify-center flex-wrap gap-3">
                        ${Icons.Filter("w-5 h-5 text-gray-600 dark:text-gray-400")}
                        ${categories
                          .map(
                            (c) => `
                            <button onclick="filterGaleri('${c}')" class="galeri-filter px-6 py-2 rounded-lg font-medium transition-colors ${selectedCategory === c ? "bg-bi-blue text-white dark:bg-bi-gold dark:text-bi-blue" : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700"}">${c}</button>
                        `,
                          )
                          .join("")}
                    </div>
                </div>
            </section>

            <section class="py-16">
                <div class="container mx-auto px-4">
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="albums-grid">
                        ${
                          filteredAlbums.length > 0
                            ? filteredAlbums
                                .map(
                                  (a) => `
                            <div class="card overflow-hidden hover:shadow-xl transition-all hover:scale-105 cursor-pointer group">
                                <div class="relative h-64 overflow-hidden" style="background: linear-gradient(to bottom right, #003087, #0056B3);">
                                    <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                                    <div class="absolute inset-0 flex items-center justify-center">${Icons.Image("w-16 h-16 text-white opacity-80")}</div>
                                    <div class="absolute top-4 right-4"><span class="bg-white/90 text-bi-blue px-3 py-1 rounded-full text-xs font-medium">${a.category}</span></div>
                                    <div class="absolute bottom-4 left-4 right-4">
                                        <div class="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                                            <h3 class="font-bold text-gray-900 mb-1 line-clamp-1">${a.title}</h3>
                                            <div class="flex items-center justify-between text-xs text-gray-600">
                                                <div class="flex items-center">${Icons.Calendar("w-3 h-3 mr-1")} ${a.date}</div>
                                                <div class="flex items-center">${Icons.Image("w-3 h-3 mr-1")} ${a.imageCount} foto</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `,
                                )
                                .join("")
                            : `
                            <div class="text-center py-16 col-span-full">
                                ${Icons.Image("w-16 h-16 text-gray-400 mx-auto mb-4")}
                                <p class="text-gray-600 dark:text-gray-400">Tidak ada album dalam kategori ini.</p>
                            </div>
                        `
                        }
                    </div>
                </div>
            </section>

            <section class="py-16 bg-gray-50 dark:bg-gray-800">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Video Dokumentasi</h2>
                    <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        ${videos
                          .map(
                            (v) => `
                            <div class="card overflow-hidden">
                                <div class="relative h-64 flex items-center justify-center" style="background: linear-gradient(to bottom right, #003087, #0056B3);">
                                    ${Icons.Video("w-16 h-16 text-white opacity-80")}
                                    <div class="absolute inset-0 bg-black/20"></div>
                                </div>
                                <div class="p-6">
                                    <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">${v.title}</h3>
                                    <p class="text-gray-600 dark:text-gray-400">${v.description}</p>
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

function filterGaleri(category) {
  selectedCategory = category;
  renderGaleriPage();
}
