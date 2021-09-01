/*Uitleg rekentool mijn-kinderopvang.nl

/// Doel: afhangkelijk van het soort opvang, gekozen tarief en aantal dagen, reken hiervan de kosten per maand uit!!

 - Men kies een soort opvang.
 - de gebruiker heeft bij elke soort opvang keuze uit verschillende opties/tarieven.
 - Elke soort tarief verschilt in aantal uren per dag, en dus ook per maand.
 - **bij buitenschoolse opvang zijn er 9 uren op de woensdag
- **bij naschoolse opvang zijn er 9 uren op de woensdag

- maand kosten worden afgerond op 0,01

variabelen Strings:
    - soort_opvang          =   {gekozen opvang};
    - uur_string_prijs      =   {gekozen uur prijs}
    - dag_naam              =   {gekozen dag};
    - [dag_namen:cheked()]  =   [dag_naam, dag_naam, dag_naam];



variabelen numbers:
    - uur_value_prijs       =   {value uur prijs} per (soort_opvang);
    - maand_uren_dag        =   totale uren per gekozen dag;
    - maand_tarief_per_dag  =   uur_prijs * (maand_uren_dag);
    - [dagen_uren_totaal]   =   [ maand_tarief_per_dag, maand_tarief_per_dag, maand_tarief_per_dag.... ];
    - [maand_totaal_uren]   =   sum[maand_uren_dag, maand_uren_dag, maand_uren_dag....]
    - maand_totaal_bedrag   =   sum[dagen_totaal];          

*/

// variables

var soortopvang;
var tarief = '0';
var tarief_val_1;
var tarief_val_2;
var weekdag;
var dag_uren;

// attribute waarde dag-uren
var maandag_check = $("input[value='maandag']");
var dinsdag_check = $("input[value='dinsdag']");
var woensdag_check = $("input[value='woensdag']");
var donderdag_check = $("input[value='donderdag']");
var vrijdag_check = $("input[value='vrijdag']");

//console.log(dinsdag_check);


// arrays
let selected_weekdagen = [];
let selected_uren = [];
let totaal_kosten = [];
//let sum                 = 0;          

//soort opvang objecten

//--------- object voorschoolse ---------------------------------------------------------------------

let voorschoolse_opvang = {
    naam: "voorschoolse",
    tarief_1:
    {
        tarief: '7.50',
        descrp: "VSO zonder vakantie opvang",
        maandag_uren: "6.67",
        dinsdag_uren: "6.67",
        woensdag_uren: "6.67",
        donderdag_uren: "6.67",
        vrijdag_uren: "6.67",

    },

    tarief_2:
    {
        tarief: '7.15',
        descrp: "VSO geheel opvang met vakantieopvang",
        maandag_uren: "18.67",
        dinsdag_uren: "18.67",
        woensdag_uren: "18.67",
        donderdag_uren: "18.67",
        vrijdag_uren: "18.67",
    },

    opvang_checker: function () {
        //if(soortopvang == this.naam){
        //console.log(this.naam + ' is geselecteerd');
        // dinsdag_check.attr("dag-uren",this.tarief_1.dinsdag_uren);
        $("#derde").hide();
        //tarief veranderen:
        $('#radio_1').val(voorschoolse_opvang.tarief_1.tarief);
        $('#radio_2').val(voorschoolse_opvang.tarief_2.tarief);


        $('.uur-tarief-1-html').html(voorschoolse_opvang.tarief_1.tarief);
        $('.uur-tarief-2-html').html(voorschoolse_opvang.tarief_2.tarief);
        //slogan veranderen:
        $('.uur-descrp-1').html(voorschoolse_opvang.tarief_1.descrp);
        $('.uur-descrp-2').html(voorschoolse_opvang.tarief_2.descrp);


        //}
    },

    tarief_checker: function () {
        $(".tarief-select").click(function () {
            if ($("#radio_1").is(':checked')) {

                tarief = $('#radio_1').val();
                console.log(tarief);

                //alle checks en arrays leegmaken
                $(".checks").prop("checked", false);
                selected_weekdagen.splice(0, selected_weekdagen.length);
                selected_uren.splice(0, selected_uren.length);

                // dag uren veranderen
                maandag_check.attr("dag-uren", voorschoolse_opvang.tarief_1.maandag_uren);
                dinsdag_check.attr("dag-uren", voorschoolse_opvang.tarief_1.dinsdag_uren);
                woensdag_check.attr("dag-uren", voorschoolse_opvang.tarief_1.woensdag_uren);
                donderdag_check.attr("dag-uren", voorschoolse_opvang.tarief_1.donderdag_uren);
                vrijdag_check.attr("dag-uren", voorschoolse_opvang.tarief_1.vrijdag_uren);

            } else if ($("#radio_2").is(':checked')) {
                tarief = $('#radio_2').val();
                console.log(tarief);
                //alle checks en arrays leegmaken
                $(".checks").prop("checked", false);
                selected_weekdagen.splice(0, selected_weekdagen.length);
                selected_uren.splice(0, selected_uren.length);


                // dag uren veranderen
                maandag_check.attr("dag-uren", voorschoolse_opvang.tarief_2.maandag_uren);
                dinsdag_check.attr("dag-uren", voorschoolse_opvang.tarief_2.dinsdag_uren);
                woensdag_check.attr("dag-uren", voorschoolse_opvang.tarief_2.woensdag_uren);
                donderdag_check.attr("dag-uren", voorschoolse_opvang.tarief_2.donderdag_uren);
                vrijdag_check.attr("dag-uren", voorschoolse_opvang.tarief_2.vrijdag_uren);

            } else {
                //$(".tariefs").prop("checked", false);
            }

        });

    }
};
//--------------------------------------------------------------------

