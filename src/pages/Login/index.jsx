import React, { useCallback } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Container, DivForm, DivImg } from './styles';
import ImgHomeLogin from '../../assets/imgHomeLogin.png';
import { login } from '../../services/ClientServices';
import ButtonForm from '../../components/ButtonForm';

const schema = Yup.object({
  USERNAME: Yup.string().required('Este campo é obrigatório!'),
  SENHA: Yup.string().required('Este campo é obrigatório!'),
});

const Login = () => {
  const callToApi = useCallback(async data => {
    await login(data);
  }, []);
  return (
    <Container>
      <DivForm>
        <h1>Bem vindo de volta!</h1>
        <Formik
          validationSchema={schema}
          onSubmit={callToApi}
          initialValues={{
            USERNAME: '',
            SENHA: '',
          }}
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
              <label htmlFor="username">
                Usuário:
                {errors.USERNAME && touched.USERNAME && (
                  <span>{errors.USERNAME}</span>
                )}
                <input
                  type="text"
                  name="USERNAME"
                  value={values.USERNAME}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              <label htmlFor="password">
                Senha:
                {errors.SENHA && touched.SENHA && <span>{errors.SENHA}</span>}
                <input
                  type="password"
                  name="SENHA"
                  value={values.SENHA}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              <ButtonForm disabled={isSubmitting}>Login</ButtonForm>
              <h3>Cadastre aqui!</h3>
            </form>
          )}
        </Formik>
      </DivForm>
      <DivImg>
        <img src={ImgHomeLogin} alt="Imagen ilustrativa" />
      </DivImg>
    </Container>
  );
};
export default Login;
