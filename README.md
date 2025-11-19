# 🌐 Website GenBI Komisariat Unika De La Salle Manado

Website resmi GenBI Komisariat Unika De La Salle Manado - Energi untuk Negeri

## ✨ Fitur

- ✅ **Halaman Beranda** - Hero section, sambutan ketua, highlight program, link cepat, dan testimoni
- ✅ **Tentang Kami** - Sejarah, visi & misi, struktur organisasi, tugas & peran
- ✅ **Divisi Kepengurusan** - Informasi lengkap tentang setiap divisi
- ✅ **Program Kerja** - Kumpulan program dan kegiatan tahunan
- ✅ **Berita & Artikel** - Dokumentasi kegiatan, pengumuman, dan artikel edukatif
- ✅ **Galeri** - Album foto dan video dokumentasi kegiatan
- ✅ **Pendaftaran** - Formulir pendaftaran anggota baru
- ✅ **Kontak** - Informasi kontak dan form pesan
- ✅ **Dark Mode** - Toggle dark/light mode
- ✅ **Responsive Design** - Mobile-friendly untuk semua perangkat

## 🚀 Teknologi

- **Next.js 14** - React framework dengan App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling utility-first
- **Lucide React** - Icon library

## 📦 Instalasi

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Buka browser di [http://localhost:3000](http://localhost:3000)

## 🎨 Warna Brand

- **Bank Indonesia Blue**: `#003087`
- **Light Blue**: `#0056B3`
- **Gold**: `#FFD700`

## 📁 Struktur Folder

```
GENBIWEB/
├── app/
│   ├── page.tsx              # Halaman Beranda
│   ├── tentang-kami/         # Halaman Tentang Kami
│   ├── divisi/               # Halaman Divisi
│   ├── program-kerja/        # Halaman Program Kerja
│   ├── berita/               # Halaman Berita & Artikel
│   ├── galeri/               # Halaman Galeri
│   ├── pendaftaran/          # Halaman Pendaftaran
│   ├── kontak/               # Halaman Kontak
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Header.tsx            # Header dengan navigation
│   └── Footer.tsx            # Footer
└── package.json
```

## 🔧 Customization

### Mengubah Konten

- Edit file di folder `app/` untuk mengubah konten halaman
- Update informasi kontak di `components/Footer.tsx` dan `app/kontak/page.tsx`
- Ganti placeholder images dengan foto asli kegiatan GenBI

### Menambahkan Halaman Baru

1. Buat folder baru di `app/`
2. Buat file `page.tsx` di dalam folder tersebut
3. Tambahkan link di `components/Header.tsx`

### Mengubah Warna

Edit file `tailwind.config.ts` untuk mengubah warna brand:

```typescript
colors: {
  "bi-blue": "#003087",
  "bi-gold": "#FFD700",
  "bi-light-blue": "#0056B3",
}
```

## 🎨 Logo & Ikon

Logo GenBI sudah diintegrasikan ke dalam website:
- **Komponen Logo**: `components/Logo.tsx` - Logo SVG yang digunakan di header
- **Favicon**: `public/favicon.svg` - Ikon website di browser tab

### Mengganti dengan Logo Asli

Jika Anda memiliki file logo asli (PNG/JPG/SVG):
1. Ganti file `public/favicon.svg` dengan logo SVG asli
2. Atau konversi logo ke format yang diinginkan dan update path di `app/layout.tsx`
3. Untuk logo di header, edit `components/Logo.tsx` atau ganti dengan `<img>` tag

## 📝 Catatan

- Formulir pendaftaran saat ini hanya menampilkan alert. Untuk production, perlu integrasi dengan backend.
- Google Maps di halaman kontak perlu diisi dengan embed code yang sebenarnya.
- Image placeholder perlu diganti dengan foto asli kegiatan GenBI.
- Logo saat ini adalah versi SVG yang dibuat berdasarkan deskripsi. Ganti dengan logo asli untuk hasil terbaik.

## 🚢 Build untuk Production

```bash
npm run build
npm start
```

## 📄 License

© 2024 GenBI Komisariat Unika De La Salle Manado. All rights reserved.

