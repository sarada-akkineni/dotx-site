# DOTX · Find Your Time

The quiz site for quiz.dotx.gg. A static site: no build step.

| File | What it is |
|---|---|
| `index.html` | The quiz, the result profile, the tracker and the day-2 check-in |
| `questions.js` | The 9 questions and how each answer scores (shared with the results page) |
| `results.html` | Private results page. Sign in by email link; only the owner's email can read data |
| `config.js` | Database address and public key |
| `supabase/schema.sql` | Database setup. Run once in Supabase > SQL Editor |
| `img/` | Art from *Mastering Attention Management* (replace with un-watermarked originals) |

## How a change goes live
1. Every change is a commit on a branch, then merged into `main`.
2. Vercel publishes `main` automatically. Branches get their own preview link first.
3. To undo: Vercel > Deployments > pick an older one > "Promote to Production". Or `git revert`.

## Data
Anonymous only: a random id per browser, the class code from the link (`?class=AKA-8B`), and quiz events.
No names, emails or IP addresses are stored. Visitors can add events but never read them.

Event types: `page_view`, `quiz_start`, `answer`, `quiz_complete`, `retake`, `tracker_tap`, `checkin`, `checkin_skip`.

## Rules for editing questions
Old answers are stored by question and option number. Do not reorder questions or options.
To change one, add a new question at the end and retire the old one.
