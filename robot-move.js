moveRobot=(x, y, orientation, instructions)=>{ //orientation=n,e,s,w
    const directions = ['N', 'E', 'S', 'W'];
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    let directionIndex=0;
    directions.forEach((val,index)=>{
      if(orientation===val){
        directionIndex=index;
      }
    })
    for (const instruction of instructions) {
      if (instruction === 'L') {
        directionIndex = (directionIndex + 3) % 4;
      } else if (instruction === 'R') {
        directionIndex = (directionIndex + 1) % 4;
      } else if (instruction === 'M') {
        x = dx[directionIndex]+(+x);
        y = dy[directionIndex]+(+y);
      }
    }
  
    return [x, y, directions[directionIndex]];
  }



  module.exports = moveRobot;
