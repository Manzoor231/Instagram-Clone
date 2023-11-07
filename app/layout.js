
import "./globals.css";
import Sidebar from "./components/Sidebar";



export const metadata = {
  title: "Instagram Clone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
