function calc() {
  const bin1 = document.getElementById("bin1").valueAsNumber;
  const bin8 = document.getElementById("bin8").valueAsNumber;
  const syl = document.getElementById("syl").valueAsNumber;

  if (isNaN(bin1) || isNaN(bin8) || isNaN(syl)) {
    alert("Please enter valid numbers for all fields!");
    return;
  }

  const syl1 = syl / 100;
  const ttested = bin1 + bin8;
  const fpYield = (bin1 / ttested) * 100;
  const nbin1 = (ttested * syl1) + 1;
  const ndbin1 = nbin1 - bin1;
  const urYield = (ndbin1 / bin8) * 100;

  // Animate progress bar
  const elem = document.getElementById("myBar");
  let width = 1;
  const id = setInterval(() => {
    if (width >= 100) {
      clearInterval(id);
      showResults();
    } else {
      width++;
      elem.style.width = width + "%";
    }
  }, 25);

  function showResults() {
    document.getElementById("ttested").innerHTML = "Total Device = " + ttested;
    document.getElementById("yield").innerHTML = "First Pass Yield = " + fpYield.toFixed(2) + "%";
    document.getElementById("nbin1").innerHTML = "Total Bin 1 needed to hit SYL = " + nbin1.toFixed(0);
    document.getElementById("ndbin1").innerHTML = "Needed Bin 1 during URE = " + ndbin1.toFixed(0);
    document.getElementById("uryield").innerHTML = "Yield during URE = " + urYield.toFixed(2) + "%";

  }
}

function clr() {
  ["bin1", "bin8", "syl"].forEach(id => document.getElementById(id).value = '');
  ["ttested", "yield", "nbin1", "ndbin1", "uryield"].forEach(id => document.getElementById(id).innerHTML = '');
  document.getElementById("myBar").style.width = "0%";
}


