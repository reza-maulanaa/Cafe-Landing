# Product Requirements Document (PRD)

## 1. Project Overview
* **Project Name:** Kopi dari hati
* **Author:** [Reza] (Web Developer)
* **Status:** Approved / Siap Eksekusi Sekuensial
* **Date:** Juli 2026

---

## 2. Tujuan Produk (Objective)
* **Masalah:** Kedai kopi lokal saat ini hanya mengandalkan media sosial (Instagram). Informasi penting seperti menu terbaru, jam buka, dan titik lokasi sering tenggelam di *feed*, sehingga calon pelanggan baru kesulitan mencari informasi dengan cepat.
* **Solusi:** Membuat sebuah *landing page* satu halaman (*single-page*) yang ringkas, sangat responsif, dan estetis. Website ini berfungsi sebagai brosur digital interaktif untuk meningkatkan kunjungan fisik (*foot traffic*) dan kredibilitas brand.

---

## 3. Target Pengguna (User Persona)
* **Pengunjung Baru:** Orang yang sedang mencari tempat nongkrong atau kerja (*WFC*). Mereka membutuhkan informasi cepat tentang lokasi tepat, menu andalan, fasilitas (Wi-Fi/colokan), dan jam operasional.
* **Pelanggan Tetap:** Orang yang ingin melihat pembaruan menu musiman (*seasonal menu*) atau mencari kontak cepat untuk reservasi tempat kelompok.

---

## 4. Ruang Lingkup & Fitur (Scope & Requirements)

### In-Scope (Wajib Ada di Fase 1)
* **Hero Section:** Foto suasana kedai beresolusi tinggi (dioptimalkan), slogan brand, dan dua tombol utama *Call to Action* (CTA): "Lihat Menu" dan "Rute Lokasi".
* **About Section:** Cerita singkat filosofi kedai kopi dan suasana unik yang ditawarkan.
* **Menu Highlight:** Komponen daftar menu terlaris yang dibagi menjadi 3 kategori (Kopi, Non-Kopi, dan Makanan) lengkap dengan harga.
* **Fasilitas & Jam Operasional:** Informasi detail jam buka-tutup serta baris ikon fasilitas (Wi-Fi cepat, area *outdoor*, area merokok, colokan listrik).
* **Footer:** Link Google Maps aktif, tombol integrasi WhatsApp chat, dan tautan ikon media sosial resmi.

### Out-of-Scope (Ditunda untuk Fase Berikutnya)
* Sistem pemesanan online langsung di website (*e-commerce / shopping cart*).
* Integrasi *Payment Gateway*.
* Fitur pembuatan akun (*Membership* atau *Loyalty Point Program*).

---

## 5. Alur Pengguna & Desain (User Flow & UI/UX)
* **User Flow:** 
  Pengguna masuk dari tautan di bio Instagram -> Membaca menu utama -> Klik tombol "Rute Lokasi" -> Otomatis diarahkan ke aplikasi Google Maps eksternal.
* **Konsep Desain:** 
  Minimalis, hangat, dan modern. Dominasi warna bumi (*earth tone*) seperti cokelat kopi, krem, dan hitam arang untuk mentransfer suasana fisik kedai ke dalam bentuk digital.

---

## 6. Spesifikasi Teknis & Kriteria Penerimaan (Acceptance Criteria)

### Stack Teknologi
* **Frontend:** HTML5, TailwindCSS (untuk penulisan grid dan layout responsif yang cepat).
* **Interaktivitas:** JavaScript Vanilla (untuk performa maksimal tanpa beban *framework* besar).
* **Deployment:** Netlify / Vercel (karena berupa situs statis).

### Batasan Teknis
* **Mobile-First Design:** Mengingat >90% target pengguna membuka tautan melalui ponsel pintar saat di jalan, tata letak wajib dioptimalkan untuk layar ponsel terlebih dahulu.
* **Performa Gambar:** Semua aset foto wajib menggunakan format modern `.webp` atau `.avif` dengan kompresi tinggi tanpa merusak kualitas visual.

### Kriteria Keberhasilan (Acceptance Criteria)
* [ ] **CTA Maps:** Tombol "Rute Lokasi" harus membuka koordinat Google Maps yang tepat dengan parameter `_blank` (tab baru) atau mendeteksi aplikasi bawaan ponsel.
* [ ] **Responsivitas Navbar:** Menu navigasi atas wajib berubah menjadi tombol *hamburger menu* ketika resolusi layar berada di bawah `768px`.
* [ ] **Kecepatan Halaman:** Nilai performa Google Lighthouse untuk kategori *Performance* minimal harus mencapai angka **90**.

---

## 7. Aturan Pengembangan Sekuensial & Kontrol Git (10-Stage Commit Workflow)

