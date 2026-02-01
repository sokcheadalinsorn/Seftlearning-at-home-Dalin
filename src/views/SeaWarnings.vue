<script setup>
import WeatherMap from '@/components/WeatherMap.vue'
import { ref } from 'vue'

// This is the "switch" (false = hidden, true = shown)
const isOpen = ref(false)

// This function flips the switch
const toggle = () => {
    isOpen.value = !isOpen.value
}
</script>

<template>

    <div class="w-4/5 mx-auto mt-20 p-8 rounded-lg bg-[#CAF0F8]">

        <!-- title -->
        <h1 class="text-2xl font-bold text-black mb-6">
            Weather warnings in Norway
        </h1>

        <!-- tabs -->
        <div class="flex justify-center mt-6">
            <div class="bg-white rounded-lg shadow-sm p-1 flex w-fit">

                <!-- Land -->
                <RouterLink to="/warnings/land" class="px-12 py-2 rounded-md font-semibold text-black
                hover:bg-blue-100 transition" exact-active-class="bg-[#BFD7F5]">
                    Land (26)
                </RouterLink>

                <!-- Sea and coast -->
                <RouterLink to="/warnings/sea" class="px-12 py-2 rounded-md font-semibold text-black
                hover:bg-blue-100 transition" exact-active-class="bg-[#BFD7F5]">
                    Sea and coast (32)
                </RouterLink>

            </div>
        </div>
    </div>


    <!-- Filters -->
    <div class=" w-4/5 mx-auto mt-4 ">
        <div class=" text-align-center flex gap-3">

             <!-- Severities -->
            <select class=" text-align-center bg-[#C7DDF9] text-black font-medium
            px-4 py-2 rounded-full
            focus:outline-none focus:ring-2 focus:ring-blue-400
            cursor-pointer">
                <option>All severities</option>
                <option>Yellow</option>
                <option>Orange</option>
                <option>Red</option>
            </select>

           <!-- Event types -->
            <select class=" text-align-center bg-[#C7DDF9] text-black font-medium
            px-4 py-2 rounded-full
            focus:outline-none focus:ring-2 focus:ring-blue-400
            cursor-pointer">
                <option>All event types</option>
                <option>Avalanche</option>
                <option>Wind</option>
                <option>Flood</option>
            </select>

        </div>
    </div>


     <!-- weather_warning_page_weather_row -->
    <div class=" flex gap-[100px] p-4 shadow-sm w-4/5 mx-auto mt-4">

        <!-- weather_warning_page_weather_listings -->
        <div class="block w-2/5 p-6 rounded-lg">
            <h3 class="text-2xl font-bold text-black mb-6">Ongoing</h3>

            <!-- weather_each_of_listing -->
            <ol>
                <li>
                    <div class="max-w-2xl mx-auto m-4 border border-orange-300 rounded-lg overflow-hidden font-sans">

                        <div
                            class="flex items-center justify-between p-4 bg-orange-50 cursor-pointer hover:bg-orange-100 transition-colors">
                            <div class="flex items-center gap-3">
                                <div class="bg-orange-500 p-1 rounded shadow-sm text-white">⚠️</div>

                                <div>
                                    <h2 class="font-bold text-gray-900 text-sm md:text-base">
                                        Ongoing: Considerable avalanche danger (Nordenskiöld Land)
                                    </h2>
                                    <p class="text-xs text-gray-500">Orange severity</p>
                                </div>
                            </div>

                            <span class="transform transition-transform duration-300 text-gray-500">
                                ▼
                            </span>
                        </div>

                        <div
                            class="p-4 bg-orange-50 border-t border-orange-200 text-sm text-gray-800 space-y-4">
                            <div>
                                <h3 class="font-bold mb-1">Considerable avalanche danger</h3>
                                <p>On Sunday we expect considerable avalanche danger for region Nordenskiöld Land.
                                    Avalanche problem is persistent weak layer...</p>
                            </div>

                            <div>
                                <h3 class="font-bold mb-1">Recommendations</h3>
                                <ul class="list-disc list-inside space-y-1">
                                    <li>Avoid avalanche terrain</li>
                                    <li>Stay away from steep slopes</li>
                                </ul>
                            </div>

                            <div class="pt-2">
                                <h3 class="font-bold mb-1">Danger levels</h3>
                                <div class="flex items-center gap-2">
                                    <div class="w-4 h-4 bg-orange-500 border border-black"></div>
                                    <span>Orange: danger level 3 - considerable avalanche danger</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </li>


                <li>
                    <div class="max-w-2xl mx-auto m-4 border border-orange-300 rounded-lg overflow-hidden font-sans">

                        <div
                            class="flex items-center justify-between p-4 bg-orange-50 cursor-pointer hover:bg-orange-100 transition-colors">
                            <div class="flex items-center gap-3">
                                <div class="bg-orange-500 p-1 rounded shadow-sm text-white">⚠️</div>

                                <div>
                                    <h2 class="font-bold text-gray-900 text-sm md:text-base">
                                        Ongoing: Considerable avalanche danger (Nordenskiöld Land)
                                    </h2>
                                    <p class="text-xs text-gray-500">Orange severity</p>
                                </div>
                            </div>

                            <span class="transform transition-transform duration-300 text-gray-500">
                                ▼
                            </span>
                        </div>

                        <div
                            class="p-4 bg-orange-50 border-t border-orange-200 text-sm text-gray-800 space-y-4">
                            <div>
                                <h3 class="font-bold mb-1">Considerable avalanche danger</h3>
                                <p>On Sunday we expect considerable avalanche danger for region Nordenskiöld Land.
                                    Avalanche problem is persistent weak layer...</p>
                            </div>

                            <div>
                                <h3 class="font-bold mb-1">Recommendations</h3>
                                <ul class="list-disc list-inside space-y-1">
                                    <li>Avoid avalanche terrain</li>
                                    <li>Stay away from steep slopes</li>
                                </ul>
                            </div>

                            <div class="pt-2">
                                <h3 class="font-bold mb-1">Danger levels</h3>
                                <div class="flex items-center gap-2">
                                    <div class="w-4 h-4 bg-orange-500 border border-black"></div>
                                    <span>Orange: danger level 3 - considerable avalanche danger</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </li>


                <li>
                    <div class="max-w-2xl mx-auto m-4 border border-orange-300 rounded-lg overflow-hidden font-sans">

                        <div
                            class="flex items-center justify-between p-4 bg-orange-50 cursor-pointer hover:bg-orange-100 transition-colors">
                            <div class="flex items-center gap-3">
                                <div class="bg-orange-500 p-1 rounded shadow-sm text-white">⚠️</div>

                                <div>
                                    <h2 class="font-bold text-gray-900 text-sm md:text-base">
                                        Ongoing: Considerable avalanche danger (Nordenskiöld Land)
                                    </h2>
                                    <p class="text-xs text-gray-500">Orange severity</p>
                                </div>
                            </div>

                            <span class="transform transition-transform duration-300 text-gray-500">
                                ▼
                            </span>
                        </div>

                        <div
                            class="p-4 bg-orange-50 border-t border-orange-200 text-sm text-gray-800 space-y-4">
                            <div>
                                <h3 class="font-bold mb-1">Considerable avalanche danger</h3>
                                <p>On Sunday we expect considerable avalanche danger for region Nordenskiöld Land.
                                    Avalanche problem is persistent weak layer...</p>
                            </div>

                            <div>
                                <h3 class="font-bold mb-1">Recommendations</h3>
                                <ul class="list-disc list-inside space-y-1">
                                    <li>Avoid avalanche terrain</li>
                                    <li>Stay away from steep slopes</li>
                                </ul>
                            </div>

                            <div class="pt-2">
                                <h3 class="font-bold mb-1">Danger levels</h3>
                                <div class="flex items-center gap-2">
                                    <div class="w-4 h-4 bg-orange-500 border border-black"></div>
                                    <span>Orange: danger level 3 - considerable avalanche danger</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </li>


                <li>
                    <div class="max-w-2xl mx-auto m-4 border border-orange-300 rounded-lg overflow-hidden font-sans">

                        <div
                            class="flex items-center justify-between p-4 bg-orange-50 cursor-pointer hover:bg-orange-100 transition-colors">
                            <div class="flex items-center gap-3">
                                <div class="bg-orange-500 p-1 rounded shadow-sm text-white">⚠️</div>

                                <div>
                                    <h2 class="font-bold text-gray-900 text-sm md:text-base">
                                        Ongoing: Considerable avalanche danger (Nordenskiöld Land)
                                    </h2>
                                    <p class="text-xs text-gray-500">Orange severity</p>
                                </div>
                            </div>

                            <span class="transform transition-transform duration-300 text-gray-500">
                                ▼
                            </span>
                        </div>

                        <div
                            class="p-4 bg-orange-50 border-t border-orange-200 text-sm text-gray-800 space-y-4">
                            <div>
                                <h3 class="font-bold mb-1">Considerable avalanche danger</h3>
                                <p>On Sunday we expect considerable avalanche danger for region Nordenskiöld Land.
                                    Avalanche problem is persistent weak layer...</p>
                            </div>

                            <div>
                                <h3 class="font-bold mb-1">Recommendations</h3>
                                <ul class="list-disc list-inside space-y-1">
                                    <li>Avoid avalanche terrain</li>
                                    <li>Stay away from steep slopes</li>
                                </ul>
                            </div>

                            <div class="pt-2">
                                <h3 class="font-bold mb-1">Danger levels</h3>
                                <div class="flex items-center gap-2">
                                    <div class="w-4 h-4 bg-orange-500 border border-black"></div>
                                    <span>Orange: danger level 3 - considerable avalanche danger</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </li>


                <li>
                    <div class="max-w-2xl mx-auto m-4 border border-orange-300 rounded-lg overflow-hidden font-sans">

                        <div
                            class="flex items-center justify-between p-4 bg-orange-50 cursor-pointer hover:bg-orange-100 transition-colors">
                            <div class="flex items-center gap-3">
                                <div class="bg-orange-500 p-1 rounded shadow-sm text-white">⚠️</div>

                                <div>
                                    <h2 class="font-bold text-gray-900 text-sm md:text-base">
                                        Ongoing: Considerable avalanche danger (Nordenskiöld Land)
                                    </h2>
                                    <p class="text-xs text-gray-500">Orange severity</p>
                                </div>
                            </div>

                            <span class="transform transition-transform duration-300 text-gray-500">
                                ▼
                            </span>
                        </div>

                        <div
                            class="p-4 bg-orange-50 border-t border-orange-200 text-sm text-gray-800 space-y-4">
                            <div>
                                <h3 class="font-bold mb-1">Considerable avalanche danger</h3>
                                <p>On Sunday we expect considerable avalanche danger for region Nordenskiöld Land.
                                    Avalanche problem is persistent weak layer...</p>
                            </div>

                            <div>
                                <h3 class="font-bold mb-1">Recommendations</h3>
                                <ul class="list-disc list-inside space-y-1">
                                    <li>Avoid avalanche terrain</li>
                                    <li>Stay away from steep slopes</li>
                                </ul>
                            </div>

                            <div class="pt-2">
                                <h3 class="font-bold mb-1">Danger levels</h3>
                                <div class="flex items-center gap-2">
                                    <div class="w-4 h-4 bg-orange-500 border border-black"></div>
                                    <span>Orange: danger level 3 - considerable avalanche danger</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </li>
            </ol>


            <h3 class="text-2xl font-bold text-black mb-6">Expected</h3>

            <!-- weather_each_of_listing -->
            <ol>
                <li>
                    <div class="max-w-2xl mx-auto m-4 border border-orange-300 rounded-lg overflow-hidden font-sans">

                        <div
                            class="flex items-center justify-between p-4 bg-orange-50 cursor-pointer hover:bg-orange-100 transition-colors">
                            <div class="flex items-center gap-3">
                                <div class="bg-orange-500 p-1 rounded shadow-sm text-white">⚠️</div>

                                <div>
                                    <h2 class="font-bold text-gray-900 text-sm md:text-base">
                                        Ongoing: Considerable avalanche danger (Nordenskiöld Land)
                                    </h2>
                                    <p class="text-xs text-gray-500">Orange severity</p>
                                </div>
                            </div>

                            <span class="transform transition-transform duration-300 text-gray-500">
                                ▼
                            </span>
                        </div>

                        <div
                            class="p-4 bg-orange-50 border-t border-orange-200 text-sm text-gray-800 space-y-4">
                            <div>
                                <h3 class="font-bold mb-1">Considerable avalanche danger</h3>
                                <p>On Sunday we expect considerable avalanche danger for region Nordenskiöld Land.
                                    Avalanche problem is persistent weak layer...</p>
                            </div>

                            <div>
                                <h3 class="font-bold mb-1">Recommendations</h3>
                                <ul class="list-disc list-inside space-y-1">
                                    <li>Avoid avalanche terrain</li>
                                    <li>Stay away from steep slopes</li>
                                </ul>
                            </div>

                            <div class="pt-2">
                                <h3 class="font-bold mb-1">Danger levels</h3>
                                <div class="flex items-center gap-2">
                                    <div class="w-4 h-4 bg-orange-500 border border-black"></div>
                                    <span>Orange: danger level 3 - considerable avalanche danger</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </li>


                <li>
                    <div class="max-w-2xl mx-auto m-4 border border-orange-300 rounded-lg overflow-hidden font-sans">

                        <div
                            class="flex items-center justify-between p-4 bg-orange-50 cursor-pointer hover:bg-orange-100 transition-colors">
                            <div class="flex items-center gap-3">
                                <div class="bg-orange-500 p-1 rounded shadow-sm text-white">⚠️</div>

                                <div>
                                    <h2 class="font-bold text-gray-900 text-sm md:text-base">
                                        Ongoing: Considerable avalanche danger (Nordenskiöld Land)
                                    </h2>
                                    <p class="text-xs text-gray-500">Orange severity</p>
                                </div>
                            </div>

                            <span class="transform transition-transform duration-300 text-gray-500">
                                ▼
                            </span>
                        </div>

                        <div
                            class="p-4 bg-orange-50 border-t border-orange-200 text-sm text-gray-800 space-y-4">
                            <div>
                                <h3 class="font-bold mb-1">Considerable avalanche danger</h3>
                                <p>On Sunday we expect considerable avalanche danger for region Nordenskiöld Land.
                                    Avalanche problem is persistent weak layer...</p>
                            </div>

                            <div>
                                <h3 class="font-bold mb-1">Recommendations</h3>
                                <ul class="list-disc list-inside space-y-1">
                                    <li>Avoid avalanche terrain</li>
                                    <li>Stay away from steep slopes</li>
                                </ul>
                            </div>

                            <div class="pt-2">
                                <h3 class="font-bold mb-1">Danger levels</h3>
                                <div class="flex items-center gap-2">
                                    <div class="w-4 h-4 bg-orange-500 border border-black"></div>
                                    <span>Orange: danger level 3 - considerable avalanche danger</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </li>
            </ol>
        </div>

        <WeatherMap />

    </div>


</template>