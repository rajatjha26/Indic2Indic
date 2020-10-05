
var fromto = ''; var jobstatus='';
var formData ='';var jobid='';
var noofpages=0; var flag=0;
var inter_out;

var langg;

$(document).ready(function(){
	$("#loading").hide();
	$("#savetype").hide();
	$("#download").hide();
	$("#edit").hide();
});

function startRead(evt) {
var formData = new FormData();
formData.append('inputfile', $('#file')[0].files[0]);
	$.ajax({
		url: "scripts/upload.php",
		type: 'POST',
		data: formData,
		async: false,
		cache: false,
		contentType: false,
		processData: false,
		success: function (data) {
			$("#inputArea").val(data);
			var tmp = $("#inputArea").val();
			$("#inputArea").text(tmp);
			$("#inputArea").height("auto");
			var h = $("#inputArea").height();
			$("#result").css("height",h);
		},
		error:function  (jqXHR, exception) {
			$("#loading").hide();
			var msg = '';
			if (jqXHR.status === 0) {
				msg = 'Not connect.\n Verify Network.';
			} else if (jqXHR.status == 404) {
				msg = 'Requested page not found. [404]';
			} else if (jqXHR.status == 500) {
				msg = 'Internal Server Error [500].';
			} else if (exception === 'parsererror') {
				msg = 'Requested JSON parse failed.';
			} else if (exception === 'timeout') {
				msg = 'Time out error.';
			} else if (exception === 'abort') {
				msg = 'Ajax request aborted.';
			} else {
				msg = 'Uncaught Error.\n' + jqXHR.responseText;
			}
			alert("Error in File conversion "+msg);
		}

	});
}



function saveasfile(){
	var savetext =$("#result").val();

	if(typeof savetext =="undefined" || savetext == "") {
		alert("File cannot be downloaded as text is empty");
		return false;
	}

	var flag = $("#savetype").is(":visible");
	var flag1 = $("#savetype-text").is(":visible");
	var type='';
	if(flag){
		type = $("#savetype").val();
	}
	else{
		type = $("#savetype-text").val();
	}
	var filename='';

	if(type=="txt"){
		filename = "converter.txt";
	saveTextAs(savetext, filename,"",type);
	}
	else if(type=="csv"){
		filename = "converter.csv";
	saveTextAs(savetext, filename,"",type);
	}
	else if(type=="doc"){
		filename = "converter.doc";
	saveTextAs(savetext, filename,"",type);
	}
	else if(type=="rtf"){
		filename = "converter.rtf";
	saveTextAs(savetext, filename,"",type);
	}
	else if (type=="pdf"){
		filename = "converter.pdf";
		var newWin = window.open();
		newWin.document.write(savetext);
		newWin.document.close();
		newWin.focus();
		newWin.print();
		newWin.close();
		return false;
		var docDefinition = { content:[ {text:savetext ,fontSize:14} ] };
		
	}
	else{
		filename = "converter.txt";
	saveTextAs(savetext, filename,"",type);
	}

}


function empty(){
//	alert("aim here");
document.getElementById("input").value="";
//	$("#inputArea").empty();
//		$("#result").empty();
		
document.getElementById("result").innerHTML="";


}


 $(document).ready(function(){
  

;


}); 
