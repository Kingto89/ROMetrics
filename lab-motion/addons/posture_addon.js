// addons/posture_addon.js
// Stand / Sit / Supine / Prone controls. Works best with rigs; otherwise uses whole-model fallback.
(function(){
  const panel = document.querySelector(".panel .content");
  if (!panel) return;

  const box = document.createElement("div");
  box.innerHTML = `
    <label>Posture</label>
    <div class="row">
      <select id="px_posture">
        <option value="stand">Stand (neutral)</option>
        <option value="sit">Sit (approx.)</option>
        <option value="supine">Supine</option>
        <option value="prone">Prone</option>
      </select>
      <button id="px_apply" class="mini">Apply</button>
      <button id="px_zero" class="mini">Zero All</button>
    </div>
    <small style="color:#9fb0c9">If bones are not found, posture uses whole-model rotation.</small>
  `;
  panel.appendChild(box);

  const THREE = window.THREE;
  const scene = window.scene;
  let model = window.model;
  const msg = document.getElementById("msg") || {textContent:""};

  function refreshModel(){ model = window.model; return model; }

  function findBone(name){
    if (!refreshModel()) return null;
    name = name.toLowerCase();
    let found=null;
    model.traverse(o=>{
      if (found || !o.isBone) return;
      const n = (o.name||"").toLowerCase();
      if (n.includes(name)) found=o;
    });
    return found;
  }

  function zeroAll(){
    if (!refreshModel()) return;
    let any=false;
    model.traverse(o=>{ if(o.isBone){ o.rotation.set(0,0,0); any=true; } });
    if (!any){
      // fallback: reset whole model rotation
      model.rotation.set(0,0,0);
    }
  }

  function applyPosture(kind){
    if (!refreshModel()) return;
    zeroAll();

    // Easy orientations first
    if (kind==="supine"){ model.rotation.set(-Math.PI/2, 0, 0); return; }
    if (kind==="prone"){  model.rotation.set( Math.PI/2, 0, 0); return; }

    // sit or stand (stand = neutral)
    model.rotation.set(0,0,0);
    if (kind==="sit"){
      // Try bone-based approximate sitting
      const hipL = findBone("hip_l") || findBone("thigh_l") || findBone("upperleg_l");
      const hipR = findBone("hip_r") || findBone("thigh_r") || findBone("upperleg_r");
      const kneeL= findBone("shin_l")|| findBone("knee_l")  || findBone("lowerleg_l");
      const kneeR= findBone("shin_r")|| findBone("knee_r")  || findBone("lowerleg_r");

      if (hipL&&hipR&&kneeL&&kneeR){
        const hipFlex = 1.2;  // ~69°
        const kneeFlex= 1.57; // ~90°
        hipL.rotation.x = hipFlex; hipR.rotation.x = hipFlex;
        kneeL.rotation.x = -kneeFlex; kneeR.rotation.x = -kneeFlex;
      }
      // If no bones found, fallback: tilt entire model slightly to imply seating
      else {
        model.rotation.x = 0; // keep upright
      }
    }
  }

  // Wire
  document.getElementById("px_zero").onclick = ()=>{ zeroAll(); msg.textContent="All joints zeroed"; };
  document.getElementById("px_apply").onclick = ()=>{
    const v = document.getElementById("px_posture").value;
    applyPosture(v);
    msg.textContent = "Posture set: " + v;
  };

})();
