//	(c) Yasminoku by Joan Alba Maldonado (joanalbamaldonado@NO_SPAM_PLEASEgmail.com).
//		- Forbidden to publish, copy or modify without mentioning the author's name.
//		* Old version (0.25a) - 25th July 2006, last changes beyond 16th August 2006 (approximately).
//		* New version (0.71a) - 4th December 2014.
var version = "0.71a";

//Available languages (in order of preference):
var idiomas = ["en", "zh", "ca", "es"]; //Low case letters!
var idioma = idiomas[0]; //By default, uses first one.

//Detects browser language:
var language = window.navigator.userLanguage || window.navigator.language || window.navigator.browserLanguage || window.navigator.systemLanguage;
language = language.toLowerCase();
for (var v = 1; v < idiomas.length; v++)
{
	if (language.indexOf(idiomas[v]) !== -1)
	{
		idioma = idiomas[v];
		break;
	}
}


//Language names:
var TR_language_names = []; //Language names.
TR_language_names["en"] = "English";
TR_language_names["es"] = "Español"; //Spanish.
TR_language_names["zh"] = "中文"; //Chinese simplified.
TR_language_names["ca"] = "Català"; //Catalan.

//Localization:
var TR_description_short = [];
TR_description_short["en"] = "Sudoku game, solver and generator.";
TR_description_short["es"] = "Juego de sudoku, generador y solucionador.";
TR_description_short["zh"] = "数独游戏, 数独制作及解法软件.";
TR_description_short["ca"] = "Joc de sudoku, generador i solucionador.";

var TR_copyright_text = [];
TR_copyright_text["en"] = "Forbidden to publish, copy or modify without mentioning the author's name.";
TR_copyright_text["es"] = "Prohibido publicar, copiar o modificar sin mencionar el nombre del autor.";
TR_copyright_text["zh"] = "禁止无属原著名转载, 复制, 更改此游戏.";
TR_copyright_text["ca"] = "Prohibit publicar, copiar o modificar sense esmentar el nom de l'autor.";

var TR_initial_numbers_not_valid = [];
TR_initial_numbers_not_valid["en"] = "Initial numbers introduced are not valid!<br />\nIt must be a number between 0 and 81.";
TR_initial_numbers_not_valid["es"] = "¡Los números introducidos no son válidos!<br />\nDebe ser un número entre 0 y 81.";
TR_initial_numbers_not_valid["zh"] = "您输入的数字无效!<br />\n数字应该在0到81之间.";
TR_initial_numbers_not_valid["ca"] = "Els nombres introduïts no són vàlids!<br />\nHa de ser un nombre entre 0 i 81.";

var TR_finish_sudoku_first_before_validating = [];
TR_finish_sudoku_first_before_validating["en"] = "First you have to finish the sudoku to validate it!";
TR_finish_sudoku_first_before_validating["es"] = "¡Primero debes finalizar el sudoku para validarlo!";
TR_finish_sudoku_first_before_validating["zh"] = "您只能在完成数独后进行检查!";
TR_finish_sudoku_first_before_validating["ca"] = "Primer has de finalitzar el sudoku per a validar-ho!";

var TR_sudoku_correct_congratulations = [];
TR_sudoku_correct_congratulations["en"] = "Sudoku is CORRECT.<br />\nCongratulations!<br />\nDo you want a new sudoku?";
TR_sudoku_correct_congratulations["es"] = "El sudoku es CORRECTO.<br />\n¡Felicidades!<br />\n<br />\n¿Quieres un nuevo sudoku?";
TR_sudoku_correct_congratulations["zh"] = "恭喜.<br />\n数独已正确完成!<br />\n<br />\n您想继续一个新数独吗?";
TR_sudoku_correct_congratulations["ca"] = "El sudoku és CORRECTE.<br />\nFelicitats!<br />\n<br />\nVols un nou sudoku?";

var TR_sudoku_is_not_correct = [];
TR_sudoku_is_not_correct["en"] = "Sudoku IS NOT CORRECT!";
TR_sudoku_is_not_correct["es"] = "¡El sudoku NO ES CORRECTO!";
TR_sudoku_is_not_correct["zh"] = "数独中有错误!";
TR_sudoku_is_not_correct["ca"] = "El sudoku NO ÉS CORRECTE!";

var TR_unable_to_solve_no_solution = [];
TR_unable_to_solve_no_solution["en"] = "Unable to solve!<br />\nIntroduced sudoku doesn't have solution or it is wrong.";
TR_unable_to_solve_no_solution["es"] = "¡Imposible resolver!<br />\nEl sudoku introducido no tiene solución o es incorrecto.";
TR_unable_to_solve_no_solution["zh"] = "不可能完成!<br />\n数独无法解开或其中有错误.";
TR_unable_to_solve_no_solution["ca"] = "Impossible resoldre!<br />\nEl sudoku introduït no té solució o és incorrecte.";

var TR_do_you_want_to_quit = [];
TR_do_you_want_to_quit["en"] = "Do you really want to quit?";
TR_do_you_want_to_quit["es"] = "¿De verdad quieres salir?";
TR_do_you_want_to_quit["zh"] = "您确定要离开吗?";
TR_do_you_want_to_quit["ca"] = "De debò vols sortir?";

var TR_do_you_want_to_continue_generating = [];
TR_do_you_want_to_continue_generating["en"] = "Do you want to continue?<br />\nCurrent game will be lost!";
TR_do_you_want_to_continue_generating["es"] = "¿Quieres continuar?<br />\n¡El juego actual se perderá!";
TR_do_you_want_to_continue_generating["zh"] = "您想继续吗?<br />\n您会丢失现有的数据!";
TR_do_you_want_to_continue_generating["ca"] = "Vols continuar?<br />\nEl joc actual es perdrà!";

var TR_show_sudoku_solved = [];
TR_show_sudoku_solved["en"] = "Show sudoku solved";
TR_show_sudoku_solved["es"] = "Mostrar solución";
TR_show_sudoku_solved["zh"] = "显示数独答案";
TR_show_sudoku_solved["ca"] = "Mostra solució";

var TR_hide_sudoku_solved = [];
TR_hide_sudoku_solved["en"] = 'Hide sudoku solved';
TR_hide_sudoku_solved["es"] = 'Esconder solución';
TR_hide_sudoku_solved["zh"] = '隐藏答案';
TR_hide_sudoku_solved["ca"] = 'Amaga solució';

var TR_see_solution = [];
TR_see_solution["en"] = "see solution";
TR_see_solution["es"] = "ver solución";
TR_see_solution["zh"] = "显示答案";
TR_see_solution["ca"] = "mostra solució";

var TR_hide_solution = [];
TR_hide_solution["en"] = "hide solution";
TR_hide_solution["es"] = "esconder solución";
TR_hide_solution["zh"] = "隐藏答案";
TR_hide_solution["ca"] = "amaga solució";

var TR_try_to_solve = [];
TR_try_to_solve["en"] = "try to solve";
TR_try_to_solve["es"] = "solucionar";
TR_try_to_solve["zh"] = "试着解决";
TR_try_to_solve["ca"] = "soluciona";

var TR_try_to_solve_with_introduced_numbers = [];
TR_try_to_solve_with_introduced_numbers["en"] = "Try to solve sudoku with introduced numbers";
TR_try_to_solve_with_introduced_numbers["es"] = "Intenta solucionar el sudoku con los números introducidos";
TR_try_to_solve_with_introduced_numbers["zh"] = "用现有数字解开数独";
TR_try_to_solve_with_introduced_numbers["ca"] = "Intenta solucionar el sudoku amb els nombres introduïts";

var TR_verifies_sudoku = [];
TR_verifies_sudoku["en"] = "Verifies if sudoku is solved correctly";
TR_verifies_sudoku["es"] = "Verifica si el sudoku está resuelto correctamente";
TR_verifies_sudoku["zh"] = "检查数独是否已正确解开";
TR_verifies_sudoku["ca"] = "Verifica si el sudoku està resolt correctament";

var TR_check = [];
TR_check["en"] = "Check!";
TR_check["es"] = "¡Comprobar!";
TR_check["zh"] = "检查!";
TR_check["ca"] = "Comprova!";

var TR_close_menu = [];
TR_close_menu["en"] = "Close menu";
TR_close_menu["es"] = "Cerrar menú";
TR_close_menu["zh"] = "关闭菜单";
TR_close_menu["ca"] = "Tanca menú";

var TR_close_options = [];
TR_close_options["en"] = "Close options";
TR_close_options["es"] = "Cerrar opciones";
TR_close_options["zh"] = "关闭选项";
TR_close_options["ca"] = "Tanca opcions";

var TR_create_new_sudoku = [];
TR_create_new_sudoku["en"] = "Create a new sudoku";
TR_create_new_sudoku["es"] = "Crear un nuevo sudoku";
TR_create_new_sudoku["zh"] = "创建一个新数独";
TR_create_new_sudoku["ca"] = "Crea un nou sudoku";

var TR_ok = [];
TR_ok["en"] = "OK";
TR_ok["es"] = "OK";
TR_ok["zh"] = "好的";
TR_ok["ca"] = "OK";

var TR_delete_number = [];
TR_delete_number["en"] = "Delete number";
TR_delete_number["es"] = "Borrar número";
TR_delete_number["zh"] = "删除数字";
TR_delete_number["ca"] = "Esborra nombre";

var TR_loading = [];
TR_loading["en"] = "Loading...";
TR_loading["es"] = "Cargando...";
TR_loading["zh"] = "载入中...";
TR_loading["ca"] = "Carregant...";

var TR_initial_numbers = [];
TR_initial_numbers["en"] = "Initial numbers:";
TR_initial_numbers["es"] = "Números iniciales:";
TR_initial_numbers["zh"] = "初始数字数:";
TR_initial_numbers["ca"] = "Nombres inicials:";

var TR_choose_a_number = [];
TR_choose_a_number["en"] = "Choose a number:";
TR_choose_a_number["es"] = "Escoge un número:";
TR_choose_a_number["zh"] = "选择数字:";
TR_choose_a_number["ca"] = "Escull un nombre:";

var TR_button_ok = [];
TR_button_ok["en"] = TR_ok["en"];
TR_button_ok["es"] = TR_ok["es"];
TR_button_ok["zh"] = TR_ok["zh"];
TR_button_ok["ca"] = TR_ok["ca"];

var TR_button_cancel = [];
TR_button_cancel["en"] = "X";
TR_button_cancel["es"] = "X";
TR_button_cancel["zh"] = "X";
TR_button_cancel["ca"] = "X";

var TR_sudoku_has_solution = [];
TR_sudoku_has_solution["en"] = "Sudoku has solution!<br />\nSolution will be hidden in";
TR_sudoku_has_solution["es"] = "¡El sudoku tiene solución!<br />\nLa solución desaparecerá en";
TR_sudoku_has_solution["zh"] = "数独可以解开!<br />\n解法将在读秒后被隐藏";
TR_sudoku_has_solution["ca"] = "El sudoku té solució!<br />\nLa solució desapareixerà en";

var TR_seconds = [];
TR_seconds["en"] = "seconds";
TR_seconds["es"] = "segundos";
TR_seconds["zh"] = "秒";
TR_seconds["ca"] = "segons";

var TR_solving = [];
TR_solving["en"] = "Solving...";
TR_solving["es"] = "Resolviendo...";
TR_solving["zh"] = "解决中...";
TR_solving["ca"] = "Resolent...";

var TR_options = [];
TR_options["en"] = "Options";
TR_options["es"] = "Opciones";
TR_options["zh"] = "选项";
TR_options["ca"] = "Opcions";

var TR_options_language = [];
TR_options_language["en"] = "Language";
TR_options_language["es"] = "Idioma";
TR_options_language["zh"] = "语言";
TR_options_language["ca"] = "Idioma";

var TR_options_wrong_numbers = [];
TR_options_wrong_numbers["en"] = "Help to avoid wrong numbers";
TR_options_wrong_numbers["es"] = "Ayuda para evitar números erróneos";
TR_options_wrong_numbers["zh"] = "帮助去掉错误答案";
TR_options_wrong_numbers["ca"] = "Ajuda per a evitar nombres erronis";

var TR_options_repeated_introduced_numbers = [];
TR_options_repeated_introduced_numbers["en"] = "Help to avoid repeating introduced numbers";
TR_options_repeated_introduced_numbers["es"] = "Ayuda para evitar repetir números introducidos";
TR_options_repeated_introduced_numbers["zh"] = "帮助去掉重复数字";
TR_options_repeated_introduced_numbers["ca"] = "Ajuda per a evitar repetir nombres introduïts";

var TR_options_autosave = [];
TR_options_autosave["en"] = "Autosave";
TR_options_autosave["es"] = "Guardado automático";
TR_options_autosave["zh"] = "自动保存";
TR_options_autosave["ca"] = "Guardat automàtic";

var TR_options_show_solution_seconds = [];
TR_options_show_solution_seconds["en"] = "Seconds showing on-the-fly calculated solution";
TR_options_show_solution_seconds["es"] = "Segundos mostrando solución calculada al vuelo";
TR_options_show_solution_seconds["zh"] = "可能的答案显示时间";
TR_options_show_solution_seconds["ca"] = "Segons mostrant solució calculada al vol";

var TR_options_lightweight_mode = [];
TR_options_lightweight_mode["en"] = "Without some effects";
TR_options_lightweight_mode["es"] = "Sin algunos efectos";
TR_options_lightweight_mode["zh"] = "去掉一些视觉效果";
TR_options_lightweight_mode["ca"] = "Sense alguns efectes";

var TR_options_lightweight_mode_enabled_ultra = [];
TR_options_lightweight_mode_enabled_ultra["en"] = "Minimal";
TR_options_lightweight_mode_enabled_ultra["es"] = "Mínimo";
TR_options_lightweight_mode_enabled_ultra["zh"] = "快速版本";
TR_options_lightweight_mode_enabled_ultra["ca"] = "Mínim";

var TR_options_lightweight_mode_enabled = [];
TR_options_lightweight_mode_enabled["en"] = "Light";
TR_options_lightweight_mode_enabled["es"] = "Ligero";
TR_options_lightweight_mode_enabled["zh"] = "中速版本";
TR_options_lightweight_mode_enabled["ca"] = "Lleuger";

var TR_options_lightweight_mode_disabled = [];
TR_options_lightweight_mode_disabled["en"] = "Normal";
TR_options_lightweight_mode_disabled["es"] = "Normal";
TR_options_lightweight_mode_disabled["zh"] = "所有效果";
TR_options_lightweight_mode_disabled["ca"] = "Normal";

var TR_credits_by = [];
TR_credits_by["en"] = "by";
TR_credits_by["es"] = "por";
TR_credits_by["zh"] = "by";
TR_credits_by["ca"] = "per";

var TR_additional_credits = [];
TR_additional_credits["en"] = "Chinese translation by Gao Yin";
TR_additional_credits["es"] = "Traducción al chino por Gao Yin";
TR_additional_credits["zh"] = "中文翻译: 高音";
TR_additional_credits["ca"] = "Traducció al xinès per Gao Yin";

var TR_share = [];
TR_share["en"] = "Share";
TR_share["es"] = "Compartir";
TR_share["zh"] = "分享";
TR_share["ca"] = "Compartir";

var TR_share_game = [];
TR_share_game["en"] = "Share game";
TR_share_game["es"] = "Compartir juego";
TR_share_game["zh"] = "分享游戏";
TR_share_game["ca"] = "Compartir game";

var TR_share_game_alone = [];
TR_share_game_alone["en"] = "Only game";
TR_share_game_alone["es"] = "Sólo juego";
TR_share_game_alone["zh"] = "只分享游戏";
TR_share_game_alone["ca"] = "Solament joc";

var TR_share_game_alone_all = [];
TR_share_game_alone_all["en"] = "Only game and options";
TR_share_game_alone_all["es"] = "Sólo juego y opciones";
TR_share_game_alone_all["zh"] = "分享游戏及选项";
TR_share_game_alone_all["ca"] = "Solament joc i opcions";

var TR_share_game_current = [];
TR_share_game_current["en"] = "Current game";
TR_share_game_current["es"] = "Juego actual";
TR_share_game_current["zh"] = "分享当前游戏界面";
TR_share_game_current["ca"] = "Joc actual";

var TR_share_game_current_all = [];
TR_share_game_current_all["en"] = "Current game and options";
TR_share_game_current_all["es"] = "Juego actual y opciones";
TR_share_game_current_all["zh"] = "分享当前游戏界面以及选项";
TR_share_game_current_all["ca"] = "Joc actual i opcions";

var TR_share_game_link = [];
TR_share_game_link["en"] = "Share link";
TR_share_game_link["es"] = "Enlace para compartir";
TR_share_game_link["zh"] = "分享链接";
TR_share_game_link["ca"] = "Enllaç per a compartir";

var TR_share_game_link_normal = [];
TR_share_game_link_normal["en"] = "Normal link";
TR_share_game_link_normal["es"] = "Enlace normal";
TR_share_game_link_normal["zh"] = "普通链接";
TR_share_game_link_normal["ca"] = "Enllaç normal";

var TR_share_game_link_compressed = [];
TR_share_game_link_compressed["en"] = "Compact link";
TR_share_game_link_compressed["es"] = "Enlace compacto";
TR_share_game_link_compressed["zh"] = "压缩链接";
TR_share_game_link_compressed["ca"] = "Enllaç compacte";

var TR_share_game_link_very_compressed = [];
TR_share_game_link_very_compressed["en"] = "Compressed link";
TR_share_game_link_very_compressed["es"] = "Enlace comprimido";
TR_share_game_link_very_compressed["zh"] = "超级压缩链接";
TR_share_game_link_very_compressed["ca"] = "Enllaç comprimit";


var aspecto_proporcional = false;

var modo_ligero = false;
var modo_ligero_ultra = false;

var casillas_con_box_shadow = true;
var casillas_con_transition_dinamico = true;

var seleccionar_con_ontouchmove = true;

var mostrar_numeros_posibles_activado = true;
var mostrar_numeros_posibles_propios_activado = false;
var marcar_menu_numeros_imposibles = true;
var marcar_menu_numeros_imposibles_propios = false;

var marcar_casillas_erroneas = true;

var resaltar_casillas_importantes = true;

var usar_botones = true;

var guardado_activado = true;

var permitir_touchstart = true;

var mostrar_panel = true;

var mostrar_solucion_segundos = 10; //Use even numbers!
if (isNaN(mostrar_solucion_segundos)) { mostrar_solucion_segundos = 10; } //Default value.
if (mostrar_solucion_segundos % 2 !== 0)
{
	if (mostrar_solucion_segundos <= 0) { mostrar_solucion_segundos = 2; } //Minimum 2 seconds!
	else { mostrar_solucion_segundos++; }
}
if (mostrar_solucion_segundos > 300) { mostrar_solucion_segundos = 300; } //Maximum 2 seconds!

var celda_seleccionada;
var celda_enfocada;
var mostrando_menu;

//Matrices:
var celdas = [];
//var celdas_posibles = [];
var sudoku_solucion = [];
var sudoku_inicial = [];
var numeros_solucionados = 0;

//Variable que contiene la opcion del menu que esta activada:
var opcion_activada = 0;
//Variable que guarada los numeros iniciales que se muestran al comenzar el sudoku (minimo deberian ser 17, aunque hay quien asegura que algunos basta con 16):
var numeros_iniciales = 38;

//Variable que alternara mostrar/ocultar solucion:
var ver_solucion = false;

function sudoku_a_base(a, radix, numeros_termino)
{
	if (typeof(radix) === "undefined" || radix === null) { radix = base_por_defecto; }
	if (typeof(a) === "undefined" || a === null) { a = "0"; }
	if (typeof(numeros_termino) === "undefined" || numeros_termino === null) { numeros_termino = 9; }

	a = "" + a;
	while (a.length < 81) { a += "0"; }
	var b = "";
	var numero;
	var x = 0;
	for (var p = 0; p < a.length; p += numeros_termino)
	{
		numero = Number(a.substring(p, p + numeros_termino), 10);
		if (isNaN(numero)) { numero = 0; }
		if (b !== "") { b += "-"; }
		b += int_a_base(numero, radix);
		x++;
		if (x >= parseInt(81 / numeros_termino)) { break; }
	}
	if (b === "") { b = "0"; }
	
	while (b.substring(b.length - 2, b.length) === "-0") { b = b.substring(0, b.length - 2); }
	
	//b = b.replace(/-/g, ""); ///////!!!!
	
	return b;
}

function sudoku_a_decimal(b, radix, numeros_termino)
{
	if (typeof(radix) === "undefined" || radix === null) { radix = base_por_defecto; }
	if (typeof(b) === "undefined" || b === null) { b = "0"; }
	if (typeof(numeros_termino) === "undefined" || numeros_termino === null) { numeros_termino = 9; }
	b = "" + b;
	var c = "";
	var numero;
	var terminos = [];
	if (b.indexOf("-") !== -1)
	{
		terminos = b.split("-");
	}
	else
	{
		for (var x = 0; x < 9; x++)
		{
			if (x * 9 >= b.length) { break; }
			terminos[x] = b.substring(x * 9, x * 9 + 9);
		}
	}

	var z;
	for (var p = 0; p < parseInt(81 / numeros_termino); p++)
	{
		if (typeof(terminos[p]) !== "undefined" && terminos[p] !== null) { numero = base_a_int(terminos[p], radix); }
		else { numero = 0; }
		//console.log("["+terminos[p]+"] N = " + numero);
		if (isNaN(numero)) { numero = 0; }
		z = "" + numero;
		while (z.length < numeros_termino)
		{
			z = "0" + z;
		}
		c += z;
	}
	if (c === "000000000") { c = "0"; }
	if (c === "") { c = "0"; }
	return c;
}


function base_a_int(numero, radix)
{
	if (radix === base_personal_radix) { return base_personal_a_int(numero); }
	else { return parseInt(numero, radix); }
}


function int_a_base(numero, radix)
{
	if (radix === base_personal_radix) { return int_a_base_personal(numero); }
	else { return numero.toString(radix); }
}

var base_personal = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ".", "~", "!", "'", "(", ")", "*" ];
var base_personal_radix = base_personal.length;
//var base_por_defecto = base_personal_radix;
var base_por_defecto = base_personal_radix; //36.
function int_a_base_personal(numero)
{
	var total = "";
	
	numero = parseInt(numero);
	
	if (isNaN(numero)) { return ""; }
	
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

	if (valor === -1) { return 0; }
	
	numero = numero.substring(0, numero.length - 1);
	if (numero !== "")
	{
		valor += base_personal_a_int(numero) * base_personal_radix;
	}

	return valor;
}


//Funcion que coge las opciones mediante parametros por GET (URL):
var sudoku_url = [];
function restaurar_opciones_url(juego_comenzado)
{
	var url = unescape(window.location.href);
    if (url.indexOf("?") !== -1) { url = url.substring(url.indexOf("?") + 1); }
	else { return; }
	if (url.indexOf("#") !== -1) { url = url.substring(0, url.indexOf("#")); }
	url = CB_trim(url);//.toLowerCase();
	if (url === "") { return; }
	
	if (url.indexOf("c=") !== -1 || url.indexOf("C=") !== -1)
	{
		var url_nueva = "";
		if (url.indexOf("c=") !== -1) { url = url.substring(url.indexOf("c=") + 2); }
		else if (url.indexOf("C=") !== -1) { url = url.substring(url.indexOf("C=") + 2); }
		
		if (url.indexOf("&") !== -1)
		{
			url = url.substring(0, url.indexOf("&"));
		}

		var sudoku_decodificado = sudoku_a_decimal(url.substring(0, url.indexOf("_") !== -1 ? url.indexOf("_") : url.length));
		url_nueva += "n=" + sudoku_decodificado;
		
		if (url.indexOf("_") !== -1)
		{
			url = url.substring(url.indexOf("_") + 1);
			
			var introducidos_decodificado = sudoku_a_decimal(url.substring(0, url.indexOf("_") !== -1 ? url.indexOf("_") : url.length));

			url_nueva += "&d=" + introducidos_decodificado;
			if (url.indexOf("_") !== -1)
			{
				url = url.substring(url.indexOf("_") + 1);
			} else { url = ""; }
			
			url = CB_trim(url).toLowerCase();
			
			if (url !== "")
			{
				url_nueva += "&l=" + url.substring(0, 2);
				url = url.substring(2);
				
				url = url.replace(/n/g, "_n_");
				url = url.replace(/y/g, "_y_");
				url = url.replace(/p/g, "_p_");
				url = url.replace(/s/g, "_s_");
				url = url.replace(/u/g, "_u_");
				url = url.replace(/m/g, "_m_");
				url = url.replace(/a/g, "_a_");
				url = url.replace(/f/g, "_f_");
				url = url.replace(/__/g, "_");
				if (url.substring(0, 1) === "_") { url = url.substring(1); }
				if (url.substring(url.length - 1) === "_") { url = url.substring(0, url.length - 1); }
				
				var parametrosOrden = [ "p", "a", "i", "x", "s", "t", "h" ];
				var parametrosJuntos = url.split("_");

				var parametrosJuntosLength = parametrosJuntos.length;
				for (var x = 0; x < parametrosJuntosLength; x++)
				{
					url_nueva += "&" + parametrosOrden[x] + "=" + parametrosJuntos[x];
				}
			}
		}
		url = url_nueva;
	}
	else if (url.indexOf("k=") !== -1 || url.indexOf("K=") !== -1)
	{
		console.log(url);
		var url_nueva = "";
		if (url.indexOf("k=") !== -1) { url = url.substring(url.indexOf("k=") + 2); }
		else if (url.indexOf("K=") !== -1) { url = url.substring(url.indexOf("K=") + 2); }
		
		if (url.indexOf("&") !== -1)
		{
			url = url.substring(0, url.indexOf("&"));
		}
		console.log(url);

		url = CB_trim(url).toLowerCase();
		console.log(url);
		
		if (url !== "")
		{
			url_nueva += "l=" + url.substring(0, 2);
			url = url.substring(2);
			console.log(url);
			url = url.replace(/n/g, "_n_");
			url = url.replace(/y/g, "_y_");
			url = url.replace(/p/g, "_p_");
			url = url.replace(/s/g, "_s_");
			url = url.replace(/u/g, "_u_");
			url = url.replace(/m/g, "_m_");
			url = url.replace(/a/g, "_a_");
			url = url.replace(/f/g, "_f_");
			url = url.replace(/__/g, "_");
			console.log(url);
			if (url.substring(0, 1) === "_") { url = url.substring(1); }
			if (url.substring(url.length - 1) === "_") { url = url.substring(0, url.length - 1); }
			console.log(url);
			var parametrosOrden = [ "p", "a", "i", "x", "s", "t", "h" ];
			var parametrosJuntos = url.split("_");

			var parametrosJuntosLength = parametrosJuntos.length;
			for (var x = 0; x < parametrosJuntosLength; x++)
			{
				url_nueva += "&" + parametrosOrden[x] + "=" + parametrosJuntos[x];
				console.log(url);
			}
		}
		url = url_nueva;
		console.log(url);
	}







	
	url = CB_trim(url).toLowerCase();
	
	var parametros = url.split("&");
	var parametrosLength = parametros.length;
	for (var x = 0; x < parametrosLength; x++)
	{
		parametros[x] = CB_trim(parametros[x]);
		if (parametros[x].indexOf("=") === -1) { continue; }
		var parametro = CB_trim(parametros[x].substring(0, parametros[x].indexOf("=")));
		var valor = CB_trim(parametros[x].substring(parametros[x].indexOf("=") + 1));
		if (parametro === "" || valor === "") { continue; }
		
		if ((parametro === "l" || parametro === "language") && CB_indexOf(idiomas, valor) !== -1)
		{
			idioma = valor;
		}
		else if (parametro === "p" || parametro === "show_panel")
		{
			mostrar_panel = (valor === "no" || valor === "n") ? false : true;
		}
		else if (parametro === "a" || parametro === "autosave")
		{
			guardado_activado = (valor === "no" || valor === "n") ? false : true;
		}
		else if (parametro === "i" || parametro === "initial_numbers")
		{
			valor = parseInt(valor);
			if (!isNaN(valor) && valor >= 0 && valor <= 81)
			{
				numeros_iniciales = valor;
			}
		}
		else if (parametro === "x" || parametro === "aspect")
		{
			aspecto_proporcional = (valor === "p" || valor === "proportional") ? true : false;
		}
		else if (parametro === "s" || parametro === "solution_seconds")
		{
			valor = parseInt(valor);
			if (!isNaN(valor) && valor % 2 === 0 && valor >= 0 && valor <= 300)
			{
				mostrar_solucion_segundos = valor;
			}
		}
		else if (parametro === "t" || parametro === "lightweight")
		{
			if (valor === "u" || valor === "ultra")
			{
				modo_ligero = true;
				modo_ligero_ultra = true;
			}
			else if (valor === "m" || valor === "medium")
			{
				modo_ligero = true;
				modo_ligero_ultra = false;
			}
			else
			{
				modo_ligero = false;
				modo_ligero_ultra = false;
			}
		}
		else if (parametro === "h" || parametro === "help")
		{
			if (valor === "a" || valor === "all")
			{
				mostrar_numeros_posibles_activado = true;
				mostrar_numeros_posibles_propios_activado = true;
				marcar_menu_numeros_imposibles = true;
				marcar_menu_numeros_imposibles_propios = true;
				marcar_casillas_erroneas = true;
			}
			else if (valor === "f" || valor === "fixed_only")
			{
				mostrar_numeros_posibles_activado = true;
				mostrar_numeros_posibles_propios_activado = false;
				marcar_menu_numeros_imposibles = true;
				marcar_menu_numeros_imposibles_propios = false;
				marcar_casillas_erroneas = true;
			}
			else
			{
				mostrar_numeros_posibles_activado = false;
				mostrar_numeros_posibles_propios_activado = false;
				marcar_menu_numeros_imposibles = false;
				marcar_menu_numeros_imposibles_propios = false;
				marcar_casillas_erroneas = false;
			}
		}
		else if (parametro === "n" || parametro === "d" || parametro === "sudoku" || parametro === "introduced")
		{
			if (parametro === "n") { parametro = "sudoku"; }
			if (parametro === "d") { parametro = "introduced"; }
			sudoku_url[parametro] = [];
			var valorLength = valor.length;
			var numero = 0;
			for (var y = 0; y < 81; y++)
			{
				if (y < valorLength)
				{
					numero = parseInt(valor.substring(y, y+1));
				} else { numero = 0; }
				if (isNaN(numero) || numero < 0 || numero > 9)
				{
					numero = 0;
				}
				sudoku_url[parametro][y+1] = numero;
			}
		}
	}
	activar_modo_ligero(modo_ligero, juego_comenzado, modo_ligero_ultra);
	if (guardado_activado) { guardar_opciones(); }
}


function generar_url(incluir_opciones, compress, compress_ultra, solo_opciones)
{
	if (typeof(incluir_opciones) === "undefined" || incluir_opciones === null) { incluir_opciones = true; }
	if (typeof(compress) === "undefined" || compress === null) { compress = true; }
	if (typeof(compress_ultra) === "undefined" || compress_ultra === null) { compress = compress_ultra = true; }
	if (typeof(solo_opciones) === "undefined" || solo_opciones === null) { solo_opciones = false; }
	else if (solo_opciones) { incluir_opciones = true; }
	
	var url = getCurrentURLWithoutVars();
	
	if (!solo_opciones)
	{
		var guardar_numero = false;
		var numero;
		var sudoku = "";
		for (var x = 81; x >= 1; x--)
		{
			numero = parseInt(sudoku_inicial[x]);
			if (isNaN(numero) || numero < 0 || numero > 9) { numero = 0; }
			if (numero !== 0 || guardar_numero)
			{
				sudoku = numero + sudoku;
				guardar_numero = true;
			}
		}
		if (sudoku === "") { sudoku = "0"; }
		//url += "?sudoku=" + sudoku_inicial.toString().replace(/,/g, "");
		if (!compress) { url += "?sudoku=" + sudoku; }
		else
		{
			if (compress_ultra) { sudoku = sudoku_a_base(sudoku); }
			url += "?n=" + sudoku;
		}
		
		var celdas_introducidas = "";
		guardar_numero = false;
		for (var x = 81; x >= 1; x--)
		{
			if (typeof(sudoku_inicial[x]) === "undefined" || sudoku_inicial[x] === null || sudoku_inicial[x] === "" || isNaN(sudoku_inicial[x]) || sudoku_inicial[x] === 0)
			{
				if (typeof(celdas[x]) !== "undefined" && !isNaN(celdas[x]) && celdas[x] >= 1 && celdas[x] <= 9)
				{
					celdas_introducidas = celdas[x] + celdas_introducidas;
					guardar_numero = true;
				}
				else if (guardar_numero) { celdas_introducidas = "0" + celdas_introducidas; }
			}
		}
		if (celdas_introducidas === "") { celdas_introducidas = "0"; }
		if (celdas_introducidas !== "0" || compress_ultra)
		{
			if (!compress) { url += "&introduced=" + celdas_introducidas; }
			else
			{
				if (compress_ultra) { celdas_introducidas = sudoku_a_base(celdas_introducidas); }
				url += "&d=" + celdas_introducidas;
			}
		}
	}
	
	if (incluir_opciones)
	{
		if (!compress)
		{
			if (solo_opciones)
			{
				url += "?language=" + idioma;
			}
			else
			{
				url += "&language=" + idioma;
			}
			url += "&show_panel=" + ((mostrar_panel) ? "yes" : "no");
			url += "&autosave=" + ((guardado_activado) ? "yes" : "no");
			url += "&initial_numbers=" + numeros_iniciales;
			url += "&aspect=" + ((aspecto_proporcional) ? "proportional" : "stretch");
			url += "&solution_seconds=" + mostrar_solucion_segundos;
		}
		else
		{
			if (solo_opciones)
			{
				url += "?l=" + idioma;
			}
			else
			{
				url += "&l=" + idioma;
			}
			
			url += "&p=" + ((mostrar_panel) ? "y" : "n");
			url += "&a=" + ((guardado_activado) ? "y" : "n");
			url += "&i=" + numeros_iniciales;
			url += "&x=" + ((aspecto_proporcional) ? "p" : "s");
			url += "&s=" + mostrar_solucion_segundos;
		}
		
		if (modo_ligero && modo_ligero_ultra)
		{
			if (!compress) { url += "&lightweight=ultra"; }
			else { url += "&t=u"; }
		}
		else if (modo_ligero)
		{
			if (!compress) { url += "&lightweight=medium"; }
			else { url += "&t=m"; }
		}
		else
		{
			if (!compress) { url += "&lightweight=no"; }
			else { url += "&t=n"; }
		}
		
		if (mostrar_numeros_posibles_activado && mostrar_numeros_posibles_propios_activado && marcar_menu_numeros_imposibles && marcar_menu_numeros_imposibles_propios && marcar_casillas_erroneas)
		{
			if (!compress) { url += "&help=all"; }
			else { url += "&h=a"; }
		}
		else if (mostrar_numeros_posibles_activado && !mostrar_numeros_posibles_propios_activado && marcar_menu_numeros_imposibles && !marcar_menu_numeros_imposibles_propios && marcar_casillas_erroneas)
		{
			if (!compress) { url += "&help=fixed_only"; }
			else { url += "&h=f"; }
		}
		else
		{
			if (!compress) { url += "&help=no"; }
			else { url += "&h=n"; }
		}
	}

	if (compress_ultra)
	{
		url = url.replace("?n=", "?c=");
		if (!incluir_opciones)
		{
			if (url.substring(url.length - 4) === "&d=0")
			{
				url = url.substring(0, url.length - 4);
			}
			else
			{
				url = url.replace("&d=", "_");
			}
		}
		else
		{
			if (solo_opciones)
			{
				url = url.replace("?l=", "?k=");
			}
			else
			{
				url = url.replace("&l=", "_");
			}
			url = url.replace("&d=", "_");
			url = url.replace("&p=", "");
			url = url.replace("&a=", "");
			url = url.replace("&i=", "");
			url = url.replace("&x=", "");
			url = url.replace("&s=", "");
			url = url.replace("&t=", "");
			url = url.replace("&h=", "");
		}
	}
	
	return url;
}