### ⚠️ PROTOKOL PENGEMBANGAN (WAJIB DIPATUHI):
1. **Dilarang Multitasking:** Developer hanya boleh mengerjakan tugas yang ada pada tahapan aktif. Kode untuk tahapan selanjutnya tidak boleh ditulis lebih awal.
2. **Developer Commit Sendiri:** Setiap tahapan selesai, AI akan berhenti memberikan panduan. **Developer wajib mengeksekusi perintah Git Commit secara mandiri** di terminal lokal mereka sebelum meminta instruksi tahap berikutnya dari AI.
3. **Pemberhentian Wajib:** AI dilarang melanjutkan ke tahap berikutnya secara otomatis sebelum menerima konfirmasi manual dari Developer bahwa commit telah berhasil dilakukan.

---

### DAFTAR 10 TAHAP DAN REKOMENDASI PESAN COMMIT:

* **Tahap 1: Inisialisasi Proyek & Git**
  * Tugas: Membuat struktur folder, membuat file `index.html`, menginisialisasi repositori Git lokal, dan memasukkan struktur HTML5 dasar.
  * *Pemberhentian: Developer melakukan commit mandiri.*
  * *Rekomendasi Pesan Commit:* `feat: initialize project structure and git`

* **Tahap 2: Setup Konfigurasi TailwindCSS**
  * Tugas: Mengintegrasikan TailwindCSS ke proyek (via CLI/CDN), melakukan kustomisasi skema warna *earth tone* di file konfigurasi, dan memastikan sistem utility class berjalan.
  * *Pemberhentian: Developer melakukan commit mandiri.*
  * *Rekomendasi Pesan Commit:* `chore: setup tailwindcss configuration and custom theme`

* **Tahap 3: Pembuatan Struktur Navbar & Logika Hamburger Menu**
  * Tugas: Menyusun elemen navigasi atas yang responsif. Menambahkan script JavaScript Vanilla untuk memanipulasi class *hidden* pada menu mobile saat tombol hamburger diklik.
  * *Pemberhentian: Developer melakukan commit mandiri.*
  * *Rekomendasi Pesan Commit:* `feat: add responsive navbar with hamburger menu toggle`

* **Tahap 4: Implementasi Hero Section**
  * Tugas: Menyusun konten utama bagian atas website menggunakan grid/flexbox Tailwind secara *mobile-first*. Memastikan teks slogan dan tombol CTA kembar tampil proporsional.
  * *Pemberhentian: Developer melakukan commit mandiri.*
  * *Rekomendasi Pesan Commit:* `feat: implement mobile-first hero section with CTA buttons`

* **Tahap 5: Implementasi About Section**
  * Tugas: Menuliskan teks narasi cerita kedai kopi, menyusun tata letak layout teks berdampingan dengan placeholder gambar suasana interior kedai.
  * *Pemberhentian: Developer melakukan commit mandiri.*
  * *Rekomendasi Pesan Commit:* `feat: add about section layout and copywriting`

* **Tahap 6: Implementasi Menu Highlight Section**
  * Tugas: Membuat visualisasi daftar menu andalan menggunakan *card layout* responsif (1 kolom di mobile, 3 kolom di desktop) yang memuat nama menu, deskripsi singkat, dan harga.
  * *Pemberhentian: Developer melakukan commit mandiri.*
  * *Rekomendasi Pesan Commit:* `feat: implement menu highlight section cards`

* **Tahap 7: Implementasi Fasilitas & Jam Operasional**
  * Tugas: Menyusun blok informasi jam operasional harian kedai dan menampilkan deretan ikon fasilitas (Wi-Fi, AC, Parking, dll.) menggunakan format SVG.
  * *Pemberhentian: Developer melakukan commit mandiri.*
  * *Rekomendasi Pesan Commit:* `feat: add working hours and facility icons section`

* **Tahap 8: Implementasi Footer & Integrasi Link Eksternal**
  * Tugas: Menyusun bagian kaki halaman (Footer). Memastikan link koordinat Google Maps terpasang dengan target `_blank` dan tombol WhatsApp chat mengarah ke API WhatsApp resmi dengan pesan kustom.
  * *Pemberhentian: Developer melakukan commit mandiri.*
  * *Rekomendasi Pesan Commit:* `feat: complete footer with active google maps and whatsapp links`

* **Tahap 9: Optimalisasi Aset & Performa (Asset Optimization)**
  * Tugas: Mengonversi semua aset gambar kedai dan menu ke format modern (`.webp`), mengompresi ukuran file di bawah 200KB, serta menambahkan atribut `loading="lazy"` pada gambar di luar Hero Section.
  * *Pemberhentian: Developer melakukan commit mandiri.*
  * *Rekomendasi Pesan Commit:* `perf: convert images to modern format and apply lazy loading`

* **Tahap 10: Pengujian Responsivitas & Deployment Akhir**
  * Tugas: Melakukan audit responsivitas akhir di semua breakpoint layar (Mobile, Tablet, Desktop), memastikan semua kriteria penerimaan terpenuhi, lalu melakukan proses *deploy* ke Netlify/Vercel.
  * *Pemberhentian: Proyek selesai.*
  * *Rekomendasi Pesan Commit:* `deploy: final responsive testing and production release`
