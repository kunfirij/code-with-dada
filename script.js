gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 }});

    // 1. Hero Entrance Animation
    tl.from(".navbar", { y: -100, opacity: 0 })
      .from(".hero-image", { x: 50, opacity: 0, rotate: 5 }, "-=0.6")
      .from(".title", { y: 50, opacity: 0 }, "-=1")
      .from(".desc", { y: 30, opacity: 0 }, "-=0.8")
      .from(".hero-btns", { y: 20, opacity: 0 }, "-=0.6");

    // 2. Stats Counter Animation
    // This makes the numbers count up from 0 when they scroll into view
    gsap.from(".stat-number", {
        scrollTrigger: {
            trigger: ".stats-bar",
            start: "top 85%",
        },
        textContent: 0,
        duration: 2,
        ease: "power1.inOut",
        snap: { textContent: 1 }, // Ensures numbers stay whole
        stagger: 0.2
    });

    // 3. Learning Hub Cards Entrance
    gsap.from(".hub-card", {
        scrollTrigger: {
            trigger: ".learning-hub",
            start: "top 75%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "back.out(1.7)" // Adds a nice professional "pop"
    });

    // 4. Features Entrance
    gsap.from(".feature-card", {
        scrollTrigger: {
            trigger: ".features",
            start: "top 80%"
        },
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1
    });

    // 5. Theme Switcher Logic
    const themeBtn = document.getElementById("theme-btn");
    const themeClasses = ["", "theme-one-dark", "theme-monokai"];
    const themeNames = ["Tokyo Night", "One Dark Pro", "Monokai Pro"];
    let idx = 0;

    themeBtn.addEventListener("click", () => {
        // Smoothly transition the background color switch
        gsap.to("body", { opacity: 0.8, duration: 0.1, onComplete: () => {
            document.body.classList.remove(...themeClasses.filter(c => c !== ""));
            idx = (idx + 1) % themeClasses.length;
            if(themeClasses[idx]) document.body.classList.add(themeClasses[idx]);
            themeBtn.innerText = `Theme: ${themeNames[idx]}`;
            gsap.to("body", { opacity: 1, duration: 0.3 });
        }});
        
        // Button Click Feedback
        gsap.fromTo(themeBtn, { scale: 0.8 }, { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.3)" });
    });
});
