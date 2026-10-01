// Ma Sói Web SaaS - Main Script (SPA View Switching & Interactive Effects)

document.addEventListener('DOMContentLoaded', () => {
    // 1. SPA ROUTING SYSTEM (SWITCH INTERFACES FOR EACH NAVBAR FUNCTION)
    const validViews = ['home', 'rules', 'characters', 'community', 'team'];
    const navLinks = document.querySelectorAll('.nav-link');
    const pageViews = document.querySelectorAll('.page-view');
    const mobileMenu = document.getElementById('mobile-menu');

    function switchView(viewName) {
        if (!validViews.includes(viewName)) {
            viewName = 'home';
        }

        // Hide all views
        pageViews.forEach(view => {
            view.classList.add('hidden');
        });

        // Show target view
        const targetView = document.getElementById(`view-${viewName}`);
        if (targetView) {
            targetView.classList.remove('hidden');
        }

        // Update Nav Links Active State
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${viewName}`) {
                link.classList.add('text-red-500', 'font-black');
                link.classList.remove('text-gray-400');
                const borderEl = link.querySelector('.nav-border');
                if (borderEl) borderEl.classList.remove('scale-x-0');
            } else {
                link.classList.remove('text-red-500', 'font-black');
                link.classList.add('text-gray-400');
                const borderEl = link.querySelector('.nav-border');
                if (borderEl) borderEl.classList.add('scale-x-0');
            }
        });

        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }

        // Scroll to top of interface
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Handle hash on load and change
    function handleHashChange() {
        const hash = window.location.hash.replace('#', '') || 'home';
        switchView(hash);
    }

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // initial check

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. HERO SLIDESHOW (AUTOPLAY FADE TRANSITIONS)
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    
    function nextSlide() {
        if (slides.length <= 1) return;
        
        slides[currentSlide].classList.remove('opacity-70', 'scale-105');
        slides[currentSlide].classList.add('opacity-0', 'scale-100');
        
        currentSlide = (currentSlide + 1) % slides.length;
        
        slides[currentSlide].classList.remove('opacity-0', 'scale-100');
        slides[currentSlide].classList.add('opacity-70', 'scale-105');
    }
    
    if (slides.length > 0) {
        slides[0].classList.remove('opacity-0', 'scale-100');
        slides[0].classList.add('opacity-70', 'scale-105');
        setInterval(nextSlide, 5000);
    }

    // 3. CHARACTERS FACTION FILTER
    const filterBtns = document.querySelectorAll('.filter-btn');
    const characterItems = document.querySelectorAll('.character-card-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('bg-red-700', 'text-white', 'border-red-600');
                b.classList.add('text-gray-400', 'border-gray-800');
            });
            btn.classList.add('bg-red-700', 'text-white', 'border-red-600');
            btn.classList.remove('text-gray-400', 'border-gray-800');

            const filter = btn.getAttribute('data-filter');
            characterItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-faction') === filter) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // 4. MODAL POPUP FOR CHARACTERS
    window.openCharacterModal = function(name, enName, img, desc, faction, factionColor, borderClass) {
        const modal = document.getElementById('roleModal');
        if (!modal) return;

        document.getElementById('modalRoleName').textContent = name;
        document.getElementById('modalRoleEn').textContent = enName;
        document.getElementById('modalRoleDesc').textContent = desc;
        document.getElementById('modalRoleImg').src = img;
        
        const badge = document.getElementById('modalRoleFaction');
        badge.textContent = faction;
        badge.className = `px-3 py-1 rounded text-xs uppercase font-bold tracking-wider inline-block ${factionColor}`;
        
        const avatarBorder = document.getElementById('modalAvatarBorder');
        if (avatarBorder) {
            avatarBorder.className = `w-20 h-20 rounded-full border-2 p-1 bg-black/80 mx-auto mb-4 ${borderClass}`;
        }

        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    };

    window.closeCharacterModal = function() {
        const modal = document.getElementById('roleModal');
        if (!modal) return;
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    };
});
