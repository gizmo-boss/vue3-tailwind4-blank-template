<template>
  <div
    class="min-h-screen px-6 py-12 transition-colors duration-300"
    :class="
      isDark
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950'
        : 'bg-gradient-to-br from-slate-50 via-white to-indigo-100'
    "
  >
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-8">
      <header class="flex items-center justify-between">
        <p
          class="rounded-full px-4 py-2 text-xs font-semibold tracking-wide uppercase ring-1"
          :class="
            isDark
              ? 'bg-white/5 text-slate-200 ring-white/20'
              : 'bg-white/80 text-slate-700 ring-slate-300'
          "
        >
          Production-ready starter
        </p>
        <button
          class="h-11 w-11 rounded-full text-lg transition hover:scale-105 active:scale-95"
          :class="isDark ? 'bg-yellow-400 text-slate-900' : 'bg-slate-900 text-yellow-300'"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleTheme"
        >
          {{ isDark ? '☀️' : '🌙' }}
        </button>
      </header>

      <section class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article
          class="rounded-3xl border p-8 shadow-xl backdrop-blur-sm transition"
          :class="isDark ? 'border-white/15 bg-white/5' : 'border-slate-200 bg-white/75'"
        >
          <h1
            class="mb-4 text-4xl font-extrabold leading-tight text-transparent bg-clip-text md:text-5xl"
            :class="
              isDark
                ? 'bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-300'
                : 'bg-gradient-to-r from-cyan-700 via-indigo-700 to-fuchsia-700'
            "
          >
            Vue 3 + Vite 8 + Tailwind 4
          </h1>
          <p
            class="max-w-2xl text-base md:text-lg"
            :class="isDark ? 'text-slate-300' : 'text-slate-700'"
          >
            Latest stack template with TypeScript, Pinia, Router, Axios, Zod, ESLint, and Prettier
            configured for reliable development flow.
          </p>

          <div class="mt-6 flex flex-wrap gap-2">
            <span
              v-for="chip in stackChips"
              :key="chip"
              class="rounded-full px-3 py-1 text-xs font-medium ring-1"
              :class="
                isDark
                  ? 'bg-white/5 text-slate-200 ring-white/20'
                  : 'bg-white text-slate-700 ring-slate-300'
              "
            >
              {{ chip }}
            </span>
          </div>

          <div class="mt-8 grid gap-3 sm:grid-cols-2">
            <div
              class="rounded-2xl border p-4 transition"
              :class="
                isDark ? 'border-white/10 bg-slate-900/50' : 'border-slate-200 bg-slate-50/80'
              "
            >
              <p class="text-sm" :class="isDark ? 'text-slate-400' : 'text-slate-500'">
                Counter demo
              </p>
              <div class="mt-2 flex items-center gap-3">
                <button
                  class="h-9 w-9 rounded-full bg-rose-500 text-lg font-bold text-white transition hover:bg-rose-400"
                  @click="count -= 1"
                >
                  -
                </button>
                <strong
                  class="min-w-10 text-center text-2xl"
                  :class="isDark ? 'text-white' : 'text-slate-900'"
                >
                  {{ count }}
                </strong>
                <button
                  class="h-9 w-9 rounded-full bg-emerald-500 text-lg font-bold text-white transition hover:bg-emerald-400"
                  @click="count += 1"
                >
                  +
                </button>
              </div>
              <p class="mt-2 text-sm" :class="isDark ? 'text-slate-300' : 'text-slate-600'">
                {{ countMessage }}
              </p>
            </div>

            <div
              class="rounded-2xl border p-4 transition"
              :class="
                isDark ? 'border-white/10 bg-slate-900/50' : 'border-slate-200 bg-slate-50/80'
              "
            >
              <p class="text-sm" :class="isDark ? 'text-slate-400' : 'text-slate-500'">
                Quick greeting
              </p>
              <input
                v-model="name"
                type="text"
                placeholder="Type your name"
                class="mt-2 w-full rounded-xl border px-3 py-2 text-sm transition focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                :class="
                  isDark
                    ? 'border-white/10 bg-white/5 text-white placeholder-slate-500'
                    : 'border-slate-300 bg-white text-slate-900 placeholder-slate-400'
                "
              />
              <p
                class="mt-2 text-sm font-medium"
                :class="isDark ? 'text-cyan-300' : 'text-cyan-700'"
              >
                {{ greetingMessage }}
              </p>
            </div>
          </div>
        </article>

        <aside
          class="rounded-3xl border p-8 shadow-xl backdrop-blur-sm transition"
          :class="isDark ? 'border-white/15 bg-white/5' : 'border-slate-200 bg-white/75'"
        >
          <h2 class="text-xl font-bold" :class="isDark ? 'text-white' : 'text-slate-900'">
            Next Steps
          </h2>
          <ul class="mt-4 space-y-3 text-sm">
            <li
              class="rounded-xl border p-3"
              :class="isDark ? 'border-white/10 text-slate-200' : 'border-slate-200 text-slate-700'"
            >
              Run `npm run dev` and start building screens.
            </li>
            <li
              class="rounded-xl border p-3"
              :class="isDark ? 'border-white/10 text-slate-200' : 'border-slate-200 text-slate-700'"
            >
              Keep quality gates: format, lint, build.
            </li>
            <li
              class="rounded-xl border p-3"
              :class="isDark ? 'border-white/10 text-slate-200' : 'border-slate-200 text-slate-700'"
            >
              Extend `api.service.ts` and `stores` for your domain logic.
            </li>
          </ul>

          <p class="mt-6 text-xs" :class="isDark ? 'text-slate-400' : 'text-slate-500'">
            Updated for latest dependencies, {{ currentYear }}.
          </p>
        </aside>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const count = ref(0);
const name = ref('');
const isDark = ref(true);

const stackChips = ['Vue 3', 'Vite 8', 'TypeScript 6', 'Tailwind 4', 'Pinia', 'Zod'];

const countMessage = computed(() => {
  if (count.value === 0) return 'Start clicking to test reactivity.';
  if (count.value > 0) return `Counter is positive: +${count.value}`;
  return `Counter is negative: ${count.value}`;
});

const greetingMessage = computed(() =>
  name.value ? `Hello, ${name.value}!` : 'Introduce yourself.'
);
const currentYear = new Date().getFullYear();

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
