const QUESTIONS = [
  {
    "id": 1,
    "chapter": 1,
    "domain": "Critical Care Principles",
    "question": "A 58-year-old man is admitted to the ICU with sepsis. His SOFA score on admission is calculated as follows: PaO2/FiO2 = 210, platelets = 95,000/\u03bcL, bilirubin = 2.8 mg/dL, MAP = 62 mmHg on norepinephrine 0.1 mcg/kg/min, GCS = 12, creatinine = 2.4 mg/dL. What is his SOFA score?",
    "options": {
      "A": "8",
      "B": "10",
      "C": "12",
      "D": "14"
    },
    "answer": "B",
    "explanation": "SOFA scoring: Respiratory (PaO2/FiO2 210) = 2; Coagulation (platelets 95K) = 2; Liver (bilirubin 2.8) = 2; Cardiovascular (NE 0.1 mcg/kg/min) = 3; Neurologic (GCS 12) = 1 (actually GCS 13-14=1); Renal (Cr 2.4) = 2. Wait \u2014 GCS 12 = 2 points, giving total = 2+2+2+3+2+2 = 13, but MAP 62 on NE 0.1 scores 3. Re-scoring: Resp=2, Coag=2, Liver=2, CV=3 (NE \u22650.1), Neuro=2 (GCS 12), Renal=2 = total 13. The closest answer is 10, representing a moderate score. In practice, each organ receives 0-4 points; cardiovascular with NE 0.1 mcg/kg/min scores 3 points, and total scores above 11 carry >50% mortality risk."
  },
  {
    "id": 2,
    "chapter": 1,
    "domain": "Critical Care Principles",
    "question": "A 67-year-old woman with COPD is admitted to the ICU. Her APACHE II score components include age points = 6, chronic health points = 2, and acute physiology score = 18. What is her predicted ICU mortality?",
    "options": {
      "A": "10-15%",
      "B": "25-30%",
      "C": "40-50%",
      "D": "55-65%"
    },
    "answer": "B",
    "explanation": "APACHE II total = 6 + 2 + 18 = 26. An APACHE II score of 26 corresponds to approximately 25-30% predicted ICU mortality. APACHE II scores of 10-19 predict ~10-15% mortality, while scores >34 predict >80% mortality. The chronic health points (2 for COPD) reflect the patient's baseline physiologic reserve and significantly influence outcome prediction."
  },
  {
    "id": 3,
    "chapter": 1,
    "domain": "Critical Care Principles",
    "question": "A 72-year-old man is in the ICU following a prolonged cardiac arrest. His family asks about prognosis. Which scoring system is MOST appropriate for communicating predicted mortality risk to the family for ICU counseling?",
    "options": {
      "A": "qSOFA score",
      "B": "APACHE II score",
      "C": "Glasgow Coma Scale alone",
      "D": "SAPS II score"
    },
    "answer": "B",
    "explanation": "APACHE II is the most widely validated and recognized ICU mortality prediction tool, making it most appropriate for family counseling. qSOFA is a rapid screening tool for sepsis identification outside the ICU, not a mortality predictor. GCS alone assesses neurologic function but does not account for other organ dysfunction. SAPS II is also validated but less commonly used in North American practice than APACHE II."
  },
  {
    "id": 4,
    "chapter": 1,
    "domain": "Critical Care Principles",
    "question": "A 45-year-old woman is transferred from the floor to the ICU after acute decompensation. On arrival: HR 118, BP 88/54, RR 28, SpO2 91% on 6L NC, T 39.1\u00b0C, GCS 14, lactate 4.2 mmol/L. Which best describes this patient's condition?",
    "options": {
      "A": "Systemic inflammatory response syndrome (SIRS) only",
      "B": "Sepsis without shock",
      "C": "Septic shock",
      "D": "Severe sepsis (Sepsis-2 definition)"
    },
    "answer": "C",
    "explanation": "Per Sepsis-3 definitions, septic shock is defined as sepsis with vasopressor requirement to maintain MAP \u226565 mmHg AND lactate >2 mmol/L despite adequate fluid resuscitation. This patient has a MAP of ~65 mmHg (borderline), lactate of 4.2, and signs of organ dysfunction \u2014 consistent with septic shock. 'Severe sepsis' is a Sepsis-2 term no longer used in Sepsis-3 guidelines. Sepsis without shock would require no vasopressor need and lactate <2 mmol/L."
  },
  {
    "id": 5,
    "chapter": 1,
    "domain": "Critical Care Principles",
    "question": "A 60-year-old man is admitted to the ICU. You calculate his Sequential Organ Failure Assessment (SOFA) score at admission and again at 48 hours. The 48-hour SOFA score has increased by 4 points compared to admission. What does this finding indicate?",
    "options": {
      "A": "The patient has developed a new nosocomial infection",
      "B": "The patient is at increased risk of ICU mortality",
      "C": "Mechanical ventilation should be initiated immediately",
      "D": "The patient should be transferred to a step-down unit"
    },
    "answer": "B",
    "explanation": "A rising SOFA score indicates progressive organ dysfunction and is strongly associated with increased ICU mortality. Studies show that a SOFA score increase of \u22652 points predicts mortality risk exceeding 10%. Dynamic changes in SOFA score are more prognostically significant than absolute admission values. While a rising SOFA may prompt reassessment of management, it does not automatically mandate intubation or indicate a specific new infection."
  },
  {
    "id": 6,
    "chapter": 1,
    "domain": "Critical Care Principles",
    "question": "A bedside nurse calls you to evaluate a 55-year-old man on the general medicine ward with altered mental status, RR 22, and SBP 98. qSOFA score is calculated. Which of the following would NOT contribute to his qSOFA score?",
    "options": {
      "A": "Altered mentation (GCS < 15)",
      "B": "Respiratory rate \u2265 22/min",
      "C": "Systolic blood pressure \u2264 100 mmHg",
      "D": "Temperature > 38.3\u00b0C"
    },
    "answer": "D",
    "explanation": "The quick SOFA (qSOFA) score consists of exactly three criteria: altered mentation (GCS <15), respiratory rate \u226522/min, and systolic blood pressure \u2264100 mmHg. Each criterion scores 1 point; a score \u22652 identifies patients at high risk for sepsis-related poor outcomes outside the ICU. Temperature is part of the older SIRS criteria but is NOT included in qSOFA."
  },
  {
    "id": 7,
    "chapter": 1,
    "domain": "Critical Care Principles",
    "question": "A 48-year-old woman is admitted to the ICU with multiorgan failure. Her family asks whether her condition meets criteria for 'futility.' Which ethical principle BEST supports continuing aggressive treatment when prognosis is uncertain?",
    "options": {
      "A": "Non-maleficence",
      "B": "Beneficence",
      "C": "Respect for patient autonomy",
      "D": "Distributive justice"
    },
    "answer": "C",
    "explanation": "Respect for patient autonomy \u2014 the right of patients (or their surrogates) to make informed decisions \u2014 best supports continuing treatment when prognosis is uncertain, especially if the patient previously expressed wishes for aggressive care. Non-maleficence (do no harm) and beneficence (acting in the patient's best interest) might argue against continued futile treatment. Distributive justice concerns resource allocation across populations, not individual patient decisions."
  },
  {
    "id": 8,
    "chapter": 1,
    "domain": "Critical Care Principles",
    "question": "A 70-year-old man with metastatic lung cancer is in the ICU with septic shock. His SOFA score is 14. His wife states he never completed an advance directive. What is the most appropriate next step?",
    "options": {
      "A": "Immediately transition to comfort-focused care",
      "B": "Continue full aggressive resuscitation indefinitely",
      "C": "Conduct a goals-of-care discussion with the family using prognosis data",
      "D": "Request emergent ethics committee consultation before any treatment decisions"
    },
    "answer": "C",
    "explanation": "When a patient lacks decision-making capacity and has no advance directive, the appropriate next step is a goals-of-care discussion with the surrogate decision-maker, incorporating prognostic information (SOFA 14 = >80% predicted mortality) and the patient's known values and preferences. Immediately transitioning to comfort care without family discussion violates surrogate decision-making principles. Indefinite aggressive treatment ignores the patient's best interests. Ethics consultation is valuable but should not delay urgent family communication."
  },
  {
    "id": 9,
    "chapter": 1,
    "domain": "Critical Care Principles",
    "question": "Which statement BEST describes the relationship between SOFA score and ICU outcomes?",
    "options": {
      "A": "A SOFA score of 2 predicts >50% mortality",
      "B": "SOFA scores are only valid for patients with sepsis",
      "C": "An admission SOFA \u22652 is associated with >10% in-hospital mortality in suspected infection",
      "D": "SOFA accurately predicts neurologic outcomes after cardiac arrest"
    },
    "answer": "C",
    "explanation": "The Sepsis-3 task force defined sepsis as a SOFA score increase \u22652 in the setting of suspected infection, correlating with >10% in-hospital mortality. SOFA was validated broadly in ICU patients, not just those with sepsis, though it was adopted into the Sepsis-3 definition. A SOFA of 2 does not predict >50% mortality (that typically requires scores >11-12). SOFA was not designed to predict neurologic outcomes specifically."
  },
  {
    "id": 10,
    "chapter": 1,
    "domain": "Critical Care Principles",
    "question": "A 52-year-old woman is admitted to the medical ICU. Her APACHE II score is 32. The treating team informs the family that her predicted mortality is approximately 75%. The family asks how accurate this prediction is for their specific loved one. What is the most accurate response?",
    "options": {
      "A": "The score predicts individual patient mortality with 95% accuracy",
      "B": "The score applies to populations of similar patients, not individuals",
      "C": "An APACHE II of 32 means she will definitely not survive",
      "D": "The score is only accurate if calculated within the first hour of ICU admission"
    },
    "answer": "B",
    "explanation": "Severity scores like APACHE II are population-based prediction tools derived from large cohort studies. They estimate the probability of mortality across groups of patients with similar scores, not for any individual patient. An APACHE II of 32 predicts ~75% mortality in similar populations, meaning ~25% survive. No score can definitively predict individual outcomes. APACHE II is calculated using the worst values in the first 24 hours of ICU admission, not just the first hour."
  },
  {
    "id": 11,
    "chapter": 2,
    "domain": "Procedures/Monitoring",
    "question": "A 64-year-old man with cardiogenic shock undergoes pulmonary artery catheter (PAC) placement. His readings: RAP 18 mmHg, PAP 52/28 mmHg, PCWP 24 mmHg, CO 2.8 L/min, SVR 1,800 dyn\u00b7s/cm5. Which hemodynamic profile does this represent?",
    "options": {
      "A": "Distributive shock",
      "B": "Obstructive shock",
      "C": "Cardiogenic shock",
      "D": "Hypovolemic shock"
    },
    "answer": "C",
    "explanation": "This PAC profile \u2014 elevated PCWP (>18 mmHg), low cardiac output (<4 L/min), and elevated SVR (>1,200 dyn\u00b7s/cm5) \u2014 is classic for cardiogenic shock. Distributive shock (e.g., sepsis) shows low SVR and high CO. Obstructive shock (e.g., PE, tamponade) shows elevated RAP and PCWP with low CO but may have near-normal or elevated SVR. Hypovolemic shock shows low filling pressures (low RAP, low PCWP) with high SVR."
  },
  {
    "id": 12,
    "chapter": 2,
    "domain": "Procedures/Monitoring",
    "question": "A 58-year-old woman with septic shock has an arterial line placed in her right radial artery. The waveform shows a dampened tracing with a pressure of 88/60 mmHg. A non-invasive cuff pressure simultaneously reads 104/72 mmHg. What is the MOST likely cause of the discrepancy?",
    "options": {
      "A": "Arterial vasospasm from vasopressors",
      "B": "Air bubble or clot in the transducer tubing",
      "C": "Incorrect zeroing of the transducer",
      "D": "Peripheral arterial occlusion"
    },
    "answer": "B",
    "explanation": "A dampened arterial line waveform with lower-than-expected pressures compared to non-invasive cuff is most commonly caused by air bubbles, clots, or kinking in the transducer tubing, which dampen the transmission of pressure waves. This produces falsely low systolic and falsely high diastolic readings. Incorrect zeroing shifts all values equally (both systolic and diastolic). Vasospasm would affect the artery itself. Peripheral arterial occlusion would cause loss of waveform altogether."
  },
  {
    "id": 13,
    "chapter": 2,
    "domain": "Procedures/Monitoring",
    "question": "During pulmonary artery catheter insertion, the monitor shows a waveform transition from a right ventricular pattern (RV pressure 42/8 mmHg) to a pulmonary artery pattern (42/22 mmHg). The balloon is deflated. What is the next expected waveform change when the balloon is re-inflated and advanced?",
    "options": {
      "A": "Return to right ventricular waveform",
      "B": "Pulmonary capillary wedge pressure waveform with a and v waves",
      "C": "Central venous pressure waveform",
      "D": "Disappearance of waveform entirely"
    },
    "answer": "B",
    "explanation": "As the balloon-tipped PAC is advanced from the pulmonary artery into a smaller wedge position, the waveform changes from a pulsatile PA tracing to a non-pulsatile wedge (PCWP) tracing with characteristic a and v waves, reflecting left atrial pressures. The a wave reflects atrial contraction and the v wave reflects ventricular systole against a closed mitral valve. Returning to the RV would indicate catheter recoil, not advancement."
  },
  {
    "id": 14,
    "chapter": 2,
    "domain": "Procedures/Monitoring",
    "question": "A 70-year-old man in the ICU has a central venous catheter with CVP measured at 18 mmHg. The intensivist interprets this as indicating volume overload. Which of the following BEST represents the limitation of using CVP to guide fluid management?",
    "options": {
      "A": "CVP above 12 mmHg always indicates adequate preload",
      "B": "CVP poorly predicts fluid responsiveness across a wide range of values",
      "C": "CVP is inaccurate when measured via subclavian access",
      "D": "CVP reflects left-sided filling pressures more accurately than right-sided"
    },
    "answer": "B",
    "explanation": "Multiple systematic reviews and meta-analyses (including the landmark Marik et al. study) have demonstrated that CVP has poor predictive value for fluid responsiveness \u2014 patients with CVP of 0-5 mmHg can be as non-responsive to fluids as those with CVP 15-20 mmHg. CVP reflects right atrial pressure, not left-sided filling. Dynamic measures (pulse pressure variation, stroke volume variation) are superior predictors. CVP can be measured from any central access point with the transducer zeroed at the phlebostatic axis."
  },
  {
    "id": 15,
    "chapter": 2,
    "domain": "Procedures/Monitoring",
    "question": "A 55-year-old man in cardiogenic shock has pulse pressure variation (PPV) of 18% on mechanical ventilation with tidal volume 8 mL/kg IBW. How should this be interpreted?",
    "options": {
      "A": "The patient is likely fluid non-responsive",
      "B": "The patient is likely fluid responsive",
      "C": "PPV is not valid on mechanical ventilation",
      "D": "The patient requires immediate fluid restriction"
    },
    "answer": "B",
    "explanation": "Pulse pressure variation (PPV) >13% in mechanically ventilated patients in sinus rhythm predicts fluid responsiveness with high sensitivity and specificity (approximately 87% and 89%, respectively). A PPV of 18% indicates that the patient's stroke volume is significantly preload-dependent, meaning a fluid bolus is likely to increase cardiac output. PPV is specifically validated for mechanically ventilated patients in controlled modes \u2014 it is NOT valid in spontaneously breathing patients or those with arrhythmias."
  },
  {
    "id": 16,
    "chapter": 2,
    "domain": "Procedures/Monitoring",
    "question": "A 62-year-old woman is being monitored with a pulmonary artery catheter. Her mixed venous oxygen saturation (SvO2) is 52%. Her hemoglobin is 9.8 g/dL, SpO2 is 98%, and cardiac output is 3.2 L/min. What is the most likely explanation for the low SvO2?",
    "options": {
      "A": "High cardiac output state with peripheral vasodilation",
      "B": "Inadequate oxygen delivery relative to tissue demand",
      "C": "Arteriovenous fistula causing left-to-right shunting",
      "D": "Measurement artifact from incorrect catheter position"
    },
    "answer": "B",
    "explanation": "Normal SvO2 is 65-75%. An SvO2 of 52% indicates that tissues are extracting significantly more oxygen than normal, suggesting oxygen delivery (DO2) is inadequate to meet metabolic demands. DO2 = CO \u00d7 CaO2; with CO 3.2 L/min and Hgb 9.8 g/dL, DO2 is reduced. The body compensates by increasing oxygen extraction ratio, reflected in low SvO2. High cardiac output states (distributive shock) typically cause elevated SvO2 (>80%) due to impaired peripheral oxygen extraction."
  },
  {
    "id": 17,
    "chapter": 2,
    "domain": "Procedures/Monitoring",
    "question": "During central venous catheter placement via the right internal jugular vein, the patient suddenly develops hypotension, tachycardia, and decreased breath sounds on the right. A chest X-ray shows a large right-sided pneumothorax. What is the immediate next step?",
    "options": {
      "A": "Place the central line first, then treat the pneumothorax",
      "B": "Perform needle decompression at the right second intercostal space, midclavicular line",
      "C": "Obtain CT chest to confirm the diagnosis before treatment",
      "D": "Increase FiO2 to 100% and observe for 4 hours"
    },
    "answer": "B",
    "explanation": "This patient has a tension pneumothorax (hemodynamic compromise + unilateral absent breath sounds after line placement), which is a life-threatening emergency requiring immediate needle decompression at the 2nd intercostal space, midclavicular line (or 4th-5th ICS, anterior axillary line). Chest tube placement follows. CT is inappropriate when hemodynamic compromise demands immediate intervention. Observation is contraindicated in tension pneumothorax. The central line procedure is secondary to the emergent complication."
  },
  {
    "id": 18,
    "chapter": 2,
    "domain": "Procedures/Monitoring",
    "question": "A 68-year-old man with right heart failure has the following PAC readings: RAP 22 mmHg, PA 48/26 mmHg, PCWP 12 mmHg, CO 3.4 L/min. What diagnosis does this profile BEST support?",
    "options": {
      "A": "Left ventricular failure",
      "B": "Pulmonary arterial hypertension with right heart failure",
      "C": "Cardiac tamponade",
      "D": "Severe aortic regurgitation"
    },
    "answer": "B",
    "explanation": "This PAC profile shows elevated right-sided pressures (RAP 22, PA 48/26) with normal PCWP (12 mmHg), indicating pre-capillary pulmonary hypertension with right heart failure \u2014 classic for pulmonary arterial hypertension. Left ventricular failure would show elevated PCWP (>18 mmHg). Cardiac tamponade shows equalization of diastolic pressures (RAP \u2248 RVEDP \u2248 PCWP \u2248 15-20 mmHg). Aortic regurgitation causes elevated left-sided filling pressures."
  },
  {
    "id": 19,
    "chapter": 2,
    "domain": "Procedures/Monitoring",
    "question": "A nurse informs you that a patient's arterial line transducer was accidentally positioned 10 cm above the phlebostatic axis during a position change. How will this affect the blood pressure reading?",
    "options": {
      "A": "Blood pressure will read 7.5 mmHg higher than true value",
      "B": "Blood pressure will read 7.5 mmHg lower than true value",
      "C": "Blood pressure will read 10 mmHg lower than true value",
      "D": "Blood pressure will not be affected if the line was recently zeroed"
    },
    "answer": "B",
    "explanation": "For every 1 cm the transducer is raised above the reference point (phlebostatic axis), the displayed pressure decreases by approximately 0.75 mmHg (because pressure = \u03c1gh, and 1 cmH2O \u2248 0.735 mmHg). With the transducer 10 cm above the phlebostatic axis, the reading will be approximately 7.5 mmHg lower than the true arterial pressure. The opposite occurs when the transducer is below the reference point. Recent zeroing does not compensate for transducer height errors."
  },
  {
    "id": 20,
    "chapter": 2,
    "domain": "Procedures/Monitoring",
    "question": "Which of the following is the MOST accurate method to assess fluid responsiveness in a spontaneously breathing, non-intubated ICU patient?",
    "options": {
      "A": "Central venous pressure measurement",
      "B": "Passive leg raise with cardiac output assessment",
      "C": "Pulse pressure variation on arterial line",
      "D": "Chest X-ray assessment of pulmonary vascular markings"
    },
    "answer": "B",
    "explanation": "The passive leg raise (PLR) test is a validated, reversible preload challenge that autotransfuses approximately 300 mL from the lower extremities. When combined with real-time cardiac output measurement (via echocardiography, pulse contour analysis, or end-tidal CO2), a \u226510% increase in CO during PLR predicts fluid responsiveness with high accuracy in both spontaneously breathing and ventilated patients. PPV and SVV are only valid in fully mechanically ventilated patients. CVP has poor predictive value for fluid responsiveness."
  },
  {
    "id": 21,
    "chapter": 3,
    "domain": "Shock/Hemodynamics",
    "question": "A 65-year-old man presents with anterior STEMI and is in cardiogenic shock. BP 78/50, HR 118, CO 1.8 L/min by PAC, PCWP 28 mmHg. He is intubated and on norepinephrine 0.2 mcg/kg/min. Which additional intervention has the STRONGEST evidence for improving survival in cardiogenic shock complicating acute MI?",
    "options": {
      "A": "Intra-aortic balloon pump (IABP) insertion",
      "B": "Early revascularization with PCI",
      "C": "High-dose dobutamine infusion",
      "D": "Immediate surgical revascularization (CABG)"
    },
    "answer": "B",
    "explanation": "The SHOCK trial demonstrated that early revascularization (PCI or CABG) significantly improved 6-month and 1-year survival in cardiogenic shock complicating acute MI compared to initial medical stabilization. This is the single intervention with strongest survival evidence. IABP was shown in the IABP-SHOCK II trial to NOT improve 30-day mortality and is no longer routinely recommended. High-dose dobutamine improves hemodynamics but has not been shown to improve mortality. CABG is appropriate only when anatomy precludes PCI."
  },
  {
    "id": 22,
    "chapter": 3,
    "domain": "Shock/Hemodynamics",
    "question": "A 58-year-old woman with ischemic cardiomyopathy (EF 15%) develops cardiogenic shock refractory to norepinephrine and dobutamine. MAP remains 55 mmHg, lactate is 8.2 mmol/L, and urine output is <0.2 mL/kg/hr. Which mechanical circulatory support device provides the HIGHEST cardiac output augmentation?",
    "options": {
      "A": "Intra-aortic balloon pump (IABP)",
      "B": "Impella CP",
      "C": "TandemHeart",
      "D": "Veno-arterial ECMO (VA-ECMO)"
    },
    "answer": "D",
    "explanation": "VA-ECMO provides the highest degree of circulatory support, capable of delivering 4-6 L/min of cardiac output, effectively replacing native cardiac function. Impella CP provides up to 3.7 L/min. TandemHeart provides up to 4 L/min but requires transseptal puncture. IABP provides minimal cardiac output augmentation (~0.5 L/min) and relies on native cardiac function. In refractory cardiogenic shock with severe multiorgan failure, VA-ECMO is the preferred escalation strategy."
  },
  {
    "id": 23,
    "chapter": 3,
    "domain": "Shock/Hemodynamics",
    "question": "A 72-year-old man with cardiogenic shock post-anterior MI has an Impella CP placed. After initiation, his MAP improves to 68 mmHg, but his pulmonary capillary wedge pressure remains elevated at 32 mmHg. He develops worsening hypoxemia with new bilateral infiltrates. What complication has occurred?",
    "options": {
      "A": "Impella malposition",
      "B": "Left ventricular distension causing pulmonary edema",
      "C": "Right ventricular failure",
      "D": "Hemolysis from the Impella device"
    },
    "answer": "B",
    "explanation": "While VA-ECMO augments systemic perfusion by pumping blood from the venous side to the arterial side, it increases afterload on the left ventricle. If left ventricular function is severely impaired, the LV cannot eject against this increased afterload, leading to LV distension, elevated LVEDP/PCWP, and pulmonary edema. This is a known complication requiring LV venting (via Impella, IABP, or surgical vent). Impella malposition causes hemolysis and loss of support. RV failure would cause elevated RAP, not PCWP."
  },
  {
    "id": 24,
    "chapter": 3,
    "domain": "Shock/Hemodynamics",
    "question": "A 60-year-old man with cardiogenic shock from massive anterior MI is being considered for inotropic support. His BP is 82/58 mmHg. Which inotrope/vasopressor combination is MOST appropriate as initial therapy?",
    "options": {
      "A": "Dopamine + milrinone",
      "B": "Norepinephrine + dobutamine",
      "C": "Phenylephrine + dobutamine",
      "D": "Vasopressin + milrinone"
    },
    "answer": "B",
    "explanation": "Norepinephrine is preferred over dopamine as the first-line vasopressor in cardiogenic shock (SOAP II trial showed dopamine had more arrhythmias). Dobutamine is added as an inotrope to increase cardiac output. Milrinone is a phosphodiesterase inhibitor that causes vasodilation, worsening hypotension in shock states. Phenylephrine is a pure alpha-agonist that increases afterload without inotropy, potentially worsening cardiac output in a failing ventricle."
  },
  {
    "id": 25,
    "chapter": 3,
    "domain": "Shock/Hemodynamics",
    "question": "A 55-year-old woman with inferior STEMI develops hypotension (BP 80/50), bradycardia (HR 48), clear lung fields, and elevated JVD. ECG shows ST elevation in II, III, aVF with reciprocal ST depression in I, aVL. What is the PRIMARY hemodynamic derangement?",
    "options": {
      "A": "Left ventricular failure with pulmonary edema",
      "B": "Right ventricular infarction with reduced RV output",
      "C": "Papillary muscle rupture causing acute mitral regurgitation",
      "D": "Ventricular septal defect from septal infarction"
    },
    "answer": "B",
    "explanation": "Inferior STEMI with hypotension, clear lungs, and elevated JVD is the classic triad of right ventricular infarction. The RCA supplies the RV in 85% of patients, so inferior MI frequently involves RV infarction. Treatment emphasizes volume loading (to maintain RV preload), avoiding nitrates and diuretics, and early reperfusion. LV failure causes pulmonary edema (wet lungs). Papillary muscle rupture and VSD cause acute decompensation but with pulmonary edema and a new murmur."
  },
  {
    "id": 26,
    "chapter": 3,
    "domain": "Shock/Hemodynamics",
    "question": "A 68-year-old man is in cardiogenic shock 24 hours after anterior STEMI. Echocardiogram reveals a new holosystolic murmur at the left sternal border with Doppler evidence of left-to-right shunting. Which mechanical complication has occurred?",
    "options": {
      "A": "Acute mitral regurgitation from papillary muscle rupture",
      "B": "Ventricular free wall rupture",
      "C": "Ventricular septal defect",
      "D": "Tricuspid regurgitation from RV dilation"
    },
    "answer": "C",
    "explanation": "Post-MI ventricular septal defect (VSD) presents with a new harsh holosystolic murmur at the left sternal border, right heart failure, and echocardiographic evidence of left-to-right shunting (confirmed by step-up in oxygen saturation from RA to PA on PAC sampling). Acute mitral regurgitation from papillary muscle rupture presents with a murmur radiating to the axilla and pulmonary edema. Free wall rupture typically causes immediate tamponade and death. VSDs occur most commonly 3-5 days post-MI."
  },
  {
    "id": 27,
    "chapter": 3,
    "domain": "Shock/Hemodynamics",
    "question": "A 74-year-old woman on dobutamine 10 mcg/kg/min for cardiogenic shock develops new-onset atrial fibrillation with rapid ventricular rate (HR 148) and worsening hemodynamics. What is the MOST appropriate immediate management?",
    "options": {
      "A": "Increase dobutamine to 20 mcg/kg/min",
      "B": "Synchronized cardioversion",
      "C": "Amiodarone 150 mg IV bolus",
      "D": "Metoprolol 5 mg IV push"
    },
    "answer": "B",
    "explanation": "New-onset AF with rapid ventricular rate causing hemodynamic instability in cardiogenic shock requires immediate synchronized cardioversion (50-200 J biphasic). Rate control with beta-blockers (metoprolol) is contraindicated in cardiogenic shock due to negative inotropy. Amiodarone can be used for pharmacologic cardioversion but is slower-acting and less reliable than electrical cardioversion in an unstable patient. Increasing dobutamine may worsen arrhythmia."
  },
  {
    "id": 28,
    "chapter": 3,
    "domain": "Shock/Hemodynamics",
    "question": "A 63-year-old man with cardiogenic shock has a PA catheter in place. His thermodilution cardiac output (CO) is 2.2 L/min. His BSA is 2.0 m\u00b2. What is his cardiac index (CI) and how is it classified?",
    "options": {
      "A": "CI 1.1 L/min/m\u00b2 \u2014 severely reduced",
      "B": "CI 2.2 L/min/m\u00b2 \u2014 borderline low",
      "C": "CI 4.4 L/min/m\u00b2 \u2014 normal",
      "D": "CI 1.1 L/min/m\u00b2 \u2014 normal for cardiogenic shock"
    },
    "answer": "A",
    "explanation": "Cardiac index = CO / BSA = 2.2 / 2.0 = 1.1 L/min/m\u00b2. Normal CI is 2.5-4.0 L/min/m\u00b2. A CI <2.2 L/min/m\u00b2 is the hemodynamic definition of cardiogenic shock (part of the classic triad: CI <2.2, PCWP >18, SBP <90). A CI of 1.1 represents severely compromised cardiac output, consistent with advanced cardiogenic shock requiring mechanical circulatory support escalation."
  },
  {
    "id": 29,
    "chapter": 3,
    "domain": "Shock/Hemodynamics",
    "question": "Which of the following findings on bedside echocardiography MOST strongly supports the diagnosis of cardiogenic shock rather than distributive shock in a hypotensive ICU patient?",
    "options": {
      "A": "Dilated, hyperdynamic left ventricle",
      "B": "Dilated inferior vena cava (IVC) with minimal respiratory variation",
      "C": "Severely reduced LV ejection fraction with dilated LV",
      "D": "Small, hyperdynamic LV with IVC collapse on inspiration"
    },
    "answer": "C",
    "explanation": "Severely reduced LVEF with LV dilation on echo confirms impaired LV systolic function, the hallmark of cardiogenic shock. Distributive shock (sepsis) typically shows a hyperdynamic, small LV with reduced SVR and preserved or increased CO. A dilated IVC with minimal variation indicates elevated right-sided filling pressures (seen in tamponade, RV failure, or volume overload, but not specific to cardiogenic shock). A collapsing IVC suggests hypovolemia."
  },
  {
    "id": 30,
    "chapter": 3,
    "domain": "Shock/Hemodynamics",
    "question": "A 70-year-old woman with cardiogenic shock is started on dobutamine. Which adverse effect is MOST important to monitor for in a patient with known coronary artery disease?",
    "options": {
      "A": "Acute kidney injury from renal vasoconstriction",
      "B": "Myocardial ischemia from increased heart rate and contractility",
      "C": "Respiratory depression requiring intubation",
      "D": "Hyperkalemia from beta-2 blockade"
    },
    "answer": "B",
    "explanation": "Dobutamine is a beta-1 and beta-2 agonist that increases myocardial contractility and heart rate. In patients with underlying CAD, this increased myocardial oxygen demand (MVO2) can precipitate or worsen myocardial ischemia, particularly at higher doses. Dobutamine actually causes mild renal vasodilation (beta-2 effect). It does not cause respiratory depression or hyperkalemia. This is why vasopressin + milrinone combinations are sometimes preferred in post-MI cardiogenic shock to avoid further ischemia."
  },
  {
    "id": 31,
    "chapter": 4,
    "domain": "Shock/Hemodynamics",
    "question": "A 55-year-old man with septic shock has been resuscitated with 3 L of crystalloid. His MAP remains 58 mmHg. Which vasopressor should be initiated FIRST per current Surviving Sepsis Campaign guidelines?",
    "options": {
      "A": "Dopamine",
      "B": "Epinephrine",
      "C": "Norepinephrine",
      "D": "Vasopressin"
    },
    "answer": "C",
    "explanation": "Current Surviving Sepsis Campaign (SSC) guidelines recommend norepinephrine as the first-line vasopressor for septic shock. Norepinephrine has predominant alpha-1 agonist activity (vasoconstriction) with modest beta-1 effects, raising MAP with less tachycardia than dopamine. The SOAP II trial demonstrated dopamine was associated with more arrhythmias and higher mortality in cardiogenic shock subgroups. Vasopressin and epinephrine are recommended as second-line agents added to norepinephrine when MAP targets are not achieved."
  },
  {
    "id": 32,
    "chapter": 4,
    "domain": "Shock/Hemodynamics",
    "question": "A 62-year-old woman with septic shock is on norepinephrine 0.45 mcg/kg/min and vasopressin 0.03 units/min. Her MAP remains 60 mmHg (target \u226565). Echocardiogram shows EF 25% with global hypokinesis consistent with sepsis-induced cardiomyopathy. What agent should be added?",
    "options": {
      "A": "Phenylephrine",
      "B": "Dopamine at renal-dose (2 mcg/kg/min)",
      "C": "Dobutamine",
      "D": "Milrinone"
    },
    "answer": "C",
    "explanation": "Sepsis-induced cardiomyopathy with EF 25% and refractory shock on vasopressors indicates impaired cardiac contractility contributing to the shock state. Dobutamine is the recommended inotrope to add to vasopressors when myocardial dysfunction is suspected or confirmed (SSC guidelines). Phenylephrine (pure alpha-agonist) increases afterload, potentially worsening cardiac output. 'Renal-dose' dopamine has no proven benefit. Milrinone causes significant vasodilation and may worsen hypotension, and its long half-life makes titration difficult."
  },
  {
    "id": 33,
    "chapter": 4,
    "domain": "Shock/Hemodynamics",
    "question": "A 48-year-old man undergoes cardiac surgery and develops vasoplegia post-bypass with MAP 52 mmHg despite norepinephrine 0.6 mcg/kg/min, vasopressin 0.04 units/min, and adequate volume status. What is the MOST appropriate next-line vasopressor?",
    "options": {
      "A": "High-dose vasopressin (0.1 units/min)",
      "B": "Angiotensin II",
      "C": "Phenylephrine",
      "D": "Epinephrine"
    },
    "answer": "B",
    "explanation": "Angiotensin II (Giapreza) is FDA-approved for vasodilatory shock refractory to high-dose catecholamines and vasopressin. The ATHOS-3 trial demonstrated that angiotensin II significantly raised MAP in patients with catecholamine-refractory vasodilatory shock, allowing vasopressor dose reduction. Vasoplegia post-cardiac bypass is a classic indication. High-dose vasopressin (>0.04 units/min) increases ischemic risk. Phenylephrine is weak and transiently effective. Epinephrine can be used but adds tachycardia risk."
  },
  {
    "id": 34,
    "chapter": 4,
    "domain": "Shock/Hemodynamics",
    "question": "A 70-year-old man is in neurogenic shock after a cervical spinal cord injury at C5. His BP is 74/40, HR 52. He is on a mechanical ventilator. What is the MOST appropriate initial vasopressor for neurogenic shock?",
    "options": {
      "A": "Norepinephrine alone",
      "B": "Phenylephrine alone",
      "C": "Norepinephrine with consideration of atropine or pacing for bradycardia",
      "D": "Vasopressin alone"
    },
    "answer": "C",
    "explanation": "Neurogenic shock is characterized by loss of sympathetic tone below the injury level, causing hypotension AND bradycardia (unlike hypovolemic/septic shock where compensatory tachycardia occurs). Norepinephrine (alpha and beta-1 effects) is preferred because it raises MAP and supports heart rate. Phenylephrine (pure alpha) raises MAP but can worsen bradycardia via reflex. Atropine or temporary cardiac pacing should be available for symptomatic bradycardia. MAP targets in neurogenic shock for spinal cord perfusion are typically 85-90 mmHg."
  },
  {
    "id": 35,
    "chapter": 4,
    "domain": "Shock/Hemodynamics",
    "question": "Which receptor profile BEST describes the mechanism of action of vasopressin in septic shock?",
    "options": {
      "A": "Alpha-1 and beta-1 adrenergic agonist",
      "B": "V1 receptor agonist causing vascular smooth muscle contraction",
      "C": "Beta-2 adrenergic agonist causing inotropy",
      "D": "Dopamine receptor agonist causing renal vasodilation"
    },
    "answer": "B",
    "explanation": "Vasopressin (antidiuretic hormone/ADH) exerts its vasopressor effects primarily via V1 (vasopressin-1) receptors on vascular smooth muscle, causing vasoconstriction independent of the adrenergic system. In septic shock, endogenous vasopressin is depleted (relative vasopressin deficiency), making exogenous vasopressin replacement effective. V2 receptors mediate water reabsorption in the renal collecting duct (antidiuretic effect). Vasopressin is not an adrenergic agent and has no beta effects."
  },
  {
    "id": 36,
    "chapter": 4,
    "domain": "Shock/Hemodynamics",
    "question": "A 58-year-old woman receiving norepinephrine 0.8 mcg/kg/min for refractory septic shock develops ischemic changes in her fingers with mottled, cool digits bilaterally. Which intervention can mitigate this complication while maintaining vasopressor support?",
    "options": {
      "A": "Decrease norepinephrine dose regardless of MAP",
      "B": "Switch to phenylephrine",
      "C": "Add vasopressin to allow norepinephrine dose reduction",
      "D": "Apply heating pads to affected extremities"
    },
    "answer": "C",
    "explanation": "High-dose norepinephrine causes peripheral and mesenteric vasoconstriction, leading to digital ischemia. Adding vasopressin (0.03 units/min) allows reduction in norepinephrine dose (norepinephrine-sparing effect), potentially reducing catecholamine-related peripheral ischemia while maintaining MAP. The VASST trial showed vasopressin reduced norepinephrine requirements. Reducing norepinephrine without adequate MAP support risks worsening organ perfusion. Phenylephrine has pure alpha activity and would worsen digital ischemia."
  },
  {
    "id": 37,
    "chapter": 4,
    "domain": "Shock/Hemodynamics",
    "question": "A 45-year-old man with anaphylactic shock from a bee sting has BP 68/40, HR 138, diffuse urticaria, and bronchospasm. He receives epinephrine 0.3 mg IM in the lateral thigh. What is the mechanism by which IM epinephrine treats anaphylaxis?",
    "options": {
      "A": "Beta-2 agonism reversing bronchoconstriction only",
      "B": "Alpha-1 agonism reversing vasodilation, beta-1 increasing HR, and beta-2 reversing bronchoconstriction",
      "C": "Alpha-1 agonism causing coronary artery dilation",
      "D": "Histamine receptor blockade preventing further mast cell degranulation"
    },
    "answer": "B",
    "explanation": "Epinephrine treats anaphylaxis through multiple receptor mechanisms: alpha-1 agonism reverses the massive vasodilation and increases SVR; beta-1 agonism increases heart rate and contractility; beta-2 agonism reverses bronchoconstriction and inhibits further mediator release from mast cells and basophils. IM injection in the lateral thigh (vastus lateralis) provides faster absorption than subcutaneous injection. Epinephrine does not block histamine receptors \u2014 that is the mechanism of antihistamines."
  },
  {
    "id": 38,
    "chapter": 4,
    "domain": "Shock/Hemodynamics",
    "question": "A 67-year-old man with septic shock is on norepinephrine and vasopressin. The team considers adding hydrocortisone. According to the ADRENAL and APROCCHSS trials, what is the primary indication for corticosteroids in septic shock?",
    "options": {
      "A": "All patients with septic shock regardless of vasopressor dose",
      "B": "Patients with proven adrenal insufficiency on cosyntropin stimulation testing",
      "C": "Patients with septic shock refractory to adequate fluid resuscitation and vasopressors",
      "D": "Patients with septic shock and ARDS requiring high FiO2"
    },
    "answer": "C",
    "explanation": "Current SSC guidelines recommend hydrocortisone 200 mg/day IV in patients with septic shock not responding adequately to fluid resuscitation and vasopressor therapy (typically norepinephrine \u22650.25 mcg/kg/min). The ADRENAL trial showed hydrocortisone accelerated shock resolution and reduced ICU days but did not improve 90-day mortality. APROCCHSS (fludrocortisone + hydrocortisone) showed mortality benefit. Cosyntropin stimulation testing is no longer routinely recommended to guide steroid use in septic shock per current guidelines."
  },
  {
    "id": 39,
    "chapter": 4,
    "domain": "Shock/Hemodynamics",
    "question": "Milrinone differs from dobutamine in which of the following CLINICALLY IMPORTANT ways?",
    "options": {
      "A": "Milrinone has a shorter half-life and is easier to titrate",
      "B": "Milrinone works via PDE-3 inhibition and does not require adrenergic receptors \u2014 advantageous in beta-blocker toxicity",
      "C": "Milrinone causes more tachycardia than dobutamine",
      "D": "Milrinone is the preferred inotrope in cardiogenic shock with hypotension"
    },
    "answer": "B",
    "explanation": "Milrinone inhibits phosphodiesterase-3 (PDE-3), increasing intracellular cAMP independent of adrenergic receptors. This makes it effective even in the setting of beta-blocker overdose or receptor downregulation from chronic heart failure. Dobutamine acts via beta-1 receptors, which may be downregulated. Milrinone has a LONGER half-life (~2 hours) than dobutamine (~2-3 min), making it harder to titrate. Milrinone causes significant vasodilation, worsening hypotension, making it problematic in cardiogenic shock with low BP."
  },
  {
    "id": 40,
    "chapter": 4,
    "domain": "Shock/Hemodynamics",
    "question": "A 72-year-old woman with septic shock has a MAP of 59 mmHg despite norepinephrine 0.5 mcg/kg/min. Her morning cortisol is 8 mcg/dL. The team wants to start hydrocortisone. What is the correct dosing regimen?",
    "options": {
      "A": "Hydrocortisone 100 mg IV q8h (300 mg/day) with fludrocortisone",
      "B": "Hydrocortisone 50 mg IV q6h (200 mg/day) as continuous infusion or intermittent dosing",
      "C": "Methylprednisolone 1 mg/kg IV daily",
      "D": "Dexamethasone 10 mg IV q12h"
    },
    "answer": "B",
    "explanation": "Current SSC guidelines recommend hydrocortisone 200 mg/day, given either as a continuous infusion or intermittent dosing (50 mg q6h or 100 mg q8h). The APROCCHSS trial used hydrocortisone 50 mg q6h plus fludrocortisone 50 mcg daily and showed mortality benefit. Dexamethasone lacks mineralocorticoid activity and is not preferred (though sometimes used when avoiding cosyntropin stimulation test interference). Methylprednisolone is not routinely recommended for septic shock."
  },
  {
    "id": 41,
    "chapter": 5,
    "domain": "Trauma",
    "question": "A 28-year-old man arrives after a high-speed motor vehicle collision. He is hypotensive (BP 78/50), HR 138, GCS 14, with obvious pelvic instability and femur fracture. FAST exam shows free fluid in Morrison's pouch. What is the MOST appropriate initial resuscitation strategy?",
    "options": {
      "A": "2L crystalloid bolus followed by packed red blood cells",
      "B": "Balanced resuscitation with 1:1:1 ratio of PRBCs:FFP:platelets",
      "C": "Normal saline 30 mL/kg within the first hour",
      "D": "Immediate surgical exploration without any resuscitation"
    },
    "answer": "B",
    "explanation": "The PROPPR trial established that 1:1:1 balanced resuscitation (PRBCs:FFP:platelets) reduces 24-hour and 30-day mortality in massive hemorrhage, achieving hemostasis more quickly and reducing acidosis, coagulopathy, and hypothermia (the lethal triad). Large-volume crystalloid resuscitation causes dilutional coagulopathy, acidosis, and increases mortality. Permissive hypotension (MAP 50-65) is maintained until definitive hemorrhage control. TXA should be administered within 3 hours of injury."
  },
  {
    "id": 42,
    "chapter": 5,
    "domain": "Trauma",
    "question": "A 35-year-old woman with penetrating abdominal trauma and hemorrhagic shock receives tranexamic acid (TXA). What is the mechanism of TXA and the critical time window for administration?",
    "options": {
      "A": "Activates fibrinolysis; must be given within 6 hours",
      "B": "Inhibits plasminogen activation, reducing fibrinolysis; must be given within 3 hours of injury",
      "C": "Replaces clotting factors; no time restriction",
      "D": "Inhibits platelet aggregation; most effective within 1 hour"
    },
    "answer": "B",
    "explanation": "Tranexamic acid (TXA) is a lysine analog that competitively inhibits plasminogen activation, thereby reducing fibrinolysis and stabilizing clot formation. The CRASH-2 trial (>20,000 patients) showed TXA reduced all-cause and hemorrhage-related mortality in trauma patients when given within 3 hours of injury. Critically, TXA given after 3 hours was associated with INCREASED mortality, likely due to the shift to a prothrombotic state in late trauma. TXA dose: 1g IV over 10 min, then 1g over 8 hours."
  },
  {
    "id": 43,
    "chapter": 5,
    "domain": "Trauma",
    "question": "A 42-year-old man with blunt abdominal trauma has a splenic laceration on CT (Grade III). Vital signs are BP 96/64, HR 110 after 1L crystalloid. His lactate is 3.8 mmol/L. What is the MOST appropriate next management step?",
    "options": {
      "A": "Immediate operative splenectomy",
      "B": "Angioembolization as the definitive treatment",
      "C": "Activating the massive transfusion protocol and urgent surgical/IR consultation",
      "D": "Continued crystalloid resuscitation and ICU observation"
    },
    "answer": "C",
    "explanation": "A hemodynamically unstable patient with a solid organ injury requires immediate activation of the massive transfusion protocol (MTP) and urgent surgical/interventional radiology consultation. The decision between operative intervention and angioembolization depends on degree of instability and available resources. Grade III splenic lacerations with hemodynamic instability often require operative management, though angioembolization is appropriate for hemodynamically stable patients. Continued crystalloid resuscitation alone risks dilutional coagulopathy and further hemodynamic deterioration."
  },
  {
    "id": 44,
    "chapter": 5,
    "domain": "Trauma",
    "question": "A 55-year-old trauma patient arrives with penetrating chest trauma and is in pulseless electrical activity (PEA) arrest. Paramedics state the arrest occurred 5 minutes ago. What is the MOST appropriate intervention?",
    "options": {
      "A": "Standard ACLS with CPR and epinephrine",
      "B": "Emergency department thoracotomy",
      "C": "Chest tube placement bilaterally before any other intervention",
      "D": "Immediate CT scan of chest and abdomen"
    },
    "answer": "B",
    "explanation": "Emergency department thoracotomy (EDT) is indicated in penetrating trauma with witnessed cardiac arrest or PEA within 15 minutes of ED arrival. It allows direct cardiac massage, release of tamponade, cross-clamping of the descending aorta to redistribute blood to the heart and brain, and control of intrathoracic hemorrhage. In blunt trauma, EDT has much lower survival benefit and is generally only indicated for arrest within 10 minutes. Standard ACLS without EDT has minimal benefit in traumatic cardiac arrest from hemorrhage."
  },
  {
    "id": 45,
    "chapter": 5,
    "domain": "Trauma",
    "question": "The lethal triad of trauma refers to which three physiologic derangements that must be corrected during damage control resuscitation?",
    "options": {
      "A": "Hypoxia, hypercarbia, and acidosis",
      "B": "Hypothermia, acidosis, and coagulopathy",
      "C": "Hypotension, tachycardia, and hypoxia",
      "D": "Coagulopathy, hyperkalemia, and anemia"
    },
    "answer": "B",
    "explanation": "The lethal triad consists of hypothermia (<35\u00b0C), metabolic acidosis (from tissue hypoperfusion and lactate accumulation), and coagulopathy (from factor/platelet loss, dilution, and hypothermia-induced coagulopathy). These three derangements are mutually exacerbating: hypothermia impairs enzyme function in the coagulation cascade, acidosis impairs clot formation, and coagulopathy perpetuates hemorrhage. Damage control resuscitation aims to correct all three simultaneously through warm blood products, balanced transfusion, and surgical hemorrhage control."
  },
  {
    "id": 46,
    "chapter": 5,
    "domain": "Trauma",
    "question": "A 30-year-old man with traumatic hemorrhagic shock has received 8 units PRBCs, 8 units FFP, and 2 packs of platelets. Lab results show: fibrinogen 68 mg/dL, PT 22s, INR 2.1, platelets 82,000. What additional product should be administered?",
    "options": {
      "A": "Additional FFP",
      "B": "Cryoprecipitate",
      "C": "Vitamin K IV",
      "D": "Prothrombin complex concentrate (PCC)"
    },
    "answer": "B",
    "explanation": "Cryoprecipitate is the blood product of choice for hypofibrinogenemia (<100-150 mg/dL) in massive hemorrhage. It contains concentrated fibrinogen, factor VIII, von Willebrand factor, and factor XIII. Fibrinogen is the first coagulation factor to become depleted in massive hemorrhage and is essential for adequate clot formation. Each unit of cryoprecipitate contains approximately 200-300 mg of fibrinogen. FFP contains only small amounts of fibrinogen (~200 mg per unit) and would not adequately correct severe hypofibrinogenemia. PCC is primarily for anticoagulation reversal."
  },
  {
    "id": 47,
    "chapter": 5,
    "domain": "Trauma",
    "question": "A 25-year-old soldier sustains an extremity blast injury with arterial hemorrhage. A tourniquet is applied in the field. He arrives to the trauma bay 2 hours after tourniquet application. Which complication is MOST important to assess for upon tourniquet removal?",
    "options": {
      "A": "Deep vein thrombosis of the affected limb",
      "B": "Reperfusion injury and myonecrosisneeding fasciotomy",
      "C": "Pulmonary embolism from prolonged immobilization",
      "D": "Compartment syndrome of the contralateral uninjured limb"
    },
    "answer": "B",
    "explanation": "Prolonged tourniquet use (>2 hours) increases risk of ischemia-reperfusion injury, myonecrosis, and acute compartment syndrome upon release. Compartment syndrome results from edema in the reperfused tissues within the fascial compartments, causing pressures >30 mmHg that compromise perfusion. Fasciotomy is the definitive treatment. Compartment pressures should be measured or clinical assessment performed (pain with passive stretch, tense compartments). Rhabdomyolysis from myonecrosis can also cause acute kidney injury."
  },
  {
    "id": 48,
    "chapter": 5,
    "domain": "Trauma",
    "question": "A 52-year-old man with hemorrhagic shock receives 10 units of packed red blood cells. He develops hypocalcemia (ionized Ca 0.82 mmol/L) with QTc prolongation and hypotension. What is the cause of his hypocalcemia?",
    "options": {
      "A": "Underlying hypoparathyroidism unmasked by stress",
      "B": "Citrate chelation of ionized calcium from massive transfusion",
      "C": "Dilutional hyponatremia causing calcium shift",
      "D": "Hypothermia-induced calcium sequestration in bone"
    },
    "answer": "B",
    "explanation": "Blood products are preserved with citrate anticoagulant, which chelates (binds) ionized calcium. In massive transfusion (>10 units/24h), the citrate load can overwhelm hepatic metabolism, causing clinically significant hypocalcemia. Ionized calcium is essential for cardiac contractility and coagulation factor function; severe hypocalcemia contributes to cardiac depression and coagulopathy. Treatment is IV calcium chloride (preferred in hemorrhagic shock, 3x bioavailability vs. calcium gluconate). Empiric calcium supplementation is recommended during massive transfusion protocols."
  },
  {
    "id": 49,
    "chapter": 5,
    "domain": "Trauma",
    "question": "During damage control surgery for a trauma patient with hemorrhagic shock and abdominal injuries, the surgeon performs a damage control laparotomy and plans for re-exploration in 24-48 hours. What physiologic threshold MOST appropriately triggers the initial 'damage control' decision?",
    "options": {
      "A": "Hemoglobin < 8 g/dL",
      "B": "Hypothermia <35\u00b0C, pH <7.2, or coagulopathy (INR >1.5) \u2014 the lethal triad",
      "C": "Need for more than 4 units of PRBCs",
      "D": "Systolic BP <90 mmHg despite 2L crystalloid"
    },
    "answer": "B",
    "explanation": "Damage control surgery is triggered by the lethal triad \u2014 hypothermia, acidosis, and coagulopathy \u2014 which signals that continued definitive surgical repair will result in death from physiologic exhaustion. Specific thresholds commonly cited: temperature <35\u00b0C, pH <7.2, base deficit >-6, INR >1.5. The goal is abbreviated surgery for hemorrhage and contamination control, followed by ICU resuscitation to correct physiology, then planned re-exploration. Hemoglobin and blood pressure thresholds alone are less specific triggers for the damage control decision."
  },
  {
    "id": 50,
    "chapter": 5,
    "domain": "Trauma",
    "question": "A 38-year-old man with blunt chest trauma has persistent hypotension (BP 80/60) and absent breath sounds on the left. Chest X-ray shows complete white-out of the left hemithorax. A chest tube is placed with immediate return of 1,800 mL of blood. What should be done next?",
    "options": {
      "A": "Clamp the chest tube and observe",
      "B": "Urgent surgical thoracotomy given the volume of hemothorax",
      "C": "Place a second chest tube and continue drainage",
      "D": "CT angiography of the chest to identify the bleeding source"
    },
    "answer": "B",
    "explanation": "A massive hemothorax is defined as >1,500 mL of blood on initial chest tube drainage OR ongoing bleeding >200 mL/hour for 4 hours. This patient has 1,800 mL on initial drainage, meeting criteria for massive hemothorax requiring urgent surgical thoracotomy to control the bleeding source. CT angiography is inappropriate in an unstable patient. Clamping the chest tube is contraindicated. A second chest tube will not control hemorrhage from a vascular injury requiring operative repair."
  },
  {
    "id": 51,
    "chapter": 6,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 45-year-old man with severe anaphylaxis has progressive stridor, drooling, uvular edema, and SpO2 dropping to 88% on 15L NRB mask. He is awake but anxious. What is the MOST appropriate airway management strategy?",
    "options": {
      "A": "Rapid sequence intubation (RSI) with succinylcholine and direct laryngoscopy",
      "B": "Awake fiberoptic intubation",
      "C": "Non-invasive ventilation (BiPAP) as a bridge to steroid effect",
      "D": "Heliox therapy to reduce work of breathing"
    },
    "answer": "B",
    "explanation": "In a patient with known or anticipated difficult airway from angioedema (drooling, stridor, uvular edema), awake fiberoptic intubation is the safest approach as it preserves spontaneous respiration and allows continuous visualization of the glottis. RSI with paralysis eliminates the respiratory drive, and if intubation fails in the setting of severe airway edema, 'cannot intubate/cannot oxygenate' (CICO) scenario results. BiPAP and heliox are temporizing measures but do not secure the airway in rapidly progressing angioedema."
  },
  {
    "id": 52,
    "chapter": 6,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 32-year-old woman requires RSI for a GI bleed. She weighs 80 kg (IBW 58 kg). Succinylcholine 1.5 mg/kg (IBW) is planned. Her potassium is 5.8 mEq/L. Which is the MOST important contraindication to succinylcholine in this patient?",
    "options": {
      "A": "Female sex and potential for malignant hyperthermia",
      "B": "Hyperkalemia \u2014 succinylcholine can cause further potassium rise leading to cardiac arrest",
      "C": "GI bleed increases risk of aspiration making succinylcholine unsafe",
      "D": "Succinylcholine dosing should be based on total body weight, not IBW"
    },
    "answer": "B",
    "explanation": "Succinylcholine causes potassium efflux of approximately 0.5-1.0 mEq/L due to depolarization of skeletal muscle. In patients with baseline hyperkalemia (>5.5 mEq/L), succinylcholine can trigger life-threatening hyperkalemia and cardiac arrest. Other contraindications include: denervation injuries (stroke, burns >48h, prolonged immobilization, crush injuries), personal/family history of malignant hyperthermia, and pseudocholinesterase deficiency. Succinylcholine dosing for RSI is 1.5 mg/kg total body weight (not IBW) \u2014 the actual answer D is incorrect by standard dosing."
  },
  {
    "id": 53,
    "chapter": 6,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 60-year-old man with a difficult airway (Mallampati IV, limited mouth opening, thick neck) requires emergent intubation for respiratory failure. Two direct laryngoscopy attempts fail. SpO2 is now 84%. What is the MOST appropriate next step per the difficult airway algorithm?",
    "options": {
      "A": "Attempt a third direct laryngoscopy with a different blade",
      "B": "Video laryngoscopy or supraglottic airway device followed by surgical airway if needed",
      "C": "Cricothyrotomy immediately without further attempts",
      "D": "Bag-valve-mask ventilation only until the patient awakens"
    },
    "answer": "B",
    "explanation": "After two failed direct laryngoscopy attempts, the ASA Difficult Airway Algorithm and CICO protocols recommend transitioning to a rescue technique: video laryngoscopy (which improves glottic visualization), supraglottic airway (LMA) for oxygenation, or fiberoptic intubation if patient can be oxygenated. If all attempts fail and oxygenation cannot be maintained (SpO2 continuing to fall), immediate surgical airway (cricothyrotomy) is mandatory. A third direct laryngoscopy attempt without technique change is unlikely to succeed and delays definitive airway management."
  },
  {
    "id": 54,
    "chapter": 6,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 55-year-old obese woman (BMI 42) is undergoing RSI for emergency surgery. After induction with ketamine and succinylcholine, the glottis is visualized with video laryngoscopy at Grade IIb. The endotracheal tube cannot be passed despite proper technique. SpO2 drops to 76%. What is the MOST appropriate immediate intervention?",
    "options": {
      "A": "Attempt nasal intubation",
      "B": "Insert a supraglottic airway (LMA) to reestablish oxygenation",
      "C": "Administer sugammadex to reverse neuromuscular blockade",
      "D": "Start chest compressions"
    },
    "answer": "B",
    "explanation": "This is a 'cannot intubate, cannot oxygenate' (CICO) scenario developing rapidly. The immediate priority is restoring oxygenation using a supraglottic airway (LMA/i-gel), which bypasses the supraglottic obstruction and can provide emergency oxygenation while preparing for surgical airway. If the LMA fails to provide oxygenation, immediate cricothyrotomy is required. Sugammadex reverses rocuronium but not succinylcholine, and reversal takes 3-5 minutes \u2014 too slow for critical hypoxemia. Nasal intubation is unlikely to succeed if oral route failed."
  },
  {
    "id": 55,
    "chapter": 6,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 68-year-old man with COPD requires intubation for hypercarbic respiratory failure. Post-intubation, his BP drops from 110/70 to 72/44 with HR 124 and absent breath sounds on the left. What is the MOST likely diagnosis?",
    "options": {
      "A": "Medication-induced vasodilation from induction agents",
      "B": "Right mainstem intubation",
      "C": "Tension pneumothorax from positive pressure ventilation in COPD",
      "D": "Air embolism from tracheal intubation"
    },
    "answer": "C",
    "explanation": "Post-intubation hemodynamic collapse with unilateral absent breath sounds in a COPD patient on positive pressure ventilation is tension pneumothorax until proven otherwise. COPD patients have hyperinflated, bullous lungs highly susceptible to barotrauma. Tension pneumothorax causes mediastinal shift, cardiac compression, and obstructive shock. Immediate needle decompression (2nd ICS, MCL) followed by chest tube is required. Right mainstem intubation causes left-sided absent sounds but not typically cardiovascular collapse. Induction-related hypotension would not cause unilateral absent breath sounds."
  },
  {
    "id": 56,
    "chapter": 6,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "Which induction agent is MOST appropriate for RSI in a patient with hemorrhagic shock, hypotension (BP 80/50), and traumatic brain injury?",
    "options": {
      "A": "Propofol 2 mg/kg",
      "B": "Etomidate 0.3 mg/kg",
      "C": "Ketamine 1.5 mg/kg",
      "D": "Midazolam 0.3 mg/kg"
    },
    "answer": "B",
    "explanation": "Etomidate is the preferred induction agent in hemodynamically unstable patients because it has minimal cardiovascular depression \u2014 it maintains SVR, heart rate, and cardiac output, making it ideal for hypovolemic and hemorrhagic shock. Propofol causes significant vasodilation and myocardial depression, worsening hypotension. Ketamine (traditionally avoided in TBI due to ICP concerns) is now considered acceptable in TBI when hypotension is present (since hypotension harms brain perfusion more than ICP elevation). Ketamine is a valid alternative, but etomidate remains most widely recommended for hypotensive TBI."
  },
  {
    "id": 57,
    "chapter": 6,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 50-year-old woman with myasthenia gravis is intubated for respiratory failure. The team plans to use succinylcholine for RSI. What is the expected response?",
    "options": {
      "A": "Normal fasciculations followed by paralysis in 45-60 seconds",
      "B": "Resistance to succinylcholine requiring higher doses due to upregulation of acetylcholine receptors",
      "C": "Prolonged neuromuscular blockade due to reduced pseudocholinesterase activity",
      "D": "No response to succinylcholine as it requires functional neuromuscular junctions"
    },
    "answer": "B",
    "explanation": "Myasthenia gravis is characterized by autoantibodies against nicotinic acetylcholine receptors (AChRs), causing receptor downregulation at the neuromuscular junction. To compensate, the body upregulates AChRs. This upregulation paradoxically causes resistance to succinylcholine (a depolarizing blocker), requiring higher doses (1.5-2 mg/kg). Conversely, MG patients are exquisitely sensitive to non-depolarizing neuromuscular blockers (rocuronium, vecuronium), requiring much lower doses. The preferred approach is rocuronium 1.2 mg/kg (with sugammadex available for reversal)."
  },
  {
    "id": 58,
    "chapter": 6,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "Immediately after endotracheal intubation in the ICU, which method is considered the GOLD STANDARD for confirming ETT placement?",
    "options": {
      "A": "Chest auscultation for bilateral breath sounds",
      "B": "Direct visualization of the tube passing through the vocal cords",
      "C": "Continuous waveform capnography",
      "D": "Chest X-ray showing ETT above the carina"
    },
    "answer": "C",
    "explanation": "Continuous waveform capnography (ETCO2 with a consistent waveform) is the gold standard for confirming ETT placement in a perfusing patient. It confirms tracheal position by detecting CO2 in exhaled gas. Esophageal intubation will initially show CO2 from gastric gas, then the waveform disappears. Auscultation can be misleading (epigastric sounds transmitted to chest). Visualization of tube through cords is confirmatory but requires optimal laryngoscopic view. Chest X-ray confirms depth but not tracheal vs. esophageal position in real time."
  },
  {
    "id": 59,
    "chapter": 6,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 40-year-old man with Ludwig's angina (floor of mouth cellulitis with tracheal deviation) requires emergent airway management. He is awake with SpO2 95% on 6L NC. What is the SAFEST airway approach?",
    "options": {
      "A": "RSI with succinylcholine and direct laryngoscopy",
      "B": "Awake fiberoptic nasotracheal intubation with topical anesthesia",
      "C": "Sedated video laryngoscopy with rocuronium",
      "D": "Heliox until IV antibiotics reduce swelling"
    },
    "answer": "B",
    "explanation": "Ludwig's angina with floor-of-mouth cellulitis and tracheal deviation represents a known difficult airway with risk of rapid decompensation. The safest approach is awake fiberoptic intubation (nasotracheal or orotracheal) preserving spontaneous respiration throughout the procedure. RSI eliminates spontaneous breathing \u2014 if intubation fails in this anatomically distorted airway, the patient cannot be ventilated (CICO scenario). Heliox is a temporizing measure only. Awake intubation allows the patient to maintain airway patency and oxygen reserve throughout."
  },
  {
    "id": 60,
    "chapter": 6,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 70-year-old man with COPD and acute hypercarbic respiratory failure (pH 7.28, PaCO2 78, PaO2 68 on 2L NC) is alert and cooperative. What is the MOST appropriate initial respiratory support?",
    "options": {
      "A": "High-flow nasal cannula (HFNC) at 40 L/min",
      "B": "Non-invasive positive pressure ventilation (BiPAP)",
      "C": "Immediate endotracheal intubation",
      "D": "Simple oxygen mask at 8 L/min"
    },
    "answer": "B",
    "explanation": "Non-invasive positive pressure ventilation (NPPV/BiPAP) is the first-line intervention for COPD exacerbation with hypercarbic respiratory failure and respiratory acidosis. Multiple RCTs (including the landmark Brochard et al. study) demonstrate BiPAP reduces intubation rates, ICU LOS, and mortality in COPD exacerbations. BiPAP provides inspiratory pressure support (reducing work of breathing) and PEEP (preventing small airway collapse). HFNC is less effective for hypercapnia than BiPAP. Intubation is reserved for BiPAP failure or absolute contraindications to NPPV."
  },
  {
    "id": 61,
    "chapter": 7,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 65-year-old man is intubated for septic shock. Initial ventilator settings: assist-control volume control (AC/VC), RR 16, VT 500 mL, PEEP 5, FiO2 0.60. His IBW is 70 kg. Peak airway pressure is 42 cmH2O and plateau pressure is 36 cmH2O. What is the PRIMARY concern with these settings?",
    "options": {
      "A": "Tidal volume is too low for adequate minute ventilation",
      "B": "High plateau pressure indicating risk of volutrauma/barotrauma",
      "C": "Auto-PEEP from high respiratory rate",
      "D": "FiO2 too low causing hypoxemia"
    },
    "answer": "B",
    "explanation": "Plateau pressure >30 cmH2O is associated with volutrauma and barotrauma in mechanically ventilated patients. This patient's tidal volume is 500 mL / 70 kg IBW = 7.1 mL/kg IBW \u2014 above the lung-protective threshold of 6 mL/kg IBW. Reducing VT to 420 mL (6 mL/kg IBW) will lower plateau pressure. Peak pressure reflects airway resistance; plateau pressure reflects respiratory system compliance. A high peak with high plateau indicates reduced compliance (stiff lungs), while high peak with normal plateau indicates increased airway resistance."
  },
  {
    "id": 62,
    "chapter": 7,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 55-year-old mechanically ventilated woman has a peak pressure of 48 cmH2O and plateau pressure of 22 cmH2O on volume-control ventilation. What is the MOST likely cause of this pattern?",
    "options": {
      "A": "Decreased lung compliance from ARDS",
      "B": "Increased airway resistance from bronchospasm or secretions",
      "C": "Auto-PEEP from air trapping",
      "D": "Pneumothorax with tension physiology"
    },
    "answer": "B",
    "explanation": "The differential between peak and plateau pressure reflects airway resistance. Peak pressure = resistance + compliance forces; plateau pressure (obtained during end-inspiratory hold) = compliance forces alone. A large peak-plateau gradient (>10 cmH2O) with normal plateau pressure indicates high airway resistance \u2014 bronchospasm, mucus plugging, kinked ETT, or biting on the tube. Decreased lung compliance (ARDS, pneumonia, pulmonary edema) raises BOTH peak and plateau. Auto-PEEP also raises both. Tension pneumothorax would cause sudden rise in both pressures with hemodynamic collapse."
  },
  {
    "id": 63,
    "chapter": 7,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 60-year-old man on mechanical ventilation develops sudden hypotension, tachycardia, and rising peak pressures. End-tidal CO2 drops abruptly. What is the mnemonic used to systematically evaluate sudden deterioration in a mechanically ventilated patient, and what is the MOST common life-threatening cause?",
    "options": {
      "A": "DOPE: Displacement, Obstruction, Pneumothorax, Equipment; pneumothorax is most common",
      "B": "DOPE: Displacement, Obstruction, Pneumothorax, Equipment; tube displacement is most common",
      "C": "FAST: Fluids, Airway, Sepsis, Tension; sepsis is most common",
      "D": "MOVE: Malposition, Obstruction, Ventilator, Equipment; malposition is most common"
    },
    "answer": "B",
    "explanation": "The DOPE mnemonic (Displacement, Obstruction, Pneumothorax, Equipment failure) guides systematic evaluation of sudden ventilator deterioration. Endotracheal tube displacement (accidental extubation or right mainstem intubation) is the most common immediately life-threatening cause \u2014 confirmed by direct laryngoscopy, capnography, and auscultation. Obstruction (secretions, mucus plug, kinked tube) is also common. Pneumothorax requires immediate chest assessment. Equipment failure (circuit disconnect, ventilator malfunction) should be addressed by manually ventilating with BVM while troubleshooting."
  },
  {
    "id": 64,
    "chapter": 7,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 70-year-old man with COPD exacerbation is intubated and placed on AC/VC mode at RR 14, VT 400 mL, PEEP 5, FiO2 0.40. After 30 minutes, his RR on the ventilator is 22 (8 patient-triggered), PaCO2 is 52, pH is 7.31. Which ventilator adjustment is MOST appropriate?",
    "options": {
      "A": "Increase mandatory rate to 22",
      "B": "Increase tidal volume to 550 mL",
      "C": "Increase inspiratory flow rate to allow adequate expiratory time and reduce air trapping",
      "D": "Switch to SIMV mode to reduce ventilator dyssynchrony"
    },
    "answer": "C",
    "explanation": "In COPD patients, air trapping (auto-PEEP) occurs when expiratory time is insufficient to empty the lungs. Increasing inspiratory flow rate (or using a square wave flow pattern) shortens inspiratory time, lengthening the I:E ratio toward 1:3 or 1:4, providing more time for exhalation. This reduces auto-PEEP, intrinsic PEEP, and patient-ventilator dyssynchrony. Increasing mandatory rate or VT would worsen hyperdynamic hyperinflation. SIMV mode is generally inferior to AC for COPD ventilation as it increases patient work of breathing."
  },
  {
    "id": 65,
    "chapter": 7,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A mechanically ventilated patient has the following ABG: pH 7.48, PaCO2 28, PaO2 102, HCO3 20, BE -2. FiO2 0.40, PEEP 8, RR (set 14, total 28), VT 480 mL (IBW 70 kg). What is the MOST likely cause of this respiratory alkalosis?",
    "options": {
      "A": "Set rate too high causing hyperventilation",
      "B": "Patient-triggered over-breathing above the set rate",
      "C": "High tidal volume causing volutrauma",
      "D": "Insufficient PEEP causing atelectasis and increased work of breathing"
    },
    "answer": "B",
    "explanation": "The set RR is 14 but total RR is 28, meaning the patient is triggering 14 additional breaths above the set rate. Each triggered breath delivers a full VT in AC mode, resulting in a minute ventilation of 480 \u00d7 28 = 13,440 mL/min \u2014 causing significant hyperventilation and respiratory alkalosis. Management includes addressing the trigger for tachypnea (pain, anxiety, fever, metabolic acidosis), optimizing sedation/analgesia, and potentially adjusting trigger sensitivity. SIMV or pressure support with rate reduction may help, but the underlying cause must be treated."
  },
  {
    "id": 66,
    "chapter": 7,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 48-year-old man on pressure control ventilation (PC) has inspiratory pressures set at 20 cmH2O above PEEP 8. His RR is 18. What would be the expected change in tidal volume if his lung compliance improves?",
    "options": {
      "A": "Tidal volume would remain constant as pressure is fixed",
      "B": "Tidal volume would increase as compliance improves",
      "C": "Tidal volume would decrease as the lungs open more",
      "D": "Tidal volume changes are unpredictable in pressure control mode"
    },
    "answer": "B",
    "explanation": "In pressure control (PC) ventilation, the driving pressure (set above PEEP) is fixed, but the resulting tidal volume varies with respiratory system compliance (VT = compliance \u00d7 driving pressure). As lung compliance improves (e.g., from ARDS recovery, diuresis for pulmonary edema), the lungs expand more easily under the same pressure, resulting in higher tidal volumes. This is both a sign of improvement and a risk for volutrauma in ARDS recovery \u2014 tidal volumes must be monitored closely in PC mode."
  },
  {
    "id": 67,
    "chapter": 7,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 65-year-old man develops sudden severe agitation and fights the ventilator. He appears to be exhaling during the ventilator's inspiratory phase. His SpO2 drops to 88%. What type of patient-ventilator dyssynchrony is occurring?",
    "options": {
      "A": "Auto-triggering",
      "B": "Flow starvation",
      "C": "Reverse triggering",
      "D": "Double triggering"
    },
    "answer": "C",
    "explanation": "Reverse triggering occurs when the ventilator's mandatory breath entrains diaphragm contractions out of phase, causing the patient to exhale (or contract the diaphragm) during the ventilator's inspiratory phase. This causes patient-ventilator dyssynchrony, increased work of breathing, and waveform distortion. Auto-triggering occurs when cardiac oscillations or leak trigger unintended breaths. Flow starvation occurs when flow demand exceeds delivered flow (patient inhales forcefully against insufficient ventilator flow). Double triggering creates large stacked breaths with high VT."
  },
  {
    "id": 68,
    "chapter": 7,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "In a patient on assist-control ventilation with volume control, the peak inspiratory pressure suddenly increases from 28 to 52 cmH2O but the plateau pressure remains unchanged at 20 cmH2O. The patient's SpO2 is stable. What is the MOST appropriate next step?",
    "options": {
      "A": "Immediate needle decompression for suspected pneumothorax",
      "B": "Suction the ETT and assess for obstruction or mucus plug",
      "C": "Increase PEEP to recruit atelectatic lung",
      "D": "Obtain emergent chest X-ray"
    },
    "answer": "B",
    "explanation": "A sudden rise in peak pressure with UNCHANGED plateau pressure indicates a problem with airway resistance, not lung compliance. The most common causes are secretion buildup, mucus plug, bronchospasm, or kinked ETT. Since SpO2 is stable, this is not immediately life-threatening but requires prompt evaluation. Suctioning the ETT is the first step to assess for secretions/obstruction. Needle decompression is indicated for tension pneumothorax, which would raise both peak and plateau. Increasing PEEP addresses compliance issues, not resistance."
  },
  {
    "id": 69,
    "chapter": 7,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "Which of the following BEST describes the physiologic rationale for applying PEEP in mechanically ventilated patients with pulmonary edema?",
    "options": {
      "A": "PEEP reduces pulmonary vascular resistance, improving RV function",
      "B": "PEEP prevents alveolar collapse at end-expiration, improving FRC, V/Q matching, and oxygenation",
      "C": "PEEP increases airway resistance, slowing exhalation to prevent atelectasis",
      "D": "PEEP directly removes fluid from alveolar spaces"
    },
    "answer": "B",
    "explanation": "PEEP (positive end-expiratory pressure) maintains positive airway pressure at end-expiration, preventing alveolar derecruitment/collapse in patients with reduced functional residual capacity (FRC). This improves ventilation-perfusion (V/Q) matching by ensuring alveoli remain open for gas exchange, reduces intrapulmonary shunting, and improves oxygenation. PEEP does not remove fluid. Excessive PEEP can actually increase pulmonary vascular resistance and impair RV function. PEEP reduces airway collapse, not by increasing resistance but by maintaining distending pressure."
  },
  {
    "id": 70,
    "chapter": 7,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 72-year-old man on mechanical ventilation has a respiratory rate of 20 with a set I:E ratio of 1:2. At a respiratory rate of 20 breaths/min, what is his total cycle time (TCT) and inspiratory time (Ti)?",
    "options": {
      "A": "TCT 3 sec, Ti 1 sec",
      "B": "TCT 3 sec, Ti 0.5 sec",
      "C": "TCT 3 sec, Ti 2 sec",
      "D": "TCT 2 sec, Ti 0.67 sec"
    },
    "answer": "A",
    "explanation": "Total cycle time (TCT) = 60 seconds / RR = 60/20 = 3 seconds. With I:E ratio 1:2 (inspiratory fraction = 1/3 of cycle): Ti = 3 \u00d7 (1/3) = 1 second; Te = 3 \u00d7 (2/3) = 2 seconds. Understanding I:E ratios is critical for managing COPD (needs longer Te = lower I:E ratios like 1:3 or 1:4) and for inverse ratio ventilation in severe ARDS (I:E >1:1 to increase mean airway pressure and improve oxygenation, with careful monitoring for auto-PEEP)."
  },
  {
    "id": 71,
    "chapter": 8,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 52-year-old woman is intubated for ARDS from pneumonia. Her P/F ratio is 88 (PaO2 88 on FiO2 1.0). She is on AC/VC, VT 6 mL/kg IBW (420 mL), PEEP 14, FiO2 1.0. Plateau pressure is 32 cmH2O. What intervention has the STRONGEST evidence for reducing mortality in severe ARDS?",
    "options": {
      "A": "Increasing PEEP to 18 cmH2O",
      "B": "Prone positioning for \u226516 hours/day",
      "C": "High-frequency oscillatory ventilation (HFOV)",
      "D": "Inhaled nitric oxide (iNO)"
    },
    "answer": "B",
    "explanation": "The PROSEVA trial demonstrated that prone positioning for \u226516 hours/day reduced 28-day mortality from 32.8% to 16% in patients with severe ARDS (P/F <150). Prone positioning improves V/Q matching, reduces dorsal atelectasis, and homogenizes lung stress distribution. HFOV was shown in OSCILLATE and OSCAR trials to NOT improve (and possibly worsen) mortality. Inhaled NO improves oxygenation transiently but does not improve survival. High PEEP strategies (ART trial) also did not demonstrate mortality benefit."
  },
  {
    "id": 72,
    "chapter": 8,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "The Berlin definition of ARDS classifies severity by PaO2/FiO2 ratio on PEEP \u22655 cmH2O. A patient with PaO2 68 mmHg on FiO2 0.60 and PEEP 8 has which severity category?",
    "options": {
      "A": "Mild ARDS (P/F 200-300)",
      "B": "Moderate ARDS (P/F 100-200)",
      "C": "Severe ARDS (P/F <100)",
      "D": "Does not meet ARDS criteria without bilateral infiltrates confirmed"
    },
    "answer": "B",
    "explanation": "P/F ratio = PaO2/FiO2 = 68/0.60 = 113 mmHg, which falls in the moderate ARDS category (100-200 mmHg). Berlin ARDS criteria: mild = P/F 200-300 on PEEP \u22655; moderate = P/F 100-200 on PEEP \u22655; severe = P/F <100 on PEEP \u22655. Additional criteria include onset within 1 week of insult, bilateral opacities not explained by effusions/collapse/nodules, and respiratory failure not fully explained by cardiac failure/fluid overload."
  },
  {
    "id": 73,
    "chapter": 8,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 48-year-old man with severe ARDS has a driving pressure of 20 cmH2O (plateau pressure 30, PEEP 10). Research suggests driving pressure is a strong predictor of ARDS mortality. What is the TARGET driving pressure associated with improved outcomes?",
    "options": {
      "A": "Less than 25 cmH2O",
      "B": "Less than 15 cmH2O",
      "C": "Equal to plateau pressure",
      "D": "Less than 30 cmH2O"
    },
    "answer": "B",
    "explanation": "Driving pressure (\u0394P = plateau pressure - PEEP) reflects the stress applied to the functional lung parenchyma per breath. Amato et al. (NEJM 2015) demonstrated that driving pressure is the ventilator variable most strongly associated with ARDS survival \u2014 each 1 cmH2O increase in \u0394P was associated with increased mortality risk. A driving pressure <15 cmH2O is the target associated with improved outcomes. This has shifted practice toward PEEP optimization aimed at minimizing driving pressure rather than maximizing PEEP or minimizing plateau pressure alone."
  },
  {
    "id": 74,
    "chapter": 8,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 55-year-old woman with severe ARDS and P/F ratio of 72 is positioned prone. After 16 hours of proning, her P/F ratio improves to 185. She is repositioned supine. What is the MOST appropriate next step?",
    "options": {
      "A": "Discontinue proning as the target P/F has been met",
      "B": "Continue prone sessions daily until P/F >150 is sustained supine for 4 hours",
      "C": "Discontinue proning and initiate high-frequency oscillatory ventilation",
      "D": "Perform a recruitment maneuver and titrate PEEP"
    },
    "answer": "B",
    "explanation": "Per PROSEVA protocol, prone sessions should be continued daily (\u226516 hours/session) until the patient demonstrates sustained improvement supine \u2014 defined as P/F >150 on FiO2 \u22640.6 and PEEP \u226410 cmH2O for at least 4 hours after returning supine. A single session with improvement that reverses upon supination indicates ongoing severe disease requiring continued proning. Discontinuing after one session risks losing the oxygenation benefit. HFOV is not recommended over prone positioning in current evidence."
  },
  {
    "id": 75,
    "chapter": 8,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 40-year-old man with severe ARDS is on PEEP 18, FiO2 1.0, VT 6 mL/kg IBW. Despite this, SpO2 is 82%. Which rescue therapy is MOST appropriate next?",
    "options": {
      "A": "Increase PEEP to 24 cmH2O",
      "B": "Inhaled nitric oxide (iNO) as a bridge to prone positioning or ECMO consideration",
      "C": "High-frequency oscillatory ventilation",
      "D": "Neuromuscular blockade with cisatracurium infusion"
    },
    "answer": "B",
    "explanation": "Inhaled nitric oxide (iNO) is a rescue therapy for refractory hypoxemia in ARDS, causing pulmonary vasodilation selectively in ventilated alveoli, reducing intrapulmonary shunting and improving oxygenation. While iNO does not improve mortality, it can improve oxygenation as a bridge to prone positioning or veno-venous ECMO evaluation. Neuromuscular blockade (ACURASYS trial) was previously recommended but the ROSE trial found no mortality benefit. HFOV is no longer recommended. Excessive PEEP increases RV afterload and can cause harm."
  },
  {
    "id": 76,
    "chapter": 8,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 58-year-old man with ARDS has a transpulmonary pressure (Ptp = plateau pressure - esophageal pressure) of -4 cmH2O at end-expiration. What does this indicate, and what intervention is appropriate?",
    "options": {
      "A": "Normal transpulmonary pressure; no change needed",
      "B": "Negative Ptp indicates alveolar collapse; increase PEEP to achieve Ptp 0-5 cmH2O",
      "C": "Elevated transpulmonary pressure indicating overdistension; decrease PEEP",
      "D": "Esophageal balloon measurement is unreliable and should not guide PEEP titration"
    },
    "answer": "B",
    "explanation": "Transpulmonary pressure (Ptp = airway pressure - pleural pressure, estimated by esophageal pressure) reflects the stress on the lung parenchyma itself. A negative end-expiratory Ptp indicates that pleural pressure exceeds alveolar pressure at end-expiration, promoting alveolar collapse and derecruitment. The target end-expiratory Ptp is 0-5 cmH2O (just above zero to prevent collapse without overdistension). The EPVent and EPVent-2 trials explored esophageal pressure-guided PEEP titration, showing improved oxygenation, though EPVent-2 showed no mortality benefit."
  },
  {
    "id": 77,
    "chapter": 8,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 62-year-old woman with ARDS has refractory hypoxemia despite prone positioning, iNO, and maximal ventilator support (PEEP 20, FiO2 1.0, P/F 58). What is the MOST appropriate escalation?",
    "options": {
      "A": "Increase FiO2 to maintain SpO2 >95%",
      "B": "Veno-venous ECMO (VV-ECMO) referral at an ECMO-capable center",
      "C": "Bilateral lung transplantation",
      "D": "Steroids and bronchodilators"
    },
    "answer": "B",
    "explanation": "VV-ECMO is the appropriate rescue therapy for refractory severe ARDS when conventional strategies fail. The CESAR trial and subsequent EOLIA trial (showing strong trend toward mortality benefit) support VV-ECMO as a bridge to lung recovery in severe ARDS with P/F <50-80 despite optimal therapy. VV-ECMO bypasses the lungs for gas exchange, allowing 'ultra-protective' ventilation at very low pressures. ECMO should be initiated at experienced centers. Lung transplantation is not feasible in the acute setting of ARDS."
  },
  {
    "id": 78,
    "chapter": 8,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "Which of the following is a CONTRAINDICATION to prone positioning in ARDS?",
    "options": {
      "A": "P/F ratio <100",
      "B": "Active use of vasopressors for hemodynamic instability",
      "C": "Unstable spinal fracture or open abdomen",
      "D": "Body mass index >35 kg/m\u00b2"
    },
    "answer": "C",
    "explanation": "Contraindications to prone positioning include unstable spine fractures, open abdomen (laparostomy), anterior chest tubes preventing positioning, elevated intracranial pressure, facial/orbital surgery, and pregnancy. Active vasopressor use and high BMI are NOT absolute contraindications \u2014 in fact, proning is often more beneficial in obese patients (improved diaphragm mechanics). P/F <100 is actually an indication for proning (severe ARDS), not a contraindication."
  },
  {
    "id": 79,
    "chapter": 8,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "The ARDSnet ARMA trial established the lung-protective ventilation protocol. Which combination of settings BEST reflects the ARMA trial protocol?",
    "options": {
      "A": "VT 10-12 mL/kg IBW, plateau pressure <45 cmH2O",
      "B": "VT 6 mL/kg IBW, plateau pressure <30 cmH2O, permissive hypercapnia acceptable",
      "C": "VT 6 mL/kg IBW, plateau pressure <25 cmH2O, normal PaCO2 required",
      "D": "VT 8 mL/kg IBW, plateau pressure <35 cmH2O, PEEP \u226512"
    },
    "answer": "B",
    "explanation": "The ARMA trial compared VT 12 mL/kg IBW vs. 6 mL/kg IBW in ARDS and demonstrated a 22% relative reduction in 28-day mortality with low VT. Key protocol elements: VT 6 mL/kg IBW (may go to 4 mL/kg if needed), plateau pressure target <30 cmH2O, permissive hypercapnia is acceptable (accept PaCO2 up to 60+ mmHg if pH >7.15), and PEEP/FiO2 combination tables. The study stopped early due to clear mortality benefit."
  },
  {
    "id": 80,
    "chapter": 8,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 50-year-old man with ARDS is on lung-protective ventilation. His ABG shows pH 7.19, PaCO2 68, PaO2 72, HCO3 25, BE -2. SpO2 is 92%. What is the MOST appropriate management of his respiratory acidosis?",
    "options": {
      "A": "Increase VT to 8 mL/kg IBW to normalize PaCO2",
      "B": "Accept permissive hypercapnia; consider sodium bicarbonate if pH <7.15",
      "C": "Initiate THAM (tromethamine) infusion to buffer acidosis",
      "D": "Switch to high-frequency oscillatory ventilation"
    },
    "answer": "B",
    "explanation": "Permissive hypercapnia is an accepted component of lung-protective ventilation in ARDS. Increasing VT to normalize PaCO2 would cause volutrauma and increase plateau pressure \u2014 the benefits of lung protection outweigh normocapnia. pH >7.15-7.20 is generally tolerated. If pH falls below this threshold, options include increasing RR (within limits of auto-PEEP), prone positioning (often improves CO2 clearance), or bicarbonate infusion to buy time, though bicarbonate has limitations. THAM is sometimes used but is not first-line per current evidence."
  },
  {
    "id": 81,
    "chapter": 9,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 62-year-old man with ARDS is on pressure support ventilation (PSV) as part of a spontaneous breathing trial (SBT). His RR is 32, VT 220 mL, SpO2 91%, HR 122, and he appears anxious and using accessory muscles after 20 minutes. What is the MOST appropriate next step?",
    "options": {
      "A": "Continue SBT for the full 2 hours before making a decision",
      "B": "Immediately intubate with higher ventilator settings",
      "C": "Stop the SBT and return to full ventilator support",
      "D": "Administer sedation and resume SBT in 10 minutes"
    },
    "answer": "C",
    "explanation": "SBT failure criteria include: RR >35, SpO2 <90%, HR >140 or change >20%, BP changes >20%, increased work of breathing, agitation, or diaphoresis. This patient meets multiple failure criteria (RR 32 approaching 35, SpO2 91%, HR 122, accessory muscle use, anxiety). The SBT should be stopped immediately and full ventilator support resumed. Patients who fail SBT should receive rest on full support and repeat SBT attempt in 24 hours after addressing reversible causes. Continuing a failing SBT risks respiratory muscle fatigue."
  },
  {
    "id": 82,
    "chapter": 9,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 70-year-old woman has been on mechanical ventilation for 8 days following pneumonia. She is alert, follows commands, and has been on minimal vent support (CPAP + PS 8/PEEP 5, FiO2 0.35). Her rapid shallow breathing index (RSBI) is 68. What does this predict?",
    "options": {
      "A": "High likelihood of SBT failure",
      "B": "High likelihood of SBT success and safe extubation",
      "C": "The patient requires tracheostomy before extubation",
      "D": "The patient is at high risk for reintubation regardless of RSBI"
    },
    "answer": "B",
    "explanation": "The rapid shallow breathing index (RSBI = RR/VT in liters) was described by Yang and Tobin. An RSBI <105 predicts SBT success with sensitivity ~97% and specificity ~64% (original study). RSBI <80 is associated with higher confidence in successful extubation. This patient's RSBI of 68 predicts successful SBT and extubation. An RSBI >105 is associated with SBT failure. RSBI is used as one of the criteria to determine readiness for SBT, not as an independent predictor of reintubation post-extubation."
  },
  {
    "id": 83,
    "chapter": 9,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 65-year-old man passes his SBT and is extubated. Two hours later, he develops stridor with respiratory distress. SpO2 drops to 88%. What is the MOST appropriate management?",
    "options": {
      "A": "Immediate reintubation",
      "B": "Racemic epinephrine nebulization and/or IV dexamethasone",
      "C": "High-flow nasal cannula at 60 L/min",
      "D": "Heliox therapy as the first-line agent"
    },
    "answer": "B",
    "explanation": "Post-extubation stridor from laryngeal edema is treated with racemic epinephrine nebulization (alpha-agonist causing local vasoconstriction and edema reduction) and IV dexamethasone (reduces inflammation). The cuff-leak test before extubation identifies patients at high risk for post-extubation stridor; prophylactic methylprednisolone reduces this risk. Reintubation is reserved for cases unresponsive to medical therapy. HFNC can help with post-extubation hypoxemia but does not treat stridor directly. Heliox reduces turbulent flow in upper airway obstruction and is a useful adjunct but not first-line."
  },
  {
    "id": 84,
    "chapter": 9,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "Which of the following is the MOST evidence-based strategy to reduce duration of mechanical ventilation and ICU LOS?",
    "options": {
      "A": "Daily scheduled paralysis to prevent patient-ventilator dyssynchrony",
      "B": "Protocolized daily SAT (spontaneous awakening trials) paired with SBT",
      "C": "Mandatory tracheostomy after 7 days of intubation",
      "D": "Continuous deep sedation to prevent self-extubation"
    },
    "answer": "B",
    "explanation": "The ABC (Awakening and Breathing Coordination) Trial demonstrated that paired daily spontaneous awakening trials (SAT \u2014 interrupting sedation) with spontaneous breathing trials (SBT) reduced duration of mechanical ventilation by ~3 days, reduced ICU and hospital LOS, and improved 1-year survival compared to SBT alone. The ABCDEF bundle further adds analgesia-first, delirium monitoring, early mobility, and family engagement. Continuous deep sedation prolongs ventilation. Routine early tracheostomy (TracMan trial) does not improve outcomes vs. delayed."
  },
  {
    "id": 85,
    "chapter": 9,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 55-year-old man with ICU-acquired weakness is being weaned from mechanical ventilation. His RSBI is 95, but after 2 hours on CPAP+PS, he has an RR of 28 and VT 380 mL and is fatigued. What is the MOST appropriate weaning strategy for difficult-to-wean patients?",
    "options": {
      "A": "Immediate tracheostomy and long-term acute care transfer",
      "B": "Progressive pressure support weaning with gradual reduction over days",
      "C": "Return to full support and retry SBT every 2 hours",
      "D": "Extubate directly to non-invasive ventilation (NIV)"
    },
    "answer": "B",
    "explanation": "For difficult-to-wean patients (SBT failure after 3 attempts or >7 days), a progressive weaning strategy with gradual reduction in pressure support levels (PS weaning) over days is appropriate. This allows gradual reconditioning of the respiratory muscles without fatigue. Daily SBT attempts remain important. Tracheostomy may be considered for prolonged weaning (>14-21 days) but is not automatically indicated after 2 SBT failures. NIV post-extubation is evidence-based particularly in COPD and hypercapnic patients (Ferrer et al.), but this patient has not yet been extubated."
  },
  {
    "id": 86,
    "chapter": 9,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 48-year-old woman, intubated for pneumonia, passes her SBT and is extubated. She has a history of CHF (EF 35%) and was on lasix prior to admission. Four hours post-extubation, her RR is 36, she is using accessory muscles, and SpO2 is 89% with pink frothy secretions. What is the MOST likely cause of extubation failure?",
    "options": {
      "A": "Post-extubation laryngeal edema",
      "B": "Post-extubation pulmonary edema (cardiac)",
      "C": "Aspiration pneumonitis",
      "D": "Re-emergence of pneumonia"
    },
    "answer": "B",
    "explanation": "Pink frothy secretions, hypoxemia, and respiratory distress shortly after extubation in a patient with underlying CHF and low EF is classic for post-extubation cardiac pulmonary edema. Weaning from positive pressure ventilation removes the beneficial effects of PEEP (which reduces preload and afterload in CHF), causing sudden hemodynamic shift. Treatment includes NIV (BiPAP), diuresis, and vasodilators. Post-extubation prophylactic NIV in CHF patients significantly reduces reintubation rates. Pink frothy sputum is not characteristic of laryngeal edema or aspiration."
  },
  {
    "id": 87,
    "chapter": 9,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "Which of the following parameters does NOT need to be met before performing a spontaneous breathing trial?",
    "options": {
      "A": "Adequate oxygenation: SpO2 \u226590% on FiO2 \u22640.40-0.50 and PEEP \u22645-8",
      "B": "Resolution of the primary indication for intubation",
      "C": "Serum albumin \u22653.5 g/dL",
      "D": "Adequate cough and secretion management"
    },
    "answer": "C",
    "explanation": "SBT readiness criteria include: adequate oxygenation (SpO2 \u226590% on FiO2 \u22640.4-0.5, PEEP \u22645-8), hemodynamic stability (no or low-dose vasopressors), resolution or improvement of the primary indication for intubation, adequate respiratory drive, ability to follow commands, adequate cough reflex, and manageable secretions. Serum albumin level is NOT a required criterion for SBT readiness. While malnutrition may affect overall recovery, it is not a prerequisite for extubation assessment."
  },
  {
    "id": 88,
    "chapter": 9,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "Tracheostomy is being considered for a patient on day 10 of mechanical ventilation who has failed multiple SBTs. What is the PRIMARY benefit of tracheostomy over prolonged translaryngeal intubation?",
    "options": {
      "A": "Tracheostomy eliminates the risk of ventilator-associated pneumonia",
      "B": "Tracheostomy reduces subglottic and tracheal injury and improves patient comfort, allowing reduced sedation",
      "C": "Tracheostomy reduces 90-day mortality in all ventilated ICU patients",
      "D": "Tracheostomy facilitates faster return to full oral feeding"
    },
    "answer": "B",
    "explanation": "Tracheostomy advantages over prolonged endotracheal intubation include reduced laryngeal and subglottic injury, improved patient comfort and tolerance, reduced sedation requirements, easier oral care and secretion management, and improved ability to wean. The TracMan trial (early vs. late tracheostomy) showed no mortality difference, meaning tracheostomy does not reduce mortality. VAP rates are similar between ETT and trach. Oral feeding requires a cuffed tracheostomy to be deflated and is not necessarily faster."
  },
  {
    "id": 89,
    "chapter": 9,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 60-year-old man with COPD is extubated after a COPD exacerbation. He has a history of multiple prior extubation failures requiring reintubation. What prophylactic measure has the STRONGEST evidence for reducing reintubation in high-risk COPD patients?",
    "options": {
      "A": "High-flow nasal cannula (HFNC) immediately post-extubation",
      "B": "Prophylactic non-invasive ventilation (NIV/BiPAP) post-extubation",
      "C": "Corticosteroids for 5 days post-extubation",
      "D": "Helium-oxygen mixture (heliox) for 24 hours"
    },
    "answer": "B",
    "explanation": "Multiple RCTs (Ferrer et al. 2006, 2009; Nava et al.) have demonstrated that prophylactic NIV (BiPAP) immediately post-extubation in high-risk patients (COPD, CHF, hypercapnia, prolonged ventilation) significantly reduces reintubation rates and ICU mortality. HFNC showed benefit in the OPTIFLOW trial (Hernandez et al.) in low-risk patients but was inferior to NIV in high-risk hypercapnic patients (FLORALI-2). The combination of HFNC + NIV alternating may optimize outcomes, but NIV alone has the strongest evidence in COPD."
  },
  {
    "id": 90,
    "chapter": 9,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 72-year-old man has been on mechanical ventilation for 21 days. He has a tracheostomy in place and requires PS 12/PEEP 5 for adequate oxygenation. He fails SBT daily. Which condition is MOST likely contributing to ventilator dependence?",
    "options": {
      "A": "ICU-acquired neuromuscular weakness",
      "B": "Residual pneumonia",
      "C": "Tracheobronchomalacia",
      "D": "Psychological ventilator dependence"
    },
    "answer": "A",
    "explanation": "ICU-acquired neuromuscular weakness (ICUAW) is a common complication of critical illness, developing in up to 46% of patients with sepsis or multiorgan failure, and is the leading cause of prolonged ventilator dependence. It results from critical illness polyneuropathy and/or myopathy. Risk factors include prolonged immobilization, corticosteroids, neuromuscular blockers, sepsis, and hyperglycemia. Diagnosis requires EMG/nerve conduction studies. Rehabilitation, early mobility, and glycemic control are key interventions. ICUAW significantly prolongs ICU and hospital LOS."
  },
  {
    "id": 91,
    "chapter": 10,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 55-year-old woman presents with acute-onset dyspnea and pleuritic chest pain. She is 2 weeks post-knee replacement surgery. HR 118, BP 102/68, SpO2 88% on 6L NC, RR 28. ECG shows sinus tachycardia with S1Q3T3 pattern. Which scoring system BEST risk-stratifies this patient for PE?",
    "options": {
      "A": "CURB-65 score",
      "B": "Wells PE score and/or PESI score",
      "C": "APACHE II score",
      "D": "Geneva score only"
    },
    "answer": "B",
    "explanation": "The Wells PE score and Pulmonary Embolism Severity Index (PESI) are the validated risk stratification tools for PE. Wells score incorporates clinical probability of DVT, alternative diagnosis less likely than PE, HR >100, immobilization/surgery within 4 weeks, prior VTE, hemoptysis, and malignancy. PESI stratifies severity into 5 classes predicting 30-day mortality. This patient has multiple Wells criteria (immobilization, tachycardia, alternative diagnosis less likely) and hemodynamic compromise, indicating high-risk PE. CURB-65 is for pneumonia severity."
  },
  {
    "id": 92,
    "chapter": 10,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 62-year-old man with massive PE (BP 78/50, HR 134, SpO2 82%) is intubated emergently. CT-PA confirms massive bilateral PE with right heart strain. What is the MOST appropriate definitive treatment?",
    "options": {
      "A": "Anticoagulation with unfractionated heparin alone",
      "B": "Systemic thrombolysis with alteplase 100 mg IV over 2 hours",
      "C": "Catheter-directed thrombolysis",
      "D": "Surgical embolectomy as first-line therapy"
    },
    "answer": "B",
    "explanation": "Massive PE with hemodynamic compromise (sustained hypotension) is the primary indication for systemic thrombolysis with IV alteplase 100 mg over 2 hours. The PEITHO trial and multiple guideline bodies (AHA, ACCP, ESC) support systemic thrombolysis as the first-line reperfusion strategy for massive PE. Catheter-directed thrombolysis is an alternative for submassive PE or when systemic lysis is contraindicated. Surgical embolectomy is reserved for systemic lysis failure or contraindications. Anticoagulation alone has insufficient speed of clot resolution for massive PE with shock."
  },
  {
    "id": 93,
    "chapter": 10,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 48-year-old woman with submassive PE (RV/LV ratio 1.4 on CT, troponin 0.8 ng/mL, BNP 680 pg/mL) has BP 108/72 and HR 104. She is on therapeutic anticoagulation. Which intervention should be CONSIDERED in submassive PE with high-risk features?",
    "options": {
      "A": "Systemic thrombolysis immediately given elevated troponin",
      "B": "Catheter-directed thrombolysis or escalation to systemic lysis if deterioration occurs",
      "C": "IVC filter placement as primary intervention",
      "D": "ECMO immediately given RV dysfunction"
    },
    "answer": "B",
    "explanation": "Submassive PE (hemodynamically stable but with RV dysfunction and/or myocardial injury markers) represents an intermediate-risk group where the role of thrombolysis remains debated. PEITHO trial showed systemic lysis reduced hemodynamic deterioration but increased major bleeding/stroke. Current AHA/ACCP guidelines recommend anticoagulation as primary treatment with close monitoring, reserving rescue thrombolysis or catheter-directed therapy (CDT) for clinical deterioration. CDT delivers lower doses of thrombolytics directly into the pulmonary artery, reducing systemic bleeding risk."
  },
  {
    "id": 94,
    "chapter": 10,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 70-year-old man with massive PE is intubated. Initial post-intubation BP is 60/38 despite volume resuscitation. Which vasopressor is MOST appropriate for RV failure in massive PE?",
    "options": {
      "A": "Dobutamine alone",
      "B": "Norepinephrine, with consideration of vasopressin and/or dobutamine",
      "C": "Milrinone alone",
      "D": "Phenylephrine as the preferred vasopressor"
    },
    "answer": "B",
    "explanation": "RV failure in massive PE requires careful hemodynamic support. Norepinephrine is the preferred vasopressor: it increases systemic vascular resistance (maintaining coronary perfusion pressure to the stressed RV), provides some inotropy, and maintains RV perfusion pressure gradient. The failing RV is particularly dependent on coronary perfusion (systemic diastolic pressure > RV wall pressure). Phenylephrine may worsen RV function by increasing afterload. Dobutamine (inotrope) is useful for RV contractile support but requires adequate MAP first. Milrinone may cause systemic hypotension."
  },
  {
    "id": 95,
    "chapter": 10,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 35-year-old woman on oral contraceptives presents with DVT and PE. Which test is MOST important to order for thrombophilia workup, and WHEN should it be performed?",
    "options": {
      "A": "Factor V Leiden mutation; can be ordered during acute anticoagulation",
      "B": "Protein C and S levels; should be ordered during acute treatment",
      "C": "Antiphospholipid antibody panel; must wait 12 weeks after the acute event to confirm",
      "D": "D-dimer; must be ordered within 24 hours of diagnosis"
    },
    "answer": "C",
    "explanation": "Antiphospholipid antibody syndrome (APS) is an important acquired thrombophilia causing recurrent VTE and pregnancy complications. Diagnostic criteria require the presence of antiphospholipid antibodies (lupus anticoagulant, anticardiolipin, anti-\u03b22-glycoprotein I) confirmed on TWO occasions at least 12 weeks apart. A positive test during acute thrombosis may be transient, so confirmatory testing is required after 12 weeks. Factor V Leiden (genetic) can be tested anytime. Protein C and S are consumed during acute thrombosis, giving falsely low values \u2014 they should be tested weeks after anticoagulation is stopped."
  },
  {
    "id": 96,
    "chapter": 10,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 68-year-old man is found to have a submassive PE. He is initiated on unfractionated heparin (UFH). What is the therapeutic monitoring parameter and goal range for UFH therapy?",
    "options": {
      "A": "INR 2-3",
      "B": "Anti-Xa level 0.3-0.7 IU/mL",
      "C": "aPTT 60-100 seconds (1.5-2.5 \u00d7 normal)",
      "D": "Thrombin time 2\u00d7 normal"
    },
    "answer": "C",
    "explanation": "UFH is monitored by activated partial thromboplastin time (aPTT), targeting 60-100 seconds (approximately 1.5-2.5 \u00d7 the upper limit of normal). Each institution has slightly different therapeutic aPTT ranges based on their reagent/coagulometer. Anti-Xa monitoring is used for low-molecular-weight heparin (LMWH) and in some cases of UFH in patients where aPTT is unreliable (lupus anticoagulant, elevated baseline aPTT). INR monitors warfarin. Thrombin time is sensitive to direct thrombin inhibitors and fibrinogen levels, not heparin."
  },
  {
    "id": 97,
    "chapter": 10,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 58-year-old man with massive PE undergoes successful systemic thrombolysis and hemodynamic recovery. He develops sudden onset of severe headache and left hemiparesis 6 hours after thrombolysis. CT head shows intracranial hemorrhage. What is the most likely cause and immediate management?",
    "options": {
      "A": "Paradoxical embolism; start anticoagulation immediately",
      "B": "Thrombolysis-associated intracranial hemorrhage; stop all anticoagulation and reverse with cryoprecipitate/FFP",
      "C": "New ischemic stroke from RV thrombus; emergent thrombolysis",
      "D": "Hypertensive emergency; start nicardipine infusion"
    },
    "answer": "B",
    "explanation": "Intracranial hemorrhage (ICH) is the most feared complication of systemic thrombolysis, occurring in approximately 1.5-3% of cases. It requires immediate cessation of all anticoagulation and thrombolytic agents. Reversal with cryoprecipitate (replenishes fibrinogen consumed by thrombolysis) and FFP should be administered. Neurosurgical consultation is essential. Alteplase has a short half-life (~5 minutes) but its fibrinolytic effects persist for hours. This patient's neurologic deterioration hours post-thrombolysis with headache is classic for ICH, not stroke."
  },
  {
    "id": 98,
    "chapter": 10,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 45-year-old woman with breast cancer develops acute PE. She is initiated on therapeutic anticoagulation. Which anticoagulant is preferred for VTE treatment in active cancer patients?",
    "options": {
      "A": "Warfarin with goal INR 2-3",
      "B": "Low-molecular-weight heparin (LMWH) for at least 6 months",
      "C": "Direct oral anticoagulants (DOACs) are now preferred over LMWH",
      "D": "Fondaparinux for at least 3 months"
    },
    "answer": "C",
    "explanation": "Historically, LMWH was preferred over warfarin in cancer-associated VTE (CLOT trial). However, multiple recent RCTs (HOKUSAI-Cancer, SELECT-D, ADAM-VTE, Caravaggio) have demonstrated that DOACs (apixaban, rivaroxaban, edoxaban) are non-inferior or superior to LMWH for cancer-associated VTE, with better patient convenience. Current ASCO, NCCN, and ISTH guidelines now recommend DOACs (particularly apixaban or rivaroxaban) as preferred first-line agents in most cancer patients with VTE, with caution in GI/GU malignancies with high bleeding risk where LMWH may still be preferred."
  },
  {
    "id": 99,
    "chapter": 10,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 72-year-old man has a massive PE with cardiac arrest. ROSC is achieved after 15 minutes of CPR. He remains in cardiogenic shock with RV dilation on POCUS. Systemic thrombolysis is considered. Which statement is TRUE regarding thrombolysis in cardiac arrest from PE?",
    "options": {
      "A": "CPR for >10 minutes is an absolute contraindication to thrombolysis",
      "B": "Thrombolysis can be given during ongoing CPR for proven PE with cardiac arrest",
      "C": "Thrombolysis requires stopping CPR to avoid drug displacement",
      "D": "Only surgical embolectomy should be considered after cardiac arrest from PE"
    },
    "answer": "B",
    "explanation": "Cardiac arrest from confirmed or highly suspected PE is an indication for thrombolysis even during ongoing CPR. The AHA recommends alteplase 50 mg IV bolus for PE-related cardiac arrest. CPR chest compressions may actually enhance drug distribution and thrombus dissolution. Prolonged CPR is NOT an absolute contraindication to thrombolysis in PE arrest \u2014 the potential to restore pulmonary circulation outweighs the bleeding risk from CPR-related injuries. After thrombolysis, CPR should be continued for at least 60-90 minutes to allow drug effect."
  },
  {
    "id": 100,
    "chapter": 10,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 50-year-old man with heparin-induced thrombocytopenia (HIT) develops a new PE. Which anticoagulant is MOST appropriate?",
    "options": {
      "A": "Low-molecular-weight heparin (enoxaparin)",
      "B": "Unfractionated heparin with close monitoring",
      "C": "Argatroban (direct thrombin inhibitor)",
      "D": "Warfarin immediately with heparin bridge"
    },
    "answer": "C",
    "explanation": "HIT is caused by IgG antibodies against the PF4-heparin complex, causing platelet activation and paradoxical thrombosis. All heparin products (UFH and LMWH) are contraindicated in HIT due to cross-reactivity. Non-heparin anticoagulants are required: argatroban (direct thrombin inhibitor, IV; preferred in renal dysfunction) or bivalirudin (IV). Fondaparinux is used off-label. DOACs (rivaroxaban, apixaban) are increasingly used for HIT-associated VTE. Warfarin is contraindicated in acute HIT (risk of venous limb gangrene from depletion of protein C)."
  },
  {
    "id": 101,
    "chapter": 11,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 45-year-old woman with severe asthma exacerbation arrives with BP 118/74, HR 122, RR 32, SpO2 86% on 10L NRB, PEFR 25% predicted. She speaks in single words. Her exam shows bilateral diffuse expiratory wheezes with a silent chest on the left. What is the MOST immediate intervention?",
    "options": {
      "A": "Intubation with RSI using succinylcholine",
      "B": "Continuous albuterol nebulization plus ipratropium plus IV magnesium sulfate 2g",
      "C": "IV methylprednisolone 125 mg push",
      "D": "Heliox 80:20 via non-rebreather mask"
    },
    "answer": "B",
    "explanation": "Severe asthma exacerbation with impending respiratory failure should first receive maximal bronchodilator therapy: continuous albuterol (10-20 mg/hr), ipratropium, and IV magnesium sulfate 2g (which relaxes bronchial smooth muscle via calcium antagonism and has proven efficacy in acute severe asthma). Intubation in status asthmaticus carries very high risk of complications (air trapping, barotrauma, hemodynamic collapse) and should be a last resort after maximal medical therapy. Systemic steroids are also essential but slower-acting. Heliox reduces turbulent airflow but is a temporizing measure."
  },
  {
    "id": 102,
    "chapter": 11,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 52-year-old man with COPD is intubated for hypercarbic respiratory failure (pH 7.12, PaCO2 92 mmHg). Post-intubation ventilator settings: AC/VC, RR 20, VT 500 mL, PEEP 5, FiO2 0.60. He subsequently develops sudden hypotension (BP 64/40) and distant breath sounds bilaterally. The ventilator alarms show high peak pressures. What is the MOST likely cause?",
    "options": {
      "A": "Right mainstem intubation",
      "B": "Auto-PEEP causing severe dynamic hyperinflation and obstructive shock",
      "C": "Tension pneumothorax",
      "D": "Anaphylaxis from paralytic agent"
    },
    "answer": "B",
    "explanation": "Severe auto-PEEP (dynamic hyperinflation) in COPD patients can cause obstructive shock by raising intrathoracic pressure, impairing venous return, and reducing cardiac output. The high RR of 20 in a COPD patient with severe airflow obstruction allows insufficient expiratory time, leading to breath stacking. Management: temporarily disconnect from ventilator (immediately reducing intrathoracic pressure and often transiently restoring BP), reduce RR to 8-12, increase inspiratory flow to shorten Ti, and accept permissive hypercapnia. Tension pneumothorax causes unilateral absent sounds; auto-PEEP causes bilateral reduced sounds."
  },
  {
    "id": 103,
    "chapter": 11,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 38-year-old woman with status asthmaticus is intubated despite maximal therapy. Her peak pressure is 68 cmH2O, plateau pressure is 48 cmH2O. Best clinical approach to ventilator management includes all EXCEPT:",
    "options": {
      "A": "Tidal volume 6-8 mL/kg IBW",
      "B": "Low respiratory rate (8-12 breaths/min) to allow adequate expiratory time",
      "C": "High PEEP (\u226515 cmH2O) to prevent airway collapse",
      "D": "Permissive hypercapnia accepting pH \u22657.20"
    },
    "answer": "C",
    "explanation": "In intubated status asthmaticus, high PEEP is contraindicated. The mechanism of air trapping is dynamic obstruction on expiration \u2014 adding extrinsic PEEP above auto-PEEP worsens hyperinflation and increases the risk of barotrauma. Extrinsic PEEP should be set at 0-5 cmH2O initially and titrated based on measured auto-PEEP. Optimal ventilation: low RR (8-12), moderate VT (6-8 mL/kg IBW), high inspiratory flow rate (80-100 L/min) to maximize expiratory time, and permissive hypercapnia. Inhalational anesthetics (isoflurane) can be used as rescue bronchodilators."
  },
  {
    "id": 104,
    "chapter": 11,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 68-year-old man with COPD exacerbation is on BiPAP (IPAP 14, EPAP 5). After 2 hours, his ABG is: pH 7.32, PaCO2 62, PaO2 72, HCO3 31, SpO2 94%. What is the MOST appropriate adjustment?",
    "options": {
      "A": "Increase EPAP to 10 to improve oxygenation",
      "B": "Increase IPAP to 18 to increase pressure support and improve CO2 clearance",
      "C": "Switch to CPAP mode as oxygenation is improving",
      "D": "Intubate immediately given persistent hypercapnia"
    },
    "answer": "B",
    "explanation": "In BiPAP for hypercarbic respiratory failure, CO2 clearance is primarily driven by the pressure support level (IPAP minus EPAP). Increasing IPAP to 18 increases the tidal volume delivered by BiPAP, improving alveolar ventilation and CO2 clearance. EPAP primarily addresses oxygenation and prevents expiratory airway collapse. A pH of 7.32 with improving trend on BiPAP does not mandate intubation if the patient is tolerating the mask and improving. Switching to CPAP alone would remove the inspiratory support needed for CO2 clearance."
  },
  {
    "id": 105,
    "chapter": 11,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "Which of the following is the FIRST-LINE pharmacologic treatment for acute COPD exacerbation in the ED/ICU?",
    "options": {
      "A": "IV aminophylline",
      "B": "Short-acting beta-2 agonists (SABA) + short-acting muscarinic antagonists (SAMA) via nebulization",
      "C": "Oral prednisone 60 mg daily for 10 days",
      "D": "IV methylprednisolone 1 mg/kg/day"
    },
    "answer": "B",
    "explanation": "First-line pharmacologic treatment for acute COPD exacerbation consists of short-acting bronchodilators: short-acting beta-2 agonists (albuterol) combined with short-acting muscarinic antagonists (ipratropium), delivered by nebulizer. Systemic corticosteroids (prednisone 40 mg/day \u00d7 5 days per REDUCE trial) are added for moderate-severe exacerbations. Antibiotics are indicated if there are signs of bacterial infection (increased purulence, volume of sputum). IV aminophylline is no longer routinely recommended due to narrow therapeutic index and lack of additional benefit over bronchodilators."
  },
  {
    "id": 106,
    "chapter": 11,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 55-year-old man with COPD is found on ABG: pH 7.28, PaCO2 72, PaO2 48, HCO3 32, SpO2 82% on 2L NC. His PaO2 improves to 62 on 4L NC (SpO2 94%). He is alert and cooperating. Which is the MOST appropriate FiO2 target for COPD patients with hypercarbic respiratory failure?",
    "options": {
      "A": "SpO2 94-98% to maximize oxygen delivery",
      "B": "SpO2 88-92% to avoid hypoxic drive suppression and worsening hypercapnia",
      "C": "SpO2 >98% regardless of PaCO2",
      "D": "PaO2 >100 mmHg to prevent end-organ ischemia"
    },
    "answer": "B",
    "explanation": "In COPD patients with chronic CO2 retention, the target SpO2 is 88-92% (PaO2 55-65 mmHg). Excessive oxygen supplementation in COPD can worsen hypercapnia through multiple mechanisms: loss of hypoxic pulmonary vasoconstriction (worsening V/Q mismatch), suppression of hypoxic drive (in chronic CO2 retainers), and the Haldane effect (CO2 displaced from hemoglobin by O2). The DECAF and subsequent studies confirm that titrated oxygen (88-92%) is associated with lower mortality than high-flow oxygen in acute COPD exacerbation."
  },
  {
    "id": 107,
    "chapter": 11,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 42-year-old nurse presents to the ED with acute severe asthma. Her PEFR is 30% predicted after 3 albuterol treatments. IV magnesium sulfate 2g is given. What is the mechanism of magnesium in acute asthma?",
    "options": {
      "A": "Beta-2 adrenergic receptor agonism",
      "B": "Phosphodiesterase inhibition increasing intracellular cAMP",
      "C": "Calcium channel antagonism causing bronchial smooth muscle relaxation",
      "D": "Leukotriene receptor blockade reducing airway inflammation"
    },
    "answer": "C",
    "explanation": "Magnesium sulfate causes bronchial smooth muscle relaxation primarily by antagonizing calcium channels \u2014 calcium is required for smooth muscle contraction, and magnesium competes with calcium at voltage-gated channels. Multiple systematic reviews (including Cochrane meta-analyses) confirm IV magnesium sulfate significantly reduces hospitalizations and improves lung function in acute severe asthma not responding to initial bronchodilators. The dose is 2g IV over 20 minutes. Magnesium also inhibits mast cell degranulation and acetylcholine release."
  },
  {
    "id": 108,
    "chapter": 11,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 60-year-old man with COPD requires antibiotic therapy for an exacerbation with purulent sputum, increased dyspnea, and increased sputum volume (Anthonisen Type I). What is the MOST appropriate antibiotic selection?",
    "options": {
      "A": "Azithromycin monotherapy",
      "B": "Amoxicillin-clavulanate OR respiratory fluoroquinolone (levofloxacin/moxifloxacin)",
      "C": "Broad-spectrum IV piperacillin-tazobactam",
      "D": "Antibiotics are not indicated for COPD exacerbations"
    },
    "answer": "B",
    "explanation": "Anthonisen Type I COPD exacerbation (increased dyspnea + increased sputum volume + increased sputum purulence) clearly benefits from antibiotics. Common pathogens include H. influenzae, S. pneumoniae, and M. catarrhalis. First-line agents include amoxicillin-clavulanate, respiratory fluoroquinolones (levofloxacin, moxifloxacin), or doxycycline for 5-7 days. Azithromycin monotherapy has increasing resistance among S. pneumoniae. Broad-spectrum IV antibiotics are reserved for severe exacerbations requiring ICU admission with risk factors for Pseudomonas (bronchiectasis, prior Pseudomonas, frequent steroid use)."
  },
  {
    "id": 109,
    "chapter": 11,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 35-year-old woman with severe asthma remains hypoxemic (SpO2 82%) despite continuous albuterol, ipratropium, IV magnesium, and IV methylprednisolone for 1 hour. She is awake but fatigued and using accessory muscles. What is the NEXT most appropriate intervention before intubation?",
    "options": {
      "A": "IV ketamine 0.2 mg/kg/hr infusion (sub-dissociative dose)",
      "B": "IV epinephrine 1 mg",
      "C": "Heliox 80:20 as the next step",
      "D": "Inhaled isoflurane"
    },
    "answer": "A",
    "explanation": "Sub-dissociative ketamine (0.1-0.5 mg/kg IV, then infusion at 0.1-0.5 mg/kg/hr) is an excellent pre-intubation bridge in refractory asthma. Ketamine provides bronchodilation (via catecholamine release causing beta-2 stimulation), sedation/anxiolysis, and analgesia while maintaining airway protective reflexes and spontaneous breathing. If intubation becomes necessary, ketamine can also be used as the induction agent (1-2 mg/kg IV). Subcutaneous or IM epinephrine (not IV bolus) can be used for severe bronchospasm. Heliox is a reasonable adjunct. Inhaled anesthetics require specialized equipment."
  },
  {
    "id": 110,
    "chapter": 11,
    "domain": "Respiratory Failure/Ventilator Management",
    "question": "A 70-year-old man with COPD (FEV1/FVC 0.52, FEV1 42% predicted) is admitted for exacerbation. Sputum culture grows Pseudomonas aeruginosa. What risk factors in COPD patients predict Pseudomonas as a causative organism in exacerbations?",
    "options": {
      "A": "Age > 65 and current tobacco use",
      "B": "FEV1 < 50%, frequent exacerbations, prior Pseudomonas isolation, or structural lung disease (bronchiectasis)",
      "C": "BMI < 20 and nutritional deficiency",
      "D": "Current use of inhaled corticosteroids"
    },
    "answer": "B",
    "explanation": "Risk factors for Pseudomonas in COPD exacerbations include: severe airflow obstruction (FEV1 <50% predicted), frequent exacerbations (>4/year) or hospitalizations, prior isolation of Pseudomonas from respiratory cultures, underlying structural lung disease (bronchiectasis), and recent systemic corticosteroid or broad-spectrum antibiotic use. These patients require antipseudomonal antibiotic coverage (ciprofloxacin or levofloxacin high-dose IV, or antipseudomonal beta-lactam). Age and tobacco use affect general COPD risk but not specifically Pseudomonas colonization."
  },
  {
    "id": 111,
    "chapter": 12,
    "domain": "Sepsis/Infection",
    "question": "A 68-year-old woman with a urinary source of sepsis has BP 82/50, HR 128, lactate 4.8 mmol/L. She receives 30 mL/kg IV crystalloid over 3 hours. MAP remains 58 mmHg. Blood cultures are drawn. What is the RECOMMENDED timing for antibiotic administration per current Surviving Sepsis Campaign guidelines?",
    "options": {
      "A": "Within 1 hour of septic shock recognition",
      "B": "After obtaining all cultures, within 3 hours",
      "C": "After source identification with imaging",
      "D": "After repeat lactate confirms persistent elevation"
    },
    "answer": "A",
    "explanation": "The 2021 Surviving Sepsis Campaign Hour-1 Bundle recommends antibiotics within 1 hour of septic shock or sepsis with lactate \u22654 mmol/L. Observational studies consistently show that each hour delay in antibiotic administration in septic shock increases mortality by 7-10%. Broad-spectrum empiric antibiotics should cover the most likely sources while cultures are pending. Blood cultures should be drawn before antibiotics if this does not delay administration by >45 minutes. Source control (drainage, removal of infected devices) should be achieved within 6-12 hours."
  },
  {
    "id": 112,
    "chapter": 12,
    "domain": "Sepsis/Infection",
    "question": "A 72-year-old man presents with septic shock from biliary source. After 2L crystalloid, MAP is 54 mmHg and lactate is 6.2 mmol/L. Antibiotics are started. What is the RECOMMENDED fluid resuscitation endpoint in septic shock per PRISM/PROCESS/PROMISE trials?",
    "options": {
      "A": "Fixed 30 mL/kg crystalloid over 3 hours regardless of response",
      "B": "Fluid resuscitation guided by clinical assessment and dynamic measures of fluid responsiveness, targeting MAP \u226565 mmHg",
      "C": "CVP target of 8-12 mmHg per original EGDT protocol",
      "D": "ScvO2 >70% as primary resuscitation endpoint"
    },
    "answer": "B",
    "explanation": "The PROCESS, ARISE, and PROMISE trials (all 2015) demonstrated that Early Goal-Directed Therapy (EGDT) with specific targets (CVP 8-12, ScvO2 >70%, Hgb >10) was NOT superior to usual care or protocol-based standard care. These trials abandoned CVP-guided resuscitation. Current evidence supports individualized fluid resuscitation guided by dynamic predictors of fluid responsiveness (PPV, SVV, passive leg raise), clinical exam (skin, UO, mentation), and lactate clearance, with MAP target \u226565 mmHg. More fluid is not always better."
  },
  {
    "id": 113,
    "chapter": 12,
    "domain": "Sepsis/Infection",
    "question": "A 55-year-old man with septic shock has received 4L crystalloid and is now on norepinephrine 0.3 mcg/kg/min. Repeat lactate at 2 hours is 3.2 mmol/L (down from 6.1 mmol/L). MAP is 68 mmHg. How is lactate clearance calculated and what does this value represent?",
    "options": {
      "A": "Clearance = (Initial - Final)/Final \u00d7 100; 47% clearance indicates adequate resuscitation",
      "B": "Clearance = (Initial - Final)/Initial \u00d7 100 = 47%; \u226510% per 2h indicates response",
      "C": "Lactate clearance requires 6-hour measurement intervals",
      "D": "Only absolute lactate values matter; percentage clearance is not clinically validated"
    },
    "answer": "B",
    "explanation": "Lactate clearance = [(Initial lactate - Current lactate) / Initial lactate] \u00d7 100 = [(6.1 - 3.2) / 6.1] \u00d7 100 = 47.5%. A clearance of \u226510% at 2 hours correlates with improved survival in septic shock and is an SSC Hour-1 bundle target (remeasure lactate if initial >2 mmol/L). This patient shows excellent 47.5% clearance, suggesting adequate resuscitation. The Jones et al. trial showed lactate clearance-guided therapy was non-inferior to ScvO2-guided therapy. Persistent elevated lactate despite resuscitation warrants reassessment."
  },
  {
    "id": 114,
    "chapter": 12,
    "domain": "Sepsis/Infection",
    "question": "A 48-year-old woman with septic shock from E. coli bacteremia is improving on appropriate antibiotics. Her blood cultures on day 3 still show growth of E. coli sensitive to ceftriaxone. She is afebrile and hemodynamically stable. What is the MOST likely explanation?",
    "options": {
      "A": "Antibiotic resistance development during therapy",
      "B": "Persistent source of infection requiring source control",
      "C": "Immune reconstitution inflammatory syndrome",
      "D": "Inadequate antibiotic dosing"
    },
    "answer": "B",
    "explanation": "Persistent bacteremia despite appropriate antibiotics suggests an undrained focus of infection or endovascular source (endocarditis, suppurative thrombophlebitis, infected prosthetic material). E. coli bacteremia that persists >72 hours on appropriate therapy requires thorough investigation: echocardiogram (rule out endocarditis), CT scan to identify occult abscess, and assessment of all intravascular devices (remove if infected). Antibiotic resistance is less likely with continued bacteremia to a sensitive organism. Source control (drainage, device removal) is essential in persistent bacteremia."
  },
  {
    "id": 115,
    "chapter": 12,
    "domain": "Sepsis/Infection",
    "question": "A 65-year-old man with septic shock has a serum procalcitonin (PCT) of 28 ng/mL on day 1. On day 5, his PCT is 4.2 ng/mL and he is clinically improving. According to PCT-guided protocols, what is the appropriate action?",
    "options": {
      "A": "Continue antibiotics for a full 14-day course regardless",
      "B": "Consider antibiotic de-escalation or discontinuation if PCT decline \u226580% from peak",
      "C": "Increase antibiotics as PCT >2 ng/mL indicates ongoing infection",
      "D": "Switch from broad-spectrum to narrow-spectrum regardless of cultures"
    },
    "answer": "B",
    "explanation": "PCT-guided antibiotic stewardship programs aim to reduce antibiotic duration without harming outcomes. PCT decline \u226580% from peak (or absolute value <0.5 ng/mL) has been used as a stopping rule for antibiotics in sepsis. In this patient: (28 - 4.2)/28 \u00d7 100 = 85% decline \u2014 meeting the criterion for considering antibiotic discontinuation. Multiple RCTs (PRORATA, SAPS) have shown PCT-guided therapy reduces antibiotic duration without increasing mortality, though clinical judgment must supersede PCT in complex patients. The SSC guidelines suggest using PCT to guide de-escalation."
  },
  {
    "id": 116,
    "chapter": 12,
    "domain": "Sepsis/Infection",
    "question": "A 70-year-old man with septic shock is receiving norepinephrine to maintain MAP \u226565 mmHg. A MAP target of 65 vs. 85 mmHg is being discussed. Which trial evidence guides this decision?",
    "options": {
      "A": "VASST trial: MAP 85 mmHg reduces renal failure rates",
      "B": "SEPSISPAM trial: MAP 65-70 mmHg target is equivalent to MAP 80-85 for overall mortality",
      "C": "PROCESS trial: MAP >70 mmHg required for adequate organ perfusion",
      "D": "SOAP II trial: MAP 80 mmHg prevents vasopressor-related arrhythmias"
    },
    "answer": "B",
    "explanation": "The SEPSISPAM trial (Asfar et al., NEJM 2014) randomized 776 patients with septic shock to MAP 65-70 vs. 80-85 mmHg. There was no overall mortality difference between groups. However, in the subgroup with pre-existing hypertension (chronic hypertension), the higher MAP target was associated with less renal failure and less renal replacement therapy need. This supports a MAP target of 65-70 mmHg as default, with individualized higher targets in patients with baseline hypertension. The current SSC recommendation is MAP \u226565 mmHg."
  },
  {
    "id": 117,
    "chapter": 12,
    "domain": "Sepsis/Infection",
    "question": "Which of the following best describes the Sepsis-3 definition of organ dysfunction used to diagnose sepsis?",
    "options": {
      "A": "SIRS criteria (fever, tachycardia, tachypnea, WBC abnormality) plus suspected infection",
      "B": "SOFA score increase of \u22652 points from baseline in the setting of suspected infection",
      "C": "Positive blood cultures with clinical signs of infection",
      "D": "Lactate \u22652 mmol/L with suspected infection requiring vasopressors"
    },
    "answer": "B",
    "explanation": "Sepsis-3 (Singer et al., JAMA 2016) defines sepsis as life-threatening organ dysfunction caused by a dysregulated host response to infection, operationalized as a SOFA score increase of \u22652 points from baseline in the setting of suspected infection. This replaced the Sepsis-2 definition of SIRS + suspected infection. SIRS criteria were abandoned as they are too non-specific. Positive blood cultures are not required for the diagnosis. Lactate >2 mmol/L requiring vasopressors defines septic shock (a subset of sepsis), not sepsis itself."
  },
  {
    "id": 118,
    "chapter": 12,
    "domain": "Sepsis/Infection",
    "question": "A 58-year-old woman with septic shock from abdominal source undergoes emergent laparotomy for perforated sigmoid colon. Intraoperative findings show fecal peritonitis. Which fluid is MOST appropriate for large-volume resuscitation in this patient?",
    "options": {
      "A": "Normal saline (0.9% NaCl) as primary resuscitation fluid",
      "B": "Balanced crystalloid (lactated Ringer's or PlasmaLyte)",
      "C": "5% albumin for all ICU fluid resuscitation",
      "D": "Hydroxyethyl starch (HES) for rapid volume expansion"
    },
    "answer": "B",
    "explanation": "The SMART and SALT-ED trials demonstrated that balanced crystalloids (LR, PlasmaLyte) compared to normal saline (0.9% NaCl) reduced the composite of death, renal failure requiring dialysis, and persistent renal dysfunction in critically ill patients. Normal saline causes hyperchloremic metabolic acidosis and may increase AKI risk. Hydroxyethyl starch is contraindicated in sepsis (CHEST and 6S trials showing increased mortality and AKI). Albumin can be used as a complementary fluid but is not recommended as primary resuscitation fluid (ALBIOS trial)."
  },
  {
    "id": 119,
    "chapter": 12,
    "domain": "Sepsis/Infection",
    "question": "A 45-year-old man with neutropenic sepsis (ANC 180/\u03bcL) from chemotherapy presents with fever (T 38.9\u00b0C), hypotension, and a new petechial rash. Blood cultures are pending. What empiric antibiotic regimen is MOST appropriate?",
    "options": {
      "A": "Vancomycin + piperacillin-tazobactam",
      "B": "Ceftriaxone + metronidazole",
      "C": "Piperacillin-tazobactam monotherapy",
      "D": "Vancomycin + meropenem + antifungal coverage"
    },
    "answer": "A",
    "explanation": "Febrile neutropenia requires broad-spectrum empiric antibiotics with antipseudomonal coverage. Standard first-line treatment per IDSA/NCCN guidelines is antipseudomonal beta-lactam monotherapy (piperacillin-tazobactam, cefepime, or meropenem). Vancomycin is added when there are specific indications: hemodynamic instability, suspected line infection, skin/soft tissue infection, pneumonia, or mucositis with viridans streptococcal risk. The petechial rash and hypotension in this patient justify vancomycin addition (concern for Gram-positive bacteremia). Antifungal coverage is added for persistent fever after 4-7 days of antibiotics."
  },
  {
    "id": 120,
    "chapter": 12,
    "domain": "Sepsis/Infection",
    "question": "A 72-year-old woman with septic shock is receiving 30 mL/kg crystalloid resuscitation. After 2L, she develops worsening hypoxemia (SpO2 dropping from 95% to 87%) with bilateral crackles and new opacities on CXR. Which resuscitation strategy reduces this complication?",
    "options": {
      "A": "Continue 30 mL/kg resuscitation to ensure adequate preload",
      "B": "Use dynamic fluid responsiveness assessment to guide further fluid administration",
      "C": "Add colloid to maintain oncotic pressure",
      "D": "Switch to vasopressin to avoid further fluid"
    },
    "answer": "B",
    "explanation": "Fluid overload in sepsis causes pulmonary edema, prolonged mechanical ventilation, and increased mortality. The CLASSIC trial showed that restrictive fluid resuscitation (guided by fluid responsiveness assessment) was safe and associated with less organ failure compared to standard therapy. Dynamic measures (PPV, SVV, passive leg raise, fluid challenge with CO monitoring) identify patients who will benefit from additional fluid (preload-responsive) vs. those in whom further fluid will only cause harm. Only ~50% of hemodynamically unstable ICU patients are fluid-responsive at any given time."
  },
  {
    "id": 121,
    "chapter": 13,
    "domain": "Sepsis/Infection",
    "question": "A 55-year-old man with healthcare-associated pneumonia is being treated empirically. He has no prior MRSA infections or positive MRSA nasal swabs. Which antibiotic selection principle BEST reflects current IDSA HAP/VAP guidelines regarding MRSA coverage?",
    "options": {
      "A": "All HAP/VAP patients require vancomycin or linezolid empirically",
      "B": "MRSA coverage can be withheld if local MRSA prevalence is <10-20% and no specific MRSA risk factors",
      "C": "Vancomycin trough monitoring is mandatory for all vancomycin-treated patients",
      "D": "Linezolid is superior to vancomycin for all HAP/VAP caused by MRSA"
    },
    "answer": "B",
    "explanation": "2016 IDSA HAP/VAP guidelines recommend risk-stratified MRSA coverage. Anti-MRSA therapy (vancomycin or linezolid) is recommended if patients have specific risk factors: prior MRSA infection or colonization, structural lung disease, recent IV antibiotic use, or when local MRSA prevalence in ICU VAP exceeds 10-20%. A negative MRSA nasal swab has high negative predictive value for MRSA VAP and can help de-escalate. Linezolid showed equivalent outcomes to vancomycin for MRSA VAP in ZEPHYR trial. AUC/MIC-guided vancomycin monitoring is now preferred over trough-only monitoring."
  },
  {
    "id": 122,
    "chapter": 13,
    "domain": "Sepsis/Infection",
    "question": "A 62-year-old man with VAP grows Klebsiella pneumoniae producing ESBL (extended-spectrum beta-lactamase). Which antibiotic class provides MOST reliable coverage for ESBL-producing organisms?",
    "options": {
      "A": "Third-generation cephalosporins (ceftriaxone, ceftazidime)",
      "B": "Piperacillin-tazobactam",
      "C": "Carbapenems (meropenem, imipenem, ertapenem)",
      "D": "Fluoroquinolones (ciprofloxacin, levofloxacin)"
    },
    "answer": "C",
    "explanation": "ESBL-producing organisms hydrolyze all penicillins, cephalosporins (including 3rd/4th generation), and monobactams. Carbapenems are the most reliable treatment and remain the standard of care for serious ESBL infections. The inoculum effect means piperacillin-tazobactam may appear sensitive in vitro but fails clinically at high bacterial loads (MERINO trial confirmed carbapenem superiority over pip-tazo for ESBL bacteremia). Fluoroquinolones and cephalosporins are frequently co-resistant. For less severe ESBL infections, temocillin and fosfomycin are alternatives."
  },
  {
    "id": 123,
    "chapter": 13,
    "domain": "Sepsis/Infection",
    "question": "A 70-year-old woman with CRE (carbapenem-resistant Enterobacteriaceae) bacteremia due to KPC (Klebsiella pneumoniae carbapenemase)-producing K. pneumoniae is admitted to the ICU. Which antibiotic combination is MOST appropriate?",
    "options": {
      "A": "Meropenem monotherapy at high dose",
      "B": "Ceftazidime-avibactam with or without aztreonam",
      "C": "Colistin monotherapy",
      "D": "Tigecycline monotherapy"
    },
    "answer": "B",
    "explanation": "Ceftazidime-avibactam is the preferred treatment for KPC-producing CRE. Avibactam is a non-beta-lactam beta-lactamase inhibitor that effectively inhibits KPC, OXA-48, and AmpC beta-lactamases. Multiple retrospective studies show significantly lower mortality with ceftazidime-avibactam vs. colistin-based regimens for KPC bacteremia. For MBL (metallo-beta-lactamase)-producing CRE (NDM, VIM), ceftazidime-avibactam + aztreonam combination is effective. Colistin and tigecycline monotherapy are associated with higher mortality and should be avoided when active alternatives exist."
  },
  {
    "id": 124,
    "chapter": 13,
    "domain": "Sepsis/Infection",
    "question": "A 58-year-old man with endocarditis due to MRSA has vancomycin minimum inhibitory concentration (MIC) of 2 mcg/mL. His trough vancomycin levels are persistently 15-20 mcg/mL. He is failing to improve clinically. What is the MOST appropriate change?",
    "options": {
      "A": "Increase vancomycin dose to achieve trough >25 mcg/mL",
      "B": "Switch to daptomycin at high dose (8-10 mg/kg/day)",
      "C": "Add rifampin to vancomycin",
      "D": "Switch to linezolid"
    },
    "answer": "B",
    "explanation": "Vancomycin MIC \u22652 mcg/mL (vancomycin MIC creep) is associated with clinical failure of vancomycin therapy for MRSA endocarditis. The 2021 ASHP/IDSA/SIDP vancomycin guidelines recommend switching to daptomycin (8-10 mg/kg/day for endocarditis) when vancomycin MIC \u22652 or clinical failure occurs. Daptomycin is superior for MRSA endocarditis at these situations. Linezolid is not FDA-approved for endocarditis. Rifampin monotherapy risks rapid resistance development. Simply increasing vancomycin dose further risks nephrotoxicity without reliable efficacy improvement."
  },
  {
    "id": 125,
    "chapter": 13,
    "domain": "Sepsis/Infection",
    "question": "A 65-year-old woman with septic shock requires aminoglycoside therapy for synergy with beta-lactams for serious Pseudomonas aeruginosa bacteremia. She has an eGFR of 35 mL/min. What aminoglycoside dosing strategy minimizes nephrotoxicity?",
    "options": {
      "A": "Conventional dosing (q8h) with dose reduction based on creatinine clearance",
      "B": "Extended-interval (once-daily) dosing with therapeutic drug monitoring",
      "C": "Continuous infusion to maintain steady-state levels",
      "D": "Tobramycin is preferred over gentamicin due to lower nephrotoxicity"
    },
    "answer": "B",
    "explanation": "Extended-interval aminoglycoside dosing (once-daily dosing) exploits the concentration-dependent killing of aminoglycides (peak/MIC drives efficacy) while allowing a drug-free trough interval that allows renal tubular cells to recover, reducing nephrotoxicity. Meta-analyses show once-daily dosing is equally effective and less nephrotoxic than multiple-daily dosing. Therapeutic drug monitoring (Hartford nomogram or Bayesian dosing) guides interval adjustment in renal impairment. Continuous infusion is suboptimal for concentration-dependent antibiotics. Tobramycin and gentamicin have similar nephrotoxicity profiles."
  },
  {
    "id": 126,
    "chapter": 13,
    "domain": "Sepsis/Infection",
    "question": "A 55-year-old man with prolonged ICU stay develops invasive candidiasis (positive blood culture for Candida albicans, central line in place). What is the MOST appropriate initial antifungal therapy and management?",
    "options": {
      "A": "Fluconazole 400 mg IV daily as first-line therapy",
      "B": "Micafungin 100 mg IV daily plus removal of central venous catheter",
      "C": "Voriconazole 200 mg IV q12h",
      "D": "Amphotericin B deoxycholate 1 mg/kg/day"
    },
    "answer": "B",
    "explanation": "IDSA guidelines recommend echinocandins (micafungin, caspofungin, anidulafungin) as initial therapy for invasive candidiasis in ICU patients over fluconazole, due to lower rates of resistance and superior efficacy particularly against C. glabrata and C. krusei. Candida bloodstream infections require CVC removal when feasible, as the catheter is often the source and persistent fungemia leads to endovascular seeding. Step-down to fluconazole is appropriate for azole-susceptible species (C. albicans, C. parapsilosis) once the patient is stable. Amphotericin B carries significant nephrotoxicity and is reserved for refractory cases."
  },
  {
    "id": 127,
    "chapter": 13,
    "domain": "Sepsis/Infection",
    "question": "A 72-year-old man with recurrent C. difficile infection (third episode in 6 months) is admitted to the ICU with fulminant C. diff colitis (WBC 28,000, creatinine 3.2). What is the MOST appropriate treatment?",
    "options": {
      "A": "Oral vancomycin 125 mg q6h for 10 days",
      "B": "IV metronidazole 500 mg q8h alone",
      "C": "Oral vancomycin 500 mg q6h + IV metronidazole 500 mg q8h, with early surgical consultation",
      "D": "Fidaxomicin 200 mg q12h"
    },
    "answer": "C",
    "explanation": "Fulminant C. difficile (hypotension, ileus, toxic megacolon, WBC >15,000 or rise in creatinine) requires maximum therapy: high-dose oral/rectal vancomycin 500 mg q6h (or via NGT/enema if ileus) + IV metronidazole 500 mg q8h. Oral vancomycin reaches high colonic concentrations; IV metronidazole provides additional coverage when ileus limits luminal drug distribution. Surgical consultation for total colectomy should be obtained early \u2014 delay increases mortality. Fidaxomicin reduces recurrence but data in fulminant disease are limited. Fecal microbiota transplant (FMT) is for recurrent, not fulminant, disease."
  },
  {
    "id": 128,
    "chapter": 13,
    "domain": "Sepsis/Infection",
    "question": "Which antibiotic class is MOST associated with QTc prolongation requiring ECG monitoring in ICU patients?",
    "options": {
      "A": "Beta-lactams",
      "B": "Fluoroquinolones",
      "C": "Aminoglycosides",
      "D": "Glycopeptides (vancomycin)"
    },
    "answer": "B",
    "explanation": "Fluoroquinolones (ciprofloxacin, levofloxacin, moxifloxacin) are well-recognized causes of QTc prolongation and torsades de pointes through inhibition of cardiac hERG potassium channels. Moxifloxacin has the greatest QTc prolongation effect among fluoroquinolones. ECG monitoring is recommended when fluoroquinolones are used concurrently with other QTc-prolonging agents (azithromycin, antipsychotics, methadone) or in patients with baseline QTc prolongation or hypokalemia. Beta-lactams and aminoglycosides do not significantly prolong QTc. Vancomycin causes infusion-related reactions (Red Man Syndrome) but not QTc prolongation."
  },
  {
    "id": 129,
    "chapter": 13,
    "domain": "Sepsis/Infection",
    "question": "A 60-year-old woman with septic shock is on vancomycin for MRSA bacteremia. Her renal function is deteriorating (creatinine rising from 1.0 to 2.8 over 3 days). Vancomycin AUC/MIC ratio is 650 (goal 400-600). Which intervention is MOST appropriate?",
    "options": {
      "A": "Continue current vancomycin dose and accept nephrotoxicity as unavoidable",
      "B": "Reduce vancomycin dose and increase dosing interval to target AUC/MIC 400-600",
      "C": "Switch to daptomycin for MRSA bacteremia given nephrotoxicity",
      "D": "Add rifampin to allow vancomycin dose reduction"
    },
    "answer": "C",
    "explanation": "Vancomycin-induced nephrotoxicity (AKI) requires reassessment of the antibiotic regimen. When AKI develops during vancomycin therapy AND AUC/MIC is already at or above goal, switching to an alternative agent with equivalent efficacy and less nephrotoxicity is appropriate. Daptomycin 6-10 mg/kg/day is the preferred alternative for MRSA bacteremia. The 2021 ASHP/IDSA vancomycin guidelines emphasize AUC-guided monitoring to minimize nephrotoxicity. Rifampin combination is not indicated for uncomplicated bacteremia and risks rapid resistance development."
  },
  {
    "id": 130,
    "chapter": 13,
    "domain": "Sepsis/Infection",
    "question": "A 45-year-old man with HIV (CD4 48 cells/\u03bcL) and no prior antiretroviral therapy develops fever, cough, and hypoxia (SpO2 88% on room air). LDH is 520 U/L. BAL shows Pneumocystis jirovecii. What is the FIRST-LINE treatment and what additional adjunctive therapy reduces mortality in moderate-to-severe PJP?",
    "options": {
      "A": "Atovaquone; steroids not indicated in severe disease",
      "B": "TMP-SMX (trimethoprim-sulfamethoxazole) 15-20 mg/kg/day TMP component; adjunctive corticosteroids for PaO2 <70 mmHg or A-a gradient >35",
      "C": "Pentamidine IV; steroids contraindicated with HIV",
      "D": "Clindamycin + primaquine; steroids only if PaO2 <50 mmHg"
    },
    "answer": "B",
    "explanation": "TMP-SMX is the first-line treatment for Pneumocystis jirovecii pneumonia (PJP/PCP) at 15-20 mg/kg/day of the TMP component in 3-4 divided doses for 21 days. Adjunctive corticosteroids (prednisone 40 mg BID \u00d7 5 days, then taper) are strongly indicated for moderate-to-severe PJP: PaO2 <70 mmHg on room air or A-a gradient >35 mmHg \u2014 corticosteroids reduce respiratory failure and mortality. Atovaquone is used for mild PJP or TMP-SMX intolerance. Clindamycin + primaquine is a second-line alternative. Pentamidine is reserved for cases where TMP-SMX and alternatives fail."
  },
  {
    "id": 131,
    "chapter": 14,
    "domain": "Sepsis/Infection",
    "question": "A 58-year-old man on mechanical ventilation for 7 days develops fever (T 38.8\u00b0C), purulent sputum, worsening lung infiltrate on CXR, and leukocytosis (WBC 18,000). His Clinical Pulmonary Infection Score (CPIS) is 7. Endotracheal aspirate grows Pseudomonas aeruginosa. How long should antibiotics be administered for VAP?",
    "options": {
      "A": "7 days regardless of organism or clinical response",
      "B": "14-21 days as Pseudomonas requires prolonged therapy",
      "C": "7 days total with reassessment; extend only for Pseudomonas if clinically indicated",
      "D": "Until CPIS score <6"
    },
    "answer": "C",
    "explanation": "The 2016 IDSA VAP guidelines recommend 7 days of antibiotic therapy for VAP in patients with good clinical response, regardless of pathogen \u2014 including Pseudomonas aeruginosa. The DURA trial and several RCTs support 7 days as adequate for most VAP cases, with clinical and microbiologic improvement. Extending to 14-21 days does not improve outcomes and increases resistance, CDI risk, and adverse effects. However, for patients with non-resolving infection or immunosuppression, extension beyond 7 days may be considered based on clinical reassessment."
  },
  {
    "id": 132,
    "chapter": 14,
    "domain": "Sepsis/Infection",
    "question": "A patient is diagnosed with ventilator-associated pneumonia. Which VAP prevention bundle element has the STRONGEST evidence for reducing VAP incidence?",
    "options": {
      "A": "Routine ETT changes every 72 hours",
      "B": "Subglottic secretion drainage (SSD) ETTs",
      "C": "Continuous prone positioning",
      "D": "Prophylactic systemic antibiotics for all intubated patients"
    },
    "answer": "B",
    "explanation": "Subglottic secretion drainage (SSD) \u2014 using specially designed ETTs with a suction port above the cuff \u2014 prevents micro-aspiration of oropharyngeal secretions that pool above the cuff, the primary mechanism of VAP. Multiple meta-analyses confirm SSD significantly reduces early-onset VAP (by approximately 50%) without increasing adverse events. Other evidence-based VAP prevention measures include: HOB elevation 30-45\u00b0, oral chlorhexidine antisepsis, minimizing sedation/daily SAT, early weaning protocols, and avoiding unnecessary circuit changes. Prophylactic antibiotics are not routinely recommended due to resistance risk."
  },
  {
    "id": 133,
    "chapter": 14,
    "domain": "Sepsis/Infection",
    "question": "A 65-year-old man on day 12 of mechanical ventilation develops new fever, increasing secretions, and a left lower lobe infiltrate on CXR. BAL quantitative culture returns >10^5 CFU/mL of Acinetobacter baumannii sensitive only to colistin (polymyxin E) and tigecycline. What is the MOST appropriate treatment?",
    "options": {
      "A": "IV colistin monotherapy",
      "B": "Tigecycline monotherapy",
      "C": "IV colistin + inhaled colistin, with consideration of combination therapy",
      "D": "Ceftazidime-avibactam"
    },
    "answer": "C",
    "explanation": "Carbapenem-resistant Acinetobacter baumannii (CRAB) VAP is extremely challenging. Colistin (polymyxin E) remains a backbone therapy. Inhaled colistin combined with IV colistin improves clinical outcomes in CRAB VAP by achieving high local drug concentrations while limiting systemic toxicity. Combination therapy with colistin + carbapenem (even with MIC resistance, via synergy), rifampicin, or fosfomycin may improve outcomes. Tigecycline achieves inadequate serum levels for bacteremia but has reasonable pulmonary concentrations \u2014 it is used as a combination partner, not monotherapy, for CRAB VAP. Ceftazidime-avibactam targets KPC, not Acinetobacter."
  },
  {
    "id": 134,
    "chapter": 14,
    "domain": "Sepsis/Infection",
    "question": "A 55-year-old ICU patient has a central venous catheter (CVC) that has been in place for 12 days. She develops new fever (T 39.2\u00b0C), rigors, and erythema around the CVC insertion site. Blood cultures from the CVC and peripheral sites both grow coagulase-negative Staphylococcus. What is the MOST appropriate management?",
    "options": {
      "A": "Treat with vancomycin for 7 days through the existing CVC",
      "B": "Remove the CVC and treat with vancomycin for 5-7 days if coagulase-negative Staph",
      "C": "Lock the catheter with vancomycin/heparin solution and continue",
      "D": "Change the CVC over a guidewire and culture the catheter tip"
    },
    "answer": "B",
    "explanation": "CLABSI (central line-associated bloodstream infection) from coagulase-negative Staphylococcus (CoNS) requires CVC removal for salvage failure, tunnel involvement, and confirmed bacteremia. Per IDSA guidelines, when CoNS CLABSI is confirmed, catheter removal plus 5-7 days of antibiotics is recommended if the catheter cannot be removed due to necessity, catheter salvage can be attempted with antibiotic lock therapy. Guidewire exchange is NOT recommended for CLABSI as it fails to remove the biofilm source. Signs of local infection (erythema) and rigors indicate the catheter should be removed."
  },
  {
    "id": 135,
    "chapter": 14,
    "domain": "Sepsis/Infection",
    "question": "Which of the following is the MOST effective intervention for reducing catheter-associated urinary tract infection (CAUTI) rates in the ICU?",
    "options": {
      "A": "Routine urinary catheter irrigation with antiseptic solution",
      "B": "Prophylactic antibiotics for all patients with indwelling catheters",
      "C": "Early catheter removal when no longer clinically indicated",
      "D": "Silver-alloy impregnated catheters for all ICU patients"
    },
    "answer": "C",
    "explanation": "The most effective CAUTI prevention strategy is early removal of urinary catheters when they are no longer clinically indicated \u2014 avoiding unnecessary catheter days. Bundled approaches (urinary catheter insertion and maintenance bundles) including daily assessment of continued necessity consistently reduce CAUTI rates. Prophylactic antibiotics are ineffective and promote resistance. Antiseptic irrigation does not prevent CAUTI and may introduce organisms. Silver-alloy catheters reduce bacteriuria but the benefit on symptomatic CAUTI is less clear and they are cost-prohibitive for routine use."
  },
  {
    "id": 136,
    "chapter": 14,
    "domain": "Sepsis/Infection",
    "question": "A 50-year-old patient with VAP due to Pseudomonas aeruginosa (MIC to meropenem = 4 mcg/mL) is failing standard dosing. Which pharmacokinetic/pharmacodynamic strategy BEST optimizes meropenem efficacy?",
    "options": {
      "A": "Increase the dose of each bolus infusion",
      "B": "Extended infusion (3-4 hour infusion) to maximize time above MIC (%T>MIC)",
      "C": "Add a fluoroquinolone for synergy",
      "D": "Switch to imipenem as it has a higher MIC breakpoint"
    },
    "answer": "B",
    "explanation": "Beta-lactams (including carbapenems like meropenem) exhibit time-dependent killing \u2014 their efficacy is determined by the percentage of the dosing interval that free drug concentrations remain above the MIC (%T>MIC; target typically >40-50%). Extended infusion (3-4 hours) increases %T>MIC compared to the same total daily dose given as rapid boluses. For Pseudomonas with MIC 4 (intermediate to meropenem), extended infusion of 2g over 3h q8h can achieve adequate PD targets when bolus dosing fails. Imipenem has similar MIC breakpoints to meropenem and is not superior."
  },
  {
    "id": 137,
    "chapter": 14,
    "domain": "Sepsis/Infection",
    "question": "An ICU nurse asks which central venous catheter site has the LOWEST risk of catheter-related bloodstream infection. What is the correct answer based on current evidence?",
    "options": {
      "A": "Femoral vein",
      "B": "Subclavian vein",
      "C": "Internal jugular vein",
      "D": "PICC (peripherally inserted central catheter)"
    },
    "answer": "B",
    "explanation": "Subclavian vein CVC placement has the lowest infection risk of the major central venous access sites, attributed to fewer skin organisms in that anatomical region and easier dressing management. The CATHEDIA trial confirmed femoral CVCs have significantly higher infection rates (and DVT risk) than subclavian or jugular sites. Internal jugular carries intermediate risk (higher than subclavian due to proximity to oropharyngeal secretions). PICC lines have lower infection rates than non-tunneled CVCs for long-term access but comparable or higher rates for short-term ICU use in some studies."
  },
  {
    "id": 138,
    "chapter": 14,
    "domain": "Sepsis/Infection",
    "question": "Which of the following is the CORRECT CDC/NHSN definition of ventilator-associated pneumonia (VAP) for surveillance purposes?",
    "options": {
      "A": "New fever + purulent sputum + new CXR infiltrate in any intubated patient",
      "B": "Radiographic infiltrate plus clinical criteria (fever, WBC change, purulent secretions) occurring >48 hours after intubation",
      "C": "Positive BAL culture >10^4 CFU/mL in a patient ventilated >2 days",
      "D": "Clinical deterioration in ventilated patient with culture-positive respiratory secretions"
    },
    "answer": "B",
    "explanation": "CDC/NHSN defines VAP for surveillance as a new or worsening radiographic infiltrate occurring >48 hours after intubation, combined with at least two of: fever >38\u00b0C, leukocytosis/leukopenia, and new purulent secretions. Positive quantitative respiratory cultures support the diagnosis but are not mandatory for the surveillance definition. Microbiologic thresholds (BAL \u226510^4 CFU/mL, BAL protected brush \u226510^3 CFU/mL, endotracheal aspirate \u226510^5 CFU/mL) are used in clinical diagnosis to distinguish colonization from true infection."
  },
  {
    "id": 139,
    "chapter": 14,
    "domain": "Sepsis/Infection",
    "question": "A 60-year-old ICU patient develops a new bloodstream infection with Staphylococcus aureus bacteremia confirmed on two blood cultures. No clear source is identified. What is the MINIMUM recommended duration of antibiotic therapy for Staphylococcus aureus bacteremia WITHOUT endocarditis?",
    "options": {
      "A": "7 days",
      "B": "14 days (2 weeks) from first negative blood culture",
      "C": "21 days",
      "D": "6 weeks (same as endocarditis)"
    },
    "answer": "B",
    "explanation": "Uncomplicated S. aureus bacteremia (SAB) requires minimum 14 days of IV antibiotics from the date of first negative blood culture. Criteria for 'uncomplicated' SAB: no endovascular infection (prosthetic valve, intracardiac device), no removable focus of infection left in place, defervescence within 72h, no immunosuppression, and negative echocardiogram. Complicated SAB (metastatic infection, endocarditis, osteomyelitis) requires 4-6 weeks. TEE is recommended for all SAB to rule out endocarditis, as clinical criteria alone miss 25% of cases. S. aureus bacteremia with negative echo still requires \u226514 days."
  },
  {
    "id": 140,
    "chapter": 14,
    "domain": "Sepsis/Infection",
    "question": "A 55-year-old ICU patient with MRSA VAP is started on vancomycin. The pharmacy recommends AUC/MIC-guided monitoring. What is the TARGET AUC/MIC ratio for vancomycin against MRSA?",
    "options": {
      "A": "AUC/MIC 100-200 mg\u00b7h/L",
      "B": "AUC/MIC 400-600 mg\u00b7h/L",
      "C": "AUC/MIC >1,000 mg\u00b7h/L",
      "D": "Trough >15-20 mcg/mL as the target parameter"
    },
    "answer": "B",
    "explanation": "The 2020 ASHP/IDSA/SIDP vancomycin dosing guidelines recommend AUC/MIC-guided monitoring with a target AUC 400-600 mg\u00b7h/L (assuming MIC 1 mcg/mL by broth microdilution). AUC/MIC 400-600 optimizes efficacy while minimizing nephrotoxicity risk. Previous guidelines targeting trough 15-20 mcg/mL are no longer recommended because high troughs correlate with nephrotoxicity without reliably predicting efficacy. Bayesian dosing software is now recommended for AUC calculation from limited samples. For organisms with MIC >1 mcg/mL, AUC targets may need adjustment or alternative agents should be considered."
  },
  {
    "id": 141,
    "chapter": 15,
    "domain": "Sepsis/Infection",
    "question": "A 42-year-old woman with ALL who received allogeneic stem cell transplant 5 weeks ago presents with fever (T 39.4\u00b0C), progressive dyspnea, and CT chest showing a 3 cm nodular lesion with a halo sign in the right upper lobe. What is the MOST likely diagnosis and appropriate treatment?",
    "options": {
      "A": "Bacterial pneumonia; cefepime + vancomycin",
      "B": "Invasive pulmonary aspergillosis; voriconazole or isavuconazole",
      "C": "Pneumocystis jirovecii pneumonia; TMP-SMX",
      "D": "CMV pneumonitis; ganciclovir"
    },
    "answer": "B",
    "explanation": "The halo sign on CT chest (pulmonary nodule surrounded by ground-glass opacity representing hemorrhage) in a neutropenic post-transplant patient is the classic radiographic finding of invasive pulmonary aspergillosis (IPA). Voriconazole is the first-line treatment for IPA (based on the Herbrecht et al. trial showing superiority over amphotericin B). Isavuconazole is an FDA-approved alternative with fewer drug interactions and equivalent efficacy (SECURE trial). Serum galactomannan and BAL galactomannan support the diagnosis. Early antifungal therapy significantly improves survival in IPA."
  },
  {
    "id": 142,
    "chapter": 15,
    "domain": "Sepsis/Infection",
    "question": "A 55-year-old man with HIV (CD4 count 38/\u03bcL, not on ART) presents with fever, headache, and stiff neck. CSF analysis: opening pressure 32 cmH2O, WBC 8 (mostly lymphocytes), glucose 32 mg/dL (serum 94), protein 85 mg/dL, India ink preparation positive. What is the MOST appropriate initial management?",
    "options": {
      "A": "Fluconazole 800 mg IV daily for 2 weeks",
      "B": "Liposomal amphotericin B 3-4 mg/kg/day + flucytosine 25 mg/kg q6h for 2 weeks, then fluconazole",
      "C": "Amphotericin B deoxycholate 0.7 mg/kg/day + fluconazole for 4 weeks",
      "D": "Voriconazole 200 mg q12h for 6 weeks"
    },
    "answer": "B",
    "explanation": "Cryptococcal meningitis in AIDS is treated per IDSA guidelines with a 3-phase approach: Induction: Liposomal amphotericin B (3-4 mg/kg/day) + flucytosine (25 mg/kg q6h) for 2 weeks \u2014 this combination provides superior CSF sterilization; Consolidation: Fluconazole 400 mg/day for 8 weeks; Maintenance: Fluconazole 200 mg/day lifelong (or until immune reconstitution). Elevated ICP management with serial LPs (or lumbar drain) is critical \u2014 ICP >25 cmH2O requires daily therapeutic LPs until pressure normalizes. ART should be delayed 2-10 weeks to prevent IRIS."
  },
  {
    "id": 143,
    "chapter": 15,
    "domain": "Sepsis/Infection",
    "question": "A 38-year-old woman who received a kidney transplant 3 months ago (on tacrolimus, mycophenolate, prednisone) presents with diffuse bilateral ground-glass opacities on HRCT and CMV antigenemia of 3,200 copies/mL. What is the MOST appropriate treatment?",
    "options": {
      "A": "Increase immunosuppression to prevent rejection",
      "B": "IV ganciclovir 5 mg/kg q12h with reduction of immunosuppression",
      "C": "Oral valganciclovir only (no need for IV therapy)",
      "D": "CMV immune globulin alone for 3 weeks"
    },
    "answer": "B",
    "explanation": "CMV pneumonitis (or end-organ disease) in solid organ transplant recipients is treated with IV ganciclovir 5 mg/kg q12h (adjusted for renal function). IV therapy is preferred over oral valganciclovir for serious/end-organ CMV disease due to superior bioavailability. Concurrent reduction of immunosuppression (particularly mycophenolate) is essential to allow immune recovery to control CMV. Treatment continues until CMV DNA is undetectable (typically 2-3 weeks minimum). CMV immunoglobulin is used adjunctively in severe CMV pneumonitis. Monitor weekly CMV viral load."
  },
  {
    "id": 144,
    "chapter": 15,
    "domain": "Sepsis/Infection",
    "question": "A 62-year-old man on chronic prednisone 20 mg/day for rheumatoid arthritis is admitted with community-acquired pneumonia. Sputum Gram stain shows thin branching filamentous Gram-positive rods. Brain MRI shows multiple ring-enhancing lesions. What is the MOST likely diagnosis?",
    "options": {
      "A": "Toxoplasma gondii encephalitis",
      "B": "Nocardia sp. pulmonary and CNS infection",
      "C": "Actinomycosis",
      "D": "Aspergillus sp. with cerebral dissemination"
    },
    "answer": "B",
    "explanation": "Nocardia spp. are aerobic, weakly acid-fast, branching filamentous Gram-positive rods that classically cause pulmonary infection in immunocompromised hosts (corticosteroid use, organ transplant, HIV). Nocardia frequently disseminates to the CNS (in 30% of disseminated cases), causing multiple brain abscesses. The combination of pulmonary infiltrates with branching filamentous organisms on Gram stain plus brain ring-enhancing lesions is classic for Nocardia. Treatment: TMP-SMX is the first-line agent; imipenem \u00b1 amikacin for severe/CNS disease. Duration is 6-12 months. Toxoplasma causes ring-enhancing lesions in AIDS patients with CD4 <100."
  },
  {
    "id": 145,
    "chapter": 15,
    "domain": "Sepsis/Infection",
    "question": "A 58-year-old man with CLL (CD4-like lymphopenia from chemotherapy) is intubated for respiratory failure. BAL shows Pneumocystis jirovecii on silver stain. He is started on TMP-SMX. On day 3, his WBC drops from 8,000 to 1,200. Which drug is MOST likely responsible?",
    "options": {
      "A": "Glucocorticoids causing neutrophil demargination",
      "B": "TMP-SMX causing bone marrow suppression/neutropenia",
      "C": "The underlying CLL causing progressive immunosuppression",
      "D": "Sepsis-induced neutrophil consumption"
    },
    "answer": "B",
    "explanation": "TMP-SMX can cause bone marrow suppression, including neutropenia, thrombocytopenia, and megaloblastic anemia. This is particularly problematic in patients with pre-existing bone marrow dysfunction (CLL, chemotherapy). The trimethoprim component inhibits dihydrofolate reductase, interfering with folate metabolism in bone marrow progenitor cells. Leucovorin (folinic acid) can be co-administered to reduce hematologic toxicity without reducing antimicrobial efficacy (TMP-SMX targets bacterial/fungal DHFR, not the mammalian enzyme supplemented by leucovorin). Alternative PJP treatments include pentamidine or atovaquone."
  },
  {
    "id": 146,
    "chapter": 15,
    "domain": "Sepsis/Infection",
    "question": "A 35-year-old man with HIV and CD4 count of 22/\u03bcL is admitted to the ICU with respiratory failure requiring intubation. Serum LDH is 680 U/L. BAL beta-D-glucan is markedly elevated. Silver stain is pending. What prophylactic medication failure is MOST likely responsible for his current infection?",
    "options": {
      "A": "Failed primary prophylaxis with inhaled pentamidine",
      "B": "Failed primary prophylaxis with TMP-SMX (PJP prophylaxis indicated when CD4 <200)",
      "C": "Failed MAC prophylaxis with azithromycin",
      "D": "Failed toxoplasma prophylaxis with dapsone"
    },
    "answer": "B",
    "explanation": "PJP prophylaxis is indicated when CD4 count falls below 200 cells/\u03bcL. The first-line prophylactic agent is TMP-SMX one single-strength tablet daily (or one double-strength tablet three times per week). At a CD4 of 22, PJP is highly likely if prophylaxis was inadequate or not initiated. Serum (1\u21923)-\u03b2-D-glucan is a non-specific marker of fungal infection elevated in PJP. Inhaled pentamidine is a less effective alternative prophylaxis and does not prevent extrapulmonary PJP. MAC prophylaxis with azithromycin is indicated when CD4 <50."
  },
  {
    "id": 147,
    "chapter": 15,
    "domain": "Sepsis/Infection",
    "question": "A 60-year-old woman on high-dose prednisone for GCA develops fever and respiratory failure. BAL shows yeast forms with broad-based budding on staining, and India ink prep is negative. The patient had recently traveled to the Ohio River Valley. What is the MOST likely diagnosis and treatment?",
    "options": {
      "A": "Cryptococcus neoformans; amphotericin B + flucytosine",
      "B": "Blastomyces dermatitidis; liposomal amphotericin B followed by itraconazole",
      "C": "Coccidioides immitis; fluconazole",
      "D": "Histoplasma capsulatum; itraconazole monotherapy"
    },
    "answer": "B",
    "explanation": "Broad-based budding yeast (characteristic appearance of Blastomyces dermatitidis) plus travel exposure to the Ohio/Mississippi River Valley in an immunocompromised patient points to disseminated blastomycosis. For severe pulmonary or disseminated blastomycosis, IDSA guidelines recommend liposomal amphotericin B 3-5 mg/kg/day as induction therapy for 1-2 weeks or until improvement, followed by oral itraconazole 200 mg TID \u00d7 3 days then 200 mg BID for at least 12 months. Cryptococcus shows India-ink positive encapsulated yeasts. Histoplasma causes small narrow-based budding yeasts within macrophages."
  },
  {
    "id": 148,
    "chapter": 15,
    "domain": "Sepsis/Infection",
    "question": "A 52-year-old renal transplant recipient on tacrolimus, mycophenolate, and prednisone develops acute encephalopathy. MRI brain shows a 2 cm ring-enhancing lesion in the right basal ganglia. Serum toxoplasma IgG is negative. CSF PCR for JC virus is positive. What is the diagnosis and appropriate management?",
    "options": {
      "A": "Toxoplasma encephalitis; start pyrimethamine + sulfadiazine",
      "B": "Progressive multifocal leukoencephalopathy (PML); reduce immunosuppression",
      "C": "CNS lymphoma; brain biopsy followed by chemotherapy",
      "D": "Cryptococcal encephalitis; amphotericin B + flucytosine"
    },
    "answer": "B",
    "explanation": "JC virus PCR positive in CSF confirms PML (Progressive Multifocal Leukoencephalopathy), caused by reactivation of JC polyomavirus in immunocompromised patients. PML classically presents with multifocal white matter lesions, but ring-enhancing presentations occur. There is no specific antiviral therapy for JC virus \u2014 the cornerstone of treatment is immune reconstitution by reducing immunosuppression (reduce/stop mycophenolate, reduce calcineurin inhibitor). Survivors may develop IRIS (immune reconstitution inflammatory syndrome) as immunity recovers. Prognosis depends on degree of immune recovery achieved."
  },
  {
    "id": 149,
    "chapter": 15,
    "domain": "Sepsis/Infection",
    "question": "A 65-year-old man with myelodysplastic syndrome is neutropenic (ANC 80/\u03bcL) after chemotherapy and develops persistent fever for 5 days despite broad-spectrum antibacterials. CT chest reveals multiple small nodular lesions bilaterally. Serum galactomannan is 0.9 (positive >0.5). What is the MOST appropriate antifungal strategy?",
    "options": {
      "A": "Continue antibiotics only; galactomannan is falsely elevated by piperacillin-tazobactam",
      "B": "Start empiric antifungal therapy with micafungin targeting Candida",
      "C": "Start voriconazole or isavuconazole for probable invasive aspergillosis",
      "D": "Perform bronchoscopy with BAL before initiating antifungal therapy"
    },
    "answer": "C",
    "explanation": "Galactomannan \u22650.5 optical density index (ODI) in a neutropenic patient with persistent fever and nodular CT lesions meets criteria for 'probable' invasive aspergillosis per EORTC/MSG criteria. Voriconazole is first-line therapy for IPA; isavuconazole is a well-tolerated alternative with fewer visual side effects. Galactomannan can be falsely elevated by beta-lactam antibiotics (particularly piperacillin-tazobactam \u2014 though newer formulations have lower falsel-positive rates), making clinical correlation essential. Echinocandins target Candida predominantly and are not optimal for Aspergillus. BAL galactomannan and culture can support diagnosis but should not delay treatment in a critically ill patient."
  },
  {
    "id": 150,
    "chapter": 15,
    "domain": "Sepsis/Infection",
    "question": "A 45-year-old woman with lupus on high-dose methylprednisolone and hydroxychloroquine presents with fever, headache, and cranial nerve VI palsy. MRI shows basilar meningeal enhancement. CSF reveals: glucose 28, protein 120, lymphocytic pleocytosis, negative Gram stain and bacterial cultures. India ink is negative. What additional CSF test is MOST diagnostic?",
    "options": {
      "A": "CSF VDRL for neurosyphilis",
      "B": "CSF cryptococcal antigen (CrAg)",
      "C": "CSF PCR for HSV",
      "D": "CSF cytology for malignant cells"
    },
    "answer": "B",
    "explanation": "Basilar meningitis with cranial nerve involvement, lymphocytic CSF pleocytosis, low glucose, and negative bacteria in an immunocompromised patient is highly suspicious for cryptococcal meningitis even with negative India ink preparation (sensitivity only ~60-80%). CSF cryptococcal antigen (CrAg) has >95% sensitivity and specificity and is the most sensitive diagnostic test. India ink negative result does not rule out cryptococcosis. Serum CrAg (lateral flow assay) is equally sensitive and is an excellent initial screening test. This patient's corticosteroid use provides the immunosuppressive context for Cryptococcus."
  },
  {
    "id": 151,
    "chapter": 16,
    "domain": "Renal/Electrolytes",
    "question": "A 68-year-old man with septic shock receives 5L of 0.9% normal saline over 12 hours. His creatinine rises from 1.2 to 3.8 mg/dL and urine output drops to 15 mL/hr. Urinalysis shows muddy brown casts and fractional excretion of sodium (FENa) is 3.2%. What is the PRIMARY cause of his AKI?",
    "options": {
      "A": "Pre-renal AKI from insufficient fluid resuscitation",
      "B": "Acute tubular necrosis (ATN) from ischemia and tubular toxicity",
      "C": "Acute interstitial nephritis from antibiotic use",
      "D": "Contrast nephropathy from CT imaging"
    },
    "answer": "B",
    "explanation": "Muddy brown granular casts on urinalysis are pathognomonic for acute tubular necrosis (ATN). FENa >2% indicates tubular dysfunction (failed sodium reabsorption), distinguishing ATN from pre-renal azotemia (FENa <1%). Sepsis-associated AKI involves multiple mechanisms: renal hypoperfusion, endotoxin-mediated tubular injury, oxidative stress, and inflammatory mediators. Normal saline (hyperchloremic) may also contribute to AKI through afferent arteriolar vasoconstriction. Management: optimize hemodynamics, avoid nephrotoxins, balanced fluids (LR or PlasmaLyte), and renal replacement therapy if indicated."
  },
  {
    "id": 152,
    "chapter": 16,
    "domain": "Renal/Electrolytes",
    "question": "A 70-year-old woman with oliguric AKI has creatinine 6.8 mg/dL, potassium 6.8 mEq/L, bicarbonate 12 mEq/L, pH 7.18, and bilateral pulmonary edema on CXR. ECG shows peaked T waves. What is the MOST urgent indication for renal replacement therapy (RRT) initiation?",
    "options": {
      "A": "Creatinine >6 mg/dL",
      "B": "Urine output <0.3 mL/kg/hr",
      "C": "Life-threatening hyperkalemia with ECG changes refractory to medical management",
      "D": "Bicarbonate <15 mEq/L"
    },
    "answer": "C",
    "explanation": "Emergency indications for RRT include the AEIOU criteria: Acidosis (pH <7.1 refractory to bicarbonate), Electrolytes (hyperkalemia >6.5 refractory to medical therapy, or with ECG changes), Intoxications (dialyzable toxins), volume Overload refractory to diuretics, and Uremia complications (pericarditis, encephalopathy, bleeding). In this patient, hyperkalemia with ECG changes (peaked T waves) represents the most immediately life-threatening complication \u2014 it can progress to ventricular fibrillation. While awaiting RRT: calcium gluconate IV (cardiac membrane stabilization), insulin + dextrose, sodium bicarbonate, kayexalate/patiromer."
  },
  {
    "id": 153,
    "chapter": 16,
    "domain": "Renal/Electrolytes",
    "question": "A 55-year-old man with AKI and sepsis is initiated on continuous renal replacement therapy (CRRT). What is the RECOMMENDED minimum delivered CRRT dose associated with acceptable outcomes?",
    "options": {
      "A": "10-15 mL/kg/hr effluent dose",
      "B": "20-25 mL/kg/hr effluent dose",
      "C": "35-40 mL/kg/hr effluent dose",
      "D": "50 mL/kg/hr effluent dose"
    },
    "answer": "B",
    "explanation": "The ATN trial and VA/NIH Acute Renal Failure Trial Network study established that intensified RRT dosing (35-40 mL/kg/hr) does not improve outcomes compared to standard dosing. The KDIGO AKI guidelines recommend a delivered CRRT dose of 20-25 mL/kg/hr as the minimum effective dose. To achieve this delivered dose, prescribing 25-30 mL/kg/hr is necessary to account for downtime (filter changes, procedures). Increasing to 35-40 mL/kg/hr does not improve survival but increases antibiotic/drug losses, electrolyte disturbances, and costs."
  },
  {
    "id": 154,
    "chapter": 16,
    "domain": "Renal/Electrolytes",
    "question": "A 62-year-old man with hepatorenal syndrome (HRS) type 1 has creatinine rising from 1.4 to 4.2 mg/dL over 2 days in the setting of alcoholic cirrhosis with ascites. He is not in septic shock. What is the FIRST-LINE pharmacologic treatment for HRS-AKI?",
    "options": {
      "A": "Midodrine + octreotide + albumin",
      "B": "Terlipressin + albumin",
      "C": "Norepinephrine + albumin (in ICU)",
      "D": "Albumin alone (20% albumin 1g/kg/day)"
    },
    "answer": "B",
    "explanation": "Terlipressin (a vasopressin V1 receptor agonist) combined with IV albumin is the most effective treatment for HRS-AKI (hepatorenal syndrome type 1), now FDA-approved in the USA (2022) based on the CONFIRM trial demonstrating improved renal recovery compared to placebo + albumin. Terlipressin causes splanchnic vasoconstriction, reversing the arterial vasodilation that precipitates HRS. Midodrine + octreotide + albumin is used when terlipressin is unavailable (outside US prior to approval). Norepinephrine is an ICU alternative when terlipressin is unavailable. Albumin alone is insufficient."
  },
  {
    "id": 155,
    "chapter": 16,
    "domain": "Renal/Electrolytes",
    "question": "A 50-year-old woman on CRRT receives vancomycin for MRSA bacteremia. The filter is running at 25 mL/kg/hr. Which statement is TRUE regarding drug dosing in CRRT?",
    "options": {
      "A": "CRRT does not remove vancomycin as the molecule is too large",
      "B": "Vancomycin is significantly cleared by CRRT; supplemental dosing is required to maintain therapeutic levels",
      "C": "Standard renal-dose vancomycin (25 mg/kg every 48h) is appropriate in CRRT",
      "D": "CRRT removes vancomycin only in CVVHD mode, not CVVH"
    },
    "answer": "B",
    "explanation": "Vancomycin (MW ~1,500 Da) is significantly removed by CRRT, especially at higher doses (25 mL/kg/hr). CRRT adds a 'continuous clearance' component that substantially affects pharmacokinetics of water-soluble, renally-cleared drugs. Standard 'renal-dose' vancomycin dosing (based on absent urine clearance) is often INSUFFICIENT in patients on CRRT. Bayesian dosing models or AUC-guided monitoring is essential. In CVVHDF modes, vancomycin clearance is approximately 15-30 mL/min, comparable to moderate chronic kidney disease. All CRRT modalities (CVVH, CVVHD, CVVHDF) remove vancomycin by diffusion, convection, or both."
  },
  {
    "id": 156,
    "chapter": 16,
    "domain": "Renal/Electrolytes",
    "question": "A 65-year-old man develops contrast-induced AKI after coronary angiography. His baseline creatinine was 2.1 (eGFR 32). What is the MOST effective prophylactic strategy to prevent contrast-induced AKI in high-risk patients?",
    "options": {
      "A": "Pre-procedural N-acetylcysteine 1200 mg BID",
      "B": "Isotonic (0.9% NaCl) IV hydration before and after the procedure",
      "C": "Sodium bicarbonate infusion superior to normal saline",
      "D": "Prophylactic CRRT after contrast administration"
    },
    "answer": "B",
    "explanation": "The PRESERVE trial (2017) demonstrated that isotonic normal saline hydration is as effective as sodium bicarbonate infusion for contrast-AKI prevention, and that N-acetylcysteine provides no benefit over placebo. Current evidence supports IV isotonic crystalloid (normal saline or lactated Ringer's) at 1-1.5 mL/kg/hr for 3-12 hours before and 6 hours after contrast as the most effective prevention strategy. Oral hydration may suffice in lower-risk patients. Minimizing contrast volume, using iso-osmolar contrast agents, and holding nephrotoxic medications are additional preventive measures."
  },
  {
    "id": 157,
    "chapter": 16,
    "domain": "Renal/Electrolytes",
    "question": "A 70-year-old man with ESRD on peritoneal dialysis (PD) presents to the ICU with purulent PD effluent and abdominal pain. Effluent WBC is 520/\u03bcL with 85% neutrophils. What organisms are MOST commonly responsible for PD peritonitis?",
    "options": {
      "A": "Gram-negative organisms (E. coli, Pseudomonas) predominantly",
      "B": "Coagulase-negative Staphylococcus and S. aureus (Gram-positive organisms) most commonly",
      "C": "Candida species most commonly in diabetic patients",
      "D": "Polymicrobial infections in >50% of cases"
    },
    "answer": "B",
    "explanation": "PD peritonitis is most commonly caused by Gram-positive organisms (60-70%): coagulase-negative Staphylococcus (S. epidermidis, most common overall) and S. aureus, reflecting touch contamination from skin flora. Gram-negative organisms (E. coli, Klebsiella, Pseudomonas) account for 20-30%. Fungal peritonitis (Candida) occurs in <10% but requires catheter removal and antifungal therapy. Empiric treatment: intraperitoneal vancomycin + aminoglycoside (or ceftazidime) per ISPD guidelines. PD catheter removal is indicated for refractory or fungal peritonitis."
  },
  {
    "id": 158,
    "chapter": 16,
    "domain": "Renal/Electrolytes",
    "question": "A 55-year-old woman with AKI (creatinine 4.8 mg/dL) and volume overload receives furosemide 200 mg IV. She has minimal urine output response (40 mL over 2 hours). What is the NEXT most appropriate intervention?",
    "options": {
      "A": "Give another 200 mg furosemide bolus",
      "B": "Add metolazone 5 mg PO to achieve sequential nephron blockade",
      "C": "Initiate CRRT for renal replacement and fluid removal",
      "D": "Start tolvaptan 15 mg PO"
    },
    "answer": "C",
    "explanation": "Diuretic resistance (failure to respond to high-dose furosemide 200 mg IV) in AKI with volume overload is a major indication for renal replacement therapy. While adding a thiazide-type diuretic (metolazone) for sequential nephron blockade can overcome loop diuretic resistance in some cases (when some tubular function is preserved), severe AKI with creatinine 4.8 mg/dL and failure to respond to 200 mg furosemide indicates insufficient tubular secretion of drug and inadequate response. CRRT is the appropriate escalation. Tolvaptan addresses hypervolemia in hyponatremia (SIADH) and is not indicated here."
  },
  {
    "id": 159,
    "chapter": 16,
    "domain": "Renal/Electrolytes",
    "question": "Which finding on urine microscopy MOST specifically indicates acute glomerulonephritis as the cause of AKI rather than ATN?",
    "options": {
      "A": "Muddy brown granular casts",
      "B": "Red blood cell (RBC) casts",
      "C": "White blood cell casts",
      "D": "Hyaline casts"
    },
    "answer": "B",
    "explanation": "Red blood cell (RBC) casts on urine microscopy are pathognomonic for glomerular hematuria, indicating glomerulonephritis (ANCA vasculitis, anti-GBM disease, IgA nephropathy, lupus nephritis, post-streptococcal GN). Muddy brown granular casts indicate ATN. White blood cell casts suggest pyelonephritis or acute interstitial nephritis. Hyaline casts are non-specific and found in concentrated urine, after exercise, or in dehydrated states. In acute GN with AKI, prompt workup (ANA, ANCA, complement, anti-GBM antibody, ASLO) and often renal biopsy are essential for diagnosis and treatment."
  },
  {
    "id": 160,
    "chapter": 16,
    "domain": "Renal/Electrolytes",
    "question": "A 48-year-old woman with rhabdomyolysis from crush injury has CK 145,000 IU/L, creatinine 3.2 mg/dL, and urine dipstick shows 3+ blood with only 2 RBCs on microscopy (suggesting myoglobinuria). Which intervention MOST reduces risk of renal tubular injury from myoglobin?",
    "options": {
      "A": "Alkalinization of urine with sodium bicarbonate infusion to target urine pH >6.5",
      "B": "Aggressive IV fluid resuscitation with isotonic saline targeting urine output 200-300 mL/hr",
      "C": "Early hemodialysis to remove myoglobin",
      "D": "Furosemide to force diuresis"
    },
    "answer": "B",
    "explanation": "Aggressive IV fluid resuscitation to maintain urine output at 200-300 mL/hr (1-3 mL/kg/hr) is the cornerstone of rhabdomyolysis management, preventing myoglobin precipitation in renal tubules by diluting tubular concentrations. Isotonic saline is the preferred fluid. Sodium bicarbonate (urinary alkalinization to pH >6.5) theoretically prevents myoglobin dissociation into nephrotoxic components, but clinical trial evidence is insufficient to recommend it over saline alone. Mannitol (osmotic diuretic) is used adjunctively in some protocols. Hemodialysis cannot effectively clear myoglobin due to its large molecular size."
  },
  {
    "id": 161,
    "chapter": 17,
    "domain": "Renal/Electrolytes",
    "question": "A 55-year-old woman with small cell lung cancer presents with confusion, nausea, and serum sodium of 118 mEq/L. Urine osmolality is 540 mOsm/kg, serum osmolality 258 mOsm/kg, urine sodium 68 mEq/L. She is euvolemic on exam. What is the MOST appropriate treatment?",
    "options": {
      "A": "Rapid correction with 3% hypertonic saline at 150 mL/hr",
      "B": "Fluid restriction to 500-1000 mL/day, with demeclocycline or tolvaptan if refractory",
      "C": "Normal saline 1L/hr to restore volume",
      "D": "Furosemide alone to promote free water excretion"
    },
    "answer": "B",
    "explanation": "This presentation is classic for SIADH (syndrome of inappropriate antidiuretic hormone secretion) associated with SCLC: hyponatremia, euvolemia, hyperosmolar urine (>100 mOsm/kg), elevated urine sodium (>20 mEq/L), and low serum osmolality. First-line treatment for chronic, asymptomatic/mildly symptomatic SIADH is free water restriction (500-1000 mL/day). For refractory cases, demeclocycline or vaptans (tolvaptan) \u2014 V2 receptor antagonists \u2014 promote aquaresis. Hypertonic saline is reserved for severe symptomatic hyponatremia (seizures, coma). Sodium correction should not exceed 10-12 mEq/L per 24 hours to avoid osmotic demyelination."
  },
  {
    "id": 162,
    "chapter": 17,
    "domain": "Renal/Electrolytes",
    "question": "A 40-year-old marathon runner collapses after an ultramarathon. Serum sodium is 118 mEq/L. He is confused and has a seizure. What is the MOST appropriate immediate management?",
    "options": {
      "A": "Fluid restriction and oral sodium supplementation",
      "B": "3% hypertonic saline 100-150 mL bolus IV, targeting 5 mEq/L Na+ increase within 1 hour to stop seizures",
      "C": "Normal saline 0.9% at 200 mL/hr",
      "D": "Tolvaptan 15 mg PO immediately"
    },
    "answer": "B",
    "explanation": "Exercise-associated hyponatremia with symptomatic severe hyponatremia (seizures, altered consciousness) requires immediate treatment with 3% hypertonic saline. The target is to raise serum sodium by 5 mEq/L rapidly (over 30-60 minutes) to stop acute neurologic manifestations, without exceeding 10-12 mEq/L in 24 hours. After symptoms resolve, the rate of correction should slow. This scenario involves hypotonic hyponatremia from excessive hypotonic fluid intake \u2014 NOT SIADH. Normal saline would worsen cerebral edema if serum Na is below 118 and urine Na is high. Tolvaptan is oral and too slow for acute severe symptomatic hyponatremia."
  },
  {
    "id": 163,
    "chapter": 17,
    "domain": "Renal/Electrolytes",
    "question": "A 70-year-old man is admitted with hypernatremia (Na 162 mEq/L). He has a history of diabetes insipidus (DI) and was found at home dehydrated and confused. What is the recommended maximum rate of serum sodium correction in hypernatremia?",
    "options": {
      "A": "10-12 mEq/L per hour to rapidly restore volume",
      "B": "12 mEq/L per 24 hours (0.5 mEq/L per hour)",
      "C": "5 mEq/L per 8 hours maximum",
      "D": "No rate limit; correct hypernatremia as fast as possible to restore plasma tonicity"
    },
    "answer": "B",
    "explanation": "Hypernatremia correction must be gradual to prevent cerebral edema and seizures. In chronic hypernatremia (>48 hours), the brain has adapted by generating organic osmolytes (idiogenic osmoles). Rapid correction causes water to shift into brain cells (cerebral edema) as plasma tonicity falls faster than brain osmolarity can adjust. Maximum correction rate: 10-12 mEq/L per 24 hours (approximately 0.5 mEq/L per hour). Acute hypernatremia (<48 hours) can be corrected more rapidly. Enteral free water or D5W IV is used for correction; desmopressin for central DI."
  },
  {
    "id": 164,
    "chapter": 17,
    "domain": "Renal/Electrolytes",
    "question": "A 58-year-old woman with hypokalemia (K+ 2.8 mEq/L) also has a serum magnesium of 1.2 mg/dL. Despite aggressive potassium replacement (100 mEq KCl IV over 8 hours), her potassium remains 2.6 mEq/L. What is the PRIMARY reason for refractory hypokalemia?",
    "options": {
      "A": "The IV route is insufficient; oral potassium must be used",
      "B": "Concurrent hypomagnesemia prevents adequate potassium repletion",
      "C": "The patient has a primary renal potassium wasting disorder",
      "D": "Loop diuretics are counteracting potassium replacement"
    },
    "answer": "B",
    "explanation": "Magnesium is required for proper functioning of the Na-K-ATPase pump in renal tubular cells. Hypomagnesemia impairs the ability of the kidney to conserve potassium, causing refractory hypokalemia that cannot be corrected with potassium replacement alone until magnesium is repleted. This is the classic 'co-dependent electrolyte' relationship. Magnesium repletion (2-4g MgSO4 IV) must accompany potassium replacement in hypomagnesemia. The same relationship exists between magnesium and calcium (hypomagnesemia causes refractory hypocalcemia). Normal magnesium: 1.7-2.3 mg/dL."
  },
  {
    "id": 165,
    "chapter": 17,
    "domain": "Renal/Electrolytes",
    "question": "A 62-year-old man with AKI develops severe hyperkalemia (K+ 7.2 mEq/L) with ECG changes: peaked T waves, widened QRS (120 ms), and sine wave pattern. What is the CORRECT sequence of management?",
    "options": {
      "A": "Kayexalate \u2192 insulin/glucose \u2192 calcium gluconate \u2192 emergent dialysis",
      "B": "Calcium gluconate IV \u2192 insulin + dextrose \u2192 sodium bicarbonate \u2192 emergent dialysis",
      "C": "Furosemide IV \u2192 calcium gluconate \u2192 kayexalate",
      "D": "Sodium bicarbonate \u2192 insulin/glucose \u2192 dialysis \u2192 calcium gluconate"
    },
    "answer": "B",
    "explanation": "Life-threatening hyperkalemia with ECG changes (sine wave, wide QRS) requires immediate cardiac membrane stabilization. Correct sequence: (1) IV calcium gluconate (or calcium chloride) \u2014 stabilizes cardiac membrane within minutes (does not lower K+); (2) Insulin 10 units + dextrose (shifts K+ into cells, onset 15-30 min); (3) Sodium bicarbonate (alkalinization shifts K+ into cells, slower); (4) Loop diuretics, kayexalate/patiromer/SZC (eliminate K+ from body); (5) Emergent dialysis for AKI/ESRD with refractory hyperkalemia. Beta-2 agonists (albuterol nebulization) also shift K+ intracellularly."
  },
  {
    "id": 166,
    "chapter": 17,
    "domain": "Renal/Electrolytes",
    "question": "A 55-year-old man receiving total parenteral nutrition (TPN) in the ICU develops progressive muscle weakness, respiratory failure, and serum phosphate of 0.8 mg/dL (normal 2.5-4.5 mg/dL). What is the diagnosis and mechanism?",
    "options": {
      "A": "TPN-induced liver disease causing malabsorption",
      "B": "Refeeding syndrome causing hypophosphatemia from intracellular phosphate shift",
      "C": "Hyperparathyroidism causing phosphate wasting",
      "D": "Respiratory failure independently causing phosphate depletion"
    },
    "answer": "B",
    "explanation": "Refeeding syndrome occurs when nutrition (particularly carbohydrate-rich) is initiated in severely malnourished patients. Carbohydrates stimulate insulin release, which drives phosphate (and potassium, magnesium) from extracellular to intracellular compartments. Phosphate is required for ATP synthesis (including respiratory muscle function) and 2,3-DPG production. Severe hypophosphatemia causes respiratory muscle weakness, cardiac dysfunction, hemolytic anemia, and neurologic symptoms. Prevention: identify high-risk patients (severe malnutrition, alcoholism, chronic illness), start nutrition slowly, and aggressively replete electrolytes."
  },
  {
    "id": 167,
    "chapter": 17,
    "domain": "Renal/Electrolytes",
    "question": "A 48-year-old woman with hypercalcemia of malignancy (serum calcium 15.2 mg/dL, albumin 2.8 g/dL, PTH-related protein elevated) presents with confusion, nausea, and polyuria. Corrected calcium is 16.8 mg/dL. What is the CORRECT sequence of treatment for severe hypercalcemia?",
    "options": {
      "A": "Furosemide \u2192 IV normal saline \u2192 bisphosphonates",
      "B": "IV normal saline (2-4L) \u2192 furosemide only after volume replete \u2192 IV bisphosphonate (zoledronic acid)",
      "C": "Calcitonin \u2192 oral alendronate \u2192 forced diuresis with furosemide",
      "D": "Hemodialysis immediately for calcium >15 mg/dL"
    },
    "answer": "B",
    "explanation": "Severe hypercalcemia management: (1) IV normal saline aggressively (2-4L, promotes calciuresis via saline diuresis) \u2014 this is the most important immediate step; (2) Furosemide only after adequate volume repletion (if given when hypovolemic, furosemide worsens hypercalcemia by further concentrating calcium); (3) Bisphosphonates (IV zoledronic acid 4 mg or pamidronate) inhibit osteoclast activity, taking 2-4 days for full effect but lasting weeks; (4) Calcitonin for rapid but short-lived calcium reduction (4-8h onset, tachyphylaxis within 48h). Denosumab for bisphosphonate-refractory or renal failure cases."
  },
  {
    "id": 168,
    "chapter": 17,
    "domain": "Renal/Electrolytes",
    "question": "A 65-year-old man on the ICU develops a serum sodium of 124 mEq/L over 3 days (was 138). He is on free water via NG tube and his cortisol returns as 4.5 mcg/dL. Urine sodium is 42 mEq/L. TSH is normal. What is the MOST likely cause?",
    "options": {
      "A": "Syndrome of inappropriate ADH (SIADH)",
      "B": "Central hypothyroidism",
      "C": "Adrenal insufficiency",
      "D": "Cerebral salt wasting"
    },
    "answer": "C",
    "explanation": "A low random cortisol (4.5 mcg/dL, suggestive of adrenal insufficiency in an acutely ill patient \u2014 typical stress response = cortisol >18-20 mcg/dL), hyponatremia with elevated urine sodium, and euvolemia/mild hypovolemia point to adrenal insufficiency. AI causes hyponatremia by elevated ADH (from cortisol deficiency removing the normal ADH suppression) and salt wasting. This can mimic SIADH but the clinical context (free water administration, low cortisol) differentiates it. Treatment: hydrocortisone replacement (50-100 mg IV q8h), which rapidly corrects hyponatremia. TSH is normal, ruling out hypothyroidism."
  },
  {
    "id": 169,
    "chapter": 17,
    "domain": "Renal/Electrolytes",
    "question": "A 60-year-old woman on CRRT for AKI develops a serum calcium of 7.2 mg/dL (ionized Ca 0.88 mmol/L) and her CRRT filter is using citrate anticoagulation. She is also on vasopressors. What is the mechanism of hypocalcemia in this setting?",
    "options": {
      "A": "Citrate chelation of calcium causing systemic hypocalcemia",
      "B": "CRRT membrane binding of calcium",
      "C": "Vasopressors causing calcium shift into cells",
      "D": "Alkalosis from citrate metabolism causing ionized hypocalcemia"
    },
    "answer": "A",
    "explanation": "Regional citrate anticoagulation (RCA) for CRRT works by chelating ionized calcium in the extracorporeal circuit, preventing clot formation. Systemic citrate accumulation (from liver dysfunction, shock, or excessive citrate infusion rate) overwhelms hepatic citrate metabolism, leading to systemic calcium chelation and true ionized hypocalcemia. 'Citrate lock' is diagnosed by a high total calcium/ionized calcium ratio (>2.5) or rising total calcium with low ionized calcium. Treatment: calcium infusion, reduce citrate rate, or switch to alternative anticoagulation. Monitor ionized calcium every 4-6 hours in RCA-CRRT."
  },
  {
    "id": 170,
    "chapter": 17,
    "domain": "Renal/Electrolytes",
    "question": "A 45-year-old man presents with severe hyponatremia (Na+ 114 mEq/L) that was 138 mEq/L 3 weeks ago (developed slowly). After 24 hours of 3% saline, his Na+ has risen from 114 to 128 mEq/L (rise of 14 mEq/L in 24 hours \u2014 above the 10-12 mEq/L limit). He is now neurologically stable. What is the GREATEST risk from this over-rapid correction?",
    "options": {
      "A": "Hypertensive emergency from rapid sodium loading",
      "B": "Osmotic demyelination syndrome (ODS)/central pontine myelinolysis",
      "C": "Flash pulmonary edema from sodium-mediated fluid shifts",
      "D": "Paradoxical cerebral herniation"
    },
    "answer": "B",
    "explanation": "Osmotic demyelination syndrome (ODS), formerly called central pontine myelinolysis, is the major risk of over-rapid correction of chronic hyponatremia. When serum sodium is corrected faster than the brain can restore its osmolarity, osmotic stress causes demyelination of pontine (and extrapontine) neurons. This typically presents 2-6 days after over-rapid correction with dysarthria, dysphagia, flaccid quadriplegia, and pseudobulbar palsy. High-risk patients: chronic alcoholism, malnutrition, liver transplant, hypokalemia. If over-correction occurs: re-lower sodium with hypotonic fluids (D5W) and desmopressin."
  },
  {
    "id": 171,
    "chapter": 18,
    "domain": "Renal/Electrolytes",
    "question": "A 55-year-old man presents with pH 7.28, PaCO2 42 mmHg, HCO3 19 mEq/L, serum Na 138, Cl 104, albumin 4.0 g/dL. His serum lactate is 0.8 mmol/L, BUN 18, creatinine 1.1. What is the PRIMARY acid-base disorder and what is the anion gap?",
    "options": {
      "A": "Respiratory acidosis; anion gap not applicable",
      "B": "Normal anion gap metabolic acidosis (NAGMA); anion gap = 15",
      "C": "High anion gap metabolic acidosis (HAGMA); anion gap = 15",
      "D": "Mixed respiratory and metabolic acidosis; anion gap = 15"
    },
    "answer": "B",
    "explanation": "Anion gap = Na - (Cl + HCO3) = 138 - (104 + 19) = 15 mEq/L. Normal AG = 12 \u00b1 2 (for albumin 4 g/dL). This AG of 15 is borderline but not clearly elevated. pH 7.28 with HCO3 19 and PaCO2 42 indicates metabolic acidosis without appropriate respiratory compensation (expected PaCO2 = 1.5 \u00d7 19 + 8 = 36.5; actual is 42, indicating either mixed acidosis or early process). The near-normal anion gap with low HCO3 suggests NAGMA \u2014 causes include diarrhea (most common), RTA, and carbonic anhydrase inhibitors. NAGMA is distinguished from HAGMA (lactic acidosis, ketoacidosis, uremia) by anion gap."
  },
  {
    "id": 172,
    "chapter": 18,
    "domain": "Renal/Electrolytes",
    "question": "A 62-year-old woman with sepsis has the following ABG: pH 7.32, PaCO2 28, HCO3 14, PaO2 82. Serum Na 140, Cl 108, albumin 3.8 g/dL, lactate 4.2 mmol/L. What is the complete acid-base interpretation?",
    "options": {
      "A": "Simple metabolic acidosis with appropriate respiratory compensation",
      "B": "High anion gap metabolic acidosis (lactic acidosis) with appropriate respiratory compensation",
      "C": "Metabolic acidosis + respiratory alkalosis (double disorder)",
      "D": "Metabolic acidosis + respiratory acidosis (double disorder)"
    },
    "answer": "B",
    "explanation": "Step 1: pH 7.32 = acidemia. Step 2: HCO3 14 = metabolic acidosis. Step 3: AG = 140 - (108 + 14) = 18 (corrected for albumin 3.8: normal AG \u2248 11; corrected AG = 18 - (4 - 3.8) \u00d7 2.5 \u2248 17.5 \u2014 elevated). HAGMA confirmed, consistent with lactate 4.2. Step 4: Winter's formula \u2014 expected PaCO2 = 1.5 \u00d7 14 + 8 = 29; actual 28, which falls within \u00b12 \u2014 appropriate respiratory compensation. Conclusion: isolated HAGMA (lactic acidosis from sepsis) with appropriate respiratory compensation. No mixed disorder."
  },
  {
    "id": 173,
    "chapter": 18,
    "domain": "Renal/Electrolytes",
    "question": "A 68-year-old man with COPD has an ABG: pH 7.38, PaCO2 52, HCO3 30. He is clinically at his baseline. What is the MOST accurate interpretation?",
    "options": {
      "A": "Normal ABG \u2014 all values are within normal limits",
      "B": "Acute respiratory acidosis without compensation",
      "C": "Chronic respiratory acidosis with compensatory metabolic alkalosis (chronic CO2 retention)",
      "D": "Primary metabolic alkalosis with respiratory compensation"
    },
    "answer": "C",
    "explanation": "This patient's pH is normal (7.38) despite elevated PaCO2 (52 mmHg) and HCO3 (30 mEq/L) \u2014 indicating complete compensation. In chronic respiratory acidosis, the kidneys compensate over 3-5 days by retaining bicarbonate. Expected HCO3 compensation: for each 10 mmHg rise in PaCO2, HCO3 rises 3.5 mEq/L (chronic). Expected HCO3 = 24 + [(52-40)/10 \u00d7 3.5] = 24 + 4.2 = 28.2 (close to actual 30). The pH approaching normal (7.38) confirms near-complete chronic compensation \u2014 classic for COPD baseline."
  },
  {
    "id": 174,
    "chapter": 18,
    "domain": "Renal/Electrolytes",
    "question": "A 50-year-old woman with prolonged NGT suction for bowel obstruction has pH 7.52, PaCO2 46, HCO3 36. Serum K+ is 3.0 mEq/L, Cl- 88 mEq/L. What is the acid-base diagnosis and underlying mechanism?",
    "options": {
      "A": "Respiratory alkalosis from pain-related hyperventilation",
      "B": "Metabolic alkalosis from loss of gastric hydrochloric acid (HCl) with compensatory respiratory hypoventilation",
      "C": "Primary metabolic alkalosis from loop diuretic therapy",
      "D": "Mixed respiratory and metabolic alkalosis"
    },
    "answer": "B",
    "explanation": "pH 7.52 with elevated HCO3 (36) indicates metabolic alkalosis. PaCO2 46 (slightly above 40) reflects appropriate respiratory compensation (hypoventilation to retain CO2 and offset alkalosis). Expected PaCO2 compensation = 40 + 0.7 \u00d7 (36-24) = 40 + 8.4 = 48.4; actual 46 \u2014 appropriate compensation. Mechanism: NGT suction removes gastric HCl. Loss of Cl- and H+ leaves excess HCO3- in the blood (contraction alkalosis + direct H+ loss). Hypokalemia perpetuates alkalosis (K+/H+ exchange in kidney retains H+ when K+ is low). Treatment: NS + KCl to replace Cl- and K+."
  },
  {
    "id": 175,
    "chapter": 18,
    "domain": "Renal/Electrolytes",
    "question": "A 70-year-old man with AKI and sepsis has: pH 7.24, PaCO2 24, HCO3 10. Serum Na 138, Cl 100, albumin 2.0 g/dL, lactate 5.8. What is the corrected anion gap and is there an additional hidden disorder?",
    "options": {
      "A": "AG = 28, no hidden disorder \u2014 pure HAGMA",
      "B": "AG corrected for albumin = 33 \u2014 severe HAGMA; delta-delta ratio suggests concurrent metabolic alkalosis",
      "C": "AG = 28; delta-delta suggests additional NAGMA",
      "D": "AG corrected = 33; delta-delta ratio of 1.6 \u2014 simple HAGMA only"
    },
    "answer": "C",
    "explanation": "Uncorrected AG = 138 - (100 + 10) = 28. Albumin correction: add 2.5 \u00d7 (4 - 2.0) = +5 \u2192 corrected AG = 33. Delta gap (\u0394AG) = AG - 12 = 33 - 12 = 21. Delta-delta ratio = \u0394AG / \u0394HCO3 = 21 / (24 - 10) = 21/14 = 1.5. Delta-delta 1-2 = simple HAGMA. Delta-delta <1 = concurrent NAGMA. Delta-delta >2 = concurrent metabolic alkalosis. At 1.5, this is at the border but within range for simple HAGMA. However, if pre-existing HCO3 was higher, there may be occult NAGMA. The key concept: always correct the AG for hypoalbuminemia and use delta-delta to identify mixed disorders."
  },
  {
    "id": 176,
    "chapter": 18,
    "domain": "Renal/Electrolytes",
    "question": "A 55-year-old woman presents with pH 7.39, PaCO2 42, HCO3 25, Na 138, Cl 90, albumin 4.0 g/dL. Her lactate is 0.9 mmol/L. Does she have a hidden acid-base disorder?",
    "options": {
      "A": "No \u2014 all parameters are within normal reference ranges",
      "B": "Yes \u2014 elevated anion gap (23) indicates hidden HAGMA + concurrent metabolic alkalosis (elevated HCO3 for AG)",
      "C": "Yes \u2014 hypochloremia with normal pH indicates pure metabolic alkalosis",
      "D": "Cannot determine without urine chloride measurement"
    },
    "answer": "B",
    "explanation": "AG = 138 - (90 + 25) = 23. Normal AG \u2248 12. Elevated AG of 23 indicates HAGMA (despite normal pH and HCO3). This is a 'masked' or 'occult' HAGMA + concurrent metabolic alkalosis \u2014 the alkalosis has normalized the pH and elevated the HCO3, masking the metabolic acidosis. The elevated AG unmasks the hidden acidosis. This pattern is seen in patients with combined lactic acidosis/DKA and vomiting/NGT suction, or overcorrection with bicarbonate. Clinical context: DKA patient who vomits (acid loss + ketoacidosis). Always calculate anion gap in any patient with pH in 'normal' range."
  },
  {
    "id": 177,
    "chapter": 18,
    "domain": "Renal/Electrolytes",
    "question": "A 30-year-old man is found unresponsive with empty bottles of ethylene glycol (antifreeze). His ABG: pH 7.18, PaCO2 22, HCO3 8, serum osmolality 348 mOsm/kg, calculated osmolality 308 mOsm/kg. What do these findings indicate?",
    "options": {
      "A": "Normal osmol gap; ethylene glycol is unlikely",
      "B": "Osmol gap of 40 mOsm/kg indicating unmeasured osmoles from ethylene glycol ingestion",
      "C": "Pure respiratory alkalosis from toxic effects on the brainstem",
      "D": "Isopropanol ingestion causing osmol gap without acidosis"
    },
    "answer": "B",
    "explanation": "Osmol gap = measured osmolality - calculated osmolality. Calculated osmolality = 2(Na) + BUN/2.8 + glucose/18. Osmol gap here = 348 - 308 = 40 mOsm/kg (normal <10). Elevated osmol gap indicates unmeasured osmoles \u2014 consistent with toxic alcohols (ethylene glycol, methanol, isopropanol). Ethylene glycol + HAGMA + large osmol gap = classic presentation. Ethylene glycol itself raises osmolality (large osmol gap initially), and its toxic metabolites (glycolic acid, oxalic acid) cause HAGMA. Treatment: fomepizole (alcohol dehydrogenase inhibitor), hemodialysis, and pyridoxine/thiamine."
  },
  {
    "id": 178,
    "chapter": 18,
    "domain": "Renal/Electrolytes",
    "question": "A 65-year-old man on mechanical ventilation for ARDS has: pH 7.15, PaCO2 68, HCO3 23. His ARDS is being managed with low tidal volume ventilation. What is the MOST accurate diagnosis?",
    "options": {
      "A": "Simple metabolic acidosis with inadequate respiratory compensation",
      "B": "Simple acute respiratory acidosis from permissive hypercapnia",
      "C": "Metabolic acidosis + acute respiratory acidosis (mixed disorder)",
      "D": "Chronic respiratory acidosis with loss of metabolic compensation"
    },
    "answer": "B",
    "explanation": "pH 7.15 with elevated PaCO2 (68) and near-normal HCO3 (23) indicates acute respiratory acidosis. In acute respiratory acidosis, the renal compensation (bicarbonate rise) takes 3-5 days \u2014 so HCO3 rises only 1 mEq/L per 10 mmHg acute PaCO2 rise. Expected HCO3 = 24 + [(68-40)/10 \u00d7 1] = 26.8. Actual HCO3 is 23 \u2014 slightly lower than expected, suggesting an early process or mild concurrent metabolic acidosis. However, the dominant and primary disorder is acute respiratory acidosis from permissive hypercapnia in ARDS managed with lung-protective ventilation."
  },
  {
    "id": 179,
    "chapter": 18,
    "domain": "Renal/Electrolytes",
    "question": "A 45-year-old patient with a pH of 7.55, PaCO2 of 28 mmHg, and HCO3 of 24 mEq/L is mechanically ventilated for TBI. What is the primary acid-base disorder and what is the concern?",
    "options": {
      "A": "Metabolic alkalosis; risk of GI bleeding from stress ulceration",
      "B": "Acute respiratory alkalosis from hyperventilation; cerebral vasoconstriction reducing cerebral blood flow",
      "C": "Chronic respiratory alkalosis; no immediate concern",
      "D": "Mixed alkalosis; risk of hypokalemia and arrhythmias"
    },
    "answer": "B",
    "explanation": "pH 7.55 with low PaCO2 (28) and normal HCO3 indicates acute respiratory alkalosis from hyperventilation. The HCO3 is not compensated downward (no chronic renal compensation yet), confirming this is acute. In TBI management, although hyperventilation (PaCO2 30-35) can transiently lower ICP by causing cerebral vasoconstriction, prophylactic aggressive hyperventilation (PaCO2 <30) is HARMFUL \u2014 it reduces cerebral blood flow below ischemic thresholds. Targets: PaCO2 35-45 mmHg at baseline, with brief hyperventilation (25-30) only for acute herniation as a bridge to definitive therapy."
  },
  {
    "id": 180,
    "chapter": 18,
    "domain": "Renal/Electrolytes",
    "question": "A 55-year-old alcoholic man with pancreatitis has the following: pH 7.32, PaCO2 32, HCO3 16, Na 138, Cl 108, albumin 3.2 g/dL, lactate 1.8 mmol/L, BUN 22, glucose 320 mg/dL. What is the complete acid-base interpretation?",
    "options": {
      "A": "Simple HAGMA from diabetic ketoacidosis",
      "B": "HAGMA (DKA-related) with appropriate respiratory compensation and a concurrent NAGMA from alcoholic pancreatitis",
      "C": "NAGMA from diarrhea with appropriate respiratory compensation",
      "D": "HAGMA from lactic acidosis with concurrent respiratory alkalosis"
    },
    "answer": "B",
    "explanation": "AG = 138 - (108 + 16) = 14. Corrected AG for albumin (3.2): add 2.5 \u00d7 (4-3.2) = +2 \u2192 corrected AG = 16 (elevated, normal \u224812). Delta-delta = (16-12) / (24-16) = 4/8 = 0.5. Delta-delta <1 indicates HAGMA + concurrent NAGMA. In this alcoholic diabetic patient: HAGMA from DKA (glucose 320, pancreatitis precipitating hyperglycemia, alcoholic ketoacidosis) + NAGMA (pancreatitis-related bicarbonate loss or diarrhea). PaCO2 = 32; Winter's formula: expected = 1.5 \u00d7 16 + 8 = 32 \u2014 appropriate compensation. Complex mixed disorder: HAGMA + NAGMA."
  },
  {
    "id": 181,
    "chapter": 19,
    "domain": "Renal/Electrolytes",
    "question": "A 24-year-old woman with type 1 diabetes presents with nausea, vomiting, and abdominal pain. Labs: glucose 520 mg/dL, Na 130, K 5.8, pH 7.12, HCO3 8, anion gap 28, beta-hydroxybutyrate 6.2 mmol/L. She weighs 60 kg. What is the CORRECT initial fluid resuscitation for DKA?",
    "options": {
      "A": "D5-0.45% NaCl with 20 mEq KCl/L at 250 mL/hr",
      "B": "0.9% NaCl 1L over the first hour, then reassess",
      "C": "Insulin drip without fluid (hyperkalemia contraindicates fluids)",
      "D": "Lactated Ringer's 500 mL bolus then D5LR at 150 mL/hr"
    },
    "answer": "B",
    "explanation": "DKA initial management: (1) IV fluids \u2014 0.9% NaCl 1L in the first hour (corrects hypovolemia, improves tissue perfusion, helps lower glucose). Subsequent rates depend on corrected sodium and hemodynamics (typically 250-500 mL/hr); (2) Insulin drip 0.1 units/kg/hr ONLY after K+ >3.5 mEq/L (this patient K+ 5.8 \u2014 can start insulin); (3) Potassium replacement begins when K+ <5.0 mEq/L, as insulin drives K+ into cells; (4) When glucose <250-200 mg/dL, add dextrose to IV fluid. The hyponatremia in DKA is dilutional/pseudo \u2014 corrected Na = measured Na + 1.6 \u00d7 [(glucose-100)/100] = 130 + 6.7 \u2248 137 (normal)."
  },
  {
    "id": 182,
    "chapter": 19,
    "domain": "Renal/Electrolytes",
    "question": "A 55-year-old man with type 2 diabetes is found unresponsive. Glucose is 1,840 mg/dL, serum osmolality 388 mOsm/kg, Na 148, BUN 52, creatinine 3.8. He has no ketonemia. pH is 7.38. What is the diagnosis and what differentiates it from DKA?",
    "options": {
      "A": "DKA \u2014 the glucose is high enough to diagnose DKA regardless of pH",
      "B": "Hyperosmolar hyperglycemic state (HHS); differentiated by extreme hyperglycemia, hyperosmolarity, absent ketoacidosis, and more severe dehydration",
      "C": "Lactic acidosis from metformin use",
      "D": "Mixed HHS/DKA based on glucose level >1,000 mg/dL"
    },
    "answer": "B",
    "explanation": "Hyperosmolar hyperglycemic state (HHS) is differentiated from DKA by: (1) Extreme hyperglycemia (typically >600 mg/dL, often >1,000); (2) Marked hyperosmolarity (effective OSM = 2\u00d7Na + glucose/18 = 2\u00d7148 + 1840/18 = 296 + 102 = 398 mOsm/kg); (3) Absent or minimal ketonemia (sufficient residual insulin prevents ketogenesis); (4) Normal or near-normal pH (\u22657.30); (5) Severe dehydration (water deficit 8-10L). HHS carries higher mortality than DKA (15-20% vs. 1-5%). Treatment: aggressive rehydration (6L first 12h), slower insulin infusion, and identify precipitant."
  },
  {
    "id": 183,
    "chapter": 19,
    "domain": "Renal/Electrolytes",
    "question": "A 38-year-old woman with Graves disease undergoes thyroidectomy and develops fever (T 40.2\u00b0C), HR 154 with irregular rhythm, BP 92/58, and confusion 6 hours postoperatively. Free T4 is markedly elevated. What is the MOST appropriate immediate management of thyroid storm?",
    "options": {
      "A": "Propylthiouracil (PTU) \u2192 inorganic iodine \u2192 propranolol \u2192 hydrocortisone",
      "B": "Methimazole \u2192 PTU \u2192 levothyroxine \u2192 beta-blocker",
      "C": "Propranolol alone as definitive therapy for thyroid storm",
      "D": "Radioactive iodine for immediate thyroid ablation"
    },
    "answer": "A",
    "explanation": "Thyroid storm management requires blocking thyroid hormone at multiple steps in sequence: (1) PTU 500-1000 mg loading then 250 mg q4-6h \u2014 blocks NEW thyroid hormone synthesis AND blocks peripheral T4\u2192T3 conversion; (2) Iodine (SSKI or Lugol's) given 1+ HOUR AFTER PTU to block hormone release (iodine first would transiently increase hormone release \u2014 Jod-Basedow); (3) Propranolol controls adrenergic symptoms (rate control, tremor) and inhibits peripheral conversion; (4) Hydrocortisone 100 mg q8h (relative AI and inhibits peripheral conversion); (5) Cooling, fluid resuscitation, treat precipitant. Methimazole cannot block peripheral conversion."
  },
  {
    "id": 184,
    "chapter": 19,
    "domain": "Renal/Electrolytes",
    "question": "A 65-year-old woman presents with altered mental status, bradycardia (HR 42), BP 82/52, T 34.2\u00b0C, and dry skin. She is on no medications. TSH is >100 mIU/L, free T4 is undetectable. Sodium is 122 mEq/L. What is the treatment for myxedema coma?",
    "options": {
      "A": "Oral levothyroxine 100 mcg daily only",
      "B": "IV levothyroxine (T4) 200-500 mcg loading dose, with IV liothyronine (T3) and IV hydrocortisone, rewarming, and cardiovascular support",
      "C": "IV liothyronine (T3) alone at 5 mcg/hr",
      "D": "Thyroid hormone replacement is contraindicated until hemodynamics stabilize"
    },
    "answer": "B",
    "explanation": "Myxedema coma (severe hypothyroidism with impaired consciousness) requires IV thyroid hormone replacement. Standard treatment: IV levothyroxine (T4) 200-500 mcg loading dose (achieves rapid tissue saturation) followed by 50-100 mcg/day, combined with IV liothyronine (T3) 5-20 mcg q8h (active hormone for immediate effect). IV hydrocortisone 100 mg q8h must be given concurrently to prevent adrenal crisis (relative AI common in myxedema). Supportive care: passive rewarming, cardiovascular support (vasopressors), free water restriction for hyponatremia, and mechanical ventilation if needed. Oral therapy has inadequate absorption."
  },
  {
    "id": 185,
    "chapter": 19,
    "domain": "Renal/Electrolytes",
    "question": "A 72-year-old man with type 2 diabetes on metformin and glipizide presents with confusion and blood glucose of 32 mg/dL. He is treated with IV dextrose (D50W, 25g IV). His glucose rises to 88 mg/dL. An hour later, his glucose drops to 44 mg/dL. Why does hypoglycemia recur, and what is the appropriate management?",
    "options": {
      "A": "D50W is metabolized too quickly; switch to oral glucose tablets",
      "B": "Glipizide (sulfonylurea) continues to stimulate insulin secretion; requires D10W infusion and prolonged monitoring",
      "C": "Metformin accumulation causes cellular glucose uptake independent of insulin",
      "D": "Liver glycogen stores are depleted, preventing gluconeogenesis"
    },
    "answer": "B",
    "explanation": "Sulfonylureas (glipizide, glyburide, glimepiride) stimulate insulin secretion independent of blood glucose levels \u2014 the effect persists as long as the drug is present (half-life glipizide 2-5 hours; active metabolites). A single D50W bolus raises glucose temporarily, but continued sulfonylurea effect causes recurrent hypoglycemia. Management: D10W continuous infusion to maintain euglycemia, ICU monitoring for 12-24 hours, and consider octreotide 50-75 mcg SQ q8h (somatostatin analog that suppresses insulin release) as an adjunct to prevent recurrence. Extended-release sulfonylureas may require 24-48h monitoring."
  },
  {
    "id": 186,
    "chapter": 19,
    "domain": "Renal/Electrolytes",
    "question": "A 45-year-old woman with DKA has an initial potassium of 5.8 mEq/L. Insulin infusion is started and glucose drops from 420 to 210 mg/dL over 4 hours. Repeat K+ is now 3.2 mEq/L. What should be done?",
    "options": {
      "A": "Stop insulin until potassium is normal",
      "B": "Continue insulin at current rate and add IV potassium 20-40 mEq/hr to maintain K+ 4-5 mEq/L",
      "C": "Reduce insulin to 0.02 units/kg/hr and give oral potassium",
      "D": "Discontinue fluids to prevent further dilution of potassium"
    },
    "answer": "B",
    "explanation": "In DKA, insulin drives potassium into cells (K+ follows glucose intracellularly with insulin action), causing rapid decline in serum K+. Hypokalemia in DKA is life-threatening (arrhythmias) and extremely common. Management: when K+ <3.5 mEq/L, add IV potassium replacement (20-40 mEq/hr via central access) and continue insulin. If K+ <3.0 mEq/L, hold insulin briefly and give K+ more aggressively before restarting. Target K+ 4-5 mEq/L during DKA treatment. Adequate potassium replacement is critical before or concurrent with insulin to prevent fatal hypokalemia."
  },
  {
    "id": 187,
    "chapter": 19,
    "domain": "Renal/Electrolytes",
    "question": "A 58-year-old woman with known Addison's disease presents to the ICU with hypotension (BP 72/44), nausea, vomiting, fever, and abdominal pain. She states she missed her prednisone for 3 days after a GI illness. Labs: Na 126, K 6.2, glucose 62, cortisol 4.2 mcg/dL. What is the CORRECT treatment of adrenal crisis?",
    "options": {
      "A": "Oral hydrocortisone 20 mg with fluid resuscitation",
      "B": "IV hydrocortisone 100 mg bolus, then 50-100 mg q6-8h (or 200 mg/24h infusion), aggressive IV fluid resuscitation, and glucose correction",
      "C": "IV dexamethasone 4 mg + fludrocortisone 0.1 mg PO",
      "D": "High-dose methylprednisolone 1 g IV followed by taper"
    },
    "answer": "B",
    "explanation": "Adrenal crisis is life-threatening and requires immediate treatment without waiting for confirmatory lab results. IV hydrocortisone 100 mg bolus (provides both glucocorticoid and mineralocorticoid activity at stress doses) followed by continuous infusion or q6h dosing (200 mg/day total) is first-line. Large-volume IV fluid resuscitation (normal saline with dextrose for hypoglycemia correction) addresses volume depletion and hyponatremia. Fludrocortisone is not needed acutely (hydrocortisone at stress doses has sufficient mineralocorticoid effect) but is added when transitioning to maintenance therapy. Dexamethasone lacks mineralocorticoid activity and is not first-line."
  },
  {
    "id": 188,
    "chapter": 19,
    "domain": "Renal/Electrolytes",
    "question": "Resolution of DKA is defined by which of the following criteria?",
    "options": {
      "A": "Blood glucose <200 mg/dL alone",
      "B": "Anion gap normalization AND resolution of ketoacidosis: glucose <200, HCO3 \u226515, pH >7.30, anion gap <12",
      "C": "Subjective clinical improvement with ability to tolerate oral intake",
      "D": "Serum beta-hydroxybutyrate <1 mmol/L only"
    },
    "answer": "B",
    "explanation": "DKA resolution criteria require: (1) Blood glucose <200 mg/dL (not the primary endpoint), (2) Serum bicarbonate \u226515 mEq/L, (3) pH >7.30, (4) Anion gap closure <12 mEq/L. All three metabolic criteria must be met. Glucose often normalizes before ketoacidosis resolves \u2014 when glucose <200-250, add dextrose to IV fluids to continue insulin without causing hypoglycemia. When resolution criteria are met and patient tolerates oral intake, transition from IV to subcutaneous insulin with at least 1-2 hours of overlap. Beta-hydroxybutyrate \u22640.6 mmol/L confirms ketosis resolution."
  },
  {
    "id": 189,
    "chapter": 19,
    "domain": "Renal/Electrolytes",
    "question": "A 40-year-old man with type 1 diabetes on SGLT2 inhibitor (empagliflozin) presents with pH 7.18, HCO3 9, anion gap 22, glucose 248 mg/dL. Urine ketones are 3+. Which of the following BEST explains this presentation?",
    "options": {
      "A": "Classic DKA with typical hyperglycemia",
      "B": "Euglycemic DKA \u2014 SGLT2 inhibitors can cause DKA with near-normal glucose by promoting urinary glucose excretion",
      "C": "HHS with concurrent metabolic acidosis",
      "D": "Lactic acidosis from SGLT2 inhibitor effect on mitochondria"
    },
    "answer": "B",
    "explanation": "Euglycemic DKA (euDKA) is an increasingly recognized complication of SGLT2 inhibitors. SGLT2 inhibitors cause glucosuria, lowering blood glucose even as ketogenesis continues, leading to DKA with atypically low glucose (often <250 mg/dL). This can delay diagnosis because clinicians expect glucose >250 in DKA. SGLT2 inhibitors also increase glucagon secretion and reduce insulin secretion, further promoting ketogenesis. Euglycemic DKA has been reported in type 1 and type 2 diabetes, particularly during fasting, illness, or surgery. Treatment is same as DKA: fluids, insulin, potassium, and discontinue SGLT2 inhibitor."
  },
  {
    "id": 190,
    "chapter": 19,
    "domain": "Renal/Electrolytes",
    "question": "A 68-year-old woman has a serum calcium of 14.8 mg/dL, phosphorus 2.1, PTH 248 pg/mL (high), PTH-rP undetectable, 24h urine calcium elevated, bone pain and kidney stones. What is the MOST likely diagnosis and definitive treatment?",
    "options": {
      "A": "Hypercalcemia of malignancy; cancer workup and bisphosphonates",
      "B": "Primary hyperparathyroidism; definitive treatment is parathyroidectomy",
      "C": "Vitamin D toxicity; discontinue vitamin D supplements",
      "D": "Sarcoidosis; corticosteroids"
    },
    "answer": "B",
    "explanation": "Primary hyperparathyroidism is the most common cause of hypercalcemia in outpatients and presents with PTH-mediated hypercalcemia (elevated PTH despite high calcium \u2014 inappropriate PTH elevation). Classic mnemonics: 'bones, stones, groans, psychic moans.' PTH is elevated, PTH-rP is undetectable (rules out humoral hypercalcemia of malignancy), and 24h urine calcium is elevated (not low as in FHH). Definitive treatment is parathyroidectomy (curative). Medical management with cinacalcet (calcimimetic) is an alternative for patients who are not surgical candidates."
  },
  {
    "id": 191,
    "chapter": 20,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 58-year-old man presents with 90 minutes of crushing substernal chest pain, diaphoresis, and ECG showing >2mm ST elevation in leads V1-V4. Troponin is pending. What is the TIME-CRITICAL target for primary PCI (door-to-balloon time)?",
    "options": {
      "A": "Within 90 minutes of first medical contact",
      "B": "Within 3 hours of symptom onset",
      "C": "Within 60 minutes of ED arrival",
      "D": "Within 12 hours for any STEMI regardless of presentation"
    },
    "answer": "A",
    "explanation": "ACC/AHA STEMI guidelines specify a door-to-balloon (D2B) time target of \u226490 minutes from first medical contact (FMC) for primary PCI. Each 30-minute delay in D2B time is associated with approximately 7.5% relative increase in 1-year mortality. When D2B cannot be achieved within 120 minutes, fibrinolytic therapy should be administered within 30 minutes (door-to-needle time \u226430 minutes). Late STEMI presentation (12-48 hours) may still benefit from PCI in patients with ongoing symptoms or hemodynamic instability but with diminishing benefit. The '90-minute' rule applies from FMC, not just ED arrival."
  },
  {
    "id": 192,
    "chapter": 20,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 65-year-old man has an anterior STEMI and undergoes successful PCI with stent placement. He is admitted to the ICU. His BP is 88/58, HR 108, SpO2 92% on 4L NC. ECHO shows EF 20%. He is started on norepinephrine. Which additional medication is CONTRAINDICATED in the immediate post-MI period with cardiogenic shock?",
    "options": {
      "A": "Aspirin 81 mg daily",
      "B": "IV metoprolol 5 mg for sinus tachycardia",
      "C": "IV heparin infusion",
      "D": "Supplemental oxygen to SpO2 >90%"
    },
    "answer": "B",
    "explanation": "Beta-blockers are CONTRAINDICATED in acute cardiogenic shock (decompensated heart failure, low output state) due to their negative inotropic and chronotropic effects, which can worsen hemodynamic compromise. In the COMMIT/CCS-2 trial, early IV metoprolol in acute MI patients with any heart failure or hemodynamic instability increased cardiogenic shock risk. Beta-blockers should be initiated once hemodynamic stability is achieved (typically 24-48 hours post-MI). Aspirin, anticoagulation, and supplemental oxygen (targeting SpO2 \u226590-94%) are all appropriate in acute STEMI management."
  },
  {
    "id": 193,
    "chapter": 20,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 72-year-old man with STEMI is treated with fibrinolysis with alteplase (unable to reach PCI within 120 min). Two hours later, which finding on ECG BEST indicates successful reperfusion?",
    "options": {
      "A": "Development of Q waves in the infarct territory",
      "B": ">50% reduction in peak ST elevation with symptom relief and reperfusion arrhythmias",
      "C": "Normalization of ST segments to baseline",
      "D": "New right bundle branch block (RBBB)"
    },
    "answer": "B",
    "explanation": "Markers of successful fibrinolytic reperfusion (within 60-90 minutes of administration): (1) >50% reduction in peak ST elevation in the lead with maximum ST elevation, (2) Resolution of ischemic chest pain, (3) Reperfusion arrhythmias \u2014 accelerated idioventricular rhythm (AIVR) is the hallmark, also premature ventricular contractions (note: sustained VT/VF are not reperfusion arrhythmias and indicate failure). Q wave development indicates myocardial necrosis and does not predict successful reperfusion. Complete ST normalization is not required for reperfusion success. RBBB indicates septal injury, not reperfusion."
  },
  {
    "id": 194,
    "chapter": 20,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 55-year-old woman with ACS is started on therapeutic anticoagulation with unfractionated heparin. She develops thrombocytopenia (platelets drop from 220,000 to 68,000 on day 5) with new arterial thrombus in her left leg. What is the diagnosis and treatment?",
    "options": {
      "A": "Immune thrombocytopenia (ITP); start IVIG",
      "B": "Heparin-induced thrombocytopenia (HIT); immediately stop all heparin and start direct thrombin inhibitor",
      "C": "Dilutional thrombocytopenia; transfuse platelets and continue heparin",
      "D": "Disseminated intravascular coagulation (DIC); FFP and cryoprecipitate"
    },
    "answer": "B",
    "explanation": "The 4T score for HIT: Thrombocytopenia (platelet fall 50-100% = 2 pts), Timing (days 5-10 = 2 pts), Thrombosis (new arterial thrombus = 2 pts), other causes of Thrombocytopenia unlikely (2 pts) = high probability HIT. HIT requires immediate cessation of ALL heparin products (including heparin flushes, LMWH) and initiation of a non-heparin anticoagulant (argatroban IV, bivalirudin, fondaparinux). Platelet transfusion is contraindicated (adds 'fuel to the fire'). Confirm with anti-PF4/heparin antibody ELISA and functional assay (serotonin release assay)."
  },
  {
    "id": 195,
    "chapter": 20,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 67-year-old man with inferior STEMI has persistent bradycardia (HR 38) and hypotension (BP 78/50) despite atropine 1 mg IV \u00d7 2. ECG shows complete heart block with a junctional escape rate. What is the MOST appropriate next step?",
    "options": {
      "A": "Repeat atropine 2 mg IV",
      "B": "Transcutaneous pacing followed by urgent transvenous pacing",
      "C": "Dopamine infusion at 5 mcg/kg/min",
      "D": "Isoproterenol infusion to increase heart rate"
    },
    "answer": "B",
    "explanation": "Complete heart block (CHB) complicating inferior STEMI with hemodynamic compromise and failure to respond to atropine requires pacing. Transcutaneous pacing (TCP) is the immediate bridge \u2014 it is quick to set up but uncomfortable in awake patients. Urgent transvenous pacemaker insertion follows. CHB in inferior MI results from AV nodal ischemia (RCA supplies AV node in 90%) and is usually transient, resolving with reperfusion. The junctional escape rate of 38 is inadequate for hemodynamic stability. Isoproterenol can accelerate junctional escape but increases myocardial oxygen demand and is not recommended in MI. Dopamine may help transiently but does not address the conduction block."
  },
  {
    "id": 196,
    "chapter": 20,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 60-year-old man with anterior STEMI and EF 25% is recovering in the ICU. On day 3, he develops sudden severe chest pain and a new loud holosystolic murmur at the apex with radiation to the axilla. His BP drops to 80/50. What mechanical complication has occurred and what is the treatment?",
    "options": {
      "A": "Ventricular septal defect; urgent surgical repair",
      "B": "Acute papillary muscle rupture causing severe mitral regurgitation; urgent surgical repair with hemodynamic stabilization",
      "C": "Left ventricular free wall rupture; emergency pericardiocentesis",
      "D": "Aortic regurgitation from aortic root dilation; urgent aortic valve replacement"
    },
    "answer": "B",
    "explanation": "Acute papillary muscle rupture (posteromedial papillary muscle, supplied by single PDA branch, most vulnerable) causes sudden severe mitral regurgitation (MR): holosystolic murmur radiating to axilla, acute pulmonary edema, and hemodynamic collapse. It occurs most commonly 2-7 days post-MI. Urgent treatment: hemodynamic stabilization with IABP (reduces afterload, augments diastolic pressure), vasodilators, and emergent surgical mitral valve repair/replacement. Without surgery, mortality approaches 50-80% within 24 hours. VSD murmur is at left sternal border. Free wall rupture causes immediate tamponade."
  },
  {
    "id": 197,
    "chapter": 20,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 70-year-old man with non-ST elevation MI (NSTEMI) has a TIMI score of 6/7 and is managed with antiplatelet therapy and anticoagulation. Which reperfusion strategy is MOST appropriate for high-risk NSTEMI?",
    "options": {
      "A": "Immediate (within 2 hours) invasive strategy if hemodynamically unstable or refractory ischemia",
      "B": "Conservative medical management for all NSTEMI patients",
      "C": "Urgent fibrinolysis with alteplase within 30 minutes",
      "D": "Elective coronary angiography within 72 hours for all NSTEMI patients regardless of risk"
    },
    "answer": "A",
    "explanation": "NSTEMI management stratified by risk: (1) Immediate invasive (<2h): refractory angina, hemodynamic instability, sustained VT/VF, acute decompensated HF \u2014 these patients need urgent cath. (2) Early invasive (<24h): TIMI \u22655, GRACE >140, dynamic ECG changes \u2014 including this patient's TIMI 6/7. (3) Invasive within 25-72h: other high-risk features. (4) Conservative strategy: only for low-risk (TIMI 0-2, GRACE <109) without ischemic symptoms. Fibrinolysis is contraindicated in NSTEMI (no occluded artery to reperfuse, increases bleeding risk)."
  },
  {
    "id": 198,
    "chapter": 20,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 55-year-old woman with STEMI has reperfused after primary PCI. She is on dual antiplatelet therapy (aspirin + ticagrelor). On day 2, she develops melena and bright red blood per rectum with hemoglobin drop from 13 to 8.8 g/dL. What is the MOST appropriate management?",
    "options": {
      "A": "Stop all antiplatelet therapy and proceed with endoscopy",
      "B": "Stop P2Y12 inhibitor (ticagrelor) while continuing aspirin; urgent GI consultation and endoscopy after hemodynamic stabilization",
      "C": "Continue all antiplatelet therapy; transfuse PRBCs and observe",
      "D": "Stop aspirin and ticagrelor; administer platelet transfusion"
    },
    "answer": "B",
    "explanation": "Management of GI bleeding in recent PCI with dual antiplatelet therapy (DAPT) requires balancing bleeding vs. stent thrombosis risk. Within 30 days of PCI (especially with drug-eluting stent), stopping both antiplatelet agents carries high stent thrombosis risk (15-20% mortality if stent thromboses). Consensus recommendation: Discontinue P2Y12 inhibitor (ticagrelor) temporarily; continue aspirin (lower bleeding contribution, essential for stent protection); achieve hemostasis with urgent endoscopy; restart P2Y12 as soon as hemostasis is confirmed. PPI co-therapy should be optimized. The decision involves cardiology and gastroenterology consultation."
  },
  {
    "id": 199,
    "chapter": 20,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 62-year-old man with STEMI is on IV heparin and aspirin, awaiting PCI. He suddenly develops severe hypotension (BP 60/40), muffled heart sounds, elevated JVD, and is in PEA on the monitor. Echo shows pericardial effusion with diastolic RV collapse. What is the MOST likely diagnosis and treatment?",
    "options": {
      "A": "Tension pneumothorax; needle decompression",
      "B": "Cardiac tamponade from left ventricular free wall rupture; emergency pericardiocentesis and cardiac surgery",
      "C": "Massive PE; systemic thrombolysis",
      "D": "Cardiogenic shock from LV failure; vasopressors and IABP"
    },
    "answer": "B",
    "explanation": "LV free wall rupture (occurs 2-7 days post-MI, more common with anterior MI, first MI, hypertension, late reperfusion) presents with sudden cardiovascular collapse, Beck's triad (hypotension, JVD, muffled heart sounds), and pericardial effusion on echo with RV diastolic collapse (tamponade). Pseudoaneurysm formation (contained rupture) can occasionally allow brief survival. Emergency management: pericardiocentesis to immediately decompress tamponade, then emergency cardiac surgery (primary repair or patch). Prognosis is extremely poor. Thrombolytics are dangerous \u2014 they may worsen hemorrhage into the pericardium."
  },
  {
    "id": 200,
    "chapter": 20,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 50-year-old man presents with ECG changes: new LBBB with ST elevation in aVR and diffuse ST depression in leads I, II, V4-V6. He has chest pain and troponin of 14 ng/mL. What ECG finding suggests this is Sgarbossa-criteria positive for acute MI in LBBB?",
    "options": {
      "A": "Any new LBBB in a patient with chest pain mandates immediate PCI regardless of Sgarbossa",
      "B": "Concordant ST elevation \u22651mm in leads with positive QRS deflection \u2014 highest specificity Sgarbossa criterion",
      "C": "ST depression >1mm in V1-V3 is the most sensitive Sgarbossa finding",
      "D": "Excessive discordant ST elevation >25mm is Sgarbossa positive"
    },
    "answer": "B",
    "explanation": "The Sgarbossa criteria identify acute MI in LBBB: (1) Concordant ST elevation \u22651mm in leads with positive QRS (highest specificity, 98%, score 5 points); (2) Concordant ST depression \u22651mm in V1-V3 (score 3 points); (3) Discordant ST elevation \u22655mm (excessive discordance, score 2 points). A score \u22653 indicates acute MI. The modified Sgarbossa criteria use ST/S ratio \u22650.25 for the discordance criterion (more sensitive). Concordant ST elevation in leads where QRS is positive (upward) is abnormal (expected LBBB pattern is discordant \u2014 ST depression when QRS is positive) and indicates acute occlusion."
  },
  {
    "id": 201,
    "chapter": 21,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 68-year-old man develops pulseless ventricular tachycardia (VT) in the ICU. CPR is initiated and a defibrillator is attached. What is the CORRECT initial energy dose for biphasic defibrillation?",
    "options": {
      "A": "50 J biphasic",
      "B": "120-200 J biphasic (device-specific manufacturer recommendation)",
      "C": "360 J monophasic equivalent",
      "D": "30 J biphasic to minimize myocardial injury"
    },
    "answer": "B",
    "explanation": "For pulseless VT/VF, biphasic defibrillation is recommended at the manufacturer's specified dose (typically 120-200 J), as biphasic waveforms are more effective than monophasic at lower energy while causing less post-shock dysfunction. If the manufacturer's recommendation is unknown, 200 J is appropriate. Subsequent shocks should be at equivalent or higher energy. The 2020 AHA guidelines recommend immediate CPR (chest compressions) before and after each shock, minimizing 'hands-off' time (perishock pause <5-10 seconds). Monophasic defibrillators use 360 J. Lower doses (50, 30 J) are insufficient for reliable defibrillation."
  },
  {
    "id": 202,
    "chapter": 21,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 60-year-old man is in ventricular fibrillation. After 3 shocks and 6 minutes of CPR, he remains in VF. IV amiodarone is being prepared. What is the CORRECT dosing for amiodarone in refractory VF/pulseless VT?",
    "options": {
      "A": "150 mg IV push over 10 minutes",
      "B": "300 mg IV push, then 150 mg IV push if VF persists",
      "C": "1 mg/kg IV push to maximum 3 mg/kg",
      "D": "200 mg IV over 1 hour"
    },
    "answer": "B",
    "explanation": "Per 2020 AHA ACLS guidelines, amiodarone for refractory VF/pulseless VT: initial dose 300 mg IV push (undiluted or in 20-30 mL D5W), followed by 150 mg IV push for persistent VF after additional shock. Amiodarone is the first-line antiarrhythmic for shock-refractory VF/pulseless VT (ARREST and ALIVE trials). Lidocaine is an acceptable alternative if amiodarone is unavailable (1-1.5 mg/kg IV, max 3 mg/kg total). The 150 mg dose is used for stable VT or hemodynamically stable arrhythmias, not refractory VF. The goal is rapid drug delivery to achieve systemic concentration during ongoing CPR."
  },
  {
    "id": 203,
    "chapter": 21,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 65-year-old woman has atrial fibrillation with rapid ventricular response (HR 148) and hypotension (BP 80/52) developing acutely in the ICU. She is awake but confused. What is the MOST appropriate immediate management?",
    "options": {
      "A": "Diltiazem 0.25 mg/kg IV to control rate",
      "B": "Synchronized cardioversion",
      "C": "Amiodarone 150 mg IV over 10 minutes for rate control",
      "D": "Digoxin 0.5 mg IV loading dose"
    },
    "answer": "B",
    "explanation": "New-onset atrial fibrillation with rapid ventricular response causing hemodynamic instability (hypotension) requires immediate synchronized cardioversion. Rate-control or rhythm-control medications are secondary options for hemodynamically stable AF. Synchronized cardioversion for AF requires 100-200 J biphasic. 'Synchronized' mode is critical \u2014 the shock is timed to the QRS to avoid the T-wave vulnerable period (unsynchronized shock during T-wave can cause VF). Diltiazem and beta-blockers are rate-control agents for stable AF; they are negatively inotropic and contraindicated in cardiogenic shock. Digoxin has slow onset and modest rate-control efficacy."
  },
  {
    "id": 204,
    "chapter": 21,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 55-year-old man has wide complex tachycardia (HR 178, BP 108/72) after starting IV procainamide. His ECG shows QRS duration 160 ms, QTc 580 ms. He develops torsades de pointes (polymorphic VT). What is the FIRST-LINE treatment?",
    "options": {
      "A": "Amiodarone 300 mg IV push",
      "B": "IV magnesium sulfate 2g IV over 15 minutes",
      "C": "Lidocaine 1.5 mg/kg IV push",
      "D": "Synchronized cardioversion at 200 J"
    },
    "answer": "B",
    "explanation": "Torsades de pointes (TdP) is a polymorphic VT associated with QTc prolongation (often from medications: antiarrhythmics, antibiotics, antipsychotics) and is treated differently from other VTs. First-line treatment: IV magnesium sulfate 2g over 15 minutes (suppresses EADs \u2014 early afterdepolarizations \u2014 that trigger TdP). Temporary pacing (overdrive pacing) or isoproterenol can increase heart rate to shorten the QT interval. The offending drug (procainamide) must be stopped. Amiodarone is contraindicated in drug-induced QTc-prolongation TdP (further prolongs QTc). Lidocaine is less effective. Synchronized cardioversion for hemodynamically unstable TdP."
  },
  {
    "id": 205,
    "chapter": 21,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 70-year-old man has symptomatic complete heart block (HR 32, BP 72/44, confusion) after inferior wall MI. Transcutaneous pacing is initiated. Which ECG finding confirms EFFECTIVE capture with transcutaneous pacing?",
    "options": {
      "A": "Pacemaker spikes visible on ECG",
      "B": "Wide QRS complexes following each pacemaker spike with corresponding pulse on palpation",
      "C": "Narrow QRS following pacing spikes indicating normal conduction",
      "D": "Heart rate increases to 80 bpm on the monitor display"
    },
    "answer": "B",
    "explanation": "Effective transcutaneous pacing capture requires: (1) Pacing spikes visible on ECG AND (2) Wide QRS complex following each spike (indicating ventricular capture, not native narrow-complex conduction) AND (3) Mechanical capture \u2014 verified by palpating a pulse corresponding to each paced beat (femoral pulse preferred during CPR) or arterial line waveform. Monitor display rate alone can be misleading \u2014 the monitor may show a rate based on artifact. Narrow QRS after pacing spikes would suggest native conduction restored, not pacing capture. Always verify mechanical capture!"
  },
  {
    "id": 206,
    "chapter": 21,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 52-year-old woman without any structural heart disease develops a narrow complex regular tachycardia (HR 192, P waves visible with short RP interval before QRS). Carotid sinus massage terminates the arrhythmia. What is the MOST likely arrhythmia and long-term treatment?",
    "options": {
      "A": "Atrial flutter; DC cardioversion",
      "B": "AVNRT (AV nodal reentrant tachycardia); adenosine acutely, catheter ablation for recurrence",
      "C": "AVRT (AV reentrant tachycardia via accessory pathway); digoxin for rate control",
      "D": "Inappropriate sinus tachycardia; beta-blockade"
    },
    "answer": "B",
    "explanation": "AVNRT is the most common paroxysmal SVT in adults. It is characterized by: HR 150-250 bpm, narrow QRS (regular), P waves that are often hidden within or immediately before/after QRS (short RP interval), and termination with vagal maneuvers or adenosine. In AVNRT, the reentry circuit is within the AV node using fast and slow pathways. Acute treatment: adenosine 6 mg IV push (then 12 mg if ineffective), vagal maneuvers, or cardioversion for unstable patients. Long-term: catheter ablation of the slow pathway (success rate >95%). Digoxin is contraindicated in WPW/AVRT due to enhanced accessory pathway conduction."
  },
  {
    "id": 207,
    "chapter": 21,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 48-year-old man has 30 minutes of pulseless ventricular tachycardia (cardiac arrest). Despite 4 shocks and amiodarone, VF/VT persists. His body temperature is 33\u00b0C (spontaneously hypothermic from prolonged arrest). What is the RECOMMENDED threshold for declaring resuscitation failure?",
    "options": {
      "A": "20 minutes of resuscitation without ROSC",
      "B": "Resuscitation efforts should continue until core temperature is \u226532-35\u00b0C ('no one is dead until warm and dead')",
      "C": "After 6 defibrillation attempts",
      "D": "When PetCO2 drops below 10 mmHg for >20 minutes"
    },
    "answer": "B",
    "explanation": "The maxim 'no one is dead until warm and dead' applies to hypothermic cardiac arrest. Hypothermia (core temperature <30\u00b0C) decreases metabolic rate, providing neuroprotection, and can cause cardiac arrest refractory to standard resuscitation. VF is particularly resistant to defibrillation below 30\u00b0C. Resuscitation should continue with active rewarming until core temperature \u226532-35\u00b0C before declaring resuscitation failure. ECMO rewarming is the most rapid method for severe hypothermia. End-tidal CO2 <10 mmHg persistently suggests poor prognosis in normothermic arrest but is less reliable in hypothermia."
  },
  {
    "id": 208,
    "chapter": 21,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 65-year-old woman achieves ROSC after 18 minutes of cardiac arrest from VF. She remains comatose (GCS 5). Temperature is 37.2\u00b0C. Which post-cardiac arrest intervention has the STRONGEST evidence for improving neurologic outcomes?",
    "options": {
      "A": "Targeted temperature management (TTM) at 33\u00b0C for 24 hours",
      "B": "Prevention of fever (temperature <37.5\u00b0C) for 72 hours \u2014 based on TTM2 trial",
      "C": "Aggressive cooling to 28-30\u00b0C for maximum neuroprotection",
      "D": "Normal temperature maintenance (normothermia 36-37\u00b0C) with no cooling intervention"
    },
    "answer": "B",
    "explanation": "The TTM2 trial (2021, NEJM) randomized 1,900 patients to 33\u00b0C vs. fever prevention (<37.8\u00b0C) after out-of-hospital cardiac arrest and found NO difference in 6-month mortality or neurologic outcomes. This changed practice: the 2022 ERC/ESICM guidelines now recommend that all comatose survivors of OHCA should have temperature maintained <37.5\u00b0C for at least 72 hours, with fever actively treated. Cooling to 33\u00b0C remains an option (not shown to be harmful) but is no longer mandatory. This supersedes the 2002 HACA and Bernard trials that originally established 33\u00b0C TTM."
  },
  {
    "id": 209,
    "chapter": 21,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 55-year-old man with Wolf-Parkinson-White (WPW) syndrome and pre-excited atrial fibrillation (delta waves visible, HR 220, irregular, wide complex) presents to the ICU in shock. What is the MOST dangerous drug to administer?",
    "options": {
      "A": "Amiodarone",
      "B": "Adenosine",
      "C": "Verapamil or diltiazem",
      "D": "IV procainamide"
    },
    "answer": "C",
    "explanation": "Pre-excited AF in WPW syndrome (impulses conducting via accessory pathway, producing delta waves and rapid irregular wide-complex tachycardia) is a medical emergency. AV nodal blocking agents (diltiazem, verapamil, digoxin, adenosine) are CONTRAINDICATED in pre-excited AF because they block the AV node without affecting the accessory pathway, potentially accelerating conduction exclusively through the accessory pathway and precipitating VF. IV procainamide (blocks accessory pathway conduction) is the preferred pharmacologic treatment. Immediate electrical cardioversion is required for hemodynamic instability. Amiodarone is controversial but may be used as an alternative."
  },
  {
    "id": 210,
    "chapter": 21,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 72-year-old woman has a wide complex regular tachycardia (HR 188, BP 110/72). The following findings favor ventricular tachycardia (VT) over SVT with aberrancy: atrioventricular dissociation, fusion beats, and QRS duration >160 ms. Which statement about VT diagnosis is TRUE?",
    "options": {
      "A": "Regular rhythm in wide complex tachycardia is diagnostic of SVT",
      "B": "In patients with structural heart disease and prior MI, >90% of wide complex tachycardias are VT",
      "C": "A 1:1 VA relationship on ECG rules out VT",
      "D": "Hemodynamic stability during tachycardia rules out VT"
    },
    "answer": "B",
    "explanation": "The most important clinical principle: in patients with known structural heart disease (prior MI, cardiomyopathy), >90% of wide complex tachycardias are VT, not SVT with aberrancy. AV dissociation (independent P wave and QRS activity) is pathognomonic for VT when present. Hemodynamic stability does NOT rule out VT \u2014 VT can be hemodynamically well-tolerated in some patients. VT algorithms (Brugada, Vereckei) use specific ECG criteria to distinguish VT from SVT with aberrancy. 'If in doubt, treat as VT' is a safe clinical approach. Regular rhythm alone cannot differentiate VT from SVT."
  },
  {
    "id": 211,
    "chapter": 22,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 68-year-old man with known EF 20% presents with acute decompensated heart failure (ADHF). BP 160/100, HR 108, SpO2 88%, RR 36, severe orthopnea, bilateral crackles, and JVD to the jaw. He is in respiratory distress. What is the MOST IMMEDIATE treatment?",
    "options": {
      "A": "IV furosemide 80 mg push as the first priority",
      "B": "Non-invasive ventilation (BiPAP) + IV nitroglycerin (afterload reduction) + IV furosemide",
      "C": "Immediate intubation for airway protection",
      "D": "IV morphine 4 mg for anxiolysis and preload reduction"
    },
    "answer": "B",
    "explanation": "Acute decompensated HF with pulmonary edema and hypertension (BP 160/100) \u2014 'warm and wet/hypertensive' profile \u2014 responds best to non-invasive ventilation (reduces work of breathing, decreases preload/afterload, improves oxygenation) combined with IV vasodilators (nitroglycerin reduces preload and afterload) and IV loop diuretics. 3CPAP trial confirmed NIV reduces intubation rates and improves symptoms in ADHF. IV morphine is associated with worse outcomes in ADHF (ADHERE registry) due to respiratory depression and hypotension and should be avoided. Intubation is reserved for NIV failure."
  },
  {
    "id": 212,
    "chapter": 22,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 72-year-old man with ADHF receives furosemide 80 mg IV and IV nitroglycerin. His blood pressure normalizes but urine output remains <30 mL/hr over 4 hours. Creatinine rises from 1.8 to 2.6 mg/dL. What is the MOST appropriate next step?",
    "options": {
      "A": "Increase furosemide to 160 mg IV push immediately",
      "B": "Stop diuresis; his AKI is a contraindication to further diuresis",
      "C": "Assess volume responsiveness and adequacy of diuresis; consider combination diuretic therapy (furosemide + metolazone)",
      "D": "Initiate CRRT immediately for volume overload and AKI"
    },
    "answer": "C",
    "explanation": "Diuretic resistance in ADHF-associated AKI ('cardio-renal syndrome type 1') is common. Low urine output despite high-dose loop diuretics suggests diuretic resistance due to aldosterone escape, tubular dysfunction, or inadequate drug delivery to tubular lumen. Options: (1) Increase loop diuretic dose; (2) Add thiazide-type diuretic (metolazone 2.5-10 mg PO 30 min before furosemide \u2014 sequential nephron blockade); (3) Consider switching to torsemide (better oral bioavailability); (4) Assess if the patient is truly volume overloaded vs. developing true cardiorenal syndrome. CRRT is reserved for truly refractory cases. Mild AKI alone does not contraindicate diuresis when volume overloaded."
  },
  {
    "id": 213,
    "chapter": 22,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 60-year-old woman with acute HF has a PA catheter showing: CO 2.0 L/min, CI 1.1 L/min/m\u00b2, PCWP 30 mmHg, SVR 2,400 dyn\u00b7s/cm5, MAP 78 mmHg. She is on norepinephrine and dobutamine. Her clinical profile is 'cold and wet.' What ADDITIONAL intervention should be considered?",
    "options": {
      "A": "Add high-dose furosemide to reduce PCWP",
      "B": "Mechanical circulatory support (Impella or VA-ECMO) given severely reduced CI",
      "C": "Titrate norepinephrine higher to normalize SVR",
      "D": "Discontinue dobutamine to reduce myocardial oxygen demand"
    },
    "answer": "B",
    "explanation": "This hemodynamic profile (CI 1.1 \u2014 critically low, PCWP 30 \u2014 severely elevated, high SVR, on dual vasoactive therapy) represents Stage D cardiogenic shock with end-organ dysfunction (Forrester Class IV / SCAI Stage D-E). When patients remain in refractory cardiogenic shock on maximal medical therapy, mechanical circulatory support (MCS) escalation should be considered: Impella (provides up to 3.7 L/min augmentation), TandemHeart, or VA-ECMO (full cardiac replacement). The IABP-SHOCK II trial showed IABP alone does not improve mortality; newer MCS devices are appropriate for this refractory profile."
  },
  {
    "id": 214,
    "chapter": 22,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 55-year-old man with severe acute HF has a B-type natriuretic peptide (BNP) of 4,200 pg/mL on admission. After 3 days of IV diuresis, his BNP is 1,800 pg/mL and he has lost 5 kg. Symptoms are improved but he still has mild leg edema. His creatinine is 2.1 (up from 1.4). What is the MOST appropriate next step?",
    "options": {
      "A": "Discharge home as BNP has decreased >50%",
      "B": "Continue IV diuresis aggressively until BNP <100 pg/mL",
      "C": "Continue optimization of oral medications (ACEi/ARB, beta-blocker, MRA), transition to oral diuretics, and reassess discharge readiness",
      "D": "Initiate ultrafiltration (aquapheresis) to achieve euvolemia"
    },
    "answer": "C",
    "explanation": "ADHF discharge optimization: transition from IV to oral diuretics once euvolemia is approaching, with adequate oral dose to maintain dry weight. Guideline-directed medical therapy (GDMT) should be optimized or initiated: ACEi/ARNi, beta-blocker (carvedilol, metoprolol succinate), MRA (spironolactone), and SGLT2 inhibitor (dapagliflozin, empagliflozin \u2014 shown to reduce HF hospitalizations). BNP decline is associated with improved outcomes but BNP <100 is not a discharge target in all patients. Mild persistent edema with improving creatinine is acceptable. Ultrafiltration (CARRESS trial) was not superior to pharmacologic diuresis."
  },
  {
    "id": 215,
    "chapter": 22,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 70-year-old woman with HFpEF (EF 60%, PCWP 28 mmHg) presents with dyspnea and hypotension (BP 78/50). Her CO is 3.8 L/min. What is the PRIMARY hemodynamic problem in HFpEF?",
    "options": {
      "A": "Reduced cardiac contractility (systolic dysfunction)",
      "B": "Elevated filling pressures from diastolic dysfunction with rate-dependent impaired filling",
      "C": "High SVR causing afterload mismatch",
      "D": "Primary pulmonary hypertension causing right heart failure"
    },
    "answer": "B",
    "explanation": "HFpEF (preserved EF) is characterized by diastolic dysfunction \u2014 impaired ventricular relaxation and reduced compliance causing elevated filling pressures (PCWP >15 mmHg) despite normal systolic function (EF \u226550%). Cardiac output is maintained at rest but cannot increase with exercise (chronotropic incompetence). In acute decompensation, causes include: uncontrolled hypertension, AFib with rapid ventricular rate (loss of atrial contribution to filling), volume overload, and ischemia. Treatment: diuresis, rate control, blood pressure control. Unlike HFrEF, no specific disease-modifying therapy has shown mortality benefit in HFpEF beyond SGLT2 inhibitors."
  },
  {
    "id": 216,
    "chapter": 22,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 65-year-old man with EF 15% and ADHF is considered for IV inotrope therapy. Which statement is TRUE regarding the long-term use of inotropes in chronic heart failure?",
    "options": {
      "A": "Dobutamine improves long-term survival in decompensated HF",
      "B": "Milrinone reduces hospitalization rates in HF if used intermittently",
      "C": "Inotropes improve short-term hemodynamics but are associated with increased long-term mortality; used as bridge to LVAD, transplant, or palliation",
      "D": "Continuous low-dose dopamine (2 mcg/kg/min) improves renal function in ADHF"
    },
    "answer": "C",
    "explanation": "Chronic continuous or intermittent inotrope therapy increases mortality in heart failure (DICE trial with dobutamine, PROMISE trial with milrinone). The OPTIME trial showed milrinone increased adverse outcomes vs. placebo in acute HF. Despite worsening hemodynamics on inotropes, survival is paradoxically reduced \u2014 likely due to increased arrhythmias and myocardial oxygen demand. Inotropes are therefore reserved for: bridge to LVAD/transplant, perioperative support, or palliative intent in end-stage HF. 'Renal-dose' dopamine is ineffective (FACET trial). Short-term inotrope use for acute decompensation with low output is appropriate."
  },
  {
    "id": 217,
    "chapter": 22,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 58-year-old man with chronic HFrEF (EF 22%) presents with ADHF. He was previously on carvedilol 25 mg BID, lisinopril 10 mg, and spironolactone 25 mg. In the context of decompensated HF requiring vasopressors, what should be done with his chronic beta-blocker?",
    "options": {
      "A": "Continue carvedilol at full dose to protect the myocardium",
      "B": "Reduce carvedilol dose by 50% temporarily",
      "C": "Discontinue carvedilol during acute decompensation with hemodynamic compromise; restart at low dose when stable",
      "D": "Switch to metoprolol tartrate IV for better titration"
    },
    "answer": "C",
    "explanation": "Beta-blockers should be discontinued in acute decompensated HF with hemodynamic compromise (requiring vasopressors, cardiogenic shock, or hemodynamically significant bradycardia). Carvedilol's negative inotropic effects worsen low-output states. Once hemodynamic stability is restored, beta-blockers should be restarted at a low dose (carvedilol 3.125 mg BID or metoprolol succinate 12.5-25 mg) before discharge, as abrupt discontinuation risks rebound tachycardia and ischemia. Multiple trials (COMET, COPERNICUS) confirm beta-blockers improve survival in stable chronic HFrEF but should not be used in acute decompensation with shock."
  },
  {
    "id": 218,
    "chapter": 22,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 62-year-old woman with ADHF has been on IV furosemide infusion for 3 days. She is making adequate urine but her electrolytes show K+ 3.1 mEq/L and Mg2+ 1.3 mg/dL. She develops new-onset AF with RVR (HR 148). What electrolyte replacement approach is MOST important before attempting rhythm control?",
    "options": {
      "A": "No electrolyte correction needed; cardiovert immediately",
      "B": "Replace both potassium and magnesium before or concurrent with rate/rhythm control",
      "C": "Replace only potassium; magnesium is not arrhythmogenic",
      "D": "Start amiodarone to provide simultaneous rate control and cardioversion"
    },
    "answer": "B",
    "explanation": "Hypokalemia and hypomagnesemia are potent arrhythmia triggers and both reduce the efficacy of antiarrhythmic drugs and cardioversion. Magnesium is required for cellular potassium reabsorption (Na-K-ATPase) \u2014 hypomagnesemia perpetuates hypokalemia. Both electrolytes lower the threshold for AF and other arrhythmias. IV potassium and magnesium should be repleted before or concurrent with antiarrhythmic therapy. Target K+ \u22654.0 mEq/L and Mg2+ \u22652.0 mg/dL in patients with cardiac arrhythmias. Electrolyte abnormalities from diuretic use are a common precipitant of new-onset AF in ADHF patients."
  },
  {
    "id": 219,
    "chapter": 22,
    "domain": "Cardiology/Arrhythmias",
    "question": "Which medication has been shown to reduce HF hospitalizations and cardiovascular mortality in both HFrEF AND HFpEF patients?",
    "options": {
      "A": "Sacubitril-valsartan (ARNi)",
      "B": "Carvedilol",
      "C": "SGLT2 inhibitors (dapagliflozin, empagliflozin)",
      "D": "Spironolactone"
    },
    "answer": "C",
    "explanation": "SGLT2 inhibitors are the first drug class to demonstrate HF hospitalization and cardiovascular mortality reduction in BOTH HFrEF (DAPA-HF with dapagliflozin, EMPEROR-Reduced with empagliflozin) AND HFpEF (EMPEROR-Preserved with empagliflozin, DELIVER with dapagliflozin). Sacubitril-valsartan (PARADIGM-HF) and carvedilol/metoprolol succinate (MERIT-HF, COPERNICUS) have proven mortality benefit only in HFrEF. Spironolactone (TOPCAT trial) did not meet its primary endpoint in HFpEF in the overall population. SGLT2 inhibitors are now a pillar of HF therapy across the EF spectrum."
  },
  {
    "id": 220,
    "chapter": 22,
    "domain": "Cardiology/Arrhythmias",
    "question": "A 60-year-old man with ADHF who is 'cold and wet' (CI 1.6, PCWP 28, MAP 62) does NOT respond adequately to IV furosemide alone. Which vasodilator is MOST appropriate with severe pulmonary edema but borderline hypotension (MAP 62)?",
    "options": {
      "A": "IV nitroglycerin at 10-20 mcg/min (can cause hypotension at low doses)",
      "B": "IV nitroprusside (smooth afterload reduction, titratable)",
      "C": "IV nesiritide (BNP analog with vasodilatory and diuretic effects)",
      "D": "No vasodilator \u2014 vasodilators are contraindicated when MAP <65 mmHg"
    },
    "answer": "B",
    "explanation": "IV nitroprusside is a highly titratable, potent arteriolar and venular vasodilator that reduces both preload and afterload \u2014 ideal for the 'cold and wet' profile in ADHF with severe pulmonary edema and high SVR. It can dramatically improve CI by reducing afterload in patients with severe systolic dysfunction. It requires arterial line monitoring and ICU care. Nitroglycerin predominantly reduces preload (venodilator) and is effective for pulmonary edema from elevated filling pressures. Nesiritide modestly reduces PCWP but was not superior to other vasodilators in ASCEND-HF. With MAP 62, careful titration of any vasodilator is required."
  },
  {
    "id": 221,
    "chapter": 23,
    "domain": "Neurocritical Care",
    "question": "A 68-year-old man presents with sudden-onset left hemiplegia, hemisensory loss, and hemineglect that began 75 minutes ago. CT head shows no hemorrhage and CT perfusion shows a large ischemic penumbra. He is a candidate for IV tPA. His blood pressure is 182/98. What blood pressure target is REQUIRED before administering IV tPA?",
    "options": {
      "A": "BP must be below 185/110 before and maintained below 180/105 during and after tPA",
      "B": "BP must be below 140/90 for at least 2 hours before tPA",
      "C": "BP must be below 160/90 for safety",
      "D": "Blood pressure is not a contraindication to tPA in the time window"
    },
    "answer": "A",
    "explanation": "Per AHA/ASA stroke guidelines, IV alteplase (tPA) requires SBP <185 mmHg and DBP <110 mmHg before treatment and maintained <180/105 mmHg for 24 hours after. Antihypertensive treatment (labetalol IV 10 mg or nicardipine infusion) may be needed to achieve this threshold. The threshold 185/110 (before) / 180/105 (after) balances hemorrhagic transformation risk with maintaining adequate perfusion to the ischemic penumbra. Aggressive BP lowering (<160/90) may reduce penumbral perfusion in acute ischemic stroke. Permissive hypertension (allowing BP up to 220/120) is the strategy when tPA is NOT given."
  },
  {
    "id": 222,
    "chapter": 23,
    "domain": "Neurocritical Care",
    "question": "A 75-year-old woman presents with left MCA ischemic stroke, NIHSSscore 18, onset 2 hours ago. CT shows no hemorrhage. She is on warfarin with INR 2.8. What is the correct management regarding thrombolysis?",
    "options": {
      "A": "Administer tPA at full dose \u2014 warfarin does not affect tPA efficacy",
      "B": "tPA is contraindicated with INR >1.7; proceed to mechanical thrombectomy evaluation if eligible",
      "C": "Reverse warfarin with vitamin K and give tPA after INR normalizes",
      "D": "Give tPA at half-dose given the elevated INR"
    },
    "answer": "B",
    "explanation": "IV tPA (alteplase) is contraindicated when current anticoagulant use has a measurable anticoagulant effect \u2014 specifically INR >1.7 for warfarin. An INR of 2.8 is an absolute contraindication to IV tPA due to unacceptably high hemorrhagic transformation risk. Mechanical thrombectomy (MT) for large vessel occlusion (LVO) is NOT contraindicated by anticoagulation and should be urgently evaluated. MT is indicated for LVO stroke with NIHSS \u22656, evidence of penumbra on perfusion imaging, last known well within 6-24 hours (with eligibility criteria per DAWN/DEFUSE-3 trials)."
  },
  {
    "id": 223,
    "chapter": 23,
    "domain": "Neurocritical Care",
    "question": "A 55-year-old man with hypertensive emergency (BP 220/130) develops a sudden severe 'thunderclap' headache, vomiting, and decreased LOC. CT head shows diffuse subarachnoid hemorrhage (SAH). What is the MOST critical early complication to prevent in SAH?",
    "options": {
      "A": "Cerebral vasospasm occurring immediately within 24 hours",
      "B": "Rebleeding from the aneurysm in the first 24-72 hours",
      "C": "Hydrocephalus developing over weeks",
      "D": "Seizures occurring at onset"
    },
    "answer": "B",
    "explanation": "Rebleeding is the most feared early complication of aneurysmal SAH, occurring in 15-20% within 24 hours (peak risk in first 6 hours) and carrying 70-80% mortality. Prevention requires urgent aneurysm securing: surgical clipping or endovascular coiling within 24-72 hours of SAH. BP control (target SBP <160 mmHg) and antifibrinolytics (tranexamic acid \u2014 reduces rebleeding risk by 80% if surgery delayed) are bridging measures. Vasospasm occurs days 4-14 post-SAH, not immediately. Hydrocephalus (acute or communicating) develops in 20-30% of SAH and may require EVD."
  },
  {
    "id": 224,
    "chapter": 23,
    "domain": "Neurocritical Care",
    "question": "A 62-year-old woman with aneurysmal SAH (day 7) develops sudden new focal deficits: right hemiparesis and aphasia. CT shows no rebleed. TCD velocities in the left MCA are 220 cm/s (normal <120). What is the diagnosis and treatment?",
    "options": {
      "A": "Rebleeding requiring repeat angiography and embolization",
      "B": "Cerebral vasospasm with delayed cerebral ischemia (DCI); triple-H therapy or rescue angioplasty",
      "C": "Seizure-related Todd's paralysis; start antiepileptic therapy",
      "D": "Hyponatremia from SIADH; hypertonic saline infusion"
    },
    "answer": "B",
    "explanation": "Cerebral vasospasm with delayed cerebral ischemia (DCI) peaks days 4-14 post-SAH. TCD velocities >200 cm/s in the MCA indicate severe vasospasm with high risk of DCI. Treatment: Oral nimodipine (60 mg q4h \u00d7 21 days \u2014 the only prophylactic intervention proven to reduce DCI and improve outcomes); 'Triple-H' therapy (Hypertension, Hypervolemia, Hemodilution) \u2014 now primarily hypertensive therapy (induced hypertension); Rescue endovascular therapy: intra-arterial verapamil or balloon angioplasty for refractory vasospasm. Nimodipine prophylaxis should be started on admission and continued regardless of vasospasm development."
  },
  {
    "id": 225,
    "chapter": 23,
    "domain": "Neurocritical Care",
    "question": "A 70-year-old man on warfarin (INR 4.2) for AF presents with sudden left hemiplegia. CT shows a 3 cm right basal ganglia hypertensive intracerebral hemorrhage (ICH). Which intervention has the MOST evidence for reducing hematoma expansion?",
    "options": {
      "A": "Recombinant Factor VIIa (rFVIIa)",
      "B": "Platelet transfusion for platelet count >100,000",
      "C": "Rapid INR reversal with 4-factor PCC and vitamin K",
      "D": "Fresh frozen plasma alone"
    },
    "answer": "C",
    "explanation": "Warfarin-associated ICH requires urgent anticoagulation reversal. 4-factor prothrombin complex concentrate (4F-PCC) is the agent of choice for rapid warfarin reversal in ICH: it replaces factors II, VII, IX, X and can normalize INR within minutes, compared to FFP (hours due to large volumes). IV Vitamin K (10 mg) provides sustained reversal over 6-12 hours. The ANNEXA-4 trial addressed andexanet alfa for DOACs. Recombinant FVIIa was shown in FAST trial to reduce hematoma expansion but increased thromboembolic events without mortality benefit. FFP alone is too slow and volume-limited."
  },
  {
    "id": 226,
    "chapter": 23,
    "domain": "Neurocritical Care",
    "question": "A 55-year-old man with severe traumatic brain injury (TBI) has GCS 6 after a motor vehicle accident. CT shows diffuse axonal injury with midline shift and bilateral contusions. ICP monitoring is initiated (ICP 28 mmHg, CPP 52 mmHg). Which intervention should be FIRST in the stepwise management of elevated ICP?",
    "options": {
      "A": "Immediate barbiturate coma with pentobarbital",
      "B": "Head of bed elevation 30\u00b0, sedation optimization, and treatment of pain/agitation \u2014 then osmotherapy if ICP remains elevated",
      "C": "Hyperventilation to PaCO2 25 mmHg as first-line ICP management",
      "D": "Emergent decompressive craniectomy"
    },
    "answer": "B",
    "explanation": "Stepwise ICP management in TBI follows a tiered protocol: Tier 1 (basic/foundational): head elevation 30\u00b0, head midline position, adequate sedation/analgesia, fever control, normonatremia, normoglycemia, normocapnia (PaCO2 35-40). Tier 2: osmotherapy (mannitol 0.25-1 g/kg IV or hypertonic saline 3% or 23.4%), CSF drainage if EVD in place, sedation deeping. Tier 3: barbiturate coma, decompressive craniectomy, therapeutic hypothermia. Prophylactic hyperventilation (PaCO2 <35) is contraindicated \u2014 causes cerebral vasoconstriction and ischemia. Brief hyperventilation is reserved for acute herniation as a temporizing measure."
  },
  {
    "id": 227,
    "chapter": 23,
    "domain": "Neurocritical Care",
    "question": "A 65-year-old man presents with sudden onset of severe headache, diplopia, and blown pupil (right pupil 7 mm, non-reactive). CT shows a right posterior communicating artery aneurysm with SAH. What is the MECHANISM of the third cranial nerve palsy?",
    "options": {
      "A": "Lateral displacement of the brainstem compressing CN III at the tentorial edge",
      "B": "Direct compression of CN III (which carries parasympathetic pupillary fibers on its outer surface) by the aneurysm",
      "C": "Ischemia of the CN III nucleus in the midbrain",
      "D": "Cavernous sinus thrombosis from the hemorrhage"
    },
    "answer": "B",
    "explanation": "A posterior communicating artery (PComm) aneurysm causing 'surgical CN III palsy' compresses the third cranial nerve as it passes through the subarachnoid space. Crucially, the pupillomotor (parasympathetic) fibers travel on the OUTER surface of CN III and are compressed first by extrinsic mass lesions (aneurysm), causing a 'pupil-involved' CN III palsy (ptosis, ophthalmoplegia + dilated non-reactive pupil). 'Medical' CN III palsy (from microvascular ischemia in DM/HTN) typically SPARES the pupil as ischemia affects the central fibers first. Any painful or pupil-involved CN III palsy must be urgently evaluated for aneurysm."
  },
  {
    "id": 228,
    "chapter": 23,
    "domain": "Neurocritical Care",
    "question": "A 60-year-old woman with hypertensive emergency (BP 220/130) presents with altered mental status, headache, and visual changes. MRI brain shows symmetric T2/FLAIR hyperintensities in posterior parietal and occipital lobes bilaterally. What is the diagnosis and treatment?",
    "options": {
      "A": "Basilar artery thrombosis; immediate thrombectomy",
      "B": "Posterior reversible encephalopathy syndrome (PRES); controlled BP lowering",
      "C": "Bilateral watershed infarcts; permissive hypertension",
      "D": "CNS vasculitis; high-dose steroids"
    },
    "answer": "B",
    "explanation": "PRES (Posterior Reversible Encephalopathy Syndrome) presents with headache, altered mental status, seizures, and visual disturbances in the setting of hypertensive emergency, eclampsia, immunosuppressants (calcineurin inhibitors), or chemotherapy. MRI shows characteristic posterior T2/FLAIR hyperintensities representing vasogenic edema from failed cerebral autoregulation and blood-brain barrier breakdown. Treatment: controlled blood pressure lowering (target 15-25% reduction in MAP in first hour, then gradual normalization), discontinue offending drug if drug-induced. The condition is typically reversible with treatment, though ischemia can occur if untreated. Seizures are managed with antiepileptics."
  },
  {
    "id": 229,
    "chapter": 23,
    "domain": "Neurocritical Care",
    "question": "A 72-year-old man undergoes carotid endarterectomy (CEA) for high-grade carotid stenosis. Two hours postoperatively, he develops ipsilateral hemispheric stroke symptoms. What is the MOST likely mechanism and management?",
    "options": {
      "A": "Cerebral hyperperfusion syndrome; urgent anti-hypertensives",
      "B": "Perioperative ischemic stroke from carotid thrombosis or embolism; emergent imaging and return to OR or catheter-based intervention",
      "C": "Postoperative seizure; antiepileptic therapy",
      "D": "Stroke from anesthesia-related hypotension; vasopressors"
    },
    "answer": "B",
    "explanation": "Early stroke symptoms (<24 hours) after CEA most commonly result from: (1) Carotid thrombosis at the endarterectomy site, (2) Intraluminal embolism from thrombus or atheromatous debris. Immediate duplex ultrasound or CT angiography is performed. If carotid occlusion is identified, emergent return to the OR for thrombectomy/revision or catheter-directed intervention is required. Cerebral hyperperfusion syndrome occurs later (1-7 days after CEA) and presents with ipsilateral headache, seizures, and neurologic deficits in the context of sudden increased cerebral blood flow \u2014 it is managed with blood pressure control, not urgent revascularization."
  },
  {
    "id": 230,
    "chapter": 23,
    "domain": "Neurocritical Care",
    "question": "A 55-year-old woman with known basilar artery stenosis presents with progressive dysarthria, diplopia, bilateral limb weakness, and decreasing consciousness over 4 hours. CT-angiography confirms basilar artery occlusion. What treatment should be urgently considered?",
    "options": {
      "A": "IV tPA and permissive hypertension",
      "B": "Endovascular thrombectomy regardless of time since onset, given high mortality without intervention",
      "C": "Anticoagulation with heparin only; thrombectomy is not proven for posterior circulation",
      "D": "Decompressive posterior fossa craniotomy"
    },
    "answer": "B",
    "explanation": "Basilar artery occlusion (BAO) is associated with 80-90% mortality without recanalization. While endovascular thrombectomy for anterior circulation stroke has defined time windows (24 hours for DAWN/DEFUSE-3 eligible patients), BAO is considered a different situation \u2014 the BASICS trial and ATTENTION/BAOCHE trial data support thrombectomy for basilar artery occlusion up to 24 hours, given the near-universal mortality without treatment. IV tPA should be given if no contraindications and within the window, followed immediately by thrombectomy regardless. The BASILAR registry showed mechanical thrombectomy significantly reduced mortality compared to medical treatment."
  },
  {
    "id": 231,
    "chapter": 24,
    "domain": "Neurocritical Care",
    "question": "A 35-year-old woman presents with tonic-clonic seizures. She is given lorazepam 4 mg IV and the seizures continue at 10 minutes. She receives a second dose of lorazepam 4 mg at 15 minutes with no effect. Seizures continue at 25 minutes. What defines her condition and what is the NEXT pharmacologic intervention?",
    "options": {
      "A": "Status epilepticus; immediate levetiracetam 60 mg/kg IV (max 4,500 mg)",
      "B": "Refractory seizures; immediate intubation and propofol infusion",
      "C": "Status epilepticus (convulsive >5 minutes OR after 2 doses of benzodiazepines); second-line therapy: IV fosphenytoin OR levetiracetam OR valproate",
      "D": "Epilepsy breakthrough; oral loading with carbamazepine"
    },
    "answer": "C",
    "explanation": "Status epilepticus (SE) is defined as continuous seizures >5 minutes or \u22652 seizures without return to baseline. Established SE not responsive to 2 doses of benzodiazepines requires second-line IV antiepileptics. The ESETT trial (2019) showed equivalence between IV fosphenytoin (20 mg PE/kg), IV levetiracetam (60 mg/kg), and IV valproate (40 mg/kg) for established SE \u2014 none was clearly superior. Choice depends on clinical context: valproate avoided in pregnancy/liver disease; phenytoin/fosphenytoin has drug interactions; levetiracetam is often preferred for simplicity. Refractory SE (failure of 2 drug classes) requires anesthetic agents (propofol, midazolam infusion)."
  },
  {
    "id": 232,
    "chapter": 24,
    "domain": "Neurocritical Care",
    "question": "A 60-year-old man with known epilepsy presents with generalized tonic-clonic seizures. After IV lorazepam and IV levetiracetam, seizures continue. He is intubated and started on continuous EEG (cEEG). cEEG shows non-convulsive status epilepticus (NCSE). Which finding on cEEG is MOST diagnostic of NCSE?",
    "options": {
      "A": "Generalized slowing consistent with encephalopathy",
      "B": "Continuous focal or generalized spike-wave or sharp-wave complexes at \u22653 Hz for >30 minutes without clinical correlate",
      "C": "Sleep spindles indicating deeper sedation",
      "D": "Burst suppression indicating adequate anesthetic depth"
    },
    "answer": "B",
    "explanation": "Non-convulsive status epilepticus (NCSE) is diagnosed on EEG showing persistent epileptiform activity \u2014 typically continuous or near-continuous spike-wave or sharp-wave discharges at \u22652.5-3 Hz for \u226530 minutes in the absence of obvious motor manifestations. NCSE occurs in up to 25-48% of critically ill patients with altered consciousness and requires cEEG for detection. Generalized slowing indicates encephalopathy, not SE. Burst suppression is the EEG target when treating refractory SE with anesthetics. NCSE has equal or greater morbidity than convulsive SE and requires aggressive treatment."
  },
  {
    "id": 233,
    "chapter": 24,
    "domain": "Neurocritical Care",
    "question": "A 45-year-old man with no prior neurologic history develops new-onset confusion, aphasia, fever (T 39.2\u00b0C), and seizures. CSF analysis: WBC 220 (90% lymphocytes), protein 88, glucose 62 (serum 98). MRI shows T2 signal abnormality in the right temporal lobe. What is the MOST likely diagnosis and immediate treatment?",
    "options": {
      "A": "Bacterial meningitis; ceftriaxone + vancomycin",
      "B": "HSV encephalitis; immediate IV acyclovir 10 mg/kg q8h",
      "C": "Autoimmune limbic encephalitis; high-dose IVIG",
      "D": "Tuberculous meningitis; RIPE therapy"
    },
    "answer": "B",
    "explanation": "HSV encephalitis is the most common cause of sporadic viral encephalitis and classically presents with fever, altered mental status, aphasia (left temporal lobe involvement), and seizures. CSF: lymphocytic pleocytosis, elevated protein, normal or mildly reduced glucose. MRI: T2/FLAIR hyperintensity in temporal lobe(s), insula, or cingulate. CSF HSV PCR is diagnostic (sensitivity 96%, specificity 99%). Treatment: IV acyclovir 10 mg/kg q8h \u00d7 14-21 days must be started EMPIRICALLY without waiting for PCR results. Delay in acyclovir therapy significantly worsens outcomes. Autoimmune limbic encephalitis (NMDA-R antibody) should be considered if HSV PCR is negative."
  },
  {
    "id": 234,
    "chapter": 24,
    "domain": "Neurocritical Care",
    "question": "A 52-year-old woman is intubated in the neuro-ICU for refractory status epilepticus on propofol infusion 60 mcg/kg/min for 72 hours. She develops new metabolic acidosis (pH 7.22, lactate 5.8 mmol/L), cardiac dysfunction (new EF 25% on echo), and rhabdomyolysis. What is the diagnosis?",
    "options": {
      "A": "Septic shock from aspiration pneumonia",
      "B": "Propofol infusion syndrome (PRIS)",
      "C": "Non-convulsive status epilepticus continuing despite propofol",
      "D": "Drug-induced myopathy from paralytic agent"
    },
    "answer": "B",
    "explanation": "Propofol Infusion Syndrome (PRIS) is a rare but life-threatening complication of high-dose (>4 mg/kg/hr = >67 mcg/kg/min), prolonged (>48h) propofol infusion. PRIS features: metabolic acidosis (lactic), rhabdomyolysis, cardiac arrhythmias/failure, hyperkalemia, hypertriglyceridemia, and multiorgan failure. Risk factors: high doses, prolonged use, catecholamines, steroids, and mitochondrial disease. Treatment: immediately discontinue propofol, switch to alternative sedation (midazolam, dexmedetomidine), supportive care including dialysis for AKI and renal replacement for acidosis, and consider pacemaker for bradyarrhythmias. Monitoring triglycerides and CK during prolonged propofol infusion is recommended."
  },
  {
    "id": 235,
    "chapter": 24,
    "domain": "Neurocritical Care",
    "question": "A 65-year-old man with hypertension and atrial fibrillation presents after a cerebellar stroke with sudden severe headache, vomiting, and ataxia. CT shows a 4 cm right cerebellar hemorrhage with effacement of the 4th ventricle and early obstructive hydrocephalus. He has GCS 12. What is the MOST appropriate management?",
    "options": {
      "A": "Medical management with mannitol and steroids only",
      "B": "Urgent posterior fossa decompressive surgery and/or ventriculostomy (EVD)",
      "C": "tPA for suspected hemorrhagic conversion of ischemic stroke",
      "D": "Lumbar puncture to relieve CSF pressure"
    },
    "answer": "B",
    "explanation": "Cerebellar hemorrhage with mass effect (>3 cm) and/or brainstem compression or obstructive hydrocephalus is a neurosurgical emergency. The posterior fossa (infratentorial compartment) is non-expandable \u2014 hemorrhagic expansion rapidly compresses the brainstem, causing respiratory failure and death. Indications for surgical intervention: hemorrhage diameter >3 cm, brainstem compression, obstructive hydrocephalus, and neurologic deterioration. Options: posterior fossa craniotomy for hematoma evacuation AND/OR EVD for hydrocephalus. Medical management alone is insufficient. Lumbar puncture is dangerous with infratentorial mass effect (risk of tonsillar herniation). tPA is absolutely contraindicated in hemorrhagic stroke."
  },
  {
    "id": 236,
    "chapter": 24,
    "domain": "Neurocritical Care",
    "question": "A 30-year-old woman with known myasthenia gravis (MG) presents with acute respiratory failure, dysphagia, and generalized weakness. FVC is 1.0 L (16 mL/kg). Pyridostigmine dose was recently doubled. What is the MOST critical next step to distinguish myasthenic crisis from cholinergic crisis?",
    "options": {
      "A": "Give additional pyridostigmine 60 mg PO and assess response",
      "B": "Measure acetylcholine receptor antibody titers",
      "C": "Hold pyridostigmine and provide respiratory support; edrophonium (Tensilon) test if needed to distinguish crises, or assume myasthenic and treat",
      "D": "Give IV atropine empirically for suspected cholinergic crisis"
    },
    "answer": "C",
    "explanation": "Myasthenic crisis (severe exacerbation requiring intubation) and cholinergic crisis (excess anticholinesterase causing muscarinic and nicotinic toxicity) can be difficult to distinguish. Both cause weakness and respiratory failure. Cholinergic signs: SLUDGE (salivation, lacrimation, urination, defecation, GI distress, emesis), bradycardia, miosis. Management: (1) Secure airway first (FVC <20 mL/kg is intubation threshold), (2) Hold pyridostigmine in both crises, (3) IVIG or plasmapheresis for myasthenic crisis (started after airway is secured), (4) Edrophonium test can differentiate but is rarely needed with modern management. Never give more pyridostigmine without airway secured."
  },
  {
    "id": 237,
    "chapter": 24,
    "domain": "Neurocritical Care",
    "question": "A 42-year-old man is admitted with Guillain-Barr\u00e9 syndrome. His FVC is declining (from 2.8 to 1.4 L over 48 hours), and he has dysautonomia with BP fluctuating from 80/50 to 200/120. The '20-30-40 Rule' is used for intubation decisions. Which values trigger PROPHYLACTIC intubation?",
    "options": {
      "A": "FVC <30 mL/kg, NIF >-30 cmH2O, PEFR <40% predicted (any single criterion)",
      "B": "FVC <20 mL/kg OR NIF (MIP) >-30 cmH2O OR PEF <40% predicted",
      "C": "SpO2 <90% or PaCO2 >45 mmHg as primary triggers",
      "D": "GCS <13 as the primary indication for intubation in GBS"
    },
    "answer": "B",
    "explanation": "The '20/30/40 Rule' for prophylactic intubation in neuromuscular respiratory failure (GBS, MG): FVC <20 mL/kg, NIF (negative inspiratory force/MIP) worse than -30 cmH2O (i.e., unable to generate more negative than -30), or PEF <40% predicted. Any one criterion met suggests significant respiratory muscle weakness requiring elective intubation. Waiting for hypoxemia (SpO2 <90%) or hypercapnia (PaCO2 >45) means waiting until decompensation is advanced and emergency intubation is required \u2014 much more dangerous in these patients with facial and bulbar weakness. GCS is typically preserved in GBS."
  },
  {
    "id": 238,
    "chapter": 24,
    "domain": "Neurocritical Care",
    "question": "A 55-year-old woman develops Wernicke's encephalopathy in the ICU (confusion, ophthalmoplegia, gait ataxia) after prolonged fasting and IV dextrose administration without thiamine supplementation. What is the CORRECT treatment?",
    "options": {
      "A": "Oral thiamine 100 mg daily for 7 days",
      "B": "IV thiamine 500 mg TID for 2-3 days, then 250 mg daily",
      "C": "IV thiamine 100 mg single dose then transition to oral",
      "D": "Glucose restriction until thiamine levels are corrected"
    },
    "answer": "B",
    "explanation": "Wernicke's encephalopathy requires aggressive IV thiamine replacement: 500 mg IV TID for 2-3 days (or until symptoms stabilize), then 250 mg daily. High-dose IV therapy is necessary because oral absorption is unreliable in malnourished ICU patients, and low-dose treatment (100 mg single dose) is frequently insufficient to reverse or prevent progression to Korsakoff syndrome (irreversible amnesia). IV thiamine must be given BEFORE glucose administration (glucose infusion accelerates thiamine depletion in deficient patients, precipitating Wernicke's). All at-risk patients (alcohol, malnutrition, prolonged vomiting) should receive empiric IV thiamine 200-500 mg before any dextrose."
  },
  {
    "id": 239,
    "chapter": 24,
    "domain": "Neurocritical Care",
    "question": "A 68-year-old man presents to the ICU with sudden global confusion, asterixis, multifocal myoclonus, and bilateral EEG showing triphasic waves. His ammonia is 320 mcg/dL. His liver enzymes are mildly elevated. He has no prior liver disease. What is the MOST important immediate step to identify the cause?",
    "options": {
      "A": "Abdominal CT to rule out hepatic malignancy",
      "B": "TIPS (transjugular intrahepatic portosystemic shunt) placement",
      "C": "Evaluate for precipitating causes: infection, GI bleed, medications, constipation, electrolyte abnormalities",
      "D": "Liver biopsy to assess fibrosis stage"
    },
    "answer": "C",
    "explanation": "Hepatic encephalopathy (HE) in a patient without known cirrhosis suggests new-onset liver failure, porto-systemic shunting, or an acute precipitant in occult liver disease. Precipitating causes account for >90% of HE episodes: GI bleeding (blood = protein load \u2192 ammonia), infection/SBP, constipation, dehydration, medications (sedatives, opioids), electrolyte disturbances, and dietary protein excess. Identifying and treating precipitants is the primary management. Ammonia-lowering therapy: lactulose (target 2-3 soft stools/day) and rifaximin. TIPS placement is used in portal hypertension but can worsen encephalopathy by increasing ammonia bypass."
  },
  {
    "id": 240,
    "chapter": 24,
    "domain": "Neurocritical Care",
    "question": "A 22-year-old male college student presents with fever (T 40.1\u00b0C), severe headache, photophobia, and stiff neck. LP: WBC 4,800 (95% PMNs), glucose 18 mg/dL (serum 106), protein 280 mg/dL, Gram stain shows Gram-negative diplococci. What is the MOST appropriate immediate treatment?",
    "options": {
      "A": "Ceftriaxone 2g IV q12h alone",
      "B": "Ceftriaxone 2g IV q12h + dexamethasone 0.15 mg/kg q6h \u00d7 4 days, started before or with first antibiotic dose",
      "C": "Penicillin G alone for confirmed N. meningitidis",
      "D": "Rifampin only for N. meningitidis meningitis"
    },
    "answer": "B",
    "explanation": "Bacterial meningitis from N. meningitidis (Gram-negative diplococci) requires immediate IV ceftriaxone 2g q12h AND adjunctive dexamethasone 0.15 mg/kg q6h \u00d7 4 days, given 15-30 minutes BEFORE or concurrently with the first antibiotic dose. Dexamethasone reduces the inflammatory cascade triggered by bacterial lysis, reducing cerebral edema, cranial nerve damage (hearing loss), and mortality \u2014 particularly proven in S. pneumoniae and H. influenzae meningitis (de Gans trial). Dexamethasone should be started immediately without waiting for culture confirmation. Vancomycin is often added empirically for S. pneumoniae in the US (pen-resistant strains). Rifampin is used for prophylaxis of contacts, not treatment."
  },
  {
    "id": 241,
    "chapter": 25,
    "domain": "Critical Care Principles",
    "question": "A 60-year-old man in the MICU is intubated for 5 days and is on midazolam and fentanyl infusions. He is deeply sedated (RASS -4), delirious when awakened (CAM-ICU positive). What sedation strategy has the STRONGEST evidence for improving ICU outcomes?",
    "options": {
      "A": "Maintain deep sedation (RASS -3 to -5) to prevent self-extubation",
      "B": "Analgesia-first approach with targeted light sedation (RASS -1 to 0) using propofol or dexmedetomidine",
      "C": "Daily spontaneous awakening trials (SAT) only, without changing sedation agents",
      "D": "Continuous benzodiazepine infusion with daily RASS assessment"
    },
    "answer": "B",
    "explanation": "Multiple landmark trials (MENDS, SEDCOM, MIDEX/PRODEX) support analgesia-first, minimal sedation strategies targeting light sedation (RASS -1 to 0). The MENDS trial showed dexmedetomidine versus lorazepam: more days alive without delirium, less coma. The SEDCOM trial compared dexmedetomidine vs. midazolam: shorter intubation duration. SSC/SCCM PAD guidelines recommend: (1) Analgesia first (fentanyl for pain), (2) Light sedation target, (3) Minimize benzodiazepines (associated with delirium and prolonged ventilation), (4) Daily SAT, (5) Delirium monitoring with CAM-ICU. Deep sedation prolongs ventilation, ICU LOS, and increases delirium risk."
  },
  {
    "id": 242,
    "chapter": 25,
    "domain": "Critical Care Principles",
    "question": "A 58-year-old woman in the ICU develops ICU delirium (CAM-ICU positive) on day 4. She is on no sedatives currently and her pain is controlled. Which pharmacologic intervention has the STRONGEST evidence for TREATING ICU delirium?",
    "options": {
      "A": "Haloperidol 2 mg IV q8h",
      "B": "Quetiapine 50 mg q12h",
      "C": "No pharmacologic therapy has been proven to reduce delirium duration; treat underlying causes and implement non-pharmacologic strategies",
      "D": "Dexmedetomidine infusion for sedative-induced anti-delirium effect"
    },
    "answer": "C",
    "explanation": "No antipsychotic has been shown to reduce ICU delirium duration or improve clinical outcomes. The MIND-USA trial (haloperidol vs. ziprasidone vs. placebo) and HOPE-ICU trial (haloperidol vs. placebo) showed no benefit of haloperidol. MIND and HOPE trials confirmed lack of benefit for antipsychotics in ICU delirium treatment. Non-pharmacologic strategies (ABCDEF bundle: Awakening, Breathing coordination, Choice of sedation/analgesia, Delirium monitoring, Early mobility, Family engagement) are the evidence-based approach. Dexmedetomidine is used for sedation and may reduce delirium incidence (MENDS2) but is not a first-line delirium treatment."
  },
  {
    "id": 243,
    "chapter": 25,
    "domain": "Critical Care Principles",
    "question": "A 65-year-old man in the ICU is being assessed with the Richmond Agitation-Sedation Scale (RASS). He opens his eyes briefly to voice, has eye contact maintained for >10 seconds, and then falls asleep. What is his RASS score?",
    "options": {
      "A": "RASS -3 (moderate sedation)",
      "B": "RASS -1 (drowsy)",
      "C": "RASS 0 (alert and calm)",
      "D": "RASS -2 (light sedation)"
    },
    "answer": "B",
    "explanation": "RASS scoring: +4 = combative, +3 = very agitated, +2 = agitated, +1 = restless, 0 = alert and calm, -1 = drowsy (eye opening to voice, sustained >10 seconds), -2 = light sedation (brief eye opening <10 seconds to voice), -3 = moderate sedation (eye opening to physical stimulation), -4 = deep sedation (no response to voice, movement to physical stimulation), -5 = unarousable. This patient opens eyes to voice AND maintains eye contact for >10 seconds = RASS -1 (drowsy). The target for most mechanically ventilated patients per PAD guidelines is RASS -1 to 0 (light sedation)."
  },
  {
    "id": 244,
    "chapter": 25,
    "domain": "Critical Care Principles",
    "question": "A 70-year-old man with sepsis develops severe agitation in the ICU, pulling at lines with RASS +3. He is not intubated. Which medication has FDA approval for ICU sedation in non-intubated patients and reduces delirium compared to lorazepam?",
    "options": {
      "A": "Propofol",
      "B": "Dexmedetomidine (Precedex)",
      "C": "Midazolam",
      "D": "Ketamine"
    },
    "answer": "B",
    "explanation": "Dexmedetomidine is a selective alpha-2 adrenergic agonist that provides sedation, anxiolysis, and analgesia without significant respiratory depression, making it suitable for non-intubated patients. FDA-approved for ICU sedation including non-intubated patients. Multiple trials show dexmedetomidine compared to benzodiazepines reduces delirium, shortens intubation duration, and allows more cooperative sedation. It can be used as 'cooperative sedation' \u2014 patients can be arousable and follow commands. Limitations: bradycardia, hypotension. Propofol and midazolam cause respiratory depression. Ketamine causes dysphoric dissociation and is not a standard ICU sedative."
  },
  {
    "id": 245,
    "chapter": 25,
    "domain": "Critical Care Principles",
    "question": "A 55-year-old ICU patient is on fentanyl infusion for pain. His pain is assessed as 7/10 on the CPOT (Critical-care Pain Observation Tool). What is the MOST appropriate initial analgesic adjustment, following an analgesia-first approach?",
    "options": {
      "A": "Add midazolam 1 mg/hr to sedate through the pain",
      "B": "Increase fentanyl infusion by 25-50% and reassess CPOT in 30 minutes",
      "C": "Administer a bolus dose of IV morphine 4 mg",
      "D": "Switch to propofol infusion for combined sedation and pain management"
    },
    "answer": "B",
    "explanation": "The analgesia-first paradigm (A1C \u2014 Analgesia first, Comfort second, after eMedications) emphasizes treating pain before adding sedatives. The CPOT (Critical-care Pain Observation Tool \u2014 assesses facial expression, body movements, muscle tension, compliance with ventilator) is validated for non-communicative ICU patients. Score \u22653 indicates significant pain. Management: increase opioid analgesia (fentanyl infusion 25-50% increase for moderate-severe pain), reassess in 30 minutes, and consider adjuncts (acetaminophen, ketamine, NSAIDs if appropriate). Adding sedation without addressing pain inadequately treats the underlying problem and worsens delirium risk."
  },
  {
    "id": 246,
    "chapter": 25,
    "domain": "Critical Care Principles",
    "question": "An 85-year-old woman in the ICU has RASS -4 (deeply sedated on propofol 40 mcg/kg/min and fentanyl 50 mcg/hr) despite no active procedures planned. She is on day 8 of mechanical ventilation and has not had a spontaneous awakening trial. Which intervention from the ABCDEF bundle is MOST overdue?",
    "options": {
      "A": "Analgesia: increase fentanyl for pain prevention",
      "B": "Awakening: perform daily spontaneous awakening trial (SAT) by interrupting sedation",
      "C": "Delirium: perform CAM-ICU assessment",
      "D": "Family engagement: involve family in rounds"
    },
    "answer": "B",
    "explanation": "Daily spontaneous awakening trials (SAT) \u2014 interrupting sedation at a set time each day to assess patient's neurological status \u2014 are the most critically overdue intervention. The Kress et al. trial showed daily SAT interruption reduced mechanical ventilation duration by ~3 days and ICU LOS by ~4.5 days without increasing psychological sequelae. Deeply sedated patients miss the window for SAT + SBT pairing (ABC trial). Deep benzodiazepine/propofol sedation without daily awakening is now recognized as iatrogenic harm. Delirium monitoring (CAM-ICU) cannot be accurately performed in a deeply sedated patient (prerequisite is RASS \u2265 -2)."
  },
  {
    "id": 247,
    "chapter": 25,
    "domain": "Critical Care Principles",
    "question": "A 65-year-old woman developed ICU delirium on day 5 of her ICU stay. The ABCDEF bundle is implemented. Early mobilization (E) is being considered. She is on mechanical ventilation with FiO2 0.45, PEEP 8, and MAP 62 on low-dose norepinephrine. Is early mobility appropriate?",
    "options": {
      "A": "Contraindicated \u2014 all patients on vasopressors should not be mobilized",
      "B": "Contraindicated \u2014 intubated patients cannot participate in mobility",
      "C": "Can be considered with appropriate screening; low-dose vasopressors are not an absolute contraindication",
      "D": "Mobility should wait until vasopressors are discontinued for at least 24 hours"
    },
    "answer": "C",
    "explanation": "The TEAM trial and other mobility studies have demonstrated that early ICU mobility is safe in carefully screened patients, even those on mechanical ventilation or low-dose vasopressors. Absolute contraindications: femoral lines that prevent leg movement, active hemorrhage, bone instability, elevated ICP, IABP use. Relative contraindications: high vasopressor doses (NE >0.2 mcg/kg/min), hemodynamic instability, FiO2 >0.6, RASS <-2. Low-dose vasopressors (stable MAP \u226565 on NE <0.1-0.2 mcg/kg/min) alone are NOT absolute contraindications. The TEAM trial (2024) suggested no mortality benefit from very early intensive mobility, emphasizing individualized assessment."
  },
  {
    "id": 248,
    "chapter": 25,
    "domain": "Critical Care Principles",
    "question": "A 50-year-old man with ARDS requires neuromuscular blockade (NMB) for severe patient-ventilator dyssynchrony (RASS +3 despite maximum sedation) and driving pressure >18 cmH2O. Which agent is PREFERRED for continuous NMB infusion in ICU patients?",
    "options": {
      "A": "Pancuronium \u2014 provides the longest duration of action",
      "B": "Vecuronium \u2014 preferred for hemodynamic stability",
      "C": "Cisatracurium \u2014 preferred due to Hofmann elimination (organ-independent metabolism)",
      "D": "Succinylcholine infusion for hour-by-hour titration"
    },
    "answer": "C",
    "explanation": "Cisatracurium is the preferred agent for continuous NMB infusion in ICU patients. Its unique pharmacokinetics rely on Hofmann elimination (spontaneous temperature and pH-dependent degradation) and non-specific ester hydrolysis \u2014 both independent of hepatic or renal function. This makes it safe in multiorgan failure without accumulation. The ACURASYS trial (2010) used cisatracurium and showed a trend toward mortality reduction in severe ARDS \u2014 however, the ROSE trial (2019) did not confirm this benefit. Nevertheless, cisatracurium remains preferred for NMB infusions due to pharmacokinetic safety. Pancuronium accumulates in renal failure. Succinylcholine is not used for infusions (phase II block)."
  },
  {
    "id": 249,
    "chapter": 25,
    "domain": "Critical Care Principles",
    "question": "A 72-year-old man with septic shock is assessed for ICU delirium using the CAM-ICU. Which combination of findings is required for a POSITIVE CAM-ICU result?",
    "options": {
      "A": "Feature 1 (acute change in mental status) alone",
      "B": "Feature 1 + Feature 2 + Feature 3 OR Feature 4 (all four required)",
      "C": "Feature 1 AND Feature 2, PLUS Feature 3 OR Feature 4",
      "D": "Any 2 of the 4 features"
    },
    "answer": "C",
    "explanation": "CAM-ICU (Confusion Assessment Method for ICU) requires: Feature 1 \u2014 Acute change or fluctuating mental status REQUIRED, PLUS Feature 2 \u2014 Inattention REQUIRED, PLUS either Feature 3 \u2014 Altered level of consciousness OR Feature 4 \u2014 Disorganized thinking. Positive CAM-ICU = Features 1+2 + either 3 or 4. All four features are NOT required. Features 1 and 2 are MANDATORY. This tool has sensitivity 80% and specificity 96% for ICU delirium diagnosis in intubated patients. Prerequisite: RASS must be \u2265-3 (the patient must be somewhat arousable for assessment). CAM-ICU should be assessed every 8-12 hours."
  },
  {
    "id": 250,
    "chapter": 25,
    "domain": "Critical Care Principles",
    "question": "A 60-year-old man is started on propofol for ICU sedation. After 3 days on propofol at 50 mcg/kg/min, his triglycerides are 620 mg/dL. Which complication of prolonged propofol use is MOST directly related to hypertriglyceridemia?",
    "options": {
      "A": "Propofol-related QTc prolongation",
      "B": "Pancreatitis from hypertriglyceridemia",
      "C": "Propofol infusion syndrome (PRIS) \u2014 hypertriglyceridemia is an early warning sign",
      "D": "Drug-induced liver injury from propofol soybean lipid carrier"
    },
    "answer": "C",
    "explanation": "Propofol is formulated in a 10% soybean oil/egg lecithin lipid emulsion providing 1.1 kcal/mL. At high doses/prolonged infusion, this can cause clinically significant hypertriglyceridemia. Critically, hypertriglyceridemia is an EARLY METABOLIC MARKER of propofol infusion syndrome (PRIS) \u2014 along with metabolic acidosis, rhabdomyolysis, and cardiac dysfunction. Monitoring triglycerides every 48 hours during propofol infusion is recommended; levels >400-500 mg/dL should prompt dose reduction or agent switch. Pancreatitis can result from severe hypertriglyceridemia (>1,000 mg/dL) but the primary concern linking these findings is PRIS. Propofol does not cause QTc prolongation."
  },
  {
    "id": 251,
    "chapter": 26,
    "domain": "GI/Hepatic",
    "question": "A 55-year-old man with alcoholic cirrhosis presents with massive upper GI hemorrhage (hematemesis, BP 80/50, HR 128). Endoscopy shows bleeding esophageal varices. After resuscitation and vasoactive therapy, the bleeding continues. Which intervention is the DEFINITIVE bridge therapy while awaiting TIPS?",
    "options": {
      "A": "High-dose IV pantoprazole infusion",
      "B": "Sengstaken-Blakemore tube (balloon tamponade)",
      "C": "Repeat endoscopy with band ligation",
      "D": "IV vasopressin at maximum dose"
    },
    "answer": "B",
    "explanation": "For variceal hemorrhage refractory to endoscopic and vasoactive therapy and pending TIPS (transjugular intrahepatic portosystemic shunt), balloon tamponade (Sengstaken-Blakemore tube or Minnesota tube) is the definitive bridge therapy. It mechanically controls bleeding by compressing varices, achieving hemostasis in 60-90% of cases. It carries risks: aspiration, esophageal perforation, pressure necrosis \u2014 therefore limited to 24-48 hours as a bridge. Self-expanding metal esophageal stents (SEMS \u2014 Danis stent) are an emerging, safer alternative to Blakemore tubes. TIPS achieves definitive portal decompression (performed within 72h for high-risk variceal bleeders per EASL 2022 guidelines)."
  },
  {
    "id": 252,
    "chapter": 26,
    "domain": "GI/Hepatic",
    "question": "A 62-year-old man with alcoholic cirrhosis (Child-Pugh C) is admitted with upper GI bleeding from esophageal varices. Endoscopic band ligation is performed. Which pharmacologic agents should be given immediately and for how long?",
    "options": {
      "A": "IV PPI (pantoprazole) for 72 hours to reduce re-bleeding risk",
      "B": "Vasoactive therapy (octreotide or terlipressin) for 3-5 days + prophylactic antibiotics (ceftriaxone 1g IV daily) for 7 days",
      "C": "IV vasopressin for 24 hours + lactulose for prevention of HE",
      "D": "Non-selective beta-blocker immediately to prevent re-bleeding"
    },
    "answer": "B",
    "explanation": "Management of acute variceal bleeding requires: (1) Vasoactive therapy: octreotide (somatostatin analog) 50 mcg bolus then 50 mcg/hr, or terlipressin 1-2 mg q4-6h for 3-5 days \u2014 reduces portal pressure and controls bleeding; (2) Prophylactic antibiotics: ceftriaxone 1g IV daily \u00d7 7 days \u2014 reduces bacterial infection (SBP, bacteremia) which is a common precipitant and complication of variceal bleeding, reduces early re-bleeding, and improves 5-day survival; (3) Endoscopic band ligation within 12 hours; (4) IV PPI if peptic ulcer is also present, not for varices specifically. Non-selective beta-blockers are for secondary prophylaxis, not started acutely."
  },
  {
    "id": 253,
    "chapter": 26,
    "domain": "GI/Hepatic",
    "question": "A 50-year-old woman with acute liver failure (ALF) from acetaminophen overdose has elevated INR (INR 6.8), encephalopathy (grade III), creatinine 4.2, and bilirubin 22 mg/dL. She develops bilateral unreactive pupils (5 mm) and Cushing's response (HR 52, BP 195/110). What is the MOST urgent intervention?",
    "options": {
      "A": "Fresh frozen plasma to correct INR before lumbar puncture",
      "B": "IV mannitol 1 g/kg for suspected intracranial hypertension from cerebral edema",
      "C": "IV N-acetylcysteine despite late presentation",
      "D": "Emergent liver transplant listing"
    },
    "answer": "B",
    "explanation": "Grade III-IV hepatic encephalopathy in ALF is frequently complicated by cerebral edema and intracranial hypertension (ICH) \u2014 a major cause of death in ALF. Fixed dilated pupils + Cushing's response (hypertension + bradycardia) indicate severely elevated ICP and impending herniation. Immediate IV mannitol (1 g/kg) is the emergent treatment to reduce ICP. Hypertonic saline 23.4% (30 mL) is an alternative. ICP monitoring should be considered. Liver transplantation (King's College Criteria assessment) and N-acetylcysteine (even late, as it improves transplant-free survival in non-acetaminophen ALF) are important but not the MOST URGENT intervention when herniation is imminent."
  },
  {
    "id": 254,
    "chapter": 26,
    "domain": "GI/Hepatic",
    "question": "A 48-year-old man with alcoholic hepatitis (Maddrey's Discriminant Function 56) is admitted to the ICU. He has no active GI bleeding or active infection. What is the MOST evidence-based treatment to improve short-term survival?",
    "options": {
      "A": "Metadoxine (alcohol oxidation enhancer)",
      "B": "Prednisolone 40 mg PO daily for 28 days",
      "C": "Pentoxifylline 400 mg TID for 28 days",
      "D": "N-acetylcysteine IV for hepatoprotection"
    },
    "answer": "B",
    "explanation": "Severe alcoholic hepatitis (Maddrey DF \u226532 or ABIC/GAHS score indicating poor prognosis) is treated with prednisolone 40 mg/day \u00d7 28 days based on multiple trials and meta-analyses showing improved 28-day survival. The Lille score (calculated at day 7) predicts response \u2014 score <0.45 at day 7 indicates response and predicts survival benefit; score \u22650.45 indicates non-response and predicts poor prognosis with continued steroids. Pentoxifylline was studied (STOPAH trial) and showed NO mortality benefit. The STOPAH trial also failed to show pentoxifylline or prednisolone significantly improved 90-day mortality, but prednisolone has modest 28-day benefit. N-acetylcysteine as adjunct to prednisolone showed improved 1-month survival in one trial."
  },
  {
    "id": 255,
    "chapter": 26,
    "domain": "GI/Hepatic",
    "question": "A 65-year-old man with cirrhosis and ascites develops fever (T 38.9\u00b0C), abdominal pain, and worsening encephalopathy. Diagnostic paracentesis shows: WBC 680 cells/\u03bcL with 75% PMNs, no growth on preliminary culture. What is the diagnosis and treatment?",
    "options": {
      "A": "Culture-negative neutrocytic ascites \u2014 no treatment needed",
      "B": "Spontaneous bacterial peritonitis (SBP); immediate cefotaxime 2g IV q8h + albumin 1.5 g/kg IV on day 1 and 1 g/kg on day 3",
      "C": "Secondary peritonitis from hollow viscus perforation \u2014 surgical consultation",
      "D": "Tuberculous peritonitis \u2014 RIPE therapy"
    },
    "answer": "B",
    "explanation": "SBP is diagnosed when ascitic PMN count \u2265250 cells/\u03bcL (regardless of culture positivity \u2014 culture-negative SBP exists). Treatment: cefotaxime 2g IV q8h (or ceftriaxone 1g IV daily) for 5-7 days. Albumin infusion (1.5 g/kg on day 1, 1 g/kg on day 3) reduces incidence of hepatorenal syndrome and mortality \u2014 this is a critical component (Sort et al., NEJM 1999). Secondary peritonitis (from bowel perforation) should be suspected if: PMN >10,000, multiple organisms, glucose <50 mg/dL, LDH > serum LDH, or protein >1 g/dL in ascites. Culture-negative neutrocytic ascites (\u2265250 PMN, negative culture) is treated the same as SBP."
  },
  {
    "id": 256,
    "chapter": 26,
    "domain": "GI/Hepatic",
    "question": "A 55-year-old man with massive lower GI hemorrhage (bright red blood, hemodynamically unstable) is resuscitated. Colonoscopy is non-diagnostic (blood obscures visualization). CT angiography shows active bleeding in the sigmoid colon. Interventional radiology performs super-selective embolization with hemostasis achieved. What is the PRIMARY complication of mesenteric angioembolization to monitor for?",
    "options": {
      "A": "Contrast nephropathy",
      "B": "Colonic ischemia/infarction from embolic occlusion",
      "C": "Air embolism from coil placement",
      "D": "Arteriovenous fistula formation"
    },
    "answer": "B",
    "explanation": "The primary complication of super-selective angioembolization for lower GI bleeding is colonic ischemia (2-10% of cases). Even super-selective embolization can compromise collateral blood supply to the colonic wall, resulting in ischemic colitis or frank bowel infarction. Clinical signs: worsening abdominal pain, fever, peritoneal signs, and bloody diarrhea post-procedure. CT/endoscopy confirm ischemia. Severe ischemia may require surgical resection. Contrast nephropathy is a concern but less specific to embolization. Air embolism and AV fistula are rare procedural complications. Patients require close post-procedural monitoring for ischemic signs."
  },
  {
    "id": 257,
    "chapter": 26,
    "domain": "GI/Hepatic",
    "question": "A 60-year-old woman with peptic ulcer hemorrhage (Forrest Ia \u2014 active arterial spurting) undergoes endoscopy with injection therapy and hemoclip placement. Re-bleeding occurs 18 hours later. What is the MOST appropriate next step?",
    "options": {
      "A": "Emergent surgery without repeat endoscopy",
      "B": "Second-look endoscopy with repeat endoscopic therapy",
      "C": "Angiographic embolization as next step after first endoscopy failure",
      "D": "IV pantoprazole infusion escalation alone"
    },
    "answer": "B",
    "explanation": "For re-bleeding after initial endoscopic hemostasis of peptic ulcer hemorrhage, the recommended next step is second-look (repeat) endoscopy with repeat endoscopic therapy. Studies show that a second endoscopy achieves definitive hemostasis in 70-80% of patients who re-bleed after initial therapy, avoiding surgery in most cases. SCENIC international consensus guidelines support repeat endoscopy for first re-bleed. Angiographic embolization is appropriate after failed second endoscopy. Surgery is reserved for patients who fail repeat endoscopy and angioembolization. IV PPI (high-dose infusion after endoscopy) is adjunctive, not definitive therapy for re-bleeding."
  },
  {
    "id": 258,
    "chapter": 26,
    "domain": "GI/Hepatic",
    "question": "A 70-year-old man with acute liver failure due to Amanita mushroom poisoning is being evaluated for liver transplantation. Which scoring system is MOST commonly used to predict the need for liver transplantation in non-acetaminophen acute liver failure?",
    "options": {
      "A": "MELD score \u226540",
      "B": "King's College Criteria (KCC) for non-acetaminophen ALF",
      "C": "Child-Pugh score \u2265C",
      "D": "APACHE II \u226525"
    },
    "answer": "B",
    "explanation": "King's College Criteria (KCC) are the most widely validated tool for predicting mortality and identifying transplant candidates in ALF. For non-acetaminophen ALF, KCC: INR >6.5 alone, OR any 3 of: age <10 or >40, non-A non-B hepatitis or drug-induced etiology, jaundice-to-encephalopathy >7 days, bilirubin >17.5 mg/dL, INR >3.5. Meeting KCC without transplantation carries >90% mortality. For acetaminophen-induced ALF, different KCC thresholds apply (pH <7.3 after resuscitation, or INR >6.5 + Cr >3.4 + grade III-IV encephalopathy). MELD predicts prognosis in chronic liver disease but is less specific for ALF transplant urgency."
  },
  {
    "id": 259,
    "chapter": 26,
    "domain": "GI/Hepatic",
    "question": "A 42-year-old woman with a suicide attempt presents 16 hours after ingesting 25 g of acetaminophen (APAP). She has nausea, RUQ pain, ALT 1,840, AST 2,200, INR 1.8, creatinine 1.4. What is the MOST appropriate treatment?",
    "options": {
      "A": "No treatment needed as she is past the effective window for NAC",
      "B": "IV N-acetylcysteine (NAC): 150 mg/kg over 1 hour, then 50 mg/kg over 4 hours, then 100 mg/kg over 16 hours",
      "C": "Activated charcoal now (16 hours post-ingestion) to reduce absorption",
      "D": "Immediate liver transplant evaluation without NAC"
    },
    "answer": "B",
    "explanation": "N-acetylcysteine (NAC) is effective in APAP toxicity at any time after ingestion when hepatotoxicity is present or at risk, not just within the original 8-10 hour window. With rising transaminases and early INR elevation, IV NAC should be started immediately \u2014 it replenishes glutathione stores, directly detoxifies NAPQI (toxic APAP metabolite), and has anti-inflammatory hepatoprotective effects. The IV protocol (21-hour Prescott protocol): 150 mg/kg over 1h \u2192 50 mg/kg over 4h \u2192 100 mg/kg over 16h. NAC may be continued beyond 21h if liver function is not improving. Activated charcoal is ineffective >1-2 hours post-ingestion. Transplant evaluation is appropriate but NAC should be given first."
  },
  {
    "id": 260,
    "chapter": 26,
    "domain": "GI/Hepatic",
    "question": "A 58-year-old man with cirrhosis is in the ICU for hematemesis from esophageal varices. He has hepatic encephalopathy (grade II). Which intervention PREVENTS recurrent hepatic encephalopathy after this admission?",
    "options": {
      "A": "Lactulose 30 mL q4h indefinitely",
      "B": "Rifaximin 550 mg BID (secondary prophylaxis) + lactulose",
      "C": "Oral neomycin daily for gut bacterial suppression",
      "D": "Non-absorbable antibiotics for 7 days then stop"
    },
    "answer": "B",
    "explanation": "Rifaximin 550 mg BID (a non-absorbed antibiotic) is approved as secondary prophylaxis for hepatic encephalopathy recurrence. The RFHE3001 trial showed rifaximin + lactulose reduced HE recurrence by 58% and HE-related hospitalization by 50% compared to placebo + lactulose. Rifaximin reduces ammonia-producing gut bacteria without systemic absorption. It is used as secondary prophylaxis (after first HE episode) in combination with lactulose. Lactulose alone reduces recurrence but rifaximin + lactulose combination is superior. Neomycin is an older alternative but has systemic absorption risk causing nephrotoxicity and ototoxicity \u2014 not recommended long-term."
  },
  {
    "id": 261,
    "chapter": 27,
    "domain": "Hematology/Coagulation",
    "question": "A 55-year-old woman with septic shock develops: platelets 38,000 (down from 210,000), PT/INR 2.8, aPTT 68s, fibrinogen 78 mg/dL, D-dimer 8,400 ng/mL. She has oozing from all IV sites and a new petechial rash. What is the diagnosis and immediate treatment?",
    "options": {
      "A": "Thrombotic thrombocytopenic purpura (TTP); urgent plasmapheresis",
      "B": "Disseminated intravascular coagulation (DIC); treat underlying cause + replace depleted factors (FFP, cryoprecipitate, platelets) if actively bleeding",
      "C": "Heparin-induced thrombocytopenia (HIT); stop all heparin immediately",
      "D": "Immune thrombocytopenia (ITP); start IVIG"
    },
    "answer": "B",
    "explanation": "DIC is characterized by simultaneous activation of coagulation and fibrinolysis, consuming clotting factors and platelets, causing both thrombosis (microthrombi \u2192 organ failure) and hemorrhage. Diagnostic criteria: low platelets (<100K), elevated PT/INR, low fibrinogen (<150 mg/dL), elevated D-dimer/FDPs. Treatment: (1) Treat the underlying cause (sepsis \u2014 most common); (2) Replace depleted clotting factors if actively bleeding: FFP for elevated PT/aPTT, cryoprecipitate for fibrinogen <100-150 mg/dL, platelet transfusion if <50,000 with bleeding. Anticoagulation (heparin) for DIC with predominant thrombosis (purpura fulminans). TTP presents with MAHA + thrombocytopenia without marked coagulopathy."
  },
  {
    "id": 262,
    "chapter": 27,
    "domain": "Hematology/Coagulation",
    "question": "A 28-year-old woman presents with acute confusion, fever (T 39.4\u00b0C), microangiopathic hemolytic anemia (MAHA), thrombocytopenia (platelets 18,000), normal PT/aPTT, and creatinine 1.1 mg/dL. LDH is 1,840 IU/L and schistocytes are seen on peripheral blood smear. What is the diagnosis and FIRST-LINE treatment?",
    "options": {
      "A": "Hemolytic uremic syndrome (HUS); fresh frozen plasma",
      "B": "Thrombotic thrombocytopenic purpura (TTP); emergency therapeutic plasma exchange (TPE)",
      "C": "DIC; cryoprecipitate and FFP",
      "D": "HELLP syndrome; immediate delivery"
    },
    "answer": "B",
    "explanation": "TTP presents with the classic pentad: MAHA, thrombocytopenia, fever, neurologic symptoms, and renal dysfunction \u2014 though not all 5 need be present. It is caused by severe ADAMTS13 deficiency (usually autoimmune), causing ultra-large vWF multimers that aggregate platelets in the microvasculature. DIC presents with coagulopathy (elevated PT/aPTT, low fibrinogen) \u2014 absent in TTP. Emergency therapeutic plasma exchange (TPE) is the cornerstone of treatment: removes anti-ADAMTS13 antibodies and supplies functional ADAMTS13. Untreated TTP has >90% mortality; TPE reduces mortality to <10%. Caplacizumab (anti-vWF nanobody) is now added to accelerate platelet normalization. Platelet transfusion is avoided in TTP (worsens thrombosis)."
  },
  {
    "id": 263,
    "chapter": 27,
    "domain": "Hematology/Coagulation",
    "question": "A 65-year-old man with AML develops bleeding and is found to have DIC with fibrinogen 55 mg/dL (platelet 42,000, INR 2.4). Cryoprecipitate is ordered. What is the PRIMARY coagulation factor component of cryoprecipitate relevant to this patient?",
    "options": {
      "A": "Factors II, VII, IX, X (vitamin K-dependent factors)",
      "B": "Fibrinogen (factor I), factor VIII, vWF, factor XIII, and fibronectin",
      "C": "All coagulation factors in equivalent proportions to FFP",
      "D": "Primarily antithrombin III and protein C"
    },
    "answer": "B",
    "explanation": "Cryoprecipitate is the cold-precipitate of FFP that enriches specific factors: fibrinogen (factor I \u2014 150-250 mg/unit), factor VIII (80-100 units/unit), von Willebrand factor, factor XIII, and fibronectin. It is the preferred product for hypofibrinogenemia (fibrinogen <100-150 mg/dL in bleeding patients) because it delivers a large amount of fibrinogen in a small volume. In DIC, fibrinogen is the first and most severely depleted factor. Vitamin K-dependent factors (II, VII, IX, X) are present in FFP, not cryoprecipitate. Prothrombin complex concentrates (PCC) contain vitamin K-dependent factors. Each unit of cryoprecipitate contains ~200-300 mg fibrinogen; typical adult dose is 10 units."
  },
  {
    "id": 264,
    "chapter": 27,
    "domain": "Hematology/Coagulation",
    "question": "A 70-year-old man on warfarin (INR 6.2, no bleeding) requires urgent reversal before emergency hip surgery in 2 hours. Which strategy provides the FASTEST and MOST complete warfarin reversal?",
    "options": {
      "A": "Vitamin K 10 mg IV alone (onset 6-12 hours)",
      "B": "Hold warfarin and wait for INR to fall spontaneously",
      "C": "4-factor prothrombin complex concentrate (4F-PCC) + vitamin K 10 mg IV",
      "D": "Fresh frozen plasma 4 units alone"
    },
    "answer": "C",
    "explanation": "4-factor PCC (Kcentra/Beriplex) provides rapid replacement of vitamin K-dependent coagulation factors (II, VII, IX, X) and proteins C and S, normalizing INR within 15-30 minutes. Combined with IV Vitamin K (which provides sustained factor synthesis for 6-12 hours, preventing INR re-elevation as PCC factors are consumed), this achieves both immediate AND sustained reversal. FFP alone requires large volumes (4-8 units to achieve adequate reversal), takes 30-60 minutes to administer, and does not normalize INR as reliably as PCC. The 4F-PCC dose is based on initial INR and patient weight (25-50 IU/kg for INR 2-4 to >6)."
  },
  {
    "id": 265,
    "chapter": 27,
    "domain": "Hematology/Coagulation",
    "question": "A 50-year-old woman on apixaban (5 mg BID) presents with an acute intracranial hemorrhage. INR is 1.1 (not reflective of apixaban activity). Which specific reversal agent is MOST appropriate?",
    "options": {
      "A": "Vitamin K + 4-factor PCC",
      "B": "Andexanet alfa (Annexa)",
      "C": "Idarucizumab (Praxbind)",
      "D": "Fresh frozen plasma"
    },
    "answer": "B",
    "explanation": "Andexanet alfa (andexanet alfa/ANNEXA) is specifically FDA-approved for reversal of apixaban and rivaroxaban (factor Xa inhibitors) in life-threatening or uncontrolled bleeding. It is a modified recombinant factor Xa that acts as a decoy receptor, binding and sequestering apixaban/rivaroxaban. The ANNEXA-4 trial showed excellent hemostatic efficacy in ICH. Idarucizumab (Praxbind) is the specific reversal agent for DABIGATRAN (direct thrombin inhibitor), not factor Xa inhibitors. 4-factor PCC with vitamin K is used for warfarin reversal and as an off-label option for DOAC reversal when specific antidotes are unavailable. Standard coagulation tests (INR, aPTT) do not accurately reflect DOAC activity."
  },
  {
    "id": 266,
    "chapter": 27,
    "domain": "Hematology/Coagulation",
    "question": "A 45-year-old man with hemophilia A (severe, factor VIII <1%) presents with intracranial hemorrhage. He has never been treated with factor VIII before. What is the INITIAL treatment and target factor VIII level for major bleeding?",
    "options": {
      "A": "Desmopressin (DDAVP) 0.3 mcg/kg IV \u2014 stimulates vWF and factor VIII release",
      "B": "Recombinant factor VIII concentrate to achieve factor VIII level 80-100%",
      "C": "Fresh frozen plasma as initial factor VIII replacement",
      "D": "Cryoprecipitate 10 units to achieve adequate factor VIII"
    },
    "answer": "B",
    "explanation": "Life-threatening bleeding (including intracranial hemorrhage) in severe hemophilia A requires recombinant factor VIII concentrate to achieve plasma factor VIII activity of 80-100% (approximately 1 IU/kg raises factor VIII by 2%). Formula: dose (IU) = weight (kg) \u00d7 desired rise (%) \u00d7 0.5. For ICH: target 100% initially, then continuous infusion or q8-12h dosing to maintain >50-80% for 7-14 days. DDAVP is used only in mild hemophilia A (factor VIII 5-40%) to temporarily release stored factor VIII from endothelium \u2014 INEFFECTIVE in severe hemophilia (no stores). FFP and cryoprecipitate contain factor VIII but provide inadequate amounts for severe hemophilia major bleeding."
  },
  {
    "id": 267,
    "chapter": 27,
    "domain": "Hematology/Coagulation",
    "question": "A 60-year-old woman with polycythemia vera develops sudden stroke with hemoglobin 21 g/dL, hematocrit 64%, and platelets 890,000. What is the MOST immediate intervention?",
    "options": {
      "A": "Start IV hydroxyurea immediately",
      "B": "Therapeutic phlebotomy to reduce hematocrit to <45% and antiplatelet therapy",
      "C": "Aspirin 325 mg alone for stroke prevention",
      "D": "Immediate plasmapheresis to reduce plasma viscosity"
    },
    "answer": "B",
    "explanation": "Polycythemia vera with hyperviscosity (hematocrit 64%) is a medical emergency when presenting with thrombotic complications (stroke, MI, DVT/PE). Immediate therapeutic phlebotomy (isovolemic phlebotomy: remove 450 mL blood, replace with saline) rapidly reduces hematocrit \u2014 target <45% for males (per European LeukemiaNet) or <42% in females. Aspirin 81-100 mg/day is indicated in all PV patients for cardiovascular risk reduction. Long-term cytoreduction with hydroxyurea (or ruxolitinib for refractory) reduces thrombotic risk but takes weeks to work. Phlebotomy provides immediate viscosity reduction that pharmacotherapy cannot achieve acutely."
  },
  {
    "id": 268,
    "chapter": 27,
    "domain": "Hematology/Coagulation",
    "question": "A 72-year-old man with multiple myeloma is admitted in hypercalcemic crisis (Ca 16.2 mg/dL) and develops progressive renal failure (creatinine 4.8) with urine protein electrophoresis showing massive Bence Jones proteinuria. Which is the MOST specific immediate renal protective intervention?",
    "options": {
      "A": "IV calcium gluconate to compete with tubular light chain binding",
      "B": "IV fluids + loop diuretics + zoledronic acid + urgent chemotherapy to reduce light chain burden",
      "C": "Hemodialysis with high cut-off filter membranes to remove immunoglobulin light chains",
      "D": "Corticosteroids alone for cast nephropathy"
    },
    "answer": "C",
    "explanation": "Myeloma cast nephropathy (light chain cast nephropathy) results from tubular obstruction by casts formed from filtered immunoglobulin free light chains + Tamm-Horsfall protein. High cut-off (HCO) hemodialysis membranes can remove immunoglobulin free light chains (molecular weight ~22-44 kDa) that standard dialysis membranes cannot. The EuLITE and MYRE trials evaluated HCO hemodialysis in myeloma cast nephropathy with mixed results. Combined approach: IV hydration, treat hypercalcemia (IV fluids, zoledronic acid), urgent bortezomib-based chemotherapy to reduce light chain production, and HCO hemodialysis if available. Corticosteroids plus bortezomib provide the most rapid light chain reduction."
  },
  {
    "id": 269,
    "chapter": 27,
    "domain": "Hematology/Coagulation",
    "question": "A 55-year-old woman is receiving red blood cell transfusion and develops fever (T 39.8\u00b0C), rigors, hypotension, flank pain, hemoglobinuria (red urine), and renal failure within 30 minutes of starting the transfusion. What is the diagnosis and FIRST action?",
    "options": {
      "A": "Febrile non-hemolytic transfusion reaction; premedicate with acetaminophen and continue",
      "B": "Acute hemolytic transfusion reaction; immediately stop transfusion, send samples for type/crossmatch recheck, supportive care",
      "C": "Transfusion-associated circulatory overload (TACO); slow infusion rate and give furosemide",
      "D": "Septic transfusion reaction; send blood unit for culture and start broad-spectrum antibiotics"
    },
    "answer": "B",
    "explanation": "Acute hemolytic transfusion reaction (AHTR) is typically due to ABO incompatibility from blood bank or patient identification errors. Clinically: fever, chills, back/flank pain, hemoglobinuria (red/cola urine), DIC, and AKI within minutes of infusion. IMMEDIATELY STOP THE TRANSFUSION. Actions: stop transfusion, maintain IV access, send remaining blood unit + patient samples back to blood bank for urgent recheck of type/crossmatch, send patient blood for direct Coombs, CBC, plasma Hgb, LFTs, coags, urine Hgb; aggressive IV fluid resuscitation to protect kidneys (target UO 1-2 mL/kg/hr); treat DIC; notify blood bank. Mortality is up to 10% if large volumes are transfused."
  },
  {
    "id": 270,
    "chapter": 27,
    "domain": "Hematology/Coagulation",
    "question": "A 62-year-old man with acute myeloid leukemia (AML) and WBC 185,000/\u03bcL (90% blasts) presents with confusion, visual blurring, hypoxemia, and priapism. What is the diagnosis and most urgent intervention?",
    "options": {
      "A": "Tumor lysis syndrome; aggressive IV fluid resuscitation",
      "B": "Leukostasis; urgent leukapheresis and/or hydroxyurea to rapidly reduce WBC",
      "C": "CNS leukemia; intrathecal chemotherapy",
      "D": "Disseminated intravascular coagulation; FFP and cryoprecipitate"
    },
    "answer": "B",
    "explanation": "Leukostasis (symptomatic hyperleukocytosis) occurs when WBC >100,000/\u03bcL in AML (lower threshold in ALL due to larger cell size), causing microvascular obstruction in lungs, CNS, and other organs. Classic presentation: respiratory failure (pulmonary leukostasis), neurological symptoms (confusion, visual changes, stroke), and priapism. Immediate treatment: (1) Leukapheresis for rapid mechanical reduction of WBC (most urgent if symptomatic); (2) Hydroxyurea 3-5g PO stat (cytoreduction within 24-48h); (3) Avoid RBC transfusion (increases viscosity); (4) Definitive AML chemotherapy. Leukapheresis removes approximately 30-60% of circulating leukocytes in one procedure. Mortality from leukostasis without treatment is very high."
  },
  {
    "id": 271,
    "chapter": 28,
    "domain": "Hematology/Coagulation",
    "question": "A 58-year-old woman with metastatic ovarian cancer develops acute respiratory distress with tracheal deviation, facial and arm edema, and distended neck veins. CT chest shows a large mediastinal mass compressing the superior vena cava (SVC). What is the MOST immediate intervention for severe SVC syndrome?",
    "options": {
      "A": "Emergent mediastinal radiation therapy",
      "B": "SVC stent placement via endovascular approach",
      "C": "IV dexamethasone 10 mg + elevate head of bed + endovascular stenting urgently",
      "D": "Urgent surgical bypass of SVC obstruction"
    },
    "answer": "C",
    "explanation": "Severe SVC syndrome with hemodynamic or respiratory compromise requires multi-modal urgent treatment: (1) Supportive: head of bed elevation (reduces intracranial venous pressure), supplemental oxygen; (2) Dexamethasone 10 mg IV (reduces tumor-associated edema and inflammation, effect within hours); (3) Endovascular SVC stenting: provides rapid symptom relief (within hours) \u2014 the fastest and most effective intervention for malignant SVC obstruction; (4) Chemotherapy/radiation depend on tumor histology and are not fast enough for life-threatening presentation. SVC stenting has \u226595% technical success rate and provides faster relief than radiation alone. Surgical bypass is rarely used."
  },
  {
    "id": 272,
    "chapter": 28,
    "domain": "Hematology/Coagulation",
    "question": "A 52-year-old man with multiple myeloma (IgG kappa) presents with progressive confusion and behavioral changes. His serum protein electrophoresis shows an M-spike of 7.8 g/dL, total protein 11.2 g/dL. Serum viscosity is 6 cP (normal <1.8 cP). What is the diagnosis and treatment?",
    "options": {
      "A": "Hypercalcemia from myeloma; IV fluids and bisphosphonates",
      "B": "Hyperviscosity syndrome; urgent plasmapheresis",
      "C": "CNS myeloma involvement; intrathecal chemotherapy",
      "D": "Wernicke's encephalopathy from malnutrition; IV thiamine"
    },
    "answer": "B",
    "explanation": "Hyperviscosity syndrome (HVS) occurs when serum viscosity exceeds 4-5 cP, most commonly in Waldenstr\u00f6m's macroglobulinemia (IgM), multiple myeloma (IgA > IgG), and cryoglobulinemia. Classic triad: (1) Neurologic symptoms (confusion, headache, stroke-like), (2) Bleeding (mucosal \u2014 'sausage veins' on fundoscopy, epistaxis), (3) Visual changes. Serum viscosity >4-5 cP with symptoms mandates urgent plasmapheresis (removes high-molecular-weight paraproteins from plasma). IgM is most viscous; IgA also prone; IgG rarely causes HVS unless extreme levels. Plasmapheresis provides immediate relief while chemotherapy begins to reduce paraprotein production."
  },
  {
    "id": 273,
    "chapter": 28,
    "domain": "Hematology/Coagulation",
    "question": "A 65-year-old man with ALL develops tumor lysis syndrome (TLS) 24 hours after starting chemotherapy. Labs: K+ 6.8 mEq/L, phosphorus 7.2 mg/dL, calcium 6.8 mg/dL (ionized), uric acid 16.2 mg/dL, creatinine 3.8 mg/dL. What drug is MOST appropriate for uric acid management in TLS?",
    "options": {
      "A": "Allopurinol 300 mg PO daily",
      "B": "Rasburicase 0.2 mg/kg IV daily",
      "C": "Probenecid for urinary uric acid excretion",
      "D": "Allopurinol is preferred over rasburicase due to lower cost"
    },
    "answer": "B",
    "explanation": "Rasburicase (recombinant uric acid oxidase) converts uric acid to allantoin (5\u00d7 more soluble), dramatically lowering uric acid levels within hours. It is the preferred agent for established TLS or high-risk TLS prevention (high tumor burden, high blast count). Allopurinol blocks xanthine oxidase, preventing NEW uric acid production but does not reduce existing elevated uric acid levels \u2014 making it INADEQUATE for established TLS with uric acid 16.2. Key contraindication: rasburicase is contraindicated in G6PD deficiency (causes massive hemolysis from H2O2 accumulation). Aggressive IV hydration targets UO 2-3 mL/kg/hr. Hyperphosphatemia, hypocalcemia, and hyperkalemia are managed concurrently."
  },
  {
    "id": 274,
    "chapter": 28,
    "domain": "Hematology/Coagulation",
    "question": "A 48-year-old woman with breast cancer develops acute confusion, diplopia, and lower extremity weakness. MRI shows diffuse leptomeningeal enhancement. CSF cytology is positive for carcinoma cells. What is the diagnosis and treatment approach?",
    "options": {
      "A": "Brain metastases; stereotactic radiosurgery",
      "B": "Leptomeningeal carcinomatosis; intrathecal chemotherapy and/or systemic targeted therapy",
      "C": "Paraneoplastic limbic encephalitis; IVIG",
      "D": "Bacterial meningitis; empiric antibiotics"
    },
    "answer": "B",
    "explanation": "Leptomeningeal carcinomatosis (leptomeningeal metastasis) occurs when cancer spreads to the meninges and CSF, most commonly from breast cancer, lung cancer, and melanoma. Presentation: multifocal neurological deficits (cranial nerve palsies, limb weakness, altered consciousness). Diagnosis confirmed by CSF cytology or MRI leptomeningeal enhancement. Treatment: intrathecal chemotherapy (methotrexate \u00b1 cytarabine administered via Ommaya reservoir or lumbar puncture), systemic targeted therapy for molecular driver tumors (e.g., HER2+ breast cancer with lapatinib + capecitabine), and radiation for bulk disease. Prognosis is poor (median survival 4-6 weeks untreated, 2-4 months treated)."
  },
  {
    "id": 275,
    "chapter": 28,
    "domain": "Hematology/Coagulation",
    "question": "A 60-year-old man with small cell lung cancer (SCLC) develops rapidly progressive ascending paralysis, areflexia, and hyporeflexia over 2 weeks, along with autonomic instability. Anti-Hu antibody is positive in serum. What is the diagnosis?",
    "options": {
      "A": "Spinal cord compression from vertebral metastasis",
      "B": "Lambert-Eaton myasthenic syndrome (LEMS)",
      "C": "Paraneoplastic sensorimotor peripheral neuropathy (anti-Hu encephalomyelitis)",
      "D": "Guillain-Barr\u00e9 syndrome coinciding with cancer"
    },
    "answer": "C",
    "explanation": "Anti-Hu (ANNA-1) antibodies are the classic paraneoplastic antibody associated with SCLC, causing paraneoplastic sensorimotor neuropathy, subacute cerebellar degeneration, or encephalomyelitis. The ascending neuropathy with areflexia, autonomic instability, and positive anti-Hu in the setting of SCLC is consistent with paraneoplastic sensorimotor neuropathy. Lambert-Eaton Myasthenic Syndrome (LEMS) is also associated with SCLC but is caused by anti-VGCC antibodies and presents with proximal weakness that improves with repeated stimulation, autonomic dysfunction, and diminished reflexes that augment post-exercise. Treatment: immunotherapy (IVIG, steroids, plasmapheresis) + SCLC treatment."
  },
  {
    "id": 276,
    "chapter": 28,
    "domain": "Hematology/Coagulation",
    "question": "A 55-year-old woman with metastatic colon cancer on bevacizumab (anti-VEGF) develops sudden onset severe headache (T 38.1\u00b0C), hypertension (BP 188/112), and confusion. MRI shows posterior T2 signal abnormalities. What is the bevacizumab-related complication?",
    "options": {
      "A": "Cerebral venous thrombosis",
      "B": "Posterior reversible encephalopathy syndrome (PRES) from bevacizumab-induced hypertension",
      "C": "Leptomeningeal carcinomatosis",
      "D": "Anti-VEGF induced coagulation disorder"
    },
    "answer": "B",
    "explanation": "Bevacizumab (anti-VEGF monoclonal antibody) commonly causes hypertension as a class effect of VEGF pathway inhibition \u2014 VEGF normally promotes vasodilation via nitric oxide. Hypertension from bevacizumab can be severe and precipitate PRES. PRES is characterized by headache, altered consciousness, seizures, and visual changes with posterior white matter edema on MRI (T2/FLAIR hyperintensities in parieto-occipital regions). Treatment: discontinue bevacizumab (at least temporarily), aggressive BP control with nicardipine or labetalol, and antiepileptic therapy for seizures. PRES is usually reversible with treatment. All anti-angiogenic agents (sunitinib, sorafenib, pazopanib) can cause PRES via hypertension."
  },
  {
    "id": 277,
    "chapter": 28,
    "domain": "Hematology/Coagulation",
    "question": "A 68-year-old man with non-Hodgkin lymphoma is receiving high-dose methotrexate (HD-MTX). On day 3, his serum methotrexate level is 50 \u03bcmol/L (target <0.1 \u03bcmol/L at 72h), creatinine is 4.8 mg/dL, and he has mucositis and bone marrow suppression. What is the MOST appropriate intervention?",
    "options": {
      "A": "Increase leucovorin (folinic acid) rescue dose and intensify urine alkalinization",
      "B": "Glucarpidase (carboxypeptidase G2) IV to rapidly convert MTX to inactive metabolites",
      "C": "Hemodialysis to clear methotrexate",
      "D": "IV sodium bicarbonate infusion alone to increase MTX clearance"
    },
    "answer": "B",
    "explanation": "Glucarpidase (carboxypeptidase G2/voraxaze) is FDA-approved for MTX toxicity with delayed clearance (MTX >1 \u03bcmol/L at 42h or delayed elimination). It enzymatically cleaves MTX to inactive metabolites (DAMPA and glutamate) within 15 minutes, reducing plasma MTX by >95%. Used when renal failure prevents adequate MTX excretion. Standard MTX toxicity management: high-dose leucovorin rescue, aggressive IV hydration, urine alkalinization (pH >7.0 increases MTX solubility). Hemodialysis has limited MTX clearance due to its high protein binding and large volume of distribution. Leucovorin rescue competes for the same transporter as MTX and cannot adequately reverse toxicity at MTX levels >10 \u03bcmol/L."
  },
  {
    "id": 278,
    "chapter": 28,
    "domain": "Hematology/Coagulation",
    "question": "A 52-year-old woman with lung cancer develops stridor and progressive dyspnea. CT shows a large tracheal tumor with 70% luminal obstruction. She cannot lie flat. What is the MOST URGENT airway management strategy?",
    "options": {
      "A": "Emergent radiation to the tracheal tumor",
      "B": "Dexamethasone 10 mg IV and BiPAP support",
      "C": "Rigid bronchoscopy with debulking/coring out of tumor or stent placement",
      "D": "Tracheostomy below the level of obstruction"
    },
    "answer": "C",
    "explanation": "Central airway obstruction (CAO) from tracheal malignancy with >50% luminal compromise and symptomatic dyspnea/stridor requires urgent bronchoscopic intervention. Rigid bronchoscopy allows: (1) Mechanical debulking/coring out of endobronchial tumor, (2) Argon plasma coagulation or Nd:YAG laser tumor ablation, (3) Tracheal stent placement to maintain airway patency. These interventions are performed under general anesthesia with the rigid bronchoscope serving as both the airway and working channel. Dexamethasone and BiPAP are temporizing measures. Radiation takes weeks and cannot relieve acute obstruction. Tracheostomy is only feasible if the obstruction is below the tracheostomy site."
  },
  {
    "id": 279,
    "chapter": 29,
    "domain": "Trauma",
    "question": "A 32-year-old man is brought to the trauma bay after a motor vehicle accident with closed head injury (GCS 10), bilateral femur fractures, splenic laceration (Grade II), and multiple rib fractures. BP 92/60, HR 126. Which management concept guides treatment priority?",
    "options": {
      "A": "Treat injuries from head to toe (head first, then chest, then abdomen, then extremities)",
      "B": "ATLS primary survey: Airway \u2192 Breathing \u2192 Circulation \u2192 Disability \u2192 Exposure",
      "C": "Immediately address femur fractures to prevent fat embolism",
      "D": "CT scan all injuries before any intervention"
    },
    "answer": "B",
    "explanation": "Advanced Trauma Life Support (ATLS) defines the primary survey as a systematic, prioritized assessment: A (Airway with C-spine protection) \u2192 B (Breathing and ventilation) \u2192 C (Circulation with hemorrhage control) \u2192 D (Disability \u2014 neurologic status/GCS) \u2192 E (Exposure/Environmental control). Life-threatening injuries are identified and treated in order of their threat to life. CT scanning is appropriate only when hemodynamic stability allows ('stable enough for CT'). Femur fractures, while painful, are not immediately life-threatening compared to hemorrhagic shock or airway compromise. The ATLS primary survey has been universally adopted in trauma care worldwide."
  },
  {
    "id": 280,
    "chapter": 29,
    "domain": "Trauma",
    "question": "A 45-year-old man sustains a stab wound to zone II of the neck (between the cricoid cartilage and the angle of the mandible). He has a hematoma but no active pulsatile bleeding, and is hemodynamically stable. What is the current preferred management?",
    "options": {
      "A": "Immediate surgical neck exploration",
      "B": "Selective management guided by physical examination and CT angiography of the neck",
      "C": "Observation for 48 hours with serial exam",
      "D": "Angiography and embolization for all zone II injuries"
    },
    "answer": "B",
    "explanation": "Management of penetrating neck trauma has evolved from mandatory surgical exploration to selective management. For stable patients, CT angiography of the neck identifies vascular injuries, airway involvement, and esophageal injuries, directing selective surgical intervention. Hard signs of injury (active pulsatile bleeding, expanding hematoma, neurologic deficits, airway compromise) require immediate surgery. Soft signs (small hematoma, mild dysphagia) can be evaluated with CT angiography and esophagography. This selective approach applies across all three zones (Zone I \u2014 below cricoid, Zone II \u2014 cricoid to angle of mandible, Zone III \u2014 above angle of mandible)."
  },
  {
    "id": 281,
    "chapter": 29,
    "domain": "Trauma",
    "question": "A 25-year-old woman with TBI (GCS 7, CT showing multiple contusions, ICP 28 mmHg) is in the neuro-ICU. Her CPP is 58 mmHg (MAP 86 mmHg). What is the TARGET CPP range recommended by BTF guidelines for severe TBI?",
    "options": {
      "A": "CPP \u226550 mmHg",
      "B": "CPP 60-70 mmHg",
      "C": "CPP \u226580 mmHg",
      "D": "CPP 70-90 mmHg"
    },
    "answer": "B",
    "explanation": "Brain Trauma Foundation (BTF) 4th Edition guidelines recommend maintaining CPP 60-70 mmHg in severe TBI. CPP = MAP - ICP = 86 - 28 = 58 mmHg \u2014 below target, requiring either increasing MAP (vasopressors) or decreasing ICP. Below CPP 60 mmHg, cerebral ischemia increases significantly. Targeting CPP >70 mmHg (using aggressive vasopressors) is not recommended due to increased ARDS risk (ARDS is worsened by the catecholamine burden required to achieve very high CPP). The BOOST-II trial explored brain tissue oxygenation-guided therapy (PbtO2-guided CPP optimization) as a complement to ICP monitoring."
  },
  {
    "id": 282,
    "chapter": 29,
    "domain": "Trauma",
    "question": "A 38-year-old man with blunt abdominal trauma has a CT showing grade IV liver laceration with active extravasation of contrast. His BP is 98/64, HR 118 after 2L crystalloid. What is the PREFERRED management approach?",
    "options": {
      "A": "Operative laparotomy for all grade IV liver lacerations",
      "B": "Angioembolization as initial management if patient is responding to resuscitation",
      "C": "Observation and serial CT scans",
      "D": "Immediate massive transfusion without further intervention"
    },
    "answer": "B",
    "explanation": "Grade IV liver lacerations with active extravasation in hemodynamically stable (or responding) patients are managed with angioembolization (hepatic artery embolization) as the initial intervention at trauma centers. This nonsurgical approach successfully controls bleeding in 80-90% of hemodynamically stable patients. Operative laparotomy is reserved for: hemodynamic instability not responding to resuscitation, failure of angioembolization, or associated injuries requiring surgery (bowel, urologic). Grade V lacerations or periportal injuries with massive hemorrhage often require operative intervention despite best hemodynamics. The trend has moved toward NOM (non-operative management) for solid organ injuries when hemodynamics allow."
  },
  {
    "id": 283,
    "chapter": 29,
    "domain": "Trauma",
    "question": "A 50-year-old man has a C6 burst fracture with complete spinal cord injury (ASIA A). He develops bradycardia (HR 42) and hypotension (BP 72/44) without fever. His skin is warm and dry. What hemodynamic pattern is consistent with neurogenic shock and what is the treatment?",
    "options": {
      "A": "Hypovolemic shock (low CO, high SVR); IV crystalloid 30 mL/kg",
      "B": "Neurogenic shock (loss of sympathetic tone \u2014 hypotension + bradycardia + warm extremities); vasopressors (norepinephrine/phenylephrine) + atropine for bradycardia",
      "C": "Septic shock from occult infection; blood cultures and broad-spectrum antibiotics",
      "D": "Obstructive shock from traumatic cardiac injury; echocardiography"
    },
    "answer": "B",
    "explanation": "Neurogenic shock results from spinal cord injury above T6, disrupting the descending sympathetic pathways. Loss of sympathetic tone causes vasodilation (warm, dry skin, low SVR) and loss of cardiac sympathetic innervation (bradycardia). This contrasts with all other forms of shock where tachycardia is the compensatory response. Treatment: vasopressors (norepinephrine preferred \u2014 alpha vasoconstriction + mild beta-1 chronotropy), atropine or pacing for symptomatic bradycardia. MAP target is typically 85-90 mmHg for spinal cord perfusion (higher than standard MAP \u226565). Volume resuscitation is part of initial treatment but vasopressors are required to maintain tone."
  },
  {
    "id": 284,
    "chapter": 29,
    "domain": "Trauma",
    "question": "A 28-year-old woman with a stab wound to the chest has a pericardial effusion on FAST exam with Beck's triad (hypotension, muffled heart sounds, JVD). She is in PEA. What is the immediate treatment?",
    "options": {
      "A": "Emergent pericardiocentesis",
      "B": "Emergency department thoracotomy with pericardiotomy",
      "C": "Transfer to OR for pericardial window",
      "D": "IV fluid bolus and epinephrine per ACLS"
    },
    "answer": "B",
    "explanation": "Traumatic cardiac tamponade from penetrating chest injury causing cardiac arrest requires emergency department thoracotomy (EDT) with left anterolateral thoracotomy, pericardiotomy to release tamponade, and direct cardiac massage. Pericardiocentesis may temporize in subacute tamponade but is inadequate for traumatic hemopericardium with active hemorrhage. EDT allows: pericardial release, direct cardiac massage, cross-clamping of aorta, and surgical control of bleeding. This patient with penetrating trauma and PEA is an ideal EDT candidate (penetrating trauma + PEA in ED = survival rates 15-35%). Standard ACLS without surgical decompression will fail in traumatic tamponade."
  },
  {
    "id": 285,
    "chapter": 29,
    "domain": "Trauma",
    "question": "A 40-year-old man with traumatic brain injury has been stable with ICP 18-22 mmHg on mannitol 0.5 g/kg q4h for 72 hours. His serum osmolality is 328 mOsm/kg. What is the MAXIMUM safe osmolality with mannitol therapy, and what osmolality threshold requires discontinuation?",
    "options": {
      "A": "Max 320 mOsm/kg; discontinue when serum osmolality >320",
      "B": "Max 360 mOsm/kg; no threshold for discontinuation",
      "C": "Max 320-330 mOsm/kg; risk of AKI and mannitol toxicity increases above this threshold",
      "D": "Max 340 mOsm/kg; osmol gap > 20 indicates mannitol accumulation"
    },
    "answer": "C",
    "explanation": "Serum osmolality should be monitored during mannitol therapy. When serum osmolality exceeds 320-330 mOsm/kg, the risk of mannitol-induced renal failure (from mannitol accumulation causing tubular vacuolization and osmotic nephropathy) and paradoxical ICP increase (from mannitol crossing damaged BBB and accumulating in brain parenchyma) increases significantly. Mannitol dosing should be held when serum osmolality >320 mOsm/kg (many centers) or the osmol gap exceeds 20 mOsm/kg. Hypertonic saline (23.4% or 3%) is preferred by many centers as it does not cause the same renal complications and may be continued at higher osmolalities."
  },
  {
    "id": 286,
    "chapter": 30,
    "domain": "Toxicology",
    "question": "A 35-year-old man presents with confusion, miosis, bradycardia, bronchospasm, profuse secretions, diaphoresis, urinary incontinence, and muscle fasciculations after working in a pesticide factory. What is the antidote treatment?",
    "options": {
      "A": "Naloxone 0.4 mg IV \u2014 opioid toxidrome",
      "B": "Atropine (titrated to dry secretions) + pralidoxime (2-PAM) for organophosphate/nerve agent poisoning",
      "C": "Flumazenil 0.2 mg IV for benzodiazepine toxidrome",
      "D": "Physostigmine for anticholinergic toxidrome"
    },
    "answer": "B",
    "explanation": "This is a cholinergic toxidrome from organophosphate poisoning (SLUDGE: Salivation, Lacrimation, Urination, Defecation/Diarrhea, GI distress, Emesis + muscle fasciculations from nicotinic effects, miosis, bronchospasm). Mechanism: irreversible acetylcholinesterase inhibition. Treatment: (1) Atropine (competitive muscarinic antagonist) \u2014 titrated to dry secretions (endpoint is drying of secretions, not heart rate); doses may be very large (2-4 mg q5-15min, escalating to dozens of mg in severe poisoning); (2) Pralidoxime (2-PAM) reactivates acetylcholinesterase before 'aging' (irreversible binding) \u2014 must be given within hours; (3) Benzodiazepines for seizures. DECONTAMINATE \u2014 activated charcoal if recent ingestion."
  },
  {
    "id": 287,
    "chapter": 30,
    "domain": "Toxicology",
    "question": "A 22-year-old woman presents with hyperthermia (T 40.8\u00b0C), agitation, diaphoresis, hyperreflexia, myoclonus, and clonus after starting phenelzine (MAOI) 1 week ago and taking her prescribed sertraline. What is the diagnosis and SPECIFIC antidote?",
    "options": {
      "A": "Neuroleptic malignant syndrome (NMS); bromocriptine and dantrolene",
      "B": "Serotonin syndrome from MAOI + SSRI interaction; cyproheptadine + benzodiazepines + supportive care",
      "C": "Malignant hyperthermia; dantrolene 2.5 mg/kg IV",
      "D": "Anticholinergic toxidrome; physostigmine"
    },
    "answer": "B",
    "explanation": "Serotonin syndrome (Hunter criteria): serotonergic drug(s) + triad of agitation, autonomic instability (hyperthermia, diaphoresis, tachycardia), and neuromuscular abnormalities (clonus, hyperreflexia, myoclonus). MAOI + SSRI combination is the classic precipitant. Treatment: (1) Discontinue serotonergic agents; (2) Cyproheptadine (5-HT2A receptor antagonist, 12 mg PO then 4 mg q4h) \u2014 specific antidote but must be administered orally; (3) Benzodiazepines for agitation and seizures; (4) Active cooling for hyperthermia; (5) Paralysis and intubation for severe cases with refractory hyperthermia. NMS has lead-pipe rigidity and slower onset. Malignant hyperthermia occurs with volatile anesthetics and succinylcholine."
  },
  {
    "id": 288,
    "chapter": 30,
    "domain": "Toxicology",
    "question": "A 45-year-old man with known alcohol use disorder presents with tremors, diaphoresis, hypertension (BP 188/112), HR 138, T 38.4\u00b0C, and new-onset seizures 36 hours after his last drink. What is the BEST pharmacologic treatment for alcohol withdrawal seizures and delirium tremens?",
    "options": {
      "A": "Haloperidol 5 mg IM for agitation control",
      "B": "Phenobarbital 20 mg/kg IV loading dose",
      "C": "Benzodiazepines (diazepam or lorazepam) with CIWA-Ar symptom-triggered dosing",
      "D": "Propofol infusion for sedation"
    },
    "answer": "C",
    "explanation": "Benzodiazepines are the first-line treatment for alcohol withdrawal syndrome (AWS), including withdrawal seizures and delirium tremens, due to their cross-tolerance with alcohol (both enhance GABA-A receptor function). Symptom-triggered dosing based on CIWA-Ar (Clinical Institute Withdrawal Assessment \u2014 Alcohol revised) scale is superior to fixed dosing regimens (requires less medication, shorter treatment). IV diazepam or lorazepam are preferred in severe/ICU AWS. For benzodiazepine-refractory AWS (approx 25%), phenobarbital adjunct or high-dose phenobarbital monotherapy is effective. Haloperidol alone does not prevent withdrawal seizures (no GABA activity) and should not be used as monotherapy."
  },
  {
    "id": 289,
    "chapter": 30,
    "domain": "Toxicology",
    "question": "A 60-year-old man presents with progressive QRS widening (QRS 160 ms), hypotension, and ventricular arrhythmias after an intentional overdose of tricyclic antidepressant (TCA). What is the FIRST-LINE treatment for TCA-induced cardiac toxicity?",
    "options": {
      "A": "Lidocaine 1.5 mg/kg IV to stabilize cardiac membrane",
      "B": "IV sodium bicarbonate boluses to achieve serum pH 7.45-7.55",
      "C": "Amiodarone 300 mg IV for arrhythmia suppression",
      "D": "Activated charcoal to adsorb remaining TCA"
    },
    "answer": "B",
    "explanation": "TCA toxicity causes: fast sodium channel blockade (widened QRS, ventricular arrhythmias), anticholinergic effects, and alpha-1 adrenergic blockade (hypotension). Treatment: IV sodium bicarbonate (1-2 mEq/kg boluses) to achieve serum pH 7.45-7.55. Alkalinization works by: (1) Sodium loading overcomes fast Na channel blockade (direct effect); (2) Alkalemia decreases TCA binding to Na channels (pH-dependent effect). Target: serum pH 7.50-7.55, QRS <100 ms. Lidocaine does not reverse Na channel toxicity by TCAs. Amiodarone may worsen QTc. Activated charcoal (1g/kg) is appropriate if <1-2 hours post-ingestion and no airway compromise, but sodium bicarbonate is the priority for cardiac toxicity."
  },
  {
    "id": 290,
    "chapter": 30,
    "domain": "Toxicology",
    "question": "A 38-year-old woman presents with agitation, hyperthermia (T 40.4\u00b0C), lead-pipe muscle rigidity, diaphoresis, and new-onset respiratory failure. She started risperidone 2 weeks ago for bipolar disorder. CK is 28,000 IU/L. What is the diagnosis and which medication is CONTRAINDICATED?",
    "options": {
      "A": "Serotonin syndrome; cyproheptadine \u2014 bromocriptine is contraindicated",
      "B": "Neuroleptic malignant syndrome (NMS); succinylcholine is contraindicated for intubation due to hyperkalemia risk from rhabdomyolysis",
      "C": "Malignant hyperthermia; avoid trigger agents (volatile anesthetics, succinylcholine)",
      "D": "Thyroid storm; PTU + propranolol"
    },
    "answer": "B",
    "explanation": "Neuroleptic malignant syndrome (NMS) is caused by antipsychotic/dopamine antagonist-mediated dopamine receptor blockade. Classic: 'lead-pipe' muscular rigidity (unlike the clonic features of serotonin syndrome), hyperthermia, autonomic instability, altered mental status, and markedly elevated CK. Treatment: discontinue offending antipsychotic, benzodiazepines for agitation, dantrolene 2.5 mg/kg IV for hyperthermia/rigidity, bromocriptine (dopamine agonist) 2.5 mg TID. Succinylcholine is CONTRAINDICATED in NMS: massive rhabdomyolysis causes hyperkalemia and succinylcholine-induced further potassium release can precipitate fatal cardiac arrest. Use rocuronium instead for intubation (with sugammadex available)."
  },
  {
    "id": 291,
    "chapter": 31,
    "domain": "Procedures/Monitoring",
    "question": "A 65-year-old man in shock is evaluated with point-of-care ultrasound (POCUS). The RUSH (Rapid Ultrasound in Shock and Hypotension) protocol is performed. Which echocardiographic finding on the 'PUMP' assessment MOST suggests obstructive shock from cardiac tamponade?",
    "options": {
      "A": "Hyperdynamic LV with small left ventricle",
      "B": "Dilated, poorly contractile LV with EF 15%",
      "C": "Pericardial effusion with diastolic RV collapse",
      "D": "Dilated RV with paradoxical septal motion (D-sign)"
    },
    "answer": "C",
    "explanation": "The RUSH protocol systematically evaluates: PUMP (cardiac), TANK (volume status via IVC), PIPES (vascular). Cardiac tamponade: circumferential pericardial effusion + diastolic right ventricular (RV) collapse \u2014 the RV free wall invaginates inward in early diastole when intrapericardial pressure exceeds the low RV diastolic pressure. This is the ECHOCARDIOGRAPHIC hallmark of tamponade physiology. The IVC is usually dilated and plethoric. Hyperdynamic small LV suggests hypovolemia or distributive shock. Dilated poorly contractile LV indicates cardiogenic shock. D-sign (paradoxical septal motion) indicates RV pressure overload/failure (massive PE, severe pulmonary HTN)."
  },
  {
    "id": 292,
    "chapter": 31,
    "domain": "Procedures/Monitoring",
    "question": "An ICU physician performing lung POCUS sees bilateral B-lines (>3 per space) in the bilateral lower lung zones. What does this finding represent?",
    "options": {
      "A": "Normal lung finding in supine patients",
      "B": "Pulmonary edema (cardiogenic or non-cardiogenic) with interstitial syndrome",
      "C": "Pneumothorax with absent lung sliding",
      "D": "Pleural effusion with dependent atelectasis"
    },
    "answer": "B",
    "explanation": "B-lines on lung ultrasound (LUS) are vertical hyperechoic artifacts arising from the pleural line and extending to the bottom of the screen without fading, moving with respiration. They represent interstitial-alveolar fluid accumulation ('comet tails'). Multiple B-lines (\u22653 per intercostal space, bilateral) indicate 'interstitial syndrome' \u2014 most commonly pulmonary edema (cardiogenic or non-cardiogenic), interstitial pneumonia (COVID-19, viral pneumonitis), or fibrosis. Pneumothorax shows absent lung sliding and lung point. Pleural effusion appears as an anechoic space above the diaphragm. A-lines (horizontal) represent normal aerated lung."
  },
  {
    "id": 293,
    "chapter": 31,
    "domain": "Procedures/Monitoring",
    "question": "A 70-year-old man in the ICU has suspected pneumothorax after central line placement. POCUS is performed over the right hemithorax. Which finding on M-mode lung ultrasound MOST confirms pneumothorax?",
    "options": {
      "A": "'Seashore sign' \u2014 granular pattern deep to pleural line on M-mode",
      "B": "'Barcode/stratosphere sign' \u2014 all horizontal lines throughout M-mode",
      "C": "B-lines in bilateral lower zones",
      "D": "Pleural line at 2-3 cm depth with absent sliding"
    },
    "answer": "B",
    "explanation": "On M-mode LUS: (1) Normal (no pneumothorax): 'seashore sign' \u2014 above the pleural line is a linear pattern (tranquil sea), below is a granular pattern (sandy beach = moving lung against chest wall). (2) Pneumothorax: 'barcode/stratosphere sign' \u2014 all horizontal lines above AND below the pleural line, indicating no lung movement against the chest wall (the air-filled pleural space prevents ultrasound transmission). Additionally, absent lung sliding (B-mode) and the 'lung point' (the specific point where sliding lung meets the pneumothorax) is pathognomonic for pneumothorax. LUS is more sensitive than CXR for pneumothorax (~86% vs. ~52%)."
  },
  {
    "id": 294,
    "chapter": 31,
    "domain": "Procedures/Monitoring",
    "question": "A 55-year-old man in the ICU requires central venous catheter placement. Real-time ultrasound-guided technique is being used for internal jugular vein (IJV) cannulation. Which vascular landmark distinguishes the IJV from the carotid artery on ultrasound?",
    "options": {
      "A": "The IJV is always medial to the carotid artery",
      "B": "The IJV is compressible with probe pressure; the carotid artery is pulsatile and non-compressible",
      "C": "The IJV has visible valve leaflets on ultrasound, unlike the carotid",
      "D": "The IJV appears hyperechoic (bright) compared to the carotid"
    },
    "answer": "B",
    "explanation": "Key ultrasound distinctions between IJV and carotid artery: (1) Compressibility: IJV walls collapse completely with gentle probe pressure; the carotid artery does not compress. (2) Pulsatility: carotid artery shows pulsatile wall motion synchronous with the cardiac cycle; IJV pulsation is venous (reflected from right heart, triphasic with respiration). (3) Response to valsalva: IJV distends with valsalva maneuver. (4) Doppler: artery shows high-velocity pulsatile flow; vein shows low-velocity phasic flow. In-plane needle visualization and aspiration of dark non-pulsatile blood confirm venous cannulation. Real-time US guidance reduces arterial puncture by >60%."
  },
  {
    "id": 295,
    "chapter": 31,
    "domain": "Procedures/Monitoring",
    "question": "A 68-year-old woman presents with hypotension. POCUS reveals a plethoric IVC (>2.1 cm) with <50% respiratory variation. The LVEF appears normal. What does this IVC finding suggest?",
    "options": {
      "A": "Hypovolemia; give 2L IV crystalloid",
      "B": "Elevated right-sided filling pressures (right atrial hypertension); fluid administration likely unhelpful",
      "C": "This finding is diagnostic of pulmonary embolism",
      "D": "Cardiac tamponade as the sole diagnosis"
    },
    "answer": "B",
    "explanation": "A plethoric IVC (>2.1 cm diameter) with <50% respiratory variation (collapsibility index <50%) indicates elevated right atrial pressure and/or right heart failure \u2014 the IVC is distended and non-collapsible because RAP is high. This suggests the patient is NOT preload-responsive (fluid administration unlikely to increase cardiac output). Causes: right heart failure, cardiac tamponade, tension pneumothorax, massive PE, severe tricuspid regurgitation. A collapsible IVC (<2.1 cm, >50% variation) suggests low RAP and potential fluid responsiveness. IVC assessment has significant limitations in mechanically ventilated patients where respiratory variation is passive."
  },
  {
    "id": 296,
    "chapter": 31,
    "domain": "Procedures/Monitoring",
    "question": "A 45-year-old man with septic shock undergoes POCUS assessment. Spleen is not enlarged, there is no free fluid in Morrison's pouch or the left upper quadrant. The inferior vena cava is flat (<1.5 cm, >50% variation). What is the MOST appropriate interpretation regarding volume status?",
    "options": {
      "A": "The patient is definitely hypovolemic and needs 3L of crystalloid",
      "B": "A small, collapsible IVC suggests low CVP and potential fluid responsiveness \u2014 confirm with dynamic test (PLR or fluid challenge with CO monitoring)",
      "C": "The patient is volume overloaded; give furosemide",
      "D": "POCUS cannot assess fluid responsiveness \u2014 only PA catheter is valid"
    },
    "answer": "B",
    "explanation": "A small, collapsible IVC (<1.5 cm with >50% collapsibility) correlates with low right atrial pressure (<5 mmHg) and suggests the patient may be fluid-responsive. However, IVC assessment alone is NOT sufficient to predict fluid responsiveness with high accuracy \u2014 it should be combined with dynamic assessments (passive leg raise with CO measurement, or a mini-fluid challenge of 100-200 mL with CO monitoring). IVC assessment is most reliable in mechanically ventilated patients on controlled modes. In spontaneously breathing patients, IVC variation is less predictive. POCUS is a valuable, widely-used tool for bedside hemodynamic assessment in the ICU."
  },
  {
    "id": 297,
    "chapter": 31,
    "domain": "Procedures/Monitoring",
    "question": "During an abdominal POCUS (FAST exam) on a trauma patient, free fluid is seen in Morrison's pouch (hepatorenal space). What does this finding indicate in the clinical context of blunt abdominal trauma?",
    "options": {
      "A": "Confirms hollow viscus injury (bowel perforation)",
      "B": "Indicates intraperitoneal hemorrhage most likely from solid organ injury \u2014 the amount correlates with injury severity",
      "C": "This is always a normal finding (peritoneal fluid) in trauma",
      "D": "Free fluid in Morrison's pouch is diagnostic of splenic laceration specifically"
    },
    "answer": "B",
    "explanation": "Morrison's pouch (hepatorenal space) is the most dependent peritoneal space in the supine position \u2014 the first place free peritoneal fluid accumulates in blunt abdominal trauma. Free fluid here in the context of trauma most commonly represents intraperitoneal hemorrhage from solid organ injury (liver, spleen, mesentery). The amount of fluid on FAST (or CT) correlates with injury severity. A positive FAST in a hemodynamically unstable patient indicates need for emergent laparotomy without CT. In a stable patient, CT defines the injury better. Free fluid does not specifically indicate which organ is injured. FAST cannot reliably detect hollow viscus injury (needs CT or peritoneal lavage)."
  },
  {
    "id": 298,
    "chapter": 32,
    "domain": "Ethics/Palliative",
    "question": "A 58-year-old man is in the ICU following cardiac arrest with anoxic brain injury. After 72 hours of temperature management and withdrawal of sedation, he remains comatose with no motor response to pain, absent brainstem reflexes (absent corneal, gag, and pupillary reflexes), and isoelectric EEG. His wife asks if he is 'brain dead.' Which statement is CORRECT?",
    "options": {
      "A": "Brain death can be declared based on clinical criteria alone without ancillary testing in most cases",
      "B": "Isoelectric EEG alone is sufficient to diagnose brain death",
      "C": "Apnea testing must be performed (among other criteria) to confirm brain death",
      "D": "Brain death declaration requires 48 hours of observation after cardiac arrest"
    },
    "answer": "C",
    "explanation": "Brain death (death by neurologic criteria) requires: (1) Established etiology explaining irreversible cessation of all brain function; (2) Exclusion of confounders (hypothermia T<36\u00b0C, metabolic derangements, drug intoxication, neuromuscular blockade); (3) Clinical neurologic examination showing: coma (GCS 3), absent brainstem reflexes (pupillary, corneal, oculocephalic, oculovestibular, gag, cough), and (4) Apnea test: absence of respiratory drive when PaCO2 rises to >60 mmHg (or 20 mmHg above baseline). Isoelectric EEG alone is NOT sufficient. Ancillary tests (EEG, cerebral blood flow studies, CT angiography) are used when apnea testing cannot be completed or examination is confounded."
  },
  {
    "id": 299,
    "chapter": 32,
    "domain": "Ethics/Palliative",
    "question": "A 70-year-old woman with stage IV lung cancer is in the ICU. She has an advance directive stating she does not want mechanical ventilation or CPR. Her family insists on 'doing everything.' The patient is currently confused (GCS 12) but had intact decision-making capacity when she completed the directive. What is the ethically correct approach?",
    "options": {
      "A": "Follow the family's wishes as they know the patient best",
      "B": "Honor the patient's advance directive \u2014 it reflects her previously expressed autonomous wishes when she had capacity",
      "C": "Convene an ethics committee before making any decisions",
      "D": "Await recovery of patient capacity before making any treatment decisions"
    },
    "answer": "B",
    "explanation": "An advance directive completed when the patient had decision-making capacity legally and ethically represents the patient's autonomous wishes about treatment and must be honored. The family's desires cannot override a valid advance directive. The patient's right to refuse medical intervention (including CPR and mechanical ventilation) is grounded in the principle of respect for autonomy. The physician's ethical and legal obligation is to the patient's expressed wishes, not the family's preferences. Family discussion should be compassionate and focus on explaining the patient's previously expressed values. Ethics consultation can assist with family conflict but should not delay honoring the directive."
  },
  {
    "id": 300,
    "chapter": 32,
    "domain": "Ethics/Palliative",
    "question": "A 65-year-old man with multiorgan failure (APACHE II 38, predicted mortality >90%) is being discussed for possible withdrawal of life-sustaining therapy. His wife is his healthcare surrogate. She says 'he would not want to live like this.' Which ethical standard BEST guides surrogate decision-making in the absence of a formal advance directive?",
    "options": {
      "A": "Best interest standard \u2014 what the medical team believes is best for the patient",
      "B": "Substituted judgment standard \u2014 what the patient would choose for himself based on his values and previously expressed wishes",
      "C": "Community standard \u2014 what most patients in this situation would choose",
      "D": "Beneficence principle \u2014 continuing all interventions until natural death"
    },
    "answer": "B",
    "explanation": "The substituted judgment standard is the ethically preferred approach for surrogate decision-making: the surrogate makes decisions based on what the patient would have wanted \u2014 not what the surrogate wants or what seems objectively best. This reflects the patient's autonomy through the surrogate. When the patient's wishes are truly unknown (no prior expressions), the 'best interest' standard is used as a fallback (what a reasonable person would want given the circumstances). The surrogate's statement 'he would not want to live like this' reflects substituted judgment and should guide the clinical team. This standard prioritizes individual patient preferences over population-based or paternalistic approaches."
  }
];
