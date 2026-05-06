import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div>
      <Navbar />

      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

        <form className="max-w-md mx-auto space-y-4">
          <input className="w-full border p-3" placeholder="Name" />
          <input className="w-full border p-3" placeholder="Email" />
          <textarea className="w-full border p-3" placeholder="Message" />

          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg">
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}