//--------- object naschoolse ---------------------------------------------------------------------

let naschoolse_opvang = {
    naam: "naschoolse",
    tarief_1:
    {
        tarief: '7.50',
        descrp: "NSO zonder vakantie opvang",
        maandag_uren: "16.67",
        dinsdag_uren: "16.67",
        woensdag_uren: "23.33",
        donderdag_uren: "16.67",
        vrijdag_uren: "16.67",

    },

    tarief_2:
    {
        tarief: '7.15',
        descrp: "NSO geheel opvang met vakantieopvang",
        maandag_uren: "28.67",
        dinsdag_uren: "28.67",
        woensdag_uren: "35.33",
        donderdag_uren: "28.67",
        vrijdag_uren: "28.67",
    },

    opvang_checker: function () {
        //if(soortopvang == this.naam){
        //console.log(this.naam + ' is geselecteerd');
        // dinsdag_check.attr("dag-uren",this.tarief_1.dinsdag_uren);
        $("#derde").hide();
        //tarief veranderen:
        $('#radio_1').val(naschoolse_opvang.tarief_1.tarief);
        $('#radio_2').val(naschoolse_opvang.tarief_2.tarief);

        $('.uur-tarief-1-html').html(naschoolse_opvang.tarief_1.tarief);
        $('.uur-tarief-2-html').html(naschoolse_opvang.tarief_2.tarief);
        //slogan veranderen:
        $('.uur-descrp-1').html(naschoolse_opvang.tarief_1.descrp);
        $('.uur-descrp-2').html(naschoolse_opvang.tarief_2.descrp);


        //}
    },

    tarief_checker: function () {
        $(".tarief-select").click(function () {
            if ($("#radio_1").is(':checked')) {

                tarief = $('#radio_1').val();
                console.log(tarief);
                //alle checks en arrays leegmaken
                $(".checks").prop("checked", false);
                selected_weekdagen.splice(0, selected_weekdagen.length);
                selected_uren.splice(0, selected_uren.length);


                // dag uren veranderen
                maandag_check.attr("dag-uren", naschoolse_opvang.tarief_1.maandag_uren);
                dinsdag_check.attr("dag-uren", naschoolse_opvang.tarief_1.dinsdag_uren);
                woensdag_check.attr("dag-uren", naschoolse_opvang.tarief_1.woensdag_uren);
                donderdag_check.attr("dag-uren", naschoolse_opvang.tarief_1.donderdag_uren);
                vrijdag_check.attr("dag-uren", naschoolse_opvang.tarief_1.vrijdag_uren);

            } else if ($("#radio_2").is(':checked')) {
                tarief = $('#radio_2').val();
                console.log(tarief);
                //alle checks en arrays leegmaken
                $(".checks").prop("checked", false);
                selected_weekdagen.splice(0, selected_weekdagen.length);
                selected_uren.splice(0, selected_uren.length);



                // dag uren veranderen
                maandag_check.attr("dag-uren", naschoolse_opvang.tarief_2.maandag_uren);
                dinsdag_check.attr("dag-uren", naschoolse_opvang.tarief_2.dinsdag_uren);
                woensdag_check.attr("dag-uren", naschoolse_opvang.tarief_2.woensdag_uren);
                donderdag_check.attr("dag-uren", naschoolse_opvang.tarief_2.donderdag_uren);
                vrijdag_check.attr("dag-uren", naschoolse_opvang.tarief_2.vrijdag_uren);

            } else {
                //$(".tariefs").prop("checked", false);
            }

        });

    }
};
//--------------------------------------------------------------------


