function SignUp() {
    let name = document.getElementById('name').Value.trim();
    let Gmail = document.getElementById('Gmail').value.trim();
    let Password = document.getElementById('password').value.trim();
    let phonenumber = document.getElementById('phone').value.trim();
    function rederictToSite() {
        window.location.href = 'http://127.0.0.1:5500/aboutme.html';
    }
    if (name && Gmail && Password && phonenumber) {
        rederictToSite();
    }
    else {
        if (!name){
            document.getElementById('FullName').textContent = 'Please Enter Your Full Name';
        }

        if (!Gmail) {
            document.getElementById('EnterGmail').textContent = 'Please Enter Gmail';
        }

        if (!Password) {
            document.getElementById('EnterPassword').textContent = 'Please Enter Password';
        }

        if (!phonenumber) {
            document.getElementById('EnterPhone').textContent = 'Please Enter Phone Number';
        }
    }

    

}