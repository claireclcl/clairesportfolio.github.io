function navBarFuntion() 
{
    var navBarID = document.getElementById("top-nav");
    
    if (navBarID.className === "top-nav-bar") 
    {
        navBarID.className += " responsive";
    } else {
        navBarID.className = "top-nav-bar";
    }
  }