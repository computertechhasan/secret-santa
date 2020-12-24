function buildIt() {
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
      if (numCorrect === myQuestions.length) {
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}! You did it! Find your prize at this link: <a href="https://hasanthedeveloper.com/profile">HERE</a>`
      }
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Who said 'Darn! I wanted that job!'?",
        answers: {
          a: "Elyse",
          b: "Kristina",
          c: "Conti",
          d: "Pat"
        },
        correctAnswer: "c"
      },
      {
        question: "In 'Hamlet', what is Dan Deeney's occupation? ",
        answers: {
          a: "Accountant",
          b: "Disney Historian",
          c: "History Teacher",
          d: "Theater Teacher"
        },
        correctAnswer: "b"
      },
      {
        question: "Whose 'Plan B' was to make out behind the couch?",
        answers: {
          a: "Pat & Hamilton",
          b: "Pat & Rufino",
          c: "Hamilton & Chason",
          d: "Pat & Chason"
        },
        correctAnswer: "c"
      },
      {
        question: "Who was 'THE LAST FOUR CHARACTERS ALIVE'?",
        answers: {
          a: "Pat",
          b: "Chason",
          c: "Hamilton",
          d: "Angela"
        },
        correctAnswer: "a"
      },
      {
        question: "What is the name of the organization that created all the <strike>blackmail</strike> videos? (Can be found in the intermission of Hamlet)",
        answers: {
          a: "PV Squad",
          b: "PV Filmographers Association",
          c: "PV Group Project Association",
          d: "PV Group Project Association"
        },
        correctAnswer: "b"
      },
      {
        question: "In Macbeth, 'how much longer until its done?'",
        answers: {
          a: "4 days",
          b: "1 minute",
          c: "30 minutes",
          d: "60 seconds"
        },
        correctAnswer: "b"
      },
      {
        question: "In 'Macbeth', what is the first weapon Elyse uses against Conti during the fight scene? ",
        answers: {
          a: "Yoga Mat",
          b: "Bow & Arrow",
          c: "Sword",
          d: "Cross"
        },
        correctAnswer: "a"
      },
      {
        question: "What plant was Lady Macbeth having trouble with in her garden?",
        answers: {
          a: "Squash",
          b: "Roses",
          c: "Daisies",
          d: "Pumpkins"
        },
        correctAnswer: "c"
      },
      {
        question: "In Macbeth, what order do 'Final Countdown' and 'Eye of the Tiger' play?",
        answers: {
          a: "Final Countdown then Eye of the Tiger",
          b: "Eye of the Tiger then Final Countdown",
          c: "Final Countdown plays but not Eye of the Tiger",
          d: "Neither play"
        },
        correctAnswer: "a"
      },
      {
        question: "In 'Macbeth', what food is being enjoyed at the dinner scene with the 'example of Shakespearian symbolism'? ",
        answers: {
          a: "Cheetos",
          b: "Cheese Itz",
          c: "Cheese Doodles",
          d: "Takis"
        },
        correctAnswer: "c"
      },
      {
        question: "In 'Hamlet', why does Laertes need to kill Hamlet?",
        answers: {
            a: "For his father, for his honor, for NARNIA!",
            b: "For his sister, for his honor, for NARNIA!",
            c: "For his sister, for his father, for NARNIA!",
            d: "For his father, for his mother, for NARNIA!"
        },
        correctAnswer: "a"
      },
      {
        question: "In 'Macbeth', what color is Conti's shirt when he is arguing with Angela about killing Duncan? ",
        answers: {
          a: "White",
          b: "Blue",
          c: "Pink",
          d: "Red"
        },
        correctAnswer: "d"
      },
      {
        question: "In 'Macbeth', during the fight scene, what cars are in the background in the drive way? ",
        answers: {
          a: "Elyse's CRV & Neighbors Van",
          b: "Elyse's Moms Van & Elyse's CRV",
          c: "Elyse's Dad's Rav4 & Neighbors Van",
          d: "Elyse's Dad's Rav4 & Elyse's Moms Van"
        },
        correctAnswer: "a"
      },
      {
        question: "In 'Macbeth', how does Jeffin know Macduff is not evil? ",
        answers: {
          a: "He likes iced cream",
          b: "He brings him a present",
          c: "He bakes him a cake",
          d: "He likes puppies"
        },
        correctAnswer: "d"
      },
      {
        question: "In 'Hamlet', when Hamlet (Guthrie) is arguing with his mother (Angela) about her sleeping with his uncle, what incestuous piece of furniture does he say they are creating?",
        answers: {
          a: "Bed",
          b: "Couch",
          c: "Trampoline",
          d: "Lamp"
        },
        correctAnswer: "b"
      },
      {
        question: "In 'Hamlet', what does the blanket say that Tyler and Chason are hiding behind when Guthrie and Elyse are speaking on the couch? ",
        answers: {
          a: "Home Sweet Home",
          b: "Home is where the Heart is",
          c: "Live Laugh Love",
          d: "Sweet Home Alabama"
        },
        correctAnswer: "a"
      },
      {
        question: "In 'Hamlet', how does Laertes's sister die?",
        answers: {
          a: "Poisoned",
          b: "Suicide off Castle Roof",
          c: "Drowned",
          d: "Killed by Hamlet"
        },
        correctAnswer: "c"
      },
      {
        question: "In 'Hamlet', when Tyler is lecturing Jeffin about France, what does he say France is filled with?",
        answers: {
          a: "Croissants, crullers, and baguettes",
          b: "Snails, coffee, and choclate",
          c: "Smelly, rude, and annoying people",
          d: "Layabouts, vagabonds, and artists"
        },
        correctAnswer: "d"
      },
      {
        question: "In 'Macbeth', what characters are you credited for?",
        answers: {
          a: "Malcomn, Macduff, Witch I, Death",
          b: "Malcomn, Macduff, Witch II, Death",
          c: "Malcomn, Macduff, Witch III, Death",
          d: "Malcomn, Macduff, Macbeth, Death"
        },
        correctAnswer: "a"
      },
      {
        question: "In 'Hamlet', what characters are you credited for?",
        answers: {
          a: "Laertes, Pirate #2, Ghost of King Hamlet, Marcellus, Fortinbras's Officer",
          b: "Laertes, Officer #1, Ghost of King Hamlet, Marcellus, Fortinbras's Pirate",
          c: "Laertes, Pirate #1, Ghost of King Hamlet, Marcellus, Fortinbras's Officer",
          d: "Laertes, Pirate #1, Ghost of Queen Hamlet, Marcellus, Fortinbras's Officer"
        },
        correctAnswer: "c"
      }
    ];
  
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
}


function before() {
    document.getElementById("beginButton").style.display = "none";
    document.getElementById("previous").style.display = "inline-block";
    document.getElementById("next").style.display = "inline-block";
    document.getElementById('submit').style.display = "inline-block";
    buildIt();
}

function loaded() {
    document.getElementById("previous").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById('submit').style.display = "none";
}