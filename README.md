# Physical Interaction Body Map Application

A web-based interactive body mapping tool for recording and analyzing physical interactions. 

---

## Features

### Core Functionality
- **Interactive Body Mapping** - Click/touch body figures to record interactions
- **4 Body Views** - Front, back, left, and right views
- **Directional Tracking** - "I touched" vs "I was touched" distinction
- **Questionnaire Integration** - 4-question survey embedded in interface

### Data Management
- **Participant Sessions** - Create new or load existing sessions
- **Persistent Storage** - Firebase Realtime Database integration
- **Edit Window** - 1-hour edit period with countdown
- **Session Notes** - Add participant notes with star confidence rating
- **Data Validation** - Multi-level validation (ID, name, questionnaire, points)

### User Experience
- **Real-time Feedback** - Points appear immediately on figures
- **Filter Views** - View all points, only "touched", or only "touched by"
- **Touch Optimization** - Smart touch handling with scroll detection
- **Responsive Design** - Works on desktop and mobile
- **Error Handling** - Clear error messages with retry capability

### Code Quality
- **Modular Architecture** - Separation of concerns across 3 classes
- **Custom Error Classes** - Proper error classification and handling
- **Image Caching** - Eliminated redundant network requests
- **Clean State Management** - All state centralized in SessionState
- **Documented API** - Each method has clear purpose

---

## Architecture Overview

### High-Level Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    BodyMapApp                            │
│            (Coordinating global functions)              │
└─────────────────────────────────────────────────────────┘
         ↓                ↓                 ↓
    ┌──────────┐   ┌──────────────┐   ┌──────────────┐
    │SessionState│   │ DataService  │   │CanvasManager │
    │           │   │              │   │              │
    │.points    │   │.loadExistingIds  │.preloadImages()
    │.notes     │   │.loadExistingData │.setupFigure()
    │.confidence│   │.saveSessionData  │.recordPoint()
    │.canEdit   │   │.keyAlreadyExists │.redrawFigure()
    │.addPoint()│   │.getParticipantKey│.drawMarker()
    │.removePoint│  │.isValidNumericId │.redrawAllFigures()
    │.setMarkingMode│.isValidName    │
    │           │   │ + Error handling:│
    │ + 10 helper   │ DataLoadError    │
    │   methods │   │ DataSaveError    │
    │           │   │ ValidationError  │
    └──────────┘   └──────────────────┘   └──────────────┘
       STATE            DATABASE              DOM/CANVAS
