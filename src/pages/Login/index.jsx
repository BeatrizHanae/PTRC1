import React, { useCallback } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Container, DivForm, DivImg, Divagrupa } from './styles';
import ImgHomeLogin from '../../assets/imgHomeLogin.png';
import ButtonForm from '../../components/ButtonForm';
import { useAuth } from '../../hooks/useAuth';

const schema = Yup.object({
  USERNAME: Yup.string().required('Este campo é obrigatório!'),
  SENHA: Yup.string().required('Este campo é obrigatório!'),
});

const Login = () => {
  const { signIn } = useAuth();
  const callToApi = useCallback(
    async data => {
      await signIn(data);
    },
    [signIn],
  );
  return (
    <Container>
      <h1>Login</h1>
      <h3>Bem vindo de volta!</h3>
      <Divagrupa>
        <DivForm>
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
                <h5>
                  {' '}
                  Não tem cadastro?
                  <a href="/Cadastro"> Cadastre-se aqui</a> !
                </h5>
              </form>
            )}
          </Formik>
        </DivForm>
        <DivImg>
          <img src={ImgHomeLogin} alt="Imagen ilustrativa" />
        </DivImg>
      </Divagrupa>
    </Container>
  );
};
export default Login;
