// script.js
document.addEventListener('DOMContentLoaded', () => {
    // To-Do List Functionality
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => deleteTask(index));
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        });
    }

    addTaskBtn.addEventListener('click', () => {
        const task = taskInput.value.trim();
        if (task) {
            tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            taskInput.value = '';
            renderTasks();
        }
    });

    function deleteTask(index) {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }

    renderTasks();

    // Product Filtering and Sorting Functionality
    const products = [
        { name: 'Laptop', category: 'electronics', price: 1200, rating: 4.5 },
        { name: 'T-Shirt', category: 'clothing', price: 20, rating: 3.8 },
        { name: 'Headphones', category: 'electronics', price: 100, rating: 4.2 },
        { name: 'Novel', category: 'books', price: 15, rating: 4.7 },
        { name: 'Jeans', category: 'clothing', price: 50, rating: 4.0 },
    ];

    const categoryFilter = document.getElementById('category-filter');
    const sortBy = document.getElementById('sort-by');
    const productList = document.getElementById('product-list');

    function renderProducts(filteredProducts) {
        productList.innerHTML = '';
        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <p>Price: $${product.price}</p>
                <p>Rating: ${product.rating}</p>
            `;
            productList.appendChild(card);
        });
    }

    function filterAndSortProducts() {
        const category = categoryFilter.value;
        const sortCriteria = sortBy.value;

        let filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);

        if (sortCriteria === 'rating') {
            filteredProducts.sort((a, b) => b.rating - a.rating);
        } else if (sortCriteria === 'price-low') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortCriteria === 'price-high') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        renderProducts(filteredProducts);
    }

    categoryFilter.addEventListener('change', filterAndSortProducts);
    sortBy.addEventListener('change', filterAndSortProducts);

    // Initial render
    filterAndSortProducts();
});
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});