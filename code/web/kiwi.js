// KiwiSDR
//
// Copyright (c) 2014 John Seamons, ZL/KF6VO

var MAX_ZOOM = 10;
var SMETER_CALIBRATION = -12;

var try_again="";
var admin_user;
var noPasswordRequired = true;
var seriousError = false;

function kiwi_bodyonload()
{
	admin_user = html('id-kiwi-body').getAttribute('data-type');
	if (admin_user == "undefined") admin_user = "demop";
	if (admin_user == "index") admin_user = "demop";
	console.log("admin_user="+admin_user);
	
	if ((admin_user == 'demop') && noPasswordRequired) {
		visible_block('id-kiwi-msg', 0);
		visible_block('id-kiwi-container-0', 1);
		bodyonload(admin_user);
		return;
	}
	
	var p = readCookie(admin_user);
	console.log("readCookie admin_user="+admin_user+" p="+p);
	if (p && (p != "bad")) {
		kiwi_valpwd(admin_user, p);
	} else {
		html('id-kiwi-msg').innerHTML = "KiwiSDR: software-defined receiver <br>"+
			"<form name='pform' action='#' onsubmit='kiwi_valpwd(\""+admin_user+"\", this.pwd.value); return false;'>"+
				try_again+"Password: <input type='text' size=10 name='pwd' onclick='this.focus(); this.select()'>"+
  			"</form>";
		visible_block('id-kiwi-msg', 1);
		document.pform.pwd.focus();
		document.pform.pwd.select();
	}
}

function kiwi_valpwd(type, p)
{
	console.log("kiwi_valpwd type="+type+" pwd="+p);
	kiwi_ajax("/PWD?type="+type+"&pwd="+p, true);
}

var key="";

function kiwi_setpwd(p, _key)
{
	console.log("kiwi_setpwd admin_user="+admin_user+" p="+p);
	writeCookie(admin_user, p);
	if (p != "bad") {
		key = _key;
		html('id-kiwi-msg').innerHTML = "";
		visible_block('id-kiwi-msg', 0);
		visible_block('id-kiwi-container-0', 1);
		console.log("calling bodyonload(\""+admin_user+"\")..");
		bodyonload(admin_user);
	} else {
		try_again = "Try again. ";
		console.log("try again");
		kiwi_bodyonload();
	}
}

function kiwi_key()
{
	return key;
}

function kiwi_geolocate()
{
	var jsonp_cb = "callback_ipinfo";
	//kiwi_ajax('http://freegeoip.net/json/?callback='+jsonp_cb, true, null, 0, jsonp_cb, function() { setTimeout('kiwi_geolocate();', 1000); } );
	kiwi_ajax('http://ipinfo.io/json/?callback='+jsonp_cb, true, null, 0, jsonp_cb, function() { setTimeout('kiwi_geolocate();', 1000); } );
}

var geo = "";
var geojson = "";

function callback_freegeoip(json)
{
	console.log('callback_freegeoip():');
	console.log(json);
	if (window.JSON && window.JSON.stringify)
            geojson = JSON.stringify(json);
        else
				geojson = json.toString();
	
	if (json.country_code && json.country_code == "US" && json.region_name) {
		json.country_name = json.region_name + ', USA';
	}
	
	geo = "";
	if (json.city)
		geo += json.city;
	if (json.country_name)
		geo += (json.city? ', ':'')+ json.country_name;
	//console.log(geo);
	//traceA('***geo=<'+geo+'>');
}
    
function callback_ipinfo(json)
{
	console.log('callback_ipinfo():');
	console.log(json);
	if (window.JSON && window.JSON.stringify)
            geojson = JSON.stringify(json);
        else
				geojson = json.toString();

	if (json.country && json.country == "US" && json.region) {
		json.country = json.region + ', USA';
	} else
	if (json.country && country_ISO2_name[json.country]) {
		json.country = country_ISO2_name[json.country];
	}
	
	geo = "";
	if (json.city)
		geo += json.city;
	if (json.country)
		geo += (json.city? ', ':'')+ json.country;
	//console.log(geo);
	//traceA('***geo=<'+geo+'>');
}

