import { useEffect, useState } from "react";
import { CarData } from "../../interfaces/carData";
import { useCarDataMutate } from "../../hooks/useCarMutate";
//import "./modal.css";

interface InputProps {
    label: string;
    value: string | number;
    updateValue(value: any): void;
    type?: string;
}

interface ModalProps {
    closeModal(): void;
}

const Input = ({ label, value, updateValue, type = "text" }: InputProps) => {
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <input
                type={type}
                className="form-control"
                value={value}
                onChange={(event) => updateValue(event.target.value)}
                required
            />
        </div>
    );
};

export function CreateModal({ closeModal }: ModalProps) {
    const [nameCar, setNameCar] = useState("");
    const [brandCar, setBrandCar] = useState("");
    const [yearCar, setYearCar] = useState(0);
    const [powerCar, setPowerCar] = useState(0);
    const [imgCar, setImgCar] = useState("");
    const [valueCar, setValueCar] = useState(0);
    const { mutate, isSuccess, isLoading } = useCarDataMutate();

    const submit = () => {
        const carData: CarData = {
            nameCar,
            brandCar,
            yearCar,
            powerCar,
            imgCar,
            valueCar,
        };

        if (nameCar.trim() === "") {
            alert("Adicione o nome do carro");
            return;
        }

        if (brandCar.trim() === "" || brandCar.trim() === "Selecione") {
            alert("Adicione a marca do carro");
            return;
        }

        if (yearCar < 1900 || yearCar > 2025) {
            alert("Adicione o ano do carro");
            return;
        }

        if (valueCar <= 0) {
            alert("Adicione o valor do carro");
            return;
        }

        if (powerCar <= 0) {
            alert("Adicione a potência do carro");
            return;
        }

        if (imgCar.trim() === "") {
            alert("Adicione a imagem do carro");
            return;
        }
        mutate(carData);
    };

    useEffect(() => {
        if (!isSuccess) {
            return;
        }
        closeModal();
    }, [isSuccess]);

    return (
        <div className="modal fade show d-block" tabIndex={-1} role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Adicionar novo Carro</h5>
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={closeModal}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <Input label="Nome" value={nameCar} updateValue={setNameCar} />
                            <div className="mb-3">
                                <label className="form-label">Marca</label>
                                <select
                                    className="form-select"
                                    value={brandCar}
                                    onChange={(e) => setBrandCar(e.target.value)}
                                >
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
                            </div>
                            <Input label="Ano" value={yearCar} updateValue={setYearCar} type="number" />
                            <Input label="Valor" value={valueCar} updateValue={setValueCar} type="number" />
                            <Input label="Potência (HP)" value={powerCar} updateValue={setPowerCar} type="number" />
                            <Input label="Imagem (URL)" value={imgCar} updateValue={setImgCar} type="text" />
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" onClick={closeModal}>Fechar</button>
                        <button type="button" className="btn btn-outline-success" onClick={submit}>
                            {isLoading ? "Carregando..." : "Adicionar"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
