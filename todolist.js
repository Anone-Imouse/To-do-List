$(document).ready(function(){
  $('button').click(function(){
$('ul').append('<li>'+$('input').val()+'</li>')
    $('input').val('')
      $('li:last').append(' &nbsp;&nbsp; <button class="x">X</button>');
    
    $('.x').click(function(){
      const parent=this.parentElement;
      parent.remove();
    });
  });
});
