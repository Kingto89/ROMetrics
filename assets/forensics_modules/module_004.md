

# **Module 4 — Acute Exercise Responses & Warm-Up Effects**

---

## **Concept (read first):**

**Lesson Focus:**
Early physiologic responses to exercise are often misunderstood.
Students commonly interpret rapid heart rate or breathing changes as signs of poor fitness, overload, or intolerance.

This lab teaches that **early exercise responses reflect system adjustment, not performance limitation**, and that **preparation changes how the system responds — not what the task requires**.

---

## **Common Student Beliefs vs Lab Evidence**

| Student Belief                 | Lab Evidence             |
| ------------------------------ | ------------------------ |
| Early HR rise = problem        | Occurs in all conditions |
| Warm-up makes the task easier  | Task demand is unchanged |
| Strong response = poor fitness | Response ≠ capacity      |
| Fitness can be judged at onset | Onset ≠ endurance        |

This lab requires students to **test these beliefs through action**, not observation.

---

## **What This Lab Is Teaching**

This lab distinguishes between:

* **Physiologic response** vs **performance limitation**
* **Preparation state** vs **task difficulty**
* **Sensation** vs **capacity**

Students learn to interpret **what early exercise responses mean — and what they do not**.

---

## **Why This Matters**

Misinterpreting normal responses can lead to:

* unnecessary intensity changes
* premature task termination
* poor exercise prescription
* incorrect assumptions about fitness or safety

This lab trains students to **base decisions on evidence, not sensation**.

---

## **Trial Guide**

Follow the steps below in order.
Student decisions directly affect what occurs in real time.

---

### **Trial 1 — Baseline at Rest**

1. Stand on the treadmill while it is **off**.
2. Observe the avatar at rest.
3. Note visible breathing pattern and heart rate display.

**Record:**

* Resting heart rate
* Breathing rate (slow / regular)
* RPE at rest

---

### **Prediction Checkpoint (Required)**

Before starting exercise, select **one**:

> **What do you expect to change first when exercise begins?**
> ☐ Heart rate
> ☐ Breathing rate
> ☐ Perceived exertion
> ☐ Nothing noticeable

---

### **Trial 2 — Exercise Onset (Unprepared)**

1. Start the treadmill at **5.0 mph, 0% incline**.
2. Begin jogging immediately at this pace.
3. Maintain for **1 minute**.

**Observe (real time):**

* Speed of heart rate increase
* Change in breathing rate and chest expansion
* Immediate change in RPE

> *Student may stop the trial early if they believe the response indicates a problem.*

---

### **Classification Checkpoint**

> **How would you classify what you are seeing?**
> ☐ Normal acute exercise response
> ☐ Sign of poor fitness
> ☐ Sign of overload
> ☐ Unsure

---

### **Trial 3 — Recovery to Baseline**

1. Stop the treadmill.
2. Observe the avatar during recovery.

**Observe:**

* Heart rate decline
* Slowing of breathing
* Return toward baseline pattern

---

### **Preparation Choice (Student Controlled)**

Select **one**:

> ☐ Begin exercise again immediately
> ☐ Perform a warm-up first

---

### **Trial 4A — Exercise Without Warm-Up (if chosen)**

1. Start treadmill at **5.0 mph, 0% incline**.
2. Jog for **1 minute**.

**Observe:**

* Abruptness of heart rate rise
* Breathing pattern early in the task
* RPE compared to Trial 2

---

### **Trial 4B — Warm-Up Phase (if chosen)**

1. Start treadmill at **3.5 mph, 0% incline**.
2. Walk briskly for **2–3 minutes**.
3. Keep effort light and controlled.

**Observe:**

* Gradual heart rate increase
* Smooth breathing transition
* Low RPE

---

### **Trial 5 — Exercise After Warm-Up**

1. Increase speed to **5.0 mph, 0% incline**.
2. Jog for **1 minute**.

**Observe:**

* Speed of heart rate increase
* Breathing comfort
* RPE compared to unprepared trial

---

### **Comparison Step**

Compare the **unprepared** and **warm-up** conditions.

**Compare:**

* Abrupt vs smooth heart rate rise
* Rapid vs controlled breathing change
* Early RPE at the same workload

---

## **Key Inference**

**Warm-up changes how the body enters exercise — not what the task requires.**
Early physiologic response does **not** indicate limitation, fitness, or failure.

---

## **Post-Trial Questions**

**Q1**
Why did heart rate and breathing increase immediately, even though the task was manageable?

A. Fitness was insufficient
B. Fatigue developed quickly
C. The system was adjusting to demand
D. The workload was too high

**Correct Answer:** C

---

**Q2**
What changed between the warm-up and no warm-up conditions?

A. Task difficulty
B. Speed or incline
C. System preparation
D. Performance capacity

**Correct Answer:** C

---

**Q3**
Why is it incorrect to judge fitness based on early exercise response?

A. Early response reflects endurance
B. Early response reflects adaptation, not capacity
C. Early response predicts strength
D. Early response indicates overload

**Correct Answer:** B

---

## **WHAT THE LAB PROVES**

| Student Action                | Immediate Evidence            |
| ----------------------------- | ----------------------------- |
| Starts exercise from rest     | HR and breathing rise rapidly |
| Warms up first                | Response becomes smoother     |
| Increases speed unnecessarily | Response worsens              |
| Maintains workload            | Response stabilizes           |

---

## **Developer Implementation Notes (Not Student-Facing)**

### **Core Requirements**

* Single avatar
* Treadmill environment
* Real-time HR display
* RPE indicator
* Visible chest expansion tied to respiration

---

### **Respiration Animation**

* Drive breathing using:

  * `ribs_twist_L`
  * `ribs_twist_R`
  * `spine01–03`
* Increase **rate** and **amplitude** with workload
* Smooth transitions during warm-up condition

---

### **Real-Time Consequences**

* If student increases speed early:

  * HR accelerates faster
  * Breathing exaggerates
  * RPE rises sharply
* If student stops early:

  * Recovery still demonstrates response normalization

---

### **Critical Constraints**

* Never label responses as “good” or “bad”
* Never imply fitness level
* Never reference energy systems or VO₂
* Evidence must emerge visually and numerically

---
