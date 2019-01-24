	var $ = function(id){
			return document.getElementById(id);
		}
		var add = function(){	
			
			
			alert("Wellcome to facebook");

		}
		var checkmail = function(){
			var mail1 = $("content_e").value;
			var mail2 = $("content_re").value;
			var isValid = true;
			if(mail1 != mail2){
				$("baoloi").firstChild.nodeValue="sai";
				isValid = false;

			}
			else{
				$("baoloi").firstChild.nodeValue="";
			}
			if(isValid){
				$("forme").submit();
			}
		}
		window.onload = function(){
			$("content_pw").onclick = checkmail;
			$("submit").onclick = add;
		}