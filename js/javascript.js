$(document).ready(function(){
  for (n=2; n<=12; n++){
    content =
    "<div id=choose_field_"+n+" class=choose_field>"+
    "<input type=checkbox id=activate_field_"+n+" name=activate_field_1 value=activate_field_"+n+" onchange=ischecked("+n+");>"+
      "<label>0"+n+":</label>"+
      "<select id=select_field_"+n+" name=select_field_"+n+" disabled onchange=FillOptions("+n+");>"+
        "<option value=none>None</option>"+
        "<option value=id>ID</option>"+
        "<option value=name>Name</option>"+
        "<option value=surname>Surname</option>"+
        "<option value=company>Company</option>"+
        "<option value=email>E-Mail</option>"+
        "<option value=integer>Integer number</option>"+
        "<option value=float>Float number</option>"+
        "<option value=currency>Currency</option>"+
        "<option value=country>Country</option>"+
        "<option value=city>City</option>"+
        "</select>"+
        "<div id=options_field_"+n+"></div></div>";

    document.getElementById('field_'+n).innerHTML = content;
  }
})

function addfield(num) {
  console.log("add: "+num);
}

//Activate the fields
function ischecked(num) {
  if (document.getElementById("activate_field_"+num).checked) {
    console.log(num+" is checked.");
    document.getElementById("select_field_"+num).disabled = false;
  }else{
    console.log(num+" is not checked.");
    document.getElementById("select_field_"+num).disabled = true;
    document.getElementById("select_field_"+num).value = "none";
    document.getElementById("options_field_"+num).innerHTML = "";
  }
}


////////////////////////////////////////
///////////// Fill OPTIONS /////////////
////////////////////////////////////////
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
