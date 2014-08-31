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


//Define each one of the terms and their rotations
figures.oter = (new function OTerm(){
    this.size = { x:2 , y:2 };
    this.rotations = 1;
    this.def = [[]];
    
    this.def[0][ 0 , 0 ] = 1;
    this.def[0][ 1 , 0 ] = 1;
    this.def[0][ 0 , 1 ] = 1;
    this.def[0][ 1 , 1 ] = 1;
});

figures.iter = (new function OTerm(){
    this.size = { x:4 , y:1 };
    this.rotations = 2;

    this.def = [ [] , [] ];

    this.def[0][ 0 , 0 ] = 1;
    this.def[0][ 1 , 0 ] = 1;
    this.def[0][ 2 , 0 ] = 1;
    this.def[0][ 3 , 0 ] = 1;

    this.def[1][ 0 , 0 ] = 1;
    this.def[1][ 0 , 1 ] = 1;
    this.def[1][ 0 , 2 ] = 1;
    this.def[1][ 0 , 3 ] = 1;

});

figures.tter = (new function OTerm(){
    this.size = { x:3 , y:2 };
    this.rotations = 4;

    this.def = [ [] , [] , [] , [] ];

    // rotation 0
    this.def[0][ 0 , 0 ] = 1;
    this.def[0][ 1 , 0 ] = 1;
    this.def[0][ 2 , 0 ] = 1;
        
    this.def[0][ 1 , 1 ] = 1;
    
    // rotation 1
    this.def[1][ 1 , 1 ] = 1;

    this.def[1][ 0 , 0 ] = 1;
    this.def[1][ 0 , 1 ] = 1;
    this.def[1][ 0 , 2 ] = 1;

    // rotation 2
    
    this.def[2][ 1 , 0 ] = 1;
    
    this.def[2][ 0 , 1 ] = 1;
    this.def[2][ 1 , 1 ] = 1;
    this.def[2][ 2 , 1 ] = 1;

    // rotation 3
    
    this.def[3][ 0 , 1 ] = 1;
    
    this.def[3][ 1 , 0 ] = 0;
    this.def[3][ 1 , 1 ] = 1;
    this.def[3][ 1 , 2 ] = 0;

});

figures.lter = {};
figures.jter = {};
figures.ster = {};
figures.zter = {};


// Create the method to generate figures in 
// Create the method to rotate figures
// Create the method to move figures in the matrix
// Create the method to to remove lines
// Create the method to keep the score
