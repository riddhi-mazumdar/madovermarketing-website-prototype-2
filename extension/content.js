(function(){
 if(window.top!==window.self)return;
 const btn=document.createElement('button');btn.id='mom-lens-button';btn.innerHTML='✦ MOM LENS';document.documentElement.appendChild(btn);
 const panel=document.createElement('aside');panel.id='mom-lens-panel';panel.innerHTML=`
 <div class="mom-head"><b>M.O.M LENS</b><button id="mom-close">×</button></div>
 <div class="mom-kicker">MARKETING AUTOPSY / LIVE PAGE</div>
 <h2>${document.title.slice(0,70) || 'Untitled page'}</h2>
 <div class="mom-grid">
  <div><small>HOOK</small><strong>8.8/10</strong></div>
  <div><small>CTA</small><strong>7.6/10</strong></div>
  <div><small>CULTURE</small><strong>HIGH</strong></div>
  <div><small>CLARITY</small><strong>9.1/10</strong></div>
 </div>
 <div class="mom-take"><small>M.O.M TAKE</small><p>The page is selling attention before it sells the product. The strongest move is the first visible promise.</p></div>
 <button id="mom-steal">STEAL THIS LESSON →</button>`;
 document.documentElement.appendChild(panel);
 btn.onclick=()=>panel.classList.toggle('open');
 panel.querySelector('#mom-close').onclick=()=>panel.classList.remove('open');
 panel.querySelector('#mom-steal').onclick=()=>{navigator.clipboard?.writeText('Marketing lesson: sell the promise before the product.');panel.querySelector('#mom-steal').textContent='COPIED. GO MAKE SOMETHING.'};
 window.addEventListener('message',e=>{if(e.data?.source==='MOM_LENS'&&e.data.action==='open')panel.classList.add('open')});
})();