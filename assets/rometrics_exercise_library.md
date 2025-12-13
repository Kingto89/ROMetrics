# ROMetrics Exercise Library
*A compact, parse-friendly exercise catalog you can keep in `/assets/` and load into the Exercises modal.*

## How to use this file
- Each exercise has a unique **ID** you can store in your case plans.
- The modal can filter by:
  - **Region** (Hip, Trunk, Knee, etc.)
  - **Category** (Mobility/ROM, Strength, Neuromuscular Control, Balance)
  - **Impairment Tags** (e.g., `hip_abductor_weak`, `lumbar_stability_deficit`)
  - **Equipment**
- Keep your index short by only storing selected **IDs + dose fields** in the case plan.

---

## Dose presets (optional “quick fill”)
- **Mobility/ROM (stretch):** 2–4 sets × 20–45 sec hold, 1–2x/day
- **Mobility/ROM (joint/active):** 2–3 sets × 8–12 reps, 1–2x/day
- **Strength (basic):** 2–4 sets × 6–12 reps, 2–4x/week
- **Strength endurance:** 2–4 sets × 12–20 reps, 2–4x/week
- **Neuromuscular control:** 2–4 sets × 30–60 sec or 6–10 quality reps, 3–6x/week
- **Balance:** 3–5 bouts × 20–45 sec, 3–6x/week
- **Aerobic (if included):** 10–30 min, 3–5x/week (case-dependent)

**Pain rule default:** Mild discomfort is OK; stop if sharp/worsening pain, numbness/tingling, dizziness, or symptoms radiate.

---

## Catalog (quick reference)
> Tip: Use this for search results; the full entries are below.

### Cervical / Thoracic
| ID | Name | Category | Primary tags |
|---|---|---|---|
| CERV_MOB_001 | Cervical AROM: rotation | Mobility/ROM | cervical_rotation_limit |
| CERV_MOB_002 | Cervical AROM: side-bend | Mobility/ROM | cervical_lat_flex_limit |
| CERV_MOB_003 | Chin tucks (deep neck flexors) | Neuromuscular control | dnfl_weak, forward_head |
| CERV_STR_001 | Isometric cervical flex/ext/rot | Strength | cervical_stability_deficit |
| THX_MOB_001 | Thoracic extension over towel/foam | Mobility/ROM | thoracic_extension_limit |
| THX_NMC_001 | Wall angels | Neuromuscular control | scap_control_deficit, thoracic_mobility_need |

### Shoulder / Scapular
| ID | Name | Category | Primary tags |
|---|---|---|---|
| SH_MOB_001 | Pendulums | Mobility/ROM | pain_irritable_shoulder |
| SH_MOB_002 | Table slides: flexion | Mobility/ROM | shoulder_flexion_limit |
| SH_MOB_003 | Sleeper stretch (posterior capsule) | Mobility/ROM | gh_ir_limit |
| SH_STR_001 | ER/IR band: neutral | Strength | rc_weak |
| SH_STR_002 | Scaption (thumb up) | Strength | deltoid_weak, rc_weak |
| SCAP_NMC_001 | Serratus punches | Neuromuscular control | scap_winging, serratus_weak |
| SCAP_NMC_002 | Prone “T/Y” | Neuromuscular control | mid_low_trap_weak |

### Elbow / Wrist / Hand
| ID | Name | Category | Primary tags |
|---|---|---|---|
| ELB_STR_001 | Biceps curl (band/dumbbell) | Strength | elbow_flexor_weak |
| ELB_STR_002 | Triceps pressdown (band) | Strength | elbow_extensor_weak |
| WR_MOB_001 | Wrist ext/flex AROM | Mobility/ROM | wrist_rom_limit |
| WR_STR_001 | Wrist extensor eccentrics | Strength | lateral_epicondylalgia |
| HAND_NMC_001 | Tendon glides | Mobility/ROM | hand_stiffness, edema_management |
| HAND_STR_001 | Putty grip/pinch | Strength | grip_weak |

