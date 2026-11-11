# Laptop Mendungan Online

Paket website statis siap diunggah ke hosting atau repository GitHub. Tidak membutuhkan proses build maupun dependensi tambahan.

## Responsif

Layout memakai CSS responsive breakpoints untuk ponsel, tablet, dan desktop. Bisa dibuka pada browser di Android, iPhone/iOS, Windows, dan macOS; ukuran menu, kartu katalog, formulir, dan header menyesuaikan lebar layar.

## Menjalankan

Buka `index.html` di browser untuk pratinjau lokal, atau unggah isi folder ini ke hosting statis.

## Admin, akses, dan GitHub

- Tautan Admin tidak ditampilkan di footer publik. Untuk membuka panel pada perangkat admin, buka alamat situs dengan fragmen `#admin` (contoh: `index.html#admin`) lalu masukkan PIN. Simpan URL tersebut sebagai bookmark pribadi.
- Paket ini tidak berisi kata sandi admin.
- Saat pertama kali membuka menu Admin toko di browser, buat kata sandi/PIN baru dan konfirmasi. Gunakan kata sandi unik yang panjang.
- Pengaturan, katalog, dan sandi disimpan pada `localStorage` browser/perangkat tersebut; tidak otomatis tersinkron ke perangkat lain. Mengedit lewat panel tidak mengubah berkas di repository GitHub atau tampilan publik untuk pengunjung lain.
- Fragmen `#admin` hanya menyembunyikan jalan masuk dari tampilan, bukan keamanan—pengunjung dapat membaca kode situs. Karena ini website statis tanpa backend, sandi sisi browser bukan perlindungan aman untuk data privat. Untuk autentikasi admin sungguhan dan sinkronisasi lintas perangkat, tambahkan autentikasi server-side/backend.
- Untuk mengubah tampilan/kode di GitHub, buka `index.html` pada repository, pilih Edit, lalu commit perubahan. Perubahan diterbitkan ulang oleh hosting GitHub Pages sesuai pengaturannya. Untuk mengubah produk di repo, edit data katalog pada kode atau unggah versi berkas yang sudah diubah; panel admin browser tidak melakukannya otomatis.
- Jangan commit kata sandi, token, `.env`, atau konfigurasi rahasia ke repository publik. `.gitignore` mengecualikan berkas rahasia umum.

## Isi

- `index.html` — storefront, katalog, pengelolaan sisi-browser, dan informasi COD.
- `assets/` — foto produk, contoh listing UMKM, dan logo.

## Kontak dan titik awal kurir bawaan

Nomor WhatsApp CS 1, CS 2, Telegram, serta titik awal kurir Mendungan UMS sudah disetel sebagai nilai bawaan situs. Nomor kontak yang dipasang pada halaman publik dapat terlihat melalui tautan kontak situs. Logo LM dengan latar putih disertakan pada `assets/lm-logo-whitebg.png`.
