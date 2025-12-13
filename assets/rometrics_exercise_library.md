# ROMetrics Exercise Library (Minimal)
*Simple, dose-focused, parse-friendly catalog for `/assets/`.*

## Format (what each exercise includes)
Each entry is a tiny YAML block with ONLY:
- `id`
- `name`
- `region`
- `type` (ROM | Strength | Neuro | Balance)
- `tags` (for matching cases)
- `dose` (sets / reps / hold / frequency)

---

## Quick Index (IDs)
### Cervical / Thoracic
| ID | Name | Type |
|---|---|---|
| CERV_ROM_001 | Cervical AROM — Rotation | ROM |
| CERV_ROM_002 | Cervical AROM — Side-bend | ROM |
| CERV_NEURO_001 | Chin tuck (deep neck flexors) | Neuro |
| CERV_STR_001 | Cervical isometrics (flex/ext/rot) | Strength |
| THX_ROM_001 | Thoracic extension over towel/foam | ROM |
| THX_NEURO_001 | Wall angels | Neuro |

### Shoulder / Scapular
| ID | Name | Type |
|---|---|---|
| SH_ROM_001 | Pendulums | ROM |
| SH_ROM_002 | Table slides — Flexion | ROM |
| SH_ROM_003 | Sleeper stretch | ROM |
| SH_STR_001 | Band ER/IR (neutral) | Strength |
| SH_STR_002 | Scaption (thumb up) | Strength |
| SCAP_NEURO_001 | Serratus punches | Neuro |
| SCAP_NEURO_002 | Prone T / Y | Neuro |

### Elbow / Wrist / Hand
| ID | Name | Type |
|---|---|---|
| ELB_STR_001 | Biceps curl (band/db) | Strength |
| ELB_STR_002 | Triceps pressdown (band) | Strength |
| WR_ROM_001 | Wrist AROM (flex/ext) | ROM |
| WR_STR_001 | Wrist extensor eccentrics | Strength |
| HAND_ROM_001 | Tendon glides | ROM |
| HAND_STR_001 | Putty grip/pinch | Strength |

### Trunk / Core
| ID | Name | Type |
|---|---|---|
| TRK_NEURO_001 | Abdominal brace + breathing | Neuro |
| TRK_STR_001 | Bridge | Strength |
| TRK_STR_002 | Side plank (modified) | Strength |
| TRK_NEURO_002 | Bird-dog | Neuro |
| TRK_NEURO_003 | McGill curl-up | Neuro |
| TRK_ROM_001 | Cat-cow | ROM |
| TRK_ROM_002 | Open book rotation | ROM |

### Hip
| ID | Name | Type |
|---|---|---|
| HIP_STR_001 | Clamshell | Strength |
| HIP_STR_002 | Side-lying hip abduction | Strength |
| HIP_NEURO_001 | Hip hinge to wall | Neuro |
| HIP_STR_003 | Sit-to-stand | Strength |
| HIP_BAL_001 | Single-leg balance (hip strategy) | Balance |
| HIP_ROM_001 | Hip flexor stretch (half-kneel) | ROM |
| HIP_ROM_002 | Figure-4 stretch | ROM |
| HIP_ROM_003 | Hamstring stretch (strap) | ROM |
| HIP_STR_004 | Monster walks | Strength |
| HIP_NEURO_002 | Step-down (control) | Neuro |
| HIP_STR_005 | Single-leg RDL | Strength |
| HIP_ROM_004 | Adductor rock-backs | ROM |

### Knee
| ID | Name | Type |
|---|---|---|
| KNEE_STR_001 | Quad set | Strength |
| KNEE_STR_002 | Straight leg raise | Strength |
| KNEE_STR_003 | Terminal knee extension (band) | Strength |
| KNEE_STR_004 | Step-up (low) | Strength |
| KNEE_NEURO_001 | Mini-squat (alignment) | Neuro |
| KNEE_ROM_001 | Heel slides | ROM |
| KNEE_ROM_002 | Knee extension hang | ROM |
| KNEE_STR_005 | Wall sit | Strength |
| KNEE_STR_006 | Hamstring curls | Strength |
| KNEE_NEURO_002 | Lateral step-over | Neuro |
| KNEE_BAL_001 | SL balance + reach | Balance |