### Trunk / Core
| ID | Name | Category | Primary tags |
|---|---|---|---|
| TRK_NMC_001 | Abdominal brace + breathing | Neuromuscular control | trunk_control_deficit |
| TRK_STR_001 | Bridge | Strength | glute_weak, trunk_endurance_low |
| TRK_STR_002 | Side plank (modified) | Strength | lateral_chain_weak |
| TRK_STR_003 | Bird-dog | Neuromuscular control | lumbar_stability_deficit |
| TRK_STR_004 | McGill curl-up | Neuromuscular control | lumbar_stability_deficit |
| TRK_MOB_001 | Cat-cow | Mobility/ROM | lumbar_stiffness |
| TRK_MOB_002 | Open book rotation | Mobility/ROM | thoracolumbar_rotation_limit |

### Hip
| ID | Name | Category | Primary tags |
|---|---|---|---|
| HIP_STR_001 | Clamshell | Strength | hip_abductor_weak |
| HIP_STR_002 | Side-lying hip abduction | Strength | hip_abductor_weak |
| HIP_STR_003 | Hip hinge to wall | Neuromuscular control | hip_hinge_mechanics |
| HIP_STR_004 | Sit-to-stand | Strength | functional_strength_low |
| HIP_NMC_001 | Single-leg balance (hip strategy) | Balance | hip_control_deficit |
| HIP_MOB_001 | Hip flexor stretch (half-kneel) | Mobility/ROM | hip_extension_limit |
| HIP_MOB_002 | Figure-4 stretch | Mobility/ROM | hip_er_limit, piriformis_tight |
| HIP_MOB_003 | Hamstring stretch (supine strap) | Mobility/ROM | hamstring_tight |

### Knee
| ID | Name | Category | Primary tags |
|---|---|---|---|
| KNEE_STR_001 | Quad set | Strength | quad_inhibition |
| KNEE_STR_002 | Straight leg raise | Strength | quad_weak |
| KNEE_STR_003 | Terminal knee extension (band) | Strength | knee_extension_control |
| KNEE_STR_004 | Step-up (low) | Strength | functional_strength_low |
| KNEE_NMC_001 | Mini-squat (hip-knee alignment) | Neuromuscular control | dynamic_valgus |
| KNEE_MOB_001 | Heel slides | Mobility/ROM | knee_flexion_limit |
| KNEE_MOB_002 | Knee extension hang | Mobility/ROM | knee_extension_limit |

### Ankle / Foot
| ID | Name | Category | Primary tags |
|---|---|---|---|
| ANK_MOB_001 | Ankle DF knee-to-wall | Mobility/ROM | ankle_df_limit |
| ANK_STR_001 | Calf raises (double → single) | Strength | plantarflexor_weak |
| ANK_STR_002 | Tibialis raises | Strength | dorsiflexor_weak |
| ANK_STR_003 | Band inversion/eversion | Strength | ankle_stability_deficit |
| ANK_NMC_001 | Single-leg balance | Balance | balance_deficit |
| FT_STR_001 | Short-foot (arch doming) | Neuromuscular control | arch_control_deficit |
| FT_MOB_001 | Toe yoga | Neuromuscular control | intrinsic_foot_weak |

---

## Full entries (structured)
> Format: each exercise is a small YAML block + notes. Easy to parse later.

### CERV_MOB_001 — Cervical AROM: rotation
```yaml
id: CERV_MOB_001
name: Cervical AROM — Rotation
region: cervical
category: Mobility/ROM
equipment: none
impairment_tags: [cervical_rotation_limit, neck_stiffness]
default_dose: "2–3 sets × 8–12 reps each direction, 1–2x/day"
setup: "Sit tall; shoulders relaxed."
action: "Turn head slowly to look over shoulder; return to center."
cues: ["Keep chin level", "Move within comfortable range", "Avoid shrugging"]
progressions: ["Add gentle end-range pause 2–3 sec"]
regressions: ["Smaller range; supported back"]
avoid_if: ["dizziness/vertebrobasilar symptoms", "acute trauma without clearance"]
```
Notes: Good for early mobility when pain is low–moderate.

### CERV_MOB_002 — Cervical AROM: side-bend
```yaml
id: CERV_MOB_002
name: Cervical AROM — Side-bend
region: cervical
category: Mobility/ROM
equipment: none
impairment_tags: [cervical_lat_flex_limit, neck_stiffness]
default_dose: "2–3 sets × 8–12 reps each side, 1–2x/day"
setup: "Sit tall; keep shoulders down."
action: "Bring ear toward shoulder without rotating."
cues: ["Don’t lift the shoulder", "Small smooth motion"]
progressions: ["End-range pause 2–3 sec"]
regressions: ["Do lying down with head supported"]
avoid_if: ["radiating symptoms that worsen"]
```

