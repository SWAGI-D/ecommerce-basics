<template>
    <div class="card">
      <div class="grid grid-cols-2 gap-10">
        <div class="p-7">
          <img :src="`${product.image}`" class="mx-auto my-7" />
        </div>
        <div class="p-7">
          <h2 class="text-4xl my-7">{{ product.title }}</h2>
          <p class="text-xl my-7">Price - ${{ product.price }}</p>
          <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
          <p class="mb-7">{{ product.description }}</p>
          <button @click="decrementQty()" class="font-bold mx-2">-</button>
          <span :v-model="qty" class="px-8 text-center font-bold bg-slate-200">{{ qty }}</span>
          <button @click="incrementQty()" class="font-bold mx-2">+</button>
          <button class="btn my-4 w-32 flex justify-center" @click="addToCart">Add To Cart</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    import { useCartStore } from '~/store/CartStore';

    const { product } = defineProps(['product'])

    const qty = ref(1)

    function decrementQty()
    {
      if(qty.value > 1)
      {
        qty.value--;
      }
    }

    function incrementQty()
    {
      qty.value++;
    }


    function addToCart() 
    {
      const cart = useCartStore()

      cart.addItem({itemId: product.id, itemTitle: product.title, itemImg: product.image, itemPrice: product.price, itemQty: qty.value});

    }

  </script>
  
  <style scoped>
    img {
      max-width: 400px;
    }
  </style>