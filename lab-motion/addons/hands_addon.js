// addons/hands_addon.js
// Adds an emoji-hands section with draggable 🤚🏽🤚🏽 and simple controls.
(function(){
  const panel = document.querySelector(".panel .content");
  if (!panel) return;

  const section = document.createElement("div");
  section.innerHTML = `
    <label>Hands</label>
    <div class="row">
      <button id="eh_add" class="mini">✋ Hands</button>
    </div>
    <details id="eh_panel" style="display:none">
      <summary>Hand Controls</summary>
      <div class="row">
        <button id="eh_pickS" class="mini">Active: Stabilize</button>
        <button id="eh_pickT" class="mini">Active: Test</button>
      </div>
      <div class="row">
        <label style="margin:0">Size</label>
        <input id="eh_size" type="range" min="60" max="220" value="96">
      </div>
      <div class="row">
        <button id="eh_flip" class="mini">Flip</button>
        <button id="eh_toggle" class="mini">Hide/Show</button>
        <button id="eh_reset" class="mini">Reset</button>
        <button id="eh_remove" class="mini">Remove</button>
      </div>
      <small style="color:#9fb0c9">Drag the hands over the model. Size slider adjusts both.</small>
    </details>
  `;
  panel.appendChild(section);

  // CSS
  const css = document.createElement("style");
  css.textContent = `
    .handTag{ position:fixed; z-index:15; pointer-events:auto; user-select:none;
      filter: drop-shadow(0 2px 8px rgba(0,0,0,.45)); cursor:grab; transform-origin:center center; }
    .handTag:active{ cursor:grabbing; }
    .handTag .badge{ position:absolute; right:-8px; bottom:-8px; font:700 10px/1 system-ui,Segoe UI,Roboto;
      color:#0b1220; background:#f59e0b; border:1px solid rgba(0,0,0,.35);
      border-radius:999px; padding:3px 6px; transform:translate(50%,50%); pointer-events:none; box-shadow:0 2px 6px rgba(0,0,0,.45); }
    .handTag.stab .badge{ background:#14b8a6; } .handTag.test .badge{ background:#f59e0b; }
  `;
  document.head.appendChild(css);

  const $ = (id)=>document.getElementById(id);
  const addBtn=$("eh_add"), panelEl=$("eh_panel"), size=$("eh_size"), flip=$("eh_flip");
  const pickS=$("eh_pickS"), pickT=$("eh_pickT"), tog=$("eh_toggle"), rst=$("eh_reset"), rm=$("eh_remove");
  const msg = document.getElementById("msg") || {textContent:""};

  let stab=null, test=null, active="stab", shown=true, flipped=false;

  function mkHand(id){
    const div = document.createElement("div");
    div.className="handTag"; div.id=id;
    const badge = document.createElement("span"); badge.className="badge"; badge.textContent = id==="eh_handS"?"S":"T";
    div.appendChild(badge);
    if (id==="eh_handS") div.classList.add("stab"); else div.classList.add("test");
    const em = document.createElement("span"); em.textContent="🤚🏽";
    em.style.display="inline-block"; em.style.fontSize=(parseInt(size?.value||96,10))+"px";
    div.appendChild(em);
    const w=innerWidth,h=innerHeight; const x=id==="eh_handS"?w*0.38:w*0.62; const y=h*0.35;
    div.style.left=x+"px"; div.style.top=y+"px"; div.style.position="fixed";
    let dx=0,dy=0,drag=false;
    div.addEventListener("pointerdown", e=>{drag=true; dx=e.clientX-parseFloat(div.style.left); dy=e.clientY-parseFloat(div.style.top); e.preventDefault();});
    window.addEventListener("pointermove", e=>{if(!drag)return; div.style.left=(e.clientX-dx)+"px"; div.style.top=(e.clientY-dy)+"px";});
    window.addEventListener("pointerup",   ()=>{drag=false;});
    document.body.appendChild(div);
    return div;
  }

  function ensure(){
    if (stab && test) return;
    stab = mkHand("eh_handS"); test = mkHand("eh_handT");
    panelEl.style.display=""; msg.textContent="Emoji hands added — drag to place; use size/flip as needed.";
  }

  addBtn?.addEventListener("click", ()=>{ ensure(); panelEl.open=true; });
  pickS?.addEventListener("click", ()=>{ active="stab"; msg.textContent="Active: Stabilize hand"; });
  pickT?.addEventListener("click", ()=>{ active="test"; msg.textContent="Active: Test hand"; });
  size?.addEventListener("input", ()=>{
    const px = parseInt(size.value||"96",10);
    [stab,test].forEach(div=>{ if(!div)return; const em=div.querySelector("span:not(.badge)"); if(em) em.style.fontSize=px+"px"; });
  });
  flip?.addEventListener("click", ()=>{
    flipped=!flipped; const s=flipped?"scaleX(-1)":"scaleX(1)"; [stab,test].forEach(d=>{ if(d) d.style.transform=s; });
  });
  tog?.addEventListener("click", ()=>{
    shown=!shown; [stab,test].forEach(d=>{ if(d) d.style.display = shown?"" :"none"; });
    msg.textContent = shown ? "Hands shown" : "Hands hidden";
  });
  rst?.addEventListener("click", ()=>{
    if(!stab||!test) return; const w=innerWidth,h=innerHeight;
    stab.style.left=w*0.38+"px"; stab.style.top=h*0.35+"px";
    test.style.left=w*0.62+"px"; test.style.top=h*0.35+"px";
    size.dispatchEvent(new Event("input"));
  });
  rm?.addEventListener("click", ()=>{
    if(stab){stab.remove(); stab=null;} if(test){test.remove(); test=null;}
    msg.textContent="Hands removed"; panelEl.open=false;
  });
})();
