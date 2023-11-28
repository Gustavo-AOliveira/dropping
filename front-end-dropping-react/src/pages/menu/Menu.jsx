import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProductManagement() {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
}
  const [listaProdutos, setListaProdutos] = useState([]);

  async function listarProdutos() {
    try {
      let resposta = await axios.get('http://localhost:3000/api/products');
      let produtos = resposta.data;
  
      setListaProdutos(produtos);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  }

  const handleProductDelete = async (id) => {
    await axios.delete(`http://localhost:3000/api/products/${id}`).then(() => alert("Produto deletado!")).catch(error => console.log(error));
    window.location.reload();
  }
  
  useEffect(() => {
    listarProdutos();
  }, []);


  return (
    <div className={ styles.menuContainer }>
      <div className={ styles.header }>
      <i className="fa-solid fa-angle-left" onClick={ handleRedirect }></i>
        <span>Product management</span>
        <a href="/cadProduto">
            <button id="new">Add</button>
        </a>
        
      </div>

      <div className={ styles.divTable }>
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Brand</th>
              <th>Name</th>
              <th>Size</th>
              <th>Color</th>
              <th>Gender</th>
              <th>Update</th>
              <th>Delete</th>
              
            </tr>
          </thead>
          <tbody>
            {listaProdutos.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.brand}</td>
                <td>{item.name}</td>
                <td>{item.size}</td>
                <td>{item.color}</td>
                <td>{item.gender}</td>
                <th>
                  <a className={styles.acao} href={`/atualizaProduto/${item.id}`}>
                    Update
                  </a>
                </th>
                <th>
                  <a className={styles.acao} href="#" onClick={ () => handleProductDelete(item.id) }>
                    Delete
                  </a>
                </th>
              </tr>
            ))}
          </tbody>

          <tbody>
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export { ProductManagement };
