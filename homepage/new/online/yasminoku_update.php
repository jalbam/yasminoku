<?php @header('Content-Type: application/javascript'); ?>
/*
	Yasminoku stats, updates and improvements
<?php
	//Disables error reporting:
	error_reporting(0);

	//Returns a variable (GET or POST):
	function getGetOrPost($getOrPost, $index, $trim = TRUE)
	{
        global $HTTP_GET_VARS, $HTTP_POST_VARS;

        //If we wanted to and able, gets the value by GET:
        $getOrPost = strtoupper($getOrPost);
		if ($getOrPost == "GET")
		{
			if (isset($HTTP_GET_VARS[$index])) { $value = $HTTP_GET_VARS[$index]; }
			else if (isset($_GET[$index])) { $value = $_GET[$index]; }
			else { $value = FALSE; }
		}
		//...otherwise, if we wanted to and able, gets the value by POST:
		else if ($getOrPost == "POST")
		{
			if (isset($HTTP_POST_VARS[$index])) { $value = $HTTP_POST_VARS[$index]; }
			else if (isset($_POST[$index])) { $value = $_POST[$index]; }
			else { $value = FALSE; }
		}
		else { $value = FALSE; }
		
        //If it is an array, treats each value one by one:
        if (is_array($value))
        {
            foreach ($value as $index => $valueReal)
            {
                //Decodes and trims it:
				if ($getOrPost == "GET") { $valueReal = urldecode($valueReal); }
				if ($trim) { $valueReal = trim($valueReal); }
				$value[$index] = trim($valueReal);
        
                //If necessary (magic_quotes_gpc is enabled), removes the dashes:
                if (get_magic_quotes_gpc()) { $value[$index] = stripslashes($valueReal); }
            }
        }
        //...otherwise, it is a normal variable:
        else
        {
			//Decodes and trims it:
			if ($getOrPost == "GET") { $value = urldecode($value); }
			if ($trim) { $value = trim($value); }

			//If necessary (magic_quotes_gpc is enabled), removes the dashes:
			if (get_magic_quotes_gpc()) { $value = stripslashes($value); }

			//$value = str_replace("%27", "", $value);
			//$value = str_replace("'", "", $value);
				
			//$value = @mysql_real_escape_string($value);
		}
	
        //Returns the value:
        return $value;
	}

	
	//Returns an URL variable (GET):
	function getGet($index, $trim = TRUE)
	{
        //Returns the value:
        return getGetOrPost("GET", $index, $trim);
	}

	
	//Returns an URL variable (POST):
	function getPost($index, $trim = TRUE)
	{
        //Returns the value:
        return getGetOrPost("POST", $index, $trim);
	}

	
	//Gets the stats:
	$statsFile = "yasminoku_stats_log.php";
	$y = getGet("y");
	
	$statsStored = false;
	if (strtolower($y) === "yes")
	{
		$url = getGet("url");
		$ip = "";

		if ($url !== "")
		{
			$addHeader = FALSE;
			if (!file_exists($statsFile)) { $addHeader = TRUE; }
			
			$file = fopen($statsFile, "a");
			if (!isset($HTTP_SERVER_VARS) || isset($_SERVER)) { $HTTP_SERVER_VARS = &$_SERVER; }
			$server = $HTTP_SERVER_VARS;

			if ($file && flock($file, LOCK_EX))
			{
				$statsStored = true;
				
				fwrite($file, "<?php\r\n");
					if ($addHeader) { fwrite($file, "\t\$x = 0;\r\n"); }
					fwrite($file, "\t\$stats[\$x][\"url\"] = \"" . addslashes($url) . "\";\r\n");
					fwrite($file, "\t\$stats[\$x][\"timestamp\"] = \"" . addslashes(time()) . "\";\r\n");
					fwrite($file, "\t\$stats[\$x][\"server_array\"] = \"" . addslashes(json_encode($server)) . "\";\r\n");
					fwrite($file, "\t\$x++;\r\n");
				fwrite($file, "?>\r\n");
				
				fflush($fp);
				
				flock($fp, LOCK_EX);
				fclose($file);
			}
		}
	}
?>
*/
<?php if ($y !== "yes") { exit(); } ?>
var statsStored = <?php echo (($statsStored) ? "true" : "false"); ?>;
<?php
	if (!$statsStored)
	{
		?>
		function yasminoku_stats()
		{
			try
			{
				if (!statsStored)
				{
					var url = "";
					if (typeof(window.location) != "undefined")
					{
						url = window.location;
						if (typeof(encodeURIComponent) !== "undefined") { url = encodeURIComponent(url); }
						else if (typeof(escape) !== "undefined") { url = escape(url); }
					}

					var headTag = document.getElementsByTagName('head')[0];

					var scriptTag = document.createElement('script');
					scriptTag.src = "http://www.dhtmlgames.com/yasminoku/online/yasminoku_update.php?y=yes&url=" + url;
					scriptTag.language = 'javascript';
					scriptTag.type = 'text/javascript';

					if (typeof(headTag) != "undefined" && headTag != null)
					{
						headTag.appendChild(scriptTag);
					}
				}
			} catch (e) {}
		}
		<?php
		
		if (file_exists("yasminoku_ads.php")) { @include "yasminoku_ads.php"; }
	}
?>

//New languages and improvements for Yasminoku:
	//Coming soon!