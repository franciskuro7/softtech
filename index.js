        function toggleMenu(){
            var navMenu = document.querySelector('.navBar');
            navMenu.style.display = 'flex'
            // console.log(navMenu)
        }
        function hide(){
            var navMenu = document.querySelector('.navBar');
            navMenu.removeAttribute('style','display:none');
            // console.log(navMenu)
        
        }
        function searchMenu(){
            const btn = document.querySelector('.search');
            if(btn.style.display == 'none'){
                btn.style.display = 'block'
            }
            else{
                btn.style.display='none'
            }
            // console.log(btn)
        }

        function runCode() {
            const code = document.getElementById("code").value;
            const outputFrame = document.getElementById("output-frame");
        
            // Clear the previous content of the iframe
            outputFrame.src = "about:blank";
        
            // Create a new document in the iframe
            const outputDocument = outputFrame.contentDocument || outputFrame.contentWindow.document;
        
            // Write the code to the iframe's document
            outputDocument.open();
            outputDocument.write(code);
            outputDocument.close();
        }
        