### CERV_MOB_003 — Chin tucks (deep neck flexors)
```yaml
id: CERV_MOB_003
name: Chin tuck (Deep neck flexor activation)
region: cervical
category: Neuromuscular control
equipment: none
impairment_tags: [dnfl_weak, forward_head, cervical_stability_deficit]
default_dose: "2–3 sets × 8–10 reps, 3–5 sec holds, daily"
setup: "Supine or seated; neutral spine."
action: "Gently glide chin straight back (make a 'double chin')."
cues: ["No neck flexion crunch", "Keep jaw relaxed"]
progressions: ["Add head lift 1–2 cm if tolerated"]
regressions: ["Smaller glide; supine only"]
avoid_if: ["headache flare not improving with regression"]
```

### CERV_STR_001 — Cervical isometrics (flex/ext/rot)
```yaml
id: CERV_STR_001
name: Cervical isometrics — flex/ext/rotation
region: cervical
category: Strength
equipment: none
impairment_tags: [cervical_stability_deficit]
default_dose: "2–3 sets × 5 reps each direction, 5–10 sec holds, 3–5x/week"
setup: "Sit tall."
action: "Press head gently into hand (no movement)."
cues: ["Submax effort ~30–50%", "No pain spike"]
progressions: ["Increase hold time", "Add more directions"]
regressions: ["Shorter holds"]
avoid_if: ["acute radicular worsening"]
```

### THX_MOB_001 — Thoracic extension over towel/foam
```yaml
id: THX_MOB_001
name: Thoracic extension over towel/foam
region: thoracic
category: Mobility/ROM
equipment: towel_roll_or_foam_roller
impairment_tags: [thoracic_extension_limit, kyphosis_posture]
default_dose: "2–3 sets × 6–10 slow reps, 1x/day"
setup: "Roll at mid-back; support head if needed."
action: "Gently extend over roll; return."
cues: ["Don’t flare ribs excessively"]
progressions: ["Move roller one level up/down"]
regressions: ["Use towel roll instead of foam"]
avoid_if: ["osteoporosis fracture risk without modification"]
```

### THX_NMC_001 — Wall angels
```yaml
id: THX_NMC_001
name: Wall angels
region: thoracic
category: Neuromuscular control
equipment: wall
impairment_tags: [scap_control_deficit, thoracic_mobility_need]
default_dose: "2–3 sets × 6–10 reps, 3–5x/week"
setup: "Back to wall; ribs down; elbows at 90."
action: "Slide arms up/down while keeping contact."
cues: ["Keep ribs down", "No shoulder shrug"]
progressions: ["Add mini-band"]
regressions: ["Smaller range"]
avoid_if: ["sharp shoulder pain"]
```

---

## Shoulder / Scapular entries

### SH_MOB_001 — Pendulums
```yaml
id: SH_MOB_001
name: Pendulums
region: shoulder
category: Mobility/ROM
equipment: none
impairment_tags: [pain_irritable_shoulder]
default_dose: "1–2 min total, 1–3x/day"
setup: "Support with other arm on table; trunk hinged."
action: "Let arm hang and make small circles."
cues: ["Motion from body, not shoulder muscles"]
progressions: ["Slightly larger circles"]
regressions: ["Smaller circles"]
avoid_if: ["dizziness; unable to safely hinge"]
```

### SH_MOB_002 — Table slides: flexion
```yaml
id: SH_MOB_002
name: Table slides — Shoulder flexion
region: shoulder
category: Mobility/ROM
equipment: table_towel
impairment_tags: [shoulder_flexion_limit]
default_dose: "2–3 sets × 8–12 reps, daily"
setup: "Seated; forearm on towel."
action: "Slide arm forward, allowing trunk to follow; return."
cues: ["Relax shoulder; smooth motion"]
progressions: ["Hold 5–10 sec at end range"]
regressions: ["Shorter slide"]
avoid_if: ["acute post-op restrictions unless cleared"]
```

### SH_MOB_003 — Sleeper stretch
```yaml
id: SH_MOB_003
name: Sleeper stretch (posterior capsule)
region: shoulder
category: Mobility/ROM
equipment: none
impairment_tags: [gh_ir_limit, posterior_shoulder_tight]
default_dose: "2–3 sets × 20–30 sec holds, 1x/day"
setup: "Side-lying on involved side; shoulder 90/90."
action: "Gently guide forearm toward table (IR)."
cues: ["No pinching; gentle only"]
progressions: ["Add 5 sec contract-relax"]
regressions: ["Reduce shoulder flexion angle"]
avoid_if: ["anterior instability symptoms"]
```

