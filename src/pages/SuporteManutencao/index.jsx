import React, { useCallback } from 'react';
import { DivFormT , Container, DivImgT } from './styles';
import ImgTreinamento from '../../assets/ImgTreinamento.png';
import ButtonForm from '../../components/ButtonForm';
import { suporteManutencao } from '../../services/ClientServices';
import { Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object({
  DATA: Yup.string().required('Este campo é obrigatório'),
  HORA: Yup.string().required('Este campo é obrigatório'),
  NOME_CLIENTE: Yup.string().required('Este campo é obrigatório'),
  NOME_EMPRESA: Yup.string().required('Este campo é obrigatório'),
  CPF: Yup.string().length(11, 'O CPF deve possuir 11 caracteres'),
  DESCRICAO: Yup.string().required('Este campo é obrigatório'),
})

const SuporteManutencao = () => {
  const submitToApi = useCallback(async data => {
    await suporteManutencao(data);
  }, []);
  return( 
    <Container>
    <DivFormT>
      <Formik 
        onSubmit={submitToApi}
        initialValues={{
          DATA: '',
          HORA: '',
          NOME_CLIENTE: '',
          NOME_EMPRESA: '',
          CPF: '',
          DESCRICAO: '',
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
        <DivImgT>
        <h2>
          Manutenção
        </h2>
        <div>
        <h3> 
          Agendar manutenção:
        </h3>
          <input 
            type="date"
            name="DATA"
            onChange={handleChange}
            values={values.DATA}
            onBlur={handleBlur}
            touched={touched.DATA}
          />
          <input 
            type="time"
            name="HORA"
            onChange={handleChange}
            values={values.HORA}
            onBlur={handleBlur}
            touched={touched.HORA}/>
          <img src={ImgTreinamento} alt="" />
        </div>
      </DivImgT>
              <label>
                Cliente:
                {errors.NOME_CLIENTE && touched.NOME_CLIENTE && <span>{errors.NOME_CLIENTE}</span>}
                <input 
                  type="text"
                  name="NOME_CLIENTE"
                  onChange={handleChange}
                  value={values.NOME_CLIENTE}
                  onBlur={handleBlur}
                  touched={touched.NOME_CLIENTE}
              />
              </label>
              <label>
                Nome Fantasia/ da Empresa :
                {errors.NOME_EMPRESA && touched.NOME_EMPRESA && (
                  <span>{errors.NOME_EMPRESA}</span>
                )}
                <input
                  type="text"
                  name="NOME_EMPRESA"
                  onChange={handleChange}
                  value={values.NOME_EMPRESA}
                  onBlur={handleBlur}
                  touched={touched.NOME_EMPRESA}
                />
              </label>
              <label>
                CPF/CNPJ :
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
                Descrição/ Qual equipamento :
                {errors.DESCRICAO && touched.DESCRICAO && <span>{errors.DESCRICAO}</span>}
                <input
                  type="text"
                  name="DESCRICAO"
                  onChange={handleChange}
                  values={values.DESCRICAO}
                  onBlur={handleBlur}
                  touched={touched.DESCRICAO}
                />
              </label>
              <ButtonForm
                type="submit"
                className="btn btn-lg btn-primary btn-block"
                disabled={isSubmitting}
              >
                Solicitar
              </ButtonForm>
            </form>
         )}
        </Formik>
      </DivFormT>
    </Container>
  );
};
export default SuporteManutencao;
