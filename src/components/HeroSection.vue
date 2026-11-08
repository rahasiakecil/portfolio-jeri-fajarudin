<template>
  <section id="hero" class="py-16 md:py-24 bg-white border-b border-slate-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
        <!-- Text Column -->
        <div class="md:col-span-7 space-y-6 text-center md:text-left">
          <div class="space-y-2">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight flex items-center justify-center md:justify-start gap-3">
              <span>{{ personal.name }}</span>
              <span class="relative flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </h1>
            <p class="text-xl font-medium text-emerald-700">
              {{ personal.title }}
            </p>
          </div>

          <!-- Bio -->
          <p class="text-slate-600 text-base leading-relaxed">
            {{ personal.bio }}
          </p>

          <!-- Location & Socials -->
          <div class="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-slate-600 pt-1">
            <!-- Location with Pin Icon -->
            <div class="flex items-center gap-1.5 text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
              <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{{ personal.location }}</span>
            </div>

            <!-- Social Links with Icons & Hover Lift -->
            <div class="flex items-center gap-2 border-l border-slate-200 pl-3">
              <!-- GitHub -->
              <a
                :href="personal.socials?.github"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                class="p-2 rounded-lg bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 hover:border-emerald-200 transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>

              <!-- Instagram -->
              <a
                :href="personal.socials?.instagram"
                target="_blank"
                rel="noreferrer"
                title="Instagram"
                class="p-2 rounded-lg bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 hover:border-emerald-200 transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <!-- TikTok -->
              <a
                :href="personal.socials?.tiktok"
                target="_blank"
                rel="noreferrer"
                title="TikTok"
                class="p-2 rounded-lg bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 hover:border-emerald-200 transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>

              <!-- Facebook -->
              <a
                :href="personal.socials?.facebook"
                target="_blank"
                rel="noreferrer"
                title="Facebook"
                class="p-2 rounded-lg bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 hover:border-emerald-200 transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.8C10.5 0 9 1.5 9 4.667V8z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Action Buttons with subtle transitions -->
          <div class="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            <a
              href="#proyek"
              class="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95"
            >
              Lihat Proyek
            </a>
            <a
              href="#pengalaman"
              class="px-5 py-2.5 rounded-xl border border-slate-300 hover:border-emerald-600 text-slate-700 hover:text-emerald-700 bg-white font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              Pengalaman Kerja
            </a>
          </div>
        </div>

        <!-- Photo Column -->
        <div class="md:col-span-5 flex justify-center">
          <div class="w-60 sm:w-72 aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-500 group">
            <img
              :src="personal.photo"
              :alt="personal.name"
              class="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Personal } from '../types/portfolio'

defineProps<{
  personal: Personal
}>()
</script>
