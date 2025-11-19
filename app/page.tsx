"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Users, BookOpen, Image as ImageIcon } from "lucide-react";

export default function Home() {
  const [testimonials, setTestimonials] = useState([
    { name: "", role: "", quote: "" },
    { name: "", role: "", quote: "" },
    { name: "", role: "", quote: "" },
  ]);

  const updateTestimonial = (index: number, field: string, value: string) => {
    const updated = [...testimonials];
    updated[index] = { ...updated[index], [field]: value };
    setTestimonials(updated);
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bi-blue via-bi-light-blue to-bi-blue text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Energi untuk Negeri
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              GenBI Komisariat Unika De La Salle Manado
            </p>
            <p className="text-lg mb-10 text-gray-200 max-w-2xl mx-auto">
              Wadah pengembangan diri bagi mahasiswa berprestasi untuk
              berkontribusi dalam pembangunan ekonomi Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pendaftaran"
                className="bg-bi-gold text-bi-blue px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
              >
                Daftar Sekarang
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/tentang-kami"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-900"></div>
      </section>

      {/* Sambutan Ketua */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-bi-blue to-bi-light-blue rounded-2xl p-8 md:p-12 text-white shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-bi-gold">
                Sambutan Ketua Komisariat
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Selamat datang di website resmi GenBI Komisariat Unika De La
                Salle Manado. GenBI adalah program beasiswa dari Bank Indonesia
                yang bertujuan untuk mencetak generasi muda yang berkarakter,
                berkompeten, dan berdedikasi tinggi.
              </p>
              <p className="text-lg leading-relaxed">
                Melalui website ini, kami berharap dapat memberikan informasi
                lengkap tentang kegiatan, program kerja, dan kesempatan bergabung
                bersama kami. Mari bersama-sama menjadi energi untuk negeri!
              </p>
              <p className="mt-6 text-bi-gold font-semibold">
                — Ketua Komisariat GenBI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Program */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Program & Kegiatan Terbaru
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Seminar Literasi Keuangan",
                description:
                  "Program edukasi tentang pengelolaan keuangan pribadi dan investasi untuk mahasiswa.",
                date: "15 Maret 2024",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Bakti Sosial",
                description:
                  "Kegiatan sosial membantu masyarakat sekitar kampus dalam berbagai bentuk kegiatan.",
                date: "20 Maret 2024",
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Workshop Leadership",
                description:
                  "Pelatihan kepemimpinan dan pengembangan soft skills untuk anggota GenBI.",
                date: "25 Maret 2024",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <div className="text-bi-blue dark:text-bi-gold mb-4">
                  {program.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {program.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {program.description}
                </p>
                <p className="text-sm text-bi-blue dark:text-bi-gold font-medium">
                  {program.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Link Cepat */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Akses Cepat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/pendaftaran"
              className="group bg-gradient-to-br from-bi-blue to-bi-light-blue text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <Users className="w-10 h-10" />
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pendaftaran Anggota</h3>
              <p className="text-gray-200">
                Bergabunglah dengan GenBI dan kembangkan potensimu
              </p>
            </Link>

            <Link
              href="/program-kerja"
              className="group bg-gradient-to-br from-bi-gold to-yellow-400 text-bi-blue p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <Calendar className="w-10 h-10" />
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
              <h3 className="text-xl font-bold mb-2">Agenda Kegiatan</h3>
              <p className="text-bi-blue/80">
                Lihat jadwal dan program kerja GenBI
              </p>
            </Link>

            <Link
              href="/galeri"
              className="group bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <ImageIcon className="w-10 h-10" />
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
              <h3 className="text-xl font-bold mb-2">Dokumentasi</h3>
              <p className="text-gray-300">
                Lihat foto dan video kegiatan GenBI
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Kata Mereka
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimoni, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-bi-blue dark:hover:border-bi-gold transition-colors"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-bi-blue to-bi-light-blue rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {testimoni.name ? testimoni.name.charAt(0).toUpperCase() : "?"}
                  </div>
                  <div className="ml-4 flex-1 min-w-0">
                    <input
                      type="text"
                      placeholder="Nama"
                      value={testimoni.name}
                      onChange={(e) => updateTestimonial(index, "name", e.target.value)}
                      className="w-full bg-transparent border-none outline-none font-semibold text-gray-900 dark:text-white placeholder:text-gray-400 mb-1 focus:ring-2 focus:ring-bi-blue dark:focus:ring-bi-gold rounded px-2 py-1"
                    />
                    <input
                      type="text"
                      placeholder="Jabatan/Divisi"
                      value={testimoni.role}
                      onChange={(e) => updateTestimonial(index, "role", e.target.value)}
                      className="w-full bg-transparent border-none outline-none text-sm text-gray-600 dark:text-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-bi-blue dark:focus:ring-bi-gold rounded px-2 py-1"
                    />
                  </div>
                </div>
                <textarea
                  placeholder="Tuliskan testimoni atau kata-kata mereka di sini..."
                  value={testimoni.quote}
                  onChange={(e) => updateTestimonial(index, "quote", e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-gray-700 dark:text-gray-300 italic resize-none min-h-[100px] placeholder:text-gray-400 focus:ring-2 focus:ring-bi-blue dark:focus:ring-bi-gold rounded px-2 py-2"
                  rows={4}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

