import { useEffect, useState } from 'react';
import { CoursesType } from '../../types';
import style from './Card.module.css';
import Progress from '../progress/Progress';
import useLocalStorage from '../../hooks/useLocalStorage';
import { ethers } from 'ethers';
import { SERVER } from '../../utils/constants';
import axios from 'axios';

const Card = ({
  img,
  name,
  percentage,
  contract,
  abi,
  address,
}: CoursesType) => {
  const [viewProgress, setViewProgress] = useState(false);
  const [isActive, setIsActive] = useLocalStorage('isactive', false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      if (address) {
        const rpcUrl = 'https://rpc-mumbai.maticvigil.com'; // Url de la red Mumbai
        const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
        const courseContract = new ethers.Contract(contract, abi, provider);
        console.log({ courseContract });
        // balanceOf Me dice si el usuario inicio Curso o no. Recibe un address como parameter
        const startedCourse = await courseContract.balanceOf(address);
        console.log({ startedCourse: startedCourse.toString() });
        if (startedCourse.toString() === '1') {
          console.log('OBTENIENDO USUARIO IPSF');
          //  Metodo para obtener token_id con el cual vamos a obtener la data del IPSF
          const owner_Id = await courseContract.ownerOf(address);
          console.log({ owner_Id: owner_Id.toString() });
          // tokenURI para obtener el endpoint de ipsf con la info del usuario en el curso. Recibe un tokenId como parameter
          const ipsfEndpoint = await courseContract.tokenURI(
            owner_Id.toString()
          );
          const data = await fetch(ipsfEndpoint);
          const user = await data.json();
          console.log({ user });
          setIsActive(true);
        }
      }
      setIsLoading(false);
    };
    getData();
  }, [address]);

  const set = () => {
    setViewProgress(!viewProgress);
  };

  // Si el usuario no tiene el curso, debe hacer una request para mintear el token
  const handleCourse = async () => {
    if (percentage !== '100%') {
      if (isActive) {
        setViewProgress(!viewProgress);
      } else {
        console.log('INICIO MINT');
        const payload = {
          address,
          courseAddress: contract,
        };
        console.log({ payload });

        try {
          const response = await fetch(
            'https://abf5-179-43-81-54.sa.ngrok.io/progress/mint',
            {
              method: 'POST',
              mode: 'no-cors',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload),
            }
          );
          const data = await response.json();

          console.log({ data });
        } catch (error) {
          console.log(error);
        }

        // setIsActive(true);
        // setViewProgress(true);
      }
    }
  };

  return (
    <div>
      <div className={style.card} onClick={handleCourse}>
        <img src={img} alt="" />
        <div className={style.data}>
          <h3>{isLoading ? 'Loading...' : isActive ? name : `Mint ${name}`}</h3>
        </div>
        <label htmlFor="">{percentage}</label>
      </div>
      {isActive && viewProgress && <Progress set={set} />}
    </div>
  );
};

export default Card;
