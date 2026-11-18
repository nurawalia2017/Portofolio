# 🚀 Web Portofolio Modern (Bun + React + PostgreSQL)

Aplikasi web portofolio developer modern berskala penuh (*Full Stack*) yang dirancang dengan performa ultra cepat menggunakan runtime **Bun**, framework **ElysiaJS**, ORM **Drizzle**, database **PostgreSQL**, dan frontend interaktif berbasis **React 19** + **Vite** + **Tailwind CSS**.

---

## 🛠️ Tech Stack

| Lapisan | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Backend Runtime** | [Bun](https://bun.sh) (v1.4+) | Runtime JavaScript/TypeScript super cepat pengganti Node.js |
| **Backend Framework** | [ElysiaJS](https://elysiajs.com) (v2) | Web framework ergonomis dan berperforma tinggi untuk Bun |
| **Database** | [PostgreSQL](https://www.postgresql.org) (Neon / Supabase / Local) | Relational database tangguh |
| **ORM & Migrations** | [Drizzle ORM](https://orm.drizzle.team) + Drizzle Kit | Type-safe ORM modern tanpa overhead |
| **Frontend Framework** | [React 19](https://react.dev) + [Vite](https://vite.dev) | Library UI reaktif dan build tool instan |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) + Lucide Icons | Desain responsif bertema dark mode modern |

---

## 📁 Struktur Direktori

```text
Portopolio/
├── backend/
│   ├── src/
│   │   ├── db/
│   │   │   ├── index.ts        # Inisialisasi koneksi PostgreSQL & Drizzle
│   │   │   ├── schema.ts       # Skema tabel (profiles, skills, projects, experiences, messages)
│   │   │   ├── seed-data.ts    # Data awal portofolio
│   │   │   └── seed.ts         # Script seeding otomatis ke PostgreSQL
│   │   ├── routes/
│   │   │   ├── profile.ts      # Endpoint /api/profile
│   │   │   ├── skills.ts       # Endpoint /api/skills
│   │   │   ├── projects.ts     # Endpoint /api/projects
│   │   │   ├── experiences.ts  # Endpoint /api/experiences
│   │   │   └── messages.ts     # Endpoint /api/messages (Form Kontak)
│   │   └── index.ts            # Entry point Elysia server (Port 5000)
│   ├── drizzle.config.ts       # Konfigurasi Drizzle Kit
│   ├── .env                    # Variabel environment & DATABASE_URL
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx      # Navigasi sticky blur + status indikator DB
│   │   │   ├── Hero.tsx        # Headline, CTA, status availability & sosial
│   │   │   ├── About.tsx       # Bio, statistik pengalaman, pilar teknis
│   │   │   ├── Skills.tsx      # Skill cards dengan filter kategori & progress bar
│   │   │   ├── Experiences.tsx # Timeline perjalanan kerja & pendidikan
│   │   │   ├── Projects.tsx    # Showcase proyek, live demo, github, & filter
│   │   │   ├── Contact.tsx     # Form kontak interaktif (tersimpan ke PostgreSQL)
│   │   │   ├── AddProjectModal.tsx # Modal interaktif untuk tambah proyek langsung
│   │   │   ├── Footer.tsx      # Footer & tombol scroll ke atas
│   │   │   └── SocialIcons.tsx # Komponen ikon GitHub & LinkedIn
│   │   ├── services/
│   │   │   └── api.ts          # Integrasi fetch API backend
│   │   ├── types/
│   │   │   └── index.ts        # TypeScript interfaces
│   │   ├── App.tsx             # Komponen utama
│   │   └── index.css           # Styling Tailwind CSS
│   ├── vite.config.ts          # Konfigurasi proxy /api ke port 5000
│   └── package.json
│
├── run-dev.ps1                 # Script 1-klik untuk menjalankan backend + frontend
├── package.json                # Monorepo task runner
└── README.md
```

---

## ⚡ Cara Menjalankan Aplikasi

### 1. Jalankan Sekaligus (Rekomendasi)
Buka PowerShell di folder `d:\Proyek\Portopolio` dan jalankan:
```powershell
.\run-dev.ps1
```
*Script ini otomatis menyalakan Backend Elysia (port 5000) dan Frontend Vite (port 3000).*

### 2. Atau Jalankan Secara Manual di 2 Terminal Terpisah:

**Terminal 1 (Backend Bun):**
```powershell
cd backend
bun dev
```
Backend akan aktif di: `http://localhost:5000`

**Terminal 2 (Frontend React):**
```powershell
cd frontend
bun dev
```
Frontend akan aktif di: `http://localhost:3000`

> 💡 **Catatan:** Backend sudah dilengkapi **Fallback Demo Data**, sehingga web portofolio langsung berjalan normal dan interaktif meskipun Anda belum memasukkan URL database PostgreSQL.

---

## 🗄️ Menghubungkan ke PostgreSQL (Neon / Supabase / Lokal)

Untuk menyimpan proyek dan pesan kontak secara permanen di database PostgreSQL:

### Langkah 1: Siapkan Database PostgreSQL
- **Neon.tech (Gratis & Sangat Direkomendasikan):**
  1. Buka [neon.tech](https://neon.tech) dan buat database gratis dalam 1 menit.
  2. Salin *Connection string*, contohnya:
     `postgresql://alex:password@ep-cool-lake-123456.us-east-2.aws.neon.tech/neondb?sslmode=require`

### Langkah 2: Masukkan ke file `backend/.env`
Buka file `backend/.env` lalu tempel connection string Anda:
```env
DATABASE_URL=postgresql://alex:password@ep-cool-lake-123456.us-east-2.aws.neon.tech/neondb?sslmode=require
PORT=5000
```

### Langkah 3: Push Skema Tabel ke PostgreSQL
Jalankan perintah ini di folder `backend`:
```powershell
cd backend
bun run db:push
```
*Drizzle Kit akan otomatis membuat semua tabel (`profiles`, `skills`, `projects`, `experiences`, `messages`) di PostgreSQL Anda.*

### Langkah 4: Isi Database dengan Data Awal (Seeding)
```powershell
bun run db:seed
```
*Data portofolio default (profil, keahlian, proyek, dan pengalaman) akan langsung masuk ke PostgreSQL Anda!*

### Langkah 5: Buka Drizzle Studio (Opsional / GUI Database)
Untuk melihat dan mengedit data tabel melalui browser:
```powershell
bun run db:studio
```

---

## 🌐 Daftar Endpoint REST API

| Method | Endpoint | Deskripsi |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Status server, uptime, versi Bun, & status PostgreSQL |
| `GET` | `/api/profile` | Mengambil data bio, avatar, kontak, & headline |
| `PUT` | `/api/profile` | Memperbarui data profil |
| `GET` | `/api/skills` | Mengambil daftar skill & persentase keahlian |
| `POST` | `/api/skills` | Menambah skill baru |
| `GET` | `/api/projects` | Mengambil semua proyek (filter query `?category=...`) |
| `POST` | `/api/projects` | Menambah proyek baru (tersedia juga tombol di UI frontend) |
| `DELETE`| `/api/projects/:id` | Menghapus proyek berdasarkan ID |
| `GET` | `/api/experiences` | Mengambil linimasa pengalaman kerja & pendidikan |
| `POST` | `/api/messages` | Menerima & menyimpan pesan dari Form Kontak |
| `GET` | `/api/messages` | Membaca daftar pesan masuk |

---

## ✨ Fitur Unggulan Web Portofolio
1. **Hero Section Dinamis:** Status ketersediaan kerja dengan animasi pulse, tautan sosial, dan download CV.
2. **Pilar Teknis & Bio:** Ringkasan keunggulan teknis performa Bun dan reliabilitas data PostgreSQL.
3. **Keahlian Berbasis Kategori:** Tab navigasi interaktif (*Frontend, Backend, Database, Tools & DevOps*) dengan progress bar.
4. **Timeline Pengalaman:** Pemisah visual antara riwayat karir profesional dan riwayat pendidikan formal.
5. **Showcase Proyek:** Filter kategori, badge featured, teknologi tags, tautan live demo & source code.
6. **Modal Tambah Proyek:** Anda dapat menguji penambahan proyek langsung dari browser ke database PostgreSQL.
7. **Formulir Kontak Terintegrasi:** Validasi input otomatis dan langsung tersimpan ke PostgreSQL.
8. **Dark Mode Modern:** Menggunakan aksen warna Cyan, Indigo, dan Teal dengan efek glassmorphism yang elegan.

