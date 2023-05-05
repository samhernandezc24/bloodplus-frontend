export default function Home() {
  return (
    <>
      <div className="relative isolate flex items-center">
        <div className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath: `polygon(
                  74.8% 41.9%,
                  97.2% 73.2%,
                  100% 34.9%,
                  92.5% 0.4%,
                  87.5% 0%,
                  75% 28.6%,
                  58.5% 54.6%,
                  50.1% 56.8%,
                  46.9% 44%,
                  48.3% 17.4%,
                  24.7% 53.9%,
                  0% 27.9%,
                  11.9% 74.2%,
                  24.9% 54.1%,
                  68.6% 100%,
                  74.8% 41.9%
                )`,
            }}
          ></div>
        </div>
        <div className="h-[40px] hidden lg:flex w-full bg-gray-100 text-base py-2.5 sm:py-0 items-center justify-center flex-col sm:flex-row z-[100]">
          <p className="hidden leading-6 sm:block">
            <strong className="font-semibold">BloodPlus v0.1.0</strong>
            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
              <circle cx="1" cy="1" r="1" />
            </svg>
            Para poder acceder a la plataforma necesitas registrarte y seguir los requerimentos.
          </p>
          <a className="ml-2 justify-center active:scale-[.98] transition-transform inline-flex font-bold items-center outline-none focus:outline-none focus-visible:outline focus-visible:outline-link focus:outline-offset-2 leading-snug bg-rose-400 text-white hover:opacity-80 px-3.5 py-1 rounded-full" href="#" target="_blank">
            Regístrate ahora <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </>
  )
}
