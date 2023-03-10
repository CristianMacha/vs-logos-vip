import "./globals.css";
import Navigation from "@/components/Navigation";
import BtnWhatsApp from "@/components/BtnWhatsApp";
import Footer from "@/components/Footer";

export default function RootLayout({children}) {
    return (
        <html lang="en">
        {/*
        <head /> will contain the layouts returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head/>

        <body className="relative">
        <Navigation/>
        {children}
        <Footer/>
        <BtnWhatsApp/>
        </body>
        </html>
    );
}
