var navbarTogglers = document.querySelectorAll('#navbarToggler');

if (navbarTogglers.length) {
    for (i = 0; i < navbarTogglers.length; i++) {
        navbarTogglers[i].setAttribute('data-cnt', i);
        navbarTogglers[i].addEventListener('click', function(e) {
            toggleNavbar(this);
        });

        var navLinks = navbarTogglers[i].parentElement.querySelectorAll('a');
        for (j = 0; j < navLinks.length; j++) {
            navLinks[j].addEventListener('click', function(e) {
                var navbar = findAncestor(this, 'nik-navbar');
                toggleNavbar(navbar.querySelector('#navbarToggler'));
            });
        }
    }
}

function toggleNavbar(navbarToggler) {
    var isOpening = ! navbarToggler.classList.contains('collapsed');
    navbarToggler.classList.toggle('collapsed');
    navbarToggler.classList.toggle('active');
    navbarToggler.classList.toggle('fixed');
    navbarToggler.setAttribute("aria-expanded", (isOpening) ? "true" : "false");
    var dataTarget = navbarToggler.getAttribute('data-target');
    var targets = document.querySelectorAll(dataTarget);
    var cnt = navbarToggler.getAttribute('data-cnt');
    if (targets.length && targets[cnt] !== undefined) {
        targets[cnt].style.width = (isOpening) ? '100%' : '0';
        // Remove focus
        document.activeElement.blur();
    }
}
function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}
