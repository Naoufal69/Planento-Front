<template>
  <header class="flex items-center justify-between px-6 py-3 border-b bg-white">
    <!-- Logo -->
    <div class="flex items-center">
      <img src="../assets/icone.ico" alt="Logo" class="w-10 h-10" />
    </div>

    <!-- Recherche -->
    <div class="flex-1 flex justify-center">
      <input
        type="text"
        placeholder="Rechercher..."
        class="w-full max-w-md px-5 py-2 rounded-full bg-gray-100 border border-transparent focus:border-blue-400 focus:bg-white focus:outline-none shadow-sm"
      />
    </div>

    <!-- User -->
    <div class="flex items-center justify-end">
      <i class="fa-solid fa-user text-xl cursor-pointer"></i>
    </div>
  </header>
</template>

<script setup></script>
