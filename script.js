gsap.registerPlugin(ScrollTrigger)

// SHOWCASE
const t1 = gsap.timeline({ defaults: { duration: 0.8 } })

t1.from(".showcase-one", { y: "150px", autoAlpha: 0 })
  .from(".showcase-two", { y: "150px", autoAlpha: 0 }, 0.5)
  .from(".showcase-three", { autoAlpha: 0, stagger: 0.5 })
  .from(".showcase-pic", { autoAlpha: 0 })
  .from(".nav-logo", { autoAlpha: 0 }, 1)

t1.progress(1).progress(0)
//   Newsletter

const newsletter = gsap.timeline({
  scrollTrigger: {
    trigger: ".newsletter-anim",
    markers: true,
    start: "top 80%",
    end: "top 30%",
  },
})

newsletter.from(".newsletter-anim", {
  // x: "-100%",
  opacity: 0,
  duration: 1,
  stagger: 0.5,
})

//   3 CARDS
const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".boxes",
    // markers: true,
    start: "top 80%",
    end: "top 30%",
  },
})

t2.from(".boxes", { y: "75%", opacity: 0, duration: 1, stagger: 0.2 })

// LEARN SECTIONS

const fundamentals = gsap.timeline({
  scrollTrigger: {
    trigger: ".fundamentals-anim",
    // markers: true,
    start: "top 55%",
    end: "top 30%",
  },
})

fundamentals
  .from(".fundamentals-anim-1", {
    x: "-80%",
    opacity: 0,
    duration: 0.7,
  })
  .from(".fundamentals-anim-2", {
    y: "30%",
    opacity: 0,
    duration: 0.7,
  })

const react = gsap.timeline({
  scrollTrigger: {
    trigger: ".react-anim",
    // markers: true,
    start: "top 80%",
    end: "top 30%",
  },
})

react
  .from(".react-anim-1", {
    x: "-80%",
    opacity: 0,
    duration: 0.7,
  })
  .from(".react-anim-2", {
    scale: 0.5,
    opacity: 0,
    duration: 0.7,
  })

//   QUESTIOn ACCORDIONS

const question = gsap.timeline({
  scrollTrigger: {
    trigger: ".question-anim",
    // markers: true,
    start: "top 55%",
    end: "top 30%",
  },
})

question
  .from(".question-anim", {
    x: "-80%",
    opacity: 0,
    duration: 0.6,
  })
  .from(".accordion-item", {
    y: "30px",
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  })

//   INSTRUCTORS
const instructor = gsap.timeline({
  scrollTrigger: {
    trigger: ".instructor-anim-1",
    // markers: true,
    start: "top 55%",
    end: "top 30%",
  },
})

instructor
  .from(".instructor-anim-1", {
    y: "-30px",
    opacity: 0,
    duration: 0.8,
  })
  .from(".instructor-anim-2", {
    x: "-80%",
    opacity: 0,
    duration: 1,
  })
  .from(
    ".instructor",
    {
      y: "30px",
      opacity: 0,
      duration: 1,
      stagger: 0.1,
    },
    1
  )

//   CONTACT

const contact = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact-anim",
    // markers: true,
    start: "top 60%",
    end: "top 30%",
  },
})

contact
  .from(".contact-anim-1", {
    x: "-80%",
    opacity: 0,
    duration: 0.8,
  })
  .from(".contact-item-anim", {
    x: "-30px",
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  })
  .from(".contact-anim-2", {
    scale: 0.5,
    opacity: 0,
    duration: 0.5,
  })