//Activa o desactiva el modo ligero:
function activar_modo_ligero(activar, juego_comenzado, activar_ultra)
{
	modo_ligero = activar;
	if (typeof(juego_comenzado) === "undefined" || juego_comenzado === null) { juego_comenzado = false; }
	if (typeof(activar_ultra) === "undefined" || activar_ultra === null) { activar_ultra = modo_ligero_ultra; }

	resaltar_casillas_importantes = true;
	var div_menu_numeros_transition = "opacity 500ms";
	if (activar)
	{
		casillas_con_box_shadow = false;
		casillas_con_transition_dinamico = false;
		transition_por_defecto = "font-size 300ms";
		if (juego_comenzado)
		{
			var celda;
			for (var x = 1; x <= 81; x++)
			{
				celda = document.getElementById(x);
				if (celda !== null)
				{
					celda.style.boxShadow = "";
					celda.style.mozBoxShadow = "";
					celda.style.webkitBoxShadow = "";
					celda.style.oBoxShadow = "";
					celda.style.khtmlBoxShadow = "";
				}
				cambiar_transition(x, transition_por_defecto);
			}
			if (celda_enfocada)
			{
				if (!activar_ultra)
				{
					marcar_casillas_importantes(celda_enfocada, true);
				}
			}
		}
		if (activar_ultra)
		{
			modo_ligero_ultra = true;
			div_menu_numeros_transition = "";
			var numeros_posibles_div = document.getElementById("numeros_posibles");
			var numeros_posibles_capa_div = document.getElementById("numeros_posibles_capa");
			numeros_posibles_div.style.display = numeros_posibles_capa_div.style.display = "none";
			numeros_posibles_div.style.visibility = numeros_posibles_capa_div.style.visibility = "hidden";
			resaltar_casillas_importantes = false;
			limpiar_casillas_importantes(null, true);
		}
		else
		{
			modo_ligero_ultra = false;
		}
	}
	else
	{
		modo_ligero_ultra = false;
		casillas_con_box_shadow = true;
		casillas_con_transition_dinamico = true;
		transition_por_defecto = "font-size 300ms, transform 300ms";
		if (juego_comenzado)
		{
			var celda;
			for (var x = 1; x <= 81; x++)
			{
				celda = document.getElementById(x);
				if (celda !== null)
				{
					color_shadow = (x % 2 === 0) ? "#cccccc" : "#dddddd";
					var h = Math.ceil(celda_width * 0.05);
					var v = Math.ceil(celda_width * 0.05);
					var blur = Math.ceil(((celda_width+celda_height) / 2) * 0.25);
					var spread = Math.ceil(((celda_width+celda_height) / 2) * 0.08);
					var boxShadow = "inset -" + h + "px -" + v + "px " + blur + "px " + spread + "px " + color_shadow;
					celda.style.boxShadow = boxShadow;
					celda.style.mozBoxShadow = boxShadow;
					celda.style.webkitBoxShadow = boxShadow;
					celda.style.oBoxShadow = boxShadow;
					celda.style.khtmlBoxShadow = boxShadow;
				}
				cambiar_transition(x, transition_por_defecto);
			}
			if (celda_enfocada) { marcar_casillas_importantes(celda_enfocada, true); }
		}
	}
	
	var div_menu_numeros = document.getElementById("div_menu_numeros");
	div_menu_numeros.style.MozTransition = div_menu_numeros_transition;
	div_menu_numeros.style.WebkitTransition = div_menu_numeros_transition;
	div_menu_numeros.style.OTransition = div_menu_numeros_transition;
	div_menu_numeros.style.KhtmlTransition = div_menu_numeros_transition;
	div_menu_numeros.style.MsTransition = div_menu_numeros_transition;
}


//Cambia el hash:
function cambiar_hash(hash_dado)
{
	if (typeof(history) !== "undefined" && history.pushState)
	{
		history.pushState(null, null, hash_dado);
		ultimo_hash = hash_dado;
	}
	else
	{
		location.href = hash_dado;
		//ultimo_hash = hash_dado;
	}
	
}


//Funcion que inicia el juego por primera vez:
var iniciando_primera_vez = true;
function iniciar_juego_primera_vez()
{
	//activar_modo_ligero(modo_ligero);
	restaurar_opciones(false);
	restaurar_opciones_url(false);
	
	//Se traduce el juego:
	traducir_juego(idioma, true);
	
	asignar_eventos();

	if (typeof(history) !== "undefined" && history.pushState)
	{
		history.pushState(null, null, "#iniciando_pre");
	}
	
	cambiar_hash("#iniciando_pre");
	ultimo_hash = "#inicio";
	
	cambiar_hash("#iniciando");
	ultimo_hash = "#inicio";

	if (typeof(window.plugins) !== "undefined" && typeof(window.plugins.insomnia) !== "undefined" && typeof(window.plugins.insomnia.keepAwake) !== "undefined")
	{
		try
		{
			window.plugins.insomnia.keepAwake();
		} catch (e) { }
	}

	var anyo = parseInt(new Date().getFullYear());
	poner_HTML(document.getElementById("credits_year"), anyo < 2014 ? 2014 : anyo);

	window.onresize = function() { resizear_todo(); }
	

	//Muestra o esconde el panel por primera vez (segun la variable de configuracion):
	mostrar_panel = !mostrar_panel;
	expandir_contraer_panel();
	
	//Se muestra el mensaje de cargando:
	////////mostrar_mensaje(TR_loading[idioma], true);
	
	//Despues de un tiempo (para que de tiempo a salir el mensaje de Cargando de mas arriba), se continua el segundo paso:
	//setTimeout("iniciar_juego_primera_vez_2();", 100);
	setTimeout(function() { iniciar_juego_primera_vez_2(); }, 100);
 }


//Funcion que inicia el juego por primera vez (segundo paso):
function iniciar_juego_primera_vez_2()
 {
	//Si dibuja el sudoku base:
	dibujar_sudoku();
	
	//Se inicia el juego:
	iniciar_juego(true);
	
	//Se deja de mostrar el mensaje de Cargando... (por si acaso no lo huviera hecho ya):
	////////////////////////mostrar_mensaje("", false);
	
	cambiar_hash("#inicio");
	iniciando_primera_vez = false;
 }

 
//Funcion que traduce todo el juego con el idioma dado:
function traducir_juego(idioma_elegido, primera_vez)
{
	if (typeof(idioma_elegido) === "undefined" || idioma_elegido === null || CB_trim(idioma_elegido) === "" || !idioma_elegido) { idioma_elegido = idioma; }
	if (typeof(primera_vez) === "undefined" || primera_vez === null || CB_trim(primera_vez) === "" || !idioma_elegido) { primera_vez = false; }

	idioma_elegido = CB_trim(idioma_elegido).toLowerCase();
	
	if (!CB_indexOf(idiomas, idioma_elegido)) { idioma_elegido = idiomas[0]; } //Por defecto usa el primer idioma.
	
	if (!primera_vez && idioma_elegido === idioma) { return; }
	
	//Setea el idioma elegido:
	idioma = idioma_elegido;
	
	//Traduce todo lo necesario:
	if (!usar_botones)
	{
		if (!ver_solucion)
		{
			poner_HTML(document.getElementById("div_solucion"), TR_see_solution[idioma]);
		}
		else
		{
			poner_HTML(document.getElementById("div_solucion"), TR_hide_solution[idioma]);
		}
		
		poner_HTML(document.getElementById("div_solucionar"), TR_try_to_solve[idioma]);
		poner_HTML(document.getElementById("div_checkear"), TR_check[idioma]);
	}
	else
	{
		if (!ver_solucion)
		{
			document.getElementById("div_solucion").value = TR_see_solution[idioma];
		}
		else
		{
			document.getElementById("div_solucion").value = TR_hide_solution[idioma];
		}
		
		document.getElementById("div_solucionar").value = TR_try_to_solve[idioma];
		document.getElementById("div_checkear").value = TR_check[idioma];
	}
	
	if (!ver_solucion)
	{
		document.getElementById("div_solucion").title = TR_show_sudoku_solved[idioma];
	}
	else
	{
		document.getElementById('div_solucion').title = TR_hide_sudoku_solved[idioma];
	}
	
	poner_HTML(document.getElementById("opciones_titulo"), TR_options[idioma]);
	
	document.getElementById("div_solucionar").title = TR_try_to_solve_with_introduced_numbers[idioma];
	document.getElementById("div_checkear").title = TR_verifies_sudoku[idioma];
	document.getElementById("div_opciones").title = TR_options[idioma];
	document.getElementById("boton_cerrar").title = TR_close_menu[idioma];
	document.getElementById("boton_cerrar_opciones").title = TR_close_options[idioma];
	document.getElementById("boton_crear").title = TR_create_new_sudoku[idioma];
	document.getElementById("boton_crear").value = TR_ok[idioma];
	document.getElementById("opcion_10").title = TR_delete_number[idioma];
	poner_HTML(document.getElementById("numeros_iniciales_texto"), TR_initial_numbers[idioma]);
	poner_HTML(document.getElementById("mensaje"), TR_loading[idioma]);
	poner_HTML(document.getElementById("choose_a_number"), TR_choose_a_number[idioma]);

	poner_HTML(document.getElementById("opciones_idioma_texto"), TR_options_language[idioma]);
	poner_HTML(document.getElementById("opciones_numeros_posibles_texto"), TR_options_wrong_numbers[idioma]);
	poner_HTML(document.getElementById("opciones_numeros_posibles_usuario_texto"), TR_options_repeated_introduced_numbers[idioma]);
	poner_HTML(document.getElementById("opciones_guardado_texto"), TR_options_autosave[idioma]);
	poner_HTML(document.getElementById("opciones_mostrar_solucion_segundos_texto"), TR_options_show_solution_seconds[idioma]);
	poner_HTML(document.getElementById("opciones_modo_ligero_texto"), TR_options_lightweight_mode[idioma]);
	
	document.getElementById("opciones_boton_ok").value = TR_button_ok[idioma];

	poner_HTML(document.getElementById("opcion_ultra_ligero"), TR_options_lightweight_mode_enabled_ultra[idioma]);
	poner_HTML(document.getElementById("opcion_ligero"), TR_options_lightweight_mode_enabled[idioma]);
	poner_HTML(document.getElementById("opcion_normal"), TR_options_lightweight_mode_disabled[idioma]);
	
	poner_HTML(document.getElementById("boton_compartir"), "__" + TR_share[idioma]);
	
	WECHAT_SHARE_DESCRIPTION = TR_description_short[idioma];
	try { WECHAT_onBridgeReady(); } catch(e) {}
}
 
 
//Funcion que calcula si esta ocupado el juego:
function juego_ocupado()
{
	return (iniciando_primera_vez || iniciando_juego || mostrando_solucion_calculada || mostrando_menu || mostrando_alerta || mostrando_confirmar || mostrando_mensaje || mostrando_opciones);
}


//Funcion que muestra las opciones:
var mostrando_opciones = false;
var mostrar_opciones_timeout;
function mostrar_opciones()
{
	if (mostrando_opciones || juego_ocupado()) { return; }
	
	var opciones_contenedor = document.getElementById("opciones");
	if (opciones_contenedor === null) { return; }
	var opciones_texto = document.getElementById("opciones_texto");
	if (opciones_texto === null) { return; }

	//Si se esta viendo la solucion del sudoku, se deja de mostrar:
	if (ver_solucion) { mostrar_solucion(); }
	
	//numeros_posibles_ocultar();
	
	numeros_posibles_ocultar(true);
	
	mostrando_opciones = true;
	cambiar_hash("#mostrando_opciones");
	
	clearTimeout(mostrar_opciones_timeout);
	clearTimeout(ocultar_opciones_timeout);

	//Se actualiza al menu de opciones:
	actualizar_opciones();
	
	//Se muestran las opciones:
	opciones_texto.className = "invisible" + ((modo_ligero_ultra) ? "_ligero_ultra" : "");
	opciones_contenedor.className = "no_seleccionable invisible" + ((modo_ligero_ultra) ? "_ligero_ultra" : "");
	opciones_contenedor.style.visibility = "visible";
	opciones_contenedor.style.display = "block";
	
	mostrar_opciones_timeout =
		setTimeout(
			function()
			{
				opciones_texto.className = "visible" + ((modo_ligero_ultra) ? "_ligero_ultra" : "");
				opciones_contenedor.className = "no_seleccionable visible" + ((modo_ligero_ultra) ? "_ligero_ultra" : "");
				//Se pone el foco en el boton:
				document.getElementById("opciones_boton_ok").focus();
			}
		, 100);
}


//Funcion que actualiza el menu de opciones (visualmente):
var opciones_creadas = false;
function actualizar_opciones()
{
	//Se rellenan los formularios de las opciones con las opciones disponibles (si es la primera vez):
	var select_idiomas = document.getElementById("opciones_idioma");
	var select_segundos = document.getElementById("opciones_mostrar_solucion_segundos");
	if (!opciones_creadas)
	{
		opciones_creadas = true;
		var opcion_x;
		var idiomas_local = idiomas.sort();
		var idiomasLength = idiomas_local.length;
		for (var x = 0; x < idiomasLength; x++)
		{
			opcion_x = document.createElement("option");
			opcion_x.value = idiomas_local[x];
			opcion_x.textContent = opcion_x.innerText = TR_language_names[idiomas_local[x]];
			poner_HTML(opcion_x, TR_language_names[idiomas_local[x]]);
			//opcion_x.id = "opcion_numero_" + j;
			if (idiomas_local[x] === idioma) { opcion_x.selected = true; }
			select_idiomas.appendChild(opcion_x);
		}

		for (var x = 2; x <= Math.max(30, mostrar_solucion_segundos); x += 2)
		{
			opcion_x = document.createElement("option");
			opcion_x.value = opcion_x.textContent = opcion_x.innerText = x;
			poner_HTML(opcion_x, x);
			//opcion_x.id = "opcion_numero_" + j;
			if (x === mostrar_solucion_segundos) { opcion_x.selected = true; }
			select_segundos.appendChild(opcion_x);
		}

		//Asigna los eventos:
		document.getElementById("opciones_boton_ok").onclick = function() { ocultar_opciones(); };
		if (permitir_touchstart && ("ontouchstart" in window || typeof(document.body.ontouchstart) !== "undefined"))
		{
			document.getElementById("opciones_boton_ok").ontouchstart = function() { setTimeout(ocultar_opciones, 100); };
		}
		document.getElementById("opciones_boton_ok").onmouseover = function() { this.style.background = "#ffffff"; this.style.border = "3px solid #000000"; this.style.color = "#ff0000"; };
		document.getElementById("opciones_boton_ok").onmouseout = function() { this.style.background = "#cccccc"; this.style.border = "3px solid #aaaaaa"; this.style.color = "#aa0000"; };

		document.getElementById("opciones_idioma").onchange = function() { traducir_juego(this.value); };
		
		var cambiar_numeros_posibles =
			function()
			{
				marcar_casillas_erroneas = mostrar_numeros_posibles_activado = marcar_menu_numeros_imposibles = document.getElementById("opciones_numeros_posibles").checked;
				actualizar_opciones();
				guardar_opciones();
			};
		document.getElementById("opciones_numeros_posibles").onchange = function() { setTimeout(cambiar_numeros_posibles, 100); }; //IE fix.
		document.getElementById("opciones_numeros_posibles").onclick = function() { setTimeout(cambiar_numeros_posibles, 100); } //IE fix.
		document.getElementById("opciones_numeros_posibles_texto").onclick = function() { setTimeout(cambiar_numeros_posibles, 100); } //IE fix.
		
		var cambiar_numeros_posibles_usuario = function() { mostrar_numeros_posibles_propios_activado = marcar_menu_numeros_imposibles_propios = document.getElementById("opciones_numeros_posibles_usuario").checked; actualizar_opciones(); guardar_opciones(); };
		document.getElementById("opciones_numeros_posibles_usuario").onchange = function() { setTimeout(cambiar_numeros_posibles_usuario, 100); }; //IE fix.
		document.getElementById("opciones_numeros_posibles_usuario").onclick = function() { setTimeout(cambiar_numeros_posibles_usuario, 100); } //IE fix.
		document.getElementById("opciones_numeros_posibles_usuario_texto").onclick = function() { setTimeout(cambiar_numeros_posibles_usuario, 100); } //IE fix.
		
		document.getElementById("opciones_guardado").onchange = function() { guardado_activado = this.checked; guardar_opciones(); };
		document.getElementById("opciones_mostrar_solucion_segundos").onchange =
			function()
			{
				mostrar_solucion_segundos = this.value;
				if (isNaN(mostrar_solucion_segundos)) { mostrar_solucion_segundos = 10; }
				if (mostrar_solucion_segundos % 2 !== 0)
				{
					if (mostrar_solucion_segundos <= 0) { mostrar_solucion_segundos = 2; }
					else { mostrar_solucion_segundos++; }
				}
				if (mostrar_solucion_segundos > 300) { mostrar_solucion_segundos = 300; }
				guardar_opciones();
			};
		document.getElementById("opciones_modo_ligero").onchange =
			function()
			{
				if (this.value == "0")
				{
					modo_ligero = true;
					modo_ligero_ultra = true;
				}
				else if (this.value == "1")				
				{
					modo_ligero = true;
					modo_ligero_ultra = false;
				}
				else
				{
					modo_ligero = false;
					modo_ligero_ultra = false;
				}
				actualizar_opciones();
				guardar_opciones();
			};
	}
	
	//Se activan o desactivan las opciones pertinentes:
	select_idiomas.value = idioma;
	select_idiomas.options[CB_indexOf(idiomas, idioma)].selected = true;

	var ayuda_numeros_erroneos = (mostrar_numeros_posibles_activado && marcar_menu_numeros_imposibles);
	
	if (ayuda_numeros_erroneos && marcar_casillas_erroneas)
	{
		marcar_zonas_erroneas(true);
	}
	else
	{
		restaurar_celdas_erroneas(true);
	}
	
	if (!ayuda_numeros_erroneos) { numeros_posibles_ocultar(true); }
	//else { numeros_posibles_mostrar(celda_enfocada, true); }
	else { numeros_posibles_mostrar(celda_enfocada, true); }

	marcar_casillas_importantes(celda_enfocada, true);
	
	var ayuda_numeros_repetidos_usuario = (ayuda_numeros_erroneos && mostrar_numeros_posibles_propios_activado && marcar_menu_numeros_imposibles_propios);
	document.getElementById("opciones_numeros_posibles").checked = ayuda_numeros_erroneos;
	document.getElementById("opciones_numeros_posibles_usuario_texto").className = (ayuda_numeros_erroneos) ? "opcion_texto" : "opcion_desactivada_texto";
	document.getElementById("opciones_numeros_posibles_usuario").checked = ayuda_numeros_repetidos_usuario;

	document.getElementById("opciones_numeros_posibles_usuario").className = (ayuda_numeros_erroneos) ? ("opciones_checkbox" + ((modo_ligero_ultra) ? "_ligero_ultra" : "")) : ("opciones_checkbox_desactivado" + ((modo_ligero_ultra) ? "_ligero_ultra" : ""));
	
	document.getElementById("opciones_guardado").className = (modo_ligero_ultra) ? "opciones_checkbox_ligero_ultra" : "opciones_checkbox";
	document.getElementById("opciones_numeros_posibles").className = (modo_ligero_ultra) ? "opciones_checkbox_ligero_ultra" : "opciones_checkbox";
	
	document.getElementById("opciones_numeros_posibles_usuario").disabled = !ayuda_numeros_erroneos;
	
	document.getElementById("opciones_guardado").checked = guardado_activado;

	var opciones_modo_ligero_select = document.getElementById("opciones_modo_ligero");
	activar_modo_ligero(modo_ligero, true, modo_ligero_ultra);	
	//document.getElementById("opciones_modo_ligero").checked = modo_ligero;

	if (!ocultando_opciones)
	{
		if (modo_ligero && modo_ligero_ultra)
		{
			opciones_modo_ligero_select.value = "0";
			opciones_modo_ligero_select.options[0].selected = true;
			document.getElementById("opciones").className = "visible_ligero_ultra";
		}
		else if (modo_ligero)
		{
			opciones_modo_ligero_select.value = "1";
			opciones_modo_ligero_select.options[1].selected = true;
			document.getElementById("opciones").className = "visible";
		}
		else
		{
			opciones_modo_ligero_select.value = "2";
			opciones_modo_ligero_select.options[2].selected = true;
			document.getElementById("opciones").className = "visible";
		}
	}

	select_segundos.value = mostrar_solucion_segundos;
	var indice_segundos = parseInt((mostrar_solucion_segundos - 2) / 2);
	if (indice_segundos >= select_segundos.options.length) { indice_segundos = 0; }
	select_segundos.options[indice_segundos].selected = true;
}


//Funcion que oculta las opciones:
var ocultar_opciones_timeout;
var ocultando_opciones = false;
function ocultar_opciones(no_actualizar_hash)
{
	if (typeof(no_actualizar_hash) === "undefined" || no_actualizar_hash === null) { no_actualizar_hash = false; }

	if (!mostrando_opciones) { return; }

	var opciones_contenedor = document.getElementById("opciones");
	if (opciones_contenedor === null) { return; }
	var opciones_texto = document.getElementById("opciones_texto");
	if (opciones_texto === null) { return; }

	ocultando_opciones = true;
	
	clearTimeout(mostrar_opciones_timeout);
	clearTimeout(ocultar_opciones_timeout);
	
	opciones_texto.className = "invisible" + ((modo_ligero_ultra) ? "_ligero_ultra" : "");
	opciones_contenedor.className = "no_seleccionable invisible" + ((modo_ligero_ultra) ? "_ligero_ultra" : "");
	
	guardar_opciones();
	
	ocultar_opciones_timeout =
		setTimeout(
			function()
			{
				var ayuda_numeros_erroneos = (mostrar_numeros_posibles_activado && marcar_menu_numeros_imposibles);
				opciones_contenedor.style.visibility = "hidden";
				opciones_contenedor.style.display = "none";
				if (!no_actualizar_hash) { cambiar_hash("#inicio"); }
				mostrando_opciones = false;
				ocultando_opciones = false;
			}
		, 1000);
}
 

//Funcion que guarda las opciones (web storage o cookies):
function guardar_opciones()
{
	//Se guardan las opciones:
	setValor("guardado_activado", ((guardado_activado) ? "activado" : "desactivado")); //Si ha llegado aqui, es que el guardado esta activado.
	if (!guardado_activado) { return; } //No guarda nada mas si no se quieren guardar las opciones.
	setValor("idioma", idioma);
	setValor("ayuda_numeros", ((mostrar_numeros_posibles_activado && marcar_menu_numeros_imposibles) ? "activado" : "desactivado"));
	setValor("ayuda_numeros_usuario", ((mostrar_numeros_posibles_activado && marcar_menu_numeros_imposibles && mostrar_numeros_posibles_propios_activado && marcar_menu_numeros_imposibles_propios) ? "activado" : "desactivado"));
	setValor("mostrar_solucion_segundos", mostrar_solucion_segundos);
	setValor("modo_ligero", ((modo_ligero) ? "activado" : "desactivado"));
	setValor("modo_ligero_ultra", ((modo_ligero && modo_ligero_ultra) ? "activado" : "desactivado"));
	
	//Guarda el sudoku:
	guardar_sudoku(true);
}


