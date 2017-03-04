Stripe.setPublishableKey('pk_test_SnAomBGCzAIo2GOqRokjIjHw');
$(function() {
  $('[data-stripe="card_number"]').payment('formatCardNumber');
  $('[data-stripe="cvc"]').payment('formatCardCVC');
  $('[data-stripe="expiry"]').payment('formatCardExpiry');

  $.fn.toggleInputError = function(erred) {
    this.parent('.form-group').toggleClass('has-error', erred);
    return this;
  };

  $('#payment-form').on('submit', function(e) {
    e.preventDefault();
    // Stop multiple form submissions while current form is in flight.
    $('#payment-form').find('.submit-button').prop('disabled', true);

    // Grab and format the Card information.
    var cardInfo = formatCardInfo();

    // Determine cardType
    var cardType = $.payment.cardType(cardInfo.number);

    // Check the input of the following fields to ensure they're formatted correctly.
    $('.card-number').toggleInputError(!$.payment.validateCardNumber(cardInfo.number));
    $('.card-expiry').toggleInputError(!$.payment.validateCardExpiry($('[data-stripe="expiry"]').val()));
    $('.card-cvc').toggleInputError(!$.payment.validateCardCVC(cardInfo.cvc, cardType));

    // Show payments errors if applicable. Not sure if this is implemented on the page.
    $('.payment-errors').removeClass('text-danger text-success');
    $('.payment-errors').addClass($('.has-error').length ? 'text-danger' : 'text-success');

    // Make a request to create a stripe token.
    const $form = $('#payment-form');
    $form.append('<input type="hidden" name="name" value="' + $('.donor_name').val() + '"/>');
    $form.append('<input type="hidden" name="message" value="' + $('.donor_message').val() + '"/>');
    $form.append('<input type="hidden" name="amount" value="' + $('.donor_amount').val() + '"/>');
    Stripe.card.createToken(cardInfo, stripeResponseHandler);

    // Return false so it doesn't submit the form until we want it too.
    return false;
  });
});

function stripeResponseHandler(status, response) {
  if (response.error) {
    // This means we were unable to charge the card, or some information was incorrect.
    // Show the error, and reactivate the submit button
    $('#charge-error').show();
    $('.payment-errors').text(response.error.message);
    $('.submit-button').removeAttr('disabled');
  } else {
    // card verification was successful, add the token to the request, and submit the form.
    const $form = $('#payment-form');
    const token = response.id;
    $form.append('<input type="hidden" name="stripeToken" value="' + token + '"/>');
    $form.get(0).submit();
  }
}

function formatCardInfo() {
  var cardInfo = {};
  cardInfo['name'] = $('.donor_name').val();
  cardInfo['number'] = $('[data-stripe="card_number"]').val();
  cardInfo['exp_month'] = $('[data-stripe="expiry"]').val().split('/')[0].trim(),
  cardInfo['exp_year'] = $('[data-stripe="expiry"]').val().split('/')[1].trim(),
  cardInfo['cvc'] = $('[data-stripe="cvc"]').val();
  cardInfo['address_zip'] = $('[data-stripe="address_zip"]').val();

  return cardInfo;
}
