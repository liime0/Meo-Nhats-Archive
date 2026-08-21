let activeElement = null;
        

    let startX = 0;
    let startY = 0;
        

    let initialLeft = 0;
    let initialTop = 0;
        
    let highestZIndex = 1; 


document.addEventListener('mousedown', (e) => {



    if (e.target.classList.contains('drag-part')) {
    e.preventDefault(); 
                
    activeElement = e.target;
                

    highestZIndex++;
    activeElement.style.zIndex = highestZIndex;


startX = e.clientX;
startY = e.clientY;


initialLeft = activeElement.offsetLeft;
initialTop = activeElement.offsetTop;
}
});

document.addEventListener('mousemove', (e) => {
    if (!activeElement) return;
            

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;


    activeElement.style.left = `${initialLeft + dx}px`;
    activeElement.style.top = `${initialTop + dy}px`;
});

document.addEventListener('mouseup', () => {
    activeElement = null;
});


const invertBtn = document.querySelector('.night');

    invertBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('inverted');
    });