# 📢 Portal Pengumuman PKKMB 2025

Aplikasi web untuk mengecek status penerimaan peserta **PKKMB (Pengenalan Kehidupan Kampus bagi Mahasiswa Baru)** secara online. Peserta cukup memasukkan nama atau email untuk mengetahui hasil seleksi mereka.

---

## ✨ Fitur

- 🔍 Cek status penerimaan berdasarkan **nama** atau **email**
- ✅ Tampilan hasil yang berbeda untuk peserta **diterima** dan **ditolak**
- 🎨 UI modern dengan **Tailwind CSS** dan efek glassmorphism
- 🔒 Konfigurasi sensitif disimpan di file **.env**
- 🗄️ Data tersimpan di **MySQL/MariaDB**

---

## 🛠️ Teknologi

| Layer | Teknologi |
|---|---|
| Frontend | HTML, Tailwind CSS, Vanilla JS |
| Backend | Node.js, Express.js |
| Database | MySQL / MariaDB |
| Lainnya | dotenv, cors, mysql2 |

---

## 📁 Struktur Project

```
announcementApp/
├── index.html        # Tampilan utama frontend
├── server.js         # Backend Express
├── database.sql      # Script setup database & data dummy
├── .env              # Konfigurasi environment (tidak di-commit)
├── .env.example      # Contoh konfigurasi environment
├── .gitignore        # File yang diabaikan Git
├── package.json      # Dependensi Node.js
└── logo.png          # Logo PKKMB
```

---

## 🚀 Cara Menjalankan

### 1. Clone Repository

```bash
git clone <url-repository>
cd announcementApp
```

### 2. Install Dependensi

```bash
npm install
```

### 3. Setup Database

Pastikan MySQL/MariaDB sudah berjalan, lalu import database:

```bash
mysql -u root -p < database.sql
```

### 4. Konfigurasi Environment

Salin file contoh lalu sesuaikan isinya:

```bash
cp .env.example .env
nano .env
```

Isi file `.env`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password_kamu
DB_NAME=annoucementPKKMB
PORT=3000
```

### 5. Jalankan Server

```bash
npm start
```

### 6. Buka di Browser

```
http://localhost:3000
```

---

## 🗄️ Struktur Database

```sql
TABLE peserta
├── id        INT AUTO_INCREMENT PRIMARY KEY
├── nama      VARCHAR(100)
├── no_hp     VARCHAR(20)
├── posisi    VARCHAR(100)
├── email     VARCHAR(100) UNIQUE
└── status    ENUM('diterima', 'ditolak')
```

---

## 🔌 API Endpoint

### `GET /api/peserta`

Mencari data peserta berdasarkan nama atau email.

**Query Parameters:**

| Parameter | Tipe | Keterangan |
|---|---|---|
| `nama` | string | Nama lengkap peserta |
| `email` | string | Email peserta |

**Contoh Request:**

```
GET /api/peserta?nama=Dimas Muhamad Ihza
GET /api/peserta?email=dimassiap45@gmail.com
```

**Contoh Response Berhasil (`200`):**

```json
{
  "nama": "Dimas Muhamad Ihza",
  "noHp": "085812428247",
  "posisi": "Anggota Divisi Acara",
  "email": "dimassiap45@gmail.com",
  "status": "diterima"
}
```

**Contoh Response Gagal (`404`):**

```json
{
  "message": "Data tidak ditemukan"
}
```

---

## 👥 Data Dummy

| Nama | Email | Status |
|---|---|---|
| Dimas Muhamad Ihza | dimassiap45@gmail.com | ✅ Diterima |
| Siti Rahayu Putri | siti.rahayu@gmail.com | ✅ Diterima |
| Budi Santoso | budi.santoso@gmail.com | ❌ Ditolak |
| Anisa Fitriani | anisa.fitri@gmail.com | ✅ Diterima |
| Rizky Aditya Pratama | rizky.aditya@gmail.com | ❌ Ditolak |
| Dewi Kusuma Wardani | dewi.kusuma@gmail.com | ✅ Diterima |
| Fajar Nugroho | fajar.nugroho@gmail.com | ❌ Ditolak |
| Mega Lestari | mega.lestari@gmail.com | ✅ Diterima |

---

## ⚙️ Environment Variables

| Variable | Keterangan | Default |
|---|---|---|
| `DB_HOST` | Host database | `localhost` |
| `DB_USER` | Username database | `root` |
| `DB_PASSWORD` | Password database | - |
| `DB_NAME` | Nama database | `annoucementPKKMB` |
| `PORT` | Port server | `3000` |

---

## 📝 Lisensi

Project ini dibuat untuk keperluan internal **PKKMB Politeknik Semen Indonesia 2025**.
