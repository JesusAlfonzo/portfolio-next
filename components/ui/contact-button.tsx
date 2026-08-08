interface props {
    href: string,
    target: string,
    rel: string,
    children: string,
}

export function ContactButton(props: props) {
    return (
        <a className="group relative inline-block focus:ring-3 focus:outline-hidden" href={props.href}
           target={props.target}
           rel={props.rel}>
  <span
      className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-indigo-400 dark:bg-blue-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
  ></span>

            <span
                className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest dark:text-white uppercase"
            >
    {props.children}
  </span>
        </a>
    )
}