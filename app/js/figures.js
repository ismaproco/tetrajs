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
