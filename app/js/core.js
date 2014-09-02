// ----------------------------------------------------------------------------
//     tetra.js 0.0.1
//     Author: Ismael Jimenez
//     Description: Core managment of the tetris app    
//     08/2014 
// ----------------------------------------------------------------------------


// Create a matrix of 10 columns x 20 rows
var drawCache = [];
var m = {};
for (var j = 0; j < 20; j++) {
    for (var i = 0; i < 10; i++) {
            m[i+'_'+j] = 0;
    }
}

// Create the tetris figures
var figures = {};


//Define each one of the terms and their rotations
function OTerm(){
    this.size = { x:2 , y:2 };
    this.rotations = 1;
    this.def = [[]];
    
    this.def[0][ 0 +"_"+ 0 ] = 1;
    this.def[0][ 1 +"_"+ 0 ] = 1;
    this.def[0][ 0 +"_"+ 1 ] = 1;
    this.def[0][ 1 +"_"+ 1 ] = 1;
}

figures.oter = new OTerm();

function ITerm(){
    this.size = { x:4 , y:1 };
    this.rotations = 2;

    this.def = [ [] , [] ];

    this.def[0][ 0 +"_"+ 0 ] = 1;
    this.def[0][ 1 +"_"+ 0 ] = 1;
    this.def[0][ 2 +"_"+ 0 ] = 1;
    this.def[0][ 3 +"_"+ 0 ] = 1;

    this.def[1][ 0 +"_"+ 0 ] = 1;
    this.def[1][ 0 +"_"+ 1 ] = 1;
    this.def[1][ 0 +"_"+ 2 ] = 1;
    this.def[1][ 0 +"_"+ 3 ] = 1;

}

figures.iter = new ITerm();


function TTerm(){
    this.size = { x:3 , y:2 };
    this.rotations = 4;

    this.def = [ [] , [] , [] , [] ];

    // rotation 0
    this.def[0][ 0 +"_"+ 0 ] = 1;
    this.def[0][ 1 +"_"+ 0 ] = 1;
    this.def[0][ 2 +"_"+ 0 ] = 1;
        
    this.def[0][ 1 +"_"+ 1 ] = 1;
    
    // rotation 1
    this.def[1][ 1 +"_"+ 1 ] = 1;

    this.def[1][ 0 +"_"+ 0 ] = 1;
    this.def[1][ 0 +"_"+ 1 ] = 1;
    this.def[1][ 0 +"_"+ 2 ] = 1;

    // rotation 2
    
    this.def[2][ 1 +"_"+ 0 ] = 1;
    
    this.def[2][ 0 +"_"+ 1 ] = 1;
    this.def[2][ 1 +"_"+ 1 ] = 1;
    this.def[2][ 2 +"_"+ 1 ] = 1;

    // rotation 3
    
    this.def[3][ 0 +"_"+ 1 ] = 1;
    
    this.def[3][ 1 +"_"+ 0 ] = 0;
    this.def[3][ 1 +"_"+ 1 ] = 1;
    this.def[3][ 1 +"_"+ 2 ] = 0;

}

figures.tter = new TTerm();

function LTerm()
{
    this.size = { x:2 , y:3 };
    this.rotations = 4;

    this.def = [ [] , [] , [] , [] ];

    // rotation 0
    this.def[0][ 0 +"_"+ 0 ] = 1;
    this.def[0][ 0 +"_"+ 1 ] = 1;
    this.def[0][ 0 +"_"+ 2 ] = 1;

    this.def[0][ 1 +"_"+ 0 ] = 1;
    
    // rotation 1
    this.def[1][ 0 +"_"+ 0 ] = 1;

    this.def[1][ 0 +"_"+ 1 ] = 1;
    this.def[1][ 1 +"_"+ 1 ] = 1;
    this.def[1][ 2 +"_"+ 1 ] = 1;

    // rotation 2
    
    this.def[2][ 1 +"_"+ 0 ] = 1;
    this.def[2][ 1 +"_"+ 1 ] = 1;
    this.def[2][ 1 +"_"+ 2 ] = 1;

    this.def[2][ 0 +"_"+ 2 ] = 1;

    // rotation 3
    
    this.def[3][ 0 +"_"+ 0 ] = 1;
    this.def[3][ 1 +"_"+ 0 ] = 1;
    this.def[3][ 2 +"_"+ 0 ] = 1;

    this.def[3][ 0 +"_"+ 1 ] = 1;
}

figures.lter = new LTerm();

