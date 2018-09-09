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
  var ServiceDate = document.getElementById("date").value;
  document.getElementById("customer-name-output").innerHTML = "Thank you, " + customerName + "!";
  document.getElementById("service-date-output").innerHTML = "Service performed on: " + ServiceDate;
  if (document.getElementById("virus-removal").checked == true) {
    var ServicesPerformed = document.getElementById("virus-removal").value;
  } else {
    var ServicesPerformed = " ";
  }
    document.getElementById("services-included").innerHTML = "Services included: " + ServicesPerformed;
};

function printContent(el){
var restorepage = $('body').html();
var printcontent = $('#generated-invoice-id' + el).clone();
$('body').empty().html(printcontent);
window.print();
$('body').html(restorepage);
};
