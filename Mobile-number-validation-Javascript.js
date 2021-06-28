/*
            \d match any digit (equal to [0-9])
            \w match any word character(a-z,A-Z,0-9)
            \s match whitespace character (space and tabs)
            \t match a tab only
        */
       function validate(){
           var text=document.getElementById("text1").value;
           var regx=/^[7-9]\d{9}$/;

           if(regx.test(text)){
               document.getElementById("label").innerHTML="Valid";
               document.getElementById("label").style.visibility="visible";
               document.getElementById("label").style.color="green";
           }
           else{
                document.getElementById("label").innerHTML="Invalid";
                document.getElementById("label").style.visibility="visible";
                document.getElementById("label").style.color="red";
           }
       }
