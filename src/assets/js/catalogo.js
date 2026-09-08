// Datos que alimentan las tarjetas del catálogo. En una versión con backend,
// este arreglo podría reemplazarse por la respuesta de una API.
const vehicles = [
    { brand: 'Mazda', model: 'CX-5 Signature', year: 2025, condition: 'Nuevo', price: '$36,500', image: './assets/images/20240205-MAZDA-CX-5-2025-PORTADA-02.webp' },
    { brand: 'Hyundai', model: 'i10', year: 2024, condition: 'Nuevo', price: '$21,500', image: './assets/images/69861fbe5c437926f73db011_Exterior-hatchback.jpg' },
    { brand: 'Changan', model: 'Alsvin', year: 2024, condition: 'Usado', price: '$19,800', image: './assets/images/71f3d604a7514ae6-xl.webp' },
    { brand: 'Bugatti', model: 'Tourbillon V16', year: 2025, condition: 'Nuevo', price: '$4,100,000', image: './assets/images/bugatti-tourbillon-12.webp' },
    { brand: 'Bugatti', model: 'Tourbillon V16 Azure', year: 2025, condition: 'Nuevo', price: '$4,250,000', image: './assets/images/Bugatti-Tourbillon-280325-04.webp' },
    { brand: 'Bugatti', model: 'Tourbillon V16 Carbon', year: 2025, condition: 'Nuevo', price: '$4,300,000', image: './assets/images/Bugatti-Tourbillon-V16.jpg' },
    { brand: 'Bugatti', model: 'Chiron Super Sport', year: 2024, condition: 'Nuevo', price: '$3,900,000', image: './assets/images/coches-alta-gama.jpg' },
    { brand: 'BMW', model: 'M3', year: 2023, condition: 'Usado', price: '$74,900', image: './assets/images/portada_0.jpg' },
    { brand: 'Audi', model: 'A6', year: 2024, condition: 'Nuevo', price: '$79,500', image: './assets/images/welches-dieser-fahrzeuge-der-oberen-mittelklasse-ist-die-v0-g6dlxevprsnf1.webp' },
    { brand: 'Mercedes-Benz', model: 'Clase C', year: 2024, condition: 'Nuevo', price: '$85,000', image: './assets/images/mercedes_benz.jpg' },
    { brand: 'Cupra', model: 'León Híbrido', year: 2024, condition: 'Nuevo', price: '$48,500', image: './assets/images/cupra-leon-hibrido-vista-delantera-lateral.jpeg' },
    { brand: 'Lamborghini', model: 'Urus SE', year: 2024, condition: 'Nuevo', price: '$260,000', image: './assets/images/1-Lamborghini-Urus-SE-review-2024.jpg' },
    { brand: 'Mazda', model: 'CX-5', year: 2023, condition: 'Usado', price: '$32,000', image: './assets/images/2023-mazda-cx-5-gallery-image07.avif' },
    { brand: 'Mazda', model: 'Mazda 3', year: 2024, condition: 'Nuevo', price: '$29,900', image: './assets/images/mazda-3-vista-delantera-lateral.jpg' },
    { brand: 'Renault', model: 'Kwid', year: 2023, condition: 'Usado', price: '$18,900', image: './assets/images/Renault-KWID-Phase-II-2019.jpg' }
];

const searchForm = document.querySelector('#vehicleSearchForm');
const resultsContainer = document.querySelector('#vehicleResults');

// Dibuja las coincidencias encontradas y mantiene el mensaje vacío en un solo lugar.
function renderVehicles(results) {
    if (!results.length) {
        resultsContainer.innerHTML = '<div class="col-12"><p class="vehicle-empty">No encontramos vehículos con esos filtros.</p></div>';
        return;
    }

    resultsContainer.innerHTML = results.map((vehicle) => `
        <div class="col-sm-6 col-xl-4">
            <article class="vehicle-card h-100">
                <img src="${vehicle.image}" alt="${vehicle.brand} ${vehicle.model}" class="vehicle-image">
                <div class="vehicle-card-body">
                    <div class="d-flex justify-content-between align-items-start gap-2">
                        <div>
                            <p class="vehicle-brand">${vehicle.brand}</p>
                            <h3>${vehicle.model}</h3>
                        </div>
                        <span class="vehicle-condition">${vehicle.condition}</span>
                    </div>
                    <p class="vehicle-details">${vehicle.year} · Disponible para entrega</p>
                    <strong class="vehicle-price">${vehicle.price}</strong>
                </div>
            </article>
        </div>
    `).join('');
}

// El formulario se procesa en el navegador para evitar recargar la página.
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const brand = document.querySelector('#brandInput').value.trim().toLowerCase();
    const model = document.querySelector('#modelInput').value.trim().toLowerCase();
    const year = document.querySelector('#yearInput').value.trim();
    const condition = document.querySelector('#conditionInput').value.trim().toLowerCase();

    // Cada campo es opcional: si está vacío, no limita la búsqueda.
    const filteredVehicles = vehicles.filter((vehicle) => (
        (!brand || vehicle.brand.toLowerCase().includes(brand)) &&
        (!model || vehicle.model.toLowerCase().includes(model)) &&
        (!year || String(vehicle.year) === year) &&
        (!condition || vehicle.condition.toLowerCase() === condition)
    ));

    renderVehicles(filteredVehicles);
});

renderVehicles(vehicles);