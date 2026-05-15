# 🛡️ F.R.O.S.T. 
## (Focus Restriction & Online Surveillance Timer)

# ⚠️ CRITICAL WARNING: READ BEFORE INSTALLING
## 🛑 THIS EXTENSION IS DESIGNED TO BE UNREMOVABLE
**Once activated, the Anti-Tamper Protocol will block your access to `chrome://extensions`. You will NOT be able to disable, configure, or remove this extension through the browser UI until the `UNLOCK_DATE` is reached. Proceed only if you are committed to absolute focus.**

---

[![Status](https://img.shields.io/badge/Status-Hard--Gate-red.svg?style=for-the-badge)]()
[![Platform](https://img.shields.io/badge/Platform-Chrome-blue.svg?style=for-the-badge)]()
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)]()

> **"Extreme productivity requires extreme measures."**

**F.R.O.S.T.** is not a standard website blocker. It is a **hard-gate psychological firewall** designed for students and professionals who need to eliminate digital noise entirely. Once activated, it cannot be easily disabled or removed until your specified goal date.

---

## 🚀 Key Features

### 📅 The Hard Date Gate
The extension operates based on a constant `UNLOCK_DATE`. 
- **Universal Mode:** Easily configurable in `constants.js`.
- **Absolute Lockdown:** All blocking logic is non-negotiable until the system clock passes the unlock threshold.

### 🎥 Intelligent YouTube Firewall
- **Shorts Purge:** All `youtube.com/shorts/` URLs are immediately redirected to eliminate infinite scrolling.
- **Context-Aware Filtering:** Long-form videos are scanned in real-time. If the title does not contain academic or professional keywords (STEM, Humanities, Business, Research), the tab is redirected.
- **Educational Creator Whitelist:** Integrated support for high-signal channels like *Veritasium, 3Blue1Brown, Kurzgesagt,* and *Mark Rober*.

### 🚫 Distraction Blacklist
Immediate redirection for high-dopamine social and entertainment platforms:
- `Facebook` • `Instagram` • `Twitter/X` • `TikTok` • `Snapchat` • `YouTube Music` • `Spotify` • `LinkedIn` • `Pinterest` • `Reddit` • `Quora` • `GitHub`

### ⏳ The 15-Minute Daily Grace
Includes a shared daily timer across all "Tracked" sites. You get **15 minutes total** of combined usage per day. Once the timer hits zero, the redirect target is enforced until the next calendar day.

### 🔐 Anti-Tamper Protocol
Engineered to be "sticky." The extension monitors navigation to:
- `chrome://extensions`
- `chrome://settings/extensions`

Any attempt to access these pages is intercepted and redirected, preventing the extension from being toggled off or removed via the browser UI.

---

## 🛠️ Installation & Setup

### 1. Configure Your Goal
Open `constants.js` and set your `UNLOCK_DATE`:
```javascript
export const UNLOCK_DATE = new Date('2026-06-07T00:00:00');
```

### 2. Deployment
1. Download or clone this repository.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable **Developer mode** in the top-right corner.
4. Click **Load unpacked** and select the extension folder.

---

## ⚠️ Critical Warning

**THIS EXTENSION IS DESIGNED TO BE UNREMOVABLE.**  
Once you load this extension, the **Anti-Tamper Protocol** will prevent you from accessing the Extensions management page. You will not be able to turn it off, delete it, or change the settings through Chrome until the `UNLOCK_DATE` is reached. 

**Load it only when you are ready for absolute focus.**

## 🛠️ Customization
1.  **Set Unlock Date:** Open `constants.js` and update the `UNLOCK_DATE` constant.
2.  **Set Redirect Target:** Open `constants.js` and paste your desired image or website link into the `REDIRECT_TARGET` constant:
    ```javascript
    export const REDIRECT_TARGET = 'https://your-link-here.com';
    ```
3.  **Manage Keywords:** Add or remove keywords from the `EDUCATIONAL_KEYWORDS` array to fit your study needs.

---

## 🛠️ Post-Installation Modification
Since the **Anti-Tamper Protocol** blocks access to the "Reload" button in Chrome, follow these steps to apply changes to the code after it has been installed:

1.  **Modify the Code:** Open your `frost-timer` folder and edit `content.js`, `background.js`, or `constants.js` with any text editor (VS Code, Notepad, etc.).
2.  **Save Changes:** Ensure the files are saved in the directory.
3.  **Restart Chrome:** Close **all** open Chrome windows and relaunch the browser. Chrome will automatically reload the modified files from your local folder upon startup.

---

## 📂 Repository Structure

| File | Purpose |
| :--- | :--- |
| `manifest.json` | Extension configuration and security permissions. |
| `background.js` | Service worker handling timer logic and anti-tamper intercepts. |
| `content.js` | Injected DOM observer for real-time YouTube title analysis. |
| `constants.js` | Central configuration for dates, keywords, and blocklists. |

---

## 📝 License
Distributed under the MIT License. See `LICENSE` for more information.

---
<p align="center">
  <i>Built for the relentless.</i>
</p>
