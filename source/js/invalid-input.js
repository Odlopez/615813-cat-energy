var requiredIputs = document.querySelectorAll('input[required]');

for (var i = 0; i < requiredIputs.length; i++) {

  var x = function (i) {
    requiredIputs[i].addEventListener('input', function() {

    if (requiredIputs[i].value !== '') {
      requiredIputs[i].classList.add('input-text--required');
    } else {
      requiredIputs[i].classList.remove('input-text--required');
    }
    })
  };
  x(i);
}
