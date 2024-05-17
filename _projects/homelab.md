---
layout: page
title: Homelab
published: true
description: My homelab setup for having fun and learning new things
img: assets/img/lab_shelf.jpg
importance: 1
category: fun
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/lab_shelf.jpg" title="Homelab Shelf" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    My Homelab and the messy basement
</div>

During the 2020 lockdown, I decided to pick up a server and start running different applications. This evolved quickly into another server for storage.

I started to use Home Assistant and gained an appreciation for smart homes and IOT technology, as well as the cybersecurity implications that came with it. I began to familiarize myself with Linux through Proxmox and Raspberry Pi and this helped me build my understand how Docker works.

Over the last couple of years, I have aquired a few older enterprise-grade servers to learn how they work differently from a normal computer. This has allowed me to expand my homelab even more! I am currently running TrueNAS, Proxmox as well as two Docker servers.

On top of the servers, I need the network infrastructure to support it. As my router and firewall, I am running OPNSense and for WiFi, I have 4 TP-Link Omada Access points around the house. These have seperate SSIDs on different VLANs to seperate IOT traffic from my family's. These VLANs seperate the servers as well.

Ever since I started running a homelab, I have gained a new appreciation for the way that the internet and technology in general works. Being able to learn what I've learned has given me sense of accomplishment, even if it can be frustrating at times.

## Hardware List

- Dell PowerEdge R320 - TrueNAS Server
- Dell PowerEdge R220 - Main Docker Server
- Dell PowerEdge R210 - OPNSense Server
- HP Elite Desk - Second Docker Server
- Dell Optiplex - Proxmox Server

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/lab_stack.jpg" title="Server Stack" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    My Dell Servers
</div>

