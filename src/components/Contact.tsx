import { useState } from 'react'
import emailjs from "@emailjs/browser";
import ContactIcon from "@/components/icons/ContactIcon"
import LoadingIcon from '@/components/icons/LoadingIcon';
import SendIcon from '@/components/icons/SendIcon';

const Contact = () => {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", color: "" });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (form.from_name === "") {
      setMessage({ text: "Por favor, proporciona un nombre para que me pueda dirigir hacia ti.", color: "text-red-500" });
      return;
    }

    if (form.from_email === "") {
      setMessage({ text: "Por favor, proporciona un correo electrónico para que me pueda dirigir hacia ti.", color: "text-red-500" });
      return;
    }

    if (form.message === "") {
      setMessage({ text: "Por favor, introduce un mensaje.", color: "text-red-500" });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.PUBLIC_VITE_EMAIL_SERVICE_ID??"",
        import.meta.env.PUBLIC_VITE_EMAIL_TEMPLATE_ID??"",
        form,
        import.meta.env.PUBLIC_VITE_EMAIL_PUBLIC_KEY??""
      )
      .then(
        () => {
          setLoading(false);
          setMessage({ text: "Gracias por contactar conmigo, te responderé tan pronto como pueda.", color: "text-green-500" });

          // Clear the success message after 5 seconds
          setTimeout(() => {
            setMessage({ text: "", color: "" });
          }, 5000);
        },
        (error: any) => {
          setLoading(false);
          console.error(error);
          setMessage({ text: "Ouch, algo no ha funcionado como debería, por favor prueba de nuevo.", color: "text-red-500" });
        }
      );
  };

  return <div
    className="flex flex-col items-left px-4 py-3 rounded-lg bg-white bg-[radial-gradient(#e5e7eb_1px,#f3f6ff_1px)] bg-[size:30px_30px]"
  >
    <div
      className="absolute inset-0 z-[-100] h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
    >
    </div>
    <h2 className="text-2xl flex flex-row gap-1.5 items-center">
      <ContactIcon /> Contacto
    </h2>

    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <label className="flex flex-col">
        <span className="text-black font-medium mb-4">Tu nombre</span>
        <input
          type="text"
          name="from_name"
          placeholder="Nombre"
          onChange={handleChange}
          className="bg-[#c3c6cf]  py-3 px-5 text-[.9375rem] placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
        />
      </label>
      <label className="flex flex-col">
        <span className="text-black font-medium mb-4">Tu correo electrónico</span>
        <input
          type="email"
          name="from_email"
          placeholder="correo@gmail.com"
          onChange={handleChange}
          className="bg-[#c3c6cf]  py-3 px-5 text-[.9375rem] placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
        />
      </label>
      <label className="flex flex-col">
        <span className="text-black font-medium mb-4">Mensaje</span>
        <textarea
          rows={3}
          name="message"
          placeholder="Me gustaría saber más sobre..."
          onChange={handleChange}
          className="bg-[#c3c6cf] py-3 px-5 text-[.9375rem] placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
        />
      </label>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="flex items-center justify-center  py-3.5 px-14 rounded-full outline-none w-fit gap-1 text-white font-semibold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  shadow-sm  shadow-blue-800/80"
        >
          {loading ? <LoadingIcon /> : (<>Enviar<SendIcon /></>)}
        </button>
      </div>
    </form>

    {message.text && (
      <div className={`${message.color} font-semibold text-center mt-4`}>{message.text}</div>
    )}
  </div>

}

export default Contact;