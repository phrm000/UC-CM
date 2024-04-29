
gsap.registerPlugin(ScrollTrigger) 

ScrollTrigger.defaults({
	markers:true
})



  gsap.to("#a02-balloon01", {
	scrollTrigger: {
		trigger: "#a01-warrenBg",
		scrub: 0.1,
		start: "-=5	% center",
		end: "+=5%",
		snap:1,


	},
	opacity:1,
	x:"+=110%",
	ease:"none"
  })

  
  gsap.to("#a04-balloon02", {
	scrollTrigger: {
		trigger: "#a01-warrenBg",
		scrub: 0.1,
		start: "+=25% center",
		end: "+=5%",

	},
	opacity:1,
	x:"-=100%",
	ease:"none"
  })


ScrollTrigger.create({
	trigger: "#a01-warrenBg",  
	start: "+=55% center",
	toggleAction:"play play play play",
	toggleClass: {            
	  targets: "#a01-warrenBg", 
	  className: "a01-animation" 
	}
  })


gsap.to("#a03-carrierBg", {
	scrollTrigger: {
	trigger: "#a01-warrenBg",  
	start: "=25% center",
	end: "-=5% center",
	scrub: 0.1,

	},
	opacity:1,
	x:"-=120%",
	ease:"none"
  })


  gsap.to("#a05-balloon03", {
	scrollTrigger: {
		trigger: "#trigger-a05-balloon03",
		scrub: 0.1,
		start: "+=05% center",
		end: "+=5%",

	},

	y:"-=90%",
	ease:"none"
  })





  //

  let items = gsap.utils.toArray(".items"),
  pageWrapper = document.querySelector(".page-wrapper");

items.forEach((container, i) => {
let localItems = container.querySelectorAll(".item"),
	distance = () => {
	  let lastItemBounds = localItems[localItems.length-1].getBoundingClientRect(),
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
	invalidateOnRefresh: true // will recalculate any function-based tween values on resize/refresh (making it responsive)
  }
})
});




gsap.to("#a05-balloon03", {
	scrollTrigger: {
		trigger: "#trigger-a05-balloon03",
		scrub: 0.1,
		start: "+=05% center",
		end: "+=5%",

	},

	y:"-=70%",
	ease:"none"
  })



  
gsap.to("#a06-fist", {
	scrollTrigger: {
		trigger: "#a06-trigger",
		scrub: 1,
		start: "-=5% center",
		end: "+=5%",

	},

	x:"-150%",
	ease:"none"
  })


  gsap.to("#a07-thinkingballoon01", {
	scrollTrigger: {
		trigger: "#thinking-trigger",
		scrub: 0.1,
		start: "25% center",
		end: "40% center",

	},

	opacity:1,
	ease:"none"
  })


  
  gsap.to("#a08-thinkingballoon02", {
	scrollTrigger: {
		trigger: "#thinking-trigger",
		scrub:1,
		start: "35% center",
		end: "50% center",

	},

	opacity:1,
	ease:"none"
  })


    
  gsap.to("#a09-thinkingballoon03", {
	scrollTrigger: {
		trigger: "#thinking-trigger",
		scrub: 1,
		start: "45% center",
		end: "60% center",

	},

	opacity:1,
	ease:"none"
  })