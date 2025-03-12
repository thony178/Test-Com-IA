document.addEventListener('DOMContentLoaded', function() {
    const itemForm = document.getElementById('itemForm');
    const itemsList = document.getElementById('itemsList');
    let items = JSON.parse(localStorage.getItem('items')) || [];

    function displayItems() {
        itemsList.innerHTML = '';
        items.forEach((item, index) => {
            const itemCard = document.createElement('div');
            itemCard.className = 'col-md-6 item-card';
            itemCard.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">$${item.price}</h6>
                        <p class="card-text">${item.description}</p>
                        <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Remove</button>
                    </div>
                </div>
            `;
            itemsList.appendChild(itemCard);
        });
    }

    window.removeItem = function(index) {
        items.splice(index, 1);
        localStorage.setItem('items', JSON.stringify(items));
        displayItems();
    };

    itemForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newItem = {
            name: document.getElementById('itemName').value,
            price: document.getElementById('itemPrice').value,
            description: document.getElementById('itemDescription').value
        };

        items.push(newItem);
        localStorage.setItem('items', JSON.stringify(items));
        displayItems();
        itemForm.reset();
    });

    displayItems();
});