//Funcion que restaura las opciones guardadas:
function restaurar_opciones(juego_comenzado)
{
	if (!guardado_activado) { return; }
	if (typeof(juego_comenzado) === "undefined" || juego_comenzado === null) { juego_comenzado = false; }

	//Se restauran las opciones:
	var guardado_activado_local = CB_trim(getValor("guardado_activado")).toLowerCase();
	if (guardado_activado_local === "desactivado") { guardado_activado = false; return; } //Si no se quieren guardar las opciones, tampoco las restaura.
	//else { guardad_activado = true; }
	
	var idioma_local = CB_trim(getValor("idioma", idioma)).toLowerCase();
	if (idioma_local.length === 2) { idioma = idioma_local; }
	
	var mostrar_solucion_segundos_local = parseInt(CB_trim(getValor("mostrar_solucion_segundos")));
	if (!isNaN(mostrar_solucion_segundos_local) && mostrar_solucion_segundos_local >= 0 && mostrar_solucion_segundos_local % 2 === 0 && mostrar_solucion_segundos_local <= 300)
	{
		mostrar_solucion_segundos = mostrar_solucion_segundos_local;
	}
	
	var ayuda_numeros =	CB_trim(getValor("ayuda_numeros")).toLowerCase();
	if (ayuda_numeros === "desactivado") { mostrar_numeros_posibles_activado = marcar_menu_numeros_imposibles = marcar_casillas_erroneas = false; }
	else //Si los numeros de ayuda estan activados, tiene sentido tener en cuenta los introducidos por el usuario:
	{
		if (ayuda_numeros === "activado") { marcar_casillas_erroneas = mostrar_numeros_posibles_activado = marcar_menu_numeros_imposibles = true; }
		var ayuda_numeros_usuario =	CB_trim(getValor("ayuda_numeros_usuario")).toLowerCase();
		if (ayuda_numeros_usuario === "desactivado") { mostrar_numeros_posibles_propios_activado = marcar_menu_numeros_imposibles_propios = false; }
		else if (ayuda_numeros_usuario === "activado") { mostrar_numeros_posibles_propios_activado = marcar_menu_numeros_imposibles_propios = true; }
	}
	
	var modo_ligero_local =	CB_trim(getValor("modo_ligero")).toLowerCase();
	if (modo_ligero_local === "desactivado") { modo_ligero = false; }
	else
	{
		if (modo_ligero_local === "activado") { modo_ligero = true; }
		var modo_ligero_ultra_local = CB_trim(getValor("modo_ligero_ultra")).toLowerCase();
		if (modo_ligero_ultra_local === "desactivado") { modo_ligero_ultra = false; }
		else if (modo_ligero_ultra_local === "activado") { modo_ligero_ultra = true; }
	}

	activar_modo_ligero(modo_ligero, juego_comenzado, modo_ligero_ultra);
}

 
//Funcion que asigna los eventos pertinentes a cada elemento:
var abriendo_opciones = false;
var div_solucion_onclick;
var div_solucionar_onclick;
var div_checkear_onclick;
var div_opciones_onclick;
var numeros_iniciales_onchange_timeout;
var d_i_v_creado = false;
var loquesea = "";
var dejar_seleccionar = false;
var seleccionar_function_interval;
var comprimir_urls = false;
var comprimir_urls_ultra = false;
var compartir_opcion_seleccionada = 0;
var compartir_opcion_comprimir = 2;
function asignar_eventos(solo_email, email_id)
{
	if (typeof(solo_email) === "undefined" || solo_email === null) { solo_email = false; }
	if (typeof(email_id) === "undefined" || email_id === null) { email_id = "email"; }
	var email = document.getElementById(email_id);
	if (email !== null)
	{
		email_real = "joanalbamaldonado" + "@" + "NO_SPAM_PLEASEgmail" + "." + "com";
		email_real = email_real.replace("NO_SPAM_PLEASE", "");
		email.href = "mailto:" + email_real + "?subject=yasminoku";
		email.onclick = function()
		{
			var anyo = parseInt(new Date().getFullYear());
			anyo = (anyo < 2014) ? 2014 : anyo
			var creditos = "© 2006-" + anyo + " Yasminoku " + version;
				creditos += " " + TR_credits_by[idioma] + " Joan Alba Maldonado";
			var codigoHTML = document.createElement("div");
				codigoHTML.style.lineHeight = "14px";
				
				var creditosAdicionalesText = document.createElement("div");
				creditosAdicionalesText.style.fontSize = "14px";
				creditosAdicionales = TR_additional_credits[idioma].split("<br />");
				var creditosAdicionalesLength = creditosAdicionales.length;
				//poner_HTML(creditosAdicionalesText, "");
				for (var x = 0; x < creditosAdicionalesLength; x++)
				{
					var spancito = document.createElement("span");
					poner_HTML(spancito, creditosAdicionales[x]);
					creditosAdicionalesText.appendChild(spancito);
					creditosAdicionalesText.appendChild(document.createElement("br"));
				}
				//poner_HTML(creditosAdicionalesText, TR_additional_credits[idioma]);
				codigoHTML.appendChild(creditosAdicionalesText);
				
				
				var copyrightText = document.createElement("div");
				copyrightText.style.fontSize = "12px";
				copyrightText.style.color = "#aa0000";
				poner_HTML(copyrightText, TR_copyright_text[idioma]);
				codigoHTML.appendChild(copyrightText);
				//codigoHTML.appendChild(document.createElement("br"));
				var linkWeb = document.createElement("a");
				linkWeb.href = "http://yasminoku.tuxfamily.org";
				linkWeb.target = "_blank";
				linkWeb.className = "normal";
				poner_HTML(linkWeb, "http://yasminoku.tuxfamily.org");
				codigoHTML.appendChild(linkWeb);
				codigoHTML.appendChild(document.createElement("br"));
				var linkEmail = document.createElement("a");
				linkEmail.href = email.href;
				linkEmail.target = "_blank";
				linkEmail.className = "normal";
				poner_HTML(linkEmail, email_real);
				codigoHTML.appendChild(linkEmail);
				codigoHTML.appendChild(document.createElement("br"));
				codigoHTML.appendChild(document.createElement("br"));
				
				//creditos += '<a href="http://yasminoku.tuxfamily.org" target="_blank">http://yasminoku.tuxfamily.org</a><br />';
				//creditos += '( <a href="' + email.href + '" target="_blank">' + email_real + '</a> )<br />';
			
			alerta(creditos, null, codigoHTML);
			return false;
		};
	}

	if (solo_email) { return; }
	
	//Se recogen los elementos en una variable:
	var div_opciones = document.getElementById("div_opciones");
	var div_solucion = document.getElementById("div_solucion");
	var div_solucionar = document.getElementById("div_solucionar");
	var div_checkear = document.getElementById("div_checkear");
	var boton_cerrar = document.getElementById("boton_cerrar");
	var boton_cerrar_opciones = document.getElementById("boton_cerrar_opciones");
	var opcion_1 = document.getElementById("opcion_1");
	var opcion_2 = document.getElementById("opcion_2");
	var opcion_3 = document.getElementById("opcion_3");
	var opcion_4 = document.getElementById("opcion_4");
	var opcion_5 = document.getElementById("opcion_5");
	var opcion_6 = document.getElementById("opcion_6");
	var opcion_7 = document.getElementById("opcion_7");
	var opcion_8 = document.getElementById("opcion_8");
	var opcion_9 = document.getElementById("opcion_9");
	var opcion_10 = document.getElementById("opcion_10");
	var boton_esconder_panel = document.getElementById("boton_esconder_panel");
	var formulario_numeros_iniciales = document.getElementById("formulario_numeros_iniciales");
	var numeros_iniciales_select = document.getElementById("numeros_iniciales");
	var boton_crear = document.getElementById("boton_crear");
	
	//Se definen los eventos:
	div_solucion_onclick = function() { if (cerrando_mensaje) { return; } if (juego_ocupado()) { return; } if (numeros_iniciales >= 81) { return; } mostrar_mensaje(TR_loading[idioma], true); setTimeout(function(){ mostrar_solucion(); }, 100); };
	div_solucionar_onclick = function() { if (cerrando_mensaje) { return; } if (juego_ocupado()) { return; } mostrar_mensaje(TR_solving[idioma], true); setTimeout(intentar_solucionar, 600); };
	div_checkear_onclick = function() { if (cerrando_mensaje) { return; } if (juego_ocupado()) { return; } validar_sudoku_usuario(); };
	div_opciones_onclick =
		function()
		{
			if (cerrando_mensaje) { return; }
			if (juego_ocupado()) { return; }
			abriendo_opciones = true;
			setTimeout(function() { abriendo_opciones = false; }, 1000);
			mostrar_opciones();
		};
	var boton_cerrar_onclick =
		function()
		{
			document.getElementById('div_menu_numeros').style.visibility = 'hidden';
			mostrando_menu = false;
			cambiar_hash('#inicio');
			/*document.getElementById(celda_seleccionada).style.background = (celda_seleccionada % 2 === 0) ? '#dddddd' : '#eeeeee';*/
			////resaltar_celda(celda_seleccionada, false);
			elemento_onmouseover(celda_seleccionada, mostrar_numeros_posibles_activado);
			numeros_posibles_mostrar(celda_seleccionada, true);
			marcar_casillas_importantes(celda_seleccionada, true);
			desmarcar_menu_numeros();
		};
	var boton_cerrar_opciones_onclick = function() { if (!abriendo_opciones) { ocultar_opciones(); } };
	var opcion_1_onclick = function() { if (!click_reciente) { numero_escogido(1); } };
	var opcion_2_onclick = function() { if (!click_reciente) { numero_escogido(2); } };
	var opcion_3_onclick = function() { if (!click_reciente) { numero_escogido(3); } };
	var opcion_4_onclick = function() { if (!click_reciente) { numero_escogido(4); } };
	var opcion_5_onclick = function() { if (!click_reciente) { numero_escogido(5); } };
	var opcion_6_onclick = function() { if (!click_reciente) { numero_escogido(6); } };
	var opcion_7_onclick = function() { if (!click_reciente) { numero_escogido(7); } };
	var opcion_8_onclick = function() { if (!click_reciente) { numero_escogido(8); } };
	var opcion_9_onclick = function() { if (!click_reciente) { numero_escogido(9); } };
	var opcion_10_onclick = function() { if (!click_reciente) { numero_escogido(10); } };
	var boton_esconder_panel_onclick = function() { expandir_contraer_panel(); };
	
	var div_formulario_numeros_iniciales = document.getElementById("div_formulario_numeros_iniciales");
	if (div_formulario_numeros_iniciales !== null) { div_formulario_numeros_iniciales.onmousedown = function() { expandir_contraer_panel(true); } }
	
	//Se asignan los eventos al click:
	if (!usar_botones)
	{
		div_solucion.onmousedown = div_solucion_onclick;
		div_solucionar.onmousedown = div_solucionar_onclick;
		div_checkear.onmousedown = div_checkear_onclick;
		div_opciones.onmousedown = div_opciones_onclick;
	}
	else
	{
		div_solucion.onclick = div_solucion_onclick;
		div_solucionar.onclick = div_solucionar_onclick;
		div_checkear.onclick = div_checkear_onclick;
		div_opciones.onclick = div_opciones_onclick;
	}

	boton_cerrar.onmousedown = boton_cerrar_onclick;
	boton_cerrar_opciones.onmousedown = boton_cerrar_opciones_onclick;
	opcion_1.onmousedown = opcion_1_onclick;
	opcion_2.onmousedown = opcion_2_onclick;
	opcion_3.onmousedown = opcion_3_onclick;
	opcion_4.onmousedown = opcion_4_onclick;
	opcion_5.onmousedown = opcion_5_onclick;
	opcion_6.onmousedown = opcion_6_onclick;
	opcion_7.onmousedown = opcion_7_onclick;
	opcion_8.onmousedown = opcion_8_onclick;
	opcion_9.onmousedown = opcion_9_onclick;
	opcion_10.onmousedown = opcion_10_onclick;
	boton_esconder_panel.onmousedown = boton_esconder_panel_onclick;
	
	//Si es compatible con touchstart, se asignan los eventos a el:
	if (permitir_touchstart && ("ontouchstart" in window || typeof(document.body.ontouchstart) !== "undefined"))
	{
		div_solucion.ontouchstart = function() { this.onclick = this.onmousedown = null; div_solucion_onclick(); };
		div_solucionar.ontouchstart = function() { this.onclick = this.onmousedown = null; div_solucionar_onclick(); };
		div_checkear.ontouchstart = function() { this.onclick = this.onmousedown = null; div_checkear_onclick(); };
		div_opciones.ontouchstart = function() { /*this.blur();*/ div_opciones_onclick(); };
		//boton_cerrar.ontouchstart = function() { this.onmousedown = null; boton_cerrar_onclick(); };
		//boton_cerrar_opciones.ontouchstart = function() { this.onmousedown = null; boton_cerrar_opciones_onclick(); };
		//opcion_1.ontouchstart = function() { this.onmousedown = null; opcion_1_onclick(); };
		//opcion_2.ontouchstart = function() { this.onmousedown = null; opcion_2_onclick(); };
		//opcion_3.ontouchstart = function() { this.onmousedown = null; opcion_3_onclick(); };
		//opcion_4.ontouchstart = function() { this.onmousedown = null; opcion_4_onclick(); };
		//opcion_5.ontouchstart = function() { this.onmousedown = null; opcion_5_onclick(); };
		//opcion_6.ontouchstart = function() { this.onmousedown = null; opcion_6_onclick(); };
		//opcion_7.ontouchstart = function() { this.onmousedown = null; opcion_7_onclick(); };
		//opcion_8.ontouchstart = function() { this.onmousedown = null; opcion_8_onclick(); };
		//opcion_9.ontouchstart = function() { this.onmousedown = null; opcion_9_onclick(); };
		//opcion_10.ontouchstart = function() { this.onmousedown = null; opcion_10_onclick(); };
		////boton_esconder_panel.ontouchstart = function() { this.onmousedown = null; boton_esconder_panel_onclick(); };
	}
	
	//Se asignan otros eventos:
	document.onkeydown = tecla_pulsada;
	div_solucion.onmouseover = function() { if (cerrando_mensaje) { return; } this.style.color='#aa0000'; };
	div_solucion.onmouseout = function() { this.style.color='#222222'; };
	div_solucionar.onmouseover = function() { if (cerrando_mensaje) { return; } this.style.color='#aa0000'; };
	div_solucionar.onmouseout = function() { this.style.color='#222222'; };
	div_checkear.onmouseover = function() { if (cerrando_mensaje) { return; } this.style.color='#aa0000'; };
	div_checkear.onmouseout = function() { this.style.color='#222222'; };
	div_opciones.onmouseover = function() { if (cerrando_mensaje) { return; } this.style.color='#aa0000'; };
	div_opciones.onmouseout = function() { this.style.color='#222222'; };
	boton_cerrar.onmouseover = function() { if (cerrando_mensaje) { return; } this.style.color = '#000000'; };
	boton_cerrar.onmouseout = function() { this.style.color = '#696969'; };
	boton_cerrar_opciones.onmouseover = function() { this.style.color = '#000000'; };
	boton_cerrar_opciones.onmouseout = function() { this.style.color = '#696969'; };
	opcion_1.onmouseover = function() { if (!click_reciente) { seleccionar(1, 'activar', true); } };
	opcion_1.onmouseout = function() { seleccionar(1, 'desactivar', false); };
	opcion_2.onmouseover = function() { if (!click_reciente) { seleccionar(2, 'activar', true); } };
	opcion_2.onmouseout = function() { seleccionar(2, 'desactivar', false); };
	opcion_3.onmouseover = function() { if (!click_reciente) { seleccionar(3, 'activar', true); } };
	opcion_3.onmouseout = function() { seleccionar(3, 'desactivar', false); };
	opcion_4.onmouseover = function() { if (!click_reciente) { seleccionar(4, 'activar', true); } };
	opcion_4.onmouseout = function() { seleccionar(4, 'desactivar', false); };
	opcion_5.onmouseover = function() { if (!click_reciente) { seleccionar(5, 'activar', true); } };
	opcion_5.onmouseout = function() { seleccionar(5, 'desactivar', false); };
	opcion_6.onmouseover = function() { if (!click_reciente) { seleccionar(6, 'activar', true); } };
	opcion_6.onmouseout = function() { seleccionar(6, 'desactivar', false); };
	opcion_7.onmouseover = function() { if (!click_reciente) { seleccionar(7, 'activar', true); } };
	opcion_7.onmouseout = function() { seleccionar(7, 'desactivar', false); };
	opcion_8.onmouseover = function() { if (!click_reciente) { seleccionar(8, 'activar', true); } };
	opcion_8.onmouseout = function() { seleccionar(8, 'desactivar', false); };
	opcion_9.onmouseover = function() { if (!click_reciente) { seleccionar(9, 'activar', true); } };
	opcion_9.onmouseout = function() { seleccionar(9, 'desactivar', false); };
	opcion_10.onmouseover = function() { if (!click_reciente) { seleccionar(10, 'activar', true); } };
	opcion_10.onmouseout = function() { seleccionar(10, 'desactivar', false); };
	boton_esconder_panel.onmouseover = function() { this.style.color = '#333333'; };
	boton_esconder_panel.onmouseout = function() { this.style.color = '#696969'; };
	formulario_numeros_iniciales.onsubmit =
											function()
											{
												clearTimeout(numeros_iniciales_onchange_timeout);
												//if (juego_ocupado() && !mostrando_menu)
												if (juego_ocupado())
												{
													//document.getElementById("formulario_numeros_iniciales").numeros_iniciales.value = numeros_iniciales;
													//document.getElementById("formulario_numeros_iniciales").numeros_iniciales.options[numeros_iniciales].selected = true;
													return false;
												}
												reiniciar_juego();
												return false;
											};
	numeros_iniciales_select.onchange =
								function()
								{
									clearTimeout(numeros_iniciales_onchange_timeout);

									if (celda_enfocada)
									{
										//var celda_anterior_elegida = document.getElementById(celda_enfocada);
										//if (celda_anterior_elegida !== null)
										//{
											//celda_anterior_elegida.style.background = (celda_enfocada % 2 === 0) ? "#dddddd" : "#eeeeee";
											resaltar_celda(celda_enfocada, false);
										//}
										celda_enfocada = 0;
									}
									
									if (!boton_crear_invisible && parseInt(this.value) == parseInt(numeros_iniciales)) { return false; }
									//if (juego_ocupado() && !mostrando_menu)
									if (juego_ocupado())
									{
										this.value = numeros_iniciales;
										this.options[numeros_iniciales].selected = true;
										this.blur();
										return false;
									}
									numeros_iniciales_onchange_timeout = setTimeout(
										function()
										{
											//if (juego_ocupado() && !mostrando_menu)
											if (juego_ocupado())
											{
												numeros_iniciales_select.value = numeros_iniciales;
												numeros_iniciales_select.options[numeros_iniciales].selected = true;
												numeros_iniciales_select.blur();
												return false;
											}
											else if (!boton_crear_invisible && parseInt(numeros_iniciales_select.value) == parseInt(numeros_iniciales)) { return false; }
											reiniciar_juego();
											numeros_iniciales_select.blur();
										}, 1000);
								};
	boton_crear.onmouseover = function() { if (cerrando_mensaje) { return; } this.style.color = '#aa0000'; this.style.border = '1px solid #000000'; };
	boton_crear.onmouseout = function() { this.style.color = '#000000'; this.style.border = '1px solid #ffffff'; };
	boton_crear.onclick =
							function()
							{
								if (cerrando_mensaje) { return; }
								clearTimeout(numeros_iniciales_onchange_timeout);
								//if (juego_ocupado() && !mostrando_menu)
								if (juego_ocupado())
								{
									//document.getElementById("formulario_numeros_iniciales").numeros_iniciales.value = numeros_iniciales;
									//document.getElementById("formulario_numeros_iniciales").numeros_iniciales.options[numeros_iniciales].selected = true;
									return false;
								}
								reiniciar_juego();
								return false;
							};

	
	var elementos_no_seleccionables = null;
	
	if (typeof(document.getElementsByClassName) != "undefined" && document.getElementsByClassName != null)
	{
		elementos_no_seleccionables = document.getElementsByClassName("no_seleccionable");
	}
	else if (document.querySelectorAll)
	{
		elementos_no_seleccionables = document.querySelectorAll(".no_seleccionable");
	}
	else if (document.getElementsByTagName)
	{
		var allElements = document.getElementsByTagName("*");
		allElementsLength = allElements.length;
		if (allElementsLength > 0)
		{
			elementos_no_seleccionables = [];
			var elementCurrent;
			var classes;
			var classesLength;
			for (var x = 0; x < allElementsLength; x++)
			{
				elementCurrent = allElements[x];
				if (elementCurrent !== null)
				{
					classes = elementCurrent.className.split(" ");
					classesLength = classes.length;
					for (var y = 0; y < classesLength; y++)
					{
						classes[y] = CB_trim(classes[y]).toLowerCase();
						if (classes[y] === "no_seleccionable")
						{
							elementos_no_seleccionables.push(elementCurrent);
							break;
						}
					}
				}
			}
		}
	}
	
	if (elementos_no_seleccionables !== null)
	{
		elementos_no_seleccionables_length = elementos_no_seleccionables.length;
		for (var x = 0 ; x < elementos_no_seleccionables_length; x++)
		{
			if (elementos_no_seleccionables[x] !== null)
			{
				elementos_no_seleccionables[x].onselectstart = function() { return dejar_seleccionar; }
			}
		}
	}

	//Al hacer click, se para intentar solucionar (si estuviese activo):
	document.onclick = parar_intentar_solucionar;
	document.body.onclick = parar_intentar_solucionar;
	/*
		if (!mostrando_solucion_calculada_finalizado || mostrando_solucion_calculada)
	{
		if (unicode === 27 || unicode === 13 || unicode === 32 || unicode === 38 || unicode === 40 || unicode === 37 || unicode === 39 || unicode === 175 || unicode === 176 || unicode === 177 || unicode === 178) //"RETURN", "SPACEBAR", "ESC" o "ARROW KEYS".
		{
			parar_intentar_solucionar();
		}
		return;
	}
*/
	
	if (permitir_touchstart && ("ontouchstart" in window || typeof(document.body.ontouchstart) !== "undefined"))
	{
		document.ontouchstart = parar_intentar_solucionar;
	}

	/*
	//Si es un dispositivo movil, no muestra los numeros posibles:
	if (isMobile())
	{
		mostrar_numeros_posibles_activado = false;
	}
	*/
	
	//Asigna eventos a las hotkeys:
	document.getElementById("div_solucion_hotkey").onmousedown = function() { if (typeof(div_solucion_onclick) === "function") { div_solucion_onclick(); } };
	document.getElementById("div_solucionar_hotkey").onmousedown = function() { if (typeof(div_solucionar_onclick) === "function") { div_solucionar_onclick(); } };
	document.getElementById("div_checkear_hotkey").onmousedown = function() { if (typeof(div_checkear_onclick) === "function") { div_checkear_onclick(); } };
	document.getElementById("div_opciones_hotkey").onmousedown = function() { if (typeof(div_opciones_onclick) === "function") { div_opciones_onclick(); } };
	document.getElementById("boton_esconder_panel_hotkey").onmousedown = function() { if (typeof(expandir_contraer_panel) === "function") { expandir_contraer_panel(); } };
	document.getElementById("numeros_iniciales_hotkey").onmousedown =
		function() { 
			if (!juego_ocupado())
			{
				var numeros_iniciales_select = document.getElementById("numeros_iniciales");
				if (numeros_iniciales_select !== null) { numeros_iniciales_select.focus(); }
			}
		};
	

	var evento_visibilidad = "";
	if ("hidden" in document)
	{
		evento_visibilidad = "visibilitychange";
	}
	else if ("mozHidden" in document)
	{
		evento_visibilidad = "mozvisibilitychange";
	}
	else if ("webkitHidden" in document)
	{
		evento_visibilidad = "webkitvisibilitychange";
	}
	else if ("msHidden" in document)
	{
		evento_visibilidad = "msvisibilitychange";
	}

	if (evento_visibilidad !== "")
	{
		//var evento_visibilidad_funcion = function() { numeros_posibles_ocultar(); marcar_casillas_importantes(celda_enfocada, false); };
		var evento_visibilidad_funcion = function() { resizear_todo(); };
		if (document.addEventListener)
		{
			document.addEventListener(evento_visibilidad, evento_visibilidad_funcion, false);
		}
		else if (document.attachEvent)
		{
			document.attachEvent(evento_visibilidad, evento_visibilidad_funcion);
			document.attachEvent("on" + evento_visibilidad, evento_visibilidad_funcion);
		}
	}
	
	//Commented because it causes to close the selector after clicking it on IE7:
	/*
	document.getElementById("opciones_idioma").onmouseout = function() { this.style.backgroundColor = "#dddddd"; this.style.border = "2px solid #333333"; };
	document.getElementById("opciones_idioma").onmouseover = function() { this.style.backgroundColor = "#ffffff"; this.style.border = "2px solid #000000"; try { this.style.cursor = "pointer"; this.style.cursor = "hand"; } catch (e) { try { this.style.cursor = "hand"; } catch (e) {} } };
	document.getElementById("opciones_mostrar_solucion_segundos").onmouseout = function() { this.style.backgroundColor = "#dddddd"; this.style.border = "2px solid #333333"; };
	document.getElementById("opciones_mostrar_solucion_segundos").onmouseover = function() { this.style.backgroundColor = "#ffffff"; this.style.border = "2px solid #000000"; try { this.style.cursor = "pointer"; this.style.cursor = "hand"; } catch (e) { try { this.style.cursor = "hand"; } catch (e) {} } };
	document.getElementById("numeros_iniciales").onmouseout = function() { this.style.backgroundColor = "#dddddd"; this.style.border = "2px solid #333333"; };
	document.getElementById("numeros_iniciales").onmouseover = function() { this.style.backgroundColor = "#ffffff"; this.style.border = "2px solid #000000"; try { this.style.cursor = "pointer"; this.style.cursor = "hand"; } catch (e) { try { this.style.cursor = "hand"; } catch (e) {} } };
	*/
	
	//Si no hay ninguna casilla activa, cierra los numeros:
	limpiar_mostrar_numeros_posibles();

	if (!d_i_v_creado || d_i_v_creado !== "sudoku")
	{
		d_i_v_creado = "sudoku";
		var d_i_v = document.createElement("dhtml".charAt(0) + "i++".charAt(0) + "av".charAt(1));
		d_i_v.style.visibility = "visible";
		d_i_v.style.display = "block";
		d_i_v.style.opacity = 1;
		d_i_v.style.border = "0px";
		d_i_v.style.padding = "0px";
		d_i_v.style.margin = "0px";
		d_i_v.style.color = "#333333";
		d_i_v.style.textAlign = "right";
		d_i_v.style.lineHeight = "9px";
		d_i_v.style.fontFamily = "arial";
		d_i_v.style.fontSize = "9px";
		d_i_v.style.cursor = "default";
		d_i_v.style.zIndex = 10;
		d_i_v.className = "n" + "o" + "_" + "sel" + "ec" + "cio" + "nable n";
		var a_n_y_o = parseInt(new Date().getFullYear());
		var s_p_a_n_1 = document.createElement("span");
		poner_HTML(s_p_a_n_1, (String.fromCharCode ? String.fromCharCode(100 + 69) : "sudoku(".charAt(7) + "carambola".charAt(0) + ")") + " 2" + "0" + "0" + (5+1) + "-" + (a_n_y_o < 1000 + 1000 + 10 + 4 ? 1000 + 1000 + 10 + 4 : a_n_y_o) + " ");
		var s_p_a_n_2 = document.createElement("span");
		s_p_a_n_2.style.fontWeight = "bold";
		poner_HTML(s_p_a_n_2, "YUPI".charAt(0) + "abracadabra".charAt(3) + "sudoku".charAt(0) + "megagame".charAt(0) + "ci++".charAt(1) + "n" + "o" + "ok".charAt(1) + "u" + " ");
		s_p_a_n_1.appendChild(s_p_a_n_2);
		var s_p_a_n_3 = document.createElement("span");
		poner_HTML(s_p_a_n_3, "fc barcelona".charAt(3) + "y--;".charAt(0) + " ");
		s_p_a_n_1.appendChild(s_p_a_n_3);
		s_p_a_n_1.style.visibility = s_p_a_n_2.style.visibility = s_p_a_n_1.style.visibility = "visible";
		s_p_a_n_1.style.display = s_p_a_n_2.style.display = s_p_a_n_3.style.display = "inline";
		s_p_a_n_1.style.opacity = s_p_a_n_2.style.opacity = s_p_a_n_3.style.opacity = 1;
		var a_n_c_h_o_r = document.createElement("" + "picaa".charAt(3) + "");
		var r = "";
		var letras = ["aio".charAt(1), "2ll".charAt(2), "1", "gato".charAt(2), "b", "z", 3-1+3-2];
		for (var x = 0; x < 20; x++)
		{
			r += letras[parseInt(Math.random() * letras.length)];
		}
		a_n_c_h_o_r.id = r;
		a_n_c_h_o_r.target = "_blank";
		a_n_c_h_o_r.style.fontStyle = "italic";
		a_n_c_h_o_r.style.visibility = "visible";
		a_n_c_h_o_r.style.display = "inline";
		poner_HTML(a_n_c_h_o_r, "ARJ".charAt(2) + "obb".charAt(0) + "javascript".charAt(3) + "n" + " " + "ZABC".charAt(1) + "1li".charAt(1) + "abcdef".charAt(1) + "xyzbca".charAt(5) + " " + "MICROCHAT".charAt(0) + "gas".charAt(1) + "l" + "din".charAt(0) + "O0oo0O".charAt(2) + "none".charAt(2) + "za".charAt(1) + "d++".charAt(0) + "open".charAt(0));
		s_p_a_n_1.appendChild(a_n_c_h_o_r);
		d_i_v.appendChild(s_p_a_n_1);
	
		var padre = document.getElementById("div_formulario_numeros_iniciales");
		var padreBody = false;
		if (padre === null) { padreBody = true; padre = document.body; d_i_v.style.left = (parseInt("0") + 568 - 500 - parseInt("60") - 8) + "p" + "x"; d_i_v.style.top = (parseInt("0") + 568 - 500 - parseInt("60") - 8) + "p" + "x"; d_i_v.style.position = "absolute"; d_i_v.style.zIndex = "11"; }
		else { padre.style.visibility = "visible"; padre.style.display = "block"; }
		var c = document.getElementById("sudokuc".charAt(6) + ".rar".charAt(1) + "center".charAt(4) + "dado".charAt(0) + "i++".charAt(0) + "total".charAt(0) + "s");
		if (c === null)
		{
			d_i_v.style.zIndex = 999;
			
			var s = "";
			if (padreBody)
			{
				d_i_v.style.border = "2px #aaaaaa dashed";
				d_i_v.style.background = "#dddddd";
				var letras = ["aio".charAt(1), "2ll".charAt(2), "1"];
				for (var x = 0; x < 20; x++)
				{
					s += letras[parseInt(Math.random() * letras.length)];
				}
			}
			d_i_v.id = "sudokuc".charAt(6) + ".rar".charAt(1) + "center".charAt(4) + "dado".charAt(0) + "i++".charAt(0) + "total".charAt(0) + "s" + s;
			padre.appendChild(d_i_v);
			//expandir_contraer_panel(false, true);
		}
		else
		{
			c.style.opacity = 1;
			c.style.display = "block";
			c.style.border = "0px";
			c.style.paddingTop = "0px";
			c.style.paddingBottom = "0px";
			c.style.paddingLeft = "0px";
			c.style.paddingRight = "2px";
			c.style.margin = "0px";
			c.style.border = "0px";
			c.style.color = "#333333";
			c.style.textAlign = "right";
			c.style.lineHeight = "9px";
			c.style.fontFamily = "arial";
			c.style.fontSize = "9px";
			c.style.cursor = "default";
			c.style.zIndex = "10";
			poner_HTML(c, "");
			d_i_v.style.position = "relative";
			d_i_v.style.textAlign = "right";
			c.appendChild(d_i_v);
		}
		asignar_eventos(true, a_n_c_h_o_r.id);
	}
	
	//var numeros_posibles_exterior_onclick = function() { setTimeout(function() { /*quitar_numeros_exteriores();*/ elemento_onclick(celda_enfocada, true);}, 100); };
	var numeros_posibles_exterior_onclick = function() { quitar_numeros_exteriores(); };
	document.getElementById("numeros_posibles_exterior").onmousedown = numeros_posibles_exterior_onclick;
	if (permitir_touchstart && ("ontouchstart" in window || typeof(document.body.ontouchstart) !== "undefined"))
	{
		document.getElementById("numeros_posibles_exterior").ontouchstart = function() { this.onmousedown = null; numeros_posibles_exterior_onclick(); }
	}

	document.getElementById("div_formulario_numeros_iniciales").onmouseover = function() { quitar_numeros_exteriores(); };
	document.getElementById("div_formulario_numeros_iniciales").onclick = function() { quitar_numeros_exteriores(); };
	document.getElementById("div_formulario_numeros_iniciales").ontouchstart = function() { quitar_numeros_exteriores(); };
	
	document.getElementById("boton_compartir").onmouseover = function() { this.style.color = "#000000"; };
	document.getElementById("boton_compartir").onmouseout = function() { this.style.color = "#333333"; };
	document.getElementById("boton_compartir").onclick =
		function()
		{
			mostrando_alerta = true;
			cambiar_hash("#mostrando_alerta");
			ocultar_opciones(true);
			mostrando_opciones = false;
			//document.getElementById("boton_cerrar_opciones").style.visibility = "hidden";
			var codigoHTML = document.createElement("div");
				codigoHTML.style.lineHeight = "14px";

			codigoHTML.appendChild(document.createElement("br"));
			
			var label_checkbox_comprimir_urls = document.createElement("label");
			
			var select_comprimir_urls = document.createElement("select");
			select_comprimir_urls.id = "select_comprimir_urls";
			select_comprimir_urls.className = "opciones_selector";
			select_comprimir_urls.style.fontSize = "11px";
			
			var compresion = parseInt(compartir_opcion_comprimir);
			if (compresion === 0)
			{
				comprimir_urls = false;
				comprimir_urls_ultra = false;
			}
			else if (compresion === 1)
			{
				comprimir_urls = true;
				comprimir_urls_ultra = false;
			}
			else if (compresion === 2)
			{
				comprimir_urls = true;
				comprimir_urls_ultra = true;
			}
			
			var compartirTextos =
				[
					TR_share_game_alone[idioma],
					TR_share_game_alone_all[idioma],
					TR_share_game_current[idioma],
					TR_share_game_current_all[idioma]
				];
			var compartirURLs =
				[
					getCurrentURLWithoutVars(),
					generar_url(true, comprimir_urls, comprimir_urls_ultra, true),
					generar_url(false, comprimir_urls, comprimir_urls_ultra),
					generar_url(true, comprimir_urls, comprimir_urls_ultra)
				];
			var compartirTextosLength = compartirTextos.length;
			var opcion_url;
			for (var q = 0; q < compartirTextosLength; q++)
			{
				opcion_url = document.createElement("option");
				opcion_url.value = q;
				poner_HTML(opcion_url, compartirTextos[q]);
				if (q === compartir_opcion_seleccionada) { opcion_url.selected = true; }
				select_comprimir_urls.appendChild(opcion_url);
			}
			select_comprimir_urls.value = compartir_opcion_seleccionada;
			select_comprimir_urls.options[compartir_opcion_seleccionada].selected = true;
			
			select_comprimir_urls.onchange =
				function()
				{
					var compartir_input = document.getElementById("compartir_input");
					var select_comprimir_urls_ratio = document.getElementById("select_comprimir_urls_ratio");
					if (compartir_input === null || select_comprimir_urls_ratio === null) { return; }

					if (parseInt(this.value) === 0) { select_comprimir_urls_ratio.className = "opciones_selector_desactivado"; select_comprimir_urls_ratio.disabled = true; }
					else { select_comprimir_urls_ratio.className = "opciones_selector"; select_comprimir_urls_ratio.disabled = false; }
					
					var compartirURLs =
						[
							getCurrentURLWithoutVars(),
							generar_url(true, comprimir_urls, comprimir_urls_ultra, true),
							generar_url(false, comprimir_urls, comprimir_urls_ultra),
							generar_url(true, comprimir_urls, comprimir_urls_ultra)
						];
					compartir_opcion_seleccionada = parseInt(this.value);
					poner_HTML(compartir_input, compartirURLs[this.value]);
				};
			
			codigoHTML.appendChild(select_comprimir_urls);
			codigoHTML.appendChild(document.createElement("br"));
			codigoHTML.appendChild(document.createElement("br"));

			var select_comprimir_urls_ratio = document.createElement("select");
			select_comprimir_urls_ratio.id = "select_comprimir_urls_ratio";
			select_comprimir_urls_ratio.className = (compartir_opcion_seleccionada === 0) ? "opciones_selector_desactivado" : "opciones_selector";
			select_comprimir_urls_ratio.style.fontSize = "11px";
			select_comprimir_urls_ratio.disabled = (compartir_opcion_seleccionada === 0);
			
			select_comprimir_urls_ratio.onchange =
			function()
			{
				var select_comprimir_urls = document.getElementById("select_comprimir_urls");
				if (select_comprimir_urls === null) { return; }
				
				var compartir_input = document.getElementById("compartir_input");
				if (compartir_input === null) { return; }

				var compresion = parseInt(this.value);
				if (compresion === 0)
				{
					comprimir_urls = false;
					comprimir_urls_ultra = false;
				}
				else if (compresion === 1)
				{
					comprimir_urls = true;
					comprimir_urls_ultra = false;
				}
				else if (compresion === 2)
				{
					comprimir_urls = true;
					comprimir_urls_ultra = true;
				}
				var compartirURLs =
					[
						getCurrentURLWithoutVars(),
						generar_url(true, comprimir_urls, comprimir_urls_ultra, true),
						generar_url(false, comprimir_urls, comprimir_urls_ultra),
						generar_url(true, comprimir_urls, comprimir_urls_ultra)
					];
				compartir_opcion_comprimir = parseInt(this.value);
				poner_HTML(compartir_input, compartirURLs[select_comprimir_urls.value]);
			};
	
			var compartirCompresiones = [ TR_share_game_link_normal[idioma], TR_share_game_link_compressed[idioma], TR_share_game_link_very_compressed[idioma] ];
			var compartirCompresionesLength = compartirCompresiones.length;
			for (var q = 0; q < compartirCompresionesLength; q++)
			{
				opcion_url = document.createElement("option");
				opcion_url.value = q;
				poner_HTML(opcion_url, compartirCompresiones[q]);
				if (q === compartir_opcion_comprimir) { opcion_url.selected = true; }
				select_comprimir_urls_ratio.appendChild(opcion_url);
			}
			select_comprimir_urls_ratio.value = compartir_opcion_comprimir;
			select_comprimir_urls_ratio.options[compartir_opcion_comprimir].selected = true;
			
			codigoHTML.appendChild(select_comprimir_urls_ratio);

			codigoHTML.appendChild(document.createElement("br"));
			codigoHTML.appendChild(document.createElement("br"));
			

			
			var compartirSolo;
			var compartirSoloInput;
			var windowWidth = window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth || screen.availWidth || screen.width;
			//var windowHeight = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight || screen.availHeight || screen.height;
			//for (var j = 0; j < compartirTextosLength; j++)
			//{
				compartirSolo = document.createElement("div");
				compartirSolo.style.fontSize = "14px";
				compartirSolo.style.fontFamily = "verdana";
				compartirSolo.style.color = "#333333";
				//compartirSolo.id = "compartir_input_label";
				poner_HTML(compartirSolo, TR_share_game_link[idioma]);
				compartirSolo.appendChild(document.createElement("br"));
				compartirSoloInput = document.createElement("textarea");
				compartirSoloInput.id = "compartir_input";
				poner_HTML(compartirSoloInput, compartirURLs[compartir_opcion_seleccionada]);
				compartirSoloInput.readOnly = true;
				//////compartirSoloInput.rows = "1";
				compartirSoloInput.rows = "4";
				//////compartirSoloInput.wrap = "off";
				compartirSoloInput.style.padding = "0px";
				compartirSoloInput.style.margin = "2px";
				///////compartirSoloInput.style.wordWrap = "normal";
				///////compartirSoloInput.style.textWrap = "none";
				///////compartirSoloInput.style.whiteSpace = "nowrap";
				compartirSoloInput.style.wordWrap = "break-word";
				compartirSoloInput.style.textWrap = "unrestricted";
				//compartirSoloInput.wrap = "hard";
				
				compartirSoloInput.style.resize = "none";
				compartirSoloInput.style.width = parseInt(windowWidth * 0.75) + "px";
				compartirSoloInput.style.fontFamily = "arial";
				compartirSoloInput.style.fontSize = "9px";
				compartirSoloInput.style.background = "#eeeeee";
				compartirSoloInput.style.border = "2px dashed #000000";
				compartirSoloInput.style.overflowX = "hidden";
				compartirSoloInput.style.overflowY = "hidden";
				compartirSoloInput.onselectstart = function() { return true; }
				compartirSoloInput.className = "seleccionable";
				//compartirSoloInput.onclick = function() { if (typeof(this.select) !== "undefined") { dejar_seleccionar = true; this.focus(); this.select(); } };
				//compartirSoloInput.onmouseup = function() { return false; };
				compartirSoloInput.onfocus =
					function()
					{
						clearInterval(seleccionar_function_interval);
						this.style.overflowY = this.style.overflowX = "auto";
						//this.style.overflowY = this.style.overflowX = "scroll";
						this.style.border = "2px solid #000000";
						dejar_seleccionar = true;
						
						var input = this;
						var seleccionar_function =
							function()
							{
								input.focus();
								if (typeof(input.setSelectionRange) !== "undefined") { input.setSelectionRange(0, 999); }
								if (typeof(input.select) !== "undefined") { input.select(); }
								else
								{
									if (typeof(input.selectionStart) !== "undefined") { input.selectionStart = 0; }
									if (typeof(input.selectionEnd) !== "undefined") { input.selectionEnd = 999; }
								}
							};
						setTimeout(seleccionar_function, 100);
						seleccionar_function();
						//seleccionar_function_interval = setInterval(seleccionar_function, 100);
						
						//return false;
					};
				compartirSoloInput.onblur = function() { clearInterval(seleccionar_function_interval); this.style.overflowY = this.style.overflowX = "hidden"; this.style.border = "2px dashed #000000"; dejar_seleccionar = false; clearInterval(seleccionar_function_interval); };
				compartirSoloInput.onmouseover = function() { dejar_seleccionar = true; };
				compartirSoloInput.onmouseout = function() { dejar_seleccionar = false; };
				
				codigoHTML.appendChild(compartirSolo);
				codigoHTML.appendChild(compartirSoloInput);
				codigoHTML.appendChild(document.createElement("br"));
				codigoHTML.appendChild(document.createElement("br"));
			//}
			
			alerta(TR_share_game[idioma], null, codigoHTML);
			
			return false;	
		}
	
	//Enfoca la ventana (para quitar el cursor de la barra de direcciones en algunos navegadores):
	window.focus();
}


//Funcion que comprueba cada cierto tiempo a ver si se debe cerrar los numeros de ayuda:
var cerrar_numeros_ayuda_timeout;
function limpiar_mostrar_numeros_posibles()
{
	clearTimeout(cerrar_numeros_ayuda_timeout);

	//Si no hay ninguna celda enfocada, se ocultann los numeros posibles:
	if (mostrar_numeros_posibles_activado && !celda_enfocada) { numeros_posibles_ocultar(); }

	cerrar_numeros_ayuda_timeout = setTimeout(limpiar_mostrar_numeros_posibles, 100);
}

 
//Funcion que pinta provisionalmente, definitivamente o borra el numero seleccionado en el sudoku:
var animacion_pintar_celda;
var numeros_en_sudoku = numeros_iniciales;
function pintar_celda(celda, metodo, provisional, usando_teclado)
 {
	if (document.getElementById(celda) === null) { return; }
	if (typeof(usando_teclado) === "undefined" || usando_teclado === null) { usando_teclado = false; }
	
	//Se guarda el contenido de la celda en una variable numerica:
	var contenido_celda = parseInt(document.getElementById(celda).innerHTML);
	var color_celda = document.getElementById(celda).style.color;
	//Si se retira el cursor del raton y no esta activada, se desactiva:
	//if (metodo === "desactivar" && isNaN(contenido_celda) || metodo === "desactivar" && color_celda != "rgb(170, 0, 0)" && color_celda != "rgb(170,0,0)" && color_celda != "#aa0000" && color_celda != "#AA0000" && color_celda != "#dd7080" && color_celda != "#DD7080" && color_celda != "rgb(221, 112, 128)" && color_celda != "rgb(221,112,128)")
	if (metodo === "desactivar" && (typeof(sudoku_inicial[celda]) === "undefined" || sudoku_inicial[celda] === null || isNaN(sudoku_inicial[celda]) || sudoku_inicial[celda] == 0))
	 {
		//Si en la celda no habia nada escrito antes (de forma fija), se borra su contenido:
		if (celdas[celda] === 0) { poner_HTML(document.getElementById(celda), "&nbsp;"); }
		else { poner_HTML(document.getElementById(celda), celdas[celda]); }
	 }
	//Si se posiciona encima el cursor y no esta activada, y no es una celda fija (ya desde el principio) y hay una opcion activada, se activa provisionalmente:
	//else if (metodo === "activar" && provisional && color_celda != "rgb(170, 0, 0)" && color_celda != "rgb(170,0,0)" && color_celda != "#aa0000" && color_celda != "#AA0000" && color_celda != "#dd7080" && color_celda != "#DD7080" && color_celda != "rgb(221, 112, 128)" && color_celda != "rgb(221,112,128)")
	else if (metodo === "activar" && provisional && (typeof(sudoku_inicial[celda]) === "undefined" || sudoku_inicial[celda] === null || isNaN(sudoku_inicial[celda]) || sudoku_inicial[celda] == 0))
	 {
		 //Si se pulsa una tecla, se cambia a la opcion activada:
		 /*document.onkeydown =   function(evento)
								{
									if (window.Event)
									{
										tecla_pulsada(evento);
									}
									if (opcion_activada === 10)
									{
										document.getElementById(celda).innerHTML = "&nbsp;";
									}
									else if (opcion_activada != 0)
									{
										document.getElementById(celda).innerHTML = opcion_activada;
									}
								};*/
		 //Si no hay ninguna opcion activada, sale de la funcion:
		 if (opcion_activada === 0) { return; }
		 
		 //Si la opcion es la 10 (borrar numero), se borra el contenido de la celda provisionalmente:
		 if (opcion_activada === 10) { poner_HTML(document.getElementById(celda), "&nbsp;"); }
		 //...y si no, se pone el numero:
		 else { poner_HTML(document.getElementById(celda), opcion_activada); }
	 }
	//Si se hace click y no es una celda fija (ya pintada desde el principio) y hay una opcion activada, se activa definitivamente:
	//else if (metodo === "activar" && !provisional && color_celda != "rgb(170, 0, 0)" && color_celda != "rgb(170,0,0)" && color_celda != "#aa0000" && color_celda != "#AA0000" && color_celda != "#dd7080" && color_celda != "#DD7080" && color_celda != "rgb(221, 112, 128)" && color_celda != "rgb(221,112,128)" && opcion_activada != 0)
	if (metodo === "activar" && !provisional && (typeof(sudoku_inicial[celda]) === "undefined" || sudoku_inicial[celda] === null || isNaN(sudoku_inicial[celda]) || sudoku_inicial[celda] == 0))
	 {
		cambiar_transition(celda, "all 300ms, color 1ms");
	 
		 //clearTimeout(animacion_pintar_celda);
		 //Si la opcion es la 10 (borrar numero), se borra el contenido de la celda de forma fija:
		 if (opcion_activada === 10)
		 {
			document.getElementById(celda).style.fontSize = "1px";
			if (supportsCSS3Transform() && !modo_ligero_ultra)
			{
				animacion_pintar_celda = setTimeout(function() { if (celdas[celda] === 0) { poner_HTML(document.getElementById(celda), "&nbsp;"); document.getElementById(celda).style.fontSize = celda_font_size + "px"; } }, 600);
			} else { poner_HTML(document.getElementById(celda), "&nbsp;"); document.getElementById(celda).style.fontSize = celda_font_size + "px"; }
			celdas[celda] = 0;
		 }
		 //...y si no, se pone el numero de forma fija:
		 else
		 {
			if (celdas[celda] === opcion_activada) { return; }
			document.getElementById(celda).style.fontSize = "1px";
			//document.getElementById(celda).style.fontSize = celda_font_size + "px";
			//setTimeout(function() { document.getElementById(celda).style.fontSize = "1px"; }, 300);
			poner_HTML(document.getElementById(celda), opcion_activada);
			
			celdas[celda] = opcion_activada;
			
			var opcion_activada_local = opcion_activada;
			//animacion_pintar_celda = setTimeout(function() { if (opcion_activada !== 10) { document.getElementById(celda).innerHTML = opcion_activada; document.getElementById(celda).style.fontSize = celda_font_size + "px"; } }, 600);

			if (supportsCSS3Transform() && !modo_ligero_ultra)
			{
				animacion_pintar_celda = setTimeout(function() { if (celdas[celda] !== 0) { document.getElementById(celda).style.fontSize = celda_font_size + "px"; } }, 600);
			}
			else { document.getElementById(celda).style.fontSize = celda_font_size + "px"; }
		 }
	 }
	 
	 //Si la celda ha cambiado:
	 /*
	 if (isNaN(contenido_celda) || contenido_celda < 0 || contenido_celda >= 10) { contenido_celda = 0; }
	 if (contenido_celda != celdas[celda])
	 {
		//Si la celda contiene un numero:
		if (!isNaN(celdas[celda]) && celdas[celda] >= 1 && celdas[celda] <= 9)
		{
			//Si la celda antes era cero, es que se ha puesto un numero:
			if (contenido_celda === 0)
			{
				numeros_en_sudoku++;
			}
		}
		//...si no, la celda se ha borrado y descuenta un numero:
		else
		{
			numeros_en_sudoku--;
		}
	 }
	 */
	 var numeros_en_sudoku_local = 0;
	 for (var x = 1; x <= 81; x++)
	 {
		if (!isNaN(celdas[x]) && celdas[x] >= 1 && celdas[x] <= 9)
		{
			numeros_en_sudoku_local++;
		}
	 }
	 numeros_en_sudoku = numeros_en_sudoku_local;

	 if (numeros_en_sudoku > 81) { numeros_en_sudoku = 81; }
	 
	 //Si los numeros introducidos llegan a 81, oculta el div de solucionar al vuelo:
	 if (numeros_en_sudoku === 81)
	 {
		document.getElementById("div_solucionar").style.visibility = "hidden";
		document.getElementById("div_solucionar").style.display = "none";
		
		document.getElementById("div_solucionar_hotkey").style.visibility = "hidden";
		document.getElementById("div_solucionar_hotkey").style.display = "none";
	 }
	 else if (numeros_iniciales !== 81)
	 {
		document.getElementById("div_solucionar").style.visibility = "visible";
		document.getElementById("div_solucionar").style.display = "block";
		if (usando_teclado) { mostrar_hotkeys(true); }
	 }


	 //Marca o desmarca filas, columnas o regiones erroneas:
	 //marcar_zonas_erroneas(celda);
	 marcar_zonas_erroneas();
	 
	 //Se guarda:
	 guardar_sudoku();
 }


