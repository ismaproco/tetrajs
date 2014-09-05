// ----------------------------------------------------------------------------
//     tetra.js 0.0.1
//     Author: Ismael Jimenez
//     Description: Core managment of the tetris app    
//     08/2014 
// ----------------------------------------------------------------------------


// Create a matrix of 10 columns x 20 rows
var drawCache = [];
var m = {};

function resetMatrix()
{
    for (var j = 0; j < 20; j++) {
        for (var i = 0; i < 10; i++) {
                m[i+'_'+j] = 0;
        }
    }    
}


// Create the tetris figures
var figures = {};


//Define each one of the terms and their rotations
function OTerm()
{
    this.size = { x:2 , y:2 };
    this.rotations = 1;
    this.def = [[]];
    
    this.def[0][ 0 +"_"+ 0 ] = 1;
    this.def[0][ 1 +"_"+ 0 ] = 1;
    this.def[0][ 0 +"_"+ 1 ] = 1;
    this.def[0][ 1 +"_"+ 1 ] = 1;
}

figures.oter = new OTerm();

// The T figure is a 3x3 grid
// and they rotate from the center of the grid
//           _ _ _ _      _ _ _
//        1 |_|x|_|_|  2 |x|x|x|x|
//          |_|x|_|_|    |_| |_|_|
//          |_|x|_|_|    |_| |_|_|
//          |_|x|_|_|    |_| |_|_|
// 


function ITerm()
{
    this.size = { x:4 , y:4 };
    this.rotations = 2;

    this.def = [ [] , [] ];

    this.def[0][ 1 +"_"+ 0 ] = 1;
    this.def[0][ 1 +"_"+ 1 ] = 1;
    this.def[0][ 1 +"_"+ 2 ] = 1;
    this.def[0][ 1 +"_"+ 3 ] = 1;

    this.def[1][ 0 +"_"+ 3 ] = 1;
    this.def[1][ 1 +"_"+ 3 ] = 1;
    this.def[1][ 2 +"_"+ 3 ] = 1;
    this.def[1][ 3 +"_"+ 3 ] = 1;

}

figures.iter = new ITerm();

// The T figure is a 3x3 grid
// and they rotate from the center of the grid
//           _ _ _      _ _ _
//        1 |_|_|_|  2 |x|_|_|
//          |_|x|_|    |x|x|_|
//          |x|x|x|    |x|_|_|
//           ¯ ¯ ¯
//           _ _ _      _ _ _
//        4 | |x|_|  3 |x|x|x|
//          |x|x|_|    | |x| |
//          | |x| |    |_|_|_|
//           ¯ ¯ ¯

function TTerm()
{
    this.size = { x:3 , y:3 };
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
    
    this.def[2][ 1 +"_"+ 1 ] = 1;
    
    this.def[2][ 0 +"_"+ 2 ] = 1;
    this.def[2][ 1 +"_"+ 2 ] = 1;
    this.def[2][ 2 +"_"+ 2 ] = 1;

    // rotation 3
    
    this.def[3][ 1 +"_"+ 1 ] = 1;
    
    this.def[3][ 2 +"_"+ 0 ] = 1;
    this.def[3][ 2 +"_"+ 1 ] = 1;
    this.def[3][ 2 +"_"+ 2 ] = 1;

}

figures.tter = new TTerm();

// The L figure is a 3x3 grid
// and they rotate from the center of the grid
//           _ _ _      _ _ _
//        1 |_|x|_|  2 |x|x|x|
//          |_|x|_|    |x|_|_|
//          | |x|x|    |_|_|_|
//           ¯ ¯ ¯
//           _ _ _      _ _ _
//        4 |_|_|_|  3 |x|x|_|
//          |_|_|x|    |_|x|_|
//          |x|x|x|    |_|x|_|
//           ¯ ¯ ¯

function LTerm()
{
    this.size = { x:3 , y:3 };
    this.rotations = 4;

    this.def = [ [] , [] , [] , [] ];

    // rotation 0
    this.def[0][ 1 +"_"+ 0 ] = 1;
    this.def[0][ 1 +"_"+ 1 ] = 1;
    this.def[0][ 1 +"_"+ 2 ] = 1;

    this.def[0][ 2 +"_"+ 0 ] = 1;
    
    // rotation 1
    this.def[1][ 0 +"_"+ 1 ] = 1;

    this.def[1][ 0 +"_"+ 2 ] = 1;
    this.def[1][ 1 +"_"+ 2 ] = 1;
    this.def[1][ 2 +"_"+ 2 ] = 1;

    // rotation 2
    
    this.def[2][ 1 +"_"+ 0 ] = 1;
    this.def[2][ 1 +"_"+ 1 ] = 1;
    this.def[2][ 1 +"_"+ 2 ] = 1;

    this.def[2][ 0 +"_"+ 2 ] = 1;

    // rotation 3
    
    this.def[3][ 0 +"_"+ 0 ] = 1;
    this.def[3][ 1 +"_"+ 0 ] = 1;
    this.def[3][ 2 +"_"+ 0 ] = 1;

    this.def[3][ 2 +"_"+ 1 ] = 1;
}

figures.lter = new LTerm();


// The J figure is a 3x3 grid
// and they rotate from the center of the grid
//           _ _ _      _ _ _
//        1 |_|x|_|  2 | | | |
//          |_|x|_|    |x|_|_|
//          |x|x| |    |x|x|x|
//           ¯ ¯ ¯      ¯ ¯ ¯
//           _ _ _      _ _ _
//        4 |_|_|_|  3 |_|x|x|
//          |x|x|x|    |_|x|_|
//          | | |x|    |_|x|_|
//           ¯ ¯ ¯

