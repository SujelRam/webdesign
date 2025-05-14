const enter = document.getElementById('click');
            const myform = document.getElementById('iform');
            const htext = document.getElementById('text');

            enter.onclick = function(){
                  myform.style.display='block';
                  htext.style.display='none';
            };
            iform.onsubmit = function (event) {
               event.preventDefault(); 
               alert('Form submitted successfully!');
               iform.style.display = 'none'; 
            }; 