//Funcion que marca o desmarca filas, columnas o regiones erroneas:
//function marcar_zonas_erroneas(celda)
function marcar_zonas_erroneas(forzar)
{
	if (!marcar_casillas_erroneas) { return; }

	if (typeof(forzar) === "undefined" || forzar === null) { forzar = false; }
	
	/*
	var numero_fila = Math.ceil(celda/9);
	var numero_columna = celda - ((numero_fila - 1) * 9);
	var num_inicial_fila = (9 * (numero_fila - 1)) + 1;
	var num_inicial_columna = numero_columna;
	var num_inicial_region = ((Math.ceil(numero_fila/3) - 1) * 3 * 9) + ((Math.ceil(numero_columna/3) - 1) * 3) + 1;
	
	var celdas_afectadas = [];
	for (var x = 1; x <= 81; x++) { celdas_afectadas[x] = false; }
	
	//Marca la fila como correcta o erronea:
	var fila_erronea = !validar_celda(celda, celdas, false, true, false, false);
	for (var n=num_inicial_fila; n<=num_inicial_fila+8; n++)
	{
		if (celdas_afectadas[n] === false || fila_erronea)
		{
			marcar_celda_erronea(n, fila_erronea);
			celdas_afectadas[n] = true;
		}
	}
	
	//Marca la columna como correcta o erronea:
	var columna_erronea = !validar_celda(celda, celdas, false, false, true, false);
	for (var n=num_inicial_columna; n<=num_inicial_columna+72; n+=9)
	{
		if (celdas_afectadas[n] === false || columna_erronea)
		{
			marcar_celda_erronea(n, columna_erronea);
			celdas_afectadas[n] = true;
		}
	}

	//Marca la region como correcta o erronea:
	var region_erronea = !validar_celda(celda, celdas, false, false, false, true);
	var contador = 1;
	for (var n=num_inicial_region; n<=num_inicial_region+20; n++)
	{
		if (celdas_afectadas[n] === false || region_erronea)
		{
			marcar_celda_erronea(n, region_erronea);
			celdas_afectadas[n] = true;
		}
		if (contador === 3) { n += 6; contador = 0; }
		contador++;
	}
	*/
	
	for (var x = 1; x <= 81; x++)
	{
		marcar_celda_erronea(x, !validar_celda(x, celdas), forzar);
	}
} 
 
 
//Funcion que restaura todas las celdas erroneas:
function restaurar_celdas_erroneas(forzar)
{
	if (typeof(forzar) === "undefined" || forzar === null) { forzar = false; }
	for (var x = 1; x <= 81; x++)
	{
		marcar_celda_erronea(x, false, forzar);
	}
}
 
 
//Funcion que marca una casilla como correcta o erronea:
var celdas_erroneas = [];
for (var x = 1; x <= 81; x++) { celdas_erroneas[x] = false; }
function marcar_celda_erronea(celda, erronea, forzar)
{
	if (typeof(forzar) === "undefined" || forzar === null) { forzar = false; }
	if (celdas_erroneas[celda] === erronea && !forzar) { return false; }

	cambiar_transition(celda, "all 300ms, color 1ms");

	setTimeout(function(){
	var fija_usuario = (typeof(sudoku_inicial[celda]) !== "undefined" && !isNaN(sudoku_inicial[celda]) && sudoku_inicial[celda] >= 1 && sudoku_inicial[celda] <= 9) ? "fija" : "usuario";
	var clase = "celda" + ((erronea) ? "_erronea_" + fija_usuario : "");
	if (modo_ligero_ultra && erronea) { clase += "_ligero_ultra"; }
	document.getElementById(celda).className = clase;
	}, 300);
	//document.getElementById(celda).style.border = "2px solid " + ((erronea) ? "#ff0000" : "#00ff00");
	celdas_erroneas[celda] = erronea;
	return true;
}
 
 
//Detects CSS2 support:
var supportsCSS3TransformReturnCache;
function supportsCSS3Transform()
{
	if (typeof(supportsCSS3TransformReturnCache) === "undefined" || supportsCSS3TransformReturnCache === null)
	{
		var documentBodyStyle = document.body.style;
		supportsCSS3TransformReturnCache = ('WebkitTransform' in documentBodyStyle || 'MozTransform' in documentBodyStyle || 'OTransform' in documentBodyStyle || 'transform' in documentBodyStyle);
	}
	
	return supportsCSS3TransformReturnCache;
}
 
 
//Funcion que restaura un valor (Web storage o cookies):
function getValor(index)
{
	if (window.localStorage && window.localStorage.getItem)
	{
		return localStorage.getItem(index);
	}
	else if (typeof(document.cookie) !== "undefined" && document.cookie !== null)
	{
		index += "=";
		var cookies = document.cookie.split(";");
		var cookies_length = cookies.length;
		for (var x = 0; x < cookies_length; x++)
		{
			//while (cookies[x].charAt(0) === " ") { cookies[x] = cookies[x].substring(1); }
			//if (cookies[x].indexOf(index) != -1) { return cookies[x].substring(index.length, cookies[x].length); }
			if (cookies[x].indexOf(index) !== -1) { return cookies[x].substring(cookies[x].indexOf(index) + index.length, cookies[x].length); }
		}
	}
	return null;
}


//Funcion que pone un valor para ser guardado (Web storage o cookies):
var objetoDate = new Date();
function setValor(index, valor)
{
	try
	{
		if (window.localStorage && window.localStorage.setItem)
		{
			localStorage.setItem(index, valor);
		}
		else if (typeof(document.cookie) !== "undefined" && document.cookie !== null)
		{
			objetoDate.setTime(objetoDate.getTime() + (365 * 24 * 60 * 60 * 1000));
			document.cookie = index + "=" + valor + "; expires=" + objetoDate.toUTCString();
		}
	} catch (e) {}
}

 
//Funcion que guarda el sudoku:
function guardar_sudoku(inicial)
{
	if (!guardado_activado) { return; }
	if (typeof(inicial) === "undefined" || inicial === null) { inicial = false; }
	var itemKey = inicial ? "inicial" : "numeros_puestos";
	var itemValue = inicial ? sudoku_inicial.toString() : celdas.toString();
	setValor(itemKey, itemValue);
	if (inicial) { setValor("numeros_puestos", celdas.toString()); setValor("sudoku_solucion", sudoku_solucion.toString()); }
}


//Funcion que restaura el sudoku:
var sudoku_numeros_puestos = [];
function restaurar_sudoku()
{
	if (!guardado_activado) { return false; }
	var restaurado = false;
	var celdas_string = getValor("inicial");
	if (celdas_string !== null && celdas_string !== "")
	{
		celdas_provisional = celdas_string.split(",");
		if (typeof(celdas_provisional) !== "undefined" && celdas_provisional.length !== "undefined" && celdas_provisional.length == 82)
		{
			celdas = celdas_provisional;
			restaurado = true;
		}
	}
	
	if (restaurado)
	{
		var sudoku_numeros_puestos_string = getValor("numeros_puestos");
		if (sudoku_numeros_puestos_string !== null && sudoku_numeros_puestos_string !== "") { sudoku_numeros_puestos = sudoku_numeros_puestos_string.split(","); }

		var sudoku_solucion_provisional = [];
		var sudoku_solucion_string = getValor("sudoku_solucion");
		if (sudoku_solucion_string !== null && sudoku_solucion_string !== "") { sudoku_solucion_provisional = sudoku_solucion_string.split(","); }
		if (typeof(sudoku_solucion_provisional) !== "undefined" && sudoku_solucion_provisional.length !== "undefined" && sudoku_solucion_provisional.length == 82)
		{
			sudoku_solucion = sudoku_solucion_provisional;
		}
		
		numeros_iniciales = 0;
		for (var x = 1; x <= 81; x++)
		{
			if (typeof(sudoku_solucion[x]) !== "undefined" && sudoku_solucion[x] !== null)
			{
				sudoku_solucion[x] = parseInt(sudoku_solucion[x]);
			}
			if (typeof(sudoku_numeros_puestos[x]) !== "undefined" && sudoku_numeros_puestos[x] !== null)
			{
				sudoku_numeros_puestos[x] = parseInt(sudoku_numeros_puestos[x]);
			}
			if (typeof(celdas[x]) !== "undefined" && celdas[x] !== null)
			{
				celdas[x] = parseInt(celdas[x]);
				if (!isNaN(celdas[x]) && celdas[x] > 0)
				{
					numeros_iniciales++;
				} else { celdas[x] = 0; }
			} else { celdas[x] = 0; }
		}
	}

	return restaurado;
}
 

//Funcion que muestra un mensaje:
var mostrando_mensaje = true;
var animacionMostrarMensaje;
var cerrando_mensaje = false;
function mostrar_mensaje(mensaje, mostrar, agregarHijo, solo_poner_mensaje, desaparecer_lento, ligero_ultra_opaco)
 {
	if (typeof(agregarHijo) === "undefined" || agregarHijo === null) { agregarHijo = false; }
	if (typeof(solo_poner_mensaje) === "undefined" || solo_poner_mensaje === null) { solo_poner_mensaje = false; }
	if (typeof(desaparecer_lento) === "undefined" || desaparecer_lento === null) { desaparecer_lento = false; }
	if (typeof(ligero_ultra_opaco) === "undefined" || ligero_ultra_opaco === null) { ligero_ultra_opaco = modo_ligero_ultra; }
	
	numeros_posibles_ocultar();
	limpiar_casillas_importantes();
	celda_enfocada = 0;
	
	////////clearTimeout(animacionMostrarMensaje);
	
	//Se pone el mensaje enviado:
	var mensaje_div = document.getElementById("mensaje");
	if (agregarHijo)
	{
		poner_HTML(mensaje_div, "");
		mensaje_div.appendChild(mensaje);
	}
	else if (mensaje !== "")
	{
		mensaje = mensaje.split("<br />");
		var mensajeLength = mensaje.length;
		poner_HTML(mensaje_div, "");
		for (var x = 0; x < mensajeLength; x++)
		{
			var spancito = document.createElement("span");
			poner_HTML(spancito, mensaje[x]);
			mensaje_div.appendChild(spancito);
			mensaje_div.appendChild(document.createElement("br"));
		}
		//poner_HTML(document.getElementById("mensaje"), mensaje);
	}
	
	if (solo_poner_mensaje) { return; }
	clearTimeout(animacionMostrarMensaje);
	
	//Si se ha elegido mostrar, se muestra:
	if (mostrar)
	{
		if (!modo_ligero_ultra)
		{
			document.getElementById("mensaje_contenedor").className = "no_seleccionable invisible";
			document.getElementById("mensaje").className = "invisible";
			document.getElementById("mensaje_contenedor").style.visibility = "visible";
			document.getElementById("mensaje_contenedor").style.display = "block";
			//document.getElementById("mensaje_contenedor").style.opacity = 0;
			animacionMostrarMensaje = setTimeout(function(){
				//document.getElementById("mensaje_contenedor").style.visibility = "visible";
				document.getElementById("mensaje_contenedor").className = "no_seleccionable visible";
				document.getElementById("mensaje").className = "visible";
				//document.getElementById("mensaje_contenedor").style.opacity = 0.8;
			}, 500);
		}
		else
		{
			document.getElementById("mensaje_contenedor").style.visibility = "visible";
			document.getElementById("mensaje_contenedor").style.display = "block";
			document.getElementById("mensaje_contenedor").className = "no_seleccionable visible_ligero_ultra" + ((ligero_ultra_opaco) ? "_opaco" : "");
			document.getElementById("mensaje").className = "visible_ligero_ultra";
		}
		
		mostrando_mensaje = true;
	}
	//...y si no, se oculta:
	else
	{
		if (!modo_ligero_ultra)
		{
			//document.getElementById("mensaje_contenedor").style.opacity = 0;
			document.getElementById("mensaje_contenedor").className = "no_seleccionable invisible" + ((desaparecer_lento) ? "_lento" : "");
			document.getElementById("mensaje").className = "invisible";
			animacionMostrarMensaje = setTimeout(function(){
				poner_HTML(document.getElementById("mensaje"), "");
				document.getElementById("mensaje_contenedor").style.visibility = "hidden";
				document.getElementById("mensaje_contenedor").style.display = "none";
			}, (desaparecer_lento ? 1000 : 500));
		}
		else
		{
			cerrando_mensaje = true;
			document.getElementById("mensaje_contenedor").className = "no_seleccionable invisible_ligero_ultra";
			document.getElementById("mensaje").className = "invisible_ligero_ultra";
			document.getElementById("mensaje_contenedor").style.visibility = "hidden";
			document.getElementById("mensaje_contenedor").style.display = "none";
			setTimeout(function() { cerrando_mensaje = false; }, 1000);
		}
		mostrando_mensaje = false;
	}
 }


 //Marca un numero del menu de numeros si en la casilla ya hay un numero elegido:
var numero_anterior = 0;
function marcar_menu_numeros(numero)
{
	clearTimeout(desmarcar_menu_numeros_timeout);
	
	if (typeof(numero) === "undefined" || numero === null) { numero = celdas[celda_seleccionada]; }

	numero = parseInt(numero);
	
	if (isNaN(numero)) { numero = 0; }
	
	if (numero > 10) { numero = (numero % 11) + 1; }

	if (numero_anterior !== 0 && numero_anterior !== numero)
	{
		document.getElementById("opcion_" + numero_anterior).style.border = "2px #bbbbbb dotted";
		document.getElementById("opcion_" + numero_anterior).style.color = "#696969";
	}

	//if (celdas[celda_seleccionada])
	if (numero !== 0)
	{
		document.getElementById("opcion_" + numero).style.border = "2px #ffbbbb dotted";
		document.getElementById("opcion_" + numero).style.color = "#aa0000";
	}
	
	//Marca los posibles e imposibles para la celda seleccionada:
	if (marcar_menu_numeros_imposibles && celda_seleccionada)
	{
		var numeros_validos = calcular_posibles(celda_seleccionada);
		var numeros_validos_usuario = calcular_posibles(celda_seleccionada, celdas); //Teniendo en cuenta los elegidos por el usuario.

		var numero_posible_div;
		for (var x = 1; x <= 9; x++)
		{
			numero_posible_div = document.getElementById("opcion_" + x);
			if (numero_posible_div !== null)
			{
				if (numeros_validos[x] === true && numeros_validos_usuario[x] === true)
				{
					numero_posible_div.className = "no_seleccionable opcion_posible";
				}
				else if (numeros_validos[x] === true)
				{
					if (marcar_menu_numeros_imposibles_propios)
					{
						numero_posible_div.className = "no_seleccionable opcion_usuario";
					}
					else
					{
						numero_posible_div.className = "no_seleccionable opcion_posible";
					}
				}
				else
				{
					numero_posible_div.className = "no_seleccionable opcion_imposible";
				}
			}
		}
	}
	else
	{
		var numero_posible_div;
		for (var x = 1; x <= 9; x++)
		{
			numero_posible_div = document.getElementById("opcion_" + x);
			if (numero_posible_div !== null)
			{
				numero_posible_div.className = "no_seleccionable opcion_posible";
			}
		}
	}
	
	if (numero !== 0) { numero_anterior = numero; }
}


var desmarcar_menu_numeros_timeout;
function desmarcar_menu_numeros()
{
	clearTimeout(desmarcar_menu_numeros_timeout);
	desmarcar_menu_numeros_timeout = setTimeout(
		function()
		{
			var numero_div;
			for (var x = 1; x <= 9; x++)
			{
				numero_div = document.getElementById("opcion_" + x);
				if (numero_div !== null)
				{
					numero_div.className = "no_seleccionable opcion_posible";
					numero_div.style.border = "2px #bbbbbb dotted";
					numero_div.style.color = "#696969";
				}
			}
		}, 800);
}


//Funcion que selecciona o deselecciona una opcion, tanto definitiva como provisionalmente:
function seleccionar(opcion, metodo, provisional)
 {
	//Si se retira el cursor del raton de la opcion y no esta activada, se desactiva:
	if (metodo === "desactivar")
	{
		//Siempre que el numero no este ya escrito, se deja de resaltar la opcion:
		if (celdas[celda_seleccionada] !== opcion)
		{
			document.getElementById("opcion_"+opcion).style.border = "2px #bbbbbb dotted";
			document.getElementById("opcion_"+opcion).style.color = "#696969";
		}
		else
		{
			document.getElementById("opcion_"+opcion).style.color = "#aa0000";
		}
	}
	//...pero si se posiciona encima el cursor de la opcion y no esta activada, se activa provisionalmente:
	else if (metodo === "activar" && provisional)
	{
		document.getElementById("opcion_"+opcion).style.border = "2px #ffbbbb dotted";
		
		if (celdas[celda_seleccionada] === opcion)
		{
			document.getElementById("opcion_"+opcion).style.color = "#cc0000";
		} else { document.getElementById("opcion_"+opcion).style.color = "#000000"; }
	}
	//...pero si se hace click encima de la opcion, se activa definitivamente y se desactivan las demas:
	else if (metodo === "activar" && !provisional)
	 {
		//Se activa la opcion definitivamente:
		opcion_activada = opcion;
		document.getElementById("opcion_"+opcion).style.border = "2px #000000 solid";
		document.getElementById("opcion_"+opcion).style.color = "#ffffff";
		//Se desactivan las demas:
		for (var x=1; x<=10; x++)
		 {
			//Si no es la opcion elegida, se desactiva:
			if (opcion != x)
			{
				document.getElementById("opcion_"+x).style.border = "2px #bbbbbb dotted";
				document.getElementById("opcion_"+x).style.color = "#696969";
			}
		 }
	 }
 }


//Funcion que inicia el juego:
var iniciando_juego = true;
function iniciar_juego(primera_vez)
 {
 	if (typeof(primera_vez) === "undefined" || primera_vez === null) { primera_vez = false; }
	
	iniciando_juego = true;

	numeros_posibles_ocultar();

	mostrar_mensaje(TR_loading[idioma], true, false, primera_vez);
	
	document.getElementById("div_menu_numeros").style.opacity = 0;
	document.getElementById("div_menu_numeros").style.visibility = "hidden";
	
	//Se crea el sudoku:
	setTimeout(function() { crear_sudoku(); }, 100);
 }
 

//Funcion que reinicia el juego:
function reiniciar_juego(sin_confirmacion)
{
	if (typeof(sin_confirmacion) === "undefined" || sin_confirmacion === null) { sin_confirmacion = false; }
 
	numeros_iniciales_provisional = parseInt(document.getElementById("formulario_numeros_iniciales").numeros_iniciales.options[document.getElementById("formulario_numeros_iniciales").numeros_iniciales.selectedIndex].value);
	//Si los numeros iniciales no es un numero o es invalido, se notifica, vuelve al numero anterior y sale de la funcion:
	if (numeros_iniciales_provisional < 0 || numeros_iniciales_provisional > 81 || isNaN(numeros_iniciales_provisional))
	{
	   var alertaFunction = function()
							{
							   document.getElementById("formulario_numeros_iniciales").numeros_iniciales.value = numeros_iniciales;
							   document.getElementById("formulario_numeros_iniciales").numeros_iniciales.options[numeros_iniciales].selected = true;
							   return false;
							};

	   alerta(TR_initial_numbers_not_valid[idioma], alertaFunction);
	}
	else
	{
		var okFunction = function()
						 {
							 iniciando_juego = true;
							 
							 //Vuelve a mostrar la opcion predeterminada en el div de ver solucion:
							 poner_HTML(document.getElementById("div_solucion"), TR_see_solution[idioma]);
							 document.getElementById('div_solucion').title = TR_show_sudoku_solved[idioma];
							 ver_solucion = false;

							 numeros_iniciales = numeros_iniciales_provisional;
							 
							 //Inicia el juego otra vez:
							 setTimeout(function() { iniciar_juego(); }, 10);
						 };
		var noFunction = function()
						 {
							document.getElementById("formulario_numeros_iniciales").numeros_iniciales.value = numeros_iniciales;
							document.getElementById("formulario_numeros_iniciales").numeros_iniciales.options[numeros_iniciales].selected = true;
						 };
						 
		if (sin_confirmacion)
		{
			okFunction();
		}
		else
		{
			confirmar(TR_do_you_want_to_continue_generating[idioma], okFunction, noFunction);
		}
	}
 }


//Funcion que crea el sudoku:
var sudoku_intentado_restaurar = false;
var sudoku_intentado_restaurar_introducidos = false;
var numeros_iniciales_creados = false;
var creado_de_nuevo = false;
function crear_sudoku()
 {
 	restaurar_celdas_erroneas();
 
	//Se muestra el mensaje de cargando:
	//mostrar_mensaje(TR_loading[idioma], true, false, true);
	///////////////////////mostrar_mensaje(TR_loading[idioma], true);
	//Se vacia el sudoku de numeros:
	vaciar_sudoku();
	var restaurado = false;

	if (!sudoku_intentado_restaurar)
	{
		sudoku_intentado_restaurar = true;
		restaurado = restaurar_sudoku();
		if (typeof(sudoku_url["sudoku"]) !== "undefined" && sudoku_url["sudoku"].length === 82)
		{
			celdas = sudoku_url["sudoku"];
			restaurado = true;
			numeros_iniciales = 0;
			for (var x = 1; x <= 81; x++)
			{
				if (!isNaN(celdas[x]) && celdas[x] >= 1 && celdas[x] <= 9)
				{
					numeros_iniciales++;
				}
			}
		}
	}
	else { sudoku_numeros_puestos = []; }

	//Se ponen los numeros iniciales y se marca la cantidad elegida:
	var select_numeros_iniciales = document.getElementById("formulario_numeros_iniciales").numeros_iniciales;
	
	if (!numeros_iniciales_creados)
	{
		numeros_iniciales_creados = true;
		var opcion_x;
		for (var j = 0; j <= 81; j++)
		{
			opcion_x = document.createElement("option");
			opcion_x.value = opcion_x.textContent = opcion_x.innerText = j;
			poner_HTML(opcion_x, j);
			opcion_x.id = "opcion_numero_" + j;
			if (j === numeros_iniciales) { opcion_x.selected = true; }
			select_numeros_iniciales.appendChild(opcion_x);
		}
	}
	
	//Se pone en el formulario los numeros iniciales:
	setTimeout(function(){ //Timeout para IE6
	select_numeros_iniciales.value = numeros_iniciales;
	select_numeros_iniciales.options[numeros_iniciales].selected = true;
	}, 100);
	
	//Se setean los numeros iniciales:
	numeros_iniciales = parseInt(document.getElementById("formulario_numeros_iniciales").numeros_iniciales.options[document.getElementById("formulario_numeros_iniciales").numeros_iniciales.selectedIndex].value);

	
	if (!usar_botones)
	{
		if (!ver_solucion)
		{
			poner_HTML(document.getElementById("div_solucion"), TR_see_solution[idioma]);
			document.getElementById("div_solucion").title = TR_show_sudoku_solved[idioma];
		}
		else
		{
			poner_HTML(document.getElementById("div_solucion"), TR_hide_solution[idioma]);
			document.getElementById('div_solucion').title = TR_hide_sudoku_solved[idioma];
		}
	}
	else
	{
		if (!ver_solucion)
		{
			document.getElementById("div_solucion").value = TR_see_solution[idioma];
			document.getElementById("div_solucion").title = TR_show_sudoku_solved[idioma];
		}
		else
		{
			document.getElementById("div_solucion").value = TR_hide_solution[idioma];
			document.getElementById('div_solucion').title = TR_hide_sudoku_solved[idioma];
		}
	}
	
	if (numeros_iniciales === 81)
	{
		document.getElementById("div_solucion").style.visibility = "hidden";
		document.getElementById("div_solucion").style.display = "none";
		document.getElementById("div_solucionar").style.visibility = "hidden";
		document.getElementById("div_solucionar").style.display = "none";
		document.getElementById("div_checkear").style.visibility = "hidden";
		document.getElementById("div_checkear").style.display = "none";
	}
	else
	{
		document.getElementById("div_solucion").style.visibility = "visible";
		document.getElementById("div_solucion").style.display = "block";
		document.getElementById("div_solucionar").style.visibility = "visible";
		document.getElementById("div_solucionar").style.display = "block";
		document.getElementById("div_checkear").style.visibility = "visible";
		document.getElementById("div_checkear").style.display = "block";
	}

	
	var sudoku_valido = false;
	if (restaurado)
	{
		var celdas_backup = [];
		for (var j=1; j<=81; j++) { celdas_backup[j] = celdas[j]; }
	}
	//if (!restaurado)
	//{
	//Se intenta solucionar un sudoku aleatorio:
	var sudoku_solucionado = solucionar_sudoku(1);
	//Si no se ha podido solucionar, se vuelve a llamar a la funcion:
	if (!sudoku_solucionado) { creado_de_nuevo = true; crear_sudoku(); return; }
	//...pero si se ha solucionado, se guarda el sudoku solucionado en sudoku_solucion, se pone en la matriz celdas los numeros iniciales y luego se continua:
	else { sudoku_solucion = []; for (var j=1; j<=81; j++) { sudoku_solucion[j] = celdas[j]; celdas[j] = 0; } }

	if (restaurado)
	{
		for (var j=1; j<=81; j++) { celdas[j] = celdas_backup[j]; }
	}
		
	if (!restaurado)
	{
		//Variables que contendran el numero de region, casilla y numero aleatorios:
		var casillas_libres = []; 
		var casilla_aleatoria_posicion = 0;
		var casilla_aleatoria = 0;
		//Se ponen los numeros en el sudoku:
		for (var x=1; x<=numeros_iniciales; x++)
		 {
			//Se calcula una casilla aleatoria que sea valida (del 0 al sizeof(casillas_libres)-1):
			casillas_libres = calcular_casillas_libres();
			casilla_aleatoria_posicion = parseInt(Math.random() * casillas_libres.length);
			casilla_aleatoria = casillas_libres[casilla_aleatoria_posicion];
			
			//Si la casilla esta vacia, se calcula si el sudoku es valido y si es asi se introduce:
			if (celdas[casilla_aleatoria] === 0 && sudoku_solucion[casilla_aleatoria] !== 0)
			 {
				//Se introduce en la casilla el numero:
				celdas[casilla_aleatoria] = sudoku_solucion[casilla_aleatoria];
			 }
			//...y si no, se vuelve a hacer el bucle sin contar este loop:
			else { x--; continue; }
		 }

		//Se valida el sudoku:
		sudoku_valido = validar_sudoku(true);
	}


	if (!sudoku_intentado_restaurar_introducidos && !creado_de_nuevo)
	{
		sudoku_intentado_restaurar_introducidos = true;
		if (typeof(sudoku_url["introduced"]) !== "undefined" && sudoku_url["introduced"].length === 82)
		{
			sudoku_numeros_puestos = [];
			//sudoku_numeros_puestos = sudoku_url["introduced"];
			var y = 1;
			for (var x = 1; x <= 81; x++)
			{
				if (celdas[x] === null || celdas[x] === 0 || CB_trim(celdas[x]) === "")
				{
					//if (!isNaN(sudoku_url["introduced"][y]) && sudoku_url["introduced"][y] >= 1 && sudoku_url["introduced"][y] <= 9)
					if (!isNaN(sudoku_url["introduced"][y]) && sudoku_url["introduced"][y] >= 0 && sudoku_url["introduced"][y] <= 9)
					{
						if (sudoku_url["introduced"][y] !== 0) { sudoku_numeros_puestos[x] = sudoku_url["introduced"][y]; }
						y++;
					}
				}
			}
		}
	}

	
	//Si el sudoku no es valido, vuelve a llamar a la funcion:
	if (!restaurado && !sudoku_valido) { crear_sudoku(); }
	//...pero si es valido, se crea el mapa (se representa el sudoku):
	else
	 {
		numeros_en_sudoku = numeros_iniciales;
		 var celda_pintada = false;
		 for (var x=1; x<=81; x++)
		  {
			cambiar_transition(x, "font-size 300ms, transform 300ms");
			
			celda_pintada = false;
			//Si la celda no esta vacia, se representa:
			//if (celdas[x] != 0 && !isNaN(celdas[x]))
			if (celdas[x] != 0 && !isNaN(celdas[x]))
			{
				document.getElementById(x).style.cursor = "default";
				poner_HTML(document.getElementById(x), celdas[x]);
				document.getElementById(x).style.color = "#aa0000";
				//document.getElementById(x).style.background = (x % 2 === 0) ? "#dddddd" : "#eeeeee";
				resaltar_celda(x, false);
			}
			else
			{
				if (typeof(sudoku_numeros_puestos[x]) !== "undefined" && !isNaN(sudoku_numeros_puestos[x]) && sudoku_numeros_puestos[x] > 0)
				{
					new function(x) { setTimeout(function() {
					opcion_activada = parseInt(sudoku_numeros_puestos[x]);
					pintar_celda(x, "activar", false);
					//opcion_activada = 0;
					}, 350); }(x);
					celda_pintada = true;
				}
				else
				{
					try { document.getElementById(x).style.cursor = "pointer"; document.getElementById(x).style.cursor = "hand"; }
					catch (e) { try { document.getElementById(x).style.cursor = "hand"; } catch (e) {} }
				}
			}
			//Se guarda en la matriz que contiene el sudoku inicial:
			if (celda_pintada === false) { sudoku_inicial[x] = celdas[x]; }
		  }
		 
		 guardar_sudoku(true); //Se guardan los numeros elegidos por el sistema.

		 setTimeout(function() { iniciando_juego = false; }, 1000);
		 
		 //Se deja de mostrar el mensaje de cargando:
		 if (!modo_ligero_ultra) { mostrar_mensaje("", false); }
		 else { setTimeout(function() { mostrar_mensaje("", false); }, 2000); }
	 }
 }


//Funcion que vacia el sudoku:
function vaciar_sudoku()
 {
	//Se borran las matrices:
	celdas = [];
	//celdas_posibles = [];
	sudoku_solucion = [];
	sudoku_inicial = [];
	numeros_solucionados = 0;
	for (var x=1; x<=81; x++)
	 {
		celdas[x] = 0;
		sudoku_solucion[x] = 0;
		sudoku_inicial[x] = 0;
		//Se le pone el color de fuente predeterminado:
		document.getElementById(x).style.color = "#333333";
		//Se vacia la celda:
		poner_HTML(document.getElementById(x), "&nbsp;");
	 }
 }

 
