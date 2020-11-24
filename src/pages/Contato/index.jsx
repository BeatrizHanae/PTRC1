import React, { useCallback  } from 'react';
import {useHistory} from 'react-router-dom';
import {
  Container,
  DivFormCTT,
  DivIcon,
  DivImgCTT,
  Divmapa,
  Divagrupa,
} from './styles';
import IconEmail from '../../assets/IconEmail.png';
import IconFacebook from '../../assets/IconFacebook.png';
import IconInstagram from '../../assets/IconInstagram.png';
import IconLocalizacao from '../../assets/IconLocalizacao.png';
import IconTelefone from '../../assets/IconTelefone.png';
import IconWhatsapp from '../../assets/IconWhatsapp.png';
import ImgMapa from '../../assets/ImgMapa.png';
import ButtonForm from '../../components/ButtonForm';
//import LinhasImg from '../../components/LinhasImg';
import { contato } from '../../services/ClientServices';
import * as Yup from 'yup';
import { Formik } from 'formik';

const contatos = [
  {
    img: IconWhatsapp,
    meio: '(61) 98130-0873',
  },
  {
    img: IconEmail,
    meio: 'contato@nihon.com',
  },
  {
    img: IconTelefone,
    meio: '(61) 3877-2496',
  },
  {
    img: IconFacebook,
    meio: '@nihon',
  },
  {
    img: IconInstagram,
    meio: '@nihon',
  },
];
const schema = Yup.object({
  NOME: Yup.string().required('Este campo é obrigatório!'),
  EMAIL: Yup.string().email().required('Este campo é obrigatório'),
  MENSAGEM: Yup.string().required('Por favor digite uma mensagem.'),
  TELEFONE: Yup.number().min(11).required('Por favor só números.'),
});

const Contato = () => {
  const history = useHistory();
  const submitToApi = useCallback(async data => {
      try{
        await contato(data);
        history.push('/Sucesso');
      } catch{
        history.push('/Fracasso');
      }
  }, []);
  return (
    <Container>
      <h1>Contato</h1>
      <Divagrupa>
        <DivFormCTT>
          <Formik
            onSubmit={submitToApi}
            initialValues={{
              NOME: '',
              EMAIL: '',
              MENSAGEM: '',
              TELEFONE: '',
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
                  Nome e Sobrenome:
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
                  Email:
                  {errors.EMAIL && touched.EMAIL && <span>{errors.EMAIL}</span>}
                  <input
                    type="mail"
                    name="EMAIL"
                    onChange={handleChange}
                    value={values.EMAIL}
                    onBlur={handleBlur}
                    touched={touched.EMAIL}
                  />
                </label>

                <label>
                  Sua mensagem:
                  {errors.MENSAGEM && touched.MENSAGEM && (
                    <span>{errors.MENSAGEM}</span>
                  )}
                  <input
                    type="text"
                    name="MENSAGEM"
                    onChange={handleChange}
                    value={values.MENSAGEM}
                    onBlur={handleBlur}
                    touched={touched.MENSAGEM}
                  />
                </label>

                <label>
                  Telefone:
                  {errors.TELEFONE && touched.TELEFONE && (
                    <span>{errors.TELEFONE}</span>
                  )}
                  <input
                    type="number" min="0" step="1"
                    name="TELEFONE"
                    onChange={handleChange}
                    values={values.TELEFONE}
                    onBlur={handleBlur}
                    touched={touched.TELEFONE}
                  />
                </label>
                <ButtonForm
                  id="teste"
                  type="submit"
                  className="btn btn-lg btn-primary btn-block"
                  disabled={isSubmitting}
                >
                  Enviar
                </ButtonForm>
              </form>
            )}
          </Formik>
        </DivFormCTT>

        <DivImgCTT>
          {contatos.map(contato => (
            <DivIcon>
              <img src={contato.img} alt="Icone" />
              <p> {contato.meio} </p>
            </DivIcon>
          ))}
          <DivIcon>
            <img src={IconLocalizacao} alt="Icone localização" />
            <Divmapa>
              <img src={ImgMapa} alt="Icone" />
            </Divmapa>
          </DivIcon>
          <p>
            Endereço: SCRN 712/713 <br />
            Bloco C, Loja 52 <br />
            Brasília - DF
          </p>
        </DivImgCTT>
      </Divagrupa>
    </Container>
  );
};

export default Contato;
