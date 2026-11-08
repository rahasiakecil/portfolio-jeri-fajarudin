<template>
  <section id="pendidikan" class="py-16 bg-white border-b border-slate-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="mb-10">
        <h2 class="text-2xl font-bold text-slate-900">
          Pendidikan & Pelatihan
        </h2>
        <p class="text-slate-600 text-sm mt-1">
          Latar belakang pendidikan dan pelatihan teknis.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Education Card -->
        <div class="bg-slate-50/70 rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-emerald-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
          <div class="flex items-start gap-3.5 mb-4">
            <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
              <!-- Graduation Cap Icon -->
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <div>
              <span class="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
                Pendidikan Formal
              </span>
              <h3 class="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                {{ education[0].institution }}
              </h3>
              <p class="text-sm font-medium text-slate-700">
                {{ education[0].degree }} ({{ education[0].faculty }})
              </p>
              <p class="text-xs text-slate-500">
                {{ education[0].year }}
              </p>
            </div>
          </div>

          <div class="pt-3 border-t border-slate-200/80">
            <div class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
              Skripsi:
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
              "{{ education[0].thesis }}"
            </p>
          </div>
        </div>

        <!-- Certification Card -->
        <div class="bg-slate-50/70 rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-emerald-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
          <div class="flex items-start gap-3.5 mb-4">
            <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
              <!-- Certificate / Badge Icon -->
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
              </svg>
            </div>
            <div>
              <span class="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
                Pelatihan & Lisensi
              </span>
              <h3 class="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                {{ certifications[0].title }}
              </h3>
              <p class="text-sm font-medium text-slate-700">
                {{ certifications[0].issuer }}
              </p>
              <p class="text-xs text-slate-500">
                Tahun {{ certifications[0].year }}
              </p>
            </div>
          </div>

          <div class="pt-3 border-t border-slate-200/80">
            <div class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
              Materi & Kompetensi:
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {{ certifications[0].skills }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Education, Certification } from '../types/portfolio'

defineProps<{
  education: Education[]
  certifications: Certification[]
}>()
</script>