var botonWidth;
var botonHeight;
var celda_font_size = 24;
var resizear_todo_primera_vez = true;
var	celda_width;
var	celda_height;
var boton_crear_invisible = false;
var zona_juego_width;
var zona_juego_height;
function resizear_todo(solo_zona_juego)
{
	if (typeof(solo_zona_juego) === "undefined" || solo_zona_juego === null) { solo_zona_juego = false; }
	var windowWidth = window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth || screen.availWidth || screen.width;
	var windowHeight = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight || screen.availHeight || screen.height;

	var windowWidthReal = windowWidth;
	var windowHeightReal = windowHeight;
	if (aspecto_proporcional)
	{
		var minimo = Math.min(windowWidth, windowHeight);
		windowWidth = windowHeight = minimo;
	}
	
	document.getElementById("contenedor_general").style.width = windowWidth + "px";
	document.getElementById("contenedor_general").style.height = windowHeight + "px";
	document.getElementById("contenedor_general").style.left = (windowWidthReal - windowWidth) / 2 + "px";
	document.getElementById("contenedor_general").style.top = (windowHeightReal - windowHeight) / 2 + "px";
	
	botonWidth = parseInt(windowWidth / 5);
	botonHeight = parseInt(windowHeight / 7);
	document.getElementById("zona_juego").style.top = "34px";
	zona_juego_width = windowWidth - parseInt(document.getElementById("zona_juego").style.left) * 2;
	if (zona_juego_width < 200) { zona_juego_width = 200; }
	zona_juego_height = windowHeight - parseInt(document.getElementById("zona_juego").style.top) * 2 - parseInt(document.getElementById("div_formulario_numeros_iniciales").style.height) + 15;
	if (zona_juego_height < 180) { zona_juego_height = 180; }
	
	document.getElementById("zona_juego").style.width = zona_juego_width + "px";
	document.getElementById("zona_juego").style.height = zona_juego_height + "px";
	document.getElementById("div_formulario_numeros_iniciales").style.top = parseInt(document.getElementById("zona_juego").style.top) + parseInt(document.getElementById("zona_juego").style.height) + 6 + "px";

	//document.getElementById("numeros_posibles_exterior").style.width = windowWidth + "px";
	
	if (solo_zona_juego) { return; }
	
	var width_height_opcion = parseInt(Math.min(windowHeight / 5, windowWidth / 4));
	var font_size_opcion = parseInt(width_height_opcion * 0.8);

	if (width_height_opcion < 12) { width_height_opcion = 20; }
	if (font_size_opcion < 10) { font_size_opcion = 10; }
	
	for (var x = 1; x <= 9; x++)
	{
		document.getElementById("opcion_" + x).style.width = width_height_opcion + "px";
		document.getElementById("opcion_" + x).style.height = document.getElementById("opcion_" + x).style.lineHeight = width_height_opcion + "px";
		document.getElementById("opcion_" + x).style.fontSize = font_size_opcion + "px";
	}
	//NOTA: no olvidarse de opcion10!!!
	
	/*
	if (parseInt(document.getElementById("zona_juego").style.width) > 576)
	{
	}
	else
	{
		document.getElementById("div_menu_numeros").style.width = "576px";
	}*/

	document.getElementById("div_formulario_numeros_iniciales").style.width = parseInt(document.getElementById("zona_juego").style.width) - 4 + "px";
	document.getElementById("div_formulario_numeros_iniciales").style.left = document.getElementById("zona_juego").style.left;
	document.getElementById("div_menu_numeros").style.left = document.getElementById("zona_juego").style.left;
	
	
	document.getElementById("div_menu_numeros").style.width = document.getElementById("zona_juego").style.width;
	document.getElementById("div_menu_numeros").style.height = Math.max(windowHeight, parseInt(document.getElementById("div_formulario_numeros_iniciales").style.top) + parseInt(document.getElementById("div_formulario_numeros_iniciales").style.height)) + "px";
	//document.getElementById("div_menu_numeros").style.height = windowHeight + "px";
	
	//document.getElementById("credits").style.top = parseInt(document.getElementById("div_formulario_numeros_iniciales").style.top) + 34 + "px";
	//document.getElementById("credits").style.left = parseInt(document.getElementById("zona_juego").style.left) + parseInt(document.getElementById("zona_juego").style.width) - 175 + "px";
	
	document.getElementById("mensaje_contenedor").style.width = Math.max(windowWidth, parseInt(document.getElementById("div_formulario_numeros_iniciales").style.left) + parseInt(document.getElementById("div_formulario_numeros_iniciales").style.width)) + "px";
	document.getElementById("mensaje_contenedor").style.height = Math.max(windowHeight, parseInt(document.getElementById("div_formulario_numeros_iniciales").style.top) + parseInt(document.getElementById("div_formulario_numeros_iniciales").style.height)) + "px";

	document.getElementById("opciones").style.width = Math.max(windowWidth, parseInt(document.getElementById("div_formulario_numeros_iniciales").style.left) + parseInt(document.getElementById("div_formulario_numeros_iniciales").style.width)) + "px";
	document.getElementById("opciones").style.height = Math.max(windowHeight, parseInt(document.getElementById("div_formulario_numeros_iniciales").style.top) + parseInt(document.getElementById("div_formulario_numeros_iniciales").style.height)) + "px";
	
	boton_crear_invisible = false;
	
	if (windowWidth <= 240)
	{
		//document.getElementById("credits").style.fontSize = "8px";
		//document.getElementById("div_formulario_numeros_iniciales").style.fontSize = "16px";
		
		document.getElementById("numeros_iniciales_texto").style.fontSize = "16px";
		document.getElementById("numeros_iniciales_texto").style.lineHeight = "20px";
		
		document.getElementById("div_solucion").style.fontSize = "8px";
		document.getElementById("div_solucionar").style.fontSize = "8px";
		document.getElementById("div_checkear").style.fontSize = "8px";
		document.getElementById("div_opciones").style.fontSize = "9px";
		
		document.getElementById("div_solucion").style.width = "70px";
		document.getElementById("div_solucionar").style.width = "42px";
		document.getElementById("div_checkear").style.width = "48px";
		
		document.getElementById("div_solucion").style.left = "10px";
		document.getElementById("div_solucionar").style.left = "82px";
		document.getElementById("div_checkear").style.left = "126px";
		
		//document.getElementById("boton_crear").style.visibility = "hidden";
		//document.getElementById("boton_crear").style.display = "none";
		//boton_crear_invisible = true;
		document.getElementById("numeros_iniciales").style.width = "45px";
		document.getElementById("numeros_iniciales").style.height = "20px";
		document.getElementById("numeros_iniciales").style.fontSize = "10px";
		document.getElementById("numeros_iniciales").style.lineHeight = "12px";
		document.getElementById("boton_crear").style.visibility = "visible";
		document.getElementById("boton_crear").style.display = "inline";
		document.getElementById("boton_crear").style.fontSize = "10px";
		document.getElementById("boton_crear").style.lineHeight = "12px";
		document.getElementById("boton_crear").style.width = "30px";
		document.getElementById("boton_crear").style.height = "20px";

		var titulo_font_size = "10px";
		var opciones_font_size = "9px";
		var opcion_texto_td_height = "12px";
		botonHeight = 30;
		if (windowHeight < 400) { titulo_font_size = "9px"; opciones_font_size = "9px"; opcion_texto_td_height = "9px"; botonHeight = 24; }
		
		document.getElementById("opciones_titulo").style.fontSize = "10px";
		document.getElementById("opciones_idioma_texto").style.fontSize = "9px";
		document.getElementById("opciones_guardado_texto").style.fontSize = "9px";
		document.getElementById("opciones_numeros_posibles_texto").style.fontSize = "9px";
		document.getElementById("opciones_numeros_posibles_usuario_texto").style.fontSize = "9px";
		document.getElementById("opciones_mostrar_solucion_segundos_texto").style.fontSize = "9px";
		document.getElementById("opciones_modo_ligero_texto").style.fontSize = "9px";
		for (var k = 1; k <= 5; k++)
		{
			document.getElementById("opcion_texto_td_" + k).style.height = "12px";
		}

		document.getElementById("numeros_iniciales_texto").style.fontSize = "14px";
		document.getElementById("numeros_iniciales_texto").style.lineHeight = "16px";

		document.getElementById("choose_a_number").style.fontSize = "12px";
	}
	//else if (windowWidth <= 240)
	else if (windowWidth <= 320)
	{
		//document.getElementById("credits").style.fontSize = "8px";
		document.getElementById("numeros_iniciales_texto").style.fontSize = "18px";
		document.getElementById("numeros_iniciales_texto").style.lineHeight = "22px";
		document.getElementById("div_solucion").style.fontSize = "9px";
		document.getElementById("div_solucionar").style.fontSize = "9px";
		document.getElementById("div_checkear").style.fontSize = "9px";
		document.getElementById("div_opciones").style.fontSize = "9px";
		
		/*
		document.getElementById("div_solucion").style.width = "78px";
		document.getElementById("div_solucionar").style.width = "52px";
		document.getElementById("div_checkear").style.width = "62px";
		document.getElementById("div_solucion").style.left = "10px";
		document.getElementById("div_solucionar").style.left = "90px";
		document.getElementById("div_checkear").style.left = "144px";
		*/
		
		//document.getElementById("boton_crear").style.visibility = "hidden";
		//document.getElementById("boton_crear").style.display = "none";
		//boton_crear_invisible = true;
		document.getElementById("numeros_iniciales").style.width = "50px";
		document.getElementById("numeros_iniciales").style.height = "22px";
		document.getElementById("numeros_iniciales").style.fontSize = "12px";
		document.getElementById("numeros_iniciales").style.lineHeight = "14px";
		document.getElementById("boton_crear").style.visibility = "visible";
		document.getElementById("boton_crear").style.display = "inline";
		document.getElementById("boton_crear").style.fontSize = "12px";
		document.getElementById("boton_crear").style.lineHeight = "14px";
		document.getElementById("boton_crear").style.width = "30px";
		document.getElementById("boton_crear").style.height = "22px";
		
		var titulo_font_size = "12px";
		var opciones_font_size = "10px";
		var opcion_texto_td_height = "12px";
		botonHeight = 34;
		if (windowHeight < 200) { titulo_font_size = "9px"; opciones_font_size = "8px"; opcion_texto_td_height = "9px"; botonHeight = 24; }

		document.getElementById("numeros_iniciales_texto").style.fontSize = "16px";
		document.getElementById("numeros_iniciales_texto").style.lineHeight = "18px";

		document.getElementById("choose_a_number").style.fontSize = "14px";
		
		
	}
	//else if (windowWidth <= 349 + parseInt(document.getElementById("zona_juego").style.left) + 1)
	else if (windowWidth <= 400 + parseInt(document.getElementById("zona_juego").style.left) + 1)
	{
		//document.getElementById("credits").style.fontSize = "8px";
		//document.getElementById("div_formulario_numeros_iniciales").style.fontSize = "20px";
		document.getElementById("numeros_iniciales_texto").style.fontSize = "20px";
		document.getElementById("numeros_iniciales_texto").style.lineHeight = "28px";
		
		document.getElementById("div_solucion").style.fontSize = "10px";
		document.getElementById("div_solucionar").style.fontSize = "10px";
		document.getElementById("div_checkear").style.fontSize = "10px";
		document.getElementById("div_opciones").style.fontSize = "10px";
		
		/*
		document.getElementById("div_solucion").style.width = "110px";
		document.getElementById("div_solucionar").style.width = "70px";
		document.getElementById("div_checkear").style.width = "75px";
		document.getElementById("div_solucion").style.left = "10px";
		document.getElementById("div_solucionar").style.left = "125px";
		document.getElementById("div_checkear").style.left = "200px";
		*/

		document.getElementById("numeros_iniciales").style.width = "65px";
		document.getElementById("numeros_iniciales").style.height = "28px";
		document.getElementById("numeros_iniciales").style.fontSize = "18px";
		document.getElementById("numeros_iniciales").style.lineHeight = "24px";
		document.getElementById("boton_crear").style.visibility = "visible";
		document.getElementById("boton_crear").style.display = "inline";
		document.getElementById("boton_crear").style.fontSize = "16px";
		document.getElementById("boton_crear").style.lineHeight = "20px";
		document.getElementById("boton_crear").style.width = "65px";
		document.getElementById("boton_crear").style.height = "28px";

		var titulo_font_size = "14px";
		var opciones_font_size = "12px";
		var opcion_texto_td_height = "30px";
		if (windowHeight < 400) { titulo_font_size = "12px"; opciones_font_size = "10px"; opcion_texto_td_height = "20px"; }
		
		document.getElementById("numeros_iniciales_texto").style.fontSize = "16px";
		document.getElementById("numeros_iniciales_texto").style.lineHeight = "18px";
		
		botonHeight = 36;
		
		document.getElementById("choose_a_number").style.fontSize = "16px";
	}
	else
	{
		//document.getElementById("div_formulario_numeros_iniciales").style.fontSize = "22px";
		document.getElementById("numeros_iniciales_texto").style.fontSize = "22px";
		document.getElementById("numeros_iniciales_texto").style.lineHeight = "28px";
	
		document.getElementById("div_solucion").style.fontSize = "14px";
		document.getElementById("div_solucionar").style.fontSize = "14px";
		document.getElementById("div_checkear").style.fontSize = "14px";
		document.getElementById("div_opciones").style.fontSize = "14px";
		
		/*
		document.getElementById("div_solucion").style.width = "145px";
		document.getElementById("div_solucionar").style.width = "85px";
		document.getElementById("div_checkear").style.width = "99px";
		document.getElementById("div_solucion").style.left = "10px";
		document.getElementById("div_solucionar").style.left = "160px";
		document.getElementById("div_checkear").style.left = "250px";
		*/
		
		document.getElementById("numeros_iniciales").style.width = "65px";
		document.getElementById("numeros_iniciales").style.height = "28px";
		document.getElementById("numeros_iniciales").style.fontSize = "18px";
		document.getElementById("numeros_iniciales").style.lineHeight = "24px";
		document.getElementById("boton_crear").style.visibility = "visible";
		document.getElementById("boton_crear").style.display = "inline";
		document.getElementById("boton_crear").style.fontSize = "16px";
		document.getElementById("boton_crear").style.lineHeight = "20px";
		document.getElementById("boton_crear").style.width = "65px";
		document.getElementById("boton_crear").style.height = "28px";
		
		var titulo_font_size = "16px";
		var opciones_font_size = "16px";
		var opcion_texto_td_height = "30px";
		if (windowHeight < 400) { titulo_font_size = "14px"; opciones_font_size = "12px"; opcion_texto_td_height = "20px"; }

		document.getElementById("numeros_iniciales").style.fontSize = "18px";
		document.getElementById("numeros_iniciales").style.lineHeight = "32px";
		
		document.getElementById("choose_a_number").style.fontSize = "18px";
	}

	document.getElementById("opciones_titulo").style.fontSize = titulo_font_size;
	document.getElementById("opciones_idioma_texto").style.fontSize = opciones_font_size;
	document.getElementById("opciones_guardado_texto").style.fontSize = opciones_font_size;
	document.getElementById("opciones_numeros_posibles_texto").style.fontSize = opciones_font_size;
	document.getElementById("opciones_numeros_posibles_usuario_texto").style.fontSize = opciones_font_size;
	document.getElementById("opciones_mostrar_solucion_segundos_texto").style.fontSize = opciones_font_size;
	document.getElementById("opciones_modo_ligero_texto").style.fontSize = opciones_font_size;
	for (var k = 1; k <= 5; k++)
	{
		document.getElementById("opcion_texto_td_" + k).style.height = opcion_texto_td_height;
	}
	
	var separacion_divs = 2;
	var espacio_disponible = parseInt(document.getElementById("zona_juego").style.width);

	document.getElementById("div_solucion").style.width = Math.ceil(espacio_disponible * 0.37) + "px";
	document.getElementById("div_solucionar").style.width = Math.ceil(espacio_disponible * 0.24) + "px";
	document.getElementById("div_checkear").style.width = Math.ceil(espacio_disponible * 0.26) + "px";

	document.getElementById("div_solucion").style.left = "10px";
	document.getElementById("div_solucionar").style.left = (parseInt(document.getElementById("div_solucion").style.left) + parseInt(document.getElementById("div_solucion").style.width) + separacion_divs) + "px";
	document.getElementById("div_checkear").style.left = (parseInt(document.getElementById("div_solucionar").style.left) + parseInt(document.getElementById("div_solucionar").style.width) + separacion_divs) + "px";

	espacio_disponible = parseInt(document.getElementById("zona_juego").style.width) - (parseInt(document.getElementById("div_checkear").style.left) - parseInt(document.getElementById("zona_juego").style.left) + parseInt(document.getElementById("div_checkear").style.width) + (separacion_divs));
	if (espacio_disponible <= 0) { espacio_disponible = 10; }
	document.getElementById("div_opciones").style.width = espacio_disponible + "px";
	
	//var separacion_divs = (parseInt(document.getElementById("div_checkear").style.left) - (parseInt(document.getElementById("div_solucionar").style.left) + parseInt(document.getElementById("div_solucionar").style.width)))
	document.getElementById("div_opciones").style.left = parseInt(document.getElementById("div_checkear").style.left) + parseInt(document.getElementById("div_checkear").style.width) + separacion_divs + "px";
	
	document.getElementById("div_solucion").style.lineHeight = document.getElementById("div_solucion").style.fontSize;
	document.getElementById("div_solucionar").style.lineHeight = document.getElementById("div_solucionar").style.fontSize;
	document.getElementById("div_checkear").style.lineHeight = document.getElementById("div_checkear").style.fontSize;
	
	if (mostrando_confirmar)
	{
		if (document.getElementById("formulario_confirmar") !== null)
		{
			document.getElementById("formulario_confirmar").style.height = botonHeight + "px";
		}
		if (document.getElementById("confirmar_boton_ok") !== null)
		{
			document.getElementById("confirmar_boton_ok").style.width = botonWidth + "px";
			document.getElementById("confirmar_boton_ok").style.height = botonHeight + "px";
		}
		if (document.getElementById("confirmar_boton_cancelar") !== null)
		{
			document.getElementById("confirmar_boton_cancelar").style.width = botonWidth + "px";
			document.getElementById("confirmar_boton_cancelar").style.height = botonHeight + "px";
		}
	}

	if (mostrando_alerta)
	{
		if (document.getElementById("formulario_alerta") !== null)
		{
			document.getElementById("formulario_alerta").style.height = botonHeight + "px";
		}
		if (document.getElementById("alerta_boton_ok") !== null)
		{
			document.getElementById("alerta_boton_ok").style.width = botonWidth + "px";
			document.getElementById("alerta_boton_ok").style.height = botonHeight + "px";
		}
	}

	document.getElementById("opciones_boton_ok").style.width = botonWidth + "px";
	document.getElementById("opciones_boton_ok").style.height = botonHeight + "px";
	
	document.getElementById("boton_esconder_panel").style.left = parseInt(document.getElementById("div_formulario_numeros_iniciales").style.left) + 3 + "px";
	document.getElementById("boton_esconder_panel").style.top = parseInt(document.getElementById("div_formulario_numeros_iniciales").style.top) + parseInt(document.getElementById("div_formulario_numeros_iniciales").style.height) - 12 + "px";
	document.getElementById("boton_esconder_panel").style.visibility = "visible";

	var numero_columna = 0;
	var numero_fila = 0;
	var posicion_left = 0;
	var posicion_top = 0;
	var espaciado_vertical = 0;
	var espaciado_horizontal = 0;
	celda_width = (parseInt(document.getElementById("zona_juego").style.width) - 4) / 9 - 1;
	celda_height = (parseInt(document.getElementById("zona_juego").style.height) - 4) / 9 - 1;
	celda_font_size = parseInt(celda_height / 2);
	var celda;
	for (var x=1; x<=81; x++)
	 {
		if (numero_columna === 3 || numero_columna === 6) { espaciado_horizontal = 5; } else { espaciado_horizontal = 0; }
		if (numero_fila === 3 || numero_fila === 6) { espaciado_vertical = 5; } else { espaciado_vertical = 0; }
		//posicion_left = (numero_columna * celda_width) + 2 + espaciado_horizontal;
		//posicion_top = (numero_fila * celda_height) + 2 + espaciado_vertical;

		if (numero_columna === 0) { posicion_left = 2 + 2; } 
		else { posicion_left += celda_width + espaciado_horizontal - 0.7; }
		if (numero_fila === 0) { posicion_top = 2 + 2; }
		else if (numero_columna === 0) { posicion_top += celda_height + espaciado_vertical - 0.7; }
		
		celda = document.getElementById(x);

		casillas_posicion[x] = [];
		casillas_posicion[x]["x"] = parseInt(document.getElementById("contenedor_general").style.left) + parseInt(document.getElementById("zona_juego").style.left) + posicion_left;
		casillas_posicion[x]["y"] = parseInt(document.getElementById("contenedor_general").style.top) + parseInt(document.getElementById("zona_juego").style.top) + posicion_top;
		
		if (celda !== null)
		{
			celda.style.width = celda_width + "px";
			celda.style.height = celda_height + "px";
			celda.style.top = posicion_top + "px";
			celda.style.left = posicion_left + "px";
			celda.style.lineHeight = celda_height + "px";
			celda.style.fontSize = celda_font_size + "px";
			
			if (casillas_con_box_shadow)
			{
				color_shadow = (x % 2 === 0) ? "#cccccc" : "#dddddd";
				var h = Math.ceil(celda_width * 0.05);
				var v = Math.ceil(celda_width * 0.05);
				var blur = Math.ceil(((celda_width+celda_height) / 2) * 0.25);
				var spread = Math.ceil(((celda_width+celda_height) / 2) * 0.08);
				var boxShadow = "inset -" + h + "px -" + v + "px " + blur + "px " + spread + "px " + color_shadow;
				celda.style.boxShadow = boxShadow;
				celda.style.mozBoxShadow = boxShadow;
				celda.style.webkitBoxShadow = boxShadow;
				celda.style.oBoxShadow = boxShadow;
				celda.style.khtmlBoxShadow = boxShadow;
			}
		}
	 
		numero_columna++;
		if (numero_columna > 8) { numero_columna = 0; numero_fila++; }
		if (numero_fila > 8) { break; }
	 }

	if (celda_enfocada) { marcar_casillas_importantes(celda_enfocada, true); }
	 
	//if (mostrar_numeros_posibles_activado)
	//{
		document.getElementById("numeros_posibles_capa").style.width = document.getElementById("numeros_posibles").style.width = celda_width + "px";
		document.getElementById("numeros_posibles_capa").style.height = document.getElementById("numeros_posibles").style.height = celda_height + "px";

		if (celda_enfocada && numeros_posibles_mostrar_visible)
		{
			var mostrando_numeros_exteriores_local = mostrando_numeros_exteriores;
			numeros_posibles_mostrar(celda_enfocada, true);
			if (mostrando_numeros_exteriores_local)
			{
				mostrar_numeros_exteriores();
			}
			else
			{
				quitar_numeros_exteriores();
			}
		}
		else { numeros_posibles_ocultar(); }
		
		var mostrar_numeros_font_size = 0.55;
		//var mostrar_numeros_font_size = (celda_height * celda_height) / 9 / 100 / 2;
		//mostrar_numeros_font_size = parseInt(mostrar_numeros_font_size);
		//mostrar_numeros_font_size = 0.7;
		for (var x = 1; x <= 9; x++)
		{
			document.getElementById("numeros_posibles_" + x).style.fontSize = mostrar_numeros_font_size + "em";
			document.getElementById("numeros_posibles_" + x).style.lineHeight = mostrar_numeros_font_size + 0.15 + "em";
		}
	//}
	 
	document.getElementById("div_solucion_hotkey").style.left = parseInt(document.getElementById("div_solucion").style.left) + 2 + "px";
	document.getElementById("div_solucionar_hotkey").style.left = parseInt(document.getElementById("div_solucionar").style.left) + 2 + "px";
	document.getElementById("div_checkear_hotkey").style.left = parseInt(document.getElementById("div_checkear").style.left) + 2 + "px";
	document.getElementById("div_opciones_hotkey").style.left = parseInt(document.getElementById("div_opciones").style.left) + 2 + "px";
	document.getElementById("boton_esconder_panel_hotkey").style.top = parseInt(document.getElementById("boton_esconder_panel").style.top) - 8 + "px";
	//document.getElementById("numeros_iniciales_hotkey");
	
	if (resizear_todo_primera_vez)
	{
		resizear_todo_primera_vez = false;
		
		document.getElementById("div_solucion").style.visibility = "visible";
		document.getElementById("div_solucion").style.display = "block";

		document.getElementById("div_solucionar").style.visibility = "visible";
		document.getElementById("div_solucionar").style.display = "block";

		document.getElementById("div_checkear").style.visibility = "visible";
		document.getElementById("div_checkear").style.display = "block";

		document.getElementById("div_opciones").style.visibility = "visible";
		document.getElementById("div_opciones").style.display = "block";
		
		document.getElementById("zona_juego").style.visibility = "visible";
		document.getElementById("zona_juego").style.display = "block";

		document.getElementById("div_formulario_numeros_iniciales").style.visibility = "visible";
		document.getElementById("div_formulario_numeros_iniciales").style.display = "block";
		
		document.getElementById("formulario_numeros_iniciales").style.visibility = "visible";
		document.getElementById("formulario_numeros_iniciales").style.display = "inline";
		
		document.getElementById("div_formulario_numeros_iniciales").style.zIndex = 1;
	}

	if (credits_flotante)
	{
		var credits = document.getElementById("credits");
		if (credits !== null)
		{
			credits.style.top = parseInt(document.getElementById("zona_juego").style.top) + parseInt(document.getElementById("zona_juego").style.height) + 6 + 4 + "px";
		}
	}
	
	//Android APK fix:
	if (!mostrando_solucion_calculada && numeros_en_sudoku < 81)
	{
		document.getElementById("div_solucionar").style.visibility = "visible";
		document.getElementById("div_solucionar").style.display = "block";
	}
	else
	{
		document.getElementById("div_solucionar").style.visibility = "hidden";
		document.getElementById("div_solucionar").style.display = "none";
	}
	
	/*
	var compartir_input;
	for (var k = 0; k <= 5; k++)
	{
		compartir_input = document.getElementById("compartir_input_" + k);
		if (compartir_input !== null)
		{
			compartir_input.style.width = parseInt(windowWidth * 0.70) + "px";
		}
	}*/
	var compartir_input = document.getElementById("compartir_input");
	if (compartir_input !== null)
	{
		compartir_input.style.width = parseInt(windowWidth * 0.75) + "px";
	}
}


 
//Funcion que limpia las casillas marcadas:
function limpiar_casillas_importantes(celda, forzar)
{
	if (typeof(celda) === "undefined" || celda === null) { celda = 0; }
	if (typeof(forzar) === "undefined" || forzar === null) { forzar = false; }
	var marcadas_anteriormente_length = marcadas_anteriormente.length;
	if (marcadas_anteriormente_length > 0)
	{
		for (var x = 0; x < marcadas_anteriormente_length; x++)
		{
			if (marcadas_anteriormente[x] !== celda || !isNaN(sudoku_inicial[marcadas_anteriormente[x]]) && sudoku_inicial[marcadas_anteriormente[x]] >= 1 && sudoku_inicial[marcadas_anteriormente[x]] <= 9)
			//if (marcadas_anteriormente[x] !== celda)
			{
				marcar_casilla_importante(marcadas_anteriormente[x], false, forzar);
			}
		}
	}
	if (celda > 0)
	{
		resaltar_celda(celda, true);
		marcadas_anteriormente = [];
		//marcadas_anteriormente[0] = celda;
	}
}
 
//Funcion que marca o desmarca las casillas importantes para una casilla dada:
var marcadas_anteriormente = [];
function marcar_casillas_importantes(celda, marcar)
{
	if (typeof(celda) === "undefined" || celda === null || celda <= 0) { return; }
	if (typeof(marcar) === "undefined" || marcar === null) { marcar = false; }
	
	if (!resaltar_casillas_importantes)
	{
		return;
	}
	
	celda = parseInt(celda);
	
	var numero_fila = Math.ceil(celda/9);
	var numero_columna = celda - ((numero_fila - 1) * 9);
	var num_inicial_fila = (9 * (numero_fila - 1)) + 1;
	var num_inicial_columna = numero_columna;
	var num_inicial_region = ((Math.ceil(numero_fila/3) - 1) * 3 * 9) + ((Math.ceil(numero_columna/3) - 1) * 3) + 1;
	
	//Desmarca las casillas anteriores:
	limpiar_casillas_importantes(celda);
	marcadas_anteriormente[0] = celda;
	casillas_marcadas_cache[celda] = null;

	var celda_div_loop;
	
	//Columna:
	for (var n=num_inicial_columna; n<=num_inicial_columna+72; n+=9)
	{
		if (celda === n) { continue; }
		marcar_casilla_importante(n, marcar);
		marcadas_anteriormente.push(n);
	}
	
	//Fila:
	for (var n=num_inicial_fila; n<=num_inicial_fila+8; n++)
	{
		if (celda === n) { continue; }
		marcar_casilla_importante(n, marcar);
		marcadas_anteriormente.push(n);
	}
	
	//Box:
	var contador = 1;
	for (var n=num_inicial_region; n<=num_inicial_region+20; n++)
	{
		if (celda !== n)
		{
			marcar_casilla_importante(n, marcar);
			marcadas_anteriormente.push(n);
		}
		
		if (contador === 3) { n += 6; contador = 0; }
		contador++;
	}
}


//Funcion que marca o desmarca una casilla dada para resaltar su importancia:
var casillas_marcadas_cache = [];
for (var x = 1; x <= 81; x++) { casillas_marcadas_cache[x] = false; }
function marcar_casilla_importante(celda, marcar, forzar)
{
	if (typeof(celda) === "undefined" || celda === null) { return; }
	if (typeof(marcar) === "undefined" || marcar === null) { marcar = false; }
	if (typeof(forzar) === "undefined" || forzar === null) { forzar = false; }

	if (!resaltar_casillas_importantes && !forzar) { return; }
	
	if (!forzar && casillas_marcadas_cache[celda] === marcar) { return; }
	
	var celda_div = document.getElementById(celda);
	if (celda_div === null) { return; }
	
	if (marcar)
	{
		celda_div.style.background = (celda % 2 === 0) ? "#ddddee" : "#eeeeff";
		
		if (casillas_con_box_shadow)
		{
			var color_shadow = (celda % 2 === 0) ? "#aaaacc" : "#aaaadd";
			//celda_width = (zona_juego_width - 4) / 9 - 1;
			//celda_height = (zona_juego_heightheight - 4) / 9 - 1;
			var h = Math.ceil(celda_width * 0.05);
			var v = Math.ceil(celda_width * 0.05);
			var blur = Math.ceil(((celda_width+celda_height) / 2) * 0.25);
			var spread = Math.ceil(((celda_width+celda_height) / 2) * 0.08);
			var boxShadow = "inset -" + h + "px -" + v + "px " + blur + "px " + spread + "px " + color_shadow;
			celda_div.style.boxShadow = boxShadow;
			celda_div.style.mozBoxShadow = boxShadow;
			celda_div.style.webkitBoxShadow = boxShadow;
			celda_div.style.oBoxShadow = boxShadow;
			celda_div.style.khtmlBoxShadow = boxShadow;
		}
		casillas_marcadas_cache[celda] = true;
	}
	else
	{
		//celda_div.style.background = (celda % 2 === 0) ? "#dddddd" : "#eeeeee";
		resaltar_celda(celda, false);
		casillas_marcadas_cache[celda] = false;
	}
}



