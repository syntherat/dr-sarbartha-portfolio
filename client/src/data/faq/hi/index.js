import { adrenalHi } from "./adrenal";
import { bladderHi } from "./bladder";
import { commonHi } from "./common";
import { kidneyHi } from "./kidney";
import { penileHi } from "./penile";
import { prostateHi } from "./prostate";
import { retroperitonealHi } from "./retroperitoneal";
import { roboticHi } from "./robotic";
import { testicularHi } from "./testicular";
import { upperTractHi } from "./upperTract";

// Hindi drafts keyed by FAQ set slug. See docs/PATIENT-FAQ.md (languages).
export const hiSets = {
  "prostate-cancer": prostateHi,
  "kidney-cancer": kidneyHi,
  "urinary-bladder-cancer": bladderHi,
  "ureter-renal-pelvis-cancer": upperTractHi,
  "penile-cancer": penileHi,
  "testicular-cancer": testicularHi,
  "adrenal-cancer": adrenalHi,
  "retroperitoneal-cancer": retroperitonealHi,
  "robotic-surgery": roboticHi,
  "common-questions": commonHi,
};
