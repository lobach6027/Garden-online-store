import React from "react";
import s from "./style.module.css";

export default function Footer() {
  return (
    <div className={s.wrapper}>
      <div className={s.info}>
        <div className={s.contacts}>
          <h3>Contacts</h3>
          <div >
            <a className={s.tel} href="tel:+499999999999">+49 999 999 99 99</a>
          </div>
          <div className={s.social}>
            <a href="https://www.instagram.com/telran.de/">
              <img src="/images/insta-icon.png" alt="instagram" />
            </a>
            <a href="https://wa.me/915735989554">
              <img src="/images/whatsap-icon.png" alt="whatsAp" />
            </a>
          </div>
        </div>
        <div className={s.address}>
          <h3>Address</h3>
          <p><a className={s.adress_link} href="https://www.google.com/search?q=telranDE">Linkstraße 2/8 Etage, 10785 Berlin, Deutschland</a></p>
          <div>
            <p className={s.work_info}>Working Hours:</p>
            <p className={s.work_hours}>24 hours a day</p>
          </div>
        </div>
      </div>
      <div className={s.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4090423569482!2d13.372850651341471!3d52.507936144776664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sTel-Ran.de%20GmbH!5e0!3m2!1sru!2sde!4v1680374560879!5m2!1sru!2sde" width="100%" height="525"  padding = '20px' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}
