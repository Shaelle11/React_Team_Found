# React_Team
## Build a Team Directory App
### A React Code-Along Lecture

> In this 40-minute session, we will build a fully working **Team Directory App** from scratch *(hopefully, cause i am also learning along).*

---

## What You Will Build

A small app where you can:

- View a list of team members displayed as cards
- Add a new member using a form
- Filter members by role
- Toggle a member's active or inactive status

By the end, every concept you've studied will have a real, working home inside one project.

---

## Concepts We Would Cover

| Concept | Where You'll Use It |
|---|---|
| JSX & Fragments | Every component you write |
| Functional Components | `App`, `MemberCard`, `MemberList`, `AddMemberForm` |
| Props & PropTypes | Passing member data into `MemberCard` |
| useState | Member list, form fields, filter, active toggle |
| Event Handling | Button clicks, input changes, form submission |
| Conditional Rendering | Empty state message, active/inactive badge |
| Lists & Keys | Mapping over the members array |
| Controlled Inputs | All fields in the add-member form |
| Component Composition & Children | A `Card` wrapper reused across the app |
| Inline Styles | Dynamic colour for the status indicator dot |
| Tailwind / CSS Modules | Layout and component styling |
| React DevTools | Inspecting and editing state live in the browser |

---

## Prerequisites — Install These Before the Lecture

You do not need any prior React experience, but you need the following set up on your machine before we start.

---

### 1. Node.js & npm

Node.js is the engine that runs JavaScript outside the browser. npm (Node Package Manager) comes bundled with it and is what you use to install React and other libraries.

**How to install:**

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS (Long Term Support)** version — this is the stable one recommended for most users
3. Run the installer and follow the steps

To confirm it worked, open your terminal and run:

```bash
node -v
npm -v
```

You should see version numbers printed out. If you do, you're good.

---

### 2. A Code Editor — VS Code

Visual Studio Code is the most widely used editor for web development. It has great React support out of the box.

**How to install:**

1. Go to [https://code.visualstudio.com](https://code.visualstudio.com)
2. Download the version for your operating system (Windows, Mac, or Linux)
3. Install and open it

---

### 3. A Browser — Google Chrome

Chrome has the best developer tools support for React.

**How to install:**
Go to [https://www.google.com/chrome](https://www.google.com/chrome) and download it if you don't already have it.

---

### 4. React Developer Tools (Browser Extension)

This is a free browser extension that lets you inspect your React components, see live state and props, and debug your app visually.

**How to install:**

1. Open Chrome
2. Go to [https://chromewebstore.google.com](https://chromewebstore.google.com)
3. Search **"React Developer Tools"**
4. Click **Add to Chrome**

You will know it worked when you open any React app in the browser and see the **Components** and **Profiler** tabs appear in your Chrome DevTools panel (press `F12` to open DevTools).

---

### 5. Git *(Optional but Recommended)*

Git lets you save snapshots of your code as you go and is used in virtually every real-world project.

**How to install:**

1. Go to [https://git-scm.com](https://git-scm.com)
2. Download and install for your OS
3. Confirm it worked:

```bash
git --version
```

---

## Project Setup — Do This Before We Start

Once Node.js is installed, run the following commands in your terminal to create and open your project:

```bash
# 1. Create the project using Vite (our build tool)
npm create vite@latest team-directory -- --template react

# 2. Move into the project folder
cd team-directory

# 3. Install dependencies
npm install

# 4. (Optional) Install PropTypes for type checking
npm install prop-types

# 5. Start the development server
npm run dev
```

Then open the URL shown in your terminal (usually `http://localhost:5173`) in Chrome. If you see the default Vite + React page, you are ready.

---

## Project Structure (What We'll End Up With)

```
team-directory/
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── MemberCard.jsx
│   │   ├── MemberList.jsx
│   │   └── AddMemberForm.jsx
│   ├── App.jsx
│   ├── App.css (or App.module.css)
│   └── main.jsx
├── index.html
└── package.json
```

---

## Session Outline

| Time | What We're Doing |
|---|---|
| 0–5 mins | Setup walkthrough, clear boilerplate, quick tour of the file structure |
| 5–12 mins | Build `MemberCard` — JSX, props, PropTypes, and the `Card` wrapper |
| 12–20 mins | Move data into `useState`, build `MemberList`, map and render with keys |
| 20–28 mins | Build `AddMemberForm` with controlled inputs, handle submit, reset form |
| 28–34 mins | Add role filter, conditional empty state, active/inactive toggle |
| 34–38 mins | Style with Tailwind or CSS Modules, add inline style for status dot |
| 38–40 mins | React DevTools — inspect state live, edit in the panel, check the Profiler |

---

## A Note for Beginners

Throughout the session, we will **break things on purpose before fixing them** — removing the `key` prop, mutating state directly, calling a function instead of passing it. This is intentional. Seeing what goes wrong is the fastest way to understand why the rule exists.

Don't worry about keeping up perfectly — *me sef, i no be perfect teacher.* The goal is to leave with a mental model of how React thinks, not a perfectly typed file.

---

## 📎 Resources

- [React Official Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [PropTypes Docs](https://legacy.reactjs.org/docs/typechecking-with-proptypes.html)
- [React DevTools Chrome Extension](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

---

*Happy building. See you in Class!!!* 