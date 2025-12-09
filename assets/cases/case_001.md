{
  "case_id": "case_001",
  "unlocks": {
    "goniometry_trainer": true,
    "motion_lab": true,
    "mmt_trainer": true
  },
  "flow": {
    "require_read_before_unlock": true,
    "require_motion_lab": true,
    "require_goniometry": true,
    "require_mmt": true
  },
  "limits": {
    "motion_lab_limit": {
      "cervical_left_rotation": 35
    },
    "goniometry_limit": {
      "cervical_left_rotation": 35
    },
    "mmt_target_grade": {
      "left_cervical_rotators": "4/5"
    },
    "collision_override": {
      "enable": true,
      "region": "cervical"
    }
  }
}


---

# Case 1: 

## Patient Profile
- Name: Sarah B.
- Age: 29
- Occupation: Graduate student
- Setting: Outpatient orthopedic visit

---

## Chief Complaint
“My neck feels stiff when I try to turn to the left.”

---

## History of Present Illness
- Onset 3 days ago after sleeping awkwardly  
- Pain is dull, localized, non-radiating  
- Worse with left rotation and prolonged sitting  
- Eased by warm shower and gentle stretching  
- Denies numbness, tingling, trauma, UE weakness, headaches, dizziness

---

## Objective Examination

### Cervical ROM
| Motion         | Normal | Actual            | Notes              |
|----------------|--------|-------------------|--------------------|
| Flexion        | WNL    | WNL               | —                  |
| Extension      | WNL    | Mild stiffness    | —                  |
| Left Rotation  | ~80°   | 35° (painful)     | Primary limitation |
| Right Rotation | ~80°   | 70°               | Mild tightness     |

### MMT
| Muscle Group            | Strength     | Notes                      |
|-------------------------|--------------|----------------------------|
| Cervical Flexors        | 5/5          | Normal                     |
| Cervical Extensors      | 5/5          | Normal                     |
| Left Cervical Rotators  | 4/5          | Pain-limited               |
| Right Cervical Rotators | 5/5          | Normal                     |

### Sensation
- Dermatomes C2–T1 intact  
- No radiating symptoms  

---

## Case Clues (No Diagnosis Provided)
- Direction-specific ROM loss  
- Pain-limited strength  
- No sensory involvement  
- Mechanical pattern with positional onset  

---

## ROMetrics Module Instructions

### Motion Lab
- Limit left cervical rotation to 45°  
- Apply cervical collision override  
- Student observes restricted AROM  

### Goniometry Trainer
- Hard stop at 35°  
- Student documents limited ROM  

### MMT Trainer
- Cap left cervical rotators at 4/5  
- Other groups normal  

---

## Case Completion Requirements
1. Student reads case to unlock modules  
2. Observes restricted ROM in Motion Lab  
3. Measures 35° in Goniometry Trainer  
4. Records 4/5 in MMT Trainer  
5. Writes a diagnosis in the case conclusion area  

---

# End of case_001