```

---

## Core Components

### 1. **SessionState** 
Pure state management class for the user session.

**Properties:**
- `collectedPoints[]` - Array of recorded interaction points
- `idIsValid` - Boolean flag for participant ID validation
- `nameIsValid` - Boolean flag for participant name validation
- `isExistingSession` - Whether loading an existing session
- `firstEntryTimestamp` - Timestamp of earliest point
- `canEdit` - Whether session is still editable (1-hour window)
- `editStatusTimer` - Timer reference for edit window countdown
- `sessionNotes` - Participant notes
- `sessionConfidence` - Confidence rating (1-5 stars)
- `questionnaireResponses` - Object with questionnaire answers (q1-q4)
- `markingMode` - Current marking mode ("mark_touched_by", "mark_touched", "view_all")
- `currentDirection` - Direction being marked ("touched" or "touched_by")
- `displayFilter` - Current filter for display ("all", "touched", "touched_by")

**Methods:**
- `addPoint(point)` - Add point to collection
- `removePoint(index)` - Remove point by index
- `clearAllPoints()` - Clear all points
- `hasPointsInDirection(direction)` - Check if points exist for direction
- `getPointsCount()` - Get total points count
- `setSessionData(notes, confidence)` - Update notes and confidence
- `setQuestionnaireResponse(questionKey, value)` - Update single question
- `getUnansweredItems()` - Get list of unanswered questions
- `setMarkingMode(mode)` - Set marking mode with auto-update of direction/filter
- `reset()` - Reset entire session to initial state

---

### 2. **DataService**
Centralized Firebase database operations and validation.

**Constructor:**
- `constructor(firebaseDb)` - Initialize with Firebase database reference

**Properties:**
- `db` - Firebase database reference
- `existingKeys` - Set of existing participant IDs

**Methods:**

**Validation:**
- `isValidNumericId(id)` - Validate ID format (digits only)
- `isValidName(name)` - Validate name is not empty
- `getParticipantKey(id, name)` - Generate unique key from ID and name
- `keyAlreadyExists(id, name)` - Check if participant already in database

**Firebase Operations:**
- `async loadExistingIds()` - Load all existing participant keys from Firebase
- `async loadExistingParticipantData(id, name)` - Load session data and points
  - Returns: `{ exists: bool, points: [], earliestTimestamp: null, sessionData: {} }`
- `async saveSessionData(id, name, notes, confidence, questionnaire, collectedPoints)` - Save session to Firebase

**Error Handling:**
- Throws `DataLoadError` on load failures
- Throws `DataSaveError` on save failures
- Throws `ValidationError` on validation failures

---

### 3. **CanvasManager**
All canvas drawing and user interaction handling.

**Constructor:**
- `constructor(figureConfigs, directionColors, appState)` - Initialize with configs and state

**Properties:**
- `figureConfigs` - Array of figure configurations
- `directionColors` - Color mapping for directions
- `appState` - Reference to SessionState
- `imageCache` - Cached SVG images (internal)
- `canvases` - Map of canvas elements (internal)
- `contexts` - Map of canvas 2D contexts (internal)

**Methods:**

**Image & Setup:**
- `async preloadImages()` - Preload all SVG images into cache
- `setupFigure(figureConfig)` - Setup canvas with event listeners (click, touch, wheel)

**Drawing:**
- `redrawFigure(figureConfig)` - Redraw single figure with points
- `redrawAllFigures()` - Redraw all 4 figures
- `drawMarker(ctx, x, y, direction)` - Draw point marker dot
- `getFilteredPoints()` - Get points filtered by current display filter

**Interaction:**
- `recordPoint(figureId, x, y)` - Record new point with validation
  - Validates ID/name, edit window, marking mode
  - Normalizes coordinates
  - Supports both click and touch events

**Touch Handling:**
- Click detection
- Touch detection with 10px move threshold (prevents accidental points while scrolling)
- Wheel event blocking

---

### 4. **Custom Error Classes**

```javascript
class DataLoadError extends Error  // Firebase load failures
class DataSaveError extends Error  // Firebase save failures
class ValidationError extends Error // Input validation failures
```

Each provides:
- `.name` property for error type identification
- `.message` for detailed error message
- Console logging with error classification

---


## Technical Stack

- **Frontend** - HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Canvas** - HTML5 Canvas API for drawing
- **Database** - Firebase Realtime Database
- **Architecture** - Class-based modular design
- **Storage** - Normalized coordinates for responsive scaling

---

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (Firebase database access)

### Setup

1. **Add Firebase SDK to HTML:**
```html
<script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js"></script>
```

2. **Configure Firebase:**
Update `firebaseConfig` in index.html with your project credentials

3. **Prepare Assets:**
Ensure SVG files are available:
- `front.svg`
- `back.svg`
- `left.svg`
- `right.svg`

4. **Open in Browser:**
Simply open `index.html` in a web browser

---

## Usage

### For Participants

1. **Enter ID and Name**
   - ID must be numeric
   - Name cannot be empty
   - System checks if you're a new or returning participant

2. **Mark Interactions**
   - Select "Mark 'I was touched'" or "Mark 'I touched'"
   - Click/tap body areas to record points
   - Watch points appear in real-time

3. **Review & Filter**
   - Use "View All Points" to see everything
   - Filter to specific interaction types
   - Delete individual points if needed
   - Clear all points with confirmation

4. **Add Session Data**
   - Enter optional notes
   - Rate confidence level (1-5 stars)
   - Answer all 4 questionnaire items

5. **Save Session**
   - Click "Save and Send"
   - Data saved to Firebase
   - Confirmation message appears

### For Returning Participants

1. Enter your ID and Name
2. System loads your previous session data
3. You have 1 hour to edit your session
4. Continue where you left off

---

## Data Model

### Point Object
```javascript
{
  participantId: "123",
  participantName: "john doe",
  figure: "front",
  direction: "touched_by",
  xNorm: 0.45,              // 0-1 normalized X coordinate
  yNorm: 0.32,              // 0-1 normalized Y coordinate
  timestamp: "2025-12-12T10:30:00.000Z"
}
```

### Session Data Object
```javascript
{
  notes: "Participant notes...",
  confidence: 4,            // 1-5
  questionnaire: {
    q1: 2,
    q2: 3,
    q3: 1,
    q4: 4
  },
  lastEdited: "2025-12-12T10:35:00.000Z"
}
```

---

## API Reference

### SessionState Methods
```javascript
appState.addPoint(point)
appState.removePoint(index)
appState.clearAllPoints()
appState.hasPointsInDirection('touched')
appState.getPointsCount()
appState.setSessionData(notes, confidence)
appState.setQuestionnaireResponse('q1', 3)
appState.getUnansweredItems()
appState.setMarkingMode('mark_touched')
appState.reset()
```

### DataService Methods
```javascript
await dataService.loadExistingIds()
await dataService.loadExistingParticipantData(id, name)
await dataService.saveSessionData(id, name, notes, confidence, questionnaire, points)
dataService.isValidNumericId(id)
dataService.isValidName(name)
dataService.getParticipantKey(id, name)
dataService.keyAlreadyExists(id, name)
```

### CanvasManager Methods
```javascript
await canvasManager.preloadImages()
canvasManager.setupFigure(figureConfig)
canvasManager.recordPoint(figureId, x, y)
canvasManager.redrawFigure(figureConfig)
canvasManager.redrawAllFigures()
canvasManager.drawMarker(ctx, x, y, direction)
canvasManager.getFilteredPoints()
```

---

## Error Handling

### Error Types

**DataLoadError**
- Firebase connection issues
- Missing participant data
- Snapshot parsing failures

**DataSaveError**
- Firebase connection issues during save
- Permission errors
- Data format issues

**ValidationError**
- Invalid participant ID (non-numeric)
- Empty participant name
- Missing questionnaire responses
- Missing point data

### User Feedback
- Clear error messages in UI
- Console logging with error classification
- Retry capability for transient errors
- Graceful degradation

---


## Development Notes

### Adding New Validation Rules
Add to `DataService.isValid*()` methods:
```javascript
isValidCustomField(value) {
  return value && value.length > 0;
}
```

### Extending Questionnaire
1. Add new field to `SessionState.questionnaireResponses`
2. Add UI elements in HTML
3. Add event listeners in global code
4. Update validation in `saveAllAndReload()`

### Modifying Edit Time Limit
Change constant at top of code:
```javascript
const EDIT_TIME_LIMIT = 60 * 60 * 1000; // milliseconds
```

---

## License

This project is provided as-is for research and clinical use.

---
