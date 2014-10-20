//changes the object source to a youtube video
function fatman ()
	{
	document.getElementById('ob1').setAttribute('data' ,'http://www.youtube.com/v/xDys8IwuyNs?fs=1&amp;hl=en_GB');
	}

// replaces the main buttons when eached is clicked	
function replace()
	{ 
	document.getElementById('buttona').setAttribute('src' ,'./images/button1.png');
	document.getElementById('buttonc').setAttribute('src' ,'./images/button.png');
	document.getElementById('buttone').setAttribute('src' ,'./images/button.png');
	}
	
function replace1()
	{
	document.getElementById('buttona').setAttribute('src' ,'./images/button.png');
	document.getElementById('buttonc').setAttribute('src' ,'./images/button1.png');
	document.getElementById('buttone').setAttribute('src' ,'./images/button.png');
	}
function replace2()
	{
	document.getElementById('buttona').setAttribute('src' ,'./images/button.png');
	document.getElementById('buttonc').setAttribute('src' ,'./images/button.png');
	document.getElementById('buttone').setAttribute('src' ,'./images/button1.png');
	}
function replace3()
	{
	document.getElementById('buttona').setAttribute('src' ,'./images/button.png');
	document.getElementById('buttonc').setAttribute('src' ,'./images/button.png');
	document.getElementById('buttone').setAttribute('src' ,'./images/button.png');
	}
	
// allows an image to change once it is rolled over with the mouse	
function on_hov()
	{
	document.getElementById('back1').setAttribute('src' ,'./images/back_h.png');
	}
function on_out()
	{
	document.getElementById('back1').setAttribute('src' ,'./images/back.png');
	}
function on_hov1()
	{
	document.getElementById('ad1').setAttribute('src' ,'./images/advert_h.png');
	}
function on_out1()
	{
	document.getElementById('ad1').setAttribute('src' ,'./images/advert.png');
	}
function on_hov2()
	{
	document.getElementById('contact').setAttribute('src' ,'./images/contact2.png');
	}
function on_hov_story()
	{
	document.getElementById('statstory').setAttribute('src' ,'./images/story1.png');
	}
function on_hov_attr()
	{
	document.getElementById('statattr').setAttribute('src' ,'./images/attr1.png');
	}
function on_hov_karma()
	{
	document.getElementById('statkarma').setAttribute('src' ,'./images/karma1.png');
	}
function on_hov_vats()
	{
	document.getElementById('statvats').setAttribute('src' ,'./images/vats1.png');
	}
function on_hov_comps()
	{
	document.getElementById('statcomps').setAttribute('src' ,'./images/companions1.png');
	}
function on_out2()
	{
	document.getElementById('contact').setAttribute('src' ,'./images/contact1.png');
	}
function on_hov3()
	{
	document.getElementById('newsletter').setAttribute('src' ,'./images/newsletter2.png');
	}
function on_out3()
	{
	document.getElementById('newsletter').setAttribute('src' ,'./images/newsletter1.png');
	}	
function on_hov4()
	{
	document.getElementById('site').setAttribute('src' ,'./images/site2.png');
	}
function on_out4()
	{
	document.getElementById('site').setAttribute('src' ,'./images/site1.png');
	}
function on_out_story()
	{
	document.getElementById('statstory').setAttribute('src' ,'./images/story.png');
	}
function on_out_attr()
	{
	document.getElementById('statattr').setAttribute('src' ,'./images/attr.png');
	}
function on_out_karma()
	{
	document.getElementById('statkarma').setAttribute('src' ,'./images/karma.png');
	}
function on_out_vats()
	{
	document.getElementById('statvats').setAttribute('src' ,'./images/vats.png');
	}
function on_out_comps()
	{
	document.getElementById('statcomps').setAttribute('src' ,'./images/companions.png');
	}

// when the main navigation buttons are pressed these functions change the source of the object to the corresponding page	
function change()
			{
			document.getElementById('ob1').setAttribute('data' ,'./stats.html');
			}

function change_story()
			{
			document.getElementById('ob1').setAttribute('data' ,'./stats.html#story');
			} 

function change_attr()
			{
			document.getElementById('ob1').setAttribute('data' ,'./stats.html#attr');
			}

function change_karma()
			{
			document.getElementById('ob1').setAttribute('data' ,'./stats.html#karma');
			}

function change_vats()
			{
			document.getElementById('ob1').setAttribute('data' ,'./stats.html#vats');
			}
			
function change_comps()
			{
			document.getElementById('ob1').setAttribute('data' ,'./stats.html#comps');
			}
			
function change1()
			{
			document.getElementById('ob1').setAttribute('data' ,'./items.html');
			}
			
function change2()
			{
			document.getElementById('ob1').setAttribute('data' ,'./data.html');
			}
			
function change3()
			{
			document.getElementById('ob1').setAttribute('data' ,'./home.html');
			} 
			
function change_contact()
			{
			document.getElementById('ob1').setAttribute('data' ,'./contact.html');
			}
			
function change_usability()
			{
			document.getElementById('ob1').setAttribute('data' ,'./usability.html');
			}

// this allows me to show and hide the navigation bar on the stats page
function toggle_stats_show() 
			{
			var ele = document.getElementById("stats-nav");
			var text = document.getElementById("buttona");
			
						if(ele.style.display === "none") {
								ele.style.display = "block";
							text.innerHTML = "show";
						}
						else {
							ele.style.display = "block";
							text.innerHTML = "hide";
						}
			} 
function toggle_stats_hide() 
			{
			var ele = document.getElementById("stats-nav");
			var text = document.getElementById("buttona");
			
						if(ele.style.display === "block") {
								ele.style.display = "none";
							text.innerHTML = "show";
						}
						else {
							ele.style.display = "none";
							text.innerHTML = "hide";
						}
			} 

//this removes the terminal screen image to allow the user to insert data into the contact form and replaces it once navigated to another page			
function toggle_terminal_show() 
			{
			var ele = document.getElementById("terminal");
			var text = document.getElementById("contact");
			
						if(ele.style.display === "none") {
								ele.style.display = "block";
							text.innerHTML = "show";
						}
						else {
							ele.style.display = "block";
							text.innerHTML = "hide";
						}
			} 
function toggle_terminal_hide() 
			{
			var ele = document.getElementById("terminal");
			var text = document.getElementById("contact");
			
						if(ele.style.display === "block") {
								ele.style.display = "none";
							text.innerHTML = "show";
						}
						else {
							ele.style.display = "none";
							text.innerHTML = "hide";
						}
			} 


//these play the beep sounds once navigation buttons are pressed			
function playSound(soundfile) {
document.getElementById("ad11").innerHTML=document.getElementById("ad11").innerHTML +
"<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

function playSound1(soundfile) {
document.getElementById("back11").innerHTML=document.getElementById("back11").innerHTML +
"<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

function playSound2(soundfile) {
document.getElementById("buttona1").innerHTML=document.getElementById("buttona1").innerHTML +
"<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

function playSound3(soundfile) {
document.getElementById("buttonb1").innerHTML=document.getElementById("buttonb1").innerHTML +
"<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

function playSound4(soundfile) {
document.getElementById("buttonc1").innerHTML=document.getElementById("buttonc1").innerHTML +
"<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}