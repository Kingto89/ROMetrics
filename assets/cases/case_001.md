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
      "cervical_right_rotation": 30,
      "cervical_right_lat_flex": 20
    },
    "goniometry_limit": {
      "cervical_right_rotation": 30,
      "cervical_right_lat_flex": 20
    },
    "mmt_target_grade": {
      "right_cervical_rotators": "4/5"
    },
    "collision_override": {
      "enable": true,
      "region": "cervical"
    }
  }
}


---

# Case 1: Cervical Impairment

## Patient Profile
- Name: Sarah B.
- Age: 29
- Occupation: Graduate student

---

## Chief Complaint
“My neck feels stiff when I try to turn it.”

---

## History of Present Illness
- Onset 3 days ago after sleeping awkwardly  
- Pain is dull, localized, non-radiating  
- Worse with right rotation and prolonged sitting  
- Eased by warm shower and gentle stretching  
- Denies numbness, tingling, trauma, headaches, dizziness

---

## Objective Examination

### Cervical ROM

| Motion                | Normal | Actual        | Notes                       |
| --------------------- | ------ | ------------- | --------------------------- |
| Flexion               | WNL    | WNL           | —                           |
| Extension             | WNL    | WNL           | —                           |
| Right Lateral Flexion  | 45°    | 20° (painful) | Primary limitation      |
| Left Lateral Flexion | 45°    | 45°           | WNL                         |
| Right Rotation         | 70°    | 30° (painful) | Significant limitation  |
| Left Rotation        | 70°    | 70°           | WNL                         |


### MMT
| Muscle Group            | Strength     | Notes                      |
|-------------------------|--------------|----------------------------|
| Cervical Anterior Flexor| 5/5          | Normal                     |
| Right Cervical Flexor    | 4/5          | Pain-limited                       |
| Cervical Extensors      | 5/5          | Normal                     |
| Right Cervical Rotators  | 4/5          | Pain-limited               |
| Left Cervical Rotators | 5/5          | Normal                     |

### Sensation
- Dermatomes C2–T1 intact  
- No radiating symptoms  

---

## Case Clues 
- Direction-specific ROM loss  
- Pain-limited strength  
- No sensory involvement  
- Mechanical pattern with positional onset  

---

## ROMetrics Module Instructions

### Motion Lab
- Limit Right cervical rotation to 30°
- Limit Right cervical flexion to 20°
- Apply cervical collision override  
- Student observes restricted AROM  

### Goniometry Trainer
- Hard stop at 15° RCR & 30° RCF   
- Student documents limited ROM  

### MMT Trainer
- Cap Right cervical rotators at 4/5  
- Other groups normal  

---

## Case Completion Requirements
1. Student reads case to unlock modules  
2. Observes restricted ROM in Motion Lab  
3. Measures 30° in Goniometry Trainer for RCR
4.  Measures 20° in Goniometry Trainer for RCF
5. Records 4/5 in MMT Trainer  
6. Writes a diagnosis in the case conclusion area  

---

# End of case_001
