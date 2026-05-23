
# The Software Architecture Handbook
[main Source](https://www.freecodecamp.org/news/an-introduction-to-software-architecture-patterns/#heading-what-is-software-architecture)
## What is software architecture?
Software architecture is the way you **organize "stuff"** when you are building a software system. It represents the big design decisions about the **overall structure and behavior** of that system.

Because it is a broad field, it covers several different areas of a project, including:

*   **Implementation details:** How you organize the folders and files in your code repository.
*   **Technology choices:** Deciding which tools to use, such as choosing between different programming languages or types of databases.
*   **System design:** Figuring out if the system should be one single application (a **monolith**) or split into many smaller, connected services (called **microservices**).
*   **Infrastructure:** Deciding where the software will live, such as on your own physical hardware (**on-premise**) or using **cloud computing** services like those from Amazon, Google, or Microsoft.

A major part of software architecture is **modularity**, which is the practice of **breaking big systems into smaller pieces**. While small projects can start out with everything in one place, as a codebase gets bigger and more complex, architecture helps keep it **organized, easier to understand, and easier to fix**.

---

## Important Software Architecture Concepts to Know
To understand software architecture, you should be familiar with several core concepts that define how systems are built, organized, and scaled.

### Communication Models
*   **Client-Server Model:** This is the most common way to structure applications, where a **client** (like a web browser or mobile app) requests resources or services, and a **server** (the provider) performs the action and sends a response.
*   **APIs (Application Programming Interfaces):** These are the sets of rules or "contracts" that allow different applications to communicate. For example, a client knows exactly what to ask for, and the server knows exactly how to respond based on these rules.

### Structural Organization
*   **Modularity:** This is the practice of **breaking big systems into smaller pieces** to make them easier to understand, organize, and maintain. 
*   **Monolithic Architecture:** A system where one single server application handles all features. While simple to start, it can become hard to manage as the project grows.
*   **Microservices Architecture:** This involves dividing a system into many small, independent servers that each handle a specific feature (like payments or streaming). This allows teams to scale or update parts of the system without affecting everything else.
*   **Folder Structures:** Architecture also applies to how you organize your code files. Common patterns include **Layers architecture**, which divides code by responsibility (like database logic vs. routing logic), and **MVC (Model View Controller)**, which separates the user interface from the data and logic.

### Scaling and Performance
*   **Vertical vs. Horizontal Scaling:** **Vertical scaling** means adding more power (like RAM or CPU) to a single server. **Horizontal scaling** means adding more servers to handle the same task together.
*   **Load Balancers:** These act as "traffic cops" that intercept requests and distribute them across multiple servers so that no single server is overwhelmed.
*   **BFF (Back-end for Front-end):** This is an intermediary layer that sits between front-end apps and microservices to simplify how they talk to each other.

### Infrastructure and Hosting
*   **On-Premise:** You own and maintain the physical hardware where your app runs.
*   **Cloud Hosting:** You rent computing power from companies like Amazon (AWS), Google, or Microsoft.
*   **Elastic and Serverless:** **Elastic** services automatically grow or shrink your hardware capacity based on usage. **Serverless** architecture allows you to run individual functions only when needed, so you don't have to manage a full server at all.

---


## What's your infrastructure like?

In software architecture, **infrastructure** refers to how you organize the server side of your project to handle its workload.

### Monolithic Architecture
A **monolith** is a system where a **single server application** is responsible for every feature. For example, in a streaming app, the same server would handle user logins, payments, and video streaming. 
*   **Benefits:** It is **simple to set up** and easy to follow.
*   **Drawbacks:** As the project grows, the codebase becomes huge and complex, making it difficult for the server to handle high traffic.

### Microservices Architecture
**Microservices** involve dividing server features into **many small, independent servers** that each handle one specific task. One server might handle only logins, while another handles only payments.
*   **Benefits:** You can **scale only the services that need it** (like just the streaming service during a popular release) without affecting the rest of the system. It also keeps the codebase for each service smaller and easier to understand.
*   **Drawbacks:** This approach is much **more complex to manage** and is usually only recommended for very large projects.

### Back-end for Front-end (BFF)
When you use microservices, front-end apps (like a mobile app or a website) can get confused trying to talk to many different servers at once. A **BFF** is an **intermediary layer** that sits between the front-end and the microservices. It receives all requests from the front-end and **redirects them to the correct microservice**, making communication much simpler.

### Load Balancers and Horizontal Scaling
When a single server cannot handle the number of users, you need to scale your infrastructure:
*   **Vertical Scaling:** Adding more power (like RAM or GPU) to your **existing server**.
*   **Horizontal Scaling:** Setting up **multiple servers** to perform the same task.
*   **Load Balancers:** These act as "traffic controllers" that intercept requests from clients and **distribute them across your multiple servers**. This ensures that no single server is overwhelmed by too much traffic. 

---
## Where your infrastructure lives

Deciding where your infrastructure lives is a major part of software architecture, with three main options available: **on-premise**, **traditional server providers**, or **the cloud**.

### On-Premise Hosting
**On-premise** means that your company **owns and maintains the physical hardware** where the application runs. 
*   **Pros:** It gives a company **total control** over its hardware. This is often used for very sensitive data, such as private banking or power plant software.
*   **Cons:** It is expensive and time-consuming because it requires **physical space and dedicated teams** for maintenance. Scaling is difficult because you must buy and set up new equipment manually.

### Traditional Server Providers
With this option, you **rent servers** from companies that own them, such as Hostinger. 
*   **Pros:** You don't have to worry about hardware maintenance, allowing you to focus entirely on your software. 
*   **Cons:** Scaling is easier than on-premise because you can simply pay for more hardware when needed, but you usually still pay a **set monthly fee** for the hardware you choose.

### Hosting on the Cloud
The **cloud** refers to massive data centers owned by tech giants like **Amazon (AWS)**, **Google (Google Cloud)**, and **Microsoft (Azure)**. There are several ways to use these services:

*   **Traditional:** You select specific hardware and pay for it on a **monthly basis**, similar to a traditional provider.
*   **Elastic:** The system **automatically grows or shrinks** your hardware capacity based on how many people are using your app. This is convenient because you only pay for the resources you actually consume.
*   **Serverless:** Instead of a constant server, you use **individual functions** that only run when they are needed. You are only charged for the exact number of times a function runs and how long it lasts, meaning you don't have to manage a server at all.
*   **Other Services:** Cloud providers also offer many other tools, including **databases, file storage, and security services**, which can be set up quickly using "infrastructure as code" scripts.

---

## Different folder structures to know

In software architecture, folder structures are a way of applying **modularity** to your code, which means breaking a large project into smaller, organized pieces so it is easier to understand and maintain.

### All in One Place Folder Structure
This is the simplest way to start a project. All of your code—including the server setup, logic, and data—lives in **one or two files** (like an `app.js` file).
*   **When to use it:** It works perfectly fine for **very small projects** or dummy examples.
*   **The Problem:** As the project grows and you add more features, the code becomes **confusing and hard to follow** because everything is mixed together.

### Layers Folder Structure
Layers architecture focuses on **dividing concerns and responsibilities** into different folders and files. In this setup, the sources describe a system with five specific layers:
*   **Application Layer:** The basic setup of the server.
*   **Routes Layer:** Defines the "addresses" or endpoints of the API.
*   **Controllers Layer:** Holds the actual logic for what happens at those endpoints.
*   **Model Layer:** Handles the logic for talking to the database.
*   **Persistence Layer:** Where the actual data or database lives.

A key rule of this structure is a **defined communication flow**. This means a request must go through the layers in order (1, then 2, then 3, etc.) and cannot skip a layer. This keeps the code **structured and predictable**.

### MVC Folder Structure
**MVC** stands for **Model View Controller**. It is a common pattern that simplifies the layers structure and includes the **front-end (User Interface)** of the application. It uses three main parts:
*   **Model:** Responsible for interacting with the database.
*   **View:** Responsible for **rendering the UI** (the pages or screens the user actually sees).
*   **Controller:** Responsible for defining the routes and the logic for each of them.

_Just like the layers architecture, each part only talks to the next one in a specific order. Many popular coding frameworks use MVC because it clearly separates the **data (Model)**, the **logic (Controller)**, and what the **user sees (View)**._

---

## Conclusion
In summary, **software architecture** is a broad and complex field that defines how you organize every part of a software system. As shown in the sources, it isn't just one thing, but a collection of big design decisions that include:

*   **Infrastructure:** Choosing between a **monolithic** design (one server for everything) or **microservices** (many small, specialized servers) to manage features and scaling.
*   **Hosting:** Deciding where your code lives, whether it's on your own **physical hardware**, rented from **traditional providers**, or hosted on the **cloud** using modern elastic or serverless technologies.
*   **Organization:** Using **folder structures** like **Layers** or **MVC** to break your code into manageable, modular pieces that are easier to maintain as the project grows.

_While we have covered core concepts like **horizontal scaling**, **load balancers**, and **APIs**, the sources emphasize that this is only the "tip of the iceberg". Software architecture is an evolving field, and the best way to master it is to keep researching and building projects to see these patterns in action._