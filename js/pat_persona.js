    function yearinput() {
        var yearvalue = document.getElementById("year").value;
        document.getElementById("yearoutput").innerHTML = yearvalue;
    }
    function empinput() {
        var empvalue = document.getElementById("emp").value;
        document.getElementById("empoutput").innerHTML = empvalue;
    }
     function placeinput() {
        var placevalue = document.getElementById("place").value;
        document.getElementById("placeoutput").innerHTML =placevalue;
    }

    function paraone() {
        var para =document.getElementById("Para1").value;
        document.getElementById("para1output").innerHTML = para;
    }

    function paratwo() {
        var para2 =document.getElementById("Para2").value;
        document.getElementById("para2output").innerHTML = para2;
    }

    function backparaoneip() {
        var back1 =document.getElementById("backparaone").value;
        document.getElementById("backparaoneop").innerHTML = back1;
    }

     function backparaoneoneip() {
        var back1 =document.getElementById("backparaoneone").value;
        document.getElementById("backparaoneoneop").innerHTML = back1;
    }

     function backparaonetwoip() {
        var back1 =document.getElementById("backparaonetwo").value;
        document.getElementById("backparaonetwoop").innerHTML = back1;
    }

    function backparatwoip() {
        var back2 =document.getElementById("backparatwo").value;
        document.getElementById("backparatwoop").innerHTML = back2;
    }

    function backparathreeip() {
        var back3 =document.getElementById("backparathree").value;
        document.getElementById("backparathreeop").innerHTML = back3;
    }

    function backparafourip() {
        var back4 =document.getElementById("backparafour").value;
        document.getElementById("backparafourop").innerHTML = back4;
    }

     function backparafourtwoip() {
        var back4 =document.getElementById("backparafourtwo").value;
        document.getElementById("backparafourtwoop").innerHTML = back4;
    }

    function backparafiveip() {
        var back5 =document.getElementById("backparafive").value;
        document.getElementById("backparafiveop").innerHTML = back5;
    }

    function Noune() {
        var str =document.getElementById("Nouneip").value;
        var noun = str.toLowerCase();
      

        if (noun == "")
         {
           alert("Oops! did you forget to enter a Subjective Pronouns?");
           return false;
          }
        document.getElementById("Nouneopmo").innerHTML = noun;
        document.getElementById("Nouneopmo2").innerHTML = noun;
        document.getElementById("Nouneopmo3").innerHTML = noun;
        document.getElementById("Nouneopmo4").innerHTML = noun;
        document.getElementById("Nouneopmo5").innerHTML = noun;
        document.getElementById("Nouneopmo6").innerHTML = noun;
        document.getElementById("Nouneopmo7").innerHTML = noun;
        document.getElementById("Nouneopmo8").innerHTML = noun;
        document.getElementById("Nouneopmo9").innerHTML = noun;
        document.getElementById("Nouneopmo10").innerHTML = noun;
        document.getElementById("Nouneopmo11").innerHTML = noun;
        document.getElementById("Nouneopmo12").innerHTML = noun;
        document.getElementById("Nouneopmo13").innerHTML = noun;
        document.getElementById("Nouneopmo14").innerHTML = noun;
        document.getElementById("Nouneopmo15").innerHTML = noun;
        document.getElementById("Nouneopmo16").innerHTML = noun;
        document.getElementById("Nouneopmo17").innerHTML = noun;
        document.getElementById("Nouneopmo18").innerHTML = noun;
        document.getElementById("Nouneopmo19").innerHTML = noun;
        document.getElementById("Nouneopmo20").innerHTML = noun;
        document.getElementById("Nouneopmo21").innerHTML = noun;
        document.getElementById("Nouneopmo22").innerHTML = noun;
        document.getElementById("Nouneopmo23").innerHTML = noun;
        document.getElementById("Nouneopmo24").innerHTML = noun;
        document.getElementById("Nouneopmo25").innerHTML = noun;
        document.getElementById("Nouneopmo26").innerHTML = noun;
        document.getElementById("Nouneopmo27").innerHTML = noun;
        document.getElementById("Nouneopmo28").innerHTML = noun;
        document.getElementById("Nouneopmo29").innerHTML = noun;
        document.getElementById("Nouneopmo30").innerHTML = noun;
        document.getElementById("Nouneopmo31").innerHTML = noun;
    


    }

      function objpro() {
        var str1 =document.getElementById("Object").value;
        var obpr = str1.toLowerCase();
        if (obpr == "")
         {
           alert("Oops! did you forget to enter an Object Pronouns?");
           return false;
          }
        document.getElementById("objpro").innerHTML = obpr;
        document.getElementById("objpro2").innerHTML = obpr;
        document.getElementById("objpro3").innerHTML = obpr;
        document.getElementById("objpro4").innerHTML = obpr;
        document.getElementById("objpro5").innerHTML = obpr;
    }

      function possadj() {
        var str2 =document.getElementById("Pos.adj").value;
        var poad = str2.toLowerCase();
        if (poad == "")
         {
           alert("Oops! did you forget to enter a Possessive Adjective?");
           return false;
          }
        document.getElementById("Posadj1").innerHTML = poad;
        document.getElementById("Posadj2").innerHTML = poad;
        document.getElementById("Posadj3").innerHTML = poad;
        document.getElementById("Posadj4").innerHTML = poad;
        document.getElementById("Posadj5").innerHTML = poad;
        document.getElementById("Posadj6").innerHTML = poad;
        document.getElementById("Posadj7").innerHTML = poad;
        document.getElementById("Posadj8").innerHTML = poad;
        document.getElementById("Posadj9").innerHTML = poad;
    }

      function posspro() {
        var popro =document.getElementById("poss.Noune").value;
        if (popro == "")
         {
           alert("Oops! did you forget to enter a Possessive Pronouns?");
           return false;
          }
         document.getElementById("pospro1").innerHTML = popro;
    }

      function Reflexive() {
        var str3 =document.getElementById("ref").value;
        var refl = str3.toLowerCase();
        if (refl == "")
         {
           alert("Oops! did you forget to enter a Reflexive?");
           return false;
          }
        document.getElementById("Reflexive").innerHTML = refl;
    }

       function printDiv(divName){
            var printContents = document.getElementById(divName).innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            return false;   
            document.body.innerHTML = originalContents;
        }

      function reloadtext() {
          location.reload();
     }  

