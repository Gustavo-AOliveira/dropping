import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Footer } from '../../components/footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

  function AtualizaProduto(produtoId, body) {
    const navigate = useNavigate();

    const { id } = useParams();

    async function buscarProduto() {
      let r = await axios.get('http://localhost:3000/api/products/' + id);

      setBrand(r.data.brand);
      setName(r.data.name);
      setSize(r.data.size);
      setColor(r.data.color);
      setGender(r.data.gender);
    }

    useEffect(() => {
      if (id) {
        buscarProduto();
      }
    }, [])

      const [brand, setBrand] = useState('');
      const [name, setName] = useState('');
      const [size, setSize] = useState('');
      const [color, setColor] = useState('');
      const [image, setImage] = useState('');
      const [gender, setGender] = useState('');

      const atualizaProduto = async () => {  
        const body = {
            brand: brand,
            name: name,
            size: size,
            color: color,
            image: image,
            gender: gender
        }
        
        try {
          await axios.put(`http://localhost:3000/api/products/${id}`, body);
          alert("Atualizado com sucesso");
        } catch (error) {
          console.error('Erro ao atualizar produto:', error);
        }
        
      
      };
      const handleRedirect = () => {
        navigate("/menu");
    }
      return (
          <div className={ styles.atualizaProdutoContainer }>
      
            <section className={ styles.s1 }>
            <i className="fa-solid fa-angle-left" onClick={ handleRedirect }></i>
              <div className={ styles.s1Content }>
                
                  <h1 className={ styles.titulo }>Atualizar Sneaker</h1>

                  <img className={ styles.s1Img } src="../assets/imgs/logo-dropping.svg" alt="" />
      
                  <form>
                      
                      <label className={ styles.inputImgEmail }>
                          <input type="text" value={brand} onChange={e => setBrand(e.target.value)}  id="brand" name="brand" placeholder="Brand" required={true} />
                      </label>
                      <br /><br />

                      <label className={ styles.inputImgEmail }>
                          <input type="text" value={name} onChange={e => setName(e.target.value)} id="name" name="name" placeholder="Name" required={true} />
                      </label>
                      <br /><br />
                      
                      <label className={ styles.inputImgEmail }>
                          <input type="text" value={size} onChange={e => setSize(e.target.value)} id="size" name="size" placeholder="Size" required={true} />
                      </label>
                      <br /><br />
      
                      <label className={ styles.inputImgEmail }>
                          <input type="text" value={color} onChange={e => setColor(e.target.value)}  id="color" name="color" placeholder="Color" required={true} />
                      </label>
                      <br /><br />

                      <label className={ styles.inputImgEmail }>
                          <input type="text" value={gender} onChange={e => setGender(e.target.value)}  id="gender" name="gender" placeholder="Gender" required={true} />
                      </label>
                      <br /><br />
                      
                      
                      <br /><br />
                      
                      <input className= { styles.customButton } onClick={ atualizaProduto } type="submit" value="Update" />
                  </form>
              </div>
            </section>
      
            <Footer />
          </div>
        );
      }

export { AtualizaProduto };