// copied from country.io/names.json on 4/9/2016
// modified "US": "United States" => "US": "USA"
var country_ISO2_name =
{"BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria",
"BA": "Bosnia and Herzegovina", "BB": "Barbados", "WF": "Wallis and Futuna",
"BL": "Saint Barthelemy", "BM": "Bermuda", "BN": "Brunei", "BO": "Bolivia",
"BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM":
"Jamaica", "BV": "Bouvet Island", "BW": "Botswana", "WS": "Samoa", "BQ":
"Bonaire, Saint Eustatius and Saba ", "BR": "Brazil", "BS": "Bahamas", "JE":
"Jersey", "BY": "Belarus", "BZ": "Belize", "RU": "Russia", "RW": "Rwanda", "RS":
"Serbia", "TL": "East Timor", "RE": "Reunion", "TM": "Turkmenistan", "TJ":
"Tajikistan", "RO": "Romania", "TK": "Tokelau", "GW": "Guinea-Bissau", "GU":
"Guam", "GT": "Guatemala", "GS": "South Georgia and the South Sandwich Islands",
"GR": "Greece", "GQ": "Equatorial Guinea", "GP": "Guadeloupe", "JP": "Japan",
"GY": "Guyana", "GG": "Guernsey", "GF": "French Guiana", "GE": "Georgia", "GD":
"Grenada", "GB": "United Kingdom", "GA": "Gabon", "SV": "El Salvador", "GN":
"Guinea", "GM": "Gambia", "GL": "Greenland", "GI": "Gibraltar", "GH": "Ghana",
"OM": "Oman", "TN": "Tunisia", "JO": "Jordan", "HR": "Croatia", "HT": "Haiti",
"HU": "Hungary", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard Island and McDonald Islands",
"VE": "Venezuela", "PR": "Puerto Rico", "PS": "Palestinian Territory",
"PW": "Palau", "PT": "Portugal", "SJ": "Svalbard and Jan Mayen",
"PY": "Paraguay", "IQ": "Iraq", "PA": "Panama", "PF": "French Polynesia", "PG":
"Papua New Guinea", "PE": "Peru", "PK": "Pakistan", "PH": "Philippines", "PN":
"Pitcairn", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "ZM": "Zambia",
"EH": "Western Sahara", "EE": "Estonia", "EG": "Egypt", "ZA": "South Africa",
"EC": "Ecuador", "IT": "Italy", "VN": "Vietnam", "SB": "Solomon Islands", "ET":
"Ethiopia", "SO": "Somalia", "ZW": "Zimbabwe", "SA": "Saudi Arabia", "ES":
"Spain", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldova", "MG":
"Madagascar", "MF": "Saint Martin", "MA": "Morocco", "MC": "Monaco", "UZ":
"Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolia",
"MH": "Marshall Islands", "MK": "Macedonia", "MU": "Mauritius", "MT": "Malta",
"MW": "Malawi", "MV": "Maldives", "MQ": "Martinique", "MP": "Northern Mariana Islands",
"MS": "Montserrat", "MR": "Mauritania", "IM": "Isle of Man", "UG":
"Uganda", "TZ": "Tanzania", "MY": "Malaysia", "MX": "Mexico", "IL": "Israel",
"FR": "France", "IO": "British Indian Ocean Territory", "SH": "Saint Helena",
"FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands", "FM": "Micronesia",
"FO": "Faroe Islands", "NI": "Nicaragua", "NL": "Netherlands", "NO": "Norway",
"NA": "Namibia", "VU": "Vanuatu", "NC": "New Caledonia", "NE": "Niger", "NF":
"Norfolk Island", "NG": "Nigeria", "NZ": "New Zealand", "NP": "Nepal", "NR":
"Nauru", "NU": "Niue", "CK": "Cook Islands", "XK": "Kosovo", "CI": "Ivory Coast",
"CH": "Switzerland", "CO": "Colombia", "CN": "China", "CM": "Cameroon",
"CL": "Chile", "CC": "Cocos Islands", "CA": "Canada", "CG": "Republic of the Congo",
"CF": "Central African Republic", "CD": "Democratic Republic of the Congo",
"CZ": "Czech Republic", "CY": "Cyprus", "CX": "Christmas Island", "CR":
"Costa Rica", "CW": "Curacao", "CV": "Cape Verde", "CU": "Cuba", "SZ":
"Swaziland", "SY": "Syria", "SX": "Sint Maarten", "KG": "Kyrgyzstan", "KE":
"Kenya", "SS": "South Sudan", "SR": "Suriname", "KI": "Kiribati", "KH":
"Cambodia", "KN": "Saint Kitts and Nevis", "KM": "Comoros", "ST": "Sao Tome and Principe",
"SK": "Slovakia", "KR": "South Korea", "SI": "Slovenia", "KP": "North Korea",
"KW": "Kuwait", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leone",
"SC": "Seychelles", "KZ": "Kazakhstan", "KY": "Cayman Islands", "SG":
"Singapore", "SE": "Sweden", "SD": "Sudan", "DO": "Dominican Republic", "DM":
"Dominica", "DJ": "Djibouti", "DK": "Denmark", "VG": "British Virgin Islands",
"DE": "Germany", "YE": "Yemen", "DZ": "Algeria", "US": "USA", "UY":
"Uruguay", "YT": "Mayotte", "UM": "United States Minor Outlying Islands", "LB":
"Lebanon", "LC": "Saint Lucia", "LA": "Laos", "TV": "Tuvalu", "TW": "Taiwan",
"TT": "Trinidad and Tobago", "TR": "Turkey", "LK": "Sri Lanka", "LI":
"Liechtenstein", "LV": "Latvia", "TO": "Tonga", "LT": "Lithuania", "LU":
"Luxembourg", "LR": "Liberia", "LS": "Lesotho", "TH": "Thailand", "TF": "French Southern Territories",
"TG": "Togo", "TD": "Chad", "TC": "Turks and Caicos Islands", "LY": "Libya",
"VA": "Vatican", "VC": "Saint Vincent and the Grenadines", "AE": "United Arab Emirates",
"AD": "Andorra", "AG": "Antigua and Barbuda", "AF": "Afghanistan", "AI": "Anguilla", "VI": "U.S. Virgin Islands",
"IS": "Iceland", "IR": "Iran", "AM": "Armenia", "AL": "Albania", "AO": "Angola",
"AQ": "Antarctica", "AS": "American Samoa", "AR": "Argentina", "AU":
"Australia", "AT": "Austria", "AW": "Aruba", "IN": "India", "AX": "Aland Islands",
"AZ": "Azerbaijan", "IE": "Ireland", "ID": "Indonesia", "UA":
"Ukraine", "QA": "Qatar", "MZ": "Mozambique"};

