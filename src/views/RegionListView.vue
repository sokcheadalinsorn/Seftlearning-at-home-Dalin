<script setup>
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
</script>

<template>
    <div class="w-4/5 mx-auto p-8 bg-[#CAF0F] min-h-screen">

        <div class="flex justify-between items-center mb-8">
            <h1 class="text-3xl font-bold text-slate-900">Water temperatures in Norway</h1>
            <button
                class="bg-[#90E0EF] text-[#000] px-4 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-blue-200 transition">
                <span>📎</span> Register water temperature
            </button>
        </div>

        <h2 class="text-xl font-bold mb-4">Regions</h2>

        <div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <router-link v-for="region in regions" :key="region.id" :to="`/water-temperatures/${region.id}`"
                class="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-transparent hover:border-blue-300 hover:shadow-md transition-all group">
                <div class="flex items-center gap-3">
                    <span class="text-xl">{{ region.icon || '🛡️' }}</span>
                    <span class="font-bold text-slate-800">{{ region.name }}</span>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-slate-400 group-hover:text-blue-500 transition" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </router-link>
        </div>

        <!-- footer -->

        <footer class="mt-10 border-t border-blue-200 pt-10 pb-20 text-[#1a2b3c]">
            <div class="flex gap-4 mb-8">
                <button
                    class="bg-[#90E0EF] px-4 py-2 rounded text-sm font-semibold flex items-center gap-2 hover:bg-blue-200 transition">
                    <span>⚙️</span> See all help articles
                </button>
                <button
                    class="bg-[#90E0EF] px-4 py-2 rounded text-sm font-semibold flex items-center gap-2 hover:bg-blue-200 transition">
                    <span>✉️</span> Contact us
                </button>
                <button
                    class="bg-[#90E0EF] px-4 py-2 rounded text-sm font-semibold flex items-center gap-2 hover:bg-blue-200 transition">
                    <span>🌐</span> Choose language / velg språk ▾
                </button>
            </div>

            <p class="text-sm mb-4">Yr is a collaboration between</p>

            <div class="flex items-center gap-8 mb-8">
                <div class="font-black text-2xl tracking-tighter">NRK</div>
                <div class="flex items-center gap-2">
                    <div class="w-8 h-8 rounded-full border-2 border-slate-900"></div>
                    <span class="text-xs font-bold leading-tight">Meteorologisk<br>institutt</span>
                </div>
            </div>

            <div class="text-[11px] leading-relaxed text-slate-600 space-y-1">
                <p>Copyright © Norwegian Meteorological Institute and the Norwegian Broadcasting Corporation 2007-2026 |
                    Head of Yr: Ingrid Støver Jensen |</p>
                <p>Executive editor: Vibeke Fürst Haugen | Meteorologically responsible: Roar Skålin</p>
            </div>

            <div class="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-blue-700 underline font-medium">
                <a href="#">Privacy</a>
                <a href="#">Cookies</a>
                <a href="#">Our collaborators</a>
                <a href="#">App for iOS</a>
                <a href="#">App for Android</a>
                <a href="#">Yr for developers</a>
                <a href="#">Water temperatures</a>
                <a href="#">Yr on Facebook</a>
                <a href="#">Yr on Instagram</a>
            </div>
        </footer>
    </div>


</template>