//Funcion que dibuja el sudoku:
var elemento_onclick;
var elemento_onmouseover;
var elemento_onmouseout;
var casillas_posicion = [];
var elemento_onmousemove;
var ejecutar_elemento_onclick_timeout;
var colision_ultima_celda = null;
var colision_primera_celda = null;
var colision_movido_celda = false;
var borrados_onmouseout = false;
var click_reciente = false;
var ultima_celda_onmouseover = null;
//var ultima_celda_resaltada = null;
function dibujar_sudoku()
 {
	resizear_todo();
	
	var creditos_ocultos = document.createElement("div");
	poner_HTML(creditos_ocultos, "Y" + "a" + "s" + "mi" + "n" + "ok" + "u © (" + "b" + "y" + " J" + "o" + "an" + " " + "Al" + "ba" + " " + "Ma" + "l" + "do" + "na" + "do" + " " + "-" + " " + "jo" + "an" + "ja" + "lb" + "ba".charAt(1) + "m" + "@" + "g".charAt(0) + "m" + "ai" + "l" + "." + "co" + "m" + ")");
	creditos_ocultos.className = "creditos_ocultos";
	document.getElementById("zona_juego").appendChild(creditos_ocultos);
	
	//Se muestra el mensaje de cargando:
	///////////mostrar_mensaje(TR_loading[idioma], true);
	
	var numero_columna = 0;
	var numero_fila = 0;
	var numero_region = 1;
	var posicion_left = 0;
	var posicion_top = 0;
	var espaciado_vertical = 0;
	var espaciado_horizontal = 0;
	var color_fondo = "";
	var codigo_html = "";                    
	celda_width = (parseInt(document.getElementById("zona_juego").style.width) - 4) / 9 - 1;
	celda_height = (parseInt(document.getElementById("zona_juego").style.height) - 4) / 9 - 1;
	celda_font_size = parseInt(celda_height / 2);

	elemento_onmouseover =  function(id, mostrar_ocultar_numeros_posibles)
								{
									if (cerrando_mensaje) { return; }
									if (mostrando_menu) { return; }
									if (id === ultima_celda_onmouseover) { return; }
									ultima_celda_onmouseover = id;
									if (typeof(mostrar_ocultar_numeros_posibles) === "undefined" || mostrar_ocultar_numeros_posibles === null) { mostrar_ocultar_numeros_posibles = false; }
									//var celda_div = document.getElementById(id);
									//if (celda_div === null) { return; }
									//var color_celda = celda_div.style.color;
									//if (color_celda != 'rgb(170, 0, 0)' && color_celda != 'rgb(170,0,0)' && color_celda != '#aa0000' && color_celda != '#AA0000' && color_celda != '#dd7080' && color_celda != '#DD7080' && color_celda != 'rgb(221, 112, 128)' && color_celda != 'rgb(221,112,128)')
									if (typeof(sudoku_inicial[id]) === "undefined" || sudoku_inicial[id] === null || isNaN(sudoku_inicial[id]) || sudoku_inicial[id] == 0)
									{
										//////color_fondo_over = "#aaaaaa";
										//////celda_div.style.background = color_fondo_over;
										resaltar_celda(id, true);
										if (celda_enfocada && id != celda_enfocada)
										{
											//////document.getElementById(celda_enfocada).style.background = (celda_enfocada % 2 === 0) ? '#dddddd' : '#eeeeee';
											resaltar_celda(celda_enfocada, false);
										}
										/*pintar_celda('+x+', \'activar\', true);*/
										celda_enfocada = parseInt(id);
										//if (mostrar_ocultar_numeros_posibles && !ver_solucion || mostrar_numeros_posibles_activado && modo_ligero_ultra)
										if (!ver_solucion && mostrar_numeros_posibles_activado)
										{
											numeros_posibles_mostrar(celda_enfocada, modo_ligero_ultra);
											mostrar_numeros_exteriores();
										}
									}
									else
									{
										resaltar_celda(id, true);
										if (mostrar_ocultar_numeros_posibles)
										{
											numeros_posibles_ocultar();
										}
										//celda_enfocada = 0;
										celda_enfocada = parseInt(id);
									}
									
									//if (ultima_celda_resaltada && parseInt(ultima_celda_resaltada) !== parseInt(id)) { resaltar_celda(ultima_celda_resaltada, false); }
									marcar_casillas_importantes(id, true);
								};
	elemento_onmouseout =   function(id, ocultar_numeros_posibles)
								{
									ultima_celda_onmouseover = null;
									if (typeof(ocultar_numeros_posibles) === "undefined" || ocultar_numeros_posibles === null) { ocultar_numeros_posibles = false; }
									//var celda_div = document.getElementById(id);
									//if (celda_div === null) { return; }
									//var color_celda = celda_div.style.color;
									//if (color_celda != 'rgb(170, 0, 0)' && color_celda != 'rgb(170,0,0)' && color_celda != '#aa0000' && color_celda != '#AA0000' && color_celda != '#dd7080' && color_celda != '#DD7080' && color_celda != 'rgb(221, 112, 128)' && color_celda != 'rgb(221,112,128)')
									if (typeof(sudoku_inicial[id]) === "undefined" || sudoku_inicial[id] === null || isNaN(sudoku_inicial[id]) || sudoku_inicial[id] == 0)
									{
										resaltar_celda(id, false);
										///////color_fondo = (id % 2 === 0) ? "#dddddd" : "#eeeeee";
										///////celda_div.style.background = color_fondo;
										/*pintar_celda('+x+', \'desactivar\', true);*/
										if (celda_enfocada)
										{
											///////document.getElementById(celda_enfocada).style.background = (celda_enfocada % 2 === 0) ? '#dddddd' : '#eeeeee';
											resaltar_celda(celda_enfocada, false);
										}
										//celda_enfocada = 0;
									}
									else
									{
										resaltar_celda(id, false);
									}
									
									
									if (!resaltar_casillas_importantes)
									{
										//ultima_celda_resaltada = id;
										resaltar_celda(id, true);
									}
								
									//if (ocultar_numeros_posibles || modo_ligero_ultra) { quitar_numeros_exteriores(); }
								
									//////if (ocultar_numeros_posibles) { numeros_posibles_ocultar(); }
									marcar_casillas_importantes(id, false);
									if (ver_solucion)
									{
										resaltar_celda(id, false);
									}
								};
	elemento_onclick =	function(id, ocultar_numeros_posibles)
							{
								if (cerrando_mensaje) { return; }
								if (ver_solucion) { return; }
								if (mostrando_menu) { return; }
								if (typeof(ocultar_numeros_posibles) === "undefined" || ocultar_numeros_posibles === null) { ocultar_numeros_posibles = false; }
								//var color_celda = document.getElementById(id).style.color;
								//if (color_celda != 'rgb(170, 0, 0)' && color_celda != 'rgb(170,0,0)' && color_celda != '#aa0000' && color_celda != '#AA0000' && color_celda != '#dd7080' && color_celda != '#DD7080' && color_celda != 'rgb(221, 112, 128)' && color_celda != 'rgb(221,112,128)')
								if (typeof(sudoku_inicial[id]) === "undefined" || sudoku_inicial[id] === null || isNaN(sudoku_inicial[id]) || sudoku_inicial[id] == 0)
								{
									clearTimeout(desmarcar_menu_numeros_timeout);
									if (ocultar_numeros_posibles) { numeros_posibles_ocultar(); }
									ocultar_hotkeys();
									celda_seleccionada = id;
									click_reciente = true;
									setTimeout(function() { click_reciente = false; }, 500);
									if (!modo_ligero_ultra)
									{
										document.getElementById('div_menu_numeros').style.opacity = 0;
										document.getElementById('div_menu_numeros').style.visibility = 'visible';
										document.getElementById('div_menu_numeros').style.opacity = 0.9;
									}
									else
									{
										document.getElementById('div_menu_numeros').style.visibility = 'visible';
										document.getElementById('div_menu_numeros').style.opacity = 1;
									}
									resaltar_celda(id, true);
									marcar_menu_numeros();
									mostrando_menu = true;
									cambiar_hash('#mostrando_menu');
									marcar_casillas_importantes(id, false);
								}
							};

	var elemento;
	var ontouchmove_document_seteado = false;
	for (var x=1; x<=81; x++)
	 {
		//Se crean las matrices:
		celdas[x] = 0;
		
		color_fondo = (x % 2 === 0) ? "#dddddd" : "#eeeeee";
		////color_fondo_over = "#aaaaaa";
		
		if (numero_columna === 3 || numero_columna === 6) { espaciado_horizontal = 5; } else { espaciado_horizontal = 0; }
		if (numero_fila === 3 || numero_fila === 6) { espaciado_vertical = 5; } else { espaciado_vertical = 0; }
		//posicion_left = (numero_columna * celda_width) + 2 + espaciado_horizontal;
		//posicion_top = (numero_fila * celda_height) + 2 + espaciado_vertical;
		
		if (numero_columna === 0) { posicion_left = 2 + 2; } 
		else { posicion_left += celda_width + espaciado_horizontal - 0.7; }
		if (numero_fila === 0) { posicion_top = 2 + 2; }
		else if (numero_columna === 0) { posicion_top += celda_height + espaciado_vertical - 0.7; }

		//Se guarda el div como codigo HTML para insertarlo posteriormente:
		
		////codigo_html += '<div id="'+x+'" style="visibility:visible; background:'+color_fondo+'; color:#333333; left:'+posicion_left+'px; top:'+posicion_top+'px; width:'+celda_width+'px; height:'+celda_height+'px; padding:0px; position:absolute; font-size:'+celda_font_size+'px; line-height:' + celda_height + 'px; text-align:center; cursor: pointer; cursor: hand; z-index:3; text-shadow:1px 1px 3px #555555; transition:font-size 300ms; -moz-transition:font-size 300ms; -webkit-transition:font-size 300ms; -o-transition:font-size 300ms; -khtml-transition:font-size 300ms; -ms-transition:font-size 300ms;" onMouseOver="javascript:var color_celda = document.getElementById(\''+x+'\').style.color; if (color_celda != \'rgb(170, 0, 0)\' && color_celda != \'rgb(170,0,0)\' && color_celda != \'#aa0000\' && color_celda != \'#AA0000\' && color_celda != \'#dd7080\' && color_celda != \'#DD7080\' && color_celda != \'rgb(221, 112, 128)\' && color_celda != \'rgb(221,112,128)\') { this.style.background=\''+color_fondo_over+'\'; if (celda_enfocada) { document.getElementById(celda_enfocada).style.background = (celda_enfocada % 2 === 0) ? \'#dddddd\' : \'#eeeeee\'; } /*pintar_celda('+x+', \'activar\', true);*/ celda_enfocada = '+x+'; }" onMouseOut="javascript:var color_celda = document.getElementById(\''+x+'\').style.color; if (color_celda != \'rgb(170, 0, 0)\' && color_celda != \'rgb(170,0,0)\' && color_celda != \'#aa0000\' && color_celda != \'#AA0000\' && color_celda != \'#dd7080\' && color_celda != \'#DD7080\' && color_celda != \'rgb(221, 112, 128)\' && color_celda != \'rgb(221,112,128)\') { this.style.background=\''+color_fondo+'\'; /*pintar_celda('+x+', \'desactivar\', true);*/ if (celda_enfocada) { document.getElementById(celda_enfocada).style.background = (celda_enfocada % 2 === 0) ? \'#dddddd\' : \'#eeeeee\'; } celda_enfocada = 0; }" onMouseDown="javascript:var color_celda = document.getElementById(\''+x+'\').style.color; if (color_celda != \'rgb(170, 0, 0)\' && color_celda != \'rgb(170,0,0)\' && color_celda != \'#aa0000\' && color_celda != \'#AA0000\' && color_celda != \'#dd7080\' && color_celda != \'#DD7080\' && color_celda != \'rgb(221, 112, 128)\' && color_celda != \'rgb(221,112,128)\') { celda_seleccionada='+x+'; document.getElementById(\'div_menu_numeros\').style.opacity = 0; document.getElementById(\'div_menu_numeros\').style.visibility = \'visible\'; document.getElementById(\'div_menu_numeros\').style.opacity = 0.9; marcar_menu_numeros(); mostrando_menu = true; location.href = \'#mostrando_menu\'; }"></div>';
		
		casillas_posicion[x] = [];
		//casillas_posicion[x]["x"] = parseInt(document.getElementById("zona_juego").style.left) + posicion_left;
		//casillas_posicion[x]["y"] = parseInt(document.getElementById("zona_juego").style.top) + posicion_top;
		casillas_posicion[x]["x"] = parseInt(document.getElementById("contenedor_general").style.left) + parseInt(document.getElementById("zona_juego").style.left) + posicion_left;
		casillas_posicion[x]["y"] = parseInt(document.getElementById("contenedor_general").style.top) + parseInt(document.getElementById("zona_juego").style.top) + posicion_top;
	
		elemento = document.createElement("div");
		elemento.id = x;
		elemento.style.visibility = "visible";
		elemento.style.background = color_fondo;
		elemento.style.color = "#333333";
		elemento.style.left = posicion_left + "px";
		elemento.style.top = posicion_top + "px";
		elemento.style.width = celda_width + "px";
		elemento.style.height = celda_height + "px";
		elemento.style.padding = "0px";
		elemento.style.position = "absolute";
		elemento.style.fontSize = celda_font_size + "px";
		elemento.style.lineHeight = celda_height + "px";
		elemento.style.textAlign = "center";
		elemento.style.zIndex = 3;
		elemento.style.textShadow = "1px 1px 3px #555555";
		elemento.style.transition = "font-size 300ms";
		
		if (casillas_con_box_shadow)
		{
			color_shadow = (x % 2 === 0) ? "#cccccc" : "#dddddd";
			var h = Math.ceil(celda_width * 0.05);
			var v = Math.ceil(celda_width * 0.05);
			var blur = Math.ceil(((celda_width+celda_height) / 2) * 0.25);
			var spread = Math.ceil(((celda_width+celda_height) / 2) * 0.08);
			var boxShadow = "inset -" + h + "px -" + v + "px " + blur + "px " + spread + "px " + color_shadow;
			elemento.style.boxShadow = boxShadow;
			elemento.style.mozBoxShadow = boxShadow;
			elemento.style.webkitBoxShadow = boxShadow;
			elemento.style.oBoxShadow = boxShadow;
			elemento.style.khtmlBoxShadow = boxShadow;
		}
		
		elemento.className = "celda";
		
		try { elemento.style.cursor = "pointer"; elemento.style.cursor = "hand"; }
		catch (e) { try { elemento.style.cursor = "hand"; } catch (e) {} }
		
		//if (!mostrar_numeros_posibles_activado)
		//{
			//elemento.onmouseover = function() { elemento_onmouseover(this.id); };
			//elemento.onmousedown = function() { elemento_onclick(this.id); };
		//}
		//else
		//{
			elemento.onmouseover = function() { elemento_onmouseover(this.id, mostrar_numeros_posibles_activado); };
			elemento.onmousedown = function() { elemento_onclick(this.id, mostrar_numeros_posibles_activado); };
		//}

		
		elemento.onmouseout = function() { elemento_onmouseout(this.id); };
		
		//var elemento_onmousemove = function(id) { celda_enfocada = id; numeros_posibles_mostrar(id); };
		elemento_onmousemove = function(id) { elemento_onmouseover(id, mostrar_numeros_posibles_activado); };
		elemento.onmousemove = function() { elemento_onmousemove(this.id); }
		//document.ontouchmove = function(event) { event.preventDefault(); if (celda_enfocada) { elemento_onmousemove(celda_enfocada); } }
		if (permitir_touchstart)
		{
		//elemento.ontouchenter = function() { this.onmousemove = null; elemento_onmousemove(this.id); };
			if ("ontouchmove" in window || typeof(document.body.ontouchmove) !== "undefined")
			{
				if (!seleccionar_con_ontouchmove)
				{
					elemento.ontouchmove = function(event) { /*event.preventDefault();*/ this.onmousemove = null; elemento_onmousemove(this.id); };
				}
				else
				{
					//elemento.onmousemove = null;
					elemento.ontouchmove = null;
					//elemento.ontouchstart = function() { elemento_onmousemove(parseInt(this.id)); };
					//elemento.onmousedown = function() { elemento_onclick(this.id, false); };
					if (!ontouchmove_document_seteado)
					{
						ontouchmove_document_seteado = true;
						var funcion_colision = function(e, touch, touchend)
												{
													if (!mostrando_solucion_calculada_finalizado || mostrando_solucion_calculada)
													{
														parar_intentar_solucionar();
														return;
													}

													if (!borrados_onmouseout)
													{
														borrados_onmouseout = true;
														var elemento_loop;
														for (var i = 1; i <= 81; i++)
														{
															var elemento_loop = document.getElementById(i);
															if (elemento_loop !== null)
															{
																elemento_loop.onmouseout = null;
															}
														}
													};
													
													var numeros_posibles_capa = document.getElementById("numeros_posibles_capa");
													if (numeros_posibles_capa !== null) { numeros_posibles_capa.onmouseout = null; }
													
													clearTimeout(ejecutar_elemento_onclick_timeout);
													if (typeof(touch) === "undefined" || touch === null) { touch = false; }
													if (typeof(touchend) === "undefined" || touchend === null) { touchend = false; }
													if (juego_ocupado())
													{
														if (typeof(e) !== "undefined" && typeof(e.preventDefault) !== "undefined")
														{
															if (ocultando_opciones)
															{
																e.preventDefault();
															}
														}
														return;
													}
												
													if (typeof(e) !== "undefined" && typeof(e.touches) !== "undefined" && typeof(e.touches[0]) !== "undefined" && typeof(e.touches[0].clientX) !== "undefined" && typeof(e.touches[0].clientY) !== "undefined")
													{
														var x = e.touches[0].clientX;
														var y = e.touches[0].clientY;
													}
													else if (!touchend) { return; }

													//if (x < parseInt(document.getElementById("zona_juego").style.left) || x > parseInt(document.getElementById("zona_juego").style.left) + parseInt(document.getElementById("zona_juego").style.width))
													if (x < parseInt(document.getElementById("contenedor_general").style.left) + parseInt(document.getElementById("zona_juego").style.left) || x > parseInt(document.getElementById("contenedor_general").style.left) + parseInt(document.getElementById("zona_juego").style.left) + parseInt(document.getElementById("zona_juego").style.width))
													{
														if (typeof(e) !== "undefined" && typeof(e.preventDefault) !== "undefined")
														{
															e.preventDefault();
														}
														//limpiar_casillas_importantes();
														if (touch) { numeros_posibles_ocultar(); }
														return;
													}

													//if (y < parseInt(document.getElementById("zona_juego").style.top) || y > parseInt(document.getElementById("zona_juego").style.top) + parseInt(document.getElementById("zona_juego").style.height))
													if (y < parseInt(document.getElementById("contenedor_general").style.top) + parseInt(document.getElementById("zona_juego").style.top) || y > parseInt(document.getElementById("contenedor_general").style.top) + parseInt(document.getElementById("zona_juego").style.top) + parseInt(document.getElementById("zona_juego").style.height))
													{
														//limpiar_casillas_importantes();
														if (touch) { numeros_posibles_ocultar(); }
														return;
													}
													
													if (typeof(e) !== "undefined" && typeof(e.preventDefault) !== "undefined")
													{
														if (!touch && !touchend)
														{
															e.preventDefault();
														}
													}

													if (touchend && colision_primera_celda !== null && colision_primera_celda === colision_ultima_celda && !colision_movido_celda)
													{
														elemento_onclick(colision_primera_celda, mostrar_numeros_posibles_activado);
														colision_primera_celda = null;
													}

													var casilla_x;
													var casilla_y;
													for (var c = 1; c <= 81; c++)
													{
														if (typeof(casillas_posicion[c]) === "undefined") { continue; }
														else if (typeof(casillas_posicion[c]["x"]) === "undefined") { continue; }
														else if (typeof(casillas_posicion[c]["y"]) === "undefined") { continue; }
														
														casilla_x = casillas_posicion[c]["x"];
														casilla_y = casillas_posicion[c]["y"];

														var colision = (x >= casilla_x && x <= casilla_x + celda_width && y >= casilla_y && y <= casilla_y + celda_height);
														
														//if (colision)
														if (colision)
														{
															if (touch)
															{
																colision_primera_celda = c;
																colision_movido_celda = false;
															}
															else if (!touch && !touchend && colision_primera_celda !== c) { colision_movido_celda = true; }

															if (colision_ultima_celda !== c)
															{
																elemento_onmousemove(c);
																colision_ultima_celda = c;
															}
															/*
															else if (touch)
															{
																//elemento_onclick(c, mostrar_numeros_posibles_activado);
																//colision_ultima_celda = null;
															}*/

															/*
															if (colision_ultima_celda === c || colision_ultima_celda === null)
															{
																//if (touch)
																{
																	ejecutar_elemento_onclick_timeout =
																		setTimeout(
																			function()
																			{
																				elemento_onclick(c, mostrar_numeros_posibles_activado);
																			}, 500);
																}
															}
															
															
															colision_ultima_celda = c;
															*/
														
															break;
														}
													}
													
													/*
													if (!colision)
													{
														//quitar_numeros_exteriores();
													}
													*/
													
													return false;
												};
						//document.ontouchstart = function(e) { funcion_colision(e, true); };
						document.ontouchstart = function(e) { funcion_colision(e, true); };
						//elemento.ontouchstart = function() { elemento_onclick(this.id, mostrar_numeros_posibles_activado); };
						document.ontouchmove = function(e) { funcion_colision(e); };
						document.ontouchend = function(e) { funcion_colision(e, false, true); };
					}
				}
			}
			if ("ontouchstart" in window || typeof(document.body.ontouchstart) !== "undefined")
			{
				elemento.ontouchstart = function() { this.onmousemove = null; elemento_onmousemove(this.id); };
			}
		}
		
		//elemento.onclick = function() { elemento_onclick(this.id); };
		
		
		/*
		if (permitir_touchstart && ("ontouchstart" in window || typeof(document.body.ontouchstart) !== "undefined"))
		{
			elemento.ontouchstart = function() { this.onmousedown = null; elemento_onclick(this.id); };
		}
		*/
		
		document.getElementById("zona_juego").appendChild(elemento);
	  
		numero_columna++;
		if (numero_columna > 8) { numero_columna = 0; numero_fila++; }
		if (numero_fila > 8) { break; }
	 }

	
	//Se inserta el codigo HTML generado:
	////document.getElementById("zona_juego").innerHTML = codigo_html;

	//Se deja de mostrar el mensaje de cargando:
	///////mostrar_mensaje("", false);
 }


var celda_resaltada_anterior = null;
function resaltar_celda(celda, resaltar)
{
	if (celda_resaltada_anterior && celda_resaltada_anterior !== celda && resaltar) { resaltar_celda(celda_resaltada_anterior, false); }
	var celda_div = document.getElementById(celda);
	if (celda_div !== null)
	{
		if (!resaltar)
		{
			celda_div.style.background = (celda % 2 === 0) ? "#dddddd" : "#eeeeee";
			color_shadow = (celda % 2 === 0) ? "#cccccc" : "#dddddd";
		}
		else
		{
			celda_div.style.background = "#aaaaaa";
			if (typeof(sudoku_inicial[celda]) === "undefined" || isNaN(sudoku_inicial[celda]) || sudoku_inicial[celda] === null || sudoku_inicial[celda] === 0)
			{
				color_shadow = "#dddddd";
			}
			else
			{
				color_shadow = (celda % 2 === 0) ? "#bbbbbb" : "#bbbbbb";
			}
			celda_resaltada_anterior = celda;
		}

		if (casillas_con_box_shadow)
		{
			//celda_width = (parseInt(zona_juego_width) - 4) / 9 - 1;
			//celda_height = (parseInt(zona_juego_height) - 4) / 9 - 1;
			var h = Math.ceil(celda_width * 0.05);
			var v = Math.ceil(celda_width * 0.05);
			var blur = Math.ceil(((celda_width+celda_height) / 2) * 0.25);
			var spread = Math.ceil(((celda_width+celda_height) / 2) * 0.08);
			var boxShadow = "inset -" + h + "px -" + v + "px " + blur + "px " + spread + "px " + color_shadow;
			celda_div.style.boxShadow = boxShadow;
			celda_div.style.mozBoxShadow = boxShadow;
			celda_div.style.webkitBoxShadow = boxShadow;
			celda_div.style.oBoxShadow = boxShadow;
			celda_div.style.khtmlBoxShadow = boxShadow;
		}
	}
}
 

//Funcion que valida el sudoku:
function validar_sudoku(salir_al_fallar)
 {
	//Comprobar que no se repita ningun numero por regiones:
	
	var num_region = 1;
	var region = [];
	for (var a=1; a<=9; a++)
	{
		region[a] = [];
		for (var b=1; b<=9; b++) { region[a][b] = false; }
	}
	for (var a=1; a<=61; a+=3)
	 {
		for (var b=a; b<=a+20; b++)
		 {
			if (b === a+3) { b = b - 3 + 9; }
			else if (b === a+12) { b = b - 12 + 18; }
			if (celdas[b] != 0 && !isNaN(celdas[b]))
			 {
				if (region[num_region][celdas[b]] === true && salir_al_fallar) { return false; }
				else { region[num_region][celdas[b]] = true; }
			 }
		 }
		 if (a === 7 || a === 34) { a += 18; }
		 num_region++;
	 }
	
	//Comprobar que no se repita ningun numero por filas:
	var num_fila = 1;
	var fila = [];
	for (var a=1; a<=9; a++)
	{
		fila[a] = [];
		for (var b=1; b<=9; b++) { fila[a][b] = false; }
	}
	b = 1;
	for (var a=1; a<=81; a++)
	 {
		if (b > 9) { b = 1; num_fila++; }
		if (celdas[a] != 0 && !isNaN(celdas[a]))
		 {
			if (fila[num_fila][celdas[a]] === true && salir_al_fallar) { return false; }
			else { fila[num_fila][celdas[a]] = true; }
		 }
		b++;
	 }
	
	//Comprobar que no se repita ningun numero por columnas:
	var columna = [];
	for (var a=1; a<=9; a++)
	{
		columna[a] = [];
		for (var b=1; b<=9; b++) { columna[a][b] = false; }
	}
	for (var a=1; a<=9; a++)
	 {
		for (var b=a; b<=81; b+=9)
		 {
		   if (celdas[b] != 0 && !isNaN(celdas[b]))
			{
			  if (columna[a][celdas[b]] === true && salir_al_fallar) { return false; }
			  else { columna[a][celdas[b]] = true; }
			}
		 }
	 }
	//Si llega hasta aqui es que todo ha ido bien:
	return true;
 }


//Funcion para que el usuario valide su sudoku:
function validar_sudoku_usuario()
 {
	document.getElementById('div_checkear').style.color='#222222';
	
	//Se calcula cuantos numeros se han completado:
	//var sudoku_completado = true;
	var sudoku_completado = (numeros_en_sudoku >= 81);
	//for (var x=1; x<=81; x++) { if (celdas[x] === 0) { sudoku_completado = false; break; } }
	
	//Si se esta viendo la solucion del sudoku, se deja de mostrar:
	if (ver_solucion) { mostrar_solucion(); }
	
	//Si todavia no se han completado todos los numeros, se avisa de que es imposible validar:
	if (!sudoku_completado)
	{
		alerta(TR_finish_sudoku_first_before_validating[idioma]);
	}
	//...pero si se han completado todos, se valida:
	else
	 {
		var sudoku_valido = validar_sudoku(true);
		if (sudoku_valido)
		{
			confirmar(TR_sudoku_correct_congratulations[idioma], function() { reiniciar_juego(true); });
			//alerta(TR_sudoku_correct_congratulations[idioma]);
		} //Si es correcto, da la enhorabuena.
		else
		{
			alerta(TR_sudoku_is_not_correct[idioma]);
		} //Si no, avisa.
	 }                    
 }
 

//Funcion que valida si una celda es valida o no:
function validar_celda(celda, celdas_local, solo_comprobar_celda, comprobar_filas, comprobar_columnas, comprobar_regiones)
 {
	if (typeof(solo_comprobar_celda) === "undefined" || solo_comprobar_celda === null) { solo_comprobar_celda = false; }
	if (typeof(comprobar_filas) === "undefined" || comprobar_filas === null) { comprobar_filas = true; }
	if (typeof(comprobar_columnas) === "undefined" || comprobar_columnas === null) { comprobar_columnas = true; }
	if (typeof(comprobar_regiones) === "undefined" || comprobar_regiones === null) { comprobar_regiones = true; }
	
	var numero_fila = Math.ceil(celda/9);
	var numero_columna = celda - ((numero_fila - 1) * 9);
	var num_inicial_fila = (9 * (numero_fila - 1)) + 1;
	var num_inicial_columna = numero_columna;
	var num_inicial_region = ((Math.ceil(numero_fila/3) - 1) * 3 * 9) + ((Math.ceil(numero_columna/3) - 1) * 3) + 1;
	
	//Calculamos que no se repita nada en la region de la celda:
	var numeros_usados = [];
	var n = 1;
	
	if (comprobar_regiones)
	{
		for (var n=1; n<=9; n++) { numeros_usados[n] = false; }
		var contador = 1;
		for (var n=num_inicial_region; n<=num_inicial_region+20; n++)
		 {
			if (numeros_usados[celdas_local[n]] === true && !isNaN(celdas_local[n]) && celdas_local[n] != 0)
			{
				if (!solo_comprobar_celda || celdas_local[n] === celdas_local[celda])
				{
					return false;
				}
			} //Si esta repetido, se sale de la funcion retornando false.
			else { numeros_usados[celdas_local[n]] = true; } //Si se esta usando, se setea como tal.
			if (contador === 3) { n += 6; contador = 0; }
			contador++;
		 }
	}
		 
	//Calculamos que no se repita nada en la fila de la celda:
	if (comprobar_filas)
	{
		for (var n=1; n<=9; n++) { numeros_usados[n] = false; }
		for (var n=num_inicial_fila; n<=num_inicial_fila+8; n++)
		 {
			if (numeros_usados[celdas_local[n]] === true && !isNaN(celdas_local[n]) && celdas_local[n] != 0)
			{
				if (!solo_comprobar_celda || celdas_local[n] === celdas_local[celda])
				{
					return false;
				}
			} //Si esta repetido, se sale de la funcion retornando false.
			else { numeros_usados[celdas_local[n]] = true; } //Si se esta usando, se setea como tal.
		 }
	}

	
	//Calculamos que no se repita nada en la columna de la celda:
	if (comprobar_columnas)
	{
		for (var n=1; n<=9; n++) { numeros_usados[n] = false; }                    
		for (var n=num_inicial_columna; n<=num_inicial_columna+72; n+=9)
		 {
			if (numeros_usados[celdas_local[n]] === true && !isNaN(celdas_local[n]) && celdas_local[n] != 0)
			{
				if (!solo_comprobar_celda || celdas_local[n] === celdas_local[celda])
				{
					return false;
				}
			} //Si esta repetido, se sale de la funcion retornando false.
			else { numeros_usados[celdas_local[n]] = true; } //Si se esta usando, se setea como tal.
		 }
	}
	
	//Si ha llegado hasta aqui es que todo funciona bien, asi que retorna true:                   
	return true;
 }
 

//Funcion que calcula que casillas estan libres y las devuelve en una matriz:
function calcular_casillas_libres()
 {
	var casillas_libres = [];
	var b = 0;
	for (var a=1; a<=81; a++) { if (celdas[a] === 0) { casillas_libres[b] = a; b++; } }
	return casillas_libres;
 }


