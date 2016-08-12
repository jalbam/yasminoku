  var steps=20;
  var colors=new Array(steps);


  // IntToHex: converts integers between 0-255 into a two digit hex string.
  function IntToHex(n) {
    var result = n.toString(16);
    if (result.length==1) result = "0"+result;
    return result;
  }

  // HexToInt: converts two digit hex strings into integer.
  function HexToInt(hex) {
    return parseInt(hex, 16);
  }

  function getFadeColors(ColorA, ColorB, Colors) {
    len = Colors.length; 

    // strip '#' signs if present 
    if (ColorA.charAt(0)=='#') ColorA = ColorA.substring(1);
    if (ColorB.charAt(0)=='#') ColorB = ColorB.substring(1);

    // substract rgb compents from hex string 
    var r = HexToInt(ColorA.substring(0,2));
    var g = HexToInt(ColorA.substring(2,4));
    var b = HexToInt(ColorA.substring(4,6));
    var r2 = HexToInt(ColorB.substring(0,2));
    var g2 = HexToInt(ColorB.substring(2,4));
    var b2 = HexToInt(ColorB.substring(4,6));

    // calculate size of step for each color component
    var rStep = Math.round((r2 - r) / len);
    var gStep = Math.round((g2 - g) / len);
    var bStep = Math.round((b2 - b) / len);

    // fill Colors array with fader colors
    for (i = 0; i < len-1; i++) {
      Colors[i] = "#" + IntToHex(r) + IntToHex(g) + IntToHex(b);
      r += rStep;
      g += gStep;
      b += bStep;
    }
    Colors[len-1] = ColorB; // make sure we finish exactly at ColorB
  }


  function setopacity(element,opacity) {
    if ( navigator.product == "Gecko" ) {
      element.style.MozOpacity=opacity;
    } else if ((navigator.appVersion.indexOf("MSIE")>0) && (parseInt(navigator.appVersion)>=4) && element.filters.alpha ) {
       element.filters.alpha.opacity=parseInt(opacity*100);
    } else {
      if (opacity==1) {
         element.style.color="";
      } else {
        element.style.color=colors[parseInt(opacity*colors.length)];
      }
    }
  }
  
  function fadein(element) {
   el = document.getElementById(element);
   col+=.05;
   setopacity(el,col);
   if(col<1)
      setTimeout('fadein("'+element+'")', 30);
  }

  function fadeout(element) {
   el = document.getElementById(element);
   col-=.05;
   setopacity(el,col)
   if(col>0)
      setTimeout('fadeout("'+element+'")', 30); 
   else
      el.style.display = 'none';
  }


  function displaytoggle(element) {
    var el = document.getElementById(element);
    if (el.style.display == 'none') {
       el.style.display = 'block';
       col = 0;
       fadein(element);
    } else {
       col = 1;
       fadeout(element);
    }
  }
  
  function browseralert() {
    if (!document.getElementById)
       alert("Seu navegador não suporta as especificações\n"+
             "necessárias para a utilização deste site.\n\n"+
             "Por favor atualize seu navegador");
  }

  function postcomment(code,type) {
     window.open(rooturl+'/postform.php?node='+code+'&type='+type,'','location=0,menubar=0,toolbar=0,status=0,scrollbars=1,width=580,height=450');
  }

  function postnewjournalentry() {
     window.open(rooturl+'/postentryform.php','','location=0,menubar=0,toolbar=0,status=0,scrollbars=1,width=580,height=450');
  }

  function postnewalbum() {
     window.open(rooturl+'/postalbumform.php','','location=0,menubar=0,toolbar=0,status=0,scrollbars=1,width=580,height=450');
  }

  function addphotos(parent) {
     window.open(rooturl+'/postpictform1.php?parent='+parent,'','location=0,menubar=0,toolbar=0,status=0,scrollbars=1,width=500,height=450');
  }


  function transition(toelement) {
    col=1;
    if ( showing == toelement )
       return;
    toel = toelement;
    setopacity(document.getElementById(toelement),0);
    transition1();
  }

  function fadepictcommto(pictindex) {
     if (curpictdesc) {
       col-=.05;
       curel = document.getElementById(curpictdesc);
       setopacity(curel,col);
       if (document.albumpicture)
          setopacity(document.albumpicture,col);
     } else {
       col=0;
     }
     
     if (col>0)
        setTimeout("fadepictcommto("+pictindex+")",20);
     else {
       if (curpictdesc) {
          curel.style.display="none";
          setopacity(curel,1);
          curpictdesc="";
       }
       pictplace=document.getElementById("albumpictplace");
       if (document.images)
       {
         loadpict=pictindex;
         preload=new Image();
         preload.onerror=setpict;
         preload.onload=setpict;
         preload.onabort=setpict;
         preload.src=picz[pictindex];
       } else {
         setpict(pictindex);
       }
     }
  }

  function setpict() {
     pictindex=loadpict;
     pictplace=document.getElementById("albumpictplace");
     pictplace.innerHTML = '<img style="filter:alpha(opacity=100);" lowsrc="images/loading.jpg" src="'+picz[pictindex]+'" name="albumpicture">';
     element=comz[pictindex];
     nextel=document.getElementById(element);
     setopacity(nextel,0);
     nextel.style.display="block";
     curpictdesc=element;
     fadepictcommto2(element);
  }

  function fadepictcommto2(element) {
   el=document.getElementById(element)
   col+=.05;
   // el.style.color="rgb(" + col + "," + col + "," + col + ")";
   setopacity(el,col);
   if (document.albumpicture)
      setopacity(document.albumpicture,col);
   if(col<1)
      setTimeout('fadepictcommto2("'+element+'")', 20); 
   else
      el.style.color='';
  }

  function transition1() {
   el=document.getElementById(showing);
   col-=.05;
   setopacity(el,col);
   if(col>0)
     setTimeout('transition1()', 30);
   else {
     if (curpictdesc && (toel != "albumplace")) {
       cpicel = document.getElementById(curpictdesc);
       cpicel.style.display='none';
       curpictdesc = "";
     }
     showelement(toel);
     setTimeout('transition2()', 30);
   }
  }

  function transition2() {
   el=document.getElementById(toel);
   col+=.05;
   setopacity(el,col);
   if(col<1) setTimeout('transition2()', 30); 
  }

  function showelement(element) {
   var el = document.getElementById(element);
   var els = document.getElementById(showing);
   els.style.display = 'none';
   el.style.display = 'block';
   showing = element;
  }

  function pictransition(picindex) {
   el = document.getElementById("album");
   comname = comz[picindex];
   pictplace = document.getElementById("albumpictplace");
   comel = document.getElementById(comname);


   if ( showing == "albumplace" ) {
      col = 1;
      fadepictcommto(picindex);
   } else {
      pictplace.innerHTML = '<img style="filter:alpha(opacity=100)" src="'+picz[picindex]+'" lowsrc="images/loading.jpg" name="albumpicture">';
      comel = document.getElementById(comname);
      comel.style.display = 'block';
      comel.style.color = '';
      curpictdesc=comname;
      transition("albumplace");
   }
  }

  getFadeColors(bgcolor,fcolor,colors);
