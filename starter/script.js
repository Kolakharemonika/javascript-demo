'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav__links');
const tabContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

const dotContainer = document.querySelector('.dots');

const footerNav = document.querySelector('.footer__nav');
const footerNavLinks = document.querySelectorAll('.footer__link');

///////////////////////////////////////// Modal window



const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//scrolling 
const clickScrollevent = function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
}

//anather type off addeventlister declaration
btnScrollTo.onclick = clickScrollevent;

/////page navigation ////
navLinks.addEventListener('click', function (e) {
  e.preventDefault();

  //matching statergy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }

});

//activate operations tabs
tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //Guard clauses
  if (!clicked) return;

  //remove active classes //remove active class first then add to target
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));

  //activate content area & btn
  console.log(clicked.dataset.tab); //1 2 3  
  clicked.classList.add('operations__tab--active');
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')

})

//Menu fade animation
const handleHover = function (e) {
  // this== opcacity
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//using IntersectionObserver-sticky header
const header = document.querySelector('header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting)
    nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}
const obsOptions = {
  root: null, // element target intersecting
  threshold: 0, //percent of visible
  rootMargin: `-${navHeight}px`
}
const headerObserver = new IntersectionObserver(stickyNav, obsOptions);
headerObserver.observe(header);


//Reveal sections
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
})

//lazy loading 
const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  //replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  })
  observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px', //without knowing user it will load fully
});

imgTargets.forEach(function (img) {
  imgObserver.observe(img);
});


