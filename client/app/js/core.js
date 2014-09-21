// ----------------------------------------------------------------------------
//     tetra.js 0.0.1
//     Author: Ismael Jimenez
//     Description: Core managment of the tetris app    
//     08/2014 
// ----------------------------------------------------------------------------


// Create a matrix of 10 columns x 20 rows
var cellsCache = [];
var m = {};

function resetMatrix()
{
    for (var j = 0; j < 20; j++) {
        for (var i = 0; i < 10; i++) {
                m[i+'_'+j] = 0;
        }
    }    
}

function clearCache()
{
    for (var i = cellsCache.length - 1; i >= 0; i--) {
        
        m[cellsCache[i]] = undefined;
        
    }
    cellsCache = [];
}


// Create the method to generate figures in matrix
// figureName: [oter, iter, tter, ...]
// position: {x:0,y:0};

function addFigure(figureName, position, rot, temp ) 
{
    var newCells = [];
    var rotation = rot || 0;
    
    var posY = position.y;
    var posX = position.x;

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
    posY = posY - 1;

    for(var i = 0; i < size.x; i+= 1)
    {
        for(var j = 0; j < size.y; j+= 1) 
        {
            if(figures[figureName].def[rotation][ i + "_" + j] === 1)
            {
                var cellId = (posX + i)+'_'+(posY + j);

                if(!temp)
                {
                    m[ cellId ] = 1;
                }
                else
                {
                    m[ cellId ] = -1;
                    newCells.push(cellId);
                }
            }
        }
    }

    return newCells;
}

// Evaluate if a figure can be set in the specific position
function figureCanBeAdded( matrix , figureName , position , rot )
{
    var rotation = rot || 0;
    var posY = position.y;
    var posX = position.x;


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
    posY = posY - 1;

    for(var i = 0; i < size.x; i+= 1)
    {
        for(var j = 0; j < size.y; j+= 1) 
        {
            if( matrix[ (posX + i) + '_' + (posY + j) ] === 1 )
            {
                return false;
            }

            if( (posY + j + 1) === 0)
            {
                return false;
            }
        }
    }

    return true;
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
            var cellId = i + '_' + j;
            
            if( m[i+'_'+j] === 1 )
            {
                $('#m_' + cellId).addClass('red');
                //drawCache.push(cellId);
                //m[ cellId ] = 0;
            }
            else if(m[i+'_'+j] === -1)
            {
                $('#m_' + cellId).addClass('green');
            }
            else
            {
                $('#m_' + cellId).removeClass('green red');
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

    var flagAddFigure = true;
    var position = {x:4,y:19};
    var rIndex = getRandomInt(0,figuresList.length);

    setInterval(function(){
        clearCache();

        var result = figureCanBeAdded( m, figuresList[rIndex] , position , 0 );

        if( result)
        {
            var addedCells = addFigure(figuresList[rIndex], position , 0 ,true);
            cellsCache = addedCells.map(function(x){
                return x;
            });

            position.y -= 1;
        }
        else if(flagAddFigure)
        {
            position.y += 1;
            addFigure(figuresList[rIndex], position , 0 ,false);
            flagAddFigure = false;
        }

        console.log( result , position.y );
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

