# **Module 7 — Stabilizers vs Prime Movers**

---

## **Concept (read first)**

**Lesson Focus:**
Students often believe that difficulty during movement means the muscle doing the movement is weak.

This lab teaches that **prime movers can be strong and capable, yet movement can still fail if the body lacks a stable base**.

Students discover that **force production requires stability**, and that without stabilization, effort is wasted and movement becomes inefficient or unreliable.

---

## **Common Student Beliefs vs Lab Evidence**

| Student Belief              | Lab Evidence                           |
| --------------------------- | -------------------------------------- |
| “The moving muscle is weak” | Prime mover activates normally         |
| “Trying harder will fix it” | Effort increases, outcome worsens      |
| “The load is too heavy”     | Load remains unchanged                 |
| “Something else is missing” | Stability restores success immediately |

---

## **What This Lab Is Teaching**

This lab distinguishes between:

* **Prime movers** (muscles that create motion)
* **Stabilizers** (muscles that provide a stable base)
* **Effort** vs **effective force transfer**

Students learn that **movement fails not because force is absent, but because force has nowhere solid to act from**.

---

## **Why This Matters**

This concept explains:

* shakiness during simple tasks
* collapse during controlled movement
* why “strong” people still struggle with stability tasks
* why coaching cues emphasize “bracing,” “grounding,” and “control”

This is a **core first-semester kinesiology concept** that appears in biomechanics, exercise technique, rehabilitation, and sport.

---

## **Trial Guide**

You will complete **three trials**.
Your actions directly change movement quality in real time.

---

## **System Rules (Visible to Student)**

* Load is **moderate and fixed**
* Speed is **slow and fixed**
* No opposing resistance is present
* You may change **how you stabilize**, not the task

---

## **Trial 1 — Strong but Unstable**

### Student Action

1. Attempt to complete the movement.

### What You See

* Prime mover visibly activates
* Distal movement begins, then degrades
* Torso or base subtly wobbles
* Movement feels unreliable or collapses

> This does **not** feel stiff.
> It feels like “nothing solid to push from.”

---

### **Checkpoint — Student Hypothesis**

> **Why is the task failing?**
> ☐ The load is too heavy
> ☐ The prime mover is weak
> ☐ The movement is unstable
> ☐ I’m moving too slowly

(Student must select one.)

---

## **Trial 2 — False Fixes (Exploration Phase)**

### Student Action

The student may attempt to fix the task by:

* trying harder
* moving faster
* changing posture
* exaggerating the movement

### Immediate Evidence

* Trying harder → wobble increases
* Moving faster → loss of control
* Posture changes → minimal improvement

A subtle indicator appears:

**Stability Level**

* Low
* Fluctuating
* Not explained yet

The task still feels unreliable.

---

## **Trial 3 — Build the Base (Breakthrough)**

### Student Action

1. Increase stabilization at the base (brace, ground, fix proximal segments).
2. Maintain the same load and speed.
3. Attempt the movement again.

### Immediate Result

* Stability Level rises
* Proximal wobble disappears
* Force transfers cleanly
* Movement becomes smooth
* Task completes successfully with **less effort**

The student can toggle stabilization:

* ↓ stabilization → failure returns
* ↑ stabilization → success returns

Difficulty switches **on / off in real time**.

---

## **Concept Reveal (After Trial 3)**

> *The muscle performing the movement was strong enough.*
> *The problem was a lack of stabilization.*
>
> *Prime movers require a stable base to function effectively.*

---

## **Key Inference (Required)**

> **What actually limited performance?**

☐ Prime mover strength
☐ Load magnitude
☐ Lack of stabilization
☐ Movement speed

**Correct Answer:** ☐ Lack of stabilization

---

## **Post-Trial Questions**

**Q1**
Why did the task fail even though the prime mover was active?

A. Strength was insufficient
B. Load increased
C. Stabilization was inadequate
D. Speed was too slow

**Correct Answer:** C

---

**Q2**
Why did “trying harder” not improve performance?

A. Fatigue increased instantly
B. Force had no stable base
C. Speed was incorrect
D. Balance was lost

**Correct Answer:** B

---

**Q3**
What allowed the task to succeed?

A. More force
B. Faster movement
C. Improved stabilization
D. Reduced load

**Correct Answer:** C

---

## **WHAT THE LAB PROVES**

| Student Action         | Immediate Evidence          |
| ---------------------- | --------------------------- |
| Increases effort       | Shakiness worsens           |
| Moves faster           | Control degrades            |
| Changes posture only   | Minimal improvement         |
| Improves stabilization | Smooth, successful movement |

---

# **Developer Implementation Notes (Not Student-Facing)**

## **Critical Design Principle**

> **Do not show stabilizers.
> Show what happens when stabilization is missing.**

Stabilization failure must be visible as **wobble, leakage, and force loss**, not stiffness.

---

## **Visual Signature of Stabilization Failure**

### Unstable State (Trials 1–2)

* Small, continuous oscillation in proximal segments
* Energy “leaks” into torso instead of producing clean distal motion
* Movement looks shaky, not rigid

### Stable State (Trial 3)

* Proximal segments quiet
* Distal movement becomes smooth
* Same force produces better outcome

---

## **Bones Used to Create the Effect**

You already have everything needed.

### **Primary Stability Chain (Control These)**

* `pelvis`
* `pelvis_extra`
* `spine01`
* `spine02`
* `spine03`
* `clavicle_L`
* `clavicle_R`

### **Prime Movers (Leave Functionally Intact)**

* `upperarm_L / upperarm_R`
* `lowerarm_L / lowerarm_R`
* `thigh_L / thigh_R`
* `calf_L / calf_R`

---

## **How to Simulate Stabilizer Failure**

### Unstable Mode

* Allow low-amplitude noise or oscillation in:

  * pelvis tilt / rotation
  * spine lateral flexion / rotation
* Slight clavicle drift during limb motion
* Do **not** block prime mover activation

This creates:

* visible wobble
* delayed or degraded distal motion
* “mushy” force transfer

---

### Stable Mode

* Dampen or lock:

  * pelvis rotation
  * spine oscillation
  * clavicle drift
* Keep limb motion unchanged

This creates:

* immediate visual contrast
* smooth force transfer
* clear success without added effort

---

## **Stability Level Indicator**

Recommended minimal UI element:

* Ring or halo at pelvis
* Fill or color reflects stability
* Wobbles when unstable
* Locks when stable

Label it **“Stability”**, not muscles.

---
