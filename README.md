# 词王淬炼坊
**百德中学 G3 华文词语总复习 · Bukit View Secondary School G3 Chinese Language Vocabulary**

🔗 https://for.edu.sg/g3cl-vocabking

---

## 简介 About

**词王淬炼坊**（Cí Wáng Cuì Liàn Fāng）是一款专为新加坡中学 G3 华文学生设计的游戏化词语学习渐进式网页应用（PWA），涵盖中一至中四教材词语，词库总量逾千条，按年级、单元及板块系统分类。

A gamified Chinese Language vocabulary PWA for Singapore secondary G3 students (Sec 1–4). 1,000+ curriculum-mapped words across 4 study modes, with Firebase cloud sync, avatar customisation, school leaderboard, and a full badge achievement system. Built by **Mdm Chun Kai Xin, HOD/MTL, Bukit View Secondary School**.

---

## 主要功能 Features

**学习模式 Study Modes**
- 🃏 **词语闪卡** — 翻转卡片，自主判断掌握程度 / Flashcard with self-assessment
- ✏️ **填空挑战** — 在例句中选词填空，答对方可计入"已掌握" / Cloze MCQ (required for mastery)
- 📖 **华文解释** — 选出正确的中文释义 / Chinese definition MCQ
- 🌐 **英文翻译** — 选出正确的英文翻译 / English translation MCQ

**游戏化系统 Gamification**
- 🏅 四级成就体系：板块章 → 单元章 → 年级称号 → 顶级词王 / 4-tier badge & rank system
- 🏆 **词王排行榜**：校内榜 + 全岛榜，含颁奖台 UI / School & island-wide leaderboard with podium
- 🎨 **捏脸工坊**：10 维度头像定制，云端持久化 / 10-dimension avatar customiser with Firestore sync
- 🎵 Web Audio API 音效系统（合成音，无需外部文件）/ Synthesised sound effects, no audio files
- 🎉 T1–T4 分级庆祝弹窗，配经典名言 / Tiered celebration overlays with literary quotes

**技术架构 Tech Stack**
- 单文件 PWA（`index.html`），托管于 GitHub Pages / Single-file PWA on GitHub Pages
- Firebase Authentication + Cloud Firestore（进度云端同步）/ Firebase Auth + Firestore for cloud sync
- Google Apps Script（定期汇出数据至 Google Sheets）/ GAS for periodic Sheets export
- Web Speech API TTS，含三星 Android 兼容层 / TTS with Samsung Android compatibility
- 昵称审核机制，排行榜可见性管控 / Nickname moderation gate for leaderboard visibility

---

## 文件说明 Repository Files

| 文件 | 说明 |
|------|------|
| `index.html` | 主应用文件（全部功能、词库、样式、逻辑）|
| `sw.js` | Service Worker（直通模式，无离线缓存）|
| `manifest.json` | PWA 配置 |
| `csv_url.js` | Google Sheets URL 参考（非运行代码）|
| `GAS/` | Google Apps Script 后端脚本（定期数据导出）|
| `icon192.png` / `icon512.png` | 应用图标 |
| `Vocab_king_*_background.png` | 主页背景图（移动端 / 桌面端）|
| `badge_*.png` | 板块成就徽章图（生活空间 / 核心 / 巩固 / 文化站）|
| `G3_CL_词语总表_v*.xlsx` | 词库主数据表（权威来源）|

---

## 部署 Deployment

1. 将所有文件上传至 GitHub Pages 仓库根目录
2. Firebase 项目：`g3-vocab-king`（asia-southeast1），需配置 Authentication 和 Firestore 规则
3. GAS 脚本单独部署，用于定期汇出数据至 Google Sheets（非应用主链路）
4. 强制刷新浏览器（Ctrl+Shift+R）验证更新

---

## 词语库更新规则 Vocab Update Rules

**每次更新须同时完成 / Always do both:**
1. 更新 `G3_CL_词语总表` Excel 工作表 / Update the master Excel workbook
2. 更新 `index.html` 硬编码词库数组 / Update hardcoded arrays in `index.html`：`VOCAB` / `DEFS` / `EXAMPLES` / `ENGLISH_DEFS` / `PINYIN_DATA`

⚠️ **新词语只可追加至对应单元数组末尾，严禁插入中间** — 插入会导致所有已有进度索引错位失效。
New words must be **appended** to the end of unit arrays — never inserted in the middle, or all existing progress indices will break.

---

## 词库版本 Vocab Version

| 项目 | 详情 |
|------|------|
| 当前版本 | G3_CL_词语总表 v6 |
| 词语总量 | 逾 1,000 条（中一至中四，含文化站） |
| 板块分类 | 生活空间 · 核心 · 巩固 · 文化站 |
| 年级覆盖 | 中一 / 中二 / 中三 / 中四 |

---

Maintained by **郑凯欣老师 Mdm Chun Kai Xin · HOD/MTL · 百德中学 Bukit View Secondary School** · © 2026
