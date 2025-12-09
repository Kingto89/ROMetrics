# Case File: case_001
*ROMetrics Case File — Markdown + JSON Hybrid (For programmatic reading)*

---

## CASE METADATA
```json
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
      "cervical_left_rotation": 45
    },
    "goniometry_limit": {
      "cervical_left_rotation": 45
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
