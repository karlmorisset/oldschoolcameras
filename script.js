let produits = document.querySelectorAll('.produit')

produits.forEach(produit => {
   
    let buy = produit.querySelector('.buy')
    let name = produit.querySelector('.name')
    
    buy.addEventListener('click', evt =>{
        alert(`Je veux mon ${name.innerHTML}!!`)
    })
});