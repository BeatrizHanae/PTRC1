import React, { useCallback } from 'react';
import {useHistory} from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Img_Funcionario_Cadastro from '../../assets/Img_Funcionario_Cadastro.png';
import { Container,DivFormCad} from './styles';
import ButtonForm from '../../components/ButtonForm';
import { cadastroProduto } from '../../services/ClientServices';

const schema = Yup.object({
  NOME:Yup.string().required('Este campo é obrigatório!'),
  ID_PRODUCT: Yup.string()/*.integer('Por favor insira um número inteiro.')*/.required('Este campo é obrigatório.'),
  VALOR: Yup.string().required('Este campo é obrigatório!'),
  QUANTIDADE: Yup.string()/*.integer('Por favor insira um número inteiro.')*/.required('Este campo é obrigatório.'),
  IMAGEM: Yup.string().required('Este campo é obrigatório!')

})

const ProdutoCadastro = () => {
  const history = useHistory();
  const submitToApi = useCallback(async data => {    
      try {
        await cadastroProduto(data);
        history.push('/Sucesso');
      } catch (err) {
        history.push('/Fracasso');
      }
    },
    [history],
   []);
  return (
    <Container>
      <DivFormCad>
      <section>
        <img src={Img_Funcionario_Cadastro} alt=""/>
        <div>
          <h1>Cadastrar</h1>
          <h1>Novo produto</h1>
        </div>
      </section>
      <section>
      <Formik
         onSubmit={submitToApi}
         initialValues={{
           NOME: '',
           ID_PRODUCT: '',
           VALOR:'',
           QUANTIDADE:'',
           IMAGEM:'',
         }}
         validationSchema={schema}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Nome do produto:
              {errors.NOME && touched.NOME && <span>{errors.NOME}</span>}
            <input 
              type="text"
              name="NOME"
              onChange={handleChange}
              value={values.NOME}
              onBlur={handleBlur}
              touched={touched.NOME} />
            </label>
            <label>
              Código:
              {errors.ID_PRODUCT && touched.ID_PRODUCT && <span>{errors.ID_PRODUCT}</span>}
            <input 
              type="text"
              name="ID_PRODUCT"
              onChange={handleChange}
              value={values.ID_PRODUCT}
              onBlur={handleBlur}
              touched={touched.ID_PRODUCT} />
            </label>
            <label>
              Valor:
              {errors.VALOR && touched.VALOR && <span>{errors.VALOR}</span>}
            <input 
              type="text"
              name="VALOR"
              onChange={handleChange}
              value={values.VALOR}
              onBlur={handleBlur}
              touched={touched.VALOR} />
            </label>
            <label>
              Quantidade no estoque:
              {errors.QUANTIDADE && touched.QUANTIDADE && <span>{errors.QUANTIDADE}</span>}
            <input 
              type="text"
              name="QUANTIDADE"
              onChange={handleChange}
              values={values.QUANTIDADE}
              onBlur={handleBlur}
              touched={touched.QUANTIDADE} />
            </label>
          </div>
          <div>
            <label>
              Imagem:
              {errors.IMAGEM && touched.IMAGEM && <span>{errors.IMAGEM}</span>}
            <input 
              type="text"
              name="IMAGEM"
              onChange={handleChange}
              value={values.IMAGEM}
              onBlur={handleBlur}
              touched={touched.IMAGEM} />
            </label>
          </div>
          <ButtonForm
            type="submit"
            className="btn btn-lg btn-primary btn-block"
            disabled={isSubmitting}
          >
            Cadastrar Produto
           </ButtonForm>
        </form>
      )}
      </Formik>
      </section>
      </DivFormCad>
    </Container>

  );
};

export default ProdutoCadastro;

