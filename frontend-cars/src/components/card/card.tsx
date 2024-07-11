import "./card.css";

interface CardProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    idCar: any,
    nameCar: string,
    brandCar: string,
    yearCar: number,
    powerCar: number,
    imgCar: string,
    valueCar: number
    onRemove: (idCar: string) => void
}

export function Card({ idCar, nameCar, brandCar, yearCar, powerCar, imgCar, valueCar, onRemove } : CardProps) {
    return (
        <div className="card">
            <img src={imgCar}/>
            <h2>{nameCar}</h2>
            <p><b>Marca: </b>{brandCar}</p>
            <p><b>Ano: </b>{yearCar}</p>
            <p><b>Potência(HP): </b>{powerCar}</p>
            <p><b>Preço: </b>{valueCar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            <a className="btn-remove" onClick={() => onRemove(idCar)}>Remover</a>
        </div>
    );      
 }