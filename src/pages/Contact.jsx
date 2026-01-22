// import ContactForm from "../components/ContactForm"
// import ContactInfo from "../components/ContactInfo"

// export default function Contact() {
//   return (
//     <main className="max-w-7xl mx-auto px-6 pt-40 pb-32">
//       {/* Page Heading */}
//       <h1 className="text-4xl font-bold mb-14">
//         Contact <span className="text-[#3cff78]">Us</span>
//       </h1>

//       {/* Form + Info */}
//       <section className="grid gap-12 md:grid-cols-2">
//         <ContactForm />
//         <ContactInfo />
//       </section>
//     </main>
//   )
// }




import ContactForm from "../components/ContactForm"
import ContactInfo from "../components/ContactInfo"

export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-40 pb-32">
      <h1 className="text-4xl font-bold mb-14">
        Contact <span className="text-primary">Us</span>
      </h1>

      {/* LEFT FORM + RIGHT INFO */}
      <section className="grid gap-12 md:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </section>
    </main>
  )
}
