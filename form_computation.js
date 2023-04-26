const boxes = document.querySelectorAll('.output_labels');
	function box(){
      boxes.forEach(box => {
        box.classList.add('animate');
        setTimeout(() => {
          box.classList.remove('animate');
        }, 500);
      });
	}

    const animateBtn = document.getElementById('submitBtn');
    animateBtn.addEventListener('click', () => {
		calculateResult(0);
		sumResult(0);
		box();
		scrollTo(5000);
    });

    const animateBtn2 = document.getElementById('submitBtn2');
    animateBtn2.addEventListener('click', () => {
		calculateResult(1);
		sumResult(1);
    	box();
    	scrollTo(5000);
    });
    
    const animateBtn3 = document.getElementById('submitBtn3');
    animateBtn3.addEventListener('click', () => {
		calculateResult(2);
		sumResult(2);
    	box();
    	scrollTo(5000);
    });
    
  const numInput = document.getElementById("input4");
  numInput.addEventListener("input", function() {
	calculateResult(0);
    box();
  });
  
  const numInput2 = document.getElementById("input8");
  numInput2.addEventListener("input", function() {
    calculateResult(1);
    box();
  });
  const numInput3 = document.getElementById("input12");
  numInput3.addEventListener("input", function() {
    calculateResult(2);
    box();
  });
  const numInput4 = document.getElementById("input1");
  numInput4.addEventListener("input", function() {
    calculateResult(0);
	box();
  });
  const numInput5 = document.getElementById("input2");
  numInput5.addEventListener("input", function() {
    calculateResult(0);
    box();
  });
  const numInput6 = document.getElementById("input3");
  numInput6.addEventListener("input", function() {
    calculateResult(0);
    box();
  });
  const numInput7 = document.getElementById("input5");
  numInput7.addEventListener("input", function() {
    calculateResult(1);
	box();
  });
  const numInput8 = document.getElementById("input6");
  numInput8.addEventListener("input", function() {
    calculateResult(1);
    box();
  });
  const numInput9 = document.getElementById("input9");
  numInput9.addEventListener("input", function() {
    calculateResult(2);
    box();
  });
  const numInput10 = document.getElementById("input10");
  numInput10.addEventListener("input", function() {
    calculateResult(2);
    box();
  });
  
  const viewport = document.querySelector('meta[name="viewport"]');
  const content = viewport.getAttribute('content');
  viewport.setAttribute('content', `${content}, user-scalable=no`)
  
  //system to convert large numbers to correct commas
  function ntc(num) {
  	  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  
  function scrollTo(scrollPosition) {
	  window.scrollBy({
	  top: scrollPosition,
	  behavior: 'smooth'
	  });
  }
  
  
  //gutter cost by linear feet: $6.50 / ft <--make modular rate
  