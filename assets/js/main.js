$('.hamburguer').bind('click', function(){  
   $('nav').slideToggle('');
});

$('nav a').bind('click', function(){  
   $('nav').slideUp('');
});