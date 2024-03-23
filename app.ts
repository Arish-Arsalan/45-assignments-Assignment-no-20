interface item {
    name:string
    price:number
}
// create two objects
const book:item ={
    name: 'ESSENTIAL TYPESCIPT',
    price:450
}
const apple: item ={
    name:'apple',
    price:200
}
console.log(`book name: ${book.name},price:$${book.price}`)
console.log(`apple name: ${apple.name},price:$${apple.price}`)