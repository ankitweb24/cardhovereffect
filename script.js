let cards = document.querySelectorAll('.card');
let container = document.querySelector('.card_container');

container.addEventListener('mousemove', (e) => {
  for (const card of cards) {
   let rect =  card.getBoundingClientRect();
   x = e.clientX - rect.left;
   y = e.clientY - rect.top;

   card.style.setProperty("--mouse-x", `${x}px`)
   card.style.setProperty("--mouse-y", `${y}px`)
   
  }
})