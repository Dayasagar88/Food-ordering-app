/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QajwrnjPWQT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import Link from "next/link"

import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 border border-t-[1px] border-gray-300">
      <div className="container flex  justify-evenly w-full  mx-auto gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <UtensilsIcon className="w-8 h-8" />
            <span className="text-xl font-bold">ZOMATO</span>
          </Link>
          <p className="text-sm max-w-md">
            Zomato is a premier food website that offers a wide variety of mouthwatering recipes, restaurant
            reviews, and culinary inspiration.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Menu
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Recipes
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Contact
            </Link>
          </div>
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">Resources</h3>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Blog
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              FAQ
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
          </div>
        </nav>
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <TwitterIcon className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <InstagramIcon className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <FacebookIcon className="w-6 h-6" />
            </Link>
          </div>
          <p className="text-sm">&copy; 2024 Zomato. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function UtensilsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}