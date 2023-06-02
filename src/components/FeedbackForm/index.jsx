import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshakeSimple} from "@fortawesome/free-solid-svg-icons";
import s from './style.module.css'
import { toast } from "react-toastify";

export default function FeedbackForm({setModal}) {
  const { register, handleSubmit, formState: { errors },} = useForm();
  const onSubmit = (data) => {
    setModal(false);
    toast.success('Thanks for your feedback', {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    console.log(data);
  };

  return (
    <form className={s.fb_form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.fb_title} >
        <p><span><FontAwesomeIcon icon={faHandshakeSimple}/></span> Help us improve</p>
      </div>
      <div className={s.fb_inputs}>
        <div className={s.fb_input}>
          <label htmlFor="name">Name</label>
          <input {...register("name", { required: true })} />
          {errors.name && <p>This field is required.</p>}
        </div>
        <div className={s.fb_input}>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <p>Please enter a valid email.</p>}
        </div>
        <div className={s.fb_text}>
          <label htmlFor="message">Message</label>
          <textarea className={s.fb_textarea}
            {...register("message", {
              required: true,
              minLength: 10,
              maxLength: 200,
            })}
          />
          {errors.message && <p>This field is required.</p>}
          {errors.message?.type === "minLength" && (
            <p>The minimum message length is 10 characters.</p>
          )}
          {errors.message?.type === "maxLength" && (
            <p>The maximum message length is 200 characters.</p>
          )}
        </div>
      </div>
      <button onSubmit={onSubmit} className={s.fb_btn} type="submit">SEND</button>
    </form>
  );
}
