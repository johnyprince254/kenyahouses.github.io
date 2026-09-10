// Property Data
const properties = [
    {
        id: 1,
        title: "Modern 4-Bedroom Villa in Karen",
        location: "Karen, Nairobi",
        locationKey: "nairobi",
        type: "villa",
        purpose: "sale",
        price: 35000000,
        bedrooms: 4,
        bathrooms: 3,
        area: 450,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
        images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200"
        ],
        description: "Stunning modern villa nestled in the prestigious Karen neighborhood. Features a spacious living area, gourmet kitchen, landscaped garden, and swimming pool. Perfect for families seeking luxury and tranquility.",
        lat: -1.3197,
        lng: 36.6730
    },
    {
        id: 2,
        title: "Luxury Apartment in Westlands",
        location: "Westlands, Nairobi",
        locationKey: "nairobi",
        type: "apartment",
        purpose: "rent",
        price: 180000,
        bedrooms: 3,
        bathrooms: 2,
        area: 180,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200"
        ],
        description: "Elegant apartment in the heart of Westlands with stunning city views. Features modern finishes, fitted kitchen, and access to premium amenities including gym and rooftop pool.",
        lat: -1.2641,
        lng: 36.8047
    },
    {
        id: 3,
        title: "Beachfront Villa in Diani",
        location: "Diani Beach, Mombasa",
        locationKey: "mombasa",
        type: "villa",
        purpose: "sale",
        price: 45000000,
        bedrooms: 5,
        bathrooms: 4,
        area: 600,
        image: "https://images.unsplash.com/photo-1499793983394-e58fc2ad5f2a?w=800",
        images: [
            "https://images.unsplash.com/photo-1499793983394-e58fc2ad5f2a?w=1200",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200"
        ],
        description: "Breathtaking beachfront villa with direct access to Diani Beach. Features infinity pool, private garden, spacious terraces, and traditional coastal architecture blended with modern luxury.",
        lat: -4.1732,
        lng: 39.5929
    },
    {
        id: 4,
        title: "Family Home in Runda",
        location: "Runda Estate, Nairobi",
        locationKey: "nairobi",
        type: "house",
        purpose: "sale",
        price: 55000000,
        bedrooms: 6,
        bathrooms: 5,
        area: 800,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
        images: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
            "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200"
        ],
        description: "Magnificent family home in the exclusive Runda Estate. Features expansive gardens, staff quarters, home theater, wine cellar, and state-of-the-art security system.",
        lat: -1.2374,
        lng: 36.6730
    },
    {
        id: 5,
        title: "Penthouse in Kilimani",
        location: "Kilimani, Nairobi",
        locationKey: "nairobi",
        type: "apartment",
        purpose: "sale",
        price: 28000000,
        bedrooms: 3,
        bathrooms: 3,
        area: 250,
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
        images: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200"
        ],
        description: "Stunning penthouse with panoramic city views. Features floor-to-ceiling windows, private terrace, smart home system, and premium finishes throughout.",
        lat: -1.2921,
        lng: 36.7745
    },
    {
        id: 6,
        title: "Townhouse in Lavington",
        location: "Lavington, Nairobi",
        locationKey: "nairobi",
        type: "townhouse",
        purpose: "rent",
        price: 150000,
        bedrooms: 3,
        bathrooms: 2,
        area: 200,
        image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800",
        images: [
            "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200"
        ],
        description: "Modern townhouse in the sought-after Lavington area. Features private garden, dsq, ample parking, and proximity to shopping centers and international schools.",
        lat: -1.2894,
        lng: 36.7656
    },
    {
        id: 7,
        title: "Coastal Apartment in Nyali",
        location: "Nyali, Mombasa",
        locationKey: "mombasa",
        type: "apartment",
        purpose: "rent",
        price: 120000,
        bedrooms: 2,
        bathrooms: 2,
        area: 140,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
            "https://images.unsplash.com/photo-1499793983394-e58fc2ad5f2a?w=1200",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200"
        ],
        description: "Beautiful coastal apartment with ocean views in Nyali. Walking distance to the beach, restaurants, and shopping. Features modern kitchen and spacious balconies.",
        lat: -4.0268,
        lng: 39.7020
    },
    {
        id: 8,
        title: "Lakefront Property in Kisumu",
        location: "Milimani, Kisumu",
        locationKey: "kisumu",
        type: "house",
        purpose: "sale",
        price: 18000000,
        bedrooms: 4,
        bathrooms: 3,
        area: 350,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
            "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200"
        ],
        description: "Elegant home in Milimani with beautiful Lake Victoria views. Features spacious compound, modern fittings, and serene environment perfect for families.",
        lat: -0.0917,
        lng: 34.7680
    },
    {
        id: 9,
        title: "Modern Villa in Turtle Bay",
        location: "Turtle Bay, Malindi",
        locationKey: "malindi",
        type: "villa",
        purpose: "sale",
        price: 22000000,
        bedrooms: 3,
        bathrooms: 3,
        area: 320,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
        images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
            "https://images.unsplash.com/photo-1499793983394-e58fc2ad5f2a?w=1200",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200"
        ],
        description: "Exquisite villa near Turtle Bay with private beach access. Features tropical garden, outdoor shower, spacious living areas, and traditional Italian-Kenyan architecture.",
        lat: -3.2268,
        lng: 40.1148
    },
    {
        id: 10,
        title: "Garden Apartment in Nakuru",
        location: "Milimani, Nakuru",
        locationKey: "nakuru",
        type: "apartment",
        purpose: "rent",
        price: 85000,
        bedrooms: 2,
        bathrooms: 2,
        area: 120,
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800",
        images: [
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200"
        ],
        description: "Charming garden apartment in peaceful Milimani area. Features private garden, modern kitchen, ample parking, and close proximity to Nakuru CBD.",
        lat: -0.3031,
        lng: 36.0800
    },
    {
        id: 11,
        title: "Executive Home in Eldoret",
        location: "Eldoret West, Eldoret",
        locationKey: "eldoret",
        type: "house",
        purpose: "sale",
        price: 15000000,
        bedrooms: 4,
        bathrooms: 3,
        area: 300,
        image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800",
        images: [
            "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200"
        ],
        description: "Spacious executive home in Eldoret West. Features manicured gardens, dsq, borehole water, and proximity to schools and shopping centers.",
        lat: 0.5143,
        lng: 35.2698
    },
    {
        id: 12,
        title: "City Apartment in Thika",
        location: "Thika Town, Thika",
        locationKey: "thika",
        type: "apartment",
        purpose: "sale",
        price: 8500000,
        bedrooms: 2,
        bathrooms: 2,
        area: 110,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200"
        ],
        description: "Modern apartment in Thika's growing town center. Features smart design, quality finishes, and excellent investment opportunity with high rental demand.",
        lat: -1.0333,
        lng: 37.0693
    }
];

