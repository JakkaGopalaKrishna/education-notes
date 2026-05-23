#### **Content Delivery Networks (CDN)**

A Content Delivery Networks is a group of servers placed in many locations around the world.

* **Main Server:** The original server live location.
* **Nearby Servers:** Servers will be distributed to near by users by caching content.
* **Caching:** Store static content like images, videos, code.
* **Geographical Distribution:** It is used to reduce distance between user and server.

---

#### **How CDN Works**

CDN flow chart:

* **User Request:** User opens a website.
* **DNS Routing:** Request is sent to the nearest CDN server.
* **Cache Check:**  
  - If content is cached then delivered instantly  
  - Else fetched from origin server

---

#### **Key Components of CDN**

* **Edge Locations:** Physical data centers storing cached content.
* **Cache Servers:** Handle storage and delivery of cached files.
* **Load Balancer:** Distributes traffic evenly.
* **Content Optimization:** Compresses and speeds up file delivery.

---

#### **Benefits of CDN**

* Faster website loading
* Reduced latency
* Handles high traffic
* Improves availability
* Enhances security (DDoS protection)

---

#### **Popular CDN Providers**

* Cloudflare  
* Akamai  
* Amazon CloudFront  
* Fastly  

---

##### **Sources**

https://www.cloudflare.com/learning/cdn/what-is-a-cdn/\
https://www.geeksforgeeks.org/what-is-cdn/