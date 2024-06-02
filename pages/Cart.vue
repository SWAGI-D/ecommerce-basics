<template>
    <div>
        <h2 class="text-3xl font-bold p-4">Cart Items: </h2>
        <ul v-for="item in cartStore.items" :key="item.id" class="grid">
            <li class="bg-white grid grid-cols-2 gap-10 border-b-2" v-if="item.itemQty !== 0">
                <div class="p-7">
                    <img :src="`${item.itemImg}`" class="mx-auto my-7"/>
                </div>
                <div class="p-14">
                    <p class="text-xl my-7">Product Name: {{ item.itemTitle }}</p>
                    <p class="text-l my-7">Product Quantity: {{ item.itemQty }}</p>
                    <p class="text-l my-7">Product(s) Price: {{ item.itemQty * item.itemPrice }}</p>
                    <button class="btn my-4" @click="removeProduct(item.itemId)">Remove Item</button>
                </div>
            </li>
        </ul>
    </div>
  
</template>

<script setup>
import { useCartStore } from '~/store/CartStore';

const cartStore = useCartStore()

function removeProduct(id)
{
    cartStore.deleteItem(id);
}


</script>


<style scoped>
img {
      max-width: 200px;
    }

</style>