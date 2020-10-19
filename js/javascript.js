$(document).ready(function(){

})

function FillOptions(num){
  var selected = document.getElementById('select_field_'+num).value; //get the type of field selected in combobox

  //NONE
  if (selected == "none") {
    document.getElementById('options_field_'+num).innerHTML = "";
  }

  //ID
  else if (selected == "id"){
    content = "<span>Autonumerical from 1.</span>";
    document.getElementById('options_field_'+num).innerHTML = content;
  }

  //NAME
  else if (selected == "name"){
    var content=
      "<select id=name_field_language"+num+" name=name_field_language"+num+">"+
        "<option value=all>All of them</option>"+
        "<option value=english>English</option>"+
        "<option value=french>French</option>"+
        "<option value=spanish>Spanish</option>"+
        "<option value=catalan>Catalan</option>"+
      "</select>"+
      "<select id=name_field_gender"+num+" name=name_field_gender"+num+">"+
        "<option value=all>Indiferent</option>"+
        "<option value=english>Male</option>"+
        "<option value=french>Female</option>"+
      "</select>";
    document.getElementById('options_field_'+num).innerHTML = content;
  }

  //SURNAME
  else if (selected == "surname") {
    var content=
      "<select id=surname_field_language"+num+" name=surname_field_language"+num+">"+
        "<option value=all>All of them</option>"+
        "<option value=english>English</option>"+
        "<option value=french>French</option>"+
        "<option value=spanish>Spanish</option>"+
        "<option value=catalan>Catalan</option>"+
      "</select>";
    document.getElementById('options_field_'+num).innerHTML = content;
  }

  //COMPANY
  else if (selected == "company") {
    var content="<span>Random company name.</span>";
    document.getElementById('options_field_'+num).innerHTML = content;
  }

  //EMAIL
  else if (selected == "email") {
    var content =
    "<select id=email_field_type"+num+" name=email_field_type"+num+">"+
      "<option value=random>Completly random</option>"+
      "<option value=nsr>name+surname@random.com (if exists)</option>"+
      "<option value=nsc>name+surname@company.com (if exists)</option>"+
    "</select>";
    document.getElementById('options_field_'+num).innerHTML = content;
  }

}
