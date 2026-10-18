# Assignment 5: JavaScript Basics

DOM Manipulation & Events

**Student:** Khloptsev Artem  
**Group:** SE-2525

## Goal

Practice basic JavaScript, DOM manipulation, and events with short examples that are easy to explain and change. The project uses plain HTML, CSS, and JavaScript. It needs no libraries, build tools, or backend.

## Files

```text
5-Assigment/
├── index.html
├── part1.html
├── part2.html
├── part3.html
├── part4.html
├── favicon.svg
├── css/
│   └── style.css
├── js/
│   ├── part1.js
│   ├── part2.js
│   ├── part3.js
│   └── part4.js
└── README.md
```

Each page has the same navigation links. HTML files, CSS, and JavaScript use relative paths, so they work locally and in a GitHub Pages repository subpath.

## Tasks

| Page | Tasks | What it does |
| --- | --- | --- |
| `index.html` | Overview | Explains the project and links to all parts. |
| `part1.html` | 0–1 | Logs the student name and group, shows the welcome alert, demonstrates string/number/boolean variables, four arithmetic operations, and string concatenation. |
| `part2.html` | 2–4 | Changes a paragraph, toggles background and font size, creates list items, and safely removes the last item. |
| `part3.html` | 5–7 | Changes a box on mouseover/mouseout, copies text on keyup, and calculates with two numbers. |
| `part4.html` | 8 | Adds, completes, and deletes tasks using an array of objects and `renderTasks()`. |

## Run locally

1. Download or clone the project.
2. Open `index.html` in your browser (double-click the file).
3. Use the navigation to open each part.
4. On Part 1, close the alert, press F12, and open Console to see the results.

No installation or server is required. Tasks are stored only in memory; reloading Part 4 clears the list.

## Publish on GitHub Pages

Publication has **not** been performed. The local branch is `master`. At implementation time, this repository had no remote configured. Repository URL: **TODO — paste the real repository URL here.** Published site: **TODO — paste the URL shown by GitHub Pages after deployment.**

The following steps are for the repository root shown above, where `index.html` is at the top level.

1. Create or choose your GitHub repository. For a new repository, leave it empty (do not add a README or license on GitHub).
2. After you approve publication, run these commands from this project folder. Replace `YOUR_REPOSITORY_URL` with the real Git clone URL. These are instructions, not commands that have already been run:

   ```sh
   git remote -v
   git remote add origin YOUR_REPOSITORY_URL
   git push -u origin master
   ```

   If `origin` is already configured, check that it points to the intended repository and skip `git remote add`. If the remote already has commits, inspect its history and reconcile it before pushing. Do not force-push.

3. On GitHub, open the repository's **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Select **master** and **/(root)**, then click **Save**.
6. Wait for the Pages deployment to finish. Open the actual site link shown by GitHub and check every page. If deployment fails, inspect the repository's Actions tab.
7. Paste the actual repository URL and published site URL into the fields above and submit both links.

The publication settings follow the [official GitHub Pages instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). There is no build command or output folder for this project.

## Manual checklist

- [ ] Open Home and all four parts through the navigation.
- [ ] Part 1: the alert says exactly `Hello, JavaScript World!`.
- [ ] Console shows Khloptsev Artem, SE-2525, three data types, arithmetic results 16 / 8 / 48 / 3, and the joined greeting.
- [ ] Part 2: Change Text replaces the paragraph; clicking again causes no error.
- [ ] Background and font buttons visibly change the box and toggle back on a second click.
- [ ] Add Item works repeatedly. Remove Item removes the last item. Clicking it on an empty list causes no error; adding still works afterward.
- [ ] Part 3: moving the mouse onto the box changes its color; moving away restores it.
- [ ] Typing updates Current value on keyup. Select all and press Backspace: the output is empty.
- [ ] With 12 and 4, Addition / Subtraction / Multiplication / Division show 16 / 8 / 48 / 3.
- [ ] With -2.5 and 4, the same operations show 1.5 / -6.5 / -10 / -0.625.
- [ ] Zero is accepted as a number. Empty fields show a message instead of treating an empty value as zero.
- [ ] Incomplete numeric input such as `1e` shows a validation message. Dividing by zero shows `Cannot divide by zero.`.
- [ ] Very large values, such as `1e308 * 1e308`, show a message instead of Infinity.
- [ ] Part 4: add several tasks with Add Task and Enter. The input clears after adding.
- [ ] Empty and spaces-only tasks are rejected.
- [ ] Check and uncheck a task: its text gains and loses a line through it.
- [ ] Delete the first, middle, and last task. Add identical task texts and delete only one of them.
- [ ] Enter `<img src=x onerror=alert(1)>`: it appears as literal text and creates no image or alert.
- [ ] Reload Part 4: the task list is empty again.
- [ ] At 360 px width, every page fits without horizontal scrolling, including a task with a long unbroken word.
- [ ] Console has no JavaScript errors. CSS/JS requests succeed in the Network panel.
- [ ] After publication, repeat the checks on the actual GitHub Pages URL.