function kiwi_geo()
{
	//traceA('kiwi_geo()=<'+geo+'>');
	return encodeURIComponent(geo);
}

function kiwi_geojson()
{
	//traceA('kiwi_geo()=<'+geo+'>');
	return encodeURIComponent(geojson);
}

function kiwi_plot_max(b)
{
   var t = bi[b];
   var plot_max = 1024 / (t.samplerate/t.plot_samplerate);
   return plot_max;
}

function kiwi_too_busy(rx_chans)//z
{
	kiwi_too_busy_ui();
	
	html('id-kiwi-msg').innerHTML=
	'Sorry, the KiwiSDR server is too busy right now ('+ rx_chans+((rx_chans>1)? ' users':' user') +' max). <br>' +
	'Please check <a href="http://sdr.hu" target="_self">sdr.hu</a> for more KiwiSDR receivers available world-wide.';
	visible_block('id-kiwi-msg', 1);
	visible_block('id-kiwi-container-1', 0);
}

function kiwi_up(smeter_calib)
{
	SMETER_CALIBRATION = smeter_calib - /* bias */ 100;
	if (!seriousError) {
		visible_block('id-kiwi-msg', 0);
		visible_block('id-kiwi-container-1', 1);
	}
}

function kiwi_down(update_in_progress)
{
	var s;
	if (update_in_progress)
		s = 
		'Sorry, software update in progress. Please check back in a few minutes.<br>' +
		'Or check <a href="http://sdr.hu" target="_self">sdr.hu</a> for more KiwiSDR receivers available world-wide.' +
		' ';
	else
		s =
		//'<span style="position:relative; float:left"><a href="http://bluebison.net" target="_blank"><img id="id-left-logo" src="gfx/kiwi-with-headphones.51x67.png" /></a> ' +
		//<div id="id-left-logo-text"><a href="http://bluebison.net" target="_blank">&copy; bluebison.net</a></div>' +
		//</span><span style="position:relative; float:right">' +
		'Sorry, this KiwiSDR server is being used for development right now. <br>' +
		//"Sorry, a big storm has blown down this KiwiSDR's antenna. <br>" +
		'Please check <a href="http://sdr.hu" target="_self">sdr.hu</a> for more KiwiSDR receivers available world-wide.' +
		//"<b>We're moving!</b> <br> This KiwiSDR receiver will be down until the antenna is relocated. <br> Thanks for your patience.<br><br>" +
		//'Until then, please try the <a href="http://websdr.ece.uvic.ca" target="_blank">KiwiSDR at the University of Victoria</a>.' +
		//'</span>';
		' ';
	html('id-kiwi-msg').innerHTML = s;
	visible_block('id-kiwi-msg', 1);
	visible_block('id-kiwi-container-1', 0);
}

