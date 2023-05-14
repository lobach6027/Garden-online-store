import React from "react";
import s from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocation, faClock} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className={s.wrapper_footer}>
      <div className={s.contacts}>
        <div className={s.contacts_block}>
            <h3>Contacts</h3>
            <a className={s.tel} href="tel:+499999999999"> <FontAwesomeIcon icon={faPhone}/> +49 999 999 99 99</a>
        </div>
        <div  className={s.contacts_block}>
            <h3>Address</h3>
            <a href="https://www.google.com/search?q=telranDE"><FontAwesomeIcon icon={faLocation}/> Linkstraße 2/8 Etage, 10785 Berlin, Deutschland</a>
        </div>
        <div  className={s.contacts_block}>
          <h3>Shop hours</h3>
          <p> <FontAwesomeIcon icon={faClock}/> 24 hours a day</p>
        </div>
      </div>
      <div className={s.maps}>
        <iframe className={s.current_map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4092271598806!2d13.370173793367387!3d52.50793280001194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sTel-Ran.de%20GmbH!5e0!3m2!1sru!2sde!4v1683197194602!5m2!1sru!2sde"
          allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className={s.social}>
        <a href="https://www.facebook.com/telranDE/">
          <img src="/images/facebook.png" alt="instagram" />
        </a>
        <a href="https://www.linkedin.com/school/tel-ran-de/about/">
          <img src="/images/linkedln.png" alt="whatsAp" />
        </a>
        <a href="https://www.instagram.com/telran.de/">
          <img src="/images/twiter.png" alt="whatsAp" />
        </a>
      </div>
    </div>
  );
}