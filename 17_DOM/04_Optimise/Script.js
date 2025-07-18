// code 1
const t1=performance.now();
for (let i = 1; i <=100; i++) {
  let para = document.createElement('p');
  para.textContent="This is Para "+i;
  // n reflow and n repaint
  document.body.appendChild(para);
} 
const t2=performance.now();
console.log(t2-t1);

// code2 (optimise)
const t3=performance.now();
let mydiv=document.createElement('div');
for (let i = 1; i <=100; i++) {
    let para=document.createElement('p');
    // n reflow
    para.textContent="This is Para "+i;
    mydiv.appendChild(para);
}
// 1 repaint
document.body.appendChild(mydiv);
const t4=performance.now();
console.log(t4-t3);

// optimise
const t5=performance.now();
let fregement=document.createDocumentFragment();
for (let i = 1 ;i <= 100; i++) {
    let para=document.createElement('p');
    para.textContent="This is Para "+i;
    // No reflow and no repaint
    fregement.appendChild(para);
}
// 1 reflow and 1 repaint
document.body.appendChild(fregement);
const t6=performance.now();
console.log(t6-t5);


// # single thread
function addPara(){
    let para = document.createElement('p');
    para.textContent = 'Js is single';
    document.body.appendChild(para);
}

function append_N_msg(){
    let para = document.createElement('p');
    para.textContent="hey";
    document.body.appendChild(para);
}

addPara();
append_N_msg();
