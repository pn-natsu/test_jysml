function popUp(url) {
var sealWin

sealWin=window.open(url,"win01",'toolbar=0,location=0,directories=0,status=0,menubar=0, scrollbars=1,resizable=0,width=610,height=500');

	var wFocus = 1 ;
	sealWin.focus();

}

function MM_popupMsg(msg) { //v1.0
  alert(msg);
}


function yoyakujikan_minute(){
	var _hour = $("select[name='yoyakuJikantai']");
	var minute = _hour.parents("p.jikantai").find("select[name='yoyakuJikantai_minute']");
	
	if(_hour.attr("class")) yoyakujikan_change(_hour,minute);
	_hour.change(function(){
		yoyakujikan_change($(this),$(this).parents("p.jikantai").find("select[name='yoyakuJikantai_minute']"));
	});
}

function yoyakujikan_change(hour,minute){
	var status = hour.attr("class").split("-");
	var _options = [
		'<option value="00">00</option>',//0
		'<option value="15">15</option>',//1
		'<option value="30">30</option>',//2
		'<option value="45">45</option>',//3
	];
		minute.find("option").show().removeAttr("selected");
		
	if (status[0] == 1) {//初診予約時
		if (status[2] == 1) {//PM2：00～PM4:30
			switch (hour.val()) {
			case "16":
				minute.html(_options[0]+_options[1]+_options[2]);
				break;
			default:
				minute.html(_options[0]+_options[1]+_options[2]+_options[3]);
				break;
			}
		} else if (status[2] == 2) {//PM4：45～PM7:30
			switch (hour.val()) {
			case "16":
				minute.html(_options[3]);
				break;
			case "19":
				minute.html(_options[0]+_options[1]+_options[2]);
				break;
			default:
				minute.html(_options[0]+_options[1]+_options[2]+_options[3]);
				break;
			}
		} else if (status[2] == 3) {//PM2：00～PM7:30
			switch (hour.val()) {
			case "19":
				minute.html(_options[0]+_options[1]+_options[2]);
				break;
			default:
				minute.html(_options[0]+_options[1]+_options[2]+_options[3]);
				break;
			}
		} else if (status[2] == 4) {//AM10：00～AM12:30
			switch (hour.val()) {
			case "12":
				minute.html(_options[0]+_options[1]+_options[2]);
				break;
			default:
				minute.html(_options[0]+_options[1]+_options[2]+_options[3]);
				break;
			}
		} else if (status[2] == 5) {//PM2：00～PM5:30
			switch (hour.val()) {
			case "17":
				minute.html(_options[0]+_options[1]+_options[2]);
				break;
			default:
				minute.html(_options[0]+_options[1]+_options[2]+_options[3]);
				break;
			}
		} else if (status[2] == 6) {//AM10：00～PM5:30
			switch (hour.val()) {
			case "12":
				minute.html(_options[0]+_options[1]+_options[2]);
				break;
			case "17":
				minute.html(_options[0]+_options[1]+_options[2]);
				break;
			default:
				minute.html(_options[0]+_options[1]+_options[2]+_options[3]);
				break;
			}
		}
	}
		var flag =  String(hour.attr("class")).match(/half.*/);
	flag = String(flag);
	if(flag){
		target_hour = flag.replace("half_","").split("-");
		
		for(i=0; i<target_hour.length; i++){
			if(hour.val() == target_hour[i]){
				switch (target_hour[i]){
					case "9":
						minute.children('[value="00"],[value="15"]').hide();
						minute.children('[value="30"]').attr("selected","selected");
						break;
					case "12":
						minute.children('[value="45"]').hide();
						break;
					case "17":
						minute.children('[value="45"]').hide();
						break;
					case "19":
						minute.children('[value="45"]').hide();
						break;
					default:
						break;
				}
			}
		}
	}
}


//load

$(function(){
	yoyakujikan_minute();
		$("form[name='yoyaku00'] input").click(function(){
			if(!$(this).parents("form").hasClass("sumi")) {
				parent.calendar_init();
			}
	});

		$("form[name='yoyaku01'] input.gonext").click(function(){
				parent.calendar_init();
	});
	
});

