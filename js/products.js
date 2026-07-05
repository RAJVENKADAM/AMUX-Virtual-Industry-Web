const grid = document.getElementById("productsGrid");
const searchInput = document.getElementById("productSearch");
const emptyState = document.getElementById("emptyState");

function getStatusClass(status) {

    const value = status.toLowerCase();

    if (value.includes("live")) return "status-live";

    if (value.includes("beta")) return "status-beta";

    return "status-coming";

}

function renderProducts(products) {

    grid.innerHTML = "";

    if (products.length === 0) {

        emptyState.style.display = "block";
        return;

    }

    emptyState.style.display = "none";

    products.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <div class="product-image">

                <img src="${product.image}" alt="${product.name}">

            </div>

            <div class="product-content">

                <span class="product-category">

                    ${product.category}

                </span>

                <h3 class="product-title">

                    ${product.name}

                </h3>

                <p class="product-description">

                    ${product.description}

                </p>

                <div class="product-footer">

                    <span class="product-status ${getStatusClass(product.status)}">

                        ${product.status}

                    </span>

                    <a href="${product.link}" class="product-btn">

                        View

                    </a>

                </div>

            </div>

        `;

        grid.appendChild(card);

    });

}

renderProducts(products);

searchInput.addEventListener("keyup", function () {

    const keyword = this.value.toLowerCase().trim();

    const filtered = products.filter(product => {

        return (

            product.name.toLowerCase().includes(keyword) ||

            product.description.toLowerCase().includes(keyword) ||

            product.category.toLowerCase().includes(keyword)

        );

    });

    renderProducts(filtered);

});