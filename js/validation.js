// jquery payment

// $(function() {
//
//     console.log("anthony");
//     $('[data-stripe="number"]').payment('formatCardNumber');
//     $('[data-stripe="cvc"]').payment('formatCardCVC');
//
//     $.fn.toggleInputError = function(erred) {
//       this.parent('.form-group').toggleClass('has-error', erred);
//       return this;
//     };
//     $('form').submit((e) => {
//       e.preventDefault();
//       console.log("anthony");
//       // Format card expiration date.
//       var expiry = '[data-stripe="exp_month"]'.val() + '/' + $('[data-stripe="exp_year"]').val()
//       const cardType = $.payment.cardType($('[data-stripe="number"]').val());
//       $('.cc-number').toggleInputError(!$.payment.validateCardNumber($('[data-stripe="number"]').val()));
//       $('.cc-exp').toggleInputError(!$.payment.validateCardExpiry(expiry.payment('cardExpiryVal')));
//       $('.cc-cvc').toggleInputError(!$.payment.validateCardCVC($('[data-stripe="cvc"]').val(), cardType));
//       $('.cc-brand').text(cardType);
//       $('.validation').removeClass('text-danger text-success');
//       $('.validation').addClass($('.has-error').length ? 'text-danger' : 'text-success');
//     });
//
// });
