$('#step-1').click(function(){
  $('[data-step="1"]').hide();
  $('[data-step="2"]').show();
  $('#currentStep').text('2');
})

$('#step-2').click(function(){
  $('[data-step="2"]').hide();
  $('[data-step="3"]').show();
  $('#currentStep').text('3');
})
