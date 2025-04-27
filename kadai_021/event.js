// const btn=document.getElementById('btn');
// const text=document.getElementById('text');
// setTimeout(()=>{btn.addEventListener('click',text.textContent='ボタンをクリックしました')},2000);


const btn=document.getElementById('btn');
const text=document.getElementById('text');
btn.addEventListener('click',setTimeout(()=>{text.textContent='ボタンをクリックしました'},2000));

