let shoppingList = [['Milk', 1.2], ['Cocoa', 2], ['Salad', 2], ['Carrots', 1.8]]

let itemName = String(prompt("What is the name of product?"))
let itemPrice = Number(prompt("What is the price?"))

shoppingList.push([itemName, itemPrice])

for (let item of shoppingList) {
    let name = item[0]
    let price = item[1]
    console.log(`${name}: ${price.toFixed(2)}`)
}

let total = 0
for (let item of shoppingList) {
    let price = item[1]
    total += price
}

console.log(`Total: ${total.toFixed(2)}`)