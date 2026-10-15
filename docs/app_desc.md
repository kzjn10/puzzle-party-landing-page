# Puzzle Party

Puzzle Party is a cheerful mobile sliding-puzzle game built with Flutter and
Flame. Players choose a puzzle collection, select an illustrated character,
then rebuild its picture by sliding tiles into the empty space.

The project is designed around bright, toy-inspired visuals, friendly audio,
and puzzle modes that work well for children and teens.

## Highlights

- Multiple puzzle layouts: standard 3x3, 4x4, 5x5, and portrait 3x5 boards.
- Two 3x3 slider variants with additional rail mechanics.
- A Classic 2D collection alongside the toy-themed puzzle gallery.
- Tap and drag controls, animated legal shuffles, move and time tracking,
  replay, preview, and completion feedback.
- Local images, frames, fonts, and sound effects; no backend is required to
  play the app.

## Tech stack

- [Flutter](https://flutter.dev/) and Dart
- [Flame](https://flame-engine.org/) for puzzle rendering and interaction
- `audioplayers` and `flutter_soloud` for audio

## Run the app

The Flutter application lives in `slider-3x3/`.

```bash
cd slider-3x3
flutter pub get
flutter run
```

Use `flutter devices` to list available simulators, emulators, and connected
devices if Flutter does not select one automatically.

## Verify changes

From `slider-3x3/`, run:

```bash
flutter analyze
flutter test
```

To make a debug Android APK:

```bash
flutter build apk --debug
```

Flutter writes the APK to
`build/app/outputs/flutter-apk/app-debug.apk`.

## Repository guide

| Path | Purpose |
| --- | --- |
| `slider-3x3/` | Flutter source code, tests, and packaged game assets. |
| `slider-3x3/readme.md` | Detailed Vietnamese product and gameplay notes. |
| `api-examples/` | JSON API fixtures and contract documentation; not a running backend. |
| `design-assets/` | Source exports and art resources used during visual development. |
| `docs/superpowers/` | Historical design specifications and implementation plans. |

## Gameplay notes

Every board is shuffled through legal moves, so each puzzle remains solvable.
Standard modes use a single empty cell; the specialized 3x3 variants add an
extra rail and its own movement rules. The app keeps gameplay local, including
puzzle logic, progress for the current session, artwork, and audio.

For detailed mode descriptions, art-pipeline instructions, and catalog notes,
