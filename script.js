var tall = document.getElementById("tall");
      var small = document.getElementById("small");
      var about = document.getElementById("about");
      var projects = document.getElementById("projects");
      var contact = document.getElementById("contact");

      window.addEventListener("scroll", function () {
        var value = window.scrollY;
        tall.style.marginTop = value * 0.8 + "px";
        small.style.marginLeft = value * 0.2 + "px";
      });

      // window panel
      var closes1 = document.getElementById("closess1");
      var closes2 = document.getElementById("closess2");
      var openbt = document.getElementById("openbt");
      var openss = document.getElementById("opens");
      var liked = document.getElementById("liked");
      
      var count = 0;

      function opens() {
        if (count % 2 == 0) {
          liked.style.marginTop = "1%";
            openbt.textContent = "Close";
            closes1.style.display = "none";
            closes2.style.display = "none";
            openss.style.display="block"
        } else {
          openbt.textContent = "Open";
          liked.style.marginTop = "50%";
            openss.style.display="none"
          closes1.style.display = "block";
          closes2.style.display = "block";
         
        }
        count++;
      }

var thumbd = document.getElementById("thumbdown");
var thumbu = document.getElementById("thumbup");
var note = document.getElementById("note");

function thumbup() {
  thumbu.src = "img/thumbup.jpg";
  thumbd.src = "img/thumbdownempty.jpg";
  note.textContent = "Thank You !!";
}
function thumbdown() {
  thumbd.src = "img/thumbsdown.jpg";
  thumbu.src = "img/thumbupempty.jpg";
  note.textContent = "I will Improve it !!";
}

var msg = document.getElementById("msg");
var na = document.getElementById("n");
var em = document.getElementById("e");
var tx = document.getElementById("t");
var num=0

function msgrepeat() {
  msg.style.display = "none";
}

function msgsent() {
  msg.style.display = "block";
  na.value = "";
  em.value = "";
  tx.value = "";
  setTimeout(msgrepeat, 4000);
}




