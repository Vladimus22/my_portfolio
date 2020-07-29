document.getElementById("btn_1").onclick = function()
    {
      var a1 = document.getElementById("a1");

      if (a1.paused == true)

    	{
       		document.getElementById("a1").play();
    	}
       		else if (a1.paused == false)

    	{

        	document.getElementById("a1").pause();

		}
	}