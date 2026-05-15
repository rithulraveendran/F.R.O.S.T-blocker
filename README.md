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
- **Absolute Lockdown:** All blocking logic is non-negotiable until the system clock passes the unlock threshold.
- **Auto-Unlock:** Once the date is reached, the firewall automatically deactivates, restoring full browser access.

### ⏳ 15-Minute Daily Allowance
F.R.O.S.T. provides a **15-minute shared daily timer** for your most distracting sites.
- **Combined Usage:** Spend 15 minutes total across all blacklisted sites (Reddit, Spotify, GitHub, etc.) before the redirect triggers.
- **Real-Time Tracking:** The timer resets automatically at midnight.
- **YouTube Exclusion:** Educational use is prioritized; standard YouTube browsing does NOT count against your 15-minute distraction timer.

### 🎥 Intelligent YouTube Firewall
- **Shorts Purge:** All `youtube.com/shorts/` URLs are **immediately** blocked (no timer grace) to prevent doom-scrolling.
- **Context-Aware Filtering:** Long-form videos are scanned in real-time. If the title does not contain academic or professional keywords (STEM, Humanities, Business, Research), the tab is redirected.
- **Anti-Hover Block:** YouTube's "inline preview" (hover-play) is completely disabled to prevent bypassing the filter.

### 🚫 Distraction Blacklist
The following platforms are tracked by the 15-minute timer:
- `Facebook` • `Instagram` • `Twitter/X` • `TikTok` • `Snapchat` • `YouTube Music` • `Spotify` • `LinkedIn` • `Pinterest` • `Reddit` • `Quora` • `GitHub`

### 🔐 Anti-Tamper Protocol
Engineered to be "sticky." The extension monitors and blocks navigation to:
- `chrome://extensions`
- `chrome://settings/extensions`
Any attempt to disable or remove the extension via the UI is intercepted and redirected.

---

## 🛠️ Customization
Before installing, you can tailor the protocol in `constants.js`:

1.  **Set Unlock Date:** Update the `UNLOCK_DATE` constant to your goal date.
2.  **Set Redirect Target:** Paste your desired image or website link into `REDIRECT_TARGET`.
3.  **Manage Keywords:** Add or remove keywords from the `EDUCATIONAL_KEYWORDS` array.

---

## 🛠️ Installation & Setup
1.  Download or clone this repository.
2.  Open Chrome and navigate to `chrome://extensions`.
3.  Enable **Developer mode** (top-right corner).
4.  Click **Load unpacked** and select the `frost-timer` folder.

---

## ⚠️ Post-Installation Modification
Since the **Anti-Tamper Protocol** blocks the "Reload" button in Chrome:
1.  **Modify:** Edit the files in your `frost-timer` folder.
2.  **Save:** Ensure changes are saved.
3.  **Restart Chrome:** Close **all** Chrome windows and relaunch. Chrome will automatically reload the code from your folder.

---

## 🛑 How to Emergency Remove
If you must remove the extension before the unlock date:
1.  **Close Chrome.**
2.  **Delete the Folder:** Delete the `frost-timer` folder from your hard drive.
3.  **Relaunch:** Chrome will detect the missing files and disable the extension.

---

## 📝 License
Distributed under the MIT License. See `LICENSE` for more information.

---
<p align="center">
  <i>Built for the relentless.</i>
</p>
