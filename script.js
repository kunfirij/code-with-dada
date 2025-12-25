JavaScript


gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 }});

    // 1. Loading Entrance
    tl.from(".navbar", { y: -100, opacity: 0 })
      .from(".hero-image", { x: 50, opacity: 0 }, "-=0.6")
      .from(".title", { y: 50, opacity: 0 }, "-=1")
      .from(".desc", { y: 30, opacity: 0 }, "-=0.8")
      .from(".cta", { scale: 0, opacity: 0 }, "-=0.6");

    // 2. Scroll Trigger for Features
    gsap.from(".feature-card", {
        scrollTrigger: { trigger: ".features", start: "top 80%" },
        y: 60, opacity: 0, stagger: 0.2, duration: 1
    });

    // 3. Theme Switcher Logic
    const themeBtn = document.getElementById("theme-btn");
    const themeClasses = ["", "theme-one-dark", "theme-monokai"];
    const themeNames = ["Tokyo Night", "One Dark Pro", "Monokai Pro"];
    let idx = 0;

    themeBtn.addEventListener("click", () => {
        document.body.classList.remove(themeClasses[idx]);
        idx = (idx + 1) % themeClasses.length;
        if(themeClasses[idx]) document.body.classList.add(themeClasses[idx]);
        themeBtn.innerText = `Theme: ${themeNames[idx]}`;
        
        // Button Click Animation
        gsap.fromTo(themeBtn, { scale: 0.9 }, { scale: 1, duration: 0.2 });
    });
});
