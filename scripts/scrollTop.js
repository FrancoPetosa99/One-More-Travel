/*
    script name: scrollTop
    client:      One more Travel
    purpose:     create a btn for the html page 
                 that on the click event makes the page to scroll to the top automatically.
*/

function scrollTop() {
  const body = document.querySelector("body");

  const btn = document.createElement("div");
  btn.id = 'btnScrollTop'
  btn.className = 'hide'
  btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="black" class="btnScrollTopIcon bi bi-arrow-up" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
    </svg>
  `

  body.appendChild(btn);

  btn.addEventListener('click', (e)=>{
    window.scrollTo(0,0)
  })

  // the btn is only visible if the window scroll is not at the top of the page
  window.addEventListener('scroll', ()=> {
    if (this.scrollY > window.innerHeight ) {
      btn.classList.remove('hide')
    }else{
      btn.classList.add('hide')
    }
  })
}
scrollTop();
