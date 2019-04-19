$('#Soumettre').click(function() {
var regexFirstname = /^[a-zA-Z]+$/
if (!regexFirstname.test($("#firstname").val())){
  Swal.fire('Merci de rentrer un nom valide');
}
var regexLastname = /^[a-zA-ZéèÉÈôîêûÛÊÔÎùÙïöëüËÏÖÜç']{3,15}[-']?[a-zA-ZéèÉÈôîêûÛÊÔÎùÙïöëüËÏÖÜç]{0,15}$/
if  (!regexLastname.test($('#lastname').val())){
  Swal.fire('Merci de rentrer un prénom valide');
}
var regexEmail =/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/
if (!regexEmail.test($('#email').val())){
  Swal.fire('Merci de rentrer un mail valide');
}
var regexPhone = /^\+33\s?[1-9]\d{8}$/
if (!regexPhone.test($('#phone').val())){
  Swal.fire('Merci de rentrer un numéro valide');
}
});