## Defense preparation

### External JavaScript

`<script src="js/part2.js" defer></script>` loads a separate file. `defer` runs the script after the HTML has been parsed, so the elements exist when the script looks them up.

### Variables and types

A `string` stores text, a `number` stores numeric values, and a `boolean` stores `true` or `false`. `const` is used for bindings that are not reassigned. `let` is used for changing values, such as the next task ID. A `const` object can still have its properties changed.

### Finding elements and changing text

`document.getElementById("changeable-text")` finds the element with that ID. Assigning `element.textContent` replaces its text. It does not parse user text as HTML, so a task containing an HTML tag stays plain text.

### Events

`button.addEventListener("click", changeText)` calls `changeText` when the button is clicked. The function is passed without calling it immediately. `mouseover` handles the mouse entering the box and `mouseout` restores its color when the mouse leaves. `keyup` runs when a key is released and copies the current input value. This example is keyboard-based; a mouse-only paste does not produce a keyup event.

### Creating and removing list items

`document.createElement("li")` creates an item. `appendChild()` puts it in a list. `lastElementChild` finds the last item and `remove()` deletes it. Checking that the last item exists makes removal from an empty list safe.

### Task array and DOM

`tasks` is the primary data array. Each object has `id`, `text`, and `completed`. `push()` adds an object, changing `task.completed` updates completion, and `filter()` returns an array without the deleted ID. Increasing IDs distinguish tasks even when their text is identical.

`renderTasks()` clears the displayed list and builds it again from the array. The array is the task data; the DOM is its visible representation. Editing only the DOM would not update the array, and the next render would replace that edit. The form's submit handler calls `preventDefault()` to avoid navigating or reloading when Enter is pressed.

### Calculator validation

The calculator first checks invalid number input and empty strings. Only then does it convert values with `Number()`. This order matters because `Number("")` is `0`. `Number.isFinite()` rejects non-finite numbers. Division checks whether the second number equals zero. Simple `if` branches perform each operation without evaluating code. JavaScript uses floating-point numbers, so an expression such as `0.1 + 0.2` can show a small rounding difference.

## Live coding practice

These are exercises for independent practice, not extra implemented features:

1. **Reset text:** add a Reset Text button on Part 2 and use a click listener to restore the original paragraph. Check Change Text → Reset Text → Change Text.
2. **Task counter:** add a paragraph and update its text inside `renderTasks()` using `tasks.length`. Check that adding and deleting update it.
3. **Clear completed tasks:** add a button that keeps only tasks whose `completed` value is false, then calls `renderTasks()`. Check no completed tasks, some completed tasks, and all completed tasks.

## Verification and submission

Local browser checks in Microsoft Edge covered the alert and console output, navigation, DOM buttons, mouse events, keyboard input, calculator operations and validation, and the task list interactions. All five pages were checked at a 360 px viewport without horizontal overflow. JavaScript syntax and relative resource paths were also checked.

These are local checks; the published site remains unverified because it has not been deployed. Before submission, publish the site with approval, fill in the real links, repeat the checklist on the live site, and practice explaining and modifying each function.

Assessment: working project and published site 20%, individual oral defense 30%, live coding 50%.
