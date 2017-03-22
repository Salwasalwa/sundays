jQuery(document).ready(function($) {

      $('#myCarousel').carousel({
              interval: 5000
      });

      $('#carousel-text').html($('#slide-content-0').html());

      //Handles the carousel thumbnails
     $('[id^=carousel-selector-]').click( function(){
          var id = this.id.substr(this.id.lastIndexOf("-") + 1);
          var id = parseInt(id);
          $('#myCarousel').carousel(id);
      });


      // When the carousel slides, auto update the text
      $('#myCarousel').on('slid.bs.carousel', function (e) {
               var id = $('.item.active').data('slide-number');
              $('#carousel-text').html($('#slide-content-'+id).html());
      });

      $('#contactForm').bootstrapValidator({
          container: '#messages',
          feedbackIcons: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
          },
          fields: {
              fullName: {
                  validators: {
                      notEmpty: {
                          message: 'The full name is required and cannot be empty'
                      },
                      stringLength: {
                          min: 5,
                          message: 'le nom doit avoir au moins 5 caractères'
                      }
                  }
              },
              email: {
                  validators: {
                      notEmpty: {
                          message: 'The email address is required and cannot be empty'
                      },
                      emailAddress: {
                          message: 'The email address is not valid'
                      }
                  }
              },
              title: {
                  validators: {
                      notEmpty: {
                          message: 'The title is required and cannot be empty'
                      },
                      stringLength: {
                          max: 100,
                          message: 'The title must be less than 100 characters long'
                      }
                  }
              },
              content: {
                  validators: {
                      notEmpty: {
                          message: 'The content is required and cannot be empty'
                      },
                      stringLength: {
                          max: 500,
                          message: 'The content must be less than 500 characters long'
                      }
                  }
              }
          }
      });

      "use strict";
      var options = {};
      options.ui = {
          container: "#pwd-container",
          showVerdictsInsideProgressBar: true,
          viewports: {
              progress: ".progress_meter"
          }
      };
      $('#password').pwstrength(options);
});
