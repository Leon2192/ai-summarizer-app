import { logo } from "../assets"

const Hero = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
                <button className="black_btn" type="button" onClick={() => window.open('https://github.com/Leon2192')}>
                    Github
                </button>
            </nav>
            <h1 className="head_text">
                Extraer y resumir artículos con <br className="max-md:hidden" />
                <span className="orange_gradient">OpenAI GPT-4</span>
            </h1>

            <h2 className="desc">
                Simplifica tu lectura con Summize, un resumidor de artículos de código abierto que transforma artículos largos en resúmenes claros y concisos.
                Ingresa la URL de la web de la que deseas extraer su texto.
            </h2>
        </header>
    )
}

export default Hero