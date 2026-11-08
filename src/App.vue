<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-500 selection:text-white">
    <!-- Navbar -->
    <Navbar :socials="portfolioData.personal.socials" />

    <!-- Hero Section with Photo & Highlights -->
    <HeroSection :personal="portfolioData.personal" />

    <!-- About Section -->
    <AboutSection />

    <!-- Skills Section -->
    <SkillsSection :skills="portfolioData.skills" />

    <!-- Work Experience Cards Section -->
    <ExperienceSection :experiences="portfolioData.experiences" />

    <!-- Portfolio Project Cards Section -->
    <ProjectSection :projects="portfolioData.projects" />

    <!-- Education & Certification Section -->
    <EducationSection
      :education="portfolioData.education"
      :certifications="portfolioData.certifications"
    />

    <!-- Footer with Social Media -->
    <Footer :socials="portfolioData.personal.socials" />

    <!-- Back to Top Button -->
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-700/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer active:scale-95"
      aria-label="Kembali ke atas"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { portfolioData } from './data/portfolioData'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import EducationSection from './components/EducationSection.vue'
import Footer from './components/Footer.vue'

const showScrollTop = ref<boolean>(false)

const handleScroll = (): void => {
  showScrollTop.value = window.scrollY > 400
}

const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
