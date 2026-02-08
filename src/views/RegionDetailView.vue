<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const regionName = route.params.id; // This gets 'agder' from the URL

// This is where you'll eventually fetch the real data for this region
const measurements = [
    { location: 'Flødevigen', temp: 1.0, municipality: 'Arendal', time: 'Today at 14:06', type: 'Automatisk' },
    { location: 'Kilsund', temp: 1.0, municipality: 'Arendal', time: 'Today at 13:23', type: 'Registered by user' },
    { location: 'Flakksvannet', temp: 0.1, municipality: 'Birkenes', time: 'Today at 14:00', type: 'Automatisk' },
    { location: 'Bispen', temp: 0.1, municipality: 'Farsund', time: '6 February at 10:40', type: 'Registered by user' },
];
</script>

<template>
    <div class="w-4/5 mx-auto p-8">
        <router-link to="/water-temperatures" class="text-blue-600 hover:underline text-sm mb-2 block">
            Show all regions
        </router-link>

        <div class="flex justify-between items-center mb-6">
            <h1 class="text-3xl font-bold text-slate-900 capitalize">
                Water temperatures in {{ regionName }}
            </h1>
            <button
                class="bg-[#cedee9] text-[#2e5c8a] px-4 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-blue-200 transition">
                <span>📎</span> Register water temperature
            </button>
        </div>

        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <table class="w-full text-left border-collapse">
                <thead class="bg-gray-50 border-b text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    <tr>
                        <th class="p-4 text-left">Location ↕</th>
                        <th class="p-4 text-right">Water temperature ↕</th>
                        <th class="p-4">Municipality ↕</th>
                        <th class="p-4">Time ↕</th>
                        <th class="p-4">Registered by</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                    <tr v-for="(item, index) in measurements" :key="index" class="hover:bg-blue-50 transition-colors">
                        <td class="p-4 font-medium text-slate-800">{{ item.location }}</td>
                        <td class="p-4 text-right font-bold text-red-600">{{ item.temp.toFixed(1) }}°</td>
                        <td class="p-4 text-slate-600">{{ item.municipality }}</td>
                        <td class="p-4 text-slate-500">{{ item.time }}</td>
                        <td class="p-4 text-sm text-slate-400">{{ item.type }}</td>
                    </tr>
                </tbody>
                <tbody class="divide-y divide-gray-100">
                    <tr v-for="(item, index) in measurements" :key="index" class="hover:bg-blue-50 transition-colors">
                        <td class="p-4 font-medium text-slate-800">{{ item.location }}</td>
                        <td class="p-4 text-right font-bold text-red-600">{{ item.temp.toFixed(1) }}°</td>
                        <td class="p-4 text-slate-600">{{ item.municipality }}</td>
                        <td class="p-4 text-slate-500">{{ item.time }}</td>
                        <td class="p-4 text-sm text-slate-400">{{ item.type }}</td>
                    </tr>
                </tbody>
                <tbody class="divide-y divide-gray-100">
                    <tr v-for="(item, index) in measurements" :key="index" class="hover:bg-blue-50 transition-colors">
                        <td class="p-4 font-medium text-slate-800">{{ item.location }}</td>
                        <td class="p-4 text-right font-bold text-red-600">{{ item.temp.toFixed(1) }}°</td>
                        <td class="p-4 text-slate-600">{{ item.municipality }}</td>
                        <td class="p-4 text-slate-500">{{ item.time }}</td>
                        <td class="p-4 text-sm text-slate-400">{{ item.type }}</td>
                    </tr>
                </tbody>

            </table>
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