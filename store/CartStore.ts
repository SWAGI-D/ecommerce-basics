import {defineStore} from 'pinia'

export const useCartStore = defineStore('cartStore', {

    state: () => ({
        items: [
            {itemId: -1, itemTitle: "", itemImg: "", itemPrice: -1, itemQty: 0}
        ]
    }),

    actions: 
    {
        addItem(item: any)
        {
            this.items.push(item);
        },

        deleteItem(tempId: number)
        {
            const index = this.items.findIndex(task => task.itemId === tempId);

            if (index !== -1) 
            {
                this.items.splice(index, 1);
            }
        },
    }
})