var myNodelist = document.getElementsByTagName("LI");

for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  span.className = "close";
  span.textContent = "\u00D7";
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var listItem = this.parentElement;
    listItem.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
});

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value.trim();

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    li.textContent = inputValue;

    var span = document.createElement("SPAN");
    span.className = "close";
    span.textContent = "\u00D7";
    li.appendChild(span);

    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";

    span.onclick = function() {
      li.style.display = "none";
    }
  }
}
