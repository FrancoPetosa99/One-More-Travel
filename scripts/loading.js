/*
    script name: loading
    client: One more Travel
    purpose: show a loading spinner until the page is completed loaded. Gives a better UX/UI.
*/

const body = document.querySelector("html");

//build-up the loading (Html element)
const loadingModal = document.createElement("div");
loadingModal.className = "loadingModal";
loadingModal.innerHTML = `<div id="spinner"></div>`;

function loading(setLoading) {

  if(setLoading){
    
    body.appendChild(loadingModal);
    return
  }else{

    //Once the page is completed loaded, it removes the loading (Html element)
    window.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        body.removeChild(loadingModal);
      }, 1000);
    });

  }
}
loading(true);
