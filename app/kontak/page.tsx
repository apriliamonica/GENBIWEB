import { Mail, Instagram, MapPin, Phone, Clock } from "lucide-react";

export default function Kontak() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bi-blue to-bi-light-blue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Hubungi Kami
          </h1>
          <p className="text-xl text-center text-gray-100 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami jika ada pertanyaan atau informasi yang dibutuhkan
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Email */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-bi-blue to-bi-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Email
              </h3>
              <a
                href="mailto:genbiunikadelasalle@gmail.com"
                className="text-bi-blue dark:text-bi-gold hover:underline"
              >
                genbiunikadelasalle@gmail.com
              </a>
            </div>

            {/* Instagram */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Instagram
              </h3>
              <a
                href="https://instagram.com/genbiukdlsm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bi-blue dark:text-bi-gold hover:underline"
              >
                @genbiukdlsm
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                WhatsApp
              </h3>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bi-blue dark:text-bi-gold hover:underline"
              >
                +62 812-3456-7890
              </a>
            </div>

            {/* Lokasi */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Lokasi
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Unika De La Salle Manado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Kirim Pesan
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-bi-blue dark:focus:ring-bi-gold focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-bi-blue dark:focus:ring-bi-gold focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-bi-blue dark:focus:ring-bi-gold focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Pesan
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-bi-blue dark:focus:ring-bi-gold focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-bi-blue to-bi-light-blue text-white py-3 rounded-lg font-semibold hover:from-bi-light-blue hover:to-bi-blue transition-all"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Map & Info */}
            <div className="space-y-6">
              {/* Map */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Lokasi Kampus
                </h2>
                <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 dark:text-gray-400">
                      Google Maps akan ditampilkan di sini
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Alamat:</strong> Jl. Kampus Unika De La Salle, Manado,
                  Sulawesi Utara
                </p>
              </div>

              {/* Office Hours */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-bi-blue dark:text-bi-gold mr-3" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Jam Operasional
                  </h3>
                </div>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>Senin - Jumat:</strong> 08:00 - 17:00 WITA
                  </p>
                  <p>
                    <strong>Sabtu:</strong> 08:00 - 12:00 WITA
                  </p>
                  <p>
                    <strong>Minggu:</strong> Tutup
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

