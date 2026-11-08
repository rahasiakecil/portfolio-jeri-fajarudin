<template>
  <section id="pengalaman" class="py-16 bg-white border-b border-slate-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="mb-10">
        <h2 class="text-2xl font-bold text-slate-900">
          Pengalaman Kerja
        </h2>
        <p class="text-slate-600 text-sm mt-1">
          Riwayat pekerjaan dan tanggung jawab teknis.
        </p>
      </div>

      <!-- Experience Cards with Icons & Subtle Hover Lift -->
      <div class="space-y-6">
        <div
          v-for="exp in experiences"
          :key="exp.id"
          class="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-emerald-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
        >
          <!-- Card Header with Company & Role -->
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200 mt-0.5">
                <!-- Briefcase Icon -->
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                  {{ exp.company }}
                </h3>
                <p class="text-sm font-semibold text-emerald-700">
                  {{ exp.role }}
                </p>
              </div>
            </div>

            <!-- Period & Location with Calendar Icon -->
            <div class="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/60 self-start sm:self-auto">
              <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{{ exp.period }} • {{ exp.location }}</span>
            </div>
          </div>

          <p class="text-sm text-slate-600 mb-4 pl-0 sm:pl-13">
            {{ exp.description }}
          </p>

          <!-- Tasks list with check icon -->
          <ul class="space-y-2 mb-5 pl-0 sm:pl-13">
            <li
              v-for="(task, idx) in exp.tasks"
              :key="idx"
              class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
            >
              <div class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                ✓
              </div>
              <span>{{ task }}</span>
            </li>
          </ul>

          <!-- Tech stack chips -->
          <div class="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-100 pl-0 sm:pl-13">
            <span
              v-for="tech in exp.techStack"
              :key="tech"
              class="px-2 py-0.5 text-xs rounded-md bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 font-medium transition-colors"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Experience } from '../types/portfolio'

defineProps<{
  experiences: Experience[]
}>()
</script>
