<template>
    <NuxtLoadingIndicator/>
    <div>
        <header class="shadow-sm bg-pink-800 text-white">
        <nav class="container mx-auto p-4 flex justify-between">
            <NuxtLink to="/" class="font-bold">Ecommerce</NuxtLink>
            <ul class="flex gap-4">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/products">Products</NuxtLink></li>
            </ul>
        </nav>
        </header>
    </div>

    <div class="container mx-auto p-4">
        <slot/>
    </div>
</template>

<script setup>
</script>

<style scoped>
</style>