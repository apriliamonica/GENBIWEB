// Pendaftaran Page
function renderPendaftaranPage() {
  const html = `
        <div class="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
            <section class="w-full py-20">
                <div class="container mx-auto px-4">
                    <div class="max-w-2xl mx-auto text-center">
                        <div class="mb-8">
                            <div class="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse" style="background: linear-gradient(to bottom right, #003087, #0056B3);">
                                ${Icons.Clock("w-16 h-16 text-white")}
                            </div>
                        </div>
                        <h1 class="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">Coming Soon</h1>
                        <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">Pendaftaran anggota baru akan segera dibuka</p>
                        <p class="text-lg text-gray-500 dark:text-gray-500">Pantau terus media sosial kami untuk informasi terbaru</p>
                    </div>
                </div>
            </section>
        </div>
    `;
  document.getElementById("main-content").innerHTML = html;
}
