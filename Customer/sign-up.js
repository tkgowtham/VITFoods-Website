$("#Student").on("click",function(){
  $("#regno").prop( "disabled", false );
  $(".regnolabel").text("Registration No");
});

$("#Faculty").on("click",function(){
  $("#regno").prop( "disabled", false );
  $(".regnolabel").text("Faculty Id");
});

$("#Guest").on("click",function(){
  $("#regno").prop( "disabled", true );
  $(".regnolabel").text("Guest Need Not Give Any ID");
});
