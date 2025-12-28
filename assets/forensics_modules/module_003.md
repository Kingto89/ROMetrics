# FL-003 — Repeated Effort Performance

---

### Concept (read first):

**Lesson Focus:**  
Repeated short, high-effort movements can fail even when rest intervals appear sufficient.  
Task failure does not automatically indicate a loss of strength.

- **State-Dependent Performance:**  
  Strength capacity may still exist, but the body’s current state can limit how effectively force is expressed.

- **Non-Equivalent Solutions:**  
  Performance can be restored in multiple ways, but not all solutions preserve the original purpose of the task.

- **Task Success vs System Readiness:**  
  Completing a movement does not guarantee that the system has recovered or adapted.
### Concept (read first):

**Lesson Focus:**  
Repeated short, high-effort movements can fail even when rest intervals appear sufficient.  
Task failure does not automatically indicate a loss of strength.

This lab teaches that **performance failure can occur without a reduction in physical capacity** and that how performance is restored matters for the body and the exercise being performed.

---

**What This Lab Is Teaching:**

When performance declines, there are multiple ways to make a task “work again.”  
However, **not all solutions affect the body or the exercise in the same way**.

This lab distinguishes between:

- **Restoring the system**  
- **Changing the task**  
- **Changing how the task is performed**

Although all three may result in successful movement, **only some preserve the original purpose of the exercise**.

---

**Key Implications:**

- **Increasing rest** improves readiness but may not fully restore performance during repeated high-force efforts.  
  *This may be appropriate when recovery time is available but does not guarantee consistent output.*

- **Reducing load** restores success by lowering task demands.  
  *This is useful when completion is the priority, but it does not reflect recovery or preserved capacity.*

- **Reducing movement speed** restores performance without lowering load or increasing rest.  
  *This preserves the original exercise demand and is preferred when the goal is to maintain strength capacity while managing fatigue.*

---

**Why This Matters:**

In practice, successful movement does not always mean the system is ready or recovered.  
Understanding **which adjustment restores performance — and why —** helps distinguish between:

- managing fatigue  
- preserving training intent  
- simply making a task easier  

This lab trains students to evaluate performance outcomes based on **what changed in the body and the exercise**, not just whether the task was completed.

---

### Trial Guide

Follow the steps below in order.  
Do not change multiple variables at once.

---

#### Trial 1 — Establish Repeated Effort Performance

1. Begin the task using the default load and movement speed.  
2. Perform repeated efforts until the task can no longer be completed.  
3. Observe when failure occurs and note whether it happens at a consistent point in the movement.

**Record:**  
- Whether early repetitions are successful  
- Where in the movement failure occurs  

---

#### Trial 2 — Increase Rest Interval

1. Increase the rest interval between efforts.  
2. Keep load and movement speed unchanged.  
3. Repeat the task until failure occurs again.

**Observe:**  
- Whether performance improves  
- Whether failure still occurs earlier than initial repetitions  

---

#### Trial 3 — Reduce External Load

1. Return the rest interval to its original value.  
2. Reduce the external load.  
3. Perform the task again.

**Observe:**  
- Whether the task can be completed  
- How effort and movement quality change  

---

#### Trial 4 — Reduce Movement Speed

1. Restore the original load and rest interval.  
2. Reduce movement speed while maintaining control.  
3. Perform the task again.

**Observe:**  
- Whether the task can be completed at the original load  
- Whether effort appears reduced or redistributed  

---

### Outcome Comparison

| Adjustment | What Changed | What It Means |
|-----------|-------------|---------------|
| More rest | Partial recovery | Recovery alone does not guarantee readiness |
| Less load | Task demand lowered | Task success does not equal system recovery |
| Slower speed | Force applied more effectively | Performance restored without reducing capacity |

---

### Key Inference

**Restoring performance is not the same as restoring capacity.**

Some solutions preserve the original purpose of the exercise.  
Others simply make the task easier.

---

### Checkpoint Questions

**Checkpoint — Q1**  
Why did performance decline even though task duration, load, and rest were unchanged?

A. Strength capacity was lost  
B. Energy availability was insufficient  
C. Performance depends on more than strength alone  
D. The task became longer  

**Correct Answer:** C

---

**Checkpoint — Q2**  
Which adjustment restored performance without lowering the demands of the task?

A. Increasing rest  
B. Reducing load  
C. Reducing movement speed  
D. Ending the task  

**Correct Answer:** C

---

**Checkpoint — Q3**  
When load was reduced and the task succeeded, what changed?

A. Strength capacity increased  
B. The system fully recovered  
C. The task demand was lowered  
D. The body adapted  

**Correct Answer:** C



> **Developer Build Spec:**  
> • Subject: single avatar only  
> • Task: repeated high-force movement  
> • Effort duration per repetition: 6 seconds  
> • External load: fixed (unless reduced in Trial 3)  
>
> **Rest Selection Rule:**
> • Student selects rest duration before each attempt
> • Available rest options: 30s, 60s, 90s, 120s
> • Rest choice must be visible and logged per attempt
>
> **Trial Structure (fixed order, student-controlled rest):**
>
> 1. **Trial 1 – Repeated Effort Exploration**
>    - Conditions: default load, default speed
>    - Student selects rest duration before each repetition
>    - Trial continues until failure occurs
>    - Pass = full movement completed
>    - Fail = movement cannot be completed through full range
>
>    **Expected Behavior:**
>    - Shorter rest (30–60s): earlier failure
>    - Longer rest (90–120s): delayed failure, but not eliminated
>    - why? perhaps in question it will also provide answer still fatigued?
>
> 2. **Trial 2 – Rest-Based Recovery Test**
>    - Conditions unchanged (same load, same speed)
>    - Student increases rest duration deliberately
>    - Trial continues until failure
>
>    **Expected Behavior:**
>    - Increased rest improves performance
>    - Failure still occurs at the same point in the movement
>    - Performance does not fully return to initial levels
>
> 3. **Trial 3 – Load Reduction Test**
>    - Conditions: reduced load, student-selected rest
>    - Run a single attempt
>
>    **Expected Behavior:**
>    - Task passes regardless of rest duration
>    - Effort is visibly lower
>
> 4. **Trial 4 – Speed Reduction Test**
>    - Conditions: original load, original rest options available
>    - Student selects slower movement speed
>    - Run a single attempt
>
>    **Expected Behavior:**
>    - Task passes at original load
>    - Performance restored without reducing task demand
>
> **Failure Criteria:**
> • Failure occurs when motion stalls at a consistent point in the range
> • Failure must occur even at the longest rest option (120s)
>
> **Key Instructional Requirement:**
> • The lab must make it visually clear that:
>   – More rest improves but does not guarantee readiness
>   – Less load changes the exercise
>   – Slower speed preserves the original task and capacity
>
> **Critical Constraint:**
> • The system must never imply a “correct” rest value
> • Students must discover that rest time and performance are related, but not sufficient
