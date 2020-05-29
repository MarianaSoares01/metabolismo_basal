function calcular(){  
  var radios = document.getElementsByName("sexo");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      var s = radios[i].value;
    }
  }
  
  var atv = document.getElementById("nivel_atividade");
  var NA = atv.options[atv.selectedIndex].text;

  var i = $('#idade').val();
  var h = $('#altura').val();
  var p = $('#peso').val();

  if(s == 'F'){
    TMB = (665 + (9.6 * p) + (1.8 * h) - (4.7 * i));
  } else { // s == 'M'
    TMB = (66 + (13.7 * p) + (5 * h) - (6.8 * i));
  }

  if(NA == 'Sedentário'){
    NCD = (TMB * 1.2);
  } else if(NA == 'Levemente ativo'){
    NCD = (TMB * 1.375);
  } else if(NA == 'Moderadamente ativo'){
    NCD = (TMB * 1.55);
  } else if(NA == 'Muito ativo'){
    NCD = (TMB * 1.725);
  } else { // (NA == 'Super ativo')
    NCD = (TMB * 1.9);
  }

  navigator.vibrate([8000]);
  navigator.notification.beep(2);
  
  function confirmando(buttonIndex) {
    if(buttonIndex == 1){
      alert('Sua Necessidade Calórica Diária é: ' + NCD);
    } else {
      alert('Obrigado!');
    }
  }
  
  navigator.notification.confirm(
      TMB + 'Deseja saber sua Necessidade Calórica Diária?', // message
      confirmando,            // callback to invoke with index of button pressed
      'Sua TMB é: ',           // title
      ['Sim','Não']     // buttonLabels
  );
}