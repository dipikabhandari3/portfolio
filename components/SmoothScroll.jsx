export function scrollToSection(event) {
    event.preventDefault();
    
    // Check if we're in the browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
    }
    
    try {
        var section = document.querySelector(event.target.parentElement.getAttribute('href'));
        if (section == null) { // For Lottie Animations
            section = document.querySelector(event.target.getAttribute('href'));
        }
        
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    } catch (error) {
        console.error(error);
        console.error(event.target);
    }
}