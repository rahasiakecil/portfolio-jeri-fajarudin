import type { PortfolioData } from '../types/portfolio'

export const portfolioData: PortfolioData = {
  personal: {
    name: "Jeri Fajarudin",
    title: "Software Engineer",
    experienceYears: "6+ Tahun",
    location: "Bogor, Indonesia",
    photo: "/profile.jpg",
    socials: {
      github: "https://github.com/rahasiakecil",
      instagram: "https://instagram.com/",
      tiktok: "https://tiktok.com/@",
      facebook: "https://facebook.com/"
    },
    bio: "Software Engineer dengan pengalaman lebih dari 6 tahun dalam pengembangan perangkat lunak, khususnya pada teknologi berbasis web, aplikasi real-time, dan sistem manajemen back-office. Memiliki fokus pada arsitektur backend, manajemen database, integrasi Web API pihak ketiga (termasuk SAP dan perbankan), serta otomatisasi tugas menggunakan task scheduling."
  },

  skills: [
    {
      category: "Web Programming (Backend & Fullstack)",
      items: [
        "PHP (Laravel, CodeIgniter)",
        "Node.js / Express.js",
        "Nest.js / Remix",
        "JavaScript / TypeScript",
        "React / Next.js / Vue.js"
      ]
    },
    {
      category: "Database & Arsitektur",
      items: [
        "PostgreSQL & MySQL",
        "Relational Database Design",
        "Query Optimization",
        "OOP & MVC Architecture"
      ]
    },
    {
      category: "Integrasi Sistem & API",
      items: [
        "Host-to-Host Bank Mandiri",
        "SAP Integration",
        "RESTful API Development",
        "Real-time Web Applications"
      ]
    },
    {
      category: "DevOps & Otomatisasi",
      items: [
        "Chronicle / Cron Task Scheduling",
        "Docker",
        "Kubernetes",
        "Jenkins (CI/CD)",
        "Unix/Linux Administration"
      ]
    },
    {
      category: "Tools & Kolaborasi",
      items: [
        "Git (GitHub, GitLab)"
      ]
    }
  ],

  experiences: [
    {
      id: "elnusa",
      company: "PT. Elnusa Tbk (Outsourcing)",
      role: "Senior / Middle Web Developer",
      period: "November 2020 – Sekarang",
      location: "Jakarta, Indonesia",
      description: "Pengembangan arsitektur backend, integrasi sistem perbankan & ERP, optimasi database, dan task scheduling pada aplikasi internal perusahaan.",
      tasks: [
        "Merancang, mengembangkan, dan memelihara aplikasi manajemen keuangan dengan integrasi API Host-to-Host (Bank Mandiri) dan SAP untuk otomatisasi pembayaran vendor serta pengalihan anggaran.",
        "Mengembangkan sistem otomatisasi menggunakan Chronicle/Cron Jobs untuk penanganan auto-update data vendor, auto-posting, dan auto-approve dokumen pada aplikasi SIMONI.",
        "Mengelola dan mengoptimalkan performa kueri database (SIMONI, AR Management, Vendor Payment, CMPR Pusat, Cash Card Lokasi, BM Pusat) untuk kelancaran transaksi volume tinggi.",
        "Mengonfigurasi server dan pipeline CI/CD menggunakan Docker, Kubernetes, dan Jenkins."
      ],
      techStack: ["PHP (Laravel)", "Node.js", "Host-to-Host API", "Bank Mandiri API", "SAP Integration", "PostgreSQL", "Docker", "Kubernetes", "Jenkins", "Chronicle / Cron"]
    },
    {
      id: "kjpp-spr",
      company: "KJPP SPR (Kantor Jasa Penilai Publik Sugianto Prasodjo dan Rekan)",
      role: "Staf IT",
      period: "Oktober 2018 – Desember 2019",
      location: "Jakarta, Indonesia",
      description: "Pengembangan sistem internal pemantauan operasional kantor cabang, manajemen aset, dan website profil perusahaan.",
      tasks: [
        "Mengembangkan dan memelihara aplikasi pemantauan operasional cabang, manajemen aset, dan komparasi data lokasi.",
        "Membangun website company profile dan modul pelaporan keuangan internal."
      ],
      techStack: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "Linux Administration"]
    }
  ],

  projects: [
    {
      id: "h2h-mandiri-sap",
      title: "Payment Management Host-to-Host Bank Mandiri & SAP",
      category: "Integrasi API",
      company: "PT. Elnusa Tbk",
      period: "2021 - Sekarang",
      description: "Mengembangkan backend dan arsitektur database untuk sistem pembayaran vendor dan karyawan menggunakan koneksi API langsung ke Bank Mandiri Host-to-Host dan SAP.",
      tasks: [
        "Integrasi API Host-to-Host langsung ke Bank Mandiri untuk pembayaran vendor",
        "Integrasi SAP untuk otomatisasi proses anggaran dan pencatatan keuangan",
        "Otomatisasi validasi data dan alur transaksi"
      ],
      tags: ["Host-to-Host API", "Bank Mandiri", "SAP", "Laravel", "PostgreSQL"]
    },
    {
      id: "simoni",
      title: "SIMONI (Sistem Monitoring Investasi) & Otomatisasi",
      category: "Sistem Monitoring & Otomatisasi",
      company: "PT. Elnusa Tbk",
      period: "2021 - Sekarang",
      description: "Membangun aplikasi pemantauan dan pencatatan investasi yang dilengkapi dengan mesin penjadwalan (Chronicle/Cron Jobs) untuk pembaruan data vendor dan persetujuan berkas otomatis.",
      tasks: [
        "Implementasi Chronicle / Cron Jobs untuk penjadwalan tugas otomatis",
        "Mekanisme auto-update data vendor dan auto-approval berkas",
        "Pencatatan dan pemantauan data investasi"
      ],
      tags: ["Chronicle", "Cron Jobs", "Otomatisasi", "Laravel", "MySQL", "Docker"]
    },
    {
      id: "spr-management",
      title: "Sistem Perangkat Lunak SPR",
      category: "Sistem Operasional",
      company: "KJPP SPR",
      period: "2018 - 2019",
      description: "Merancang aplikasi pengawasan cabang, monitoring data aset, serta pembentukan laporan keuangan berkala.",
      tasks: [
        "Pengawasan operasional dan pekerjaan cabang",
        "Pencatatan dan komparasi data aset lokasi penilai",
        "Pembuatan modul pelaporan keuangan berkala"
      ],
      tags: ["PHP", "CodeIgniter", "MySQL", "Sistem Manajemen"]
    },
    {
      id: "serena-postel",
      title: "Serena Postel",
      category: "Sistem Data",
      company: "Kemenkominfo",
      period: "2020",
      description: "Memelihara dan mengoptimalkan fungsionalitas aplikasi penampung data hasil penilaian dari nelayan.",
      tasks: [
        "Pemeliharaan sistem dan optimasi query database",
        "Pengolahan data hasil penilaian survei nelayan"
      ],
      tags: ["Kemenkominfo", "REST API", "Database", "PHP"]
    },
    {
      id: "spk-anfis-cow",
      title: "Sistem Pendukung Keputusan Indukan Sapi Perah (ANFIS)",
      category: "Skripsi / Algoritma",
      company: "Universitas Pakuan",
      period: "2018",
      description: "Membangun perangkat lunak berbasis sistem pendukung keputusan untuk membantu peternak dalam menentukan indukan sapi perah Friesian Holstein (FH) terbaik guna menghasilkan kualitas susu optimal menggunakan metode ANFIS (Adaptive Neuro-Fuzzy Inference System).",
      tasks: [
        "Penerapan metode ANFIS (Adaptive Neuro-Fuzzy Inference System)",
        "Perhitungan kriteria penilaian indukan ternak berbasis data"
      ],
      tags: ["ANFIS", "Algoritma", "SPK", "Skripsi"]
    }
  ],

  education: [
    {
      degree: "Sarjana Komputer (S.Kom), Ilmu Komputer",
      institution: "Universitas Pakuan Bogor",
      faculty: "Fakultas MIPA",
      year: "Lulus 2018",
      thesis: "Sistem Pendukung Keputusan Penentuan Indukan Ternak Sapi Perah Friesian Holstein (FH) Menggunakan Metode ANFIS (Adaptive Neuro-Fuzzy Inference System)"
    }
  ],

  certifications: [
    {
      title: "Nakiba Training Project DevSecOps",
      issuer: "Nakiba Training",
      year: "2024",
      skills: "Docker, Kubernetes, CI/CD, Server Administration"
    }
  ]
}

