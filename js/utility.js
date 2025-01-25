function copy(text) {
  navigator.clipboard.writeText(text)

}

const copy15 = document.getElementById('copy-15');
copy15.addEventListener('click', function () {
  copy('NEW15')
  copy15.innerText = 'Copy Coupon';



});



const copy20 = document.getElementById('copy-20');
copy20.addEventListener('click', function () {
  copy('Couple 20')
  copy20.innerText = 'Copy Coupon'
  console.log('copy')
})


// ============================================================

document.getElementById('Apply').addEventListener('click', function () {
  const Applyin = document.getElementById('Apply-input');
  const Applyintext = Applyin.value;

  if (setArray.length == 0) {
    document.getElementById('Apply').innerText = 'Feild'
    getId('gtotal').innerText = '---';
    Applyin.value = '';
    return
  }

  if (Applyintext == 'NEW15') {
    document.getElementById('Apply').innerText = 'Applyed'

    const miampraice = getId('total').innerText;
    const pricenum = parseInt(miampraice);
    const grantedprice = pricenum - ((pricenum * 15) / 100);
    getId('gtotal').innerText = grantedprice;

  }
  else if (Applyintext == 'Couple 20') {
    document.getElementById('Apply').innerText = 'Applyed'
    const miampraice = getId('total').innerText;
    const pricenum = parseInt(miampraice);
    const grantedprice = pricenum - ((pricenum * 20) / 100);
    getId('gtotal').innerText = grantedprice;

  }
  else {

    document.getElementById('Apply').innerText = 'Feild'
    getId('gtotal').innerText = '---';
  }


})


// =========================================================================

const setArray = [];
const allId = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4','E1' ,'E2' ,'E3' ,'E4' ,'F1' ,'F2' ,'F3' ,'F4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4', 'I1', 'I2', 'I3', 'I4', 'J1', 'J2', 'J3', 'J4']

for (const st of allId) {
  getId(st).style.cursor = 'pointer';
  // getId(st).classList.add('btn')
}

function chackArray() {
  console.log(setArray)

  for (const item of allId) {
    getId(item).style.backgroundColor = '#f4f7f7';

   
    getId('next').innerText = 'Next'
  
  }
  bookingsit();


  getId('Apply').innerText = 'Apply'


  chackBg();

  getId('count').innerText = setArray.length;
  // getId('total').innerText = setArray.length*550;
  let count = setArray.length;
  getId('total').innerText = count * 550;

  getId('gtotal').innerText = '---';

}




function getId(setId) {

  const setIdtext = document.getElementById(setId);
  return setIdtext;

}


function chackBg() {
  // Loop through all items in the array
  for (const item of setArray) {
    changebg(item); // Call the 'changebg' function for each item
  }
}

function changebg(bgid) {
  const setbg = document.getElementById(bgid); // Get the element by its ID
  if (setbg) { // Ensure the element exists
    setbg.style.backgroundColor = '#1cd100d3'; // Change its background color
  } else {
    console.error(`Element with ID "${bgid}" not found.`);
  }
}




function btnclick(inid) {
  if (!setArray.includes(inid) && setArray.length < 4) {
    setArray.push(inid);
  }
  else {
    const index = setArray.indexOf(inid); // Find the index of 'A2'
    if (index > -1) {
      setArray.splice(index, 1); // Remove 'A2' from the array
    }
  }
}


function hiddenEliment(elementId) {
  const elementid = document.getElementById(elementId);
  elementid.classList.add('hidden')



}
function showEliment(elementId) {
  const elementid = document.getElementById(elementId);
  elementid.classList.remove('hidden')
  elementid.classList.add('flex')


}

if(setArray.length>0){

}



function bookingsit() {
 
  const ticketCound = document.getElementById('ticketCound');
  ticketCound.innerHTML = '';
  
  setArray.forEach(seat => {
    console.log("seat is ", seat);
  
    const ticketdiv = document.createElement('div');
    ticketdiv.classList.add('justify-between', 'xl:gap-24', 'gap-6','flex' , 'mt-2');
  
    ticketdiv.innerHTML = `
        <p class=" xl:text-lg text-[#030712CC]  max-w-2xl text-sm  p-3  rounded-md"> ${seat} </p>
                  <p class=" xl:text-lg text-[#030712CC]  max-w-2xl text-sm  p-3 rounded-md">Economoy</p>
                  <p class=" xl:text-lg text-[#030712CC]  max-w-2xl text-sm   p-3 rounded-md"> 550</p>
    `;
  
    ticketCound.appendChild(ticketdiv);
  });

 

}