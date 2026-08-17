# M.O.M — Living Website Prototype

A GitHub-ready static prototype for a more alive Mad Over Marketing experience.

## Core idea

**Don't just read marketing. Feel it.**

The prototype turns M.O.M from a publication-style website into a living marketing interface:
- Reel-style editorial feed
- Live signal / trend radar
- “Ask M.O.M.” conversational archive prototype
- MOM Lens browser extension concept
- Liquid-glass inspired navigation and surfaces
- Motion, micro-interactions, horizontal storytelling and live-ish state changes

## Run locally

Open `index.html` directly, or use any static server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## MOM Lens extension

1. Open Chrome → `chrome://extensions`
2. Enable **Developer mode**
3. Choose **Load unpacked**
4. Select the `extension` folder
5. Visit any webpage
6. Click **✦ MOM LENS**

The current extension is intentionally a prototype: its scoring is mocked, but the interaction model is real and ready to connect to an AI/backend later.

## Suggested next build

Connect the front-end to:
- WordPress / RSS / CMS feed
- social listening APIs
- campaign image/video metadata
- an LLM for article teardown + Ask M.O.M.
- Chrome extension background service
- personalised “My M.O.M.” feed
