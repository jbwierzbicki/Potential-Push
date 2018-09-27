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


function addDay2() {

  document.getElementById("date-performed2").style.display = "block";
  document.getElementById("services-performed2").style.display = "block";
  document.getElementById("rate2").style.display = "block";

  };

function addDay3() {

  document.getElementById("date-performed3").style.display = "block";
  document.getElementById("services-performed3").style.display = "block";
  document.getElementById("rate3").style.display = "block";
  };


function generateInvoice() {
  var customerName = document.getElementById("name").value;
  var ServiceDate = document.getElementById("date").value;
  var ServiceDate2 = document.getElementById("date2").value;
    var ServiceDate3 = document.getElementById("date3").value;
  var hoursService = document.getElementById("number").value;
  var hoursService2 = document.getElementById("number2").value;
    var hoursService3 = document.getElementById("number3").value;
  document.getElementById("customer-name-output").innerHTML = customerName + "," + "<br> <br>" + "The following is a summary of the services performed for this period. If you have any further questions or concerns, please contact me at jbwierzbicki@gmail.com.";
  document.getElementById("service-date-output").innerHTML = ServiceDate;
  if (document.getElementById("virus-removal").checked == true) {
    var virusRemoval = document.getElementById("virus-removal").value + "<br>";
  } else {
    var virusRemoval = "";
  }
  if (document.getElementById("pc-setup").checked == true) {
    var pcSetup = document.getElementById("pc-setup").value + "<br>";
  } else {
    var pcSetup = "";
  }
  if (document.getElementById("printer-setup").checked == true) {
    var printerSetup = document.getElementById("printer-setup").value + "<br>";
  } else {
    var printerSetup = "";
  }
  if (document.getElementById("printer-maintenance").checked == true) {
    var printerMaintenance = document.getElementById("printer-maintenance").value + "<br>";
  } else {
    var printerMaintenance = "";
  }
  if (document.getElementById("comprehensive-diagnostic-repair").checked == true) {
    var comprehensiveDiagnosticRepair = document.getElementById("comprehensive-diagnostic-repair").value + "<br>";
  } else {
    var comprehensiveDiagnosticRepair = "";
  }
  if (document.getElementById("software-installation").checked == true) {
    var softwareInstallation = document.getElementById("software-installation").value + "<br>";
  } else {
    var softwareInstallation = "";
  }
  if (document.getElementById("other").checked == true) {
    var otherOption = document.getElementById("other").value + "<br>";
  } else {
    var otherOption = "";
  }
    document.getElementById("services-included").innerHTML = virusRemoval + pcSetup + printerSetup + printerMaintenance + comprehensiveDiagnosticRepair + softwareInstallation + otherOption;
    document.getElementById("hours-service").innerHTML = hoursService;
    var totalHours = +hoursService + +hoursService2 + +hoursService3;
    document.getElementById("service-cost").innerHTML = "Amount due: $" + totalHours * 30 + ".00";


    document.getElementById("service-date-output2").innerHTML = ServiceDate2;
    if (document.getElementById("virus-removal2").checked == true) {
      var virusRemoval2 = document.getElementById("virus-removal2").value + "<br>";
    } else {
      var virusRemoval2 = "";
    }
    if (document.getElementById("pc-setup2").checked == true) {
      var pcSetup2 = document.getElementById("pc-setup2").value + "<br>";
    } else {
      var pcSetup2 = "";
    }
    if (document.getElementById("printer-setup2").checked == true) {
      var printerSetup2 = document.getElementById("printer-setup2").value + "<br>";
    } else {
      var printerSetup2 = "";
    }
    if (document.getElementById("printer-maintenance2").checked == true) {
      var printerMaintenance2 = document.getElementById("printer-maintenance2").value + "<br>";
    } else {
      var printerMaintenance2 = "";
    }
    if (document.getElementById("comprehensive-diagnostic-repair2").checked == true) {
      var comprehensiveDiagnosticRepair2 = document.getElementById("comprehensive-diagnostic-repair2").value + "<br>";
    } else {
      var comprehensiveDiagnosticRepair2 = "";
    }
    if (document.getElementById("software-installation2").checked == true) {
      var softwareInstallation2 = document.getElementById("software-installation2").value + "<br>";
    } else {
      var softwareInstallation2 = "";
    }
    if (document.getElementById("other2").checked == true) {
      var otherOption2 = document.getElementById("other2").value + "<br>";
    } else {
      var otherOption2 = "";
    }
      document.getElementById("services-included2").innerHTML = "<br>" + virusRemoval2 + pcSetup2 + printerSetup2 + printerMaintenance2 + comprehensiveDiagnosticRepair2 + softwareInstallation2 + otherOption2;
      document.getElementById("hours-service2").innerHTML = hoursService2;



      document.getElementById("service-date-output3").innerHTML = ServiceDate3;
      if (document.getElementById("virus-removal3").checked == true) {
        var virusRemoval3 = document.getElementById("virus-removal3").value + "<br>";
      } else {
        var virusRemoval3 = "";
      }
      if (document.getElementById("pc-setup3").checked == true) {
        var pcSetup3 = document.getElementById("pc-setup3").value + "<br>";
      } else {
        var pcSetup3 = "";
      }
      if (document.getElementById("printer-setup3").checked == true) {
        var printerSetup3 = document.getElementById("printer-setup3").value + "<br>";
      } else {
        var printerSetup3 = "";
      }
      if (document.getElementById("printer-maintenance3").checked == true) {
        var printerMaintenance3 = document.getElementById("printer-maintenance3").value + "<br>";
      } else {
        var printerMaintenance3 = "";
      }
      if (document.getElementById("comprehensive-diagnostic-repair3").checked == true) {
        var comprehensiveDiagnosticRepair3 = document.getElementById("comprehensive-diagnostic-repair3").value + "<br>";
      } else {
        var comprehensiveDiagnosticRepair3 = "";
      }
      if (document.getElementById("software-installation3").checked == true) {
        var softwareInstallation3 = document.getElementById("software-installation3").value + "<br>";
      } else {
        var softwareInstallation3 = "";
      }
      if (document.getElementById("other3").checked == true) {
        var otherOption3 = document.getElementById("other3").value + "<br>";
      } else {
        var otherOption3 = "";
      }
        document.getElementById("services-included3").innerHTML = "<br>" + virusRemoval3 + pcSetup3 + printerSetup3 + printerMaintenance3 + comprehensiveDiagnosticRepair3 + softwareInstallation3 + otherOption3;
        document.getElementById("hours-service3").innerHTML = hoursService3;




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
