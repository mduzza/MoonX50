var show_menu_status=1;
function show_menu(){
  if(show_menu_status==0)
  {
    $('#user_nav').hide();
    show_menu_status=1;
  }
  else
  {
     $('#user_nav').show();
    show_menu_status=0;
  }

}



