## FL-004 —  Neuromuscular Control

**Objective:** Investigate how **Neural Drive**—specifically **Spatial Summation** and **Temporal Summation**—dictates muscle force and stability during a loaded squat.
**Audience:** 1st-year Kinesiology / Exercise Science
**Time-on-task:** 4–8 minutes
**Environment:** Neural Control Console

---

### Concept (read first):

In this lab, **Neuromuscular Control** is determined by the brain's ability to "turn on" and "fire" muscle fibers to resist a load.

* **Spatial Summation (The Size Principle):** To resist heavier weight, the Central Nervous System (CNS) must recruit more motor units. It follows a strict hierarchy: small **Type I (Slow-Twitch)** fibers activate first for light tasks, followed by large **Type II (Fast-Twitch)** fibers for explosive power.
* **Temporal Summation (Rate Coding):** This is the **frequency** of the electrical signals sent from the brain. The faster the signals arrive, the more steady and forceful the muscle contraction becomes.
* **Electromechanical Delay (EMD):** The time gap between the brain's signal and the actual production of muscle force.
* **Stability Failure:** Stability is maintained only if the **Neural Drive** (your tapping) generates enough force to keep the **Hip Joint Angle** at exactly **90°**. If the angle increases to **100°** (a 10° drop), the nervous system has failed to match the load.

**Key Concepts:**

* **Neural Drive:** The total electrical output from the CNS to the muscles.
* **Motor Unit Recruitment:** The number of muscle fibers active (Spatial Summation).
* **Firing Frequency:** How fast the "Fire!" signal is repeated (Temporal Summation/Rate Coding).

---

### Trial Guide:

**Trial A — Recruitment and the Size Principle (Spatial Summation)**

1. **Observe:** Your subject is in a **90° Squat** holding the Neural Control Tablet.
2. **Interact:** Slowly increase the **Load Slider** from 0kg to 100kg.
3. **Active Input:** You must **increase your Tapping Speed** on the console as the weight climbs to keep the hips at 90°.
4. **Console Strategy:** Watch the **Motor Unit Map** to see when the large purple circles (Type II fibers) are forced to activate.
5. **Forensic Goal:** Identify the **exact Load (kg)** where your tapping can no longer prevent a **10° Hip Drop** (Failure).

**Trial B — Fatigue and Rate Coding (Temporal Summation)**

1. **Observe:** The load is now fixed at a heavy **80kg**.
2. **Interact:** Maintain the squat for a full **45-second timer**.
3. **Console Strategy:** Monitor the **Live EMG Feed**. If your tapping rhythm stutters, the wave height drops, signaling **Neural Drift**.
4. **Forensic Goal:** Identify the point where **Central Fatigue** causes the avatar to tremble and lose the 90° position.

---

### Developer Rigging Instructions:

* **Input Mapping:** Map mobile screen taps to a **Neural Drive Variable** that decays over time if not refreshed.
* **Hip Constraint:** Set a "Success Zone" at **90° knee flexion**. Trigger **FAILURE** state if the angle hits **100°**.
* **Procedural Animation:** Add a **"Tremble" shader** to the avatar's legs when the tap-interval variance exceeds 15%.
* **EMG Script:** Visualize tap frequency as a real-time scrolling waveform (Amplitude = Tap Pressure; Frequency = Tap Speed).

---

### Checkpoint Questions:

**Checkpoint — Trial A (Q1)**
In Trial A, why do the large purple Motor Units only light up when the weight is heavy?

A) Because they are lazy
B) Because the Size Principle dictates that high-threshold fibers only recruit when load is high
C) Because they ran out of oxygen
D) Because the joint angle changed

**Answer:** B

**Checkpoint — Trial B (Q2)**
If the avatar begins to tremble while holding the 80kg load, what is happening neurally?

A) The muscle is getting bigger
B) Rate Coding (Firing Frequency) has become irregular due to Central Fatigue
C) The Center of Mass shifted outside the Base of Support
D) The gravity constant decreased

**Answer:** B

---

Would you like me to generate the **Student Data Sheet** for recording the kg and BPM values from these trials?
