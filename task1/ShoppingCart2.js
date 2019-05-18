class ShoppingCart {
    
    constructor() {
        this.items = []
    }

    // Returns the items in this cart
    getItems (){
        return this.items
    }
        
    addItem(itemName, quantity, price) {
        const item = {
            "name": itemName,
            "quantity": quantity,
            "price": price
        }
        
        this.items.push(item)
    }
    
    total() {
        return this.items.reduce((acc, item) => acc + item.quantity * item.price, 0)
    }
    
    
    clear() {
        this.items = []
    }
    
}

module.exports = ShoppingCart
