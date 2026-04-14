<template>
  <div class="min-h-screen flex flex-col">
    <!-- HEADER -->
    <Header />

    <main class="flex-1 bg-gray-50">
      <router-view />
    </main>

    <!-- FOOTER -->
    <Footer />
  </div>
</template>

<script setup>
import Header from "./view/HeaderView.vue";
import Footer from "./view/FooterView.vue";
</script>
