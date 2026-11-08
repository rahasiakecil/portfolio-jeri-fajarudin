<template>
  <section id="keahlian" class="py-16 bg-slate-50/70 border-b border-slate-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="mb-10">
        <h2 class="text-2xl font-bold text-slate-900">
          Keahlian
        </h2>
        <p class="text-slate-600 text-sm mt-1">
          Daftar bahasa pemrograman, database, dan tools yang digunakan.
        </p>
      </div>

      <!-- Skills Cards Grid with Icons & Subtle Hover Lift -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="(group, idx) in skills"
          :key="idx"
          class="bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-emerald-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
        >
          <!-- Category Header with Icon -->
          <div class="flex items-center gap-3 mb-3 pb-2.5 border-b border-slate-100">
            <div class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
              <!-- Code Icon -->
              <svg v-if="idx === 0" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <!-- Database Icon -->
              <svg v-else-if="idx === 1" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
              <!-- API Icon -->
              <svg v-else-if="idx === 2" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <!-- DevOps Icon -->
              <svg v-else-if="idx === 3" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
              <!-- Git Icon -->
              <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-sm font-bold text-slate-800 group-hover:text-emerald-800 transition-colors">
              {{ group.category }}
            </h3>
          </div>

          <!-- Tag chips -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(item, itemIdx) in group.items"
              :key="itemIdx"
              class="px-2.5 py-1 text-xs rounded-lg bg-emerald-50/70 text-emerald-900 border border-emerald-200/60 font-medium hover:bg-emerald-100 hover:border-emerald-300 transition-colors"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { SkillGroup } from '../types/portfolio'

defineProps<{
  skills: SkillGroup[]
}>()
</script>
