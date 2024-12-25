import { useEffect, useState } from "react";
import { CarData } from "../../interfaces/carData";
import { useCarDataMutate } from "../../hooks/useCarMutate";
//import "./modal.css";

interface InputProps {
    label: string,
    value: string | number
    updateValue(value: any): void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)} required></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps) {
    const [nameCar, setNameCar] = useState("");
    const [brandCar, setBrandCar] = useState("");
    const [yearCar, setYearCar] = useState(0);
    const [powerCar, setPowerCar] = useState(0);
    const [imgCar, setImgCar] = useState("");
    const [valueCar, setValueCar] = useState(0);
    const { mutate, isSuccess, isLoading } = useCarDataMutate()

    const submit = () => {
        const carData: CarData = {
            nameCar,
            brandCar,
            yearCar,
            powerCar,
            imgCar,
            valueCar
        }

        if (nameCar.trim() === '') {
            alert('Adicione o nome do carro')
            return;
        }

        if (brandCar.trim() === '' || brandCar.trim() === 'Selecione') {
            alert('Adicione a marca do carro')
            return;
        }

        if (yearCar < 1900 || yearCar > 2025) {
            alert('Adicione o ano do carro')
            return;
        }

        if (valueCar <= 0) {
            alert('Adicione o valor do carro')
            return;
        }

        if (powerCar <= 0) {
            alert('Adicione a potêcia do carro')
            return;
        }

        if (imgCar.trim() === '') {
            alert('Adicione a imagem do carro')
            return;
        }





        mutate(carData);
    }

    useEffect(() => {
        if (!isSuccess) {
            return;
        }
        closeModal();
    }, [isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <button onClick={closeModal} className="btn-close">X</button>
                <h2>Adicionar novo Carro</h2>
                <form className="input-container">
                    <Input label="Nome" value={nameCar} updateValue={setNameCar}></Input>
                    <label> Marca
                        <select className="list-brand" value={brandCar} onChange={(e) => setBrandCar(e.target.value)}>
                            <option value="Selecione">Selecione</option>
                            <option value="Audi">Audi</option>
                            <option value="BMW">BMW</option>
                            <option value="Chevrolet">Chevrolet</option>
                            <option value="Dodge">Dodge</option>
                            <option value="Ford">Ford</option>
                            <option value="Honda">Honda</option>
                            <option value="Hyunday">Hyunday</option>
                            <option value="JAC">JAC</option>
                            <option value="Jaguar">Jaguar</option>
                            <option value="Jeep">Jeep</option>
                            <option value="KIA">KIA</option>
                            <option value="Land Rover">Land Rover</option>
                            <option value="Lexus">Lexus</option>
                            <option value="Mercedes Benz">Mercedes Benz</option>
                            <option value="Mitsubishi">Mitsubishi</option>
                            <option value="Nissan">Nissan</option>
                            <option value="Peugeot">Peugeot</option>
                            <option value="Porsche">Porsche</option>
                            <option value="Toyota">Toyota</option>
                            <option value="Volkswagem">Volkswagem</option>
                        </select>
                    </label>
                    <Input label="Ano" value={yearCar} updateValue={setYearCar}></Input>
                    <Input label="Valor" value={valueCar} updateValue={setValueCar}></Input>
                    <Input label="Potência(HP)" value={powerCar} updateValue={setPowerCar}></Input>
                    <Input label="Imagem(URL)" value={imgCar} updateValue={setImgCar}></Input>
                </form>
                <button onClick={submit} className="btn-submit">{isLoading ? "Carregando..." : "Adicionar"}</button>
            </div>
        </div>
    )
}