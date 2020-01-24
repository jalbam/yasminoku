<?php
    //Nombre:
    $title = "Yasminoku";

    //Nombre unix:
    $unix = "yasminoku";

    //Resumen:
    $summary = 'Sudoku game and solver totally written in DHTML.';
    
    //Descripcion:
    $description = 'Yasminoku is an open source sudoku game totally written in DHTML (JavaScript, CSS and HTML with newer version using CSS3 and HTML5 too) that can be controlled by mouse (or finger on mobile devices) and/or keyboard (gamepads on some devices as Wii or some remote control on some TV devices should also work). Includes sudoku solver and generator. Browser version also allows anyone to print sudokus easily.';
        
    //Version:
    $version = "0.25a";

    //Ultimos cambios:
    $last_changes = "25th July 2006, last changes beyond 16th August 2006 (approximately)";

    //Version:
    $version_new = "0.75a";

    //Ultimos cambios:
    $last_changes_new = "9th December 2014";
    
    //Url para donar:
    $donate_url = "http://sourceforge.net/donate/index.php?group_id=173641";
    
    //Se filtran los caracteres especiales a HTML:
    $title = htmlspecialchars($title);
    $unix = htmlspecialchars($unix);
    $summary = htmlspecialchars($summary);
    $description = htmlspecialchars($description);
    $version = htmlspecialchars($version);

    //Se configura el BBClone:
    define("_BBC_PAGE_NAME", $unix." homepage");
    define("_BBCLONE_DIR", "bbclone/");
    define("COUNTER", _BBCLONE_DIR."mark_page.php");
    if (is_readable(COUNTER)) include_once(COUNTER);
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="en">
    <head>
        <title><?php echo $title; ?></title>

		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
		
        <link rev="made" href="mailto:drogaslibres@hotmail.com">
        <link rel="SHORTCUT ICON" href="favicon.ico">
        
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta http-equiv="Content-Style-Type" content="text/css">
        <meta http-equiv="Content-Script-Type" content="text/javascript">
        <meta http-equiv="Content-Language" content="en">

        <meta http-equiv="Reply-To" content="drogaslibres@hotmail.com">

        <meta http-equiv="imagetoolbar" content="no">

        <meta http-equiv="Pragma" content="no-cache">
        <meta http-equiv="Cache-Control" content="no-cache">
        <meta http-equiv="expires" content="0">

        <meta name="VW96.objecttype" content="Document">
        <meta name="resource-type" content="Document">
        <meta name="DC.Type" scheme="DCMIType" content="Text">
        <!-- <meta name="DC.Format.Medium" content="text/html"> -->

        <meta name="DC.Format" content="text/html">

        <meta name="DC.Identifier" content="http://<?php echo $unix; ?>.tuxfamily.org">
        <meta name="URL" content="http://<?php echo $unix; ?>.tuxfamily.org">
        <meta http-equiv="URL" content="http://<?php echo $unix; ?>.tuxfamily.org">

        <meta name="DC.Source" content="<?php echo $title; ?>">

        <meta name="htdig-email" content="drogaslibres@hotmail.com">

        <meta name="subject" content="<?php echo $summary; ?>">
        <meta name="DC.Subject" content="<?php echo $summary; ?>">

        <meta name="generator" content="MAX's HTML Beauty++ 2004">

        <meta name="title" content="<?php echo $title; ?>">
        <meta name="DC.title" content="<?php echo $title; ?>">
        <meta http-equiv="title" content="<?php echo $title; ?>">

        <meta name="author" content="Joan Alba Maldonado">
        <meta name="autor" content="Joan Alba Maldonado">
        <meta name="DC.Creator" content="Joan Alba Maldonado">
        <meta name="DC.Publisher" content="Joan Alba Maldonado">

        <meta name="creator" content="Joan Alba Maldonado">
        <meta name="DC.creator" content="Joan Alba Maldonado">

        <meta name="keywords" content="game, javascript, dhtml, ajax, php, html, css, free, open">
        <meta name="htdig-keywords" content="game javascript dhtml ajax php html css free open">
        <meta http-equiv="keywords" content="game, javascript, dhtml, ajax, php, html, css, free, open">
 
        <meta name="description" content="<?php echo $summary; ?>">
        <meta name="DC.Description" content="<?php echo $summary; ?>">
        <meta http-equiv="description" content="<?php echo $summary; ?>">

        <meta name="distribution" content="global">
        <meta http-equiv="distribution" content="global">

        <meta name="revisit" content="1 day">
        <meta name="revisit-after" content="1 day">
        <meta name="robots" content="all">
        <meta name="GOOGLEBOT" content="all"> 

        <meta name="DC.Language" scheme="RFC1766" content="en">
        <meta name="language" content="en">

        <meta name="copyright" content="&copy; <?php echo date("Y") . " " . $title; ?>" lang="en">
        <meta name="DC.Rights" content="(c) <?php echo date("Y") . " " . $title; ?>" lang="en">
		
		<style type="text/css">
		<!--
			a, a:link
			{
				color:#0000ff;
				text-decoration:none;
			}
			
			a:hover
			{
				color:#ff0000;
				text-decoration:underline;
			}
		-->
		</style>
		<script language="javascript" type="text/javascript">
		<!--
			function changeEmailsNoSpam()
			{
				var emailLink = document.getElementById("email_link");
				if (emailLink !== null)
				{
					var innerHTMLBackup = emailLink.innerHTML.replace("NO_SPAM_PLEASE", ""); //IE fix.
					emailLink.href = emailLink.href.replace("NO_SPAM_PLEASE", "");
					emailLink.innerHTML = innerHTMLBackup;
				}

				var emailNoSpam = document.getElementById("email_no_spam");
				if (emailNoSpam !== null)
				{
					emailNoSpam.innerHTML = "";
				}
				
				return;
			}


			//Implementation of indexOf method for arrays in browsers that doesn't support it natively:
			//* Polyfill source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
			function CB_indexOf(that, searchElement, fromIndex, extendedDOM)
			{
				if (typeof(extendedDOM) == "undefined" || extendedDOM == null) { extendedDOM = false; }
				
				if (Array.prototype.indexOf && !extendedDOM) { return Array.prototype.indexOf.call(that, searchElement, fromIndex); }

				if (typeof(that) === "undefined" || that === null )
				{
					throw new TypeError( '"that" is null or not defined' );
				}

				var length = that.length >>> 0; // Hack to convert object.length to a UInt32

				fromIndex = +fromIndex || 0;

				if (Math.abs(fromIndex) === Infinity) { fromIndex = 0; }

				if (fromIndex < 0)
				{
					fromIndex += length;
					if (fromIndex < 0) { fromIndex = 0; }
				}

				for (;fromIndex < length; fromIndex++)
				{
					if (that[fromIndex] === searchElement)
					{
						return fromIndex;
					}
				}

				return -1;
			}


			//Trims a string:
			function CB_trim(string)
			{
				//Changes undefined, null or false values to empty strings:
				if (typeof(string) == "undefined" || string == null || !string) { string = ""; }

				//Parses the variable to string type:
				string = string.toString();

				//If the string is already empty, we return it:
				if (string == "") { return string; }
				
				//Trims spaces at the beginning:
				while (string.substring(0, 1) == " ")
				{
					string = string.substring(1, string.length);
				}
					
				//Trims spaces at the end:
				while (string.substring(string.length - 1, string.length) == " ")
				{
					string = string.substring(0, string.length - 1);
				}

				return string;
			}
			
			
			var base_personal = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ".", "~", "!", "'", "(", ")", "*" ];
			var base_personal_radix = base_personal.length;
			var base_por_defecto = base_personal_radix;
			function int_a_base_personal(numero)
			{
				var total = "";
				
				numero = parseInt(numero);
				
				if (isNaN(numero)) { return "0"; }
				else if (numero < 0) { numero *= -1; }
				
				if (numero >= base_personal_radix)
				{
					total = int_a_base_personal(numero / base_personal_radix);
					numero = parseInt(numero % base_personal_radix);
				}
				
				total += base_personal[numero];
				
				return total;
			}


			function base_personal_a_int(numero)
			{
				numero = "" + numero;
				var valor = CB_indexOf(base_personal, numero.substring(numero.length-1));

				//if (valor === -1) { return 0; }
				
				numero = numero.substring(0, numero.length - 1);
				if (numero !== "")
				{
					if (valor === -1)
					{
						valor = base_personal_a_int(numero);
					}
					else
					{
						valor += base_personal_a_int(numero) * base_personal_radix;
					}
				}

				if (valor === -1) { valor = 0; }
				
				return valor;
			}
			
			
			function update_base_69(value_desired)
			{
				var base_69_input = document.getElementById("base_69_input");
				var base_10_input = document.getElementById("base_10_input");
				if (base_10_input !== null && base_69_input !== null)
				{
					base_69_input.value = int_a_base_personal(!isNaN(value_desired) ? value_desired : base_10_input.value);
				}
			}
			
			
			function update_base_10(value_desired)
			{
				var base_69_input = document.getElementById("base_69_input");
				var base_10_input = document.getElementById("base_10_input");
				if (base_10_input !== null && base_69_input !== null)
				{
					base_10_input.value = base_personal_a_int(!isNaN(value_desired) ? value_desired : base_69_input.value);
				}
			}
			
		//-->
		</script>
    </head>
    <body bgcolor="#fefefe" link="#0000ff" alink="#ff0000" vlink="#0000ff" leftmargin="20" topmargin="20" marginwidth="20" marginheight="20" onLoad="setTimeout(function() { changeEmailsNoSpam(); }, 100); update_base_69(0); update_base_10(0)">
        <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <!-- <tr>
                <td>
                    <div style="position:absolute; text-align:right; width:92%;">[ <a href="bbclone/" target="_blank" title="See stats for <?php echo $title; ?>">Stats</a> ]</div>
                </td>
            </tr> -->
            <tr>
                <td>
                    <table cellspacing="0" cellpadding="0" border="0">
                        <tr>
                            <td>
                                <img src="icon.gif" alt="icon icon.gif" title="<?php echo $title; ?>" align="left" align="middle" hspace="10" vspace="0"><div style="font-family:verdana; font-size:28px; font-weight:bold; color:#aa0000;"><?php echo $title; ?></div>
                                <div style="font-family:arial; font-size:11px; font-style:italic; left:80px; position:relative; width:80%; color:#333333;">Dedicated to Yasmina Llaveria del Castillo</div>
                                <!-- <br> -->
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <font face="arial" size="3">
                                    <i><?php echo $summary; ?></i><br>
                                </font>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <br />
								<font face="courier" size="3">
                                    You can <b>donate</b> using PayPal at <a href="<?php echo $donate_url; ?>" target="_blank" title="Please, donate!"><?php echo str_replace("http://sourceforge.net", "sf.net", $donate_url); ?></a>
									<br />
									If the donation link doesn't work, try by clicking the button below:
                                </font>
                            </td>
                        </tr>
                    </table>
					<center>
						<div style="background-color:#eeeeee; padding:10px;">
							<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" style="display:inline;">
								<input type="hidden" name="cmd" value="_s-xclick">
								<input type="hidden" name="hosted_button_id" value="YL43Q3ES4MT92">
								<input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online.">
								<img alt="" border="0" src="https://www.paypalobjects.com/es_ES/i/scr/pixel.gif" width="1" height="1">
							</form>
							<br />
							<font color="#cc0000">Please, support this project!</font>
						</div>
					</center>
                </td>
            </tr>
        </table>
        <font face="verdana"><h2>Description</h2></font>
        <ul>
            <font face="arial" size="3">
                <?php echo $description; ?>
				<br>
				<br>
                This cross-platform and cross-browser game was tested under BeOS, Haiku, Linux, NetBSD, OpenBSD, FreeBSD, Windows, QNX, Android, iOS, BlackBerry PlayBook and others.
				<br>
                <br>
				<font face="arial" size="3">
						<b>Old</b> version: <?php echo $version; ?>
						<ul><li> <?php echo $last_changes; ?></li></ul>
				</font>
				<br>
				<font face="arial" size="3">
						<b>New</b> version: <?php echo $version_new; ?>
						<ul><li> <?php echo $last_changes_new; ?></li></ul>
						<ul>
							<b>Note:</b>
							<br />
							The new improved version (<?php echo $version_new; ?>) comes with some bug fixes, using some CSS3 effects and HTML5, a better mobile devices support, autosave (using Web Storage and falling back to cookies if not supported), it is printer-friendly, it adapts automatically to any screen resolution (200 x 180 is the minimum), improves browser integration (can be included easily in any web site), is available for and ported to many platforms and can be ported to many more (it is compatible with Apache Cordova, PhoneGap Build, PhoneGap, Intel XDK, BlackBerry WebWorks, virtually any browser extension guidelines and so on), and is now multilingual with language auto-detection (main version includes Chinese, English, Catalan and Spanish languages and it is very easy to add new ones).
							<br />
							<br />
							Through the new configuration menu, you can choose language (in the case you are not happy with the
							auto-detected one), disable autosave, change the way the game helps you, set the number of seconds the
							on-the-fly calculated solution is displayed and disable some visual effects (in order to improve performance).
							<br />
							<br />
							The game is specially designed to allow to be used inside any other web site (by using an IFRAME, for example).
							We just need to get the URL (which will be used in the SRC parameter of the IFRAME tag) generated by the
							&quot;Share&quot; option (inside the configuration menu). If we want to configure it even more, we can set
							or edit some parameters included in the generated URL (you can read more about it below). You could even use another
							sudoku generator and send the generated sudoku to the game through a parameter of its URL.
							<br />
							<br />
							Since you can choose the initial numbers, from 0 to 81, keep in mind that sometimes the game can generate sudokus with more than one solution.
							<br />
							<br />
							The game doesn't include any kind of advertising at all.
							<br />
							<br />
							Native ports that have been tested should work properly. Browser version will work virtually everywhere, in modern browsers as well as in old ones (including Internet Explorer 5.0).
						</ul>
				</font>
			</font>
        </ul>
		
        <font face="verdana"><h2>License</h2></font>
        <font face="arial" size="3">
            <ul>
				Keeping the name of the author in both the code and in a visible place of the game where anyone can see it is mandatory.
				<br />
				<br />
				This game is totally free for any non-commercial activity ONLY. If you want to use it in any commercial related activity (as for example a web store, a web site of any kind of company, a web site of a school which is not free, a web site with advertising, a port of the game with ads or any other kind of business, etc.), even if you do not earn any profit with the game, you need to pay a license through <a href="<?php echo $donate_url; ?>" target="_blank">PayPal</a> for 35 USD and <a href="#contact">contact me</a> after paying.
				<br />
				<br />
				The game doesn't include any kind of advertising at all. But once you pay for a commercial license, you are free to add your own advertising system to the game (Google Ads AdSense, AdMob, MobFox, Axonix, MoPub, Leadbolt, Jumptap / mMedia (Millennial Media), Airpush, AdMarvel, Burstly, Greystripe / Conversant, Aditic, Smaato, Mojiva / Mocean Mobile, appMobi, InMobi, Tapjoy, Komli Mobile, Vdopia, Appnext or any other you want).
            </ul>
		</font>
		
        <font face="verdana"><h2>Play on-line</h2></font>
        <font face="arial" size="3">
            <ul>
                <li> <b>Old</b> <?php echo $version; ?> version</li>
                <ul><li> <a href="<?php echo $unix; ?>_english/index.php" target="_blank" title="play English version">play English version</a></li></ul>
                <ul><li> <a href="<?php echo $unix; ?>_spanish/index.php" target="_blank" title="play Spanish version">play Spanish version</a></li></ul>
            </ul>
            <ul>
                <li> <b>New</b> <?php echo $version_new; ?> version (multilingual: Catalan, Chinese simplified, English and Spanish)</li>
                <ul><li> <a href="new/online/index.html" target="_blank" title="play multilingual version">play multilingual version</a></li></ul>
            </ul>
		</font>
        <font face="verdana"><h2>Download</h2></font>
        <font face="arial" size="3">
            <ul>
                <li> <b>Old</b> <?php echo $version; ?> version</li>
                <ul><li> <a href="<?php echo $unix . "_" . str_replace(".", "", $version); ?>_english.zip" title="download English version">English language</a> <i>(<?php printf("%.2f", filesize($unix. "_" . str_replace(".", "", $version) . "_english.zip") / 1024); ?> KB)</i></li></ul>
                <ul><li> <a href="<?php echo $unix . "_" . str_replace(".", "", $version); ?>_spanish.zip" title="download Spanish version">Spanish language</a> <i>(<?php printf("%.2f", filesize($unix. "_" . str_replace(".", "", $version) . "_spanish.zip") / 1024); ?> KB)</i></li></ul>
				<ul><li> <a href="<?php echo $unix . "_" . str_replace(".", "", $version); ?>_unofficial_translations.zip" title="download unofficial translations (some modified)">Unnofficial translations (some modified): Chinese simplified, Czhech (3 translations), French, German (2 translations), Hungarian and Portuguese</a> <i>(<?php printf("%.2f", filesize($unix. "_" . str_replace(".", "", $version) . "_unofficial_translations.zip") / 1024); ?> KB)</i></li></ul>
            </ul>
            <ul>
                <li> <b>New</b> <?php echo $version_new; ?> version (multilingual: Catalan, Chinese simplified, English and Spanish)</li>
                <?php
					$newVersionPorts =
						Array(
							"Original (browser) [compatible with PhoneGap Build]" => ".zip",
							"Microsoft Windows 32 bit installer (Windows XP or newer)" => "_windows_x32_xp_setup.exe",
							"Microsoft Windows 32 bit (Windows XP or newer)" => "_windows_x32.zip",
							"Apple Mac OS X / macOS (Intel)" => "_macos_x_intel.zip",
							"Linux x86 32 bit" => "_linux_x32.zip",
							"Linux x86 64 bit" => "_linux_x64.zip",
							"Raspberry Pi and compatible (Linux)" => "_raspberry_pi_linux.zip",
							"Facebook App" => "_facebook.zip",
							"Android / Nokia X / Fire OS" => "_android_nokia_x_fire_os.apk",
							"Android / Nokia X / Fire OS (minSdkVersion 7, for legacy)" => "_android_nokia_x_fire_os_minsdkversion_7.apk",
							"iOS (only 0.74a version!) [untested]" => "_074a_ios.ipa",
							"BlackBerry 10 [untested]" => "_bb10.bar",
							"BlackBerry Tablet OS (BlackBerry PlayBook)" => "_playbook.bar",
							"Nokia Series 40 (Nokia S40) / WRT Widget [untested]" => "_s40_wrt_widget.wgz",
							"W3C Packaged Web App (W3C Widget) / Nokia Asha widget [untested]" => "_w3c_asha_widget.wgt",
							"WebOS (only 0.39a version!) [untested]" => "_039a_webos.ipk",
							"Windows Phone 7.1 [untested]" => "_wp7.xap",
							"Windows Phone 8.0 &amp; 8.1 [untested]" => "_wp8.xap",
							"Windows Phone 8.0 &amp; 8.1 (0.74a version!) [untested]" => "_074a_wp8.xap",
							"Chrome OS / Chromium OS (Google Chrome App)" => "_chrome_app.zip",
							"Firefox OS (Mozilla Firefox App) / KaiOS" => "_firefox_app.zip",
							"Mozilla Firefox Add-on (before Firefox Quantum)" => "_firefox_addon.xpi",
							"Opera extension (Opera add-on), Google Chrome extension and Mozilla Firefox (Firefox Quantum or newer) Add-on" => "_opera_chrome_firefox_quantum_extension.zip",
							"Opera extension (Opera add-on), Google Chrome extension and Mozilla Firefox (Firefox Quantum or newer) Add-on - Strict mode" => "_opera_chrome_firefox_quantum_extension_strict.zip",
							"Safari extension" => "_safari_extension.safariextz",
							"Microsoft Edge extension" => "_edge_extension.appx",
							"Full pack (includes all versions and ports)" => "_full_pack.zip"
						);
						
						$fileName = "";
						foreach ($newVersionPorts as $name => $fileEnd)
						{
							$fileName = "new/" . $unix . "_" . str_replace(".", "", $version_new) . $fileEnd;
							if (!file_exists($fileName)) { $fileName = "new/" . $unix . $fileEnd; }
							if (!file_exists($fileName)) { $fileName = $fileEnd; }
							if (!file_exists($fileName))
							{
								$fileName = "/data/repository/" . $unix . "/static/" . $unix . "_" . str_replace(".", "", $version_new) . $fileEnd;
								$fileNameLink = "http://download.tuxfamily.org/yasminoku/static/" . $unix . "_" . str_replace(".", "", $version_new) . $fileEnd;
							}
							else { $fileNameLink = $fileName; }
							
							///////if (!file_exists($fileName) || !file_exists($fileNameLink)) { continue; }
							
							echo '<ul><li>';
								echo '<a href="' . $fileNameLink . '" title="download ' . $name . ' version [' . str_replace("new/", "", $fileName) . ']">';
									echo $name;
								echo '</a> ';
								echo '<i>(';
									$fileSize = filesize($fileName) / 1024;
									$fileSizeUnit = "KB";
									if ($fileSize > 1024) { $fileSize /= 1024; $fileSizeUnit = "MB"; }
									printf("%.2f", $fileSize);
								echo ' ' . $fileSizeUnit . ')</i>';
							echo '</li></ul>';
						}
				?>
			</ul>
		</font>
        <font face="verdana"><h2>Possible future ports</h2></font>
        <ul>
			<li>BeOS / yellowTab Zeta (magnussoft ZETA) / Haiku</li>
			<li>PWA (Progressive Web App)</li>
			<li>UWP (Universal Windows Platform)</li>
			<li>iPadOS</li>
			<li>Apple TV (tvOS)</li>
			<li>QNX</li>
			<li>*BSD (NetBSD, OpenBSD, FreeBSD, DragonFly BSD...)</li>
			<li>AtheOS / Syllable (Syllable Desktop)</li>
			<li>SkyOS</li>
			<li>OS/2 / eComStation</li>
			<li>AmigaOS / MorphOS / AROS (Icaros Desktop / Broadway / AspireOS / AROS Vision / AEROS)</li>
			<li>RISC OS</li>
			<li>eyeOS, ZeroPC, Joli OS (Jolicloud), Glide OS, SilveOS (Silve Cloud OS), iSpaces Cloud Computer, Cloudo, xOS, ZimDesk, The Places A, Glide OS, AirSet, Corneli OS, AstraNOS, BeDesk, cmyOS, Desktoptwo, DoxBoard, GCOE X, G.ho.st, Goowy, Jooce, MyBooo, myGoya, OOS, Parakey, Psych Desktop, Purefect Desktop, SSOE, StartForce, Orca Desktop, Xindesk, Webdesk, Webdows, YouOS, Fenestela, Psych Desktop, Virtual-OS, ZKDesktop, DesktopOnDemand, Free Live OS Zoo, Nivio, Licid, Schmedley,  etc.</li>
			<li>Netvibes, Widgetop, Google gadget, Yahoo! widget (My Yahoo / MyYahoo), DesktopX widget, Kapsules widget, Samurize widget, AveDesk desklet, KlipFolio, Favoor, Inbox.com, Protopage, start.me, igHome, Symbaloo, Dash (thedash.com), start.io, Dashing, Mywebgrid, gWidgets, uStart.org, Startific, Spaaze, Flexlinked, Favmee, Domostra, Nollr, mynostos, Damage (Dashboard Manager for Google), iFroggles, blueg,  etc.</li>
			<li>Internet Explorer extension</li>
			<li>Windows Vista & 7 Gadget/Widget (Sidebar)</li>
			<li>Windows 8 live tile</li>
			<li>Mac OS X Dashboard widget</li>
			<li>Android widget</li>
			<li>Screenlet (Compiz)</li>
			<li>KDE/Gnome/etc. widget</li>
			<li>Blogger widget</li>
			<li>Drupal module</li>
			<li>WordPress plugin</li>
			<li>Joomla! extensions / plugin</li>
			<li>Pocket PC / Windows Mobile / Windows CE</li>
			<li>Palm OS / Garnet OS</li>
			<li>SHR (Stable Hybrid Release)</li>
			<li>Tizen</li>
			<li>Bada / Nucleus RTOS</li>
			<li>LuneOS</li>
			<li>Samsung Gear</li>
			<li>Mer / Sailfish OS (Jolla) / Nemo Mobile / Yuanxin OS</li>
			<li>Maemo / Moblin / Harmattan / MeeGo</li>
			<li>Qt Extended, Qt Extended Improved, Qtopia, Openmoko Linux, QtMoko, Ångström distribution, OpenZaurus (GPE, OPIE), Access Linux Platform (ALP), etc.</li>
			<li>Amazon Kindle (legacy)</li>
			<li>Ubuntu Touch</li>
			<li>Ubuntu TV</li>
			<li>Ubuntu Phone</li>
			<li>Open webOS / webOS / webOS TV (Palm, LG, HP...)</li>
			<li>Android TV</li>
			<li>Opera TV</li>
			<li>Smart TV</li>
			<li>Espial TV</li>
			<li>Sony TV</li>
			<li>Ekioh TV</li>
			<li>Panasonic HTML5 (Viera?)</li>
			<li>Zetakey TV</li>
			<li>Samsung TV</li>
			<li>LG Smart TV</li>
			<li>Toshiba TV</li>
			<li>etc.</li>
        </ul>
        <font face="verdana"><h2>Stores (Markets) and Links</h2></font>
        <ul>
			<li><a href="https://apps.facebook.com/yasminoku/" target="_blank">Facebook (Facebook app)</a></li>
			<li><a href="https://play.google.com/store/apps/details?id=com.yasminoku" target="_blank">Google Play / Android Market</a></li>
			<li><a href="http://appworld.blackberry.com/webstore/content/53234887/" target="_blank">BlackBerry World (BB10)</a></li>
			<li><a href="http://appworld.blackberry.com/webstore/content/59948413/" target="_blank">BlackBerry Store (PlayBook)</a></li>
			<li><a href="http://www.windowsphone.com/en-us/store/app/yasminoku/76ce8c73-461c-431b-b001-85155e642b66" target="_blank">Windows Phone Store (WP 7.1, 8.0 and 8.1)</a> / <a href="https://www.microsoft.com/en-us/store/apps/yasminoku/9wzdncrdmn56" target="_blank">Microsoft store (WP 7.1, 8.0 and 8.1)</a></li>
			<li><a href="http://store.ovi.com/content/519390" target="_blank">Nokia Store / Ovi (Nokia X)</a></li>
			<li><a href="http://store.indiecity.com/projects/yasminoku" target="_blank">IndieCity / Pi Store (Raspberry Pi)</a></li>
			<li><a href="http://www.amazon.com/gp/product/B00RN21OTY" target="_blank">Amazon Appstore for Android (Amazon Kindle Fire, Amazon Fire TV, Amazon Fire TV Stick, Fire Phone, etc.)</a></li>
			<li><a href="http://www.amazon.com/dp/B00RN2IVYA" target="_blank">Amazon Appstore for Android (Mobile web)</a></li>
			<li><a href="http://www.amazon.com/gp/product/B00RN3FU4I" target="_blank">Amazon Digital Services (Mac) [USA]</a></li>
			<li><a href="http://www.amazon.com/gp/product/B00RN2QN6S" target="_blank">Amazon Digital Services (PC) [USA]</a></li>
			<li><a href="http://android.oms.apps.opera.com/en_us/yasminoku.html?pos=1" target="_blank">Opera Mobile Store (Android)</a></li>
			<li><a href="http://windows-mobile.oms.apps.opera.com/en_us/yasminoku.html?pos=1" target="_blank">Opera Mobile Store (Windows Mobile)</a></li>
			<li><a href="http://windows-phone.oms.apps.opera.com/en_us/yasminoku.html?pos=1" target="_blank">Opera Mobile Store (Windows Phone)</a></li>
			<li><a href="http://symbian.oms.apps.opera.com/en_us/yasminoku.html?pos=1" target="_blank">Opera Mobile Store (Symbian)</a></li>
			<li><a href="http://ios.oms.apps.opera.com/en_us/yasminoku.html?pos=1" target="_blank">Opera Mobile Store (iOS)</a></li>
			<li><a href="http://html5.oms.apps.opera.com/en_us/yasminoku.html" target="_blank">Opera Mobile Store (HTML5)</a></li>
			<li><a href="http://apps.samsung.com/mercury/topApps/topAppsDetail.as?productId=000000973082" target="_blank">Samsung Apps Store / Samsung GALAXY Apps</a></li>
			<li><a href="https://marketplace.firefox.com/app/yasminoku" target="_blank">Firefox Marketplace (Firefox app)</a></li>
			<li><a href="https://addons.mozilla.org/en-US/firefox/addon/yasminoku/" target="_blank">Mozilla Add-ons (old versions, before Firefox Quantum)</a></li>
			<li><a href="https://addons.mozilla.org/en-US/firefox/addon/yasminoku_new/" target="_blank">Mozilla Add-ons (new versions, Firefox Quantum or newer)</a></li>
			<li><a href="https://chrome.google.com/webstore/detail/yasminoku/laeiefbgjkigkhopgalbkobendgangih" target="_blank">Chrome Web Store (Chrome app)</a></li>
			<li><a href="https://chrome.google.com/webstore/detail/yasminoku/dllbooohnicnoeibmicnmopnhejpjgmm" target="_blank">Chrome Web Store (Chrome extension)</a></li>
			<li><a href="https://addons.opera.com/en/extensions/details/yasminoku/" target="_blank">Opera add-on (Opera extension)</a></li>
			<li><a href="https://www.microsoft.com/en-us/p/yasminoku-extension/9nbg3d7057c2" target="_blank">Microsoft Edge extension</a></li>
			<li><a href="http://slideme.org/application/yasminoku" target="_blank">SlideME</a></li>
			<li><a href="http://sourceforge.net/projects/yasminoku" target="_blank">SourceForge.net</a></li>
			<li><a href="https://yasminoku.codeplex.com/" target="_blank">Codeplex</a></li>
			<li><a href="http://code.google.com/p/yasminoku" target="_blank">Google Code</a></li>
			<li><a href="https://github.com/jalbam/yasminoku" target="_blank">GitHub</a></li>
			<li><a href="http://freecode.com/projects/yasminoku" target="_blank">Freecode</a> (<a href="http://freshmeat.net/projects/yasminoku/" target="_blank">Freshmeat</a>)</li>
			<li><a href="http://www.bebits.com/app/4380" target="_blank">BeBits (BeOS / Haiku)</a></li>
			<li><a href="http://www.haikuware.com/directory/view-details/games/board/yasminoku" target="_blank">Haikuware (BeOS / Haiku)</a></li>
			<li><a href="http://jalbam.itch.io/yasminoku" target="_blank">itch.io</a></li>
			<li><a href="http://www.desura.com/games/yasminoku" target="_blank">Desura</a></li>
			<li><a href="http://www.indiedb.com/games/yasminoku" target="_blank">IndieDB (Indie DB)</a> / <a href="http://www.moddb.com/games/yasminoku" target="_blank">Mod DB</a></li>
			<li><a href="http://alternativeto.net/software/yasminoku/" target="_blank">AlternativeTo</a></li>
			<li><a href="http://www.booleansoup.com/index.php?p=gallerygames&mode=view_item&type=full&id=75" target="_blank">Boolean Soup</a></li>
			<li><a href="http://www.genbeta.com/web/8-juegos-web-que-no-requieren-flash-ni-java" target="_blank">Genbeta (blog)</a></li>
			<li><a href="http://www.vidaextra.com/casual-games/8-juegos-gratis-sin-flash-ni-java" target="_blank">Vidaextra (blog)</a></li>
			<li><a href="http://www.libertaddigital.com/servicios/juegos/sudoku.php" target="_blank">Libertad Digital (newspaper)</a></li>
			<li><a href="http://download.chip.eu/en/Yasminoku-0.25_164175.html" target="_blank">Chip.eu / CHIP Online</a> (<a href="http://www.chip.de/downloads/Yasminoku_21269117.html" target="_blank">Chip.de</a>)</li>
			<li><a href="http://linux.softpedia.com/get/GAMES-ENTERTAINMENT/Puzzle/Yasminoku-16456.shtml" target="_blank">Softpedia</a></li>
			<li><a href="http://www.downloadatoz.com/utility_directory/yasminoku/" target="_blank">DownloadAtoZ</a></li>
			<li><a href="http://www.abcdatos.com/programas/programa/z5534.html" target="_blank">ABCdatos</a></li>
			<li><a href="http://yasminoku.programas-gratis.net/" target="_blank">Programas-gratis.net</a></li>
			<li><a href="http://yasminoku.wprogramas.com/" target="_blank">WProgramas.com</a></li>
			<li><a href="http://yasminoku.programasejogos.com/" target="_blank">Programas & Jogos</a></li>
			<li><a href="http://www.programasgratis.com/juegos/pasatiempos/yasminoku-0-25-l2170.html" target="_blank">ProgramasGratis.com</a></li>
			<li><a href="http://www.juegos-gratis.net/descargar_gratis/yasminoku" target="_blank">Juegos-gratis.net</a></li>
			<li><a href="http://www.learn4good.com/games/mobile/sudoku.htm" target="_blank">Learn4Good</a></li>
        </ul>
        <font face="verdana"><h2>Screenshots</h2></font>
        <ul>
			<li> <b>Old</b> <?php echo $version; ?> version (0.22a indeed)</li>
			<img src="<?php echo $unix; ?>.gif" hspace="0" vspace="0" alt="screenshot <?php echo $unix; ?>.gif" title="<?php echo $title; ?>" style="width:auto; max-width:100%; height:auto; display:block;">
        </ul>
        <ul>
			<li> <b>New</b> <?php echo $version_new; ?> version</li>
			<img src="<?php echo $unix; ?>_new.jpg" hspace="0" vspace="0" alt="screenshot <?php echo $unix; ?>_new.jpg" title="<?php echo $title; ?>" style="width:auto; max-width:100%; height:auto; display:block;">
		</ul>
		<font face="verdana"><h2>Some software used</h2></font>
        <ul>
            <li><a href="http://www.htmlbeauty.com/" target="_blank">MAX's HTML Beauty++ 2004</a></li>
			<li><a href="http://notepad-plus-plus.org/" target="_blank">Notepad++</a></li>
			<li><a href="http://www.gimp.org/" target="_blank">GIMP</a></li>
			<li><a href="https://build.phonegap.com/" target="_blank">Adobe PhoneGap Build</a></li>
			<li><a href="https://github.com/rogerwang/node-webkit" target="_blank">node-webkit by Roger Wang</a></li>
			<li><a href="https://github.com/jyapayne/Web2Executable" target="_blank">Web2Executable by jyapayne</a></li>
			<li><a href="http://developer.blackberry.com/html5/" target="_blank">BlackBerry 10 WebWorks SDK (HTML5 WebWorks)</a></li>
			<li><a href="http://developer.blackberry.com/playbook/html5/" target="_blank">BlackBerry WebWorks SDK for Tablets (BlackBerry WebWorks SDK for PlayBook OS)</a></li>
			<li><a href="https://developer.mozilla.org/en-US/Add-ons/SDK" target="_blank">Mozilla Add-on SDK</a></li>
			<li><a href="http://www.jrsoftware.org/isinfo.php" target="_blank">Inno Setup</a></li>
        </ul>
        <font face="verdana"><h2>Use it in your web site</h2></font>
        <ul>
			<li>
				<b>Include the following code in your web site (inside the BODY tag):</b>
				<br />
				<div style="font-size:9px; font-family:arial; width:99%; overflow:auto; padding:5px; background-color:#ddffdd;">
					<font color="#333333">
						<?php
							$iframeURL = "http://dhtmlgames.com/yasminoku/online/index.html";
						?>
						&lt;!-- (c) Yasminoku by Joan Alba Maldonado (joanalbamaldonadoNO_SPAM_PLEASE@gmail.com). Forbidden to publish, copy or modify without mentioning the author's name. --&gt;<br />
						&lt;iframe src=&quot;<font color="#ff9999"><?php echo $iframeURL; ?></font>&quot; id=&quot;yi&quot; name=&quot;yi&quot; frameborder=&quot;0&quot; width=&quot;<font color="#ff9999">280</font>&quot; height=&quot;<font color="#ff9999">420</font>&quot; marginwidth=&quot;0&quot; marginheight=&quot;0&quot; style=&quot;border:0px;&quot;&gt;&lt;/iframe&gt;<br />
						&lt;script language=&quot;javascript&quot; type=&quot;text/javascript&quot;&gt;<br />
						&lt;!--<br />
							<ul>
								var eL=window.onload;window.onload=function(){if(typeof(eL)!==u){try{eL();}catch(E){}}setInterval(yF,10);};//Comment this line if your page is scrollable!
								<br />
								function yF(e,t){if(typeof yi===u||yi===n){yi=document.getElementById(&quot;yi&quot;)}if(yi!==n){try{yi.contentWindow.document.body.focus()}catch(r){try{yi.focus()}catch(r){try{window.frames[&quot;yi&quot;].document.body.focus()}catch(r){}}}if(e&&t){try{if(typeof yi.contentWindow!==u){yi.contentWindow.tecla_pulsada(t)}else if(typeof yi.window!==u){yi.window.tecla_pulsada(t)}else{var i=n;if(typeof yi.document!==u){i=yi.document}else if(typeof yi.contentDocument!==u){i=yi.contentDocument}if(i!==n){if(typeof i.defaultView!==u){i.defaultView.tecla_pulsada(t)}else if(typeof i.parentWindow!==u){i.parentWindow.tecla_pulsada(t)}}}}catch(r){}}}return false}var yi;var u=&quot;undefined&quot;;var n=null;
								<br />
								var eK=document.onkeydown;document.onkeydown=function(e){if(typeof(eL)!==u){try{eL(e);}catch(E){}}if(!e){if(typeof event!==u){e=event}else if(typeof window.event!==u){e=window.event}else if(typeof Event!==u){e=Event}}yF(true,e)}
							</ul>
						//--&gt;<br />
						&lt;/script&gt;
					</font>
				</div>
				<br />
				<b>Note:</b>
					<br />
					You can attach the game with the desired preferences. You just need to change the <font color="#ff9999">SRC</font> attribute of the IFRAME tag adding the URL parameters that will change the game options. These are the parameters:
					<br />
			</li>
        </ul>
		<?php
			$URLPreferences =
				Array(
					'<font color="#333333"><tt>sudoku</tt></font><br />(or <font color="#333333"><tt>n</tt></font>)' =>
						'
							The desired sudoku (numbers already set by the game that cannot be changed by the user).
							<br />
							The value must be a string of numbers (0 to 9) and each digit will belong to a sudoku cell (starting from left to right and up to down). Zero (0) means an empty cell. All last zeros from the string are not necessary and can be omitted if there is no other different number (1 to 9) after them (in this case we don\'t need to use a string of 81 digits).
							<br />
							<div style="width:100%; word-break:break-all; word-wrap:break-word; overflow:auto;">
								<b>Example</b>:
								<font color="#333333">
								<tt>
								sudoku=000006789123456789123456789123450000003456789123456789123456789123456789123000000
								</tt>
								</font>
								(or <font color="#333333"><tt>n=000006789123456789123456789123450000003456789123456789123456789123456789123</tt></font>)
							</div>
						',
					'<font color="#333333"><tt>introduced</tt></font><br />(or <font color="#333333"><tt>d</tt></font>)' =>
						'
							The desired introduced numbers (numbers already set by the user which the user can change).
							<br />
							The value must be a string of numbers (0 to 9). The sudoku will be filled with these numbers starting from the first empty cell. Each digit of this string belongs to an empty cell present in the sudoku (starting from left to right and up to down) without having in mind the cells which are not empty. Zero (0) is used to jump an empty cell without affecting it (leaving it empty). All last zeros from the string are not necessary and can be omitted if we don\'t want to affect more cells.
							<br />
							This parameter will be ignored if the parameter <b>sudoku</b> (or equivalent) is not given.
							<br />
							<div style="width:100%; word-break:break-all; word-wrap:break-word; overflow:auto;">
								<b>Example</b>:
								<font color="#333333">
								<tt>
									introduced=00123000
								</tt>
								</font>
								(or <font color="#333333"><tt>d=00123</tt></font>)
							</div>
						',
					'<font color="#333333"><tt>language</tt></font><br />(or <font color="#333333"><tt>l</tt></font>)' =>
						'
							Desired language for the game.
							<br />
							Unless there are new translations for the game, possible values are <b>ca</b>, <b>en</b>, <b>es</b>, <b>zh</b> (Catalan, English, Spanish and Chinese simplified respectively).
							<br />
							It is better not to use this parameter since by default the game will detect the language of the user automatically. If we use a language that the game does not support, the parameter will be ignored.
							<br />
							<div style="width:100%; word-break:break-all; word-wrap:break-word; overflow:auto;">
								<b>Example</b>:
								<font color="#333333">
								<tt>
									language=es
								</tt>
								</font>
								(or <font color="#333333"><tt>l=es</tt></font>)
							</div>
						',
					'<font color="#333333"><tt>show_panel</tt></font><br />(or <font color="#333333"><tt>p</tt></font>)' =>
						'
							If the value is set to <b>no</b> (or <b>n</b>), the panel which is placed below in the game (with the menu for the initial numbers) will be hidden when the game starts. Otherwise, any other value (or when the parameter is not set) will make that panel show (which is the default behaviour).
							<br />
							<div style="width:100%; word-break:break-all; word-wrap:break-word; overflow:auto;">
								<b>Example</b>:
								<font color="#333333">
								<tt>
									show_panel=no
								</tt>
								</font>
								(or <font color="#333333"><tt>p=n</tt></font>)
							</div>
						',
					'<font color="#333333"><tt>autosave</tt></font><br />(or <font color="#333333"><tt>a</tt></font>)' =>
						'
							If the value is set to <b>no</b> (or <b>n</b>), the autosave (which saves all game progress and options set automatically) will be disabled. Otherwise, any other value (or when the parameter is not set) will enable the autosave (which is the default behaviour).
							<br />
							<div style="width:100%; word-break:break-all; word-wrap:break-word; overflow:auto;">
								<b>Example</b>:
								<font color="#333333">
								<tt>
									autosave=no
								</tt>
								</font>
								(or <font color="#333333"><tt>a=n</tt></font>)
							</div>
						',
					'<font color="#333333"><tt>initial_numbers</tt></font><br />(or <font color="#333333"><tt>i</tt></font>)' =>
						'
							The initial numbers (from 0 to 81) used to create a random sudoku when the game starts.
							<br />
							This parameter will be ignored if the parameter <b>sudoku</b> (or equivalent) is given.
							<br />
							By default is 38.
							<br />
							<div style="width:100%; word-break:break-all; word-wrap:break-word; overflow:auto;">
								<b>Example</b>:
								<font color="#333333">
								<tt>
									initial_numbers=57
								</tt>
								</font>
								(or <font color="#333333"><tt>i=57</tt></font>)
							</div>
						',
					'<font color="#333333"><tt>aspect</tt></font><br />(or <font color="#333333"><tt>x</tt></font>)' =>
						'
							Defines whether the game should be stretched to fit the screen (or its container or any view port used) or otherwise it should keep a proportional aspect ratio (using <b>proportional</b> or <b>p</b> as value).
							<br />
							By default the game stretches.
							<br />
							<div style="width:100%; word-break:break-all; word-wrap:break-word; overflow:auto;">
								<b>Example</b>:
								<font color="#333333">
								<tt>
									aspect=p
								</tt>
								</font>
								(or <font color="#333333"><tt>x=p</tt></font>)
							</div>
						',
					'<font color="#333333"><tt>solution_seconds</tt></font><br />(or <font color="#333333"><tt>s</tt></font>)' =>
						'
							Seconds that the game will show the solution calculated on the fly.
							<br />
							It must be an even number from 0 to 300 (recommended at least 6 or more).
							<br />
							By default is 8.
							<br />
							<div style="width:100%; word-break:break-all; word-wrap:break-word; overflow:auto;">
								<b>Example</b>:
								<font color="#333333">
								<tt>
									solution_seconds=11
								</tt>
								</font>
								(or <font color="#333333"><tt>s=11</tt></font>)
							</div>
						',
					'<font color="#333333"><tt>lightweight</tt></font><br />(or <font color="#333333"><tt>t</tt></font>)' =>
						'
							Disables some effects to make the game faster in some old devices (it will look uglier!).
							<br />
							We can set the value to <b>medium</b> (or <b>m</b>) to disable some expensive effects as box-shadows and others which can slow quite a bit some old machines. To disable almost all effects, for very slow devices, we can set the value as <b>ultra</b> (or <b>u</b>).
							<br />
							By default it will use all possible effects.
							<div style="width:100%; word-break:break-all; word-wrap:break-word; overflow:auto;">
								<b>Example</b>:
								<font color="#333333">
								<tt>
									lightweight=medium
								</tt>
								</font>
								(or <font color="#333333"><tt>t=m</tt></font>)
							</div>
						',
					'<font color="#333333"><tt>help</tt></font><br />(or <font color="#333333"><tt>h</tt></font>)' =>
						'
							Enables or disables some help that makes the game easier for the user.
							<br />
							If we use the value set to <b>all</b> (or <b>a</b>), the user will receive help to avoid repeating both numbers that were already written in the sudoku (fixed numbers set by the game) and numbers which the user has already entered before.
							<br />
							If we use the value set to <b>fixed_only</b> (or <b>f</b>), the user will receive help to avoid repeating just the numbers which the game has already set for the sudoku (without paying attention to the numbers set by the user).
							<br />
							Any other value will disable any kind of help.
							<br />
							By default, the value used is <b>fixed_only</b>.
							<div style="width:100%; word-break:break-all; word-wrap:break-word; overflow:auto;">
								<b>Example</b>:
								<font color="#333333">
								<tt>
									help=all
								</tt>
								</font>
								(or <font color="#333333"><tt>h=a</tt></font>)
							</div>
						',
					'<font color="#333333"><tt>k</tt></font>' =>
						'
							If we want to use this parameter, it must contain the following parameter values (using single letter values is mandatory when is possible) but compressed in this order: value for <b>p</b>, value for <b>a</b>, value for <b>i</b>, value for <b>x</b>, value for <b>s</b>, value for <b>t</b> and value for <b>h</b>.
							<br />
							All those seven (7) parameter values must be used, without omitting any of them, and always in the same order. We don\'t use any character to separate them. In the case we do not want to specify a language, in order to force automatic detection, we should use two characters that does not belong to any language (as for example k=--yy38s8nf, where &quot;--&quot; cannot be a language).
							<div style="width:100%; word-break:break-all; word-wrap:break-word; overflow:auto;">
								<b>Example</b>:
								<font color="#333333">
								<tt>
									k=esyy38s8nf
								</tt>
								</font>
								(this would mean l=es, p=y, a=y, i=38, x=s, s=8, t=n and h=f)
							</div>
						',
					'<font color="#333333"><tt>c</tt></font>' =>
						'
							This parameter allows you to compress the URL using this format:
							<br />
							<font color="#aa0000"><i>sudoku-in-base-69</i></font><b>_</b><font color="#aa0000"><i>introduced-numbers-in-base-69</i></font><b>_</b><font color="#aa0000"><i>k</i></font>
							<br />
							Where &quot;sudoku-in-base-69&quot; is the sudoku compressed in base 69, &quot;introduced-numbers-in-base-69&quot; are the introduced numbers in base 69 and &quot;k&quot; are the options of the game compressed the same way as in the &quot;k&quot; parameter. All of the three values are optional. You can learn about how to compress to base 69 below.
							<div style="width:100%; word-break:break-all; word-wrap:break-word; overflow:auto;">
								<b>Examples</b>:
								<br />
								<font color="#333333">
								<tt>
									c=1bsV-HiiFT-1hiLx-dn2o2-8uvyB-365)v-3lXNx-SOTKj-3)5*h_4SR*P_esyy38s8nf
								</tt>
								</font>
								(with sudoku, itroduced numbers and options)
								<br />
								<font color="#333333">
								<tt>
									c=1bsV-HiiFT-1hiLx-dn2o2-8uvyB-365)v-3lXNx-SOTKj-3)5*h__esyy38s8nf
								</tt>
								</font>
								(with sudoku and options. Note the double &quot;_&quot;)
								<br />
								<font color="#333333">
								<tt>
									c=1bsV-HiiFT-1hiLx-dn2o2-8uvyB-365)v-3lXNx-SOTKj-3)5*h_4SR*P
								</tt>
								</font>
								(with sudoku and introduced numbers)
								<br />
								<font color="#333333">
								<tt>
									c=1bsV-HiiFT-1hiLx-dn2o2-8uvyB-365)v-3lXNx-SOTKj-3)5*h
								</tt>
								</font>
								(with sudoku only)
								<br />
								<font color="#333333">
								<tt>
									c=_4SR*P_esyy38s8nf
								</tt>
								</font>
								(with introduced numbers and options. Note the &quot;_&quot; at the beginning)
								<br />
								<font color="#333333">
								<tt>
									c=_4SR*P
								</tt>
								</font>
								(with introduced numbers only. Note the &quot;_&quot; at the beginning)
								<br />
								<font color="#333333">
								<tt>
									c=__esyy38s8nf
								</tt>
								</font>
								(with options only. Note the double &quot;_&quot; at the beginning. In this case it would be better to just use the &quot;k&quot; parameter)
								<br />
								<br />
								<b>Explanation about base 69 compression</b>:
								<br />
								Base 69 uses 69 different characters to represent numbers. The following are the existing characters in base 69 and their corresponding value in decimal system (ten base):
								<br />
								<tt>
								0 = 0<br />
								1 = 1<br />
								2 = 2<br />
								3 = 3<br />
								4 = 4<br />
								5 = 5<br />
								6 = 6<br />
								7 = 7<br />
								8 = 8<br />
								9 = 9<br />
								A = 10<br />
								B = 11<br />
								C = 12<br />
								D = 13<br />
								E = 14<br />
								F = 15<br />
								G = 16<br />
								H = 17<br />
								I = 18<br />
								J = 19<br />
								K = 20<br />
								L = 21<br />
								M = 22<br />
								N = 23<br />
								O = 24<br />
								P = 25<br />
								Q = 26<br />
								R = 27<br />
								S = 28<br />
								T = 29<br />
								U = 30<br />
								V = 31<br />
								W = 32<br />
								X = 33<br />
								Y = 34<br />
								Z = 35<br />
								a = 36<br />
								b = 37<br />
								c = 38<br />
								d = 39<br />
								e = 40<br />
								f = 41<br />
								g = 42<br />
								h = 43<br />
								i = 44<br />
								j = 45<br />
								k = 46<br />
								l = 47<br />
								m = 48<br />
								n = 49<br />
								o = 50<br />
								p = 51<br />
								q = 52<br />
								r = 53<br />
								s = 54<br />
								t = 55<br />
								u = 56<br />
								v = 57<br />
								w = 58<br />
								x = 59<br />
								y = 60<br />
								z = 61<br />
								. = 62<br />
								~ = 63<br />
								! = 64<br />
								\' = 65<br />
								( = 66<br />
								) = 67<br />
								* = 68
								</tt>
								<br />
								<b>Note the difference between capitalized letters and lower-case ones.</b>
								<br />
								<br />
								Let\'s imagine we have the following sudoku (following the rules of the &quot;n&quot; parameter):
								<br />
								<tt>093080020400307150702000308800000604600518073130076285040060537006700000207</tt>
								<br />
								<br />
								First, we need to have the sudoku with all numbers (81 in total). So we fill the lost zeros at the end (remember that the &quot;k&quot; parameter allows to avoid writing zeros at the end of the sudoku):
								<br />
								<tt>093080020400307150702000308800000604600518073130076285040060537006700000207000000</tt>
								<br />
								<br />
								Now, we split the sudoku in pieces of 9 numbers each using a hyphen (&quot;-&quot;):
								<br />
								<tt>093080020-400307150-702000308-800000604-600518073-130076285-040060537-006700000-207000000</tt>
								<br />
								<br />
								The last step consists in transforming each piece into base 69 (we still keep the hyphens):
								<br />
								<tt>47NZt-HjcW.-U(!5Z-ZKH3j-QY0qX-5o(Ec-1q\'LY-KRIV-998I0</tt>
								<br />
								<b>Note 1:</b> if any piece has zeros (0) on its left, they can be omitted: <tt><b>KRIV</b></tt> would be the same as <tt><b>00KRIV</b></tt>.
								<br />
								<b>Note 2:</b> in the case we had pieces which are empty (0), they do not need to be written. So <tt><b>47NZt-HjcW.-U(!5Z-ZKH3j-QY0qX-5o(Ec-1q\'LY-0-998I0</b></tt> and <tt><b>47NZt-HjcW.-U(!5Z-ZKH3j-QY0qX-5o(Ec-1q\'LY--998I0</b></tt> would be the same (note the double hyphen).
								<br />
								<b>Note 3:</b> in the case we had pieces which are empty (0) at the end, they do not need to be written and we do not even need their hyphen. So <tt><b>47NZt-HjcW.-U(!5Z-ZKH3j-QY0qX-5o(Ec-1q\'LY-0-0</b></tt> and <tt><b>47NZt-HjcW.-U(!5Z-ZKH3j-QY0qX-5o(Ec-1q\'LY</b></tt> would be the same.
								<br />
								<br />
								As you can see, the original sudoku had 75 characters and now just 53. We have saved 22 characters!
								<br />
								<br />
								To compress the introduced numbers we just need to follow the same rules starting from the value of the &quot;d&quot; parameter.
								<br />
								<br />
								Here you have a simple decimal to base 69 (and vice versa) converter that you can use to convert each piece:
								<br />
								<table border="0" bgcolor="#dddddd" bordercolor="#eeeeee" cellspacing="2" cellpadding="2" style="border:1px solid #eeeeee;">
									<tr>
										<td align="center">Base 10:<br /><input type="text" value="0" size="9" maxlength="9" id="base_10_input" onChange="setTimeout(update_base_69, 100);" onKeyDown="setTimeout(update_base_69, 100);" onKeyPress="setTimeout(update_base_69, 100);" /></td>
									</tr>
									<tr>
										<td align="center">Base 69:<br /><input type="text" value="0" size="5" maxlength="5" id="base_69_input" onChange="setTimeout(update_base_10, 100);" onKeyDown="setTimeout(update_base_10, 100);" onKeyPress="setTimeout(update_base_10, 100);" /></td>
									</tr>
								</table>
							</div>
						'
				);
			?>
			<table cellspacing="0" cellpadding="6" width="100%" style="border:1px solid #eeeeee;">
				<tr>
					<td width="120" align="center" valign="middle" bgcolor="#eeeeee" style="font-size:12px; font-family:verdana; background-color:#eeeeee; border-top:1px dashed #ffffff; word-break:break-all; word-wrap:break-word; overflow:auto;"><center><b>URL<br />parameter</b></center></td>
					<td align="center" valign="middle"><center><b>Description</b></center></td>
				</tr>
			</table>
			<?php
			foreach ($URLPreferences as $option => $optionDescription)
			{
			?>
				<table cellspacing="0" cellpadding="6" width="100%" style="border:1px solid #eeeeee;">
					<tr>
						<td width="120" align="center" valign="top" bgcolor="#eeeeee" style="font-size:11px; font-family:arial; background-color:#eeeeee; border-top:1px dashed #ffffff; word-break:break-all; word-wrap:break-word; overflow:auto;">
							<center>
								<?php echo trim($option); ?>
							</center>
						</td>
						<td align="left" valign="middle" style="font-size:11px; font-family:verdana;"><?php echo trim($optionDescription); ?></td>
					</tr>
				</table>
			<?php
			}
		?>
        <ul>
			In the case you have downloaded the game and uploaded it to your own server (which is recommended), you can modify the <font color="#ff9999">SRC</font> attribute of the IFRAME tag to point to the new game location. If you use your own server you will not depend on the official server which could be down sometimes and that way you should gain some reliability and faster speed loading the game but on the other hand you will not be using the newest version, including some possible bug fixes, improvements and even new language translations, as soon as it is released unless you pay attention to the new releases and update your server with the newest version always.
			<br />
			Other parameters from the IFRAME tag as <font color="#ff9999">WIDTH</font>, <font color="#ff9999">HEIGHT</font>, etc. can be also modified or added having in mind that a minimum width and height should be respected.
			<br />
			JavaScript code (the SCRIPT tag and its code), which is used to focus the IFRAME and be able to control the game through the keyboard, is optional but recommended (can be modified in the case you need). It is recommended to use the game stored in the same domain in order to make the JavaScript code work in all browsers (including old ones).
			<br />
			<br />
        </ul>
			<center>
				<b>Live example:</b>
				<br />
				<!-- (c) Yasminoku by Joan Alba Maldonado (joanalbamaldonadoNO_SPAM_PLEASE@gmail.com). Forbidden to publish, copy or modify without mentioning the author's name. -->
				<iframe src="new/online/index.html" id="yi" name="yi" frameborder="0" width="280" height="420" marginwidth="0" marginheight="0" style="border:0px;"></iframe>
				<script language="javascript" type="text/javascript">
				<!--
					/*
					var yi;
					var u = "undefined";
					var n = null;
					function yF(k, e)
					{
						if (typeof(yi) === u || yi === n)
						{
							yi = document.getElementById("yi");
						}
						if (yi !== n)
						{
							try { yi.contentWindow.document.body.focus(); }
							catch (E)
							{
								try { yi.focus(); }
								catch (E)
								{
									try { window.frames["yi"].document.body.focus(); }
									catch (E) { }
								}
							}
							if (k && e)
							{
								try
								{
									if (typeof(yi.contentWindow) !== u)
									{
										yi.contentWindow.tecla_pulsada(e);
									}
									else if (typeof(yi.window) !== u)
									{
										yi.window.tecla_pulsada(e);
									}
									else 
									{
										var iframeDocument = n;
										if (typeof(yi.document) !== u) { iframeDocument = yi.document; }
										else if (typeof(yi.contentDocument) !== u) { iframeDocument = yi.contentDocument; }
										if (iframeDocument !== n)
										{
											if (typeof(iframeDocument.defaultView) !== u)
											{
												iframeDocument.defaultView.tecla_pulsada(e);
											}
											else if (typeof(iframeDocument.parentWindow) !== u)
											{
												iframeDocument.parentWindow.tecla_pulsada(e);
											}
										}
									}
								} catch (E) { }
							}
						}
						return false;
					}
					var eK=document.onkeydown;
					document.onkeydown =
						function(e)
						{
							if(typeof(eL)!==u){try{eL(e);}catch(E){}}
							if (!e)
							{
								if (typeof(event) !== u) { e = event; }
								else if (typeof(window.event) !== u) { e = window.event; }
								else if (typeof(Event) !== u) { e = Event; }
							}
							yF(true, e);
						}
					*/
					////function yF(e,t){if(typeof yi===u||yi===n){yi=document.getElementById("yi")}if(yi!==n){try{yi.contentWindow.document.body.focus()}catch(r){try{yi.focus()}catch(r){try{window.frames["yi"].document.body.focus()}catch(r){}}}if(e&&t){try{if(typeof yi.contentWindow!==u){yi.contentWindow.tecla_pulsada(t)}else if(typeof yi.window!==u){yi.window.tecla_pulsada(t)}else{var i=n;if(typeof yi.document!==u){i=yi.document}else if(typeof yi.contentDocument!==u){i=yi.contentDocument}if(i!==n){if(typeof i.defaultView!==u){i.defaultView.tecla_pulsada(t)}else if(typeof i.parentWindow!==u){i.parentWindow.tecla_pulsada(t)}}}}catch(r){}}}return false}var yi;var u="undefined";var n=null;document.onkeydown=function(e){if(!e){if(typeof event!==u){e=event}else if(typeof window.event!==u){e=window.event}else if(typeof Event!==u){e=Event}}yF(true,e)}
					//////document.onclick=yF;//Comment this line if your page is scrollable!
					//////var eL=window.onload;window.onload=function(){if(typeof(eL)!==u){try{eL();}catch(E){}}setInterval(yF,10);};//Comment this line if your page is scrollable!
					
					//var eL=window.onload;window.onload=function(){if(typeof(eL)!==u){try{eL();}catch(E){}}setInterval(yF,10);};//Comment this line if your page is scrollable!
					function yF(e,t){if(typeof yi===u||yi===n){yi=document.getElementById("yi")}if(yi!==n){try{yi.contentWindow.document.body.focus()}catch(r){try{yi.focus()}catch(r){try{window.frames["yi"].document.body.focus()}catch(r){}}}if(e&&t){try{if(typeof yi.contentWindow!==u){yi.contentWindow.tecla_pulsada(t)}else if(typeof yi.window!==u){yi.window.tecla_pulsada(t)}else{var i=n;if(typeof yi.document!==u){i=yi.document}else if(typeof yi.contentDocument!==u){i=yi.contentDocument}if(i!==n){if(typeof i.defaultView!==u){i.defaultView.tecla_pulsada(t)}else if(typeof i.parentWindow!==u){i.parentWindow.tecla_pulsada(t)}}}}catch(r){}}}return false}var yi;var u="undefined";var n=null;
					var eK=document.onkeydown;document.onkeydown=function(e){if(typeof(eL)!==u){try{eL(e);}catch(E){}}if(!e){if(typeof event!==u){e=event}else if(typeof window.event!==u){e=window.event}else if(typeof Event!==u){e=Event}}yF(true,e)}
				//-->
				</script>
			</center>
        <font face="verdana"><h2>Translate into another language</h2></font>
        <ul>
            To localize the game by translating it into another language not currently supported is very easy. You just need to download the game and modify the file called "<b>yasminoku.js</b>" introducing the following changes:
			<ol>
				<li>
					Add the ISO code (I would recommend two letters as per <a href="http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes" target="_blank">ISO 639-1</a> to take advantage of the game's automatic language detection) for the new language to the declaration of the array called &quot;<b>idiomas</b>&quot; (around line 8) using lower case letters. For example, for Russian we would use the &quot;ru&quot; code:
						<div style="font-size:11px; font-family:arial; width:98%; overflow:auto; padding:5px; background-color:#ddffdd;">
							<font color="#333333">
							var idiomas = [&quot;en&quot;, &quot;zh&quot;, &quot;ca&quot;, &quot;es&quot;, <font color="#ff9999"><b>&quot;ru&quot;</b></font>]; //Low case letters!
							</font>
						</div>
				</li>
				<li>
					Add an index with the new language code to the <b>TR_language_names</b> array (at around line 28) and introduce the name of the language as its value (the name should be translate using the language desired):
						<div style="font-size:11px; font-family:arial; width:98%; overflow:auto; padding:5px; background-color:#ddffdd;">
							<font color="#333333">
							//Language names:
							var TR_language_names = []; //Language names.<br />
							TR_language_names[&quot;en&quot;] = &quot;English&quot;;<br />
							TR_language_names[&quot;es&quot;] = &quot;Español&quot;; //Spanish.<br />
							TR_language_names[&quot;zh&quot;] = &quot;中文&quot;; //Chinese simplified.<br />
							TR_language_names[&quot;ca&quot;] = &quot;Català&quot;; //Catalan.<br />
							<font color="#ff9999"><b>TR_language_names[&quot;ru&quot;] = &quot;Pусский&quot;; //Russian.</b></font>
							</font>
						</div>
				</li>
				<li>
					Now you will only have to update <b>all the arrays</b> whose name start with "<b>TR_</b>" by giving them a new index with the code of the desired language ("ru" in this example) and a value with the translation. Remember that SOMETIMES you can use "<b>&lt;br /&gt;\n</b>" to introduce a new line break. You can also leave some values as empty strings in case you don't need them (be careful!). For example, we could translate the game short description this way:
						<div style="font-size:11px; font-family:arial; width:98%; overflow:auto; padding:5px; background-color:#ddffdd;">
							<font color="#333333">
							var TR_description_short = [];<br />
							TR_description_short[&quot;en&quot;] = &quot;Sudoku game, solver and generator.&quot;;<br />
							TR_description_short[&quot;es&quot;] = &quot;Juego de sudoku, generador y solucionador.&quot;;<br />
							TR_description_short[&quot;zh&quot;] = &quot;数独游戏, 数独制作及解法软件.&quot;;<br />
							TR_description_short[&quot;ca&quot;] = &quot;Joc de sudoku, generador i solucionador.&quot;;<br />
							<font color="#ff9999"><b>TR_description_short[&quot;ru&quot;] = &quot;Судоку, решатель и генератора.&quot;; //Sorry about my Russian, I just used Google translator.</b></font>
							</font>
						</div>
				</li>
				<li>
					The array <b>TR_additional_credits</b> is special because contains the credits of the people who is not me and has translated the game into other languages. All indexes of that array should be updated with a new value with your name added (you could use an online translator as Google translator or another one):
						<div style="font-size:11px; font-family:arial; width:98%; overflow:auto; padding:5px; background-color:#ddffdd;">
							<font color="#333333">
								var TR_additional_credits = [];<br />
								TR_additional_credits[&quot;en&quot;] = &quot;Chinese translation by Gao Yin<font color="#ff9999"><b>&lt;br /&gt\nRussian translation by Guybrush Threepwood</b></font>&quot;;<br />
								TR_additional_credits[&quot;es&quot;] = &quot;Traducción al chino por Gao Yin<font color="#ff9999"><b>&lt;br /&gt\nTraducción al ruso por Guybrush Threepwood</b></font>&quot;;<br />
								TR_additional_credits[&quot;zh&quot;] = &quot;中文翻译: 高音<font color="#ff9999"><b>&lt;br /&gt\n俄文翻译: Guybrush Threepwood</b></font>&quot;;<br />
								TR_additional_credits[&quot;ca&quot;] = &quot;Traducció al xinès per Gao Yin<font color="#ff9999"><b>&lt;br /&gt\nTraducció al rus per Guybrush Threepwood</b></font>&quot;;<br />
								<font color="#ff9999"><b>TR_additional_credits[&quot;ru&quot;] = &quot;Перевод на китайский язык Gao Yin&lt;br /&gt\nРусский перевод Guybrush Threepwood&quot;; //Again, sorry about my Russian!</b></font>
							</font>
						</div>
				</li>
				<li>
					When you finish, try to test it carefully to <b>ensure that all works properly</b>. Take your time. Once all works fine, you can send me by email your changes made so I will be able to add your translation to the official game and this way everyone will be able to enjoy it. Of course, I will keep your name in the credits.
				</li>
			</ol>
        </ul>
        <a name="contact"></a>
		<font face="verdana"><h2>Contact me</h2></font>
        <ul>
			<div style="width:100%; overflow:auto;">
				My name is <a href="https://joanalbamaldonado.com/" target="_blank">Juan Alba Maldonado</a> and my E-Mail is <a href="mailto:joanalbamaldonadoNO_SPAM_PLEASE@gmail.com?subject=<?php echo $unix; ?>" id="email_link">joanalbamaldonado<del><s>NO_SPAM_PLEASE</s></del>@gmail.com</a> <span id="email_no_spam">(without &quot;NO_SPAM_PLEASE&quot;).</span>
			</div>
        </ul>
		<br />
		<center>
			<div style="background-color:#eeeeee; padding:10px;">
				<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" style="display:inline;">
					<input type="hidden" name="cmd" value="_s-xclick">
					<input type="hidden" name="hosted_button_id" value="YL43Q3ES4MT92">
					<input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online.">
					<img alt="" border="0" src="https://www.paypalobjects.com/es_ES/i/scr/pixel.gif" width="1" height="1">
				</form>
				<br />
				<font color="#cc0000">Please, support this project!</font>
			</div>
		</center>
		<a href="https://github.com/jalbam/yasminoku" target="_blank"><img style="position:absolute; top:0; right:0; border:0;" src="github_fork_me_right_upper.gif" alt="Fork me on GitHub"></a>
    </body>
</html>