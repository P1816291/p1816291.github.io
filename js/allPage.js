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