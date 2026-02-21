#  ChatOrbit - Full-Stack Social Media Ecosystem

**ChatOrbit** is a vibrant, real-time social ecosystem designed for the modern digital era. It isn't just a platform; it’s a fluid space where stories come to life, ideas spark conversations, and communities grow organically. I’ve stripped away the noise to focus on what truly matters: high-fidelity interactions, lightning-fast media sharing, and a secure, intuitive environment that feels like home from the first click.

---

##  Key Features

###  Authentication & User Management
- **Secure Auth via Clerk:** Modern sign-in/sign-up flows including Social OAuth (Google/GitHub).
- **Profile Management:** Seamless updates for avatars, bios, and personal details.
- **Session Handling:** Secure, persistent sessions across frontend and backend.

###  Dynamic Social Engine
- **Smart Feed System:** Centralized feed displaying posts from connections and discovered users.
- **Content Creation:** Full support for text-based and image-based posts.
- **Interaction Logic:** Sophisticated Follow/Unfollow systems and Friend Request management (Pending, Accepted, Declined).
- **User Discovery:** Dedicated section to find and connect with new members.

###  Advanced Story System
- **Multi-Media Support:** Upload and view stories with text, images, or videos.
- **Interactive UI:** Progress bars for stories with automatic transitions and closing logic for video content.

###  Real-Time Communication
- **Messaging Suite:** Full-featured chat interface for private 1-to-1 conversations.
- **Instant Notifications:** Real-time alerts for new messages via background tasks.

---

##  Tech Stack

| Frontend | Backend | Infrastructure |
| :--- | :--- | :--- |
| **React 19** | **Node.js** | **Clerk** (Auth) |
| **Tailwind CSS v4** | **Express.js** | **ImageKit** (Media CDN) |
| **Lucide React** (Icons) | **MongoDB** | **Inngest** (Background Jobs) |
| **Vite** | **Mongoose** | **Vercel** (Deployment) |

---

##  Technical Architecture

### Media Optimization (ImageKit)
All media is processed through ImageKit to ensure high-resolution images are resized and compressed on the fly, significantly reducing page load times and bandwidth usage.

### Background Processing (Inngest)
I use Inngest to handle non-blocking tasks such as:
- Cleaning up expired stories.
- Processing complex data webhooks.
- Handling scheduled notification triggers.

### Data Modeling
A structured MongoDB schema ensures data integrity across Users, Posts, Stories, and Messaging threads, optimized for fast retrieval and scalability.

---

##  Development Roadmap

- [x] **Phase 1:** UI/UX Layout & Responsive Sidebar/Feed.
- [x] **Phase 2:** Clerk Authentication Integration.
- [ ] **Phase 3:** Social Logic (Follow/Unfollow & Discovery).
- [ ] **Phase 4:** Story System & Video logic.
- [ ] **Phase 5:** Backend API & MongoDB Architecture.
- [ ] **Phase 6:** Inngest Webhooks & ImageKit Integration.
- [ ] **Phase 7:** Frontend/Backend Final Integration.

---

##  Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ABDUL-RAHMAN-9/ChatOrbit-Global-Sphere.git

2. **Install dependencies (using npm):**
   ```bash
    cd client && npm install
    # and
    cd server && npm install

3. **Set up environment variables:**
    ```bash
    Create a .env file in both client and server directories with your Clerk, ImageKit, and MongoDB credentials.
    ```
   
4. **Run Development Server:**
   ```bash
    npm run dev

---

##  The Architect
**[Abdul Rahman](https://github.com/ABDUL-RAHMAN-9)**  
*Bridging the gap between complex code and human connection.*

> "ChatOrbit isn't just about building a feed; it's about engineering a space where every digital interaction feels intentional and every user finds their center."

**© 2026 ChatOrbit — Redefining Social Interaction.**
