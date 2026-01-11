document.getElementById('app').innerHTML = 

<header>
  <div class="brand">
    <div class="brand-mark">
      <a href="/" aria-label="Return to home">
        <img src="/rometrics-logo.png" alt="ROMetrics logo">
      </a>
    </div>
    <div class="brand-title"> 
      <span class="app">ROMetrics EHR Sandbox</span>
      <span class="sub">Simulation chart view â€” training only</span>
    </div>
  </div>
  <div class="header-right">
      <div class="pill">
        <span class="pill-dot"></span>
        <span id="scenarioLabel">Scenario Loaded: Case 1</span>
      </div>
      <div class="case-selector">
        <label for="caseSelect">Case</label>
        <select id="caseSelect">
  <option value="CASE_001">Case 1 â€” Cervical Impairment</option>
  <option value="CASE_002">Case 2 â€” Hip Impairment</option>
  <option value="CASE_003">Case 3 â€” Cluster Impairment</option>
  <option value="CASE_004">Case 4 â€” Shoulder Impairment (Feb 2)</option>
  <option value="CASE_005">Case 5 â€” Chronic Low Back (Feb 16)</option>
  <option value="CASE_006">Case 6 â€” Inflammatory Knee (Mar 2)</option>
  <option value="CASE_007">Case 7 â€” Neck/Arm Weakness (Mar 16)</option>
  <option value="CASE_008">Case 8 â€” Persistent Ankle Pain (Apr 6)</option>
  <option value="CASE_009">Case 9 â€” Axial Thoracic Pain (Apr 20)</option>
  <option value="CASE_010">Case 10 â€” Proximal UE Weakness (May 4)</option>
</select>
      </div>
      <span>Clinician: Student User â€¢ v0.1</span>
    </div>
  </header>

  <main>
    <!-- LEFT: PATIENT SUMMARY + PROFILE -->
<aside class="sidebar">
  <div class="sidebar-title">
    <span>Active Chart</span>
    <span id="mrnValue">MRN â€¢ 001</span>
  </div>

  <div class="patient-card">
    <div class="patient-main">
      <div class="avatar" id="patientInitials">SB</div>
      <div class="patient-meta">
        <span class="patient-name" id="patientName">Sarah B â€” 29 y/o</span> 
        </div>
    </div>
  </div>
  
  <div class="patient-tags" id="patientTags">
    <span class="tag-accent">ROMetrics Simulation</span>
    <span class="tag">Cervical ROM &amp; MMT</span>
  </div>

  <div>
    <div class="sidebar-section-title">Patient Profile</div>
    <div class="encounter-list" id="patientProfileList">
      </div>
  </div>
</aside>

    <!-- RIGHT: WORKSPACE -->
    <section class="workspace">
      <div class="workspace-header">
        <div class="tabs">
  <button class="tab active" type="button"><span class="icon"></span>Overview</button>
  <button class="tab" type="button"data-ref="open"><span class="icon"></span>Orders / Referrals</button>
  <button class="tab" type="button"><span class="icon"></span>Exercises</button>
</div>

        <div class="workspace-header-right">
          <span class="status-dot"></span>
          <span>Case Flow: <strong id="caseFlowLabel">Reading â†’ Motion Lab â†’ Goniometry â†’ MMT</strong></span>
        </div>           
              <div>
                <div class="field-label">Case Tags</div>
                <div class="field-value" id="caseTagsSummary">ROMetrics Simulation â€¢ Ortho</div>
              </div>
            </div>
          </div>

         <div class="info-card" id="simStatusCard">
  <div class="info-title">
    <span>Simulation</span>
    <span class="badge">Live Sandbox</span>
  </div>

  <div class="field-grid">
    <div>
      <div class="field-label">Case ID</div>
      <div class="field-value" id="caseIdValue">CASE_001</div>
    </div>
    <div>
      <div class="field-label">Scenario</div>
      <div class="field-value" id="scenarioSummary">â€”</div>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>

        <div class="info-title" style="margin-top:2px;">
          <span>Objective Tools â€” Launch From Chart</span>
          <span class="badge">Click a module to open the ROMetrics view</span>
        </div>

        <div class="module-grid">
          <!-- Motion Lab module -->
          <article class="module" data-route="motion">
            <div class="module-header">
              <div>
                <div class="module-title">Motion Lab â€” Active ROM</div>
              </div>
            </div>
            <div class="module-body">
              Gather case clues. Preview motions and functional limitations, and understand expected ROM before measuring with the goniometer.
            </div>
            <div class="module-meta">
            </div>
            <button class="module-btn" type="button" data-route="motion">
              Open Motion Lab
              <span class="chevron">â†—</span>
            </button>
          </article>

          <!-- Goniometry Trainer module -->
          <article class="module" data-route="gonio">
            <div class="module-header">
              <div>
                <div class="module-title">Goniometry Trainer â€” Primary Region</div>
              </div>
            </div>
            <div class="module-body">
              Place landmarks, align the goniometer, and capture ROM values.
            </div>
            <div class="module-meta">
            </div>
            <button class="module-btn" type="button" data-route="gonio" style="margin-top:12px;">
              Open Goniometry
              <span class="chevron">â†—</span>
            </button>
          </article>

          <!-- MMT Assessment module -->
          <article class="module" data-route="mmt">
            <div class="module-header">
              <div>
                <div class="module-title">MMT Assessment</div>
              </div>
            </div>
            <div class="module-body">
              Use the MMT Trainer to position the model, see resistance vectors, and record the target grade based on the selected case.
            </div>
            <div class="module-meta">
            </div>
            <button class="module-btn" type="button" data-route="mmt">
              Open MMT Assessment
              <span class="chevron">â†—</span>
            </button>
          </article>

           <!-- SOAP / Documentation panel (locked until all 3 modules visited) -->
      <div class="doc-card" id="docCard">
        <h3>Case Documentation â€” SOAP & Goals</h3>

        <div class="doc-section">
          <label>
            Subjective Findings
            <span class="word-hint">(max 100 words)</span>
          </label>
          <textarea id="docSubjective"></textarea>
          <div class="word-counter" data-for="docSubjective"></div>
        </div>

        <div class="doc-section">
          <label>
            Objective Findings
            <span class="word-hint">(max 150 words)</span>
          </label>
          <textarea id="docObjective"></textarea>
          <div class="word-counter" data-for="docObjective"></div>
        </div>

        <div class="doc-section">
          <label>
            Assessment / Diagnosis
            <span class="word-hint">(max 60 words)</span>
          </label>
          <textarea id="docDx"></textarea>
          <div class="word-counter" data-for="docDx"></div>
        </div>

        <div class="doc-section">
          <label>
            Treatment Plan
            <span class="word-hint">(max 150 words)</span>
          </label>
          <textarea id="docPlan"></textarea>
          <div class="word-counter" data-for="docPlan"></div>
        </div>

        <div class="doc-section">
          <label>
            Goals
            <span class="word-hint">(max 100 words)</span>
          </label>
          <textarea id="docGoals"></textarea>
          <div class="word-counter" data-for="docGoals"></div>
        </div>

        <div class="doc-section">
          <label>
            Prognosis
            <span class="word-hint">(max 60 words)</span>
          </label>
          <textarea id="docPrognosis"></textarea>
          <div class="word-counter" data-for="docPrognosis"></div>
        </div>

        <div class="doc-section">
          <label>Submission Status</label>
          <div id="gradeBar" class="grade-bar">
            <div id="gradeFill" class="grade-fill"></div>
          </div>
          <div id="gradeLabel" class="grade-label">Not graded yet</div>

