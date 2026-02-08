<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// List of regions from your image
const regions = [
  { name: 'Agder', id: 'agder', icon: '🛡️' },
  { name: 'Akershus', id: 'akershus', icon: '🏰' },
  { name: 'Buskerud', id: 'buskerud', icon: '⚒️' },
  { name: 'Finnmark', id: 'finnmark', icon: '❄️' },
  { name: 'Innlandet', id: 'innlandet', icon: '🌲' },
  { name: 'Jan Mayen', id: 'jan-mayen', icon: '🌋' },
  { name: 'Møre og Romsdal', id: 'more-og-romsdal', icon: '⛰️' },
  { name: 'Nordland', id: 'nordland', icon: '🦅' },
  { name: 'Oslo', id: 'oslo', icon: '👑' },
  { name: 'Rogaland', id: 'rogaland', icon: '⚓' },
  { name: 'Svalbard', id: 'svalbard', icon: '🐻' },
  { name: 'Telemark', id: 'telemark', icon: '⚡' },
  { name: 'Troms', id: 'troms', icon: '🦌' },
  { name: 'Trøndelag', id: 'trondelag', icon: '⚔️' },
  { name: 'Vestfold', id: 'vestfold', icon: '🏰' },
  { name: 'Vestland', id: 'vestland', icon: '🌊' },
  { name: 'Østfold', id: 'ostfold', icon: '🏹' },
];

const navigateToRegion = (id) => {
  // This will push the user to /water-temperatures/oslo, etc.
  router.push(`/water-temperatures/${id}`);
};
</script>

<template>
  <div class="max-w-7xl mx-auto p-6 bg-[#f0f5fa] min-h-screen">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-slate-900 flex items-center gap-2">
        Water temperatures in Norway 
        <span class="text-blue-500 text-sm bg-blue-100 rounded-full px-2">i</span>
      </h1>
      <button class="bg-blue-200 text-blue-800 px-4 py-2 rounded flex items-center gap-2 font-medium hover:bg-blue-300 transition">
        📎 Register water temperature
      </button>
    </div>

    <h2 class="text-xl font-bold mb-4">Regions</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <div 
        v-for="region in regions" 
        :key="region.id"
        @click="navigateToRegion(region.id)"
        class="flex items-center justify-between p-4  border border-transparent rounded-lg shadow-sm cursor-pointer hover:border-blue-400 hover:shadow-md transition-all group"
      >
        <div class="flex items-center gap-4">
          <span class="text-2xl">{{ region.icon }}</span>
          <span class="font-semibold text-slate-800">{{ region.name }}</span>
        </div>
        
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400 group-hover:text-blue-500 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </div>
</template>