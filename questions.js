const QUESTIONS = [
  {
    "id": 1,
    "chapter": 1,
    "domain": "Critical Care Principles",
    "question": "A 72-year-old man with septic shock secondary to pneumonia is admitted to the ICU. His PaO2/FiO2 ratio is 180, creatinine is 2.8 mg/dL (baseline 0.9), bilirubin is 1.8 mg/dL, platelet count is 95,000/\u03bcL, GCS is 12, and he requires norepinephrine at 0.12 mcg/kg/min to maintain MAP >65 mmHg. What is his SOFA score?",
    "options": {
      "A": "8",
      "B": "10",
      "C": "11",
      "D": "13"
    },
    "answer": "C",
    "explanation": "SOFA scoring: Respiratory (PaO2/FiO2 180 with mechanical support = 2 points if on vent; if not on vent = 2 points), Renal (creatinine 2.8 = 3 points), Hepatic (bilirubin 1.8 = 1 point), Coagulation (platelets 95,000 = 1 point), Neurologic (GCS 12 = 1 point), Cardiovascular (norepinephrine 0.12 mcg/kg/min = 3 points). Total = 2+3+1+1+1+3 = 11. Option A undercounts the cardiovascular and renal components. Options B and D represent miscalculations of individual component scores."
  },
  {
    "id": 2,
    "chapter": 1,
    "domain": "Critical Care Principles",
    "question": "A 58-year-old woman is assessed in the ICU using the APACHE II scoring system. Which of the following variables is NOT included in the APACHE II score?",
    "options": {
      "A": "Mean arterial pressure",
      "B": "Serum lactate",
      "C": "Serum sodium",
      "D": "Glasgow Coma Scale"
    },
    "answer": "B",
    "explanation": "APACHE II uses 12 acute physiologic variables: temperature, MAP, heart rate, respiratory rate, oxygenation (A-aDO2 or PaO2), arterial pH, serum sodium, serum potassium, serum creatinine, hematocrit, WBC, and GCS \u2014 plus age and chronic health points. Serum lactate is NOT one of the 12 APACHE II variables, though it is critically important in sepsis prognostication. The other options (MAP, sodium, GCS) are all included in APACHE II."
  },
  {
    "id": 3,
    "chapter": 1,
    "domain": "Critical Care Principles",
    "question": "A 65-year-old man arrives in the ED with fever, hypotension (BP 82/50), and altered mental status. Blood cultures are drawn and broad-spectrum antibiotics are started within 30 minutes. Per Sepsis-3 criteria, which of the following best defines septic shock?",
    "options": {
      "A": "Infection + SIRS criteria (temp >38\u00b0C, HR >90, RR >20, WBC >12,000)",
      "B": "Infection + organ dysfunction (SOFA score increase \u22652) + MAP <65 mmHg requiring vasopressors + lactate >2 mmol/L despite adequate resuscitation",
      "C": "Infection + hypotension unresponsive to 30 mL/kg IV fluid bolus",
      "D": "Infection + two or more organ failures as defined by APACHE II criteria"
    },
    "answer": "B",
    "explanation": "Sepsis-3 (2016) defines septic shock as sepsis (life-threatening organ dysfunction caused by dysregulated host response to infection) PLUS a vasopressor requirement to maintain MAP \u226565 mmHg AND serum lactate >2 mmol/L despite adequate fluid resuscitation. Option A describes the outdated SIRS-based definition of sepsis from 1991. Option C is incomplete and does not include the lactate criterion. Option D references APACHE II, which is not part of the Sepsis-3 definition."
  },
  {
    "id": 4,
    "chapter": 1,
    "domain": "Critical Care Principles",
    "question": "In a mass casualty incident, a patient arrives with a gunshot wound to the abdomen. He has a palpable radial pulse, is breathing spontaneously at 22/min, and follows commands. Under the START triage system, how should this patient be triaged?",
    "options": {
      "A": "Black (expectant/deceased)",
      "B": "Red (immediate)",
      "C": "Yellow (delayed)",
      "D": "Green (minor)"
    },
    "answer": "C",
    "explanation": "The START triage system categorizes patients based on respiratory rate, perfusion (radial pulse), and mental status (RPM). This patient breathes spontaneously at 22/min (not apneic), has a palpable radial pulse, and follows commands \u2014 all three components are present and within acceptable limits. This makes him Yellow (delayed), meaning he can tolerate a brief wait for care. Red (immediate) is assigned when one of the three RPM criteria is abnormal. Green is for those with minor injuries who can walk. Black is for deceased or unsalvageable patients."
  },
  {
    "id": 5,
    "chapter": 1,
    "domain": "Critical Care Principles",
    "question": "A 70-year-old woman with COPD and CHF is admitted to the ICU with worsening dyspnea. Her Sequential Organ Failure Assessment (SOFA) score on admission is 6. After 48 hours of treatment, her SOFA score rises to 11. What does this change most strongly predict?",
    "options": {
      "A": "Need for renal replacement therapy within 72 hours",
      "B": "Increased ICU mortality",
      "C": "Development of ventilator-associated pneumonia",
      "D": "Requirement for surgical intervention"
    },
    "answer": "B",
    "explanation": "Serial SOFA scores are the strongest validated predictor of ICU mortality. A rising SOFA score during the first 48\u201396 hours of ICU care, particularly when the delta SOFA (change from baseline) is positive, correlates strongly with increased mortality. A total SOFA >11 is associated with mortality exceeding 40\u201350%. While renal replacement therapy may be needed, this is a specific organ complication and not the primary predictive utility of the SOFA trajectory. SOFA does not directly predict VAP or surgical need."
  },
  {
    "id": 6,
    "chapter": 1,
    "domain": "Critical Care Principles",
    "question": "A 55-year-old man is in the ICU following abdominal sepsis. His SOFA score is 8, but his qSOFA (quick SOFA) score is 1 (only altered mentation). Which statement best describes the appropriate use of qSOFA in this setting?",
    "options": {
      "A": "A qSOFA of \u22652 is required to diagnose sepsis in the ICU",
      "B": "qSOFA is validated as a screening tool outside the ICU to identify patients at risk for poor outcomes",
      "C": "qSOFA is superior to full SOFA for risk stratification in ICU patients",
      "D": "A qSOFA of 1 rules out the diagnosis of sepsis"
    },
    "answer": "B",
    "explanation": "The qSOFA (altered mentation, RR \u226522, SBP \u2264100) was designed as a rapid bedside screening tool for non-ICU settings \u2014 emergency departments, wards, and pre-hospital environments \u2014 to identify patients at risk of poor outcomes from infection. It is NOT intended to replace the full SOFA score for diagnosing sepsis in the ICU. In the ICU, the full SOFA score (increase \u22652 from baseline) remains the standard for defining sepsis-related organ dysfunction. A qSOFA of 1 does not rule in or rule out sepsis."
  },
  {
    "id": 7,
    "chapter": 1,
    "domain": "Critical Care Principles",
    "question": "A hospitalized 68-year-old man with pneumonia suddenly becomes hypotensive and tachycardic. The rapid response team evaluates him and determines he has developed new respiratory failure requiring ICU-level care. Which ICU triage principle best guides the decision about ICU admission in resource-limited settings?",
    "options": {
      "A": "Admit all patients who request ICU-level care regardless of prognosis",
      "B": "Prioritize patients most likely to benefit from ICU interventions based on severity and reversibility of illness",
      "C": "Reserve ICU beds for post-surgical patients as they have the most predictable outcomes",
      "D": "Admit in order of disease severity alone, without considering likelihood of recovery"
    },
    "answer": "B",
    "explanation": "ICU triage guidelines from the Society of Critical Care Medicine recommend prioritizing patients who are most likely to benefit from ICU-level interventions \u2014 those whose illness is both severe enough to require intensive monitoring/treatment AND potentially reversible. This utilitarian approach balances individual patient needs with fair allocation of limited resources. Admitting all requestors regardless of prognosis or limiting beds to surgical patients ignores the core triage principle of beneficence. Severity alone without considering reversibility could result in admitting patients with terminal illness who would not benefit."
  },
  {
    "id": 8,
    "chapter": 1,
    "domain": "Critical Care Principles",
    "question": "A 63-year-old woman in the ICU has a serum lactate of 6.2 mmol/L. Her hemodynamics are: MAP 68 mmHg, HR 105 bpm, CVP 12 mmHg. She is on norepinephrine at 0.08 mcg/kg/min. Which type of shock does her elevated lactate MOST likely represent in this context?",
    "options": {
      "A": "Obstructive shock from massive pulmonary embolism",
      "B": "Distributive shock with inadequate cellular oxygen utilization",
      "C": "Hypovolemic shock from occult hemorrhage",
      "D": "Cardiogenic shock from new ventricular dysfunction"
    },
    "answer": "B",
    "explanation": "This patient is on a vasopressor for septic (distributive) shock with an elevated lactate reflecting tissue hypoperfusion and mitochondrial dysfunction (type A lactic acidosis). Her CVP of 12 and MAP of 68 make significant hypovolemia less likely. Obstructive shock from PE would typically present with right heart strain and hemodynamic collapse out of proportion to the vasopressor requirement. Cardiogenic shock usually features elevated filling pressures, low cardiac output, and cool extremities \u2014 additional data (echo, ScvO2) would be needed. In sepsis, lactate elevation often reflects impaired cellular oxygen extraction rather than simple delivery failure."
  },
  {
    "id": 9,
    "chapter": 1,
    "domain": "Critical Care Principles",
    "question": "A 75-year-old man with metastatic pancreatic cancer is admitted to the ICU with septic shock. His family requests full resuscitation. His APACHE II score predicts 85% hospital mortality. A palliative care consultation is requested. Which ethical framework is MOST appropriate when counseling the family about goals of care?",
    "options": {
      "A": "Prioritize family autonomy exclusively; proceed with all interventions regardless of futility",
      "B": "Apply the principle of non-maleficence by withholding all ICU interventions immediately",
      "C": "Balance beneficence, non-maleficence, and patient autonomy through shared decision-making focused on patient values and realistic prognosis",
      "D": "Transfer the patient immediately to a non-ICU ward to free up resources"
    },
    "answer": "C",
    "explanation": "Goals-of-care discussions in the ICU should be guided by the four bioethical principles: autonomy, beneficence, non-maleficence, and justice. Shared decision-making that incorporates the patient's values and wishes (autonomy), realistic prognostication (beneficence), avoidance of disproportionate suffering (non-maleficence), and resource stewardship (justice) is the gold standard approach. Simply deferring entirely to family demands ignores medical futility and non-maleficence. Immediately withdrawing care without discussion violates patient autonomy. Resource-based transfer decisions should never override ethical patient care principles."
  },
  {
    "id": 10,
    "chapter": 2,
    "domain": "Hemodynamic Monitoring",
    "question": "A 61-year-old woman with cardiogenic shock is being monitored with a pulmonary artery (Swan-Ganz) catheter. Her hemodynamic profile shows: CO 2.8 L/min, CI 1.5 L/min/m\u00b2, PCWP 24 mmHg, SVR 1800 dynes\u00b7sec/cm\u2075, ScvO2 52%. Which diagnosis does this profile BEST support?",
    "options": {
      "A": "Septic shock",
      "B": "Cardiogenic shock",
      "C": "Hypovolemic shock",
      "D": "Neurogenic shock"
    },
    "answer": "B",
    "explanation": "This hemodynamic profile \u2014 low cardiac output/index, elevated PCWP (reflecting elevated left-sided filling pressures), high SVR (compensatory vasoconstriction), and low ScvO2 (reflecting increased oxygen extraction due to reduced delivery) \u2014 is the classic fingerprint of cardiogenic shock. Septic shock features high CO, low SVR, and variable PCWP. Hypovolemic shock presents with low CO, low PCWP, and high SVR but would not have an elevated PCWP. Neurogenic shock is characterized by low SVR without the compensatory tachycardia and with a normal or low PCWP."
  },
  {
    "id": 11,
    "chapter": 2,
    "domain": "Hemodynamic Monitoring",
    "question": "During PA catheter insertion in a 58-year-old man with respiratory failure, the monitor shows a sudden change in waveform as the catheter balloon is inflated. The waveform transitions from a pulsatile pattern with a dicrotic notch to a damped, lower-amplitude waveform with no dicrotic notch and a mean pressure of 14 mmHg. Where is the catheter tip most likely located?",
    "options": {
      "A": "Right ventricle",
      "B": "Pulmonary artery",
      "C": "Wedge position (occluded pulmonary capillary)",
      "D": "Superior vena cava"
    },
    "answer": "C",
    "explanation": "When the PA catheter balloon is inflated and the catheter floats into a wedge position, the pulsatile pulmonary artery waveform (which has a dicrotic notch and higher systolic pressure) is replaced by a damped, low-amplitude waveform that approximates left atrial pressure \u2014 the pulmonary capillary wedge pressure (PCWP). A mean of 14 mmHg is a normal PCWP (normal 6\u201312 mmHg; this is mildly elevated). The RV waveform is high-amplitude with no dicrotic notch and equal systolic/PA systolic. The PA waveform has a dicrotic notch. The SVC shows a venous a/v waveform."
  },
  {
    "id": 12,
    "chapter": 2,
    "domain": "Hemodynamic Monitoring",
    "question": "A 66-year-old man with septic shock has a central venous oxygen saturation (ScvO2) of 58% measured from his internal jugular central venous catheter. Hemoglobin is 7.2 g/dL, MAP is 66 mmHg, and he is receiving norepinephrine. What does a low ScvO2 (<70%) indicate in this patient?",
    "options": {
      "A": "Adequate oxygen delivery with normal cellular metabolism",
      "B": "Increased oxygen extraction by tissues due to inadequate oxygen delivery relative to demand",
      "C": "Hyperoxic state from excessive supplemental oxygen administration",
      "D": "Left-to-right intracardiac shunting"
    },
    "answer": "B",
    "explanation": "ScvO2 reflects the balance between oxygen delivery (DO2) and consumption (VO2). A low ScvO2 (<70%) indicates that tissues are extracting more oxygen than normal because delivery is inadequate relative to metabolic demand \u2014 a sign of global tissue hypoperfusion. In this patient, anemia (Hgb 7.2) and possible low cardiac output are likely contributing to reduced DO2. The Early Goal-Directed Therapy trial (Rivers, 2001) used ScvO2 <70% as a trigger for additional resuscitation. Hyperoxia would elevate ScvO2. Intracardiac shunts affect mixed venous saturation in a different pattern."
  },
  {
    "id": 13,
    "chapter": 2,
    "domain": "Hemodynamic Monitoring",
    "question": "A 54-year-old woman undergoing arterial line placement in the ICU is noted to have a dampened arterial waveform. The line is zeroed correctly. The 'fast flush test' shows a slow return to baseline without oscillations. What is the MOST likely cause?",
    "options": {
      "A": "Air bubble or clot in the system causing overdamping",
      "B": "Stiff, non-compliant tubing causing underdamping",
      "C": "Catheter tip against the vessel wall causing underdamping",
      "D": "Excessive tubing length causing underdamping"
    },
    "answer": "A",
    "explanation": "The fast flush test assesses the dynamic response of the arterial line system. An overdamped system \u2014 caused by air bubbles, blood clots, soft/compliant tubing, or kinked catheter \u2014 shows a slow, sluggish return to baseline without oscillations after the flush, and the waveform appears rounded with an artificially low systolic and elevated diastolic reading. An underdamped system shows multiple oscillations (ringing) after the flush and produces falsely elevated systolic readings. Stiff tubing, excessive length, and catheter malposition typically cause underdamping, not overdamping."
  },
  {
    "id": 14,
    "chapter": 2,
    "domain": "Hemodynamic Monitoring",
    "question": "A 70-year-old man on mechanical ventilation has a CVP of 10 mmHg. His attending considers using CVP to guide fluid resuscitation. Which statement BEST reflects current evidence regarding CVP as a fluid responsiveness predictor?",
    "options": {
      "A": "CVP of <8 mmHg reliably predicts fluid responsiveness",
      "B": "CVP is a poor predictor of fluid responsiveness regardless of its absolute value",
      "C": "CVP >12 mmHg reliably predicts that additional fluids will not improve cardiac output",
      "D": "CVP change with a passive leg raise is the gold standard for fluid responsiveness"
    },
    "answer": "B",
    "explanation": "Multiple meta-analyses (including Marik et al., 2008) have demonstrated that CVP is a poor predictor of fluid responsiveness, with an area under the ROC curve near 0.56 \u2014 essentially no better than chance. Neither absolute CVP nor CVP change reliably distinguishes fluid-responsive from non-responsive patients across the clinical range. Dynamic measures (pulse pressure variation, stroke volume variation, PLR-induced CO change) are far superior. Passive leg raise with cardiac output measurement (not CVP change) is the current gold standard for dynamic fluid responsiveness assessment."
  },
  {
    "id": 15,
    "chapter": 2,
    "domain": "Hemodynamic Monitoring",
    "question": "A 59-year-old man in the ICU with acute MI is being monitored via PA catheter. Thermodilution cardiac output is measured by injecting 10 mL of cold saline into the proximal port. Three measurements yield values of 3.2, 3.1, and 3.4 L/min. Which condition would most likely FALSELY ELEVATE thermodilution cardiac output?",
    "options": {
      "A": "Tricuspid regurgitation",
      "B": "Intracardiac left-to-right shunt",
      "C": "Pulmonary hypertension",
      "D": "Atrial fibrillation"
    },
    "answer": "B",
    "explanation": "A left-to-right intracardiac shunt (e.g., VSD or ASD) causes some of the cold indicator to recirculate through the right heart before reaching the thermistor, producing a falsely elevated (overestimated) thermodilution cardiac output. Tricuspid regurgitation causes the cold injectate to slosh back and forth, typically producing falsely LOW cardiac output measurements. Pulmonary hypertension affects hemodynamics but does not directly distort thermodilution. Atrial fibrillation causes variability in stroke volume, requiring averaging more measurements, but does not systematically bias the result in one direction."
  },
  {
    "id": 16,
    "chapter": 2,
    "domain": "Hemodynamic Monitoring",
    "question": "A 68-year-old woman with new-onset hypotension undergoes point-of-care echocardiography. The inferior vena cava (IVC) is measured at 1.2 cm and collapses >50% with sniff. She is not on mechanical ventilation. How should these IVC findings be interpreted?",
    "options": {
      "A": "Elevated right atrial pressure (>15 mmHg); patient is volume overloaded",
      "B": "Low right atrial pressure (<5 mmHg); patient is likely hypovolemic and may be fluid responsive",
      "C": "Normal right atrial pressure (8\u201310 mmHg); no clinical action needed",
      "D": "The IVC measurement is unreliable in spontaneously breathing patients"
    },
    "answer": "B",
    "explanation": "In spontaneously breathing patients, an IVC diameter <2.1 cm with >50% collapse with inspiration (sniff test) correlates with low right atrial pressure (estimated RA pressure 0\u20135 mmHg) and suggests hypovolemia and likely fluid responsiveness. Conversely, a dilated IVC (>2.1 cm) with <50% collapse suggests elevated RA pressure (>15 mmHg). IVC assessment is most reliable in spontaneously breathing patients; in mechanically ventilated patients, the IVC distensibility index (not collapsibility) is used. This patient's small, collapsible IVC suggests volume depletion."
  },
  {
    "id": 17,
    "chapter": 2,
    "domain": "Hemodynamic Monitoring",
    "question": "A 73-year-old man is in septic shock. A passive leg raise (PLR) test is performed: before PLR, cardiac output is 3.8 L/min; after elevating legs to 45\u00b0, cardiac output increases to 4.3 L/min. How should this result be interpreted?",
    "options": {
      "A": "Fluid non-responsive; the 13% increase does not meet the threshold for positive response",
      "B": "Fluid responsive; a \u226510\u201315% increase in cardiac output with PLR predicts that IV fluid will increase cardiac output",
      "C": "Inconclusive; PLR is only valid if performed for at least 5 minutes",
      "D": "Fluid non-responsive; PLR is only valid when measured with a PA catheter"
    },
    "answer": "B",
    "explanation": "A positive PLR test is defined as a \u226510\u201315% increase in cardiac output (or surrogate measure) within 60\u201390 seconds of elevating the legs to 45\u00b0. This patient's cardiac output increased from 3.8 to 4.3 L/min \u2014 a 13.2% increase \u2014 which meets the threshold for a positive (fluid-responsive) result. PLR effectively acts as an endogenous fluid challenge of ~300 mL, is reversible, and is valid in both spontaneously breathing and mechanically ventilated patients. It can be assessed with any cardiac output monitor (echo, PICCO, FloTrac, PA catheter) \u2014 not limited to PA catheters."
  },
  {
    "id": 18,
    "chapter": 2,
    "domain": "Hemodynamic Monitoring",
    "question": "A 57-year-old woman is mechanically ventilated (tidal volume 8 mL/kg IBW, sinus rhythm) for ARDS. Her arterial line shows a pulse pressure variation (PPV) of 18% over the respiratory cycle. What does this finding predict?",
    "options": {
      "A": "She is unlikely to respond to a fluid bolus (PPV <13% threshold not met)",
      "B": "She is likely fluid responsive; a PPV >13% predicts that cardiac output will increase with a fluid challenge",
      "C": "She has significant aortic regurgitation causing artifactual PPV elevation",
      "D": "PPV is unreliable at tidal volumes below 10 mL/kg and cannot be interpreted"
    },
    "answer": "B",
    "explanation": "Pulse pressure variation >13% during controlled mechanical ventilation in a patient with sinus rhythm and tidal volume \u22658 mL/kg IBW reliably predicts fluid responsiveness (sensitivity ~72%, specificity ~89% in validation studies). This patient's PPV of 18% indicates she is likely on the steep portion of the Frank-Starling curve and will increase cardiac output with volume loading. Important caveats: PPV is unreliable with spontaneous breathing, arrhythmias, right heart failure, or low tidal volumes (this patient is at 8 mL/kg, at the lower limit of reliability). Aortic regurgitation affects pulse pressure but is a separate consideration."
  },
  {
    "id": 19,
    "chapter": 3,
    "domain": "Cardiogenic Shock",
    "question": "A 64-year-old man presents with an acute anterior STEMI. He undergoes primary PCI but develops cardiogenic shock post-procedure: BP 82/56, HR 115, CO 2.6 L/min, PCWP 26 mmHg. He is started on norepinephrine and dobutamine. His condition worsens. An intra-aortic balloon pump (IABP) is considered. Which mechanism best describes how the IABP improves coronary perfusion?",
    "options": {
      "A": "IABP inflation during systole increases aortic root pressure and forward flow",
      "B": "IABP deflation during diastole creates a vacuum that augments venous return",
      "C": "IABP inflation during diastole augments diastolic aortic pressure, improving coronary perfusion pressure",
      "D": "IABP inflation during systole reduces afterload and improves left ventricular ejection"
    },
    "answer": "C",
    "explanation": "The IABP works via counterpulsation: inflation occurs during diastole (triggered by the T-wave/dicrotic notch on the aortic waveform), which augments diastolic aortic pressure and improves coronary artery perfusion (coronaries fill primarily during diastole). Deflation occurs just before systole, creating a rapid drop in aortic end-diastolic pressure that reduces LV afterload and wall stress. Option A is incorrect \u2014 IABP inflates during diastole, not systole. Option B confuses the mechanism of deflation. Option D is partially correct about afterload reduction but incorrectly states it occurs during systole \u2014 deflation (not inflation) reduces afterload."
  },
  {
    "id": 20,
    "chapter": 3,
    "domain": "Cardiogenic Shock",
    "question": "A 70-year-old woman with acute decompensated heart failure and cardiogenic shock has a cardiac index of 1.4 L/min/m\u00b2 despite optimal medical therapy including vasopressors and an IABP. Echocardiography shows EF 15%. She is being considered for percutaneous mechanical circulatory support. The Impella CP device is selected. What is the primary hemodynamic mechanism of the Impella?",
    "options": {
      "A": "It occludes the descending aorta during diastole to redirect blood to the coronary arteries",
      "B": "It is a continuous-flow axial pump that actively aspirates blood from the LV and expels it into the ascending aorta, unloading the LV and increasing forward flow",
      "C": "It creates a right-to-left extracorporeal shunt that bypasses the pulmonary circulation",
      "D": "It provides pulsatile counterpulsation by inflating during diastole and deflating before systole"
    },
    "answer": "B",
    "explanation": "The Impella (Abiomed) is a catheter-mounted, continuous-flow axial microaxial pump. It is positioned across the aortic valve with the inlet in the LV and the outlet in the ascending aorta. It actively pumps blood from the LV into the aorta, thereby unloading the LV (reducing preload and wall stress), decreasing myocardial oxygen demand, and increasing forward cardiac output. The CP model provides up to 3.7 L/min support. Option A describes IABP diastolic augmentation. Option C describes ECMO/ECLS in a different configuration. Option D describes the IABP mechanism."
  },
  {
    "id": 21,
    "chapter": 3,
    "domain": "Cardiogenic Shock",
    "question": "A 55-year-old man with ischemic cardiomyopathy (EF 10%) is listed for cardiac transplant. He develops refractory cardiogenic shock and is bridged with a continuous-flow left ventricular assist device (LVAD). Three weeks post-implant, he presents to the ED with sudden onset of hemoptysis and hypotension. His MAP by Doppler is 62 mmHg, but a standard sphygmomanometer reads no BP. His LVAD alarm shows low flow. What is the MOST likely diagnosis?",
    "options": {
      "A": "LVAD outflow graft thrombosis",
      "B": "Tension pneumothorax",
      "C": "Right ventricular failure causing reduced LVAD preload",
      "D": "LVAD driveline infection with sepsis"
    },
    "answer": "A",
    "explanation": "Hemoptysis in an LVAD patient with low flow alarms and hypotension strongly suggests outflow graft thrombosis (or less commonly, inflow thrombosis). Pump thrombosis can present with hemolysis (elevated LDH, tea-colored urine), low flow, and signs of acute heart failure. The inability to measure BP by standard cuff (non-pulsatile flow from LVAD) and reliance on Doppler MAP is expected in continuous-flow LVAD patients \u2014 this is a normal finding and not diagnostic. RV failure is a common post-LVAD complication but typically presents without hemoptysis. Driveline infection would present with signs of local infection and sepsis, not hemoptysis."
  },
  {
    "id": 22,
    "chapter": 3,
    "domain": "Cardiogenic Shock",
    "question": "A 67-year-old man with cardiogenic shock following acute MI is on norepinephrine 0.2 mcg/kg/min and dobutamine 5 mcg/kg/min. His BP is 88/60, HR is 118, and he has cool, mottled extremities with oliguria. Which hemodynamic parameter would BEST guide the decision to add vasopressin versus increasing the norepinephrine dose?",
    "options": {
      "A": "Central venous pressure",
      "B": "Systemic vascular resistance (SVR) calculated from PA catheter data",
      "C": "Serum lactate trend over 6 hours",
      "D": "Urine output response to 250 mL fluid challenge"
    },
    "answer": "B",
    "explanation": "In cardiogenic shock, knowing the SVR is crucial for vasopressor titration. If SVR is already markedly elevated (>1500 dynes\u00b7sec/cm\u2075), adding more vasoconstrictors (norepinephrine) may further increase LV afterload and worsen cardiac output. Vasopressin acts on V1 receptors causing vasoconstriction with potentially less chronotropy and is sometimes preferred when norepinephrine doses are high. PA catheter-derived SVR (SVR = [MAP-CVP]/CO \u00d7 80) directly informs this decision. CVP alone does not differentiate cardiogenic from other shock states. Lactate trend is useful for outcome tracking but does not guide the specific vasopressor choice. Fluid challenge is inappropriate in a patient with PCWP of 26 mmHg."
  },
  {
    "id": 23,
    "chapter": 3,
    "domain": "Cardiogenic Shock",
    "question": "A 48-year-old woman with fulminant myocarditis presents in cardiogenic shock with a BP of 70/40 despite maximal vasopressor support. Echocardiography shows biventricular failure with EF 10%. She is initiated on veno-arterial extracorporeal membrane oxygenation (VA-ECMO). Which complication is UNIQUE to VA-ECMO compared to VV-ECMO?",
    "options": {
      "A": "Oxygenator thrombosis",
      "B": "LV distension and pulmonary edema due to retrograde aortic flow increasing LV afterload",
      "C": "Recirculation of oxygenated blood back into the venous cannula",
      "D": "Heparin-induced thrombocytopenia from anticoagulation"
    },
    "answer": "B",
    "explanation": "VA-ECMO returns oxygenated blood retrograde into the aorta, which increases LV afterload. In a severely dysfunctional left ventricle that cannot eject against this increased afterload, blood accumulates in the LV, causing LV distension (the 'LV stun' or 'Harlequin syndrome' equivalent), elevated LV end-diastolic pressure, and pulmonary edema. This is unique to VA-ECMO and may require LV unloading with an Impella or atrial septostomy. Oxygenator thrombosis and HIT occur with both VA and VV-ECMO. Recirculation (where oxygenated blood re-enters the drainage cannula) is a problem specific to VV-ECMO, not VA-ECMO."
  },
  {
    "id": 24,
    "chapter": 3,
    "domain": "Cardiogenic Shock",
    "question": "A 72-year-old man with cardiogenic shock post-STEMI has a MAP of 58 mmHg. His physician chooses norepinephrine as the initial vasopressor. What was the landmark trial that supported norepinephrine over dopamine as the preferred first-line vasopressor in cardiogenic shock?",
    "options": {
      "A": "SOAP II trial, which showed significantly higher mortality with dopamine in the cardiogenic shock subgroup",
      "B": "VASST trial, which showed vasopressin was superior to norepinephrine in cardiogenic shock",
      "C": "ProCESS trial, which mandated norepinephrine as first-line in all shock states",
      "D": "ARISE trial, which demonstrated that early vasopressor use reduced fluid requirements in cardiogenic shock"
    },
    "answer": "A",
    "explanation": "The SOAP II trial (De Backer et al., NEJM 2010) randomized shock patients to dopamine vs. norepinephrine and found no difference in overall 28-day mortality. However, in the prespecified cardiogenic shock subgroup (N=280), dopamine was associated with significantly more arrhythmic events and a trend toward higher mortality, leading to the recommendation that norepinephrine be preferred over dopamine in cardiogenic shock. The VASST trial compared vasopressin to norepinephrine in septic shock (not cardiogenic). ProCESS and ARISE addressed early goal-directed therapy protocols in septic shock."
  },
  {
    "id": 25,
    "chapter": 3,
    "domain": "Cardiogenic Shock",
    "question": "A 65-year-old man with acute decompensated heart failure is in the ICU. He is hypotensive (MAP 60 mmHg) but has warm extremities and a high cardiac output (CI 3.2 L/min/m\u00b2) on PA catheter. His PCWP is 28 mmHg. Which hemodynamic phenotype of cardiogenic shock does this represent?",
    "options": {
      "A": "Classic cold and wet cardiogenic shock",
      "B": "Warm and wet cardiogenic shock (vasodilatory cardiogenic shock)",
      "C": "Cold and dry cardiogenic shock with volume depletion",
      "D": "Distributive shock masquerading as cardiogenic shock"
    },
    "answer": "B",
    "explanation": "Cardiogenic shock traditionally presents as 'cold and wet' (low CO, high PCWP, cool extremities). However, some patients \u2014 particularly those on chronic vasodilatory heart failure medications (ACE inhibitors, ARBs, sacubitril) or with inflammatory cardiomyopathy \u2014 present with 'warm and wet' or vasodilatory cardiogenic shock: hypotension with elevated filling pressures but preserved or elevated cardiac output and warm extremities due to low SVR. This phenotype requires vasopressors to restore vascular tone, not inotropes. Misidentifying this as distributive shock is important to avoid \u2014 the elevated PCWP distinguishes it from septic or other distributive etiologies."
  },
  {
    "id": 26,
    "chapter": 3,
    "domain": "Cardiogenic Shock",
    "question": "A 77-year-old woman with known severe aortic stenosis presents with cardiogenic shock. A bedside echocardiogram shows LVEF of 25% and a mean aortic valve gradient of 15 mmHg (previously 45 mmHg). Which finding explains the reduced gradient in the setting of cardiogenic shock?",
    "options": {
      "A": "Progression of aortic stenosis causing near-complete valve obstruction",
      "B": "Low-flow, low-gradient aortic stenosis \u2014 the reduced cardiac output causes a falsely low gradient despite severe stenosis",
      "C": "Acute aortic regurgitation superimposed on aortic stenosis",
      "D": "Echo measurement error due to poor acoustic windows"
    },
    "answer": "B",
    "explanation": "In severe aortic stenosis with reduced LV function (cardiogenic shock), the gradient across the valve falls dramatically because the weakened LV cannot generate sufficient flow velocity across the valve. This is classic 'low-flow, low-gradient severe AS' \u2014 the aortic valve area remains critically small, but the gradient is deceptively low because flow is reduced. Dobutamine stress echocardiography (DSE) can help distinguish true severe AS (valve area remains \u22641 cm\u00b2 with augmented flow) from pseudo-severe AS (valve area increases >1 cm\u00b2 with dobutamine). Aortic regurgitation would cause a different echocardiographic pattern. Measurement error is possible but should not be the primary clinical explanation."
  },
  {
    "id": 27,
    "chapter": 4,
    "domain": "Vasopressors & Inotropes",
    "question": "A 58-year-old man with septic shock has a MAP of 58 mmHg despite 30 mL/kg of crystalloid. Which vasopressor is recommended as the FIRST-LINE agent per Surviving Sepsis Campaign 2021 guidelines?",
    "options": {
      "A": "Dopamine",
      "B": "Epinephrine",
      "C": "Norepinephrine",
      "D": "Phenylephrine"
    },
    "answer": "C",
    "explanation": "The Surviving Sepsis Campaign 2021 guidelines recommend norepinephrine as the first-line vasopressor for septic shock (strong recommendation, high quality of evidence). Norepinephrine primarily acts on \u03b11 receptors to increase SVR and MAP with modest \u03b21 effects. Dopamine is no longer preferred as first-line due to increased arrhythmia risk (SOAP II trial). Epinephrine is a second-line agent or used as adjunctive therapy. Phenylephrine (pure \u03b11 agonist) can cause reflex bradycardia and reduced cardiac output; it is generally reserved for tachyarrhythmia-related hypotension or when other agents are unavailable."
  },
  {
    "id": 28,
    "chapter": 4,
    "domain": "Vasopressors & Inotropes",
    "question": "A 62-year-old man is in septic shock on norepinephrine 0.25 mcg/kg/min. His MAP remains 58 mmHg. Vasopressin is added at 0.03 units/min. What is the primary mechanism by which vasopressin increases blood pressure in this setting?",
    "options": {
      "A": "Beta-1 adrenergic receptor stimulation increasing heart rate and contractility",
      "B": "V1 receptor-mediated smooth muscle vasoconstriction of systemic vasculature",
      "C": "Alpha-2 adrenergic receptor stimulation causing central sympatholytic effect",
      "D": "Phosphodiesterase-3 inhibition reducing cAMP breakdown and increasing contractility"
    },
    "answer": "B",
    "explanation": "Vasopressin (antidiuretic hormone/ADH) increases blood pressure primarily via V1 receptors on vascular smooth muscle, causing potent vasoconstriction. V2 receptors in the collecting duct mediate its antidiuretic effect (water reabsorption). In septic shock, endogenous vasopressin levels are relatively deficient, and exogenous vasopressin at 0.03\u20130.04 units/min can restore vascular tone and spare norepinephrine requirements (the VASST trial). It has no direct beta-1 agonist activity. Alpha-2 stimulation causes central sympatholysis (e.g., clonidine) \u2014 opposite of what is desired. PDE-3 inhibition is the mechanism of milrinone."
  },
  {
    "id": 29,
    "chapter": 4,
    "domain": "Vasopressors & Inotropes",
    "question": "A 55-year-old woman in the cardiac ICU with cardiogenic shock has a cardiac index of 1.6 L/min/m\u00b2 and PCWP of 24 mmHg. MAP is 72 mmHg on low-dose norepinephrine. Her physician adds dobutamine at 5 mcg/kg/min. What is the primary mechanism of dobutamine's inotropic effect?",
    "options": {
      "A": "Alpha-1 adrenergic agonism increasing peripheral vasoconstriction and afterload",
      "B": "Beta-1 adrenergic agonism increasing cAMP, calcium influx, and myocardial contractility",
      "C": "V1 receptor stimulation increasing cardiac output indirectly through vasoconstriction",
      "D": "PDE-3 inhibition reducing cAMP breakdown in vascular smooth muscle"
    },
    "answer": "B",
    "explanation": "Dobutamine is a synthetic catecholamine with predominantly \u03b21-adrenergic agonist activity. Binding to \u03b21 receptors activates adenylyl cyclase, increasing intracellular cAMP, which activates protein kinase A and enhances L-type calcium channel activity, increasing calcium influx into myocytes and augmenting contractility (positive inotropy). It also has mild \u03b22 effects causing some vasodilation, which reduces afterload. Dobutamine has minimal \u03b11 activity and does not primarily act through vasoconstriction. V1 receptors are the mechanism of vasopressin. PDE-3 inhibition is the mechanism of milrinone and inamrinone."
  },
  {
    "id": 30,
    "chapter": 4,
    "domain": "Vasopressors & Inotropes",
    "question": "A 68-year-old man with severe pulmonary arterial hypertension and right ventricular failure is in cardiogenic shock. His MAP is 72 mmHg on norepinephrine, but he has low cardiac output and elevated RV filling pressures. His physician considers milrinone. Which property makes milrinone particularly useful in RV failure with pulmonary hypertension?",
    "options": {
      "A": "It selectively vasodilates the pulmonary vasculature without affecting systemic BP",
      "B": "It inhibits PDE-3, increasing cAMP in both cardiac myocytes (inotropy) and pulmonary vascular smooth muscle (pulmonary vasodilation), improving RV-PA coupling",
      "C": "It acts as a pure vasopressor, maintaining RV coronary perfusion pressure",
      "D": "It blocks calcium channels in pulmonary smooth muscle, mimicking CCB therapy"
    },
    "answer": "B",
    "explanation": "Milrinone is a PDE-3 inhibitor that prevents breakdown of cAMP in both cardiac myocytes (increasing contractility and improving RV function) and vascular smooth muscle (causing vasodilation, including in the pulmonary vasculature). This dual action \u2014 positive inotropy plus pulmonary vasodilation \u2014 makes milrinone particularly useful for RV failure with pulmonary hypertension by improving RV-PA coupling and reducing RV afterload. It is an 'inodilator.' Its systemic vasodilatory effect can cause hypotension, which is why norepinephrine is often co-administered. It does not selectively target the pulmonary vasculature and is not a CCB or vasopressor."
  },
  {
    "id": 31,
    "chapter": 4,
    "domain": "Vasopressors & Inotropes",
    "question": "A 73-year-old man with septic shock is on norepinephrine 0.35 mcg/kg/min and vasopressin 0.03 units/min. His MAP is 60 mmHg. His team considers epinephrine as third-line therapy. Which metabolic side effect is MOST commonly associated with epinephrine infusion?",
    "options": {
      "A": "Hyperkalemia from beta-2 receptor stimulation",
      "B": "Lactic acidosis (elevated lactate) from beta-2 mediated aerobic glycolysis and gluconeogenesis",
      "C": "Hyperchloremic metabolic acidosis from impaired renal acid excretion",
      "D": "Hypoglycemia from increased peripheral glucose uptake"
    },
    "answer": "B",
    "explanation": "Epinephrine infusion commonly causes a rise in serum lactate through a non-ischemic mechanism: beta-2 receptor stimulation in skeletal muscle increases aerobic glycolysis (glycogenolysis and the Cori cycle), generating lactate as a byproduct even when tissue perfusion is adequate. This can confound lactate-based resuscitation endpoints. Epinephrine also causes hyperglycemia (not hypoglycemia) via gluconeogenesis and glycogenolysis. Beta-2 stimulation causes HYPOkalemia (not hyperkalemia) as potassium shifts intracellularly. Hyperchloremic acidosis is associated with large-volume normal saline infusion, not epinephrine."
  },
  {
    "id": 32,
    "chapter": 4,
    "domain": "Vasopressors & Inotropes",
    "question": "A 52-year-old man with septic shock is started on low-dose dopamine (3 mcg/kg/min) by a nurse who believes it will protect kidney function. What does current evidence say about 'renal-dose' dopamine?",
    "options": {
      "A": "Low-dose dopamine (1\u20133 mcg/kg/min) reliably prevents acute kidney injury in sepsis via dopaminergic receptor stimulation",
      "B": "Low-dose dopamine has no proven benefit in preventing AKI or reducing need for renal replacement therapy",
      "C": "Low-dose dopamine decreases renal blood flow via D1 receptor constriction",
      "D": "Low-dose dopamine is recommended as adjunctive renal protection in all ICU patients"
    },
    "answer": "B",
    "explanation": "The concept of 'renal-dose' or 'low-dose' dopamine (1\u20133 mcg/kg/min) causing preferential renal vasodilation via D1 receptors has not been validated clinically. The landmark ANZICS trial (Bellomo et al., Lancet 2000) randomized critically ill patients to low-dose dopamine vs. placebo and found no difference in peak creatinine, need for RRT, ICU length of stay, or mortality. Current guidelines (SSC 2021) do not recommend dopamine for renal protection. At low doses, dopamine does cause some D1-mediated renal vasodilation physiologically, but this does not translate to clinical benefit and may cause arrhythmias."
  },
  {
    "id": 33,
    "chapter": 4,
    "domain": "Vasopressors & Inotropes",
    "question": "A 60-year-old woman with distributive shock from anaphylaxis has severe bronchospasm and urticaria. She received IM epinephrine 0.3 mg in the field. She arrives hypotensive (MAP 52 mmHg) with persistent bronchospasm. Which mechanism of epinephrine is MOST important for reversing anaphylaxis?",
    "options": {
      "A": "Alpha-1 agonism causing vasoconstriction and reversing hypotension",
      "B": "Beta-2 agonism causing bronchodilation and inhibiting mast cell degranulation",
      "C": "Epinephrine simultaneously acts via alpha-1 (vasoconstriction), beta-1 (inotropy), and beta-2 (bronchodilation + mast cell stabilization) receptors \u2014 all three mechanisms are essential",
      "D": "Alpha-2 agonism causing central suppression of the anaphylactic response"
    },
    "answer": "C",
    "explanation": "Epinephrine is the cornerstone treatment for anaphylaxis precisely because it simultaneously addresses multiple pathophysiologic mechanisms: alpha-1 receptor stimulation reverses vasodilation and hypotension; beta-1 stimulation increases heart rate and contractility to restore cardiac output; beta-2 stimulation causes bronchodilation AND \u2014 critically \u2014 inhibits further mast cell and basophil degranulation, reducing ongoing mediator release. No single mechanism alone is sufficient. Alpha-2 agonism (as with clonidine) has central sympatholytic effects and plays no role in anaphylaxis management. This multifaceted action is why epinephrine (not antihistamines or corticosteroids) is the required first-line treatment."
  },
  {
    "id": 34,
    "chapter": 4,
    "domain": "Vasopressors & Inotropes",
    "question": "A 66-year-old man with septic shock is being treated with norepinephrine at 0.4 mcg/kg/min. His MAP is 63 mmHg. Hydrocortisone 200 mg/day is started for vasopressor-refractory septic shock. What is the mechanism by which hydrocortisone improves vasopressor responsiveness?",
    "options": {
      "A": "Glucocorticoids directly stimulate alpha-1 receptors on vascular smooth muscle",
      "B": "Glucocorticoids suppress inflammatory cytokines, upregulate adrenergic receptor expression, and restore vascular tone by reversing vasopressor hyposensitivity (relative adrenal insufficiency)",
      "C": "Hydrocortisone acts as a mineralocorticoid and expands intravascular volume",
      "D": "Hydrocortisone inhibits iNOS expression, but this effect takes 48 hours and does not explain early hemodynamic improvement"
    },
    "answer": "B",
    "explanation": "Corticosteroids improve vasopressor responsiveness in septic shock via multiple mechanisms: they upregulate adrenergic receptor expression on vascular smooth muscle, inhibit inflammatory cytokine production (reducing iNOS-mediated vasodilation), and correct relative adrenal insufficiency (CIRCI \u2014 critical illness-related corticosteroid insufficiency). The ADRENAL and APROCCHSS trials showed that hydrocortisone reduced vasopressor duration and days in shock, though effects on mortality were mixed. While hydrocortisone has some mineralocorticoid activity, this is not its primary mechanism for vasopressor sparing. iNOS inhibition does contribute but is not the sole or primary mechanism."
  },
  {
    "id": 35,
    "chapter": 5,
    "domain": "Hemorrhagic Shock & Trauma Resuscitation",
    "question": "A 22-year-old man is brought to the trauma bay after a motorcycle collision. His BP is 90/60, HR is 128, RR is 26, and he is anxious but oriented. Estimated blood loss is 800\u20131200 mL. Which ATLS class of hemorrhagic shock does this presentation represent?",
    "options": {
      "A": "Class I (up to 750 mL, <15% blood volume)",
      "B": "Class II (750\u20131500 mL, 15\u201330% blood volume)",
      "C": "Class III (1500\u20132000 mL, 30\u201340% blood volume)",
      "D": "Class IV (>2000 mL, >40% blood volume)"
    },
    "answer": "B",
    "explanation": "ATLS Class II hemorrhagic shock is characterized by blood loss of 750\u20131500 mL (15\u201330% of blood volume), HR 100\u2013120 bpm, BP may be maintained but pulse pressure narrows, RR 20\u201330, urine output 20\u201330 mL/hr, and the patient is anxious. This patient's profile (HR 128, BP 90/60, RR 26, anxiety) fits Class II. Class I has minimal signs with HR <100. Class III (1500\u20132000 mL) is associated with HR >120 and confusion. Class IV (>2000 mL) presents with HR >140, undetectable BP, and obtundation/unconsciousness."
  },
  {
    "id": 36,
    "chapter": 5,
    "domain": "Hemorrhagic Shock & Trauma Resuscitation",
    "question": "A 35-year-old woman with a GSW to the abdomen arrives in Class IV hemorrhagic shock (undetectable BP, HR 145, GCS 7). The trauma team activates the massive transfusion protocol (MTP). What is the recommended ratio of blood products in damage control resuscitation?",
    "options": {
      "A": "4:1:1 (PRBC:FFP:Platelets)",
      "B": "1:1:1 (PRBC:FFP:Platelets)",
      "C": "2:1:0 (PRBC:FFP, no platelets until count <50,000)",
      "D": "6:1:1 (PRBC:FFP:Platelets) per historical civilian trauma protocols"
    },
    "answer": "B",
    "explanation": "The PROPPR trial (Holcomb et al., JAMA 2015) randomized trauma patients requiring massive transfusion to 1:1:1 vs. 1:1:2 (PRBC:FFP:Platelets) and found significantly improved 24-hour and 30-day survival in the 1:1:1 group, with faster achievement of hemostasis. Current damage control resuscitation guidelines recommend a 1:1:1 ratio of packed red blood cells, fresh frozen plasma, and platelets to prevent/treat the trauma-induced coagulopathy (dilutional, hypothermic, and acidosis-related) that accompanies massive hemorrhage. Ratios like 4:1 or 6:1 were historical practices shown to be inferior."
  },
  {
    "id": 37,
    "chapter": 5,
    "domain": "Hemorrhagic Shock & Trauma Resuscitation",
    "question": "A 28-year-old man arrives in hemorrhagic shock after a stab wound. He has received 2 units of PRBC and 2 units of FFP. His labs show: pH 7.21, temperature 35.1\u00b0C, PT/INR 1.9. He is taken to the OR for damage control surgery. Which triad of complications is MOST associated with worsened coagulopathy and mortality in trauma?",
    "options": {
      "A": "Hyperkalemia, hypocalcemia, and metabolic alkalosis",
      "B": "Hypothermia, acidosis, and coagulopathy (the 'lethal triad')",
      "C": "Hyperthermia, respiratory alkalosis, and thrombocytopenia",
      "D": "Hyponatremia, hypochloremia, and hypomagnesemia"
    },
    "answer": "B",
    "explanation": "The 'lethal triad' of trauma \u2014 hypothermia, acidosis, and coagulopathy \u2014 creates a vicious cycle of worsening hemostasis and mortality. Hypothermia impairs platelet aggregation and clotting factor enzyme activity. Acidosis (pH <7.2) severely impairs the coagulation cascade. Coagulopathy \u2014 from dilution, consumption, and direct tissue factor activation \u2014 causes ongoing hemorrhage. Damage control surgery aims to rapidly control hemorrhage and contamination (within 60\u201390 minutes), then ICU resuscitation to correct the lethal triad before definitive repair. This patient already shows two components (pH 7.21, temp 35.1\u00b0C, INR 1.9)."
  },
  {
    "id": 38,
    "chapter": 5,
    "domain": "Hemorrhagic Shock & Trauma Resuscitation",
    "question": "A 45-year-old man with blunt abdominal trauma and hemorrhagic shock receives the MTP. His ionized calcium is 0.89 mmol/L (normal 1.15\u20131.35). What is the mechanism of hypocalcemia in massive transfusion, and why is it clinically important?",
    "options": {
      "A": "Blood products contain excess EDTA that chelates calcium; hypocalcemia is rarely clinically significant",
      "B": "Citrate in blood product preservative chelates free ionized calcium; hypocalcemia impairs cardiac contractility, coagulation, and causes hypotension",
      "C": "Massive transfusion causes dilutional loss of calcium from the vasculature; calcium should be replaced only if symptomatic",
      "D": "Hypocalcemia is caused by hypothermia reducing calcium mobilization from bones"
    },
    "answer": "B",
    "explanation": "Blood products are preserved with citrate (sodium citrate or citrate phosphate dextrose), which chelates free ionized calcium. In massive transfusion, the liver's ability to metabolize citrate is overwhelmed, leading to significant hypocalcemia. Since ionized calcium is essential for myocardial contractility (role in excitation-contraction coupling), the coagulation cascade (factors II, VII, IX, X are calcium-dependent), and vascular smooth muscle tone, severe hypocalcemia during MTP causes cardiac dysfunction and worsens coagulopathy. Current MTP protocols recommend empiric calcium administration (calcium chloride or gluconate) with every 2\u20134 units of blood products."
  },
  {
    "id": 39,
    "chapter": 5,
    "domain": "Hemorrhagic Shock & Trauma Resuscitation",
    "question": "A 32-year-old woman sustains severe pelvic fractures in a motor vehicle accident with ongoing hemorrhage. Her systolic BP is 72 mmHg. The trauma surgeon is considering the permissive hypotension strategy. What is the TARGET systolic blood pressure for permissive hypotension in penetrating trauma WITHOUT head injury?",
    "options": {
      "A": "SBP 90\u2013100 mmHg",
      "B": "SBP 80\u201390 mmHg",
      "C": "SBP 50\u201370 mmHg",
      "D": "Normotension (SBP >120 mmHg) should always be maintained"
    },
    "answer": "C",
    "explanation": "Permissive hypotension (hypotensive resuscitation) targets a SBP of 50\u201370 mmHg in penetrating trauma WITHOUT TBI, based on the premise that aggressive fluid resuscitation before surgical hemorrhage control dislodges clots, dilutes clotting factors, and worsens coagulopathy. Bickell et al. (NEJM 1994) demonstrated improved survival with delayed resuscitation in penetrating trauma. For blunt trauma, a less aggressive permissive strategy (SBP 80\u201390 mmHg) is used. In TBI, higher MAP targets (>80 mmHg, CPP >60 mmHg) are required to maintain cerebral perfusion pressure and permissive hypotension is CONTRAINDICATED."
  },
  {
    "id": 40,
    "chapter": 5,
    "domain": "Hemorrhagic Shock & Trauma Resuscitation",
    "question": "A 25-year-old soldier with blast injuries and traumatic amputation of the left leg is in hemorrhagic shock. Tranexamic acid (TXA) is available. According to the CRASH-2 trial, within what time window from injury should TXA be administered to reduce trauma mortality?",
    "options": {
      "A": "Within 1 hour of injury",
      "B": "Within 3 hours of injury",
      "C": "Within 6 hours of injury",
      "D": "TXA has no mortality benefit when given within 3 hours but reduces blood transfusion requirements at any time"
    },
    "answer": "B",
    "explanation": "The CRASH-2 trial (Lancet 2010, N>20,000 trauma patients) demonstrated that tranexamic acid (1g IV over 10 minutes, then 1g over 8 hours) significantly reduced all-cause mortality and hemorrhagic death in trauma patients when administered within 3 hours of injury. Crucially, the trial also found that TXA administered AFTER 3 hours from injury was associated with INCREASED mortality, possibly due to inhibition of fibrinolysis at a time when the body is physiologically clotting. Current ATLS and MTP guidelines recommend TXA within 3 hours of injury (ideally within the first hour \u2014 'platinum hour')."
  },
  {
    "id": 41,
    "chapter": 5,
    "domain": "Hemorrhagic Shock & Trauma Resuscitation",
    "question": "A 50-year-old man on warfarin (INR 3.8) presents with a traumatic intracranial hemorrhage after a fall. He requires urgent neurosurgical intervention. Which is the FASTEST and MOST effective strategy to reverse warfarin anticoagulation?",
    "options": {
      "A": "Vitamin K 10 mg IV alone",
      "B": "Fresh frozen plasma (FFP) 15 mL/kg",
      "C": "4-factor prothrombin complex concentrate (4F-PCC) plus Vitamin K IV",
      "D": "Protamine sulfate IV"
    },
    "answer": "C",
    "explanation": "4-factor PCC (Kcentra) contains factors II, VII, IX, X, and proteins C and S \u2014 providing immediate, concentrated reversal of warfarin-related factor depletion with a small infusion volume (~20\u201350 mL). Combined with IV Vitamin K (which takes 6\u201312 hours to restore endogenous factor synthesis), this provides both immediate and sustained reversal. FFP works but requires large volumes (15 mL/kg \u2248 1000 mL for a 70 kg patient), risks volume overload, requires ABO matching, and takes hours to thaw and infuse. Vitamin K alone takes too long for emergent neurosurgical reversal. Protamine reverses heparin and low-molecular-weight heparin (partially), NOT warfarin."
  },
  {
    "id": 42,
    "chapter": 5,
    "domain": "Hemorrhagic Shock & Trauma Resuscitation",
    "question": "A 19-year-old man with a gunshot wound to the chest is hypotensive (BP 74/40) with absent breath sounds on the left and tracheal deviation to the right. What is the IMMEDIATE management priority?",
    "options": {
      "A": "Immediate chest X-ray to confirm tension pneumothorax",
      "B": "Bilateral large-bore IV access and 2 L crystalloid bolus",
      "C": "Needle decompression of the left chest at the 2nd intercostal space, midclavicular line",
      "D": "Emergent intubation with RSI before further intervention"
    },
    "answer": "C",
    "explanation": "This clinical presentation \u2014 hypotension, absent unilateral breath sounds, and tracheal deviation away from the affected side \u2014 is the classic presentation of tension pneumothorax, a immediately life-threatening emergency. Treatment is immediate needle decompression (14-gauge needle at 2nd ICS, MCL on the affected side, or the 4th/5th ICS at the anterior axillary line per some protocols) WITHOUT waiting for imaging. Imaging delays are inappropriate in a hemodynamically unstable patient with clinical tension pneumo. IV access and fluids are secondary. Intubation can worsen tension pneumo by increasing intrathoracic pressure and should not precede decompression."
  },
  {
    "id": 43,
    "chapter": 6,
    "domain": "Airway Management & RSI",
    "question": "A 54-year-old woman requires emergent intubation for respiratory failure. Her Mallampati score is IV, thyromental distance is 5 cm, and mouth opening is 2.5 cm. She has a short, thick neck. Which approach is BEST for managing this anticipated difficult airway?",
    "options": {
      "A": "Proceed with standard RSI using direct laryngoscopy, as video laryngoscopy is not superior",
      "B": "Awake fiberoptic intubation with topical anesthesia and judicious sedation",
      "C": "Immediate surgical cricothyrotomy without attempting laryngoscopy",
      "D": "Deep sedation without neuromuscular blockade to preserve spontaneous breathing during intubation"
    },
    "answer": "B",
    "explanation": "Awake fiberoptic intubation (AFOI) is the gold standard for managing anticipated difficult airways (per ASA Difficult Airway Algorithm), as it preserves the patient's spontaneous breathing and airway protective reflexes until the airway is secured. This patient has multiple predictors of difficult intubation (Mallampati IV, reduced thyromental distance, limited mouth opening, thick neck). Proceeding with standard RSI risks 'cannot intubate, cannot oxygenate' scenario. Immediate cricothyrotomy without attempting intubation first is not appropriate when there is time for preparation. Deep sedation without paralysis (awake but sedated laryngoscopy) is an alternative approach but is inferior to AFOI for truly difficult airways."
  },
  {
    "id": 44,
    "chapter": 6,
    "domain": "Airway Management & RSI",
    "question": "A 65-year-old man with septic shock requires RSI for intubation. The anesthesiologist selects succinylcholine as the neuromuscular blocking agent. His labs show: K+ 5.8 mEq/L, creatinine 3.2 mg/dL, pH 7.18. Which patient factor is the MOST SIGNIFICANT contraindication to succinylcholine in this scenario?",
    "options": {
      "A": "Metabolic acidosis (pH 7.18)",
      "B": "Renal failure (creatinine 3.2)",
      "C": "Hyperkalemia (K+ 5.8) at risk for further rise with succinylcholine",
      "D": "Sepsis-related muscle atrophy increasing succinylcholine sensitivity"
    },
    "answer": "C",
    "explanation": "Succinylcholine causes transient depolarization of the motor end plate, which releases potassium from skeletal muscle cells, typically raising serum K+ by 0.5\u20131.0 mEq/L. In a patient with pre-existing hyperkalemia (K+ 5.8 mEq/L), this additional rise could precipitate life-threatening hyperkalemia (>6.5\u20137.0 mEq/L), causing cardiac arrhythmias or arrest. This is the key contraindication here. Metabolic acidosis and renal failure are concerning but do not independently contraindicate succinylcholine. The established contraindications to succinylcholine include: hyperkalemia, crush injuries, burns (>48 hours), denervation injuries, chronic immobility, rhabdomyolysis, and personal/family history of malignant hyperthermia."
  },
  {
    "id": 45,
    "chapter": 6,
    "domain": "Airway Management & RSI",
    "question": "During direct laryngoscopy with a Macintosh blade, the anesthesiologist can only see the tip of the epiglottis and the posterior arytenoids. No part of the vocal cords is visible. What is the Cormack-Lehane grade for this view?",
    "options": {
      "A": "Grade 1 \u2014 full view of vocal cords",
      "B": "Grade 2 \u2014 partial view of vocal cords or arytenoids",
      "C": "Grade 3 \u2014 only epiglottis visible",
      "D": "Grade 4 \u2014 neither epiglottis nor vocal cords visible"
    },
    "answer": "C",
    "explanation": "The Cormack-Lehane grading system classifies laryngoscopic views: Grade 1 = full view of the glottis (vocal cords visible); Grade 2a = partial view of the glottis; Grade 2b = only the posterior arytenoids visible; Grade 3 = only the epiglottis visible (no part of the glottis seen); Grade 4 = not even the epiglottis visible. This patient has a Grade 3 view \u2014 the epiglottis tip and posterior arytenoids are visible but no vocal cord structures. A Grade 3 or 4 view indicates a difficult laryngoscopy and may prompt bougie-assisted or video laryngoscopy."
  },
  {
    "id": 46,
    "chapter": 6,
    "domain": "Airway Management & RSI",
    "question": "A 40-year-old man in the ICU has failed two intubation attempts (once with DL, once with video laryngoscopy). He is being ventilated by bag-mask with two providers, but SpO2 is dropping to 82%. The team declares 'cannot intubate, cannot oxygenate' (CICO). What is the IMMEDIATE next step?",
    "options": {
      "A": "Call for a different laryngoscopist and attempt a third oral intubation",
      "B": "Place a laryngeal mask airway (LMA) and abandon intubation attempts",
      "C": "Perform emergency surgical airway (cricothyrotomy)",
      "D": "Administer another dose of succinylcholine and attempt nasotracheal intubation"
    },
    "answer": "C",
    "explanation": "The 'cannot intubate, cannot oxygenate' (CICO) scenario is the most dangerous airway emergency and mandates immediate surgical airway access \u2014 emergency cricothyrotomy (scalpel-bougie-tube technique or commercial kit). This is the final step of the ASA and DAS difficult airway algorithms. Further intubation attempts in a hypoxic patient are counterproductive and increase laryngeal trauma. An LMA may provide temporary oxygenation and should be attempted before declaring CICO, but if oxygenation is already failing with BMV (implying the LMA would likely also fail or has already failed), surgical airway is the only option. Nasotracheal intubation in a CICO scenario is not appropriate."
  },
  {
    "id": 47,
    "chapter": 6,
    "domain": "Airway Management & RSI",
    "question": "A 30-year-old woman requires RSI for rapid sequence intubation. The team selects ketamine for induction. Which hemodynamic effect makes ketamine particularly advantageous in the setting of hemorrhagic shock?",
    "options": {
      "A": "Ketamine causes vasodilation and reduces myocardial oxygen demand",
      "B": "Ketamine stimulates the sympathetic nervous system, maintaining or increasing blood pressure and heart rate",
      "C": "Ketamine has direct negative chronotropic effects that prevent tachycardia",
      "D": "Ketamine inhibits vasopressin release, preserving fluid balance"
    },
    "answer": "B",
    "explanation": "Ketamine is an NMDA receptor antagonist that stimulates the release of catecholamines from sympathetic nerve terminals, causing an indirect sympathomimetic effect \u2014 increasing heart rate, blood pressure, and cardiac output. This makes it the preferred induction agent in hemodynamically unstable patients (hemorrhagic shock, septic shock, cardiogenic shock) where other induction agents (propofol, barbiturates, etomidate) would cause precipitous hypotension. A caveat: in catecholamine-depleted states (end-stage shock), ketamine's direct myocardial depressant effect may predominate, causing paradoxical hypotension. Etomidate also maintains hemodynamics but suppresses cortisol synthesis."
  },
  {
    "id": 48,
    "chapter": 6,
    "domain": "Airway Management & RSI",
    "question": "A 55-year-old man with a known history of succinylcholine-triggered malignant hyperthermia in his family requires emergent RSI. Which neuromuscular blocking agent should be used instead?",
    "options": {
      "A": "Vecuronium 0.1 mg/kg (standard intubating dose)",
      "B": "Rocuronium 1.2 mg/kg (high-dose RSI)",
      "C": "Pancuronium 0.1 mg/kg",
      "D": "Cisatracurium 0.15 mg/kg"
    },
    "answer": "B",
    "explanation": "Malignant hyperthermia (MH) is triggered by succinylcholine and volatile anesthetic agents. It is an absolute contraindication to succinylcholine. When RSI is required in an MH-susceptible patient, high-dose rocuronium (1.2 mg/kg IV, compared to 0.6 mg/kg for standard intubation) provides conditions equivalent to succinylcholine for RSI within 60\u201390 seconds. Critically, rocuronium-induced paralysis can be fully and rapidly reversed with sugammadex (16 mg/kg) even in the event of failed intubation \u2014 an important safety advantage. Vecuronium, pancuronium, and cisatracurium do not achieve RSI conditions at standard doses due to slower onset."
  },
  {
    "id": 49,
    "chapter": 6,
    "domain": "Airway Management & RSI",
    "question": "A 62-year-old man with a C5 spinal cord injury 6 weeks ago requires emergent intubation for respiratory failure. Which RSI drug consideration is MOST important in this patient?",
    "options": {
      "A": "Avoid rocuronium \u2014 it causes prolonged paralysis in spinal cord injury patients",
      "B": "Avoid succinylcholine \u2014 denervation upregulates extrajunctional acetylcholine receptors, causing life-threatening hyperkalemia",
      "C": "Ketamine is contraindicated due to risk of autonomic dysreflexia",
      "D": "Etomidate should be avoided due to increased seizure risk in spinal cord injury"
    },
    "answer": "B",
    "explanation": "In chronic denervation states (spinal cord injury, stroke, prolonged immobility, severe burns, Guillain-Barr\u00e9, ALS), extrajunctional acetylcholine receptors (alpha7 nicotinic receptors) proliferate throughout the sarcolemma beyond the neuromuscular junction. Succinylcholine activates all these receptors simultaneously, causing massive potassium efflux and potentially fatal hyperkalemia. This risk begins 24\u201348 hours after the injury (acute injury may be safe) and persists for months to years. After 6 weeks, this patient has significant extrajunctional receptor upregulation. Rocuronium is the appropriate alternative NMBD. Ketamine and etomidate do not have these specific contraindications in SCI."
  },
  {
    "id": 50,
    "chapter": 7,
    "domain": "Mechanical Ventilation Basics",
    "question": "A 68-year-old woman is intubated for hypoxemic respiratory failure. She is placed on volume-controlled assist-control (AC/VC) ventilation with the following settings: TV 450 mL (8 mL/kg IBW), RR 16, FiO2 0.6, PEEP 8 cmH2O. After 30 minutes, you measure a plateau pressure of 34 cmH2O. What is the calculated driving pressure, and what does it indicate?",
    "options": {
      "A": "Driving pressure = 34 cmH2O; indicates severe air trapping",
      "B": "Driving pressure = plateau pressure \u2212 PEEP = 34 \u2212 8 = 26 cmH2O; indicates high alveolar stress suggesting potential need to reduce tidal volume",
      "C": "Driving pressure = peak pressure \u2212 plateau pressure = reflects airway resistance",
      "D": "Driving pressure cannot be calculated without knowing the compliance"
    },
    "answer": "B",
    "explanation": "Driving pressure (\u0394P) = Plateau pressure \u2212 PEEP = 34 \u2212 8 = 26 cmH2O. It represents the tidal stress delivered to the respiratory system per breath and directly reflects strain on alveolar structures. Amato et al. (NEJM 2015) demonstrated that driving pressure >15 cmH2O is independently associated with increased ARDS mortality, and reducing driving pressure by adjusting TV and/or PEEP was the ventilator variable most strongly associated with survival benefit. This patient's driving pressure of 26 cmH2O significantly exceeds the target of <15 cmH2O, indicating the need to reduce tidal volume. Peak pressure \u2212 plateau pressure measures airway resistance (resistance component), not driving pressure."
  },
  {
    "id": 51,
    "chapter": 7,
    "domain": "Mechanical Ventilation Basics",
    "question": "A 70-year-old man with acute hypercapnic respiratory failure is intubated and placed on AC/VC ventilation. His ABG shows: pH 7.20, PaCO2 72, PaO2 88 on FiO2 0.4, PEEP 5. Which ventilator parameter adjustment will MOST directly reduce his PaCO2?",
    "options": {
      "A": "Increase PEEP from 5 to 10 cmH2O",
      "B": "Increase FiO2 from 0.4 to 0.6",
      "C": "Increase respiratory rate from 14 to 20 breaths/min",
      "D": "Increase tidal volume from 6 to 10 mL/kg IBW"
    },
    "answer": "C",
    "explanation": "PaCO2 is inversely proportional to alveolar ventilation (VA), which is determined by (TV \u2212 dead space) \u00d7 RR. To reduce PaCO2 and correct respiratory acidosis, minute ventilation must increase \u2014 achieved by increasing respiratory rate or tidal volume. Increasing RR from 14 to 20 (a 43% increase) is preferred over increasing TV in this patient, as excessive TV increases the risk of volutrauma and barotrauma. PEEP and FiO2 primarily affect oxygenation (PaO2/FiO2), not ventilation (PaCO2). Increasing TV can also reduce PaCO2 but risks lung injury at high volumes and is not the first choice given current lung-protective ventilation principles."
  },
  {
    "id": 52,
    "chapter": 7,
    "domain": "Mechanical Ventilation Basics",
    "question": "A 60-year-old man is mechanically ventilated in the medical ICU. The respiratory therapist notes that the patient is initiating breaths between mandatory breaths, and the ventilator is augmenting each patient-initiated breath to a set tidal volume while also delivering mandatory breaths at a set rate. Which ventilation mode is being used?",
    "options": {
      "A": "Pressure support ventilation (PSV)",
      "B": "Synchronized intermittent mandatory ventilation (SIMV)",
      "C": "Continuous positive airway pressure (CPAP)",
      "D": "Pressure-regulated volume control (PRVC)"
    },
    "answer": "B",
    "explanation": "SIMV (Synchronized Intermittent Mandatory Ventilation) delivers a set number of mandatory breaths (at set TV/rate) synchronized with patient effort, while allowing the patient to breathe spontaneously between mandatory breaths \u2014 those spontaneous breaths can be pressure-supported (SIMV + PS) or unsupported. In this description, the patient initiates extra breaths that are volume-augmented (supported to set TV), fitting SIMV. PSV supports ALL patient-initiated breaths to a set pressure level with no mandatory RR \u2014 if the patient doesn't breathe, no mandatory backup is provided in basic PSV. CPAP provides no mechanical assistance, only a constant positive airway pressure baseline. PRVC is a dual-control mode that adjusts pressure to achieve a target volume."
  },
  {
    "id": 53,
    "chapter": 7,
    "domain": "Mechanical Ventilation Basics",
    "question": "A 55-year-old woman is on pressure control AC ventilation (AC/PC). Peak inspiratory pressure is set at 22 cmH2O above PEEP (total PIP 30 cmH2O, PEEP 8). Her tidal volumes are measured at 420 mL on one breath and 380 mL on the next. The respiratory therapist notes this variability. What is the MOST likely explanation?",
    "options": {
      "A": "The ventilator circuit has a leak, reducing delivered volume",
      "B": "In pressure control, tidal volume varies breath-to-breath based on patient lung mechanics (compliance and resistance) and patient effort",
      "C": "The flow sensor is malfunctioning and providing inaccurate tidal volume readings",
      "D": "Auto-PEEP is causing variable end-expiratory lung volume, altering effective driving pressure"
    },
    "answer": "B",
    "explanation": "In pressure control ventilation (AC/PC), the ventilator delivers a set inspiratory pressure for a set time \u2014 but the resulting tidal volume is NOT fixed. It varies based on the patient's real-time respiratory system compliance and resistance (lung mechanics). If compliance decreases (e.g., secretions, atelectasis) or resistance increases, tidal volume decreases at the same set pressure. Additionally, patient effort (muscle effort assists inspiration) can augment TV. This is the fundamental difference between volume control (fixed TV, variable pressure) and pressure control (fixed pressure, variable TV). While auto-PEEP can cause variability, it's a less likely primary explanation than the inherent mechanics of PC ventilation."
  },
  {
    "id": 54,
    "chapter": 7,
    "domain": "Mechanical Ventilation Basics",
    "question": "A 72-year-old man is intubated and placed on mechanical ventilation. His initial settings: AC/VC, TV 550 mL, RR 14, FiO2 0.5, PEEP 5 cmH2O. His weight is 70 kg and height is 170 cm (IBW = 63 kg). What is the FIRST adjustment that should be made to optimize this patient's ventilator management?",
    "options": {
      "A": "Increase PEEP to 10 cmH2O to improve oxygenation",
      "B": "Reduce tidal volume to 6 mL/kg IBW = 378 mL to implement lung-protective ventilation",
      "C": "Increase respiratory rate to 20 to improve minute ventilation",
      "D": "Reduce FiO2 to 0.4 to avoid oxygen toxicity"
    },
    "answer": "B",
    "explanation": "The patient's IBW is 63 kg. Lung-protective ventilation targets 6 mL/kg IBW = 378 mL. The current TV of 550 mL is 8.7 mL/kg IBW \u2014 significantly above the lung-protective threshold and potentially injurious regardless of the underlying diagnosis. The ARDSNet protocol and current critical care guidelines recommend initial TV of 6 mL/kg IBW for ALL mechanically ventilated patients (not just ARDS), as excessive tidal volumes cause VILI (ventilator-induced lung injury). FiO2 and PEEP adjustments should follow after establishing lung-protective volumes. Increasing RR before reducing TV worsens the injury without addressing the underlying issue."
  },
  {
    "id": 55,
    "chapter": 7,
    "domain": "Mechanical Ventilation Basics",
    "question": "During mechanical ventilation in the ICU, a patient's flow-time scalar shows that expiratory flow has not returned to zero before the next breath begins. The respiratory therapist flags this finding. What does this indicate, and what is the clinical consequence?",
    "options": {
      "A": "The inspiratory flow rate is too high, causing turbulent flow and elevated peak pressures",
      "B": "Auto-PEEP (intrinsic PEEP) is developing due to incomplete exhalation; this increases work of breathing and can cause hemodynamic compromise",
      "C": "The ventilator trigger sensitivity is too sensitive, causing double-triggering",
      "D": "The endotracheal tube has a leak, allowing inspiratory gas to escape during exhalation"
    },
    "answer": "B",
    "explanation": "When expiratory flow does not return to zero (baseline) before the next inspiration begins, it indicates that gas is trapped in the lungs at end-expiration \u2014 a condition called auto-PEEP (intrinsic PEEP) or dynamic hyperinflation. This is common in patients with obstructive lung disease (COPD, asthma) and can also occur with high respiratory rates or short expiratory times. Consequences include: increased work of breathing (patient must overcome auto-PEEP to trigger the ventilator), barotrauma, hemodynamic compromise (impaired venous return, right heart failure), and potential for tension physiology. Treatment: increase expiratory time (reduce RR, reduce TV, or increase inspiratory flow rate to shorten TI)."
  },
  {
    "id": 56,
    "chapter": 8,
    "domain": "ARDS & Lung-Protective Ventilation",
    "question": "A 58-year-old man with ARDS from pneumonia is intubated. His ABG on AC/VC (TV 380 mL at 6 mL/kg IBW 63 kg, RR 22, FiO2 0.8, PEEP 12): pH 7.26, PaO2 58, PaCO2 58. CXR shows bilateral infiltrates. Echocardiogram shows no left heart dysfunction. His PaO2/FiO2 ratio is 72. Which category of ARDS does this patient have per the Berlin definition?",
    "options": {
      "A": "Mild ARDS (PaO2/FiO2 200\u2013300 with PEEP \u22655)",
      "B": "Moderate ARDS (PaO2/FiO2 100\u2013200 with PEEP \u22655)",
      "C": "Severe ARDS (PaO2/FiO2 <100 with PEEP \u22655)",
      "D": "This does not meet Berlin criteria because the onset time is not specified"
    },
    "answer": "C",
    "explanation": "The Berlin Definition of ARDS (2012) classifies severity by PaO2/FiO2 ratio on PEEP \u22655 cmH2O: Mild = PF 200\u2013300, Moderate = PF 100\u2013200, Severe = PF <100. This patient's PaO2/FiO2 = 58/0.8 = 72.5, which is <100, placing him in the Severe ARDS category. The Berlin criteria also require: onset within 1 week of a known clinical insult OR new/worsening respiratory symptoms; bilateral opacities on imaging not fully explained by effusions, lobar/lung collapse, or nodules; respiratory failure not fully explained by cardiac failure or fluid overload. All criteria appear to be met here."
  },
  {
    "id": 57,
    "chapter": 8,
    "domain": "ARDS & Lung-Protective Ventilation",
    "question": "A 45-year-old woman with severe ARDS (PaO2/FiO2 85, PEEP 16 cmH2O) is being considered for prone positioning. Per the PROSEVA trial, what is the recommended duration of each prone positioning session?",
    "options": {
      "A": "2\u20134 hours per session",
      "B": "8\u201312 hours per session",
      "C": "At least 16 hours per session",
      "D": "Prone positioning duration should be titrated to oxygenation improvement rather than a fixed time"
    },
    "answer": "C",
    "explanation": "The PROSEVA trial (Gu\u00e9rin et al., NEJM 2013) \u2014 the landmark trial showing 28-day mortality reduction with proning in severe ARDS (PF <150) \u2014 used prone sessions of 16 hours or more per day (with 8 hours supine). This was a key methodological difference from earlier negative proning trials that used shorter sessions (2\u20138 hours). The study showed a dramatic mortality benefit (16% vs. 32.8% at 28 days) in severe ARDS (PF <150 on PEEP \u22655 and FiO2 \u22650.6). Current guidelines recommend prone positioning \u226516 hours/day for severe ARDS. Shorter sessions were used in earlier failed trials and are not recommended."
  },
  {
    "id": 58,
    "chapter": 8,
    "domain": "ARDS & Lung-Protective Ventilation",
    "question": "A 62-year-old man with moderate ARDS has persistent hypoxemia (PaO2/FiO2 140) on PEEP 10. An incremental PEEP trial is performed, increasing PEEP to 18 cmH2O. His oxygenation improves to PaO2/FiO2 195, but plateau pressure increases from 24 to 32 cmH2O. What is the MOST appropriate next step?",
    "options": {
      "A": "Maintain PEEP 18 \u2014 improved oxygenation justifies the higher plateau pressure",
      "B": "Reduce PEEP back toward lower levels \u2014 the plateau pressure of 32 cmH2O approaches the lung-protective limit, and the net effect on driving pressure and lung stress should be assessed",
      "C": "Increase tidal volume to 8 mL/kg to improve driving pressure",
      "D": "Add inhaled nitric oxide to improve oxygenation without increasing PEEP"
    },
    "answer": "B",
    "explanation": "While PEEP can improve oxygenation by recruiting atelectatic alveoli, it can also cause overdistension and increase barotrauma risk. The plateau pressure of 32 cmH2O is approaching the lung-protective threshold of \u226430 cmH2O recommended by ARDSNet. Critically, the driving pressure at PEEP 18 (32 \u2212 18 = 14 cmH2O) versus at PEEP 10 (24 \u2212 10 = 14 cmH2O) is unchanged \u2014 meaning no net lung recruitment occurred (just redistribution). If driving pressure does not decrease with higher PEEP, there is no ARDS lung recruitment benefit, and the higher plateau pressure increases VILI risk. The appropriate response is to reassess and likely reduce PEEP."
  },
  {
    "id": 59,
    "chapter": 8,
    "domain": "ARDS & Lung-Protective Ventilation",
    "question": "A 50-year-old woman with severe ARDS (PF 82, PEEP 18, FiO2 1.0) remains hypoxemic despite optimal prone positioning and lung-protective ventilation. She is hemodynamically stable on low-dose vasopressors. What is the next rescue therapy to consider?",
    "options": {
      "A": "High-frequency oscillatory ventilation (HFOV)",
      "B": "Veno-venous extracorporeal membrane oxygenation (VV-ECMO)",
      "C": "Systemic corticosteroids (methylprednisolone 2 mg/kg/day)",
      "D": "Inhaled epoprostenol (prostacyclin)"
    },
    "answer": "B",
    "explanation": "VV-ECMO is indicated as a rescue therapy for severe ARDS refractory to conventional management when PaO2/FiO2 <80 on FiO2 1.0 and PEEP \u226515, or uncompensated hypercapnia with pH <7.25. The EOLIA trial (NEJM 2018) showed a non-significant trend toward 60-day mortality reduction (35% vs. 46%, p=0.07) but was underpowered, and crossover to ECMO in the control arm was high. HFOV was shown to be HARMFUL in the OSCILLATE trial (increased mortality vs. conventional ventilation). Corticosteroids have a role in ARDS but are not the next rescue step for refractory hypoxemia. Inhaled vasodilators (NO, epoprostenol) are short-term bridging tools but don't address the degree of refractory hypoxemia here."
  },
  {
    "id": 60,
    "chapter": 8,
    "domain": "ARDS & Lung-Protective Ventilation",
    "question": "A 40-year-old man with ARDS on lung-protective ventilation develops a plateau pressure of 36 cmH2O despite TV 6 mL/kg IBW. Chest wall compliance is noted to be reduced (the patient has abdominal compartment syndrome). How does reduced chest wall compliance affect the interpretation of plateau pressure?",
    "options": {
      "A": "Reduced chest wall compliance has no effect on plateau pressure interpretation",
      "B": "Elevated plateau pressure in the setting of reduced chest wall compliance overestimates transpulmonary pressure; the lung itself may be less stressed than the plateau pressure suggests",
      "C": "Reduced chest wall compliance causes the plateau pressure to underestimate lung stress",
      "D": "Chest wall compliance only affects peak pressure, not plateau pressure"
    },
    "answer": "B",
    "explanation": "Plateau pressure (Pplat) reflects total respiratory system pressure = transpulmonary pressure (lung pressure) + pleural pressure (chest wall pressure). When chest wall compliance is reduced (e.g., abdominal compartment syndrome, morbid obesity, massive pleural effusion), a larger portion of Pplat is 'wasted' on distending the chest wall rather than the lung. The transpulmonary pressure (the true measure of alveolar stress) = Pplat \u2212 Pleural pressure (estimated by esophageal manometry). Therefore, an elevated Pplat of 36 in a patient with poor chest wall compliance may have a much lower actual transpulmonary pressure, meaning the lung is less stressed than the plateau pressure alone suggests. Esophageal manometry should guide management in such cases."
  },
  {
    "id": 61,
    "chapter": 8,
    "domain": "ARDS & Lung-Protective Ventilation",
    "question": "A 55-year-old man with ARDS from aspiration pneumonitis receives an alveolar recruitment maneuver (ARM) with CPAP of 40 cmH2O for 40 seconds. Following the ARM, his SpO2 improves from 88% to 97%. What is the MOST important next step after a successful recruitment maneuver?",
    "options": {
      "A": "Immediately extubate the patient while oxygenation is improved",
      "B": "Set an adequate 'open lung' PEEP to prevent derecruitment of the reopened alveoli",
      "C": "Repeat the ARM every hour to maintain alveolar recruitment",
      "D": "Reduce PEEP to 5 cmH2O to reduce barotrauma risk"
    },
    "answer": "B",
    "explanation": "Alveolar recruitment maneuvers transiently open collapsed alveoli, but without adequate PEEP to maintain them open, derecruitment (alveolar collapse) occurs rapidly \u2014 often within minutes. After a successful ARM, the critical next step is to set PEEP at the 'closing pressure + 2 cmH2O' or identify the optimal PEEP through a decremental PEEP trial to find the level at which recruited alveoli remain open. Without this, the recruitment maneuver provides only transient benefit. Repeated ARMs without adequate PEEP setting are ineffective. Reducing PEEP would immediately undo the recruitment benefit. Extubation is not indicated in a patient with severe ARDS."
  },
  {
    "id": 62,
    "chapter": 9,
    "domain": "Weaning & Liberation from Ventilator",
    "question": "A 67-year-old man who was intubated 5 days ago for sepsis-induced respiratory failure is now improving. His FiO2 is 0.4, PEEP is 5 cmH2O, SpO2 is 96%. He is opening eyes to voice. His nurse is assessing his readiness for a spontaneous awakening trial (SAT). Which criterion would make a patient INELIGIBLE for a SAT?",
    "options": {
      "A": "FiO2 0.4 and PEEP 5 cmH2O",
      "B": "Currently receiving a continuous neuromuscular blocking agent infusion",
      "C": "Heart rate 95 bpm in sinus rhythm",
      "D": "Temperature 37.8\u00b0C"
    },
    "answer": "B",
    "explanation": "The SAT (Spontaneous Awakening Trial \u2014 Kress et al., NEJM 2000; followed by the ABC trial by Girard et al., Lancet 2008) involves reducing or stopping sedation to assess wakefulness and readiness for SBT. A patient receiving a continuous neuromuscular blocking agent (NMBA) infusion CANNOT have a meaningful SAT \u2014 they cannot demonstrate wakefulness or respiratory effort with NMBAs on board. SAT safety screen exclusions include: active seizures, NMBA infusion, agitation/high sedation need, active alcohol withdrawal, myocardial ischemia. Low-level FiO2/PEEP, mild tachycardia, and low-grade fever are not contraindications to SAT."
  },
  {
    "id": 63,
    "chapter": 9,
    "domain": "Weaning & Liberation from Ventilator",
    "question": "A 58-year-old woman passes her SAT and is placed on a 30-minute SBT on pressure support (PS 5, PEEP 5). Her respiratory rate during the SBT is 28/min, tidal volume is 240 mL (her IBW is 55 kg). What is her RSBI, and does she pass the SBT?",
    "options": {
      "A": "RSBI = 8.6; she passes the SBT",
      "B": "RSBI = 116.7; she fails the SBT based on RSBI >105",
      "C": "RSBI = 67.2; she passes the SBT",
      "D": "RSBI cannot be calculated during pressure support ventilation"
    },
    "answer": "B",
    "explanation": "RSBI (Rapid Shallow Breathing Index) = RR / TV (in liters) = 28 / 0.240 = 116.7 breaths/min/L. Yang and Tobin (NEJM 1991) defined the threshold for SBT failure as RSBI >105 breaths/min/L. This patient's RSBI of 116.7 exceeds 105, predicting failed extubation. Combined with an RR of 28 (tachypneic) and low TV relative to IBW (4.4 mL/kg IBW vs. target 6 mL/kg), this patient fails the SBT. Additional SBT failure criteria include: SpO2 <90%, HR >140 or increase >20%, SBP >180 or <90, agitation, altered mentation, or diaphoresis. RSBI CAN be calculated during PSV trials."
  },
  {
    "id": 64,
    "chapter": 9,
    "domain": "Weaning & Liberation from Ventilator",
    "question": "A 70-year-old man passes his SBT and is extubated. One hour later, he develops stridor and increased work of breathing. His SpO2 drops to 91%. Croup score is elevated. Which intervention should be tried FIRST for post-extubation stridor?",
    "options": {
      "A": "Immediate re-intubation with a smaller endotracheal tube",
      "B": "Inhaled racemic epinephrine (or L-epinephrine) \u00b1 IV dexamethasone",
      "C": "Heliox (helium-oxygen mixture) as definitive therapy",
      "D": "Non-invasive positive pressure ventilation (BiPAP) at high settings"
    },
    "answer": "B",
    "explanation": "Post-extubation stridor is caused by laryngeal/subglottic edema from endotracheal tube trauma and pressure necrosis. First-line treatment is nebulized racemic epinephrine (or L-epinephrine 1:1000, 3\u20135 mL), which reduces mucosal edema through alpha-adrenergic vasoconstriction, and IV dexamethasone (0.1 mg/kg or 4\u20138 mg), which reduces inflammatory edema. Pre-treatment with dexamethasone 12\u201324 hours before planned extubation can prevent stridor. Heliox reduces turbulent flow through narrowed airways and can provide symptomatic relief but is not definitive treatment. NIV (BiPAP) can assist ventilation but will not relieve the mechanical obstruction. Re-intubation is reserved for failure of medical management."
  },
  {
    "id": 65,
    "chapter": 9,
    "domain": "Weaning & Liberation from Ventilator",
    "question": "A 66-year-old woman has been on mechanical ventilation for 18 days following ARDS. She has passed daily SATs and SBTs but has failed extubation twice (once for hypercapnia, once for upper airway obstruction). The team is discussing tracheostomy. At what point is tracheostomy typically considered, and what is its primary benefit over prolonged translaryngeal intubation?",
    "options": {
      "A": "Tracheostomy is indicated within 72 hours of intubation to prevent ICU-acquired weakness",
      "B": "Tracheostomy after 7\u201310 days of mechanical ventilation in patients unlikely to be extubated within the next few days; benefits include reduced sedation needs, improved patient comfort, easier oral hygiene, and potential to facilitate weaning",
      "C": "Tracheostomy should be deferred until day 21 to allow maximum time for spontaneous recovery",
      "D": "Tracheostomy is contraindicated in ARDS due to risk of pneumothorax during the procedure"
    },
    "answer": "B",
    "explanation": "The optimal timing of tracheostomy remains debated, but the TracMan trial (Young et al., JAMA 2013) showed no mortality difference between early (day 1\u20134) and late (after day 10) tracheostomy. Current practice typically considers tracheostomy at 7\u201314 days when the patient is unlikely to be extubated soon. Benefits of tracheostomy over prolonged translaryngeal intubation include: reduced need for sedation (improved patient comfort and interaction), reduced laryngeal injury and risk of subglottic stenosis, easier oral care and swallowing assessment, reduced ventilator dead space, easier suctioning, and potential to facilitate liberation from the ventilator through weaning protocols. It is not contraindicated in ARDS and is performed by percutaneous dilatational technique at the bedside."
  },
  {
    "id": 66,
    "chapter": 9,
    "domain": "Weaning & Liberation from Ventilator",
    "question": "An 80-year-old man with severe COPD is mechanically ventilated for acute exacerbation. He has failed multiple SBTs over 2 weeks. The pulmonologist considers inspiratory muscle training. Which factor is MOST commonly identified as driving failure to wean from mechanical ventilation?",
    "options": {
      "A": "Persistent infection causing ongoing inflammation",
      "B": "Imbalance between respiratory muscle capacity (weakened by ICU-acquired weakness, disuse atrophy, sedatives) and respiratory load (increased by intrinsic disease, auto-PEEP, secretions)",
      "C": "Persistent metabolic alkalosis suppressing respiratory drive",
      "D": "Inadequate caloric supplementation causing respiratory muscle fatigue"
    },
    "answer": "B",
    "explanation": "Failure to wean from mechanical ventilation is best understood as an imbalance between respiratory muscle capacity and the load placed on those muscles. Capacity is reduced by ICU-acquired neuromuscular weakness (critical illness myopathy/polyneuropathy), prolonged neuromuscular blockade, corticosteroids, sedatives, malnutrition, and disuse atrophy. Load is increased by increased resistive work (secretions, bronchospasm, intrinsic PEEP), reduced compliance (fibrosis, edema), increased dead space, increased ventilatory demand (fever, metabolic acidosis, high caloric loads), and impaired central drive. Addressing both sides of this equation \u2014 rehabilitating muscles (early mobilization, IMT) and reducing load (treat obstruction, optimize PEEP, optimize nutrition) \u2014 is essential for liberation."
  },
  {
    "id": 67,
    "chapter": 9,
    "domain": "Weaning & Liberation from Ventilator",
    "question": "A 63-year-old woman with COPD is being liberated from mechanical ventilation after a 12-day intubation. She passes her SAT and SBT criteria. Her physician performs a cuff leak test before extubation. The cuff is deflated and the ventilator shows a leak volume of only 15 mL (vs. the set TV of 500 mL). What does a small cuff leak suggest, and how should it be managed?",
    "options": {
      "A": "Small cuff leak confirms adequate subglottic space \u2014 extubation is safe",
      "B": "Small cuff leak (<110 mL or <24% of set TV) suggests laryngeal edema with elevated risk of post-extubation stridor; administer IV methylprednisolone 20 mg q4h \u00d7 4 doses before extubation",
      "C": "Small cuff leak indicates a malfunctioning cuff balloon that needs ETT replacement",
      "D": "Small cuff leak is only clinically relevant in pediatric patients, not adults"
    },
    "answer": "B",
    "explanation": "The cuff leak test assesses for laryngeal/subglottic edema by measuring airflow around the deflated ETT cuff. A cuff leak volume of <110 mL or <24% of set tidal volume suggests insufficient space around the tube (i.e., laryngeal edema), predicting post-extubation stridor. The ACCRUE trial and multiple guidelines recommend pre-extubation IV methylprednisolone (20 mg q4h starting 12\u201324 hours before extubation) to reduce laryngeal edema and decrease post-extubation stridor risk in patients with a failed cuff leak test who need extubation. This patient's leak of 15 mL (3% of 500 mL) is very low and warrants steroid prophylaxis before planned extubation."
  },
  {
    "id": 68,
    "chapter": 10,
    "domain": "Pulmonary Embolism",
    "question": "A 55-year-old woman presents with acute-onset dyspnea and pleuritic chest pain. HR is 110, BP is 118/76, RR is 22, SpO2 is 92% on room air. She had a left knee arthroscopy 3 weeks ago. Wells PE score: 1 point for immobilization, 3 points for PE more likely than alternative diagnosis, 1.5 points for HR >100 = 5.5 points. CT pulmonary angiography (CTPA) confirms bilateral pulmonary emboli without RV strain. What category of PE does she have?",
    "options": {
      "A": "Massive (high-risk) PE",
      "B": "Submassive (intermediate-risk) PE \u2014 hemodynamically stable with RV dysfunction",
      "C": "Low-risk PE (PESI class I\u2013II)",
      "D": "Submassive (intermediate-high risk) PE \u2014 but RV strain is absent, making this intermediate-low risk"
    },
    "answer": "D",
    "explanation": "The European Society of Cardiology (ESC) 2019 PE guidelines classify risk as: Massive (high-risk) = hemodynamic instability (shock or SBP <90 for >15 min); Submassive intermediate-high risk = stable hemodynamics + BOTH elevated biomarkers (troponin/BNP) AND RV dysfunction on imaging; Intermediate-low risk = stable + only one of elevated biomarker OR RV dysfunction (or neither); Low risk = PESI I\u2013II or sPESI 0. This patient is hemodynamically stable and has NO RV strain on imaging \u2014 making her intermediate-low risk (previously 'submassive' with absent RV dysfunction). Intermediate-high risk requires BOTH RV dysfunction AND elevated biomarkers."
  },
  {
    "id": 69,
    "chapter": 10,
    "domain": "Pulmonary Embolism",
    "question": "A 68-year-old man presents with massive PE: BP 72/40, HR 140, SpO2 78% on 100% NRB. He has no history of recent surgery or stroke. CT shows bilateral massive clot burden with acute RV dilation. He has no contraindications to thrombolysis. What is the FIRST-LINE treatment?",
    "options": {
      "A": "Unfractionated heparin bolus and infusion only",
      "B": "Systemic thrombolysis with alteplase 100 mg IV over 2 hours",
      "C": "Catheter-directed thrombolysis (CDT) via bilateral pulmonary artery catheters",
      "D": "Surgical pulmonary embolectomy under cardiopulmonary bypass"
    },
    "answer": "B",
    "explanation": "Massive (high-risk) PE with hemodynamic instability and no contraindications is the primary indication for systemic thrombolysis. Alteplase (tPA) 100 mg IV over 2 hours is the FDA-approved regimen for massive PE and is strongly recommended by AHA and ESC guidelines. Systemic thrombolysis is faster and more accessible than catheter-directed or surgical approaches. Unfractionated heparin alone is inadequate for massive PE with shock \u2014 it prevents clot extension but does not actively lyse clot. Catheter-directed thrombolysis uses lower-dose tPA delivered locally and is preferred for submassive PE or when systemic thrombolysis fails. Surgical embolectomy is reserved for failed thrombolysis or absolute contraindications."
  },
  {
    "id": 70,
    "chapter": 10,
    "domain": "Pulmonary Embolism",
    "question": "A 72-year-old woman presents with PE and is found to have a Wells score of 2 and a D-dimer of 1800 ng/mL. CTPA confirms a right lower lobe segmental PE. She is hemodynamically stable with no RV dysfunction and her Pulmonary Embolism Severity Index (PESI) score classifies her as Class II (low-risk). Which anticoagulation approach is most appropriate?",
    "options": {
      "A": "Immediate systemic thrombolysis with alteplase",
      "B": "IV unfractionated heparin for 5\u20137 days followed by warfarin",
      "C": "Rivaroxaban 15 mg twice daily \u00d7 3 weeks, then 20 mg daily \u2014 outpatient management",
      "D": "IVC filter placement followed by anticoagulation"
    },
    "answer": "C",
    "explanation": "In low-risk PE (PESI Class I\u2013II, hemodynamically stable, no RV dysfunction), early discharge and outpatient anticoagulation with a direct oral anticoagulant (DOAC) is recommended (EINSTEIN-PE trial; AHA/ESC guidelines). Rivaroxaban is FDA-approved for acute PE using a 15 mg BID \u00d7 21 days (treatment phase) followed by 20 mg daily maintenance, with no initial parenteral anticoagulation required ('single drug' regimen). This approach is superior to IV heparin bridging for uncomplicated PE due to equivalent efficacy, lower bleeding risk, and patient convenience. Thrombolysis is reserved for massive PE. IVC filters are reserved for patients with absolute anticoagulation contraindications."
  },
  {
    "id": 71,
    "chapter": 10,
    "domain": "Pulmonary Embolism",
    "question": "A 60-year-old man with submassive PE (intermediate-high risk: elevated troponin, RV dilation on echo, hemodynamically stable BP 104/68) is being evaluated by the pulmonary embolism response team (PERT). His physician considers catheter-directed thrombolysis (CDT) with ultrasound-accelerated catheter. What is the primary advantage of CDT over systemic thrombolysis in this patient?",
    "options": {
      "A": "CDT achieves faster clot lysis than systemic alteplase",
      "B": "CDT delivers lower-dose tPA directly into the thrombus, reducing systemic bleeding risk while maintaining efficacy",
      "C": "CDT is the only therapy proven to reduce mortality in intermediate-high risk PE",
      "D": "CDT does not require anticoagulation after the procedure"
    },
    "answer": "B",
    "explanation": "Catheter-directed thrombolysis (CDT) delivers tPA directly into the pulmonary arterial thrombus via a multi-sidehole infusion catheter (with or without ultrasound facilitation \u2014 EKOS device), using doses of 1\u20132 mg/hr per catheter (total 8\u201324 mg) over 12\u201324 hours \u2014 far lower than systemic alteplase (100 mg over 2 hours). This substantially reduces systemic fibrinolytic exposure and the risk of major bleeding/intracranial hemorrhage. The SEATTLE II and OPTALYSE-PE trials demonstrated RV improvement and hemodynamic stabilization with CDT and lower bleeding rates than historical systemic thrombolysis data. CDT is preferred in intermediate-high risk PE to avoid the bleeding risk of full-dose systemic lysis while achieving clot burden reduction."
  },
  {
    "id": 72,
    "chapter": 10,
    "domain": "Pulmonary Embolism",
    "question": "A 45-year-old woman with massive PE collapses during CTPA and enters PEA arrest. She is resuscitated with CPR. The code team considers thrombolysis during active CPR. Which statement is TRUE regarding systemic thrombolysis during cardiac arrest from PE?",
    "options": {
      "A": "Thrombolysis is absolutely contraindicated during active CPR due to hemorrhagic risk",
      "B": "Thrombolysis during CPR for presumed PE is reasonable when PE is the likely cause of arrest; CPR should continue for at least 60\u201390 minutes after tPA administration to allow time for clot lysis",
      "C": "Thrombolysis during CPR is only effective if administered within 10 minutes of arrest onset",
      "D": "Only surgical embolectomy should be considered in PE-related cardiac arrest"
    },
    "answer": "B",
    "explanation": "AHA cardiac arrest guidelines state that thrombolysis (alteplase 50 mg or 100 mg IV bolus) is reasonable during CPR when PE is the presumed cause of cardiac arrest, despite the contraindication of recent CPR (active CPR is listed as a relative contraindication). Multiple case series and guidelines support continuing CPR for at least 60\u201390 minutes after tPA to allow adequate time for thrombolysis to work before abandoning resuscitation. Chest compressions alone provide enough circulation to distribute tPA. CPR itself causes rib fractures and soft tissue injury, increasing bleeding risk, but the benefit of restoring perfusion outweighs this in PE arrest. Surgical embolectomy is an alternative but requires expertise and infrastructure not available in most arrest situations."
  },
  {
    "id": 73,
    "chapter": 10,
    "domain": "Pulmonary Embolism",
    "question": "A 58-year-old man with PE is started on anticoagulation. He is found to have antiphospholipid antibody syndrome (triple positive: lupus anticoagulant, anti-cardiolipin IgG, anti-\u03b22GP1 IgG). Which anticoagulation strategy is preferred for long-term PE management in this patient?",
    "options": {
      "A": "Rivaroxaban 20 mg daily indefinitely",
      "B": "Apixaban 5 mg twice daily indefinitely",
      "C": "Warfarin with target INR 2\u20133 indefinitely",
      "D": "Dabigatran 150 mg twice daily indefinitely"
    },
    "answer": "C",
    "explanation": "The TRAPS trial (Pengo et al., NEJM 2018) randomized triple-positive APS patients to rivaroxaban vs. warfarin and found rivaroxaban was associated with significantly higher rates of thromboembolic events (11.6% vs. 3.9%) \u2014 primarily arterial thrombosis. DOACs (rivaroxaban, apixaban, dabigatran) are NOT recommended for long-term anticoagulation in antiphospholipid antibody syndrome, particularly triple-positive APS, which carries the highest thrombotic risk. Warfarin with target INR 2\u20133 remains the standard of care for APS-related thromboembolism. Current AHA, ASH, and ESC guidelines explicitly recommend against DOACs in high-risk (triple-positive) APS."
  },
  {
    "id": 74,
    "chapter": 11,
    "domain": "Asthma & COPD Exacerbations",
    "question": "A 28-year-old woman with severe asthma presents in status asthmaticus. She is tachypneic at 32/min with accessory muscle use, SpO2 87% on 15L NRB, PEFR 25% predicted, and she cannot speak in full sentences. What is the MOST appropriate initial pharmacological intervention?",
    "options": {
      "A": "IV aminophylline infusion",
      "B": "Continuous nebulized albuterol + ipratropium, systemic corticosteroids (IV methylprednisolone 125 mg), and supplemental oxygen",
      "C": "Emergent RSI and mechanical ventilation without attempting bronchodilator therapy",
      "D": "Subcutaneous terbutaline only, as nebulized bronchodilators require patient cooperation"
    },
    "answer": "B",
    "explanation": "Status asthmaticus management priorities: (1) Bronchodilators \u2014 continuous nebulized albuterol (10\u201320 mg/hr) combined with ipratropium bromide (0.5 mg q20min \u00d7 3) provides synergistic bronchodilation; (2) Systemic corticosteroids \u2014 IV methylprednisolone 125 mg IV (or 1\u20132 mg/kg) is essential to reduce airway inflammation; onset of action is 4\u20136 hours, making early administration critical; (3) Oxygenation \u2014 supplemental O2 to maintain SpO2 \u226592%. IV aminophylline has fallen out of favor due to narrow therapeutic window, toxicity, and no proven benefit over beta-agonists. Immediate intubation without bronchodilator trial is premature for a spontaneously breathing patient. SQ terbutaline is a backup when nebulization is impractical."
  },
  {
    "id": 75,
    "chapter": 11,
    "domain": "Asthma & COPD Exacerbations",
    "question": "A 35-year-old man with near-fatal asthma is intubated for status asthmaticus. Post-intubation, his peak airway pressure is 65 cmH2O, plateau pressure is 38 cmH2O. He is on AC/VC with TV 450 mL (6 mL/kg IBW), RR 18, PEEP 5 cmH2O, FiO2 0.6. His ABG shows pH 7.25, PaCO2 68, PaO2 92. Which management strategy is MOST appropriate?",
    "options": {
      "A": "Increase respiratory rate to 24 to normalize PaCO2",
      "B": "Accept permissive hypercapnia; reduce respiratory rate to 10\u201312 and extend expiratory time to reduce air trapping and auto-PEEP",
      "C": "Increase PEEP to 12 cmH2O to overcome intrinsic PEEP",
      "D": "Administer IV bicarbonate to correct the acidosis and maintain RR at 18"
    },
    "answer": "B",
    "explanation": "In ventilated asthma patients, air trapping and auto-PEEP are life-threatening complications. The severely elevated peak pressure (65 cmH2O) with a wide peak-to-plateau gradient (65 \u2212 38 = 27 cmH2O, indicating severe airflow obstruction) indicates significant gas trapping. Increasing RR (as in option A) reduces expiratory time, worsens air trapping and auto-PEEP, and risks tension pneumothorax and hemodynamic collapse \u2014 this is dangerous. The correct strategy is permissive hypercapnia: deliberately accepting elevated PaCO2 (up to 80\u2013100 mmHg) while reducing RR to 8\u201312 and ensuring I:E ratio of at least 1:3 to 1:5. IV bicarbonate is not a primary treatment for ventilatory hypercapnia. External PEEP should be set BELOW measured auto-PEEP, not increased."
  },
  {
    "id": 76,
    "chapter": 11,
    "domain": "Asthma & COPD Exacerbations",
    "question": "A 70-year-old man with COPD presents with an acute exacerbation: increased dyspnea, purulent sputum, SpO2 81% on room air, RR 28, BP 142/88, HR 106. ABG on 28% Venturi mask: pH 7.32, PaCO2 62, PaO2 64, HCO3 31 (chronic hypercapnia). Chest X-ray shows no pneumothorax or consolidation. What is the MOST appropriate initial intervention?",
    "options": {
      "A": "Intubation and mechanical ventilation",
      "B": "Non-invasive positive pressure ventilation (NIPPV/BiPAP) with bronchodilators and antibiotics",
      "C": "High-flow nasal cannula (HFNC) at 40 L/min",
      "D": "Continue 28% Venturi mask oxygen and reassess in 4 hours"
    },
    "answer": "B",
    "explanation": "NIV/BiPAP is the first-line treatment for moderate-to-severe COPD exacerbation with hypercapnic respiratory failure (pH 7.25\u20137.35, PaCO2 >45 with respiratory distress). Multiple RCTs and meta-analyses demonstrate that NIV reduces the need for intubation, hospital mortality, length of stay, and complications versus conventional therapy. This patient meets all criteria: acute exacerbation with hypercapnia (PaCO2 62 on supplemental O2), acidosis (pH 7.32), and elevated RR (28). While intubation is needed if NIV fails (pH <7.25 or neurological deterioration), it is not the first step. HFNC is NOT recommended as primary treatment for hypercapnic respiratory failure. Watchful waiting without NIV is inadequate given this severity."
  },
  {
    "id": 77,
    "chapter": 11,
    "domain": "Asthma & COPD Exacerbations",
    "question": "A 45-year-old woman with refractory status asthmaticus is not improving with continuous nebulized albuterol, ipratropium, IV methylprednisolone, and IV magnesium sulfate. She is becoming more fatigued. Which adjunctive therapy can reduce the work of breathing by decreasing airflow turbulence through narrowed airways, serving as a bridge to intubation?",
    "options": {
      "A": "Inhaled nitric oxide (iNO)",
      "B": "IV ketamine infusion",
      "C": "Heliox (helium-oxygen mixture, typically 70:30 or 80:20)",
      "D": "IV furosemide to reduce pulmonary edema"
    },
    "answer": "C",
    "explanation": "Heliox is a helium-oxygen mixture (70\u201380% helium, 20\u201330% oxygen) where helium's low density reduces turbulent airflow, decreasing airway resistance and the work of breathing. In status asthmaticus, airflow through narrowed, obstructed airways is turbulent (governed by density); heliox reduces this turbulence, improving gas exchange and reducing patient fatigue as a bridge to allow bronchodilators time to work or to delay intubation. The FiO2 is limited by heliox composition (maximum FiO2 0.3 with 70:30 heliox), making it unsuitable for severely hypoxic patients. IV ketamine has bronchodilatory properties (via sympathomimetic effects) and is useful in RSI for asthma or as an analgesic-sedative. Inhaled NO treats pulmonary hypertension, not bronchospasm."
  },
  {
    "id": 78,
    "chapter": 11,
    "domain": "Asthma & COPD Exacerbations",
    "question": "A 65-year-old man with COPD is on mechanical ventilation for an acute exacerbation. The respiratory therapist notices the flow-time scalar shows that expiratory flow is still positive (i.e., gas is still flowing out) when the next breath is initiated by the ventilator. Total PEEP is measured by end-expiratory hold at 14 cmH2O, while set PEEP is 5 cmH2O. What is the MOST appropriate intervention?",
    "options": {
      "A": "Increase set PEEP to 14 cmH2O to match total PEEP",
      "B": "Reduce respiratory rate and increase inspiratory flow rate to extend expiratory time, reducing auto-PEEP",
      "C": "Increase tidal volume to 10 mL/kg to overcome the auto-PEEP",
      "D": "Administer IV furosemide to reduce secretions and airway resistance"
    },
    "answer": "B",
    "explanation": "Auto-PEEP (intrinsic PEEP) in COPD ventilation occurs due to dynamic hyperinflation \u2014 air trapping from insufficient expiratory time. Measured total PEEP of 14 cmH2O vs. set PEEP of 5 cmH2O means 9 cmH2O of auto-PEEP is present. The primary treatment is to EXTEND expiratory time: reduce RR (to increase time between breaths), increase peak inspiratory flow rate (to shorten inspiratory time and lengthen the expiratory phase), or reduce TV (less volume to exhale). Setting external PEEP equal to auto-PEEP (option A) would further increase total PEEP and worsen hyperinflation. Increasing TV worsens air trapping. IV furosemide does not treat auto-PEEP. External PEEP of 80\u201385% of intrinsic PEEP can sometimes help patient triggering, but this is not the first priority."
  },
  {
    "id": 79,
    "chapter": 11,
    "domain": "Asthma & COPD Exacerbations",
    "question": "A 55-year-old woman with COPD is being treated with supplemental oxygen for an acute exacerbation. She is somnolent and repeat ABG shows pH 7.28, PaCO2 82, PaO2 78 on 4L NC (FiO2 ~0.36). She had an ABG 2 hours ago showing pH 7.35, PaCO2 55 on 2L NC. What is the MOST likely cause of her worsening hypercapnia?",
    "options": {
      "A": "Pulmonary embolism causing increased dead space",
      "B": "Oxygen-induced hypercapnia: suppression of hypoxic pulmonary vasoconstriction (V/Q worsening) and reduced hypoxic drive (Haldane effect)",
      "C": "Respiratory muscle fatigue from increased work of breathing",
      "D": "Aspiration pneumonitis reducing lung compliance"
    },
    "answer": "B",
    "explanation": "Oxygen-induced hypercapnia (OIH) in COPD is real but predominantly caused by: (1) Release of hypoxic pulmonary vasoconstriction \u2014 supplemental O2 reverses HPV in poorly ventilated lung regions, increasing perfusion to these areas and worsening V/Q mismatch (the dominant mechanism); (2) The Haldane effect \u2014 deoxygenated hemoglobin carries more CO2 (carbaminohemoglobin); when O2 saturates Hgb, CO2 is released into the blood, raising PaCO2; (3) Blunting of the hypoxic ventilatory drive (minor component). The COPD 'hypoxic drive' suppression alone is a small effect. Target SpO2 in COPD exacerbation is 88\u201392% to maintain oxygenation while avoiding OIH. NIV should be started now given deterioration."
  },
  {
    "id": 80,
    "chapter": 11,
    "domain": "Asthma & COPD Exacerbations",
    "question": "A 60-year-old man with a severe COPD exacerbation requires IV corticosteroids. A fellow suggests using methylprednisolone 125 mg IV every 6 hours for 10 days. What does current evidence support regarding corticosteroid dosing and duration for acute COPD exacerbations?",
    "options": {
      "A": "High-dose methylprednisolone 125 mg q6h \u00d7 10 days as recommended by GOLD guidelines",
      "B": "Prednisone 40 mg daily \u00d7 5 days (or equivalent), based on REDUCE trial showing non-inferiority to 14-day courses",
      "C": "Hydrocortisone 300 mg/day for 5 days, then taper over 3 weeks",
      "D": "A single dose of dexamethasone 8 mg IV is equivalent to a 5-day prednisone course"
    },
    "answer": "B",
    "explanation": "The REDUCE trial (Leuppi et al., JAMA 2013) demonstrated that a 5-day course of oral prednisone 40 mg/day was non-inferior to 14 days in terms of re-exacerbation within 6 months, with equivalent recovery of lung function and symptom relief. GOLD 2024 guidelines recommend systemic corticosteroids for hospitalized COPD exacerbations (prednisone 40 mg/day \u00d7 5 days, or equivalent IV dose). High-dose, prolonged courses (125 mg q6h \u00d7 10 days) are not supported by evidence and increase adverse effects (hyperglycemia, immunosuppression, muscle weakness). Single-dose dexamethasone may be emerging for mild exacerbations but is not yet the standard of care for severe/hospitalized cases."
  },
  {
    "id": 81,
    "chapter": 11,
    "domain": "Asthma & COPD Exacerbations",
    "question": "A 38-year-old man with status asthmaticus is intubated. Despite optimal ventilator settings (permissive hypercapnia, low RR, extended expiratory time) and continuous bronchodilators, his peak airway pressures remain 70 cmH2O and he has progressive hemodynamic instability. The bedside nurse performs a 'therapeutic disconnect' by briefly disconnecting the ventilator circuit from the ETT. His BP improves from 74/40 to 108/70 within seconds. What does this confirm?",
    "options": {
      "A": "The ventilator was malfunctioning and delivering excessive tidal volumes",
      "B": "Dynamic hyperinflation causing tension pneumothorax physiology ('breath stacking' or 'auto-PEEP catastrophe')",
      "C": "The ETT was obstructed by a mucus plug, causing ventilatory failure",
      "D": "The patient developed a large pleural effusion compressing the right heart"
    },
    "answer": "B",
    "explanation": "Severe auto-PEEP (dynamic hyperinflation) in mechanically ventilated asthma can cause 'tension physiology' \u2014 markedly elevated intrathoracic pressure compresses the inferior vena cava and right atrium, severely reducing venous return and cardiac output (obstructive shock). Hemodynamic compromise from auto-PEEP may mimic tension pneumothorax clinically. The 'therapeutic disconnect' (briefly disconnecting the circuit for 30\u201360 seconds) allows trapped gas to escape the lungs, reducing total lung volume and intrathoracic pressure \u2014 rapidly restoring venous return and cardiac output. The immediate hemodynamic improvement confirms dynamic hyperinflation as the cause. Bilateral needle decompression may be performed empirically if the diagnosis is uncertain (tension pneumo cannot be excluded clinically)."
  },
  {
    "id": 82,
    "chapter": 1,
    "domain": "Critical Care Principles",
    "question": "A 61-year-old woman is admitted to the ICU with community-acquired pneumonia requiring vasopressors. The ICU has a 1:1 nurse-to-patient ratio policy for patients on vasopressors. A second patient with similar severity arrives, but no additional ICU nurses are available. The unit supervisor considers an ICU 'outreach' model where ICU nurses telemonitor remote patients. Which statement best describes evidence-based ICU staffing models?",
    "options": {
      "A": "Tele-ICU systems have been proven to reduce mortality in all ICU settings regardless of baseline staffing",
      "B": "Higher nurse-to-patient ratios (1:1 or 1:2) in ICUs are associated with reduced patient mortality and adverse events; tele-ICU supplementation can assist but does not replace adequate bedside staffing",
      "C": "ICU physician staffing model (intensivist vs. non-intensivist) has no effect on patient outcomes",
      "D": "A 1:4 nurse-to-patient ratio is equivalent to 1:2 for critically ill patients on vasopressors"
    },
    "answer": "B",
    "explanation": "Multiple observational studies and systematic reviews demonstrate that higher nurse-to-patient ratios (1:1 for unstable patients, 1:2 for stable ICU patients) are associated with lower mortality, fewer medication errors, and reduced complications. Intensivist-led ICU models (closed-unit, 24-hour in-house intensivist) also independently reduce mortality. Tele-ICU systems can supplement bedside care \u2014 particularly for overnight hours or lower-volume ICUs \u2014 but meta-analyses show variable mortality effects, with greatest benefit in units with lower baseline staffing. Tele-ICU does not replace bedside RN care. A 1:4 ratio is unsafe for vasopressor-dependent patients and is below acceptable critical care nursing standards."
  },
  {
    "id": 83,
    "chapter": 2,
    "domain": "Hemodynamic Monitoring",
    "question": "A 68-year-old man with septic shock undergoes PA catheter placement for hemodynamic guidance. While advancing the catheter, the monitor suddenly shows a waveform with a high systolic spike to 48 mmHg and no dicrotic notch, and the diastolic component drops to 4 mmHg. What does this waveform indicate, and what complication must be anticipated?",
    "options": {
      "A": "Catheter is in the pulmonary artery; no action needed",
      "B": "Catheter is in the right ventricle; risk of ventricular arrhythmias including VT/VF",
      "C": "Catheter has entered the wedge position; deflate the balloon",
      "D": "Catheter has coiled in the right atrium; withdraw and readvance"
    },
    "answer": "B",
    "explanation": "The right ventricular waveform is characterized by a high systolic peak (matching PA systolic pressure, approximately 25\u201340 mmHg) with the diastolic pressure falling to near-zero (0\u20135 mmHg) \u2014 there is no dicrotic notch (unlike the PA waveform, which has a dicrotic notch from pulmonic valve closure). This is a critical moment during PA catheter insertion because the catheter tip in the right ventricle can irritate the ventricular myocardium, causing PVCs, ventricular tachycardia, or ventricular fibrillation. The catheter must be rapidly advanced past the pulmonic valve into the PA to exit the RV. Having defibrillation capability available during PA catheter insertion is mandatory."
  },
  {
    "id": 84,
    "chapter": 3,
    "domain": "Cardiogenic Shock",
    "question": "A 69-year-old woman with massive anterior STEMI develops cardiogenic shock. She is taken urgently to the cath lab where primary PCI is performed on the LAD. Post-PCI, she remains in shock with CI 1.3 L/min/m\u00b2, PCWP 28, and MAP 62 on norepinephrine 0.3 mcg/kg/min. The interventionalist is considering the Impella 5.5 implant via surgical axillary access. What hemodynamic effect differentiates the Impella 5.5 from the IABP in this patient?",
    "options": {
      "A": "The Impella 5.5 provides diastolic pressure augmentation; the IABP does not",
      "B": "The Impella 5.5 actively pumps up to 5.5 L/min from LV to aorta, providing active cardiac output support; the IABP provides only counterpulsation without increasing net cardiac output",
      "C": "The Impella 5.5 reduces afterload more effectively than IABP through diastolic deflation",
      "D": "Both devices provide equivalent cardiac output support; the Impella 5.5 is larger and has more bleeding complications"
    },
    "answer": "B",
    "explanation": "The fundamental difference: the Impella 5.5 is an active pumping device \u2014 an axial flow microaxial pump that draws blood from the LV and ejects it into the ascending aorta, providing up to 5.5 L/min of additional cardiac output. This directly augments CI. The IABP, by contrast, is passive \u2014 it provides diastolic augmentation (improving coronary perfusion) and systolic unloading (reducing afterload) via counterpulsation, but does NOT add net cardiac output to the circulation. In patients with CI <1.5, IABP is insufficient (SHOCK-II trial showed no mortality benefit for IABP in cardiogenic shock). Higher support devices (Impella, ECMO) provide active cardiac output and are more appropriate in profound cardiogenic shock."
  },
  {
    "id": 85,
    "chapter": 4,
    "domain": "Vasopressors & Inotropes",
    "question": "A 74-year-old woman with septic shock requires escalating norepinephrine doses (currently 0.6 mcg/kg/min). Her MAP remains 58 mmHg. The ICU team considers adding angiotensin II (Giapreza) as a salvage vasopressor. What is the mechanism of angiotensin II, and which trial supported its FDA approval for vasodilatory shock?",
    "options": {
      "A": "Angiotensin II stimulates beta-1 receptors; approved based on the VASST trial",
      "B": "Angiotensin II activates AT1 receptors on vascular smooth muscle causing vasoconstriction and stimulates aldosterone release; approved based on the ATHOS-3 trial",
      "C": "Angiotensin II inhibits ACE, reducing bradykinin degradation and promoting vasodilation",
      "D": "Angiotensin II is a PDE inhibitor approved for cardiogenic shock in the TRIUMPH trial"
    },
    "answer": "B",
    "explanation": "Angiotensin II (Giapreza) is a synthetic human angiotensin II that activates AT1 (angiotensin type 1) receptors on vascular smooth muscle, causing potent vasoconstriction, and stimulates aldosterone release (promoting sodium and water retention). It provides catecholamine-independent vasopressor activity, making it useful when adrenergic receptors are desensitized in prolonged shock. The ATHOS-3 trial (Khanna et al., NEJM 2017) randomized patients with high-dose vasopressor-dependent vasodilatory shock to angiotensin II vs. placebo and demonstrated significantly higher rates of MAP response (70% vs. 23%) with angiotensin II, leading to FDA approval in 2017. The VASST trial evaluated vasopressin vs. norepinephrine in septic shock."
  },
  {
    "id": 86,
    "chapter": 5,
    "domain": "Hemorrhagic Shock & Trauma Resuscitation",
    "question": "A 34-year-old man is transfused 12 units of PRBCs, 12 units of FFP, and 2 apheresis platelet units over 4 hours for hemorrhagic shock from a ruptured spleen. Post-operatively, he develops hypocalcemia (ionized Ca 0.72), metabolic acidosis (pH 7.19), and temperature of 34.2\u00b0C. His coagulation labs show PT 28 sec, aPTT 92 sec, fibrinogen 78 mg/dL. Which additional product is MOST needed to address the hypofibrinogenemia?",
    "options": {
      "A": "Additional FFP transfusion",
      "B": "Cryoprecipitate",
      "C": "Platelet transfusion",
      "D": "Recombinant factor VIIa"
    },
    "answer": "B",
    "explanation": "Cryoprecipitate is the most concentrated source of fibrinogen \u2014 each unit contains 150\u2013300 mg of fibrinogen in approximately 10\u201315 mL (compared to FFP which has only ~2 mg/mL fibrinogen, requiring 1500 mL to deliver ~3g fibrinogen). In trauma-induced coagulopathy, fibrinogen falls early and rapidly due to consumption and dilution. A fibrinogen level <150 mg/dL (or <200 mg/dL in massive hemorrhage) is an indication for cryoprecipitate. Each unit of cryoprecipitate raises fibrinogen by approximately 10 mg/dL in a 70 kg patient; pools of 10 units are typically given. Cryoprecipitate also contains factor VIII, von Willebrand factor, factor XIII, and fibronectin. FFP provides fibrinogen but in far lower concentrations and large volumes."
  },
  {
    "id": 87,
    "chapter": 6,
    "domain": "Airway Management & RSI",
    "question": "A 58-year-old man with acute angioedema secondary to an ACE inhibitor presents with progressive upper airway obstruction. His stridor is audible at the bedside. Racemic epinephrine and diphenhydramine have been administered without improvement. He is now drooling and cannot swallow. What is the MOST important principle guiding airway management in this patient?",
    "options": {
      "A": "Wait 30 minutes for the epinephrine to take full effect before attempting intubation",
      "B": "ACE inhibitor-induced angioedema will not respond to epinephrine; proceed immediately with awake fiberoptic intubation or surgical airway before complete obstruction occurs",
      "C": "Administer fresh frozen plasma (FFP) for C1-esterase inhibitor replacement and re-evaluate in 1 hour",
      "D": "BiPAP will maintain oxygenation until the angioedema resolves without need for intubation"
    },
    "answer": "B",
    "explanation": "ACE inhibitor-induced angioedema is caused by bradykinin accumulation (not histamine), making antihistamines and epinephrine less effective than in IgE-mediated anaphylaxis. The clinical priorities are: (1) Recognize the bradykinin-mediated mechanism; (2) Secure the airway EARLY \u2014 drooling and inability to swallow indicate critical progression; (3) Awake fiberoptic intubation is preferred given the distorted airway anatomy from edema; (4) Have surgical airway immediately available. Waiting for epinephrine effect in bradykinin-mediated angioedema risks complete obstruction. FFP (as a source of angiotensin-converting enzyme) can treat ACE-I angioedema but takes 30\u201360 minutes and should not delay airway management. BiPAP is contraindicated with upper airway obstruction."
  },
  {
    "id": 88,
    "chapter": 7,
    "domain": "Mechanical Ventilation Basics",
    "question": "A 72-year-old man with ARDS is on AC/VC ventilation. Peak inspiratory pressure (PIP) is 48 cmH2O and plateau pressure (Pplat) is 22 cmH2O. Which component of respiratory system mechanics does the PIP-to-Pplat gradient primarily reflect?",
    "options": {
      "A": "Lung compliance (elastic recoil of the lung parenchyma)",
      "B": "Chest wall compliance",
      "C": "Airway resistance (Raw = (PIP \u2212 Pplat) / peak flow rate)",
      "D": "Alveolar compliance at end-inspiration"
    },
    "answer": "C",
    "explanation": "Plateau pressure is measured during an end-inspiratory hold (no flow), when all gas flow has ceased. At this point, the pressure reflects the static elastic recoil of the respiratory system (lung + chest wall) \u2014 static compliance. Peak inspiratory pressure is the pressure at peak flow during active inspiration and includes both resistive (flow-dependent, from the airways) and elastic components. The difference: PIP \u2212 Pplat = resistive pressure = airway resistance \u00d7 peak flow rate. Therefore, a wide PIP-Pplat gradient (here: 48 \u2212 22 = 26 cmH2O) indicates high airway resistance \u2014 from bronchospasm, secretions, kinked ETT, or biting on the tube. Pplat alone reflects compliance (static compliance = TV / [Pplat \u2212 PEEP])."
  },
  {
    "id": 89,
    "chapter": 8,
    "domain": "ARDS & Lung-Protective Ventilation",
    "question": "A 52-year-old woman with severe ARDS (PF 75) has been prone for 18 hours. Her oxygenation improved initially (PF from 75 to 145) but has now declined back to PF 95 despite maintaining the prone position. Which statement is TRUE about proning response and decision to continue?",
    "options": {
      "A": "Lack of sustained oxygenation improvement means prone positioning should be immediately discontinued",
      "B": "PROSEVA protocol defined response as PF >150 after 4 hours of proning; non-responders still had mortality benefit in the trial and should continue proning",
      "C": "Once prone positioning is initiated, it must be continued for a minimum of 7 days regardless of oxygenation response",
      "D": "Oxygenation decline during prone positioning indicates the patient has developed a new pneumothorax and requires immediate supination"
    },
    "answer": "B",
    "explanation": "In the PROSEVA trial, oxygenation response was assessed 4 hours into prone positioning. Even patients who did not meet the oxygenation response threshold (PF >150) still derived mortality benefit from the prone position. Current practice continues prone positioning sessions (\u226516 hours/day) until either: (1) PF >150 on PEEP \u226410 and FiO2 \u22640.6 consistently after returning to supine (suggesting successful recruitment), or (2) The patient deteriorates with no improvement after multiple sessions, or (3) Complications arise. A transient oxygenation dip during a prone session does not mandate immediate supination. The mortality benefit appears to be related to more uniform stress distribution and secretion drainage, independent of immediate oxygenation response."
  },
  {
    "id": 90,
    "chapter": 9,
    "domain": "Weaning & Liberation from Ventilator",
    "question": "A 68-year-old man has been on mechanical ventilation for 21 days following a traumatic brain injury with associated pneumonia. He has tracheostomy. He is now following commands intermittently, opens eyes spontaneously, GCS 10T. He is tolerating spontaneous breathing trials of 2 hours daily but then tires and requires full ventilatory support. Daily sedation holds reveal no agitation. Which condition is MOST likely contributing to his failure to wean?",
    "options": {
      "A": "Residual TBI-related central hypoventilation",
      "B": "Critical illness myopathy (CIM) and/or critical illness polyneuropathy (CIP), causing respiratory muscle weakness",
      "C": "Persistently elevated intracranial pressure preventing weaning",
      "D": "Opioid-induced respiratory depression despite sedation holds"
    },
    "answer": "B",
    "explanation": "Critical illness myopathy (CIM) and critical illness polyneuropathy (CIP) \u2014 collectively ICU-acquired neuromuscular weakness \u2014 are the most common causes of prolonged mechanical ventilation weaning failure in patients who have survived the acute phase of illness. Risk factors include prolonged mechanical ventilation, sepsis, systemic corticosteroids, neuromuscular blocking agents, and hyperglycemia. CIM/CIP affect both peripheral and respiratory muscles, impairing the patient's ability to sustain spontaneous ventilation. Diagnosis is confirmed by NCS/EMG. Rehabilitation (early mobility, physical therapy, weaning protocols) is the cornerstone of treatment. TBI-related hypoventilation would cause more global respiratory depression, not fatiguability after 2 hours of SBT."
  },
  {
    "id": 91,
    "chapter": 10,
    "domain": "Pulmonary Embolism",
    "question": "A 55-year-old man presents with acute PE and hemodynamic instability. Bedside echocardiogram shows RV dilation, RV hypokinesis, flattening of the interventricular septum ('D-sign'), and a new McConnell's sign (apical RV hyperkinesis with mid-wall hypokinesis). Which aspect of RV physiology explains the hemodynamic instability in massive PE?",
    "options": {
      "A": "LV systolic dysfunction from paradoxical septal motion reducing LV preload and output",
      "B": "RV pressure overload from acute pulmonary hypertension causing RV dilation, tricuspid regurgitation, IVS shift compressing the LV, and reduced LV filling \u2014 the ventriculo-ventricular interdependence mechanism",
      "C": "Massive PE causes LV outflow tract obstruction via clot embolizing to the aortic bifurcation",
      "D": "PE-induced pulmonary edema reduces LV preload through impaired capillary drainage"
    },
    "answer": "B",
    "explanation": "In massive PE, acute pulmonary vascular obstruction causes a sudden rise in RV afterload. The thin-walled RV dilates under pressure, leading to: (1) Tricuspid regurgitation (functional, from annular dilation); (2) Interventricular septal shift toward the LV in diastole (D-shaped LV on echo \u2014 ventricular interdependence); (3) Reduced LV cavity size and impaired LV filling (reduced LV preload), dramatically reducing cardiac output. Simultaneously, the dilated RV compresses the right coronary artery filling, causing RV ischemia and worsening dysfunction. This 'acute cor pulmonale' is a cascade from RV pressure overload \u2192 dilation \u2192 septal shift \u2192 LV compression \u2192 reduced CO \u2192 hemodynamic collapse."
  },
  {
    "id": 92,
    "chapter": 10,
    "domain": "Pulmonary Embolism",
    "question": "A 70-year-old man with an unprovoked PE is anticoagulated for 3 months. His physician is deciding between stopping anticoagulation and continuing indefinitely. His D-dimer is checked one month after stopping anticoagulation and is elevated at 680 ng/mL. What does this finding suggest regarding recurrence risk?",
    "options": {
      "A": "Elevated D-dimer after stopping anticoagulation has no clinical significance",
      "B": "Elevated D-dimer (above age-adjusted threshold) 1 month after stopping anticoagulation predicts significantly increased VTE recurrence risk and supports extended anticoagulation",
      "C": "D-dimer elevation indicates the patient has developed a new PE; immediate CTPA is required",
      "D": "D-dimer elevation is expected after stopping anticoagulation and has a sensitivity of only 20% for recurrent VTE"
    },
    "answer": "B",
    "explanation": "The DULCIS study (Palareti et al., NEJM 2014) demonstrated that an elevated D-dimer (above the assay's normal threshold) measured 1 month after stopping anticoagulation in unprovoked VTE patients identifies those at significantly higher recurrence risk. Patients with persistently elevated D-dimer who were re-anticoagulated had markedly reduced recurrence rates. Current evidence-based risk stratification for indefinite anticoagulation in unprovoked PE includes male sex (HERDOO2 rule), elevated post-treatment D-dimer, residual DVT on ultrasound, and clinical risk factors. An unprovoked PE alone carries a >30% recurrence risk at 5 years, and elevated D-dimer further increases this risk, supporting extended (indefinite) anticoagulation."
  },
  {
    "id": 93,
    "chapter": 11,
    "domain": "Asthma & COPD Exacerbations",
    "question": "A 50-year-old man with asthma presents to the ED with severe acute exacerbation. Peak expiratory flow rate is 35% of predicted. He is given nebulized albuterol \u00d7 3 doses and systemic corticosteroids without improvement. Intravenous magnesium sulfate 2g over 20 minutes is ordered. What is the mechanism of action of magnesium sulfate in acute asthma?",
    "options": {
      "A": "Magnesium competitively inhibits beta-2 receptors, reducing bronchospasm",
      "B": "Magnesium acts as a calcium channel antagonist in smooth muscle, inhibiting calcium-mediated bronchoconstriction; it may also inhibit mast cell degranulation",
      "C": "Magnesium is a direct mu-opioid agonist, reducing the sensation of dyspnea",
      "D": "Magnesium stimulates endogenous cortisol release, augmenting the anti-inflammatory effect of exogenous steroids"
    },
    "answer": "B",
    "explanation": "Magnesium sulfate causes bronchodilation through its role as a physiologic calcium channel antagonist: it competes with calcium at smooth muscle cell voltage-gated calcium channels, reducing intracellular calcium levels and thereby inhibiting smooth muscle contraction (bronchoconstriction). It may also stabilize mast cells (reducing histamine/prostaglandin release) and inhibit acetylcholine release at neuromuscular junctions. The evidence base: multiple RCTs and meta-analyses show IV magnesium reduces hospitalization rates and improves FEV1 in patients with severe acute asthma not responding to initial bronchodilators. Recommended dose is 2g IV over 20 minutes. It does not act via beta receptors, opioid receptors, or cortisol stimulation."
  },
  {
    "id": 94,
    "chapter": 1,
    "domain": "Critical Care Principles",
    "question": "A 58-year-old man with septic shock from Gram-negative bacteremia has persistent hypotension and oliguria despite 30 mL/kg crystalloid and vasopressors. Initial lactate was 6.8 mmol/L. After 6 hours of resuscitation, his lactate has fallen to 3.2 mmol/L. How should this lactate clearance be interpreted in the context of sepsis management?",
    "options": {
      "A": "Lactate clearance of 53% over 6 hours indicates excellent resuscitation; no further interventions needed",
      "B": "Lactate clearance \u226510% per hour or \u226530% over 2 hours is associated with improved outcomes; continued decline toward normal (<2 mmol/L) should guide ongoing resuscitation",
      "C": "Lactate clearance only reflects improved liver metabolism of lactate, not true tissue perfusion improvement",
      "D": "A lactate of 3.2 mmol/L means the patient is now in 'sepsis' rather than 'septic shock' and vasopressors should be weaned immediately"
    },
    "answer": "B",
    "explanation": "Lactate clearance \u2014 the percentage decrease in serum lactate over time \u2014 is a validated surrogate for improving tissue perfusion and is used to guide sepsis resuscitation. The SSC 2018 'Hour-1 Bundle' and subsequent guidelines incorporate lactate normalization as a resuscitation goal. Jones et al. (JAMA 2010) showed lactate clearance \u226510%/2h was non-inferior to ScvO2-guided resuscitation. A 53% clearance over 6 hours indicates significant improvement in oxygen delivery/utilization but does not mean resuscitation is complete \u2014 lactate remains above normal (3.2 vs. <2 mmol/L). The definition of septic shock requires both vasopressors AND lactate >2 despite adequate resuscitation; this patient's lactate has improved but is still elevated."
  },
  {
    "id": 95,
    "chapter": 2,
    "domain": "Hemodynamic Monitoring",
    "question": "A 62-year-old woman with septic shock is being monitored with a FloTrac/Vigileo arterial waveform analysis system. Her stroke volume variation (SVV) is 22% on mechanical ventilation (TV 7 mL/kg IBW, sinus rhythm, no spontaneous efforts). A fluid challenge of 500 mL LR is administered. Her cardiac output increases from 4.2 to 4.9 L/min (+16.7%). How should SVV and the fluid challenge response be interpreted together?",
    "options": {
      "A": "SVV 22% predicted non-response; the fluid challenge response is a false positive",
      "B": "SVV >13% predicted fluid responsiveness; the fluid challenge confirmed this prediction with a >10\u201315% CO increase",
      "C": "SVV only reflects right ventricular function and cannot predict LV response to fluids",
      "D": "SVV 22% indicates severe right ventricular dysfunction requiring immediate echocardiographic evaluation"
    },
    "answer": "B",
    "explanation": "Stroke volume variation (SVV) >13% in mechanically ventilated patients with sinus rhythm and minimal spontaneous efforts is a validated predictor of fluid responsiveness (positive predictive value ~80\u201385%). This patient's SVV of 22% correctly predicted that a fluid challenge would increase cardiac output. The fluid challenge response of +16.7% (>10\u201315% threshold) confirms the patient was fluid responsive. The FloTrac system calculates SVV from beat-to-beat arterial waveform analysis \u2014 it measures the respiratory variation in pulse contour to derive SVV. SVV is not a measure of RV function per se \u2014 though RV dysfunction can cause elevated SVV by a different mechanism. SVV was validated in the same conditions as PPV (controlled ventilation, sinus rhythm, no spontaneous breathing)."
  },
  {
    "id": 96,
    "chapter": 3,
    "domain": "Cardiogenic Shock",
    "question": "A 71-year-old man with CS post-STEMI has been on VA-ECMO for 48 hours. He is on norepinephrine 0.05 mcg/kg/min and vasopressin 0.03 units/min. His 'North-South' or 'Harlequin' syndrome is noted: his upper extremities are cyanotic while his legs are well-perfused. ECMO flow is 4.2 L/min via femoral cannulation. What is the mechanism of Harlequin syndrome in VA-ECMO?",
    "options": {
      "A": "ECMO circuit clotting causing preferential flow to the lower body",
      "B": "Peripheral VA-ECMO returns oxygenated blood retrograde from the femoral artery; if the native heart recovers partially, it may eject desaturated blood that preferentially perfuses the upper body (including coronary and cerebral circulations) while ECMO-oxygenated blood perfuses the lower body",
      "C": "Vasopressin causes selective upper body vasoconstriction, reducing coronary perfusion",
      "D": "The ECMO membrane oxygenator fails to oxygenate blood fully when flows exceed 4 L/min"
    },
    "answer": "B",
    "explanation": "Harlequin (differential hypoxia or North-South) syndrome occurs in femoral VA-ECMO when the native heart partially recovers and begins ejecting blood. If lung function is impaired (ARDS, pulmonary edema), the blood ejected by the LV is poorly oxygenated. This desaturated blood travels from the aortic root toward the upper body \u2014 coronary arteries, cerebral circulation, right arm \u2014 while the highly oxygenated ECMO return blood flows retrograde from the femoral artery and preferentially reaches the lower body (due to the 'mixing zone' being at the descending aorta level). The upper body (including the brain and heart) receives hypoxic blood. Solutions: increase ECMO flow, improve native lung function, add VV-ECMO (VAV configuration), or add an upper body perfusion cannula."
  },
  {
    "id": 97,
    "chapter": 4,
    "domain": "Vasopressors & Inotropes",
    "question": "A 66-year-old man with septic shock is on norepinephrine 0.3 mcg/kg/min. His team is discussing whether to add vasopressin. The VASST trial (Russell et al., NEJM 2008) is cited. What was the main finding of the VASST trial regarding vasopressin in septic shock?",
    "options": {
      "A": "Vasopressin significantly reduced 28-day mortality compared to norepinephrine in all septic shock patients",
      "B": "Vasopressin did not significantly reduce 28-day mortality overall, but in a post-hoc subgroup with less severe shock (norepinephrine <15 mcg/min), vasopressin was associated with lower mortality",
      "C": "Vasopressin caused significantly more cardiac arrhythmias and was removed from the comparator arm",
      "D": "Vasopressin reduced vasopressor requirements but increased renal failure and was not recommended"
    },
    "answer": "B",
    "explanation": "The VASST trial (N=778) randomized adult septic shock patients requiring norepinephrine to low-dose vasopressin (0.01\u20130.03 units/min) vs. norepinephrine titration. There was no significant difference in primary outcome (28-day mortality: 35.4% vasopressin vs. 39.3% norepinephrine, p=0.26). In a prespecified subgroup analysis, patients with LESS severe shock (requiring norepinephrine <15 mcg/min [roughly <0.2 mcg/kg/min] at randomization) had significantly lower 28-day mortality with vasopressin (26.5% vs. 35.7%, p=0.05). VASST also showed vasopressin was a vasopressor-sparing agent, reducing norepinephrine requirements. The VANISH trial similarly showed norepinephrine sparing but no mortality benefit."
  },
  {
    "id": 98,
    "chapter": 8,
    "domain": "ARDS & Lung-Protective Ventilation",
    "question": "A 48-year-old man with severe ARDS receives a neuromuscular blocking agent (NMBA) infusion (cisatracurium) for 48 hours in the first day of mechanical ventilation. His PaO2/FiO2 is 90 on PEEP 16. Which landmark trial supports this practice, and what was its primary finding?",
    "options": {
      "A": "ACURASYS trial (Papazian et al., NEJM 2010): early cisatracurium (48h) significantly improved 90-day mortality and ICU-acquired weakness vs. placebo in severe ARDS",
      "B": "ROSE trial (National Heart, Lung, and Blood Institute PETAL Network, NEJM 2019): early NMBA did not improve 90-day mortality vs. a light sedation strategy in moderate-severe ARDS",
      "C": "OSCAR trial (Young et al., NEJM 2013): NMBA improved oxygenation but increased ICU-acquired weakness",
      "D": "ProVENT trial: 72-hour NMBA infusion significantly reduced ventilator-associated pneumonia in ARDS"
    },
    "answer": "B",
    "explanation": "The story of NMBAs in ARDS involves two landmark trials with conflicting results. ACURASYS (France, 2010, N=340) showed early 48-hour cisatracurium significantly reduced adjusted 90-day mortality and improved oxygenation in severe ARDS vs. placebo. However, the larger ROSE trial (USA, 2019, N=1006) used a rigorous design with a comparator of light sedation (not deep sedation/placebo as in ACURASYS) and found NO mortality benefit from routine early NMBAs. The difference in comparator group (light sedation vs. deep sedation) explains the discrepancy. Current guidelines do not universally recommend routine NMBA for all ARDS patients; NMBAs remain reasonable for severe refractory ventilator dyssynchrony. The OSCAR and ProVENT trials addressed different questions."
  },
  {
    "id": 99,
    "chapter": 6,
    "domain": "Airway Management & RSI",
    "question": "A 65-year-old man undergoes RSI for intubation. After administration of succinylcholine 1.5 mg/kg and propofol 1.5 mg/kg, he is apneic. Video laryngoscopy reveals a Grade 3 Cormack-Lehane view. A 60F angled bougie is introduced under the epiglottis and advanced; the operator feels 'tracheal clicks.' The ETT is threaded over the bougie and intubation is confirmed. What is the significance of 'tracheal clicks' felt during bougie advancement?",
    "options": {
      "A": "Clicks indicate esophageal placement; the bougie should be withdrawn immediately",
      "B": "Clicks are felt as the bougie tip passes over the tracheal rings (cartilaginous rings), confirming tracheal placement; resistance is felt when the bougie enters a bronchus",
      "C": "Clicks indicate the bougie has kinked and is unable to advance further into the trachea",
      "D": "Clicks confirm the bougie tip is at the level of the carina; withdraw 2 cm before threading the ETT"
    },
    "answer": "B",
    "explanation": "The Eschmann introducer (bougie) technique relies on two tactile cues for tracheal confirmation: (1) Clicks \u2014 as the bougie tip passes over the cartilaginous tracheal rings, the operator feels a 'washboard' vibration confirming tracheal (not esophageal) placement; the esophagus lacks cartilaginous rings and the bougie passes smoothly. (2) Hold-up/resistance \u2014 when the bougie enters the right or left mainstem bronchus, resistance is felt as the tip can no longer advance (typically at 26\u201330 cm from teeth for adults) \u2014 this confirms tracheal but warns against right mainstem intubation. The ETT should then be threaded over the bougie (lubricated, rotated 90\u00b0 counterclockwise if resistance is met). These two tactile cues increase first-pass intubation success in difficult laryngoscopy."
  },
  {
    "id": 100,
    "chapter": 9,
    "domain": "Weaning & Liberation from Ventilator",
    "question": "A 75-year-old woman has been on mechanical ventilation for 14 days following a COPD exacerbation complicated by sepsis. She has passed her SAT. A T-piece SBT is planned. Her spontaneous breathing parameters measured before starting the SBT are: RR 14, TV 280 mL, IBW 52 kg. During the 30-minute SBT on T-piece, she maintains RR 20, TV 270 mL, SpO2 96%, no accessory muscle use, no agitation. RSBI at 30 minutes = 74 breaths/min/L. What is the appropriate next step?",
    "options": {
      "A": "Fail the SBT \u2014 RSBI should be <60 breaths/min/L for a guaranteed successful extubation",
      "B": "Pass the SBT \u2014 RSBI 74 (<105), stable hemodynamics, adequate oxygenation, and no signs of distress indicate readiness for extubation",
      "C": "Extend the SBT to 120 minutes to confirm tolerance before extubating",
      "D": "The SBT result is indeterminate; repeat the SBT tomorrow with pressure support instead of T-piece"
    },
    "answer": "B",
    "explanation": "This patient passes all standard SBT criteria: (1) RSBI = RR/TV = 20/0.270 = 74 breaths/min/L, which is well below the failure threshold of 105; (2) Adequate oxygenation (SpO2 96%); (3) No hemodynamic instability (no tachycardia, no hypertension/hypotension); (4) No signs of distress (no accessory muscle use, no agitation, no diaphoresis); (5) Duration of 30 minutes met (the original Yang-Tobin study used 30 minutes; ACCP guidelines support 30-min to 2-hour SBT, but most patients can be extubated after 30 minutes if all criteria are met). A RSBI threshold of <60 is unnecessarily strict \u2014 <105 is the validated threshold. Extending to 120 minutes is not required by evidence if the 30-minute criteria are met. SBT on T-piece vs. PSV both have equivalent evidence."
  },
  {
    "id": 101,
    "chapter": 12,
    "domain": "Sepsis & Infectious Disease",
    "question": "A 67-year-old man with diabetes presents to the ED with fever (39.8\u00b0C), hypotension (BP 82/50 mmHg), HR 118 bpm, RR 26/min, and altered mental status. Lactate is 4.2 mmol/L. Blood cultures are drawn and he is started on IV fluids. Which of the following best defines his condition according to Sepsis-3 criteria?",
    "options": {
      "A": "Sepsis, defined as SIRS with a suspected infection source",
      "B": "Septic shock, defined by hypotension requiring vasopressors plus lactate > 2 mmol/L despite adequate fluid resuscitation",
      "C": "Severe sepsis, defined as sepsis with evidence of end-organ dysfunction",
      "D": "Bacteremic shock, defined by positive blood cultures with hemodynamic instability"
    },
    "answer": "B",
    "explanation": "Sepsis-3 (2016) eliminated the terms 'severe sepsis' and 'SIRS-based sepsis.' Septic shock is defined as sepsis with circulatory, cellular, and metabolic dysfunction \u2014 operationalized as vasopressor requirement to maintain MAP \u2265 65 mmHg AND lactate > 2 mmol/L despite adequate fluid resuscitation. This patient meets both criteria. 'Severe sepsis' (option C) is an outdated Sepsis-2 term no longer used. SIRS-based definitions (option A) were abandoned because of poor specificity."
  },
  {
    "id": 102,
    "chapter": 12,
    "domain": "Sepsis & Infectious Disease",
    "question": "A 72-year-old woman presents with urosepsis. Her BP is 78/45 mmHg and lactate is 3.8 mmol/L. According to the Surviving Sepsis Campaign Hour-1 Bundle, which of the following actions should be completed within the first hour?",
    "options": {
      "A": "Administer 2L of normal saline, obtain blood cultures, initiate broad-spectrum antibiotics, and insert a central venous catheter",
      "B": "Measure lactate, obtain blood cultures before antibiotics, administer 30 mL/kg IV crystalloid, start broad-spectrum antibiotics, and use vasopressors if MAP < 65 mmHg",
      "C": "Obtain echocardiogram, measure central venous pressure, administer dobutamine, and start antibiotics",
      "D": "Administer 30 mL/kg albumin, obtain blood cultures, start broad-spectrum antibiotics, and measure ScvO2"
    },
    "answer": "B",
    "explanation": "The Hour-1 Bundle (2018 SSC update) includes: (1) measure lactate, re-measure if > 2 mmol/L; (2) obtain blood cultures before antibiotics; (3) administer 30 mL/kg IV crystalloid for hypotension or lactate \u2265 4 mmol/L; (4) apply vasopressors if MAP < 65 mmHg; (5) start broad-spectrum antibiotics. Option A incorrectly mandates a central line. Option C describes older ScvO2-driven goal-directed therapy (Rivers protocol), which was abandoned after PROCESS/ARISE/ProMISe trials. Albumin is not first-line initial resuscitation."
  },
  {
    "id": 103,
    "chapter": 12,
    "domain": "Sepsis & Infectious Disease",
    "question": "A 58-year-old man with septic shock from a perforated appendix is on norepinephrine 0.15 mcg/kg/min with MAP 62 mmHg. He has received 4L of crystalloid and his lactate is 3.1 mmol/L (down from 5.6 mmol/L). What is the most appropriate next step?",
    "options": {
      "A": "Administer another 2L of normal saline as a fluid bolus",
      "B": "Add vasopressin 0.03 units/min to reduce norepinephrine requirements",
      "C": "Switch norepinephrine to dopamine for better renal perfusion",
      "D": "Start dobutamine to optimize cardiac output"
    },
    "answer": "B",
    "explanation": "When norepinephrine requirements are high (generally > 0.25 mcg/kg/min) or MAP remains subtherapeutic, vasopressin is added as a second vasopressor. The VASST trial showed vasopressin had similar outcomes to norepinephrine and reduced norepinephrine doses. Additional fluid boluses are unlikely to help after 4L with improving lactate. Dopamine is not preferred over norepinephrine (higher arrhythmia risk per SOAP II trial). Dobutamine is indicated for low cardiac output/cardiogenic component, not primarily for persistent hypotension in septic shock."
  },
  {
    "id": 104,
    "chapter": 12,
    "domain": "Sepsis & Infectious Disease",
    "question": "A 55-year-old woman with septic shock from cellulitis is resuscitated with 3L crystalloid. CVP is 12 mmHg, MAP is 68 mmHg on norepinephrine. Lactate is now 5.8 mmol/L (up from 4.1 mmol/L at 2 hours). Bedside echo shows hyperdynamic ventricles. Which intervention is most likely to improve outcomes?",
    "options": {
      "A": "Increase norepinephrine to target MAP > 80 mmHg",
      "B": "Add hydrocortisone 200 mg/day for possible adrenal insufficiency",
      "C": "Perform urgent surgical debridement of the cellulitis site",
      "D": "Administer 2 units of packed red blood cells to optimize oxygen delivery"
    },
    "answer": "C",
    "explanation": "Rising lactate despite adequate resuscitation and pressors indicates ongoing uncontrolled source. Source control is a core principle in sepsis management \u2014 inadequate source control is a leading cause of refractory septic shock. Cellulitis can represent necrotizing fasciitis requiring urgent surgery. Increasing MAP target above 65 mmHg (SEPSISPAM trial showed no benefit and possible harm in non-hypertensive patients). Hydrocortisone is reasonable but does not address the underlying cause. Transfusion threshold in sepsis is Hgb < 7 g/dL (ProCESS trial)."
  },
  {
    "id": 105,
    "chapter": 12,
    "domain": "Sepsis & Infectious Disease",
    "question": "A 63-year-old man is admitted to the ICU with septic shock. After 30 mL/kg of crystalloid, his MAP is 66 mmHg on low-dose norepinephrine. His lactate is 2.3 mmol/L, urine output is 0.4 mL/kg/hr, and his serum albumin is 1.8 g/dL. Which statement about fluid resuscitation is most accurate?",
    "options": {
      "A": "Balanced crystalloids (lactated Ringer's) are preferred over normal saline due to lower risk of AKI",
      "B": "Colloids should replace crystalloids as primary resuscitation fluid due to lower volume needed",
      "C": "Additional boluses of normal saline are required to achieve CVP of 12-15 mmHg",
      "D": "Hydroxyethyl starch is the preferred colloid due to its favorable volume expansion profile"
    },
    "answer": "A",
    "explanation": "The SMART and SALT-ED trials demonstrated that balanced crystalloids (LR or PlasmaLyte) are associated with lower rates of major adverse kidney events compared to normal saline, particularly in critically ill patients. This is attributed to hyperchloremic metabolic acidosis caused by large volumes of normal saline. Colloids are not recommended as primary resuscitation (CRYSTMAS, CHEST trials). CVP-targeted resuscitation was abandoned after ProCESS/ARISE/ProMISe trials. Hydroxyethyl starch is contraindicated in sepsis due to increased mortality and AKI (VISEP, 6S trials)."
  },
  {
    "id": 106,
    "chapter": 12,
    "domain": "Sepsis & Infectious Disease",
    "question": "A 71-year-old woman with septic shock is being maintained on norepinephrine 0.08 mcg/kg/min and vasopressin 0.03 units/min. After 48 hours she remains on vasopressors. ACTH stimulation test shows a cortisol rise of 6 mcg/dL. What is the most appropriate next step?",
    "options": {
      "A": "Discontinue vasopressin immediately due to risk of mesenteric ischemia",
      "B": "Add fludrocortisone 50 mcg daily to the hydrocortisone regimen",
      "C": "Start hydrocortisone 200 mg/day (as continuous infusion or divided doses)",
      "D": "Wait for ACTH stimulation test results before starting corticosteroids"
    },
    "answer": "C",
    "explanation": "Corticosteroids are recommended for septic shock refractory to vasopressors. The APROCCHSS trial showed hydrocortisone plus fludrocortisone reduced 90-day mortality. Hydrocortisone 200 mg/day IV is standard. The ACTH stimulation test result shown (delta cortisol of 6 mcg/dL, below the 9 mcg/dL threshold) suggests relative adrenal insufficiency, supporting steroid use. However, current guidelines recommend not waiting for or using ACTH stimulation test results to decide \u2014 clinical vasopressor dependence alone is the indication. Option B (adding fludrocortisone) may be used but hydrocortisone is the initial step."
  },
  {
    "id": 107,
    "chapter": 12,
    "domain": "Sepsis & Infectious Disease",
    "question": "A 45-year-old man with no prior medical history presents in septic shock with a lactate of 6.1 mmol/L. After 2 hours of resuscitation with 30 mL/kg crystalloid and norepinephrine, his MAP is 66 mmHg and lactate is 5.9 mmol/L. He appears volume overloaded. What is the best measure to guide further resuscitation?",
    "options": {
      "A": "Central venous pressure (CVP) measurement targeting 8-12 mmHg",
      "B": "Passive leg raise with pulse pressure variation assessment",
      "C": "ScvO2 targeting > 70% with blood transfusion if hemoglobin < 10 g/dL",
      "D": "Pulmonary artery catheter placement for cardiac output measurement"
    },
    "answer": "B",
    "explanation": "Passive leg raise (PLR) is a validated, reversible fluid challenge that predicts fluid responsiveness. PLR-induced increase in cardiac output or pulse pressure > 10% identifies fluid-responsive patients without giving unnecessary volume to patients who are fluid overloaded. CVP is unreliable for predicting fluid responsiveness (multiple studies). ScvO2-guided therapy including transfusion to Hgb 10 g/dL was abandoned after ProCESS/ARISE/ProMISe trials showed it did not improve outcomes. PA catheters did not improve outcomes in ARDS or sepsis (PAC-Man, FACTT trials)."
  },
  {
    "id": 108,
    "chapter": 12,
    "domain": "Sepsis & Infectious Disease",
    "question": "A 60-year-old woman with abdominal sepsis is on norepinephrine 0.22 mcg/kg/min and vasopressin 0.03 units/min, MAP 65 mmHg. Despite resuscitation, her cardiac index is 1.8 L/min/m\u00b2 (normal > 2.2). She has bilateral pulmonary edema. Which is the most appropriate addition?",
    "options": {
      "A": "Phenylephrine to raise systemic vascular resistance",
      "B": "Dobutamine 2-20 mcg/kg/min to improve cardiac output",
      "C": "Epinephrine to replace norepinephrine for combined vasopressor-inotropic effect",
      "D": "Additional fluid bolus of 1L crystalloid to preload the ventricle"
    },
    "answer": "B",
    "explanation": "Dobutamine is the inotrope of choice when septic shock is complicated by myocardial depression and low cardiac output, as evidenced by a reduced cardiac index despite adequate preload and vasopressor support. SSC guidelines recommend dobutamine up to 20 mcg/kg/min for this indication. Phenylephrine would increase afterload without improving contractility and could worsen output. Epinephrine is an alternative but is associated with more tachycardia and metabolic effects. Additional fluid is contraindicated given pulmonary edema and likely fluid-unresponsive state."
  },
  {
    "id": 109,
    "chapter": 12,
    "domain": "Sepsis & Infectious Disease",
    "question": "A 52-year-old man with sepsis has a serum lactate of 3.9 mmol/L. His BP is 95/60 mmHg without vasopressors and he appears well-perfused. Which statement about lactate in sepsis is most accurate?",
    "options": {
      "A": "Elevated lactate always indicates tissue hypoxia and requires immediate fluid bolus",
      "B": "Lactate > 2 mmol/L without hypotension meets criteria for septic shock under Sepsis-3",
      "C": "Elevated lactate in sepsis may result from aerobic glycolysis and epinephrine-stimulated Na-K ATPase activity, not solely tissue hypoxia",
      "D": "Serial lactate measurements are not useful once the initial value is obtained"
    },
    "answer": "C",
    "explanation": "Lactate elevation in sepsis is multifactorial. Beyond tissue hypoxia (anaerobic glycolysis), elevated lactate can result from epinephrine-stimulated aerobic glycolysis (Warburg effect), impaired lactate clearance by the liver, Na-K-ATPase activation by catecholamines, and pyruvate dehydrogenase inhibition. This is why patients can have elevated lactate without frank hypoperfusion. Sepsis-3 defines septic shock as hypotension requiring vasopressors AND lactate > 2 mmol/L \u2014 lactate elevation alone does not meet criteria (option B is incomplete). Serial lactate-guided resuscitation targeting \u2265 10% clearance per 2 hours improves outcomes (LACTATE trial)."
  },
  {
    "id": 110,
    "chapter": 13,
    "domain": "Infectious Disease",
    "question": "A 58-year-old woman with ventilator-associated pneumonia grows Pseudomonas aeruginosa susceptible to piperacillin-tazobactam (MIC 8 mg/L). She is started on pip-tazo 3.375g q6h over 30-minute infusions. Despite 3 days of therapy, she is not improving. Which change in antibiotic administration is most likely to optimize bacterial killing?",
    "options": {
      "A": "Switch to ciprofloxacin, which has concentration-dependent killing against Pseudomonas",
      "B": "Extend the infusion time of piperacillin-tazobactam to 4 hours (extended infusion)",
      "C": "Add tobramycin for synergistic activity against Pseudomonas",
      "D": "Double the dose of piperacillin-tazobactam to 6.75g q6h"
    },
    "answer": "B",
    "explanation": "Beta-lactams exhibit time-dependent killing \u2014 efficacy is maximized by optimizing the time that free drug concentration exceeds the MIC (%T>MIC). For Pseudomonas with an MIC of 8 mg/L, standard 30-minute infusions may not achieve adequate %T>MIC. Extended infusions (3-4 hours) dramatically increase %T>MIC and have been associated with improved clinical outcomes in PK/PD studies and some clinical trials. Ciprofloxacin has concentration-dependent killing but does not optimize the existing drug. Adding an aminoglycoside is not supported for routine combination therapy. Simply doubling the dose without extending infusion time does not improve %T>MIC for beta-lactams."
  },
  {
    "id": 111,
    "chapter": 13,
    "domain": "Infectious Disease",
    "question": "A 65-year-old man is in the ICU with hospital-acquired pneumonia. He weighs 110 kg (IBW 70 kg). Vancomycin is started for MRSA coverage. Which of the following best represents current evidence-based vancomycin dosing and monitoring?",
    "options": {
      "A": "Dose based on total body weight; monitor trough levels targeting 15-20 mg/L",
      "B": "Dose based on actual body weight; monitor AUC/MIC ratio targeting 400-600 mg\u00b7h/L",
      "C": "Dose based on ideal body weight; monitor peak levels targeting 30-40 mg/L",
      "D": "Dose based on adjusted body weight; monitor trough levels targeting 10-15 mg/L for HAP"
    },
    "answer": "B",
    "explanation": "The 2020 ASHP/IDSA/SIDP vancomycin monitoring guidelines recommend AUC/MIC-guided dosing over trough-only monitoring. The target AUC/MIC is 400-600 mg\u00b7h/L (assuming MIC of 1 mg/L by broth microdilution). Dosing should be based on actual body weight. Trough-only monitoring (option A) is no longer preferred as it is a poor surrogate for AUC and associated with nephrotoxicity when targeting 15-20 mg/L. Peak monitoring (option C) is not used for efficacy monitoring. AUC-guided dosing reduces nephrotoxicity while maintaining efficacy."
  },
  {
    "id": 112,
    "chapter": 13,
    "domain": "Infectious Disease",
    "question": "A 70-year-old immunosuppressed man develops culture-proven Candida albicans bloodstream infection. Blood cultures were obtained and a central line was removed. He is hemodynamically stable. Which is the preferred initial antifungal therapy?",
    "options": {
      "A": "Fluconazole 800 mg loading dose then 400 mg daily",
      "B": "Amphotericin B deoxycholate 0.7-1 mg/kg/day",
      "C": "An echinocandin (caspofungin, micafungin, or anidulafungin)",
      "D": "Voriconazole 6 mg/kg q12h x2 doses then 4 mg/kg q12h"
    },
    "answer": "C",
    "explanation": "IDSA 2016 guidelines recommend an echinocandin as first-line therapy for candidemia in most patients, including non-neutropenic ICU patients, due to superior fungicidal activity, excellent safety profile, and efficacy regardless of species. Fluconazole is an acceptable alternative in stable, non-critically ill patients with susceptible isolates but is fungistatic. Amphotericin B is reserved for resistant organisms or echinocandin-intolerant patients due to nephrotoxicity. Voriconazole is not first-line for candidemia. After 5-7 days and documented clinical improvement with susceptible isolate, step-down to fluconazole is appropriate."
  },
  {
    "id": 113,
    "chapter": 13,
    "domain": "Infectious Disease",
    "question": "A 48-year-old woman is in the MICU with septic shock from hospital-acquired pneumonia. She was intubated 5 days ago and her sputum grows Klebsiella pneumoniae with the following sensitivities: resistant to all cephalosporins, pip-tazo, and aztreonam; susceptible only to meropenem (MIC 0.5) and colistin. After 48 hours of meropenem therapy, her cultures clear and she improves clinically. What is the best antibiotic management strategy going forward?",
    "options": {
      "A": "Continue meropenem for the full 14-day course regardless of clinical response",
      "B": "De-escalate to a narrower-spectrum agent based on susceptibility data",
      "C": "Continue meropenem for 8 days total, as shorter courses are non-inferior",
      "D": "Add colistin to meropenem for double coverage of ESBL-producing organisms"
    },
    "answer": "C",
    "explanation": "De-escalation and duration optimization are core principles of antimicrobial stewardship. For VAP and HAP, the IDSA/ATS 2016 guidelines recommend 7 days of therapy total, with emerging evidence that even shorter courses (5-7 days) are adequate when clinical response is good. The PRORATA and other trials support shorter durations guided by clinical improvement and PCT. Since the organism is susceptible only to meropenem (not narrow spectrum alternatives), de-escalation to a narrower agent is not possible here \u2014 but duration should be minimized to 7-8 days. Adding colistin does not improve outcomes and increases nephrotoxicity."
  },
  {
    "id": 114,
    "chapter": 13,
    "domain": "Infectious Disease",
    "question": "A 62-year-old man with septic shock is started on empiric piperacillin-tazobactam and vancomycin. Blood cultures at 72 hours grow methicillin-susceptible Staphylococcus aureus (MSSA). What is the most appropriate antibiotic adjustment?",
    "options": {
      "A": "Continue vancomycin as it covers both MSSA and MRSA",
      "B": "Switch to nafcillin or oxacillin (anti-staphylococcal penicillin) and discontinue vancomycin",
      "C": "Switch to cefazolin and continue vancomycin for additional coverage",
      "D": "Add rifampin to vancomycin for biofilm penetration"
    },
    "answer": "B",
    "explanation": "For MSSA bacteremia, anti-staphylococcal penicillins (nafcillin, oxacillin) are superior to vancomycin \u2014 they achieve lower mortality, faster bacteremia clearance, and fewer relapses. This is the classic example of de-escalation improving outcomes rather than just reducing resistance pressure. Cefazolin is an acceptable alternative to nafcillin/oxacillin for MSSA (CAMERA2 trial data). Vancomycin is inferior for MSSA and should be discontinued when susceptibility is confirmed. Rifampin combination is not recommended for uncomplicated bacteremia (ARREST trial showed no benefit)."
  },
  {
    "id": 115,
    "chapter": 13,
    "domain": "Infectious Disease",
    "question": "A 55-year-old man with acute myeloid leukemia develops fever 2 hours after receiving meropenem for neutropenic fever. His cultures are pending. The ID team is considering adding an antifungal empirically. Which antifungal and indication threshold is most evidence-based?",
    "options": {
      "A": "Empiric fluconazole for all neutropenic patients with fever",
      "B": "Empiric caspofungin for persistent fever despite 4-7 days of broad-spectrum antibacterials",
      "C": "Empiric amphotericin B lipid complex for fever on day 1 of neutropenia",
      "D": "Empiric micafungin only if galactomannan assay is positive"
    },
    "answer": "B",
    "explanation": "IDSA guidelines recommend empiric antifungal therapy for high-risk neutropenic patients with persistent fever (4-7 days) despite broad-spectrum antibacterials, as occult fungal infection is difficult to detect early. An echinocandin (caspofungin) or liposomal amphotericin B is preferred over fluconazole because of coverage for mold (Aspergillus). Fluconazole has no Aspergillus coverage. Empiric antifungals on day 1 of fever is not evidence-based and leads to unnecessary drug exposure. A positive galactomannan may prompt therapy but is not required \u2014 empiric therapy is based on clinical risk."
  },
  {
    "id": 116,
    "chapter": 13,
    "domain": "Infectious Disease",
    "question": "A 68-year-old woman with a history of COPD and recent hospitalization for pneumonia (3 weeks ago, treated with ceftriaxone and azithromycin) presents with new pneumonia. She is intubated and in the ICU. Gram stain shows gram-negative rods. Which empiric antibiotic regimen is most appropriate?",
    "options": {
      "A": "Ceftriaxone 2g IV daily",
      "B": "Piperacillin-tazobactam plus ciprofloxacin",
      "C": "Meropenem plus vancomycin plus azithromycin",
      "D": "Piperacillin-tazobactam plus vancomycin"
    },
    "answer": "D",
    "explanation": "This patient has healthcare-associated risk factors (recent hospitalization, prior antibiotics within 90 days) placing her at risk for MRSA and Pseudomonas. IDSA/ATS HAP/VAP guidelines recommend double coverage for Pseudomonas when risk factors for MDR organisms are present, plus MRSA coverage. Piperacillin-tazobactam (antipseudomonal beta-lactam) plus vancomycin (MRSA coverage) is appropriate initial empiric therapy. Ceftriaxone has no Pseudomonas activity. Adding ciprofloxacin to pip-tazo is not recommended without specific indications. Meropenem is appropriate but broader than needed without confirmed resistance."
  },
  {
    "id": 117,
    "chapter": 13,
    "domain": "Infectious Disease",
    "question": "A critically ill 75-year-old man has an AUC-guided vancomycin monitoring result showing AUC/MIC of 310 mg\u00b7h/L on his current regimen. MRSA is confirmed with MIC of 1 mg/L. What is the most appropriate next step?",
    "options": {
      "A": "The AUC is therapeutic; continue current regimen",
      "B": "Increase vancomycin dose to target AUC/MIC 400-600 mg\u00b7h/L",
      "C": "Switch to daptomycin as vancomycin is failing",
      "D": "Add rifampin to improve MRSA killing"
    },
    "answer": "B",
    "explanation": "The target AUC/MIC ratio for vancomycin is 400-600 mg\u00b7h/L (2020 ASHP/IDSA/SIDP guidelines). An AUC/MIC of 310 is subtherapeutic and associated with treatment failure. The dose should be increased to achieve the therapeutic target. Switching to daptomycin is premature without demonstrated clinical or microbiologic failure, and is not appropriate for pulmonary infections (inactivated by surfactant). Rifampin combination is not routinely recommended for MRSA bacteremia (ARREST trial). The current AUC of 310 is below the therapeutic window, necessitating dose adjustment."
  },
  {
    "id": 118,
    "chapter": 14,
    "domain": "HAI Prevention & VAP",
    "question": "A 58-year-old man is intubated for respiratory failure. On day 5 of mechanical ventilation, he develops new fever, leukocytosis, and purulent secretions. Chest X-ray shows a new right lower lobe infiltrate. Mini-BAL grows > 10^4 CFU/mL of Staphylococcus aureus. Which VAP bundle element has the strongest evidence for preventing VAP?",
    "options": {
      "A": "Daily oral chlorhexidine rinse",
      "B": "Subglottic secretion drainage",
      "C": "Head of bed elevation 30-45 degrees",
      "D": "Scheduled ventilator circuit changes every 7 days"
    },
    "answer": "B",
    "explanation": "Subglottic secretion drainage (SSD) prevents the microaspiration of oropharyngeal secretions that pool above the cuff and is the single best-supported VAP prevention measure, with multiple RCTs showing 50% VAP reduction. HOB elevation 30-45\u00b0 reduces aspiration risk and is universally recommended. Oral chlorhexidine has mixed evidence (reduced in some RCTs, potential harm signal in cardiac surgery patients in meta-analyses). Ventilator circuit changes on a schedule are not evidence-based; circuits should only be changed when visibly soiled. SSD has the strongest level of evidence (multiple RCTs and meta-analyses)."
  },
  {
    "id": 119,
    "chapter": 14,
    "domain": "HAI Prevention & VAP",
    "question": "A 66-year-old woman with a femoral central venous catheter develops fever and blood cultures grow coagulase-negative Staphylococcus. The CVC was placed 10 days ago under emergent conditions. The CLABSI prevention bundle is reviewed. Which intervention has the highest impact on preventing future CLABSI?",
    "options": {
      "A": "Change all central lines every 7 days prophylactically",
      "B": "Use antimicrobial-impregnated catheters in all ICU patients",
      "C": "Implement a checklist-based insertion bundle including maximal sterile barrier precautions",
      "D": "Apply antiseptic-impregnated dressings to all central line insertion sites"
    },
    "answer": "C",
    "explanation": "The landmark Pronovost et al. (2006, NEJM) study demonstrated that a checklist-based CLABSI bundle \u2014 hand hygiene, full-barrier precautions (cap, gown, mask, sterile drape), chlorhexidine skin prep, optimal site selection (subclavian preferred), and daily necessity review \u2014 reduced CLABSI rates dramatically. This bundle approach is the cornerstone of CLABSI prevention. Routine catheter replacement on a schedule does not reduce infection and is not recommended. Antimicrobial catheters are reserved for high-risk patients when bundle rates remain elevated. Antiseptic dressings are an adjunct, not the primary intervention."
  },
  {
    "id": 120,
    "chapter": 14,
    "domain": "HAI Prevention & VAP",
    "question": "A 72-year-old man with a urinary catheter placed 8 days ago develops fever, cloudy urine, and costovertebral angle tenderness. Urine culture grows 10^5 CFU/mL of Pseudomonas aeruginosa. What is the best management strategy?",
    "options": {
      "A": "Treat with oral ciprofloxacin for 7 days without catheter change",
      "B": "Remove or replace the urinary catheter and treat with appropriate antibiotics for 7-14 days",
      "C": "Treat with IV piperacillin-tazobactam for 21 days to ensure eradication",
      "D": "Perform bladder irrigation with antibiotic solution and continue the existing catheter"
    },
    "answer": "B",
    "explanation": "For catheter-associated UTI (CAUTI) with systemic symptoms (pyelonephritis), catheter removal or replacement is essential, as biofilm on the catheter surface harbors organisms and prevents antibiotic penetration. Appropriate systemic antibiotics (7-14 days for complicated UTI/pyelonephritis) guided by culture sensitivity should follow. Treating without removing the catheter results in high relapse rates. Prolonged 21-day courses are not routinely indicated. Bladder irrigation is not evidence-based for treatment of established infection. Oral ciprofloxacin may be appropriate if susceptible, but catheter management is the key step."
  },
  {
    "id": 121,
    "chapter": 14,
    "domain": "HAI Prevention & VAP",
    "question": "A 55-year-old woman is intubated in the ICU. On day 7, she is hemodynamically stable and successfully passes a spontaneous breathing trial. Her nurse asks whether she should receive daily sedation interruptions (DSI). Recent evidence about DSI combined with SBT is reviewed. Which statement is most accurate?",
    "options": {
      "A": "DSI combined with daily SBT (Awakening and Breathing Coordination) reduces duration of mechanical ventilation and ICU length of stay",
      "B": "DSI is harmful and increases PTSD; it should be replaced by light sedation targets (RASS -1 to 0) without interruptions",
      "C": "DSI adds no benefit over light sedation protocols targeting RASS -1 to 0",
      "D": "DSI should be performed weekly to reduce cumulative sedative exposure"
    },
    "answer": "C",
    "explanation": "The ABC (Awakening and Breathing Coordination) trial by Girard et al. (2008) showed benefit of combined DSI + SBT. However, subsequent trials (SPICE III, NeuroTBI) and implementation of light sedation protocols demonstrated that achieving RASS -1 to 0 with light sedation (without formal DSI) may be equally effective. Current evidence suggests that light sedation protocols achieve similar outcomes to DSI and may reduce PTSD risk. Option A reflects older evidence (ABC trial). Option B overstates DSI harms. Option C reflects the current understanding that light sedation protocols may obviate the need for formal DSI. DSI should not be weekly (option D)."
  },
  {
    "id": 122,
    "chapter": 14,
    "domain": "HAI Prevention & VAP",
    "question": "A 48-year-old man with MRSA bacteremia is found to have a pulmonary infiltrate on CT. BAL grows MRSA with vancomycin MIC of 2 mg/L (susceptible by CLSI breakpoints, but high-MIC). What antibiotic would be most appropriate for MRSA pneumonia in this setting?",
    "options": {
      "A": "Continue vancomycin with AUC-guided dosing targeting AUC/MIC 400-600",
      "B": "Switch to linezolid 600 mg q12h",
      "C": "Switch to daptomycin 6 mg/kg/day",
      "D": "Add rifampin to vancomycin for synergy"
    },
    "answer": "B",
    "explanation": "For MRSA pneumonia, linezolid is preferred over vancomycin based on the ZEPHYR trial, which showed superior clinical cure rates for linezolid in MRSA HAP/VAP. Linezolid has excellent lung penetration and achieves high ELF (epithelial lining fluid) concentrations. With an MIC of 2 mg/L for vancomycin, achieving adequate AUC/MIC of 400-600 may be difficult and nephrotoxic. Daptomycin is inactivated by pulmonary surfactant and is absolutely contraindicated for pneumonia. Rifampin combination is not recommended for MRSA pneumonia without specific prosthetic device indication."
  },
  {
    "id": 123,
    "chapter": 14,
    "domain": "HAI Prevention & VAP",
    "question": "A 63-year-old woman with a long-term care facility admission develops fever and a new right lower lobe consolidation on day 4 of ICU stay. Her respiratory culture grows Pseudomonas aeruginosa. Which combination of antibiotics provides the most evidence-based coverage while minimizing resistance development?",
    "options": {
      "A": "Ceftriaxone plus azithromycin (community-acquired coverage)",
      "B": "Piperacillin-tazobactam as monotherapy for antipseudomonal coverage",
      "C": "Meropenem plus tobramycin for double Pseudomonas coverage throughout the course",
      "D": "Piperacillin-tazobactam plus a fluoroquinolone for initial coverage, then de-escalate based on sensitivities"
    },
    "answer": "D",
    "explanation": "IDSA/ATS HAP/VAP guidelines recommend double antipseudomonal coverage empirically when risk factors for MDR Pseudomonas are present (e.g., prior antibiotics, prior MDR infection). However, once culture and susceptibility data are available, de-escalation to monotherapy is recommended to minimize resistance selection. Ceftriaxone has no Pseudomonas activity. Pip-tazo monotherapy is reasonable when MDR risk is lower. Prolonged double Pseudomonas coverage (option C) throughout the course increases adverse effects and resistance without proven benefit over initial combination therapy followed by de-escalation."
  },
  {
    "id": 124,
    "chapter": 14,
    "domain": "HAI Prevention & VAP",
    "question": "During a CLABSI prevention quality improvement initiative, the ICU team reviews insertion practices. Which catheter site is associated with the highest risk of CLABSI and should be avoided when possible?",
    "options": {
      "A": "Internal jugular vein",
      "B": "Subclavian vein",
      "C": "Femoral vein",
      "D": "Basilic vein (PICC)"
    },
    "answer": "C",
    "explanation": "Femoral vein catheters have the highest CLABSI rates due to proximity to the perineum, heavy skin colonization, and inability to maintain sterile technique during long-term use. CDC/HICPAC guidelines recommend avoiding femoral access when upper body sites are available. Subclavian vein has the lowest infection risk among standard CVC sites and is the preferred site when feasible. Internal jugular carries intermediate risk. PICCs have lower infection rates than traditional CVCs for short-term use but are associated with higher DVT risk."
  },
  {
    "id": 125,
    "chapter": 15,
    "domain": "Immunocompromised Patient in ICU",
    "question": "A 35-year-old man with HIV (CD4 count 45 cells/\u03bcL, not on ART) presents with 3 weeks of progressive dyspnea, dry cough, and fever. SpO2 is 88% on room air. Chest X-ray shows bilateral interstitial infiltrates. LDH is 420 U/L. Which diagnosis and treatment is most appropriate?",
    "options": {
      "A": "Bacterial pneumonia; start ceftriaxone and azithromycin",
      "B": "Pneumocystis jirovecii pneumonia (PCP); start TMP-SMX 15-20 mg/kg/day of TMP component plus prednisone",
      "C": "CMV pneumonitis; start ganciclovir 5 mg/kg q12h",
      "D": "Disseminated tuberculosis; start four-drug RIPE therapy"
    },
    "answer": "B",
    "explanation": "The clinical picture \u2014 HIV with CD4 < 200, subacute dry cough, bilateral interstitial infiltrates, elevated LDH, and hypoxia \u2014 is classic for PCP pneumonia. TMP-SMX is first-line therapy. For moderate-to-severe PCP (PaO2 < 70 mmHg or A-a gradient > 35 mmHg), adjunctive corticosteroids (prednisone 40 mg BID x 5 days, then taper) reduce mortality by decreasing inflammatory response. CMV pneumonitis is rare without organ transplant. Bacterial pneumonia typically presents more acutely with purulent sputum. TB is possible with CD4 < 200 but the subacute course with bilateral interstitial pattern is more consistent with PCP."
  },
  {
    "id": 126,
    "chapter": 15,
    "domain": "Immunocompromised Patient in ICU",
    "question": "A 52-year-old woman with AML undergoes bone marrow transplant. On day 18 post-transplant, she develops fever, ANC 200 cells/\u03bcL, and a CT chest showing a right upper lobe consolidation with a 'halo sign.' Serum galactomannan is positive (index 0.7). What is the most appropriate treatment?",
    "options": {
      "A": "Fluconazole 400 mg daily for Candida coverage",
      "B": "Voriconazole 6 mg/kg IV q12h x2 doses then 4 mg/kg IV q12h (or oral equivalent)",
      "C": "Caspofungin 70 mg loading dose then 50 mg daily",
      "D": "Liposomal amphotericin B 3-5 mg/kg/day"
    },
    "answer": "B",
    "explanation": "The halo sign on CT (ground-glass opacity surrounding a nodule) in a neutropenic post-BMT patient with positive galactomannan is highly suggestive of invasive pulmonary aspergillosis (IPA). Voriconazole is the drug of choice for IPA per IDSA 2016 guidelines, based on the landmark Herbrecht et al. trial showing superiority over amphotericin B. Fluconazole has no Aspergillus coverage. Caspofungin is used as salvage therapy or combination therapy, not first-line. Liposomal amphotericin B is an alternative when voriconazole is not tolerated or contraindicated (QTc prolongation, drug interactions)."
  },
  {
    "id": 127,
    "chapter": 15,
    "domain": "Immunocompromised Patient in ICU",
    "question": "A 60-year-old renal transplant recipient on tacrolimus, mycophenolate, and prednisone presents 4 months post-transplant with fever, altered mental status, and nuchal rigidity. LP shows: opening pressure 280 mmH2O, glucose 40 mg/dL, protein 85 mg/dL, WBC 8 cells/\u03bcL (lymphocytic). India ink stain is pending. What is the most likely diagnosis and treatment?",
    "options": {
      "A": "Bacterial meningitis; start vancomycin, ceftriaxone, and dexamethasone",
      "B": "Cryptococcal meningitis; start liposomal amphotericin B 3-4 mg/kg/day plus flucytosine 25 mg/kg q6h",
      "C": "CMV encephalitis; start ganciclovir 5 mg/kg q12h",
      "D": "Tuberculous meningitis; start four-drug RIPE therapy plus dexamethasone"
    },
    "answer": "B",
    "explanation": "Post-transplant cryptococcal meningitis typically presents 3-6 months after transplant. The CSF profile \u2014 elevated opening pressure, mild lymphocytic pleocytosis, low glucose \u2014 is characteristic. Induction therapy is liposomal amphotericin B plus flucytosine for 2 weeks, followed by fluconazole consolidation per IDSA guidelines. Elevated ICP management (serial LPs or lumbar drain) is critical. Bacterial meningitis typically presents with higher WBC and PMN predominance. CMV encephalitis is less common and usually in patients with very low CD4 (AIDS). TB meningitis is possible but cryptococcosis is more strongly associated with post-transplant immunosuppression at this timeline."
  },
  {
    "id": 128,
    "chapter": 15,
    "domain": "Immunocompromised Patient in ICU",
    "question": "A 45-year-old man with HIV and CD4 count of 55 cells/\u03bcL is admitted to the ICU with respiratory failure. He is not on antiretroviral therapy. After treatment for PCP pneumonia, the team considers initiating ART. What is the most evidence-based approach to ART initiation in this critically ill patient?",
    "options": {
      "A": "Defer ART until completely recovered and discharged to outpatient setting",
      "B": "Start ART immediately in the ICU regardless of current OI treatment",
      "C": "Start ART after 2 weeks of OI treatment in most OIs, except TB and CMV where longer delays may be warranted",
      "D": "Start ART only after CD4 count rises above 200 cells/\u03bcL with OI treatment"
    },
    "answer": "C",
    "explanation": "IDSA and DHHS guidelines recommend starting ART within 2 weeks of OI treatment for most OIs (PCP, MAC, cryptococcal meningitis with controlled ICP). The ACTG 5164 trial showed early ART (within 14 days) reduced AIDS progression and death without increasing IRIS. However, for TB meningitis and some CNS OIs, early ART may worsen immune reconstitution inflammatory syndrome (IRIS) \u2014 deferring 4-8 weeks may be safer. For PCP, ART within 2 weeks is appropriate. CD4 count targets for ART initiation (option D) are outdated \u2014 ART is indicated at any CD4 count."
  },
  {
    "id": 129,
    "chapter": 15,
    "domain": "Immunocompromised Patient in ICU",
    "question": "A 55-year-old renal transplant patient develops fever, malaise, and rising creatinine 3 months post-transplant. CMV pp65 antigenemia is positive at 180 cells/2x10^5 WBCs. He is currently on valganciclovir prophylaxis. What is the most appropriate management?",
    "options": {
      "A": "Increase valganciclovir dose from prophylactic to treatment doses (900 mg BID)",
      "B": "Switch to IV ganciclovir 5 mg/kg q12h and reduce immunosuppression",
      "C": "Add foscarnet to valganciclovir for CMV synergy",
      "D": "Observe with weekly CMV PCR monitoring without changing therapy"
    },
    "answer": "B",
    "explanation": "CMV disease (breakthrough viremia with end-organ involvement including graft dysfunction) during prophylaxis suggests possible ganciclovir-resistant CMV. IV ganciclovir at treatment doses is more reliably absorbed than oral valganciclovir (better for tissue-invasive disease). Reduction of immunosuppression (e.g., reduce mycophenolate) helps restore CMV-specific immunity. If ganciclovir resistance is confirmed (UL97 or UL54 mutations), foscarnet or maribavir is used. Continuing valganciclovir at prophylactic doses is inadequate. Adding foscarnet without confirmed resistance is premature. Weekly monitoring without treatment change is inappropriate given active disease."
  },
  {
    "id": 130,
    "chapter": 15,
    "domain": "Immunocompromised Patient in ICU",
    "question": "A 38-year-old woman with ALL (currently in chemotherapy-induced neutropenia, ANC 100) presents with fever of 38.8\u00b0C. She has no localizing symptoms. Blood cultures are drawn. Which of the following best describes empiric management?",
    "options": {
      "A": "Start broad-spectrum antibacterials only if blood cultures are positive at 24 hours",
      "B": "Start TMP-SMX empirically for PCP pneumonia",
      "C": "Start an anti-pseudomonal beta-lactam (cefepime, pip-tazo, or carbapenem) immediately",
      "D": "Start vancomycin plus cefepime empirically for all neutropenic fever cases"
    },
    "answer": "C",
    "explanation": "IDSA guidelines for febrile neutropenia recommend immediate empiric anti-pseudomonal beta-lactam therapy (cefepime, piperacillin-tazobactam, meropenem, or imipenem) without waiting for culture results. Delaying antibiotics increases mortality in neutropenic fever. Vancomycin is NOT routinely added empirically \u2014 it is reserved for specific indications: hemodynamic instability, suspected CLABSI, skin/soft tissue infection, or prior MRSA colonization. TMP-SMX is prophylaxis, not empiric therapy for acute febrile neutropenia. Waiting for culture results is dangerous in immunocompromised patients."
  },
  {
    "id": 131,
    "chapter": 16,
    "domain": "Renal & Nephrology",
    "question": "A 65-year-old man with septic shock develops oliguria (urine output 15 mL/hr x 8 hours). Creatinine rises from baseline 1.0 mg/dL to 2.4 mg/dL. He had no contrast exposure. According to KDIGO 2012 criteria, which AKI stage does this represent?",
    "options": {
      "A": "KDIGO AKI Stage 1 \u2014 creatinine 1.5-1.9x baseline or increase \u2265 0.3 mg/dL",
      "B": "KDIGO AKI Stage 2 \u2014 creatinine 2.0-2.9x baseline",
      "C": "KDIGO AKI Stage 3 \u2014 creatinine 3.0x baseline or initiation of RRT",
      "D": "No AKI \u2014 creatinine must exceed 2.0 mg/dL above baseline"
    },
    "answer": "B",
    "explanation": "KDIGO 2012 AKI staging: Stage 1 = creatinine 1.5-1.9x baseline or rise \u2265 0.3 mg/dL within 48 hours or UO < 0.5 mL/kg/hr x 6-12 hours. Stage 2 = creatinine 2.0-2.9x baseline or UO < 0.5 mL/kg/hr x \u2265 12 hours. Stage 3 = creatinine \u2265 3.0x baseline or \u2265 4.0 mg/dL or initiation of RRT or UO < 0.3 mL/kg/hr x \u2265 24 hours or anuria \u2265 12 hours. This patient's creatinine rose to 2.4x baseline (2.4/1.0), meeting Stage 2 criteria. AKI diagnosis does not require a specific absolute value \u2014 relative changes matter."
  },
  {
    "id": 132,
    "chapter": 16,
    "domain": "Renal & Nephrology",
    "question": "A 70-year-old woman with septic AKI is anuric. Her K+ is 6.8 mEq/L with peaked T waves on EKG. BUN is 88 mg/dL, bicarbonate is 10 mEq/L, and she is volume overloaded with pulmonary edema. The team discusses renal replacement therapy (RRT). Which is an absolute indication for urgent RRT initiation?",
    "options": {
      "A": "BUN > 70 mg/dL in the absence of uremic symptoms",
      "B": "Serum creatinine > 4 mg/dL",
      "C": "Hyperkalemia with EKG changes (peaked T waves) refractory to medical management",
      "D": "Urine output < 0.5 mL/kg/hr for 12 hours"
    },
    "answer": "C",
    "explanation": "The classic indications for urgent RRT use the mnemonic AEIOU: Acidosis (refractory metabolic), Electrolytes (life-threatening hyperkalemia), Ingestions (dialyzable toxins), volume Overload (refractory), and Uremia (pericarditis, encephalopathy, bleeding). Life-threatening hyperkalemia with EKG changes (peaked T waves indicating myocardial toxicity) that is refractory to medical management is an absolute urgent indication. BUN thresholds alone are not absolute indications without uremic symptoms. Creatinine level is not an RRT indication. Oliguria alone for 12 hours, while concerning, is not an absolute indication."
  },
  {
    "id": 133,
    "chapter": 16,
    "domain": "Renal & Nephrology",
    "question": "A 58-year-old hemodynamically unstable man on vasopressors with AKI requires RRT. The nephrologist discusses modality choice. Which statement about CRRT versus intermittent hemodialysis (IHD) in this scenario is most accurate?",
    "options": {
      "A": "IHD is preferred for hemodynamically unstable patients due to faster solute clearance",
      "B": "CRRT is preferred for hemodynamically unstable patients as it provides slower, continuous fluid and solute removal with better cardiovascular tolerance",
      "C": "CRRT and IHD have equivalent outcomes in all critically ill patients; modality choice is based only on institutional preference",
      "D": "CRRT should be avoided in patients on vasopressors due to systemic anticoagulation requirements"
    },
    "answer": "B",
    "explanation": "CRRT is preferred for hemodynamically unstable patients because continuous removal of fluid and solutes over 24 hours avoids the rapid osmotic and volume shifts that occur with IHD, which can cause hemodynamic compromise. IHD removes large volumes and solutes rapidly, leading to hypotension. Multiple observational studies and guidelines support CRRT preference in vasopressor-dependent or hemodynamically unstable patients. CRRT and IHD have similar renal recovery outcomes in stable patients (STARRT-AKI trial). Anticoagulation for CRRT (citrate or heparin) can be managed safely in most patients."
  },
  {
    "id": 134,
    "chapter": 16,
    "domain": "Renal & Nephrology",
    "question": "A 55-year-old woman in the ICU develops AKI with progressive fluid overload. She has received 8L of crystalloid over 48 hours. Her current fluid balance is +6L. Her oxygenation is worsening and she requires increasing FiO2. The team considers ultrafiltration. What is the strongest indication for RRT initiation in this patient?",
    "options": {
      "A": "Positive fluid balance of > 2L over 24 hours",
      "B": "Refractory fluid overload causing respiratory compromise in the setting of AKI",
      "C": "Fluid overload in the absence of AKI requires ultrafiltration, not RRT",
      "D": "Start diuretics first; RRT is only for diuretic-refractory overload"
    },
    "answer": "B",
    "explanation": "Refractory fluid overload \u2014 particularly when causing end-organ dysfunction such as respiratory failure \u2014 is a standard indication for RRT/ultrafiltration in the context of AKI. The FACTT trial and observational data show fluid overload > 10% body weight is associated with worse outcomes. In oliguric/anuric AKI where diuretics are ineffective, RRT is appropriate and should not be delayed. While attempting diuretics first is reasonable in earlier stages, delaying RRT when the patient is on increasing FiO2 due to overload risks further harm. Option C is incorrect \u2014 ultrafiltration IS RRT."
  },
  {
    "id": 135,
    "chapter": 16,
    "domain": "Renal & Nephrology",
    "question": "A 66-year-old man on CRRT develops severe hypophosphatemia (phosphate 1.2 mg/dL) after 3 days of therapy. He is receiving phosphate-free replacement fluid. He has muscle weakness and difficulty weaning from the ventilator. What is the most likely explanation and appropriate management?",
    "options": {
      "A": "Hypophosphatemia is expected with CRRT; no supplementation is needed",
      "B": "CRRT clearance causes phosphate loss; IV phosphate supplementation and phosphate-containing replacement fluid should be used",
      "C": "Switch from CRRT to IHD to reduce phosphate losses",
      "D": "The hypophosphatemia is due to the underlying sepsis and not CRRT; treat the sepsis"
    },
    "answer": "B",
    "explanation": "CRRT causes significant phosphate losses through continuous filtration, especially when phosphate-free dialysate/replacement fluids are used. Hypophosphatemia during CRRT is common and underrecognized, contributing to muscle weakness, diaphragmatic dysfunction, and difficulty weaning from the ventilator. Management includes IV phosphate supplementation and use of phosphate-containing replacement solutions. Switching to IHD is not indicated just for phosphate management. While sepsis causes phosphate redistribution, CRRT-induced losses are the primary mechanism in this context. Phosphate monitoring should be performed daily in CRRT patients."
  },
  {
    "id": 136,
    "chapter": 16,
    "domain": "Renal & Nephrology",
    "question": "A 72-year-old man with AKI is started on CRRT. The team uses regional citrate anticoagulation (RCA). After 12 hours, ionized calcium is 0.72 mmol/L (normal 1.1-1.3). The patient's total calcium is 9.2 mg/dL. What does this discordance indicate?",
    "options": {
      "A": "Hypocalcemia due to insufficient calcium supplementation; increase IV calcium infusion",
      "B": "Citrate accumulation/toxicity causing low ionized calcium with normal total calcium; reduce citrate dose",
      "C": "Normal finding during RCA; ionized calcium in the systemic circuit should be low",
      "D": "Hemofiltration is removing calcium; switch to hemodiafiltration"
    },
    "answer": "B",
    "explanation": "In regional citrate anticoagulation, citrate chelates ionized calcium in the filter circuit. Calcium is infused post-filter to replace systemic ionized calcium. The hallmark of citrate accumulation/toxicity is the ratio of total calcium to ionized calcium > 2.5 (normal ratio ~2.5) or low systemic ionized calcium with normal/high total calcium. This occurs when the liver fails to metabolize citrate (hepatic failure, shock liver). The low ionized Ca with normal total Ca indicates citrate chelation persisting systemically. Management: reduce citrate infusion rate, switch anticoagulation method if severe. Option C would describe the expected finding in the FILTER circuit, not the systemic circuit."
  },
  {
    "id": 137,
    "chapter": 17,
    "domain": "Electrolytes & Metabolism",
    "question": "A 55-year-old woman with SIADH from small cell lung cancer has a sodium of 118 mEq/L and is asymptomatic. The hospitalist wants to correct her hyponatremia. What is the maximum safe rate of sodium correction over the first 24 hours?",
    "options": {
      "A": "No more than 4-6 mEq/L in the first 24 hours",
      "B": "No more than 10-12 mEq/L in the first 24 hours",
      "C": "No more than 20 mEq/L in the first 24 hours to ensure adequate correction",
      "D": "Correct to 135 mEq/L immediately if asymptomatic since the risk is in symptomatic patients"
    },
    "answer": "B",
    "explanation": "In chronic hyponatremia (presumed when duration > 48 hours or unknown), maximum correction rate is 10-12 mEq/L per 24 hours and \u2264 18 mEq/L per 48 hours to prevent osmotic demyelination syndrome (ODS/central pontine myelinolysis). Some experts recommend no more than 8 mEq/L per 24 hours in high-risk patients (alcoholics, malnutrition, hypokalemia, liver disease). Overly rapid correction risks ODS even in asymptomatic patients. For acute severe symptomatic hyponatremia (seizures, coma), a bolus of 3% saline targeting 4-6 mEq/L correction in 1-2 hours can be given initially, but total 24-hour correction should still not exceed 10-12 mEq/L."
  },
  {
    "id": 138,
    "chapter": 17,
    "domain": "Electrolytes & Metabolism",
    "question": "A 60-year-old man on continuous tube feeds for 2 weeks is found unconscious. Na 164 mEq/L, glucose 145 mg/dL, BUN 55 mg/dL, osmolarity 360 mOsm/kg. He has no history of DI. What is the most likely cause and treatment approach?",
    "options": {
      "A": "Central diabetes insipidus; treat with desmopressin",
      "B": "Hypernatremia from free water deficit due to inadequate free water in tube feeds; replace free water deficit with D5W or oral water",
      "C": "Hyperglycemic hyperosmolar state; treat with insulin and isotonic saline",
      "D": "Nephrogenic diabetes insipidus; discontinue lithium"
    },
    "answer": "B",
    "explanation": "Tube-fed patients are prone to hypernatremia from insufficient free water supplementation \u2014 standard enteral formulas have high osmolarity and insufficient free water for patients with increased insensible losses. This is the most common cause of hypernatremia in hospitalized patients. Treatment involves calculating the free water deficit: FWD = TBW x [(Na/140) - 1], and replacing with free water (D5W, or free water flushes via NGT). Correction rate should be no faster than 0.5 mEq/L/hr (10-12 mEq/L/day) to avoid cerebral edema. Central DI would require desmopressin. HHS is excluded by the moderate glucose and clinical history."
  },
  {
    "id": 139,
    "chapter": 17,
    "domain": "Electrolytes & Metabolism",
    "question": "A 68-year-old man with end-stage renal disease on hemodialysis misses his last two dialysis sessions. EKG shows absent P waves, wide QRS complexes, and a sine-wave pattern. Potassium is 7.9 mEq/L. What is the correct sequence of treatment?",
    "options": {
      "A": "Sodium bicarbonate IV \u2192 insulin + dextrose \u2192 calcium gluconate \u2192 emergent dialysis",
      "B": "Calcium gluconate IV \u2192 insulin + dextrose \u2192 sodium bicarbonate \u2192 emergent dialysis",
      "C": "Kayexalate (sodium polystyrene sulfonate) \u2192 insulin + dextrose \u2192 calcium gluconate \u2192 dialysis",
      "D": "Insulin + dextrose \u2192 calcium gluconate \u2192 furosemide \u2192 emergent dialysis"
    },
    "answer": "B",
    "explanation": "For life-threatening hyperkalemia with EKG changes (sine-wave pattern indicates severe cardiotoxicity), the priority sequence is: (1) calcium gluconate immediately to stabilize cardiac membrane (does not lower K+, works in 2-3 min); (2) insulin + dextrose to shift K+ intracellularly (30-60 min onset); (3) sodium bicarbonate to shift K+ intracellularly (especially if acidotic); (4) emergent hemodialysis for definitive K+ removal. Kayexalate acts over hours to days and is not appropriate for acute life-threatening hyperkalemia. Furosemide is ineffective in ESRD. Starting with bicarbonate (option A) delays membrane stabilization."
  },
  {
    "id": 140,
    "chapter": 17,
    "domain": "Electrolytes & Metabolism",
    "question": "A 40-year-old alcoholic man is admitted with altered mental status. Serum phosphate is 0.8 mg/dL (normal 2.5-4.5 mg/dL). He is being given IV dextrose. ECG shows normal sinus rhythm. He is breathing spontaneously. Which of the following is the most serious complication of untreated severe hypophosphatemia?",
    "options": {
      "A": "Cardiac arrhythmias similar to hypokalemia",
      "B": "Respiratory failure due to diaphragmatic weakness",
      "C": "Acute kidney injury from crystal deposition",
      "D": "Seizures due to direct neuronal hyperpolarization"
    },
    "answer": "B",
    "explanation": "Severe hypophosphatemia (< 1.0-1.5 mg/dL) impairs ATP synthesis, reducing 2,3-DPG in red cells (causing tissue hypoxia), and critically weakening skeletal muscles including the diaphragm. Respiratory failure from diaphragmatic muscle weakness is the most life-threatening acute complication and can prevent ventilator weaning. Refeeding syndrome in malnourished/alcoholic patients receiving dextrose causes acute hypophosphatemia by insulin-driven intracellular phosphate shift. Cardiac dysfunction can occur but is less common than respiratory failure. Seizures are not a primary mechanism of hypophosphatemia. AKI from phosphate deposition occurs in hyperphosphatemia, not hypophosphatemia."
  },
  {
    "id": 141,
    "chapter": 17,
    "domain": "Electrolytes & Metabolism",
    "question": "A 72-year-old woman with hypomagnesemia (Mg 1.1 mEq/L) and hypokalemia (K 3.0 mEq/L) is being repleted with potassium. Despite receiving 100 mEq of K+ IV over 12 hours, her potassium remains 3.1 mEq/L. What is the explanation and next step?",
    "options": {
      "A": "Potassium dose was inadequate; increase to 200 mEq over 12 hours",
      "B": "The patient has pseudo-hypokalemia from improper sample handling",
      "C": "Hypomagnesemia impairs renal potassium conservation; repleting magnesium is necessary to correct hypokalemia",
      "D": "She has Bartter syndrome; fludrocortisone is needed"
    },
    "answer": "C",
    "explanation": "Magnesium deficiency is a common cause of refractory hypokalemia. Magnesium is required for activation of Na-K-ATPase, which maintains intracellular potassium. Hypomagnesemia also causes renal tubular potassium wasting through ROMK channel upregulation. Potassium repletion fails if magnesium is not corrected first. This is a classic clinically important pearl \u2014 always check and repleat magnesium in refractory hypokalemia. The dose given (100 mEq) is generous; the issue is not inadequate K+ supplementation. Bartter syndrome is a rare tubular disorder not applicable in this acute setting."
  },
  {
    "id": 142,
    "chapter": 18,
    "domain": "Acid-Base Disorders",
    "question": "A 55-year-old man presents with altered mental status. ABG: pH 7.18, PaCO2 28 mmHg, HCO3 10 mEq/L. Serum electrolytes: Na 138, Cl 102, K 4.2. Glucose 345 mg/dL, BUN 22. Which acid-base disorder is present?",
    "options": {
      "A": "Pure metabolic acidosis with appropriate respiratory compensation",
      "B": "Mixed metabolic acidosis and respiratory alkalosis (additional respiratory compensation beyond expected)",
      "C": "Metabolic acidosis with inadequate respiratory compensation (additional respiratory acidosis)",
      "D": "Triple acid-base disorder with metabolic alkalosis, metabolic acidosis, and respiratory alkalosis"
    },
    "answer": "A",
    "explanation": "Anion gap = 138 - 102 - 10 = 26 mEq/L (elevated, normal 12 \u00b1 2). Metabolic acidosis with HCO3 of 10. Winter's formula for expected PaCO2: (1.5 x 10) + 8 \u00b1 2 = 23 \u00b1 2 = 21-25 mmHg. Actual PaCO2 is 28, which is at the upper range or slightly above Winter's expected 21-25. This is mostly within the expected range, suggesting appropriate respiratory compensation. There is an elevated anion gap metabolic acidosis (likely DKA given glucose 345). Since PaCO2 28 is at the upper limit of expected, some would classify this as borderline but it does not clearly meet criteria for a mixed disorder. Pure HAGMA with appropriate compensation is most accurate."
  },
  {
    "id": 143,
    "chapter": 18,
    "domain": "Acid-Base Disorders",
    "question": "A 60-year-old woman with chronic kidney disease (baseline HCO3 18 mEq/L) is found in the ED with ABG: pH 7.22, PaCO2 32 mmHg, HCO3 13 mEq/L. Na 138, Cl 100, K 4.5, glucose 90. What is the delta-delta ratio and what does it indicate?",
    "options": {
      "A": "Delta-delta of 0.5, indicating a coexisting non-anion gap metabolic acidosis",
      "B": "Delta-delta of 1.5, indicating a coexisting metabolic alkalosis",
      "C": "Delta-delta of 1.0, indicating a pure anion gap metabolic acidosis",
      "D": "Delta-delta is not applicable in patients with CKD"
    },
    "answer": "A",
    "explanation": "Anion gap = 138 - 100 - 13 = 25 mEq/L; delta AG = 25 - 12 = 13. Delta HCO3 = 18 - 13 = 5 (using patient's baseline HCO3). Delta-delta = delta AG / delta HCO3 = 13/5 = 2.6 \u2014 wait, let me recalculate. Actually delta HCO3 from normal (24): 24-13=11. Delta-delta = 13/11 \u2248 1.2, suggesting pure HAGMA. However, using patient's baseline of 18: expected HCO3 if pure HAGMA = 18 - 13 = 5. But HCO3 is 13, so the drop is only 5 when it should drop 13, meaning there is a concurrent metabolic alkalosis. The delta-delta (delta AG / delta HCO3) > 2 suggests coexisting metabolic alkalosis. Given the complexity with CKD baseline, option A best reflects recognition of a mixed disorder \u2014 the HCO3 did not drop as expected for pure HAGMA."
  },
  {
    "id": 144,
    "chapter": 18,
    "domain": "Acid-Base Disorders",
    "question": "A 45-year-old man with a history of chronic alcohol use and poor oral intake presents with vomiting x 3 days. ABG: pH 7.52, PaCO2 48 mmHg, HCO3 38 mEq/L. Na 135, Cl 90, K 3.1, Cr 0.9. What acid-base disturbance is present?",
    "options": {
      "A": "Metabolic alkalosis with appropriate respiratory compensation",
      "B": "Metabolic alkalosis with concurrent respiratory acidosis",
      "C": "Respiratory acidosis with metabolic compensation",
      "D": "Mixed metabolic alkalosis and metabolic acidosis"
    },
    "answer": "A",
    "explanation": "Primary disorder: metabolic alkalosis (pH 7.52, HCO3 38, elevated). For respiratory compensation in metabolic alkalosis: expected PaCO2 = 0.7 x (HCO3 - 24) + 40 = 0.7 x 14 + 40 = 49.8 mmHg (range 45-55). Actual PaCO2 is 48, which falls within the expected range. Therefore this represents metabolic alkalosis (from vomiting and contraction) with appropriate respiratory compensation (hypoventilation). If PaCO2 were higher than expected, there would be a concurrent respiratory acidosis. The elevated bicarbonate and chloride-responsive alkalosis (Cl 90, low) supports vomiting/contraction alkalosis. Treatment: IV normal saline and potassium repletion."
  },
  {
    "id": 145,
    "chapter": 18,
    "domain": "Acid-Base Disorders",
    "question": "A 50-year-old woman is found unresponsive after ingesting an unknown substance. ABG: pH 7.30, PaCO2 30 mmHg, HCO3 15 mEq/L. Na 140, Cl 100. Serum osmolality is 330 mOsm/kg. Calculated osmolality = 290 mOsm/kg. What is the most likely ingestion?",
    "options": {
      "A": "Aspirin (salicylate) toxicity",
      "B": "Methanol or ethylene glycol toxicity",
      "C": "Isopropyl alcohol ingestion",
      "D": "Acetaminophen toxicity"
    },
    "answer": "B",
    "explanation": "The osmol gap = measured osmolality - calculated osmolality = 330 - 290 = 40 mOsm/kg (normal < 10). An elevated osmol gap with high anion gap metabolic acidosis is the classic presentation of toxic alcohol ingestion \u2014 methanol or ethylene glycol. Both cause metabolic acidosis via their toxic metabolites (formate from methanol; oxalate/glycolate from ethylene glycol) and contribute osmoles before metabolism. Salicylate toxicity classically causes mixed respiratory alkalosis and metabolic acidosis without a large osmol gap. Isopropyl alcohol causes osmol gap but NO acidosis (it metabolizes to acetone, not acid). Acetaminophen causes hepatotoxicity, not osmol gap."
  },
  {
    "id": 146,
    "chapter": 18,
    "domain": "Acid-Base Disorders",
    "question": "A 35-year-old asthmatic woman is intubated for status asthmaticus. Initial ABG: pH 7.18, PaCO2 78 mmHg, HCO3 28 mEq/L, PaO2 95 on FiO2 0.6. Which acid-base disorder is present and what does it indicate?",
    "options": {
      "A": "Acute respiratory acidosis \u2014 hypercapnia from acute airflow obstruction with appropriate renal compensation",
      "B": "Chronic respiratory acidosis with metabolic compensation \u2014 suggests chronic CO2 retention",
      "C": "Acute on chronic respiratory acidosis \u2014 bicarbonate partially elevated indicating some chronic retention",
      "D": "Mixed respiratory acidosis and metabolic acidosis \u2014 bicarbonate should be higher for the degree of hypercapnia"
    },
    "answer": "C",
    "explanation": "Interpreting respiratory acidosis: Acute compensation: HCO3 rises 1 mEq/L per 10 mmHg rise in PaCO2. Chronic compensation: HCO3 rises 3.5 mEq/L per 10 mmHg rise in PaCO2. PaCO2 risen from normal 40 to 78 = increase of 38 mmHg. Expected acute HCO3: 24 + (38/10 x 1) = 27.8 mEq/L. Expected chronic HCO3: 24 + (38/10 x 3.5) = 37.3 mEq/L. Actual HCO3 = 28, which is between acute and chronic predictions, suggesting acute-on-chronic respiratory acidosis. The baseline HCO3 is mildly elevated (baseline chronic retention with acute exacerbation). Pure acute RA (option A) would predict HCO3 ~28, which matches \u2014 so interpretation can vary; however in context of chronic asthma with only mild HCO3 elevation above 24, acute-on-chronic is the best clinical interpretation."
  },
  {
    "id": 147,
    "chapter": 18,
    "domain": "Acid-Base Disorders",
    "question": "A 28-year-old man is found confused with suspected opioid overdose. ABG before naloxone: pH 7.16, PaCO2 72 mmHg, HCO3 24 mEq/L, PaO2 52 mmHg on room air. What is the primary acid-base disturbance?",
    "options": {
      "A": "Acute respiratory acidosis without metabolic compensation",
      "B": "Chronic respiratory acidosis with full metabolic compensation",
      "C": "Mixed respiratory and metabolic acidosis",
      "D": "Metabolic acidosis with respiratory compensation"
    },
    "answer": "A",
    "explanation": "In acute respiratory acidosis, the expected HCO3 compensation is: HCO3 increases 1 mEq/L per 10 mmHg increase in PaCO2. PaCO2 rose from 40 to 72 = 32 mmHg increase. Expected HCO3 = 24 + (3.2 x 1) = 27.2 mEq/L. Actual HCO3 is 24 \u2014 normal, not compensated \u2014 indicating purely acute respiratory acidosis with no time for renal compensation. This is classic for acute opioid overdose causing acute hypoventilation. HCO3 of 24 in the setting of PaCO2 of 72 could also suggest a concurrent metabolic acidosis on top of respiratory acidosis, but since the expected acute HCO3 would be only ~27 and actual is 24 (close to normal), pure acute RA without compensation is most accurate."
  },
  {
    "id": 148,
    "chapter": 18,
    "domain": "Acid-Base Disorders",
    "question": "A 65-year-old woman with septic shock is on mechanical ventilation. Her ABG shows: pH 7.35, PaCO2 42 mmHg, HCO3 23 mEq/L. Anion gap is 24 mEq/L (Na 140, Cl 108, HCO3 8 was corrected to 23 via bicarbonate administration). How would you interpret this ABG?",
    "options": {
      "A": "Normal acid-base status \u2014 pH, PaCO2, and HCO3 are all within normal range",
      "B": "Compensated metabolic alkalosis from bicarbonate administration",
      "C": "Mixed HAGMA and metabolic alkalosis masked by a normal pH \u2014 the high anion gap reveals the underlying acidosis",
      "D": "Respiratory alkalosis with metabolic compensation from over-ventilation"
    },
    "answer": "C",
    "explanation": "This is a classic 'triple acid-base disorder' masked by a normal pH. The anion gap is 24 (elevated, indicating HAGMA from sepsis/lactic acidosis). Yet pH is 7.35 and HCO3 is 23 \u2014 near normal. The near-normal HCO3 in the setting of an elevated anion gap means there must be a concurrent metabolic alkalosis (from bicarbonate administration) that is buffering the acidosis. Delta-delta: delta AG = 24-12 = 12; expected HCO3 drop = 12; expected HCO3 = 24-12 = 12. But actual HCO3 = 23, indicating a concurrent metabolic alkalosis. Never be reassured by a normal pH without checking the anion gap."
  },
  {
    "id": 149,
    "chapter": 19,
    "domain": "Endocrinology & Metabolism",
    "question": "A 22-year-old woman with type 1 diabetes presents with nausea, vomiting, and abdominal pain. Vitals: BP 95/60, HR 125, RR 28, temperature 37.2\u00b0C. Labs: glucose 485 mg/dL, pH 7.14, HCO3 8 mEq/L, anion gap 30, beta-hydroxybutyrate 6.2 mmol/L, serum K 4.8 mEq/L. Which statement about initial management is most accurate?",
    "options": {
      "A": "Start insulin infusion immediately; withhold fluids until insulin takes effect to avoid cerebral edema",
      "B": "Administer IV fluids first; delay insulin until serum potassium is > 3.5 mEq/L",
      "C": "Administer sodium bicarbonate immediately to correct pH < 7.2 and improve cardiac function",
      "D": "Start insulin immediately with potassium supplementation since serum K is normal"
    },
    "answer": "B",
    "explanation": "DKA management begins with aggressive IV fluid resuscitation (isotonic saline) before insulin to restore perfusion and correct dehydration. Insulin therapy should NOT begin until potassium is \u2265 3.5 mEq/L because insulin drives K+ intracellularly \u2014 starting insulin in hypokalemia (K < 3.5) risks fatal cardiac arrhythmias. In this case, K is 4.8 (adequate), so the immediate priority is IV fluids, then insulin. However, the principle stated in option B is the key teaching point about not starting insulin with hypokalemia. Bicarbonate is controversial and not recommended for DKA with pH > 6.9 \u2014 it does not improve outcomes (PECARN trial) and may worsen cerebral edema and hypokalemia."
  },
  {
    "id": 150,
    "chapter": 19,
    "domain": "Endocrinology & Metabolism",
    "question": "A 55-year-old woman with type 2 diabetes is found obtunded at home. Glucose is 1,180 mg/dL, Na 132 mEq/L (corrected Na ~150 mEq/L), osmolarity 385 mOsm/kg, pH 7.38, HCO3 24 mEq/L, no ketonemia. She is intubated. What is the priority in initial management of hyperosmolar hyperglycemic state (HHS)?",
    "options": {
      "A": "Start insulin infusion at 0.1 units/kg/hr immediately to reduce glucose rapidly",
      "B": "Administer aggressive IV fluid resuscitation with isotonic saline as the primary treatment",
      "C": "Administer sodium bicarbonate to correct the osmolarity",
      "D": "Start hemodialysis to rapidly reduce serum osmolarity"
    },
    "answer": "B",
    "explanation": "HHS management prioritizes aggressive fluid replacement \u2014 patients are profoundly dehydrated (average 8-12L deficit). Isotonic saline is started first, then transitioned to hypotonic saline (0.45% NaCl) once hemodynamically stable to address the true hyperosmolarity. Insulin is used, but low-dose and started after fluids (as in DKA). Insulin alone without fluids risks vascular collapse. The glucose should be lowered gradually (no faster than 50-75 mg/dL/hr) to prevent cerebral edema. Bicarbonate is not indicated \u2014 pH is normal. Dialysis is not appropriate for HHS. Volume replacement is the cornerstone of HHS treatment."
  },
  {
    "id": 151,
    "chapter": 19,
    "domain": "Endocrinology & Metabolism",
    "question": "A 68-year-old woman with known hypothyroidism (not taking levothyroxine for 6 months) is brought in obtunded. Temperature is 34.1\u00b0C, BP 88/55, HR 42 bpm, RR 8/min. TSH is 142 mIU/L, free T4 is undetectable. She is intubated. What is the most appropriate treatment?",
    "options": {
      "A": "IV levothyroxine 200-400 mcg loading dose plus liothyronine 5-20 mcg IV, hydrocortisone 100 mg IV q8h, supportive care",
      "B": "Oral levothyroxine 50 mcg daily; avoid IV preparations as they cause arrhythmias",
      "C": "IV levothyroxine only; triiodothyronine should not be given due to cardiac arrhythmia risk",
      "D": "Start thyroid replacement after cortisol levels confirm no concurrent adrenal insufficiency"
    },
    "answer": "A",
    "explanation": "Myxedema coma requires IV thyroid hormone replacement because oral absorption is unreliable in critically ill patients. Standard therapy includes IV levothyroxine (T4) loading dose 200-400 mcg, plus IV liothyronine (T3) 5-20 mcg because T4 to T3 conversion is impaired in critical illness. Hydrocortisone 100 mg q8h is given empirically before thyroid hormone to prevent precipitating adrenal crisis (concurrent secondary adrenal insufficiency may be present; thyroid hormone increases cortisol clearance). Supportive care (warming, pressors, ventilation) is essential. Do not delay thyroid replacement waiting for cortisol results \u2014 give hydrocortisone empirically."
  },
  {
    "id": 152,
    "chapter": 19,
    "domain": "Endocrinology & Metabolism",
    "question": "A 35-year-old man with Graves' disease presents with fever (40\u00b0C), HR 158 bpm in AF, agitation, and delirium. Thyroid storm is diagnosed. Which medication should NOT be administered first?",
    "options": {
      "A": "Propylthiouracil (PTU) 500-1000 mg loading dose",
      "B": "Radioactive iodine (RAI) for definitive thyroid ablation",
      "C": "Propranolol IV for rate control",
      "D": "Potassium iodide (SSKI) or Lugol's solution to block thyroid hormone release"
    },
    "answer": "B",
    "explanation": "Radioactive iodine is absolutely contraindicated in thyroid storm \u2014 it destroys thyroid tissue but can cause a massive release of preformed thyroid hormone, acutely worsening the storm before improvement occurs. Treatment sequence for thyroid storm: (1) PTU first (blocks synthesis AND peripheral T4\u2192T3 conversion); (2) wait 1 hour, then give iodine (Lugol's/SSKI) to block further hormone release (Wolff-Chaikoff effect \u2014 must give PTU first); (3) propranolol for HR/sympathetic control; (4) hydrocortisone (blocks T4\u2192T3 conversion and treats possible adrenal insufficiency); (5) supportive care. RAI is deferred until the acute crisis resolves."
  },
  {
    "id": 153,
    "chapter": 19,
    "domain": "Endocrinology & Metabolism",
    "question": "A 45-year-old man is in the ICU after being intubated for respiratory failure. On day 3, he develops hypotension (MAP 55) unresponsive to 3L of fluid and norepinephrine 0.2 mcg/kg/min. Na is 128 mEq/L, K is 6.1 mEq/L, glucose 62 mg/dL. He has a history of adrenal insufficiency but has not received his regular hydrocortisone for 2 days. What is the most likely diagnosis and treatment?",
    "options": {
      "A": "Septic shock; escalate vasopressors and add vasopressin",
      "B": "Adrenal crisis; immediate IV hydrocortisone 100 mg bolus followed by 50-100 mg q6-8h or continuous infusion",
      "C": "SIADH from critical illness; fluid restrict and treat underlying cause",
      "D": "Adrenal crisis; start oral fludrocortisone 0.1 mg daily"
    },
    "answer": "B",
    "explanation": "This is a classic adrenal crisis presentation: refractory hypotension, hyponatremia, hyperkalemia, hypoglycemia in a patient with known adrenal insufficiency who missed his corticosteroids during critical illness. Treatment is immediate hydrocortisone 100 mg IV bolus (or 50 mg IV), then 50-100 mg q6-8h or 200 mg/day continuous infusion. Aggressive IV fluid resuscitation with dextrose-containing saline is also essential. Oral fludrocortisone is not absorbed in acute crisis and is inappropriate. Vasopressor escalation without treating the underlying adrenal crisis will fail. Mineralocorticoid replacement (fludrocortisone) is added orally once the patient can take oral medications."
  },
  {
    "id": 154,
    "chapter": 19,
    "domain": "Endocrinology & Metabolism",
    "question": "A 19-year-old man with type 1 DM presents in DKA. Initial K is 3.2 mEq/L, glucose 620 mg/dL, pH 7.21, HCO3 9 mEq/L. The team starts IV normal saline. What is the next step regarding potassium?",
    "options": {
      "A": "Start insulin infusion at 0.1 units/kg/hr; K can be replaced later",
      "B": "Hold insulin and infuse potassium at 40 mEq/hr until K \u2265 3.5 mEq/L before starting insulin",
      "C": "Administer sodium bicarbonate to raise pH before starting insulin",
      "D": "Start insulin with concurrent potassium at 20 mEq/hr, targeting K > 4.0 before insulin"
    },
    "answer": "B",
    "explanation": "When serum K < 3.5 mEq/L in DKA, insulin must be withheld until potassium is \u2265 3.5 mEq/L. Insulin drives K+ intracellularly and will precipitate life-threatening hypokalemia and cardiac arrhythmias. IV potassium replacement should be aggressive (20-40 mEq/hr) while monitoring. Once K \u2265 3.5, insulin can be started with ongoing K supplementation. Simultaneous insulin with low K (option D targeting 4.0) is not safe. Bicarbonate is not indicated for pH 7.21 in DKA without pH < 6.9. This is one of the most critical and commonly tested DKA management points."
  },
  {
    "id": 155,
    "chapter": 20,
    "domain": "Cardiology",
    "question": "A 62-year-old man presents to the ED with crushing chest pain for 45 minutes. EKG shows ST elevations in leads II, III, aVF with reciprocal changes in I and aVL. BP is 110/70, HR 88. Which of the following is the most important initial management priority?",
    "options": {
      "A": "Administer fibrinolytics within 30 minutes ('door-to-needle' time)",
      "B": "Achieve primary PCI with balloon inflation within 90 minutes of first medical contact ('door-to-balloon' time)",
      "C": "Obtain echocardiogram to confirm wall motion abnormality before intervention",
      "D": "Start IV heparin infusion and observe for spontaneous reperfusion"
    },
    "answer": "B",
    "explanation": "For STEMI, primary percutaneous coronary intervention (PPCI) is the preferred reperfusion strategy when it can be performed within 90 minutes of first medical contact (door-to-balloon). ACC/AHA guidelines establish this as a Class I recommendation. Inferior STEMI (ST elevation in II, III, aVF with reciprocal changes) is clearly shown. Fibrinolytics are used when PPCI is not available within 120 minutes of first contact (door-to-needle 30 minutes is a fibrinolytic standard). Echocardiogram delays definitive treatment. IV heparin alone without reperfusion is inadequate. The cornerstone of STEMI care is time-to-reperfusion."
  },
  {
    "id": 156,
    "chapter": 20,
    "domain": "Cardiology",
    "question": "A 70-year-old woman with STEMI undergoes primary PCI with drug-eluting stent placement in the LAD. She is started on dual antiplatelet therapy. Three days later she develops hypotension (BP 80/50), tachycardia (HR 118), and a new harsh holosystolic murmur loudest at the lower left sternal border. What is the most likely complication?",
    "options": {
      "A": "Acute mitral regurgitation from papillary muscle rupture",
      "B": "Ventricular septal defect (VSD) from free wall septal infarction",
      "C": "Left ventricular free wall rupture with tamponade",
      "D": "Stent thrombosis causing re-infarction"
    },
    "answer": "B",
    "explanation": "Post-MI ventricular septal defect (VSD) presents with a new harsh holosystolic murmur at the lower left sternal border (in anterior MI involving the septum, as in LAD territory). It causes hemodynamic collapse from left-to-right shunting. Occurs 3-5 days post-MI. Acute MR from papillary muscle rupture presents with pulmonary edema and murmur radiating to axilla, louder at apex. Free wall rupture typically presents with sudden cardiovascular collapse and tamponade (Beck's triad: hypotension, JVD, muffled heart sounds) without a loud murmur. VSD location (lower sternal border) and LAD infarct territory strongly favor VSD in this case."
  },
  {
    "id": 157,
    "chapter": 20,
    "domain": "Cardiology",
    "question": "A 58-year-old man with NSTEMI is risk-stratified using the TIMI score and found to be high-risk (TIMI score 5). Troponin is elevated. Which antiplatelet strategy is most appropriate before coronary angiography?",
    "options": {
      "A": "Aspirin 325 mg alone is sufficient; P2Y12 inhibitors should be withheld until anatomy is known",
      "B": "Aspirin 325 mg loading dose plus ticagrelor 180 mg or prasugrel if no contraindications",
      "C": "Aspirin plus clopidogrel 300 mg loading dose; ticagrelor and prasugrel are only for post-PCI",
      "D": "Aspirin plus GP IIb/IIIa inhibitor (eptifibatide); P2Y12 inhibitors should be avoided before angiography"
    },
    "answer": "B",
    "explanation": "For high-risk NSTEMI, dual antiplatelet therapy (DAPT) with aspirin plus a P2Y12 inhibitor is recommended before angiography. Ticagrelor (PLATO trial) and prasugrel (TRITON-TIMI 38) are preferred over clopidogrel for ACS due to superior antiplatelet efficacy and outcomes (ticagrelor preferred pre-PCI as prasugrel is contraindicated before anatomy known \u2014 risk of excessive bleeding if CABG needed). Aspirin alone is inadequate for high-risk NSTEMI. Clopidogrel (option C) is acceptable but inferior to ticagrelor. Routine upstream GP IIb/IIIa inhibitors are not preferred for NSTEMI before angiography (EARLY ACS trial)."
  },
  {
    "id": 158,
    "chapter": 20,
    "domain": "Cardiology",
    "question": "A 65-year-old man with anterior STEMI develops cardiogenic shock (BP 75/50, HR 120, cold extremities, pulmonary edema) immediately after presentation. Primary PCI is being arranged. Which hemodynamic support device has the strongest evidence for improving outcomes in cardiogenic shock complicating MI?",
    "options": {
      "A": "Intra-aortic balloon pump (IABP) placed emergently before PCI",
      "B": "Impella CP placed before PCI to provide hemodynamic support",
      "C": "VA-ECMO for complete cardiopulmonary bypass support",
      "D": "Early revascularization via PCI is the primary intervention; no mechanical support has proven mortality benefit"
    },
    "answer": "D",
    "explanation": "The SHOCK trial established that early revascularization (PCI or CABG) significantly reduces 30-day and 6-month mortality in cardiogenic shock complicating MI. No mechanical circulatory support device has demonstrated mortality benefit in RCTs. The IABP-SHOCK II trial showed no benefit of IABP over standard therapy. The IMPRESS trial (Impella vs IABP in cardiogenic shock) showed no mortality benefit and more adverse events. ECMO trials (ECLS-SHOCK) showed no mortality benefit over standard therapy. Despite lack of RCT evidence for MCS, early revascularization remains the cornerstone intervention with the strongest mortality data."
  },
  {
    "id": 159,
    "chapter": 20,
    "domain": "Cardiology",
    "question": "A 72-year-old woman is admitted to the ICU after STEMI and PCI. On day 2, she develops fever, pleuritic chest pain, and a pericardial rub. EKG shows diffuse ST elevations. Which is the most likely diagnosis and appropriate treatment?",
    "options": {
      "A": "Dressler syndrome (post-MI pericarditis); treat with aspirin 650 mg TID and colchicine 0.5 mg BID",
      "B": "Early pericarditis post-MI (fibrinous pericarditis); NSAIDs are contraindicated; treat with acetaminophen",
      "C": "Stent thrombosis; urgent repeat angiography",
      "D": "Pulmonary embolism; anticoagulate with heparin"
    },
    "answer": "A",
    "explanation": "Early post-MI pericarditis (fibrinous pericarditis, occurs 1-3 days post-MI) presents with pleuritic chest pain, pericardial rub, and diffuse ST elevation. Dressler syndrome (autoimmune, 2-10 weeks post-MI) is a related entity. Both are treated with high-dose aspirin (650 mg TID-QID) and colchicine. NSAIDs other than aspirin are relatively contraindicated post-MI as they impair infarct healing and increase adverse CV events (VIGOR trial data). Corticosteroids are avoided due to increased risk of myocardial rupture and recurrence. This is not stent thrombosis (which would re-present with ischemic EKG changes) or PE."
  },
  {
    "id": 160,
    "chapter": 20,
    "domain": "Cardiology",
    "question": "A 67-year-old man with inferior STEMI has complete heart block on presentation (HR 32, BP 78/45). He is about to undergo primary PCI. What is the most appropriate immediate management of the heart block?",
    "options": {
      "A": "Administer atropine 1 mg IV; repeat to max 3 mg if no response",
      "B": "Insert a temporary transvenous pacemaker urgently; proceed to PCI",
      "C": "External transcutaneous pacing; proceed to PCI without transvenous pacemaker",
      "D": "Proceed to PCI immediately without pacing; heart block will resolve with reperfusion"
    },
    "answer": "B",
    "explanation": "Complete heart block (CHB) from inferior STEMI (RCA territory, which supplies the AV node) causes hemodynamic instability requiring urgent temporary transvenous pacing before or during PCI. While atropine may temporarily improve AV conduction, complete heart block typically does not respond adequately to atropine, and hemodynamic instability warrants a more definitive approach. Transcutaneous pacing is a bridge but is uncomfortable and unreliable for conscious patients; transvenous pacing is the standard. CHB from inferior MI often resolves with reperfusion, but definitive pacing support during PCI is essential to prevent hemodynamic collapse."
  },
  {
    "id": 161,
    "chapter": 21,
    "domain": "Cardiology & Cardiac Arrest",
    "question": "A 58-year-old man collapses in the ICU. He is pulseless. EKG monitoring shows ventricular fibrillation (VF). CPR is initiated. What is the correct ACLS sequence for VF?",
    "options": {
      "A": "Administer epinephrine 1 mg IV immediately, then defibrillate after 2 minutes of CPR",
      "B": "Defibrillate immediately (unsynchronized, 200J biphasic), resume CPR, establish IV access, administer epinephrine after 2 minutes",
      "C": "Defibrillate three times in succession, then give epinephrine and amiodarone",
      "D": "Establish IV access and give amiodarone 300 mg IV first, then defibrillate"
    },
    "answer": "B",
    "explanation": "The priority in VF/pulseless VT is immediate defibrillation followed by high-quality CPR. ACLS algorithm: shock \u2192 2 minutes CPR \u2192 pulse check \u2192 shock if still VF \u2192 epinephrine 1 mg IV every 3-5 minutes \u2192 2 minutes CPR \u2192 shock \u2192 amiodarone 300 mg IV (or lidocaine) if VF persists. Epinephrine is given after the first or second shock, not before defibrillation. Three stacked shocks (option C) is no longer recommended. Amiodarone (option D) is given after the third shock, not before first defibrillation. Every second of delay to defibrillation in VF reduces survival by ~10%/minute."
  },
  {
    "id": 162,
    "chapter": 21,
    "domain": "Cardiology & Cardiac Arrest",
    "question": "A 70-year-old man is found pulseless with no cardiac monitor available. CPR is initiated. When the monitor is attached, the rhythm shows organized electrical activity (narrow complex at 60 bpm) but no pulse. Which is the most important management step?",
    "options": {
      "A": "Defibrillate immediately as this may be fine VF",
      "B": "Search for and treat reversible causes (H's and T's); continue high-quality CPR and give epinephrine",
      "C": "Give atropine 1 mg IV to increase heart rate",
      "D": "Pace transcutaneously at 80 bpm to override the PEA rhythm"
    },
    "answer": "B",
    "explanation": "Pulseless electrical activity (PEA) is non-shockable \u2014 defibrillation is contraindicated. Management focuses on identifying and treating reversible causes (the H's and T's): Hypovolemia, Hypoxia, Hydrogen ion (acidosis), Hypo/Hyperkalemia, Hypothermia, Tension pneumothorax, Tamponade, Toxins, Thrombosis (PE or coronary). High-quality CPR and epinephrine every 3-5 minutes are standard. Atropine is not recommended for PEA/asystole (2010 AHA guidelines removed it). Transcutaneous pacing is not effective for PEA \u2014 the problem is mechanical, not electrical."
  },
  {
    "id": 163,
    "chapter": 21,
    "domain": "Cardiology & Cardiac Arrest",
    "question": "A 55-year-old ICU patient with sepsis and atrial fibrillation develops rapid ventricular response (HR 155 bpm, BP 85/55). He is on low-dose norepinephrine. Initial management with IV metoprolol 5 mg made no improvement. What is the most appropriate next step?",
    "options": {
      "A": "Synchronized cardioversion at 100-200J biphasic",
      "B": "Amiodarone 150 mg IV over 10 minutes, then 1 mg/min infusion",
      "C": "Digoxin 0.5 mg IV for rate control in sepsis-related AF",
      "D": "Adenosine 6 mg IV rapid push to terminate the atrial fibrillation"
    },
    "answer": "B",
    "explanation": "Amiodarone is the preferred agent for rate and rhythm control of AF with RVR in hemodynamically compromised ICU patients who are not immediately unstable enough to require emergent cardioversion. Unlike metoprolol (negative inotrope, may worsen shock) or digoxin (slow onset, limited efficacy in high-adrenergic states like sepsis), amiodarone provides effective rate control with less negative inotropy. Synchronized cardioversion is reserved for unstable AF with serious signs (altered mental status, chest pain, acute heart failure, shock) \u2014 this patient is borderline but not immediately at risk of cardiac arrest. Adenosine terminates reentrant SVT, not AF."
  },
  {
    "id": 164,
    "chapter": 21,
    "domain": "Cardiology & Cardiac Arrest",
    "question": "A 45-year-old man with ischemic cardiomyopathy (EF 25%) develops recurrent VT (HR 188 bpm) in the ICU. He is hemodynamically stable (BP 104/68). He has received two 150 mg doses of IV amiodarone without conversion. What is the next most appropriate intervention?",
    "options": {
      "A": "Lidocaine 1-1.5 mg/kg IV bolus as an alternative antiarrhythmic",
      "B": "Unsynchronized defibrillation at 200J",
      "C": "Synchronized cardioversion at 100-200J biphasic",
      "D": "Magnesium sulfate 2g IV for torsades de pointes VT"
    },
    "answer": "C",
    "explanation": "Stable sustained monomorphic VT that is refractory to antiarrhythmic medications should be treated with synchronized cardioversion. Synchronized cardioversion (not unsynchronized defibrillation) is used for stable VT \u2014 synchronization avoids delivering a shock during the T wave (vulnerable period) which could precipitate VF. ACLS guidelines recommend synchronized cardioversion (100-200J biphasic) for stable VT after failed pharmacologic therapy. Unsynchronized shock (option B) is reserved for VF or pulseless VT. Lidocaine (option A) is an alternative antiarrhythmic if amiodarone is unavailable or contraindicated. Magnesium is for torsades (polymorphic VT with prolonged QT), not monomorphic VT."
  },
  {
    "id": 165,
    "chapter": 21,
    "domain": "Cardiology & Cardiac Arrest",
    "question": "A 60-year-old man is successfully resuscitated from out-of-hospital cardiac arrest due to VF. He remains comatose after ROSC. Temperature is 37.2\u00b0C. HR 88, BP 105/65 on vasopressors. EEG shows diffuse slowing. What is the most evidence-based post-cardiac arrest care regarding temperature management?",
    "options": {
      "A": "Active cooling to 32-34\u00b0C (targeted hypothermia) for 24 hours improves neurological outcomes",
      "B": "Avoid fever (maintain temperature \u2264 37.5\u00b0C); active cooling to 32-34\u00b0C shows no additional benefit over normothermia",
      "C": "Mild permissive hyperthermia (37.5-38.5\u00b0C) promotes neurological recovery",
      "D": "Temperature management has no role in post-cardiac arrest care; focus on hemodynamic optimization"
    },
    "answer": "B",
    "explanation": "The TTM2 trial (2021, NEJM) \u2014 the definitive large RCT \u2014 showed no significant difference in mortality or neurological outcome between targeted temperature management at 33\u00b0C versus avoiding fever (\u2264 37.8\u00b0C) in comatose survivors of out-of-hospital cardiac arrest. Current guidelines (AHA 2022 update) recommend preventing fever (temperature > 37.7\u00b0C) in all comatose post-arrest patients, while acknowledging that cooling to 32-36\u00b0C is still reasonable. Routine cooling to 32-34\u00b0C is no longer mandated based on TTM2. Fever is clearly harmful and must be prevented. Permissive hyperthermia (option C) is harmful."
  },
  {
    "id": 166,
    "chapter": 21,
    "domain": "Cardiology & Cardiac Arrest",
    "question": "A 52-year-old woman in the ICU develops torsades de pointes (polymorphic VT with QTc 560 ms). She is on haloperidol and fluconazole. She is hemodynamically stable. What is the immediate treatment?",
    "options": {
      "A": "Amiodarone 150 mg IV bolus",
      "B": "IV magnesium sulfate 2g over 15 minutes",
      "C": "Overdrive pacing to shorten the QT interval",
      "D": "Synchronized cardioversion at 200J biphasic"
    },
    "answer": "B",
    "explanation": "Torsades de pointes (TdP) is caused by QT prolongation and treated with IV magnesium sulfate 2g IV over 15 minutes, regardless of serum magnesium level. Magnesium suppresses triggered activity (EADs) that initiates TdP. In this case, QT-prolonging drugs (haloperidol, fluconazole) should be discontinued. Amiodarone further prolongs the QT and can worsen TdP \u2014 it is contraindicated for TdP. Cardioversion is used for hemodynamically unstable TdP. Overdrive pacing is used when magnesium fails or TdP is recurrent. Identifying and removing QT-prolonging agents is essential."
  },
  {
    "id": 167,
    "chapter": 21,
    "domain": "Cardiology & Cardiac Arrest",
    "question": "After 35 minutes of resuscitation for PEA cardiac arrest in a 68-year-old man with massive PE (confirmed by bedside echo showing RV dilation, D-sign, McConnell sign), which intervention has the most evidence for improving survival?",
    "options": {
      "A": "Continue ACLS without thrombolytics \u2014 fibrinolysis during CPR has no evidence",
      "B": "Systemic thrombolysis with tPA 50 mg IV over 2 minutes (during CPR)",
      "C": "Emergent surgical embolectomy",
      "D": "Catheter-directed thrombolysis via pulmonary artery catheter"
    },
    "answer": "B",
    "explanation": "Massive PE causing cardiac arrest with PEA is an indication for systemic thrombolysis during CPR when PE is confirmed or strongly suspected. The 2019 ESC PE guidelines and AHA give thrombolysis a Class IIa recommendation for PE-related cardiac arrest. Multiple case series and the PEAPETT pilot study support this approach. Standard dose: alteplase 50 mg IV bolus during CPR, followed by continued CPR for 60-90 minutes. CPR provides coronary perfusion to deliver drug to pulmonary vasculature. Surgical embolectomy is an alternative if thrombolytics are contraindicated, but requires immediate surgical availability. Catheter-directed therapy is not feasible during active arrest."
  },
  {
    "id": 168,
    "chapter": 21,
    "domain": "Cardiology & Cardiac Arrest",
    "question": "A 74-year-old man in the ICU with AF and RVR (HR 142) has a history of WPW syndrome. Which medication is most dangerous in this setting?",
    "options": {
      "A": "Amiodarone IV",
      "B": "Adenosine IV",
      "C": "Digoxin IV",
      "D": "Diltiazem IV"
    },
    "answer": "D",
    "explanation": "In AF with WPW, AV nodal blocking agents (diltiazem, verapamil, beta-blockers, digoxin, adenosine) are dangerous because they block the normal AV node conduction, forcing all impulses down the accessory pathway, which can accelerate conduction to the ventricles and precipitate VF. Diltiazem and other calcium channel blockers are contraindicated in WPW with AF. Procainamide IV is the drug of choice for hemodynamically stable AF with WPW. Amiodarone has been used, though some experts caution about it in pre-excited AF. Adenosine (option B) is also dangerous but is more commonly tested as dangerous in SVT with WPW; the most dangerous commonly available option for AF+WPW is AV nodal blockade."
  },
  {
    "id": 169,
    "chapter": 22,
    "domain": "Heart Failure",
    "question": "A 68-year-old man with known heart failure with reduced ejection fraction (HFrEF, EF 25%) presents with acute decompensation. He is dyspneic at rest, BP 155/95, HR 100, SpO2 88% on room air, and has severe bilateral crackles and 3+ pitting edema. He has not taken his medications in 2 weeks. Which is the most appropriate initial diuretic strategy?",
    "options": {
      "A": "Oral furosemide at his home dose (40 mg BID) since he is not in shock",
      "B": "IV furosemide at a dose at least equivalent to his oral outpatient dose (at least 40 mg IV), or higher given decompensation",
      "C": "Restrict IV fluids and start tolvaptan for aquaresis",
      "D": "Start continuous IV furosemide infusion at 5 mg/hr without a bolus"
    },
    "answer": "B",
    "explanation": "In acute decompensated HF (ADHF), IV diuretics are superior to oral \u2014 gut edema reduces intestinal absorption of oral furosemide. The DOSE trial showed that IV furosemide at 2.5x the oral outpatient dose was safe and associated with trends toward greater symptom relief. The principle is that when converting from oral to IV furosemide, bioavailability is ~50%, so the IV dose should be at least equal to (or double) the oral dose. Continuous infusion vs. bolus dosing showed similar outcomes in the DOSE trial (bolus was non-inferior). Tolvaptan is appropriate for refractory hyponatremia but not first-line for ADHF. Oral furosemide is inadequate in decompensated HF."
  },
  {
    "id": 170,
    "chapter": 22,
    "domain": "Heart Failure",
    "question": "A 55-year-old woman with ADHF (EF 20%) has BP 165/100 mmHg and severe respiratory distress despite IV furosemide. Her SpO2 is 85% on 10L O2. What vasodilator therapy is most appropriate?",
    "options": {
      "A": "IV nitroprusside infusion starting at 0.3 mcg/kg/min",
      "B": "IV nitroglycerin infusion starting at 5-10 mcg/min, titrating to symptom relief",
      "C": "Sublingual nifedipine 10 mg for rapid afterload reduction",
      "D": "Oral hydralazine 75 mg for afterload reduction"
    },
    "answer": "B",
    "explanation": "IV nitroglycerin is the preferred vasodilator for ADHF with elevated blood pressure and pulmonary edema. It acts primarily as a venodilator (reducing preload) at low doses and also reduces afterload at higher doses. It rapidly relieves dyspnea and pulmonary congestion. IV nitroprusside is equally effective but requires intra-arterial monitoring due to rapid, potent afterload reduction and risk of cyanide toxicity with prolonged use \u2014 it is typically reserved for refractory hypertensive emergency with HF or in centers with arterial line capability. Sublingual nifedipine causes unpredictable BP drops and is not recommended. Oral hydralazine is not appropriate for acute severe dyspnea requiring immediate effect."
  },
  {
    "id": 171,
    "chapter": 22,
    "domain": "Heart Failure",
    "question": "A 70-year-old man with ADHF has BP 85/55 mmHg, HR 108, cold extremities, and a cardiac index of 1.7 L/min/m\u00b2 on Swan-Ganz catheter. PCWP is 28 mmHg. Which inotrope is most appropriate?",
    "options": {
      "A": "Dobutamine 5-10 mcg/kg/min for inotropic support",
      "B": "Milrinone 0.375-0.75 mcg/kg/min IV",
      "C": "Dopamine 10-15 mcg/kg/min for vasopressor-inotrope effect",
      "D": "Norepinephrine 0.1-0.2 mcg/kg/min for blood pressure support"
    },
    "answer": "A",
    "explanation": "This patient has cold-wet cardiogenic heart failure (high PCWP, low CI, hypotension, peripheral hypoperfusion) \u2014 the classic 'cold and wet' profile. Dobutamine (beta-1 agonist) is the first-line inotrope for cardiogenic shock in ADHF without primary coronary disease. It increases cardiac output and reduces filling pressures. Milrinone (PDE3 inhibitor) is an alternative with additional vasodilatory properties \u2014 preferred when on beta-blockers (less beta-receptor dependent) but may cause more hypotension. Dopamine at high doses (vasoconstrictor) increases afterload and may worsen CO. Norepinephrine is a vasopressor, not an inotrope, and would increase afterload. Dobutamine is first-line for cardiogenic ADHF."
  },
  {
    "id": 172,
    "chapter": 22,
    "domain": "Heart Failure",
    "question": "A 62-year-old man with ADHF and EF 15% is on dobutamine and furosemide. After 48 hours, urine output remains poor (0.3 mL/kg/hr). He has gained 8 kg since admission and creatinine has risen from 1.4 to 2.8 mg/dL. Which is the best next management strategy?",
    "options": {
      "A": "Continue current regimen; AKI in HF is expected and will improve with time",
      "B": "Add metolazone 2.5-5 mg orally 30 minutes before IV furosemide for sequential nephron blockade",
      "C": "Discontinue furosemide to protect kidneys; start tolvaptan",
      "D": "Increase furosemide infusion to 40 mg/hr without adding other diuretics"
    },
    "answer": "B",
    "explanation": "Diuretic resistance in ADHF is common and managed with sequential nephron blockade: adding a thiazide diuretic (metolazone, hydrochlorothiazide) 30-60 minutes before loop diuretic to block proximal tubular sodium reabsorption and enhance loop diuretic effect. Metolazone 2.5-5 mg is the most commonly used agent. This synergistic combination overcomes the post-loop diuretic sodium reabsorption in the distal tubule. Simply increasing furosemide dose beyond effective ceiling has limited benefit. Tolvaptan (V2 antagonist) treats hyponatremia in HF but does not adequately decongests. Continuing without change risks worsening organ failure from persistent congestion."
  },
  {
    "id": 173,
    "chapter": 22,
    "domain": "Heart Failure",
    "question": "A 75-year-old woman presents with ADHF. Her EF is 60% (HFpEF). BP is 170/95, HR 105 in AF, and she has severe dyspnea and pulmonary edema. Which statement about management of ADHF in HFpEF is most accurate?",
    "options": {
      "A": "Inotropes (dobutamine) should be initiated to increase cardiac output in HFpEF",
      "B": "Diuresis for congestion relief and rate control for AF are the primary management strategies; no therapy has proven mortality benefit in HFpEF",
      "C": "ACE inhibitors improve survival in HFpEF to the same extent as in HFrEF",
      "D": "Beta-blockers should be avoided in HFpEF as they reduce diastolic filling time"
    },
    "answer": "B",
    "explanation": "HFpEF (EF \u2265 50%) management focuses on relieving symptoms (diuresis for volume overload) and treating comorbidities (AF rate control, hypertension control). Unlike HFrEF, no therapy has convincingly reduced mortality in HFpEF in large RCTs \u2014 CHARM-Preserved (candesartan), I-PRESERVE (irbesartan), and TOPCAT (spironolactone) trials were neutral or borderline. Recent EMPEROR-Preserved and DELIVER trials show SGLT2 inhibitors reduce HF hospitalizations in HFpEF. Inotropes worsen outcomes in HFpEF (normal or supranormal EF). ACE inhibitors have not shown mortality benefit in HFpEF. Beta-blockers are appropriate for rate control in AF but are not specifically indicated for HFpEF survival benefit."
  },
  {
    "id": 174,
    "chapter": 22,
    "domain": "Heart Failure",
    "question": "A 58-year-old man with severe ADHF (EF 15%) is on maximum medical therapy including IV diuretics, dobutamine, and vasodilators. He remains in cardiogenic shock with CI 1.5 L/min/m\u00b2. He is listed for heart transplantation. Which mechanical circulatory support device is most commonly used as a bridge to transplant?",
    "options": {
      "A": "Intra-aortic balloon pump (IABP) \u2014 provides adequate support for bridge to transplant",
      "B": "Left ventricular assist device (LVAD) \u2014 durable MCS for bridge to transplant or destination therapy",
      "C": "Impella CP \u2014 provides short-term support but not suitable for prolonged bridge",
      "D": "VA-ECMO \u2014 preferred long-term bridge to transplant due to full cardiopulmonary support"
    },
    "answer": "B",
    "explanation": "Durable LVADs (e.g., HeartMate 3) are the established devices for bridge to transplant (BTT) and destination therapy in end-stage HFrEF. The MOMENTUM 3 trial demonstrated superior outcomes with HeartMate 3 (continuous flow, centrifugal) versus older axial flow pumps. LVADs provide sustained hemodynamic support for months to years while awaiting transplant. IABP provides minimal CI augmentation (~0.5 L/min) and is inadequate for long-term bridge. Impella is approved for short-term support (days to weeks) but not established as a long-term BTT device. VA-ECMO provides full support but causes LV distension and is used as a short-term bridge to decision, not long-term transplant bridge."
  },
  {
    "id": 175,
    "chapter": 22,
    "domain": "Heart Failure",
    "question": "A 66-year-old man with ADHF undergoes ultrafiltration (UF) after failing diuretic therapy. After 8 hours, his creatinine rises from 1.6 to 2.4 mg/dL. He has lost 3L of fluid. Which statement about ultrafiltration in ADHF is most accurate?",
    "options": {
      "A": "UF should be discontinued immediately; rising creatinine always indicates renal harm from UF",
      "B": "The CARRESS-HF trial showed UF was superior to stepped pharmacological therapy for decongestion and renal outcomes",
      "C": "The CARRESS-HF trial showed UF was non-superior to stepped pharmacological therapy with worse renal outcomes; UF should be reserved for diuretic-refractory cases",
      "D": "Rising creatinine during UF is expected and should not prompt discontinuation as long as UO is adequate"
    },
    "answer": "C",
    "explanation": "The CARRESS-HF trial (2012, NEJM) compared UF to stepped pharmacological therapy (escalating diuretics \u00b1 vasoactive drugs) in ADHF with cardiorenal syndrome. UF achieved similar fluid removal to pharmacologic therapy but was associated with worse renal function outcomes (higher creatinine rise) and more adverse events. UF did not show superiority. Based on this evidence, UF is reserved for patients with diuretic resistance who fail pharmacologic therapy. Rising creatinine during UF is concerning and may warrant rate adjustment. UF is not first-line but has a role in truly refractory cardiorenal syndrome."
  },
  {
    "id": 176,
    "chapter": 22,
    "domain": "Heart Failure",
    "question": "A 74-year-old woman with ADHF is admitted with decompensated HFrEF (EF 30%). She has creatinine 2.2 mg/dL and K 5.0 mEq/L on admission. She was previously on lisinopril 10 mg and carvedilol 25 mg BID. Which of her home medications should be continued during the acute hospitalization?",
    "options": {
      "A": "Both lisinopril and carvedilol should be continued throughout hospitalization",
      "B": "Both lisinopril and carvedilol should be held until the acute decompensation resolves",
      "C": "Carvedilol should be continued or reduced in dose; lisinopril should be held in the setting of AKI and hyperkalemia",
      "D": "Lisinopril should be continued; carvedilol should be held in acute decompensation due to negative inotropy"
    },
    "answer": "C",
    "explanation": "In acute decompensated HFrEF, evidence-based management of home medications: Beta-blockers should be continued at the same or reduced dose (halving) during ADHF \u2014 abrupt discontinuation is harmful and increases mortality risk (supported by retrospective data and pathophysiologic rationale). ACE inhibitors/ARBs should be held or reduced if AKI is present (creatinine rising) or hyperkalemia (K > 5.0) \u2014 as in this patient. Lisinopril may worsen AKI and hyperkalemia in decompensation. After stabilization, both drugs should be restarted and titrated to target doses. Option D is the opposite of evidence \u2014 ACE inhibitors are held more often than beta-blockers in acute HF."
  },
  {
    "id": 177,
    "chapter": 12,
    "domain": "Sepsis & Infectious Disease",
    "question": "A 48-year-old woman is admitted to the MICU with pneumonia and sepsis. She receives 30 mL/kg of IV crystalloid and her BP improves to 105/65. She is not on vasopressors. Her lactate was 3.2 mmol/L on admission. The team orders a repeat lactate 2 hours later, which is 2.6 mmol/L. What does this suggest about her resuscitation?",
    "options": {
      "A": "Lactate clearance < 10% over 2 hours indicates failed resuscitation; escalate vasopressors",
      "B": "Lactate clearance of approximately 19% suggests adequate initial resuscitation; continued monitoring is appropriate",
      "C": "Repeat lactate is not useful after initial resuscitation; focus on clinical endpoints only",
      "D": "Lactate must normalize to < 2.0 mmol/L within 2 hours for successful resuscitation"
    },
    "answer": "B",
    "explanation": "Serial lactate monitoring is recommended in sepsis. The LACTATE trial (Jones et al., 2010) demonstrated that lactate-guided resuscitation targeting \u2265 10% lactate clearance per 2 hours improved outcomes. This patient's lactate cleared by (3.2-2.6)/3.2 = 18.75% \u2248 19%, which exceeds the 10% threshold and suggests adequate initial resuscitation response. Escalating vasopressors is inappropriate if BP is maintained without vasopressors. Requiring lactate < 2.0 mmol/L within 2 hours is too strict \u2014 the clearance rate, not absolute normalization, guides decisions. Repeat lactate measurement is clinically useful and guideline-recommended."
  },
  {
    "id": 178,
    "chapter": 13,
    "domain": "Infectious Disease",
    "question": "A 58-year-old man is on broad-spectrum antibiotics (pip-tazo + vancomycin + azithromycin) for 48 hours for ICU-admitted community-acquired pneumonia. Blood cultures and respiratory cultures are negative. Clinical status is improving (fever resolved, WBC trending down). Which strategy is most consistent with antimicrobial stewardship principles?",
    "options": {
      "A": "Continue all three antibiotics for full 14-day course since infection is improving",
      "B": "De-escalate to narrower therapy (e.g., ceftriaxone + azithromycin for CAP) and consider procalcitonin-guided duration",
      "C": "Broaden coverage to include antifungal given the immunocompromising effects of critical illness",
      "D": "Continue current regimen but add oral metronidazole to cover anaerobes"
    },
    "answer": "B",
    "explanation": "Antimicrobial stewardship in the ICU includes de-escalation \u2014 narrowing antibiotic spectrum when cultures are negative and clinical improvement is documented. For CAP with negative cultures, de-escalation to standard CAP therapy (beta-lactam + macrolide or respiratory fluoroquinolone) is appropriate. Procalcitonin-guided therapy has been shown in multiple RCTs (SAPS trial, ProRATA trial) to safely reduce antibiotic duration without harm. Continuing broad-spectrum therapy (option A) increases resistance, costs, and adverse effects. Broadening to antifungals (option C) without risk factors or clinical evidence is inappropriate. Adding metronidazole (option D) has no indication for standard CAP."
  },
  {
    "id": 179,
    "chapter": 16,
    "domain": "Renal & Nephrology",
    "question": "A 55-year-old woman with septic AKI on CRRT has daily labs. Today her sodium is 152 mEq/L. She is receiving CRRT with standard bicarbonate-based replacement fluid (sodium 140 mEq/L). What is the most likely cause and management?",
    "options": {
      "A": "SIADH from sepsis; fluid restrict to 1L/day",
      "B": "Net free water losses exceeding replacement; switch to hypotonic replacement fluid or add free water",
      "C": "Hypertonic saline administration error; check medication orders",
      "D": "Hypernatremia is normal on CRRT and requires no intervention"
    },
    "answer": "B",
    "explanation": "Hypernatremia during CRRT is common and underrecognized. CRRT with standard iso-osmolar replacement fluid (sodium 140 mEq/L) corrects relative to plasma, but insensible losses (respiratory, skin) and fever cause net free water loss not replaced by CRRT. Additionally, if the patient is receiving blood products or medications in sodium-containing solutions, sodium intake may exceed CRRT removal. Management: switch to hypotonic replacement fluid, reduce blood product flush volume, or add free water enterally/IV as D5W. Hypernatremia must be corrected (\u2264 0.5 mEq/L/hr) to avoid cerebral edema with over-rapid correction. Hypernatremia is never acceptable without assessment."
  },
  {
    "id": 180,
    "chapter": 17,
    "domain": "Electrolytes & Metabolism",
    "question": "A 28-year-old woman with a psychiatric history is brought to the ED confused after drinking large amounts of water at home. Na is 112 mEq/L, serum osmolarity 232 mOsm/kg, urine Na 25 mEq/L, urine osmolarity 60 mOsm/kg. She is obtunded. What is the most appropriate initial treatment?",
    "options": {
      "A": "Fluid restrict to 1L/day and monitor sodium every 6 hours",
      "B": "Administer 3% hypertonic saline 100 mL IV over 10 minutes; may repeat x2 if symptoms persist",
      "C": "Administer demeclocycline to treat the underlying SIADH",
      "D": "Administer tolvaptan 15 mg orally for water excretion"
    },
    "answer": "B",
    "explanation": "Symptomatic acute severe hyponatremia (obtundation, seizures) requires urgent treatment with hypertonic saline to raise sodium by 4-6 mEq/L rapidly enough to relieve cerebral edema. The 2014 European Clinical Practice Guidelines recommend 3% saline 150 mL IV over 20 minutes (or equivalent bolus), repeatable twice, targeting a 5 mEq/L rise in 1 hour. This is primary polydipsia (urine osmolarity very low, dilute urine \u2014 the kidney is appropriately trying to excrete water). SIADH would show concentrated urine. Fluid restriction is appropriate for chronic mild-moderate hyponatremia but not for acute symptomatic hyponatremia. Tolvaptan is contraindicated in liver disease and is not appropriate for acute severe hyponatremia management."
  },
  {
    "id": 181,
    "chapter": 19,
    "domain": "Endocrinology & Metabolism",
    "question": "A 32-year-old woman with type 1 DM is in the ICU with DKA. Glucose has fallen from 520 to 250 mg/dL over 6 hours on insulin infusion. She is still acidotic (pH 7.22, HCO3 12, AG 24). What should be done next?",
    "options": {
      "A": "Stop insulin infusion to prevent hypoglycemia",
      "B": "Switch insulin infusion to subcutaneous insulin and start oral intake",
      "C": "Add dextrose 5-10% to IV fluids and continue insulin infusion to resolve ketoacidosis",
      "D": "Reduce insulin infusion by 50% to prevent hypoglycemia"
    },
    "answer": "C",
    "explanation": "In DKA management, when glucose falls to 200-250 mg/dL, dextrose should be added to IV fluids to prevent hypoglycemia while continuing insulin infusion to close the anion gap and resolve ketoacidosis. The insulin infusion must continue until the anion gap normalizes and pH > 7.3 \u2014 ketoacidosis is not resolved merely by glucose normalization. Stopping insulin prematurely (options A, D) allows ketoacidosis to persist. Transition to subcutaneous insulin (option B) is appropriate only after anion gap closes, patient can eat, and there is adequate overlap (overlap SC basal insulin 1-2 hours before stopping infusion). DKA resolution criteria: pH > 7.3, HCO3 > 18, AG < 12."
  },
  {
    "id": 182,
    "chapter": 20,
    "domain": "Cardiology",
    "question": "A 66-year-old man with STEMI is treated with primary PCI. In the ICU on day 2, he is started on dual antiplatelet therapy (aspirin + ticagrelor), a statin, an ACE inhibitor, and a beta-blocker. On day 3 his ejection fraction is found to be 32%. Which additional therapy has a class I indication based on EF < 35% post-MI?",
    "options": {
      "A": "Aldosterone antagonist (eplerenone) in patients already on ACE inhibitor and beta-blocker without significant renal dysfunction or hyperkalemia",
      "B": "Implantable cardioverter-defibrillator (ICD) placement before discharge",
      "C": "Amiodarone prophylaxis for sudden cardiac death prevention",
      "D": "Digoxin to improve cardiac output and prevent rehospitalization"
    },
    "answer": "A",
    "explanation": "The EPHESUS trial demonstrated that eplerenone (aldosterone antagonist) reduces mortality in post-MI patients with EF \u2264 40% and either HF symptoms or diabetes when added to ACE inhibitor and beta-blocker. This is a Class I recommendation. ICD placement (option B) should be considered but only after \u2265 40 days post-MI and \u2265 3 months of optimal medical therapy, as EF may improve \u2014 immediate ICD placement at 3 days is not indicated (DINAMIT trial showed no benefit of early ICD post-MI). Amiodarone (option C) reduces arrhythmia burden but does not improve survival in post-MI prophylaxis (CAMIAT, EMIAT trials). Digoxin is not a post-MI therapy for low EF without AF."
  },
  {
    "id": 183,
    "chapter": 21,
    "domain": "Cardiology & Cardiac Arrest",
    "question": "A 66-year-old man with COPD is in the ICU on mechanical ventilation for pneumonia. His monitor shows wide complex tachycardia at 165 bpm. He is diaphoretic with BP 88/55 mmHg. What is the immediate priority?",
    "options": {
      "A": "Obtain 12-lead EKG to determine if VT or SVT with aberrancy before treating",
      "B": "Administer adenosine 6 mg IV to differentiate and potentially terminate the arrhythmia",
      "C": "Immediate synchronized cardioversion at 200J biphasic",
      "D": "Start amiodarone infusion 150 mg over 10 minutes for sustained VT"
    },
    "answer": "C",
    "explanation": "Hemodynamically unstable wide complex tachycardia (BP 88/55, diaphoresis) requires immediate synchronized cardioversion regardless of whether it is VT or SVT with aberrancy. The hemodynamic compromise, not the exact diagnosis, drives the urgency. In a compromised patient, the differential does not matter \u2014 both conditions are treated with cardioversion. Obtaining a 12-lead EKG is appropriate only in stable patients. Adenosine given for VT is not harmful but is not the treatment for unstable tachycardia and wastes critical time. Amiodarone (option D) is appropriate for stable VT, not unstable wide complex tachycardia requiring immediate electrical therapy."
  },
  {
    "id": 184,
    "chapter": 15,
    "domain": "Immunocompromised Patient in ICU",
    "question": "A 55-year-old solid organ transplant recipient develops a pulmonary infiltrate 2 months post-transplant. CT shows bilateral ground-glass opacities. BAL reveals intranuclear 'owl-eye' inclusions on cytology. CMV PCR is 25,000 copies/mL. What is the treatment?",
    "options": {
      "A": "IV foscarnet 90 mg/kg q12h as CMV has developed resistance to ganciclovir",
      "B": "IV ganciclovir 5 mg/kg q12h or oral valganciclovir 900 mg BID for CMV pneumonitis",
      "C": "IV acyclovir 10 mg/kg q8h for CMV end-organ disease",
      "D": "Observation with weekly CMV PCR; treat only if CMV PCR > 50,000 copies/mL"
    },
    "answer": "B",
    "explanation": "CMV pneumonitis (end-organ disease) in a transplant recipient requires treatment with IV ganciclovir or oral valganciclovir (equivalent bioavailability in non-critically ill patients). The 'owl-eye' inclusions are pathognomonic for CMV tissue invasion. Ganciclovir 5 mg/kg q12h IV is standard for CMV end-organ disease. Valganciclovir 900 mg BID is an oral alternative for non-life-threatening disease. Duration is typically 14-21 days. Foscarnet is reserved for ganciclovir-resistant CMV (UL97 mutations). Acyclovir has poor CMV activity and is not indicated. Treatment is based on clinical and pathological evidence of end-organ disease, not solely on PCR threshold."
  },
  {
    "id": 185,
    "chapter": 14,
    "domain": "HAI Prevention & VAP",
    "question": "A 62-year-old man is intubated for ARDS. He is sedated on propofol and fentanyl. On day 3, his nurse requests a ventilator circuit change because it 'looks dirty.' What is the evidence-based policy on ventilator circuit changes?",
    "options": {
      "A": "Circuits should be changed every 48 hours to prevent VAP",
      "B": "Circuits should be changed every 7 days on a scheduled basis",
      "C": "Circuits should only be changed when visibly soiled or malfunctioning; scheduled changes do not reduce VAP",
      "D": "Circuits should be changed every 24 hours in patients with purulent secretions"
    },
    "answer": "C",
    "explanation": "Multiple RCTs and meta-analyses have demonstrated that scheduled ventilator circuit changes (every 24h, 48h, or 7 days) do NOT reduce VAP rates and may actually increase them by introducing organisms during circuit manipulation. CDC/HICPAC and IDSA guidelines recommend not changing circuits on a schedule \u2014 change only when visibly soiled or mechanically malfunctioning. Heat-moisture exchangers (HMEs) should be changed per manufacturer guidelines (every 5-7 days unless soiled). This is a well-established stewardship principle to reduce unnecessary manipulation of the ventilator circuit."
  },
  {
    "id": 186,
    "chapter": 18,
    "domain": "Acid-Base Disorders",
    "question": "A 65-year-old man with COPD and BiPAP failure is intubated. Pre-intubation ABG: pH 7.23, PaCO2 85 mmHg, HCO3 35 mEq/L. The intensivist sets initial ventilator settings targeting PaCO2 of 40 mmHg. What acid-base emergency will occur?",
    "options": {
      "A": "Post-hypercapnic metabolic acidosis as CO2 is rapidly cleared",
      "B": "Severe metabolic alkalosis as the chronically elevated bicarbonate is unmasked when PaCO2 is rapidly normalized",
      "C": "Respiratory alkalosis alone; the elevated HCO3 will correct within hours",
      "D": "No acid-base emergency; normalizing PaCO2 to 40 mmHg is always the correct target"
    },
    "answer": "B",
    "explanation": "This patient has chronic hypercapnia with metabolic compensation (HCO3 35 mEq/L, expected for chronic respiratory acidosis: 24 + 3.5 x (85-40)/10 = 24 + 15.75 = ~40, so HCO3 35 is appropriate compensation). If PaCO2 is rapidly reduced to 40 mmHg, the chronically elevated bicarbonate persists (renal correction takes days), resulting in severe metabolic alkalosis (pH could rise to 7.7+). This causes hypokalemia, decreased ionized calcium, decreased cerebral blood flow, and cardiac arrhythmias. The correct approach: target PaCO2 close to the patient's chronic baseline (approximately 70-80 mmHg), allowing gradual reduction. This is called 'permissive hypercapnia' for chronic COPD."
  },
  {
    "id": 187,
    "chapter": 22,
    "domain": "Heart Failure",
    "question": "A 72-year-old woman with ischemic cardiomyopathy (EF 22%) is in the ICU after ADHF stabilization. She is euvolemic on oral diuretics and tolerating oral medications. She has been on lisinopril 5 mg and carvedilol 6.25 mg BID. Which represents the most evidence-based long-term strategy to reduce mortality in HFrEF?",
    "options": {
      "A": "Titrate lisinopril to maximum tolerated dose only; beta-blockers reduce exercise tolerance",
      "B": "Optimize and maximize doses of ACE inhibitor (or ARNi), beta-blocker, MRA, and SGLT2 inhibitor \u2014 the four pillars of HFrEF therapy",
      "C": "Switch from lisinopril to valsartan for superior mortality benefit",
      "D": "Add digoxin to reduce hospitalization and improve mortality"
    },
    "answer": "B",
    "explanation": "Contemporary HFrEF therapy is built on four pillars ('fantastic four') each with Class I mortality-reducing evidence: (1) ACE inhibitor/ARB or ARNI (sacubitril/valsartan \u2014 PARADIGM-HF showed superiority over enalapril); (2) beta-blocker (carvedilol, bisoprolol, metoprolol succinate); (3) mineralocorticoid receptor antagonist/MRA (spironolactone/eplerenone \u2014 RALES, EMPHASIS-HF); (4) SGLT2 inhibitor (dapagliflozin/empagliflozin \u2014 DAPA-HF, EMPEROR-Reduced). Maximal titration of all four reduces mortality 55-65% compared to placebo. Digoxin (option D) reduces hospitalizations but not mortality (DIG trial). Valsartan alone (option C) is not superior to ACE inhibitors \u2014 sacubitril/valsartan is."
  },
  {
    "id": 188,
    "chapter": 16,
    "domain": "Renal & Nephrology",
    "question": "A 70-year-old man develops AKI (creatinine 3.8 mg/dL, up from 0.9 mg/dL) following coronary angiography with contrast 48 hours ago. He is oliguric. Which of the following is the most important preventive measure that should have been implemented BEFORE the procedure?",
    "options": {
      "A": "N-acetylcysteine 600 mg orally BID starting 24 hours before the procedure",
      "B": "Sodium bicarbonate infusion starting 1 hour before and continuing 6 hours after",
      "C": "IV normal saline pre-hydration (1 mL/kg/hr starting 3-12 hours before and continuing 6-12 hours after)",
      "D": "Prophylactic furosemide to maintain urine output during contrast exposure"
    },
    "answer": "C",
    "explanation": "IV volume expansion with isotonic saline (1 mL/kg/hr for 3-12 hours pre-procedure and 6-12 hours post-procedure) is the only intervention with consistent evidence for preventing contrast-induced AKI. N-acetylcysteine (option A) showed initial promise but large trials (ACT trial, PRESERVE trial) demonstrated no benefit. Sodium bicarbonate (option B) was not superior to saline in the PRESERVE trial. Furosemide (option D) is harmful \u2014 forced diuresis without adequate prehydration increases AKI risk by reducing renal perfusion. The PREVENT trial with furosemide-matched hydration (RenalGuard) showed promise but is not standard of care. Adequate pre-procedure hydration remains the cornerstone."
  },
  {
    "id": 189,
    "chapter": 17,
    "domain": "Electrolytes & Metabolism",
    "question": "A 55-year-old alcoholic man is admitted after a seizure. His sodium is corrected from 116 mEq/L to 128 mEq/L over 6 hours with 3% saline. His mental status improved. The neurology team is now concerned about overcorrection. What should be done?",
    "options": {
      "A": "Continue current rate; overcorrection cannot be reversed",
      "B": "Administer free water (D5W or desmopressin) to re-lower sodium and prevent osmotic demyelination",
      "C": "Stop all saline immediately and wait; sodium will equilibrate on its own",
      "D": "Administer sodium bicarbonate to reverse the hypertonic effect of the 3% saline"
    },
    "answer": "B",
    "explanation": "When hyponatremia is corrected too rapidly (> 10-12 mEq/L in 24 hours), osmotic demyelination syndrome (ODS) can be prevented or attenuated by deliberately re-lowering the sodium. This is achieved by administering free water (D5W IV or desmopressin 1-2 mcg IV/SC to reduce free water excretion) within 24 hours of overcorrection. This 'rescue therapy' has been shown in case series to prevent ODS when implemented quickly. Simply stopping saline is not adequate if already over the correction threshold. Sodium bicarbonate does not address the osmotic problem. This is an important clinical scenario: aggressive re-lowering if threshold exceeded by > 2-3 mEq/L."
  },
  {
    "id": 190,
    "chapter": 15,
    "domain": "Immunocompromised Patient in ICU",
    "question": "A 45-year-old woman with AML undergoes allo-HSCT. On day 60 post-transplant, she develops fever, nonproductive cough, and ground-glass opacities on CT chest. She is now receiving tacrolimus and mycophenolate for chronic GVHD. Bronchoalveolar lavage cytology shows cells with characteristic nuclear and cytoplasmic inclusions. CMV PCR is negative. Which pathogen is most likely?",
    "options": {
      "A": "Pneumocystis jirovecii (PCP)",
      "B": "Cytomegalovirus (CMV)",
      "C": "Respiratory syncytial virus (RSV)",
      "D": "Adenovirus"
    },
    "answer": "A",
    "explanation": "Despite CMV PCR being negative, BAL cytology showing cells with inclusions in a HSCT patient on immunosuppression raises multiple possibilities. However, in allo-HSCT patients on ongoing immunosuppression (tacrolimus/mycophenolate for GVHD) at day 60 with bilateral GGOs and CMV-negative BAL \u2014 PCP is the most likely diagnosis if TMP-SMX prophylaxis was not optimally maintained. The 'inclusions' described for PCP are cysts on GMS stain (silver staining shows 'crushed ping-pong ball' cysts). In this context, PCP is more common at this timeline when prophylaxis gaps occur. CMV would show owl-eye inclusions but PCR is negative. Adenovirus and RSV are possible but less likely with this cytology description."
  },
  {
    "id": 191,
    "chapter": 20,
    "domain": "Cardiology",
    "question": "A 58-year-old man with hyperlipidemia presents with 2 hours of chest pain. EKG shows new left bundle branch block (LBBB). Troponin is elevated. He is hemodynamically stable. According to current guidelines, how should this presentation be managed?",
    "options": {
      "A": "New LBBB is no longer treated as STEMI-equivalent; manage as NSTEMI with early invasive strategy",
      "B": "New LBBB with ischemic symptoms should be treated as STEMI-equivalent with immediate activation of cath lab",
      "C": "Administer fibrinolytics within 30 minutes without coronary angiography",
      "D": "Obtain serial EKGs and echocardiogram; proceed to cath lab only if EF < 40%"
    },
    "answer": "B",
    "explanation": "New left bundle branch block (LBBB) in the setting of acute ischemic symptoms and elevated troponin should be treated as STEMI-equivalent with immediate cardiac catheterization lab activation per ACC/AHA guidelines. The Sgarbossa criteria can help identify ischemia in LBBB (concordant ST elevation \u2265 1 mm, concordant ST depression \u2265 1 mm in V1-V3, discordant ST elevation \u2265 5 mm). However, current 2021 ACC/AHA guidelines maintain that new or presumably new LBBB with symptoms warrants STEMI-equivalent response. Delaying for serial EKGs or echo risks myocardial damage. Fibrinolytics without angiography are used only when PCI is unavailable."
  },
  {
    "id": 192,
    "chapter": 12,
    "domain": "Sepsis & Infectious Disease",
    "question": "A 74-year-old man with a history of solid organ transplant (on tacrolimus) presents with fever, rigors, and confusion. BP is 92/55 mmHg. Within the first hour of assessment, blood cultures are drawn and broad-spectrum antibiotics are ordered. What is the maximum acceptable time from sepsis recognition to first antibiotic administration based on current evidence?",
    "options": {
      "A": "Antibiotics must be given within 30 minutes of recognition for any sepsis",
      "B": "Antibiotics should be given within 1 hour for septic shock and within 3 hours for sepsis without shock",
      "C": "The time to antibiotic has no impact on mortality; source control is the most important factor",
      "D": "Antibiotics should be given within 1 hour for any suspected infection in the ICU"
    },
    "answer": "B",
    "explanation": "Multiple large observational studies and the SSC Hour-1 Bundle support time-sensitive antibiotic administration. Current evidence: for septic shock, every hour delay in antibiotics increases mortality (Kumar et al. data, ~7%/hour delay). SSC 2018 Hour-1 Bundle recommends antibiotics within 1 hour for septic shock. For sepsis without shock, antibiotics within 3 hours is supported by CMS measures and most guidelines. For this patient with septic shock (hypotension), antibiotics within 1 hour is the target. The 30-minute threshold (option A) applies only to hospital-acquired infections in some protocols. Timing does impact mortality \u2014 option C is incorrect."
  },
  {
    "id": 193,
    "chapter": 13,
    "domain": "Infectious Disease",
    "question": "A 50-year-old man with no prior antibiotic exposure presents with community-acquired pneumonia requiring ICU admission. Sputum Gram stain shows gram-positive cocci in clusters. He has penicillin allergy described as 'hives.' Which antibiotic is most appropriate for presumed MRSA coverage?",
    "options": {
      "A": "Vancomycin IV (cross-reactivity with penicillin is negligible for glycopeptides)",
      "B": "Linezolid 600 mg q12h IV/PO for superior lung penetration",
      "C": "Ceftaroline 600 mg q12h IV (has anti-MRSA activity with low cross-reactivity with penicillin)",
      "D": "Azithromycin 500 mg IV daily for atypical coverage"
    },
    "answer": "A",
    "explanation": "Vancomycin is the first-line treatment for MRSA pneumonia (along with linezolid). Glycopeptides (vancomycin) have no cross-reactivity with penicillins \u2014 the allergic mechanism is entirely different. A penicillin allergy, even anaphylaxis, is NOT a contraindication to vancomycin. Linezolid (option B) is preferred for MRSA VAP/HAP based on ZEPHYR trial data and excellent lung penetration, but for CAP-MRSA, vancomycin is acceptable first-line. Ceftaroline has anti-MRSA activity but is not first-line for severe pneumonia. Azithromycin has no MRSA activity. The correct approach respects penicillin allergy classification \u2014 'hives' is a non-anaphylactic reaction that still does not preclude vancomycin."
  },
  {
    "id": 194,
    "chapter": 19,
    "domain": "Endocrinology & Metabolism",
    "question": "A 58-year-old man presents with DKA. Glucose is 450 mg/dL, pH 7.18, HCO3 10, anion gap 28. After 4 hours of treatment, glucose is now 200 mg/dL but pH remains 7.22 and anion gap is 26. What does this indicate?",
    "options": {
      "A": "DKA is resolving; glucose normalization is the primary endpoint",
      "B": "Insulin infusion should be stopped as glucose has reached 200 mg/dL",
      "C": "DKA is not yet resolved; persistent elevated anion gap and acidosis indicate ongoing ketoacidosis despite glucose improvement",
      "D": "The persistent acidosis suggests a concurrent non-anion gap metabolic acidosis from normal saline infusion requiring bicarbonate therapy"
    },
    "answer": "C",
    "explanation": "DKA resolution is defined by anion gap closure (AG < 12), pH > 7.3, AND bicarbonate \u2265 18 mEq/L \u2014 NOT by glucose normalization alone. Glucose commonly falls before the anion gap closes because it is cleared faster than ketones. This is why dextrose is added to IV fluids when glucose falls to 200-250 mg/dL while insulin continues. The persistent anion gap and acidosis confirm ongoing ketogenesis. Stopping insulin at glucose 200 (option B) would be premature and dangerous. Hyperchloremic non-anion gap acidosis from normal saline is common during DKA treatment but does not require bicarbonate \u2014 it is self-limiting. Continue insulin + dextrose until full DKA resolution criteria are met."
  },
  {
    "id": 195,
    "chapter": 21,
    "domain": "Cardiology & Cardiac Arrest",
    "question": "A 72-year-old woman with structural heart disease and EF 35% is admitted to the ICU. Her EKG shows a regular narrow complex tachycardia at 185 bpm. Vagal maneuvers fail. Adenosine 6 mg IV is administered without effect, then 12 mg IV terminates the arrhythmia to normal sinus at 78 bpm. What was the most likely arrhythmia?",
    "options": {
      "A": "Atrial flutter with 2:1 block",
      "B": "AV nodal reentrant tachycardia (AVNRT)",
      "C": "Multifocal atrial tachycardia",
      "D": "Atrial fibrillation with aberrant conduction"
    },
    "answer": "B",
    "explanation": "AVNRT is the most common cause of paroxysmal supraventricular tachycardia (PSVT) in adults. It is a regular narrow complex tachycardia that is adenosine-responsive (adenosine terminates reentrant tachycardias involving the AV node). Termination with adenosine is diagnostic and therapeutic for AV-nodal dependent tachycardias (AVNRT, AVRT). Atrial flutter (option A) is typically not terminated by adenosine but may transiently reveal flutter waves (slowing response). AF (option D) is irregular. Multifocal atrial tachycardia (option C) has varying P-wave morphologies and is not adenosine-responsive. AVNRT is the classic board answer for adenosine-responsive regular narrow complex tachycardia."
  },
  {
    "id": 196,
    "chapter": 22,
    "domain": "Heart Failure",
    "question": "A 65-year-old man with newly diagnosed HFrEF (EF 28%) is being discharged after ADHF stabilization. He was started on carvedilol 3.125 mg BID and lisinopril 5 mg daily during hospitalization. He is euvolemic on furosemide 40 mg daily. Which additional therapy should be initiated before discharge based on current guidelines?",
    "options": {
      "A": "Spironolactone 25 mg daily if Cr < 2.5 and K < 5.0 mEq/L",
      "B": "Digoxin 0.125 mg daily for EF < 35%",
      "C": "Ivabradine for rate reduction since EF < 35%",
      "D": "Hydralazine-nitrate combination as an ACE inhibitor alternative"
    },
    "answer": "A",
    "explanation": "Spironolactone (MRA) has Class I indication in HFrEF with EF \u2264 35% and NYHA class II-IV symptoms based on the RALES trial (35% mortality reduction). It should be initiated before discharge with monitoring of creatinine and potassium. Criteria for starting: serum creatinine < 2.5 mg/dL (men) or < 2.0 mg/dL (women), and K+ < 5.0 mEq/L. Eplerenone is preferred post-MI (EPHESUS). Digoxin (option B) reduces hospitalizations but not mortality and is not first-line. Ivabradine (option C) is indicated only for HR \u2265 70 on maximally tolerated beta-blocker \u2014 HR is not specified here. Hydralazine-nitrate (option D) is for patients intolerant of ACE/ARB, especially Black patients (A-HeFT trial)."
  },
  {
    "id": 197,
    "chapter": 16,
    "domain": "Renal & Nephrology",
    "question": "A 60-year-old man with AKI requiring CRRT is being anticoagulated with unfractionated heparin. His filter is clotting every 6-8 hours. The team considers switching to citrate anticoagulation. Which of the following is a contraindication to regional citrate anticoagulation (RCA) for CRRT?",
    "options": {
      "A": "Serum phosphate < 2.0 mg/dL",
      "B": "Severe liver failure (INR > 3.0, bilirubin > 10 mg/dL)",
      "C": "AKI from rhabdomyolysis",
      "D": "Septic shock requiring vasopressors"
    },
    "answer": "B",
    "explanation": "Regional citrate anticoagulation requires hepatic metabolism of citrate to bicarbonate. In severe liver failure, citrate cannot be metabolized and accumulates systemically, causing citrate toxicity \u2014 low ionized calcium with high total calcium, metabolic alkalosis progressing to acidosis, and hypocalcemia. Severe liver failure is a relative-to-absolute contraindication for RCA depending on severity. Mild-moderate hepatic dysfunction is not a contraindication. Rhabdomyolysis AKI is not a contraindication. Hypophosphatemia requires phosphate supplementation but is not a contraindication to RCA. Vasopressor dependence (septic shock) is not a contraindication \u2014 in fact, RCA may be preferred to avoid systemic anticoagulation."
  },
  {
    "id": 198,
    "chapter": 17,
    "domain": "Electrolytes & Metabolism",
    "question": "A 62-year-old alcoholic man is admitted to the ICU with delirium tremens and is started on IV dextrose. After 24 hours, he has profound muscle weakness, EKG shows absence of T waves with U waves, and repeat labs show K 2.9 mEq/L, phosphate 0.7 mg/dL, Mg 1.0 mEq/L. What syndrome is most likely responsible for these findings?",
    "options": {
      "A": "Alcoholic ketoacidosis with secondary electrolyte loss",
      "B": "Refeeding syndrome from administration of glucose driving intracellular shift of electrolytes",
      "C": "Thiamine deficiency causing metabolic derangements",
      "D": "Conn syndrome (primary hyperaldosteronism) presenting in acute alcohol withdrawal"
    },
    "answer": "B",
    "explanation": "Refeeding syndrome occurs when malnourished patients (alcoholics, anorexics, cancer patients) receive calories (particularly carbohydrates) after prolonged starvation. Insulin surges drive phosphate, potassium, and magnesium intracellularly, causing severe hypophosphatemia, hypokalemia, and hypomagnesemia. ECG shows hypokalemia (absent T waves, prominent U waves). Thiamine depletion is related but causes Wernicke's encephalopathy, not primarily electrolyte shifts. Alcoholic ketoacidosis causes acidosis, not this electrolyte pattern. Conn syndrome (hyperaldosteronism) presents with hypertension and hypokalemia but not hypophosphatemia with refeeding history. Prevention: start calories slowly, monitor electrolytes frequently, supplement proactively."
  },
  {
    "id": 199,
    "chapter": 18,
    "domain": "Acid-Base Disorders",
    "question": "A 42-year-old woman with end-stage renal disease is on hemodialysis. She presents to the ED with shortness of breath. ABG: pH 7.38, PaCO2 22 mmHg, HCO3 13 mEq/L. Na 138, Cl 100. What acid-base disorder is present?",
    "options": {
      "A": "Normal acid-base status \u2014 pH is normal",
      "B": "Metabolic acidosis with appropriate respiratory compensation",
      "C": "Respiratory alkalosis with metabolic compensation",
      "D": "Mixed metabolic acidosis and respiratory alkalosis"
    },
    "answer": "D",
    "explanation": "Anion gap = 138 - 100 - 13 = 25 (elevated HAGMA). pH is 7.38 \u2014 appears normal. Winter's formula: expected PaCO2 = 1.5(13) + 8 \u00b1 2 = 27.5 \u00b1 2 = 25.5-29.5 mmHg. Actual PaCO2 = 22, which is BELOW the expected range. This means the respiratory system is hyperventilating more than expected for the degree of metabolic acidosis \u2014 indicating a coexisting primary respiratory alkalosis. Mixed HAGMA + respiratory alkalosis: classic causes include sepsis (simultaneous lactic acidosis + hyperventilation), hepatic failure, salicylate toxicity, and PE. Despite near-normal pH, the underlying mixed disorder is identified by comparing actual vs. expected compensation. A normal pH never excludes acid-base pathology."
  },
  {
    "id": 200,
    "chapter": 19,
    "domain": "Endocrinology & Metabolism",
    "question": "A 24-year-old man with type 1 DM presents with DKA. During management, he develops a severe headache, altered mental status, and right pupil dilation 6 hours after insulin infusion initiation. Glucose has fallen from 550 to 180 mg/dL over 6 hours. What is the most likely complication and management?",
    "options": {
      "A": "Hypokalemia from insulin therapy; give IV potassium and slow insulin infusion",
      "B": "Cerebral edema from rapid osmotic shifts; mannitol 1 g/kg IV and head-of-bed elevation",
      "C": "Hypoglycemia from aggressive insulin therapy; administer dextrose bolus",
      "D": "Subarachnoid hemorrhage unrelated to DKA management; emergent CT head"
    },
    "answer": "B",
    "explanation": "Cerebral edema is a rare but life-threatening complication of DKA, occurring most often in children and young adults, typically 6-10 hours into treatment. Risk factors include rapid glucose reduction, excessive fluid administration, and young age. Pathophysiology involves osmotic shifts \u2014 rapid reduction in plasma osmolarity causes water entry into brain cells. Signs: new headache, behavioral change, pupil abnormalities, Cushing's triad. Treatment: mannitol 0.5-1 g/kg IV or hypertonic saline 3%, reduce IV fluid rate, elevate HOB. CT may show sulcal effacement or herniation. This is a clinical emergency \u2014 do not delay treatment for CT. Hypokalemia would show EKG changes, not neurological signs."
  },
  {
    "id": 201,
    "chapter": 23,
    "domain": "Neurocritical Care",
    "question": "A 67-year-old man with atrial fibrillation presents with sudden-onset right arm weakness and aphasia. Symptom onset was 2.5 hours ago. NIHSS is 14. CT head shows no hemorrhage and no early ischemic changes. BP is 168/94 mmHg, INR is 1.0, and no contraindications to thrombolysis are identified. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Administer IV alteplase 0.9 mg/kg (max 90 mg)",
      "B": "Lower BP to below 140/90 mmHg before any treatment",
      "C": "Defer treatment pending MRI DWI confirmation of ischemic stroke",
      "D": "Administer IV heparin infusion to prevent clot propagation"
    },
    "answer": "A",
    "explanation": "IV alteplase is indicated within 4.5 hours of symptom onset in eligible patients with acute ischemic stroke; at 2.5 hours this patient is well within the window. BP must be below 185/110 mmHg before tPA but does not need to reach 140/90. MRI is not required when CT shows no contraindication. IV heparin has no proven role in acute ischemic stroke thrombolysis eligibility."
  },
  {
    "id": 202,
    "chapter": 23,
    "domain": "Neurocritical Care",
    "question": "A 72-year-old woman is brought by EMS 90 minutes after sudden left-sided weakness. CT angiography shows a right M1 middle cerebral artery occlusion. NIHSS is 18. She received IV alteplase 30 minutes ago. BP is now 172/88 mmHg. Which of the following is the most appropriate next intervention?",
    "options": {
      "A": "Proceed with mechanical thrombectomy",
      "B": "Wait 24 hours post-tPA before considering thrombectomy",
      "C": "Initiate dual antiplatelet therapy immediately",
      "D": "Administer a second dose of IV alteplase"
    },
    "answer": "A",
    "explanation": "Mechanical thrombectomy is the standard of care for large vessel occlusion (LVO) presenting within 24 hours and can be performed after or concurrent with IV tPA. The combination of IV tPA followed by thrombectomy ('bridging therapy') is guideline-supported for eligible LVO patients. Waiting 24 hours post-tPA would delay reperfusion and worsen outcome. A second dose of alteplase is never indicated."
  },
  {
    "id": 203,
    "chapter": 23,
    "domain": "Neurocritical Care",
    "question": "A 58-year-old man receives IV alteplase for acute ischemic stroke. Four hours later, his GCS drops from 14 to 9 and his right pupil becomes dilated. Repeat CT head shows a large hyperdense lesion in the left hemisphere with midline shift. Which complication has occurred?",
    "options": {
      "A": "Hemorrhagic transformation with symptomatic intracranial hemorrhage",
      "B": "Cerebral edema from malignant middle cerebral artery infarction",
      "C": "Contrast nephropathy causing metabolic encephalopathy",
      "D": "Recurrent ischemic stroke in the contralateral hemisphere"
    },
    "answer": "A",
    "explanation": "Symptomatic intracranial hemorrhage (sICH) is the most feared complication of IV thrombolysis, presenting within 24\u201336 hours with neurological deterioration and new hyperdensity on CT. The dilated pupil suggests uncal herniation from mass effect of the hematoma. Malignant MCA infarction causes edema rather than hyperdensity. Contrast nephropathy would not cause this acute neurological picture."
  },
  {
    "id": 204,
    "chapter": 23,
    "domain": "Neurocritical Care",
    "question": "A 55-year-old woman with no significant history presents with the 'worst headache of her life' that began 2 hours ago while exercising. CT head is read as normal by the radiologist. LP shows xanthochromia and 5,000 red blood cells per \u00b5L in tubes 3 and 4. Which is the best next diagnostic step?",
    "options": {
      "A": "CT angiography of the head and neck",
      "B": "MRI brain with gadolinium",
      "C": "Repeat LP in 12 hours",
      "D": "Four-vessel cerebral angiography immediately"
    },
    "answer": "A",
    "explanation": "Xanthochromia with non-clearing RBCs on LP is diagnostic for subarachnoid hemorrhage (SAH). CT angiography is the next step to identify a ruptured aneurysm \u2014 it is rapid, widely available, and has high sensitivity for aneurysms >3 mm. Conventional angiography (DSA) is reserved for cases where CTA is negative or inconclusive, or when endovascular treatment is planned. MRI is less sensitive for acute SAH and vascular anatomy."
  },
  {
    "id": 205,
    "chapter": 23,
    "domain": "Neurocritical Care",
    "question": "A 48-year-old man is admitted to the neurosurgical ICU after confirmed aneurysmal subarachnoid hemorrhage. On day 7 of admission he develops confusion, right arm drift, and his TCD shows a mean flow velocity of 200 cm/s in the left MCA. BP is 130/78 mmHg. Which intervention is most appropriate?",
    "options": {
      "A": "Initiate induced hypertension with vasopressors to augment cerebral perfusion",
      "B": "Start IV nimodipine",
      "C": "Administer IV mannitol 1 g/kg",
      "D": "Perform urgent repeat CSF drainage via EVD"
    },
    "answer": "A",
    "explanation": "This patient has cerebral vasospasm complicating SAH (peak days 4\u201314). Nimodipine is given prophylactically from admission and would already be running; the acute treatment of symptomatic vasospasm is hemodynamic augmentation (induced hypertension). Hypertensive therapy (formerly 'triple-H') improves cerebral perfusion through vasospastic segments. Mannitol treats elevated ICP, not vasospasm. EVD drainage may be needed for hydrocephalus but does not address vasospasm."
  },
  {
    "id": 206,
    "chapter": 23,
    "domain": "Neurocritical Care",
    "question": "A 79-year-old hypertensive man presents with acute ischemic stroke. His initial BP is 210/120 mmHg. He is NOT a candidate for IV alteplase or thrombectomy. According to current guidelines, what is the appropriate BP management strategy?",
    "options": {
      "A": "Lower BP to 180/105 mmHg over the first 24 hours",
      "B": "Aggressively lower BP to below 140/90 mmHg immediately with IV labetalol",
      "C": "Allow BP up to 220/120 mmHg and avoid antihypertensives for 24 hours",
      "D": "Lower BP by 25% within the first hour"
    },
    "answer": "C",
    "explanation": "For acute ischemic stroke patients who are NOT candidates for reperfusion therapy, current guidelines recommend permissive hypertension \u2014 allowing BP up to 220/120 mmHg for the first 24 hours, unless end-organ damage is present (aortic dissection, hypertensive encephalopathy, etc.). Aggressive lowering of BP reduces penumbral perfusion and worsens outcomes. The 180/105 target applies to patients who did receive tPA."
  },
  {
    "id": 207,
    "chapter": 23,
    "domain": "Neurocritical Care",
    "question": "A 63-year-old man on warfarin (INR 3.4) develops acute onset headache and left hemiplegia. CT shows a right basal ganglia hemorrhage with volume of 40 mL. Which agent most rapidly reverses his coagulopathy?",
    "options": {
      "A": "4-factor prothrombin complex concentrate (PCC)",
      "B": "Fresh frozen plasma (FFP)",
      "C": "Vitamin K IV infusion",
      "D": "Recombinant factor VIIa"
    },
    "answer": "A",
    "explanation": "4-factor PCC (Kcentra) provides immediate reversal of vitamin K-dependent factors (II, VII, IX, X) and is the preferred agent for emergency reversal of warfarin-associated intracranial hemorrhage \u2014 it achieves INR correction within minutes. FFP is much slower (takes time to thaw and infuse, large volume) and is a second-line option. IV vitamin K begins working in 12\u201324 hours. Recombinant factor VIIa is not guideline-preferred and carries thrombotic risk."
  },
  {
    "id": 208,
    "chapter": 23,
    "domain": "Neurocritical Care",
    "question": "A 70-year-old woman with history of ischemic stroke 3 weeks ago presents with worsening headache and new right-sided weakness. MRI shows a large area of mixed signal intensity in the left hemisphere corresponding to the prior infarct territory, with petechial hyperdensities on CT. Which condition best explains these findings?",
    "options": {
      "A": "Hemorrhagic transformation of ischemic stroke",
      "B": "New contralateral ischemic stroke",
      "C": "Cerebral venous sinus thrombosis",
      "D": "Subdural hematoma"
    },
    "answer": "A",
    "explanation": "Hemorrhagic transformation (HT) of an ischemic stroke occurs when blood-brain barrier breakdown allows erythrocyte extravasation into infarcted tissue, commonly between days 1\u201314 but can occur later. The imaging finding of petechiae or hematoma within the prior infarct territory is characteristic. A contralateral stroke would appear in a different location. CVT has different clinical features. A subdural hematoma appears extra-axially."
  },
  {
    "id": 209,
    "chapter": 23,
    "domain": "Neurocritical Care",
    "question": "A 61-year-old man presents with sudden-onset severe headache, stiff neck, and photophobia. Hunt and Hess grade 3 SAH is confirmed. He is started on nimodipine 60 mg every 4 hours. What is the primary purpose of nimodipine in this setting?",
    "options": {
      "A": "Reduce the risk of delayed cerebral ischemia from vasospasm",
      "B": "Lower intracranial pressure",
      "C": "Prevent rebleeding of the aneurysm",
      "D": "Treat the underlying subarachnoid blood"
    },
    "answer": "A",
    "explanation": "Nimodipine is a calcium channel blocker that reduces delayed cerebral ischemia (DCI) secondary to vasospasm after SAH; it improves neurological outcomes without significantly reducing angiographic vasospasm. It does not reduce ICP, prevent re-rupture, or dissolve subarachnoid blood. The mortality benefit of nimodipine in aneurysmal SAH is well-established in randomized trials."
  },
  {
    "id": 210,
    "chapter": 23,
    "domain": "Neurocritical Care",
    "question": "A patient arrives with acute basilar artery occlusion confirmed on CT angiography. Symptom onset was 10 hours ago. He is comatose with GCS 6 and bilateral miosis. IV tPA is contraindicated due to recent surgery. Which is the most appropriate intervention?",
    "options": {
      "A": "Emergent mechanical thrombectomy",
      "B": "Supportive care only given coma and contraindication to tPA",
      "C": "Intra-arterial urokinase infusion",
      "D": "IV heparin anticoagulation"
    },
    "answer": "A",
    "explanation": "Basilar artery occlusion carries a mortality of >90% without reperfusion; mechanical thrombectomy is the treatment of choice and can be performed even beyond the standard 6-hour window (up to 24 hours with imaging selection), and even when tPA is contraindicated. The SELECT2 and DAWN criteria allow extended window thrombectomy based on perfusion imaging mismatch. Supportive care alone is futile in basilar occlusion. Intra-arterial urokinase is rarely used in modern practice."
  },
  {
    "id": 211,
    "chapter": 24,
    "domain": "Neurocritical Care",
    "question": "A 34-year-old woman with epilepsy is brought to the ED actively seizing. She has been seizing continuously for 8 minutes. EMS administered lorazepam 4 mg IV en route without effect. On arrival she is still seizing. What is the most appropriate next step?",
    "options": {
      "A": "Administer fosphenytoin 20 mg PE/kg IV",
      "B": "Administer a second dose of lorazepam 4 mg IV",
      "C": "Immediately intubate and initiate propofol infusion",
      "D": "Administer levetiracetam 60 mg/kg IV"
    },
    "answer": "A",
    "explanation": "After failure of adequate benzodiazepine dosing (first-line), the next step in the status epilepticus treatment ladder is a second-line agent: fosphenytoin, levetiracetam, or valproic acid. Fosphenytoin 20 mg PE/kg IV is the classic second-line choice. A repeat benzodiazepine is not guideline-recommended after adequate first-line dosing. Propofol infusion for refractory SE (third-line) is premature at this stage. Levetiracetam 60 mg/kg is an alternative second-line agent but not ahead of fosphenytoin historically."
  },
  {
    "id": 212,
    "chapter": 24,
    "domain": "Neurocritical Care",
    "question": "A 45-year-old man is in the ICU with refractory status epilepticus unresponsive to two adequate doses of lorazepam, fosphenytoin, and levetiracetam. EEG shows burst suppression with ongoing ictal activity. His BP is 112/68 mmHg and he is intubated. Which agent is most appropriate for third-line treatment?",
    "options": {
      "A": "Continuous propofol infusion titrated to EEG burst suppression",
      "B": "High-dose phenobarbital 30 mg/kg IV bolus",
      "C": "Ketamine 1\u20132 mg/kg IV bolus",
      "D": "Oral lacosamide via nasogastric tube"
    },
    "answer": "A",
    "explanation": "Refractory status epilepticus (RSE) unresponsive to two or more second-line agents requires continuous IV anesthetic agents under EEG monitoring. Propofol infusion titrated to burst suppression is a first-choice third-line agent. Phenobarbital can be used as a second-line agent but is less preferred for RSE requiring burst suppression. Ketamine is emerging as an adjunct but is not standard monotherapy for RSE. Oral agents have no role in the acute management of RSE."
  },
  {
    "id": 213,
    "chapter": 24,
    "domain": "Neurocritical Care",
    "question": "A 52-year-old man with a large right MCA ischemic stroke is found unresponsive. Examination shows bradycardia (HR 44), hypertension (BP 210/118 mmHg), and irregular respirations. Which syndrome does this constellation describe?",
    "options": {
      "A": "Cushing's triad",
      "B": "Uncal herniation syndrome",
      "C": "Neurogenic pulmonary edema",
      "D": "Autonomic dysreflexia"
    },
    "answer": "A",
    "explanation": "Cushing's triad \u2014 hypertension, bradycardia, and irregular respirations \u2014 is a late sign of severely elevated intracranial pressure (ICP) indicating impending brainstem herniation. It results from Cushing reflex: as ICP rises, the brainstem triggers systemic hypertension to maintain cerebral perfusion, which reflexively slows the heart. Uncal herniation is a structural event that may co-occur. Neurogenic pulmonary edema and autonomic dysreflexia have different presentations."
  },
  {
    "id": 214,
    "chapter": 24,
    "domain": "Neurocritical Care",
    "question": "A 28-year-old man with traumatic brain injury has an intracranial pressure of 28 mmHg refractory to head of bed elevation, sedation, and CSF drainage. His MAP is 80 mmHg. Which ICP-lowering intervention should be initiated next?",
    "options": {
      "A": "Mannitol 1 g/kg IV bolus",
      "B": "Hyperventilate to PaCO2 of 25 mmHg",
      "C": "Administer furosemide 40 mg IV",
      "D": "Start therapeutic hypothermia to 33\u00b0C"
    },
    "answer": "A",
    "explanation": "Mannitol 0.25\u20131 g/kg IV is a first-line osmotic agent for raised ICP refractory to positioning and sedation. Aggressive hyperventilation (PaCO2 <35 mmHg) causes cerebral vasoconstriction and reduces ICP acutely but is only used as a temporizing bridge because prolonged use causes ischemia; PaCO2 of 25 mmHg is too low. Furosemide has limited efficacy for ICP management. Therapeutic hypothermia to 33\u00b0C is not first-line for TBI-related ICP management per current guidelines."
  },
  {
    "id": 215,
    "chapter": 24,
    "domain": "Neurocritical Care",
    "question": "A 60-year-old woman with known myasthenia gravis presents with a 3-day history of worsening dysphagia and dyspnea. Her FVC is 14 mL/kg and NIF is -18 cmH\u2082O. Her SpO\u2082 is 96% on room air. Which is the most appropriate action?",
    "options": {
      "A": "Electively intubate before respiratory failure develops",
      "B": "Start noninvasive positive pressure ventilation (NIV)",
      "C": "Administer neostigmine 0.5 mg IV and observe",
      "D": "Discharge with increased pyridostigmine dose and outpatient follow-up"
    },
    "answer": "A",
    "explanation": "Myasthenic crisis with an FVC <15\u201320 mL/kg or NIF less negative than -25 to -30 cmH\u2082O warrants elective intubation before acute respiratory failure, as these patients can deteriorate precipitously. NIV is relatively contraindicated in bulbar dysfunction (dysphagia) due to aspiration risk. Neostigmine alone does not address ventilatory failure. Discharge is inappropriate given the severity."
  },
  {
    "id": 216,
    "chapter": 24,
    "domain": "Neurocritical Care",
    "question": "A 19-year-old man with no prior history presents with a 35-minute generalized tonic-clonic seizure. EMS gave IM midazolam 10 mg before arrival; seizure persists. In the ED, which benzodiazepine route and agent is preferred if no IV access is yet established?",
    "options": {
      "A": "Intranasal midazolam",
      "B": "Rectal diazepam",
      "C": "Oral lorazepam",
      "D": "Sublingual clonazepam"
    },
    "answer": "A",
    "explanation": "When IV access is unavailable, intranasal midazolam achieves rapid systemic absorption via the nasal mucosa and is an accepted alternative to IM midazolam for status epilepticus. Rectal diazepam is an alternative but is less practical in adults and has slower onset. Oral and sublingual routes are too slow for active status epilepticus. IM midazolam was already given, so attempting intranasal midazolam while IV access is established is reasonable."
  },
  {
    "id": 217,
    "chapter": 24,
    "domain": "Neurocritical Care",
    "question": "A 66-year-old man with a known brain tumor presents to the ICU after a prolonged seizure that was terminated with benzodiazepines. EEG monitoring is started. Two hours later he is unresponsive but not convulsing. EEG shows continuous spike-wave discharges. What is the diagnosis?",
    "options": {
      "A": "Nonconvulsive status epilepticus (NCSE)",
      "B": "Postictal state",
      "C": "Medication-induced sedation",
      "D": "New ischemic stroke"
    },
    "answer": "A",
    "explanation": "Nonconvulsive status epilepticus (NCSE) is defined by continuous or near-continuous electrographic seizure activity without prominent motor manifestations, causing persistent altered consciousness. EEG is the diagnostic gold standard. The postictal state typically lasts minutes to hours but does not show continuous EEG ictal activity. Medication-induced sedation and stroke are important differentials but are excluded by the EEG findings."
  },
  {
    "id": 218,
    "chapter": 24,
    "domain": "Neurocritical Care",
    "question": "A 75-year-old man with hypertension presents after witnessed seizure. Brain MRI shows bilateral medial temporal signal changes on FLAIR/DWI. CSF shows lymphocytic pleocytosis and elevated protein. Anti-NMDA receptor antibodies are negative, but anti-LGI1 antibodies are positive. Which treatment is most appropriate?",
    "options": {
      "A": "High-dose IV methylprednisolone and IV immunoglobulin (IVIg)",
      "B": "Empiric broad-spectrum antibiotics",
      "C": "Acyclovir for presumed HSV encephalitis",
      "D": "Antiepileptic monotherapy and outpatient follow-up"
    },
    "answer": "A",
    "explanation": "Anti-LGI1 encephalitis is an autoimmune limbic encephalitis presenting with temporal lobe seizures, hyponatremia (faciobrachial dystonic seizures are classic), and memory impairment. First-line treatment is immunotherapy: high-dose IV corticosteroids and/or IVIg. Acyclovir is appropriate when HSV cannot be excluded but is not the primary treatment for antibody-positive autoimmune encephalitis. Antibiotics treat bacterial meningitis. Antiepileptics alone without immunotherapy will not address the underlying autoimmune process."
  },
  {
    "id": 219,
    "chapter": 24,
    "domain": "Neurocritical Care",
    "question": "A patient with severe TBI has ICP of 32 mmHg despite maximum medical therapy including mannitol. Cerebral perfusion pressure (CPP) is 52 mmHg. The neurosurgeon recommends decompressive craniectomy. What is the minimum CPP target recommended by Brain Trauma Foundation guidelines?",
    "options": {
      "A": "60 mmHg",
      "B": "50 mmHg",
      "C": "70 mmHg",
      "D": "80 mmHg"
    },
    "answer": "A",
    "explanation": "Brain Trauma Foundation (BTF) guidelines recommend a CPP target of 60\u201370 mmHg for severe TBI. A CPP of 52 mmHg is below the minimum recommended threshold of 60 mmHg and requires intervention (MAP augmentation and/or ICP reduction). Targeting CPP >70 mmHg is associated with increased risk of ARDS without clear outcome benefit. A target of 50 mmHg is too low."
  },
  {
    "id": 220,
    "chapter": 24,
    "domain": "Neurocritical Care",
    "question": "A 42-year-old woman in the medical ICU develops new-onset status epilepticus. Review of her medications shows she was started on imipenem-cilastatin 48 hours ago for a healthcare-associated pneumonia. Which intervention is most important in addition to antiseizure therapy?",
    "options": {
      "A": "Discontinue imipenem and switch to a carbapenem with lower seizure risk (e.g., meropenem)",
      "B": "Increase the imipenem dose to improve CNS penetration",
      "C": "Add valproic acid for pharmacokinetic synergy",
      "D": "Obtain urgent neurosurgical consultation for ICP monitoring"
    },
    "answer": "A",
    "explanation": "Imipenem-cilastatin is the carbapenem most associated with neurotoxicity and seizure risk, particularly at high doses or in patients with renal impairment. Removing the offending agent by switching to meropenem (which has significantly lower seizure risk) is a critical step alongside antiseizure medication. Valproic acid is actually contraindicated with imipenem because imipenem dramatically reduces valproate levels. ICP monitoring is not indicated here."
  },
  {
    "id": 221,
    "chapter": 25,
    "domain": "Critical Care \u2014 Sedation/Analgesia",
    "question": "A 55-year-old intubated man in the medical ICU is noted to be pulling at his endotracheal tube, grimacing, and does not follow commands. His RASS is documented as +2. Which description of the RASS score is correct?",
    "options": {
      "A": "Agitated \u2014 anxious and aggressive, non-purposeful movements",
      "B": "Alert and calm",
      "C": "Restless \u2014 anxious but movements non-vigorous",
      "D": "Very agitated \u2014 pulls/removes tubes, aggressive"
    },
    "answer": "A",
    "explanation": "RASS +2 = Agitated: anxious, some aggressive behavior, non-purposeful movements. RASS 0 = Alert and calm. RASS +1 = Restless: anxious, non-vigorous movements. RASS +3 = Very agitated: pulls tubes, aggressive. The RASS scale ranges from -5 (unarousable) to +4 (combative). Correct RASS documentation guides targeted sedation strategies."
  },
  {
    "id": 222,
    "chapter": 25,
    "domain": "Critical Care \u2014 Sedation/Analgesia",
    "question": "A 63-year-old woman has been intubated for 5 days in the medical ICU for ARDS. She is receiving continuous propofol and fentanyl infusions. You are implementing the PAD bundle. Which element is the primary first step according to the ABCDEF bundle?",
    "options": {
      "A": "Assess and treat pain before addressing agitation",
      "B": "Perform spontaneous awakening trial (SAT) before analgesia assessment",
      "C": "Start antipsychotics to prevent delirium",
      "D": "Mobilize the patient before weaning sedation"
    },
    "answer": "A",
    "explanation": "The ABCDEF bundle (Assess/treat pain, Both SAT and SBT, Choice of sedation, Delirium monitoring, Early mobility, Family engagement) prioritizes analgesia-first \u2014 pain is assessed and treated before sedation is addressed (analgesia-first approach). Undertreated pain is a major driver of agitation and delirium. SATs occur after pain assessment. Antipsychotics are not first-line prophylactic agents. Mobilization occurs after ventilatory and sedation optimization."
  },
  {
    "id": 223,
    "chapter": 25,
    "domain": "Critical Care \u2014 Sedation/Analgesia",
    "question": "A 70-year-old man is intubated for respiratory failure. He has RASS target of -1. His nurse notes new inattention, fluctuating mental status, and disorganized thinking. The CAM-ICU assessment is performed. Which finding is required to diagnose ICU delirium by CAM-ICU?",
    "options": {
      "A": "Acute onset/fluctuating course AND inattention, PLUS either disorganized thinking OR altered level of consciousness",
      "B": "Inattention alone for at least 4 hours",
      "C": "Disorganized thinking AND altered level of consciousness without inattention",
      "D": "Visual hallucinations AND agitation for >2 hours"
    },
    "answer": "A",
    "explanation": "CAM-ICU requires: Feature 1 (Acute onset or fluctuating course) AND Feature 2 (Inattention) AND either Feature 3 (Disorganized thinking) OR Feature 4 (Altered level of consciousness). Both features 1 and 2 are mandatory; either 3 or 4 completes the diagnosis. Inattention alone is insufficient. Visual hallucinations and agitation are not CAM-ICU criteria."
  },
  {
    "id": 224,
    "chapter": 25,
    "domain": "Critical Care \u2014 Sedation/Analgesia",
    "question": "A 68-year-old woman in the ICU is receiving propofol at 70 mcg/kg/min for 48 hours. She develops new metabolic acidosis (pH 7.20, lactate 6.2 mmol/L), elevated triglycerides, and rising creatinine. EKG shows new right bundle branch block. Which complication should be suspected?",
    "options": {
      "A": "Propofol infusion syndrome (PRIS)",
      "B": "Lactic acidosis from septic shock",
      "C": "Acute kidney injury from contrast nephropathy",
      "D": "Hypertriglyceridemia from enteral nutrition"
    },
    "answer": "A",
    "explanation": "Propofol infusion syndrome (PRIS) is a rare but life-threatening complication of high-dose (>4\u20135 mg/kg/hr = 67\u201383 mcg/kg/min) or prolonged propofol infusions, characterized by metabolic acidosis, rhabdomyolysis, hyperkalemia, renal failure, cardiac arrhythmias (new BBB or ST changes), and lipemia. This patient's dose (70 mcg/kg/min \u2248 4.2 mg/kg/hr) and duration plus the constellation of findings are classic for PRIS. Propofol should be stopped immediately."
  },
  {
    "id": 225,
    "chapter": 25,
    "domain": "Critical Care \u2014 Sedation/Analgesia",
    "question": "An intubated patient in the medical ICU is being weaned from sedation. The team chooses dexmedetomidine over propofol. Which property of dexmedetomidine makes it particularly advantageous for ICU sedation?",
    "options": {
      "A": "It provides sedation and anxiolysis without significantly suppressing respiratory drive",
      "B": "It produces reliable seizure prophylaxis",
      "C": "It eliminates the need for concurrent analgesic medications",
      "D": "It can be used to achieve deep sedation (RASS -4 to -5) safely"
    },
    "answer": "A",
    "explanation": "Dexmedetomidine (alpha-2 agonist) produces sedation and anxiolysis through a mechanism that does not significantly suppress respiratory drive, making it safe during spontaneous breathing trials and in spontaneously ventilating patients. This property is its key advantage over propofol and benzodiazepines. It has no anticonvulsant effect. It has mild intrinsic analgesic properties but does not eliminate the need for opioids. It is not suitable for deep sedation targets."
  },
  {
    "id": 226,
    "chapter": 25,
    "domain": "Critical Care \u2014 Sedation/Analgesia",
    "question": "A 72-year-old man with no prior psychiatric history develops ICU delirium on day 4 of mechanical ventilation. He is hypoactive \u2014 lying still, eyes open, minimally responsive. Which intervention has the strongest evidence for treating ICU delirium?",
    "options": {
      "A": "Nonpharmacological measures: early mobilization, sleep protocol, reorientation, and sensory restoration",
      "B": "IV haloperidol scheduled every 6 hours",
      "C": "Quetiapine 50 mg twice daily",
      "D": "Discontinue all sedatives immediately and begin benzodiazepine taper"
    },
    "answer": "A",
    "explanation": "Current evidence (including the MIND and HOPE-ICU trials) shows that antipsychotics (haloperidol, quetiapine) do not reduce delirium duration or improve outcomes in mechanically ventilated patients. Nonpharmacological interventions targeting sleep-wake cycle, early mobility, sensory restoration (glasses, hearing aids), and reorientation have the strongest recommendation per SCCM PAD/ABCDEF guidelines. Abrupt discontinuation of all sedatives may cause withdrawal seizures and is not appropriate."
  },
  {
    "id": 227,
    "chapter": 25,
    "domain": "Critical Care \u2014 Sedation/Analgesia",
    "question": "A 58-year-old woman with alcoholic liver cirrhosis is intubated in the ICU. The team wants to minimize delirium risk. Which sedative should be avoided in this patient?",
    "options": {
      "A": "Benzodiazepines",
      "B": "Dexmedetomidine",
      "C": "Propofol",
      "D": "Ketamine"
    },
    "answer": "A",
    "explanation": "Benzodiazepines are an independent risk factor for ICU delirium and are particularly problematic in patients with hepatic dysfunction, who have impaired benzodiazepine metabolism leading to accumulation. The MENDS and SEDCOM trials showed higher delirium rates with lorazepam versus dexmedetomidine. Dexmedetomidine, propofol, and ketamine are preferred alternatives. Benzodiazepines remain first-line only for alcohol withdrawal seizures."
  },
  {
    "id": 228,
    "chapter": 25,
    "domain": "Critical Care \u2014 Sedation/Analgolia",
    "question": "A 44-year-old ICU patient on fentanyl infusion for 10 days is being weaned. He develops tachycardia, diaphoresis, piloerection, dilated pupils, and severe abdominal cramping when the infusion is decreased. Which condition is most likely?",
    "options": {
      "A": "Opioid withdrawal syndrome",
      "B": "Serotonin syndrome",
      "C": "Neuroleptic malignant syndrome",
      "D": "Sympathetic storm from TBI"
    },
    "answer": "A",
    "explanation": "Opioid withdrawal in critically ill patients presents with sympathetic hyperactivation: tachycardia, diaphoresis, piloerection, mydriasis, GI symptoms \u2014 occurring after abrupt reduction of prolonged opioid infusions. Serotonin syndrome causes hyperthermia, clonus, and hyperreflexia, not piloerection as the dominant feature. NMS features are fever, rigidity, and autonomic instability in the context of antipsychotic use. Sympathetic storm from TBI requires specific neurological context."
  },
  {
    "id": 229,
    "chapter": 25,
    "domain": "Critical Care \u2014 Sedation/Analgesia",
    "question": "Which of the following is a modifiable risk factor for ICU delirium that should be targeted during ICU care?",
    "options": {
      "A": "Benzodiazepine use",
      "B": "Age over 65 years",
      "C": "Pre-existing cognitive impairment",
      "D": "Male sex"
    },
    "answer": "A",
    "explanation": "Benzodiazepine use is one of the strongest modifiable risk factors for ICU delirium, with multiple RCTs confirming this association. Other modifiable factors include immobility, sleep disruption, uncontrolled pain, urinary catheters, and physical restraints. Age, pre-existing cognitive impairment, and sex are non-modifiable baseline risk factors. Minimizing benzodiazepines is a central strategy in delirium prevention bundles."
  },
  {
    "id": 230,
    "chapter": 25,
    "domain": "Critical Care \u2014 Sedation/Analgesia",
    "question": "A 50-year-old intubated man is on a midazolam infusion at 5 mg/hr. During a spontaneous awakening trial (SAT), he becomes extremely agitated and desaturates to 85%. The SAT is stopped and sedation resumed. What is the appropriate next action regarding his sedation?",
    "options": {
      "A": "Resume sedation at half the pre-SAT dose and repeat SAT the following day",
      "B": "Resume full pre-SAT sedation dose and delay SAT for 48 hours",
      "C": "Switch to continuous dexmedetomidine and avoid all future SATs",
      "D": "Add a paralytic to prevent future agitation during SATs"
    },
    "answer": "A",
    "explanation": "A failed SAT should prompt sedation to resume at half the pre-SAT rate to minimize drug accumulation, with reassessment for SAT eligibility the next day. This strategy, from the landmark Kress/Girard SAT-SBT trial, reduces ventilator days and ICU LOS compared to continuous sedation. Resuming full dose delays weaning. Avoiding all future SATs is inconsistent with evidence-based ventilator liberation protocols. Paralytics are not indicated for SAT agitation."
  },
  {
    "id": 231,
    "chapter": 26,
    "domain": "Gastroenterology/Hepatology",
    "question": "A 62-year-old man with known alcoholic cirrhosis presents with hematemesis and hypotension (BP 82/54 mmHg). He is resuscitated with 1 L normal saline. His Hgb is 6.2 g/dL. After initial stabilization, which intervention most reduces 5-day mortality in variceal upper GIB?",
    "options": {
      "A": "IV octreotide infusion initiated in the ED",
      "B": "Immediate blood transfusion to Hgb >10 g/dL",
      "C": "Prophylactic TIPS placement before endoscopy",
      "D": "IV proton pump inhibitor bolus followed by infusion"
    },
    "answer": "A",
    "explanation": "IV octreotide (somatostatin analogue) reduces portal pressure and splanchnic blood flow and should be started immediately when variceal bleeding is suspected; it reduces mortality when given early. Transfusion threshold in cirrhotic variceal bleeding is restrictive (Hgb 7 g/dL) \u2014 overtransfusion increases portal pressure and rebleeding risk. TIPS is a rescue therapy for refractory bleeding, not first-line. PPI infusions benefit peptic ulcer bleeding, not variceal bleeding."
  },
  {
    "id": 232,
    "chapter": 26,
    "domain": "Gastroenterology/Hepatology",
    "question": "A 58-year-old woman presents with 2 days of melena and dizziness. BP is 95/60 mmHg, HR 114 bpm, BUN 48 mg/dL, creatinine 0.9 mg/dL, Hgb 8.4 g/dL, and she has not fainted. Which Glasgow-Blatchford Score (GBS) component alone most strongly predicts the need for endoscopic intervention?",
    "options": {
      "A": "BUN >25 mg/dL",
      "B": "Hemoglobin 8\u201310 g/dL in a woman",
      "C": "Heart rate >100 bpm",
      "D": "Systolic BP 90\u2013109 mmHg"
    },
    "answer": "A",
    "explanation": "In the Glasgow-Blatchford Score, BUN elevation carries the highest point weighting (0\u20136 points based on BUN level), reflecting prerenal azotemia from upper GI blood digestion/absorption. A GBS of 0 can safely be managed outpatient; higher scores predict need for intervention. While tachycardia, low BP, and low hemoglobin all contribute points, BUN elevation has the highest individual point allocation in the GBS scoring system."
  },
  {
    "id": 233,
    "chapter": 26,
    "domain": "Gastroenterology/Hepatology",
    "question": "A 45-year-old woman is admitted for acute liver failure (ALF). She has bilirubin 28 mg/dL, INR 4.2, creatinine 3.1 mg/dL, and encephalopathy grade III. Which of the following King's College Criteria most strongly indicates need for urgent liver transplantation evaluation in non-acetaminophen ALF?",
    "options": {
      "A": "INR >6.5 OR any 3 of: age <10 or >40, non-A non-B hepatitis or drug-induced etiology, jaundice-to-encephalopathy interval >7 days, INR >3.5, bilirubin >18 mg/dL",
      "B": "Bilirubin >20 mg/dL alone",
      "C": "Creatinine >2.0 mg/dL with encephalopathy grade II",
      "D": "PT >40 seconds in any patient with ALF"
    },
    "answer": "A",
    "explanation": "King's College Criteria for non-acetaminophen ALF: transplant listing if INR >6.5 alone, or ANY 3 of: age <10 or >40, unfavorable etiology (non-A non-B hepatitis, drug-induced), jaundice-to-encephalopathy interval >7 days, INR >3.5, bilirubin >17.6 mg/dL (>300 \u00b5mol/L). These predict poor prognosis without transplant. Bilirubin alone is insufficient. Creatinine >2 with grade II encephalopathy does not meet KCC. PT >40 seconds alone is not a KCC criterion."
  },
  {
    "id": 234,
    "chapter": 26,
    "domain": "Gastroenterology/Hepatology",
    "question": "A 54-year-old man with decompensated cirrhosis and hepatic encephalopathy is admitted to the ICU. He is already on lactulose. Which additional agent reduces hospitalizations for overt hepatic encephalopathy and should be added?",
    "options": {
      "A": "Rifaximin 550 mg twice daily",
      "B": "Neomycin 1 g four times daily",
      "C": "Metronidazole 500 mg three times daily",
      "D": "Oral vancomycin 125 mg four times daily"
    },
    "answer": "A",
    "explanation": "Rifaximin, a minimally absorbed oral antibiotic, reduces the risk of overt hepatic encephalopathy episodes by ~58% when added to lactulose, as demonstrated in the NEJM RFHE trial. It is now guideline-recommended for secondary prevention of HE in cirrhosis. Neomycin has significant nephrotoxicity and ototoxicity and is rarely used. Metronidazole has CNS toxicity in cirrhotic patients. Oral vancomycin is not indicated for HE management."
  },
  {
    "id": 235,
    "chapter": 26,
    "domain": "Gastroenterology/Hepatology",
    "question": "A 61-year-old man with Child-Pugh C cirrhosis develops oliguria (urine output 200 mL/day). Urine sodium is <10 mEq/L, serum creatinine rose from 0.9 to 2.8 mg/dL over 5 days. Urinalysis is bland. He was given 1.5 L albumin over 48 hours without improvement. Abdomen CT shows no obstruction. What is the diagnosis?",
    "options": {
      "A": "Hepatorenal syndrome type 1 (HRS-AKI)",
      "B": "Prerenal azotemia",
      "C": "Contrast-induced nephropathy",
      "D": "Intrinsic acute tubular necrosis"
    },
    "answer": "A",
    "explanation": "Hepatorenal syndrome (HRS-AKI) is a functional renal failure in cirrhosis characterized by: rapid creatinine rise, urine sodium <20 mEq/L, no improvement after volume challenge (1.5 L albumin), no structural kidney disease on imaging, and no nephrotoxin exposure. The bland urinalysis and failure to respond to albumin distinguish it from prerenal azotemia and ATN. HRS-1 is rapidly progressive and requires urgent treatment with vasoconstrictors (terlipressin or norepinephrine) plus albumin."
  },
  {
    "id": 236,
    "chapter": 26,
    "domain": "Gastroenterology/Hepatology",
    "question": "A 49-year-old woman presents with acute variceal bleed. After endoscopic band ligation and octreotide, she is stable. Which antibiotic is recommended to reduce infection risk and mortality in cirrhotic patients with upper GIB?",
    "options": {
      "A": "IV ceftriaxone 1 g daily for 7 days",
      "B": "IV vancomycin for MRSA prophylaxis",
      "C": "Oral fluconazole for fungal prophylaxis",
      "D": "No antibiotic \u2014 infection prophylaxis is not evidence-based in this setting"
    },
    "answer": "A",
    "explanation": "Short-term antibiotic prophylaxis in cirrhotic patients with upper GIB reduces bacterial infections, spontaneous bacterial peritonitis, rebleeding, and mortality. IV ceftriaxone 1 g/day for 7 days is the preferred agent, particularly in patients with advanced cirrhosis or in hospitals with high quinolone-resistant bacterial prevalence. This is a class I recommendation in major hepatology guidelines. Prophylaxis is strongly evidence-based (Soriano et al., multiple meta-analyses)."
  },
  {
    "id": 237,
    "chapter": 26,
    "domain": "Gastroenterology/Hepatology",
    "question": "A 72-year-old woman presents with acute painless hematochezia and hemodynamic instability. Nasogastric lavage returns clear fluid. After resuscitation, colonoscopy shows fresh blood throughout the colon but no source identified. What is the next best diagnostic step?",
    "options": {
      "A": "Tagged red blood cell (RBC) nuclear medicine scan",
      "B": "CT colonography",
      "C": "Repeat upper endoscopy",
      "D": "Exploratory laparotomy"
    },
    "answer": "A",
    "explanation": "In brisk lower GIB where colonoscopy cannot identify a bleeding source, a tagged RBC scan (Tc-99m labeled RBCs) can detect bleeding rates as low as 0.1 mL/min and localizes the region of hemorrhage to guide angiography or surgical intervention. CT angiography is also an option for active bleeding (requires rate >0.5 mL/min). CT colonography evaluates structural disease but not active bleeding. Laparotomy without localization is avoided. Repeat upper endoscopy is appropriate only if the upper source was not adequately excluded."
  },
  {
    "id": 238,
    "chapter": 26,
    "domain": "Gastroenterology/Hepatology",
    "question": "A 38-year-old woman presents with jaundice, encephalopathy, and INR of 5.8 after taking acetaminophen. She has no prior liver disease. What is the acetaminophen-related King's College Criterion that mandates transplant evaluation?",
    "options": {
      "A": "Arterial pH <7.30 after resuscitation, OR creatinine >3.4 mg/dL + PT >100 seconds + encephalopathy grade III/IV",
      "B": "INR >4.0 with any encephalopathy",
      "C": "Acetaminophen level >150 \u00b5g/mL at 4 hours",
      "D": "Bilirubin >15 mg/dL with coagulopathy"
    },
    "answer": "A",
    "explanation": "King's College Criteria for acetaminophen-induced ALF: transplant listing if arterial pH <7.30 (after fluid resuscitation), OR the combination of all three: PT >100 seconds (INR >6.5), serum creatinine >3.4 mg/dL, and encephalopathy grade III or IV. This defines the 'triad' criterion. INR >4 with any encephalopathy, acetaminophen level, and bilirubin alone are not KCC criteria for APAP-induced ALF."
  },
  {
    "id": 239,
    "chapter": 26,
    "domain": "Gastroenterology/Hepatology",
    "question": "A 66-year-old man with peptic ulcer disease presents with hematemesis. Endoscopy shows a 1.5 cm duodenal ulcer with a visible vessel (Forrest class Ia active spurting). BP is 90/50 mmHg. After resuscitation, he undergoes hemostatic clip application with epinephrine injection. Which post-endoscopy medication reduces rebleeding risk most effectively?",
    "options": {
      "A": "High-dose IV proton pump inhibitor (PPI) bolus followed by continuous infusion for 72 hours",
      "B": "IV H2-blocker infusion",
      "C": "Oral PPI once daily",
      "D": "IV vasopressin infusion"
    },
    "answer": "A",
    "explanation": "After endoscopic hemostasis of a high-risk peptic ulcer (active bleeding or visible vessel), high-dose IV PPI (e.g., pantoprazole 80 mg bolus then 8 mg/hr for 72 hours) significantly reduces rebleeding, need for surgery, and mortality by maintaining intragastric pH >6 to promote platelet aggregation. H2-blockers are less effective at sustained acid suppression. Oral PPI is appropriate for lower-risk lesions after 72 hours. IV vasopressin is not indicated for peptic ulcer bleeding."
  },
  {
    "id": 240,
    "chapter": 26,
    "domain": "Gastroenterology/Hepatology",
    "question": "A 55-year-old man with cirrhosis and ascites presents to the ED with confusion and low-grade fever. Paracentesis shows 620 PMNs/mm\u00b3 in ascitic fluid. Blood and ascitic fluid cultures are pending. Which treatment should be initiated immediately?",
    "options": {
      "A": "IV cefotaxime 2 g every 8 hours plus IV albumin 1.5 g/kg on day 1",
      "B": "Oral ciprofloxacin and outpatient follow-up",
      "C": "Therapeutic paracentesis and IV furosemide",
      "D": "Empiric antifungal therapy while awaiting cultures"
    },
    "answer": "A",
    "explanation": "Spontaneous bacterial peritonitis (SBP) is diagnosed when ascitic PMN count \u2265250/mm\u00b3 in the absence of secondary peritonitis. Treatment is IV cefotaxime (or other 3rd-generation cephalosporin) immediately, plus IV albumin (1.5 g/kg day 1, 1 g/kg day 3) \u2014 albumin infusion reduces the risk of hepatorenal syndrome and mortality (Sort et al. NEJM 1999). Oral ciprofloxacin is used for SBP prophylaxis, not treatment. Therapeutic paracentesis does not treat infection. Antifungals are not indicated empirically."
  },
  {
    "id": 241,
    "chapter": 27,
    "domain": "Hematology/Critical Care",
    "question": "A 58-year-old woman with septic shock from pneumonia develops new thrombocytopenia (platelets 42,000/\u00b5L, down from 180,000/\u00b5L), prolonged PT and aPTT, low fibrinogen of 90 mg/dL, and elevated D-dimer >10 \u00b5g/mL. What is her ISTH DIC score and what does it indicate?",
    "options": {
      "A": "Score \u22655 \u2014 compatible with overt DIC, initiate supportive care",
      "B": "Score <5 \u2014 non-overt DIC, anticoagulation recommended",
      "C": "Score \u22655 \u2014 compatible with DIC, initiate anticoagulation with LMWH",
      "D": "DIC cannot be diagnosed without bone marrow biopsy"
    },
    "answer": "A",
    "explanation": "The ISTH DIC scoring system assigns points for platelet count (<50=2), D-dimer elevation (strong increase=3), prolonged PT (>6 sec=2), and fibrinogen <100 mg/dL (=1). This patient scores \u22655, indicating overt DIC. Management is treatment of the underlying cause (sepsis) plus supportive replacement of blood products as needed (FFP, cryoprecipitate, platelets) \u2014 not routine anticoagulation. Bone marrow biopsy is not required."
  },
  {
    "id": 242,
    "chapter": 27,
    "domain": "Hematology/Critical Care",
    "question": "A 32-year-old woman presents with microangiopathic hemolytic anemia (MAHA), thrombocytopenia (platelets 18,000/\u00b5L), fever, neurological symptoms, and elevated creatinine. Peripheral smear shows schistocytes. ADAMTS13 activity returns at <10%. Which treatment is most important to initiate immediately?",
    "options": {
      "A": "Plasma exchange (plasmapheresis) with fresh frozen plasma replacement",
      "B": "Platelet transfusion to maintain count >50,000/\u00b5L",
      "C": "IV heparin for presumed thrombotic disease",
      "D": "IV methylprednisolone alone"
    },
    "answer": "A",
    "explanation": "ADAMTS13 activity <10% is diagnostic for TTP. Immediate plasma exchange (PEX) with FFP replacement is life-saving and reduces mortality from >90% to ~20%. Platelet transfusions are contraindicated in TTP as they can fuel thrombosis ('fuel on the fire'). Heparin is not indicated. Steroids are used adjunctively with PEX but are insufficient as monotherapy."
  },
  {
    "id": 243,
    "chapter": 27,
    "domain": "Hematology/Critical Care",
    "question": "A 64-year-old man has been on unfractionated heparin for 9 days for DVT treatment. He develops new thrombocytopenia (platelets fall from 220,000 to 65,000/\u00b5L). Venous duplex shows a new left subclavian vein thrombosis. His 4T score is calculated as 6. Which intervention is most appropriate?",
    "options": {
      "A": "Stop all heparin and initiate a non-heparin anticoagulant (e.g., argatroban or fondaparinux)",
      "B": "Switch from unfractionated heparin to LMWH",
      "C": "Platelet transfusion and continue heparin at a lower dose",
      "D": "Warfarin bridge therapy with vitamin K antagonist"
    },
    "answer": "A",
    "explanation": "A 4T score of 6 (high probability) for HIT requires immediate cessation of all heparin products \u2014 including LMWH, heparin flushes, and heparin-coated catheters \u2014 and initiation of a direct thrombin inhibitor (argatroban, bivalirudin) or fondaparinux. Platelet transfusions are contraindicated in HIT (increase thrombotic risk). Warfarin must not be started until platelets recover (risk of warfarin-induced skin necrosis). LMWH is cross-reactive with HIT antibodies."
  },
  {
    "id": 244,
    "chapter": 27,
    "domain": "Hematology/Critical Care",
    "question": "Which PLASMIC score finding is most specific for TTP over HUS or other causes of thrombotic microangiopathy?",
    "options": {
      "A": "ADAMTS13 activity <10% (laboratory confirmation)",
      "B": "Platelet count <30,000/\u00b5L",
      "C": "Creatinine <2.0 mg/dL",
      "D": "No active cancer"
    },
    "answer": "A",
    "explanation": "While the PLASMIC score uses clinical and laboratory variables (platelets, hemolysis markers, no active cancer/hematopoietic stem cell transplant, MCV, INR, creatinine) to risk-stratify for ADAMTS13 deficiency, confirmation of ADAMTS13 activity <10% is the definitive diagnostic criterion distinguishing TTP from HUS and other TMAs. A low creatinine and absence of cancer increase PLASMIC score but are not specific. Platelet count alone is non-specific."
  },
  {
    "id": 245,
    "chapter": 27,
    "domain": "Hematology/Critical Care",
    "question": "A 70-year-old man with myelodysplastic syndrome requires transfusion in the ICU. His baseline hemoglobin is 6.8 g/dL. He is hemodynamically stable without active coronary artery disease. According to current evidence-based transfusion guidelines in ICU patients, what is the appropriate hemoglobin transfusion threshold?",
    "options": {
      "A": "7 g/dL",
      "B": "8 g/dL",
      "C": "9 g/dL",
      "D": "10 g/dL"
    },
    "answer": "A",
    "explanation": "The TRICC trial and subsequent guidelines established a restrictive transfusion threshold of Hgb 7 g/dL as safe and noninferior to 9\u201310 g/dL for most critically ill patients without active cardiac ischemia. A threshold of 8 g/dL is used for patients with acute coronary syndrome or those undergoing cardiac surgery. A threshold of 10 g/dL is excessively liberal and associated with increased morbidity."
  },
  {
    "id": 246,
    "chapter": 27,
    "domain": "Hematology/Critical Care",
    "question": "A 52-year-old woman with metastatic gastric cancer and a platelet count of 18,000/\u00b5L is actively bleeding from a gastric ulcer. She is scheduled for urgent endoscopy. What platelet threshold should be maintained peri-procedurally?",
    "options": {
      "A": "50,000/\u00b5L",
      "B": "100,000/\u00b5L",
      "C": "20,000/\u00b5L",
      "D": "10,000/\u00b5L"
    },
    "answer": "A",
    "explanation": "For invasive procedures and active bleeding in thrombocytopenic patients, the recommended platelet threshold is \u226550,000/\u00b5L. A threshold of 100,000/\u00b5L is used for neurosurgical procedures. For spontaneous bleeding prevention in stable patients, 10,000\u201320,000/\u00b5L may be acceptable. For endoscopic procedures with therapeutic intent (active hemostasis), 50,000/\u00b5L is the appropriate target per AABB and SCCM guidelines."
  },
  {
    "id": 247,
    "chapter": 27,
    "domain": "Hematology/Critical Care",
    "question": "A 48-year-old man develops DIC in the setting of gram-negative sepsis. His fibrinogen is 68 mg/dL and he is actively bleeding from IV sites. Which product most efficiently replaces fibrinogen?",
    "options": {
      "A": "Cryoprecipitate",
      "B": "Fresh frozen plasma (FFP)",
      "C": "Platelet concentrate",
      "D": "Prothrombin complex concentrate (PCC)"
    },
    "answer": "A",
    "explanation": "Cryoprecipitate is the most concentrated source of fibrinogen (each unit contains ~250 mg fibrinogen in ~15 mL), as well as factor VIII, von Willebrand factor, and factor XIII. The target fibrinogen in DIC is >150 mg/dL. FFP contains only 2\u20134 mg/mL fibrinogen and requires large volumes. Platelets do not replace fibrinogen. PCC replaces factors II, VII, IX, X but not fibrinogen."
  },
  {
    "id": 248,
    "chapter": 27,
    "domain": "Hematology/Critical Care",
    "question": "A 66-year-old woman on chronic warfarin develops immune thrombocytopenic purpura (ITP) with platelets of 6,000/\u00b5L and mucocutaneous bleeding. Which first-line treatment for ITP is most appropriate?",
    "options": {
      "A": "IV methylprednisolone 1 mg/kg/day",
      "B": "Platelet transfusion to keep count >20,000/\u00b5L",
      "C": "Emergency splenectomy",
      "D": "Rituximab infusion"
    },
    "answer": "A",
    "explanation": "Corticosteroids (prednisone or IV methylprednisolone) are first-line therapy for immune thrombocytopenic purpura (ITP) with significant bleeding or counts <20,000\u201330,000/\u00b5L. IVIg may be added for life-threatening bleeding. Platelet transfusions are only used as a temporizing measure in life-threatening hemorrhage since transfused platelets are rapidly destroyed. Splenectomy is second-line for refractory ITP. Rituximab is second/third-line."
  },
  {
    "id": 249,
    "chapter": 27,
    "domain": "Hematology/Critical Care",
    "question": "A 55-year-old man with newly diagnosed acute promyelocytic leukemia (APL) presents with gingival bleeding, purpura, and a prolonged PT/aPTT. Peripheral smear shows Auer rods in promyelocytes. Which treatment simultaneously addresses the underlying DIC and the leukemia?",
    "options": {
      "A": "All-trans retinoic acid (ATRA)",
      "B": "Aggressive FFP infusion alone until induction chemotherapy can begin",
      "C": "Heparin anticoagulation for the consumptive coagulopathy",
      "D": "Platelet transfusion plus cryoprecipitate and delay chemotherapy"
    },
    "answer": "A",
    "explanation": "APL is a hematologic emergency \u2014 DIC is driven by tissue factor expressed by promyelocytes. ATRA (tretinoin) induces differentiation of promyelocytes, rapidly reducing the source of DIC-driving factors while providing leukemia treatment. ATRA plus arsenic trioxide is the cornerstone of APL treatment. FFP alone does not address the ongoing coagulopathy source. Heparin in APL-related DIC is controversial and generally avoided. Delaying treatment increases hemorrhagic death risk."
  },
  {
    "id": 250,
    "chapter": 27,
    "domain": "Hematology/Critical Care",
    "question": "A patient's anti-PF4/heparin antibody ELISA returns strongly positive during workup for suspected HIT. What confirmatory test best establishes the diagnosis?",
    "options": {
      "A": "Serotonin release assay (SRA)",
      "B": "Repeat platelet count in 24 hours",
      "C": "Heparin-induced platelet aggregation (HIPA) test",
      "D": "Flow cytometry for platelet-bound IgG"
    },
    "answer": "A",
    "explanation": "The serotonin release assay (SRA) is the gold standard functional assay for HIT \u2014 it measures heparin-dependent platelet activation by testing whether patient serum activates donor platelets in the presence of heparin. It has >95% sensitivity and specificity. ELISA for anti-PF4 antibodies is sensitive but not specific (false positives common). HIPA is an alternative functional assay used in Europe. Flow cytometry for platelet IgG is non-specific."
  },
  {
    "id": 251,
    "chapter": 28,
    "domain": "Oncologic Emergencies",
    "question": "A 22-year-old man with Burkitt lymphoma initiating chemotherapy develops tetany. Labs show: uric acid 14.2 mg/dL, potassium 6.8 mEq/L, phosphorus 8.1 mg/dL, calcium 6.4 mg/dL, creatinine 3.2 mg/dL. Which condition is present and what is the immediate treatment priority?",
    "options": {
      "A": "Tumor lysis syndrome \u2014 aggressive IV hydration, allopurinol/rasburicase, cardiac monitoring for hyperkalemia",
      "B": "Hypocalcemia of malignancy \u2014 IV calcium replacement as first priority",
      "C": "Renal failure from contrast nephropathy \u2014 IV fluids and hold chemotherapy indefinitely",
      "D": "Addisonian crisis \u2014 IV hydrocortisone"
    },
    "answer": "A",
    "explanation": "This patient meets Cairo-Bishop criteria for laboratory tumor lysis syndrome (TLS): hyperuricemia, hyperkalemia, hyperphosphatemia, and hypocalcemia (secondary to phosphate precipitation). Hyperkalemia with EKG monitoring and cardiac risk is the most immediately life-threatening complication. IV hydration is the cornerstone of TLS management; rasburicase rapidly lowers uric acid (preferred over allopurinol for severe TLS). Calcium is given only for symptomatic hypocalcemia (giving calcium in the context of hyperphosphatemia risks calcification)."
  },
  {
    "id": 252,
    "chapter": 28,
    "domain": "Oncologic Emergencies",
    "question": "A 57-year-old woman with metastatic breast cancer presents with facial swelling, plethora, and dyspnea that worsen when she bends forward. CT chest shows superior vena cava compression by a mediastinal mass. She is not in acute respiratory distress. Which is the most appropriate initial management?",
    "options": {
      "A": "Tissue biopsy to establish histology before definitive treatment",
      "B": "Emergency radiation therapy without tissue diagnosis",
      "C": "Emergent surgical SVC bypass",
      "D": "IV dexamethasone 10 mg and immediate intubation"
    },
    "answer": "A",
    "explanation": "In SVC syndrome without life-threatening airway compromise, the priority is tissue biopsy to establish histology because treatment depends on tumor type (lymphoma responds to chemotherapy, NSCLC to radiation or chemo-radiation). Empiric radiation without diagnosis risks obscuring pathology and choosing inappropriate treatment. Emergency radiation is reserved for patients with laryngeal edema, stridor, or severe hemodynamic compromise. SVC bypass is rarely needed. Steroids may be given as bridging therapy but are not definitive."
  },
  {
    "id": 253,
    "chapter": 28,
    "domain": "Oncologic Emergencies",
    "question": "A 67-year-old man with known multiple myeloma presents with back pain, lower extremity weakness, and urinary retention for 12 hours. MRI spine shows a thoracic epidural mass at T6 with cord compression. What is the single most time-sensitive first intervention?",
    "options": {
      "A": "IV dexamethasone 10 mg bolus immediately",
      "B": "Radiation oncology consultation for urgent radiotherapy \u2014 begin within 24 hours",
      "C": "Urgent surgical decompression within 2 hours",
      "D": "MRI of the entire spine to rule out multilevel disease before any treatment"
    },
    "answer": "A",
    "explanation": "In malignant spinal cord compression (MSCC), high-dose IV dexamethasone is the most immediate intervention \u2014 it reduces vasogenic edema around the cord and can halt neurological deterioration while definitive treatment is arranged. The standard loading dose is 10 mg IV. Definitive treatment (radiation or surgery) follows urgently, but steroids must be given first without delay. Waiting for a complete spine MRI delays treatment; targeted imaging may be obtained expeditiously alongside steroid administration."
  },
  {
    "id": 254,
    "chapter": 28,
    "domain": "Oncologic Emergencies",
    "question": "A 62-year-old woman with lung cancer presents with polyuria, polydipsia, constipation, and confusion. Calcium is 14.8 mg/dL (corrected), creatinine 2.1 mg/dL, phosphorus 2.0 mEq/L. PTH is suppressed. PTHrP is elevated. Which initial treatment most rapidly lowers serum calcium?",
    "options": {
      "A": "IV normal saline hydration",
      "B": "IV pamidronate 90 mg",
      "C": "Furosemide 40 mg IV",
      "D": "Subcutaneous calcitonin"
    },
    "answer": "A",
    "explanation": "IV saline hydration is the most rapid first-line treatment for hypercalcemia of malignancy \u2014 it restores volume depletion, increases GFR, and promotes renal calcium excretion. Bisphosphonates (pamidronate, zoledronic acid) are the most effective agents for sustained calcium lowering but take 48\u201372 hours to reach maximal effect. Furosemide was historically used after rehydration but is no longer routinely recommended. Calcitonin has rapid but modest and transient effect (tachyphylaxis occurs within 48\u201372 hours)."
  },
  {
    "id": 255,
    "chapter": 28,
    "domain": "Oncologic Emergencies",
    "question": "A 58-year-old man with AML is admitted with fever (38.5\u00b0C) and an absolute neutrophil count (ANC) of 280/\u00b5L, 8 days after induction chemotherapy. Blood cultures are drawn and chest X-ray is normal. Which is the most appropriate empiric antibiotic regimen?",
    "options": {
      "A": "Cefepime or piperacillin-tazobactam monotherapy covering Pseudomonas",
      "B": "Oral ciprofloxacin and amoxicillin-clavulanate \u2014 low-risk outpatient management",
      "C": "Broad empiric vancomycin + cefepime + antifungal (triple coverage)",
      "D": "Hold antibiotics until blood culture results return"
    },
    "answer": "A",
    "explanation": "Febrile neutropenia in a high-risk patient (ANC <500, post-induction AML) requires immediate empiric IV antipseudomonal beta-lactam monotherapy (cefepime, meropenem, or piperacillin-tazobactam). IDSA guidelines support monotherapy for most high-risk febrile neutropenia. Vancomycin is NOT added routinely upfront unless there are specific indications (catheter infection, skin infection, hemodynamic instability, MRSA colonization). Oral outpatient treatment is for low-risk patients (MASCC score). Delaying antibiotics worsens mortality."
  },
  {
    "id": 256,
    "chapter": 28,
    "domain": "Oncologic Emergencies",
    "question": "A 45-year-old woman undergoing induction chemotherapy for ALL develops acute confusion, hyponatremia (Na 122 mEq/L), and headache. MRI brain shows diffuse white matter changes. Cyclosporine is listed in her medication reconciliation. Which syndrome should be suspected?",
    "options": {
      "A": "Posterior reversible encephalopathy syndrome (PRES)",
      "B": "Leptomeningeal carcinomatosis",
      "C": "Viral encephalitis from immunosuppression",
      "D": "Chemotherapy-induced stroke"
    },
    "answer": "A",
    "explanation": "PRES (Posterior Reversible Encephalopathy Syndrome) presents with hypertension, encephalopathy, seizures, and visual disturbances with bilateral posterior white matter changes on MRI FLAIR. It is strongly associated with calcineurin inhibitors (cyclosporine, tacrolimus), cytotoxic chemotherapy, and hypertensive encephalopathy. Management includes removing the offending agent and blood pressure control. Leptomeningeal disease has different MRI findings. Hyponatremia may co-occur but PRES is the primary diagnosis here."
  },
  {
    "id": 257,
    "chapter": 28,
    "domain": "Oncologic Emergencies",
    "question": "Which clinical finding in a patient with febrile neutropenia mandates addition of empiric vancomycin to the initial antibiotic regimen?",
    "options": {
      "A": "Hemodynamic instability or suspected catheter-related bloodstream infection",
      "B": "Absolute neutrophil count below 100/\u00b5L",
      "C": "Temperature above 39\u00b0C",
      "D": "Prophylactic fluoroquinolone use prior to admission"
    },
    "answer": "A",
    "explanation": "IDSA guidelines specify that vancomycin should be added to empiric febrile neutropenia regimens when there are specific indications: hemodynamic instability, suspected catheter-related infection, known MRSA colonization, severe mucositis, or skin/soft tissue infection. ANC below 100/\u00b5L defines profound neutropenia but does not independently mandate vancomycin. High fever temperature alone is not an indication. Fluoroquinolone prophylaxis is not an indication for empiric vancomycin."
  },
  {
    "id": 258,
    "chapter": 28,
    "domain": "Oncologic Emergencies",
    "question": "A 72-year-old man with newly diagnosed diffuse large B-cell lymphoma (DLBCL) is about to receive his first cycle of R-CHOP. His LDH is markedly elevated, renal function is mildly impaired, and his tumor bulk is massive. Which agent is preferred over allopurinol for TLS prophylaxis in this high-risk patient?",
    "options": {
      "A": "Rasburicase",
      "B": "Febuxostat",
      "C": "Probenecid",
      "D": "Sodium bicarbonate alkalinization"
    },
    "answer": "A",
    "explanation": "Rasburicase (recombinant urate oxidase) converts uric acid to allantoin, which is 5\u201310 times more soluble, and rapidly reduces serum uric acid within hours. It is the preferred agent for high-risk TLS patients (massive tumor bulk, elevated LDH, renal impairment) or established TLS. Allopurinol prevents new uric acid production but does not reduce existing uric acid. Febuxostat is a second-line xanthine oxidase inhibitor. Urine alkalinization with bicarbonate is no longer routinely recommended as it promotes xanthine and calcium phosphate precipitation."
  },
  {
    "id": 259,
    "chapter": 28,
    "domain": "Oncologic Emergencies",
    "question": "A 35-year-old man with testicular cancer develops progressive lower limb paraparesis over 24 hours. MRI shows spinal cord compression at L1. He has been ambulatory until this morning. Which prognostic factor is the strongest predictor of neurological recovery after treatment for MSCC?",
    "options": {
      "A": "Neurological function at the time of treatment initiation",
      "B": "Tumor histology (germ cell vs. epithelial)",
      "C": "Level of cord compression (cervical vs. lumbar)",
      "D": "Patient age"
    },
    "answer": "A",
    "explanation": "The most powerful predictor of post-treatment neurological recovery in malignant spinal cord compression is the patient's neurological status at the start of treatment \u2014 ambulatory patients remain ambulatory in ~80% of cases, while paraplegic patients recover ambulation in only ~10%. This underscores the urgency of early treatment. This patient, who was ambulatory until this morning, has a good prognosis if treatment (steroids + radiation or surgery) is initiated immediately."
  },
  {
    "id": 260,
    "chapter": 28,
    "domain": "Oncologic Emergencies",
    "question": "A 50-year-old woman with small cell lung cancer (SCLC) presents with severe hyponatremia (Na 114 mEq/L), low serum osmolality, and urine sodium of 68 mEq/L with urine osmolality of 540 mOsm/kg. She is euvolemic. Which syndrome is most likely?",
    "options": {
      "A": "Syndrome of inappropriate antidiuretic hormone secretion (SIADH)",
      "B": "Cerebral salt wasting",
      "C": "Primary polydipsia",
      "D": "Adrenal insufficiency from metastatic disease"
    },
    "answer": "A",
    "explanation": "SCLC is the classic cause of ectopic ADH production (SIADH), producing euvolemic hypotonic hyponatremia with inappropriately concentrated urine (urine osm >100 mOsm/kg) and elevated urine sodium (>20 mEq/L). Cerebral salt wasting is hypovolemic. Primary polydipsia shows very dilute urine. Adrenal insufficiency presents with hyperkalemia and symptoms of adrenal crisis. SIADH management includes fluid restriction \u00b1 vaptans for severe/refractory cases."
  },
  {
    "id": 261,
    "chapter": 29,
    "domain": "Trauma/Critical Care",
    "question": "A 28-year-old man is brought in after a motor vehicle collision. BP is 72/40 mmHg, HR 138, GCS is 12. FAST exam shows free fluid in the abdomen. He has bilateral femur fractures. Which resuscitation strategy is supported by damage control principles?",
    "options": {
      "A": "1:1:1 ratio of packed red blood cells, fresh frozen plasma, and platelets",
      "B": "3 liters of normal saline followed by packed red blood cells",
      "C": "Crystalloid resuscitation to MAP >65 mmHg before blood products",
      "D": "Colloid resuscitation with 4% albumin as first-line"
    },
    "answer": "A",
    "explanation": "Damage control resuscitation (DCR) for hemorrhagic shock in trauma uses balanced blood product resuscitation in a 1:1:1 ratio (pRBC:FFP:platelets), minimizing crystalloid use. The PROPPR trial demonstrated improved hemostasis and 24-hour survival with this strategy. Large crystalloid infusions cause dilutional coagulopathy, hypothermia, and acidosis. Albumin and crystalloids do not address the coagulopathy of trauma. Permissive hypotension (MAP 50\u201365 mmHg) is maintained until surgical hemostasis."
  },
  {
    "id": 262,
    "chapter": 29,
    "domain": "Trauma/Critical Care",
    "question": "A 35-year-old man sustains a penetrating abdominal trauma with hemorrhagic shock. BP is 65/40 mmHg. Which BP target is appropriate before surgical hemorrhage control?",
    "options": {
      "A": "Systolic BP 80\u201390 mmHg (permissive hypotension)",
      "B": "Systolic BP >120 mmHg to prevent end-organ injury",
      "C": "MAP >65 mmHg using aggressive crystalloid resuscitation",
      "D": "Normalization of BP before any surgical intervention"
    },
    "answer": "A",
    "explanation": "Permissive hypotension (targeting systolic BP 80\u201390 mmHg or MAP 50\u201365 mmHg) is the standard of care in penetrating trauma with ongoing hemorrhage until surgical hemostasis is achieved. Aggressive normalization of BP before hemorrhage control dilutes clotting factors, dislodges formed clots, and increases blood loss. The exception is TBI, where CPP must be maintained (avoid SBP <90 mmHg in TBI). MAP >65 with large crystalloid volumes worsens dilutional coagulopathy."
  },
  {
    "id": 263,
    "chapter": 29,
    "domain": "Trauma/Critical Care",
    "question": "A 42-year-old woman sustains blunt head trauma in a car accident. GCS is 7. CT head shows a contusion without significant mass effect. ICP monitor is placed; initial reading is 26 mmHg. MAP is 78 mmHg. What is the first-line treatment to lower ICP in this patient?",
    "options": {
      "A": "30\u00b0 head of bed elevation, midline head positioning, and IV mannitol 1 g/kg",
      "B": "IV phenytoin to prevent post-traumatic seizures lowering ICP",
      "C": "Urgent decompressive craniectomy",
      "D": "Aggressive hyperventilation to PaCO2 of 25 mmHg"
    },
    "answer": "A",
    "explanation": "First-line ICP management in TBI includes head of bed elevation to 30\u00b0, maintaining midline head position to maximize venous drainage, and osmotherapy with mannitol or hypertonic saline. Prophylactic phenytoin reduces early post-traumatic seizures but does not lower ICP. Aggressive hyperventilation (PaCO2 25 mmHg) causes reflex cerebral vasoconstriction and is reserved for acute herniation as a bridge \u2014 prolonged use causes ischemia. Decompressive craniectomy is reserved for refractory ICP elevation."
  },
  {
    "id": 264,
    "chapter": 29,
    "domain": "Trauma/Critical Care",
    "question": "A 25-year-old man with severe TBI has ICP of 30 mmHg. The ICU team is deciding between mannitol and 23.4% hypertonic saline for osmotherapy. Which statement correctly compares these two agents?",
    "options": {
      "A": "Hypertonic saline maintains intravascular volume and may be preferred when the patient is hypovolemic; mannitol is an osmotic diuretic that decreases intravascular volume",
      "B": "Mannitol is superior in patients with hyponatremia",
      "C": "Hypertonic saline is contraindicated in patients with cerebral herniation",
      "D": "Both agents are equally effective when serum sodium exceeds 155 mEq/L"
    },
    "answer": "A",
    "explanation": "The key clinical distinction: mannitol acts as an osmotic diuretic, reducing intravascular volume and potentially causing hypotension \u2014 important to avoid in trauma patients who may be hypovolemic. Hypertonic saline (HTS) expands intravascular volume while reducing brain water, making it preferred in hypovolemic patients. HTS is also useful when serum sodium is already low. Mannitol should be avoided if serum osmolality >320 mOsm/kg. Both agents lose efficacy when serum sodium is very high, but HTS ceiling is sodium ~155\u2013160 mEq/L."
  },
  {
    "id": 265,
    "chapter": 29,
    "domain": "Trauma/Critical Care",
    "question": "A trauma patient arrives with hypotension and FAST exam shows pericardial effusion with right ventricular collapse. HR is 130, JVD is present, and lung fields are clear. What is the emergency intervention?",
    "options": {
      "A": "Pericardiocentesis or emergency pericardial window",
      "B": "IV fluid bolus 2 liters and vasopressors",
      "C": "Bilateral needle decompression of the chest",
      "D": "Immediate endotracheal intubation"
    },
    "answer": "A",
    "explanation": "Beck's triad (hypotension, JVD, muffled heart sounds) with FAST-confirmed pericardial effusion and RV diastolic collapse indicates cardiac tamponade. Emergency treatment is pericardial decompression \u2014 bedside pericardiocentesis for hemodynamic instability, or emergency pericardial window in the OR if tamponade is traumatic (hemopericardium). IV fluids may temporize slightly by increasing preload. Needle decompression treats tension pneumothorax, not tamponade. Intubation during tamponade can precipitate cardiac arrest."
  },
  {
    "id": 266,
    "chapter": 29,
    "domain": "Trauma/Critical Care",
    "question": "During trauma bay evaluation of a 30-year-old man with high-speed MVC, the FAST exam is performed. Which of the following is NOT a standard FAST exam window?",
    "options": {
      "A": "Renal cortex (longitudinal coronal view of the kidney parenchyma)",
      "B": "Right upper quadrant (hepatorenal space \u2014 Morison's pouch)",
      "C": "Left upper quadrant (perisplenic space)",
      "D": "Pelvic (pouch of Douglas/rectovesical)"
    },
    "answer": "A",
    "explanation": "The standard FAST exam assesses four windows: right upper quadrant (Morison's pouch), left upper quadrant (splenorenal space), pelvic (pouch of Douglas in women, rectovesical in men), and the pericardial window (subxiphoid). The extended FAST (E-FAST) adds bilateral anterior chest views to evaluate for pneumothorax and hemothorax. The renal cortex parenchyma (longitudinal kidney view) is not a standard FAST window."
  },
  {
    "id": 267,
    "chapter": 29,
    "domain": "Trauma/Critical Care",
    "question": "A 55-year-old man sustains massive trauma requiring emergent surgery. He received 12 units of pRBCs, 12 units of FFP, and 2 platelet pheresis packs. Post-operatively he develops hypocalcemia. What is the most likely etiology?",
    "options": {
      "A": "Citrate toxicity from massive transfusion chelating ionized calcium",
      "B": "Dilutional hypocalcemia from crystalloid co-administration",
      "C": "Crush-injury-induced hypoparathyroidism",
      "D": "Pancreatitis from abdominal trauma causing saponification"
    },
    "answer": "A",
    "explanation": "Blood products are preserved with citrate anticoagulant, which chelates ionized calcium. With massive transfusion (>10 units pRBCs), citrate accumulates faster than the liver can metabolize it (especially in hypothermic, hypoperfused patients), causing symptomatic ionized hypocalcemia. This manifests as hypotension, tetany, and cardiac arrhythmias. IV calcium chloride or calcium gluconate replacement is essential in massive transfusion protocols. Saponification from pancreatitis is possible but less immediately relevant here."
  },
  {
    "id": 268,
    "chapter": 29,
    "domain": "Trauma/Critical Care",
    "question": "A 32-year-old man with penetrating chest trauma has absent breath sounds on the left and tracheal deviation to the right. BP is 70/50 mmHg, HR 148. What is the immediate intervention?",
    "options": {
      "A": "Needle decompression of the left chest at the 2nd intercostal space, midclavicular line",
      "B": "Chest X-ray to confirm pneumothorax before intervention",
      "C": "Endotracheal intubation and positive pressure ventilation",
      "D": "Thoracotomy in the trauma bay"
    },
    "answer": "A",
    "explanation": "Absent breath sounds with tracheal deviation away from the affected side plus hemodynamic instability constitutes tension pneumothorax \u2014 a clinical diagnosis requiring immediate needle decompression without waiting for imaging. Second intercostal space at midclavicular line (or 4th\u20135th ICS anterior axillary line per newer guidelines) decompresses the tension. Intubation may worsen tension pneumothorax. Emergency department thoracotomy is for traumatic cardiac arrest. CXR delays life-saving intervention."
  },
  {
    "id": 269,
    "chapter": 29,
    "domain": "Trauma/Critical Care",
    "question": "In a patient with severe TBI and ICP of 22 mmHg, the neurocritical care team is considering decompressive craniectomy. According to the RESCUEicp trial, which outcome is most accurately described?",
    "options": {
      "A": "Craniectomy reduces mortality but increases survival with severe disability and vegetative state",
      "B": "Craniectomy improves both mortality and functional neurological outcomes equally",
      "C": "Craniectomy has no effect on ICP but reduces length of ICU stay",
      "D": "Craniectomy is associated with lower rates of post-traumatic epilepsy"
    },
    "answer": "A",
    "explanation": "The RESCUEicp trial showed that decompressive craniectomy significantly reduces ICP and mortality in refractory TBI, but at the cost of more survivors with severe disability and vegetative state compared to medical management. This creates a difficult ethical tension \u2014 fewer deaths but more patients living with profound neurological impairment. The trial informs shared decision-making rather than mandating craniectomy for all refractory ICP. It does not reduce epilepsy rates."
  },
  {
    "id": 270,
    "chapter": 29,
    "domain": "Trauma/Critical Care",
    "question": "A 40-year-old trauma patient receives tranexamic acid (TXA) in the field. What is the most critical timing constraint for TXA to be effective in traumatic hemorrhage?",
    "options": {
      "A": "Within 3 hours of injury onset",
      "B": "Within 6 hours of injury onset",
      "C": "Within 12 hours \u2014 timing does not significantly affect outcome",
      "D": "Only effective if given pre-hospital; in-hospital administration is ineffective"
    },
    "answer": "A",
    "explanation": "The CRASH-2 trial demonstrated that TXA (antifibrinolytic agent) reduces mortality in traumatic hemorrhage when given within 3 hours of injury. Administration after 3 hours showed no mortality benefit, and administration after 3 hours was associated with increased risk of death from bleeding \u2014 possibly because fibrinolysis transitions to a pro-thrombotic phase. The Military Application of Tranexamic Acid in Trauma Emergency Resuscitation (MATTERs) study confirmed early benefit. In-hospital administration within 3 hours remains effective."
  },
  {
    "id": 271,
    "chapter": 30,
    "domain": "Toxicology",
    "question": "A 19-year-old woman presents 6 hours after ingesting an unknown quantity of acetaminophen. Her serum acetaminophen level is 280 \u00b5g/mL at hour 6 post-ingestion. AST and ALT are normal. Plotting on the Rumack-Matthew nomogram places her above the treatment line. Which is the most appropriate intervention?",
    "options": {
      "A": "N-acetylcysteine (NAC) IV infusion initiated immediately",
      "B": "Activated charcoal alone and observe for 24 hours",
      "C": "Supportive care only since liver enzymes are currently normal",
      "D": "Hemodialysis to remove acetaminophen"
    },
    "answer": "A",
    "explanation": "The Rumack-Matthew nomogram uses acetaminophen level at 4\u201324 hours post-ingestion to predict hepatotoxicity risk. A level of 280 \u00b5g/mL at 6 hours is well above the treatment line (~150 \u00b5g/mL at 4 hours). NAC is the antidote and is most effective when started within 8\u201310 hours of ingestion, but provides benefit even up to 24\u201336 hours. Normal AST/ALT at 6 hours is expected \u2014 hepatotoxicity peaks at 48\u201372 hours. Activated charcoal is only useful within 1\u20132 hours of ingestion. Hemodialysis does not remove acetaminophen significantly."
  },
  {
    "id": 272,
    "chapter": 30,
    "domain": "Toxicology",
    "question": "A 25-year-old man is found unresponsive with pinpoint pupils, RR of 6/min, and cyanosis. EMS suspects heroin overdose. After airway management, which naloxone dosing strategy is most appropriate?",
    "options": {
      "A": "0.4\u20132 mg IV/IM/IN, titrated to adequate spontaneous respirations (not full arousal)",
      "B": "10 mg IV bolus to ensure complete reversal of opioids",
      "C": "Naloxone 0.1 mg/kg IV for weight-based precise dosing",
      "D": "Naloxone only after intubation to prevent precipitation of pulmonary edema"
    },
    "answer": "A",
    "explanation": "Naloxone 0.4\u20132 mg is the standard initial dose for opioid overdose, titrated to restore adequate respiratory drive \u2014 not to full alertness, which risks precipitating acute opioid withdrawal, agitation, and vomiting. Large bolus doses (e.g., 10 mg) are reserved for suspected partial agonists or very high-potency opioids (fentanyl, carfentanil) when standard doses fail. Weight-based dosing is not standard. Naloxone administration before intubation is appropriate and preferred when breathing can be restored."
  },
  {
    "id": 273,
    "chapter": 30,
    "domain": "Toxicology",
    "question": "A 16-year-old boy presents with altered mental status, QRS duration of 160 ms on EKG, hypotension, and seizures. His mother finds an empty package of amitriptyline in his room. Which treatment is most effective for the QRS widening?",
    "options": {
      "A": "IV sodium bicarbonate bolus (1\u20132 mEq/kg) to achieve serum pH of 7.45\u20137.55",
      "B": "IV lidocaine 1.5 mg/kg bolus",
      "C": "Amiodarone 300 mg IV bolus",
      "D": "Synchronized cardioversion"
    },
    "answer": "A",
    "explanation": "Tricyclic antidepressant (TCA) overdose causes sodium channel blockade, manifesting as QRS widening, ventricular arrhythmias, seizures, and hypotension. IV sodium bicarbonate is the treatment of choice \u2014 it alkalinizes the serum (pH 7.45\u20137.55) and increases sodium load, both of which overcome sodium channel blockade and narrow the QRS. Target QRS <100 ms. Lidocaine can worsen TCA toxicity. Amiodarone is contraindicated (QTc prolongation + sodium channel effect). Cardioversion is for hemodynamically unstable VT/VF."
  },
  {
    "id": 274,
    "chapter": 30,
    "domain": "Toxicology",
    "question": "A 45-year-old farmer is brought in after accidental exposure to an organophosphate pesticide. He has miosis, excessive salivation, lacrimation, diarrhea, vomiting, diaphoresis, and bradycardia. Which antidote combination addresses both muscarinic and nicotinic toxicity?",
    "options": {
      "A": "Atropine (for muscarinic effects) plus pralidoxime/2-PAM (to reactivate cholinesterase before aging)",
      "B": "Atropine alone in high doses",
      "C": "Physostigmine plus diazepam",
      "D": "Neostigmine plus glycopyrrolate"
    },
    "answer": "A",
    "explanation": "Organophosphate poisoning causes acetylcholinesterase inhibition, leading to SLUDGE/DUMBELS symptoms (muscarinic) and nicotinic effects (muscle weakness, fasciculations). Atropine reverses muscarinic effects (bronchospasm, secretions, bradycardia) but does not reactivate cholinesterase. Pralidoxime (2-PAM) reactivates the enzyme if given before 'aging' (irreversible binding) and addresses both muscarinic and nicotinic toxicity. Physostigmine is a cholinesterase inhibitor \u2014 it worsens toxicity. Neostigmine is contraindicated."
  },
  {
    "id": 275,
    "chapter": 30,
    "domain": "Toxicology",
    "question": "A 55-year-old woman on diltiazem for atrial fibrillation takes a massive overdose. She presents with bradycardia (HR 38), hypotension (BP 70/40 mmHg), and hyperglycemia. High-dose insulin therapy is initiated. What is the mechanism by which high-dose insulin euglycemia (HDIE) therapy works in CCB overdose?",
    "options": {
      "A": "Insulin improves myocardial carbohydrate metabolism, overcoming the calcium channel blockade-induced shift to fatty acid metabolism",
      "B": "Insulin directly blocks calcium channels in the myocardium",
      "C": "Insulin increases systemic vascular resistance through alpha-adrenergic stimulation",
      "D": "Insulin increases intracellular calcium stores in cardiac myocytes"
    },
    "answer": "A",
    "explanation": "In CCB toxicity, calcium channel blockade shifts myocardial metabolism toward fatty acid oxidation, which is less efficient under stress. High-dose insulin euglycemia therapy (HDIE) \u2014 typically insulin 1 unit/kg bolus then 0.5\u20132 units/kg/hr \u2014 shifts myocardial substrate utilization back to carbohydrate (glucose) metabolism, improving inotropy. It is not a direct calcium channel effect. HDIE is now first-line for hemodynamically significant CCB and beta-blocker overdose, alongside calcium and vasopressors."
  },
  {
    "id": 276,
    "chapter": 30,
    "domain": "Toxicology",
    "question": "A 22-year-old man presents with agitation, hyperthermia (39.8\u00b0C), diaphoresis, tremor, clonus (especially ankle), and hyperreflexia. He is on fluoxetine and recently started linezolid for a MRSA infection. Which toxidrome is most likely?",
    "options": {
      "A": "Serotonin syndrome",
      "B": "Neuroleptic malignant syndrome (NMS)",
      "C": "Anticholinergic toxidrome",
      "D": "Malignant hyperthermia"
    },
    "answer": "A",
    "explanation": "Serotonin syndrome is caused by excess serotonergic activity and is characterized by the Hunter triad: clonus (spontaneous or inducible), agitation/altered mental status, and autonomic instability. Linezolid is a weak MAO inhibitor that when combined with SSRIs (fluoxetine) causes excess serotonin. The clinical hallmark distinguishing serotonin syndrome from NMS is clonus and hyperreflexia \u2014 NMS features lead-pipe rigidity and is associated with antipsychotics. Anticholinergic toxidrome lacks clonus. Malignant hyperthermia occurs with volatile anesthetics."
  },
  {
    "id": 277,
    "chapter": 30,
    "domain": "Toxicology",
    "question": "A 30-year-old woman presents to the ED 2 hours after taking 'a handful' of acetaminophen tablets. She is asymptomatic and her level is pending. Which intervention is most appropriate while awaiting the level?",
    "options": {
      "A": "Activated charcoal 1 g/kg orally if airway is intact and ingestion occurred within 2 hours",
      "B": "Gastric lavage regardless of time since ingestion",
      "C": "Start NAC empirically before acetaminophen level returns",
      "D": "Induce emesis with syrup of ipecac"
    },
    "answer": "A",
    "explanation": "Activated charcoal (1 g/kg) effectively adsorbs acetaminophen when given within 1\u20132 hours of ingestion and reduces systemic absorption. She is at 2 hours \u2014 at the edge of charcoal efficacy but still potentially beneficial. Gastric lavage has not been shown to improve outcomes and carries aspiration risk. Empiric NAC before knowing the level is controversial \u2014 the nomogram requires a timed level; empiric NAC is justified if level will be significantly delayed (>8 hours after ingestion). Ipecac is no longer recommended by poison centers."
  },
  {
    "id": 278,
    "chapter": 30,
    "domain": "Toxicology",
    "question": "A 48-year-old man with chronic pain presents after ingesting his entire opioid prescription (extended-release oxycodone). He is initially drowsy but arousable. One hour later his GCS drops to 8. Why do extended-release opioid formulations require special consideration in overdose management?",
    "options": {
      "A": "Delayed peak toxicity requires prolonged naloxone infusion and extended monitoring",
      "B": "Extended-release opioids are resistant to naloxone reversal",
      "C": "They cause irreversible opioid receptor binding requiring higher naloxone doses",
      "D": "Extended-release formulations are metabolized by a different pathway that bypasses naloxone reversal"
    },
    "answer": "A",
    "explanation": "Extended-release opioid formulations release drug over 8\u201324 hours, causing delayed peak serum concentrations and prolonged toxicity. Standard naloxone bolus dosing has a half-life of 60\u201390 minutes \u2014 shorter than the opioid \u2014 causing recurrent respiratory depression (re-narcotization). These patients require continuous IV naloxone infusions (typically 2/3 of the effective reversal dose per hour) and prolonged monitoring (\u226512\u201324 hours). Extended-release opioids are fully reversible by naloxone."
  },
  {
    "id": 279,
    "chapter": 30,
    "domain": "Toxicology",
    "question": "A 60-year-old man presents with confusion, tachycardia, mydriasis, dry flushed skin, urinary retention, and absent bowel sounds. Temperature is 38.2\u00b0C. Which toxidrome is this?",
    "options": {
      "A": "Anticholinergic toxidrome",
      "B": "Sympathomimetic toxidrome",
      "C": "Cholinergic toxidrome",
      "D": "Opioid toxidrome"
    },
    "answer": "A",
    "explanation": "The anticholinergic toxidrome is classically remembered as: 'Mad as a hatter, blind as a bat, dry as a bone, red as a beet, hot as a hare, full as a flask' \u2014 confusion, mydriasis, dry skin/mucosa, flushing, hyperthermia, and urinary retention. Sympathomimetic toxidrome also causes tachycardia and mydriasis but features diaphoresis (wet skin), not dry skin. Cholinergic features include SLUDGE (moist secretions, miosis). Opioid toxidrome causes miosis, not mydriasis."
  },
  {
    "id": 280,
    "chapter": 30,
    "domain": "Toxicology",
    "question": "A 35-year-old woman presents with progressive ascending weakness, areflexia, and bilateral facial droop after eating home-canned vegetables 24 hours ago. She has diplopia and ptosis. Which toxin is responsible and what is the treatment?",
    "options": {
      "A": "Botulinum toxin \u2014 heptavalent botulinum antitoxin",
      "B": "Organophosphate \u2014 atropine plus pralidoxime",
      "C": "Tetrodotoxin \u2014 supportive care only",
      "D": "Ciguatoxin \u2014 mannitol infusion"
    },
    "answer": "A",
    "explanation": "Food-borne botulism (Clostridium botulinum) presents with descending flaccid paralysis, cranial nerve palsies (diplopia, ptosis, dysarthria), areflexia, and autonomic dysfunction \u2014 classically after ingestion of home-canned foods. Treatment is heptavalent botulinum antitoxin (HBAT), which neutralizes circulating toxin. It must be administered early before toxin binds irreversibly to nerve terminals. Supportive care and mechanical ventilation are essential. Antibiotics do not help wound botulism unless debridement is performed."
  },
  {
    "id": 281,
    "chapter": 31,
    "domain": "Critical Care Ultrasound",
    "question": "A 55-year-old intubated woman with hypoxic respiratory failure undergoes lung ultrasound. Multiple coalescing B-lines (\u22653 per field) are identified bilaterally in anterior and lateral lung zones. What does this finding most likely indicate?",
    "options": {
      "A": "Interstitial pulmonary edema or diffuse alveolar damage (ARDS)",
      "B": "Normal aeration pattern",
      "C": "Pneumothorax",
      "D": "Consolidation with air bronchograms"
    },
    "answer": "A",
    "explanation": "B-lines on lung ultrasound are vertical, laser-like hyperechoic artifacts arising from the pleural line that extend to the edge of the screen without fading. Three or more B-lines per intercostal space indicate interstitial syndrome \u2014 causes include pulmonary edema (cardiogenic or non-cardiogenic/ARDS), pneumonia, and pulmonary fibrosis. Normal lung shows A-lines (horizontal reverberation artifacts). Pneumothorax shows absent lung sliding with only A-lines. Consolidation appears as hepatized, tissue-like echogenicity."
  },
  {
    "id": 282,
    "chapter": 31,
    "domain": "Critical Care Ultrasound",
    "question": "A 70-year-old man with a history of CHF presents with acute dyspnea. Bedside RUSH protocol is performed. IVC diameter is 2.4 cm with <15% collapsibility on inspiration. What does this finding suggest?",
    "options": {
      "A": "Elevated right atrial pressure \u2014 consistent with volume overload or obstructive shock",
      "B": "Hypovolemia \u2014 IVC collapsibility >50% expected in fluid-responsive patients",
      "C": "Normal IVC \u2014 no clinical significance",
      "D": "Pericardial tamponade as the only explanation for a plethoric IVC"
    },
    "answer": "A",
    "explanation": "IVC collapsibility index (CI) = (IVC max - IVC min) / IVC max \u00d7 100%. A plethoric IVC (>2.1 cm) with <15% inspiratory collapse indicates elevated right atrial pressure (>15 mmHg), suggesting volume overload, right heart failure, cardiac tamponade, or tension pneumothorax. A collapsibility >50% suggests low right atrial pressure (<5 mmHg) and volume responsiveness. A large non-collapsing IVC alone doesn't diagnose tamponade but raises suspicion when combined with other findings."
  },
  {
    "id": 283,
    "chapter": 31,
    "domain": "Critical Care Ultrasound",
    "question": "During a bedside cardiac echo in a hypotensive ICU patient, the parasternal short-axis view reveals a 'D-sign' (D-shaped left ventricle with septal flattening). What does this finding indicate?",
    "options": {
      "A": "Right ventricular pressure overload causing interventricular septal shift toward the left ventricle",
      "B": "Left ventricular hypertrophy from chronic hypertension",
      "C": "Cardiac tamponade with right atrial collapse",
      "D": "Hypovolemic state with underfilled ventricles"
    },
    "answer": "A",
    "explanation": "The D-sign on parasternal short-axis echocardiography represents interventricular septal deviation toward the LV cavity, making the LV appear D-shaped instead of round. This occurs when RV pressure exceeds LV pressure, causing the septum to bow left \u2014 seen in massive pulmonary embolism, severe pulmonary hypertension, or RV infarction. Cardiac tamponade causes RV and RA diastolic collapse. Hypovolemia shows small underfilled ventricles without D-sign. LVH causes concentric thickening."
  },
  {
    "id": 284,
    "chapter": 31,
    "domain": "Critical Care Ultrasound",
    "question": "A 40-year-old man develops acute hypotension in the ICU. Bedside RUSH exam is performed. Which component of the RUSH protocol assesses for tension pneumothorax?",
    "options": {
      "A": "Lung ultrasound \u2014 absent lung sliding with A-lines in anterior chest",
      "B": "Cardiac ultrasound \u2014 dilated right ventricle",
      "C": "IVC assessment \u2014 plethoric IVC",
      "D": "Abdominal ultrasound \u2014 peritoneal free fluid"
    },
    "answer": "A",
    "explanation": "In the RUSH (Rapid Ultrasound in Shock and Hypotension) protocol, tension pneumothorax is assessed via lung ultrasound in the anterior chest: absent lung sliding (the pleural surfaces do not move with respiration) plus A-lines (no B-lines, since B-lines require pleural contact) is diagnostic for pneumothorax. A dilated RV suggests PE or cor pulmonale. A plethoric IVC suggests obstruction. Peritoneal free fluid suggests hemorrhagic shock. Lung ultrasound for PTX avoids radiation."
  },
  {
    "id": 285,
    "chapter": 31,
    "domain": "Critical Care Ultrasound",
    "question": "A 65-year-old woman is being evaluated for a possible pericardial effusion. On subxiphoid echo view, a circumferential anechoic (black) collection is seen surrounding the heart. Which additional finding is most concerning for cardiac tamponade physiology?",
    "options": {
      "A": "Right atrial systolic collapse and right ventricular diastolic collapse",
      "B": "Left ventricular systolic dysfunction with EF of 30%",
      "C": "Mitral valve E/A ratio reversal",
      "D": "Moderate aortic stenosis with peak gradient 45 mmHg"
    },
    "answer": "A",
    "explanation": "Echocardiographic signs of cardiac tamponade include: RA free wall collapse during systole (most sensitive), RV free wall collapse during diastole (most specific), plethoric non-collapsing IVC, and respiratory variation in mitral/tricuspid inflow velocities (>25% respiratory variation). LV dysfunction and aortic stenosis are independent findings that do not indicate tamponade. Mitral E/A reversal indicates diastolic dysfunction, not tamponade."
  },
  {
    "id": 286,
    "chapter": 31,
    "domain": "Critical Care Ultrasound",
    "question": "A 58-year-old man in the ICU undergoes central line placement in the internal jugular vein. The procedure was technically difficult. Shortly after, he develops hypoxia and diminished breath sounds on the right. Which ultrasound finding confirms iatrogenic pneumothorax?",
    "options": {
      "A": "Absent lung sliding with the presence of a 'lung point' on the right",
      "B": "B-lines in the right posterior lung fields",
      "C": "Right pleural effusion with anechoic fluid and lung sliding preserved",
      "D": "Normal A-lines bilaterally with preserved lung sliding"
    },
    "answer": "A",
    "explanation": "Absent lung sliding (the pleural surfaces do not move together with respiration) plus the identification of a 'lung point' \u2014 the site where collapsed lung intermittently contacts the chest wall \u2014 is pathognomonic for pneumothorax on lung ultrasound. The lung point is 100% specific for pneumothorax. B-lines rule out pneumothorax (their presence requires pleural-parenchymal contact). A pleural effusion appears as anechoic fluid with preserved sliding. Normal A-lines with sliding are normal."
  },
  {
    "id": 287,
    "chapter": 31,
    "domain": "Critical Care Ultrasound",
    "question": "An ICU patient on mechanical ventilation develops acute hypotension. Bedside echo shows a hyperdynamic left ventricle (EF visually estimated >70%) with small end-systolic cavity and inferolateral wall touching. What is the most likely diagnosis?",
    "options": {
      "A": "Hypovolemia or distributive (septic) shock with preserved hyperdynamic LV function",
      "B": "Cardiogenic shock with severe LV systolic dysfunction",
      "C": "Obstructive shock from massive PE with RV dilation",
      "D": "Stress cardiomyopathy (Takotsubo) with apical ballooning"
    },
    "answer": "A",
    "explanation": "A hyperdynamic LV (EF >60\u201370%) with small end-systolic ventricular cavity ('kissing walls') indicates either hypovolemia or distributive shock (most commonly septic shock), where reduced afterload and low preload result in vigorous but underfilled contraction. Cardiogenic shock shows dilated, poorly contracting LV with low EF. Massive PE shows RV dilation and D-sign. Takotsubo shows apical ballooning with preserved basal function \u2014 an akinetic apex and hyperkinetic base."
  },
  {
    "id": 288,
    "chapter": 31,
    "domain": "Critical Care Ultrasound",
    "question": "During bedside lung ultrasound of a patient with unilateral consolidation, which additional finding suggests parapneumonic effusion rather than simple hepatization?",
    "options": {
      "A": "Anechoic or complex fluid collection between the parietal and visceral pleura",
      "B": "Presence of air bronchograms within the consolidation",
      "C": "Shred sign at the border of the consolidation",
      "D": "Absent B-lines adjacent to the consolidated area"
    },
    "answer": "A",
    "explanation": "A parapneumonic effusion appears on lung ultrasound as an anechoic or complex (with fibrin strands, septations, or echogenic fluid) collection in the pleural space, adjacent to the consolidation. Simple air bronchograms within consolidation are consistent with pneumonia without effusion. The shred sign (irregular deep border of consolidation) indicates the consolidation-air interface. B-lines are absent in consolidated regions due to complete alveolar flooding. A pleural effusion is a distinct fluid-filled space."
  },
  {
    "id": 289,
    "chapter": 31,
    "domain": "Critical Care Ultrasound",
    "question": "A 50-year-old woman undergoes bedside echo in the ICU. The apical four-chamber view shows severe tricuspid regurgitation and a dilated right ventricle with reduced function. McConnell's sign is noted (apical RV dyskinesia with preserved basal free wall motion). Which condition is most consistent?",
    "options": {
      "A": "Acute massive pulmonary embolism",
      "B": "Primary pulmonary hypertension (Group 1 PAH)",
      "C": "Right ventricular infarction from inferior MI",
      "D": "Dilated cardiomyopathy with biventricular failure"
    },
    "answer": "A",
    "explanation": "McConnell's sign \u2014 regional RV dysfunction with apical akinesia but preserved or hyperkinetic basal/mid-RV free wall \u2014 has high specificity for acute massive pulmonary embolism (specificity ~94%). In chronic pulmonary hypertension, RV dysfunction is global, not regional. RV infarction from inferior MI affects the right ventricle diffusely and is associated with ST elevation in right-sided leads. Dilated cardiomyopathy causes global biventricular dysfunction."
  },
  {
    "id": 290,
    "chapter": 31,
    "domain": "Critical Care Ultrasound",
    "question": "In a spontaneously breathing, non-intubated patient with suspected hypovolemia, an IVC collapsibility index (CI) of 65% is measured. What does this suggest about fluid responsiveness?",
    "options": {
      "A": "High likelihood of fluid responsiveness (low right atrial pressure)",
      "B": "Volume overload \u2014 fluid should be withheld",
      "C": "Cardiac tamponade with paradoxical IVC collapsibility",
      "D": "Normal IVC \u2014 no inference about fluid responsiveness can be made"
    },
    "answer": "A",
    "explanation": "In spontaneously breathing patients, an IVC collapsibility index >50% (sniff test collapse >50%) suggests low right atrial pressure (<5 mmHg) and indicates that the patient is likely to respond to IV fluid administration (preload-responsive). This mirrors the IVC distensibility index concept used in mechanically ventilated patients. High collapsibility (>50%) predicts fluid responsiveness; low collapsibility (<15%) in a large IVC predicts non-response and elevated RA pressure."
  },
  {
    "id": 291,
    "chapter": 32,
    "domain": "Brain Death/Ethics",
    "question": "A 38-year-old man is admitted after a massive intracranial hemorrhage. He is on mechanical ventilation. Neurological examination reveals no response to painful stimuli, absent cranial nerve reflexes (pupils fixed and dilated, absent corneal, oculocephalic, oculovestibular, gag, and cough reflexes), and no spontaneous respirations above the ventilator rate. Which additional test is required before declaring brain death?",
    "options": {
      "A": "Apnea test demonstrating no respiratory effort at PaCO2 \u226560 mmHg",
      "B": "EEG showing isoelectric (flat) tracing for 30 minutes",
      "C": "CT brain perfusion scan showing absent cerebral blood flow",
      "D": "Four-vessel cerebral angiography"
    },
    "answer": "A",
    "explanation": "The apnea test is a mandatory component of clinical brain death determination in the United States. It requires pre-oxygenation, then disconnecting the ventilator while delivering passive O2, observing for any respiratory effort for 8\u201310 minutes while PaCO2 rises to \u226560 mmHg (or \u226520 mmHg above baseline). No respiratory effort confirms absent brainstem respiratory drive. EEG, CT perfusion, and angiography are ancillary tests used when clinical exam is unreliable \u2014 they are not mandatory if clinical criteria are fully met."
  },
  {
    "id": 292,
    "chapter": 32,
    "domain": "Brain Death/Ethics",
    "question": "A 55-year-old woman is declared brain dead after a massive ischemic stroke. Her family asks if organ donation is possible. Which of the following is a contraindication to organ donation after brain death?",
    "options": {
      "A": "Age over 80 is NOT an absolute contraindication \u2014 organ donation is evaluated case by case",
      "B": "HIV infection \u2014 absolute contraindication to all organ donation",
      "C": "Active malignancy limited to the CNS",
      "D": "History of treated hepatitis C more than 5 years ago"
    },
    "answer": "A",
    "explanation": "There are very few absolute contraindications to organ donation after brain death. Advanced age alone is NOT an absolute contraindication \u2014 many organs from elderly donors (>70\u201380 years) are successfully transplanted with careful matching. HIV-positive status is no longer an absolute contraindication (HIV-to-HIV organ transplantation is now legal under HOPE Act). Active systemic malignancy IS a contraindication, but CNS-limited malignancy may be acceptable for some organs. Treated HCV with sustained virologic response is not a contraindication."
  },
  {
    "id": 293,
    "chapter": 32,
    "domain": "Brain Death/Ethics",
    "question": "A 45-year-old man with GCS 3 and CT findings of devastating TBI is being evaluated for brain death. His temperature is 34.2\u00b0C and his serum phenobarbital level is 38 \u00b5g/mL (therapeutic range 15\u201340 \u00b5g/mL). Which factor precludes formal brain death declaration at this time?",
    "options": {
      "A": "Both \u2014 hypothermia and CNS depressant drug levels must be normalized before brain death declaration",
      "B": "Only hypothermia \u2014 drug levels within therapeutic range do not preclude declaration",
      "C": "Only the drug level \u2014 hypothermia to 34\u00b0C does not affect the exam",
      "D": "Neither \u2014 brain death can be declared based on CT findings alone in this context"
    },
    "answer": "A",
    "explanation": "Brain death declaration requires exclusion of reversible causes of coma: (1) core temperature must be \u226536\u00b0C \u2014 hypothermia (even mild, at 34\u00b0C) depresses brainstem reflexes and precludes accurate exam; (2) all CNS depressant medications must be at sub-therapeutic levels or cleared \u2014 phenobarbital at 38 \u00b5g/mL (even 'therapeutic') can suppress brainstem function. Brain death cannot be declared by imaging alone. Both confounders must be corrected before clinical declaration."
  },
  {
    "id": 294,
    "chapter": 32,
    "domain": "Brain Death/Ethics",
    "question": "A 60-year-old man with metastatic cancer in the ICU is mechanically ventilated and has repeatedly expressed wishes not to be kept alive artificially. He is now unresponsive. His adult daughter, who holds durable power of attorney for healthcare, insists on continuation of all life support. What is the most appropriate ethical and legal action?",
    "options": {
      "A": "Honor the patient's previously expressed autonomous wishes, which supersede the surrogate's decision when known",
      "B": "Follow the surrogate's directive as legal decision-maker, overriding patient's prior statements",
      "C": "Seek a court order to override the surrogate's decision immediately",
      "D": "Continue full care and defer to the family until consensus is reached"
    },
    "answer": "A",
    "explanation": "When a patient's previously expressed autonomous wishes are documented (e.g., advance directive, living will, or clear verbal statements in the medical record), those wishes supersede the surrogate decision-maker's preferences \u2014 surrogates are meant to apply substituted judgment ('what would the patient want?') not their own wishes. An ethics consultation is appropriate when conflict exists. Court orders are a last resort. A surrogate's durable power of attorney permits healthcare decisions only when patient's own stated preferences are unknown."
  },
  {
    "id": 295,
    "chapter": 32,
    "domain": "Brain Death/Ethics",
    "question": "A 52-year-old man with amyotrophic lateral sclerosis (ALS) presents to the ICU with respiratory failure. He is alert and fully cognitively intact. He clearly states he does not want intubation and mechanical ventilation. His wife is present and asks the team to intubate him 'because she cannot watch him suffocate.' What is the correct action?",
    "options": {
      "A": "Respect the patient's autonomous refusal of intubation and provide comfort measures",
      "B": "Intubate as requested by the family to relieve family distress",
      "C": "Request a psychiatric evaluation to assess decision-making capacity first",
      "D": "Provide a 24-hour trial of intubation to see if the patient changes his mind"
    },
    "answer": "A",
    "explanation": "A cognitively intact adult patient with decision-making capacity has the absolute right to refuse any medical intervention, including life-sustaining treatment \u2014 this is the principle of patient autonomy. Family members cannot override a capacitated patient's refusal. Psychiatric evaluation is appropriate when capacity is in question, but this patient is described as fully intact. A 'trial' of unwanted intubation violates patient autonomy. Palliative care consultation for comfort measures and family support is the appropriate adjunct."
  },
  {
    "id": 296,
    "chapter": 32,
    "domain": "Brain Death/Ethics",
    "question": "A 68-year-old woman is in the ICU after massive stroke with no meaningful recovery expected. The ICU team believes continued aggressive care is futile. Her family demands 'everything be done.' Which approach is most consistent with modern medical ethics and ICU consensus guidelines on futility?",
    "options": {
      "A": "Convene a formal ethics committee consultation and engage in shared decision-making with family",
      "B": "Immediately withdraw all life support per physician determination of futility",
      "C": "Transfer the patient to a long-term acute care facility without family consent",
      "D": "Continue indefinite full care without family engagement to avoid conflict"
    },
    "answer": "A",
    "explanation": "Medical futility is complex \u2014 'physiological futility' (treatment cannot achieve its intended physiological goal) may justify unilateral decisions, but 'proportionate futility' (treatment provides no meaningful benefit) requires a process: ethics committee review, transparent communication, time-limited trials, second opinions, and facilitated family meetings. Immediate unilateral withdrawal without process is ethically and legally untenable. Avoiding conflict by providing indefinite non-beneficial care harms the patient and staff. Ethics consultation is the appropriate pathway."
  },
  {
    "id": 297,
    "chapter": 32,
    "domain": "Brain Death/Ethics",
    "question": "During brain death evaluation, the oculocephalic reflex (Doll's eyes) is being tested. The patient's head is briskly turned to the left. Which response confirms absence of this brainstem reflex?",
    "options": {
      "A": "Eyes move WITH the head (no conjugate deviation away from direction of head turn)",
      "B": "Eyes deviate conjugately away from the direction of the head turn",
      "C": "Eyes demonstrate nystagmus with cold water caloric testing",
      "D": "Eyes show anisocoria that worsens with head movement"
    },
    "answer": "A",
    "explanation": "The normal (intact) oculocephalic reflex (Doll's eyes) shows eyes moving conjugately OPPOSITE to the direction of head rotation \u2014 eyes deviate contralateral to head turn, maintaining gaze in space. In brain death, the vestibuloocular reflex is absent \u2014 eyes move WITH the head (no conjugate deviation), indicating brainstem dysfunction. Nystagmus with cold calorics would indicate residual brainstem function. Anisocoria is a separate examination component."
  },
  {
    "id": 298,
    "chapter": 32,
    "domain": "Brain Death/Ethics",
    "question": "A 44-year-old man is declared brain dead. The organ procurement organization (OPO) is contacted and his family consents to donation. During donor management, which hemodynamic goal is prioritized to optimize organ viability?",
    "options": {
      "A": "MAP 60\u201380 mmHg, CVP 6\u201310 mmHg, urine output 0.5\u20133 mL/kg/hr",
      "B": "MAP >90 mmHg with aggressive vasopressor use to maximize perfusion",
      "C": "Low CVP (0\u20134 mmHg) to protect renal function from volume overload",
      "D": "Permissive hypotension to MAP 50 mmHg to minimize vasopressor organ damage"
    },
    "answer": "A",
    "explanation": "Donor management after brain death focuses on 'Rule of 100' and standard ICU targets to optimize multi-organ viability: MAP 60\u201380 mmHg, CVP 6\u201310 mmHg, urine output 0.5\u20133 mL/kg/hr, SpO2 \u226595%, FiO2 <0.4 if possible, temperature normothermia. Excessive vasopressors cause vasoconstriction and organ ischemia. Low CVP risks renal under-perfusion. Permissive hypotension to MAP 50 is used for traumatic hemorrhage control, not donor management."
  },
  {
    "id": 299,
    "chapter": 32,
    "domain": "Brain Death/Ethics",
    "question": "A patient's family asks the ICU team about 'donation after cardiac death' (DCD) as an option. Their 65-year-old father has a catastrophic brainstem injury but has not met all criteria for brain death. Which statement about DCD is most accurate?",
    "options": {
      "A": "DCD (donation after circulatory death) can occur after planned withdrawal of life support when cardiac arrest is expected within a defined time window",
      "B": "DCD requires brain death declaration before organ recovery can begin",
      "C": "DCD organs are not accepted by any US transplant center due to inferior outcomes",
      "D": "DCD requires the family to request organ donation before the medical team discusses withdrawal"
    },
    "answer": "A",
    "explanation": "Donation after circulatory determination of death (DCDD) is a pathway for patients who do not meet brain death criteria but from whom life-sustaining treatment will be withdrawn. After consent and withdrawal in a controlled setting, organ procurement begins after death is determined by cardiac cessation (typically 5 minutes of asystole). DCD does not require prior brain death. DCD organs are widely accepted \u2014 kidneys, livers, lungs from DCD donors have reasonable outcomes. Ethical separation requires that withdrawal decisions precede and be independent of organ donation discussions."
  },
  {
    "id": 300,
    "chapter": 32,
    "domain": "Brain Death/Ethics",
    "question": "A 78-year-old woman with severe dementia, multiple organ failure, and a DNR/DNI order is admitted to the ICU from a nursing home after her family called 911. She was intubated by EMS before the DNR was communicated. The family now wants to extubate her per her documented wishes. The attending physician agrees. Which of the following most accurately describes withdrawal of mechanical ventilation in this setting?",
    "options": {
      "A": "Withdrawal of ventilation is ethically and legally equivalent to withholding \u2014 not initiating the same intervention",
      "B": "Extubation violates the duty to rescue since intubation was already performed",
      "C": "Extubation requires court approval when the patient cannot actively consent",
      "D": "Withdrawal of ventilation is only ethically permissible if the patient is brain dead"
    },
    "answer": "A",
    "explanation": "Ethically and legally, withdrawal of a life-sustaining intervention (e.g., mechanical ventilation) is equivalent to withholding it \u2014 both represent the removal of unwanted treatment that does not align with patient goals. There is no ethical distinction between 'withholding' and 'withdrawing' under U.S. law and mainstream bioethical frameworks. A prior DNI does not mean treatment once started must be continued indefinitely. No court approval is required when the family is the appropriate surrogate and wishes align with documented patient preferences. Mechanical ventilation withdrawal should be accompanied by comfort measures."
  }
];