<div class="docSubmitRow" style="margin-top:8px;">
  <button id="docSubmitBtn" class="module-btn" type="button">
    Submit Documentation
    <span class="chevron">âœ“</span>
  </button>

  <span id="docAttemptsInline" class="docAttemptsInline">
    Submissions: 0/3 used (3 left)
  </span>
</div>

<div id="docSubmitStatus" style="margin-top:6px;font-size:12px;color:var(--muted);"></div>

        </div>
      </div>
      </div>
    </section>
  </main>


<script>
  const $ = (id) => document.getElementById(id);

  // Define the CASE_FILES object here so it's globally available for switching and initial load
const CASE_FILES = {
  "CASE_001": {
    file: "../assets/cases/case_001.md",
    label: "CASE_001 â€¢ GONIO-CERVICAL-001",
    scenarioSummary: "Cervical Impairment"
  },
  "CASE_002": {
    file: "../assets/cases/case_002.md",
    label: "CASE_002 â€¢ GONIO-HIP-001",
    scenarioSummary: "Hip Impairment"
  },
  "CASE_003": {
    file: "../assets/cases/case_003.md",
    label: "CASE_003 â€¢ Cluster",
    scenarioSummary: "Cluster impairment "
  },
  "CASE_004": {
    file: "../assets/cases/case_004.md",
    label: "CASE_004 â€¢ SHOULDER",
    scenarioSummary: "Shoulder Impairment",
    unlockDate: "2026-02-02"
  },
  "CASE_005": {
    file: "../assets/cases/case_005.md",
    label: "CASE_005 â€¢ AXIAL",
    scenarioSummary: "Chronic Low Back",
    unlockDate: "2026-02-16"
  },
  "CASE_006": {
    file: "../assets/cases/case_006.md",
    label: "CASE_006 â€¢ INFLAM-KNEE",
    scenarioSummary: "Inflammatory Knee Disorder",
    unlockDate: "2026-03-02"
  },
  "CASE_007": {
    file: "../assets/cases/case_007.md",
    label: "CASE_007 â€¢ CERVICAL",
    scenarioSummary: "Neck Pain with Arm Weakness",
    unlockDate: "2026-03-16"
  },
  "CASE_008": {
    file: "../assets/cases/case_008.md",
    label: "CASE_008 â€¢ ANKLE",
    scenarioSummary: "Persistent Ankle Pain",
    unlockDate: "2026-04-06"
  },
  "CASE_009": {
    file: "../assets/cases/case_009.md",
    label: "CASE_009 â€¢ THORACIC",
    scenarioSummary: "Axial Thoracic Pain",
    unlockDate: "2026-04-20"
  },
  "CASE_010": {
    file: "../assets/cases/case_010.md",
    label: "CASE_010 â€¢ ",
    scenarioSummary: "Proximal UE Weakness",
    unlockDate: "2026-05-04"
  }
};



  //DROP IN START//
const ROUTES = { 
  // token URLs preserved
  motion: "/motions-lab/?caseToken=LAB-CERVICAL-001",
  gonio:  "/goniometry-trainer/?caseToken=GONIO-CERVICAL-001",
  mmt:    "/manual-muscle-tests/?caseToken=MMT-CERVICAL-001",
  notes:  "#soap" // handled inside openRoute, not a real URL
};

const CASE_GONIO_URLS = {
  "CASE_001": "/goniometry-trainer/?caseToken=GONIO-CERVICAL-001",
  "CASE_002": "/goniometry-trainer/?caseToken=GONIO-HIP-002",
  "CASE_003": "/goniometry-trainer/?caseToken=GONIO-CLUSTER-003"
};


  function getCurrentCaseKey(){
    const sel = document.getElementById("caseSelect");
    return sel ? sel.value : "CASE_001";
  }
  // visit tracking â†’ unlock SOAP only after all 3 are true
  let visitedMotion  = false;
  let visitedGonio   = false;
  let visitedMMT     = false;

  // lock / unlock SOAP doc panel
  function updateDocLockState() {
    const card = $("docCard");
    if (!card) return;

    const allVisited = visitedMotion && visitedGonio && visitedMMT;

    if (allVisited) {
      card.style.opacity = "1";
      card.style.pointerEvents = "auto";
    } else {
      card.style.opacity = "0.35";
      card.style.pointerEvents = "none";
    }
  }

  // simple warning text reused for going out of order
  function showSequenceWarning(stepLabel) {
    return window.confirm(
      &#96;You are trying to open "${stepLabel}" before completing Motion Lab.\n\n&#96; +
      "Recommended sequence:\n" +
      "â€¢ Functional / Motion Lab first\n" +
      "â€¢ Goniometry after ROM\n" +
      "â€¢ MMT after objective ROM\n" +
      "â€¢ SOAP / Notes last\n\n" +
      "Press OK to continue anyway, or Cancel to go back."
    );
  }

  // main route handler for module tiles