//slideshow
const slideShow = function () {
  slider.style.overflow = 'visible';

  let currentSlide = 0;
  const maxSlide = slides.length;

  function gotoSlide(slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`
    });
  }

  //next slide 
  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    gotoSlide(currentSlide);
    activateDots(currentSlide);
  }

  const prevSlide = () => {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1
    } else {
      currentSlide--;
    }
    gotoSlide(currentSlide);
    activateDots(currentSlide);
  }

  btnRight.addEventListener('click', nextSlide);

  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    // console.log(e.key);
    e.key === 'ArrowRight' && nextSlide();
    e.key === 'ArrowLeft' && prevSlide();
  })

  //click on dots and slide images
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  //activate dots as slide click -white color
  const activateDots = (slide) => {
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'))

    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
  }

  const init = () => {
    gotoSlide(0);
    createDots();
    activateDots(0);
  };
  init();

  //dot click
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      gotoSlide(slide);
      activateDots(slide);
    }
  });

}
slideShow();

//Footer navigation hover
const handleLinkHovers = function (e) {

  if (e.target.classList.contains('footer__link')) {
    const link = e.target;
    const siblings = link.closest('.footer__nav').querySelectorAll('.footer__link');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
  }

}

footerNav.addEventListener('mouseover', handleLinkHovers.bind(0.5));
footerNav.addEventListener('mouseout', handleLinkHovers.bind(1));

// Lifecycle of DOM events 
document.addEventListener('DOMContentLoaded', function (e) {
  // console.log('HTML parsed and DOM tree build', e);
});

window.addEventListener('load', function (e) {
  // console.log('page fully loaded', e);
});

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  // console.log(e, 'before leave site');

  //usefull if you want to show dialog before reload site?
  // e.returnValue = '';
});

/**
 * 1)REGULAR we add script tag in HEAD tag
 * which is parse HTML--- waiting(fetch script & execution)---then finish parcing HTML 
 * not good
 * so we --used in BODY tag----> (currently we are using)
 * 'parsing HTML 'first then--- 'fetch script & execution' 
 * 2) ASYNC we add script tag in HEAD tag (<script async src="">)
 * imp- 'parsing HTML' (meanwhile started fetch script)---waiting ('script execution')---'finish parsing HTML'
 * 3) DEFER we add script tag in HEAD tag (<script defer src="">)
 * imp- 'parsing full HTML' (meanwhile started fetch script)---'Execute script' (should use)
 * 
 * */


/** 
 * // Lifecycle of DOM events 
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree build', e);
});

window.addEventListener('load', function (e) {
  console.log('page fully loaded', e);
});

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e, 'before leave site');

  //usefull if you want to show dialog before reload site?
  e.returnValue = '';
});

 * //Sticky navigation bar/ header

const initialCorrds = section1.getBoundingClientRect(); //use for scroll
// console.log(initialCorrds); //cordinate of section--1
window.addEventListener('scroll', function (e) {

  //window scrolling > section coords position
  if (window.scrollY > initialCorrds.top)
    nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

* //IntersectionObserver
// const obsCallBack = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// }
// const obsOptions = {
//   root: null, // element target intersecting
//   threshold: [0, 1, 0.2] //percent of visible
// }
// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1);

 *  //Menu fade animation
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity
    });
    logo.style.opacity = opacity;
  }
}

nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});


 /////page navigation ////

//this is fine for small nav links
// document.querySelectorAll('.nav__link').forEach((el) => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = el.getAttribute('href');

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });


//1. Add evemtlistener to common parent element
//2. determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  // console.log(e.target);
  e.preventDefault();

  //matching statergy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }

})

//capturing and bubling 
//it will have same target 
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => {
  return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
}

document.querySelector('.nav__link').addEventListener('click', (e) => {
  document.querySelector('.nav__link').style.backgroundColor = randomColor();
  console.log('link', e.target);

  //stop propagation
  // e.stopPropagation(); // now only link will change color
});

document.querySelector('.nav__links').addEventListener('click', (e) => {
  document.querySelector('.nav__links').style.backgroundColor = randomColor();
  console.log('container', e.target);
});

document.querySelector('.nav').addEventListener('click', (e) => {
  document.querySelector('.nav').style.backgroundColor = randomColor();
  console.log('nav', e.target);
});


//entire element select then 
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header')
//NodeLists
const allSections = document.querySelectorAll('.section')
console.log(allSections);

document.getElementById('section--1')
//html collections (if we deleted  from browser screen it will not shown entry )
const allButtons = document.getElementsByTagName('button')
console.log(allButtons);

document.getElementsByClassName('btn');

//creating and inserting elements
//.insertAdjacementHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookied for improved functionallity and analytics. <button class="btn btn--close-cookie">Got it</button>'
header.prepend(message); //top of header
//can present only one either append or prepend -solution below
// header.append(message); //bottom of header

// header.append(message.cloneNode(true)); //can use same time two place

header.before(message); //display top of header
header.after(message); //disply bottom of header 

//Delete element 
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  // message.remove(); //to remove div 
  message.parentElement.removeChild(message); //anather method for removing child
});



//Styles
message.style.backgroundColor = '#37783d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);
console.log(message.style.height); //empty log bcs we cannot get height from here

console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height); //display height

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';// change height from here

//change style from here apply to all over, just using this.
document.documentElement.style.setProperty('--color-primary', 'orangered');

//attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.designer); //undefind bcs custome attribute

// getAttribute setAttribute
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

//classes 
logo.classList.add('c', 'f');
logo.classList.remove('c', 'f');
logo.classList.toggle('c');
logo.classList.contains('c');

//its overriide all existing classes and use assign classname
logo.className = 'classname';


//scrolling 
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const clickScrollevent = function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  // console.log('current scroll', window.pageXOffset, window.pageYOffset);
  console.log('current scroll', window.scrollX, window.scrollY);

  console.log('height/width of viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset)

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // })

  section1.scrollIntoView({ behavior: 'smooth' });

}

//anather type off addeventlister declaration
// btnScrollTo.onclick = clickScrollevent;

btnScrollTo.addEventListener('click', clickScrollevent);

//removeEventListener
const h1 = document.querySelector('h1');a

const alertH1 = () => {
  console.log('h1 hiieeeeeeeeee');
  // h1.removeEventListener('mouseenter', alertH1); //we can use this method
}

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000)


const h1 = document.querySelector('h1');
console.log(h1);
console.log(h1.querySelectorAll('.highlight'));

//going downward
console.log(h1.childNodes);
console.log(h1.children);

console.log(h1.firstChild, 'firstChild');
console.log(h1.lastChild);

console.log(h1.firstElementChild);
console.log(h1.lastElementChild);

h1.firstElementChild.style.color = 'white';//make "banking" text color white
h1.lastElementChild.style.color = 'orangered';//make "minimalist" text color orangered

//going upwards
console.log(h1.parentNode);
console.log(h1.parentElement);

// h1 closest ('.header')
h1.closest('.header').style.background = 'var(--gradient-secondary)';  //closest element color change

//Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);// all children including this

[...h1.parentElement.children].forEach((el) => {
  //loop all childrens including h1
  console.log(el);
  if (el !== h1) el.style.transform = 'scale(0.5)';

})

*/