### SH_STR_001 — Band ER/IR (neutral)
```yaml
id: SH_STR_001
name: Band ER/IR — neutral
region: shoulder
category: Strength
equipment: resistance_band
impairment_tags: [rc_weak]
default_dose: "2–4 sets × 8–15 reps, 2–4x/week"
setup: "Elbow at side; towel roll under elbow."
action: "Rotate forearm out (ER) or in (IR) against band."
cues: ["Keep elbow tucked", "No trunk twist"]
progressions: ["Increase band", "Add abduction angle"]
regressions: ["Less band tension"]
avoid_if: ["pain > mild"]
```

### SH_STR_002 — Scaption (thumb up)
```yaml
id: SH_STR_002
name: Scaption (thumb up)
region: shoulder
category: Strength
equipment: light_dumbbell_optional
impairment_tags: [deltoid_weak, rc_weak]
default_dose: "2–4 sets × 8–12 reps, 2–4x/week"
setup: "Arms ~30° forward of frontal plane."
action: "Raise to ~90° if tolerated; lower slowly."
cues: ["Thumb up", "No shrug"]
progressions: ["Add weight", "Slow eccentric 3 sec"]
regressions: ["Lower range"]
avoid_if: ["impingement symptoms worsen"]
```

### SCAP_NMC_001 — Serratus punches
```yaml
id: SCAP_NMC_001
name: Serratus punches
region: scapular
category: Neuromuscular control
equipment: band_or_dumbbell_optional
impairment_tags: [scap_winging, serratus_weak]
default_dose: "2–3 sets × 10–15 reps, 3–5x/week"
setup: "Supine or standing; arm to ceiling/front."
action: "Reach forward (protract) without shrug; return."
cues: ["Reach long", "Keep neck relaxed"]
progressions: ["Add band", "Wall slide + punch"]
regressions: ["No resistance"]
avoid_if: ["sharp anterior shoulder pain"]
```

### SCAP_NMC_002 — Prone T/Y
```yaml
id: SCAP_NMC_002
name: Prone T / Y (mid-low trap)
region: scapular
category: Neuromuscular control
equipment: light_weights_optional
impairment_tags: [mid_low_trap_weak, scap_control_deficit]
default_dose: "2–3 sets × 8–12 reps, 2–4x/week"
setup: "Prone; forehead supported."
action: "Lift arms to T or Y with thumbs up; lower slow."
cues: ["Shoulders down/back", "No lumbar extension"]
progressions: ["Add weight", "Longer holds"]
regressions: ["Reduce lever arm; no weight"]
avoid_if: ["neck irritation"]
```

---

## Trunk / Hip / Knee / Ankle (more entries)

### TRK_NMC_001 — Abdominal brace + breathing
```yaml
id: TRK_NMC_001
name: Abdominal brace + diaphragmatic breathing
region: trunk
category: Neuromuscular control
equipment: none
impairment_tags: [trunk_control_deficit, lumbar_stability_deficit]
default_dose: "2–3 min practice, daily"
setup: "Supine; knees bent."
action: "Gentle brace (360°) while breathing; no breath-hold."
cues: ["Ribs down", "Breathe into belt line"]
progressions: ["Add marching"]
regressions: ["Shorter bouts"]
avoid_if: ["none typical"]
```

### TRK_STR_003 — Bird-dog
```yaml
id: TRK_STR_003
name: Bird-dog
region: trunk
category: Neuromuscular control
equipment: none
impairment_tags: [lumbar_stability_deficit]
default_dose: "2–4 sets × 6–10 reps/side, 3–5x/week"
setup: "Quadruped; neutral spine."
action: "Extend opposite arm/leg; hold 2–5 sec; return."
cues: ["No trunk rotation", "Reach long"]
progressions: ["Longer holds", "Add band"]
regressions: ["Only arms or only legs"]
avoid_if: ["wrist pain (modify support)"]
```

