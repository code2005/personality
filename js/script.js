
  $(document).ready(function(){
  
   $('<a style="color:white" href="#" onClick="return false;">click me</a>').appendTo("#service1");
   $('<a style="color:white" href="#" onClick="return false;">click me</a>').appendTo("#service4");
  
     
   
     
    $("#service1").click(function(){
	  //$("#services-section").animate({height:'500px'});
	  $("#service1").css("color","white").slideUp(2000).slideDown(2000);
	});
	
	
	 $("#service4").click(function(){
	  $("#service4").css("color","white").slideUp(2000).slideDown(2000);
	});
	
	
	
  
  });