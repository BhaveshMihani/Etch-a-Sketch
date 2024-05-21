window.onload = function () {
    var grid = document.getElementById('grid');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(16, 1fr)';
    for (var i = 0; i < 16 * 16; i++) {
        var box = document.createElement('div');
        box.className = 'box';
        grid.appendChild(box);
    }

    var elements = document.getElementsByClassName('box')
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseover', function () {
            var num1 = Math.floor(Math.random() * 256);
            var num2 = Math.floor(Math.random() * 256);
            var num3 = Math.floor(Math.random() * 256);
            this.style.backgroundColor = 'rgb(' + num1 + ',' + num2 + ',' + num3 + ')';
        });
    }

    document.querySelector('.reset').addEventListener('click', function () {
        var boxes = document.getElementsByClassName('box');
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = 'rgb(255, 255, 255)';
        }
    });

}

function randcolor() {
    var elements = document.getElementsByClassName('box')
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseover', function () {
            var num1 = Math.floor(Math.random() * 256);
            var num2 = Math.floor(Math.random() * 256);
            var num3 = Math.floor(Math.random() * 256);
            this.style.backgroundColor = 'rgb(' + num1 + ',' + num2 + ',' + num3 + ')';
        });
    }
}

window.cust =  function() {
    var grid = document.getElementById('grid');
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    row = prompt('Enter No. of Rows')
    col = prompt('Enter No. of Columns')
    var grid = document.getElementById('grid');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    for (var i = 0; i < row * col; i++) {
        var box = document.createElement('div');
        box.className = 'box';
        grid.appendChild(box);
    }
    randcolor();
}