//--------- object buitenschoolse ---------------------------------------------------------------------

let buitenschoolse_opvang = {
    naam: "buitenschoolse",
    tarief_1:
    {
        tarief: '7.15',
        descrp: "BSO met vakantieopvang",
        maandag_uren: "35.33",
        dinsdag_uren: "35.33",
        woensdag_uren: "42",
        donderdag_uren: "35.33",
        vrijdag_uren: "35.33",

    },

    tarief_2:
    {
        tarief: '7.50',
        descrp: "BSO zonder vakantieopvang",
        maandag_uren: "23.33",
        dinsdag_uren: "23.33",
        woensdag_uren: "30",
        donderdag_uren: "23.33",
        vrijdag_uren: "23.33",
    },

    tarief_3:
    {
        tarief: '8.00',
        descrp: "Alleen vakantieopvang",
        maandag_uren: "12",
        dinsdag_uren: "12",
        woensdag_uren: "12",
        donderdag_uren: "12",
        vrijdag_uren: "12",
    },

    opvang_checker: function () {
        //if(soortopvang == this.naam){
        //console.log(this.naam + ' is geselecteerd');
        // dinsdag_check.attr("dag-uren",this.tarief_1.dinsdag_uren);
        $("#derde").show();
        //tarief veranderen:
        $('#radio_1').val(buitenschoolse_opvang.tarief_1.tarief);
        $('#radio_2').val(buitenschoolse_opvang.tarief_2.tarief);
        $('#radio_3').val(buitenschoolse_opvang.tarief_3.tarief);


        $('.uur-tarief-1-html').html(buitenschoolse_opvang.tarief_1.tarief);
        $('.uur-tarief-2-html').html(buitenschoolse_opvang.tarief_2.tarief);
        $('.uur-tarief-3-html').html(buitenschoolse_opvang.tarief_3.tarief);
        //slogan veranderen:
        $('.uur-descrp-1').html(buitenschoolse_opvang.tarief_1.descrp);
        $('.uur-descrp-2').html(buitenschoolse_opvang.tarief_2.descrp);
        $('.uur-descrp-3').html(buitenschoolse_opvang.tarief_3.descrp);


        //}
    },

    tarief_checker: function () {
        $(".tarief-select").click(function () {
            if ($("#radio_1").is(':checked')) {

                tarief = $('#radio_1').val();
                console.log(tarief);
                //alle checks en arrays leegmaken
                $(".checks").prop("checked", false);
                selected_weekdagen.splice(0, selected_weekdagen.length);
                selected_uren.splice(0, selected_uren.length);


                // dag uren veranderen
                maandag_check.attr("dag-uren", buitenschoolse_opvang.tarief_1.maandag_uren);
                dinsdag_check.attr("dag-uren", buitenschoolse_opvang.tarief_1.dinsdag_uren);
                woensdag_check.attr("dag-uren", buitenschoolse_opvang.tarief_1.woensdag_uren);
                donderdag_check.attr("dag-uren", buitenschoolse_opvang.tarief_1.donderdag_uren);
                vrijdag_check.attr("dag-uren", buitenschoolse_opvang.tarief_1.vrijdag_uren);

            } else if ($("#radio_2").is(':checked')) {
                tarief = $('#radio_2').val();
                console.log(tarief);
                //alle checks en arrays leegmaken
                $(".checks").prop("checked", false);
                selected_weekdagen.splice(0, selected_weekdagen.length);
                selected_uren.splice(0, selected_uren.length);



                // dag uren veranderen
                maandag_check.attr("dag-uren", buitenschoolse_opvang.tarief_2.maandag_uren);
                dinsdag_check.attr("dag-uren", buitenschoolse_opvang.tarief_2.dinsdag_uren);
                woensdag_check.attr("dag-uren", buitenschoolse_opvang.tarief_2.woensdag_uren);
                donderdag_check.attr("dag-uren", buitenschoolse_opvang.tarief_2.donderdag_uren);
                vrijdag_check.attr("dag-uren", buitenschoolse_opvang.tarief_2.vrijdag_uren);

            } else if ($("#radio_3").is(':checked')) {
                tarief = $('#radio_3').val();
                console.log(tarief);
                //alle checks en arrays leegmaken
                $(".checks").prop("checked", false);
                selected_weekdagen.splice(0, selected_weekdagen.length);
                selected_uren.splice(0, selected_uren.length);



                // dag uren veranderen
                maandag_check.attr("dag-uren", buitenschoolse_opvang.tarief_3.maandag_uren);
                dinsdag_check.attr("dag-uren", buitenschoolse_opvang.tarief_3.dinsdag_uren);
                woensdag_check.attr("dag-uren", buitenschoolse_opvang.tarief_3.woensdag_uren);
                donderdag_check.attr("dag-uren", buitenschoolse_opvang.tarief_3.donderdag_uren);
                vrijdag_check.attr("dag-uren", buitenschoolse_opvang.tarief_3.vrijdag_uren);
            }

        });

    }
};
//--------------------------------------------------------------------

