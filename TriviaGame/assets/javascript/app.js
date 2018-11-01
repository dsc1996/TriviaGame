var question_area = $("#questions");

var questions = [{
    question: "Who is the all time stolen base leader?",
    answers: ["Rickey Henderson", "Lou Brock", "Billy Hamilton", "Ty Cobb"],
    correctAnswer: "Rickey Henderson"
} , {
    question: "How many no-hitters did Nolan Ryan throw?",
    answers: ["4", "8", "2", "7"],
    correctAnswer: "7"
} , {
    question: "Where were the Los Angeles Dodgers orignially located?",
    answers: ["Seattle", "Brooklyn", "San Francisco", "Charltte"],
    correctAnswer: "Brooklyn"
} , {
    question: "Which MLB pitcher has the most wins pitching?",
    answers: ["Nolan Ryan", "Catfish Hunter", "Ty Cobb", "Randy Johnson"],
    correctAnswer: "Ty Cobb"
} , {
    question: "Which MLB team has the largest stadium?",
    answers: ["Oakland Athletics", "Los Angeles Dodgers", "Texas Rangers", "Milwaukee Brewers"],
    correctAnswer: "Los Angeles"
} , {
    question: "What MLB player has been selected to the most All Star games?",
    answers: ["Hank Aaron", "Willie Mays", "Stan Musial", "Cal Ripken Jr."],
    correctAnswer: "Hank Aaron"
} , {
    question: "How many hits did all time hit leader, Pete Rose, end his career with?",
    answers: ["4301", "4201", "4256", "4259"],
    correctAnswer: "4256"
} , {
    question: "What is the oldest continually operating team in the MLB?",
    answers: ["New York Yankees", "Atlanta Braves", "Boston Red Socks", "Cleveland Indians"],
    correctAnswer: "Atlanta Braves"
}];

var time;

var correctIncorrect = {
    
    correct: 0,
    incorrect: 0,
    secondsLeft: 120,

    countdown: function() {
        correctIncorrect.secondsLeft--;
        $("#secondsLeft-number").html(correctIncorrect.secondsLeft);
        if (correctIncorrect.secondsLeft === 0) {
          console.log("TIME UP");
          correctIncorrect.done();
        }
      },
    
      start: function() {
        time = setInterval(correctIncorrect.countdown, 1000);
    
        $("#smallWrapper").prepend("<h2>Time Remaining: <span id='secondsLeft-number'>120</span> Seconds</h2>");
    
        $("#startButton").remove();
    
        for (var i = 0; i < questions.length; i++) {
          question_area.append("<h2>" + questions[i].question + "</h2>");
          for (var j = 0; j < questions[i].answers.length; j++) {
            question_area.append("<input type='radio' name='question-" + i +
            "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
          }
        }
    
        question_area.append("<button id='done'>Done</button>");
      },
    
      done: function() {
    
        $.each($("input[name='question-0']:checked"), function() {
          if ($(this).val() === questions[0].correctAnswer) {
            correctIncorrect.correct++;
          }
          else {
            correctIncorrect.incorrect++;
          }
        });
    
        $.each($("input[name='question-1']:checked"), function() {
          if ($(this).val() === questions[1].correctAnswer) {
            correctIncorrect.correct++;
          }
          else {
            correctIncorrect.incorrect++;
          }
        });
    
        $.each($("input[name='question-2']:checked"), function() {
          if ($(this).val() === questions[2].correctAnswer) {
            correctIncorrect.correct++;
          }
          else {
            correctIncorrect.incorrect++;
          }
        });
    
        $.each($("input[name='question-3']:checked"), function() {
          if ($(this).val() === questions[3].correctAnswer) {
            correctIncorrect.correct++;
          }
          else {
            correctIncorrect.incorrect++;
          }
        });
    
        $.each($("input[name='question-4']:checked"), function() {
          if ($(this).val() === questions[4].correctAnswer) {
            correctIncorrect.correct++;
          }
          else {
            correctIncorrect.incorrect++;
          }
        });
    
        $.each($("input[name='question-5']:checked"), function() {
          if ($(this).val() === questions[5].correctAnswer) {
            correctIncorrect.correct++;
          }
          else {
            correctIncorrect.incorrect++;
          }
        });
    
        $.each($("input[name='question-6']:checked"), function() {
          if ($(this).val() === questions[6].correctAnswer) {
            correctIncorrect.correct++;
          }
          else {
            correctIncorrect.incorrect++;
          }
        });
    
        $.each($("input[name='question-7']:checked"), function() {
          if ($(this).val() === questions[7].correctAnswer) {
            correctIncorrect.correct++;
          }
          else {
            correctIncorrect.incorrect++;
          }
        });
    
        this.result();
    
      },
    
      result: function() {
    
        clearInterval(time);
    
        $("#smallWrapper h2").remove();
    
        question_area.html("<h2>All Done!</h2>");
        question_area.append("<h3>Correct Answers: " + this.correct + "</h3>");
        question_area.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        question_area.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
      }
    };
    
    $(document).on("click", "#startButton", function() {
      correctIncorrect.start();
    });
    
    
    $(document).on("click", "#done", function() {
      correctIncorrect.done()
    });
    