function kiwi_fft()
{
	if (0) {
		toggle_or_set_spec(1);
		setmaxdb(10);
	} else {
		setmaxdb(-30);
	}
}

function kiwi_innerHTML(id, s)
{
	html(id).innerHTML = s;
}

function kiwi_num(n)
{
	if (n < 1000) {
		return n.toString();
	} else
	if (n < 1000000) {
		return (n/1000).toFixed(1)+'k';
	} else
	if (n < 1000000000) {
		return (n/1000000).toFixed(1)+'m';
	} else {
		return n.toString();
	}
}


var spurs = [
// z0
[ 9215, 12000, 13822, 16368, 17693, 18425, 23030, 24576 ],

// z1
[ 15250.8, 15617, 16167, 16228, 24576 ],

// z2
[ 4612, 16166.7, 16228 ],

// z3
[  ],

// z4
[

// BCB
594, 614, 640, 686, 777, 960, 1051, 1143, 1188, 1647, 1665, 1692, 1764, 1827, 1926,

13062,

// 20m ham
13999, 14029.5, 14053, 14090.5, 14151.6, 14212.7, 14273.7, 14334.8,

15006.5,

// 16m bc
17510, 17571,

// 17m ham
18121,

// 15m bc
18915,

// 15m ham
20991, 21021.3, 21052, 21113, 21174, 21204.6, 21235, 21296, 21326.6, 21357, 21418.5

],

// z5+
[

// LW
12.3, 45.8, 58, 91.5, 99,
117, 137.2, 154, 162, 189,
216, 228.6, 234, 279, 288,
320, 333, 351,
411.5, 414, 450, 468

]

];


//debug

function kiwi_server_error(s)
{
	html('id-kiwi-msg').innerHTML =
	'Hmm, there seems to be a problem. <br> \
	The server reported the error: <span style="color:red">'+s+'</span> <br> \
	Please <a href="javascript:sendmail(\'ihpCihp-`ln\',\'server error: '+s+'\');">email me</a> the above message. Thanks!';
	visible_block('id-kiwi-msg', 1);
	visible_block('id-kiwi-container-1', 0);
	seriousError = true;
}

function kiwi_serious_error(s)
{
	html('id-kiwi-msg').innerHTML = s;
	visible_block('id-kiwi-msg', 1);
	visible_block('id-kiwi-container-1', 0);
	seriousError = true;
}

function kiwi_trace()
{
	try { console.trace(); } catch(ex) {}		// no console.trace() on IE
}

var tr1=0;
var tr2=0;

function trace_on()
{
	if (!tr1) html('trace').innerHTML = 'trace:';
	if (!tr2) html('trace2').innerHTML = 'trace:';
	visible_inline('tr1', 1);
	visible_inline('tr2', 1);
}

function trace(s)
{
   trace_on();
   tr1++;
   html('trace').innerHTML = 'trace: '+s;
   //traceA(s);
}

function traceA(s)
{
   trace_on();
   tr1++;
   //if (tr1==30) tr1=0;
   html('trace').innerHTML += " "+s;
}

function traceB(s)
{
   trace_on();
	tr2 += s.length;
   if (tr2>=150) tr2=0;
   html('trace2').innerHTML += " "+s;
}
