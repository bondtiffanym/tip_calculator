$(document).ready(function() {
  

    const tip20 = $('#tip20').click(function () {
        let bill = Number($('#bill-amount').val());
      let tip = (bill * 0.20);
      let total = (bill + tip);
      $('#tip').html('Tip: $' + Math.round(100*tip)/100);
      $('#total').html('Total: $' + Math.round(100*total)/100);
      console.log(tip, total, bill);
    });
    
    const tip15 = $('#tip15').click(function () {
        let bill = Number($('#bill-amount').val());
       let tip = (bill * 0.15);
      let total = (bill + tip);
      $('#tip').html('Tip: $' + Math.round(100*tip)/100);
      $('#total').html('Total: $' + Math.round(100*total)/100);
      console.log(tip, total, bill);
    });
  //closes document ready
  });
  