//import "./card.css";

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

export function Card({ idCar, nameCar, brandCar, yearCar, powerCar, imgCar, valueCar, onRemove }: CardProps) {
    return (
        <div className="col-20 col-sm-20 col-lg-16" style={{ width: '100%', marginTop: '20%'}}>
            <div className="card h-150">
                <img
                    src={imgCar}
                    className="card-img-top"
                    alt={`${nameCar}`}
                    style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                    }}
                />
                <div className="card-body">
                    <h5 className="card-title">{nameCar}</h5>
                    <p className="card-text">Marca: {brandCar}</p>
                    <p className="card-text">Ano: {yearCar}</p>
                    <p className="card-text">Potência: {powerCar}</p>
                    <p className="card-text">Valor: {valueCar}</p>
                    <button type="button" className="btn btn-danger" style={{ width: '100%' }}>Remover</button>
                </div>
            </div>
        </div>
    );
}
