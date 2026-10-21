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

  // ---- Participant / trial identification ----
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
  "ident.trialNumber": {
    en: "Trial number:",
    de: "Durchgangsnummer:",
  },
  "ident.trialNumberPlaceholder": {
    en: "e.g. 2",
    de: "z. B. 2",
  },
  "field.participantId": {
    en: "Participant ID",
    de: "Teilnehmer-ID",
  },
  "field.familyNameLetter": {
    en: "Last letter of family name",
    de: "Letzter Buchstabe des Nachnamens",
  },
  "field.trialNumber": {
    en: "Trial number",
    de: "Durchgangsnummer",
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
  "status.trial.invalid": {
    en: "❌ Trial number must be numeric",
    de: "❌ Die Durchgangsnummer muss eine Zahl sein",
  },
  "status.trial.valid": {
    en: "✓ Trial number is valid",
    de: "✓ Durchgangsnummer ist gültig",
  },
  "status.trial.new": {
    en: "✓ New trial",
    de: "✓ Neuer Durchgang",
  },
  "status.trial.expired": {
    en: "❌ Edit time limit expired (1 hour)",
    de: "❌ Bearbeitungszeit abgelaufen (1 Stunde)",
  },
  "status.trial.editing": {
    en: "✓ Editing enabled ({minutes} min remaining)",
    de: "✓ Bearbeitung möglich (noch {minutes} Min.)",
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
    de: "Zu diesem Durchgang",
  },
  "question.distance": {
    en: "On average during this trial, how far did you think you were from neighbouring participants?",
    de: "Wie weit waren Sie Ihrer Einschätzung nach während dieses Durchgangs durchschnittlich von den Personen neben Ihnen entfernt?",
  },
  "question.comfort": {
    en: "During this trial, you felt comfortable with the distance you had with your neighbours.",
    de: "Fühlten Sie sich mit dem Abstand zu den Personen neben Ihnen wohl?",
  },
  "question.distance.short": {
    en: "Estimated distance from neighbouring participants",
    de: "Geschätzter Abstand zu den Personen neben Ihnen",
  },
  "question.comfort.short": {
    en: "Comfort with that distance",
    de: "Wohlbefinden mit diesem Abstand",
  },

  // ---- Marking ----
  "hint.declare": {
    en: "Declare the contact you perceived during the experimental run. All figures represent <strong>your own body</strong>.",
    de: "Geben Sie die Kontakte an, die Sie während des Durchgangs wahrgenommen haben. Alle Figuren stellen <strong>Ihren eigenen Körper</strong> dar.",
  },
  "mode.markTouchedBy": {
    en: "Locations where other participants made contact on my body",
    de: "Stellen meines Körpers, an denen mich andere Teilnehmende berührt haben",
  },
  "mode.markTouchedBy.hint": {
    en: "Draw the area where you felt other participants contacted your body.<br>(You can also tap to create a small area)",
    de: "Zeichnen Sie den Bereich ein, an dem Sie gespürt haben, dass andere Teilnehmende Ihren Körper berührt haben.<br>(Sie können auch tippen, um einen kleinen Bereich zu erstellen)",
  },
  "mode.markTouched": {
    en: "Locations on my body that contacted other participants",
    de: "Stellen meines Körpers, mit denen ich andere Teilnehmende berührt habe",
  },
  "mode.markTouched.hint": {
    en: "Draw the <strong>parts of your own body</strong> which made contact with the other participants.<br>(You can also tap to create a small area)",
    de: "Zeichnen Sie die <strong>Teile Ihres eigenen Körpers</strong> ein, mit denen Sie die anderen Teilnehmenden berührt haben.<br>(Sie können auch tippen, um einen kleinen Bereich zu erstellen)",
  },
  "mode.viewAll": {
    en: "View All Areas",
    de: "Alle Bereiche anzeigen",
  },
  "mode.viewAll.hint": {
    en: "Viewing only - no drawing",
    de: "Nur Ansicht – kein Zeichnen",
  },
  "noContact.touchedBy": {
    en: "No participant made contact on my body",
    de: "Keine teilnehmende Person hat mich berührt",
  },
  "noContact.touched": {
    en: "I did not make contact with other participants",
    de: "Ich habe keine anderen Teilnehmenden berührt",
  },
  "noContact.disabledTitle": {
    en: "Delete the areas marked in this mode first",
    de: "Löschen Sie zuerst die in diesem Modus markierten Bereiche",
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
  "status.ready": {
    en: "Ready. Drag on a body figure to mark a contact area (or tap for a small one).",
    de: "Bereit. Ziehen Sie über eine Körperfigur, um einen Kontaktbereich zu markieren (oder tippen Sie für einen kleinen Bereich).",
  },
  "status.fillInFirst": {
    en: "Please fill in the {fields} at the top of the page before drawing contact areas.",
    de: "Bitte geben Sie oben auf der Seite {fields} ein, bevor Sie Kontaktbereiche einzeichnen.",
  },
  "status.fillInFirstQuestions": {
    en: "Please fill in the {fields} at the top of the page before answering the questions.",
    de: "Bitte geben Sie oben auf der Seite {fields} ein, bevor Sie die Fragen beantworten.",
  },
  "status.viewingMode": {
    en: "⚠️ Viewing mode. Switch to 'Mark' mode to draw contact areas.",
    de: "⚠️ Ansichtsmodus. Wählen Sie einen Markierungsmodus, um Kontaktbereiche einzuzeichnen.",
  },
  "status.expiredRecord": {
    en: "❌ Edit time limit expired. Cannot record new areas.",
    de: "❌ Bearbeitungszeit abgelaufen. Es können keine neuen Bereiche eingezeichnet werden.",
  },
  "status.expiredDelete": {
    en: "❌ Edit time limit expired. Cannot delete areas.",
    de: "❌ Bearbeitungszeit abgelaufen. Bereiche können nicht gelöscht werden.",
  },
  "status.noContactTicked": {
    en: "⚠️ You ticked \"{label}\". Untick it to mark areas in this mode.",
    de: "⚠️ Sie haben „{label}“ angekreuzt. Entfernen Sie das Häkchen, um in diesem Modus Bereiche zu markieren.",
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
    en: "Cleared all areas for this trial.",
    de: "Alle Bereiche dieses Durchgangs wurden gelöscht.",
  },
  "status.mode": {
    en: "Mode: {mode}",
    de: "Modus: {mode}",
  },
  "status.declared": {
    en: "Declared: {label}.",
    de: "Angegeben: {label}.",
  },
  "status.loadFailed": {
    en: "❌ Failed to check existing data: {error}",
    de: "❌ Vorhandene Daten konnten nicht geprüft werden: {error}",
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
    en: "Are you sure you want to delete ALL contact areas for this trial?",
    de: "Möchten Sie wirklich ALLE Kontaktbereiche dieses Durchgangs löschen?",
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

  // ---- Questions after marking ----
  "section.postMarking": {
    en: "About your awareness during this trial",
    de: "Zu Ihrer Wahrnehmung während dieses Durchgangs",
  },
  "question.awareness": {
    en: "During this trial, you were always aware of bodily contacts with other participants.",
    de: "Während dieses Durchgangs waren Sie sich Körperkontakten mit anderen Teilnehmenden stets bewusst.",
  },
  "question.acceptability": {
    en: "During this trial, you felt that bodily interactions were acceptable.",
    de: "Während dieses Durchgangs empfanden Sie körperliche Interaktionen als akzeptabel.",
  },
  "question.awareness.short": {
    en: "Awareness of bodily contacts",
    de: "Bewusstsein für Körperkontakte",
  },
  "question.acceptability.short": {
    en: "Acceptability of bodily interactions",
    de: "Akzeptanz körperlicher Interaktionen",
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
    en: "Duration of contact you felt at this location.",
    de: "Dauer des Kontakts, den Sie an dieser Stelle gespürt haben.",
  },
  "rating.expectation": {
    en: "Level of expectation you had about having contact at this location",
    de: "Wie stark Sie einen Kontakt an dieser Stelle erwartet haben",
  },
  "rating.confidence": {
    en: "Level of confidence in this declaration",
    de: "Wie sicher Sie sich bei dieser Angabe sind",
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
    en: "Level of expectation",
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
  "duration.less_3s": {
    en: "Less than 3s",
    de: "Weniger als 3\u00a0s",
  },
  "duration.less_5s": {
    en: "Less than 5s",
    de: "Weniger als 5\u00a0s",
  },
  "duration.less_10s": {
    en: "Less than 10s",
    de: "Weniger als 10\u00a0s",
  },
  "duration.10s_or_more": {
    en: "10s or more",
    de: "10\u00a0s oder länger",
  },
  "expectation.very_unexpected": {
    en: "Very unexpected",
    de: "Völlig unerwartet",
  },
  "expectation.not_expected": {
    en: "Not expected",
    de: "Nicht erwartet",
  },
  "expectation.neutral": {
    en: "Neutral",
    de: "Neutral",
  },
  "expectation.strongly_expected": {
    en: "Strongly expected",
    de: "Stark erwartet",
  },
  "expectation.certain": {
    en: "Certain",
    de: "Mit Sicherheit erwartet",
  },
  "confidence.very_low": {
    en: "Very low",
    de: "Sehr gering",
  },
  "confidence.low": {
    en: "Low",
    de: "Gering",
  },
  "confidence.moderate": {
    en: "Moderate",
    de: "Mittel",
  },
  "confidence.high": {
    en: "High",
    de: "Hoch",
  },
  "confidence.very_high": {
    en: "Very high",
    de: "Sehr hoch",
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
    de: "Neuer Versuch …",
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
    en: "Participant ID, trial number and last letter of family name must all be valid before saving.",
    de: "Teilnehmer-ID, Durchgangsnummer und letzter Buchstabe des Nachnamens müssen gültig sein, bevor Sie speichern können.",
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
  "save.missingTouchedBy": {
    en: "Mark the locations where other participants made contact on your body, or tick \"No participant made contact on my body\"",
    de: "Markieren Sie die Stellen, an denen andere Teilnehmende Sie berührt haben, oder setzen Sie das Häkchen bei „Keine teilnehmende Person hat mich berührt“",
  },
  "save.missingTouched": {
    en: "Mark the locations on your body that contacted other participants, or tick \"I did not make contact with other participants\"",
    de: "Markieren Sie die Stellen Ihres Körpers, mit denen Sie andere Teilnehmende berührt haben, oder setzen Sie das Häkchen bei „Ich habe keine anderen Teilnehmenden berührt“",
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
