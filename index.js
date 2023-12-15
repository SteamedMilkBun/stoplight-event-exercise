(function () {
  'use strict';

  // query the DOM for the element with the id of '[each]Button'
  const stop = document.querySelector('#stopButton'); // #id; .class
  const slow = document.querySelector('#slowButton');
  const go = document.querySelector('#goButton');
  // add a click event listener for the stop button
  stop.addEventListener('click', function(event) {
    // query the DOM for the stop light bulb
    let stopLight = document.querySelector('#stopLight'); // <div id="stopLight" class="bulb"></div>
    // toggle the light on/off
    stopLight.classList.toggle('stop');
  })

  slow.addEventListener('click', function(event) {
    let slowLight = document.querySelector('#slowLight'); //<div id="slowLight"
    slowLight.classList.toggle('slow');
  })

  go.addEventListener('click', function(event) {
    let goLight = document.querySelector('#goLight');
    goLight.classList.toggle('go');
  })

  //use events for mouse entering and mouse leaving button and log
  let mouseEnterButton = function(event){
    console.log(`Mouse entered ${event.target.id} area`);
  }
  //log mouse exit
  let mouseExitButton = function(event){
    console.log(`Mouse exited ${event.target.id} area`);
  }

  let stopLightButton = document.querySelector('#stopButton');
    stopLightButton.addEventListener('mouseenter', mouseEnterButton);
    stopLightButton.addEventListener('mouseleave', mouseExitButton);

  let slowLightButton = document.querySelector('#slowButton');
    slowLightButton.addEventListener('mouseenter', mouseEnterButton);
    slowLightButton.addEventListener('mouseleave', mouseExitButton);

  let goLightButton = document.querySelector('#goButton');
    goLightButton.addEventListener('mouseenter', mouseEnterButton);
    goLightButton.addEventListener('mouseleave', mouseExitButton);

  //function that logs when mouse enters

  /*buttonAreaNodeList.forEach(eachButton => {
    eachButton.addEventListener('mouseenter', mouseEnterButton);
    eachButton.addEventListener('mouseleave', mouseExitButton);
  });
  */



  //add event listener to buttonArea so it can track mouse enter/exit
  //button.addEventListener('mouseenter', mouseEnterButton);
  //button.addEventListener('mouseleave', mouseExitButton);

    // document.querySelectorAll() returns a static NodeList
    // document.getElementsByClassName/TagName() returns a dynamic HTMLCollection
    // document.getElementById() and document.querySelector() returns a single element
})();

