/* script.js - slider + simple validation */
document.addEventListener('DOMContentLoaded', function(){
  // Simple slider
  const slidesWrap = document.querySelector('.slides');
  if(slidesWrap){
    const slides = document.querySelectorAll('.slide');
    let idx = 0;
    function show(i){
      slidesWrap.style.transform = 'translateX(' + (-i * 100) + '%)';
    }
    // auto-play
    setInterval(function(){
      idx = (idx + 1) % slides.length;
      show(idx);
    }, 3500);
  }

  // Simple form validation for signup/login and contact
  function simpleValidate(form){
    let ok = true;
    const required = form.querySelectorAll('[data-required]');
    required.forEach(function(inp){
      if(!inp.value || inp.value.trim() === ''){
        ok = false;
        inp.style.borderColor = 'red';
      } else {
        inp.style.borderColor = '';
      }
    });
    return ok;
  }

  const signupForm = document.getElementById('signup-form');
  if(signupForm){
    signupForm.addEventListener('submit', function(e){
      e.preventDefault();
      if(!simpleValidate(signupForm)) return alert('fill the blanks');
      // password check
      const pw = signupForm.querySelector('input[name=password]').value || '';
      if(pw.length < 6){ return alert('small pssword(6 carrecters at least)'); }
      alert('done');
      signupForm.reset();
    });
  }

  const loginForm = document.getElementById('login-form');
  if(loginForm){
    loginForm.addEventListener('submit', function(e){
      e.preventDefault();
      if(!simpleValidate(loginForm)) return alert('fill the blanks');
      alert('done');
      loginForm.reset();
    });
  }

  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      if(!simpleValidate(contactForm)) return alert('fill the blanks');
      alert('done');
      contactForm.reset();
    });
  }
});
