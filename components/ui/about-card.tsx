import Image from "next/image";
import { ContactButton } from "@/components/ui/contact-button";

export function AboutCard() {
  return (
    <div
      className={
        "flex flex-col md:flex-row items-center md:items-start mb-8 gap-8 "
      }
    >
      <div className={"relative w-74 h-74 mb-4 md:mb-0"}>
        <Image
          src={"/profile.jpg"}
          width={800}
          height={800}
          alt={"Photo1"}
          className={
            "absolute inset-0 w-74 h-74 object-cover transition-opacity duration-300 opacity-100 hover:opacity-0"
          }
        />
        <Image
          src={"/profile2.jpg"}
          alt={"Photo2"}
          width={800}
          height={800}
          className={
            " absolute inset-0 w-74 h-74 object-cover transition-opacity duration-300 opacity-0 hover:opacity-100"
          }
        />
      </div>
      <div className={"text-left"}>
        <h1 className={"text-3xl font-semibold"}>Jesus Alfonzo</h1>
        <h4
          className={
            "font-normal text-left dark:text-neutral-500 hover:text-blue-600 dark:hover:text-blue-500 transition"
          }
        >
          Software Developer
        </h4>
        <p
          className={
            "mt-2 text-left text-blue-600 dark:text-blue-500 align-middle font-semibold"
          }
        >
          Estudios:
        </p>
        <span className={"text-sm inline"}>TSU Informática</span>
        <p
          className={
            "mt-2 text-left align-middle text-blue-600 dark:text-blue-500 font-semibold"
          }
        >
          Ubicación:
        </p>
        <span className={"text-sm inline"}>Caracas | Venezuela</span>
        <p
          className={
            "mt-2 text-left align-middle text-blue-600 dark:text-blue-500 font-semibold"
          }
        >
          Trabajo en:
        </p>{" "}
        <span className={"text-sm inline"}>
          Instituto de Inmunologia Dr. Nicolas E. Bianco
        </span>
        <div className={"mt-4 flex items-center gap-2"}>
          <a
            href="https://www.instagram.com/jesus_alfxnzor/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            className="inline-block w-6 h-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              aria-hidden="true"
              className="w-6 h-6 text-gray-800 dark:text-white hover:text-blue-600 transition"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <span className="text-gray-400 text-xl">|</span>

          <a
            href="https://github.com/jesusalfonzo"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            className="inline-block w-6 h-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              aria-hidden="true"
              className="w-6 h-6 text-gray-800 dark:text-white hover:text-blue-600 transition"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.006 2a9.85 9.85 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.05 10.05 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.7 2.7 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.08 2.08 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.02 4.02 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.02 4.02 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.47 2.47 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.47 10.47 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.85 9.85 0 0 0 12.007 2Z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <span className="text-gray-400 text-xl">|</span>

          <a
            href="https://www.linkedin.com/in/jesusalfonzo/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            className="inline-block w-6 h-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              aria-hidden="true"
              className="w-6 h-6 text-gray-800 dark:text-white hover:text-blue-600 transition"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606"
                clipRule="evenodd"
              />
              <path d="M7.2 8.809H4V19.5h3.2z" />
            </svg>
          </a>
          <ContactButton
            href={"mailto:jesusalfonzo.code@gmail.com"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            Contact Me
          </ContactButton>
        </div>
      </div>
    </div>
  );
}
