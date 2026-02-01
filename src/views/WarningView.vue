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
</template>
