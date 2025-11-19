"use client";

import { useState } from "react";
import { Calendar, Image as ImageIcon, Video, Filter } from "lucide-react";

export default function Galeri() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = ["Semua", "Seminar", "Bakti Sosial", "Workshop", "Gathering", "Lainnya"];

  const albums = [
    {
      id: 1,
      title: "Seminar Literasi Keuangan 2024",
      category: "Seminar",
      date: "15 Maret 2024",
      imageCount: 25,
      thumbnail: "/api/placeholder/400/300",
    },
    {
      id: 2,
      title: "Bakti Sosial Ramadhan 2024",
      category: "Bakti Sosial",
      date: "10 Maret 2024",
      imageCount: 18,
      thumbnail: "/api/placeholder/400/300",
    },
    {
      id: 3,
      title: "Workshop Leadership",
      category: "Workshop",
      date: "28 Februari 2024",
      imageCount: 30,
      thumbnail: "/api/placeholder/400/300",
    },
    {
      id: 4,
      title: "Go Green: Penanaman Pohon",
      category: "Lainnya",
      date: "20 Februari 2024",
      imageCount: 15,
      thumbnail: "/api/placeholder/400/300",
    },
    {
      id: 5,
      title: "Gathering Anggota GenBI",
      category: "Gathering",
      date: "15 Februari 2024",
      imageCount: 22,
      thumbnail: "/api/placeholder/400/300",
    },
    {
      id: 6,
      title: "Open Recruitment 2024",
      category: "Lainnya",
      date: "5 Februari 2024",
      imageCount: 20,
      thumbnail: "/api/placeholder/400/300",
    },
  ];

  const filteredAlbums =
    selectedCategory === "Semua"
      ? albums
      : albums.filter((album) => album.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bi-blue to-bi-light-blue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Galeri
          </h1>
          <p className="text-xl text-center text-gray-100 max-w-2xl mx-auto">
            Dokumentasi foto dan video kegiatan GenBI Komisariat Unika
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center flex-wrap gap-3">
            <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-bi-blue text-white dark:bg-bi-gold dark:text-bi-blue"
                    : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAlbums.map((album) => (
              <div
                key={album.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all hover:scale-105 cursor-pointer group"
              >
                <div className="relative h-64 bg-gradient-to-br from-bi-blue to-bi-light-blue overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="w-16 h-16 text-white opacity-80" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-bi-blue px-3 py-1 rounded-full text-xs font-medium">
                      {album.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">
                        {album.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {album.date}
                        </div>
                        <div className="flex items-center">
                          <ImageIcon className="w-3 h-3 mr-1" />
                          {album.imageCount} foto
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredAlbums.length === 0 && (
            <div className="text-center py-16">
              <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">
                Tidak ada album dalam kategori ini.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Video Dokumentasi
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Seminar Literasi Keuangan 2024",
                description: "Highlight kegiatan seminar literasi keuangan",
              },
              {
                title: "Bakti Sosial Ramadhan 2024",
                description: "Dokumentasi kegiatan bakti sosial",
              },
            ].map((video, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="relative h-64 bg-gradient-to-br from-bi-blue to-bi-light-blue flex items-center justify-center">
                  <Video className="w-16 h-16 text-white opacity-80" />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

