 <!-- Header Component -->

 const headerTemplate = `
<header class="sticky-top">
     <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <img src="images/linkarise-logo.webp" alt="LinkArise" height="50">
            </a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link " href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item dropdown">
                        <!-- Only show dropdown on mobile -->
                        <a class="nav-link d-lg-none" href="#" id="productsDropdownMobile" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            Products
                        </a>
                        <!-- Desktop: direct link -->
                        <a class="nav-link d-none d-lg-block" href="products.html" id="productsDropdownDesktop">
                            Products
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="productsDropdownMobile">
                            <li><a class="dropdown-item" href="telecalling-crm.html">Telecalling CRM</a></li>
                            <li><a class="dropdown-item" href="sales-crm.html">Sales CRM</a></li>
                            <li><a class="dropdown-item" href="field-service-crm.html">Field Service CRM</a></li>
                            <li><a class="dropdown-item" href="overseas-education-crm.html">Overseas Education CRM</a></li>
                            <li><a class="dropdown-item" href="task-management-crm.html">Task Management CRM</a></li>
							<li><a class="dropdown-item" href="venue-booking-crm.html">VenueBooking CRM</a></li>
                            <!-- <li><hr class="dropdown-divider"></li> -->
                            <li class="mobile-only"><a class="dropdown-item" href="products.html" ><i class="fas fa-th me-2"></i> All Products</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                    <li class="nav-item ms-2">
                        <a href="contact.html" class="btn btn-primary">Get Free Demo</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
`;

// 1. Inject the header
document.body.insertAdjacentHTML("afterbegin", headerTemplate);

// 2. Logic to set Active Tab
// Get current filename (e.g., 'sales-crm.html'). If empty, default to 'index.html'
let currentPath = window.location.pathname.split("/").pop();
if (currentPath === "") { currentPath = "index.html"; }

// Find all links in the navbar
const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');

navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    if (linkPath === currentPath) {
        // Add active class to the clicked link itself
        link.classList.add('active');
        
        // CHECK FOR DROPDOWN: 
        // If this link is a '.dropdown-item', find its parent 'nav-item'
        const parentNavItem = link.closest('.nav-item.dropdown');
        if (parentNavItem) {
            // Find both Mobile and Desktop "Products" links and make them active
            const parentLinks = parentNavItem.querySelectorAll('.nav-link');
            parentLinks.forEach(parent => parent.classList.add('active'));
        }
    }
});