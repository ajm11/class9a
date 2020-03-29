window.onload = function() {
    
    // Grab the palette div and assign it to a js variable
    let colorPalette = document.querySelector('#palette');

    // define an arrow of potential colors
    let colorChoices = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

    // Define a temporary variable to hold the active color
    let colorPainter = 'tmpColor';

    // Loop through the cells of the palette and define them
    for (let i = 0; i < 6; i++) {
        let cell = document.createElement('span');
        cell.style.border = '1px dotted black';
        cell.style.backgroundColor = colorChoices[i];
        colorPalette.appendChild(cell);
        cell.addEventListener('click',function(){
            colorPainter = colorChoices[i];
        })
    }


    let container = document.querySelector('#canvas');
    
    for(let i = 0; i < 400; i++) {
        let box = document.createElement('span');
        box.style.border = '0.1px solid black';
        box.style.backgroundColor = 'white';
        box.addEventListener('click',function(){
            box.style.backgroundColor = colorPainter;
        })
        /*box.addEventListener('mouseover',function(){
            box.style.backgroundColor = 'purple';
        })*/
        container.appendChild(box);
    }

}
