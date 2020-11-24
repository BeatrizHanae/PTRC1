import React, { useCallback } from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import ImgOrcamento from '../../assets/ImgOrcamento.png';
import {Container, DivAgrupa, DivUm} from './styles';
import { orcamento } from '../../services/ClientServices';
import ButtonForm from '../../components/ButtonForm';

const schema = Yup.object({
  PRODUTOS: Yup.string().required('Este campo é obrigatório!'),
  PAGAMENTOS: Yup.string().required('Este campo é obrigatório!'),
  CONTATO: Yup.string().required('O CPF deve possuir 11 caracteres'),
});

const Orcamento = () => {
  const history = useHistory();
  const submitToApi = useCallback(async data => {
      try {
        await orcamento(data);
        history.push('/sucesso');
      } catch (err) {
        history.push('/fracasso');
      }
    },
    [history],
  []);
  return(
    <Container>
      <h1>Orçamento</h1>
      <DivAgrupa>
        <DivUm>
          <Formik
            onSubmit={submitToApi}
            initialValues={{
              PRODUTOS: '',
              PAGAMENTOS: '',
              CONTATO: '',
            }}
            validationSchema={schema}
          >
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
                <label>
                  Insira aqui o nome dos produtos que deseja:
                  {errors.PRODUTOS && touched.PRODUTOS && <span>{errors.PRODUTOS}</span>}
                  <textarea rows="4" cols="50" style={{width:'100%'}}
                    type="text"
                    name="PRODUTOS"
                    onChange={handleChange}
                    value={values.PRODUTOS}
                    onBlur={handleBlur}
                    touched={touched.PRODUTOS}
                  />
                </label>
                <label>
                Insira aqui o método de pagamento:
                {errors.PAGAMENTOS && touched.PAGAMENTOS && <span>{errors.PAGAMENTOS}</span>}
                <input
                    type="text"
                    name="PAGAMENTOS"
                    onChange={handleChange}
                    value={values.PAGAMENTOS}
                    onBlur={handleBlur}
                    touched={touched.PAGAMENTOS}
                  />
                </label>
                <label>
                Insira seu telefone ou seu e-mail:
                {errors.CONTATO && touched.CONTATO && <span>{errors.CONTATO}</span>}
                <input 
                  type="text"
                  name="CONTATO"
                  onChange={handleChange}
                  value={values.CONTATO}
                  onBlur={handleBlur}
                  touched={touched.CONTATO}
                  />
                </label>
                <br/>
                <ButtonForm
                type="submit"
                className="btn btn-lg btn-primary btn-block"
                disabled={isSubmitting}
                >
                  Enviar
                </ButtonForm>
              </form>
            )}
          </Formik>
        </DivUm>
        <div>
          <img src={ImgOrcamento} alt="ilustração orçamento"/>
        </div>
        
      </DivAgrupa>
      
    </Container>

  )
}

export default Orcamento;
