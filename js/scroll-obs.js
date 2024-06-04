


document.querySelectorAll('#chapter-jump a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 100)
})

gsap.ticker.lagSmoothing(0)

var bgaudio = document.getElementById("bg-noise");
bgaudio.volume = 0.05;

document.addEventListener("click", () => {
    bgaudio.play();
});

gsap.registerPlugin(ScrollTrigger);

gsap.to("#a02-balloon01", {
  scrollTrigger: {
    trigger: "#a01-warrenBg",
    scrub: 0.1,
    start: "-=5	% center",
    end: "+=5%",
    snap: 1,
  },
  opacity: 1,
  x: "+=110%",
  ease: "none",
});

gsap.to("#a04-balloon02", {
  scrollTrigger: {
    trigger: "#a01-warrenBg",
    scrub: 0.1,
    start: "+=25% center",
    end: "+=5%",
  },
  opacity: 1,
  x: "-=100%",
  ease: "none",
});

ScrollTrigger.create({
  trigger: "#a01-warrenBg",
  start: "+=55% center",
  toggleAction: "play play play play",
  toggleClass: {
    targets: "#a01-warrenBg",
    className: "a01-animation",
  },
});

gsap.to("#a03-carrierBg", {
  scrollTrigger: {
    trigger: "#a01-warrenBg",
    start: "=25% center",
    end: "-=5% center",
    scrub: 0.1,
  },
  opacity: 1,
  x: "-=120%",
  ease: "none",
});

gsap.to("#a05-balloon03", {
  scrollTrigger: {
    trigger: "#trigger-a05-balloon03",
    scrub: 0.1,
    start: "+=05% center",
    end: "+=5%",
  },

  y: "-=10%",
  ease: "none",
});

//

let items = gsap.utils.toArray(".items"),
  pageWrapper = document.querySelector(".page-wrapper");

items.forEach((container, i) => {
  let localItems = container.querySelectorAll(".item"),
    distance = () => {
      let lastItemBounds =
          localItems[localItems.length - 1].getBoundingClientRect(),
        containerBounds = container.getBoundingClientRect();
      return Math.max(0, lastItemBounds.right - containerBounds.right);
    };
  gsap.to(container, {
    x: () => -distance(), // make sure it dynamically calculates things so that it adjusts to resizes
    ease: "none",
    scrollTrigger: {
      trigger: container,
      start: "=-30%",
      pinnedContainer: pageWrapper,
      end: () => "+=" + distance(),
      pin: pageWrapper,
      scrub: true,
      invalidateOnRefresh: true, // will recalculate any function-based tween values on resize/refresh (making it responsive)
    },
  });
});

gsap.to("#a06-fist", {
  scrollTrigger: {
    trigger: "#a06-trigger",
    scrub: 0.0001,
    start: "-=5% center",
    end: "+=5%",
  },

  x: "-180%",
  ease: "none",
});

let punchsound = document.querySelector("#punch-sound");

ScrollTrigger.create({
  trigger: "#a06-trigger",
  start: "-=5% center",
  onEnter: () => {
    punchsound.play();
  },
});

gsap.to("#a07-thinkingballoon01", {
  scrollTrigger: {
    trigger: "#thinking-trigger",
    scrub: 0.1,
    start: "15% center",
    end: "40% center",
  },

  opacity: 1,
  ease: "none",
});

gsap.to("#a08-thinkingballoon02", {
  scrollTrigger: {
    trigger: "#thinking-trigger",
    scrub: 1,
    start: "25% center",
    end: "50% center",
  },

  opacity: 1,
  ease: "none",
});

gsap.to("#a09-thinkingballoon03", {
  scrollTrigger: {
    trigger: "#thinking-trigger",
    scrub: 1,
    start: "35% center",
    end: "60% center",
  },

  opacity: 1,
  ease: "none",
});

gsap.to("#a10-balloon07", {
  scrollTrigger: {
    trigger: "#a10-trigger",
    scrub: 0.1,
    start: "20% center",
    end: "+=40% center",
  },
  opacity: 1,
  x: "-=100%",
  ease: "none",
});

