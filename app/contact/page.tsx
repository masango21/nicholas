import ContactForm from '../../components/ContactForm'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-amber-100">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl font-semibold text-amber-200">Contact</h1>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-app card p-6">
            <div className="space-y-4">
              <p><span className="font-semibold">Name:</span> Nkosinathi Nicholas Masango</p>
              <p><span className="font-semibold">Phone:</span> 0713379855</p>
              <p><span className="font-semibold">Email:</span> <a href="mailto:masangonicholas20@gmail.com" className="accent hover:underline">masangonicholas20@gmail.com</a></p>
              <p><span className="font-semibold">Address:</span> 07 Aubrey Matlala Road, Soshanguve, 0152, Gauteng</p>
              <p><span className="font-semibold">LinkedIn:</span> <a href="https://www.linkedin.com/in/nkosinathi-masango-b0a771393/" className="accent hover:underline">linkedin.com/in/nkosinathi-masango-b0a771393</a></p>
            </div>
          </div>
          <div>
            {/* Contact form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}
