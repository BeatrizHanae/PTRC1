import React from 'react';
import Img_Funcionario_Cadastro from '../../assets/Img_Funcionario_Cadastro.png';
import { Container,} from './styles';
import Button from '../../components/Button';

const FuncionarioCadastro = () => {
  return (
    <Container>
      <section>
        <img src={Img_Funcionario_Cadastro} />
        <div>
          <h1>Cadastrar</h1>
          <h1>Novo produto</h1>
        </div>
      </section>
      <section>
        <form>
          <div>
            <label>
              Nome do produto:
            <input type="text" />
            </label>
            <label>
              Código:
            <input type="text" />
            </label>
            <label>
              Valor:
            <input type="text" />
            </label>
          </div>
          <div>
            <label>
              Imagem:
            <input type="text" />
            </label>
            <label>
              Quantidade no estoque:
            <input type="text" />
            </label>
            <label>
              Valor a vista:
            <input type="text" />
            </label>
            
          </div>
          <Button>
            Cadastrar Produto
           </Button>
        </form>
        
      </section>
    </Container>

  );
};

export default FuncionarioCadastro;

