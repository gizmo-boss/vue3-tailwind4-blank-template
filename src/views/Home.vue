<template>
  <div
    class="min-h-screen flex items-center justify-center p-6 transition-colors duration-300"
    :class="
      isDark
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'
        : 'bg-gradient-to-br from-slate-100 via-purple-100 to-slate-100'
    "
  >
    <!-- Theme Toggle -->
    <button
      class="fixed top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-lg"
      :class="isDark ? 'bg-yellow-400 text-slate-900' : 'bg-slate-800 text-yellow-400'"
      @click="toggleTheme"
    >
      <span class="text-xl">{{ isDark ? '☀️' : '🌙' }}</span>
    </button>

    <div
      class="max-w-md w-full backdrop-blur-lg rounded-2xl p-8 shadow-2xl border transition-colors duration-300"
      :class="isDark ? 'bg-white/10 border-white/20' : 'bg-white/70 border-slate-200'"
    >
      <!-- Header -->
      <h1
        class="text-3xl font-bold text-transparent bg-clip-text text-center mb-6"
        :class="
          isDark
            ? 'bg-gradient-to-r from-cyan-400 to-purple-400'
            : 'bg-gradient-to-r from-cyan-600 to-purple-600'
        "
      >
        Vite7 + Vue3 + TS + Tailwind 4 + Pinia + Axios + Zod + ESLint + Prettier blank Template
      </h1>

      <!-- Counter Demo -->
      <div class="text-center mb-8">
        <p class="mb-4" :class="isDark ? 'text-slate-300' : 'text-slate-600'">Reactivity Test</p>
        <div class="flex items-center justify-center gap-4">
          <button
            class="w-12 h-12 rounded-full bg-rose-500 hover:bg-rose-400 text-white font-bold text-xl transition-all hover:scale-110 active:scale-95"
            @click="count--"
          >
            −
          </button>
          <span
            class="text-5xl font-mono font-bold min-w-[80px]"
            :class="isDark ? 'text-white' : 'text-slate-800'"
          >
            {{ count }}
          </span>
          <button
            class="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xl transition-all hover:scale-110 active:scale-95"
            @click="count++"
          >
            +
          </button>
        </div>
        <p class="text-sm mt-3" :class="isDark ? 'text-slate-400' : 'text-slate-500'">
          {{ countMessage }}
        </p>
      </div>

      <!-- Input Demo -->
      <div class="mb-6">
        <input
          v-model="name"
          type="text"
          placeholder="Type your name..."
          class="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
          :class="
            isDark
              ? 'bg-white/5 border-white/10 text-white placeholder-slate-400'
              : 'bg-white border-slate-300 text-slate-800 placeholder-slate-400'
          "
        />
        <p
          v-if="name"
          class="mt-3 text-center animate-pulse"
          :class="isDark ? 'text-cyan-300' : 'text-cyan-600'"
        >
          Hello, {{ name }}! 👋
        </p>
      </div>

      <!-- Status Badge -->
      <div class="flex justify-center">
        <span
          class="px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium shadow-lg shadow-green-500/30"
        >
          ✓ Everything works!
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

const count = ref(0);
const name = ref('');
const isDark = ref(true);

const countMessage = computed(() => {
  if (count.value === 0) return 'Click the buttons!';
  if (count.value > 0) return `Positive: +${count.value}`;
  return `Negative: ${count.value}`;
});

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark', isDark.value);
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    isDark.value = savedTheme === 'dark';
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  document.documentElement.classList.toggle('dark', isDark.value);
});
</script>