//Funcion que soluciona el sudoku por backtracking (vuelta atras):
function solucionar_sudoku(celda)
 {
	//Si la celda es la primera:
	if (celda === 1)
	{
		//Calcula que celdas solo tienen una alternatia y la introduce:
		var numeros_unicos_encontrados;
		var numeros_encontrados;
		var ultimo_numero_valido_encontrado;
		do
		{
			numeros_unicos_encontrados = 0;
			//Recorre todo el sudoku desde el principio:
			for (var j = 1; j <= 81; j++)
			{
				//Si la celda esta vacia:
				if (celdas[j] === 0 || isNaN(celdas[j]))
				{
					//Prueba todos los numeros (del 1 al 9, ambos inclusive):
					numeros_encontrados = 0;
					ultimo_numero_valido_encontrado = 0;
					for (var h = 1; h <= 9; h++)
					{
						celdas[j] = h;
						if (validar_celda(j, celdas))
						{
							numeros_encontrados++;
							//Si se ha encontrado mas de un numero posible, se borra la celda y sale:.
							if (numeros_encontrados > 1)
							{
								celdas[j] = 0;
								break;
							}
							ultimo_numero_valido_encontrado = h;
						} else { celdas[j] = ultimo_numero_valido_encontrado; } //Se restaura el ultimo numero valido encontrado.
					}
					//Si se ha encontrado un numero y solo uno, es unico:
					if (numeros_encontrados === 1) { numeros_unicos_encontrados++; }
					//Si no se ha encontrado ningun numero o mas de uno, se borra la casilla:
					else { celdas[j] = 0; }
				}
			}
		} while (numeros_unicos_encontrados);
	}
	
	var sudoku_solucionado = false;
	
	//Si ya se ha solucionado el sudoku, se sale de la funcion retornando true:
	if (numeros_solucionados >= 81) { return true; }

	//Si la casilla ya esta llena, se vuelve a llamar a la funcion con la posterior (siempre que no este en la ultima celda, la 81):
	if (!isNaN(celdas[celda]) && celdas[celda] !== 0 && celda < 81)
	 {
	   sudoku_solucionado = solucionar_sudoku(celda+1);
	   //Si se ha solucionado el sudoku, se retorna true:
	   if (sudoku_solucionado) { return true; }
	   //...pero si no, se retorna false:
	   else { return false; }
	 }

	//Se crea una matriz con el numero del 1 al 8, y luego se baraja:
	var numeros_barajados = [];
	numeros_barajados = barajar(); //Se baraja.

	var es_valido = false;
	var e = 0;
	//Se realiza un bucle para probar numeros en la casilla:
	for (var e=0; e<=8; e++)
	 {
		//Se inserta el numero barajado en la celda:
		celdas[celda] = numeros_barajados[e];
		//Se comprueba si es valido:
		es_valido = validar_celda(celda, celdas);
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
	return false;
 }


//Funcion que baraja una matriz:
function barajar()
 {
	var numeros_barajados = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	var posicion_actual = 9;
	var posicion_aleatoria;
	var temporal;
	while (posicion_actual > 0)
	{
		//Creamos una posicion aleatoria:
		posicion_aleatoria = parseInt(Math.random() * 9);
		
		posicion_actual--;
		
		//Intercambia el numero de la posicion aleatoria por el de la posicion actual:
		temporal = numeros_barajados[posicion_actual];
		numeros_barajados[posicion_actual] = numeros_barajados[posicion_aleatoria];
		numeros_barajados[posicion_aleatoria] = temporal;
	}
	 
	//Se retorna la matriz barajada:
	return numeros_barajados;
 }

 
//Funcion que cambia la propiedad transition de una celda:
var ultimo_transition = null;
var celdas_transition_timeouts = [];
var ultimo_transition = [];
for (var x = 1; x <= 81; x++) { ultimo_transition[x] = null; }
var transition_por_defecto = "font-size 300ms, transform 300ms";
if (!casillas_con_transition_dinamico) { transition_por_defecto = "font-size 300ms"; }
function cambiar_transition(celda, transition, restaurar_ms)
{
	if (!supportsCSS3Transform()) { return; }
	if (ultimo_transition[celda] === transition) { return; }

	if (typeof(restaurar_ms) === "undefined" || restaurar_ms === null) { restaurar_ms = 1000; }
	
	if (!casillas_con_transition_dinamico && transition !== transition_por_defecto)
	{
		//cambiar_transition(celda, transition_por_defecto, restaurar_ms);
		return;
	}

	var celda_div = document.getElementById(celda);
	if (celda_div === null) { return; }

	clearTimeout(celdas_transition_timeouts[celda]);
	
	//Android fix:
	celda_div.style.MozTransition = "";
	celda_div.style.WebkitTransition = "";
	celda_div.style.OTransition = "";
	celda_div.style.KhtmlTransition = "";
	celda_div.style.MsTransition = "";

	if (CB_trim(transition) !== "")
	{
		celda_div.style.MozTransition = transition;
		celda_div.style.WebkitTransition = transition;
		celda_div.style.OTransition = transition;
		celda_div.style.KhtmlTransition = transition;
		celda_div.style.MsTransition = transition;
		ultimo_transition[celda] = ultimo_transition;
		if (transition !== transition_por_defecto)
		{
			celdas_transition_timeouts[celda] = setTimeout(function() { cambiar_transition(celda, transition_por_defecto); }, restaurar_ms);
		}
	}
}
 

//Funcion que muestra la solucuon del sudoku:
var mostrar_solucion_casillas_timeout;
function mostrar_solucion()
 {
	//Se alterna para que funcione como un boton de on/off (mostrar/ocultar solucion), alternando a la opcion contraria:
	ver_solucion = (ver_solucion) ? false : true;

	clearTimeout(animacion_pintar_celda);
	clearTimeout(mostrar_solucion_casillas_timeout);

	//Si se ha elegido mostrar la solucion, se muestra:
	if (ver_solucion)
	 {
		 //Se muestra el mensaje de cargando:
		 mostrar_mensaje(TR_loading[idioma], true);

		 if (!usar_botones)
		 {
			poner_HTML(document.getElementById("div_solucion"), TR_hide_solution[idioma]);
		 }
		 else { document.getElementById("div_solucion").value = TR_hide_solution[idioma]; }
		 document.getElementById('div_solucion').title = TR_hide_sudoku_solved[idioma];
		 
		 for (var j=1; j<=81; j++)
		  {
			cambiar_transition(j, "font-size 300ms, transform 300ms");
		  
			 if (sudoku_solucion[j] != 0 && !isNaN(sudoku_solucion[j]))
			  {
				poner_HTML(document.getElementById(j), sudoku_solucion[j]);
				//Si el numero era fijo (numero inicial), se muestra de color rojo:
				if (sudoku_solucion[j] == sudoku_inicial[j]) { document.getElementById(j).style.color = "#aa0000"; }
				//Y si el numero estaba escondido y forma parte de la solucion, se muestra de otro color:
				else { document.getElementById(j).style.color = "#dd7080"; }
			  }
			  document.getElementById(j).style.fontSize = celda_font_size;
			  document.getElementById(j).style.cursor = "default";
		  }

		if (marcar_casillas_erroneas)
		{
			mostrar_solucion_casillas_timeout = setTimeout(restaurar_celdas_erroneas, 300);
		}

		//Se deja de mostrar el mensaje de cargando:
		mostrar_mensaje("", false);
	 }
	//...pero si se ha elegido ocultar, se oculta:
	else
	 {
		 //Se muestra el mensaje de cargando:
		 mostrar_mensaje(TR_loading[idioma], true);

		 if (!usar_botones)
		 {
			poner_HTML(document.getElementById("div_solucion"), TR_see_solution[idioma]);
		 }
		 else { document.getElementById("div_solucion").value = TR_see_solution[idioma]; }
		 document.getElementById('div_solucion').title = TR_show_sudoku_solved[idioma];
		 
		 for (var j=1; j<=81; j++)
		  {
			//Android fix:
			cambiar_transition(j, "font-size 300ms, transform 300ms");
		  
			 if (celdas[j] != 0 && !isNaN(celdas[j]))
			  {
				poner_HTML(document.getElementById(j), celdas[j]);
				//Si el numero era fijo (numero inicial), se muestra de color rojo:
				if (celdas[j] == sudoku_inicial[j]) { document.getElementById(j).style.color = "#aa0000"; }
				//...y si no, de color gris:
				else { document.getElementById(j).style.color = "#222222"; }
			  }
			 else if (celdas[j] === 0) { poner_HTML(document.getElementById(j), "&nbsp;"); document.getElementById(j).style.color = "#333333"; }
			 document.getElementById(j).style.fontSize = celda_font_size;
			 
			 //var color_celda = document.getElementById(j).style.color;
			 //if (color_celda != 'rgb(170, 0, 0)' && color_celda != 'rgb(170,0,0)' && color_celda != '#aa0000' && color_celda != '#AA0000' && color_celda != '#dd7080' && color_celda != '#DD7080' && color_celda != 'rgb(221, 112, 128)' && color_celda != 'rgb(221,112,128)')
			 if (typeof(sudoku_inicial[j]) === "undefined" || sudoku_inicial[j] === null || isNaN(sudoku_inicial[j]) || sudoku_inicial[j] == 0)
			 {
				try { document.getElementById(j).style.cursor = "pointer"; document.getElementById(j).style.cursor = "hand"; }
				catch (e) { try { document.getElementById(j).style.cursor = "hand"; } catch (e) {} }
			 }
			 else
			 {
				document.getElementById(j).style.cursor = "default";
			 }
		  }

		if (marcar_casillas_erroneas)
		{
			mostrar_solucion_casillas_timeout = setTimeout(marcar_zonas_erroneas, 300);
		}
		  
		//Se deja de mostrar el mensaje de cargando:
		mostrar_mensaje("", false);
	 }
	
	//Vuelve el color del "enlace" a su color predeterminado (si no se quedaria en rojo si se arrastrara con el raton, etc. en algunos navegadores y determinadas circunstancias):
	document.getElementById('div_solucion').style.color = '#222222';
 }


//Funcion que intenta solucionar el sudoku introducido:
var mostrando_solucion_calculada = false;
var mostrando_solucion_calculada_finalizado = true;
var mostrar_solucion_mensaje_timeouts = [];
var sudoku_backup = [];
var finalizar_mostrar_solucion_timeout;
function intentar_solucionar()
 {
	if (mostrando_solucion_calculada) { return; }
	
	if (numeros_en_sudoku >= 81) { return; }
	
	clearTimeout(finalizar_mostrar_solucion_timeout);
	
	document.getElementById("div_solucionar").style.visibility = "hidden";
	document.getElementById("div_solucionar").style.display = "none";
	
	mostrando_solucion_calculada_finalizado = false;
	mostrando_solucion_calculada = true;
	cambiar_hash("#mostrando_solucion_calculada");

	//Por si se estaba mostrando, se deja de mostrar la solucion:
	if (ver_solucion) { mostrar_solucion(); }
	
	document.getElementById('div_solucionar').style.color='#222222';
	
	//Se muestra el mensaje de solucionando:
	mostrar_mensaje(TR_solving[idioma], true);

	if (!validar_sudoku(true))
	{
		mostrando_solucion_calculada_finalizado = true;
		cambiar_hash("#inicio");
		mostrando_solucion_calculada = false;
		mostrar_mensaje("", false);
		alerta(TR_unable_to_solve_no_solution[idioma]);
		document.getElementById("div_solucionar").style.visibility = "visible";
		document.getElementById("div_solucionar").style.display = "block";
		return;
	}
	
	//Se calcula cuantos numeros ya hay introducidos, y ademas guarda el sudoku en una matriz:
	var numeros_introducidos = 0;
	sudoku_backup = [];
	for (var r=1; r<=81; r++)
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
		for (var r=1; r<=81; r++)
		 {
			if (celdas[r] != 0 && !isNaN(celdas[r]))
			 {
				poner_HTML(document.getElementById(r), celdas[r]);
				if (celdas[r] == sudoku_backup[r]) { document.getElementById(r).style.color = "#aa0000"; }
				else { document.getElementById(r).style.color = "#dd7080"; }
			 }
			else if (celdas[r] === 0) { poner_HTML(document.getElementById(r), "&nbsp;"); document.getElementById(r).style.color = "#333333"; }
		 }

		//Se deja de mostrar el mensaje de cargando:
		for (var u = mostrar_solucion_segundos; u >= 0; u--)
		{
			//setTimeout("mostrar_mensaje(TR_sudoku_has_solution[idioma] + ' " + u + " ' + TR_seconds[idioma] + '...', true);", (mostrar_solucion_segundos - u) * 1000);
			new function()
			{
				var u_local = u;
				var solo_poner_mensaje = false;
				var mensaje;
				mostrar_solucion_mensaje_timeouts[u] = setTimeout(
					function()
					{
						solo_poner_mensaje = (u_local % 2 !== 0);
						mensaje = TR_sudoku_has_solution[idioma] + " " + u_local + " " + TR_seconds[idioma] + "...";
						if (modo_ligero_ultra && solo_poner_mensaje) { mensaje = "..."; }
						mostrar_mensaje(mensaje, true, false, solo_poner_mensaje, false, false);
					}, (mostrar_solucion_segundos - u) * 1000);
			}();
		}
		
		//Se alerta para hacer una pausa y poder ver la solucion:
		finalizar_mostrar_solucion_timeout = setTimeout(function(){
			if (mostrando_solucion_calculada_finalizado || !mostrando_solucion_calculada) { return; }
			for (var u = mostrar_solucion_segundos; u >= 0; u--)
			{
				clearTimeout(mostrar_solucion_mensaje_timeouts[u]);
			}
			//...y despues de la pausa, se restaura el sudoku anterior gracias a la copia de seguridad:
			for (var r=1; r<=81; r++)
			 {
				celdas[r] = sudoku_backup[r];
				if (celdas[r] != 0 && !isNaN(celdas[r]))
				 {
					poner_HTML(document.getElementById(r), celdas[r]);
					if (celdas[r] == sudoku_inicial[r]) { document.getElementById(r).style.color = "#aa0000"; }
					else { document.getElementById(r).style.color = "#333333"; }
				 }
				else if (celdas[r] === 0) { poner_HTML(document.getElementById(r), "&nbsp;"); document.getElementById(r).style.color = "#333333"; }
			 }
			
			//Se deja de mostrar el mensaje de cargando:
			setTimeout(function() { mostrar_mensaje("", false); }, 10);
			
			mostrando_solucion_calculada_finalizado = true;
			cambiar_hash("#inicio");
			mostrando_solucion_calculada = false;
			document.getElementById("div_solucionar").style.visibility = "visible";
			document.getElementById("div_solucionar").style.display = "block";
		}, mostrar_solucion_segundos * 1000 + 100);
	 }
	//...pero si el sudoku no ha podido ser solucionado o no es valido, se notifica:
	else
	{
		//Se restaura el sudoku anterior gracias a la copia de seguridad:
		for (var r=1; r<=81; r++)
		 {
			celdas[r] = sudoku_backup[r];
			if (celdas[r] != 0 && !isNaN(celdas[r]))
			 {
				poner_HTML(document.getElementById(r), celdas[r]);
				if (celdas[r] == sudoku_inicial[r]) { document.getElementById(r).style.color = "#aa0000"; }
				else { document.getElementById(r).style.color = "#333333"; }
			 }
			else if (celdas[r] == 0) { poner_HTML(document.getElementById(r), "&nbsp;"); document.getElementById(r).style.color = "#333333"; }
		 }
		 
		mostrando_solucion_calculada_finalizado = true;
		cambiar_hash("#inicio");
		mostrando_solucion_calculada = false;
		
		mostrar_mensaje("", false);
		alerta(TR_unable_to_solve_no_solution[idioma]);
		document.getElementById("div_solucionar").style.visibility = "visible";
		document.getElementById("div_solucionar").style.display = "block";
	}
	
	//Vuelve el color del "enlace" a su color predeterminado (si no se quedaria en rojo si se arrastrara con el raton, etc. en algunos navegadores y determinadas circunstancias):
	document.getElementById('div_solucion').style.color = '#222222';
 }

 
 
 //Funcion que muestra las hotkeys:
 var mostrar_keys_timeout;
 var mostrandoAnimacionKeys = false;
 function mostrar_hotkeys(forzar)
 {
	if (typeof(forzar) === "undefined" || forzar === null) { forzar = false; }
 
	if (mostrando_solucion_calculada) { return; }

	if (mostrandoAnimacionKeys && !forzar) { return; }

	var div_solucion_hotkey = document.getElementById("div_solucion_hotkey");
	if (div_solucion_hotkey === null) { return; }
	var div_solucionar_hotkey = document.getElementById("div_solucionar_hotkey");
	if (div_solucionar_hotkey === null) { return; }
	var div_checkear_hotkey = document.getElementById("div_checkear_hotkey");
	if (div_checkear_hotkey === null) { return; }
	var div_opciones_hotkey = document.getElementById("div_opciones_hotkey");
	if (div_opciones_hotkey === null) { return; }
	var boton_esconder_panel_hotkey = document.getElementById("boton_esconder_panel_hotkey");
	if (boton_esconder_panel_hotkey === null) { return; }
	var numeros_iniciales_hotkey = document.getElementById("numeros_iniciales_hotkey");
	if (numeros_iniciales_hotkey === null) { return; }

	clearTimeout(mostrar_keys_timeout);
	clearTimeout(ocultar_keys_timeout);
	
	if (!juego_ocupado())
	{
		if (numeros_iniciales < 81)
		{
			div_solucion_hotkey.className = "hotkey_invisible";
			div_solucion_hotkey.style.visibility = "visible";
			div_solucion_hotkey.style.display = "block";
			
			var numeros_en_sudoku_local = numeros_en_sudoku;
			if (numeros_en_sudoku_local < 81)
			{
				div_solucionar_hotkey.className = "hotkey_invisible";
				div_solucionar_hotkey.style.visibility = "visible";
				div_solucionar_hotkey.style.display = "block";
			}
			
			div_checkear_hotkey.className = "hotkey_invisible";
			div_checkear_hotkey.style.visibility = "visible";
			div_checkear_hotkey.style.display = "block";
			div_opciones_hotkey.className = "hotkey_invisible";
			div_opciones_hotkey.style.visibility = "visible";
			div_opciones_hotkey.style.display = "block";
			
			setTimeout(
				function()
				{
					div_solucion_hotkey.className = "hotkey_invisible"; //IE6 FIX.
					if (numeros_en_sudoku_local < 81) { div_solucionar_hotkey.className = "hotkey_invisible"; } //IE6 FIX.
					div_checkear_hotkey.className = "hotkey_invisible"; //IE6 FIX.
					div_opciones_hotkey.className = "hotkey_invisible"; //IE6 FIX.
					
					div_solucion_hotkey.className = "hotkey_visible";
					if (numeros_en_sudoku_local < 81) { div_solucionar_hotkey.className = "hotkey_visible"; }
					div_checkear_hotkey.className = "hotkey_visible";
					div_opciones_hotkey.className = "hotkey_visible";
				}, 10);
		}
		
		boton_esconder_panel_hotkey.className = "hotkey_invisible";
		boton_esconder_panel_hotkey.style.visibility = "visible";
		boton_esconder_panel_hotkey.style.display = "block";

		numeros_iniciales_hotkey.className = "hotkey_invisible";
		numeros_iniciales_hotkey.style.visibility = "visible";
		numeros_iniciales_hotkey.style.display = "block";

		setTimeout(
			function()
			{
				boton_esconder_panel_hotkey.className = "hotkey_invisible"; //IE6 FIX.
				numeros_iniciales_hotkey.className = "hotkey_invisible"; //IE6 FIX.

				boton_esconder_panel_hotkey.className = "hotkey_visible";
				numeros_iniciales_hotkey.className = "hotkey_visible";
			}, 10);
		
		mostrandoAnimacionKeys = true;
		setTimeout(function() { mostrandoAnimacionKeys = false; }, 1400);
	}
	mostrar_keys_timeout = setTimeout(ocultar_hotkeys, 2000);	
}
 
 var ocultar_keys_timeout;
 function ocultar_hotkeys()
 {
 	var div_solucion_hotkey = document.getElementById("div_solucion_hotkey");
	if (div_solucion_hotkey === null) { return; }
	var div_solucionar_hotkey = document.getElementById("div_solucionar_hotkey");
	if (div_solucionar_hotkey === null) { return; }
	var div_checkear_hotkey = document.getElementById("div_checkear_hotkey");
	if (div_checkear_hotkey === null) { return; }
	var div_opciones_hotkey = document.getElementById("div_opciones_hotkey");
	if (div_opciones_hotkey === null) { return; }
	var boton_esconder_panel_hotkey = document.getElementById("boton_esconder_panel_hotkey");
	if (boton_esconder_panel_hotkey === null) { return; }
	var numeros_iniciales_hotkey = document.getElementById("numeros_iniciales_hotkey");
	if (numeros_iniciales_hotkey === null) { return; }

	clearTimeout(mostrar_keys_timeout);
	clearTimeout(ocultar_keys_timeout);
	
	div_solucion_hotkey.className = "hotkey_invisible";
	div_solucionar_hotkey.className = "hotkey_invisible";
	div_checkear_hotkey.className = "hotkey_invisible";
	div_opciones_hotkey.className = "hotkey_invisible";
	boton_esconder_panel_hotkey.className = "hotkey_invisible";
	numeros_iniciales_hotkey.className = "hotkey_invisible";

	ocultar_keys_timeout = setTimeout(
							function()
							{
								div_checkear_hotkey.style.visibility = "hidden";
								div_checkear_hotkey.style.display = "none";
								div_opciones_hotkey.style.visibility = "hidden";
								div_opciones_hotkey.style.display = "none";
								div_solucion_hotkey.style.visibility = "hidden";
								div_solucion_hotkey.style.display = "none";
								div_solucionar_hotkey.style.visibility = "hidden";
								div_solucionar_hotkey.style.display = "none";
								boton_esconder_panel_hotkey.style.visibility = "hidden";
								boton_esconder_panel_hotkey.style.display = "none";
								numeros_iniciales_hotkey.style.visibility = "hidden";
								numeros_iniciales_hotkey.style.display = "none";
							}, 1000);
 }
 
 
//Funcion que ocurre al pulsar una tecla:
var tecla_pulsada_semaforo_rojo = false;
var tecla_pulsada_semaforo_rojo_timeout;
function tecla_pulsada(e)
{
	var windowWidth = window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth || screen.availWidth || screen.width;
	var windowHeight = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight || screen.availHeight || screen.height;

	if (tecla_pulsada_semaforo_rojo === true) { return; }
	
	clearTimeout(tecla_pulsada_semaforo_rojo_timeout);
	tecla_pulsada_semaforo_rojo = true;
	tecla_pulsada_semaforo_rojo_timeout = setTimeout(function() { tecla_pulsada_semaforo_rojo = false; }, 100);
	
	if (!e)
	{
		if (typeof(event) != "undefined") { e = event; }
		else if (typeof(window.event) != "undefined") { e = window.event; }
		else if (typeof(Event) != "undefined") { e = Event; }
	}

	//Capturamos la tacla pulsada, segun navegador:
	var unicode = 17;
	if (typeof(e) !== "undefined" && typeof(e.keyCode) !== "undefined") { unicode = e.keyCode; }
	else if (window.Event && e.which) { unicode = e.which; }
	//else { var unicode = 17; } //Si no existe, por defecto se utiliza el Control.
	
	//Muestra las hotkeys:
	mostrar_hotkeys();

	if (usar_botones)
	{
		if (unicode === 9) //Tecla "TAB".
		{
			if (celda_enfocada)
			{
				var celda_anterior_elegida = document.getElementById(celda_enfocada);
				if (celda_anterior_elegida !== null)
				{
					//celda_anterior_elegida.style.background = (celda_enfocada % 2 === 0) ? "#dddddd" : "#eeeeee";
					resaltar_celda(celda_enfocada, false);
					
					numeros_posibles_ocultar();
				}
				celda_enfocada = 0;
			}
		}
		else if (unicode === 38 || unicode === 40 || unicode === 37 || unicode === 39 || unicode === 175 || unicode === 176 || unicode === 177 || unicode === 178)
		{
			document.getElementById("div_solucion").blur();
			document.getElementById("div_solucionar").blur();
			document.getElementById("div_checkear").blur();
		}
	}
	
	if (!mostrando_solucion_calculada_finalizado || mostrando_solucion_calculada)
	{
		if (unicode === 27 || unicode === 13 || unicode === 32 || unicode === 38 || unicode === 40 || unicode === 37 || unicode === 39 || unicode === 175 || unicode === 176 || unicode === 177 || unicode === 178) //"RETURN", "SPACEBAR", "ESC" o "ARROW KEYS".
		{
			parar_intentar_solucionar();
		}
		return;
	}
	//Codigos: "1" (97, 49, 35), "2" (50, 40, 98), "3" (51, 99, 34), "4" (37, 100, 52), "5" (53, 101, 12), "6" (39, 54, 102), "7" (55, 103, 36), "8" (38, 104, 56), "9" (105, 57, 33), "0" (45, 96, 48).
	var tecla_se_ha_pulsado = false;
	if (unicode === 86 && numeros_iniciales < 81) //Tecla "V".
	{
		if (typeof(div_solucion_onclick) === "function") { div_solucion_onclick(); }
	}
	else if (unicode === 83 && numeros_iniciales < 81 && numeros_en_sudoku < 81) //Tecla "S".
	{
		if (typeof(div_solucionar_onclick) === "function") { div_solucionar_onclick(); }
	}
	else if (unicode === 67 && numeros_iniciales < 81) //Tecla "C".
	{
		if (typeof(div_checkear_onclick) === "function") { div_checkear_onclick(); }
	}
	else if (unicode === 77) //Tecla "M".
	{
		if (!mostrando_opciones)
		{
			if (typeof(div_opciones_onclick) === "function") { div_opciones_onclick(); }
		}
		else if (!mostrando_alerta) { ocultar_opciones(); }
	}
	else if (unicode === 72) //Tecla "H".
	{
		if (typeof(expandir_contraer_panel) === "function") { expandir_contraer_panel(); }
	}
	else if (unicode === 78) //Tecla "N".
	{
		if (!juego_ocupado())
		{
			var numeros_iniciales_select = document.getElementById("numeros_iniciales");
			if (numeros_iniciales_select !== null)
			{
				expandir_contraer_panel(true);
				numeros_iniciales_select.focus();
			}
		}
	}
	else if (unicode === 88 && (mostrando_alerta || mostrando_confirmar)) //Tecla "X".
	{
		if (mostrando_alerta)
		{
			if (typeof(alerta_function) === "function") { alerta_function(); }
		}
		else if (mostrando_confirmar)
		{
			if (typeof(confirmar_noFunction) === "function") { confirmar_noFunction(); }
		}
	}
	else if (unicode === 27) //Tecla "ESC".
	{
		if (mostrando_alerta)
		{
			if (typeof(alerta_function) === "function") { alerta_function(); }
		}
		else if (mostrando_confirmar)
		{
			if (typeof(confirmar_noFunction) === "function") { confirmar_noFunction(); }
		}
		else if (mostrando_menu)
		{
			var div_menu_numeros = document.getElementById('div_menu_numeros');
			if (div_menu_numeros !== null)
			{
				div_menu_numeros.style.opacity = 0;
				div_menu_numeros.style.visibility = 'hidden';
				if (celda_seleccionada)
				{
					elemento_onmouseover(celda_seleccionada, mostrar_numeros_posibles_activado);
					numeros_posibles_mostrar(celda_seleccionada, true);
					marcar_casillas_importantes(celda_seleccionada, true);
				}
				desmarcar_menu_numeros();
			}
			mostrando_menu = false;
			cambiar_hash('#inicio');
			//document.getElementById(celda_seleccionada).style.background = (celda_seleccionada % 2 === 0) ? '#dddddd' : '#eeeeee';
		}
		else if (mostrando_opciones) { ocultar_opciones(); }
		else
		{
			var numeros_iniciales_select = document.getElementById("numeros_iniciales");
			if (numeros_iniciales_select !== null)
			{
				numeros_iniciales_select.value = numeros_iniciales;
				numeros_iniciales_select.options[numeros_iniciales].selected = true;
				numeros_iniciales_select.blur();
			}
			
			mostrar_opciones();
		}
		return;
	}
	else if (unicode === 13 || unicode === 32) //Tecla "ENTER" ("RETURN") o "SPACEBAR".
	{
		if (mostrando_alerta)
		{
			if (typeof(alerta_function) === "function") { alerta_function(); }
			return;
		}
		else if (mostrando_opciones) { ocultar_opciones(); return; }
		//else if (mostrando_confirmar) { return; }
	}
	else if (unicode === 97 || unicode === 49 || unicode === 35) { opcion_activada = 1; tecla_se_ha_pulsado = true; } //Tecla 1.
	else if (unicode === 50 || unicode === 98) { opcion_activada = 2; tecla_se_ha_pulsado = true; } //Tecla 2.
	else if (unicode === 51 || unicode === 99 || unicode === 34) { opcion_activada = 3; tecla_se_ha_pulsado = true; } //Tecla 3.
	else if (unicode === 100 || unicode === 52) { opcion_activada = 4; tecla_se_ha_pulsado = true; } //Tecla 4.
	else if (unicode === 53 || unicode === 101 || unicode === 12) { opcion_activada = 5; tecla_se_ha_pulsado = true; } //Tecla 5.
	else if (unicode === 54 || unicode === 102) { opcion_activada = 6; tecla_se_ha_pulsado = true; } //Tecla 6.
	else if (unicode === 55 || unicode === 103 || unicode === 36) { opcion_activada = 7; tecla_se_ha_pulsado = true; } //Tecla 7.
	else if (unicode === 104 || unicode === 56) { opcion_activada = 8; tecla_se_ha_pulsado = true; } //Tecla 8.
	else if (unicode === 105 || unicode === 57 || unicode === 33) { opcion_activada = 9; tecla_se_ha_pulsado = true; } //Tecla 9.
	else if (unicode === 45 || unicode === 96 || unicode === 48 || unicode === 88 || unicode === 120) { opcion_activada = 10; tecla_se_ha_pulsado = true; } //Tecla 0 o X.

	if (tecla_se_ha_pulsado)
	{
		//if (document.getElementById('div_menu_numeros').style.visibility === "visible")
		if (mostrando_menu)
		{
			numero_escogido(opcion_activada);
			mostrando_menu = false;
		}
		else if (!mostrando_opciones && !ver_solucion)
		{
			if (celda_enfocada)
			{
				pintar_celda(celda_enfocada, 'activar', false, true);
				numeros_posibles_mostrar(celda_enfocada, true);
			}
		}
	}
	else if (!ver_solucion && !mostrando_alerta && !mostrando_confirmar && !mostrando_mensaje && !mostrando_solucion_calculada)
	{
		var pulsada_tecla_direccion = false;
		var direccion = "";
		if (unicode === 38 || unicode === 175) { direccion = "arriba"; pulsada_tecla_direccion = true; }
		else if (unicode === 40 || unicode === 176) { direccion = "abajo"; pulsada_tecla_direccion = true; }
		else if (unicode === 37 || unicode === 178) { direccion = "izquierda"; pulsada_tecla_direccion = true; }
		else if (unicode === 39 || unicode === 177) { direccion = "derecha"; pulsada_tecla_direccion = true; }
		if (pulsada_tecla_direccion)
		{
			if (!mostrando_menu && !mostrando_opciones)
			{
				var celda_anterior = celda_enfocada;
				//var celda_div_anterior = document.getElementById(celda_enfocada);
				var celda_elegida = parseInt(celda_enfocada);
				if (!celda_elegida) { celda_elegida = 1; }
				else
				{
					if (direccion === "izquierda") { celda_elegida--; }
					if (direccion === "derecha") { celda_elegida++; }
					if (direccion === "abajo") { celda_elegida += 9; }
					if (direccion === "arriba") { celda_elegida -= 9; }
					
					if (celda_elegida > 81)
					{
						celda_elegida %= 82;
						celda_elegida++;
					}
					else if (celda_elegida < 1) { celda_elegida = 81 + celda_elegida; }
				}
			
				/*
				var celda_div = document.getElementById(celda_elegida);
				if (celda_div !== null)
				{
					celda_div.style.background = "#aaaaaa";
					celda_enfocada = celda_elegida;
					if (celda_div_anterior !== null && celda_anterior)
					{
						celda_div_anterior.style.background = (celda_anterior % 2 === 0) ? "#dddddd" : "#eeeeee";
					}

					numeros_posibles_mostrar(celda_elegida);
					marcar_casillas_importantes(celda_elegida, true);
					//if (typeof(elemento_onmousemove) === "function") { elemento_onmousemove(celda_elegida); }
				}
				*/
				resaltar_celda(celda_elegida, true);
				celda_enfocada = celda_elegida;
				if (celda_anterior) { resaltar_celda(celda_anterior, false); }
				/*
				if (ultima_celda_resaltada && parseInt(ultima_celda_resaltada) !== parseInt(celda_elegida))
				{
					resaltar_celda(ultima_celda_resaltada, false);
					ultima_celda_resaltada = celda_elegida;
				}
				*/
				numeros_posibles_mostrar(celda_elegida);
				marcar_casillas_importantes(celda_elegida, true);
			}
			else if (mostrando_menu)
			{
				var numero_siguiente = numero_anterior;
				if (direccion === "izquierda") { numero_siguiente--; if (numero_siguiente < 1) { numero_siguiente = 10; } }
				if (direccion === "derecha") { numero_siguiente++; if (numero_siguiente > 10) { numero_siguiente = 1; } }
				if (direccion === "abajo") { if (numero_anterior === 0) { numero_siguiente = 2; } else { numero_siguiente += 3; } }
				if (direccion === "arriba") { if (numero_anterior === 0) { numero_siguiente = 10; } else { numero_siguiente -= 3; } if (numero_anterior === 10) { numero_siguiente++; } }
				if (numero_siguiente > 9) { numero_siguiente = 10; }
				if (numero_siguiente < 1) { numero_siguiente = numero_anterior; }
				
				if (numero_anterior !== numero_siguiente)
				{
					marcar_menu_numeros(numero_siguiente);
				}
			}
		}
		else if (unicode === 13 || unicode === 32) //Tecla "ENTER" ("RETURN") o "SPACEBAR".
		{
			if (!mostrando_menu && !mostrando_opciones)
			{
				if (celda_enfocada && typeof(elemento_onclick) === "function")
				{
					//mostrando_menu = true;
					elemento_onclick(celda_enfocada);
				}
			}
			else if (mostrando_menu)
			{
				if (!isNaN(numero_anterior) && numero_anterior >= 1 && numero_anterior <= 10)
				{
					numero_escogido(numero_anterior);
					if (usar_botones) { setTimeout(function() { mostrando_menu = false; }, 10); }
					else { mostrando_menu = false; }
				}
			}
		}
	}
}


//Funcion que muestra los numeros posibles en la posicion correcta:
//var numeros_posibles_mostrar_timeout = [];
var numeros_posibles_mostrar_timeout;
var numeros_posibles_mostrar_visible = false;
var numeros_posibles_ultima_celda = 0;
//var numeros_posibles_mostrar_eventos_timeout;
function numeros_posibles_mostrar(celda, forzar, exterior)
{
	if (typeof(forzar) === "undefined" || forzar === null) { forzar = false; }
	if (typeof(exterior) === "undefined" || exterior === null) { exterior = true; }

	if (!mostrar_numeros_posibles_activado) { return; }
	celda = parseInt(celda);
	if (isNaN(celda) || celda <= 0) { return; }

	var celda_div = document.getElementById(celda);
	if (celda_div === null) { return; }
	var color_celda = celda_div.style.color;

	if (celda === numeros_posibles_ultima_celda && !forzar) { return; }
	numeros_posibles_ultima_celda = celda;

	//Primero se ocultan los numeros:
	clearTimeout(numeros_posibles_mostrar_timeout);
	//numeros_posibles_ocultar();

	//Si la celda no es fija (no la ha puesto el juego), se muestran los numeros:s
	if (typeof(sudoku_inicial[celda]) === "undefined" || sudoku_inicial[celda] === null || isNaN(sudoku_inicial[celda]) || sudoku_inicial[celda] == 0)
	//if (color_celda != "rgb(170, 0, 0)" && color_celda != "rgb(170,0,0)" && color_celda != "#aa0000" && color_celda != "#AA0000" && color_celda != "#dd7080" && color_celda != "#DD7080" && color_celda != "rgb(221, 112, 128)" && color_celda != "rgb(221,112,128)")
	{
		if (exterior || modo_ligero_ultra)
		{
			var numeros_posibles_exterior_div = document.getElementById("numeros_posibles_exterior");
			if (numeros_posibles_exterior_div === null) { exterior = false; }
		}
		
		if (!modo_ligero_ultra)
		{
			var zona_juego_div = document.getElementById("zona_juego");
			var numeros_posibles_div = document.getElementById("numeros_posibles");
			var numeros_posibles_capa_div = document.getElementById("numeros_posibles_capa");
			if (zona_juego_div === null || celda_div === null || numeros_posibles_div === null || numeros_posibles_capa_div === null) { return; }
			
			//Pone los events:
			//numeros_posibles_div.onclick = function() { if (celda_div.onclick) { elemento_onclick(celda); } };

			if (celda_div.onmousedown)
			{
				//clearTimeout(numeros_posibles_mostrar_eventos_timeout);
				//celda_div.onmousedown = null;
				//numeros_posibles_div.onmousedown = null;
				//numeros_posibles_mostrar_eventos_timeout = setTimeout(
					//function()
					//{
						numeros_posibles_capa_div.onmousedown = function() { elemento_onclick(celda, true); };
					//}, 500); //Retraso para que no se ejecute el evento en algunos moviles!
			}

			//numeros_posibles_div.ontouchstart = function() { if (celda_div.ontouchstart) { elemento_onclick(celda); } };
			if (celda_div.onmouseover)
			{
				//numeros_posibles_div.onmouseover = null;
				//setTimeout(
				//function(){
				numeros_posibles_capa_div.onmouseover = function() { elemento_onmouseover(celda); };
				//}, 100);
			}

			if (celda_div.onmouseout)
			{
				//celda_div.onmouseout = null;
				numeros_posibles_capa_div.onmouseout = function() { elemento_onmouseout(celda, true); };
			}
			
			numeros_posibles_capa_div.onblur = function() { numeros_posibles_ocultar(); };
		}
		
		//Desactiva los numeros seleccionados por el ordenador o usuario y activa los posibles:
		var numeros_validos = calcular_posibles(celda);
		var numeros_validos_usuario = calcular_posibles(celda, celdas); //Teniendo en cuenta los elegidos por el usuario.
		
		var numero_posible_div;
		for (var x = 1; x <= 9; x++)
		{
			numero_posible_div = document.getElementById("numeros_posibles_" + x);
			if (exterior || modo_ligero_ultra) { numero_posible_div_exterior = document.getElementById("numeros_posibles_" + x + "_exterior"); }
			if (numero_posible_div !== null && (!exterior && !modo_ligero_ultra || numero_posible_div_exterior !== null))
			{
				if (numeros_validos[x] === true && numeros_validos_usuario[x] === true)
				{
					if (!modo_ligero_ultra) { numero_posible_div.className = "no_seleccionable mostrar_numeros_posible"; }
					if (exterior || modo_ligero_ultra) { numero_posible_div_exterior.className = "no_seleccionable mostrar_numeros_posible"; }
				}
				else if (numeros_validos[x] === true)
				{
					//numero_posible_div.className = "no_seleccionable mostrar_numeros_posible";
					if (mostrar_numeros_posibles_propios_activado)
					{
						if (!modo_ligero_ultra) { numero_posible_div.className = "no_seleccionable mostrar_numeros_usuario"; }
						if (exterior || modo_ligero_ultra) { numero_posible_div_exterior.className = "no_seleccionable mostrar_numeros_usuario"; }
					}
					else
					{
						if (!modo_ligero_ultra) { numero_posible_div.className = "no_seleccionable mostrar_numeros_posible"; }
						if (exterior || modo_ligero_ultra) { numero_posible_div_exterior.className = "no_seleccionable mostrar_numeros_posible"; }
					}
					//new function(numero_posible_div) {
					//numeros_posibles_mostrar_timeout[x] = setTimeout(function() { numero_posible_div.style.fontColor = "#ffffff"; }, 500);
					//}(numero_posible_div);
				}
				else
				{
					if (!modo_ligero_ultra) { numero_posible_div.className = "no_seleccionable mostrar_numeros_imposible"; }
					if (exterior || modo_ligero_ultra) { numero_posible_div_exterior.className = "no_seleccionable mostrar_numeros_imposible"; }
					//new function(numero_posible_div) {
					//numeros_posibles_mostrar_timeout[x] = setTimeout(function() { numero_posible_div.style.fontColor = "#bbbbbb"; }, 500);
					//}(numero_posible_div);
				}
				if (celdas[celda] === x)
				{
					if (!modo_ligero_ultra) { numero_posible_div.className += " mostrar_numeros_posible_seleccionado"; }
					if (exterior || modo_ligero_ultra) { numero_posible_div_exterior.className += " mostrar_numeros_posible_seleccionado"; }
				}
			}
		}

		//Muestra los numeros:
		if (!modo_ligero_ultra)
		{
			numeros_posibles_capa_div.style.top = numeros_posibles_div.style.top = parseInt(zona_juego_div.style.top) + parseInt(celda_div.style.top) + "px";
			numeros_posibles_capa_div.style.left = numeros_posibles_div.style.left = parseInt(zona_juego_div.style.left) + parseInt(celda_div.style.left) + "px";
		}

		if (exterior || modo_ligero_ultra)
		{
			numeros_posibles_exterior_div.style.visibility = "visible";
			numeros_posibles_exterior_div.style.display = "block";
			mostrando_numeros_exteriores = true;
		}
		
		numeros_posibles_mostrar_timeout =
			setTimeout(
				function()
				{
					if (!modo_ligero_ultra)
					{
						numeros_posibles_capa_div.style.visibility = numeros_posibles_div.style.visibility = "visible";
						numeros_posibles_capa_div.style.display = numeros_posibles_div.style.display = "block";
					}
					numeros_posibles_mostrar_visible = true;
				}
			, 100); //Retraso para que no se ejecuten sus eventos en algunos moviles!
	}
	//...pero si no, se ocultan:
	else
	{
		numeros_posibles_ocultar();
	}
}


//Funcion que quita los numeros posibles exteriores:
var mostrando_numeros_exteriores = false;
function quitar_numeros_exteriores()
{
	var numeros_posibles_exterior_div = document.getElementById("numeros_posibles_exterior");
	if (numeros_posibles_exterior_div !== null)
	{
		mostrando_numeros_exteriores = false;
		numeros_posibles_exterior_div.style.visibility = "hidden";
		numeros_posibles_exterior_div.style.display = "none";
	}
}


//Funcion que muestra los numeros posibles exteriores:
function mostrar_numeros_exteriores()
{
	var numeros_posibles_exterior_div = document.getElementById("numeros_posibles_exterior");
	if (numeros_posibles_exterior_div !== null)
	{
		mostrando_numeros_exteriores = true;
		numeros_posibles_exterior_div.style.visibility = "visible";
		numeros_posibles_exterior_div.style.display = "block";
	}
}


//Funcion que devuelve array con posibles numeros que puede contener una celda dada (asumiendo que esta vacia):
function calcular_posibles(celda, sudoku)
{
	if (typeof(sudoku) === "undefined" || sudoku === null) { sudoku = sudoku_inicial; }
	
	var celdas_local = Array(82);
	//var celdas_local = celdas.toString().split(","); //No hace parseInt!
	var numeros_validos = Array(10);
	var color_celda;
	for (var x = 1; x < 82; x++)
	{
		//Si la celda no era fija (no la ha puesto el juego), no se tiene en cuenta:
		//color_celda = document.getElementById(x).style.color;
		//if (color_celda != "rgb(170, 0, 0)" && color_celda != "rgb(170,0,0)" && color_celda != "#aa0000" && color_celda != "#AA0000" && color_celda != "#dd7080" && color_celda != "#DD7080" && color_celda != "rgb(221, 112, 128)" && color_celda != "rgb(221,112,128)")
		/*
		if (isNaN(sudoku_inicial[x]) || sudoku_inicial === 0)
		{
			celdas_local[x] = 0;
		} else { celdas_local[x] = celdas[x]; }
		*/
		celdas_local[x] = sudoku[x];
	}
	for (var x = 1; x <= 9; x++)
	{
		celdas_local[celda] = x;
		numeros_validos[x] = validar_celda(celda, celdas_local, true);
		celdas_local[celda] = 0;
	}
	return numeros_validos;
}


//Funcion que oculta los numeros posibles:
function numeros_posibles_ocultar(forzar)
{
	if (typeof(forzar) === "undefined" || forzar === null) { forzar = false; }
	if (!mostrar_numeros_posibles_activado && !forzar) { return; }

	if (modo_ligero_ultra && !forzar) { quitar_numeros_exteriores(); return; }
	
	var numeros_posibles_div = document.getElementById("numeros_posibles");
	var numeros_posibles_capa_div = document.getElementById("numeros_posibles_capa");
	if (numeros_posibles_div === null || numeros_posibles_capa_div === null) { return; }

	clearTimeout(numeros_posibles_mostrar_timeout);
	
	//Se borran los eventos:
	numeros_posibles_capa_div.onmousedown = numeros_posibles_capa_div.onmouseover = numeros_posibles_capa_div.onmouseout = null;
	
	//Se esconde:
	numeros_posibles_capa_div.style.visibility = numeros_posibles_div.style.visibility = "hidden";
	numeros_posibles_capa_div.style.display = numeros_posibles_div.style.display = "none";
	numeros_posibles_mostrar_visible = false;
	
	quitar_numeros_exteriores();
	
	numeros_posibles_ultima_celda = 0;
}


