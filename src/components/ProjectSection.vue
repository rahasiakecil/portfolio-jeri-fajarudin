<template>
  <section id="proyek" class="py-16 bg-slate-50/70 border-b border-slate-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h2 class="text-2xl font-bold text-slate-900">
            Proyek
          </h2>
          <p class="text-slate-600 text-sm mt-1">
            Daftar proyek dan pekerjaan yang pernah dikembangkan.
          </p>
        </div>

        <!-- Category Filter with Subtle Active Scale & Transitions -->
        <div class="flex flex-wrap gap-1.5">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            :class="[
              'px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer active:scale-95',
              selectedCategory === cat
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-300 hover:text-emerald-800'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Project Cards Grid with Subtle Hover Lift & Icons -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <!-- Top Metadata -->
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                {{ project.category }}
              </span>
              <span class="text-xs text-slate-500 font-medium">
                {{ project.company }} • {{ project.period }}
              </span>
            </div>

            <!-- Title with folder icon -->
            <div class="flex items-start gap-3 mb-3">
              <div class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200 mt-0.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 class="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                {{ project.title }}
              </h3>
            </div>

            <!-- Description -->
            <p class="text-sm text-slate-600 mb-4 leading-relaxed pl-0 sm:pl-11">
              {{ project.description }}
            </p>

            <!-- Tasks / Kerjaan with check icons -->
            <div class="mb-5 pl-0 sm:pl-11">
              <div class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Pekerjaan yang dilakukan:
              </div>
              <ul class="space-y-1.5">
                <li
                  v-for="(task, tIdx) in project.tasks"
                  :key="tIdx"
                  class="flex items-start gap-2 text-xs sm:text-sm text-slate-700 leading-relaxed"
                >
                  <svg class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{{ task }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Tags with tag icon -->
          <div class="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5 pl-0 sm:pl-11">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="px-2 py-0.5 text-xs rounded-md bg-slate-50 hover:bg-emerald-50 text-slate-600 hover:text-emerald-800 border border-slate-200 transition-colors"
            >
              #{{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Project } from '../types/portfolio'

const props = defineProps<{
  projects: Project[]
}>()

const selectedCategory = ref<string>('Semua')

const categories: string[] = [
  'Semua',
  'Integrasi API',
  'Sistem Monitoring & Otomatisasi',
  'Sistem Operasional',
  'Sistem Data',
  'Skripsi / Algoritma'
]

const filteredProjects = computed<Project[]>(() => {
  if (selectedCategory.value === 'Semua') {
    return props.projects
  }
  return props.projects.filter(p => p.category === selectedCategory.value)
})
</script>
