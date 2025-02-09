// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let boardHeight = 600;
// let boardWidth = 1000;
// let square = 50;

// let snakeCells = [[0,0]];

// let direction = 'right';

// let gameOver = false;

// let foodCell = generateRandomCell();

// let score = 0;

// document.addEventListener('keydown', function(event) {
//   if (event.key === 'ArrowLeft') {
//     direction = 'left';
//   } else if (event.key === 'ArrowDown') {
//     direction = 'down';
//   } else if (event.key === 'ArrowRight') {
//     direction = 'right';
//   } else {
//     direction = 'up';
//   }
// })

// let intervalId = setInterval(function() {
//   update();
//   draw();
// }, 100);

// function update() {
//   let headX = snakeCells[snakeCells.length - 1][0];
//   let headY = snakeCells[snakeCells.length - 1][1];

//   let newX;
//   let newY;

//   if (direction === 'right') {
//     newX = headX + square;
//     newY = headY;

//     if (newX === boardWidth) {
//       gameOver = true;
//     }
    
//   } else if (direction === 'left') {
//     newX = headX - square;
//     newY = headY;

//     if (newX < 0) {
//       gameOver = true;
//     }

//   } else if (direction === 'up') {
//     newX = headX;
//     newY = headY - square;

//     if (newY < 0) {
//       gameOver = true;
//     }

//   } else {
//     newX = headX;
//     newY = headY + square;

//     if (newY === boardHeight) {
//       gameOver = true;
//     }
//   }

//   snakeCells.push([newX, newY]);

//   if (foodCell[0] === headX && foodCell[1] === headY) {
//     foodCell = generateRandomCell();
//     score += 1;
//   } else {
//     snakeCells.shift();
//   }
// }

// function draw() {

//   if (gameOver === true) {
//     clearInterval(intervalId);
//     ctx.fillStyle = 'red';
//     ctx.font = '40px sans-serif';
//     ctx.fillText('Game over', 50, 150);
//     return;
//   }

//   ctx.clearRect(0, 0, boardWidth, boardHeight);
//   for (let cell of snakeCells) {
//     ctx.fillStyle = 'yellow';
//     ctx.fillRect(cell[0], cell[1], square, square);
//     ctx.fillStyle = 'red';
//     ctx.strokeRect(cell[0], cell[1], square, square);
//   }

//   ctx.fillStyle = 'red';
//   ctx.fillRect(foodCell[0], foodCell[1], square, square);
//   ctx.fillStyle = 'yellow';

//   // draw score
//   ctx.fillStyle = 'white';
//   ctx.font = '20px sans-serif';
//   ctx.fillText(`Score: ${score}`, 50, 50);
// }

// function generateRandomCell() {
//   return [
//     Math.round((Math.random()*(boardWidth - square))/square)*square,
//     Math.round((Math.random()*(boardHeight - square))/square)*square
//   ]
// }




let canvas = document.querySelector('canvas');
let btn = document.querySelector('button');
let run = document.querySelector('#run');


  let pen=   canvas.getContext('2d')
     let cell=50
     let snakeCells=[[0,0]]
     let direction='right'
     let gameOver =false
     let randomCell=generateRandomCell()

     document.addEventListener('keydown',(e)=>{
        // console.log(e,"eeeee");
        if(e.key==='ArrowUp'){
            direction='up'
        }
        else if(e.key==='ArrowDown'){
            direction='down'
        }
        else if(e.key==='ArrowLeft'){
            direction='left'
        }
        else{
             direction='right'
        }
        
     })
    
     let id
     function call(){
       id= setInterval(()=>{
        shapeCreate()
        update()
     },200)


     }
   
  
     btn.addEventListener('click',()=>{
      clearInterval(id)

     })
     run.addEventListener('click',()=>{
      if(!gameOver){
        clearInterval(id)
        call()
      }


     })
     


     function shapeCreate(){
        if(gameOver){
            clearInterval(id)
            //     clearInterval(intervalId);
    pen.fillStyle = 'red';
    pen.font = '40px sans-serif';
    pen.fillText('Game over', 50, 150);
            return
        }
        pen.clearRect(0,0,1000,600)
        for(let i of snakeCells){
            pen.fillStyle='gold'
            pen.fillRect(i[0],i[1],cell,cell)
        }
        pen.fillStyle='green'
        pen.fillRect(randomCell[0],randomCell[1],cell,cell)
     }

     function update(){
        let headX=  snakeCells[snakeCells.length-1][0]
      let headY=  snakeCells[snakeCells.length-1][1]

      let newX
      let newY
      if(direction==='right'){
        newX=headX+cell
        newY=headY
        if(newX===1000 || checkMate(newX,newY)){
            gameOver=true
        }
      }
      else if(direction=='left' ){
        newX=headX-cell
        newY=headY
        if(newX<0 || checkMate(newX,newY)){
            gameOver=true
        }
      }
      else if(direction=='up'){
        newX=headX
        newY=headY-cell
        if(newY<0 || checkMate(newX,newY)){
            gameOver=true
        }

      }
      else{
        newX=headX
        newY=headY+cell
        if(newY===600 || checkMate(newX,newY)){
            
            gameOver=true
        }
      }
      if(newX===randomCell[0] && newY===randomCell[1]){
        randomCell=generateRandomCell()
      }
      else{
            snakeCells.shift()

      }

      snakeCells.push([newX,newY])
  
     }

     function generateRandomCell() {
  return [
    Math.round((Math.random()*(1000 - cell))/cell)*cell,
    Math.round((Math.random()*(600 - cell))/cell)*cell
  ]
}



// khud ko kaatna galat baat hai
function checkMate(newHeadX , newHeadY){
  for(let item of snakeCells){
      console.log(item , newHeadX , newHeadY);
      if(item[0] ===  newHeadX && item[1] ===  newHeadY){
          return true;
      }
  }
  return false;

}

console.log(generateRandomCell(),"heheheh");















//   pen.fillStyle='red'
//   pen.fillRect(20,100,50,50)
//   pen.clearRect(20,100,50,50)






console.log(Math.random()*10);


