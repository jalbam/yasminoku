<?php
    //Se configura el BBClone:
    define("_BBC_PAGE_NAME", "english online");
    define("_BBCLONE_DIR", "../bbclone/");
    define("COUNTER", _BBCLONE_DIR."mark_page.php");
    if (is_readable(COUNTER)) include_once(COUNTER);
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
    <head>
        <title>Yasminoku &copy; (by Joan Alba Maldonado)</title>
        <!-- (c) Yasminoku - Programa realizado por Joan Alba Maldonado (granvino@granvino.com). Prohibido publicar, reproducir o modificar sin citar expresamente al autor original. -->
        <script language="JavaScript1.2" type="text/javascript">
            <!--
                //(c) Yasminoku - Programa realizado por Joan Alba Maldonado (granvino@granvino.com). Prohibido publicar, reproducir o modificar sin citar expresamente al autor original.
                
                                    
                //Matrices:
                var celdas = new Array();
                var celdas_posibles = new Array();
                var sudoku_solucion = new Array();
                var sudoku_inicial = new Array();
                var numeros_solucionados = 0;

                //Variable que contiene la opcion del menu que esta activada:
                var opcion_activada = 0;
                //Variable que guarada los numeros iniciales que se muestran al comenzar el sudoku (minimo deberian ser 17, aunque hay quien asegura que algunos basta con 16):
                var numeros_iniciales = 28;

                //Variable que alternara mostrar/ocultar solucion:
                var ver_solucion = false;

                
                //Funcion que inicia el juego por primera vez:
                function iniciar_juego_primera_vez()
                 {
                    //Se pone en el formulario los numeros iniciales:
                    document.getElementById("formulario_numeros_iniciales").numeros_iniciales.value = numeros_iniciales;

                    //Se muestra el mensaje de cargando:
                    mostrar_mensaje("Loading...", true);
                    
                    //Despues de un tiempo (para que de tiempo a salir el mensaje de Cargando de mas arriba), se continua el segundo paso:
                    setTimeout("iniciar_juego_primera_vez_2();", 100);
                 }
                

                //Funcion que inicia el juego por primera vez (segundo paso):
                function iniciar_juego_primera_vez_2()
                 {
                    //Si dibuja el sudoku base:
                    dibujar_sudoku();
                    
                    //Se inicia el juego:
                    iniciar_juego();

                    //Se alerta con informacion interesante sobre el juego:
                    alert('Welcome to Yasminoku.\nTo create random sudokus: introduce quantity of initial numbers and press \'Make\'.\nAttention: this game could generate sudokus with more than one solution (you can comprove it pressing some times at \'try to solve\', and if always generates the same solution it means that most probably this sudoku only have one solution).\nTo solve an own sudoku: type 0 on initial numbers, type your sudoku that you want to solve and then press \'try to solve\'.');
                    
                    //Se deja de mostrar el mensaje de Cargando... (por si acaso no lo huviera hecho ya):
                    mostrar_mensaje("", false);
                 }
            
            
                //Funcion que pinta provisionalmente, definitivamente o borra el numero seleccionado en el sudoku:
                function pintar_celda(celda, metodo, provisional)
                 {
                    //Se guarda el contenido de la celda en una variable numerica:
                    var contenido_celda = parseInt(document.getElementById(celda).innerHTML);
                    var color_celda = document.getElementById(celda).style.color;
                    //Si se retira el cursor del raton y no esta activada, se desactiva:
                    if (metodo == "desactivar" && isNaN(contenido_celda) || metodo == "desactivar" && color_celda != "rgb(170, 0, 0)" && color_celda != "rgb(170,0,0)" && color_celda != "#aa0000" && color_celda != "#AA0000" && color_celda != "#dd7080" && color_celda != "#DD7080" && color_celda != "rgb(221, 112, 128)" && color_celda != "rgb(221,112,128)")
                     {
                        //Se deja de pintar el numero seleccionado en la celda si se pulsa una tecla:
                        document.onkeydown = function() { }
                        //Si en la celda no habia nada escrito antes (de forma fija), se borra su contenido:
                        if (celdas[celda] == 0) { document.getElementById(celda).innerHTML = "&nbsp;"; }
                        else { document.getElementById(celda).innerHTML = celdas[celda]; }
                     }
                    //Si se posiciona encima el cursor y no esta activada, y no es una celda fija (ya desde el principio) y hay una opcion activada, se activa provisionalmente:
                    else if (metodo == "activar" && provisional && color_celda != "rgb(170, 0, 0)" && color_celda != "rgb(170,0,0)" && color_celda != "#aa0000" && color_celda != "#AA0000" && color_celda != "#dd7080" && color_celda != "#DD7080" && color_celda != "rgb(221, 112, 128)" && color_celda != "rgb(221,112,128)")
                     {
                         //Si se pulsa una tecla, se cambia a la opcion activada:
                         document.onkeydown = function(event) { if (window.Event) { tecla_pulsada(event, 'onkeypress'); } if (opcion_activada == 10) { document.getElementById(celda).innerHTML = "&nbsp;"; } else if (opcion_activada != 0) { document.getElementById(celda).innerHTML = opcion_activada; } }
                         //Si no hay ninguna opcion activada, sale de la funcion:
                         if (opcion_activada == 0) { return; }
                         //Si la opcion es la 10 (borrar numero), se borra el contenido de la celda provisionalmente:
                         if (opcion_activada == 10) { document.getElementById(celda).innerHTML = "&nbsp;"; }
                         //...y si no, se pone el numero:
                         else { document.getElementById(celda).innerHTML = opcion_activada; }
                     }
                    //Si se hace click y no es una celda fija (ya pintada desde el principio) y hay una opcion activada, se activa definitivamente:
                    else if (metodo == "activar" && !provisional && color_celda != "rgb(170, 0, 0)" && color_celda != "rgb(170,0,0)" && color_celda != "#aa0000" && color_celda != "#AA0000" && color_celda != "#dd7080" && color_celda != "#DD7080" && color_celda != "rgb(221, 112, 128)" && color_celda != "rgb(221,112,128)" && opcion_activada != 0)
                     {
                         //Si la opcion es la 10 (borrar numero), se borra el contenido de la celda de forma fija:
                         if (opcion_activada == 10) { document.getElementById(celda).innerHTML = "&nbsp;"; celdas[celda] = 0; }
                         //...y si no, se pone el numero de forma fija:
                         else { document.getElementById(celda).innerHTML = opcion_activada; celdas[celda] = opcion_activada; }
                     }
                 }
                

                //Funcion que muestra un mensaje:
                function mostrar_mensaje(mensaje, mostrar)
                 {
                    //Se pone el mensaje enviado:
                    document.getElementById("mensaje").innerHTML = mensaje;
                    //Si se ha elegido mostrar, se muestra:
                    if (mostrar) { document.getElementById("mensaje").style.visibility = "visible"; }
                    //...y si no, se oculta:
                    else { document.getElementById("mensaje").style.visibility = "hidden"; }
                 }
                

                //Funcion que selecciona o deselecciona una opcion, tanto definitiva como provisionalmente:
                function seleccionar(opcion, metodo, provisional)
                 {
                    //Si se retira el cursor del raton de la opcion y no esta activada, se desactiva:
                    if (metodo == "desactivar" && opcion_activada != opcion) { document.getElementById("opcion_"+opcion).style.border = "2px #bbbbbb dotted"; document.getElementById("opcion_"+opcion).style.color = "#696969"; }
                    
                    //Si se posiciona encima el cursor de la opcion y no esta activada, se activa provisionalmente:
                    else if (metodo == "activar" && provisional && opcion_activada != opcion) { document.getElementById("opcion_"+opcion).style.border = "2px #ffbbbb dotted"; document.getElementById("opcion_"+opcion).style.color = "#000000"; }

                    //Si se hace click encima de la opcion, se activa definitivamente y se desactivan las demas:
                    else if (metodo == "activar" && !provisional)
                     {
                        //Se activa la opcion definitivamente:
                        opcion_activada = opcion;
                        document.getElementById("opcion_"+opcion).style.border = "2px #000000 solid";
                        document.getElementById("opcion_"+opcion).style.color = "#aa0000";
                        //Se desactivan las demas:
                        for (x=1; x<=10; x++)
                         {
                            //Si no es la opcion elegida, se desactiva:
                            if (opcion != x) { document.getElementById("opcion_"+x).style.border = "2px #bbbbbb dotted"; document.getElementById("opcion_"+x).style.color = "#696969"; }
                         }
                     }
                 }
                

                //Funcion que inicia el juego:
                function iniciar_juego()
                 {
                    //Se setean los numeros iniciales:
                    numeros_iniciales = parseInt(document.getElementById("formulario_numeros_iniciales").numeros_iniciales.value);
                    //Se crea el sudoku:
                    crear_sudoku();
                 }
                 

                //Funcion que reinicia el juego:
                function reiniciar_juego()
                 {
                    numeros_iniciales_provisional = parseInt(document.getElementById("formulario_numeros_iniciales").numeros_iniciales.value);
                    //Si los numeros iniciales no es un numero o es invalido, se notifica, vuelve al numero anterior y sale de la funcion:
                    if (numeros_iniciales_provisional < 0 || numeros_iniciales_provisional > 81 || isNaN(numeros_iniciales_provisional))
                     {
                        alert("Initial numbers that you type are not valid. You moust to type a number between 0 and 81.");
                        document.getElementById("formulario_numeros_iniciales").numeros_iniciales.value = numeros_iniciales;
                        return false;
                     }
                    //Si se pulsa aceptar, se reinicia el juego:
                    else if (confirm("Press ok to apply changes. Actual game will be lost."))
                     {
                         //Vuelve a mostrar la opcion predeterminada en el div de ver solucion:
                         document.getElementById("div_solucion").innerHTML = "see solution";
                         document.getElementById('div_solucion').title = 'Shows sudoku solved';
                         ver_solucion = false;

                        //Inicia el juego otra vez:
                        iniciar_juego();
                     }
                    //...y si no, se vuelve a poner el numero anterior:
                    else { document.getElementById("formulario_numeros_iniciales").numeros_iniciales.value = numeros_iniciales; }
                 }
                

                //Funcion que crea el sudoku:
                function crear_sudoku()
                 {
                    //Se muestra el mensaje de cargando:
                    mostrar_mensaje("Loading...", true);

                    //Se vacia el sudoku de numeros:
                    vaciar_sudoku();

                    //Se intenta solucionar un sudoku aleatorio:
                    var sudoku_solucionado = solucionar_sudoku(1);
                    //Si no se ha podido solucionar, se vuelve a llamar a la funcion:
                    if (!sudoku_solucionado) { crear_sudoku(); return; }
                    //...pero si se ha solucionado, se guarda el sudoku solucionado en sudoku_solucion, se pone en la matriz celdas los numeros iniciales y luego se continua:
                    else { sudoku_solucion = new Array(); for (j=1; j<=81; j++) { sudoku_solucion[j] = celdas[j]; celdas[j] = 0; } }
                    
                    //Variables que contendran el numero de region, casilla y numero aleatorios:
                    var casillas_libres = new Array();    
                    var casilla_aleatoria_posicion = 0;
                    var casilla_aleatoria = 0;
                    //Se ponen los numeros en el sudoku:
                    for (x=1; x<=numeros_iniciales; x++)
                     {
                        //Se calcula una casilla aleatoria que sea valida (del 0 al sizeof(casillas_libres)-1):
                        casillas_libres = calcular_casillas_libres();
                        casilla_aleatoria_posicion = parseInt(Math.random() * casillas_libres.length);
                        casilla_aleatoria = casillas_libres[casilla_aleatoria_posicion];
                        
                        //Si la casilla esta vacia, se calcula si el sudoku es valido y si es asi se introduce:
                        if (celdas[casilla_aleatoria] == 0 && sudoku_solucion[casilla_aleatoria] != 0)
                         {
                            //Se introduce en la casilla el numero:
                            celdas[casilla_aleatoria] = sudoku_solucion[casilla_aleatoria];

                            //Se comprueba si el sudoku es valido:
//                            sudoku_valido = validar_sudoku(true);

                            //Si el sudoku no es valido, se borra la casilla introducida y se vuelve a hacer el bucle sin contar este loop:
//                            if (!sudoku_valido) { celdas[casilla_aleatoria] = 0; x--; continue; }
                         }
                        //...y si no, se vuelve a hacer el bucle sin contar este loop:
                        else { x--; continue; }
                     }

                    //Se valida el sudoku:
                    var sudoku_valido = validar_sudoku(true);
                    //Si el sudoku no es valido, vuelve a llamar a la funcion:
                    if (!sudoku_valido) { crear_sudoku(); }
                    //...pero si es valido, se crea el mapa (se representa el sudoku):
                    else
                     {
                         for (x=1; x<=81; x++)
                          {
                            //Si la celda no esta vacia, se representa:
                            if (celdas[x] != 0 && !isNaN(celdas[x])) { document.getElementById(x).innerHTML = celdas[x]; document.getElementById(x).style.color = "#aa0000"; }
                            //Se guarda en la matriz que contiene el sudoku inicial:
                            sudoku_inicial[x] = celdas[x];
                          }
                         //Se deja de mostrar el mensaje de cargando:
                         mostrar_mensaje("", false);
                     }
                 }


                //Funcion que vacia el sudoku:
                function vaciar_sudoku()
                 {
                    //Se borran las matrices:
                    celdas = new Array();
                    celdas_posibles = new Array();
                    sudoku_solucion = new Array();
                    sudoku_inicial = new Array();
                    numeros_solucionados = 0;
                    for (x=1; x<=81; x++)
                     {
                        celdas[x] = 0;
                        sudoku_solucion[x] = 0;
                        sudoku_inicial[x] = 0;
                        //Se le pone el color de fuente predeterminado:
                        document.getElementById(x).style.color = "#333333";
                        //Se vacia la celda:
                        document.getElementById(x).innerHTML = "&nbsp;";
                     }
                 }


                //Funcion que dibuja el sudoku:
                function dibujar_sudoku()
                 {
                    //Se muestra el mensaje de cargando:
                    mostrar_mensaje("Loading...", true);
                    
//                    document.getElementById("zona_juego").innerHTML = "";

                    var numero_columna = 0;
                    var numero_fila = 0;
                    var numero_region = 1;
                    var posicion_left = 0;
                    var posicion_top = 0;
                    var espaciado_vertical = 0;
                    var espaciado_horizontal = 0;
                    var color_fondo = "";
                    var codigo_html = "";                    

                    for (x=1; x<=81; x++)
                     {
                        //Se crean las matrices:
                        celdas[x] = 0;
                        
                        color_fondo = (x % 2 == 0) ? "#dddddd" : "#eeeeee";
                        if (numero_columna == 3 || numero_columna == 6) { espaciado_horizontal = 5; } else { espaciado_horizontal = 0; }
                        if (numero_fila == 3 || numero_fila == 6) { espaciado_vertical = 5; } else { espaciado_vertical = 0; }
                        posicion_left = (numero_columna * 50) + 2 + espaciado_horizontal;
                        posicion_top = (numero_fila * 50) + 2 + espaciado_vertical;

                        //Se guarda el div como codigo HTML para insertarlo posteriormente:
                        codigo_html += '<div id="'+x+'" style="visibility:visible; background:'+color_fondo+'; color:#333333; left:'+posicion_left+'px; top:'+posicion_top+'px; width:50px; height:50px; padding:0px; position:absolute; font-size:24px; line-height:52px; text-align:center; cursor: pointer; cursor: hand; z-index:3;" onMouseOver="javascript:pintar_celda('+x+', \'activar\', true);" onMouseOut="javascript:pintar_celda('+x+', \'desactivar\', true);" onClick="javascript:pintar_celda('+x+', \'activar\', false);">' + x + '</div>';
                      
                        numero_columna++;
                        if (numero_columna > 8) { numero_columna = 0; numero_fila++; }
                        if (numero_fila > 8) { break; }
                     }

                    
                    //Se inserta el codigo HTML generado:
                    document.getElementById("zona_juego").innerHTML = codigo_html;

                    //Se deja de mostrar el mensaje de cargando:
                    mostrar_mensaje("", false);
                 }


                //Funcion que valida el sudoku:
                function validar_sudoku(salir_al_fallar)
                 {
                    //Comprobar que no se repita ningun numero por regiones:
                    var num_region = 1;
                    for (a=1; a<=9; a++) { eval("var region_"+a+" = new Array();"); for (b=1; b<=9; b++) { eval("region_"+a+"["+b+"] = false;"); } }                    
                    for (a=1; a<=61; a+=3)
                     {
                        for (b=a; b<=a+20; b++)
                         {
                            if (b == a+3) { b = b  - 3 + 9; }
                            else if (b == a+12) { b = b - 12 + 18; }
                            if (celdas[b] != 0 && !isNaN(celdas[b]))
                             {
                                if (eval("region_"+num_region+"["+celdas[b]+"]") == true && salir_al_fallar) { return false; }
                                else { eval("region_"+num_region+"["+celdas[b]+"] = true;"); }
                             }
                         }
                         if (a == 7 || a == 34) { a += 18; }
                         num_region++;
                     }
                    
                    //Comprobar que no se repita ningun numero por filas:
                    var num_fila = 1;
                    for (a=1; a<=9; a++) { eval("var fila_"+a+" = new Array();"); for (b=1; b<=9; b++) { eval("fila_"+a+"["+b+"] = false;"); } }
                    b = 1;
                    for (a=1; a<=81; a++)
                     {
                        if (b > 9) { b = 1; num_fila++; }
                        if (celdas[a] != 0 && !isNaN(celdas[a]))
                         {
                            if (eval("fila_"+num_fila+"["+celdas[a]+"]") == true && salir_al_fallar) { return false; }
                            else { eval("fila_"+num_fila+"["+celdas[a]+"] = true;"); }
                         }
                        b++;
                     }
                    
                    //Comprobar que no se repita ningun numero por columnas:
                    for (a=1; a<=9; a++) { eval("var columna_"+a+" = new Array();"); for (b=1; b<=9; b++) { eval("columna_"+a+"["+b+"] = false;"); } }
                    for (a=1; a<=9; a++)
                     {
                        for (b=a; b<=81; b+=9)
                         {
                           if (celdas[b] != 0 && !isNaN(celdas[b]))
                            {
                              if (eval("columna_"+a+"["+celdas[b]+"]") == true && salir_al_fallar) { return false; }
                              else { eval("columna_"+a+"["+celdas[b]+"] = true;"); }
                            }
                         }
                     }
                    //Si llega hasta aqui es que todo ha ido bien:
                    return true;
                 }


                //Funcion para que el usuario valide su sudoku:
                function validar_sudoku_usuario()
                 {
                    //Se calcula cuantos numeros se han completado:
                    var sudoku_completado = true;
                    for (x=1; x<=81; x++) { if (celdas[x] == 0) { sudoku_completado = false; } }
                    
                    //Si se esta viendo la solucion del sudoku, se deja de mostrar:
                    if (ver_solucion) { mostrar_solucion(); }
                    
                    //Si todavia no se han completado todos los numeros, se avisa de que es imposible validar:
                    if (!sudoku_completado) { alert("You must to finish sudoku to validate."); }
                    //...pero si se han completado todos, se valida:
                    else
                     {
                        var sudoku_valido = validar_sudoku(true);
                        if (sudoku_valido) { alert("Sudoku are CORRECT. Congratulations."); } //Si es correcto, da la enhorabuena.
                        else { alert("Sudoku are NOT CORRECT."); } //Si no, avisa.
                     }                    
                 }
                 

                //Funcion que valida si una celda es valida o no:
                function validar_celda(celda)
                 {
                    var numero_fila = Math.ceil(celda/9);
                    var numero_columna = celda - ((numero_fila - 1) * 9);
                    //var numero_region = (3 * Math.ceil(numero_fila/3)) - (3 - Math.ceil(numero_columna/3));
                    var num_inicial_fila = (9 * (numero_fila - 1)) + 1;
                    var num_inicial_columna = numero_columna;
                    var num_inicial_region = ((Math.ceil(numero_fila/3) - 1) * 3 * 9) + ((Math.ceil(numero_columna/3) - 1) * 3) + 1;

                    
                    //Calculamos que no se repita nada en la region de la celda:
                    var numeros_usados = new Array();
                    var n = 1;
                    for (n=1; n<=9; n++) { numeros_usados[n] = false; }
                    var contador = 1;
                    for (n=num_inicial_region; n<=num_inicial_region+20; n++)
                     {
                        if (numeros_usados[celdas[n]] == true && celdas[n] != 0 && !isNaN(celdas[n])) { return false; } //Si esta repetido, se sale de la funcion retornando false.
                        else { numeros_usados[celdas[n]] = true; } //Si se esta usando, se setea como tal.
                        if (contador == 3) { n += 6; contador = 0; }
                        contador++;
                     }
                    
                    //Calculamos que no se repita nada en la fila de la celda:
                    for (n=1; n<=9; n++) { numeros_usados[n] = false; }
                    for (n=num_inicial_fila; n<=num_inicial_fila+8; n++)
                     {
                        if (numeros_usados[celdas[n]] == true && celdas[n] != 0 && !isNaN(celdas[n])) { return false; } //Si esta repetido, se sale de la funcion retornando false.
                        else { numeros_usados[celdas[n]] = true; } //Si se esta usando, se setea como tal.
                     }
                    
                    //Calculamos que no se repita nada en la columna de la celda:
                    for (n=1; n<=9; n++) { numeros_usados[n] = false; }                    
                    for (n=num_inicial_columna; n<=num_inicial_columna+72; n+=9)
                     {
                        if (numeros_usados[celdas[n]] == true && celdas[n] != 0 && !isNaN(celdas[n])) { return false; } //Si esta repetido, se sale de la funcion retornando false.
                        else { numeros_usados[celdas[n]] = true; } //Si se esta usando, se setea como tal.
                     }

                    //Si ha llegado hasta aqui es que todo funciona bien, asi que retorna true:                   
                    return true;
                 }
                 

                //Funcion que calcula que casillas estan libres y las devuelve en una matriz:
                function calcular_casillas_libres()
                 {
                    var casillas_libres = new Array();
                    var b = 0;
                    for (a=1; a<=81; a++) { if (celdas[a] == 0) { casillas_libres[b] = a; b++; } }
                    return casillas_libres;
                 }
                

                //Funcion que soluciona el sudoku por backtracking (vuelta atras):
                function solucionar_sudoku(celda)
                 {
                    var sudoku_solucionado = false;
                    
                    //Si ya se ha solucionado el sudoku, se sale de la funcion retornando true:
                    if (numeros_solucionados >= 81) { return true; }

                    //Si la casilla ya esta llena, se vuelve a llamar a la funcion con la posterior (siempre que no este en la ultima celda, la 81):
                    if (!isNaN(celdas[celda]) && celdas[celda] != 0 && celda < 81)
                     {
                       sudoku_solucionado = solucionar_sudoku(celda+1);
                       //Si se ha solucionado el sudoku, se retorna true:
                       if (sudoku_solucionado) { return true; }
                       //...pero si no, se retorna false:
                       else { return false; }
                     }

                    //Se crea una matriz con el numero del 1 al 8, y luego se baraja:
                    var numeros_barajados = new Array();
                    numeros_barajados = barajar(); //Se baraja.

                    var es_valido = false;
                    var e = 0;
                    //Se realiza un bucle para probar numeros en la casilla:
                    for (e=0; e<=8; e++)
                     {
                        //Se inserta el numero barajado en la celda:
                        celdas[celda] = numeros_barajados[e];
                        //Se comprueba si es valido:
                        //es_valido = validar_sudoku(true);
                        es_valido = validar_celda(celda);
                        //Si el sudoku es valido, se llama a solucionar la celda posterior:
                        if (es_valido)
                         {
                            //Se incrementa el valor de los numeros solucionados:
                            numeros_solucionados++;
                            //Se llama a solucionar la celda posterior:
                            sudoku_solucionado = solucionar_sudoku(celda+1);
                            //Si se ha solucionado, retorna true:
                            if (sudoku_solucionado) { return true; }
                            //...y si no, se borra la celda introducida:
                            else { celdas[celda] = 0; numeros_solucionados--; }
                         }
                         //...y si no, se borra la celda introducida:
                         else { celdas[celda] = 0; }
                     }

                    //Si se ha llegado hasta aqui es que no se ha encontrado solucion, asi que se borra la celda introducida y retorna false:
                    celdas[celda] = 0;
//                    numeros_solucionados--;
                    return false;
                 }
                

                //Funcion que baraja una matriz:
                function barajar()
                 {
                    var numeros_barajados = new Array();
                    for (f=0; f<=8; f++)
                     {
                        //Creamos un numero aleatorio:
                        numero_aleatorio = parseInt(Math.random() * 9) + 1;
                        //Comprobamos si el numero ya se encuentra en la matriz:
                        var se_encuentra = false;
                        for (g=0; g<=8; g++)
                         {
                            //Si ya se encuentra en la matriz, se sale del bucle:
                            if (numeros_barajados[g] == numero_aleatorio) { se_encuentra = true; break; }
                         }
                        //Si se ha encontrado, se repite el bucle sin contar el loop:
                        if (se_encuentra) { f--; continue; }
                        //...pero si no, se introduce en la nueva matriz barajada:
                        else { numeros_barajados[f] = numero_aleatorio; }
                     }
                    //Se retorna la matriz barajada:
                    return numeros_barajados;
                 }
                

                //Funcion que muestra la solucuon del sudoku:
                function mostrar_solucion()
                 {
                    //Se alterna para que funcione como un boton de on/off (mostrar/ocultar solucion), alternando a la opcion contraria:
                    ver_solucion = (ver_solucion) ? false : true;

                    //Si se ha elegido mostrar la solucion, se muestra:
                    if (ver_solucion)
                     {
                         //Si se cancela, sale sin ver la solucion:
                         if (!confirm("Solution that computer calculate for this sudoku will be show (without considering numbers introduced by the user).\nIf you prefer calculate a solution in real time mode, considerating numbers introduced by the user, press on \"try to solve\": this option can output a different solution on press it more than one time if sudoku contains more than one solution.\nPress ok to see the solution"))
                          {
                             //Se vuelve a dejar como estaba (ver solucion):
                             ver_solucion = false;
                             //Se deja de mostrar el mensaje de cargando:
                             mostrar_mensaje("", false);
                             //Sale de la funcion:
                             return;
                          }

                         //Se muestra el mensaje de cargando:
                         mostrar_mensaje("Loading...", true);

                         document.getElementById("div_solucion").innerHTML = "hide solution";
                         document.getElementById('div_solucion').title = 'Hide sudoku solved';
                         for (j=1; j<=81; j++)
                          {
                             if (sudoku_solucion[j] != 0 && !isNaN(sudoku_solucion[j]))
                              {
                                document.getElementById(j).innerHTML = sudoku_solucion[j];
                                //Si el numero era fijo (numero inicial), se muestra de color rojo:
                                if (sudoku_solucion[j] == sudoku_inicial[j]) { document.getElementById(j).style.color = "#aa0000"; }
                                //Y si el numero estaba escondido y forma parte de la solucion, se muestra de otro color:
                                else { document.getElementById(j).style.color = "#dd7080"; }
                              }
                          }

                        //Se deja de mostrar el mensaje de cargando:
                        mostrar_mensaje("", false);
                     }
                    //...pero si se ha elegido ocultar, se oculta:
                    else
                     {
                         //Se muestra el mensaje de cargando:
                         mostrar_mensaje("Loading...", true);

                         document.getElementById("div_solucion").innerHTML = "see solution";
                         document.getElementById('div_solucion').title = 'Show sudoku solved';
                         for (j=1; j<=81; j++)
                          {
                             if (celdas[j] != 0 && !isNaN(celdas[j]))
                              {
                                document.getElementById(j).innerHTML = celdas[j];
                                //Si el numero era fijo (numero inicial), se muestra de color rojo:
                                if (celdas[j] == sudoku_inicial[j]) { document.getElementById(j).style.color = "#aa0000"; }
                                //...y si no, de color gris:
                                else { document.getElementById(j).style.color = "#222222"; }
                              }
                             else if (celdas[j] == 0) { document.getElementById(j).innerHTML = "&nbsp;"; document.getElementById(j).style.color = "#333333"; }
                          }

                        //Se deja de mostrar el mensaje de cargando:
                        mostrar_mensaje("", false);
                     }

                    
                    //Vuelve el color del "enlace" a su color predeterminado (si no se quedaria en rojo si se arrastrara con el raton, etc. en algunos navegadores y determinadas circunstancias):
                    document.getElementById('div_solucion').style.color = '#222222';
                 }

                
                //Funcion que intenta solucionar el sudoku introducido:
                function intentar_solucionar()
                 {
                    //Se alerta de las consecuencias (soluciones posiblemente distintas cada vez, bloqueo del navegador por un tiempo...), y si se pulsa cancelar sale de la funcion:
                    if (!confirm("Program will try to solve sudoku with the introduced numbers, initials or not (introduced by the user).\nIt could show a different solution every time that you press this option if sudoku have more than one solution.\nIs possible that the browser doesn't respond for a time, don't press cancel.\nIf your browser asks to abort the command sequence, just don't cancel.\nPress ok to continue.")) { return; }

                    //Se muestra el mensaje de solucionando:
                    mostrar_mensaje("Solving...", true);
                   
                    //Se calcula cuantos numeros ya hay introducidos, y ademas guarda el sudoku en una matriz:
                    var numeros_introducidos = 0;
                    var sudoku_backup = new Array();
                    for (r=1; r<=81; r++)
                     {
                        //Si la celda no esta vacia, se cuenta como numero introducido:
                        if (celdas[r] != 0 && !isNaN(celdas[r])) { numeros_introducidos++; }
                        //Se guarda en una matriz como copia de seguridad:
                        sudoku_backup[r] = celdas[r];
                     }

                    //Los numeros solucionados son todos los ya introducidos:
                    numeros_solucionados = numeros_introducidos;
                    
                    //Se intenta solucionar el sudoku:
                    var sudoku_solucionado = solucionar_sudoku(1);
                    //Se valida el sudoku:
                    var sudoku_valido = validar_sudoku(true);
                    
                    //Si el sudoku ha podido ser solucionado y es valido, prosigue:
                    if (sudoku_solucionado && sudoku_valido)
                     {
                        //Se muestra la solucion encontrada:
                        for (r=1; r<=81; r++)
                         {
                            if (celdas[r] != 0 && !isNaN(celdas[r]))
                             {
                                document.getElementById(r).innerHTML = celdas[r];
                                if (celdas[r] == sudoku_backup[r]) { document.getElementById(r).style.color = "#aa0000"; }
                                else { document.getElementById(r).style.color = "#dd7080"; }
                             }
                            else if (celdas[r] == 0) { document.getElementById(r).innerHTML = "&nbsp;"; document.getElementById(r).style.color = "#333333"; }
                         }

                        //Se deja de mostrar el mensaje de cargando:
                        mostrar_mensaje("", false);
                        
                        //Se alerta para hacer una pausa y poder ver la solucion:
                        alert("Sudoku solved.\nPress ok to stop showing solution.");
                        
                        //Se muestra el mensaje de cargando:
                        mostrar_mensaje("Loading...", true);
                        
                        //...y despues de la pausa, se restaura el sudoku anterior gracias a la copia de seguridad:
                        for (r=1; r<=81; r++)
                         {
                            celdas[r] = sudoku_backup[r];
                            if (celdas[r] != 0 && !isNaN(celdas[r]))
                             {
                                document.getElementById(r).innerHTML = celdas[r];
                                if (celdas[r] == sudoku_inicial[r]) { document.getElementById(r).style.color = "#aa0000"; }
                                else { document.getElementById(r).style.color = "#333333"; }
                             }
                            else if (celdas[r] == 0) { document.getElementById(r).innerHTML = "&nbsp;"; document.getElementById(r).style.color = "#333333"; }
                         }
                        
                        //Se deja de mostrar el mensaje de cargando:
                        mostrar_mensaje("", false);
                     }
                    //...pero si el sudoku no ha podido ser solucionado o no es valido, se notifica:
                    else { mostrar_mensaje("", false); alert("Impossible to solve.\nIntroduced sudoku don't have solution or is incorrect."); }

                    //Vuelve el color del "enlace" a su color predeterminado (si no se quedaria en rojo si se arrastrara con el raton, etc. en algunos navegadores y determinadas circunstancias):
                    document.getElementById('div_solucion').style.color = '#222222';
                 }


               //Funcion que ocurre al pulsar una tecla:
               function tecla_pulsada(e, evento_actual)
                {
                    //Capturamos la tacla pulsada, segun navegador:
                    if (e.keyCode) { var unicode = e.keyCode; }
                    //else if (event.keyCode) { var unicode = event.keyCode; }
                    else if (window.Event && e.which) { var unicode = e.which; }
                    else { var unicode = 17; } //Si no existe, por defecto se utiliza el Control.
                    
                    //Codigos: "1" (97, 49, 35), "2" (50, 40, 98), "3" (51, 99, 34), "4" (37, 100, 52), "5" (53, 101, 12), "6" (39, 54, 102), "7" (55, 103, 36), "8" (38, 104, 56), "9" (105, 57, 33), "0" (45, 96, 48).
                    if (unicode == 97 || unicode == 49 || unicode == 35) { opcion_activada = 1; seleccionar(opcion_activada, "activar", false); } //Tecla 1.
                    else if (unicode == 50 || unicode == 40 || unicode == 98) { opcion_activada = 2; seleccionar(opcion_activada, "activar", false); } //Tecla 2.
                    else if (unicode == 51 || unicode == 99 || unicode == 34) { opcion_activada = 3; seleccionar(opcion_activada, "activar", false); } //Tecla 3.
                    else if (unicode == 37 || unicode == 100 || unicode == 52) { opcion_activada = 4; seleccionar(opcion_activada, "activar", false); } //Tecla 4.
                    else if (unicode == 53 || unicode == 101 || unicode == 12) { opcion_activada = 5; seleccionar(opcion_activada, "activar", false); } //Tecla 5.
                    else if (unicode == 39 || unicode == 54 || unicode == 102) { opcion_activada = 6; seleccionar(opcion_activada, "activar", false); } //Tecla 6.
                    else if (unicode == 55 || unicode == 103 || unicode == 36) { opcion_activada = 7; seleccionar(opcion_activada, "activar", false); } //Tecla 7.
                    else if (unicode == 38 || unicode == 104 || unicode == 56) { opcion_activada = 8; seleccionar(opcion_activada, "activar", false); } //Tecla 8.
                    else if (unicode == 105 || unicode == 57 || unicode == 33) { opcion_activada = 9; seleccionar(opcion_activada, "activar", false); } //Tecla 9.
                    else if (unicode == 45 || unicode == 96 || unicode == 48) { opcion_activada = 10; seleccionar(opcion_activada, "activar", false); } //Tecla 0.
                }
            // -->
        </script>
    </head>
    <body onLoad="javascript:iniciar_juego_primera_vez();" onKeyPress="javascript:tecla_pulsada(event, 'onkeypress');" onKeyDown="javascript:tecla_pulsada(event, 'onkeydown');"  bgcolor="#efefef" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
        <!-- Ver solucion: -->
        <div id="div_solucion" title="Show sudoku solved" style="visibility:visible; border:1px #aaaaaa dashed; background:#dddddd; color:#222222; left:10px; top:6px; width:140px; height:12px; padding:0px; position:absolute; font-size:11px; font-family:arial; font-weight:bold; line-height:11px; text-align:center; cursor: pointer; cursor: hand; z-index:2;" onMouseOver="javascript:document.getElementById('div_solucion').style.color='#aa0000';" onMouseOut="javascript:document.getElementById('div_solucion').style.color='#222222';" onClick="javascript:mostrar_solucion();">see solution</div>
        <!-- Fin de Ver solucion. -->
        <!-- Intentar solucionar: -->
        <div id="div_solucionar" title="Try to solve sudoku with introduced numbers" style="visibility:visible; border:1px #aaaaaa dashed; background:#dddddd; color:#222222; left:160px; top:6px; width:140px; height:12px; padding:0px; position:absolute; font-size:11px; font-family:arial; font-weight:bold; line-height:11px; text-align:center; cursor: pointer; cursor: hand; z-index:2;" onMouseOver="javascript:document.getElementById('div_solucionar').style.color='#aa0000';" onMouseOut="javascript:document.getElementById('div_solucionar').style.color='#222222';" onClick="javascript:intentar_solucionar();">try to solve</div>
        <!-- Fin de Intentar solucionar. -->
        <!-- Zona de juego: -->
        <div id="zona_juego" style="visibility:visible; background:#cccccc; color:#000000; left:10px; top:22px; width:455px; height:455px; padding:0px; position:absolute; font-size:80px; font-style:italic; line-height:80px; text-align:center; z-index:1;">
            Loading...
        </div>
        <!-- Fin de Zona de juego. -->
        <!-- Mensaje: -->
        <div id="mensaje" style="visibility:visible; background:#aacccc; color:#0000ff; left:15px; top:225px; width:444px; height:24px; padding:0px; position:absolute; font-size:20px; font-style:italic; font-weight:bold; line-height:20px; text-align:center; filter:alpha(opacity=70); opacity:0.7; -moz-opacity:0.7; z-index:10;">
            Loading...
        </div>
        <!-- Fin de Mensaje. -->
        <!-- Menu con numeros: -->
        <div id="div_menu_numeros" style="visibility:visible; border:2px #aaaaaa dashed; background:#dddddd; color:#000000; left:10px; top:482px; width:456px; height:36px; padding:0px; position:absolute; font-size:20px; line-height:20px; text-align:center; z-index:1;">
            <div id="opcion_1" style="visibility:visible; background:#dddddd; border:2px #bbbbbb dotted; color:#696969; left:10px; top:1px; width:26px; height:26px; padding:0px; position:absolute; font-size:26px; font-weight:bold; line-height:26px; text-align:center; cursor: pointer; cursor: hand; z-index:2;" title="Choose number 1" onMouseOver="javascript:seleccionar(1, 'activar', true);" onMouseOut="javascript:seleccionar(1, 'desactivar', false);" onClick="javascript:seleccionar(1, 'activar', false);">1</div>
            <div id="opcion_2" style="visibility:visible; background:#dddddd; border:2px #bbbbbb dotted; color:#696969; left:50px; top:1px; width:26px; height:26px; padding:0px; position:absolute; font-size:26px; font-weight:bold; line-height:26px; text-align:center; cursor: pointer; cursor: hand; z-index:2;" title="Choose number 2" onMouseOver="javascript:seleccionar(2, 'activar', true);" onMouseOut="javascript:seleccionar(2, 'desactivar', false);" onClick="javascript:seleccionar(2, 'activar', false);">2</div>
            <div id="opcion_3" style="visibility:visible; background:#dddddd; border:2px #bbbbbb dotted; color:#696969; left:90px; top:1px; width:26px; height:26px; padding:0px; position:absolute; font-size:26px; font-weight:bold; line-height:26px; text-align:center; cursor: pointer; cursor: hand; z-index:2;" title="Choose number 3" onMouseOver="javascript:seleccionar(3, 'activar', true);" onMouseOut="javascript:seleccionar(3, 'desactivar', false);" onClick="javascript:seleccionar(3, 'activar', false);">3</div>
            <div id="opcion_4" style="visibility:visible; background:#dddddd; border:2px #bbbbbb dotted; color:#696969; left:130px; top:1px; width:26px; height:26px; padding:0px; position:absolute; font-size:26px; font-weight:bold; line-height:26px; text-align:center; cursor: pointer; cursor: hand; z-index:2;" title="Choose number 4" onMouseOver="javascript:seleccionar(4, 'activar', true);" onMouseOut="javascript:seleccionar(4, 'desactivar', false);" onClick="javascript:seleccionar(4, 'activar', false);">4</div>
            <div id="opcion_5" style="visibility:visible; background:#dddddd; border:2px #bbbbbb dotted; color:#696969; left:170px; top:1px; width:26px; height:26px; padding:0px; position:absolute; font-size:26px; font-weight:bold; line-height:26px; text-align:center; cursor: pointer; cursor: hand; z-index:2;" title="Choose number 5" onMouseOver="javascript:seleccionar(5, 'activar', true);" onMouseOut="javascript:seleccionar(5, 'desactivar', false);" onClick="javascript:seleccionar(5, 'activar', false);">5</div>
            <div id="opcion_6" style="visibility:visible; background:#dddddd; border:2px #bbbbbb dotted; color:#696969; left:210px; top:1px; width:26px; height:26px; padding:0px; position:absolute; font-size:26px; font-weight:bold; line-height:26px; text-align:center; cursor: pointer; cursor: hand; z-index:2;" title="Choose number 6" onMouseOver="javascript:seleccionar(6, 'activar', true);" onMouseOut="javascript:seleccionar(6, 'desactivar', false);" onClick="javascript:seleccionar(6, 'activar', false);">6</div>
            <div id="opcion_7" style="visibility:visible; background:#dddddd; border:2px #bbbbbb dotted; color:#696969; left:250px; top:1px; width:26px; height:26px; padding:0px; position:absolute; font-size:26px; font-weight:bold; line-height:26px; text-align:center; cursor: pointer; cursor: hand; z-index:2;" title="Choose number 7" onMouseOver="javascript:seleccionar(7, 'activar', true);" onMouseOut="javascript:seleccionar(7, 'desactivar', false);" onClick="javascript:seleccionar(7, 'activar', false);">7</div>
            <div id="opcion_8" style="visibility:visible; background:#dddddd; border:2px #bbbbbb dotted; color:#696969; left:290px; top:1px; width:26px; height:26px; padding:0px; position:absolute; font-size:26px; font-weight:bold; line-height:26px; text-align:center; cursor: pointer; cursor: hand; z-index:2;" title="Choose number 8" onMouseOver="javascript:seleccionar(8, 'activar', true);" onMouseOut="javascript:seleccionar(8, 'desactivar', false);" onClick="javascript:seleccionar(8, 'activar', false);">8</div>
            <div id="opcion_9" style="visibility:visible; background:#dddddd; border:2px #bbbbbb dotted; color:#696969; left:330px; top:1px; width:26px; height:26px; padding:0px; position:absolute; font-size:26px; font-weight:bold; line-height:26px; text-align:center; cursor: pointer; cursor: hand; z-index:2;" title="Choose number 9" onMouseOver="javascript:seleccionar(9, 'activar', true);" onMouseOut="javascript:seleccionar(9, 'desactivar', false);" onClick="javascript:seleccionar(9, 'activar', false);">9</div>
            <div id="opcion_10" style="visibility:visible; background:#dddddd; border:2px #bbbbbb dotted; color:#696969; left:366px; top:6px; width:16px; height:16px; padding:0px; position:absolute; font-size:10px; font-weight:bold; line-height:16px; text-align:center; cursor: pointer; cursor: hand; z-index:2;" title="Delete a number" onMouseOver="javascript:seleccionar(10, 'activar', true);" onMouseOut="javascript:seleccionar(10, 'desactivar', false);" onClick="javascript:seleccionar(10, 'activar', false);">X</div>
            <!-- Formulario con el boton para validar el sudoku: -->
            <div id="div_validar" style="visibility:visible; background:transparent; color:#000000; left:382px; top:6px; width:75px; height:26px; padding:0px; position:absolute; font-size:12px; font-weight:bold; line-height:12px; text-align:center; z-index:2;">
                <form id="validar" style="display:inline;">
                    <input type="button" value="Validate" name="boton_validar" style="font-size:12px; cursor: pointer; cursor: hand;" title="Verifies if sudoku are solved correctly" onClick="javascript:validar_sudoku_usuario();">
                </form>
            </div>
            <!-- Fin de Formulario con el boton para validar el sudoku. -->
        </div>
        <!-- Fin de Menu con numeros. -->
        <!-- Formulario: -->
        <div id="div_formulario_numeros_iniciales" style="visibility:visible; border:2px #aaaaaa dashed; background:#dddddd; color:#000000; left:10px; top:526px; width:456px; height:22px; padding:0px; position:absolute; font-size:20px; line-height:20px; text-align:center; z-index:1;">
            <form id="formulario_numeros_iniciales" style="display:inline;" onSubmit="javascript:reiniciar_juego(); return false;">
                <label for="numeros_iniciales" accesskey="q" style="cursor: pointer; cursor: hand;">
                    <u>Q</u>uantity of initial numbers: <input type="text" name="numeros_iniciales" style="font-size:12px; font-weight:bold; color:#444444; background:#efefef; text-align:center;" id="numeros_iniciales" value="28" maxlength="2" size="2" accesskey="q">
                </label>
                <input type="button" value="Make" name="boton_crear" style="font-size:12px; cursor: pointer; cursor: hand;" title="Make a new sudoku" onClick="javascript:reiniciar_juego();">
            </form>
        </div>
        <!-- Fin de Formulario. -->
        <!-- Informacion: -->
        <div style="left:10px; top:560px; height:0px; position:absolute; border:0px; padding:0px; background:transparent; color:#333333; text-align:left; line-height:20px; text-decoration:none; font-family:verdana; font-size:10px; z-index:10;">
            &copy; <b>Yasminoku</b> 0.25a by <i>Joan Alba Maldonado</i> (<a href="mailto:granvino@granvino.com;">granvino@granvino.com</a>) &nbsp;<sup>(DHTML 100%)</sup>
            <br>&nbsp;&nbsp;- Prohibited to publish, reproduce or modify without maintain author's name.
            <br>
            &nbsp;&nbsp;<i>Dedicated to Yasmina Llaveria del Castillo</i>
        <!-- Fin de Informacion. -->
    </body>
</html>
