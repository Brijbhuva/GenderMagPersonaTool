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
        document.getElementById("Nouneopcs").innerHTML = noun;
        document.getElementById("Nouneopcs1").innerHTML = noun;
        document.getElementById("Nouneopar").innerHTML = noun;
        document.getElementById("Nouneopar1").innerHTML = noun;
        document.getElementById("Nouneopar2").innerHTML = noun;
        document.getElementById("Nouneopar3").innerHTML = noun;
        document.getElementById("Nouneopip").innerHTML = noun;
        document.getElementById("Nouneopip1").innerHTML = noun;
        document.getElementById("Nouneopip2").innerHTML = noun;
        document.getElementById("Nouneopip3").innerHTML = noun;
        document.getElementById("Nouneopip4").innerHTML = noun;
        document.getElementById("Nouneoppt").innerHTML = noun;
        document.getElementById("Nouneoppt1").innerHTML = noun;
        document.getElementById("Nouneop_inputbox").innerHTML = noun;
        document.getElementById("Nouneop_inputbox1").innerHTML = noun;
        document.getElementById("Nouneop_inputbox2").innerHTML = noun;
        document.getElementById("Nouneop_inputbox3").innerHTML = noun;
        document.getElementById("Nouneop_inputbox4").innerHTML = noun;
    


    }

      function objpro() {
        var str1 =document.getElementById("Object").value;
        var obpr = str1.toLowerCase();
        if (obpr == "")
         {
           alert("Oops! did you forget to enter an Object Pronouns?");
           return false;
          }
        document.getElementById("obj.pro").innerHTML = obpr;
        document.getElementById("obj.pro_inputbox").innerHTML = obpr;
        document.getElementById("obj.pro_opbox").innerHTML = obpr;
    }

      function possadj() {
        var str2 =document.getElementById("Pos.adj").value;
        var poad = str2.toLowerCase();
        if (poad == "")
         {
           alert("Oops! did you forget to enter a Possessive Adjective?");
           return false;
          }
        document.getElementById("Pos.adjin1").innerHTML = poad;
        document.getElementById("Pos.adjin2").innerHTML = poad;
        document.getElementById("Pos.adj1").innerHTML = poad;
        document.getElementById("Pos.adj2").innerHTML = poad;
        document.getElementById("Pos.adj3").innerHTML = poad;
        document.getElementById("Pos.adj4").innerHTML = poad;
        document.getElementById("Pos.adj5").innerHTML = poad;
        document.getElementById("Pos.adj6").innerHTML = poad;
        document.getElementById("Pos.adj7").innerHTML = poad;
     
    }

      function posspro() {
        var popro =document.getElementById("Pos.pro").value;
        if (popro == "")
         {
           alert("Oops! did you forget to enter a Possessive Pronouns?");
           return false;
          }
   /* not defined*/     document.getElementById("Reflexive").innerHTML = popro;
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