gsap.to("#a11-balloon08", {
  scrollTrigger: {
    trigger: "#a10-trigger",
    scrub: 0.1,
    start: "+=30% center",
    end: "+=50% center",
  },
  opacity: 1,
  x: "-=200%",
  ease: "none",
});

gsap.to("#a12-trigger", {
  scrollTrigger: {
    trigger: "#a12-trigger",
    scrub: 2,
    start: "-=15% center",
    end: "+=2%",
  },

  x: "-180%",
  ease: "none",
});

gsap.to("#a12-fist", {
  scrollTrigger: {
    trigger: "#a12-trigger",
    scrub: 0.0001,
    start: "+=25% center",
    end: "+=2%",
  },

  x: "+180%",
  ease: "none",
});

ScrollTrigger.create({
  trigger: "#a12-trigger",
  start: "+=25% center",
  onEnter: () => {
    punchsound.play();
  },
});

gsap.to("#a02-balloon01", {
  scrollTrigger: {
    trigger: "#a01-warrenBg",
    scrub: 0.1,
    start: "-=5	% center",
    end: "+=5%",
    snap: 1,
  },
  opacity: 1,
  x: "+=110%",
  ease: "none",
});

gsap.to("#a14-balloon", {
  scrollTrigger: {
    trigger: "#a14-17-trigger",
    scrub: 1,
    start: "=15% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  x: "+=110%",
  ease: "none",
});

gsap.to("#a16-balloon", {
  scrollTrigger: {
    trigger: "#a14-17-trigger",
    scrub: 1,
    start: "=55% center",
    end: "+=0%",
    snap: 1,
  },
  opacity: 1,
  x: "+=110%",
  ease: "none",
});

gsap.to("#a17-balloon", {
  scrollTrigger: {
    trigger: "#a14-17-trigger",
    scrub: 1,
    start: "=75% center",
    end: "+=0%",
    snap: 1,
  },
  opacity: 1,
  x: "-=110%",
  ease: "none",
});

gsap.to("#a15-balloon", {
  scrollTrigger: {
    trigger: "#a14-17-trigger",
    scrub: 1,
    start: "=35% center",
    end: "+=0%",
    snap: 1,
  },
  opacity: 1,
  x: "-=110%",
  ease: "none",
});

gsap.to("#a181-sheriff", {
  scrollTrigger: {
    trigger: "#a18-21-trigger",
    scrub: 1,
    start: "=5% center",
    end: "+=0%",
    snap: 1,
  },
  opacity: 1,

  ease: "none",
});

gsap.to("#a18-sheriff", {
  scrollTrigger: {
    trigger: "#a18-21-trigger",
    scrub: 1,
    start: "=25% center",
    end: "+=0%",
    snap: 1,
  },
  opacity: 1,

  ease: "none",
});

gsap.to("#a19-sheriff", {
  scrollTrigger: {
    trigger: "#a18-21-trigger",
    scrub: 1,
    start: "=45% center",
    end: "+=0%",
    snap: 1,
  },
  opacity: 1,

  ease: "none",
});

gsap.to("#a20-sheriff", {
  scrollTrigger: {
    trigger: "#a18-21-trigger",
    scrub: 1,
    start: "=65% center",
    end: "+=0%",
    snap: 1,
  },
  opacity: 1,

  ease: "none",
});

gsap.to("#a21-sheriff", {
  scrollTrigger: {
    trigger: "#a18-21-trigger",
    scrub: 1,
    start: "=85% center",
    end: "+=0%",
    snap: 1,
  },
  opacity: 1,

  ease: "none",
});

let items02 = gsap.utils.toArray(".items02"),
  pageWrapper02 = document.querySelector(".page-wrapper02");

items02.forEach((container, i) => {
  let localItems = container.querySelectorAll(".item02"),
    distance = () => {
      let lastItemBounds =
          localItems[localItems.length - 1].getBoundingClientRect(),
        containerBounds = container.getBoundingClientRect();
      return Math.max(0, lastItemBounds.right - containerBounds.right);
    };
  gsap.to(container, {
    x: () => -distance(), // make sure it dynamically calculates things so that it adjusts to resizes
    ease: "none",
    scrollTrigger: {
      trigger: container,
      start: "=-30%",
      pinnedContainer: pageWrapper02,
      end: () => "+=" + distance(),
      pin: pageWrapper02,
      scrub: true,
      invalidateOnRefresh: true, // will recalculate any function-based tween values on resize/refresh (making it responsive)
    },
  });
});

gsap.to("#a22-balloon", {
  scrollTrigger: {
    trigger: "#a22-24-trigger",
    scrub: 1,
    start: "=15% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  x: "+=115%",
  ease: "none",
});


let handcuffsound = document.querySelector("#handcuff-sound");

ScrollTrigger.create({
  trigger: "#a22-24-trigger",
  start: "-=5% center",
  onEnter: () => {
    handcuffsound.play();
  },
});

gsap.to("#a23-balloon", {
  scrollTrigger: {
    trigger: "#a22-24-trigger",
    scrub: 1,
    start: "=35% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  x: "-=128%",
  ease: "none",
});

gsap.to("#a24-bg", {
  scrollTrigger: {
    trigger: "#a22-24-trigger",
    scrub: 1,
    start: "=55% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  x: "+=128%",
  y: "-82vh",
  ease: "none",
});

gsap.to("#ch3a02", {
  scrollTrigger: {
    trigger: "#ch3a01",
    scrub: 1,
    start: "=15% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  y: "-=100%",
  ease: "none",
});

gsap.to("#ch3a03", {
  scrollTrigger: {
    trigger: "#ch3a01",
    scrub: 1,
    start: "=40% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  y: "-=200%",
  ease: "none",
});

gsap.to("#ch3a04", {
  scrollTrigger: {
    trigger: "#ch3a01",
    scrub: 1,
    start: "=70% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  ease: "none",
});

gsap.to("#ch3a07", {
  scrollTrigger: {
    trigger: "#ch3a05",
    scrub: 1,
    start: "=30% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,

  x: "+=108vw",
  ease: "none",
});

gsap.to("#ch3a08", {
  scrollTrigger: {
    trigger: "#ch3a05",
    scrub: 1,
    start: "=60% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,

  x: "-=90vw",
  ease: "none",
});

ScrollTrigger.create({
  trigger: "#ch3a05",
  start: "+=65% center",
  toggleAction: "play play play play",
  toggleClass: {
    targets: "#ch3a05",
    className: "ch3a06",
  },
});

gsap.to("#ch3a10", {
  scrollTrigger: {
    trigger: "#ch3a09",
    scrub: 1,
    start: "=30% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,

  y: "-=52vw",
  ease: "none",
});

let doorpound = document.querySelector("#doorpound-sound");

ScrollTrigger.create({
  trigger: "#ch3a11",
  start: "-=5% center",
  onEnter: () => {
    doorpound.play();
  },
});


let inside = document.querySelector("#inside-sound");
inside.volume = 0.05;

ScrollTrigger.create({
  trigger: "#ch3a10",
  start: "+=50% center",
  onEnter: () => {
    inside.play();
    bgaudio.pause();
    bgaudio.currentTime = 0;
    daylight.pause();
    daylight.currentTime = 0;
  },
});

gsap.to("#ch3a14-slide", {
  scrollTrigger: {
    trigger: "#cha14-15-trigger",
    scrub: 1,
    start: "=00% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,

  x: "-=84vw",
  ease: "none",
});

ScrollTrigger.create({
  trigger: "#ch3a16",
  start: "+=35% center",
  toggleAction: "play play play play",
  toggleClass: {
    targets: "#ch3a16",
    className: "ch3a17",
  },
});


ScrollTrigger.create({
  trigger: "#ch3a16",
  start: "+=50% center",
  onEnter: () => {
    bgaudio.play();
    inside.pause();
    inside.currentTime = 0;
    daylight.pause();
    daylight.currentTime = 0;
  },
});



gsap.to("#ch3a15-slide", {
  scrollTrigger: {
    trigger: "#cha14-15-trigger",
    scrub: 1,
    start: "=25% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,

  x: "+=84vw",
  ease: "none",
});

gsap.to("#ch3a19", {
  scrollTrigger: {
    trigger: "#ch3a18",
    scrub: 1,
    start: "=160% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  y: "-=100%",
  ease: "none",
});

gsap.to("#ch3a22", {
  scrollTrigger: {
    trigger: "#ch3a21",
    scrub: 1,
    start: "=25% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  x: "=100%",
  ease: "none",
});

gsap.to("#ch3a23", {
  scrollTrigger: {
    trigger: "#ch3a21",
    scrub: 1,
    start: "=40% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  x: "=-100%",
  ease: "none",
});


ScrollTrigger.create({
  trigger: "#ch3a10",
  start: "-10% center",
  onEnter: () => {
    inside.play();
    bgaudio.pause();
    bgaudio.currentTime = 0;
    daylight.pause();
    daylight.currentTime = 0;
  },
});

gsap.to("#ch3a24", {
  scrollTrigger: {
    trigger: "#ch3a21",
    scrub: 1,
    start: "=60% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  y: "-=100%",
  ease: "none",
});

gsap.to("#ch3a28-trigger .text-balloon", {
  scrollTrigger: {
    trigger: "#ch3a28-trigger",
    scrub: 1,
    start: "30% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  ease: "none",
});

ScrollTrigger.create({
  trigger: "#ch3a28-trigger",
  start: "+=30% center",
  toggleAction: "play stop play play",
  toggleClass: {
    targets: "#ch3a28",
    className: "ch3a29",
  },
});

gsap.to("#ch3a30", {
  scrollTrigger: {
    trigger: "#ch3a28-trigger",
    scrub: 1,
    start: "130% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  ease: "none",
});

gsap.to("#ch3a31", {
  scrollTrigger: {
    trigger: "#ch3a31-a33",
    scrub: 1,
    start: "=0% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  x: "=-100%",
  ease: "none",
});

gsap.to("#ch3a32", {
  scrollTrigger: {
    trigger: "#ch3a31-a33",
    scrub: 1,
    start: "=10% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  x: "=80%",
  ease: "none",
});

gsap.to("#ch3a33", {
  scrollTrigger: {
    trigger: "#ch3a31-a33",
    scrub: 1,
    start: "=20% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  x: "=-100%",
  ease: "none",
});



let shotsound = document.querySelector("#gunshot-sound");

ScrollTrigger.create({
  trigger: "#ch3a32",
  start: "-=75% center",
  onEnter: () => {
    shotsound.play();
  },
});


let daylight = document.querySelector("#daylight-sound");
daylight.volume = 0.025;


ScrollTrigger.create({
  trigger: "#ch5a01",
  start: "-10% center",
  onEnter: () => {
    daylight.play();
    bgaudio.pause();
    bgaudio.currentTime = 0;
    inside.pause();
    inside.currentTime = 0;
  },
});


gsap.to("#ch5a02", {
  scrollTrigger: {
    trigger: "#ch5a01",
    scrub: 1,
    start: "=35% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  x: "+=105%",
  y: "0vh",
  ease: "none",
});

gsap.to("#ch5a03", {
  scrollTrigger: {
    trigger: "#ch5a01",
    scrub: 1,
    start: "=55% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  x: "-=105%",
  y: "0vh",
  ease: "none",
});

gsap.to("#ch5a07", {
  scrollTrigger: {
    trigger: "#ch5a08",
    scrub: 1,
    start: "=35% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  x: "+=105%",
  y: "0vh",
  ease: "none",
});

gsap.to("#ch5a06", {
  scrollTrigger: {
    trigger: "#ch5a08",
    scrub: 1,
    start: "-=5% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  x: "-=105%",
  y: "0vh",
  ease: "none",
});

let items03 = gsap.utils.toArray(".items03"),
  pageWrapper03 = document.querySelector(".page-wrapper03");

items03.forEach((container, i) => {
  let localItems = container.querySelectorAll(".item03"),
    distance = () => {
      let lastItemBounds =
          localItems[localItems.length - 1].getBoundingClientRect(),
        containerBounds = container.getBoundingClientRect();
      return Math.max(0, lastItemBounds.right - containerBounds.right);
    };
  gsap.to(container, {
    x: () => -distance(), // make sure it dynamically calculates things so that it adjusts to resizes
    ease: "none",
    scrollTrigger: {
      trigger: container,
      start: "=-30%",
      pinnedContainer: pageWrapper03,
      end: () => "+=" + distance(),
      pin: pageWrapper03,
      scrub: true,
      snap: true,
      invalidateOnRefresh: true, // will recalculate any function-based tween values on resize/refresh (making it responsive)
    },
  });
});

gsap.to("#ch5a09", {
  scrollTrigger: {
    trigger: "#ch5a09",
    scrub: 1,
    start: "+=710% bottom",
    end: "+=0",
  },
  opacity: 1,
  ease: "none",
});

gsap.to("#ch5a10", {
  scrollTrigger: {
    trigger: "#ch5a09",
    scrub: 1,
    start: "+=740% bottom",
    end: "+=0",
  },
  opacity: 1,
  ease: "none",
});

gsap.to("#ch5a11", {
  scrollTrigger: {
    trigger: "#ch5a09",
    scrub: 1,
    start: "+=770% bottom",
    end: "+=0",
  },
  opacity: 1,
  ease: "none",
});

gsap.to("#ch5a12", {
  scrollTrigger: {
    trigger: "#ch5a09",
    scrub: 1,
    start: "+=800% bottom",
    end: "+=0",
  },
  opacity: 1,
  ease: "none",
});

gsap.to("#ch5a13", {
  scrollTrigger: {
    trigger: "#ch5a09",
    scrub: 1,
    start: "+=830% bottom",
    end: "+=0",
  },
  opacity: 1,
  ease: "none",
});

gsap.to("#ch5a14", {
  scrollTrigger: {
    trigger: "#ch5a14-16-trigger",
    scrub: 1,
    start: "+=190% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  x: "+=105%",
  y: "0vh",
  ease: "none",
});

gsap.to("#ch5a15", {
  scrollTrigger: {
    trigger: "#ch5a14-16-trigger",
    scrub: 1,
    start: "+=230% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  x: "-=105%",
  y: "0vh",
  ease: "none",
});

gsap.to("#ch5a16", {
  scrollTrigger: {
    trigger: "#ch5a14-16-trigger",
    scrub: 1,
    start: "+=270% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  x: "+=105%",
  y: "0vh",
  ease: "none",
});

gsap.to("#ch5a16", {
  scrollTrigger: {
    trigger: "#ch5a14-16-trigger",
    scrub: 1,
    start: "+=240% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  x: "+=105%",
  y: "0vh",
  ease: "none",
});

gsap.to("#ch5a23", {
  scrollTrigger: {
    trigger: "#ch5a22-24-trigger",
    scrub: 1,
    start: "+=530% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  x: "+=230%",
  y: "0vh",
  ease: "none",
});

gsap.to("#ch5a22", {
  scrollTrigger: {
    trigger: "#ch5a22-24-trigger",
    scrub: 1,
    start: "+=545% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,
  x: "-=230%",
  y: "0vh",
  ease: "none",
});

gsap.to("#ch5a24", {
  scrollTrigger: {
    trigger: "#ch5a22-24-trigger",
    scrub: 1,
    start: "+=570% center",
    end: "+=0",
    snap: 1,
  },
  opacity: 1,

  y: "-=300%",
  ease: "none",
});
