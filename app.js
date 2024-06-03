let toggle = document.querySelector('.hamburger');
        toggle.addEventListener('click',function(){
           document.querySelector('.menu').style.display='block';
           document.querySelector('.cancel').style.display='block';
           this.style.display='none';

           document.querySelector('.home').style.display='block';
           document.querySelector('.serve').style.display='block';
           document.querySelector('.cont').style.display='block';
           document.querySelector('.ab').style.display='block';


        })
        let closebtn = document.querySelector('.cancel');
            closebtn.addEventListener('click',function(){
           document.querySelector('.nav-bar').style.display='block';
           document.querySelector('.hamburger').style.display='block';
           document.querySelector('.nav-bar .menu').style.display='none';

           this.style.display='none';
        })
