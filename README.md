# Jastipbynath Tracking — Firebase

## Setup Firebase
1. Buat project di https://console.firebase.google.com/
2. Tambahkan aplikasi Web (`</>`) lalu salin konfigurasi.
3. Isi placeholder di `js/firebase.js` dengan konfigurasi aplikasi Anda.
4. Firestore Database → Create database.
5. Authentication → Get started → Sign-in method → aktifkan Email/Password.
6. Authentication → Users → Add user. Buat akun admin sendiri; jangan aktifkan pendaftaran publik.
7. Firestore Database → Rules: salin isi `firestore.rules`, lalu Publish.

## Deploy GitHub Pages
Upload seluruh isi folder ini ke root repository (replace versi lama). Di GitHub buka Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.

## Penggunaan
- Pelanggan: buka halaman utama, masukkan nomor resi.
- Admin: buka `/admin.html`, login memakai akun Firebase admin.
- Tambah pengiriman atau klik Edit / Update untuk menambah riwayat status baru.
- Tombol Salin Link membagikan link tracking untuk resi tersebut.

## Catatan keamanan
Rules mengizinkan publik membaca satu dokumen resi (`get`) berdasarkan ID resi, tetapi tidak dapat melihat daftar semua resi (`list`). Admin harus login untuk melihat daftar dan mengubah data. Gunakan nomor resi unik yang tidak mudah ditebak dan jangan masukkan informasi pribadi sensitif. Rules ini memperlakukan setiap akun Firebase Authentication sebagai admin; jangan membuat akun untuk pelanggan atau membuka pendaftaran publik.

## Penting
Source code belum dapat berjalan online sampai konfigurasi Firebase milik Anda dimasukkan dan layanan Firestore serta Authentication diaktifkan. Saya tidak dapat mengakses atau membuat project di akun Firebase/GitHub Anda.
