import type {NextPage} from 'next'
import s from '../styles/request.module.scss'
import {useForm} from "react-hook-form";
import {useState} from "react";
/**
 * Страница с формой завяки на игру
 *
 * @constructor
 */
const OnlineRequestPage: NextPage = () => {
  return (
      <div className={s.pageContainer}>
        <RequestForm />
      </div>
  )
}

export default OnlineRequestPage

export const RequestForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [disableSbmt, setDisableSbmt] = useState<boolean>(false);
  const [result, setResult] = useState<string>('');

  const resOk = 'Спасибо, что присоединились к нашему сообществу. До встречи на игре!';
  const resFail = 'Холе-е-е-ра! Никак мы, блин, не научимся! Сервис временно не работает, приносим свои искренние извинения!';

  const onSubmit = (data: any) => {
    // ToDo

    setDisableSbmt(true)
    console.log(data);

    const response = true;
    if (response) {
      setResult(resOk)
    } else {
      setResult(resFail)
    }
  }

  return (
      <div className={s.formHolder}>
        <h1>Оставить заявку</h1>
        { !result ?
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div>
                  <input {...register("name", { required: true })} placeholder="Имя" tabIndex={1}/>
                  {errors.name && <span>Обязательно для заполнения</span>}
                </div>
                <div>
                  <input {...register("nickName", { required: true })} placeholder="Ник" tabIndex={2}/>
                  {errors.nickName && <span>Обязательно для заполнения</span>}
                </div>
                <div>
                  <input {...register("phone", { required: true })} placeholder="Телефон" tabIndex={3}/>
                  {errors.phone && <span>Обязательно для заполнения</span>}
                </div>
                <div>
                  <input {...register("email", { required: true })} placeholder="E-mail" tabIndex={4}/>
                  {errors.email && <span>Обязательно для заполнения</span>}
                </div>
              </div>
              <input type="submit" value="" disabled={disableSbmt} tabIndex={5}/>
            </form>
        : <h2 className={result == resOk ? s.successText : s.errorText}>{ result }</h2>
        }

      </div>
  )
}