var escogiendo_numero = false;
function numero_escogido(numero)
{
	if (celda_seleccionada === 0) { return; }
	escogiendo_numero = true;
	seleccionar(numero, 'activar', false);
	pintar_celda(celda_seleccionada, 'activar', false);
	document.getElementById('div_menu_numeros').style.opacity = 0;
	//setTimeout("location.href = \'#inicio\'; mostrando_menu = false; document.getElementById('div_menu_numeros').style.visibility = 'hidden'; document.getElementById('opcion_"+numero+"').style.border = '2px #bbbbbb dotted'; document.getElementById('opcion_"+numero+"').style.color = '#696969';", 100);
	new function()
	{
		var numero_local = numero;
		setTimeout( function()
					{
						cambiar_hash("#inicio");
						mostrando_menu = false;
						document.getElementById("div_menu_numeros").style.visibility = 'hidden';
						document.getElementById("opcion_" + numero_local).style.border = "2px #bbbbbb dotted";
						document.getElementById("opcion_" + numero_local).style.color = "#696969";
						elemento_onmouseover(celda_seleccionada, mostrar_numeros_posibles_activado);
						desmarcar_menu_numeros();
						setTimeout(function() { escogiendo_numero = false; }, 100);
					}, 100);
	}();
	if (numero !== 0) { numero_anterior = numero; }
	
	numeros_posibles_mostrar(celda_seleccionada, true);
	marcar_casillas_importantes(celda_seleccionada, true);
}


function parar_intentar_solucionar()
{
	if (!mostrando_solucion_calculada_finalizado || mostrando_solucion_calculada)
	{
		clearTimeout(finalizar_mostrar_solucion_timeout);
		for (var u = mostrar_solucion_segundos; u >= 0; u--)
		{
			clearTimeout(mostrar_solucion_mensaje_timeouts[u]);
		}
		//...y despues de la pausa, se restaura el sudoku anterior gracias a la copia de seguridad:
		for (var r=1; r<=81; r++)
		 {
			celdas[r] = sudoku_backup[r];
			if (celdas[r] != 0 && !isNaN(celdas[r]))
			 {
				poner_HTML(document.getElementById(r), celdas[r]);
				if (celdas[r] == sudoku_inicial[r]) { document.getElementById(r).style.color = "#aa0000"; }
				else { document.getElementById(r).style.color = "#333333"; }
			 }
			else if (celdas[r] === 0) { poner_HTML(document.getElementById(r), "&nbsp;"); document.getElementById(r).style.color = "#333333"; }
		 }
		
		//Se deja de mostrar el mensaje de cargando:
		setTimeout(function() { mostrar_mensaje("", false); }, 10);
		
		mostrando_solucion_calculada_finalizado = true;
		cambiar_hash("#inicio");
		mostrando_solucion_calculada = false;
		document.getElementById("div_solucionar").style.visibility = "visible";
		document.getElementById("div_solucionar").style.display = "block";
	}
}


var confirmar_okFunction;
var confirmar_noFunction;
var confirmar_function_ejecutado = false;
var mostrando_confirmar = false;
var mostrando_confirmar_cargando = false;
var confirmar_interval_focus;
function confirmar(mensaje, okFunction, noFunction)
{
	confirmar_function_ejecutado = false;
	
	ocultar_hotkeys();
	
	mostrando_confirmar_cargando = true;
	clearInterval(confirmar_interval_focus);

	confirmar_okFunction = function() { if (confirmar_function_ejecutado) { return; } confirmar_function_ejecutado = true; if (typeof(okFunction) === "function") { okFunction(); okFunction = null; }; mostrar_mensaje("", false, false, false, true); cambiar_hash("#inicio"); mostrando_confirmar = false; };
	confirmar_noFunction = function() { if (confirmar_function_ejecutado) { return; } confirmar_function_ejecutado = true; if (typeof(noFunction) === "function") { noFunction(); noFunction = null; }; mostrar_mensaje("", false, false, false, true); cambiar_hash("#inicio"); mostrando_confirmar = false; };

	var mensaje = mensaje;

	var div_confirmar_codigo = document.createElement("div");
	
	poner_HTML(div_confirmar_codigo, "");
	
	
	mensaje = mensaje.split("<br />");
	var mensajeLength = mensaje.length;
	for (var x = 0; x < mensajeLength; x++)
	{
		//poner_HTML(div_confirmar_codigo, mensaje[x] + "AA", true);
		var spancito = document.createElement("span");
		poner_HTML(spancito, mensaje[x]);
		div_confirmar_codigo.appendChild(spancito);
		div_confirmar_codigo.appendChild(document.createElement("br"));
	}
	
	//div_confirmar_codigo.appendChild(document.createElement("br"));
	//div_confirmar_codigo.appendChild(document.createElement("br"));

	var form_formulario_confirmar = document.createElement("form");
	form_formulario_confirmar.id = "formulario_confirmar";
	form_formulario_confirmar.action = "javascript:return false;";
	form_formulario_confirmar.style.width = "100%";
	form_formulario_confirmar.style.height = botonHeight + "px";

	var input_confirmar_boton_ok = document.createElement("input");
	input_confirmar_boton_ok.type = "button";
	input_confirmar_boton_ok.id = "confirmar_boton_ok";
	input_confirmar_boton_ok.value = TR_button_ok[idioma];
	input_confirmar_boton_ok.style.background = "#cccccc";
	input_confirmar_boton_ok.style.border = "3px solid #aaaaaa";
	input_confirmar_boton_ok.style.color = "#aa0000";
	input_confirmar_boton_ok.style.fontWeight = "bold";
	input_confirmar_boton_ok.style.width = botonWidth + "px";
	input_confirmar_boton_ok.style.height = botonHeight + "px";
	try { input_confirmar_boton_ok.style.cursor = "pointer"; input_confirmar_boton_ok.style.cursor = "hand"; }
	catch (e) { try { input_confirmar_boton_ok.style.cursor = "hand"; } catch (e) {} }
	input_confirmar_boton_ok.style.textShadow = "2px 2px 4px #330000";
	input_confirmar_boton_ok.style.margin = "5px";
	form_formulario_confirmar.appendChild(input_confirmar_boton_ok);

	//poner_HTML(form_formulario_confirmar, "&nbsp;", true);

	var input_confirmar_boton_cancelar = document.createElement("input");
	input_confirmar_boton_cancelar.type = "button";
	input_confirmar_boton_cancelar.id = "confirmar_boton_cancelar";
	input_confirmar_boton_cancelar.value = TR_button_cancel[idioma];
	input_confirmar_boton_cancelar.style.background = "#cccccc";
	input_confirmar_boton_cancelar.style.border = "3px solid #aaaaaa";
	input_confirmar_boton_cancelar.style.color = "#aa0000";
	input_confirmar_boton_cancelar.style.fontWeight = "bold";
	input_confirmar_boton_cancelar.style.width = botonWidth + "px";
	input_confirmar_boton_cancelar.style.height = botonHeight + "px";
	try { input_confirmar_boton_cancelar.style.cursor = "pointer"; input_confirmar_boton_cancelar.style.cursor = "hand"; }
	catch (e) { try { input_confirmar_boton_cancelar.style.cursor = "hand"; } catch (e) {} }
	input_confirmar_boton_cancelar.style.textShadow = "2px 2px 4px #330000";
	input_confirmar_boton_cancelar.style.margin = "5px";
	form_formulario_confirmar.appendChild(input_confirmar_boton_cancelar);

	div_confirmar_codigo.appendChild(form_formulario_confirmar);
	mensaje += div_confirmar_codigo.innerHTML;

	//mensaje += ' <br /><br /><form id="formulario_confirmar" action="javascript:return false;" style="width:100%; height:' + botonHeight + 'px;"><input type="button" id="confirmar_boton_ok" value="'+TR_button_ok[idioma]+'" onClick="javascript:confirmar_okFunction();" style="background:#dddddd; color:#aa0000; font-weight:bold; width:' + botonWidth + 'px; height:' + botonHeight + 'px; cursor: pointer; cursor: hand; text-shadow:2px 2px 4px #330000;" onMouseOver="this.style.background=\'#bbbbbb\';" onMouseOut="this.style.background=\'#dddddd\';" />';
	//mensaje += ' <input type="button" id="confirmar_boton_cancelar" value="'+TR_button_cancel[idioma]+'" onClick="javascript:confirmar_noFunction();" style="background:#dddddd; color:#aa0000; font-weight:bold; width:' + botonWidth + 'px; height:' + botonHeight + 'px; cursor: pointer; cursor: hand; text-shadow:2px 2px 4px #330000;" onMouseOver="this.style.background=\'#bbbbbb\';" onMouseOut="this.style.background=\'#dddddd\';" /></form>';

	mostrando_confirmar = true;
	cambiar_hash("#mostrando_confirmar");
	//mostrar_mensaje(mensaje, true);
	mostrar_mensaje(div_confirmar_codigo, true, true, false, false, modo_ligero_ultra);
	mostrando_confirmar_cargando = false;

	confirmar_interval_focus = setInterval(
				function()
				{
					if (mostrando_confirmar && document.getElementById("confirmar_boton_ok") !== null && document.getElementById("confirmar_boton_cancelar") !== null)
					{
						if (document.getElementById("mensaje_contenedor").style.visibility !== "hidden" && document.getElementById("confirmar_boton_ok").style.visibility !== "hidden")
						{
							document.getElementById("confirmar_boton_ok").focus();
							document.getElementById("confirmar_boton_cancelar").onclick = function() { confirmar_noFunction(); };
							document.getElementById("confirmar_boton_cancelar").onmouseover = function() { this.style.background = "#ffffff"; this.style.border = "3px solid #000000"; this.style.color = "#ff0000"; };
							document.getElementById("confirmar_boton_cancelar").onmouseout = function() { this.style.background = "#cccccc"; this.style.border = "3px solid #aaaaaa"; this.style.color = "#aa0000"; };
							document.getElementById("confirmar_boton_ok").onclick = function() { confirmar_okFunction(); };
							document.getElementById("confirmar_boton_ok").onmouseover = function() { this.style.background = "#ffffff"; this.style.border = "3px solid #000000"; this.style.color = "#ff0000"; };
							document.getElementById("confirmar_boton_ok").onmouseout = function() { this.style.background = "#cccccc"; this.style.border = "3px solid #aaaaaa"; this.style.color = "#aa0000"; };
							if (permitir_touchstart && ("ontouchstart" in window || typeof(document.body.ontouchstart) !== "undefined"))
							{
								document.getElementById("confirmar_boton_cancelar").ontouchstart = function() { setTimeout(confirmar_noFunction, 100); };
								document.getElementById("confirmar_boton_ok").ontouchstart = function() { setTimeout(confirmar_okFunction, 100); };
							}
							clearInterval(confirmar_interval_focus);
							return;
						}
					}
				}, 10);

	return;
}

var alerta_function;
var alerta_function_ejecutado = false;
var mostrando_alerta = false;
var mostrando_alerta_cargando = false;
var alerta_interval_focus;
function alerta(mensaje, alertaFunction, codigoHTML)
{
	alerta_function_ejecutado = false;
	
	if (typeof(codigoHTML) === "undefined" || !codigoHTML) { codigoHTML = null; }
	
	ocultar_hotkeys();

	mostrando_alerta_cargando = true;
	clearInterval(alerta_interval_focus);

	alerta_function =
		function()
		{
			if (alerta_function_ejecutado) { return; }
			alerta_function_ejecutado = true;
			if (typeof(alertaFunction) === "function")
			{
				alertaFunction();
				alertaFunction = null;
			}
			mostrar_mensaje("", false, false, false, true);
			if (!mostrando_opciones) { cambiar_hash("#inicio"); }
			else { cambiar_hash("#mostrando_opciones"); }
			mostrando_alerta = false;
			dejar_seleccionar = false;
			//if (mostrando_opciones)
			//{
				//document.getElementById("boton_cerrar_opciones").style.visibility = "visible";
			//}
		};

	var mensaje = mensaje;

	var div_alerta_codigo = document.createElement("div");
	//poner_HTML(div_alerta_codigo, mensaje);

	mensaje = mensaje.split("<br />");
	var mensajeLength = mensaje.length;
	for (var x = 0; x < mensajeLength; x++)
	{
		//poner_HTML(div_confirmar_codigo, mensaje[x] + "AA", true);
		var spancito = document.createElement("span");
		poner_HTML(spancito, mensaje[x]);
		div_alerta_codigo.appendChild(spancito);
		div_alerta_codigo.appendChild(document.createElement("br"));
	}

	//div_alerta_codigo.appendChild(document.createElement("br"));
	//div_alerta_codigo.appendChild(document.createElement("br"));

	if (codigoHTML !== null)
	{
		try { div_alerta_codigo.appendChild(codigoHTML); } catch (e) {}
	}

	
	var form_formulario_alerta = document.createElement("form");
	form_formulario_alerta.id = "formulario_alerta";
	form_formulario_alerta.action = "javascript:return false;";
	form_formulario_alerta.style.width = "100%";
	form_formulario_alerta.style.height = botonHeight + "px";

	var input_alerta_boton_ok = document.createElement("input");
	input_alerta_boton_ok.type = "button";
	input_alerta_boton_ok.id = "alerta_boton_ok";
	input_alerta_boton_ok.value = TR_button_ok[idioma];
	input_alerta_boton_ok.style.background = "#cccccc";
	input_alerta_boton_ok.style.border = "3px solid #aaaaaa";
	input_alerta_boton_ok.style.color = "#aa0000";
	input_alerta_boton_ok.style.fontWeight = "bold";
	input_alerta_boton_ok.style.width = botonWidth + "px";
	input_alerta_boton_ok.style.height = botonHeight + "px";
	try { input_alerta_boton_ok.style.cursor = "pointer"; input_alerta_boton_ok.style.cursor = "hand"; }
	catch (e) { try { input_alerta_boton_ok.style.cursor = "hand"; } catch (e) {} }
	input_alerta_boton_ok.style.textShadow = "2px 2px 4px #330000";
	form_formulario_alerta.appendChild(input_alerta_boton_ok);

	div_alerta_codigo.appendChild(form_formulario_alerta);
	//mensaje += div_alerta_codigo.innerHTML;


	//mensaje += '<br /><br /><form id="formulario_alerta" action="javascript:return false;" style="width:100%; height:' + botonHeight + 'px;"><input type="button" id="alerta_boton_ok" value="'+TR_button_ok[idioma]+'" onClick="javascript:alerta_function();" style="background:#dddddd; color:#aa0000; font-weight:bold; width:' + botonWidth + 'px; height:' + botonHeight + 'px; cursor: pointer; cursor: hand; text-shadow:2px 2px 4px #330000;" onMouseOver="this.style.background=\'#bbbbbb\';" onMouseOut="this.style.background=\'#dddddd\';" /></form>';

	mostrando_alerta = true;
	cambiar_hash("#mostrando_alerta");
	mostrar_mensaje(div_alerta_codigo, true, true, false, false, modo_ligero_ultra);
	//mostrar_mensaje(mensaje, true);
	mostrando_alerta_cargando = false;

	alerta_interval_focus = setInterval(
				function()
				{
					if (mostrando_alerta && document.getElementById("alerta_boton_ok") !== null)
					{
						if (document.getElementById("mensaje_contenedor").style.visibility !== "hidden" && document.getElementById("alerta_boton_ok").style.visibility !== "hidden")
						{
							document.getElementById("alerta_boton_ok").focus();
							document.getElementById("alerta_boton_ok").onclick = function() { alerta_function(); };
							
							if (permitir_touchstart && ("ontouchstart" in window || typeof(document.body.ontouchstart) !== "undefined"))
							{
								document.getElementById("alerta_boton_ok").ontouchstart = function() { setTimeout(alerta_function, 100); };
							}
							
							document.getElementById("alerta_boton_ok").onmouseover = function() { this.style.background = "#ffffff"; this.style.border = "3px solid #000000"; this.style.color = "#ff0000"; };
							document.getElementById("alerta_boton_ok").onmouseout = function() { this.style.background = "#cccccc"; this.style.border = "3px solid #aaaaaa"; this.style.color = "#aa0000"; };
							clearInterval(alerta_interval_focus);
							return;
						}
					}
				}, 10);

	return;
}


var credits_flotante = false;
function expandir_contraer_panel(solo_expandir, no_cambiar)
{
	if (typeof(solo_expandir) === "undefined" || solo_expandir === null) { solo_expandir = false; }
	if (typeof(no_cambiar) === "undefined" || no_cambiar === null) { no_cambiar = false; }
	if (solo_expandir && mostrar_panel) { return; }

	var panel = document.getElementById("div_formulario_numeros_iniciales");
	var boton_esconder = document.getElementById("boton_esconder_panel");
	var credits = document.getElementById("credits");
	
	if (typeof(panel) === "undefined" || panel === null) { return; }
	if (typeof(boton_esconder) === "undefined" || boton_esconder === null) { return; }
	//if (typeof(credits) === "undefined" || credits === null) { return; }
	
	if (mostrar_panel && !solo_expandir)
	{
		poner_HTML(boton_esconder, "[↑]");
		panel.style.height = "14px";
		panel.className = "no_seleccionable muy_transparente" + ((modo_ligero_ultra) ? "_ligero_ultra" : "");
		try { panel.style.cursor = "pointer"; panel.style.cursor = "hand"; }
		catch (e) { try { panel.style.cursor = "hand"; } catch (e) {} }

		if (credits !== null)
		{
			credits.style.position = "absolute";
			credits.style.right = "12px";
			resizear_todo(true);
			credits.style.top = parseInt(document.getElementById("zona_juego").style.top) + parseInt(document.getElementById("zona_juego").style.height) + 6 + 4 + "px";
			//document.body.appendChild(credits);
			document.getElementById("contenedor_general").appendChild(credits);
			credits_flotante = true;
			credits.style.zIndex = 2;
		}
	}
	else
	{
		poner_HTML(boton_esconder, "[↓]");
		panel.style.height = "52px";
		panel.className = "no_seleccionable opaco" + ((modo_ligero_ultra) ? "_ligero_ultra" : "");
		panel.style.cursor = "default";

		if (credits !== null)
		{
			credits.style.position = "relative";
			credits.style.right = "";
			credits.style.top = "";
			panel.appendChild(credits);
			credits_flotante = false;
			credits.style.zIndex = 2;
		}
	}

	resizear_todo();
	
	//setTimeout(function() { boton_esconder.onclick = function() { expandir_contraer_panel(); }; }, 100);
	
	if (!no_cambiar) { mostrar_panel = !mostrar_panel; }
}


function cerrar_juego()
{
	if (typeof(navigator) !== "undefined" && typeof(navigator.app) !== "undefined" && typeof(navigator.app.exitApp) !== "undefined")
	{
		try
		{
			navigator.app.exitApp();
		}
		catch (e)
		{
			location.href = "about:blank";
			try { window.close(); } catch (e) {}
		}
	}
	else if (typeof(WeixinJSBridge) !== "undefined" && typeof(WeixinJSBridge.call) !== "undefined")
	{
		try
		{
			WeixinJSBridge.call("closeWindow");
			//WeixinJSBridge.invoke("closeWindow", {}, function(e){});
		}
		catch (e)
		{
			location.href = "about:blank";
			try { window.close(); } catch (e) {}
		}
	}
	else
	{
		setTimeout(function() { location.href = "about:blank"; }, 200);

		try
		{
			/*
			if (navigator.userAgent.indexOf('MSIE') !== -1 && (navigator.appVersion.indexOf("MSIE 5") != -1 || navigator.appVersion.indexOf("MSIE 6") != -1))
			{
				window.opener = top;
				window.close();
			}
			else
			{
				var ventana = window.open('', "_self");
				ventana.close();
			}*/
			var thisWindow = window.open("", "_self", "", "true");
			thisWindow.opener = top;
			CB_windowCloseEncapsulated = thisWindow.close;
			CB_windowCloseEncapsulated();
		}
		catch (e)
		{
			try
			{
				var ventana = window.open(location.href, "_self");
				ventana.close();
			}
			catch (e)
			{
				try
				{
					window.opener = top;
					window.close();
				}
				catch (e)
				{
					try
					{
						window.opener = window;
						window.close();
					}
					catch (e)
					{
						try
						{
							window.opener = "CB_TryingToCloseWindow";
							window.close();
						}
						catch (e)
						{
							window.close();
						}
					}
				}
			}
		}
	}
}


function poner_HTML(objeto, contenido, agregado)
{
	if (typeof(agregado) === "undefined" || agregado === null) { agregado = false; }
	if (typeof(objeto) === "undefined" || objeto === null) { return; }
	contenido = "" + contenido;
	if (agregado)
	{
		if (typeof(objeto.textContent) !== "undefined")
		{
			objeto.textContent += contenido.replace(/&nbsp;/g, " ");
		}
		else if (typeof(objeto.innerText) !== "undefined")
		{
			objeto.innerText += contenido.replace(/&nbsp;/g, " ");
		}
		else
		{
			//objeto.innerHTML += contenido;
		}
	}
	else
	{
		if (typeof(objeto.textContent) !== "undefined")
		{
			objeto.textContent = contenido.replace(/&nbsp;/g, " ");
			//objeto.appendChild(document.createTextNode(contenido));
		}
		else if (typeof(objeto.innerText) !== "undefined")
		{
			objeto.innerText = contenido.replace(/&nbsp;/g, " ");
		}
		else
		{
			//objeto.innerHTML = contenido;
		}
	}
	return;
}

var mostrando_dialogo_salir = false;
var ultimo_hash = "";
var juego_finalizado = false;
var procesando_hash = false;
var cambiar_segun_hash = function()
					  {
						if (juego_finalizado) { return; }
						if (procesando_hash) { return; }
						procesando_hash = true;
						
						var hash_actual = location.hash;

						var mostrar_salir = false;
						if (iniciando_primera_vez || iniciando_juego)
						{
							if (hash_actual !== "#inicio" && hash_actual !== "inicio")
							{
								cambiar_hash("#inicio");
							}
							ultimo_hash = location.hash;
							setTimeout(function() { procesando_hash = false; }, 20);
							return;
						}
						else if (ultimo_hash === "")
						{
							ultimo_hash = location.hash;
							setTimeout(function() { procesando_hash = false; }, 20);
							return;
						}
						else if (mostrando_solucion_calculada)
						{
							if (!mostrando_solucion_calculada_finalizado)
							{
								if (hash_actual !== "#mostrando_solucion_calculada" && hash_actual !== "mostrando_solucion")
								{
									//location.href = "#mostrando_solucion_calculada";
									parar_intentar_solucionar();
								}
							}
							ultimo_hash = location.hash;
							setTimeout(function() { procesando_hash = false; }, 20);
							return;
						}
						else if (mostrando_menu && hash_actual !== "#mostrando_menu" && hash_actual !== "mostrando_menu")
						{
							document.getElementById('div_menu_numeros').style.visibility = "hidden";
							//document.getElementById(celda_seleccionada).style.background = (celda_seleccionada % 2 === 0) ? "#dddddd" : "#eeeeee";
							/////resaltar_celda(celda_seleccionada, false);
							elemento_onmouseover(celda_seleccionada, mostrar_numeros_posibles_activado);
							numeros_posibles_mostrar(celda_seleccionada, true);
							marcar_casillas_importantes(celda_seleccionada, true);
							mostrando_menu = false;
							desmarcar_menu_numeros();
						}
						else if (mostrando_opciones && hash_actual !== "#mostrando_opciones" && hash_actual !== "mostrando_opciones")
						{
							//document.getElementById('opciones').style.visibility = "hidden";
							//mostrando_opciones = false;
							cambiar_hash("#inicio");
							ocultar_opciones(true);
							//mostrando_opciones = false;
						}
						else if (mostrando_alerta)
						{
							if (ultimo_hash === "#mostrando_alerta" || ultimo_hash === "mostrando_alerta")
							{
								if (!mostrando_alerta_cargando)
								{
									mostrando_alerta = false;
									alerta_function();
								}
							}
						}
						else if (mostrando_confirmar)
						{
							if (ultimo_hash === "#mostrando_confirmar" || ultimo_hash === "mostrando_confirmar")
							{
								if (!mostrando_confirmar_cargando)
								{
									mostrando_confirmar = false;
									confirmar_noFunction();
								}
							}
						}
						else if (ultimo_hash === "#inicio" || ultimo_hash === "inicio")
						{
							if (!escogiendo_numero && !mostrando_opciones && !mostrando_menu && !mostrando_alerta && !mostrando_confirmar && !mostrando_alerta)
							{
								if (!mostrando_dialogo_salir)
								{
									mostrar_salir = true;
								}
							}
						}
						//else { alert(ultimo_hash + " ("+hash_actual+")"); }
						
					
						if (mostrar_salir)
						{
							mostrando_dialogo_salir = true;
							var okFunction = function()
											 {
												juego_finalizado = true;
												cerrar_juego();
											 };
							var noFunction = function()
											 {
												mostrando_dialogo_salir = false;
											 };
							confirmar(TR_do_you_want_to_quit[idioma], okFunction, noFunction);
						}
						
						ultimo_hash = location.hash;
						setTimeout(function() { procesando_hash = false; }, 20);
					  } 


//var ultimo_hash_emulado = "#inicio";
if (typeof(history.pushState) !== "undefined")
{
	window.onpopstate = cambiar_segun_hash;
}
else if (typeof(window.onhashchange) !== "undefined")
{
	window.onhashchange = cambiar_segun_hash;
}
else
{
	/*
	setInterval(
		function()
		{
			if (location.hash !== ultimo_hash_emulado)
			{
				cambiar_segun_hash();
			}
			ultimo_hash_emulado = location.hash;
		}
	, 100);
	*/
}

//Comienza el juego cuando todo este listo:
window.onload = function() { iniciar_juego_primera_vez(); };



//*** Wechat sharing:
//Modifies the options when the URL is shared:
var WECHAT_SHARE_IMAGE_URL = "icon.png"; //Address of the thumb image when it is shared.
WECHAT_SHARE_IMAGE_URL = getCurrentURLWithoutVars() + WECHAT_SHARE_IMAGE_URL;
var WECHAT_SHARE_TITLE = "Yasminoku © (by Joan Alba Maldonado)"; //Title of the site when it is shared.
var WECHAT_SHARE_DESCRIPTION = TR_description_short[idioma]; //Description of the site when it is shared.
var WECHAT_APPID = ""; //AppID (can be left blank).


//Tries setting sharing functions until it is able or until it reaches an amount of times:
/*
var WECHAT_setEventsIntervalTries = 0;
var WECHAT_setEventsInterval = setInterval(
								function()
								{
									if (WECHAT_onBridgeReady() || WECHAT_setEventsIntervalTries++ > 100)
									{
										clearInterval(WECHAT_setEventsInterval);
									}
								}, 500);

*/

try
{
	if (document.addEventListener)
	{
		document.addEventListener('WeixinJSBridgeReady', function() { WECHAT_onBridgeReady(); }, false);
		//document.addEventListener('WeixinJSBridgeReady', WECHAT_onBridgeReady, false);
	}
	else if (document.attachEvent)
	{
		document.attachEvent('WeixinJSBridgeReady', function() { WECHAT_onBridgeReady(); });
		document.attachEvent('onWeixinJSBridgeReady', function() { WECHAT_onBridgeReady(); });
	}
} catch (e) { }


//Function that returns the current URL without URL variables:
function getCurrentURLWithoutVars()
{
	var beginningVars = CB_indexOf(location.href, "?");
	if (beginningVars === -1)
	{
		beginningVars = CB_indexOf(location.href, "#");
		if (beginningVars === -1)
		{
			beginningVars = location.href.length;
		}
	}

	var currentURLWithoutVars = location.href.slice(0, beginningVars).replace("index.html", "");
	
	while (currentURLWithoutVars.substr(currentURLWithoutVars.length - 1) === "/")
	{
		currentURLWithoutVars = currentURLWithoutVars.slice(0, currentURLWithoutVars.length - 1);
	}
	
	if (currentURLWithoutVars.substr(currentURLWithoutVars.length - 1) !== "/")
	{
		currentURLWithoutVars = currentURLWithoutVars + "/";
	}

	currentURLWithoutVars = CB_trim(currentURLWithoutVars);
	
	if (currentURLWithoutVars === "" || currentURLWithoutVars.indexOf("http://localhost/") !== -1 || currentURLWithoutVars.indexOf("http://127.0.0.1") !== -1 || currentURLWithoutVars.indexOf("http://192.168") !== -1 || (currentURLWithoutVars.indexOf("http://") === -1 && currentURLWithoutVars.indexOf("https://") === -1))
	{
		//currentURLWithoutVars = "http://yasminoku.tuxfamily.org/new/online/";
		currentURLWithoutVars = "http://dhtmlgames.com/yasminoku/online/";
	}
	
	return currentURLWithoutVars;
}


//Implementation of indexOf method for arrays in browsers that doesn't support it natively:
//* Polyfill source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
function CB_indexOf(that, searchElement, fromIndex, extendedDOM)
{
	if (typeof(extendedDOM) == "undefined" || extendedDOM == null) { extendedDOM = false; }
	
	if (Array.prototype.indexOf && !extendedDOM) { return Array.prototype.indexOf.call(that, searchElement, fromIndex); }

	if ( that === undefined || that === null )
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


//Function that detects whether we are using Wechat or not:
function WECHAT_usingWechat()
{
	return (typeof(WeixinJSBridge) !== "undefined");
}


//Function to invoke when Wechat API is ready to change Wechat options:
var WECHAT_isBridgeReady = false; //Tells whether the Wechat Bridget is ready or not.
function WECHAT_onBridgeReady(link, imageAddress, title, description, appId)
{
	if (!WECHAT_usingWechat()) { return false; }

	WECHAT_isBridgeReady = true;

	if (typeof(link) === "undefined" || link == null || !link || CB_trim(link) === "") { link = getCurrentURLWithoutVars(); }
	if (typeof(imageAddress) === "undefined" || imageAddress == null || !imageAddress || CB_trim(imageAddress) === "") { imageAddress = WECHAT_SHARE_IMAGE_URL; }
	if (typeof(title) === "undefined" || title == null || !title || CB_trim(title) === "") { title = WECHAT_SHARE_TITLE; }
	if (typeof(description) === "undefined" || description == null || !description || CB_trim(description) === "") { description = WECHAT_SHARE_DESCRIPTION; }
	if (typeof(appId) === "undefined" || appId == null || !appId || CB_trim(appId) === "") { appId = WECHAT_APPID; }

	try
	{
		//Hides Wechat toolbar:
		WeixinJSBridge.call('hideToolbar');

		//Hides the option menu (share button):
		//WeixinJSBridge.call('hideOptionMenu'); //Don't hide it if you want to let people share!

		//Changes the options to share the site with a friend:
		WeixinJSBridge.on('menu:share:appmessage', function (argv) { WECHAT_shareFriend(link, imageAddress, title, description, appId); });
		
		//Changes the options to share the site in user's timeline:
		WeixinJSBridge.on('menu:share:timeline', function (argv) { WECHAT_shareTimeline(link, imageAddress, title, description); });
	        
		//Changes the options to share the site in Weibo:
		WeixinJSBridge.on('menu:share:weibo', function (argv) { WECHAT_shareWeibo(link, description); });

		//Changes the options to share the site in Facebook:
		WeixinJSBridge.on('menu:share:facebook', function (argv) { WECHAT_shareFacebook(link, description); });
		
		return true;
	} catch (e) { return false; }
}



//Function that sets the options for sharing with a friend:
function WECHAT_shareFriend(link, imageAddress, title, description, appId)
{
	if (!WECHAT_usingWechat() || !WECHAT_isBridgeReady) { return; }

	if (typeof(link) === "undefined" || link == null || !link || CB_trim(link) === "") { link = getCurrentURLWithoutVars(); }
	if (typeof(imageAddress) === "undefined" || imageAddress == null || !imageAddress || CB_trim(imageAddress) === "") { imageAddress = WECHAT_SHARE_IMAGE_URL; }
	if (typeof(title) === "undefined" || title == null || !title || CB_trim(title) === "") { title = WECHAT_SHARE_TITLE; }
	if (typeof(description) === "undefined" || description == null || !description || CB_trim(description) === "") { description = WECHAT_SHARE_DESCRIPTION; }
	if (typeof(appId) === "undefined" || appId == null || !appId || CB_trim(appId) === "") { appId = WECHAT_APPID; }

	WeixinJSBridge.invoke
	(
		'sendAppMessage',
		{
    		"appid": appId,
			"img_url": imageAddress,
			"img_width": "512",
			"img_height": "512",
			"link": link,
			"desc": description,
			"title": title
		},
		function (res)
		{
			//_report('send_msg', res.err_msg);
		}
	);
}


//Function that sets the options for sharing in user's timeline:
function WECHAT_shareTimeline(link, imageAddress, title, description)
{
	if (!WECHAT_usingWechat() || !WECHAT_isBridgeReady) { return; }

	if (typeof(link) === "undefined" || link == null || !link || CB_trim(link) === "") { link = getCurrentURLWithoutVars(); }
	if (typeof(imageAddress) === "undefined" || imageAddress == null || !imageAddress || CB_trim(imageAddress) === "") { imageAddress = WECHAT_SHARE_IMAGE_URL; }
	if (typeof(title) === "undefined" || title == null || !title || CB_trim(title) === "") { title = WECHAT_SHARE_TITLE; }
	if (typeof(description) === "undefined" || description == null || !description || CB_trim(description) === "") { description = WECHAT_SHARE_DESCRIPTION; }

	WeixinJSBridge.invoke
	(
		'shareTimeline',
		{
			"img_url": imageAddress,
			"img_width": "512",
			"img_height": "512",
			"link": link,
			"desc": description,
			"title": title
		},
		function (res)
		{
			//_report('timeline', res.err_msg);
		}
	);
}

//Function that sets the options for sharing in Weibo:
function WECHAT_shareWeibo(link, description)
{
	if (!WECHAT_usingWechat() || !WECHAT_isBridgeReady) { return; }

	if (typeof(link) === "undefined" || link == null || !link || CB_trim(link) === "") { link = getCurrentURLWithoutVars(); }
	if (typeof(description) === "undefined" || description == null || !description || CB_trim(description) === "") { description = WECHAT_SHARE_DESCRIPTION; }

	WeixinJSBridge.invoke
	(
		'shareWeibo',
		{
			"content": description,
			"url": link
		},
		function (res)
		{
			//_report('weibo', res.err_msg);
		}
	);
}

//Function that sets the options for sharing in Facebook:
function WECHAT_shareFacebook(link, description)
{
	if (!WECHAT_usingWechat() || !WECHAT_isBridgeReady) { return; }

	if (typeof(link) === "undefined" || link == null || !link || CB_trim(link) === "") { link = getCurrentURLWithoutVars(); }
	if (typeof(imageAddress) === "undefined" || imageAddress == null || !imageAddress || CB_trim(imageAddress) === "") { imageAddress = WECHAT_SHARE_IMAGE_URL; }
	if (typeof(title) === "undefined" || title == null || !title || CB_trim(title) === "") { title = WECHAT_SHARE_TITLE; }
	if (typeof(description) === "undefined" || description == null || !description || CB_trim(description) === "") { description = WECHAT_SHARE_DESCRIPTION; }

	WeixinJSBridge.invoke
	(
		'shareFB',
		{
			"img_url" : imageAddress,
			"img_width" : "512",
			"img_height" : "512",
			"link" : link,
			"desc" : description,
			"title" : title
		},
		function (res)
		{
			//_report('weibo', res.err_msg);
		}
	);
}

//Tells rotation parameters for IE's CSS:
function rotationIE(deg)
{
    var deg2rad = Math.PI * 2 / 360;
	var rad = deg * deg2rad;

    var costheta = Math.cos(rad);
    var sintheta = Math.sin(rad);
 
	var rotation = "M11 = " + costheta;
    rotation += "\nM12 = " + -sintheta;
    rotation += "\nM21 = " + sintheta;
    rotation += "\nM22 = " + costheta;

	return rotation;
}