// Format price in KES
function formatPrice(price, purpose) {
    if (purpose === 'rent') {
        return `KES ${price.toLocaleString()}<span>/month</span>`;
    }
    if (price >= 1000000) {
        return `KES ${(price / 1000000).toFixed(1)}M`;
    }
    return `KES ${price.toLocaleString()}`;
}

// Render property cards
function renderProperties(filteredProperties) {
    const grid = document.getElementById('propertyGrid');
    grid.innerHTML = '';
    
    filteredProperties.forEach(property => {
        const card = document.createElement('div');
        card.className = 'property-card';
        card.innerHTML = `
            <div class="property-image">
                <img src="${property.image}" alt="${property.title}" loading="lazy">
                <span class="property-badge badge-${property.purpose}">
                    ${property.purpose === 'sale' ? 'For Sale' : 'For Rent'}
                </span>
                <button class="property-favorite" data-id="${property.id}">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="property-info">
                <div class="property-price">${formatPrice(property.price, property.purpose)}</div>
                <h3 class="property-title">${property.title}</h3>
                <p class="property-location"><i class="fas fa-map-marker-alt"></i> ${property.location}</p>
                <div class="property-features">
                    <span class="feature"><i class="fas fa-bed"></i> ${property.bedrooms} Beds</span>
                    <span class="feature"><i class="fas fa-bath"></i> ${property.bathrooms} Baths</span>
                    <span class="feature"><i class="fas fa-ruler-combined"></i> ${property.area} sqm</span>
                </div>
            </div>
            <div class="property-actions">
                <button class="btn-primary view-details" data-id="${property.id}">
                    <i class="fas fa-eye"></i> View Details
                </button>
                <button class="btn-primary inquire-btn" data-id="${property.id}">
                    <i class="fas fa-envelope"></i> Inquire
                </button>
            </div>
        `;
        grid.appendChild(card);
    });

    document.getElementById('resultsCount').textContent = `Showing ${filteredProperties.length} properties`;

    // Add event listeners
    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', () => viewPropertyDetails(btn.dataset.id));
    });

    document.querySelectorAll('.inquire-btn').forEach(btn => {
        btn.addEventListener('click', () => openInquiryModal(btn.dataset.id));
    });

    document.querySelectorAll('.property-favorite').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            btn.classList.toggle('liked');
            const icon = btn.querySelector('i');
            icon.className = btn.classList.contains('liked') ? 'fas fa-heart' : 'far fa-heart';
        });
    });
}

