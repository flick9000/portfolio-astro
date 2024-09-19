---
title: "The Ultimate Windows Guide"
description: "How to optimize Windows 10/11 for performance & privacy."
pubDate: "Sept 17 2030"
heroImage: "/windows-guide/windows.webp"
---

# Why this guide?

The other day, out of curiosity, I was watching some 'Windows Optimization Guides' and other 'PC Tweaks' videos on YouTube to see what tweaks people were suggesting and whether there was something new I didn’t know about that could improve Windows. **I was shocked by how much misinformation I saw.** Most of the suggestions didn’t make sense. People were advising viewers to disable Windows Defender and other important security features for a mere 0.1% performance boost, edit random registry entries that had nothing to do with performance or privacy, and recommend changes that disabled key features without explaining what the scripts actually did. So, I decided to write my own guide. In this guide, you will find only actualky useful tweaks — the ones that make a real difference and are not just placebo effects.

**Let's start.**

# Table of Contents

- [BIOS Setup](#bios-setup) <br>
- [Windows Setup](#windows-setup) <br>
- [Basic Windows Optimization](#basic-windows-optimization) <br>
- [Advanced Windows Optimization](#advanced-windows-optimization) <br>
- [Conclusion](#conclusion) <br>

# BIOS Setup

## Update Bios

Updating your motherboard’s BIOS is an important step in optimizing your system’s performance, stability, and compatibility. Manufacturers regularly release BIOS updates to fix bugs, improve system performance, and support new hardware like processors and RAM. <br>

**How to update BIOS:**

- Identify your exact motherboard
- Find the BIOS update on the manufacturer's website
- Download it and put it in a formatted USB Drive
- Reboot your PC and enter the BIOS by pressing the designated key (usually Delete, F2 or F12)
- Go to the Update BIOS / EZFlash / InstantFlash menu
- Follow the instructions

<img style="min-height: 200px" src="/windows-guide/biosupdate.jpg">

## Enable XMP

XMP (Extreme Memory Profile) is a feature that allows you to automatically overclock your RAM to its rated speed, providing better performance without manual configuration. RAM typically runs at lower default speeds, but enabling XMP ensures you’re getting the most out of your memory. <br>

**How to enable XMP:**

- Enter BIOS
- Locate XMP Setting (usually in the memory or overcloking section)
- Enable XMP

You can confirm that XMP is enabled by opening Task Manager > Performance > Memory and check if the RAM speed matches the XMP Profile.

<img style="min-height: 200px" src="/windows-guide/biosxmp.png">

## Enable Resizable Bar

Resizable BAR is an advanced PCIe technology that allows the CPU to access the entire GPU memory at once, rather than in smaller chunks. This can lead to a noticeable performance boost, especially in games that benefit from faster data transfer between the CPU and GPU. <br>

**How to enable Resizable BAR:**

- Enter the BIOS
- Locate and enable Resizable BAR (usually in the advanced or PCIe section)
- Look for 'Resizable Bar' and/or 'Above 4G Decoding'
- Enable them

<img style="min-height: 200px" src="/windows-guide/resizablebar.png">

# Windows Setup

Did you know that you can install Windows 11 without (almost) any bloatware just by changing a simple entry in the Windows setup?
You just have to set as **Time & Currency format to "English (World)"** during the initial install. This will prevent Windows from installing default/suggested 3rd party apps.

<img style="min-height: 200px" src="/windows-guide/windows-world.png">

## Activating Windows

To activate Windows (and Office) for free, **you can use 'Microsoft Activation Script'** (MAS), by massgravel. It's an open-source Windows and Office activator that uses HWID / Ohook / KMS38 / Online KMS activation methods. To use MAS, follow these steps:

- Right-click on the Windows start menu and select PowerShell or Terminal (Admin).
- Copy-paste the below code and press enter.

```
  irm https://massgrave.dev/get | iex
```

- Follow the instructions on the screen.

<!-- <img style="min-height: 250px" src="/windows-guide/mas.png"> -->

## Installing Drivers

**It is essential to install the appropriate drivers in order to get the best performance.** <br>

First of all, scan Windows for updates, install them and reboot. Windows gets the drivers (Chipset, LAN, Wi-fi and more) directly from the manufacturer via Windows Update and installs them automatically. It will take care of 99% of your drivers needs.

**If you don't trust Windows Update to install Chipset, Audio, LAN/Wireless drivers**, you just have to know your exact motherboard model, manufacturer, and go to their website.
To find them the search process it's usually the same:

- Search for MOTHERBOARD MODEL + 'drivers'
- Go to their website
- Go to the support/driver section

_Example: MSI Pro B760-M P DDR5 Drivers_ <br>

**The only driver you need to install manually is the GPU Driver.** You either have a [NVIDIA](https://www.nvidia.com/en-us/drivers/), [AMD](https://www.amd.com/en/support/download/drivers) or [Intel](https://www.intel.com/content/www/us/en/products/docs/discrete-gpus/arc/software/drivers.html) GPU and you can install the driver directly from the manufacturer. <br>
The process is very straightforward. Just follow the instructions on the screen and reboot afterwards.

## NVCleanstall

**This is for NVDIA GPU owners only.** <br>

[NVCleanstall](https://nvcleanstall.org/) is a free and portable app that detects automatically your GPU, and chooses the latest driver. NVCleanstall lets you customize the NVIDIA GeForce Driver package by removing components that you don't need (or want). This lowers disk usage and memory footprint.

The process is the same, follow the instructions on the screen and reboot afterwards.

<img style="min-height: 200px" src="/windows-guide/nvcleanstall.jpg">

# Basic Windows Optimization

**Before starting, make sure to create a restore-point.** <br>
Now let's start with some basic, effective and most importantly safe optimizations to do on Windows.

## Enable Game Mode

Windows Game Mode is a features that optimizes Windows's performance for gaming, by prioritizing CPU and GPU resources for the game, and prevents Windows Update from performing installations while you're playing.
To enable Windows Game Mode, **go into Settings > Gaming > Game Mode, and turn it ON.**

<img style="min-height: 200px" src="/windows-guide/gamemode.png">

## Uninstall Bloatware

Windows comes with a variety of pre-installed garbage that most users find unnecessary or intrusive. Debloating Windows involves removing or disabling these unwanted apps/features **to improve performance and free up system resources.** Here is how to do it:

- Open Settings
- Go to Apps
- Go to Installed Apps
- Remove any app you don't need.

<img style="min-height: 200px" src="/windows-guide/debloat.png">

## Disable Startup Items

Startup programs can slow down your system's boot time and consume additional resources. Disabling unnecessary startup items **helps your computer start up faster and can improve overall performance.** Here’s how to manage and disable startup items in Windows 10/11:

- Open Task Manager
- Go to Startup Apps
- Disable programs that you don't need at the startup.

<img style="min-height: 200px" src="/windows-guide/startup.png">

## High Performance Plan

Windows's default power plan is 'Balanced', **which is not optimal for gaming or high demanding tasks.** To change it to 'High Performance':

- Open Control Panel
- Select View by 'Large Icons'
- Select 'Power Options'
- Enable High Performance

<img style="min-height: 200px" src="/windows-guide/powerplan.png">

## Disable Data Collection

If you’re concerned about privacy (& also performance), **you can limit or disable some Windows data collection** (to disable it completely check out the Advanced Windows Optimizations below.). <br>
Here’s how to adjust these settings in Windows:

- Open Settings
- Go to Privacy
- Click on 'General' and uncheck everything.
- Do the same for 'Diagnostics & feedback'
- Do the same for 'Activity History'
- Do the same for 'App Diagnostics'

<img style="min-height: 200px" src="/windows-guide/datacollection.png">

## Disable Notifications

**Notifications are a distraction and disrupt your workflow.** Disabling or customizing notifications can help you stay focused and reduce interruptions. To disable Windows notifications follow these steps:

- Open Settings
- Go to System > Notifications
- Turn them off

<img style="min-height: 200px" src="/windows-guide/notifications.png">

## Clean Temporary Files

Over time, your system accumulates temporary files from everyday tasks. **These files can take up disk space and slow down your system’s performance.** Regularly cleaning temporary files is a simple way to free up disk space and keep your system running smoothly. <br>

**Here’s how to do it:**

- Press Win + R
- Type 'prefetch' and delete all content inside
- Type '%temp%' and delete all content inside
- Type 'temp' and delete all content inside
- Type 'cleanmgr' and follow instructions

<img style="min-height: 200px" src="/windows-guide/cleantemp.png">

# Advanced Windows Optimization

For those looking to go beyond the simple tweaks above, **and squeeze every ounce of performance out of your system, and improve greatly your privacy**, here are some more advanced Windows settings to consider. <br>

For this part, **we will use [WinScript](https://winscript.pages.dev/),** a free online open-source project i developed to automate some Windows tweaks & settings i apply on every machine. With WinScript you can build your script from scratch **and have complete control over it** instead of blindly running some random scripts made by some kid on the internet.

**If you don't how to start**, or which scripts to choose, **you can select the 'Basic' preset**, which will enhance privacy and performance without disabling any feature or compromising functionality. There is also 'Strict' preset, which will improve performance and privacy even more, **but i recommend to check every script before using it.**

If you want instead customize your script, keep reading below.

**The great thing is that you will not need to install any software on your computer as you will build your script online and then downloading the final .bat script.**

<img style="min-height: 200px" src="/winscript/winscript.png">

# Debloat

Inside WinScript, **you can go in the 'Debloat' section**, and there you can find all kinds of debloating scripts, such as Removing Edge, OneDrive, CoPilot, MS Apps and more.

**I personally recommend checking at least these scripts:**

- Remove 3rd-party apps
- Remove Xbox Apps (if you don't use them)
- Disable Consumer Features (recommended, prevents windows from installing random software on your PC.)
- Remove CoPilot (recommended, essentially just spying on you)
- Remove Widgets
- Remove Taskbar Widgets

<img style="min-height: 200px" src="/winscript/winscript-debloat.png">

# Privacy

In the 'Privacy' section instead you can find scripts to **improve privacy by disabling Windows data collection and telemetry**, such as Windows, Windows Update, Search, Feedback Telemetry and more. This section is very essential **if you want Windows to stop collecting your personal data to feed their services.**

**I personally recommend checking at least these scripts:**

- Disable Windows Telemetry & Data Collection
- Disable Windows Search Data Collection
- Disable Office Telemetry & Data Collection
- Disable Application Experience Data Collection
- Disable Feedback Data Collection
- Disable Handwriting Data Collection
- Disable Clipboard Data Collection
- Disable Targeted Ads
- Opt out of Privacy Consent
- Disable Activity Feed

<img style="min-height: 200px" src="/winscript/winscript-privacy.png">

# Performance

In the 'Performance' section, you can find **scripts to enhance system speed and responsiveness** by reducing resource usage, disabling unnecessary services, and tweaking system settings for better performance. **These scripts help free up CPU, memory, and storage resources**, ensuring that your PC runs smoother and faster, especially on older or resource-limited systems. You can also find miscellaneous settings as enabling Dark Mode, **restoring the classic right-click menu, disabling mouse acceleration** & more.

**I personally recommend checking at least these scripts:**

- Clean Temporary Files
- Run Disk Clean-up
- Add Ultimate Performance (you need to enable it in Control Panel > Power Options)
- Disable Hibernation (if you are on desktop, if you are on laptop keep it enabled)
- Set Services to Manual (will free up system resources by keep services running only when they are needed)

<img style="min-height: 200px" src="/winscript/winscript-performance.png">

# Conclusion

By sticking to these proven methods, you avoid the unnecessary risks of poorly advised tweaks and improve your overall OS performance & and privacy without compromising your security. **Remember, performance optimizations should not come at the cost of security or functionality** — prioritize balance and make informed decisions.

Thank you for reading.
