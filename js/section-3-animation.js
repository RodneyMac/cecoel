addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter-quantity");
  const speed = 1000;
  const animateCounters = () => {
    for(const counter of counters) {
      const updateCounter = () => {
        let maximum_quantity = +counter.dataset.totalQuantity,
          current_value = +counter.innerText,
          increment = maximum_quantity / speed;
    
          if(current_value < maximum_quantity) {
            counter.innerText = Math.ceil(current_value + increment);
            setTimeout(updateCounter, 100);
          } else {
            counter.innerText = maximum_quantity;
          }
      }
      updateCounter();
    }
  }
 
  const showElements = (e) => {
    e.forEach(element => {
      if(element.isIntersecting) {
        element.target.classList.add('animate');
        element.target.classList.remove('disguise');
        setTimeout(animateCounters, 300);
      }
    });
  }
  const observer = new IntersectionObserver(showElements, {
    threshold: 0.75
  })
  const elementsHTML = document.querySelectorAll('.section-3-element');
  elementsHTML.forEach(elementHTML => {
    observer.observe(elementHTML);
  });
})