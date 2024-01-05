const form = document.getElementById('form');

form.addEventListener('submit', e =>{
    e.preventDefault();
    //alert('OK');
    validateInputs();
});

const validateInputs = () =>{
    //alert('valid');
    const username = document.getElementById('username').value;
    const usertype = document.getElementById('usertype').value;
    const pw1 = document.getElementById('pw1').value;
    const pw2 = document.getElementById('pw2').value;
    

    const errname = document.getElementById('nameloc');
    const errtype = document.getElementById('typeloc');
    const errpw1 = document.getElementById('pw1loc');
    const errpw2 = document.getElementById('pw2loc');
    //check for username
    if(username === ""){
        errname.innerHTML ='name must not be blank';
    }else if(username.length < 4){
        errname.innerHTML = 'name must be 4 characters';
        
    }
    else{
        errname.innerHTML = '&#9745;';
    }

    //check user type
    if(usertype == -1){
        alert('please choose either User,Admin or Super Admin');

    }


   

    //check user password
    if(pw1 !="" && pw2 !=""){
        if(pw1 == pw2){
            window.location.assign("upcomingevent.html");
            alert("successfully login")
            
        }else{
            alert("password mismatch")
        }

    }else{
        alert("Please enter password")
    }

    
    // if(pw1 =="" ){
    //   alert('password must not be blank');

    // }

    //check user pw2
    // if(pw2 !='pw1'){
    //     alert('Password must be the same');
    // }else 
    // if(pw2 === 'pw1'){
    //     alert('Entered');
    // }


    
};
