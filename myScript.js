$(document).ready(function(){
  var date_input=$('input[name="date"]'); //our date input has the name "date"
  var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
  date_input.datepicker({
    format: 'mm/dd/yyyy',
    container: container,
    todayHighlight: true,
    autoclose: true,
  })


});


function generateInvoice() {
  var customerName = document.getElementById("name").value;
  document.getElementById("customer-name-output").innerHTML = "Thank you, " + customerName + "!";

}