function JTerm()
{
    this.size = { x:2 , y:3 };
    this.rotations = 4;

    this.def = [ [] , [] , [] , [] ];

    // rotation 0
    this.def[0][ 0 +"_"+ 0 ] = 1;
    this.def[0][ 1 +"_"+ 0 ] = 1;
    this.def[0][ 1 +"_"+ 1 ] = 1;

    this.def[0][ 1 +"_"+ 2 ] = 1;
    
    // rotation 1
    this.def[1][ 0 +"_"+ 1 ] = 1;

    this.def[1][ 0 +"_"+ 0 ] = 1;
    this.def[1][ 1 +"_"+ 0 ] = 1;
    this.def[1][ 2 +"_"+ 0 ] = 1;

    // rotation 2
    
    this.def[2][ 0 +"_"+ 0 ] = 1;
    this.def[2][ 0 +"_"+ 1 ] = 1;
    this.def[2][ 0 +"_"+ 2 ] = 1;

    this.def[2][ 1 +"_"+ 2 ] = 1;

    // rotation 3
    
    this.def[3][ 0 +"_"+ 1 ] = 1;
    this.def[3][ 1 +"_"+ 1 ] = 1;
    this.def[3][ 2 +"_"+ 1 ] = 1;

    this.def[3][ 2 +"_"+ 0 ] = 1;
}

figures.jter = new JTerm();

function STerm()
{
    this.size = { x:3 , y:2 };
    this.rotations = 2;

    this.def = [ [] , [] ];

    // rotation 0
    this.def[0][ 0 +"_"+ 0 ] = 1;
    this.def[0][ 1 +"_"+ 0 ] = 1;
    this.def[0][ 1 +"_"+ 1 ] = 1;
    this.def[0][ 2 +"_"+ 1 ] = 1;
    
    // rotation 1
    this.def[1][ 0 +"_"+ 1 ] = 1;
    this.def[1][ 0 +"_"+ 2 ] = 1;
    this.def[1][ 1 +"_"+ 1 ] = 1;
    this.def[1][ 1 +"_"+ 0 ] = 1;
}

figures.ster = new STerm();


function ZTerm()
{
    this.size = { x:3 , y:2 };
    this.rotations = 2;

    this.def = [ [] , [] ];

    // rotation 0
    this.def[0][ 1 +"_"+ 0 ] = 1;
    this.def[0][ 2 +"_"+ 0 ] = 1;
    this.def[0][ 0 +"_"+ 1 ] = 1;
    this.def[0][ 1 +"_"+ 1 ] = 1;
    
    // rotation 1
    this.def[1][ 0 +"_"+ 0 ] = 1;
    this.def[1][ 1 +"_"+ 0 ] = 1;
    this.def[1][ 1 +"_"+ 1 ] = 1;
    this.def[1][ 1 +"_"+ 2 ] = 1;
}


figures.zter = new ZTerm();


// Create the method to generate figures in matrix
// figureName: [oter, iter, tter, ...]
// position: {x:0,y:0};

function addFigure(figureName,position, rotation) 
{

    rotation = rotation || 0;

    var size = figures[figureName].size;

    // change the y position to start the draw in cartesian coordinates
    position.y -= size.y - 1;

    for(var i = 0; i < size.x; i+= 1)
    {
        for(var j = 0; j < size.y; j+= 1) 
        {
            m[(position.x + i)+'_'+(position.y + j) ] = 
                 figures[figureName].def[rotation][ i + "_" + j];
        }
    }

}


function drawHTMLMatrix() 
{
    var $cells = [];

    for (var j = 19; j >= 0; j--) {
        for (var i = 0; i < 10; i++) {

            var $cell = $('<div></div>')
                            .attr('id', 'm_' + i + '_' + j )
                            .attr('class','mcell');

            $cells.push( $cell );
        }
    }

    $("#tetra-container").append( $cells );
}

function drawMatrixInHTML()
{
    for (var c = drawCache.length - 1; c >= 0; c--) {
        $('#m_' +drawCache[c]).attr('class','mcell');
    }
    drawCache = [];
    
    for (var j = 0; j < 20; j++) {
        for (var i = 0; i < 10; i++) {
            if( m[i+'_'+j] === 1 )
            {
                var cellId = i + '_' + j;
                $('#m_' + cellId).addClass('red');
                drawCache.push(cellId);
                m[ cellId ] = 0;
            }
        }
    }

    
}


// Create the method to rotate figures
// Create the method to move figures in the matrix
// Create the method to to remove lines
// Create the method to keep the score


$(document).ready(function(){
    drawHTMLMatrix();

    addFigure('oter', {x:4,y:16} );
    addFigure('iter', {x:4,y:10} );
    addFigure('tter', {x:6,y:3} );
    addFigure('lter', {x:5,y:8} );
    addFigure('jter', {x:2,y:8} );
    addFigure('ster', {x:5,y:13} );
    addFigure('zter', {x:1,y:13} );

    drawMatrixInHTML();
});