//--------- object Dag opvang ---------------------------------------------------------------------

let dag_opvang = {
    naam: "dag",
    tarief_1:
    {
        tarief: '8.35',
        descrp: "KDV halve dagopvang (6 uur p/d)",
        maandag_uren: "26",
        dinsdag_uren: "26",
        woensdag_uren: "26",
        donderdag_uren: "26",
        vrijdag_uren: "26",

    },

    tarief_2:
    {
        tarief: '8.15',
        descrp: "KDV hele dagopvang (12 uur p/d",
        maandag_uren: "52",
        dinsdag_uren: "52",
        woensdag_uren: "52",
        donderdag_uren: "52",
        vrijdag_uren: "52",
    },

    opvang_checker: function () {
        //if(soortopvang == this.naam){
        //console.log(this.naam + ' is geselecteerd');
        // dinsdag_check.attr("dag-uren",this.tarief_1.dinsdag_uren);
        $("#derde").hide();
        //tarief veranderen:
        $('#radio_1').val(dag_opvang.tarief_1.tarief);
        $('#radio_2').val(dag_opvang.tarief_2.tarief);

        $('.uur-tarief-1-html').html(dag_opvang.tarief_1.tarief);
        $('.uur-tarief-2-html').html(dag_opvang.tarief_2.tarief);
        //slogan veranderen:
        $('.uur-descrp-1').html(dag_opvang.tarief_1.descrp);
        $('.uur-descrp-2').html(dag_opvang.tarief_2.descrp);


        //}
    },

    tarief_checker: function () {
        $(".tarief-select").click(function () {
            if ($("#radio_1").is(':checked')) {
                tarief = $('#radio_1').val();
                console.log(tarief);
                //console.log("eerste tarief is geselecteerd");
                //alle checks en arrays leegmaken
                $(".checks").prop("checked", false);
                selected_weekdagen.splice(0, selected_weekdagen.length);
                selected_uren.splice(0, selected_uren.length);


                // dag uren veranderen
                maandag_check.attr("dag-uren", dag_opvang.tarief_1.maandag_uren);
                dinsdag_check.attr("dag-uren", dag_opvang.tarief_1.dinsdag_uren);
                woensdag_check.attr("dag-uren", dag_opvang.tarief_1.woensdag_uren);
                donderdag_check.attr("dag-uren", dag_opvang.tarief_1.donderdag_uren);
                vrijdag_check.attr("dag-uren", dag_opvang.tarief_1.vrijdag_uren);

            } else if ($("#radio_2").is(':checked')) {
                tarief = $('#radio_2').val();
                console.log(tarief);
                //console.log("tweede tarief is geselecteerd");
                //alle checks en arrays leegmaken
                $(".checks").prop("checked", false);
                selected_weekdagen.splice(0, selected_weekdagen.length);
                selected_uren.splice(0, selected_uren.length);



                // dag uren veranderen
                maandag_check.attr("dag-uren", dag_opvang.tarief_2.maandag_uren);
                dinsdag_check.attr("dag-uren", dag_opvang.tarief_2.dinsdag_uren);
                woensdag_check.attr("dag-uren", dag_opvang.tarief_2.woensdag_uren);
                donderdag_check.attr("dag-uren", dag_opvang.tarief_2.donderdag_uren);
                vrijdag_check.attr("dag-uren", dag_opvang.tarief_2.vrijdag_uren);

            } else {
                //$(".tariefs").prop("checked", false);
            }

        });

    }
};
//--------------------------------------------------------------------



