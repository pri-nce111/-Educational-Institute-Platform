    // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');
        
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
        
        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    mainNav.classList.remove('active');
                    
                    // Update active nav link
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            });
        });
        
        // Sticky Header on Scroll
        const header = document.getElementById('header');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Back to Top Button
        const backToTopBtn = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Course Tabs
        const courseTabs = document.querySelectorAll('#courseTabs .tab-btn');
        
        courseTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                courseTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Hide all course grids
                document.querySelectorAll('.courses-grid').forEach(grid => {
                    grid.style.display = 'none';
                });
                
                // Show selected course grid
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(tabId).style.display = 'grid';
            });
        });
        
        // Results Tabs
        const resultsTabs = document.querySelectorAll('#resultsTabs .tab-btn');
        
        resultsTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                resultsTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Hide all results content
                document.querySelectorAll('.results-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                // Show selected results content
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
        
        // Schedule Tabs
        const scheduleTabs = document.querySelectorAll('#scheduleTabs .tab-btn');
        
        scheduleTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                scheduleTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Hide all schedule content
                document.querySelectorAll('.schedule-content').forEach(content => {
                    content.style.display = 'none';
                });
                
                // Show selected schedule content
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(tabId).style.display = 'block';
            });
        });
        
        // Gallery Filter
        const filterBtns = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                
                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
        
        // Testimonial Slider
        const testimonialDots = document.querySelectorAll('.testimonial-dot');
        const testimonials = document.querySelectorAll('.testimonial');
        
        testimonialDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = dot.getAttribute('data-index');
                
                // Remove active class from all dots and testimonials
                testimonialDots.forEach(d => d.classList.remove('active'));
                testimonials.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked dot and corresponding testimonial
                dot.classList.add('active');
                testimonials[index].classList.add('active');
            });
        });
        
        // Auto-rotate testimonials
        let currentTestimonial = 0;
        
        function rotateTestimonials() {
            testimonialDots.forEach(d => d.classList.remove('active'));
            testimonials.forEach(t => t.classList.remove('active'));
            
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            
            testimonialDots[currentTestimonial].classList.add('active');
            testimonials[currentTestimonial].classList.add('active');
        }
        
        setInterval(rotateTestimonials, 5000);
        
        // Form Submissions (prevent default for demo)
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Login functionality will be implemented in backend.');
        });
        
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will contact you soon.');
            e.target.reset();
        });
        
        // Update active nav link on scroll
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });