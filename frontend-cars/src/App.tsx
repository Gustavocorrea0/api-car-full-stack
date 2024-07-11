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
      <h1>API CARS</h1>
      <div className='card-grid'>
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
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <button onClick={handleOpenModal}>Novo</button>
      <div className='endScreean'></div>
    </div>
  )
}

export default App