### HIP_STR_001 — Clamshell
```yaml
id: HIP_STR_001
name: Clamshell
region: hip
category: Strength
equipment: miniband_optional
impairment_tags: [hip_abductor_weak]
default_dose: "2–4 sets × 10–20 reps, 2–4x/week"
setup: "Side-lying; hips/knees bent; feet together."
action: "Open top knee without rolling pelvis back; return slow."
cues: ["Keep pelvis stacked", "Feel glute med"]
progressions: ["Add band", "Increase hold at top"]
regressions: ["Smaller range"]
avoid_if: ["lateral hip pain flare"]
```

### HIP_STR_004 — Sit-to-stand
```yaml
id: HIP_STR_004
name: Sit-to-stand
region: hip
category: Strength
equipment: chair
impairment_tags: [functional_strength_low, hip_knee_control_deficit]
default_dose: "2–4 sets × 6–12 reps, 2–4x/week"
setup: "Feet under knees; chest up."
action: "Stand up; sit down slow."
cues: ["Knees track over toes", "Drive through heels"]
progressions: ["Lower chair", "Add weight"]
regressions: ["Use hands", "Higher chair"]
avoid_if: ["uncontrolled knee pain"]
```

### KNEE_NMC_001 — Mini-squat alignment
```yaml
id: KNEE_NMC_001
name: Mini-squat (hip-knee alignment)
region: knee
category: Neuromuscular control
equipment: none
impairment_tags: [dynamic_valgus, hip_knee_control_deficit]
default_dose: "2–4 sets × 6–10 quality reps, 3–5x/week"
setup: "Feet hip-width."
action: "Squat 20–45° maintaining alignment."
cues: ["Tripod foot", "Knees track mid-foot"]
progressions: ["Add band cue at knees", "Single-leg progression"]
regressions: ["Reduce depth"]
avoid_if: ["sharp joint-line pain"]
```

### ANK_MOB_001 — DF knee-to-wall
```yaml
id: ANK_MOB_001
name: Ankle dorsiflexion knee-to-wall
region: ankle
category: Mobility/ROM
equipment: wall
impairment_tags: [ankle_df_limit]
default_dose: "2–3 sets × 8–12 reps, daily"
setup: "Foot flat; knee toward wall."
action: "Drive knee to wall without heel lift; return."
cues: ["Keep heel down", "Slow controlled"]
progressions: ["Increase distance"]
regressions: ["Closer to wall"]
avoid_if: ["acute ankle injury without clearance"]
```

### ANK_STR_001 — Calf raises
```yaml
id: ANK_STR_001
name: Calf raises (double → single)
region: ankle
category: Strength
equipment: step_optional
impairment_tags: [plantarflexor_weak]
default_dose: "2–4 sets × 8–15 reps, 2–4x/week"
setup: "Hands on counter for balance if needed."
action: "Rise onto toes; lower slow."
cues: ["Full range", "Control the descent"]
progressions: ["Single-leg", "Step for more ROM"]
regressions: ["Partial range", "Seated raises"]
avoid_if: ["Achilles pain flare"]
```

---

## Add-on pools (for expanding later)
Below are extra IDs you can implement over time without bloating your main UI.

### Hip extra pool
- HIP_STR_005 — Monster walks (Strength; hip_abductor_weak, dynamic_valgus)
- HIP_STR_006 — Step-down (Neuromuscular; hip_knee_control_deficit)
- HIP_STR_007 — Single-leg RDL (Strength; posterior_chain_weak)
- HIP_MOB_004 — Adductor rock-backs (Mobility; hip_ir_limit, groin_tight)

### Knee extra pool
- KNEE_STR_005 — Wall sit (Endurance; quad_endurance_low)
- KNEE_STR_006 — Hamstring curls (Strength; hamstring_weak)
- KNEE_NMC_002 — Lateral step-over (NMC; dynamic_valgus)
- KNEE_BAL_001 — SL balance + reach (Balance; balance_deficit)

### Ankle/Foot extra pool
- ANK_STR_004 — Eccentric heel lowers (Strength; achilles_tendinopathy)
- FT_STR_002 — Towel scrunches (Strength; intrinsic_foot_weak)
- FT_NMC_002 — Heel-to-toe walk (Balance; balance_deficit)

---

## Notes for parsing later (no code here)
- Each exercise entry is a YAML block inside triple backticks.
- Your index can load this file and build:
  - a searchable list (by `name`, `tags`, `region`, `category`)
  - a “3 recommended exercises” set by matching impairment tags for the active case.
