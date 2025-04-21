import './globals.css';
import MainHeaders from "@/components/main-headers";

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <div id='page'>
            <MainHeaders />
            {children}
        </div>
      </body>
    </html>
  )
}