### Ankle / Foot
| ID | Name | Type |
|---|---|---|
| ANK_ROM_001 | Ankle DF knee-to-wall | ROM |
| ANK_STR_001 | Calf raises (double → single) | Strength |
| ANK_STR_002 | Tibialis raises | Strength |
| ANK_STR_003 | Band inversion/eversion | Strength |
| ANK_BAL_001 | Single-leg balance | Balance |
| FT_NEURO_001 | Short-foot (arch doming) | Neuro |
| FT_NEURO_002 | Toe yoga | Neuro |
| ANK_STR_004 | Eccentric heel lowers | Strength |
| FT_STR_001 | Towel scrunches | Strength |
| FT_BAL_001 | Heel-to-toe walk | Balance |

---

## Entries (minimal YAML blocks)

### Cervical / Thoracic
```yaml
id: CERV_ROM_001
name: Cervical AROM — Rotation
region: cervical
type: ROM
tags: [cervical_rotation_limit, neck_stiffness]
dose: { sets: "2-3", reps: "8-12/side", hold_sec: "0", frequency: "1-2x/day" }
````

```yaml
id: CERV_ROM_002
name: Cervical AROM — Side-bend
region: cervical
type: ROM
tags: [cervical_lat_flex_limit, neck_stiffness]
dose: { sets: "2-3", reps: "8-12/side", hold_sec: "0", frequency: "1-2x/day" }
```

```yaml
id: CERV_NEURO_001
name: Chin tuck (deep neck flexors)
region: cervical
type: Neuro
tags: [dnfl_weak, forward_head, cervical_stability_deficit]
dose: { sets: "2-3", reps: "8-10", hold_sec: "3-5", frequency: "daily" }
```

```yaml
id: CERV_STR_001
name: Cervical isometrics (flex/ext/rot)
region: cervical
type: Strength
tags: [cervical_stability_deficit]
dose: { sets: "2-3", reps: "5 each direction", hold_sec: "5-10", frequency: "3-5x/week" }
```

```yaml
id: THX_ROM_001
name: Thoracic extension over towel/foam
region: thoracic
type: ROM
tags: [thoracic_extension_limit, posture_kyphosis]
dose: { sets: "2-3", reps: "6-10", hold_sec: "0", frequency: "1x/day" }
```

```yaml
id: THX_NEURO_001
name: Wall angels
region: thoracic
type: Neuro
tags: [scap_control_deficit, thoracic_mobility_need]
dose: { sets: "2-3", reps: "6-10", hold_sec: "0", frequency: "3-5x/week" }
```

---

### Shoulder / Scapular

```yaml
id: SH_ROM_001
name: Pendulums
region: shoulder
type: ROM
tags: [pain_irritable_shoulder]
dose: { sets: "1-2", reps: "60-120 sec", hold_sec: "0", frequency: "1-3x/day" }
```

```yaml
id: SH_ROM_002
name: Table slides — Flexion
region: shoulder
type: ROM
tags: [shoulder_flexion_limit]
dose: { sets: "2-3", reps: "8-12", hold_sec: "0-10", frequency: "daily" }
```

```yaml
id: SH_ROM_003
name: Sleeper stretch
region: shoulder
type: ROM
tags: [gh_ir_limit, posterior_shoulder_tight]
dose: { sets: "2-3", reps: "1", hold_sec: "20-30", frequency: "1x/day" }
```

```yaml
id: SH_STR_001
name: Band ER/IR (neutral)
region: shoulder
type: Strength
tags: [rc_weak]
dose: { sets: "2-4", reps: "8-15", hold_sec: "0", frequency: "2-4x/week" }
```

```yaml
id: SH_STR_002
name: Scaption (thumb up)
region: shoulder
type: Strength
tags: [deltoid_weak, rc_weak]
dose: { sets: "2-4", reps: "8-12", hold_sec: "0", frequency: "2-4x/week" }
```

```yaml
id: SCAP_NEURO_001
name: Serratus punches
region: scapular
type: Neuro
tags: [scap_winging, serratus_weak]
dose: { sets: "2-3", reps: "10-15", hold_sec: "0", frequency: "3-5x/week" }
```

```yaml
id: SCAP_NEURO_002
name: Prone T / Y
region: scapular
type: Neuro
tags: [mid_low_trap_weak, scap_control_deficit]
dose: { sets: "2-3", reps: "8-12", hold_sec: "0-3", frequency: "2-4x/week" }
```

---

### Elbow / Wrist / Hand

```yaml
id: ELB_STR_001
name: Biceps curl (band/db)
region: elbow
type: Strength
tags: [elbow_flexor_weak]
dose: { sets: "2-4", reps: "8-12", hold_sec: "0", frequency: "2-4x/week" }
```

```yaml
id: ELB_STR_002
name: Triceps pressdown (band)
region: elbow
type: Strength
tags: [elbow_extensor_weak]
dose: { sets: "2-4", reps: "8-12", hold_sec: "0", frequency: "2-4x/week" }
```

```yaml
id: WR_ROM_001
name: Wrist AROM (flex/ext)
region: wrist
type: ROM
tags: [wrist_rom_limit]
dose: { sets: "2-3", reps: "10-15", hold_sec: "0", frequency: "1-2x/day" }
```

```yaml
id: WR_STR_001
name: Wrist extensor eccentrics
region: wrist
type: Strength
tags: [lateral_epicondylalgia]
dose: { sets: "2-3", reps: "8-12", hold_sec: "3 sec lower", frequency: "3-5x/week" }
```

```yaml
id: HAND_ROM_001
name: Tendon glides
region: hand
type: ROM
tags: [hand_stiffness, edema_management]
dose: { sets: "2-4", reps: "5-10", hold_sec: "0", frequency: "1-3x/day" }
```

```yaml
id: HAND_STR_001
name: Putty grip/pinch
region: hand
type: Strength
tags: [grip_weak]
dose: { sets: "2-3", reps: "10-15", hold_sec: "0-2", frequency: "3-5x/week" }
```

---

### Trunk / Core

```yaml
id: TRK_NEURO_001
name: Abdominal brace + breathing
region: trunk
type: Neuro
tags: [trunk_control_deficit, lumbar_stability_deficit]
dose: { sets: "1", reps: "2-3 min", hold_sec: "n/a", frequency: "daily" }
```

```yaml
id: TRK_STR_001
name: Bridge
region: trunk
type: Strength
tags: [glute_weak, trunk_endurance_low]
dose: { sets: "2-4", reps: "8-12", hold_sec: "2-5", frequency: "2-4x/week" }
```

```yaml
id: TRK_STR_002
name: Side plank (modified)
region: trunk
type: Strength
tags: [lateral_chain_weak]
dose: { sets: "2-4", reps: "1", hold_sec: "15-30", frequency: "2-4x/week" }
```

```yaml
id: TRK_NEURO_002
name: Bird-dog
region: trunk
type: Neuro
tags: [lumbar_stability_deficit]
dose: { sets: "2-4", reps: "6-10/side", hold_sec: "2-5", frequency: "3-5x/week" }
```

```yaml
id: TRK_NEURO_003
name: McGill curl-up
region: trunk
type: Neuro
tags: [lumbar_stability_deficit]
dose: { sets: "2-4", reps: "6-10", hold_sec: "5-10", frequency: "3-5x/week" }
```

```yaml
id: TRK_ROM_001
name: Cat-cow
region: trunk
type: ROM
tags: [lumbar_stiffness]
dose: { sets: "2-3", reps: "8-12", hold_sec: "0", frequency: "daily" }
```

```yaml
id: TRK_ROM_002
name: Open book rotation
region: trunk
type: ROM
tags: [thoracolumbar_rotation_limit]
dose: { sets: "2-3", reps: "6-10/side", hold_sec: "1-3", frequency: "daily" }
```

---

### Hip

```yaml
id: HIP_STR_001
name: Clamshell
region: hip
type: Strength
tags: [hip_abductor_weak]
dose: { sets: "2-4", reps: "10-20", hold_sec: "0-2", frequency: "2-4x/week" }
```

```yaml
id: HIP_STR_002
name: Side-lying hip abduction
region: hip
type: Strength
tags: [hip_abductor_weak]
dose: { sets: "2-4", reps: "8-15", hold_sec: "0-2", frequency: "2-4x/week" }
```

```yaml
id: HIP_NEURO_001
name: Hip hinge to wall
region: hip
type: Neuro
tags: [hip_hinge_mechanics]
dose: { sets: "2-4", reps: "6-10", hold_sec: "0", frequency: "2-4x/week" }
```

```yaml
id: HIP_STR_003
name: Sit-to-stand
region: hip
type: Strength
tags: [functional_strength_low, hip_knee_control_deficit]
dose: { sets: "2-4", reps: "6-12", hold_sec: "0", frequency: "2-4x/week" }
```

```yaml
id: HIP_BAL_001
name: Single-leg balance (hip strategy)
region: hip
type: Balance
tags: [hip_control_deficit, balance_deficit]
dose: { sets: "3-5", reps: "1", hold_sec: "20-45", frequency: "3-6x/week" }
```

```yaml
id: HIP_ROM_001
name: Hip flexor stretch (half-kneel)
region: hip
type: ROM
tags: [hip_extension_limit]
dose: { sets: "2-4", reps: "1", hold_sec: "20-45", frequency: "daily" }
```

```yaml
id: HIP_ROM_002
name: Figure-4 stretch
region: hip
type: ROM
tags: [hip_er_limit, piriformis_tight]
dose: { sets: "2-4", reps: "1", hold_sec: "20-45", frequency: "daily" }
```

```yaml
id: HIP_ROM_003
name: Hamstring stretch (strap)
region: hip
type: ROM
tags: [hamstring_tight]
dose: { sets: "2-4", reps: "1", hold_sec: "20-45", frequency: "daily" }
```

```yaml
id: HIP_STR_004
name: Monster walks
region: hip
type: Strength
tags: [hip_abductor_weak, dynamic_valgus]
dose: { sets: "2-4", reps: "10-20 steps each way", hold_sec: "0", frequency: "2-4x/week" }
```

```yaml
id: HIP_NEURO_002
name: Step-down (control)
region: hip
type: Neuro
tags: [hip_knee_control_deficit, dynamic_valgus]
dose: { sets: "2-4", reps: "6-10/side", hold_sec: "0", frequency: "2-4x/week" }
```

```yaml
id: HIP_STR_005
name: Single-leg RDL
region: hip
type: Strength
tags: [posterior_chain_weak, hip_control_deficit]
dose: { sets: "2-4", reps: "6-10/side", hold_sec: "0", frequency: "2-4x/week" }
```

```yaml
id: HIP_ROM_004
name: Adductor rock-backs
region: hip
type: ROM
tags: [hip_ir_limit, groin_tight]
dose: { sets: "2-3", reps: "8-12/side", hold_sec: "0-2", frequency: "daily" }
```

---

### Knee

```yaml
id: KNEE_STR_001
name: Quad set
region: knee
type: Strength
tags: [quad_inhibition]
dose: { sets: "2-4", reps: "8-15", hold_sec: "3-5", frequency: "daily" }
```

```yaml
id: KNEE_STR_002
name: Straight leg raise
region: knee
type: Strength
tags: [quad_weak]
dose: { sets: "2-4", reps: "8-12", hold_sec: "0", frequency: "3-5x/week" }
```

```yaml
id: KNEE_STR_003
name: Terminal knee extension (band)
region: knee
type: Strength
tags: [knee_extension_control]
dose: { sets: "2-4", reps: "10-15", hold_sec: "0-2", frequency: "3-5x/week" }
```

```yaml
id: KNEE_STR_004
name: Step-up (low)
region: knee
type: Strength
tags: [functional_strength_low]
dose: { sets: "2-4", reps: "6-12/side", hold_sec: "0", frequency: "2-4x/week" }
```

```yaml
id: KNEE_NEURO_001
name: Mini-squat (alignment)
region: knee
type: Neuro
tags: [dynamic_valgus, hip_knee_control_deficit]
dose: { sets: "2-4", reps: "6-10 quality", hold_sec: "0-2", frequency: "3-5x/week" }
```

```yaml
id: KNEE_ROM_001
name: Heel slides
region: knee
type: ROM
tags: [knee_flexion_limit]
dose: { sets: "2-3", reps: "10-15", hold_sec: "0", frequency: "1-2x/day" }
```

```yaml
id: KNEE_ROM_002
name: Knee extension hang
region: knee
type: ROM
tags: [knee_extension_limit]
dose: { sets: "2-4", reps: "1", hold_sec: "30-120", frequency: "1-2x/day" }
```

```yaml
id: KNEE_STR_005
name: Wall sit
region: knee
type: Strength
tags: [quad_endurance_low]
dose: { sets: "2-4", reps: "1", hold_sec: "15-45", frequency: "2-4x/week" }
```

```yaml
id: KNEE_STR_006
name: Hamstring curls
region: knee
type: Strength
tags: [hamstring_weak]
dose: { sets: "2-4", reps: "8-15", hold_sec: "0", frequency: "2-4x/week" }
```

```yaml
id: KNEE_NEURO_002
name: Lateral step-over
region: knee
type: Neuro
tags: [dynamic_valgus, balance_deficit]
dose: { sets: "2-4", reps: "6-10/side", hold_sec: "0", frequency: "2-4x/week" }
```

```yaml
id: KNEE_BAL_001
name: SL balance + reach
region: knee
type: Balance
tags: [balance_deficit, hip_knee_control_deficit]
dose: { sets: "3-5", reps: "3-6 reaches/side", hold_sec: "0-2", frequency: "3-6x/week" }
```

---

### Ankle / Foot

```yaml
id: ANK_ROM_001
name: Ankle DF knee-to-wall
region: ankle
type: ROM
tags: [ankle_df_limit]
dose: { sets: "2-3", reps: "8-12", hold_sec: "0", frequency: "daily" }
```

```yaml
id: ANK_STR_001
name: Calf raises (double → single)
region: ankle
type: Strength
tags: [plantarflexor_weak]
dose: { sets: "2-4", reps: "8-15", hold_sec: "0", frequency: "2-4x/week" }
```

```yaml
id: ANK_STR_002
name: Tibialis raises
region: ankle
type: Strength
tags: [dorsiflexor_weak]
dose: { sets: "2-4", reps: "10-20", hold_sec: "0", frequency: "2-4x/week" }
```

```yaml
id: ANK_STR_003
name: Band inversion/eversion
region: ankle
type: Strength
tags: [ankle_stability_deficit]
dose: { sets: "2-4", reps: "10-15 each way", hold_sec: "0", frequency: "2-4x/week" }
```

```yaml
id: ANK_BAL_001
name: Single-leg balance
region: ankle
type: Balance
tags: [balance_deficit]
dose: { sets: "3-5", reps: "1", hold_sec: "20-45", frequency: "3-6x/week" }
```

```yaml
id: FT_NEURO_001
name: Short-foot (arch doming)
region: foot
type: Neuro
tags: [arch_control_deficit, intrinsic_foot_weak]
dose: { sets: "2-4", reps: "8-12", hold_sec: "3-5", frequency: "3-6x/week" }
```

```yaml
id: FT_NEURO_002
name: Toe yoga
region: foot
type: Neuro
tags: [intrinsic_foot_weak]
dose: { sets: "2-4", reps: "8-12", hold_sec: "0-2", frequency: "3-6x/week" }
```

```yaml
id: ANK_STR_004
name: Eccentric heel lowers
region: ankle
type: Strength
tags: [achilles_tendinopathy, plantarflexor_weak]
dose: { sets: "2-4", reps: "8-15", hold_sec: "3 sec lower", frequency: "3-5x/week" }
```

```yaml
id: FT_STR_001
name: Towel scrunches
region: foot
type: Strength
tags: [intrinsic_foot_weak]
dose: { sets: "2-3", reps: "30-60 sec", hold_sec: "n/a", frequency: "3-5x/week" }
```

```yaml
id: FT_BAL_001
name: Heel-to-toe walk
region: foot
type: Balance
tags: [balance_deficit]
dose: { sets: "2-4", reps: "10-20 steps", hold_sec: "n/a", frequency: "3-6x/week" }
```

```
::contentReference[oaicite:0]{index=0}
```
