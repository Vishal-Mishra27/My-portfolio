

// import { useState } from "react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import { Field, Label, Switch } from "@headlessui/react";

// export default function Contact() {
//   const [name, setName] = useState("")
//   const [message, setMessage] = useState("")
//   const [email, setEmail] = useState("")
//   const [agreed, setAgreed] = useState(false);
//   const sendEmail=(e)=>{
//     e.preventDefault()
//     console.log("button clicked")
//     console.log("name is: ",name)
//     console.log("email is: ",email)
//     console.log("message is: ",message)
//   }

//   return (
//     <div
//       className="isolate bg-gray-200 px-6 py-4 sm:py-32 lg:px-8"
//       id="contact"
//     >
//       <div
//         aria-hidden="true"
//         className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
//       >
//         <div
//           style={{
//             clipPath:
//               "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//           }}
//           className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
//         />
//       </div>
//       <div className="mx-auto max-w-2xl text-center">
//         <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
//           Contact Me
//         </h2>
//         {/* <p className="mt-2 text-lg/8 text-gray-600">
//           Aute magna irure deserunt veniam aliqua magna enim voluptate.
//         </p> */}
//       </div>
//       <form onSubmit={sendEmail} className="mx-auto mt-5 max-w-xl sm:mt-20">
//         <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//           <div className="sm:col-span-2">
//             <label
//               htmlFor="first-name"
//               className="block text-sm/6 font-semibold text-gray-900"
//             >
//               Name
//             </label>
//             <div className="mt-2.5">
//               <input
//                 id="first-name"
//                 name="first-name"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 autoComplete="given-name"
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//               />
//             </div>
//           </div>

//           <div className="sm:col-span-2">
//             <label
//               htmlFor="email"
//               className="block text-sm/6 font-semibold text-gray-900"
//             >
//               Email
//             </label>
//             <div className="mt-2.5">
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 autoComplete="email"
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//               />
//             </div>
//           </div>

//           <div className="sm:col-span-2">
//             <label
//               htmlFor="message"
//               className="block text-sm/6 font-semibold text-gray-900"
//             >
//               Message
//             </label>
//             <div className="mt-2.5">
//               <textarea
//                 id="message"
//                 name="message"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 rows={4}
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//                 defaultValue={""}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="mt-10">
//           <button
//             type="submit"
//             className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             // onClick={sendEmail}
//           >
//             Let's talk
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }


// import { useState } from "react";
// import emailjs from "emailjs-com";

// export default function Contact() {
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState(""); // For error messages
//   const [success, setSuccess] = useState(""); // For success messages

//   const sendEmail = (e) => {
//     e.preventDefault();

//     // Form Validation
//     if (!name || !email || !message) {
//       setError("Please fill in all fields.");
//       setSuccess(""); // Clear any previous success message
//       return;
//     }

//     setError(""); // Clear any previous error message

//     // EmailJS sending logic
//     const templateParams = {
//       name: name,
//       email: email,
//       message: message,
//     };

//     // Replace these with your EmailJS user ID, template ID, and service ID
//     emailjs
//       .send(
//         "service_g6ab5mc", // Your EmailJS service ID
//         "template_ii4hssa", // Your EmailJS template ID
//         templateParams,
//         "O9NYl7ozlL6JWQ_JO" // Your EmailJS user ID
//       )
//       .then(
//         (result) => {
//           setSuccess("Your message has been sent successfully!");
//           setError(""); // Clear error messages
//           // Reset form fields
//           setName("");
//           setEmail("");
//           setMessage("");
//         },
//         (error) => {
//           setError("An error occurred. Please try again.");
//           setSuccess(""); // Clear any previous success message
//         }
//       );
//   };

//   return (
//     <div
//       className="isolate bg-gray-200 px-6 py-4 sm:py-32 lg:px-8"
//       id="contact"
//     >
//       <div
//         aria-hidden="true"
//         className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
//       >
//         <div
//           style={{
//             clipPath:
//               "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//           }}
//           className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
//         />
//       </div>
//       <div className="mx-auto max-w-2xl text-center">
//         <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
//           Contact Me
//         </h2>
//       </div>
//       <form onSubmit={sendEmail} className="mx-auto mt-5 max-w-xl sm:mt-20">
//         <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//           <div className="sm:col-span-2">
//             <label
//               htmlFor="first-name"
//               className="block text-sm/6 font-semibold text-gray-900"
//             >
//               Name
//             </label>
//             <div className="mt-2.5">
//               <input
//                 id="first-name"
//                 name="first-name"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 autoComplete="given-name"
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//               />
//             </div>
//           </div>

//           <div className="sm:col-span-2">
//             <label
//               htmlFor="email"
//               className="block text-sm/6 font-semibold text-gray-900"
//             >
//               Email
//             </label>
//             <div className="mt-2.5">
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 autoComplete="email"
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//               />
//             </div>
//           </div>

//           <div className="sm:col-span-2">
//             <label
//               htmlFor="message"
//               className="block text-sm/6 font-semibold text-gray-900"
//             >
//               Message
//             </label>
//             <div className="mt-2.5">
//               <textarea
//                 id="message"
//                 name="message"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 rows={4}
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//                 defaultValue={""}
//               />
//             </div>
//           </div>
//         </div>

//         {error && <p className="text-red-500 mt-2">{error}</p>}
//         {success && <p className="text-green-500 mt-2">{success}</p>}

//         <div className="mt-10">
//           <button
//             type="submit"
//             className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//           >
//             Let's talk
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }



import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(""); // For error messages
  const [success, setSuccess] = useState(""); // For success messages

  const sendEmail = (e) => {
    e.preventDefault();

    // Form Validation
    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      setSuccess(""); // Clear any previous success message
      return;
    }

    setError(""); // Clear any previous error message

    // Template Parameters
    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    // Replace these with your actual EmailJS service, template, and user IDs
    emailjs
      .send(
        "service_g6ab5mc", // Your EmailJS service ID
        "template_ii4hssa", // Your EmailJS template ID
        templateParams,
        "O9NYl7ozlL6JWQ_JO" // Your EmailJS user ID
      )
      .then(
        (result) => {
          // On success, show success message and alert
          setSuccess("Your message has been sent successfully!");
          setError(""); // Clear error messages
          alert("Your message has been sent successfully!");

          // Reset form fields
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          // On error, show error message and alert
          setError("An error occurred. Please try again.");
          setSuccess(""); // Clear any previous success message
          alert("There was an error sending your message. Please try again.");
        }
      );
  };

  return (
    <div
      className="isolate bg-gray-200 px-6 py-4 sm:py-32 lg:px-8"
      id="contact"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Contact Me
        </h2>
      </div>
      <form onSubmit={sendEmail} className="mx-auto mt-5 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-500 mt-2">{success}</p>}

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}
