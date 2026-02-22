// 1. Typing Effect for the Tagline
const tagline = document.querySelector('.tagline');
const originalText = "Computer Science Student & Backend Developer";
tagline.textContent = ''; // الفرضية بالبداية فاضية
let i = 0;

function typeWriter() {
    if (i < originalText.length) {
        tagline.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 50); // سرعة الطباعة (50 مللي ثانية)
    }
}

// تشغيل الطباعة أول ما تفتح الصفحة
window.onload = () => {
    setTimeout(typeWriter, 500); // استنى نص ثانية قبل ما تبلش طباعة
};

// 2. Scroll Reveal Effect (Intersection Observer)
// هاي خوارزمية بتراقب العناصر، ولما توصلها بالشاشة بتخليها تظهر
const observerOptions = {
    threshold: 0.1 // يعني بس يظهر 10% من العنصر، شغله
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // عشان ما يرجع يختفي لما تطلع فوق
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// تطبيق المراقبة على كل البطاقات والصور
const hiddenElements = document.querySelectorAll('.card, .gallery-item, .section-title');
hiddenElements.forEach((el) => {
    el.classList.add('hidden'); // إخفاء مبدئي
    observer.observe(el);
});
// 3. Auto-playing Image Slider Logic
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    if (slides.length === 0) return;

    // اخفي كل الصور
    slides.forEach(slide => {
        slide.classList.remove('active-slide');
    });
    
    // زيد العداد
    slideIndex++;
    
    // إذا وصلنا لآخر صورة، ارجع للأولى (Circular Array Logic)
    if (slideIndex > slides.length) { 
        slideIndex = 1; 
    }
    
    // اظهر الصورة الحالية
    slides[slideIndex - 1].classList.add('active-slide');
    
    // استدعي الدالة كمان مرة بعد 4000 مللي ثانية (4 ثواني)
    setTimeout(showSlides, 4000); 
}

// تشغيل الـ Slider
showSlides();
