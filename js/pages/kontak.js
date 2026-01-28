// Kontak Page
function renderKontakPage() {
  const html = `
        <div class="min-h-screen bg-white dark:bg-gray-900">
            <section class="py-20 text-white" style="background: linear-gradient(to bottom right, #003087, #0056B3);">
                <div class="container mx-auto px-4">
                    <h1 class="text-4xl md:text-5xl font-bold text-center mb-4">Hubungi Kami</h1>
                    <p class="text-xl text-center text-gray-100 max-w-2xl mx-auto">Jangan ragu untuk menghubungi kami jika ada pertanyaan atau informasi yang dibutuhkan</p>
                </div>
            </section>

            <section class="py-16">
                <div class="container mx-auto px-4">
                    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        <div class="card p-6 text-center hover:shadow-xl transition-shadow">
                            <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style="background: linear-gradient(to bottom right, #003087, #0056B3);">${Icons.Mail("w-8 h-8 text-white")}</div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                            <a href="mailto:genbiunikadelasalle@gmail.com" class="text-bi-blue dark:text-bi-gold hover:underline">genbiunikadelasalle@gmail.com</a>
                        </div>
                        <div class="card p-6 text-center hover:shadow-xl transition-shadow">
                            <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style="background: linear-gradient(to bottom right, #ec4899, #a855f7);">${Icons.Instagram("w-8 h-8 text-white")}</div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Instagram</h3>
                            <a href="https://instagram.com/genbiukdlsm" target="_blank" rel="noopener noreferrer" class="text-bi-blue dark:text-bi-gold hover:underline">@genbiukdlsm</a>
                        </div>
                        <div class="card p-6 text-center hover:shadow-xl transition-shadow">
                            <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style="background: linear-gradient(to bottom right, #22c55e, #16a34a);">${Icons.Phone("w-8 h-8 text-white")}</div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">WhatsApp</h3>
                            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" class="text-bi-blue dark:text-bi-gold hover:underline">+62 812-3456-7890</a>
                        </div>
                        <div class="card p-6 text-center hover:shadow-xl transition-shadow">
                            <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style="background: linear-gradient(to bottom right, #ef4444, #f97316);">${Icons.MapPin("w-8 h-8 text-white")}</div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Lokasi</h3>
                            <p class="text-sm text-gray-600 dark:text-gray-400">Unika De La Salle Manado</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-16 bg-gray-50 dark:bg-gray-800">
                <div class="container mx-auto px-4">
                    <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div class="card p-8">
                            <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Kirim Pesan</h2>
                            <form class="space-y-4" onsubmit="event.preventDefault(); alert('Pesan terkirim!');">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nama</label>
                                    <input type="text" class="form-input" required>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                    <input type="email" class="form-input" required>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subjek</label>
                                    <input type="text" class="form-input" required>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Pesan</label>
                                    <textarea rows="5" class="form-input" required></textarea>
                                </div>
                                <button type="submit" class="w-full py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90" style="background: linear-gradient(to right, #003087, #0056B3);">Kirim Pesan</button>
                            </form>
                        </div>
                        <div class="space-y-6">
                            <div class="card p-8">
                                <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Lokasi Kampus</h2>
                                <div class="h-64 rounded-lg flex items-center justify-center mb-4" style="background: linear-gradient(to bottom right, #e5e7eb, #d1d5db);">
                                    <div class="text-center">
                                        ${Icons.MapPin("w-12 h-12 text-gray-400 mx-auto mb-2")}
                                        <p class="text-gray-600 dark:text-gray-400">Google Maps akan ditampilkan di sini</p>
                                    </div>
                                </div>
                                <p class="text-gray-700 dark:text-gray-300"><strong>Alamat:</strong> Jl. Kampus Unika De La Salle, Manado, Sulawesi Utara</p>
                            </div>
                            <div class="card p-6">
                                <div class="flex items-center mb-4">
                                    ${Icons.Clock("w-6 h-6 text-bi-blue dark:text-bi-gold mr-3")}
                                    <h3 class="text-xl font-bold text-gray-900 dark:text-white">Jam Operasional</h3>
                                </div>
                                <div class="space-y-2 text-gray-700 dark:text-gray-300">
                                    <p><strong>Senin - Jumat:</strong> 08:00 - 17:00 WITA</p>
                                    <p><strong>Sabtu:</strong> 08:00 - 12:00 WITA</p>
                                    <p><strong>Minggu:</strong> Tutup</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;
  document.getElementById("main-content").innerHTML = html;
}
