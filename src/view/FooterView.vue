<template>
  <footer class="bg-white border-t py-4 text-center text-sm text-gray-500">
    © 2026 Planento — Front v{{ frontendVersion }} | Back v{{ backendVersion }}
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { apiClient } from '../services/api'
import type { VersionResponse } from '../models'

const frontendVersion = __APP_VERSION__
const backendVersion = ref('')

onMounted(async () => {
  try {
    const res = await apiClient.get<VersionResponse>('/version')
    backendVersion.value = res.data.version
  } catch (error) {
    backendVersion.value = 'Erreur'
  }
})
</script>