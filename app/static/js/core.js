// ----------------------------------------------------------------------------
//     tetra.js 0.0.1
//     Author: Ismael Jimenez
//     Description: Core managment of the tetris app    
//     08/2014 
// ----------------------------------------------------------------------------


// Create a matrix of 10 columns x 20 rows

var m = [[],[]];
m[10,20] = 0;

// Create the tetris figures
var figures = {};


//Define eachone of the terms and their rotations
figures.oter = {
    size: {x:2,y:2},
    rotations: 0;
    0: ( function(){
        var f = [[],[]];
        f[2,2] = 1;
        return f;
    })()
};

figures.iter = {};
figures.tter = {};
figures.lter = {};
figures.jter = {};
figures.ster = {};
figures.zter = {};


// Create the method to generate figures
// Create the method to rotate figures
// Create the method to move figures in the matrix
// Create the method to to remove lines
// Create the method to keep the score
