function filterProducts() {
    const keyword = document.getElementById('search-input').value.toLowerCase();
    const selectedCategory = document.getElementById('category-filter').value;
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.querySelector('h2').innerText.toLowerCase();
        const productCategory = product.getAttribute('data-category');

        const matchesKeyword = productName.includes(keyword);
        const matchesCategory = selectedCategory === 'all' || productCategory === selectedCategory;

        if (matchesKeyword && matchesCategory) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}