function JTerm()
{
    this.size = { x:3 , y:3 };
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
    
    this.def[2][ 1 +"_"+ 0 ] = 1;
    this.def[2][ 1 +"_"+ 1 ] = 1;
    this.def[2][ 1 +"_"+ 2 ] = 1;

    this.def[2][ 2 +"_"+ 2 ] = 1;

    // rotation 3
    
    this.def[3][ 0 +"_"+ 1 ] = 1;
    this.def[3][ 1 +"_"+ 1 ] = 1;
    this.def[3][ 2 +"_"+ 1 ] = 1;

    this.def[3][ 2 +"_"+ 0 ] = 1;
}

figures.jter = new JTerm();


// The S figure is a 3x3 grid
// and they rotate from the center of the grid
//           _ _ _      _ _ _
//        1 |_|_|_|  2 |x| | |
//          |_|x|x|    |x|x| |
//          |x|x| |    | |x| |
//           ¯ ¯ ¯      ¯ ¯ ¯

function STerm()
{
    this.size = { x:3 , y:3 };
    this.rotations = 2;

    this.def = [ [] , [] ];

    // rotation 0
    this.def[0][ 0 +"_"+ 0 ] = 1;
    this.def[0][ 1 +"_"+ 0 ] = 1;
    this.def[0][ 1 +"_"+ 1 ] = 1;
    this.def[0][ 2 +"_"+ 1 ] = 1;
    
    // rotation 1
    this.def[1][ 1 +"_"+ 0 ] = 1;
    this.def[1][ 0 +"_"+ 1 ] = 1;
    this.def[1][ 1 +"_"+ 1 ] = 1;
    this.def[1][ 0 +"_"+ 2 ] = 1;
}

figures.ster = new STerm();


// The Z figure is a 3x3 grid
// and they rotate from the center of the grid
//           _ _ _      _ _ _
//        1 |_|_|_|  2 | | |x|
//          |x|x| |    |_|x|x|
//          | |x|x|    | |x| |
//           ¯ ¯ ¯      ¯ ¯ ¯

function ZTerm()
{
    this.size = { x:3 , y:3 };
    this.rotations = 2;

    this.def = [ [] , [] ];

    // rotation 0
    this.def[0][ 1 +"_"+ 0 ] = 1;
    this.def[0][ 2 +"_"+ 0 ] = 1;
    this.def[0][ 0 +"_"+ 1 ] = 1;
    this.def[0][ 1 +"_"+ 1 ] = 1;
    
    // rotation 1
    this.def[1][ 1 +"_"+ 0 ] = 1;
    this.def[1][ 1 +"_"+ 1 ] = 1;
    this.def[1][ 2 +"_"+ 1 ] = 1;
    this.def[1][ 2 +"_"+ 2 ] = 1;
}

figures.zter = new ZTerm();


// Create the method to generate figures in matrix
// figureName: [oter, iter, tter, ...]
// position: {x:0,y:0};

function addFigure(figureName, position, rot ) 
{

    var rotation = rot || 0;
    
    var size = {};
    
    if( rotation >= figures[figureName].rotations )
    {
        rotation = rotation % figures[figureName].rotations;
    }


    if( rotation % 2 === 0 )
    {
        size = figures[figureName].size;    
    }else
    {
        size = {
            x: figures[figureName].size.y,
            y: figures[figureName].size.x
        };
    }
    

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
    /*for (var c = drawCache.length - 1; c >= 0; c--) {
        $('#m_' +drawCache[c]).attr('class','mcell');
    }
    drawCache = [];*/
    
    for (var j = 0; j < 20; j++) {
        for (var i = 0; i < 10; i++) {
            if( m[i+'_'+j] === 1 )
            {
                var cellId = i + '_' + j;
                $('#m_' + cellId).addClass('red');
                //drawCache.push(cellId);
                //m[ cellId ] = 0;
            }
        }
    }    
}


// Main game loop
// 1. generate a random term
// 2. add the random term to the screen
// 3. move the random term to the bottom each interval
// 4. if the term reach a no advance position stop
// 5. Validate if a new figure can be added
//  5.1 (yes) start from step 1
//  5.2 show game over

function mainLoop()
{

    var figuresList = [
                        'oter',
                        'iter',
                        'tter',
                        'lter',
                        'jter',
                        'ster',
                        'zter'
                        ];


    setInterval(function(){
        //generate the figure Random Index
        var rIndex = getRandomInt(0,figuresList.length);
        console.log(rIndex);
        addFigure(figuresList[rIndex], {x:4,y:19} , 0 );

    },1000);
}


// Create the method to to remove lines
// Create the method to keep the score


$(document).ready(function(){


    drawHTMLMatrix();
    mainLoop();

    setInterval(function(){
        /*addFigure('oter', {x:4,y:16} , rotation );
        addFigure('iter', {x:4,y:10} , rotation );
        addFigure('tter', {x:6,y:3}, rotation );
        addFigure('lter', {x:6,y:18}, rotation );
        addFigure('jter', {x:2,y:6}, rotation );
        addFigure('ster', {x:5,y:14}, rotation );
        addFigure('zter', {x:1,y:13}, rotation );

        rotation+=1;*/
        drawMatrixInHTML();
    },16);
    
});

