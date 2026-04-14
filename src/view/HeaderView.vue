<template>
  <header class="border-b bg-white">
    <div class="flex items-center justify-between px-4 md:px-6 py-3">
      <!-- Logo -->
      <div class="flex items-center shrink-0">
        <img src="../assets/icone.ico" alt="Logo" class="w-10 h-10" />
      </div>

      <!-- Recherche -->
      <div class="mx-4 flex-1 hidden sm:flex justify-center">
        <input
          type="text"
          placeholder="Rechercher un évenement public..."
          class="w-full max-w-md px-5 py-2 rounded-full bg-gray-100 border border-transparent focus:border-blue-400 focus:bg-white focus:outline-none shadow-sm"
        />
      </div>

      <!-- Actions desktop/tablette -->
      <div class="hidden sm:flex items-center justify-end gap-4 shrink-0">
        <i class="fa-solid fa-magnifying-glass text-xl cursor-pointer"></i>
        <i class="fa-solid fa-user text-xl cursor-pointer"></i>
      </div>

      <!-- Burger mobile -->
      <button
        type="button"
        class="sm:hidden inline-flex items-center justify-center text-xl p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
        @click="isMenuOpen = !isMenuOpen"
      >
        <i :class="isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
      </button>
    </div>

    <!-- Menu mobile -->
    <div
      v-if="isMenuOpen"
      class="sm:hidden border-t px-4 py-4 space-y-4 bg-white"
    >
      <input
        type="text"
        placeholder="Rechercher..."
        class="w-full px-4 py-2 rounded-full bg-gray-100 border border-transparent focus:border-blue-400 focus:bg-white focus:outline-none shadow-sm"
      />

      <button
        type="button"
        class="w-full flex items-center gap-3 px-2 py-2 rounded-md hover:bg-gray-100 text-left"
      >
        <i class="fa-solid fa-user text-lg"></i>
        <span class="text-sm font-medium text-gray-700">Mon compte</span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);
</script>
