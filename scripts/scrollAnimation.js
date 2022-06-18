/*
    script name: scrollAnimation
    client:      One more Travel
    purpose:     Add animation to specify html elements on the page
                 by scrolling on the browser.
    parameters:  elementList, animationType
                 elementList: array of Html elements to assign the animation
                 animationType: string value to make reference to the css class which contains the animation.
*/

function scrollAnimation(elementList,animationType) {
    function showElement(entryList) {
        entryList.forEach( entry =>{
            if(entry.isIntersecting){
                const element = entry.target
                element.classList.add(`${animationType}`)
            }
        })
    }
    const observer = new IntersectionObserver(showElement,{
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.6,
    })

    elementList.forEach( element =>{
        observer.observe(element)
    })
}