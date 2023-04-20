const boxes = document.querySelectorAll('.output_labels');
    const animateBtn = document.getElementById('submitBtn');
    
    animateBtn.addEventListener('click', () => {
      boxes.forEach(box => {
        box.classList.add('animate');
        setTimeout(() => {
          box.classList.remove('animate');
        }, 500);
      });
    });
    

    const animateBtn2 = document.getElementById('submitBtn2');
    
    animateBtn2.addEventListener('click', () => {
      boxes.forEach(box => {
        box.classList.add('animate');
        setTimeout(() => {
          box.classList.remove('animate');
        }, 500);
      });
    });
    
    const animateBtn3 = document.getElementById('submitBtn3');
    
    animateBtn3.addEventListener('click', () => {
      boxes.forEach(box => {
        box.classList.add('animate');
        setTimeout(() => {
          box.classList.remove('animate');
        }, 500);
      });
    });
    
  const numInput = document.getElementById("input4");
  numInput.addEventListener("input", function() {
    calculateResult(0);
    boxes.forEach(box => {
        box.classList.add('animate');
        setTimeout(() => {
          box.classList.remove('animate');
        }, 500);
      });
  });
    const numInput2 = document.getElementById("input8");
  numInput2.addEventListener("input", function() {
    calculateResult(1);
    boxes.forEach(box => {
        box.classList.add('animate');
        setTimeout(() => {
          box.classList.remove('animate');
        }, 500);
      });
  });
    const numInput3 = document.getElementById("input12");
  numInput3.addEventListener("input", function() {
    calculateResult(2);
    boxes.forEach(box => {
        box.classList.add('animate');
        setTimeout(() => {
          box.classList.remove('animate');
        }, 500);
      });
  });