let all_opvangs = [
    voorschoolse_opvang,
    naschoolse_opvang,
    buitenschoolse_opvang,
    dag_opvang,
];

//--------------------------------------------------------------------

// formulier verandering

$('#formulier').change(function () {
    soortopvang = $('input[name="soort_opvang"]:checked').val();
    soorttarief = $('input[name="tarief"]:checked').val();
    tarief_val = $('input[name="tarief"]');
    // weekdag         = $('input[name="dag"]:checked').val();


});



// check welke opvang gekozen is---------------------------
//---------------------------------------------------------

$(".opvang-select").on('change', 'input[type=radio]', function () {
    soortopvang = $(this).val();


    //console.log(soortopvang);

    for (let i = 0; i < all_opvangs.length; i++) {
        if (soortopvang == all_opvangs[i].naam) {
            console.log(all_opvangs[i].naam + ' is geselecteerd')
            all_opvangs[i].opvang_checker();
            all_opvangs[i].tarief_checker();
            $(".overzicht_opvang_txt").html(soortopvang);
        }
    }

    /* for (let prop in all_opvangs) {
        console.log(prop);
       
        if (soortopvang == prop.naam) {
            console.log('objecten gevonden');
            /*
            console.log(prop.naam + ' object is geselecteerd');
            prop.opvang_checker();
            prop.tarief_checker();
            
        };
        
    };*/



    //bij nieuwe selectie, alle checks leeg maken

    $(".checks").prop("checked", false);
    $(".radio_tarief").prop("checked", false);
    selected_weekdagen.splice(0, selected_weekdagen.length);
    selected_uren.splice(0, selected_uren.length);
    $(".overzicht_dagen").html("Welke dagen??");
    tarief = '0';


    //values veranderen
    //voorschoolse_opvang.checker();

    //if(soortopvang == 'dag_opvang'){
    // console.log('deze');
    //soorttarief.val();
    //$(".uur_tarief_html").html("200");
    //}

});

//----------------------------------------------------------

// check welke tarief gekozen is
/*
$(".tarieven").on('change', 'input[type=radio]', function () {
    tarief = $(this).val();
    console.log(tarief);

});
*/
//voorschoolse_opvang.tarief_checker(); 




//----------------------------------------------------------

// check welke dag gekozen is


$(".dagen").on('change', 'input[type=checkbox]', function () {
    weekdag = $(this).val();
    dag_uren = $(this).attr("dag-uren");

    var index = selected_weekdagen.indexOf(weekdag);
    var index2 = selected_uren.indexOf(dag_uren);


    if ($(this).is(':checked')) {
        selected_weekdagen.push(weekdag);
        selected_uren.push(dag_uren);
    }
    else {
        if (index > -1) {
            selected_weekdagen.splice(index, 1);
            selected_uren.splice(index2, 1);
        }
    }
    console.log(selected_weekdagen);
    console.log(selected_uren);

});

//----------------------------------------------------------


// berekenen



