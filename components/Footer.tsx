import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bi-blue text-white dark:bg-gray-900 dark:border-t dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-bi-gold">GenBI</h3>
            <p className="text-gray-300 dark:text-gray-400 text-sm mb-4">
              Generasi Baru Indonesia Komisariat Universitas Katolik De La Salle.
              Energi untuk Negeri.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/genbiukdlsm"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bi-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/tentang-kami"
                  className="text-gray-300 dark:text-gray-400 hover:text-bi-gold transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/divisi"
                  className="text-gray-300 dark:text-gray-400 hover:text-bi-gold transition-colors"
                >
                  Divisi
                </Link>
              </li>
              <li>
                <Link
                  href="/program-kerja"
                  className="text-gray-300 dark:text-gray-400 hover:text-bi-gold transition-colors"
                >
                  Program Kerja
                </Link>
              </li>
              <li>
                <Link
                  href="/pendaftaran"
                  className="text-gray-300 dark:text-gray-400 hover:text-bi-gold transition-colors"
                >
                  Pendaftaran
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Sumber Daya</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/berita"
                  className="text-gray-300 dark:text-gray-400 hover:text-bi-gold transition-colors"
                >
                  Berita & Artikel
                </Link>
              </li>
              <li>
                <Link
                  href="/galeri"
                  className="text-gray-300 dark:text-gray-400 hover:text-bi-gold transition-colors"
                >
                  Galeri
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-gray-300 dark:text-gray-400 hover:text-bi-gold transition-colors"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-bi-gold flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:genbiunikadelasalle@gmail.com"
                  className="text-gray-300 dark:text-gray-400 hover:text-bi-gold transition-colors"
                >
                  genbiunikadelasalle@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Instagram className="w-5 h-5 text-bi-gold flex-shrink-0 mt-0.5" />
                <a
                  href="https://instagram.com/genbiukdlsm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 dark:text-gray-400 hover:text-bi-gold transition-colors"
                >
                  @genbiukdlsm
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-bi-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 dark:text-gray-400">
                  Unika De La Salle Manado
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} GenBI Komisariat Unika De La Salle
            Manado. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

