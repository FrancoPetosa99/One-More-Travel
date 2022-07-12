/*
    script name: loading
    client: One more Travel
    purpose: show a loading spinner until the page is completed loaded. Gives a better UX/UI.
*/

function loading() {

  const body = document.querySelector("html");

  //build-up the loading (Html element)
  const loadingModal = document.createElement("div");
  loadingModal.className = "loadingModal";
  loadingModal.innerHTML = `<div id="spinner"></div>`;

  body.appendChild(loadingModal);
  
  //remove loading once page is fully loaded
  window.addEventListener('load', ()=> {
    
    setTimeout(() => {
      body.removeChild(loadingModal);
    }, 1000);

  });
}
loading();
