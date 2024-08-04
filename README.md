# Pantry Pro 

A smart kitchen companion that helps you organize your pantry and generates delicious recipes based on what you have on hand!

## 🌟 Features

- **Real-time Pantry Organizer**: Efficiently manage your pantry inventory 
- **AI-Powered Meal Planner**: ProteinPro offers personalized protein-rich meal plans based on your available ingredients 
- **User Authentication**: Secure and personalized experience for each user
- **Responsive Design**: Seamless usage on both mobile and desktop devices

## 🛠️ Tech Stack

- **Frontend**: Next.js
- **Database**: Firebase Realtime Database
- **Authentication**: Clerk
- **UI Components**: shadcn/ui
- **AI Model**: Llama 3.1-8b-instant

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Firebase account
- Clerk account

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/daniel1kp/pantry-pro.git
   ```

2. Navigate to the project directory:
   ```
   cd pantry-pro
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Firebase and Clerk credentials:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_GROQ_API_KEY=your_groq_api_key
   ```

5. Run the development server:
   ```
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## 📝 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

