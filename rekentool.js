$('#formulier').change(function() {

  var soortopvang      = $('input[name="soortopvang"]:checked').val();
var tarief           = $('input[name="tarief"]:checked').val();

if (tarief ==undefined) 
  { 
    var tarief            = 1;
}
else {
  var tarief           = $('input[name="tarief"]:checked').val();
}

if (soortopvang == 'voorschoolse') 
      { 
    var aantal_voorschoolsedagen     = $('input[name="voorschoolsedagen"]:checkbox:checked').length;
    var voorschoolsedagen            = $('input[name="voorschoolsedagen"]:checked').map(function(_, voorschoolsedagen) {
      return $(voorschoolsedagen).val();
    }).get().join(', ');

    //$('#voorschoolse_opvang').show();
    //$('#naschoolse_opvang').hide();
    //$('#buitenschoolse_opvang').hide();
    //$('#vakantie_opvang').hide();
    //$('#dagopvang_opvang').hide();
    //$('#peuterspeelzaal_opvang').hide();


              if (tarief == 7.50) // Schoolse opvang zonder vakantie periode
              {
        var soortopvang				= ' VSO zonder vakantie opvang';		
                var uren                      = 2;
                var totaal_uren               = 1 * uren;
                var totaal_urenjaar           = totaal_uren * 40; 
                var totaal_urenmaand          = totaal_urenjaar / 12; 
                var totaal_urenmaand          = Math.ceil(totaal_urenmaand);
                var totaal                    = totaal_urenmaand * tarief*aantal_voorschoolsedagen;
        var totaal_urenmaaand			=  totaal_urenmaand*aantal_voorschoolsedagen;
        
      

              }
              else  // Schoolse opvang met vakantie periode
              {
        var soortopvang				= 'VSO geheel opvang met vakantieopvang'; 	
                var uren                      = 2;
                var totaal_uren               = 1 * uren;
                var totaal_urenjaar           = totaal_uren * 40; 
                var totaal_urenmaand          = totaal_urenjaar / 12; 
        var totaal_urenmaand		    = Math.ceil(totaal_urenmaand);
                var totaal                    = totaal_urenmaand * tarief;
        
          var vakantieuren              = 12;
                var totaal_vakantieuren       = 1 * vakantieuren;
                var totaal_vakantieurenjaar   = totaal_vakantieuren * 12; 
                var totaal_vakantieurenmaand  = totaal_vakantieurenjaar / 12; 
                var totaal_vakantieurenmaand  = Math.ceil(totaal_vakantieurenmaand);
                var totaal_vakantie           = totaal_vakantieurenmaand * tarief;

                var totaal                    = (totaal + totaal_vakantie)*aantal_voorschoolsedagen; 
                var totaal_urenmaand          = totaal_urenmaand + totaal_vakantieurenmaand;
                
        var totaal_urenmaaand			=  totaal_urenmaand*aantal_voorschoolsedagen;

       
              }

              var totaal_nieuw                 = totaal.toFixed(2);
              var dagen                       = voorschoolsedagen;


            }
            else if (soortopvang == 'naschoolse') 
            {
              var aantal_naschoolsedagen     = $('input[name="naschoolsedagen"]:checkbox:checked').length;
              var naschoolsedagen            = $('input[name="naschoolsedagen"]:checked').map(function(_, naschoolsedagen) {
                return $(naschoolsedagen).val();
              }).get().join(', ');
              //$('#voorschoolse_opvang').hide();
              //$('#naschoolse_opvang').show();
              //$('#buitenschoolse_opvang').hide();
              //$('#vakantie_opvang').hide();
              //$('#dagopvang_opvang').hide();
              //$('#peuterspeelzaal_opvang').hide();
              if (tarief == 7.50) // Schoolse opvang zonder vakantie periode
              {
        var soortopvang				= 'NSO zonder vakantie opvang';				
                var uren                      = 4.5;
        if (naschoolsedagen.indexOf("Woensdag") !=-1) {
                  //alert(naschoolsedagen)
                  var totaal_uren             = aantal_naschoolsedagen * uren + 2; // 2 uur voor woensdagmiddag
                }
                else
                {
                  var totaal_uren             = aantal_naschoolsedagen * uren;
                }
        //var totaal_uren               = 1 * uren;
                var totaal_urenjaar           = totaal_uren * 40; 
                var totaal_urenmaand          = totaal_urenjaar / 12; 
                var totaal_urenmaand          = Math.ceil(totaal_urenmaand);
                var totaal_urenmaaand          = totaal_urenmaand
                var totaal                    = totaal_urenmaand * tarief;

              }
              else  // Schoolse opvang met vakantie periode
              {
        var soortopvang				='NSO geheel opvang met vakantieopvang';
                var uren                      = 4.5;
        if (naschoolsedagen.indexOf("Woensdag") !=-1) {
                  //alert(naschoolsedagen)
                  var totaal_uren             = aantal_naschoolsedagen * uren + 2; // 2 uur voor woensdagmiddag
                }
                else
                {
                  var totaal_uren             = aantal_naschoolsedagen * uren;
                }
                //var totaal_uren             = 1 * uren;
                var totaal_urenjaar           = totaal_uren * 40;
                var totaal_urenmaand          = totaal_urenjaar / 12; 
                var totaal_urenmaand          = Math.ceil(totaal_urenmaand);
                var totaal                    = totaal_urenmaand * tarief;

                var vakantieuren              = 12;
                var totaal_vakantieuren       = aantal_naschoolsedagen * vakantieuren;
                var totaal_vakantieurenjaar   = totaal_vakantieuren * 12; 
                var totaal_vakantieurenmaand  = totaal_vakantieurenjaar / 12; 
                var totaal_vakantieurenmaand  = Math.ceil(totaal_vakantieurenmaand);
                var totaal_vakantie           = totaal_vakantieurenmaand * tarief;

                var totaal                    = (totaal + totaal_vakantie); 
                var totaal_urenmaand          = totaal_urenmaand + totaal_vakantieurenmaand;
                var totaal_urenmaaand          = totaal_urenmaand

              }
              var totaal_nieuw                = totaal.toFixed(2);
              var dagen                      = naschoolsedagen;
            }
            else if (soortopvang == 'buitenschoolse') 
            {
      
      var aantal_buitenschoolsedagen     = $('input[name="buitenschoolsedagen"]:checkbox:checked').length;
              var buitenschoolsedagen        = $('input[name="buitenschoolsedagen"]:checked').map(function(_, buitenschoolsedagen) {
                return $(buitenschoolsedagen).val();
              }).get().join(', ');
              //$('#voorschoolse_opvang').hide();
              //$('#naschoolse_opvang').hide();
              //$('#buitenschoolse_opvang').show();
              //$('#vakantie_opvang').hide();
              //$('#dagopvang_opvang').hide();
              //$('#peuterspeelzaal_opvang').hide();
          
      
              if (tarief == 6.75) // Schoolse opvang zonder vakantie periode
              {
        var soortopvang 				= 'BSO met vakantieopvang';	
                var uren                      = 7.15;
        if (buitenschoolsedagen.indexOf("Woensdag") !=-1) {
                  //alert(naschoolsedagen)
                  var totaal_uren             = 1 * uren + 2;
        var charaf                  = 20.25
        var ayoub=6
        // 2 uur voor woensdagmiddag
                }
                else
                {
                  var totaal_uren             = 1 * uren;
        var charaf =0
        var ayoub=0
        }
        var vakantieuren				= 12;
        var totaal_uren					= 1 * uren ;
        var totaal_urenjaarwelvakantie  =  1* vakantieuren ;
                var totaal_urenjaar             = totaal_uren * 40; 
                var totaal_urenmaandplusvakantie= totaal_urenjaar  + totaal_urenjaarwelvakantie;
        var totaal_urenmaand            = totaal_urenmaandplusvakantie / 12;	
                var totaal_urenmaand            = Math.ceil(totaal_urenmaand)+11;
                var totaaaal                    = totaal_urenmaand * tarief;
        var totaaal                     = totaaaal + charaf;
         var totaal                      = totaaal*aantal_buitenschoolsedagen;
                   var totaal_urenmaaand			=  totaal_urenmaand*aantal_buitenschoolsedagen+ayoub;

              }
              else if (tarief == 6.85)  // Schoolse opvang met vakantie periode
              {
        if (buitenschoolsedagen.indexOf("Woensdag") !=-1) {
        var ayoub=6;
        var charaf= 41.1;
                }
                else
                {
        var ayoub=0;
        var charaf=0;
        }
        
        var soortopvang				= 'BSO zonder vakantieopvang'; 	
                var uren                      = 7.5;
                var totaal_uren             	= 1 * uren;
                var totaal_urenjaar           = totaal_uren * 40;
                var totaal_urenmaand          = totaal_urenjaar / 12; 
                var totaal_urenmaand          = Math.ceil(totaal_urenmaand);
                var totaal                    = totaal_urenmaand * tarief* aantal_buitenschoolsedagen + charaf;
        
        var totaal_urenmaaand			= totaal_urenmaand*aantal_buitenschoolsedagen+ayoub;

                /*var vakantieuren              = 12;
                var totaal_vakantieuren       = aantal_buitenschoolsedagen  * vakantieuren;
                var totaal_vakantieurenjaar   = totaal_vakantieuren * 12; 
                var totaal_vakantieurenmaand  = totaal_vakantieurenjaar / 12; 
                var totaal_vakantieurenmaand  = Math.ceil(totaal_vakantieurenmaand);
                var totaal_vakantie           = totaal_vakantieurenmaand * tarief;


                var totaal                    = totaal + totaal_vakantie; 
                var totaal_urenmaand          = totaal_urenmaand + totaal_vakantieurenmaand;*/
                
              }
      
      else   // Schoolse opvang met vakantie periode
              {
        var soortopvang				= 'Alleen vakantieopvang'	
                var uren                      = 12;
            
                var totaal_uren             = 1 * uren;
                
        
                var totaal_urenjaar           = totaal_uren * 12;
                
                var totaal_urenmaand          = totaal_urenjaar / 12; 
                var totaal_urenmaand          = Math.ceil(totaal_urenmaand);
                var totaal                    = totaal_urenmaand * tarief *aantal_buitenschoolsedagen;
        var totaal_urenmaaand			= totaal_urenmaand*aantal_buitenschoolsedagen;

                /*var vakantieuren              = 12;
                var totaal_vakantieuren       = aantal_buitenschoolsedagen  * vakantieuren;
                var totaal_vakantieurenjaar   = totaal_vakantieuren * 12; 
                var totaal_vakantieurenmaand  = totaal_vakantieurenjaar / 12; 
                var totaal_vakantieurenmaand  = Math.ceil(totaal_vakantieurenmaand);
                var totaal_vakantie           = totaal_vakantieurenmaand * tarief;


                var totaal                    = totaal + totaal_vakantie; 
                var totaal_urenmaand          = totaal_urenmaand + totaal_vakantieurenmaand;*/
                
              }
              var totaal_nieuw                = totaal.toFixed(2);
              var dagen               		= buitenschoolsedagen;
              
              
             }
 
            
            else if (soortopvang == 'dagopvang') 
            {
              var aantal_dagopvangdagen     = $('input[name="dagopvangdagen"]:checkbox:checked').length;
              var dagopvangdagen            = $('input[name="dagopvangdagen"]:checked').map(function(_, dagopvangdagen) {
                return $(dagopvangdagen).val();
              }).get().join(', ');
              //$('#voorschoolse_opvang').hide();
              //$('#naschoolse_opvang').hide();
              //$('#buitenschoolse_opvang').hide();
              //$('#vakantie_opvang').hide();
              //$('#dagopvang_opvang').show();
              //$('#peuterspeelzaal_opvang').hide();
              if (tarief == 8.15) // Schoolse opvang zonder vakantie periode
              {
        var soortopvang				= 'KDV halve dagopvang (6 uur p/d)';	
                var uren                      = 6;
                var totaal_uren               = aantal_dagopvangdagen * uren;         
                var totaal_urenjaar           = totaal_uren * 52; 
                var totaal_urenmaand          = totaal_urenjaar / 12; 
                var totaal_urenmaand          = Math.ceil(totaal_urenmaand);
        var totaal_urenmaaand          = totaal_urenmaand
                var totaal                    = totaal_urenmaand * tarief;

              }
              else  // Schoolse opvang met vakantie periode
              {
        var soortopvang				= 'KDV hele dagopvang (12 uur p/d)';	
                var vakantieuren              = 12;
                var totaal_vakantieuren       = aantal_dagopvangdagen * vakantieuren;
                var totaal_uren               = aantal_dagopvangdagen * vakantieuren;
                var totaal_vakantieurenjaar   = totaal_vakantieuren * 52; 
                var totaal_vakantieurenmaand  = totaal_vakantieurenjaar / 12; 
                var totaal_vakantieurenmaand  = Math.ceil(totaal_vakantieurenmaand);
                var totaal                    = totaal_vakantieurenmaand * tarief;
                var totaal_urenmaand          = totaal_vakantieurenmaand;
        var totaal_urenmaaand          = totaal_urenmaand
                var soortopvang = 'KDV hele dagopvang (12 uur p/d)';
                
              }
              var totaal_nieuw                = totaal.toFixed(2);
              var dagen                      = dagopvangdagen;
            }
            else if (soortopvang == 'peuterspeelzaal') 
            {
              var aantal_peuterspeelzaaldagen     = $('input[name="peuterspeelzaaldagen"]:checkbox:checked').length;
              var peuterspeelzaaldagen            = $('input[name="peuterspeelzaaldagen"]:checked').map(function(_, peuterspeelzaaldagen) {
                return $(peuterspeelzaaldagen).val();
              }).get().join(', ');
              //$('#voorschoolse_opvang').hide();
              //$('#naschoolse_opvang').hide();
              //$('#buitenschoolse_opvang').hide();
              //$('#vakantie_opvang').hide();
              //$('#dagopvang_opvang').hide();
              //$('#peuterspeelzaal_opvang').show();
              var uren                      = 6;
              var totaal_uren               = aantal_peuterspeelzaaldagen * uren;
              var totaal_urenjaar           = totaal_uren * 40; 
              var totaal_urenmaand          = totaal_urenjaar / 12; 
              var totaal_urenmaand          = Math.ceil(totaal_urenmaand);
              var totaal                    = totaal_urenmaaand * tarief;
              var totaal_nieuw               = totaal.toFixed(2);
              var dagen                     = peuterspeelzaaldagen;
            }



            $( "div#soortopvang" ).html( soortopvang );
            $( "div#soorttarief" ).html( '&euro; ' + tarief );
            $( "div#totaal_uren_week" ).html( totaal_uren.toFixed(2) + ' per week' );
            $( "div#totaal_uren_maand" ).html( totaal_urenmaaand  + ' per maand' );
            $( "div#totaal_prijs").html( '&euro; ' + totaal_nieuw + ' per maand');
            if (tarief != '' &&  soortopvang != '' ) {
              $( "div#totaal" ).html( '<span class="label label-danger"  title="Check"><b>&euro;</b> '+ totaal_nieuw +' </span> ' );
              $( "div#button-wrapper").html( '<button class="btn btn-primary">Verzenden</button> ' );
              $( "div#dagen" ).html( dagen );
              $( "div#input_soortopvang" ).html(soortopvang);
              $( "div#input_tarief" ).html(tarief);
              $( "div#input_totaal" ).html(totaal_nieuw);
              $( "div#input_totaal_uren_week" ).html(totaal_uren);
              $( "div#input_totaal_uren_maand" ).html(totaal_urenmaand);
              $( "div#input_dagen" ).html(dagen);
              $("#input_dagen").val(dagen);
              $("#input_soortopvang").val(soortopvang);
              $("#input_tarief").val(tarief);
              $("#input_totaal").val(totaal_nieuw);
              $("#input_totaal_uren_week").val(totaal_uren);
              $("#input_totaal_uren_maand").val(totaal_urenmaand);
              $("#input_dagen").val(dagen);
            }
            else
            {
              $( "div#button-wrapper").html( '<div class="alert alert-error">U dient eerst de prijs van uw offerte te berekenen voordat u een offerte kunt aanvragen!</div>' );
            }

          });


          
    
