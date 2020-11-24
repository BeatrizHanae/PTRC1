/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback } from 'react';
import {useHistory} from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Container, DivFormCad, DivImgCad, DivTitulo } from './styles';
import IconCadastro from '../../assets/IconCadastro.png';
import { cadastro } from '../../services/ClientServices';
import ButtonForm from '../../components/ButtonForm';

const schema = Yup.object({
  NOME: Yup.string().required('Este campo é obrigatório!'),
  USERNAME: Yup.string().required('Este campo é obrigatório!'),
  CPF: Yup.string().length(11, 'O CPF deve possuir 11 caracteres'),
  SENHA: Yup.string()
    .min(6, 'A senha deve conter no minimo 6 caracteres')
    .required('Este campo é obrigatório!'),
});

const Cadastro = () => {
  const history = useHistory();
  const submitToApi = useCallback(async data => {
    try{
      await cadastro(data);
      history.push('/Sucesso');
    } catch{
      history.push('/Fracasso');
    }
  }, []);
  return (
    <Container>
      <DivTitulo>
        <h1>Cadastro</h1>
        <h3>Bem vindo!</h3>
      </DivTitulo>
      <DivFormCad>
        <Formik
          onSubmit={submitToApi}
          initialValues={{
            NOME: '',
            SENHA: '',
            USERNAME: '',
            CPF: '',
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
                Nome Completo:
                {errors.NOME && touched.NOME && <span>{errors.NOME}</span>}
                <input
                  type="text"
                  name="NOME"
                  onChange={handleChange}
                  value={values.NOME}
                  onBlur={handleBlur}
                  touched={touched.NOME}
                />
              </label>

              <label>
                Username:
                {errors.USERNAME && touched.USERNAME && (
                  <span>{errors.USERNAME}</span>
                )}
                <input
                  type="text"
                  name="USERNAME"
                  onChange={handleChange}
                  value={values.USERNAME}
                  onBlur={handleBlur}
                  touched={touched.USERNAME}
                />
              </label>

              <label>
                CPF/CNPJ:
                {errors.CPF && touched.CPF && <span>{errors.CPF}</span>}
                <input
                  type="text"
                  name="CPF"
                  onChange={handleChange}
                  value={values.CPF}
                  onBlur={handleBlur}
                  touched={touched.CPF}
                />
              </label>

              <label>
                Senha:
                {errors.SENHA && touched.SENHA && <span>{errors.SENHA}</span>}
                <input
                  type="password"
                  name="SENHA"
                  onChange={handleChange}
                  values={values.SENHA}
                  onBlur={handleBlur}
                  touched={touched.SENHA}
                />
              </label>
              <ButtonForm
                type="submit"
                className="btn btn-lg btn-primary btn-block"
                disabled={isSubmitting}
              >
                Finalizar
              </ButtonForm>
            </form>
          )}
        </Formik>
      </DivFormCad>

      <DivImgCad>
        <img src={IconCadastro} alt="Icone do cadastro" />
      </DivImgCad>

      <h2>Oferecemos a maior linha de produtos para a sua empresa.</h2>
    </Container>
  );
};

export default Cadastro;
