document.getElementById('login-button').addEventListener('click', function(){
    // email-field
    const useremail = document.getElementById('email');
    const emailfield=useremail.value;
    
    // password-field
    const userpassword = document.getElementById('password');
    const passwordfield=userpassword.value;
    

    if(emailfield == 'rifat50@gmail.com' && passwordfield == 'secret'){
        
        window.location.href="bank.html"
    }

})