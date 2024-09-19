---
title: "Automate Windows Setup"
description: "Fully automate the Windows setup with an autoattend.xml file."
pubDate: "Sept 18 2024"
heroImage: "/autoattend.png"
---

# Table of Contents

- [Overview](#overview)
- [What can be automated?](#what-can-be-automated)
- [How to build an autoattend.xml](#how-to-build-an-autoattendxml)
- [My Preset](#my-preset)

# Overview

Setting up Windows sucks. You need to go through the entire OOBE, with Microsoft trying at all costs to make you use a Microsoft Online Account, enable Telemetry & Data Collection, answering so-called 'Security Questions' & other crap.

Fortunately Microsoft gives you the ability to add 'Answer Files', or commonly called 'Unattend files' to the Windows Installation Media, which can be used to automatically set up, edit settings, automate tasks and even apply scripts during the Windows Setup. This can be particularly useful if you need to install Windows on multiple machines, or if you want to automate the setup of yours.

At the end of the guide, i will provide my autoattend.xml preset, more details below.

# What can be automated?

Everything. By using an autoattend.xml file, you can automate the entire Windows setup process from start to finish. Here are some of the things you can automate:

- **Language and Keyboard Layout:** Automatically select the preferred language, region, and keyboard layout without manual input.
- **Bypass Windows 11 TPM and Secure Boot Requirements:** Skip the TPM and Secure Boot checks, allowing installation on older or unsupported hardware.
- **Local Account Creation:** Avoid the need for a Microsoft account by creating a local account without internet access.
- **Disk Partitioning:** Pre-configure disk partitions for custom setups, whether you want to partition a drive for specific uses or set up multiple drives.
- **Windows Installation Settings:** Customize privacy settings such as telemetry levels, location services, and data collection options.
- **System Tweaks:** Modify Windows features like disabling Windows Defender, UAC, SmartScreen, and setting other system-level preferences.
- **Windows Explorer Settings:** Automate tweaks like showing hidden files, file extensions, disabling widgets, and using the classic right-click menu.
- **Debloat Windows:** Remove unwanted pre-installed apps and bloatware during the installation process.
- **Run Custom Scripts:** Add custom PowerShell or batch scripts that run during the Windows setup or after the first boot, allowing further customization.

# How to build an autoattend.xml?

Building an autoattend.xml is very simple. There are several autoattend.xml generators available online, for this guide we will use Schneegans's [autoattend](https://schneegans.de/windows/unattend-generator/) generator.

In this guide we will not go over the whole process, as it's very simple but only focus on the most important tweaks to do.

<img src="/schneegans.png">

## Bypass Windows 11 TPM

In the Schneegans generator, there's a specific option to bypass Windows 11's TPM requirement. To enable it, follow these steps:

- Open the Schneegans Unattend Generator.
- In the 'Setup Settings' tab, locate the Bypass TPM/Secure Boot option.
- Toggle this option to enabled.

This will automatically include the necessary regedit patches to bypass the TPM and Secure Boot checks when Windows 11 is installed.

## Allow Windows 11 to be installed without internet

To skip the internet requirement during installation and allow the creation of a local account; you can use the generator’s settings:

- In the 'Setup Settings' tab, look for the Allow Installation Without Internet checkbox.
- Enable this option, which will ensure that Windows skips the online account setup and allows you - create a local account during the installation process.

This will add the proper flags to the autoattend.xml to block the requirement for a network connection during setup.

<img src="/schneegans-setup.png">

## Create Account Without Password / PIN

To create a user account without requiring a password or PIN setup:

- Navigate to the User Accounts section in the generator.
- Check 'Let Windows Setup create the following local offline accounts'
- Under User Accounts, fill in the account information and leave the password field blank.

If you only want a single account make sure to leave the User Account Fields blank. <br>
This configures Windows to skip the requirement of setting a password or PIN during the setup process.

<img src="/schneegans-accounts.png">

## Windows Explorer Tweaks

Schneegans's generator allows you to customize Windows Explorer settings like showing hidden files and enabling file extensions directly in the autoattend.xml, which can be found in the 'System Tweaks' tab. See the following settings:

- Show hidden files and folders
- Show file extensions
- Disable Windows Widgets
- Use classic right-click context menu
- Left-align taskbar
- Hide Edge first-run experience

These settings will be automatically included in the autoattend.xml to apply the tweaks during installation.

<img src="/schneegans-explorer.png">

## Windows System Tweaks

You can automate many system-level configurations via the generator, such as:

- Disable Windows Defender
- Disable UAC (User Account Control)
- Disable Smart App Control
- Disable Fast Startup
- Disable SmartScreen
- Disable System Restore
- Enable Long Paths Support
- Allow PowerShell script execution
- Disable App Suggestions
- Prevent device BitLocker encryption

Be careful about what you select, as disabling Windows Defender and UAC makes your system vulnerable to attacks.

<img src="/schneegans-system.png">

## Remove Bloatware

Windows, unfortunately, comes with several pre-installed apps that many users may not want or need. The Schneegans generator allows you to easily remove these unnecessary apps during the Windows setup process.

Here is the list of apps you can remove:

3D Viewer, Bing Search, Calculator, Camera, Clipchamp, Clock, Copilot, Cortana, Dev Home, Family, Feedback Hub, Get Help, Internet Explorer, Mail and Calendar, Maps, Math Input Panel, Mixed Reality, Movies & TV, News, Notepad (classic), Notepad (modern), Office 365, OneDrive, OneNote, OpenSSH Client, Outlook for Windows, Paint, Paint 3D, People, Photos, Power Automate, PowerShell ISE, Quick Assist, Recall, Remote Desktop Client, Skype, Snipping Tool, Solitaire Collection, Steps Recorder, Sticky Notes, Teams, Tips, To Do, Voice Recorder, Weather, Windows Media Player (classic), Windows Media Player (modern), Windows Terminal, WordPad, Xbox Apps, Your Phone.

All these removals will be handled automatically during the Windows setup, so you don't need to uninstall them manually after installation.

<img src="/schneegans-debloat.png">

## Run Custom Scripts

This is a powerful feature that enables further customization and automation beyond what's included in the generator. You can use this to install additional software, apply system tweaks, or configure advanced settings that aren’t covered by the autoattend.xml file.

I recommend using my open-source tool [WinScript](https://github.com/WinScript/WinScript) to create a custom Windows script, allowing you to disable completely telemetry, debloat further, apply performance tweaks and install all the apps you want in one click through the terminal.

<img src="/winscript.png">

# My Preset

Here is my autoattend.xml preset that incorporates many of the tweaks and configurations discussed in this guide. This preset is designed for a clean, bloat-free Windows installation that bypasses TPM, skips the internet requirement, creates a local account without a password, applies useful system and Windows Explorer tweaks, and removes unnecessary apps.

## What is included in the preset?

- Bypasses TPM
- Skips the internet requirement
- Creates a local account without a password
- Applies Explorer tweaks such as showing hidden files and extensions, disabling widgets, using the classic right-click menu, and hiding Edge first-run experience.
- Applies system tweaks such as Disabling app suggestions (ads) and preventing BitLocker encryption.
- Disables sending diagnostic data, personalized input and location history to Microsoft.
- Runs the 'Strict' preset of WinScript (Removes all 3rd-party pre-installed apps, Microsoft's bloatware, disables telemetry and data collection, and applies performance tweaks such as setting services as manual so they won't start unless needed.)

Here is the download link (GitHub) for the preset: <a target="_blank" href="https://github.com/flick9000/FlickUnattended/blob/main/autounattend.xml">autounattend.xml</a>
