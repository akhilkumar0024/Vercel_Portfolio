/**
 * Akhil Kumar — Editorial Portfolio
 * Interactive behaviors: Mobile navigation, active section tracking, accessibility, resume links
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close-btn');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    if (!mobileMenu || !mobileMenuBtn) return;
    mobileMenu.classList.remove('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileMenu || !mobileMenuBtn) return;
    mobileMenu.classList.add('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileMenuCloseBtn) {
    mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close mobile menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
      closeMobileMenu();
      mobileMenuBtn?.focus();
    }
  });

  // 2. Active Navigation Highlight using IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('header nav a[href^="#"]');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          desktopNavLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('text-[#1B4332]', 'font-semibold');
              link.classList.remove('text-[#57534E]');
            } else {
              link.classList.remove('text-[#1B4332]', 'font-semibold');
              link.classList.add('text-[#57534E]');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(sec => sectionObserver.observe(sec));
  }

  // 3. Platform Resume Check & Graceful Toast Feedback
  const platformResumeLink = document.querySelector('a[href="assets/resumes/Akhil_Kumar_Platform_Resume.pdf"]');
  if (platformResumeLink) {
    platformResumeLink.addEventListener('click', (e) => {
      // Check if file is accessible
      fetch('assets/resumes/Akhil_Kumar_Platform_Resume.pdf', { method: 'HEAD' })
        .then(response => {
          if (!response.ok) {
            showToast('Note: Platform Resume PDF is pending upload. Opening document link...');
          }
        })
        .catch(() => {
          // In local file:// or network restriction, normal navigation continues
        });
    });
  }

  // Helper: Toast notification
  function showToast(message) {
    let toast = document.getElementById('toast-notice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-notice';
      toast.className = 'toast-notice';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }
});
