import {useEffect, useState} from "react";
import {ICar} from "../interfaces/carInterface";
import {carService} from "../services/carService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";

const CarContainer = () => {
    const [cars, setCars] = useState<ICar[]>([])
    const [trigger, setTrigger] = useState<boolean>(null)
    const [carForUpdate, setCarForUpdate] = useState<ICar>(null)

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger]);

    const changeTrigger = () => {
        setTrigger(prevState => !prevState)
    }

    return (
        <div>
            <CarForm changeTrigger={changeTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} changeTrigger={changeTrigger}/>
        </div>
    );
};

export {CarContainer};