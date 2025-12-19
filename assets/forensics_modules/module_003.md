# FL-003 — Reactive Balance Lab (Stability & Recovery)

**Objective:** Maintain upright posture and recover from external balance disturbances.  
**Audience:** 1st-year DPT, 1st-year Exercise Science  
**Time-on-task:** 6–10 minutes  
**Environment:** Movement Analysis Booth (capture square + monitors)

---

## IN-APP INSTRUCTIONS (STUDENT VIEW)

### Definitions (read once)
- **External perturbation** = the system applies a short push that knocks the avatar LEFT or RIGHT.
- **Stability %** = how upright the avatar is (100% = steady, 0% = fall).
- **Fall** = the avatar tips too far and cannot recover without resetting.

### Controls
- **A** = shift weight LEFT (small correction)
- **D** = shift weight RIGHT (small correction)
- **SPACE** = BRACE (stiffen posture for a moment to reduce wobble)
- **←** = STEP LEFT (big recovery move)
- **→** = STEP RIGHT (big recovery move)

You will SEE the avatar react: sway, brace, step, or fall.

---

## COMPLETE ALL 3 TRIALS (A → B → C)

---

### Trial A — Base of Support (30s)
**CASE CLUE:** A wider foot stance improves stability during normal sway.

**Goal:** Pick the stance that gives the best Stability % at the end of 30 seconds.

**Steps**
1) Select **STANCE**:
   - **Narrow** = feet close together
   - **Shoulder** = feet shoulder-width
   - **Wide** = feet wider than shoulders
2) Press **Start Trial**
3) Use **A / D** only (no stepping in Trial A)
4) Keep the avatar upright for 30 seconds

**PASS when:** No fall AND **Stability ≥ 70%** at the end.

**Question (after Trial A) — 3 attempts**
Why does a wider stance usually improve stability?  
A) It increases base of support  
B) It decreases gravity  
C) It increases speed  
D) It makes muscles stronger instantly

---

### Trial B — Unstable Surface Control (30s)
**CASE CLUE:** Standing on a foam pad increases sway and makes balance harder.

**Goal:** Stay upright on **FOAM** using brace correctly.

**Steps**
1) Set **SURFACE = FOAM** (unstable)
2) Choose any **STANCE** (you decide)
3) Press **Start Trial**
4) Use **A / D** to correct sway
5) Use **SPACE (BRACE)** up to **2 times** when sway gets large
6) Finish the 30 seconds without a fall

**PASS when:** No fall AND **Stability ≥ 60%** at the end.

**Question (after Trial B) — 3 attempts**
What changed in Trial B that increased sway?  
A) The surface became unstable (foam)  
B) The avatar became heavier  
C) The camera moved  
D) The treadmill speed increased

---

### Trial C — Reactive Recovery From External Pushes (30s)
**CASE CLUE:** In real life, balance loss often happens from a sudden bump or shove.

**What “push” means in this lab**
- **PUSH LEFT** = the system applies a quick lateral force to the avatar’s torso toward the LEFT.
- **PUSH RIGHT** = the system applies a quick lateral force to the avatar’s torso toward the RIGHT.

**Goal:** Recover from pushes without falling.

**Steps**
1) Press **Start Trial**
2) When you see **PUSH LEFT**, you must respond immediately with:
   - **D** (small counter-shift RIGHT), OR
   - **→** (step RIGHT) if the sway is large
3) When you see **PUSH RIGHT**, respond immediately with:
   - **A** (small counter-shift LEFT), OR
   - **←** (step LEFT) if the sway is large
4) Use **SPACE (BRACE)** only when the avatar is close to falling
5) Finish the 30 seconds

**PASS when:** No fall AND **Correct recoveries ≥ 70%**.

**Question (after Trial C) — 3 attempts**
If the push is strong and the avatar is near falling, the best response is:  
A) Step to restore balance  
B) Freeze and do nothing  
C) Increase speed  
D) Narrow the stance mid-fall

---

## WHAT THE ROOM MUST SHOW (VISIBLE FEEDBACK)

- The avatar visibly **leans/sways** with each push
- **Brace** visibly reduces wobble briefly
- **Step** visibly repositions the feet/body to recover
- Monitor shows live:
  - **Stability %**
  - **Falls (0/1)**
  - **Recovery Accuracy %**
  - Optional: **Reaction Time (ms)** after each push

---

## (INTERNAL) SCORING + RECORDING (NOT SHOWN TO STUDENTS)

### MCQ scoring (per question, max 4.0)
- Attempt 1 correct = 4.0
- Attempt 2 correct = 3.5
- Attempt 3 correct = 2.5
- Miss all 3 = 1.5

### Data recorded
- Trial A: stanceChoice, stabilityEndPct, swayAvg, fall (T/F)
- Trial B: surface=FOAM, braceCount, stabilityEndPct, fall (T/F)
- Trial C: pushCount, correctRecoveriesPct, avgReactionMs, stepCount, braceCount, fall (T/F)
- MCQ: correct, attemptsUsed, pointsAwarded
- Module totals: totalPoints, completionTimeSec
