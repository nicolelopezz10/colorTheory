$(document).ready(function(){

    $(".carousel-caption h5").addClass('animated slideInLeft');

    $(".carousel-caption p").addClass('animated slideInRight');

});

// link to code source: https://github.com/hakikz/bootstrap-4-carousel.git //


let textDivs = document.querySelectorAll('.theText');
let outerDivs = document.querySelectorAll('.colorGroups');

textDivs.forEach(function(el) {
  el.classList.add('disappear');
});


outerDivs.forEach(function(el) {
  el.addEventListener('click', function() {

    let textDiv = this.firstElementChild;
    if (textDiv.classList.contains('disappear')) {
      textDiv.classList.remove('disappear');
      textDiv.classList.add('appear');
    } else {
      textDiv.classList.remove('appear');
      textDiv.classList.add('disappear');
    }
  });
});

// link to code source: https://jsfiddle.net/macloo/chu0dfo6/ //



Highcharts.chart('accessiblityChart', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Vision Disorders in the U.S.'
    },
    xAxis: {
      categories: ['Vision Impairment']
    },
    yAxis: {
      title: {
        text: 'People 40 years and over'
      }
    },
    series: [{
      name: 'General vision impairment',
      data: [12000000,]
    }, {
      name: 'Blind',
      data: [1000000,]
    }, {
      name: 'Impairment After Correction',
      data: [3000000,]
    },{
      name: 'Uncorrected Refractive Error',
      data: [8000000]
    },

  ]
  });






  let textmeaning = document.querySelectorAll('.textmeaning');
  let square = document.querySelectorAll('.square');
  

  function hideAll() {
    textmeaning.forEach(function(el) {
      el.style.display = 'none';
    });
  }

  hideAll();


  square.forEach(function(el) {
    el.onclick = (e) => {
      // hide all the divs to ensure that only one will be open
      hideAll();

      switch (e.target.getAttribute('id')) {
        case 'redSquare':
          document.querySelector('#redMeaning')
          	.style.display = 'block';
          break;

        case 'orangeSquare':
          document.querySelector('#orangeMeaning')
          	.style.display = 'block';
          break;

        case 'yellowSquare':
          document.querySelector('#yellowMeaning')
          .style.display = 'block';
          break;

        case 'greenSquare':
          document.querySelector('#greenMeaning')
          .style.display = 'block';
          break;

          case 'blueSquare':
            document.querySelector('#blueMeaning')
            .style.display = 'block';
            break;

            case 'purpleSquare':
              document.querySelector('#purpleMeaning')
              .style.display = 'block';
              break;

        case 'pinkSquare':
          document.querySelector('#pinkMeaning')
          .style.display = 'block';
          break;
      } // end of switch
      // switch does not need default for this

    } // end of function for clicking

  }); // end of forEach()
