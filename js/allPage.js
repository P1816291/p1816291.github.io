// webAlert
function pop1() {
    alert('Sorry,this page is under construction.Please check back later!')
}
function pop2() {
    alert('Sorry，no promotion for this month')
}
function pop3() {
    alert('Sorry，can’t find the information.')
}

// Form Validation
function doSubmit() {
    var name = $("#name");
    var phone = $("#phone");
    var email = $("#email");
    var address = $("#address");
       if (name.val() === "") {
            alert("Name can not be empty!");
            name.focus();
            return false;
        } else if (phone.val() === "") {
            alert("Phonenumber can not be empty");
            phone.focus();
            return false;
        } else if (email.val().indexOf("@") < 0) {
            alert("Invalid email address!");
        }else {
            alert("We will contact you as soon as possible!");
        }
}
function openHeader() {
    var power = document.getElementById('top-nav').className;
    if (power === 'open') {
        $('#top-nav a').hide(300);
        $('#top-nav button').hide(300);
        $('#top-nav input').hide(300);
        $('#top-nav').css('height', '50px');
        $('#top-nav').removeClass('open');
    }
    if (power !== 'open') {
        $('#top-nav a').show(300);
        $('#top-nav button').show(300);
        $('#top-nav input').show(300);
        $('#top-nav').css('height', '310px');
        $('#top-nav').addClass('open');
    }
}