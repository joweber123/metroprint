function responsiveNav() {
  var innerClass = document.getElementById('site-inner').classList;
  if(innerClass.contains("active")){
    innerClass.remove("active");
  }else{
    innerClass.add("active");
  }
  if(innerClass.contains("not-active")){
    innerClass.remove("not-active");
  }else{
    innerClass.add("not-active");
  }
}

window.addEventListener('resize', removeActiveClass);



  function removeActiveClass(){
    var innerClass = document.getElementById('site-inner').classList;
    innerClass.remove("active");
    }
