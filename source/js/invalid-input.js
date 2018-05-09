var requiredIputs = document.querySelectorAll('input[required]');

for (var i = 0; i < requiredIputs.length; i++) {
  // можно использовать внутри цикла let вместо var и тогда не придется наворачивать лишнюю функцию
  // борясь с замыканиями. Вот только IE без лишней функции все равно не работает. Оставил ее.
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
