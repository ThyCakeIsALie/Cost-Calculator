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