<template>
  <section id="tentang" class="py-16 bg-white border-b border-slate-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="mb-10">
        <h2 class="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <span>Tentang</span>
        </h2>
        <p class="text-slate-600 text-sm mt-1">
          Fokus bidang dan pengalaman teknis.
        </p>
      </div>

      <!-- 3 Minimalist Cards with Icons & Subtle Hover Lift -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div class="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:border-emerald-300 hover:bg-emerald-50/20 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
          <div class="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          </div>
          <h3 class="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">
            Backend & Database
          </h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            Pengembangan arsitektur backend, pemodelan relational database (PostgreSQL, MySQL), dan penalaan performa query untuk volume data besar.
          </p>
        </div>

        <!-- Card 2 -->
        <div class="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:border-emerald-300 hover:bg-emerald-50/20 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
          <div class="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>
          <h3 class="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">
            Integrasi API & Sistem
          </h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            Integrasi API Host-to-Host (Bank Mandiri), SAP ERP, serta perancangan RESTful API untuk komunikasi antar sistem.
          </p>
        </div>

        <!-- Card 3 -->
        <div class="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:border-emerald-300 hover:bg-emerald-50/20 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
          <div class="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">
            Task Scheduling & DevOps
          </h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            Otomatisasi alur kerja berkala dengan Chronicle dan Cron Jobs, serta pengelolaan environment menggunakan Docker, Kubernetes, dan Jenkins.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Stateless informational component
</script>
