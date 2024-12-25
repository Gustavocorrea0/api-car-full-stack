import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { useCarData } from './hooks/useCarData'
import { CreateModal } from './components/modal/modal';
import { useCarRemove } from './hooks/useCarRemove';

function App() {
  const { data } = useCarData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const carRemove = useCarRemove();

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
  }

  const handleRemoveCar = (idCar: string) => {
    console.log("The id of car is: ", idCar)
    try {
      carRemove.mutate(idCar);
    } catch (error) {
      console.error()
    }
    
  }

  return (
    <div className='container'>
      <h1 className="fw-bolder fs-1 text-center" style={{marginTop: '5%'}}>API CARS</h1>

      <div className="container text-center">
        <div className="row">
          <div className="col" style={{ display: "grid", gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '1%'}}>
            {data?.map(carData =>
              <Card
                key={carData.idCar}
                idCar={carData.idCar}
                brandCar={carData.brandCar}
                nameCar={carData.nameCar}
                yearCar={carData.yearCar}
                powerCar={carData.powerCar}
                imgCar={carData.imgCar}
                valueCar={carData.valueCar}
                onRemove={handleRemoveCar}
              />
            )}
          </div>
        </div>
      </div>

      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <button onClick={handleOpenModal}>Novo</button>
      <div className='endScreean'></div>
    </div>
  )
}

export default App