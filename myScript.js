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
  var hoursService = document.getElementById("number").value;
  document.getElementById("customer-name-output").innerHTML = customerName + "," + "<br> <br>" + "The following is a summary of the services performed on <b>" + ServiceDate + "</b>. If you have any further questions or concerns, please contact me at jbwierzbicki@gmail.com.";
  document.getElementById("service-date-output").innerHTML = "Service performed on: " + ServiceDate;
  if (document.getElementById("virus-removal").checked == true) {
    var virusRemoval = document.getElementById("virus-removal").value;
  } else {
    var virusRemoval = "";
  }
  if (document.getElementById("pc-setup").checked == true) {
    var pcSetup = document.getElementById("pc-setup").value;
  } else {
    var pcSetup = "";
  }
  if (document.getElementById("printer-setup").checked == true) {
    var printerSetup = document.getElementById("printer-setup").value;
  } else {
    var printerSetup = "";
  }
  if (document.getElementById("printer-maintenance").checked == true) {
    var printerMaintenance = document.getElementById("printer-maintenance").value;
  } else {
    var printerMaintenance = "";
  }
  if (document.getElementById("comprehensive-diagnostic-repair").checked == true) {
    var comprehensiveDiagnosticRepair = document.getElementById("comprehensive-diagnostic-repair").value;
  } else {
    var comprehensiveDiagnosticRepair = "";
  }
  if (document.getElementById("software-installation").checked == true) {
    var softwareInstallation = document.getElementById("software-installation").value;
  } else {
    var softwareInstallation = "";
  }
  if (document.getElementById("other").checked == true) {
    var otherOption = document.getElementById("other").value;
  } else {
    var otherOption = "";
  }
    document.getElementById("services-included").innerHTML = "Services included: " + virusRemoval + pcSetup + printerSetup + printerMaintenance + comprehensiveDiagnosticRepair + softwareInstallation + otherOption;
    document.getElementById("hours-service").innerHTML = "Total hours of service: " + hoursService;
    document.getElementById("service-cost").innerHTML = "Amount due: $" + hoursService * 30 + ".00";

    document.getElementById("generated-invoice-id").style.display = "block";
    document.getElementById("print-icon-id").style.display = "block";
};

function printContent(el){
var restorepage = $('body').html();
var printcontent = $('#generated-invoice-id' + el).clone();
$('body').empty().html(printcontent);
window.print();
$('body').html(restorepage);
};