// View property details
function viewPropertyDetails(id) {
    const property = properties.find(p => p.id === parseInt(id));
    if (property) {
        localStorage.setItem('selectedProperty', JSON.stringify(property));
        window.location.href = 'property.html';
    }
}

// Open inquiry modal
function openInquiryModal(id) {
    const property = properties.find(p => p.id === parseInt(id));
    if (property) {
        document.getElementById('modalPropertyTitle').textContent = property.title;
        document.getElementById('inquiryModal').classList.add('active');
        document.getElementById('inquiryModal').dataset.propertyId = id;
    }
}

// Close modal
document.getElementById('modalClose').addEventListener('click', () => {
    document.getElementById('inquiryModal').classList.remove('active');
});

document.getElementById('modalOverlay').addEventListener('click', () => {
    document.getElementById('inquiryModal').classList.remove('active');
});

// Filter functionality
let currentFilter = 'all';

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        filterProperties();
    });
});

// Search functionality
document.getElementById('searchBtn').addEventListener('click', filterProperties);

function filterProperties() {
    let filtered = [...properties];
    
    const location = document.getElementById('search-location').value;
    const type = document.getElementById('search-type').value;
    const maxPrice = document.getElementById('search-price').value;
    const bedrooms = document.getElementById('search-bedrooms').value;

    if (location) {
        filtered = filtered.filter(p => p.locationKey === location);
    }
    if (type) {
        filtered = filtered.filter(p => p.type === type);
    }
    if (maxPrice) {
        filtered = filtered.filter(p => p.price <= parseInt(maxPrice));
    }
    if (bedrooms) {
        filtered = filtered.filter(p => p.bedrooms >= parseInt(bedrooms));
    }

    // Apply filter buttons
    if (currentFilter === 'sale') {
        filtered = filtered.filter(p => p.purpose === 'sale');
    } else if (currentFilter === 'rent') {
        filtered = filtered.filter(p => p.purpose === 'rent');
    } else if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.type === currentFilter);
    }

    renderProperties(filtered);
}

// Map initialization
let map;
let markers = [];

function initMap() {
    map = L.map('map').setView([-0.0236, 37.9062], 6);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    addMarkers(properties);
}

function addMarkers(propertiesToShow) {
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    propertiesToShow.forEach(property => {
        const marker = L.marker([property.lat, property.lng])
            .addTo(map)
            .bindPopup(`
                <div style="min-width: 200px;">
                    <img src="${property.image}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 10px;">
                    <h4 style="margin: 0 0 5px; font-size: 14px;">${property.title}</h4>
                    <p style="color: #1a7f37; font-weight: 700; margin: 0 0 5px;">KES ${property.price.toLocaleString()}</p>
                    <p style="color: #666; font-size: 12px; margin: 0;">${property.location}</p>
                </div>
            `);
        markers.push(marker);
    });
}

// Mobile menu
document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('active');
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    e.target.reset();
});

// Inquiry form
document.getElementById('inquiryForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon.');
    e.target.reset();
    document.getElementById('inquiryModal').classList.remove('active');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            document.querySelector('.nav').classList.remove('active');
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProperties(properties);
    initMap();
});