function openRoute(key) {
    if (!key) return;

    if (key === "motion") {
        const caseKey = getCurrentCaseKey();
       const CASE_MOTION_URLS = {
  "CASE_001": "/motions-lab/?caseToken=LAB-CERVICAL-001",
  "CASE_002": "/motions-lab/?caseToken=LAB-HIP-002",
  "CASE_003": "/motions-lab/?caseToken=LAB-CLUSTER-003"
};


        const url = CASE_MOTION_URLS[caseKey]; // Fallback removed

        if (url) {
            visitedMotion = true;
            updateDocLockState();
            window.open(url, "_blank");
        } else {
            alert("This module is not yet assigned for the selected case.");
        }
        return;
    }

    if (key === "gonio") {
        if (!visitedMotion) {
            const ok = showSequenceWarning("Goniometry");
            if (!ok) return;
        }
        const sel = document.getElementById("caseSelect");
        const caseKey = sel ? sel.value : "CASE_001";

        const url = CASE_GONIO_URLS[caseKey]; // Fallback removed

        if (url) {
            visitedGonio = true;
            updateDocLockState();
            window.open(url, "_blank");
        } else {
            alert("This module is not yet assigned for the selected case.");
        }
        return;
    }

    if (key === "mmt") {
        if (!visitedMotion) {
            const ok = showSequenceWarning("MMT");
            if (!ok) return;
        }
        visitedMMT = true;
        updateDocLockState();
        const caseKey = getCurrentCaseKey();

        const CASE_MMT_URLS = {
  "CASE_001": "/manual-muscle-tests/?caseToken=MMT-CERVICAL-001",
  "CASE_002": "/manual-muscle-tests/?caseToken=MMT-HIP-002",
  "CASE_003": "/manual-muscle-tests/?caseToken=MMT-CLUSTER-003"
};


        const url = CASE_MMT_URLS[caseKey]; // Fallback removed

        if (url) {
            window.open(url, "_blank");
        } else {
            alert("This module is not yet assigned for the selected case.");
        }
        return;
    }
}

  // re-attach handlers for module tiles
  document.querySelectorAll("[data-route]").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const key = el.getAttribute("data-route");
      openRoute(key);
    });
  });

  /* ---------- DOC WORD LIMITS + 3-ATTEMPT GRADE BAR (same as old logic) ---------- */

  const WORD_LIMITS = {
    docSubjective: 100,
    docObjective:  150,
    docDx:         60,
    docPlan:       250,
    docGoals:      100,
    docPrognosis:  60
  };

  function attachWordLimiter(id, limit){
    const field = document.getElementById(id);
    if (!field) return;

    const counter = document.querySelector(&#96;.word-counter[data-for="${id}"]&#96;);

    function update(){
      const text  = field.value.trim();
      const words = text.length ? text.split(/\s+/) : [];

      if (words.length > limit){
        field.value = words.slice(0, limit).join(" ");
      }

      const count = field.value.trim()
        ? field.value.trim().split(/\s+/).length
        : 0;

      if (counter){
        counter.textContent = &#96;${count}/${limit} words&#96;;
      }
    }

    field.addEventListener("input", update);
    update();
  }

  Object.entries(WORD_LIMITS).forEach(([id, limit]) => {
    attachWordLimiter(id, limit);
  });

  // grade bar + attempts (per-browser) â€” still case_001 for now
  const gradeFill     = document.getElementById("gradeFill");
  const gradeLabel    = document.getElementById("gradeLabel");
  const docSubmitBtn  = document.getElementById("docSubmitBtn");
  const docAttemptsInline = document.getElementById("docAttemptsInline");
  const docStatus     = document.getElementById("docSubmitStatus");

function attemptKey(){
  return &#96;docAttempts_${getCurrentCaseKey()}&#96;;
}

function getAttempts(){
  return parseInt(localStorage.getItem(attemptKey()) || "0", 10);
}
function setAttempts(n){
  localStorage.setItem(attemptKey(), String(n));
}


  function applyGradeFromAttempts(used){
    if (!gradeFill || !gradeLabel) return;

    if (used <= 0){
      gradeFill.style.width = "0%";
      gradeFill.style.background = "#f97373";
      gradeLabel.textContent = "Not graded yet";
      return;
    }

    if (used === 1){
      gradeFill.style.width = "33%";
      gradeFill.style.background = "#f97373"; // red
      gradeLabel.textContent = "Novice level (auto-estimate)";
    } else if (used === 2){
      gradeFill.style.width = "66%";
      gradeFill.style.background = "#f97316"; // orange
      gradeLabel.textContent = "Apprentice level (auto-estimate)";
    } else {
      gradeFill.style.width = "100%";
      gradeFill.style.background = "#22c55e"; // green
      gradeLabel.textContent = "Clinical level (auto-estimate)";
    }
  }
function checkAttemptLock(){
  const used = getAttempts();
  const left = Math.max(0, 3 - used);

  if (docAttemptsInline) {
    docAttemptsInline.textContent = &#96;Submissions: ${used}/3 used (${left} left)&#96;;
  }

  applyGradeFromAttempts(used);

  if (used >= 3 && docSubmitBtn && docStatus){
  docSubmitBtn.disabled = true;
  docStatus.textContent = "You have used all 3 submission attempts for this case.";
  docStatus.style.color = "#f97373";
} else if (docSubmitBtn) {
  docSubmitBtn.disabled = false;
}
}

// call once on load
checkAttemptLock();


  if (docSubmitBtn && docStatus){
    docSubmitBtn.onclick = () => {
      const used = getAttempts();

      const docIds = [
        "docSubjective",
        "docObjective",
        "docDx",
        "docPlan",
        "docGoals",
        "docPrognosis"
      ];

      const hasContent = docIds.some(id => {
        const el = document.getElementById(id);
        return el && el.value.trim().length > 0;
      });

      if (!hasContent){
        docStatus.textContent = "Write your documentation before submitting.";
        docStatus.style.color = "#f97373";
        return;
      }

      if (used >= 3){
        checkAttemptLock();
        return;
      }
// Build a single payload AI can grade later (docs + referrals)
const docText = docIds.map(id => {
  const el = document.getElementById(id);
  return &#96;${id}: ${el ? el.value.trim() : ""}&#96;;
}).join("\n");

const bundle = (document.getElementById("docBundle")?.value || "").trim(); // referrals already go here
window.__GRADE_PAYLOAD_TEXT =
  &#96;CASE: ${getCurrentCaseKey()}\nSUBMITTED: ${new Date().toLocaleString()}\n\n&#96; +
  &#96;--- DOCUMENTATION ---\n${docText}\n\n&#96; +
  (bundle ? &#96;--- ORDERS/REFERRALS LOG ---\n${bundle}\n&#96; : "");

      const nextCount = used + 1;
      setAttempts(nextCount);
      checkAttemptLock();
      applyGradeFromAttempts(nextCount);

     docStatus.innerHTML =
  &#96;Documentation submitted. Attempt ${nextCount} of 3. &#96; +
  &#96;<a href="#" id="viewDocHistory" style="color:var(--accent);text-decoration:underline;">View history</a>&#96;;

// save a snapshot (per case)
const caseKey = (document.getElementById("caseSelect")?.value) || "CASE_001";
const snapKey = &#96;docHistory_${caseKey}&#96;;
const snapshot = {
  at: new Date().toLocaleString(),
  subjective: (document.getElementById("docSubjective")?.value || "").trim(),
  objective:  (document.getElementById("docObjective")?.value || "").trim(),
  assessment: (document.getElementById("docDx")?.value || "").trim(),
  plan:       (document.getElementById("docPlan")?.value || "").trim(),
  goals:      (document.getElementById("docGoals")?.value || "").trim(),
  prognosis:  (document.getElementById("docPrognosis")?.value || "").trim()
};

try{
  const arr = JSON.parse(localStorage.getItem(snapKey) || "[]");
  arr.push(snapshot);
  localStorage.setItem(snapKey, JSON.stringify(arr));
}catch(e){}


      if (nextCount >= 3){
        docSubmitBtn.disabled = true;
      }

    // click "View history" to review saved submissions
document.getElementById("viewDocHistory")?.addEventListener("click", (e)=>{
  e.preventDefault();
  const caseKey = (document.getElementById("caseSelect")?.value) || "CASE_001";
  const snapKey = &#96;docHistory_${caseKey}&#96;;
  const arr = JSON.parse(localStorage.getItem(snapKey) || "[]");
  const text = arr.map((s,i)=>&#96;#${i+1} â€” ${s.at}\nASSESSMENT:\n${s.assessment || "(blank)"}\n&#96;).join("\n");
  alert(text || "No saved submissions yet.");
});
  
    };
  }

  // make sure SOAP starts in locked state matching visit flags
  updateDocLockState();
  //DROP IN END//

// === CASE PARSING + PATIENT PROFILE FILL (final) ===

  function initialsFromName(name) {
    if (!name) return "??";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  }
function parseCaseMarkdown(rawMd) {
  const c = {
    caseHeading: "",
    name: "",
    age: "",
    occupation: "",
    setting: "",
    chiefComplaint: "",
    historyOfPresentIllness: "",
    scenarioLabel: "",
    tags: []
  };

  // Case heading: "# Case 1: Cervical Impairment"
  const hMatch = rawMd.match(/^#\s*(.+)$/m);
  if (hMatch) {
    const h = hMatch[1].trim();
    if (/^case/i.test(h)) c.caseHeading = h;
  }

  // Simple bullet grabber for Patient Profile
  function grabBullet(label) {
    const re = new RegExp(&#96;^-\\s*${label}:\\s*(.+)$&#96;, "im");
    const m  = rawMd.match(re);
    return m ? m[1].trim() : "";
  }

  c.name       = grabBullet("Name");
  c.age        = grabBullet("Age");
  c.occupation = grabBullet("Occupation");
  c.setting    = grabBullet("Setting");


    // Section grabber: from "## <title>" to next "##"
  function grabSection(title) {
    // Allow things like "## History of Present Illness (HPI)"
    const reHeader = new RegExp(
      &#96;^##\\s*${title}(?:\\s*\\([^)]*\\))?\\s*$&#96;,
      "im"
    );
    const headerMatch = rawMd.match(reHeader);
    if (!headerMatch) return "";

    const startIdx = headerMatch.index + headerMatch[0].length;

    // Take everything after this heading until the next H2
    let sectionText = rawMd.slice(startIdx);
    const nextH2 = sectionText.search(/\n##\s/);
    if (nextH2 !== -1) {
      sectionText = sectionText.slice(0, nextH2);
    }

    const lines = sectionText
      .split(/\r?\n/)
      .map(l => l.trim())
      .filter(l => l.length && !/^---+$/.test(l)); // drop horizontal rules

    if (!lines.length) return "";

    const cleanedLines = lines.map(l => {
      // Strip bold markers if they exist
      l = l.replace(/\*\*/g, "");

      // Turn markdown bullets (-, *, â€¢) into a clean "â€¢ "
      const bulletMatch = l.match(/^[-*â€¢]+\s*(.+)$/);
      if (bulletMatch) {
        return "â€¢ " + bulletMatch[1]
          .replace(/^["â€œ]+/, "")
          .replace(/["â€]+$/, "");
      }

      // Non-bullet line: just clean quotes
      return l
        .replace(/^["â€œ]+/, "")
        .replace(/["â€]+$/, "");
    });

    // Keep each HPI / CC line on its own line inside the card
    return cleanedLines.join("<br>");
  }


  c.chiefComplaint            = grabSection("Chief Complaint");
  c.historyOfPresentIllness   = grabSection("History of Present Illness");

  if (!c.name) c.name = "Patient Name";
  if (!c.age)  c.age  = "??";

  c.scenarioLabel = c.caseHeading
    ? "Scenario Loaded: " + c.caseHeading
    : "Scenario Loaded: ROMetrics Case";

  return c;
}

function renderTags() {
  return '<span class="tag-accent">ROMetrics Simulation</span>';
}

// Patient Profile shows Occupation + Chief Complaint + full HPI as clean text
function renderPatientProfile(c) {
  const list = $("patientProfileList");
  if (!list) return;

  const items = [];

  if (c.occupation) {
    items.push({ label: "Occupation", value: c.occupation });
  }
  if (c.chiefComplaint) {
    items.push({ label: "Chief Complaint", value: c.chiefComplaint });
  }
  if (c.historyOfPresentIllness) {
    items.push({
      label: "History of Present Illness",
      value: c.historyOfPresentIllness
    });
  }

  list.innerHTML = items.map(item => &#96;
    <div class="encounter-item">
      <div class="encounter-top">
        <span class="enc-type">${item.label}</span>
      </div>
      <div class="enc-note">${item.value}</div>
    </div>
  &#96;).join("");
}


  async function applyCase(caseKey) {
    const caseData = CASE_FILES[caseKey];
    if (!caseData) return;

    // IMPORTANT: Make sure the file path is correct for your environment.
    // I am assuming the path is relative based on your options.
    const filePath = caseData.file;

    try {
      const res = await fetch(filePath);
      if (!res.ok) throw new Error("Failed to fetch " + filePath);
      const rawMd = await res.text();
      const c = parseCaseMarkdown(rawMd);

      const mrnSuffix = caseKey.split("_")[1] || "000";
      const mrn       = "MRN â€¢ " + mrnSuffix;

      const baseName    = c.name || "Patient Name";
      const nameWithAge = c.age ? &#96;${baseName} â€” ${c.age} y/o&#96; : baseName;

      const mrnEl = $("mrnValue");
      if (mrnEl) mrnEl.textContent = mrn;

      const initialsEl = $("patientInitials");
      if (initialsEl) initialsEl.textContent = initialsFromName(c.name || "");

      const nameEl = $("patientName");
      if (nameEl) nameEl.textContent = nameWithAge;
// restore referral badge after refresh (per case)
try{
  const saved = localStorage.getItem(&#96;refBadge_${caseKey}&#96;);
  if (saved){
    const data = JSON.parse(saved);
    const nameEl2 = document.getElementById("patientName");
    if (nameEl2){
      let badge = document.getElementById("refBadge");
      if (!badge){
        badge = document.createElement("div");
        badge.id = "refBadge";
        badge.style.marginTop = "4px";
        badge.style.fontSize = "11px";
        badge.style.color = "var(--muted)";
        nameEl2.insertAdjacentElement("afterend", badge);
      }
      badge.textContent = &#96;Referred: ${data.to} â€¢ ${data.date}&#96;;
    }
  }
}catch(e){}

      // The patientSetting and patientPrimary elements are now removed from the DOM/redundant in JS.
      // We are leaving the following JS code commented out/removed for clean separation:
      // const settingEl = $("patientSetting");
      // if (settingEl) settingEl.textContent = c.setting || "Simulation case";

      const primaryEl = $("patientPrimary");
      if (primaryEl) primaryEl.textContent = ""; // Ensure the primary complaint is cleared if it exists in the DOM

      const tagsEl = $("patientTags");
      if (tagsEl) tagsEl.innerHTML = renderTags();

      const caseIdEl = $("caseIdValue");
      if (caseIdEl) caseIdEl.textContent = caseData.label;

      const scenarioSummaryEl = $("scenarioSummary");
      if (scenarioSummaryEl) scenarioSummaryEl.textContent = caseData.scenarioSummary;

      const scenarioLabelEl = $("scenarioLabel");
      if (scenarioLabelEl) scenarioLabelEl.textContent = c.scenarioLabel;

      renderPatientProfile(c);
    } catch (err) {
      console.error("Error loading case:", err);
      // NOTE: This alert is now the only fallback if the MD file can't be fetched or parsed.
      alert(&#96;Error loading case content for ${caseKey}. Check file path and format.&#96;);
    }
  }

  const caseSelect = $("caseSelect");
  if (caseSelect) {
 caseSelect.addEventListener("change", () => {
  // 1) re-lock SOAP for the new case
  visitedMotion = false;
  visitedGonio  = false;
  visitedMMT    = false;
  updateDocLockState();

  // 2) close/hide the documentation panel if it was open
  const card = document.getElementById("docCard");
  if (card) card.style.display = "block";

  // 3) clear SOAP fields + status (so it "reloads" clean per case)
  ["docSubjective","docObjective","docDx","docPlan","docGoals","docPrognosis"].forEach(id=>{
    const el = document.getElementById(id);
    if (el) el.value = "";
  });

  const status = document.getElementById("docSubmitStatus");
  if (status){ status.textContent = ""; status.style.color = ""; }

  const bundle = document.getElementById("docBundle");
  if (bundle) bundle.value = "";

  // 4) load the new case + refresh attempt lock display for that case
  applyCase(caseSelect.value);
  if (typeof checkAttemptLock === "function") checkAttemptLock();
});

  }

  // initial load
  applyCase("CASE_001");

window.addEventListener("DOMContentLoaded", () => {  
// ---- Referral popup wiring + documentation bundle ----
window.__DOC_LOG = window.__DOC_LOG || [];

function closeRefModal(){
  const m = document.getElementById("refModal");
  if (m) m.style.display = "none";
}

function openRefModal(){
  const m = document.getElementById("refModal");
  if (m) m.style.display = "flex";
}

function ensureDocBundle(){
  let t = document.getElementById("docBundle");
  if (t) return t;

  // hidden textarea so AI can read it later
  t = document.createElement("textarea");
  t.id = "docBundle";
  t.readOnly = true;
  t.style.position = "absolute";
  t.style.left = "-9999px";
  t.style.top = "-9999px";
  document.body.appendChild(t);
  return t;
}

function pushDoc(text){
  const box = ensureDocBundle();
  box.value = (box.value ? box.value + "\n\n" : "") + text;
}

document.querySelector('[data-ref="open"]')?.addEventListener("click", (e)=>{
  e.preventDefault();
  openRefModal();
});

document.getElementById("refBackdrop")?.addEventListener("click", closeRefModal);
document.getElementById("refClose")?.addEventListener("click", closeRefModal);
document.getElementById("refCancel")?.addEventListener("click", closeRefModal);

document.getElementById("refSubmitBtn")?.addEventListener("click", ()=>{
  const to = document.getElementById("refTo")?.value || "";
  const urg = document.getElementById("refUrgency")?.value || "";
  const reason = document.getElementById("refReason")?.value || "";
  const req = document.getElementById("refRequest")?.value || "";

  if (!to || !urg || !reason || !req){
    alert("Pick Referral To, Urgency, Reason, and Request.");
    return;
  }

  const stamp = new Date().toLocaleString();
  const note =
&#96;ORDERS / REFERRALS (${stamp})
- Refer to: ${to}
- Urgency: ${urg}
- Reason: ${reason}
- Request: ${req}&#96;;

  pushDoc(note);
  // ALSO write referral into visible Assessment so it's included when docs are submitted
const dx = document.getElementById("docDx"); // Assessment / Diagnosis box
if (dx){
  const line = &#96;Orders/Referrals: Referred to ${to} (${urg}) â€” ${reason}; Request: ${req}.&#96;;
  dx.value = (dx.value.trim() ? (dx.value.trim() + "\n") : "") + line;
  dx.dispatchEvent(new Event("input")); // updates word counter / limiter
}

    // --- show referral history under patient name ---
  const nameEl = document.getElementById("patientName");
  if (nameEl){
    let badge = document.getElementById("refBadge");
    if (!badge){
      badge = document.createElement("div");
      badge.id = "refBadge";
      badge.style.marginTop = "4px";
      badge.style.fontSize = "11px";
      badge.style.color = "var(--muted)";
      nameEl.insertAdjacentElement("afterend", badge);
    }
    badge.textContent = &#96;Referred: ${to} â€¢ ${new Date().toLocaleDateString()}&#96;;
  }
// persist referral badge per case
const caseKey = (document.getElementById("caseSelect")?.value) || "CASE_001";
localStorage.setItem(
  &#96;refBadge_${caseKey}&#96;,
  JSON.stringify({ to, date: new Date().toLocaleDateString() })
);

  // store latest referral summary for grading
  window.__LAST_REFERRAL_NOTE = note;

  closeRefModal();
});

/* ===================== EXERCISES TAB â†’ POPUP + WRITE TO PLAN ===================== */

let __EX_LIB_CACHE = null;

function stripQuotes(v){
  v = (v || "").trim();
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    return v.slice(1, -1);
  }
  return v;
}

function parseYamlArray(v){
  v = (v || "").trim();
  if (!v.startsWith("[") || !v.endsWith("]")) return null;
  const inner = v.slice(1, -1).trim();
  if (!inner) return [];
  return inner.split(",").map(s => stripQuotes(s.trim())).filter(Boolean);
}
function parseSimpleYaml(yamlText){
  const obj = {};
  const lines = (yamlText || "").split(/\r?\n/);

  for (let i=0; i<lines.length; i++){
    const raw = lines[i];
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;

    // key: value OR key:
    const idx = line.indexOf(":");
    if (idx === -1) continue;

    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();

    // key:  (YAML block list)
    if (!val){
      // collect "- item" lines under it
      const arr = [];
      let j = i + 1;
      while (j < lines.length){
        const t = lines[j].trim();
        if (!t) { j++; continue; }
        if (t.includes(":") && !t.startsWith("-")) break;   // next key
        const m = t.match(/^-+\s*(.+)$/);
        if (m) arr.push(stripQuotes(m[1].trim()));
        j++;
      }
      if (arr.length) obj[key] = arr;
      i = j - 1;
      continue;
    }

    // inline arrays like [a,b] or ["a","b"]
    const inlineArr = parseYamlArray(val);
    if (inlineArr !== null){
      obj[key] = inlineArr;
      continue;
    }

    obj[key] = stripQuotes(val);
  }

  // ---- aliases (so your MD can stay simple) ----
  if (!obj.default_dose && obj.dose) obj.default_dose = obj.dose;
  if (!obj.category && obj.type) obj.category = obj.type;
  if (!obj.impairment_tags && obj.tags) obj.impairment_tags = obj.tags;

  return obj;
}


function parseExerciseLibraryMarkdown(md){
  const out = [];
  const re = /&#96;&#96;&#96;yaml([\s\S]*?)&#96;&#96;&#96;/g;
  let m;
  while ((m = re.exec(md))){
    const yaml = (m[1] || "").trim();
    const ex = parseSimpleYaml(yaml);

    // normalize fields we rely on
    if (!ex.id) continue;
    ex.name = ex.name || ex.id;
    ex.region = (ex.region || "").toLowerCase();
    ex.category = ex.category || "";
    ex.impairment_tags = Array.isArray(ex.impairment_tags) ? ex.impairment_tags : [];
    ex.default_dose = ex.default_dose || "";
    ex.setup = ex.setup || "";
    ex.action = ex.action || "";
    ex.cues = Array.isArray(ex.cues) ? ex.cues : (ex.cues ? [String(ex.cues)] : []);
    ex.avoid_if = Array.isArray(ex.avoid_if) ? ex.avoid_if : (ex.avoid_if ? [String(ex.avoid_if)] : []);
    out.push(ex);
  }
  return out;
}

async function loadExerciseLibrary(){
  if (__EX_LIB_CACHE) return __EX_LIB_CACHE;

  // repo path you specified
  const path = "../assets/rometrics_exercise_library.md";
  const res = await fetch(path);
  if (!res.ok) throw new Error("Failed to fetch exercise library: " + path);

  const md = await res.text();
  __EX_LIB_CACHE = parseExerciseLibraryMarkdown(md);
  return __EX_LIB_CACHE;
}

function caseImpairmentTags(caseKey){
  // Uses your CASE_FILES scenarioSummary so it stays aligned with your current case picker.
  const summary = (CASE_FILES?.[caseKey]?.scenarioSummary || "").toLowerCase();

  if (summary.includes("cervical")) {
    return ["cervical_lat_flex_limit","neck_stiffness","cervical_rotation_limit","dnfl_weak","forward_head","cervical_stability_deficit"];
  }
  if (summary.includes("hip")) {
    return ["hip_flexion_limit","hip_ir_limit","hip_abductor_weak","hip_knee_control_deficit","functional_strength_low"];
  }
  if (summary.includes("cluster")) {
    return ["scap_control_deficit","thoracic_mobility_need","lumbar_stability_deficit","dynamic_valgus","balance_deficit","functional_strength_low"];
  }
  return [];
}

function scoreExercise(ex, tags){
  if (!tags.length) return 0;
  let score = 0;
  const set = new Set(tags);
  for (const t of (ex.impairment_tags || [])){
    if (set.has(t)) score++;
  }
  return score;
}

function buildExerciseLine(ex){
  const cat = (ex.category || "").toLowerCase();
  const prefix =
    cat.includes("mobility") ? "ROM" :
    cat.includes("neuro")    ? "NEURO" :
    cat.includes("strength") ? "STR" :
    cat.includes("balance")  ? "BAL" : "EX";

  const name = ex.name || ex.id;

  // dose can be either a normal string OR a "{ sets:..., reps:..., hold_sec:..., frequency:... }" string
  const raw = String(ex.dose || ex.default_dose || "").trim();

  let reps = "", hold = "", freq = "";

  if (raw.startsWith("{") && raw.endsWith("}")){
    reps = (raw.match(/reps:\s*"?([^",}]+)"?/i) || [])[1] || "";
    hold = (raw.match(/hold_sec:\s*"?([^",}]+)"?/i) || [])[1] || "";
    freq = (raw.match(/frequency:\s*"?([^",}]+)"?/i) || [])[1] || "";
  } else {
    reps = (raw.match(/(\d+\s*[-â€“]\s*\d+)\s*reps/i) || [])[1] || "";
    hold = (raw.match(/(\d+\s*[-â€“]\s*\d+)\s*(?:sec|s)\s*hold/i) || [])[1] || "";
    freq = (raw.match(/\b(daily|every day|\d+\s*x\/week|\d+\s*times\/week)\b/i) || [])[1] || "";
  }

  const parts = [];
  if (reps) parts.push(&#96;${reps.replace(/\s+/g,"")} reps&#96;);
  if (hold) parts.push(&#96;hold ${hold.replace(/\s+/g,"")}s&#96;);
  if (freq) parts.push(freq.toLowerCase());

  const dose = parts.length ? &#96; â€” ${parts.join(", ")}&#96; : "";

  return &#96;â€¢ ${prefix}: ${name}${dose}&#96;;
}


function ensureExerciseModal(){
  let m = document.getElementById("exModal");
  if (m) return m;

  m = document.createElement("div");
  m.id = "exModal";
  m.style.position = "fixed";
  m.style.inset = "0";
  m.style.display = "none";
  m.style.alignItems = "center";
  m.style.justifyContent = "center";
  m.style.zIndex = "10000";

  m.innerHTML = &#96;
    <div id="exBackdrop" style="position:absolute;inset:0;background:rgba(0,0,0,.55);"></div>

    <div style="position:relative;width:min(780px,94vw);max-height:min(84vh,820px);overflow:hidden;border:1px solid var(--border);border-radius:14px;background:#0b1120;box-shadow:var(--shadow);display:flex;flex-direction:column;">
      <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 14px;border-bottom:1px solid var(--border);">
        <div style="font-weight:700;color:var(--ink);">Exercises</div>
        <button id="exClose" type="button" style="border:1px solid var(--border);background:#020617;color:var(--ink);border-radius:10px;padding:6px 10px;cursor:pointer;">âœ•</button>
      </div>

      <div style="padding:12px 14px;border-bottom:1px solid var(--border);display:flex;gap:10px;flex-wrap:wrap;">
        <input id="exSearch" placeholder="Search exercise name / ID / tagâ€¦" style="flex:1;min-width:220px;padding:9px 10px;border-radius:10px;border:1px solid var(--border);background:#020617;color:var(--ink);" />
        <select id="exRegion" style="min-width:160px;padding:9px 10px;border-radius:10px;border:1px solid var(--border);background:#020617;color:var(--ink);">
          <option value="">All regions</option>
        </select>
        <select id="exCategory" style="min-width:190px;padding:9px 10px;border-radius:10px;border:1px solid var(--border);background:#020617;color:var(--ink);">
          <option value="">All categories</option>
        </select>
      </div>

      <div style="padding:12px 14px;overflow:auto;min-height:0;">
        <div style="font-size:11px;color:var(--muted);margin-bottom:8px;">
          Recommended for <strong id="exCaseLabel" style="color:var(--ink);"></strong> (top matches)
        </div>
        <div id="exRecommended" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px;margin-bottom:14px;"></div>

        <div style="font-size:11px;color:var(--muted);margin:10px 0 8px;">All exercises</div>
        <div id="exList" style="display:flex;flex-direction:column;gap:10px;"></div>
      </div>
    </div>
  &#96;;

  document.body.appendChild(m);

  // close wiring
  function close(){
    m.style.display = "none";
  }
  m.querySelector("#exBackdrop")?.addEventListener("click", close);
  m.querySelector("#exClose")?.addEventListener("click", close);

  return m;
}

function openExerciseModal(){
  const m = ensureExerciseModal();
  m.style.display = "flex";
  renderExerciseModal().catch(err => {
    console.error(err);
    alert("Could not load exercises. Check that ../assets/rometrics_exercise_library.md exists.");
  });
}

function addExerciseToPlan(ex){
  // 1) Write into Treatment Plan box
  const plan = document.getElementById("docPlan");
  if (plan){
    const line = buildExerciseLine(ex);
    plan.value = (plan.value.trim() ? (plan.value.trim() + "\n\n") : "") + line;
    plan.dispatchEvent(new Event("input")); // keep your word counter/limiter in sync
  }

  // 2) Append into same docBundle stream used by referrals
  if (typeof pushDoc === "function"){
    const stamp = new Date().toLocaleString();
    pushDoc(&#96;EXERCISE ADDED (${stamp})\n${buildExerciseLine(ex)}&#96;);
  }
}

function exCardHTML(ex, showScore){
  const cues = (ex.cues || []).slice(0, 3).join(" â€¢ ");
  const tags = (ex.impairment_tags || []).slice(0, 6).join(", ");
  const scoreChip = showScore ? &#96;<span style="font-size:10px;border:1px solid rgba(56,189,248,0.55);color:#e0f2fe;background:rgba(15,23,42,0.9);padding:2px 7px;border-radius:999px;">match</span>&#96; : "";

  return &#96;
    <div style="border:1px solid rgba(31,41,55,0.95);border-radius:12px;background:rgba(15,23,42,0.92);padding:10px;display:flex;flex-direction:column;gap:6px;">
      <div style="display:flex;justify-content:space-between;gap:10px;align-items:flex-start;">
        <div>
          <div style="font-weight:700;color:var(--ink);font-size:12px;">${ex.id} â€” ${ex.name}</div>
          <div style="color:var(--muted);font-size:11px;">${ex.region || "â€”"} â€¢ ${ex.category || "â€”"}</div>
        </div>
        ${scoreChip}
      </div>

      ${ex.default_dose ? &#96;<div style="font-size:11px;color:var(--muted);"><strong style="color:var(--ink);font-weight:600;">Dose:</strong> ${ex.default_dose}</div>&#96; : ""}
      ${cues ? &#96;<div style="font-size:11px;color:var(--muted);"><strong style="color:var(--ink);font-weight:600;">Cues:</strong> ${cues}</div>&#96; : ""}
      ${tags ? &#96;<div style="font-size:10px;color:#64748b;">tags: ${tags}</div>&#96; : ""}

      <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:6px;">
        <button type="button" data-add="${ex.id}" class="module-btn" style="padding:6px 10px;font-size:10px;">Add to Plan âœ“</button>
      </div>
    </div>
  &#96;;
}

async function renderExerciseModal(){
  const lib = await loadExerciseLibrary();
  const caseKey = (document.getElementById("caseSelect")?.value) || "CASE_001";
  const tags = caseImpairmentTags(caseKey);

  const m = ensureExerciseModal();
  const caseLabel = m.querySelector("#exCaseLabel");
  if (caseLabel) caseLabel.textContent = (CASE_FILES?.[caseKey]?.label || caseKey);

  // fill filter dropdowns (once)
  const regionSel = m.querySelector("#exRegion");
  const catSel = m.querySelector("#exCategory");

  const regions = Array.from(new Set(lib.map(x => (x.region || "").toLowerCase()).filter(Boolean))).sort();
  const cats    = Array.from(new Set(lib.map(x => (x.category || "").trim()).filter(Boolean))).sort();

  if (regionSel && regionSel.options.length <= 1){
    regions.forEach(r => {
      const o = document.createElement("option");
      o.value = r;
      o.textContent = r;
      regionSel.appendChild(o);
    });
  }
  if (catSel && catSel.options.length <= 1){
    cats.forEach(c => {
      const o = document.createElement("option");
      o.value = c;
      o.textContent = c;
      catSel.appendChild(o);
    });
  }

  // recommended top 3 (by tag match score)
  const scored = lib
    .map(ex => ({ ex, s: scoreExercise(ex, tags) }))
    .filter(x => x.s > 0)
    .sort((a,b) => b.s - a.s);

  const recommended = scored.slice(0, 3).map(x => x.ex);

  const recWrap = m.querySelector("#exRecommended");
  if (recWrap){
    recWrap.innerHTML = recommended.length
      ? recommended.map(ex => exCardHTML(ex, true)).join("")
      : &#96;<div style="font-size:12px;color:var(--muted);padding:8px 2px;">No tag-matched recommendations for this case yet.</div>&#96;;
  }

  // list rendering (search + filters)
  const search = m.querySelector("#exSearch");
  const list = m.querySelector("#exList");

  function applyFilters(){
    const q = (search?.value || "").trim().toLowerCase();
    const r = (regionSel?.value || "").trim().toLowerCase();
    const c = (catSel?.value || "").trim();

    const filtered = lib.filter(ex => {
      if (r && (ex.region || "").toLowerCase() !== r) return false;
      if (c && (ex.category || "") !== c) return false;
      if (!q) return true;

      const hay = [
        ex.id, ex.name, ex.region, ex.category,
        ...(ex.impairment_tags || [])
      ].join(" ").toLowerCase();

      return hay.includes(q);
    });

    if (list){
      list.innerHTML = filtered.map(ex => exCardHTML(ex, false)).join("") || (
        &#96;<div style="font-size:12px;color:var(--muted);padding:8px 2px;">No exercises match your filters.</div>&#96;
      );

      // hook add buttons
      list.querySelectorAll("[data-add]").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-add");
          const ex = lib.find(x => x.id === id);
          if (ex) addExerciseToPlan(ex);
        });
      });
    }

    // also hook add buttons in recommended section
    recWrap?.querySelectorAll("[data-add]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-add");
        const ex = lib.find(x => x.id === id);
        if (ex) addExerciseToPlan(ex);
      });
    });
  }

  // bind once, then render
  if (search && !search.__bound){
    search.__bound = true;
    search.addEventListener("input", applyFilters);
  }
  if (regionSel && !regionSel.__bound){
    regionSel.__bound = true;
    regionSel.addEventListener("change", applyFilters);
  }
  if (catSel && !catSel.__bound){
    catSel.__bound = true;
    catSel.addEventListener("change", applyFilters);
  }

  applyFilters();
}

// Wire the existing â€œExercisesâ€ tab button to open the modal
(function wireExercisesTab(){
  const tabButtons = Array.from(document.querySelectorAll(".tabs .tab"));
  const exTab = tabButtons.find(b => (b.textContent || "").toLowerCase().includes("exercises"));
  if (exTab && !exTab.__bound){
    exTab.__bound = true;
    exTab.addEventListener("click", (e) => {
      e.preventDefault();
      openExerciseModal();
    });
  }
})();

/* =================== END EXERCISES =================== */
  
});
  
</script>
<!-- Orders / Referrals popup -->
<div id="refModal" style="position:fixed;inset:0;display:none;align-items:center;justify-content:center;z-index:9999;">
  <div id="refBackdrop" style="position:absolute;inset:0;background:rgba(0,0,0,.55);"></div>

  <div style="position:relative;width:min(520px,92vw);border:1px solid var(--border);border-radius:14px;background:#0b1120;padding:14px;box-shadow:var(--shadow);">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
      <div style="font-weight:700;color:var(--ink);">Orders / Referrals</div>
      <button id="refClose" type="button" style="border:1px solid var(--border);background:#020617;color:var(--ink);border-radius:10px;padding:6px 10px;cursor:pointer;">âœ•</button>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
      <div>
        <div class="field-label">Referral To</div>
        <select id="refTo" style="width:100%;margin-top:4px;padding:8px 10px;border-radius:10px;border:1px solid var(--border);background:#020617;color:var(--ink);">
          <option value="">Selectâ€¦</option>
          <option>Primary Care (PCP)</option>
          <option>Orthopedics</option>
          <option>Neurology</option>
          <option>Emergency Department (ED)</option>
        </select>
      </div>

      <div>
        <div class="field-label">Urgency</div>
        <select id="refUrgency" style="width:100%;margin-top:4px;padding:8px 10px;border-radius:10px;border:1px solid var(--border);background:#020617;color:var(--ink);">
          <option value="">Selectâ€¦</option>
          <option>Routine</option>
          <option>Same-day</option>
          <option>Immediate (ED now)</option>
        </select>
      </div>

      <div style="grid-column:1/-1;">
        <div class="field-label">Reason</div>
        <select id="refReason" style="width:100%;margin-top:4px;padding:8px 10px;border-radius:10px;border:1px solid var(--border);background:#020617;color:var(--ink);">
          <option value="">Selectâ€¦</option>
          <option>Red flags / systemic concern</option>
          <option>Neuro signs</option>
          <option>Worsening symptoms</option>
          <option>Suspected fracture / trauma concern</option>
        </select>
      </div>

      <div style="grid-column:1/-1;">
        <div class="field-label">Request</div>
        <select id="refRequest" style="width:100%;margin-top:4px;padding:8px 10px;border-radius:10px;border:1px solid var(--border);background:#020617;color:var(--ink);">
          <option value="">Selectâ€¦</option>
          <option>Imaging (X-ray)</option>
          <option>Imaging (MRI)</option>
          <option>Lab work (ESR/CRP/CBC)</option>
          <option>Specialist consult</option>
        </select>
      </div>
    </div>

    <div style="display:flex;gap:10px;margin-top:12px;justify-content:flex-end;">
      <button id="refSubmitBtn" class="module-btn" type="button">Submit</button>
      <button id="refCancel" type="button" style="border:1px solid var(--border);background:#020617;color:var(--ink);border-radius:999px;padding:6px 12px;cursor:pointer;">Cancel</button
  

;
