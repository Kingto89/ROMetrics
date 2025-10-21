// addons/regions_actions_addon.js
// Upper/Lower body region selector and simple paired action angle (approximate).
// Attempts to rotate bones by name; if not found, shows a note.
(function(){
  const panel = document.querySelector(".panel .content");
  if (!panel) return;

  const ui = document.createElement("div");
  ui.innerHTML = `
    <label>Body Region</label>
    <div class="row">
      <button class="mini" id="rx_upper">Upper</button>
      <button class="mini" id="rx_lower">Lower</button>
    </div>
    <label>Action (Paired Motion)</label>
    <div class="row">
      <select id="rx_action">
        <option value="">(Select a motion…)</option>
        <optgroup label="Cervical, Trunk, Shoulder & Arm">
          <option value="cervflex">Cervical Flex/Ext</option>
          <option value="trunkflex">Trunk Flex/Ext</option>
          <option value="shoulderflex">Shoulder Flex/Ext</option>
          <option value="elbowflex">Elbow Flex/Ext</option>
        </optgroup>
        <optgroup label="Hip, Leg & Foot">
          <option value="hipflex">Hip Flex/Ext</option>
          <option value="kneeflex">Knee Flex/Ext</option>
          <option value="ankleflex">Ankle DF/PF</option>
        </optgroup>
      </select>
    </div>
    <div class="row">
      <label style="margin:0">Angle (°)</label>
      <input id="rx_deg" type="range" min="-120" max="120" value="0" disabled>
      <button id="rx_zero" class="mini" disabled>Zero Motion</button>
    </div>
    <small id="rx_note" style="color:#9fb0c9"></small>
  `;
  panel.appendChild(ui);

  const THREE = window.THREE;
  const scene = window.scene;
  let model = window.model;
  const msg = document.getElementById("msg") || {textContent:""};

  function refresh(){ model = window.model; return model; }

  function bone(name){
    if (!refresh()) return null;
    name = name.toLowerCase();
    let out=null;
    model.traverse(o=>{
      if (out || !o.isBone) return;
      const n = (o.name||"").toLowerCase();
      if (n.includes(name)) out=o;
    });
    return out;
  }

  function setNote(t){ const el=document.getElementById("rx_note"); if(el) el.textContent=t||""; }

  const rx_action = document.getElementById("rx_action");
  const rx_deg    = document.getElementById("rx_deg");
  const rx_zero   = document.getElementById("rx_zero");
  let currentKey  = "";

  function cfgFromKey(k){
    const map = {
      cervflex: { pair:"Cervical Flex/Ext", min:-60, max:60, bones:["neck","head"] , axis:"x", invert:false },
      trunkflex:{ pair:"Trunk Flex/Ext",    min:-60, max:90, bones:["spine","spine1","spine2","chest"] , axis:"x", invert:false },
      shoulderflex:{pair:"Shoulder Flex/Ext",min:-60, max:180, bones:["shoulder_l","upperarm_l","arm_l"], axis:"x", invert:false },
      elbowflex:{ pair:"Elbow Flex/Ext",    min:-10, max:150, bones:["lowerarm_l","forearm_l","elbow_l"], axis:"x", invert:true },
      hipflex:  { pair:"Hip Flex/Ext",      min:-30, max:120, bones:["thigh_l","upperleg_l","hip_l"], axis:"x", invert:false },
      kneeflex: { pair:"Knee Flex/Ext",     min:-5,  max:150, bones:["shin_l","lowerleg_l","knee_l"], axis:"x", invert:true },
      ankleflex:{ pair:"Ankle DF/PF",       min:-30, max:50,  bones:["foot_l","ankle_l"], axis:"x", invert:false },
    };
    return map[k] || null;
  }

  function applyAngle(key, deg){
    const cfg = cfgFromKey(key); if (!cfg) return;
    // Enable mirror side too if available
    const mirror = (n)=>n.replace("_l","_r").replace("left","right");
    let count=0;
    for (const base of cfg.bones){
      const bL = bone(base); const bR = bone(mirror(base));
      if (bL){ bL.rotation[cfg.axis] = (cfg.invert ? -1 : 1) * (deg*Math.PI/180); count++; }
      if (bR){ bR.rotation[cfg.axis] = (cfg.invert ?  1 : -1) * (deg*Math.PI/180); count++; }
    }
    setNote(count? "" : "No matching bones found — action may require a rig with standard bone names.");
  }

  rx_action.addEventListener("change", ()=>{
    currentKey = rx_action.value;
    if (!currentKey){
      rx_deg.disabled = true; rx_zero.disabled = true;
      setNote("Select a motion to enable the slider.");
      return;
    }
    const cfg = cfgFromKey(currentKey);
    if (cfg){ rx_deg.min = cfg.min; rx_deg.max = cfg.max; }
    rx_deg.value = "0";
    rx_deg.disabled = false; rx_zero.disabled = false;
    applyAngle(currentKey, 0);
    setNote("");
  });

  rx_deg.addEventListener("input", ()=>{
    if (!currentKey) return;
    const deg = parseFloat(rx_deg.value)||0;
    applyAngle(currentKey, deg);
  });

  rx_zero.addEventListener("click", ()=>{
    if (!currentKey) return;
    rx_deg.value="0"; applyAngle(currentKey, 0);
  });

})();