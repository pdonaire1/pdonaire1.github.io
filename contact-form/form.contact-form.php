<?php
		/****SET THE MAX CHARS FOR EACH MESSAGE***************/
			
			//it is recommended not to set the max too high, to prevent extremely long messages
			// from stalling your server
			
			$EMAIL_MAX = 2500;
		
		/*****************************************************/

		//function for stripping whitespace and some chars
		function cleanUp($str_to_clean, $newlines, $spaces){
		
			//build list of whitespace chars to be removed
			$bad_chars = array('\r', '\t', ';');
		
			//if newlines are false, add that to the list of bad chars
			if(!$newlines){array_push($bad_chars, '\n');}
			
			//if spaces are false, strip them too
			if(!$spaces){array_push($bad_chars, ' ');}
			
			$str_to_clean_a = str_replace($bad_chars, '', $str_to_clean);
			$str_to_clean_b = strip_tags($str_to_clean_a);
			return $str_to_clean_b;
		}
		
		//function to check for valid email address pattern
		function checkEmail($email) {
			if(!eregi("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$", $email)) {return false;}
			return true;
		}
		//function to check for valid url pattern
		function checkURL($url) {
			if(!eregi("^http:\/\/", $url)) {return false;}
			return true;
		}
?>
<?php
	if(isset($_POST["submitForm"])){

		$_name = cleanUp($_POST["sender_name"], false, true);

		$_email = cleanUp($_POST["sender_email"], false, false);

		$_message = cleanUp($_POST["sender_message"], true, true);

		
		$_body = "You have been sent this message from your contact form\n\n";
		
		if($_name){
			$_body .= "NAME: $_name\n\n";
		}
		
		if($_email){
			$_body .= "EMAIL: $_email\n\n";
		}
		
		if($_url){
			$_body .= "URL: $_url\n\n";
		}
		
		if($_phone){
			$_body .= "PHONE: $_phone\n\n";
		}
		
		if($_message){
		
			//check length of body, reduce to max chars
			if(strlen($_message) > $EMAIL_MAX){$_message= substr($_message, 0, $EMAIL_MAX);}else{$_message = $_message;}
			if(strlen($_message) > $SMS_MAX){$_message2 = substr($_message, 0, $SMS_MAX);}else{$_message2 = $_message;}
		}
		
		

		//store the recipient(s)
		$_to = array();

		//now get the recipient(s)
		$_to[] = "sarfraz.shoukat@gmail.com";
		
		//define the subject
		if(!$_subject){$_subject = "E-Mail from your contact form";}

		
		if(!$_name){$_name = "CONTACT FORM";}
		if(!$_email){$_email = $_name;}
		
		//set the headers
		$_header = "From: $_name < $_email >" . "\r\n" .
    "Reply-To: ".$_email."\r\n" .
    "Super-Simple-Mailer: supersimple.org";
		
		//we can send up to 2 emails (EMAIL and/or SMS)
		if(count($_to) > 2){ $_to = array_slice($_to,0,2);}
		
		for($i=0;$i<count($_to);$i++){
			
			//get the correct message, based on where it is delivering to
			if(strstr($_to[$i],"teleflip.com")){$_text = $_body.$_message2;}else{$_text = $_body.$_message;}
			
			//send the email(s)
			mail($_to[$i], $_subject, $_text, $_header);
			
		}

		header("Location: {$_POST['form_page']}?sent");
	}
	?>
