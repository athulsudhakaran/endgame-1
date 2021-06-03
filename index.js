  var readlineSync=require("readline-sync");
  var userName=readlineSync.question("what is ur name ");
  console.log("welcome "+userName +" to DO YOU KNOW Athul");
  var score=0;
  function play(question,answer){
  var userAnswer=readlineSync.question(question);
    
  if(userAnswer===answer){
    console.log("u r right");
    score=score+1;
    
  }
  else{
    console.log("u r wrong");

  }
  console.log("ur score is ", score);
  }




  var questions=[{
    question:"what is ur favorite sport ",
    answer:"football"
  },
  {
    question:"my fav superhero would be ",
    answer:"superman"
  }
  ]
  for(var i=0;i<questions.length;i++){
    var current=questions[i];
    play(current.question,current.answer);
  }
