function Mybutton() {
    return (
        <button>Soy un botón</button>
    );
}

export default function Myapp() {
    return (
        <div>
            <h1>Bienvenido a mi aplicación</h1>
            <Mybutton />
        </div>
    )
}