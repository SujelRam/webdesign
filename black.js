const enter = document.getElementById('click');
            const myform = document.getElementById('iform');

            enter.onclick = function(){
                  myform.style.display='block';
            };
            iform.onsubmit = function (event) {
               event.preventDefault(); 
               alert('Form submitted successfully!');
               iform.style.display = 'none'; 
            }; 