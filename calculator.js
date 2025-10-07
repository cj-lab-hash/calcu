
function calc() {
    var bin1 = document.getElementById("bin1").valueAsNumber;
    var bin8 = document.getElementById("bin8").valueAsNumber;
    var syl = document.getElementById("syl").valueAsNumber;
    
    let syl1 = syl/100;
    let ttested = bin1 + bin8;
    let yield= (bin1/ttested) * 100;
    var nbin1 = (ttested * syl1) + 1;
    let ndbin1 = nbin1 - bin1;
    let uryield = (nbin1/bin8)*100;
    

    var i = 0;
        if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 25);
function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }



const myTimeOut = setTimeout(final, 2500);


    
 


function final() {

document.getElementById("ttested").innerHTML = "Total Device = " + ttested;
document.getElementById("yield").innerHTML = "First Pass Yield = " + yield.toFixed(2) + "%";
document.getElementById("nbin1").innerHTML = "Total Bin 1 needed to hit SYL = " + nbin1.toFixed(0);
document.getElementById("ndbin1").innerHTML = "Needed Bin 1 during URE = " + ndbin1.toFixed(0);
document.getelementbyid("uryield").innerhtml = "Yield during URE = " + uryield.tofixed(0);

    
  }
}
function clr() {
    document.getElementById("bin1").value = '';
    document.getElementById("bin8").value = '';
    document.getElementById("syl").value = '';
    window.location.reload();
}





