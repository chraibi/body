// Every text the page shows to participants, in each language it offers.
//
// To change a wording, edit it here: index.html only refers to the keys (in
// data-i18n attributes and t("...") calls). Keep {placeholders} as they are;
// they are filled in by the page (numbers, field names, error messages).
// Texts shown through a data-i18n-html attribute are HTML: use <strong> for
// bold and <br> for a line break there.
// A text missing in one language falls back to English.
//
// The German texts are a first draft and should be reviewed before use.
const TRANSLATIONS = {
  // ---- Page header ----
  "page.title": {
    en: "Physical Interaction Body Map",
    de: "Körperkarte zu körperlichen Interaktionen",
  },
  "page.heading": {
    en: "Inter-individual Contacts Study",
    de: "Studie zu zwischenmenschlichen Kontakten",
  },
  "language.switch": {
    en: "Language",
    de: "Sprache",
  },

  // ---- Participant identification ----
  "ident.participantId": {
    en: "Participant ID:",
    de: "Teilnehmer-ID:",
  },
  "ident.participantIdPlaceholder": {
    en: "e.g. 001",
    de: "z. B. 001",
  },
  "ident.familyNameLetter": {
    en: "Last letter of family name (for security):",
    de: "Letzter Buchstabe des Nachnamens (zur Sicherheit):",
  },
  "ident.familyNameLetterPlaceholder": {
    en: "e.g. R",
    de: "z. B. R",
  },
  "field.participantId": {
    en: "Participant ID",
    de: "Teilnehmer-ID",
  },
  "field.familyNameLetter": {
    en: "Last letter of family name",
    de: "Letzter Buchstabe des Nachnamens",
  },
  "list.and": {
    en: " and ",
    de: " und ",
  },
  "status.id.invalid": {
    en: "❌ ID must be a number (digits only)",
    de: "❌ Die ID muss eine Zahl sein (nur Ziffern)",
  },
  "status.id.valid": {
    en: "✓ ID is valid",
    de: "✓ ID ist gültig",
  },
  "status.letter.invalid": {
    en: "❌ Must be a letter",
    de: "❌ Muss ein Buchstabe sein",
  },
  "status.letter.valid": {
    en: "✓ Letter is valid",
    de: "✓ Buchstabe ist gültig",
  },

  // ---- Requirement banners ----
  "banner.ready": {
    en: "✓ Ready to record contact areas.",
    de: "✓ Sie können jetzt Kontaktbereiche einzeichnen.",
  },
  "banner.missingOne": {
    en: "⚠️ {fields} is required before you can record contact areas.",
    de: "⚠️ {fields} muss angegeben werden, bevor Sie Kontaktbereiche einzeichnen können.",
  },
  "banner.missingMany": {
    en: "⚠️ {fields} are required before you can record contact areas.",
    de: "⚠️ {fields} müssen angegeben werden, bevor Sie Kontaktbereiche einzeichnen können.",
  },

  // ---- Questions before marking ----
  "section.preMarking": {
    en: "About this trial",
    de: "Zu diesem Versuch",
  },
  "question.distance": {
    en: "Before the perturbation (\"push\"), what was the estimated distance between you and your first neighbour?",
    de: "Wie groß war Ihrer Einschätzung nach vor der Störung („Stoß“) der Abstand zwischen Ihnen und der Person direkt neben Ihnen?",
  },
  "question.comfort": {
    en: "During this trial, you felt comfortable with the distance you had with your neighbours.",
    de: "Fühlten Sie sich mit dem Abstand zu den Personen neben Ihnen wohl?",
  },
  "question.distance.short": {
    en: "Estimated distance from your first neighbour before the push",
    de: "Geschätzter Abstand zur Person direkt neben Ihnen vor dem Stoß",
  },
  "question.comfort.short": {
    en: "Comfort with that distance",
    de: "Wohlbefinden mit diesem Abstand",
  },
  "question.discomfort": {
    en: "During this trial, you felt awkward/uncomfortable.",
    de: "Während dieses Versuchs fühlten Sie sich verlegen/unwohl.",
  },
  "question.fun": {
    en: "During this trial, you had fun.",
    de: "Während dieses Versuchs hatten Sie Spaß.",
  },
  "question.unfairness": {
    en: "During this trial, you felt like the situation was unfair.",
    de: "Während dieses Versuchs empfanden Sie die Situation als unfair.",
  },
  "question.awareness": {
    en: "During this trial, you felt always aware of potential bodily contacts with other participants.",
    de: "Während dieses Versuchs fühlten Sie sich möglicher Körperkontakte mit anderen Teilnehmenden stets bewusst.",
  },
  "question.discomfort.short": {
    en: "Awkwardness/discomfort",
    de: "Verlegenheit/Unwohlsein",
  },
  "question.fun.short": {
    en: "Fun during the trial",
    de: "Spaß während des Versuchs",
  },
  "question.unfairness.short": {
    en: "Unfairness of the situation",
    de: "Unfairness der Situation",
  },
  "question.awareness.short": {
    en: "Awareness of bodily contacts",
    de: "Bewusstsein für Körperkontakte",
  },

  // ---- Marking ----
  "section.contacts": {
    en: "Declaration of contacts perceived during the trial",
    de: "Angabe der während des Versuchs wahrgenommenen Kontakte",
  },
  "answer.yes": {
    en: "Yes",
    de: "Ja",
  },
  "answer.no": {
    en: "No",
    de: "Nein",
  },
  // Section about the contacts other participants made on the participant's body.
  "contact.touched_by.heading": {
    en: "Being touched by others",
    de: "Von anderen berührt werden",
  },
  "contact.touched_by.question": {
    en: "During this trial, your body was touched by other participants.",
    de: "Während dieses Versuchs wurde Ihr Körper von anderen Teilnehmenden berührt.",
  },
  // Shown above the figures once the question is answered "Yes".
  "contact.touched_by.instruction": {
    en: "Draw, on the outlines, the area of <strong>your body</strong> where you felt contact from other participants.<br>(You can also tap to create a small area)",
    de: "Zeichnen Sie auf den Figuren den Bereich <strong>Ihres Körpers</strong> ein, an dem Sie einen Kontakt von anderen Teilnehmenden gespürt haben.<br>(Sie können auch tippen, um einen kleinen Bereich zu erstellen)",
  },
  // Section about the parts of the participant's body that touched others.
  "contact.touched.heading": {
    en: "Touching others",
    de: "Andere berühren",
  },
  "contact.touched.question": {
    en: "During this trial, you touched other participants.",
    de: "Während dieses Versuchs haben Sie andere Teilnehmende berührt.",
  },
  "contact.touched.instruction": {
    en: "Draw, on the outlines, the area of <strong>your body</strong> which made contact with other participants.<br>(You can also tap to create a small area)",
    de: "Zeichnen Sie auf den Figuren den Bereich <strong>Ihres Körpers</strong> ein, der andere Teilnehmende berührt hat.<br>(Sie können auch tippen, um einen kleinen Bereich zu erstellen)",
  },
  // Asked when "No" is chosen after areas were drawn in that section.
  "contact.confirmNo": {
    en: "You drew {count} area(s) in this section. Answering \"No\" deletes them. Continue?",
    de: "Sie haben in diesem Abschnitt {count} Bereich(e) eingezeichnet. Mit der Antwort „Nein“ werden diese gelöscht. Fortfahren?",
  },
  "direction.touched_by": {
    en: "I was touched",
    de: "Ich wurde berührt",
  },
  "direction.touched": {
    en: "I touched someone with it",
    de: "Damit habe ich jemanden berührt",
  },

  // ---- Body figures ----
  "zoom.out": {
    en: "Decrease outline size",
    de: "Figur verkleinern",
  },
  "zoom.in": {
    en: "Increase outline size",
    de: "Figur vergrößern",
  },
  // Also shown under the small thumbnails: keep these short.
  "figure.front": {
    en: "Front",
    de: "Vorne",
  },
  "figure.back": {
    en: "Back",
    de: "Hinten",
  },
  "figure.left": {
    en: "Left",
    de: "Links",
  },
  "figure.right": {
    en: "Right",
    de: "Rechts",
  },

  // ---- Status line ----
  "status.readyShort": {
    en: "Ready",
    de: "Bereit",
  },
  "status.fillInFirst": {
    en: "Please fill in the {fields} at the top of the page before drawing contact areas.",
    de: "Bitte geben Sie oben auf der Seite {fields} ein, bevor Sie Kontaktbereiche einzeichnen.",
  },
  "status.fillInFirstQuestions": {
    en: "Please fill in the {fields} at the top of the page before answering the questions.",
    de: "Bitte geben Sie oben auf der Seite {fields} ein, bevor Sie die Fragen beantworten.",
  },
  "status.nothingToRecord": {
    en: "⚠️ Nothing to record there — that's outside the body outline or already marked. Try again.",
    de: "⚠️ Hier lässt sich nichts einzeichnen – die Stelle liegt außerhalb des Körperumrisses oder ist bereits markiert. Bitte versuchen Sie es erneut.",
  },
  "status.areaRecorded": {
    en: "Recorded area #{n} on {figure}. Total areas: {total}",
    de: "Bereich #{n} eingezeichnet ({figure}). Bereiche insgesamt: {total}",
  },
  "status.areaDeleted": {
    en: "Deleted area. Total areas: {total}",
    de: "Bereich gelöscht. Bereiche insgesamt: {total}",
  },
  "status.areasCleared": {
    en: "Cleared all areas of this section.",
    de: "Alle Bereiche dieses Abschnitts wurden gelöscht.",
  },

  // ---- Recorded areas list ----
  "areas.heading": {
    en: "Recorded Contact Areas",
    de: "Eingezeichnete Kontaktbereiche",
  },
  "areas.clearAll": {
    en: "Clear all areas",
    de: "Alle Bereiche löschen",
  },
  "areas.confirmClear": {
    en: "Are you sure you want to delete ALL the contact areas of this section?",
    de: "Möchten Sie wirklich ALLE Kontaktbereiche dieses Abschnitts löschen?",
  },
  "areas.empty": {
    en: "No contact areas recorded yet",
    de: "Noch keine Kontaktbereiche eingezeichnet",
  },
  "areas.edit": {
    en: "Edit ratings",
    de: "Bewertung bearbeiten",
  },
  "areas.delete": {
    en: "Delete",
    de: "Löschen",
  },
  "areas.incomplete": {
    en: "Ratings incomplete",
    de: "Bewertung unvollständig",
  },

  // ---- Comments ----
  "comments.heading": {
    en: "Additional Comments",
    de: "Weitere Anmerkungen",
  },
  "comments.label": {
    en: "Comments (500 character limit):",
    de: "Anmerkungen (max. 500 Zeichen):",
  },
  "comments.placeholder": {
    en: "Any additional comments about your declarations...",
    de: "Weitere Anmerkungen zu Ihren Angaben …",
  },

  // ---- Area rating panel ----
  "rating.title": {
    en: "Area #{n} — {figure} ({direction})",
    de: "Bereich #{n} — {figure} ({direction})",
  },
  "rating.subtitle": {
    en: "Rate this contact area. You can change these later from the areas list.",
    de: "Bewerten Sie diesen Kontaktbereich. Sie können Ihre Angaben später in der Liste der Bereiche ändern.",
  },
  "rating.intensity": {
    en: "Intensity of the contact you felt at this location",
    de: "Intensität des Kontakts, den Sie an dieser Stelle gespürt haben",
  },
  "rating.duration": {
    en: "Estimated duration of the contact (in seconds).",
    de: "Geschätzte Dauer des Kontakts (in Sekunden).",
  },
  "rating.expectation": {
    en: "Before the start of the run, you were expecting to be touched at this location.",
    de: "Vor Beginn des Versuchs haben Sie erwartet, an dieser Stelle berührt zu werden.",
  },
  "rating.confidence": {
    en: "You are confident in your declaration of this contact.",
    de: "Sie sind sich bei Ihrer Angabe zu diesem Kontakt sicher.",
  },
  "rating.intensity.short": {
    en: "Intensity",
    de: "Intensität",
  },
  "rating.duration.short": {
    en: "Duration",
    de: "Dauer",
  },
  "rating.expectation.short": {
    en: "Expectation",
    de: "Erwartung",
  },
  "rating.confidence.short": {
    en: "Level of confidence",
    de: "Sicherheit der Angabe",
  },
  "rating.delete": {
    en: "Delete this area",
    de: "Diesen Bereich löschen",
  },
  "rating.done": {
    en: "Done",
    de: "Fertig",
  },
  "rating.incompleteAlert": {
    en: "Please answer all the sliders for this contact area before clicking \"Done\".\n\nNot yet answered: {fields}",
    de: "Bitte beantworten Sie alle Schieberegler zu diesem Kontaktbereich, bevor Sie auf „Fertig“ klicken.\n\nNoch nicht beantwortet: {fields}",
  },

  // ---- Answer scales (sliders) ----
  "slider.prompt": {
    en: "Please select an answer",
    de: "Bitte wählen Sie eine Antwort",
  },
  "distance.direct_contact": {
    en: "Direct contacts",
    de: "Direkter Kontakt",
  },
  "distance.less_20cm": {
    en: "Less than 20cm",
    de: "Weniger als 20\u00a0cm",
  },
  "distance.less_50cm": {
    en: "Less than 50cm",
    de: "Weniger als 50\u00a0cm",
  },
  "distance.less_1m": {
    en: "Less than 1m",
    de: "Weniger als 1\u00a0m",
  },
  "distance.more_1m": {
    en: "More than 1m",
    de: "Mehr als 1\u00a0m",
  },
  "agreement.strongly_disagree": {
    en: "Strongly disagree",
    de: "Stimme überhaupt nicht zu",
  },
  "agreement.disagree": {
    en: "Disagree",
    de: "Stimme nicht zu",
  },
  "agreement.neutral": {
    en: "Neutral",
    de: "Neutral",
  },
  "agreement.agree": {
    en: "Agree",
    de: "Stimme zu",
  },
  "agreement.strongly_agree": {
    en: "Strongly agree",
    de: "Stimme voll und ganz zu",
  },
  "intensity.very_weak": {
    en: "Very weak",
    de: "Sehr schwach",
  },
  "intensity.weak": {
    en: "Weak",
    de: "Schwach",
  },
  "intensity.moderate": {
    en: "Moderate",
    de: "Mittel",
  },
  "intensity.strong": {
    en: "Strong",
    de: "Stark",
  },
  "intensity.very_strong": {
    en: "Very strong",
    de: "Sehr stark",
  },
  "duration.less_1s": {
    en: "Less than 1s",
    de: "Weniger als 1\u00a0s",
  },
  "duration.1_to_2s": {
    en: "1–2s",
    de: "1–2\u00a0s",
  },
  "duration.2_to_3s": {
    en: "2–3s",
    de: "2–3\u00a0s",
  },
  "duration.3_to_4s": {
    en: "3–4s",
    de: "3–4\u00a0s",
  },
  "duration.more_than_4s": {
    en: "More than 4s",
    de: "Mehr als 4\u00a0s",
  },

  // ---- No-contact confirmation ----
  "noContactModal.title": {
    en: "No contact recorded",
    de: "Kein Kontakt angegeben",
  },
  "noContactModal.subtitle": {
    en: "Do you want to submit the form?",
    de: "Möchten Sie das Formular absenden?",
  },
  "noContactModal.cancel": {
    en: "Cancel, go back to the form",
    de: "Abbrechen, zurück zum Formular",
  },
  "noContactModal.confirm": {
    en: "Yes, proceed",
    de: "Ja, fortfahren",
  },

  // ---- Saving ----
  "save.button": {
    en: "Save and Send",
    de: "Speichern und senden",
  },
  "save.saving": {
    en: "Saving...",
    de: "Wird gespeichert …",
  },
  "save.retrying": {
    en: "Retrying...",
    de: "Wird erneut gespeichert …",
  },
  "save.saved": {
    en: "✅ Saved!",
    de: "✅ Gespeichert!",
  },
  "save.retry": {
    en: "⚠️ Retry",
    de: "⚠️ Erneut versuchen",
  },
  "save.invalidIds": {
    en: "Participant ID and last letter of family name must both be valid before saving.",
    de: "Teilnehmer-ID und letzter Buchstabe des Nachnamens müssen gültig sein, bevor Sie speichern können.",
  },
  "save.incompleteIntro": {
    en: "Please complete the following before saving:",
    de: "Bitte vervollständigen Sie vor dem Speichern Folgendes:",
  },
  "save.incompleteDeclarations": {
    en: "Contact declaration:",
    de: "Kontaktangaben:",
  },
  "save.incompleteQuestions": {
    en: "Questions not yet answered:",
    de: "Noch nicht beantwortete Fragen:",
  },
  "save.incompleteAreas": {
    en: "Contact areas missing ratings:",
    de: "Kontaktbereiche ohne vollständige Bewertung:",
  },
  "save.incompleteArea": {
    en: "Area #{n}: {fields}",
    de: "Bereich #{n}: {fields}",
  },
  "save.missingAnswer.touched_by": {
    en: "Answer whether your body was touched by other participants",
    de: "Geben Sie an, ob Ihr Körper von anderen Teilnehmenden berührt wurde",
  },
  "save.missingAnswer.touched": {
    en: "Answer whether you touched other participants",
    de: "Geben Sie an, ob Sie andere Teilnehmende berührt haben",
  },
  "save.missingAreas.touched_by": {
    en: "You answered \"Yes\" to being touched by other participants: draw at least one area where you felt a contact, or answer \"No\"",
    de: "Sie haben angegeben, von anderen Teilnehmenden berührt worden zu sein: Zeichnen Sie mindestens einen Bereich ein, an dem Sie einen Kontakt gespürt haben, oder antworten Sie mit „Nein“",
  },
  "save.missingAreas.touched": {
    en: "You answered \"Yes\" to touching other participants: draw at least one part of your body that made contact, or answer \"No\"",
    de: "Sie haben angegeben, andere Teilnehmende berührt zu haben: Zeichnen Sie mindestens einen Körperteil ein, mit dem Sie andere berührt haben, oder antworten Sie mit „Nein“",
  },
  "status.saving": {
    en: "📤 Saving your data... ({count} area(s) + questionnaire)",
    de: "📤 Ihre Daten werden gespeichert … ({count} Bereich(e) + Fragebogen)",
  },
  "status.retrying": {
    en: "📤 Retrying your data... ({count} area(s) + questionnaire)",
    de: "📤 Neuer Speicherversuch … ({count} Bereich(e) + Fragebogen)",
  },
  "status.saved": {
    en: "✅ All data saved successfully! Thank you for your participation.",
    de: "✅ Alle Daten wurden erfolgreich gespeichert! Vielen Dank für Ihre Teilnahme.",
  },
  "status.saveFailed": {
    en: "❌ Save failed: {error}. Click \"Retry\" to try again.",
    de: "❌ Speichern fehlgeschlagen: {error}. Klicken Sie auf „Erneut versuchen“, um es noch einmal zu versuchen.",
  },
  "save.savedAlert": {
    en: "All data are saved. Thank you for your participation.",
    de: "Alle Daten wurden gespeichert. Vielen Dank für Ihre Teilnahme.",
  },
  "save.failedAlert": {
    en: "Your answers could not be saved ({error}).\n\nPlease click \"Retry\" at the bottom of the page, or ask the experimenter for help.",
    de: "Ihre Antworten konnten nicht gespeichert werden ({error}).\n\nBitte klicken Sie unten auf der Seite auf „Erneut versuchen“ oder wenden Sie sich an die Versuchsleitung.",
  },
};
