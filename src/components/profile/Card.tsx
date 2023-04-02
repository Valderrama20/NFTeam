import { useEffect, useState } from 'react';
import { CoursesType } from '../../types';
import style from './Card.module.css';
import Progress from '../progress/Progress';
import useLocalStorage from '../../hooks/useLocalStorage';
import { ethers } from 'ethers';
import { RPC_URL, SERVER } from '../../utils/constants';
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
  const [isMinting, setIsMinting] = useState(false);

  const [IPSFValue, setIPSFValue] = useLocalStorage<{
    level: string;
    img: string;
  }>('ipsf', { level: '', img: '' });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        if (address) {
          // Url de la red Mumbai
          const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
          const courseContract = new ethers.Contract(contract, abi, provider);
          // balanceOf Me dice si el usuario inicio Curso o no. Recibe un address como parameter
          const startedCourse = await courseContract.balanceOf(address);
          if (startedCourse.toString() === '1') {
            //  Metodo para obtener token_id con el cual vamos a obtener la data del IPSF
            const token_id = await courseContract.tokenId(address);
            // tokenURI para obtener el endpoint de ipsf con la info del usuario en el curso. Recibe un tokenId como parameter
            const ipsfEndpoint = await courseContract.tokenURI(token_id);
            const { data } = await axios.get(ipsfEndpoint);
            setIPSFValue({ level: data.name, img: data.image });
            setIsActive(true);
          }
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
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
        setIsMinting(true);
        const payload = {
          address,
          courseAddress: contract,
        };
        const result = await axios.post(`${SERVER}/mint`, payload);
        if (result.status === 200) {
          // Url de la red Mumbai
          const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
          const courseContract = new ethers.Contract(contract, abi, provider);
          // balanceOf Me dice si el usuario inicio Curso o no. Recibe un address como parameter
          const startedCourse = await courseContract.balanceOf(address);
          if (startedCourse.toString() === '1') {
            //  Metodo para obtener token_id con el cual vamos a obtener la data del IPSF
            const token_id = await courseContract.tokenId(address);
            // tokenURI para obtener el endpoint de ipsf con la info del usuario en el curso. Recibe un tokenId como parameter
            const ipsfEndpoint = await courseContract.tokenURI(token_id);
            const { data } = await axios.get(ipsfEndpoint);
            setIPSFValue({ level: data.name, img: data.image });
            setIsActive(true);
            setViewProgress(true);
            setIsMinting(false);
          }
        }
      }
    }
  };

  return (
    <div>
      <div className={style.card} onClick={handleCourse}>
        <img src={img} alt="" />
        <div className={style.data}>
          {isMinting ? (
            <h3>Minting Token</h3>
          ) : (
            <h3>
              {isLoading ? 'Loading...' : isActive ? name : `Mint ${name}`}
            </h3>
          )}
        </div>
        <div className={style.progress}>
          <div className={style.progress_bar}>
            <div
              className={style.progresss}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <label htmlFor="">{percentage}%</label>
        </div>
      </div>
      {isActive && viewProgress && (
        <Progress image={IPSFValue?.img} level={IPSFValue?.level} set={set} />
      )}
    </div>
  );
};

export default Card;
