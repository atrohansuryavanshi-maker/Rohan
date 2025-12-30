const footerTemplate = `
   <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img src="images/linkarise-logo-white.webp" alt="LinkArise" class="mb-3" height="40">
                    <p class="mb-4">Complete CRM & ERP solutions designed for modern businesses. Simplify operations, boost productivity, and grow faster.</p>
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                
                <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
                    <h5>Quick Links</h5>
                    <div class="footer-links">
                        <a href="index.html">Home</a>
                        <a href="about.html">About Us</a>
                        <a href="products.html">Products</a>
                        <a href="contact.html">Contact</a>
                        <a href="privacy-policy.html">Privacy Policy</a>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-4 mb-4 mb-md-0">
                    <h5>Products</h5>
                    <div class="footer-links">
                        <a href="telecalling-crm.html">Telecalling CRM</a>
                        <a href="sales-crm.html">Sales CRM</a>
                        <a href="field-service-crm.html">Field Service CRM</a>
                        <a href="overseas-education-crm.html">Overseas Education CRM</a>
                        <a href="task-management-crm.html">Task Management CRM</a>
						<a href="venue-booking-crm.html">VenueBooking CRM</a>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-4">
                    <h5>Contact Info</h5>
                    <div class="footer-links">
                        <p><i class="fas fa-map-marker-alt me-2"></i> Vadodara, Gujarat, India</p>
                        <p><i class="fas fa-phone me-2"></i> +91 6354454012</p>
                        <p><i class="fas fa-envelope me-2"></i> contact@linkarise.com</p>
                        <p><i class="fas fa-clock me-2"></i> Mon-Sat: 11AM - 5PM</p>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-12">
                    <div class="copyright">
                        <p>&copy; 2024 LinkArise. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>

`;

// "beforeend" places the content at the very end of the body tag
document.body.insertAdjacentHTML("beforeend", footerTemplate);