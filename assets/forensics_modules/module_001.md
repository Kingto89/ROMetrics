```rometrics-case
{
  "crashEnergy": 10,
  "duration": 60,
  "trials": {
    "A": {
      "workType": "steady",
      "freeSpeed": true,
      "lockMph": null,
      "clue": "At steady work, the body can keep going longer if demand stays manageable.",
      "goal": "Find the highest speed that keeps Energy ≥ 60% for the entire trial.",
      "pass": "Energy never drops below 60% during the full 60s timer.",
      "question": {
        "prompt": "Which energy system best supports sustained steady work?",
        "options": ["ATP-PCr","Anaerobic Glycolysis","Oxidative (Aerobic)","None"],
        "correctIndex": 2
      }
    },
    "B": {
      "workType": "tempo",
      "freeSpeed": false,
      "lockMph": 8.0,
      "clue": "At higher intensity, you drain energy faster. Fuel helps — but timing matters.",
      "goal": "Keep Energy ≥ 35% for the full 60s at 8.0 mph using exactly 2 fuels.",
      "pass": "Finish 60s with Energy ≥ 35% AND used exactly 2 fuels.",
      "question": {
        "prompt": "Why can “late fuel” fail even if you press Fuel +10?",
        "options": [
          "Fuel only works at low speeds",
          "Fuel adds energy, but you can still drain faster than you add",
          "Fuel permanently stops energy drain",
          "Fuel timing never matters"
        ],
        "correctIndex": 1
      }
    },
    "C": {
      "workType": "tempo",
      "freeSpeed": false,
      "lockMph": 8.0,
      "clue": "Two people can use the same amount of fuel and get different outcomes based on strategy.",
      "goal": "Beat your Trial B final Energy using the SAME rules (8.0 mph + exactly 2 fuels).",
      "pass": "Final Energy is higher than your Trial B final Energy AND used exactly 2 fuels.",
      "question": {
        "prompt": "What did you change to improve the outcome if speed and fuel amount stayed the same?",
        "options": [
          "You changed the timing of the fuel",
          "You changed gravity",
          "You changed the treadmill distance",
          "Nothing can change the outcome"
        ],
        "correctIndex": 0
      }
    }
  }
}
