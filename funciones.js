var request
        request = new XMLHttpRequest();
        setInterval(myFunction, 2000)
        setInterval(myFunction2, 500)
        setTimeout(myFunction3, 1000)
        mensaje = "Hay movimiento";
        mensaje1 = "No hay movimiento";
        mensaje2 = "Alarma desactivada";
        var x = 0;

        strLED1 = "";
        strLED2 = "";

        var LED2_state = 0;

        // service LEDs when checkbox checked/unchecked
        function GetCheck() {
            if (LED_form.LED1.checked) {
                x=1;
            }
            else {
                  x=0;
            }
        }
        function GetButton1(){
            if (LED2_state === 1) {
                request.open("GET","cgi-bin/relayon.cgi",true);
                request.send();
                LED2_state = 0;
                strLED2 = "&LED2=0";
            }
            else {
                request.open("GET","cgi-bin/relayoff.cgi",true);
                request.send();
                LED2_state = 1;
                strLED2 = "&LED2=1";
            }
        }

    function myFunction() {
          request.open("GET","cgi-bin/variable.cgi",true);
        request.send();
        var dato = new Array();
        var archivoTxt = new XMLHttpRequest();
        var fileRuta = 'Light.txt';
        archivoTxt.open("GET",fileRuta,false);
        archivoTxt.send(null);
        var txt=archivoTxt.responseText;
        dato.push(txt[0]);
        if(txt == 1){
            document.body.style.backgroundColor = "white";
        }
        if(txt == 0){
            document.body.style.backgroundColor = "DimGray";
        }
    }

    function myFunction2() {
          request.open("GET","cgi-bin/variable2.cgi",true);
        request.send();
        var dato = new Array();
        var archivoTxt = new XMLHttpRequest();
        var fileRuta = 'PIR.txt';
        archivoTxt.open("GET",fileRuta,false);
        archivoTxt.send(null);
        var txt2=archivoTxt.responseText;
        dato.push(txt2[0]);
        if(txt2 == 1 && x == 1){
            message2.innerHTML=mensaje;
            request.open("GET","cgi-bin/buzzeron.cgi",true);
            request.send();
            setTimeout(myFunction3, 5000)
        }
        if(txt2 == 0 && x == 1){
            message2.innerHTML=mensaje1;
        }
        if(x==0){
            message2.innerHTML=mensaje2;
        }
    }

    function myFunction3() {
        request.open("GET","cgi-bin/buzzeroff.cgi",true);
        request.send();
    }
