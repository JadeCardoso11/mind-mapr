export default function Contact() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-2">Contact Us</h1>
      <form className="flex flex-col gap-2">
        <input type="text" placeholder="Your Name" className="border px-2 py-1" />
        <input type="email" placeholder="Your Email" className="border px-2 py-1" />
        <textarea placeholder="Message" className="border px-2 py-1"></textarea>
        <button type="submit" className="bg-blue-500 text-white py-1 rounded">Send</button>
      </form>
    </div>
  );
}
