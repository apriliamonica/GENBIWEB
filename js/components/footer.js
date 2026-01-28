// Footer Component
function renderFooter() {
  const currentYear = new Date().getFullYear();

  const footerHTML = `
        <footer class="footer">
            <div class="container mx-auto px-4 py-12">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 class="text-xl font-bold mb-4 text-bi-gold">GenBI</h3>
                        <p class="text-gray-300 dark:text-gray-400 text-sm mb-4">
                            Generasi Baru Indonesia Komisariat Universitas Katolik De La Salle.
                            Energi untuk Negeri.
                        </p>
                        <div class="flex space-x-4">
                            <a href="https://instagram.com/genbiukdlsm" target="_blank" rel="noopener noreferrer" class="hover:text-bi-gold transition-colors" aria-label="Instagram">
                                ${Icons.Instagram("w-5 h-5")}
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Tautan Cepat</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="#/tentang-kami" class="footer-link">Tentang Kami</a></li>
                            <li><a href="#/divisi" class="footer-link">Divisi</a></li>
                            <li><a href="#/program-kerja" class="footer-link">Program Kerja</a></li>
                            <li><a href="#/pendaftaran" class="footer-link">Pendaftaran</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Sumber Daya</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="#/berita" class="footer-link">Berita & Artikel</a></li>
                            <li><a href="#/galeri" class="footer-link">Galeri</a></li>
                            <li><a href="#/kontak" class="footer-link">Kontak</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Kontak</h4>
                        <ul class="space-y-3 text-sm">
                            <li class="flex items-start space-x-2">
                                ${Icons.Mail("w-5 h-5 text-bi-gold flex-shrink-0 mt-0.5")}
                                <a href="mailto:genbiunikadelasalle@gmail.com" class="footer-link">genbiunikadelasalle@gmail.com</a>
                            </li>
                            <li class="flex items-start space-x-2">
                                ${Icons.Instagram("w-5 h-5 text-bi-gold flex-shrink-0 mt-0.5")}
                                <a href="https://instagram.com/genbiukdlsm" target="_blank" rel="noopener noreferrer" class="footer-link">@genbiukdlsm</a>
                            </li>
                            <li class="flex items-start space-x-2">
                                ${Icons.MapPin("w-5 h-5 text-bi-gold flex-shrink-0 mt-0.5")}
                                <span class="text-gray-300 dark:text-gray-400">Unika De La Salle Manado</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="border-t border-gray-700 dark:border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>© ${currentYear} GenBI Komisariat Unika De La Salle Manado. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;

  document.getElementById("footer-component").innerHTML = footerHTML;
}
