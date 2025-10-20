# Joint Test Playbook (v0.1)

This playbook defines the **order of operations** for each preprogrammed **Test**.  
Angles are in **degrees**. Force scale is 0–5.

## Postures
- `supine` – neutral hips/knees; spine neutral
- `prone` – slight hip extension; spine neutral
- `sitting` – ~90–90 at hips/knees; slight lumbar flex

## Test sequences (examples)
- **Shoulder Flexion L (`gh_flex_l`)**
  1. Optional: scapular upward rotation ~10°
  2. GH flexion to 90°

- **Forearm Pronation L (`fa_pro_l`)**
  1. Elbow flex to ~90° (`el_flex_l`)
  2. FA pronate to ~90°

Each entry includes a target **posture** and a **sequence** of steps. Steps can be `move` (animate a joint) or `call` (run another test first).
