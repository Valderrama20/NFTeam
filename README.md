## DOCUMENTACION NFT NOMBRE DE LA APP

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [Vite Js][Vite-url]
- [Cedalio][Cedalio-url]

### CEDALIO SETUP

La configuracion de la base de datos de CEDALIO, se realizo para bases de datos individuales por usuario. Es decir, cada usuario que se conecta por primera vez, deploya una base de datos con sus datos a la red de Polygon Mumbai

### Hooks

- useWallet
- useLocalStorage

```typescript
const { handleConnect, shortAddress, address, isLoading, isConnected } =
  useWallet();
```

- handleConnect: Maneja el connect y disconnect
- shortAddress: La wallet address resumida; 0x43...0000
- address: La wallet address completa
- isLoading: Un estado que dice si esta conectando o desconectando activo
- isConnected: Un Boolean

```typescript
function MyComponent() {
  const [count, setCount] = useLocalStorage<number>('count', 0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```

El hook useLocalStorage acepta dos parámetros:

- key: Una cadena que se utiliza para identificar el valor en el localStorage.
- initialValue: Un valor opcional que se utiliza si no hay ningún valor en el localStorage.
  El hook devuelve una tupla con dos elementos:

El valor almacenado en el localStorage.
Una función para actualizar ese valor.
