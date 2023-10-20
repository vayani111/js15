function addtodo() {
    var input = document.getElementById("input");
    var lielement = document.createElement("li");
    var litext = document.createTextNode(input.value);
    lielement.appendChild(litext);
  
    var ul = document.getElementById("list");
  
    var delbtn = document.createElement("button");
    var deltvt = document.createTextNode("Delete");
    delbtn.setAttribute("onclick", "delitem(this)");
    delbtn.appendChild(deltvt);
  
    lielement.appendChild(delbtn);
  
    var editbtn = document.createElement("button");
    var edittvt = document.createTextNode("Edit");
    editbtn.appendChild(edittvt);
    lielement.appendChild(editbtn);
  
    editbtn.setAttribute("onclick", "edititem(this)");
  
    ul.appendChild(lielement);
    input.value = "";
  }
  
  function delitem(x) {
    x.parentNode.remove();
  }
  
  function edititem(x) {
    var newValue = prompt("Enter updated value...........");
    if (newValue !== null) { 
      x.parentNode.firstChild.nodeValue = newValue;
    }
  }
  
