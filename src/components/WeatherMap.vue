<script setup>
import { onMounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const map = ref(null)

onMounted(() => {
    // SETVIEW: [20, 0] centers it nicely, Zoom 2 shows the whole world
    map.value = L.map('map-container').setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap',
        // Prevent the map from repeating like a wallpaper
        noWrap: true,
        // Don't let the user zoom out too far (makes it look ugly)
        minZoom: 2
    }).addTo(map.value)
})
</script>

<template>
    <div class="p-4">
        <h3 class="text-xl font-bold mb-4">World Weather Map</h3>
        <div id="map-container" class="h-[500px] w-[500px] rounded-2xl shadow-xl border-4 border-white"></div>
    </div>
</template>